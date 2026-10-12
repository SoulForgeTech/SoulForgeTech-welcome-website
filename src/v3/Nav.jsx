// Top bar for the SoulLink page — the same glass bar as the rest of soulforgetech.com
// (back to SoulForge, brand, theme toggle, 中 / EN, open the app). Styles live in
// assets/topbar.css so the page's own diary design underneath is untouched.
function Nav({ theme, onToggleTheme, lang, onLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeId, setActiveId] = React.useState('');

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 4);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { id: 'soul-system', en: 'Souls',     zh: '灵魂' },
    { id: 'memory',      en: 'Memory',    zh: '记忆' },
    { id: 'postcards',   en: 'Postcards', zh: '明信片' },
    { id: 'voice',       en: 'Voice',     zh: '声纹' },
    { id: 'byoc',        en: 'Yours',     zh: '复刻' },
    { id: 'letters',     en: 'Letters',   zh: '来信' },
    { id: 'patronage',   en: 'Patronage', zh: '续灯' },
  ];

  // Scroll-spy: highlight the most recent chapter whose top has crossed the
  // viewport's trigger line.
  React.useEffect(() => {
    const ids = links.map(l => l.id);
    const update = () => {
      const trigger = window.innerHeight * 0.35;
      let active = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= trigger) active = id;
      }
      setActiveId(active);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const zh = lang === 'zh';
  const dark = theme === 'dark';
  return (
    <header className={`sf-topbar${scrolled ? ' scrolled' : ''}`}>
      <div className="tb-wrap">
        <div className="tb-left">
          <a className="tb-btn sm" href="index.html">‹ SoulForge</a>
          <a href="#top" className="tb-brand">
            <img src="assets/img/brand/soullink-icon.png" alt=""/>
            <b>SoulLink</b>
          </a>
        </div>
        <nav className="tb-nav" aria-label={zh ? '章节' : 'Chapters'}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={activeId === l.id ? 'active' : ''}>{zh ? l.zh : l.en}</a>
          ))}
        </nav>
        <div className="tb-actions">
          <button type="button" className="theme-btn" data-mode={dark ? 'dark' : 'light'} onClick={onToggleTheme}
                  aria-label={dark ? (zh ? '切换到浅色' : 'Switch to light') : (zh ? '切换到深色' : 'Switch to dark')}>
            <svg data-moon width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>
            <svg data-sun width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          </button>
          <button type="button" className="lang-btn" onClick={() => onLang(zh ? 'en' : 'zh')}
                  aria-label={zh ? 'Switch to English' : '切换到中文'}>
            <span className={zh ? 'on' : ''}>中</span><span className="sep">/</span><span className={zh ? '' : 'on'}>EN</span>
          </button>
          <a className="tb-btn ink" href="https://prototype.soulforgetech.com" target="_blank" rel="noopener">
            {zh ? '打开 SoulLink' : 'Open SoulLink'}
          </a>
        </div>
      </div>
    </header>
  );
}
window.Nav = Nav;
