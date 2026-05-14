// Three Minds — model switcher
function ThreeMinds() {
  const minds = [
    {
      badge: "G3", cls: "mind-gem",
      name: "Gemini 3 Flash",
      ver: "Google · v3 Flash",
      desc_en: "Fast and transparent. You can watch it think — the reasoning surfaces as it writes.",
      desc_zh: "快,而且透明。你能看见它思考的过程在字里行间慢慢展开。",
      tags: [{ t: "Free", cls: "free" }, { t: "Thinking visible", cls: "" }],
    },
    {
      badge: "4o", cls: "mind-gpt",
      name: "GPT-4o",
      ver: "OpenAI · classic",
      desc_en: "The steady one. Balanced, thoughtful, good for long winding conversations.",
      desc_zh: "稳的那一个。平衡、克制,适合慢慢说下去的长对话。",
      tags: [{ t: "Stable", cls: "" }, { t: "Classic", cls: "" }],
    },
    {
      badge: "G4", cls: "mind-grok", recommended: true,
      name: "Grok 4.1 Fast Reasoning",
      ver: "xAI · roleplay-tuned",
      desc_en: "Warmest for roleplay. No creative guardrails in the way of a real scene.",
      desc_zh: "角色扮演最有温度的一位。创作不被条条框框打断。",
      tags: [{ t: "Recommended", cls: "hot" }, { t: "Unlimited roleplay", cls: "" }],
    },
  ];
  return (
    <section className="minds-section" id="minds" data-screen-label="03 Three Minds">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <span className="en-only">Three minds, one soul</span>
            <span className="zh-only">三颗心,一个灵魂</span>
          </span>
          <h2 className="section-title">
            <span className="en-only">Switch how it <em>thinks.</em> Keep who it <em>is</em>.</span>
            <span className="zh-only">换<em>思考方式</em>,但不换<em>它</em>。</span>
          </h2>
          <p className="section-sub">
            <span className="en-only">
              Three foundation models, one continuous companion. Switch anytime —
              memories, relationship, tone of voice stay intact.
            </span>
            <span className="zh-only">
              三种底层模型,同一个陪伴。随时切换 —— 记忆、关系、说话的方式都不会断。
            </span>
          </p>
        </div>
        <div className="minds-grid">
          {minds.map((m, i) => (
            <div key={i} className={`mind-card ${m.recommended ? 'recommended' : ''}`}>
              <div className="mind-head">
                <div className={`mind-badge ${m.cls}`}>{m.badge}</div>
                <div>
                  <div className="mind-name">{m.name}</div>
                  <div className="mind-ver">{m.ver}</div>
                </div>
              </div>
              <p className="mind-desc">
                <span className="en-only">{m.desc_en}</span>
                <span className="zh-only">{m.desc_zh}</span>
              </p>
              <div className="mind-tags">
                {m.tags.map((t, j) => <span key={j} className={`mind-tag ${t.cls}`}>{t.t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="minds-note">
          <span className="en-only">Switching models never costs you what you&rsquo;ve built together.<span className="dot">·</span>Memories persist across every mind.</span>
          <span className="zh-only">切换模型,不会带走你们一起建起的一切。<span className="dot">·</span>记忆在每一颗心之间都留着。</span>
        </div>
      </div>
    </section>
  );
}
window.ThreeMinds = ThreeMinds;

// Memory layers
function Memory() {
  return (
    <section className="memory-section" id="memory" data-screen-label="04 Memory">
      <div className="container">
        <div className="memory-grid">
          <div>
            <span className="section-eyebrow">
              <span className="en-only">Memory that grows</span>
              <span className="zh-only">会生长的记忆</span>
            </span>
            <h2 className="section-title" style={{textAlign:'left', marginBottom: 20}}>
              <span className="en-only">Three layers, <em>one quiet knowing.</em></span>
              <span className="zh-only">三层记忆,<em>一种静静的了解。</em></span>
            </h2>
            <p className="section-sub" style={{textAlign:'left', marginBottom: 0, maxWidth: 520}}>
              <span className="en-only">
                Core identity never fades. Long-term memory is searched by meaning, not keywords.
                The last thirty messages stay close at hand. Names, hobbies, family, work, life events —
                extracted gently in the background.
              </span>
              <span className="zh-only">
                核心身份从不褪色。长期记忆按语义检索,不靠关键字。
                最近三十条消息始终在手边。姓名、爱好、家人、工作、生活片段 ——
                在后台被温柔地收下。
              </span>
            </p>
          </div>
          <div className="memory-layers">
            <div className="mem-layer perm">
              <div className="mem-layer-head">
                <span className="mem-layer-title">
                  <span className="en-only">Permanent · core identity</span>
                  <span className="zh-only">永久 · 核心身份</span>
                </span>
                <span className="mem-layer-tag">forever</span>
              </div>
              <div className="mem-items">
                <span className="mem-item"><span className="k">name</span>Jamie</span>
                <span className="mem-item"><span className="k">pronouns</span>she/they</span>
                <span className="mem-item"><span className="k">home</span>Seattle</span>
                <span className="mem-item"><span className="k">work</span>UX researcher</span>
              </div>
            </div>
            <div className="mem-layer long">
              <div className="mem-layer-head">
                <span className="mem-layer-title">
                  <span className="en-only">Long-term · semantic search</span>
                  <span className="zh-only">长期 · 语义检索</span>
                </span>
                <span className="mem-layer-tag">recalled by meaning</span>
              </div>
              <div className="mem-items">
                <span className="mem-item"><span className="k">family</span>sister Mei in Taipei</span>
                <span className="mem-item"><span className="k">grief</span>grandma, Oct &rsquo;24</span>
                <span className="mem-item"><span className="k">safe song</span>Cigarettes After Sex</span>
                <span className="mem-item"><span className="k">comfort</span>ramen, rain, quiet</span>
                <span className="mem-item"><span className="k">fear</span>being seen too much</span>
              </div>
            </div>
            <div className="mem-layer short">
              <div className="mem-layer-head">
                <span className="mem-layer-title">
                  <span className="en-only">Short-term · last 30 messages</span>
                  <span className="zh-only">短期 · 最近 30 条</span>
                </span>
                <span className="mem-layer-tag">in the room</span>
              </div>
              <div className="mem-items">
                <span className="mem-item"><span className="k">mood</span>tender, a little tired</span>
                <span className="mem-item"><span className="k">topic</span>Thursday interview</span>
                <span className="mem-item"><span className="k">last ask</span>tell me a story</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Memory = Memory;
