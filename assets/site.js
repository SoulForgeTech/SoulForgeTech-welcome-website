/* SoulForge site behaviour. No dependencies. Every motion here reads its
   start from the live on-screen state (CSS transitions do this for us), so
   anything can be interrupted and reversed mid-flight. */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.remove('no-js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- language: zh-CN / en, remembered per visitor ---------- */
  function storedLang() {
    try { return localStorage.getItem('sf_lang'); } catch (e) { return null; }
  }
  function setLang(lang) {
    doc.lang = lang;
    try { localStorage.setItem('sf_lang', lang); } catch (e) { /* private mode */ }
    document.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
      b.dataset.current = lang === 'en' ? 'en' : 'zh';
      b.setAttribute('aria-label', lang === 'en' ? '切换到中文' : 'Switch to English');
    });
    document.querySelectorAll('img[data-src-en]').forEach(function (img) {
      if (!img.dataset.srcZh) img.dataset.srcZh = img.getAttribute('src');
      img.src = lang === 'en' ? img.dataset.srcEn : img.dataset.srcZh;
      var alt = lang === 'en' ? img.dataset.altEn : img.dataset.altZh;
      if (alt) img.alt = alt;
    });
    document.querySelectorAll('audio[data-src-en]').forEach(function (a) {
      if (!a.dataset.srcZh) a.dataset.srcZh = a.getAttribute('src');
      var want = lang === 'en' ? a.dataset.srcEn : a.dataset.srcZh;
      if (a.getAttribute('src') !== want) { a.pause(); a.setAttribute('src', want); }
    });
    if (typeof paintThemeButtons === 'function' && document.querySelector('[data-theme-toggle] [data-moon]')) {
      try { paintThemeButtons(); } catch (e) { /* not ready on first call */ }
    }
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.content;
  }
  var initial = storedLang() || (/^zh/i.test(navigator.language || '') ? 'zh-CN' : 'en');
  setLang(initial);
  document.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(doc.lang === 'en' ? 'zh-CN' : 'en'); });
  });

  /* ---------- light / dark: follows the system until the visitor picks one ---------- */
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  function isDark() {
    var t = doc.getAttribute('data-theme');
    return t ? t === 'dark' : darkQuery.matches;
  }
  function paintThemeButtons() {
    var dark = isDark();
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.dataset.mode = dark ? 'dark' : 'light'; // CSS turns the moon into the sun
      var en = doc.lang === 'en';
      b.setAttribute('aria-label', dark ? (en ? 'Switch to light' : '切换到浅色') : (en ? 'Switch to dark' : '切换到深色'));
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = getComputedStyle(document.body).backgroundColor;
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      // Picking the same thing the system already shows means "follow the system" again.
      if ((next === 'dark') === darkQuery.matches) {
        doc.removeAttribute('data-theme');
        try { localStorage.removeItem('sf_theme'); } catch (e) { /* private mode */ }
      } else {
        doc.setAttribute('data-theme', next);
        try { localStorage.setItem('sf_theme', next); } catch (e) { /* private mode */ }
      }
      paintThemeButtons();
    });
  });
  darkQuery.addEventListener('change', paintThemeButtons);
  paintThemeButtons();

  /* ---------- glass header: show its edge only once content slides under ---------- */
  var bar = document.querySelector('.topbar');
  if (bar) {
    var onScroll = function () { bar.classList.toggle('scrolled', window.scrollY > 4); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- top-bar scroll-spy: the section you're reading is highlighted ---------- */
  document.querySelectorAll('nav[data-spy]').forEach(function (nav) {
    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    function update() {
      var line = window.innerHeight * 0.35, active = -1;
      targets.forEach(function (el, i) { if (el && el.getBoundingClientRect().top <= line) active = i; });
      links.forEach(function (a, i) {
        if (i === active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
      });
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  });

  /* ---------- reveal on scroll, once ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- shelf: books rise onto the shelf one after another ---------- */
  document.querySelectorAll('.case').forEach(function (shelf) {
    var spines = shelf.querySelectorAll('.spine');
    spines.forEach(function (s, i) { s.style.setProperty('--i', i); });
    if (reduceMotion || !('IntersectionObserver' in window)) return;
    shelf.classList.add('pre');
    var so = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      so.disconnect();
      shelf.classList.add('in');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { shelf.classList.remove('pre'); });
      });
      // Once every book has landed, hover/press respond without the stagger.
      setTimeout(function () { shelf.classList.add('settled'); }, spines.length * 55 + 700);
    }, { threshold: 0.35 });
    so.observe(shelf);
  });

  /* ---------- a book pops out of its spine ---------- */
  var pop = null, openSpine = null;
  function closePop(restoreFocus) {
    if (!pop || !openSpine) return;
    var spine = openSpine;
    pop.classList.add('closing');
    pop.classList.remove('open');
    spine.setAttribute('aria-expanded', 'false');
    openSpine = null;
    if (restoreFocus) spine.focus({ preventScroll: true });
  }
  function placePop(spine) {
    var r = spine.getBoundingClientRect();
    var w = pop.offsetWidth, h = pop.offsetHeight, m = 12;
    var left = Math.min(Math.max(m, r.left + r.width / 2 - w / 2), window.innerWidth - w - m);
    var top = r.top - h - 14;
    if (top < 80) top = Math.min(r.bottom + 14, window.innerHeight - h - m);
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
    // Grow from the spine the reader touched, and go back into it.
    var ox = r.left + r.width / 2 - left;
    var oy = (top < r.top ? r.top + 24 : r.bottom - 24) - top;
    pop.style.transformOrigin = ox + 'px ' + oy + 'px';
  }
  function openPop(spine) {
    if (!pop) {
      pop = document.createElement('div');
      pop.className = 'book-pop';
      pop.setAttribute('role', 'dialog');
      document.body.appendChild(pop);
    }
    var lang = doc.lang === 'en' ? 'en' : 'zh';
    var d = spine.dataset;
    pop.setAttribute('aria-label', lang === 'en' ? d.titleEn : d.title);
    pop.innerHTML =
      '<img alt="" src="' + d.cover + '">' +
      '<div class="info"><span class="t"></span><span class="a"></span><span class="d"></span>' +
      '<a class="btn seal sm" href="' + (d.href || 'https://glossa.soulforgetech.com/shelf') + '"></a></div>';
    pop.querySelector('.t').textContent = lang === 'en' ? d.titleEn : d.title;
    pop.querySelector('.a').textContent = lang === 'en' ? d.authorEn : d.author;
    pop.querySelector('.d').textContent = lang === 'en' ? d.descEn : d.desc;
    pop.querySelector('.btn').textContent = lang === 'en' ? 'Listen in 岁月书房' : '去岁月书房听';
    pop.classList.remove('closing');
    placePop(spine);
    spine.setAttribute('aria-expanded', 'true');
    openSpine = spine;
    openedAtY = window.scrollY;
    // Commit the start frame, then open, so the spring starts from the spine.
    pop.getBoundingClientRect();
    pop.classList.add('open');
  }
  document.querySelectorAll('.spine[data-cover]').forEach(function (spine) {
    spine.setAttribute('aria-expanded', 'false');
    spine.addEventListener('click', function (e) {
      e.stopPropagation();
      if (openSpine === spine) { closePop(false); return; }
      if (openSpine) openSpine.setAttribute('aria-expanded', 'false');
      openPop(spine);
    });
  });
  document.addEventListener('click', function (e) {
    if (pop && openSpine && !pop.contains(e.target)) closePop(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePop(true);
  });
  // Small scrolls carry the card along with its book; a real scroll puts the book back.
  var openedAtY = 0;
  window.addEventListener('scroll', function () {
    if (!openSpine) return;
    if (Math.abs(window.scrollY - openedAtY) > 60) closePop(false);
    else placePop(openSpine);
  }, { passive: true });
  window.addEventListener('resize', function () { if (openSpine) placePop(openSpine); });

  /* ---------- sample lecture player ---------- */
  document.querySelectorAll('[data-audio-player]').forEach(function (box) {
    var audio = box.querySelector('audio'), btn = box.querySelector('[data-play]');
    var fill = box.querySelector('[data-bar]'), time = box.querySelector('[data-time]');
    var iPlay = box.querySelector('[data-icon-play]'), iPause = box.querySelector('[data-icon-pause]');
    function fmt(s) { s = Math.floor(s || 0); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
    function paint() {
      var playing = !audio.paused;
      // SVG elements have no .hidden property; the attribute must be toggled.
      iPlay.toggleAttribute('hidden', playing); iPause.toggleAttribute('hidden', !playing);
      btn.setAttribute('aria-label', playing ? (doc.lang === 'en' ? 'Pause' : '暂停') : (doc.lang === 'en' ? 'Play sample' : '播放试听'));
    }
    btn.addEventListener('click', function () { if (audio.paused) audio.play(); else audio.pause(); });
    audio.addEventListener('play', paint);
    audio.addEventListener('pause', paint);
    audio.addEventListener('emptied', function () { paint(); fill.style.transform = 'scaleX(0)'; time.textContent = '0:00'; });
    audio.addEventListener('timeupdate', function () {
      var d = audio.duration || 0;
      fill.style.transform = 'scaleX(' + (d ? audio.currentTime / d : 0) + ')';
      time.textContent = fmt(audio.currentTime) + (d ? ' / ' + fmt(d) : '');
    });
  });

  /* ---------- SoulLink voice samples: one player, tap again to stop ---------- */
  document.querySelectorAll('[data-voice-samples]').forEach(function (box) {
    var player = new Audio(), current = null;
    function mark(btn, on) { btn.classList.toggle('seal', on); btn.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    box.querySelectorAll('[data-voice]').forEach(function (btn) {
      mark(btn, false);
      btn.addEventListener('click', function () {
        if (current === btn && !player.paused) { player.pause(); mark(btn, false); current = null; return; }
        if (current) mark(current, false);
        player.src = 'public/voices/' + btn.dataset.voice + '-' + (doc.lang === 'en' ? 'en' : 'zh') + '.mp3';
        player.play();
        current = btn; mark(btn, true);
      });
    });
    player.addEventListener('ended', function () { if (current) mark(current, false); current = null; });
  });

  /* ---------- poster strip: drag with the mouse, throw with momentum ---------- */
  // Apple's projection: where a flick would come to rest.
  function project(v, rate) { rate = rate || 0.998; return (v / 1000) * rate / (1 - rate); }
  document.querySelectorAll('.poster-strip, .carousel .track').forEach(function (strip) {
    var down = false, moved = false, startX = 0, startLeft = 0, hist = [];
    strip.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return; // touch scrolls natively
      down = true; moved = false; startX = e.clientX; startLeft = strip.scrollLeft;
      hist = [{ x: e.clientX, t: e.timeStamp }];
    });
    strip.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (!moved && Math.abs(dx) < 8) return; // hysteresis before committing to a drag
      if (!moved) { moved = true; strip.setPointerCapture(e.pointerId); strip.classList.add('dragging'); }
      strip.scrollLeft = startLeft - dx; // 1:1 with the pointer, from where it was grabbed
      hist.push({ x: e.clientX, t: e.timeStamp });
      if (hist.length > 5) hist.shift();
    });
    function release(e) {
      if (!down) return;
      down = false;
      if (!moved) return;
      var a = hist[0], b = hist[hist.length - 1];
      var v = b.t > a.t ? (b.x - a.x) / (b.t - a.t) * 1000 : 0; // px/s
      strip.classList.remove('dragging');
      if (!reduceMotion && Math.abs(v) > 50) {
        strip.scrollTo({ left: strip.scrollLeft - project(v, 0.995), behavior: 'smooth' });
      }
      try { strip.releasePointerCapture(e.pointerId); } catch (err) { /* already released */ }
    }
    strip.addEventListener('pointerup', release);
    strip.addEventListener('pointercancel', release);
    strip.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);

    var nav = document.querySelector('[data-strip-nav="' + strip.id + '"]');
    var prev = nav && nav.querySelector('[data-dir="-1"]'), next = nav && nav.querySelector('[data-dir="1"]');
    var perStep = nav && nav.dataset.step ? Number(nav.dataset.step) : 2;
    function step(dir) {
      var tile = strip.firstElementChild;
      var gap = parseFloat(getComputedStyle(strip).columnGap) || 0;
      var w = tile ? tile.getBoundingClientRect().width + gap : 258;
      strip.scrollBy({ left: dir * w * perStep, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });
    function sync() {
      var atStart = strip.scrollLeft < 4;
      var atEnd = strip.scrollLeft + strip.clientWidth > strip.scrollWidth - 4;
      // Fade only the edge that still has content beyond it.
      strip.style.setProperty('--fl', atStart ? '0px' : '64px');
      strip.style.setProperty('--fr', atEnd ? '0px' : '64px');
      if (prev) prev.disabled = atStart;
      if (next) next.disabled = atEnd;
    }
    strip.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  });
})();
