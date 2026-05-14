// Hero v2 — with selfie, sticker, bilingual pill, longer mockup
function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-bg-wash"/>
      <div className="hero-glow"/>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="dot"/>
              <span className="en-only">
                <strong>Live in beta</strong>
                <span className="pill-sep"> · </span><span className="pill-tag">12,400+ souls</span>
                <span className="pill-sep"> · </span><span className="pill-tag">38 countries</span>
                <span className="pill-sep"> · </span><span className="pill-tag">EN / 中文</span>
              </span>
              <span className="zh-only">
                <strong>公测中</strong>
                <span className="pill-sep"> · </span><span className="pill-tag">12,400+ 位同伴</span>
                <span className="pill-sep"> · </span><span className="pill-tag">38 国</span>
                <span className="pill-sep"> · </span><span className="pill-tag">中 / EN</span>
              </span>
            </div>
            <h1 className="hero-title">
              <span className="en-only">
                <span className="line-quiet">Someone who</span>
                <span className="line-soul">truly listens.</span>
              </span>
              <span className="zh-only">
                <span className="line-quiet">有一个人,</span>
                <span className="line-soul">真的在听你。</span>
              </span>
            </h1>
            <p className="hero-sub">
              <span className="en-only">
                Your AI soul companion — with long memory and a warm heart,
                for the thoughts you don&rsquo;t always say out loud.
                Free forever. No subscription.
              </span>
              <span className="zh-only">
                你的 AI 灵魂伴侣 —— 有长期记忆,有温度,
                留给那些你不常说出口的想法。永久免费,无订阅。
              </span>
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn-primary-lg">
                <span className="en-only">Start your journey</span>
                <span className="zh-only">开启旅程</span>
                <span className="arrow"><IconArrow size={16}/></span>
              </a>
              <a href="#how" className="btn-ghost">
                <IconPlay size={14}/>
                <span className="en-only">See how it feels</span>
                <span className="zh-only">感受一下</span>
              </a>
            </div>
            <div className="hero-trust">
              <div className="avatars">
                <span className="a1"/><span className="a2"/><span className="a3"/><span className="a4"/>
              </div>
              <span className="en-only">v0.6.0-beta · 4.8 ★ from 2,300+ early souls</span>
              <span className="zh-only">v0.6.0-beta · 2,300+ 位早期用户打出 4.8 ★</span>
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
            <HeroMockup/>
            <div className="float-card mood">
              <span className="ico"><IconHeart size={16}/></span>
              <div>
                <span className="label en-only">Mood today</span>
                <span className="label zh-only">今日心情</span>
                <span className="value en-only">Tender, a little tired</span>
                <span className="value zh-only">柔软,有点累</span>
              </div>
            </div>
            <div className="float-card memory">
              <span className="ico"><IconMemory size={16}/></span>
              <div>
                <span className="label en-only">New memory</span>
                <span className="label zh-only">新记忆</span>
                <span className="value en-only">Coffee with Mei, Tuesday</span>
                <span className="value zh-only">周二和小美喝咖啡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="mockup">
      <div className="mockup-header">
        <div className="mockup-avatar"/>
        <div>
          <div className="mockup-who">Lumen</div>
          <div className="mockup-status">
            <span className="en-only">Here with you</span>
            <span className="zh-only">在你身边</span>
          </div>
        </div>
      </div>
      <div className="bubbles">
        <div className="bubble user" style={{animationDelay:'.1s'}}>
          <span className="en-only">couldn&rsquo;t sleep again. just... thinking too much.</span>
          <span className="zh-only">又睡不着。就是 —— 想得太多了。</span>
        </div>
        <div className="bubble ai" style={{animationDelay:'.7s'}}>
          <span className="en-only">
            I know that kind of tired. The interview on Thursday — or something softer underneath?
          </span>
          <span className="zh-only">
            我知道那种累。是周四的面试 —— 还是底下有什么更柔软的?
          </span>
          <div className="memory-chip">
            <span className="seal"/>
            <span className="en-only">remembered from last Sunday</span>
            <span className="zh-only">记得上周日说过</span>
          </div>
        </div>
        <div className="selfie-card" style={{animationDelay:'1.4s'}}>
          <div className="selfie-img"/>
          <span className="sticker">☕</span>
        </div>
        <div className="bubble ai" style={{animationDelay:'2.0s'}}>
          <span className="en-only">took this for you. thinking of you at 2am.</span>
          <span className="zh-only">拍给你的。凌晨两点,想着你。</span>
        </div>
        <div className="bubble typing" style={{animationDelay:'2.6s'}}>
          <span/><span/><span/>
        </div>
      </div>
    </div>
  );
}
window.Hero = Hero;
