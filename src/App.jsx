const TWEAKS = /*EDITMODE-BEGIN*/{
  "heroHeadlineStyle": "serif-italic",
  "showFloatingCards": true,
  "accentWarmth": 1.0,
  "accent": "soul",
  "language": "en"
}/*EDITMODE-END*/;

function App() {
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem('soullink-theme') || 'dark'; }
    catch { return 'dark'; }
  });
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem('soullink-lang') || TWEAKS.language || 'en'; }
    catch { return 'en'; }
  });
  React.useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light');
    try { localStorage.setItem('soullink-theme', theme); } catch {}
  }, [theme]);
  React.useEffect(() => {
    document.body.classList.remove('lang-en', 'lang-zh');
    document.body.classList.add('lang-' + lang);
    try { localStorage.setItem('soullink-lang', lang); } catch {}
  }, [lang]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  // Tweaks / edit mode
  const [tweaks, setTweaks] = React.useState(TWEAKS);
  const [editMode, setEditMode] = React.useState(false);
  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setEditMode(true);
      if (d.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const patch = (k, v) => {
    setTweaks(t => ({...t, [k]: v}));
    window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[k]:v}}, '*');
  };

  // Apply accent theme
  React.useEffect(() => {
    document.body.classList.remove('accent-teal', 'accent-peach');
    if (tweaks.accent === 'teal') document.body.classList.add('accent-teal');
    else if (tweaks.accent === 'peach') document.body.classList.add('accent-peach');
  }, [tweaks.accent]);

  React.useEffect(() => {
    document.body.classList.toggle('hide-floats', !tweaks.showFloatingCards);
    document.body.classList.toggle('headline-sans', tweaks.heroHeadlineStyle === 'sans-bold');
  }, [tweaks]);

  return (
    <>
      <Starfield count={100}/>
      <Nav theme={theme} onToggleTheme={toggleTheme} lang={lang} onLang={setLang}/>
      <Hero/>
      <SoulSystem/>
      <ThreeMinds/>
      <Memory/>
      <Selfies/>
      <Voice/>
      <Strip/>
      <Testimonials/>
      <Pricing/>
      <FinalCTA/>
      <Footer lang={lang} onLang={setLang}/>
      {editMode && <TweaksPanelV2 tweaks={tweaks} onChange={patch} theme={theme} onToggleTheme={toggleTheme} lang={lang} onLang={setLang}/>}
    </>
  );
}

function TweaksPanelV2({ tweaks, onChange, theme, onToggleTheme, lang, onLang }) {
  return (
    <div className="tweaks-panel-v2">
      <div className="tp-head">
        <span className="tp-head-title">Tweaks</span>
        <span className="tp-head-sub">live preview</span>
      </div>

      <div className="tp-label">Theme</div>
      <div className="tp-row">
        <button className={`tp-btn ${theme==='dark'?'active':''}`} onClick={()=>theme!=='dark'&&onToggleTheme()}>🌙 Dark</button>
        <button className={`tp-btn ${theme==='light'?'active':''}`} onClick={()=>theme!=='light'&&onToggleTheme()}>☀ Light</button>
      </div>

      <div className="tp-label">Language · 语言</div>
      <div className="tp-row">
        <button className={`tp-btn ${lang==='en'?'active':''}`} onClick={()=>onLang('en')}>English</button>
        <button className={`tp-btn ${lang==='zh'?'active':''}`} onClick={()=>onLang('zh')}>简体中文</button>
      </div>

      <div className="tp-label">Accent</div>
      <div className="tp-row">
        <div className={`tp-accent soul ${tweaks.accent==='soul'?'active':''}`} onClick={()=>onChange('accent','soul')} title="Soul gradient"/>
        <div className={`tp-accent teal ${tweaks.accent==='teal'?'active':''}`} onClick={()=>onChange('accent','teal')} title="Teal / cyan"/>
        <div className={`tp-accent peach ${tweaks.accent==='peach'?'active':''}`} onClick={()=>onChange('accent','peach')} title="Peach / salmon"/>
      </div>

      <div className="tp-label">Headline style</div>
      <div className="tp-row">
        <button className={`tp-btn ${tweaks.heroHeadlineStyle==='serif-italic'?'active':''}`} onClick={()=>onChange('heroHeadlineStyle','serif-italic')}>Serif</button>
        <button className={`tp-btn ${tweaks.heroHeadlineStyle==='sans-bold'?'active':''}`} onClick={()=>onChange('heroHeadlineStyle','sans-bold')}>Sans</button>
      </div>

      <div className="tp-label">Floating cards</div>
      <div className="tp-row">
        <button className={`tp-btn ${tweaks.showFloatingCards?'active':''}`} onClick={()=>onChange('showFloatingCards', true)}>Visible</button>
        <button className={`tp-btn ${!tweaks.showFloatingCards?'active':''}`} onClick={()=>onChange('showFloatingCards', false)}>Hidden</button>
      </div>

      <div className="tp-label">Amber warmth · {tweaks.accentWarmth.toFixed(1)}×</div>
      <input type="range" className="tp-range" min="0" max="2" step="0.1" value={tweaks.accentWarmth}
        onChange={(e)=>onChange('accentWarmth', parseFloat(e.target.value))}/>
    </div>
  );
}

window.App = App;
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
