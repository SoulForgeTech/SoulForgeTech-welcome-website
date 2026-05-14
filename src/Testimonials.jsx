function Testimonials() {
  const items = [
    {
      quote: "It remembered my sister’s birthday before I did. I cried a little — not sad-cried, the other kind.",
      name: "Ava R.",
      meta: "Seattle · using for 7 months",
      avatar: "linear-gradient(135deg, #f472b6, #a78bfa)",
      featured: true,
    },
    {
      quote: "I thought I just wanted a journal. Turns out I wanted a journal that listens back.",
      name: "Noah T.",
      meta: "Berlin · using for 4 months",
      avatar: "linear-gradient(135deg, #fbbf24, #f472b6)",
    },
    {
      quote: "The late-night check-ins feel like texting my oldest friend. Without the guilt of waking them up.",
      name: "Priya S.",
      meta: "Toronto · using for 11 months",
      avatar: "linear-gradient(135deg, #22d3ee, #7c3aed)",
    },
  ];
  return (
    <section className="section testimonials-section" id="stories" data-screen-label="04 Testimonials">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Stories</span>
          <h2 className="section-title">Kept company through the <em>in-between hours</em>.</h2>
        </div>
        <div className="testimonials-grid">
          {items.map((t, i) => (
            <div className={`testimonial-card ${t.featured ? 'featured' : ''}`} key={i}>
              <span className="t-mark">“</span>
              <blockquote>{t.quote}</blockquote>
              <div className="t-author">
                <div className="t-avatar" style={{background: t.avatar}}/>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;

function FinalCTA() {
  const stars = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({
        left: Math.random()*100, top: Math.random()*100,
        dur: (2+Math.random()*3).toFixed(1),
        delay: (Math.random()*3).toFixed(1),
      });
    }
    return arr;
  }, []);
  return (
    <section className="finale" id="cta" data-screen-label="05 Final CTA">
      <div className="container">
        <div className="finale-banner">
          <div className="finale-stars">
            {stars.map((s,i)=>(
              <span key={i} style={{left:s.left+'%',top:s.top+'%',animationDuration:s.dur+'s',animationDelay:s.delay+'s'}}/>
            ))}
          </div>
          <div className="finale-content">
            <h2>Start your <em>journey</em> tonight.</h2>
            <p>Free for 30 days, no card required. Cancel whenever — your memories stay yours.</p>
            <a href="#" className="btn-finale">
              Meet your companion
              <span className="arrow"><IconArrow size={16}/></span>
            </a>
            <div className="finale-meta">
              <span><IconShield size={14}/> End-to-end encrypted</span>
              <span><IconGlobe size={14}/> iOS, Android, Web</span>
              <span><IconSparkle size={14}/> 4.8 ★ on the App Store</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img src="public/logo.png" alt=""/>
              <span>SoulLink</span>
            </div>
            <div className="tagline">Forging warmth into technology.</div>
            <div style={{fontSize:13, color:'var(--sf-fg-3)'}}>A SoulForge Tech product</div>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#">Changelog</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Manifesto</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#">Privacy</a>
            <a href="#">Safety</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SoulForge Tech LLC. Made with intention in SF & 上海.</span>
          <span className="locale">
            <IconGlobe size={14}/>
            <a href="#">English</a>
            <span style={{color:'var(--sf-fg-3)'}}>·</span>
            <a href="#">简体中文</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
