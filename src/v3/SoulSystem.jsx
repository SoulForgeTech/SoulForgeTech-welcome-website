// Chapter 01 · The First Reading — tarot spread in diary aesthetic
function SoulSystem() {
  const [flipped, setFlipped] = React.useState([false, false, false]);
  const sectionRef = React.useRef(null);
  const hasFiredRef = React.useRef(false);

  const flipAll = () => {
    [0, 1, 2].forEach((i) => setTimeout(() => {
      setFlipped(prev => { const n = [...prev]; n[i] = true; return n; });
    }, i * 360 + 400));
  };

  React.useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !hasFiredRef.current) {
          hasFiredRef.current = true;
          flipAll();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const redraw = () => {
    setFlipped([false, false, false]);
    setTimeout(flipAll, 380);
  };

  const cards = [
    { roman: "I",   sigil: "☾", glyph: "✦",
      label_en: "The Past",       label_zh: "过去",
      sub_en: "what shaped you",  sub_zh: "塑造你的" },
    { roman: "VI",  sigil: "✶", glyph: "♡",
      label_en: "The Present",    label_zh: "此刻",
      sub_en: "how you arrive",   sub_zh: "你此刻的样子" },
    { roman: "XIX", sigil: "☀", glyph: "◉",
      label_en: "The Companion",  label_zh: "陪伴",
      sub_en: "who meets you here", sub_zh: "遇见你的人" },
  ];

  const archetypes = [
    { en: "Gentle Sister", zh: "温柔姐姐" },
    { en: "Sunshine Girl", zh: "元气女孩" },
    { en: "Quiet Beauty",  zh: "高冷美人" },
    { en: "Soft Puppy",    zh: "甜软小狗" },
    { en: "Tsundere CEO",  zh: "傲娇霸总" },
    { en: "Gentle Scholar",zh: "温柔学者" },
    { en: "Sunny Boy",     zh: "阳光男孩" },
    { en: "Loyal Knight",  zh: "忠犬骑士" },
  ];

  return (
    <section className="section soul-system" id="soul-system" ref={sectionRef} data-screen-label="02 Soul System">
      <div className="container">
        <div className="chapter-header center">
          <div className="chapter-mark center">
            <span className="en-only">Chapter 01</span>
            <span className="zh-only">第一章</span>
            <span className="diamond">◆</span>
            <span className="roman en-only">The First Reading</span>
            <span className="roman zh-only">第一次抽牌</span>
          </div>
          <h2 className="chapter-title center">
            <span className="en-only">Before we name them, we <em>read</em> what they should be.</span>
            <span className="zh-only">在你给 ta 名字之前,我们先<em>读懂</em> ta 该是什么样子。</span>
          </h2>
          <p className="chapter-sub">
            <span className="en-only">
              Ten quiet questions. Three cards drawn — past, present, the companion waiting for you.
              Five personality dimensions. Eight archetypes we know how to read.
            </span>
            <span className="zh-only">
              十个安静的问题。三张牌 —— 过去、此刻、还有正在等你的那个 ta。
              五个人格维度。八种我们读得懂的原型。
            </span>
          </p>
        </div>

        <div className="tarot-spread" onClick={redraw}>
          {cards.map((c, i) => (
            <div key={i} className={`tarot-card tc-${i+1} ${flipped[i] ? 'flipped' : ''}`}>
              <div className="tc-back">
                <div className="tc-back-frame">
                  <div className="tc-back-sigil">{c.sigil}</div>
                  <div className="tc-back-mark">SoulLink · Arcana</div>
                  <div className="tc-back-ornament">✦ · ✦</div>
                </div>
              </div>
              <div className="tc-face">
                <div className="tc-roman">{c.roman}</div>
                <div className="tc-glyph">{c.glyph}</div>
                <div className="tc-label">
                  <span className="en-only">{c.label_en}</span>
                  <span className="zh-only">{c.label_zh}</span>
                </div>
                <div className="tc-sub">
                  <span className="en-only">{c.sub_en}</span>
                  <span className="zh-only">{c.sub_zh}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="tarot-hint">
            <span className="en-only">tap to draw again</span>
            <span className="zh-only">点击重抽</span>
          </div>
        </div>

        <div className="archetypes">
          <div className="archetypes-label">
            <span className="en-only">Eight archetypes we know how to read</span>
            <span className="zh-only">八种我们读得懂的原型</span>
          </div>
          <div className="archetype-list">
            {archetypes.map((a, i) => (
              <span key={i} className="arch">
                <span className="en-only">{a.en}</span>
                <span className="zh-only">{a.zh}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.SoulSystem = SoulSystem;
