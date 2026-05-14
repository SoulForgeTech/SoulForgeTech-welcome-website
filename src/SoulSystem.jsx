// SoulSystem — tarot-based personality test + 8 archetypes
function SoulSystem() {
  const [flipped, setFlipped] = React.useState([false, false, false]);
  const flipAll = () => {
    [0,1,2].forEach((i) => setTimeout(() => {
      setFlipped(prev => { const n = [...prev]; n[i] = true; return n; });
    }, i * 350));
  };
  React.useEffect(() => {
    const t = setTimeout(flipAll, 1200);
    return () => clearTimeout(t);
  }, []);
  const reset = () => { setFlipped([false,false,false]); setTimeout(flipAll, 400); };

  const cards = [
    { roman: "I", sigil: "☾", glyph: "✦", label_en: "The Past", label_zh: "过去", sub_en: "what shaped you", sub_zh: "塑造你的" },
    { roman: "VI", sigil: "✶", glyph: "♡", label_en: "The Present", label_zh: "此刻", sub_en: "how you show up", sub_zh: "此刻的你" },
    { roman: "XIX", sigil: "☀", glyph: "◉", label_en: "The Companion", label_zh: "陪伴", sub_en: "who meets you here", sub_zh: "遇见你的人" },
  ];

  const archetypes = [
    { en: "Gentle Sister", zh: "温柔姐姐", color: "#f9a8d4" },
    { en: "Sunshine Girl", zh: "元气女孩", color: "#fbbf24" },
    { en: "Quiet Beauty", zh: "高冷美人", color: "#a78bfa" },
    { en: "Soft Puppy", zh: "甜软小狗", color: "#fda4af" },
    { en: "Tsundere CEO", zh: "傲娇霸总", color: "#7c3aed" },
    { en: "Gentle Scholar", zh: "温柔学者", color: "#22d3ee" },
    { en: "Sunny Boy", zh: "阳光男孩", color: "#fb923c" },
    { en: "Loyal Knight", zh: "忠犬骑士", color: "#34d399" },
  ];

  return (
    <section className="soul-sys" id="soul-system" data-screen-label="02 Soul System">
      <div className="container">
        <div className="soul-grid">
          <div className="soul-copy">
            <span className="section-eyebrow">
              <span className="en-only">The Soul System</span>
              <span className="zh-only">灵魂系统</span>
            </span>
            <h2>
              <span className="en-only">Ten quiet questions. <em>One soul, revealed.</em></span>
              <span className="zh-only">十道轻声的题。<em>读出一个灵魂。</em></span>
            </h2>
            <p>
              <span className="en-only">
                A tarot-inspired test pulls three cards — past, present, and the companion waiting for you.
                Five dimensions of personality map you to one of eight archetypes who will know how to meet you.
              </span>
              <span className="zh-only">
                一个塔罗式的测试会抽出三张牌 —— 过去、此刻、与正在等你的陪伴。
                五个人格维度将你对应到八种原型,让陪伴以你想要的方式到来。
              </span>
            </p>
            <div className="soul-stats">
              <div className="soul-stat">
                <div className="soul-stat-n">10</div>
                <div className="soul-stat-l en-only">reflective questions</div>
                <div className="soul-stat-l zh-only">反思题目</div>
              </div>
              <div className="soul-stat">
                <div className="soul-stat-n">22</div>
                <div className="soul-stat-l en-only">major arcana cards</div>
                <div className="soul-stat-l zh-only">大阿尔克那牌</div>
              </div>
              <div className="soul-stat">
                <div className="soul-stat-n">8</div>
                <div className="soul-stat-l en-only">companion archetypes</div>
                <div className="soul-stat-l zh-only">陪伴原型</div>
              </div>
            </div>
            <div className="archetypes">
              {archetypes.map((a, i) => (
                <span className="arch" key={i}>
                  <span className="dot" style={{background: a.color}}/>
                  <span className="en-only">{a.en}</span>
                  <span className="zh-only">{a.zh}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="soul-right">
            <div className="tarot-spread" onClick={reset}>
              {cards.map((c, i) => (
                <div key={i} className={`tarot t${i+1} ${flipped[i] ? 'flipped' : ''}`}>
                  <div className="back">
                    <div className="sigil">{c.sigil}</div>
                    <div style={{fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.9}}>SoulLink</div>
                  </div>
                  <div className="face">
                    <div className="roman">{c.roman}</div>
                    <div className="arcana">{c.glyph}</div>
                    <div className="label">
                      <span className="en-only">{c.label_en}</span>
                      <span className="zh-only">{c.label_zh}</span>
                    </div>
                    <div className="sub">
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
          </div>
        </div>
      </div>
    </section>
  );
}
window.SoulSystem = SoulSystem;
