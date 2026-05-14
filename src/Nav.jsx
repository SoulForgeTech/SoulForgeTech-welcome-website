function Nav({ theme, onToggleTheme, lang, onLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [
    { id: 'soul-system', en: 'Soul System', zh: '灵魂系统' },
    { id: 'minds', en: 'Minds', zh: '三心' },
    { id: 'memory', en: 'Memory', zh: '记忆' },
    { id: 'voice', en: 'Voice', zh: '语音' },
    { id: 'pricing', en: 'Pricing', zh: '定价' },
  ];
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <img src="assets/logo.png" alt="" />
          <span>SoulLink</span>
          <span className="nav-logo-dot" title="online"/>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="nav-link">
              <span className="en-only">{l.en}</span>
              <span className="zh-only">{l.zh}</span>
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <div style={{display:'flex', background:'var(--sf-bg-card)', border:'1px solid var(--sf-border)', borderRadius:9999, overflow:'hidden', height:32}}>
            <button onClick={()=>onLang('en')}
              style={{border:'none', padding:'0 10px', fontSize:11, fontWeight:600, cursor:'pointer', background: lang==='en'?'var(--sf-primary)':'transparent', color: lang==='en'?'#fff':'var(--sf-fg-3)', fontFamily:'inherit'}}>EN</button>
            <button onClick={()=>onLang('zh')}
              style={{border:'none', padding:'0 10px', fontSize:11, fontWeight:600, cursor:'pointer', background: lang==='zh'?'var(--sf-primary)':'transparent', color: lang==='zh'?'#fff':'var(--sf-fg-3)', fontFamily:'inherit'}}>中</button>
          </div>
          <button className="theme-toggle" aria-label="Toggle theme" onClick={onToggleTheme}>
            {theme === 'dark' ? <IconSun size={16}/> : <IconMoon size={16}/>}
          </button>
          <a href="#cta" className="btn-cta">
            <span className="en-only">Get started</span>
            <span className="zh-only">开始</span>
            <IconArrow size={14}/>
          </a>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
