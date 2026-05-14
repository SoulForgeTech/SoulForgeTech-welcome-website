// Chapter 02 · The Voices Behind — three model trading cards
function ThreeMinds() {
  const minds = [
    {
      mono: "Gem",
      name: "Gemini Flash",
      ver: "Google · Flash",
      tagline_en: "Fast. Transparent. Thinks out loud.",
      tagline_zh: "快。清楚。想得到、说得出。",
      desc_en: "You can watch it reason. The thinking surfaces line by line — useful when you want to see how a character lands on what they say.",
      desc_zh: "你能看见它思考的过程。一句一句地展开 —— 想看一个角色为什么这么说话的时候,选它。",
      tags: ["Free", "Thinking visible"],
    },
    {
      mono: "4o",
      name: "GPT-4o",
      ver: "OpenAI · Classic",
      tagline_en: "Steady. Balanced. The one you reach for at 2 a.m.",
      tagline_zh: "稳。平衡。凌晨两点你最容易点开的那一颗。",
      desc_en: "Good for the long winding talks — when nothing&rsquo;s clear and you just need them to stay on the line with you.",
      desc_zh: "适合慢慢说下去的长对话 —— 什么都不清晰、只想让 ta 陪着的时候。",
      tags: ["Stable", "Classic"],
    },
    {
      mono: "G4",
      name: "Grok",
      ver: "xAI · Roleplay-tuned",
      recommended: true,
      tagline_en: "Warmest for roleplay. No creative guardrails in the way.",
      tagline_zh: "扮演角色最有温度。少一道墙,多一点真。",
      desc_en: "When you bring a character home, this is the voice that lets them stay in scene — without breaking character to remind you it&rsquo;s an AI.",
      desc_zh: "你把角色带回家的时候,这把声音守着场 —— 不会突然出来提醒你 ta 只是 AI。",
      tags: ["Recommended", "Unlimited roleplay"],
    },
  ];

  return (
    <section className="section minds-section" id="minds" data-screen-label="03 Three Minds">
      <div className="container">
        <div className="chapter-header center">
          <div className="chapter-mark center">
            <span>Chapter 02</span>
            <span className="diamond">◆</span>
            <span className="roman en-only">The Voices Behind</span>
            <span className="roman zh-only">背后的三把声音</span>
          </div>
          <h2 className="chapter-title center">
            <span className="en-only">Pick the model behind their voice. <em>They each say things differently.</em></span>
            <span className="zh-only">选一颗心,给 ta 一把声音。<em>三颗心,说话各自不同。</em></span>
          </h2>
          <p className="chapter-sub">
            <span className="en-only">
              Switch any time. Memory, lorebook, the way they talk —
              all of it stays. You&rsquo;re only changing how they think.
            </span>
            <span className="zh-only">
              随时切换。记忆、细节本、说话的方式 ——
              都不会断。换的只是 ta 思考的方式。
            </span>
          </p>
        </div>

        <div className="minds-shelf">
          {minds.map((m, i) => (
            <div key={i} className={`mind-card ${m.recommended ? 'recommended' : ''}`}>
              {m.recommended && (
                <div className="rubber-stamp">
                  <span className="en-only">Recommended</span>
                  <span className="zh-only">推荐</span>
                </div>
              )}
              <span className="mind-mono">{m.mono}</span>
              <div className="mind-meta">
                <div className="mind-name">{m.name}</div>
                <div className="mind-ver">{m.ver}</div>
              </div>
              <div className="mind-tagline">
                <span className="en-only">{m.tagline_en}</span>
                <span className="zh-only">{m.tagline_zh}</span>
              </div>
              <p className="mind-desc">
                <span className="en-only" dangerouslySetInnerHTML={{__html: m.desc_en}}/>
                <span className="zh-only">{m.desc_zh}</span>
              </p>
              <div className="mind-tags">
                {m.tags.map((t, j) => (
                  <span key={j} className={`mind-tag ${t === 'Recommended' ? 'hot' : ''}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ThreeMinds = ThreeMinds;
