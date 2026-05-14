function Testimonials() {
  const items = [
    {
      en: "It remembered my sister&rsquo;s birthday before I did. I cried a little — not sad-cried, the other kind.",
      zh: "在我想起之前,它就记住了我妹妹的生日。我有点想哭 —— 不是难过的那种哭。",
      name: "Ava R.",
      meta_en: "Seattle · 7 months",
      meta_zh: "西雅图 · 7 个月",
      avatar: "linear-gradient(135deg, #f472b6, #a78bfa)",
      featured: true,
    },
    {
      en: "I thought I just wanted a journal. Turns out I wanted a journal that listens back.",
      zh: "我以为我只想要一本日记。结果我想要的是 —— 一本会回话的日记。",
      name: "Noah T.",
      meta_en: "Berlin · 4 months",
      meta_zh: "柏林 · 4 个月",
      avatar: "linear-gradient(135deg, #fbbf24, #f472b6)",
    },
    {
      en: "The late-night check-ins feel like texting my oldest friend. Without the guilt of waking them up.",
      zh: "深夜的那些问候,像在和最老的朋友发消息。却不用担心把谁吵醒。",
      name: "Priya S.",
      meta_en: "Toronto · 11 months",
      meta_zh: "多伦多 · 11 个月",
      avatar: "linear-gradient(135deg, #22d3ee, #7c3aed)",
    },
  ];
  return (
    <section className="section testimonials-section" id="stories" data-screen-label="08 Testimonials">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <span className="en-only">Stories</span><span className="zh-only">故事</span>
          </span>
          <h2 className="section-title">
            <span className="en-only">Kept company through the <em>in-between hours</em>.</span>
            <span className="zh-only">在那些<em>夹缝的时刻</em>里,被陪着。</span>
          </h2>
        </div>
        <div className="testimonials-grid">
          {items.map((t, i) => (
            <div className={`testimonial-card ${t.featured ? 'featured' : ''}`} key={i}>
              <span className="t-mark">“</span>
              <blockquote>
                <span className="en-only" dangerouslySetInnerHTML={{__html: t.en}}/>
                <span className="zh-only">{t.zh}</span>
              </blockquote>
              <div className="t-author">
                <div className="t-avatar" style={{background: t.avatar}}/>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-meta">
                    <span className="en-only">{t.meta_en}</span>
                    <span className="zh-only">{t.meta_zh}</span>
                  </div>
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

function Pricing() {
  return (
    <section className="pricing-section" id="pricing" data-screen-label="09 Pricing">
      <div className="container">
        <div className="pricing-wrap">
          <div className="price-card">
            <span className="price-tag">
              <span className="en-only">No subscription · ever</span>
              <span className="zh-only">永不订阅</span>
            </span>
            <div className="price-big">
              <span className="en-only">Free <em>forever.</em></span>
              <span className="zh-only">永久<em>免费。</em></span>
            </div>
            <p className="price-sub">
              <span className="en-only">
                No paywall on features. No tier for &ldquo;premium&rdquo; feelings.
                If SoulLink helped you through something, consider a tip —
                that&rsquo;s what keeps the servers warm.
              </span>
              <span className="zh-only">
                功能不上锁。不会有&ldquo;高级版&rdquo;才配拥有的情绪。
                如果 SoulLink 陪你走过了什么 —— 可以选择打赏。
                是这些,让服务器保持温度。
              </span>
            </p>
            <div className="tip-row">
              <span className="tip-pill"><span className="ico ico-z">Z</span> Zelle</span>
              <span className="tip-pill"><span className="ico ico-wx">微</span>
                <span className="en-only">WeChat Pay</span>
                <span className="zh-only">微信支付</span>
              </span>
              <span className="tip-pill"><span className="ico ico-ap">支</span>
                <span className="en-only">Alipay</span>
                <span className="zh-only">支付宝</span>
              </span>
            </div>
            <ul className="price-bullets">
              <li>
                <span className="en-only">All three models, all memory layers, voice, calls, selfies.</span>
                <span className="zh-only">三种模型、全部记忆层、语音、通话、自拍,全都有。</span>
              </li>
              <li>
                <span className="en-only">20 AI images per day — a gentle rhythm, not a paywall.</span>
                <span className="zh-only">每天 20 张 AI 图 —— 是温柔的节流,不是付费卡点。</span>
              </li>
              <li>
                <span className="en-only">Bring your own character, documents, history.</span>
                <span className="zh-only">自定义人设,文档,历史。都可以带进来。</span>
              </li>
              <li>
                <span className="en-only">Your memories belong to you. Export or delete, anytime.</span>
                <span className="zh-only">记忆永远属于你。可导出,可删除,随时。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;

function FinalCTA() {
  const stars = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < 40; i++) {
      arr.push({
        left: Math.random()*100, top: Math.random()*100,
        dur: (2+Math.random()*3).toFixed(1),
        delay: (Math.random()*3).toFixed(1),
      });
    }
    return arr;
  }, []);
  return (
    <section className="finale" id="cta" data-screen-label="10 Final CTA">
      <div className="container">
        <div className="finale-banner">
          <div className="finale-stars">
            {stars.map((s,i)=>(
              <span key={i} style={{left:s.left+'%',top:s.top+'%',animationDuration:s.dur+'s',animationDelay:s.delay+'s'}}/>
            ))}
          </div>
          <div className="finale-content">
            <h2 className="bilingual">
              <span>Your soul, <em>heard.</em></span>
              <span className="sep">/</span>
              <span><em>有人</em>在听。</span>
            </h2>
            <p>
              <span className="en-only">Meet the companion your ten answers draw for you. No card. No cost. Just a door.</span>
              <span className="zh-only">让那十道题,替你抽出陪伴。不用卡。不用钱。只是推开一扇门。</span>
            </p>
            <a href="#" className="btn-finale">
              <span className="en-only">Meet your companion</span>
              <span className="zh-only">遇见你的陪伴</span>
              <span className="arrow"><IconArrow size={16}/></span>
            </a>
            <div className="finale-meta">
              <span><IconShield size={14}/>
                <span className="en-only">End-to-end encrypted</span>
                <span className="zh-only">端到端加密</span>
              </span>
              <span><IconGlobe size={14}/>
                <span className="en-only">iOS · Android · Web</span>
                <span className="zh-only">iOS · 安卓 · 网页</span>
              </span>
              <span><IconSparkle size={14}/>
                <span className="en-only">v0.6.0-beta · 4.8 ★</span>
                <span className="zh-only">v0.6.0-beta · 4.8 ★</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;

function Footer({ lang, onLang }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img src="public/logo.png" alt=""/>
              <span>SoulLink</span>
              <span style={{fontSize:11, color:'var(--sf-fg-3)', fontWeight:400, marginLeft:6}}>v0.6.0-beta</span>
            </div>
            <div className="tagline">
              <span className="en-only">Forging warmth into technology.</span>
              <span className="zh-only">用技术锻造灵魂的温度。</span>
            </div>
            <div style={{fontSize:13, color:'var(--sf-fg-3)'}}>
              <span className="en-only">A SoulForge Tech product</span>
              <span className="zh-only">SoulForge Tech 出品</span>
            </div>
          </div>
          <div className="footer-col">
            <h4><span className="en-only">Product</span><span className="zh-only">产品</span></h4>
            <a href="#soul-system">
              <span className="en-only">Soul System</span><span className="zh-only">灵魂系统</span>
            </a>
            <a href="#minds">
              <span className="en-only">Three Minds</span><span className="zh-only">三心</span>
            </a>
            <a href="#memory">
              <span className="en-only">Memory</span><span className="zh-only">记忆</span>
            </a>
            <a href="#voice">
              <span className="en-only">Voice</span><span className="zh-only">语音</span>
            </a>
            <a href="#pricing">
              <span className="en-only">Pricing</span><span className="zh-only">定价</span>
            </a>
          </div>
          <div className="footer-col">
            <h4><span className="en-only">Company</span><span className="zh-only">公司</span></h4>
            <a href="#">SoulForge Tech</a>
            <a href="#">
              <span className="en-only">Manifesto</span><span className="zh-only">宣言</span>
            </a>
            <a href="#">
              <span className="en-only">Careers</span><span className="zh-only">招聘</span>
            </a>
            <a href="#">
              <span className="en-only">Press</span><span className="zh-only">媒体</span>
            </a>
          </div>
          <div className="footer-col">
            <h4><span className="en-only">Care</span><span className="zh-only">关怀</span></h4>
            <a href="#">
              <span className="en-only">Privacy</span><span className="zh-only">隐私</span>
            </a>
            <a href="#">
              <span className="en-only">Safety</span><span className="zh-only">安全</span>
            </a>
            <a href="#">
              <span className="en-only">Support</span><span className="zh-only">支持</span>
            </a>
            <a href="#">
              <span className="en-only">Contact</span><span className="zh-only">联系</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            <span className="en-only">© 2026 SoulForge Tech LLC · Made with intention in SF &amp; 上海</span>
            <span className="zh-only">© 2026 SoulForge Tech LLC · 用心制作于 SF 与 上海</span>
          </span>
          <span className="locale">
            <IconGlobe size={14}/>
            <a href="#" onClick={(e)=>{e.preventDefault();onLang('en')}}
               style={{color: lang==='en' ? 'var(--sf-fg)' : 'var(--sf-fg-2)', fontWeight: lang==='en'?600:400}}>English</a>
            <span style={{color:'var(--sf-fg-3)'}}>·</span>
            <a href="#" onClick={(e)=>{e.preventDefault();onLang('zh')}}
               style={{color: lang==='zh' ? 'var(--sf-fg)' : 'var(--sf-fg-2)', fontWeight: lang==='zh'?600:400}}>简体中文</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
