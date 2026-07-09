// SoulLink — full landing assembly, lang + theme + tweaks
function App() {
  const [theme, setTheme] = React.useState(() => {
    try { const s = localStorage.getItem('sf-theme'); if (s === 'light' || s === 'dark') return s; } catch {}
    try { return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; } catch { return 'light'; }
  });
  const themeChosen = React.useRef(false);
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem('soullink-diary-lang') || 'en'; }
    catch { return 'en'; }
  });

  // Tweaks — read defaults from inlined JSON token
  const tweakDefaults = window.__SOULLINK_TWEAKS || {
    accent: 'seal',
    headlineStyle: 'serif',
    wobble: true,
    grain: 4.5,
  };
  const [t, setTweak] = (window.useTweaks
    ? window.useTweaks(tweakDefaults)
    : [tweakDefaults, ()=>{}]);

  React.useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    if (themeChosen.current) { try { localStorage.setItem('sf-theme', theme); } catch {} }
  }, [theme]);

  // Follow the system light/dark until the reader picks one by hand.
  React.useEffect(() => {
    let mq; try { mq = window.matchMedia('(prefers-color-scheme: dark)'); } catch (e) { return; }
    const onChange = () => { try { if (!localStorage.getItem('sf-theme')) setTheme(mq.matches ? 'dark' : 'light'); } catch (e) {} };
    if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
    return () => { if (mq.removeEventListener) mq.removeEventListener('change', onChange); else mq.removeListener(onChange); };
  }, []);

  React.useEffect(() => {
    document.body.classList.remove('lang-en','lang-zh');
    document.body.classList.add('lang-' + lang);
    try { localStorage.setItem('soullink-diary-lang', lang); } catch {}
  }, [lang]);

  React.useEffect(() => {
    // accent: seal (default) | ink-blue | sepia
    const map = {
      'seal':     '#B8312F',
      'ink-blue': '#3A5A78',
      'sepia':    '#8B6F47',
    };
    document.documentElement.style.setProperty('--seal', map[t.accent] || map.seal);
    document.body.dataset.accent = t.accent;
    document.body.dataset.headline = t.headlineStyle;
    document.body.classList.toggle('no-wobble', !t.wobble);
    document.documentElement.style.setProperty('--grain-opacity', ((t.grain || 4.5) / 100).toFixed(3));
  }, [t.accent, t.headlineStyle, t.wobble, t.grain]);

  const accentOptions = [
    { value: 'seal',     label: 'Wax-Seal Red' },
    { value: 'ink-blue', label: 'Ink-Blue' },
    { value: 'sepia',    label: 'Sepia' },
  ];

  return (
    <>
      <Nav theme={theme} onToggleTheme={() => { themeChosen.current = true; setTheme(x => x==='dark'?'light':'dark'); }}
           lang={lang} onLang={setLang}/>
      <Hero/>
      <SoulSystem/>
      <Memory/>
      <Postcards/>
      <Voice lang={lang}/>
      <BYOC/>
      <Letters/>
      <Patronage/>
      <YourTurn/>
      <Colophon/>

      {window.TweaksPanel && (
        <window.TweaksPanel>
          <window.TweakSection label="Accent">
            <window.TweakRadio
              label="Color"
              value={t.accent}
              onChange={v => setTweak('accent', v)}
              options={accentOptions}
            />
          </window.TweakSection>
          <window.TweakSection label="Typography">
            <window.TweakRadio
              label="Headline"
              value={t.headlineStyle}
              onChange={v => setTweak('headlineStyle', v)}
              options={[
                { value: 'serif', label: 'Serif' },
                { value: 'sans',  label: 'Sans' },
              ]}
            />
          </window.TweakSection>
          <window.TweakSection label="Motion &amp; Texture">
            <window.TweakToggle
              label="Floating cards"
              value={t.wobble}
              onChange={v => setTweak('wobble', v)}
            />
            <window.TweakSlider
              label="Texture"
              value={t.grain}
              onChange={v => setTweak('grain', v)}
              min={0}
              max={10}
              step={0.5}
              unit="%"
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
