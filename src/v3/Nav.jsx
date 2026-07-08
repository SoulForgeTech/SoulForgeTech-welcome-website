// Hand-drawn pen circle that loops around the active / hovered nav tab.
// preserveAspectRatio="none" lets the oval stretch to fit any label width.
function NavCircle() {
  return (
    <svg className="nav-circle" viewBox="0 0 100 36" preserveAspectRatio="none" aria-hidden="true">
      <path d="M 8,18 C 10,7 28,3 50,4 C 74,5 92,10 95,18 C 96,28 80,33 50,33 C 22,33 5,30 6,20 C 6,15 9,13 16,11"
            stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

// Diary Nav — wax-seal red CTA, updated bilingual labels, scroll-spy underline.
function Nav({ theme, onToggleTheme, lang, onLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeId, setActiveId] = React.useState('');

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
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
    const ids = ['soul-system','memory','postcards','voice','byoc','letters','patronage'];
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
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <img src="public/logo.png" alt="SoulLink" className="mark"/>
          <span>SoulLink</span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link${activeId === l.id ? ' active' : ''}`}>
              <span className="nav-link-text">
                <span className="en-only">{l.en}</span>
                <span className="zh-only">{l.zh}</span>
                <NavCircle/>
              </span>
            </a>
          ))}
          <a href="glossa.html" className="nav-link platform">
            <span className="en-only">Glossa</span>
            <span className="zh-only">岁月书房</span>
          </a>
          <a href="platform.html" className="nav-link platform">
            <span className="en-only">Platform</span>
            <span className="zh-only">平台</span>
          </a>
        </div>
        <div className="nav-actions">
          <div className="lang-toggle">
            <button className={lang==='en'?'active':''} onClick={()=>onLang('en')}>EN</button>
            <span className="slash">/</span>
            <button className={lang==='zh'?'active':''} onClick={()=>onLang('zh')}>中</button>
          </div>
          <button className="theme-toggle" aria-label="Theme" onClick={onToggleTheme}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <a href="https://prototype.soulforgetech.com" target="_blank" rel="noopener" className="btn-stamp" style={{padding:'8px 16px', fontSize:13}}>
            <span className="en-only">Open the diary</span>
            <span className="zh-only">开始读</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
