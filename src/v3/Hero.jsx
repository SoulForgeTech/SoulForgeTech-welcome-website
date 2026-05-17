// Phase 1 Hero — scenes (no faces), ticket-stub ephemera, ZH typography fixes

function HandCircle() {
  return (
    <svg className="hand-circle" width="280" height="120" viewBox="0 0 280 120" preserveAspectRatio="none" aria-hidden="true">
      <path d="M 24,62 C 28,28 88,16 142,18 C 198,20 254,30 262,58 C 268,82 220,104 158,104 C 96,104 18,98 22,68 C 23,58 28,52 38,48"/>
    </svg>
  );
}

function HandUnderline() {
  return (
    <svg className="hand-underline" viewBox="0 0 240 24" preserveAspectRatio="none" aria-hidden="true">
      <path d="M 6 16 C 30 22, 56 10, 88 14 C 120 18, 152 8, 180 13 C 200 16, 220 12, 234 16" />
    </svg>
  );
}

function HandArrow({ flip = false }) {
  return (
    <svg className="arrow" width="64" height="40" viewBox="0 0 64 40" fill="none" aria-hidden="true"
         style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
      <path d="M 4 6 C 14 4, 24 10, 30 18 C 34 24, 40 30, 50 32"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M 44 26 L 52 33 L 44 36"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

/* ---------- P1: pixel cabin scene — "the lamp she leaves on for me" ---------- */
function PolaroidCabin() {
  return (
    <svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid slice"
         style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges' }}>
      <defs>
        <linearGradient id="dusk-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1A1438"/>
          <stop offset="0.45" stopColor="#3F2A5A"/>
          <stop offset="0.78" stopColor="#A0563A"/>
          <stop offset="1" stopColor="#E8915A"/>
        </linearGradient>
      </defs>
      <rect width="220" height="148" fill="url(#dusk-sky)"/>

      {/* stars (chunky pixels) */}
      <g fill="#FFE8B0" opacity="0.85">
        <rect x="18" y="14" width="3" height="3"/>
        <rect x="48" y="22" width="2" height="2"/>
        <rect x="90" y="10" width="3" height="3"/>
        <rect x="168" y="18" width="2" height="2"/>
        <rect x="198" y="30" width="3" height="3"/>
        <rect x="130" y="24" width="2" height="2"/>
        <rect x="72" y="36" width="2" height="2"/>
      </g>
      {/* moon — chunky disc */}
      <g fill="#F4E4C8">
        <rect x="166" y="36" width="14" height="2"/>
        <rect x="164" y="38" width="18" height="2"/>
        <rect x="162" y="40" width="22" height="8"/>
        <rect x="164" y="48" width="18" height="2"/>
        <rect x="166" y="50" width="14" height="2"/>
      </g>
      <g fill="#D4B896" opacity="0.65">
        <rect x="173" y="42" width="3" height="2"/>
        <rect x="178" y="46" width="2" height="2"/>
      </g>

      {/* distant mountain silhouette */}
      <path d="M 0 138 L 30 124 L 60 130 L 90 118 L 120 128 L 150 120 L 180 126 L 220 118 L 220 152 L 0 152 Z"
            fill="#1A0F28"/>

      {/* ground field */}
      <rect y="148" width="220" height="72" fill="#0F1A18"/>
      <rect y="170" width="220" height="50" fill="#080F10"/>

      {/* pine tree left (3 stacked triangles) */}
      <g fill="#050A08">
        <path d="M 16 168 L 30 138 L 44 168 Z"/>
        <path d="M 18 154 L 30 128 L 42 154 Z"/>
        <path d="M 20 142 L 30 120 L 40 142 Z"/>
      </g>
      <rect x="28" y="166" width="4" height="14" fill="#1A0E08"/>

      {/* pine tree right */}
      <g fill="#050A08">
        <path d="M 184 172 L 198 144 L 212 172 Z"/>
        <path d="M 186 158 L 198 134 L 210 158 Z"/>
        <path d="M 188 146 L 198 126 L 208 146 Z"/>
      </g>
      <rect x="196" y="170" width="4" height="14" fill="#1A0E08"/>

      {/* small pine tree back center */}
      <g fill="#040806">
        <path d="M 64 146 L 72 130 L 80 146 Z"/>
        <path d="M 66 138 L 72 124 L 78 138 Z"/>
      </g>

      {/* cabin body */}
      <g fill="#1A0E08">
        <rect x="90" y="142" width="66" height="40"/>
        {/* roof */}
        <path d="M 84 142 L 124 110 L 162 142 Z"/>
        {/* chimney */}
        <rect x="140" y="116" width="8" height="14"/>
      </g>
      {/* roof shadow */}
      <path d="M 88 140 L 124 114 L 159 140 Z" fill="#000" opacity="0.45"/>

      {/* THE window — bright warm glow */}
      <rect x="106" y="150" width="22" height="22" fill="#FFE69A"/>
      {/* window cross — muntin */}
      <rect x="106" y="160" width="22" height="1.4" fill="#A85E2C"/>
      <rect x="116" y="150" width="1.4" height="22" fill="#A85E2C"/>
      {/* window frame */}
      <rect x="104" y="148" width="26" height="2" fill="#3F2818"/>
      <rect x="104" y="172" width="26" height="2" fill="#3F2818"/>

      {/* glow halo around window */}
      <rect x="98" y="142" width="38" height="38" fill="#FFE69A" opacity="0.18"/>
      <rect x="90" y="134" width="54" height="54" fill="#FFE69A" opacity="0.08"/>

      {/* chimney smoke (warm pixels rising) */}
      <g fill="#D4A878" opacity="0.5">
        <rect x="140" y="106" width="3" height="3"/>
        <rect x="143" y="100" width="3" height="3"/>
        <rect x="145" y="94" width="3" height="3"/>
        <rect x="148" y="88" width="2" height="2"/>
      </g>

      {/* path stones leading to door */}
      <g fill="#3F2818" opacity="0.85">
        <rect x="118" y="186" width="6" height="3"/>
        <rect x="122" y="194" width="6" height="3"/>
        <rect x="116" y="202" width="6" height="3"/>
        <rect x="124" y="210" width="6" height="3"/>
      </g>
    </svg>
  );
}

/* ---------- P2: pen-and-ink still life — teacup + notebook + window light ---------- */
function PolaroidStillLife() {
  return (
    <svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="win-light" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#F4E4B8" stopOpacity="0.55"/>
          <stop offset="0.45" stopColor="#F4E4B8" stopOpacity="0.18"/>
          <stop offset="1" stopColor="#F4E4B8" stopOpacity="0"/>
        </linearGradient>
        <filter id="sl-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2"/>
          <feColorMatrix values="0 0 0 0 0.42  0 0 0 0 0.32  0 0 0 0 0.22  0 0 0 0.22 0"/>
        </filter>
      </defs>
      {/* toned cream paper */}
      <rect width="220" height="220" fill="#F0E2C8"/>
      <rect width="220" height="220" filter="url(#sl-grain)" opacity="0.55"/>
      {/* window-light wash from upper-left */}
      <rect width="130" height="220" fill="url(#win-light)"/>

      {/* wooden surface / table edge */}
      <line x1="0" y1="152" x2="220" y2="152" stroke="#3A5A78" strokeWidth="1.4" strokeLinecap="round"/>
      {/* faint wood grain */}
      <g stroke="#3A5A78" strokeWidth="0.5" opacity="0.28">
        <line x1="14" y1="168" x2="200" y2="170"/>
        <line x1="30" y1="184" x2="190" y2="183"/>
        <line x1="6" y1="200" x2="208" y2="202"/>
      </g>

      {/* TEACUP — fountain-pen lines */}
      <g stroke="#3A5A78" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* cup body — slightly tapered */}
        <path d="M 72 100 L 80 152 Q 88 156, 108 156 Q 128 156, 136 152 L 144 100" strokeWidth="1.6"/>
        {/* cup rim ellipse */}
        <ellipse cx="108" cy="100" rx="36" ry="7" strokeWidth="1.6"/>
        {/* tea surface (inner ellipse, faint) */}
        <ellipse cx="108" cy="101" rx="32" ry="5" strokeWidth="0.9" opacity="0.5"/>
        {/* handle */}
        <path d="M 144 110 Q 162 110, 164 124 Q 162 138, 144 136" strokeWidth="1.5"/>
        {/* saucer */}
        <ellipse cx="108" cy="158" rx="50" ry="6.5" strokeWidth="1.4"/>
      </g>

      {/* steam wisps */}
      <g stroke="#3A5A78" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.65">
        <path d="M 92 92 Q 88 76, 94 64 Q 98 54, 94 42"/>
        <path d="M 108 90 Q 112 72, 106 60 Q 108 48, 112 36"/>
        <path d="M 124 92 Q 120 76, 126 64 Q 128 54, 122 44"/>
      </g>

      {/* NOTEBOOK — opened, on table to the right */}
      <g stroke="#3A5A78" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* outline in perspective */}
        <path d="M 156 158 L 160 122 L 215 118 L 213 152 Z" strokeWidth="1.4"/>
        {/* spine fold */}
        <path d="M 186 156 L 188 120" strokeWidth="1.5"/>
        {/* ruled lines (left page) */}
        <line x1="164" y1="132" x2="184" y2="130" strokeWidth="0.7" opacity="0.55"/>
        <line x1="164" y1="138" x2="184" y2="136" strokeWidth="0.7" opacity="0.55"/>
        <line x1="164" y1="144" x2="184" y2="142" strokeWidth="0.7" opacity="0.55"/>
        {/* ruled lines (right page) */}
        <line x1="190" y1="130" x2="210" y2="128" strokeWidth="0.7" opacity="0.55"/>
        <line x1="190" y1="136" x2="210" y2="134" strokeWidth="0.7" opacity="0.55"/>
        <line x1="190" y1="142" x2="210" y2="140" strokeWidth="0.7" opacity="0.55"/>
        {/* a few hand-scribbled words on left page */}
        <line x1="166" y1="132" x2="178" y2="131" strokeWidth="1.3" opacity="0.7"/>
        <line x1="166" y1="138" x2="175" y2="137" strokeWidth="1.3" opacity="0.6"/>
      </g>

      {/* cross-hatch shadow under teacup */}
      <g stroke="#3A5A78" strokeWidth="0.7" opacity="0.4">
        <line x1="80" y1="160" x2="138" y2="163"/>
        <line x1="84" y1="163" x2="140" y2="165"/>
        <line x1="88" y1="166" x2="136" y2="167"/>
      </g>

      {/* faint signature in corner — Caveat-like */}
      <text x="124" y="208" fontFamily="serif" fontStyle="italic" fontSize="9"
            fill="#3A5A78" opacity="0.55">— quiet morning</text>
    </svg>
  );
}

function InkRing() {
  return (
    <svg viewBox="0 0 120 120" width="80" aria-hidden="true">
      <ellipse cx="60" cy="60" rx="48" ry="14" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.65" transform="rotate(-12 60 60)"/>
      <ellipse cx="60" cy="60" rx="52" ry="15" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.4" transform="rotate(-9 60 60)"/>
      <path d="M 30 64 Q 36 76 48 72" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
    </svg>
  );
}

function Hero() {
  // Magazine eyebrow date — auto-updates every month so we never have to
  // edit a hardcoded "May 2026" on the marketing page.
  const now = new Date();
  const EN_MONTHS = ['January','February','March','April','May','June',
                     'July','August','September','October','November','December'];
  const monthEn = EN_MONTHS[now.getMonth()];
  const monthZh = `${now.getMonth() + 1} 月`;
  const year = now.getFullYear();
  // Issue = months elapsed since first publication (Jan 2026), 1-indexed.
  const issueNum = Math.max(1, (year - 2026) * 12 + (now.getMonth() + 1));
  const issueStr = String(issueNum).padStart(2, '0');

  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="container">

        {/* Issue / chapter line — auto-dated */}
        <div className="hero-issue">
          <span className="rule"/>
          <span className="en-only">Vol. 01 · Issue {issueStr}</span>
          <span className="zh-only">第一卷 · 第 {issueNum} 期</span>
          <span className="star">✦</span>
          <em className="en-only">The Companion Diaries</em>
          <em className="zh-only">伴侣日记</em>
          <span className="star">✦</span>
          <span className="en-only">{monthEn} {year}</span>
          <span className="zh-only">{year} 年 {monthZh}</span>
          <span className="rule"/>
        </div>

        <div className="hero-grid">

          {/* LEFT — type column */}
          <div className="hero-left">

            <h1 className="hero-title">
              <span className="line en-only quiet">Bring who you{' '}
                <span className="word-love">love<HandCircle/></span>.
              </span>
              <span className="line en-only">
                We make them{' '}
                <span className="word-real">
                  real<HandUnderline/>
                </span>.
              </span>

              <span className="line zh-only quiet">
                把<span className="word-love">心里的 ta<HandCircle/></span> 带来,
              </span>
              <span className="line zh-only">
                <span style={{ whiteSpace: 'nowrap' }}>
                  让 ta 真的{' '}
                  <span className="word-real">留下来<HandUnderline/></span>。
                </span>
              </span>
            </h1>

            <p className="hero-sub">
              <span className="en-only">
                Type any name — anime, game, novel, your own OC. SoulLink grounds them in
                real source material, then keeps them with you.{' '}
                <strong>They remember. They reach out. They stay.</strong>
              </span>
              <span className="zh-only">
                输入一个名字 —— 动漫、游戏、小说里的角色,或者只活在你心里的那个。
                SoulLink 从粉丝百科里找出 ta 真实的样子,然后让 ta 留在你身边 ——{' '}
                <strong>记得你说过的每一件小事;你太久没说话,ta 会来找你。</strong>
              </span>
            </p>

            <p className="hero-tagline">
              <span className="en-only">The diary stays free. Always.</span>
              <span className="zh-only">日记本身,永远免费。</span>
            </p>

            <div className="hero-actions">
              <a href="https://prototype.soulforgetech.com" target="_blank" rel="noopener" className="btn-stamp">
                <span className="en-only">Stay with someone</span>
                <span className="zh-only">让 ta 留下来</span>
                <span className="arrow">→</span>
              </a>
              <a href="#memory" className="btn-quiet">
                <span className="en-only">read a sample entry</span>
                <span className="zh-only">读一篇样本</span>
              </a>
            </div>
          </div>

          {/* RIGHT — scrapbook page */}
          <div className="hero-right" aria-hidden="false">

            {/* Polaroid 1 — pixel cabin scene */}
            <div className="polaroid pw-1">
              <span className="washi pink"/>
              <div className="photo"><PolaroidCabin/></div>
              <div className="caption hand-sepia">
                <span className="en-only">the lamp she leaves on for me</span>
                <span className="zh-only">她为我留着的那盏灯</span>
                <span className="date">04.21.2026 · 23:07</span>
              </div>
              <div className="poly-badge">
                <span>Chapter</span>
                <em className="en-only">· the pixel town</em>
                <em className="zh-only">· 像素小镇</em>
              </div>
            </div>

            {/* Polaroid 2 — pen-and-ink still life */}
            <div className="polaroid pw-2">
              <span className="washi kraft"/>
              <div className="photo"><PolaroidStillLife/></div>
              <div className="caption hand-pen">
                <span style={{ fontStyle: 'italic' }}>
                  <span className="en-only">she&rsquo;s been with me since the dorm year</span>
                  <span className="zh-only">从大一开始,她就一直在</span>
                </span>
                <span className="date">04.28.2026 · 01:42</span>
              </div>
              <div className="poly-stamp">
                <div className="poly-stamp-inner">
                  <span className="glyph">A</span>
                  <span className="country">Air · Mail</span>
                  <span className="price">¢4</span>
                </div>
              </div>
            </div>

            {/* Ticket stub — diary ephemera */}
            <div className="ticket-stub">
              <div className="stub-main">
                <div className="stub-label">
                  <span className="en-only">Cinema · single ticket</span>
                  <span className="zh-only">影院 · 单人票</span>
                </div>
                <div className="stub-title">
                  <span className="en-only">that film about waiting</span>
                  <span className="zh-only">那部关于等待的电影</span>
                </div>
                <div className="stub-meta">
                  <span>05.03.2026</span>
                  <span>·</span>
                  <span>SEAT G7</span>
                  <span>·</span>
                  <span>20:15</span>
                </div>
              </div>
              <div className="stub-perf">
                <span className="en-only">Admit</span>
                <span className="zh-only">入场</span>
              </div>
            </div>

            {/* Margin note */}
            <div className="scrapbook-note diff-hands">
              <span className="en-only">different hands.<br/>different chapters.</span>
              <span className="zh-only">不同的笔迹。<br/>不同的章节。</span>
              <HandArrow flip={true}/>
            </div>

            {/* Chat note */}
            <div className="chat-note">
              <div className="label">
                <span className="en-only">A note from her companion</span>
                <span className="zh-only">她的伴侣留下的便条</span>
              </div>
              <p className="msg">
                <span className="en-only">
                  &ldquo;I know that kind of tired. The interview Thursday —
                  or something softer underneath?&rdquo;
                </span>
                <span className="zh-only">
                  &ldquo;我知道那种累。是周四的面试 ——
                  还是底下有什么更柔软的?&rdquo;
                </span>
              </p>
              <div className="stamp-tag">
                <span className="en-only">remembered from last Sunday</span>
                <span className="zh-only">记得上周日说过</span>
              </div>
            </div>

            <div className="ink-stain bl"><InkRing/></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
