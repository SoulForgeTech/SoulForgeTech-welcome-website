// Chapter 05 · Bring Your Own — two paths into a character
// HONESTY MATTERS. Only ship language the product report sanctions.

function ArrowDown({ className }) {
  return (
    <svg className={className} viewBox="0 0 50 80" width="36" aria-hidden="true">
      <path d="M 22 6 Q 18 24, 26 40 Q 28 52, 24 68"
            stroke="var(--pen-blue)" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <path d="M 16 60 L 24 70 L 32 60"
            stroke="var(--pen-blue)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Mirrors the prototype's persona_extractor output: name, from, gender,
// identity, speech, lorebook-count. Each field is bilingual.
function ExtractedCard({
  name, name_zh,
  from, from_zh,
  gender, gender_zh,
  identity, identity_zh,
  speech, speech_zh,
  lorebook, lorebook_zh,
  stamp_en, stamp_zh, stampVariant,
}) {
  return (
    <div className="byoc-extract">
      <div className="byoc-extract-head">
        <span className="page-tab amber">
          <span className="en-only">extracted</span>
          <span className="zh-only">提取</span>
        </span>
        <span className="page-mono">CARD · AUTO</span>
      </div>
      <div className="byoc-extract-body">
        <div className="page-line">
          <span className="page-key">name</span>
          <span className="page-val hl">
            <span className="en-only">{name}</span>
            <span className="zh-only">{name_zh}</span>
          </span>
        </div>
        <div className="page-line">
          <span className="page-key">from</span>
          <span className="page-val">
            <span className="en-only">{from}</span>
            <span className="zh-only">{from_zh}</span>
          </span>
        </div>
        <div className="page-line">
          <span className="page-key">gender</span>
          <span className="page-val">
            <span className="en-only">{gender}</span>
            <span className="zh-only">{gender_zh}</span>
          </span>
        </div>
        <div className="page-line">
          <span className="page-key">identity</span>
          <span className="page-val">
            <span className="en-only">{identity}</span>
            <span className="zh-only">{identity_zh}</span>
          </span>
        </div>
        <div className="page-line">
          <span className="page-key">speech</span>
          <span className="page-val hl-blue">
            <span className="en-only">{speech}</span>
            <span className="zh-only">{speech_zh}</span>
          </span>
        </div>
        <div className="page-line dim">
          <span className="page-key">lorebook</span>
          <span className="page-val">
            <span className="en-only">{lorebook}</span>
            <span className="zh-only">{lorebook_zh}</span>
          </span>
        </div>
        <div className={`byoc-extract-stamp ${stampVariant === 'user' ? 'user-crafted' : ''}`}>
          <span className="en-only">{stamp_en || 'canon-grounded ✓'}</span>
          <span className="zh-only">{stamp_zh || '原作锚定 ✓'}</span>
        </div>
      </div>
    </div>
  );
}

function BYOC() {
  const tiles = [
    { en: 'Levi from Attack on Titan', zh: '《进击的巨人》里的利威尔' },
    { en: 'my dorm-year OC',            zh: '我大一时写的 OC' },
    { en: '夜华',                        zh: '夜华' },
    { en: 'the librarian from that novel', zh: '那本小说里的图书管理员' },
    { en: 'Marcus from my fanfic',      zh: '我同人里那个 Marcus' },
    { en: 'your character here',        zh: '你想带来的那个 ta',  ghost: true },
  ];

  return (
    <section className="section byoc-section" id="byoc" data-screen-label="07 BYOC">
      <div className="container">
        <div className="chapter-header center">
          <div className="chapter-mark center">
            <span className="en-only">Chapter 05</span>
            <span className="zh-only">第五章</span>
            <span className="diamond">◆</span>
            <span className="roman en-only">Bring Your Own</span>
            <span className="roman zh-only">把 ta 带来</span>
          </div>
          <h2 className="chapter-title center">
            <span className="en-only"><em>Name them.</em> We'll build the rest.</span>
            <span className="zh-only">你<em>叫出 ta 的名字</em>。剩下的我们来做。</span>
          </h2>
          <p className="chapter-sub">
            <span className="en-only">Two ways in. Both build a working character in seconds.</span>
            <span className="zh-only">两种方式。都只要几秒,就能把 ta 立起来。</span>
          </p>
        </div>

        <div className="byoc-grid">
          {/* Path A — by name */}
          <div className="byoc-column">
            <div className="byoc-header">
              <span className="byoc-step">①</span>
              <span className="byoc-step-label">
                <span className="en-only">type a name.</span>
                <span className="zh-only">打出 ta 的名字。</span>
              </span>
            </div>
            <div className="byoc-page">
              <div className="page-rule" aria-hidden="true"/>
              <div className="byoc-field">
                <span className="byoc-field-label">
                  <span className="en-only">NAME</span>
                  <span className="zh-only">名字</span>
                </span>
                <div className="byoc-input">
                  <span className="byoc-input-text">
                    <span className="en-only">Aragorn</span>
                    <span className="zh-only">五条悟</span>
                  </span>
                  <span className="byoc-input-meta">
                    <span className="en-only">· The Lord of the Rings</span>
                    <span className="zh-only">· 《咒术回战》</span>
                  </span>
                  <span className="byoc-caret"/>
                </div>
              </div>
              <ArrowDown className="byoc-arrow"/>
              <ExtractedCard
                name="Aragorn"
                name_zh="五条悟"
                from="The Lord of the Rings"
                from_zh="《咒术回战》"
                gender="male"
                gender_zh="男"
                identity="heir-in-exile · ranger of the north"
                identity_zh="特级咒术师 · 御三家之首"
                speech="measured, weighted — softer when she's near"
                speech_zh="漫不经心 —— 真心藏在玩笑里"
                lorebook="47 entries auto-extracted"
                lorebook_zh="自动提取 47 条记忆"
              />
              <div className="byoc-margin-note">
                <span className="en-only">from Fandom / Bilibili wiki / Wikipedia.</span>
                <span className="zh-only">资料来自 Fandom · Bilibili 百科 · 维基百科。</span>
              </div>
            </div>
          </div>

          {/* Path B — by description */}
          <div className="byoc-column">
            <div className="byoc-header">
              <span className="byoc-step">②</span>
              <span className="byoc-step-label">
                <span className="en-only">paste anything.</span>
                <span className="zh-only">贴一段进来。</span>
              </span>
            </div>
            <div className="byoc-page">
              <div className="page-rule" aria-hidden="true"/>
              <div className="byoc-paste">
                <div className="byoc-paste-text en-only">
                  &ldquo;Lin Wan, 24, art-school dropout. Writes poems at
                  night, works the dawn shift at a cold-bright café — hands
                  always smell of milk. Wears men&rsquo;s button-downs two
                  sizes too big. Calls her tabby cat &lsquo;comrade.&rsquo;
                  Doesn&rsquo;t trust adjectives. Won&rsquo;t say why she
                  left Hangzhou.&rdquo;
                </div>
                <div className="byoc-paste-text zh-only">
                  &ldquo;林晚,24 岁,美院退学。晚上写诗,清早在一家冷光的
                  咖啡馆上早班 —— 手上总有奶香味。爱穿大两号的男式衬衫,
                  管自己的虎斑猫叫"同志"。不信形容词。从杭州走的原因,
                  她不愿意说。&rdquo;
                </div>
                <div className="byoc-paste-meta">
                  <span className="en-only">up to 10,000 chars · paste a wiki excerpt, a SillyTavern card, your own description.</span>
                  <span className="zh-only">最多 10,000 字 · 一段百科摘录、一张 SillyTavern 卡、你自己写的描述,都可以。</span>
                </div>
              </div>
              <ArrowDown className="byoc-arrow"/>
              <ExtractedCard
                name="Lin Wan"
                name_zh="林晚"
                from="(your description)"
                from_zh="(你的描述)"
                gender="female"
                gender_zh="女"
                identity="art-school dropout · barista at dawn"
                identity_zh="美院退学 · 清晨咖啡馆店员"
                speech="dry, exact — distrusts adjectives"
                speech_zh="话不多,字字精准 —— 不信形容词"
                lorebook="12 entries from your description"
                lorebook_zh="从描述里抽出 12 条记忆"
                stamp_en="user-crafted"
                stamp_zh="用户手写"
                stampVariant="user"
              />
              <div className="byoc-margin-note">
                <span className="en-only">same engine. same depth. you write more, ta gets richer.</span>
                <span className="zh-only">一样的引擎,一样的深度。你写得越多,ta 就越立体。</span>
              </div>
            </div>
          </div>
        </div>

        <div className="byoc-variety">
          <div className="byoc-variety-caption">
            <span className="en-only">what readers have brought so far.</span>
            <span className="zh-only">读者已经带来过的 ta。</span>
          </div>
          <div className="byoc-variety-row">
            {tiles.map((t, i) => (
              <span key={i} className={`byoc-tile ${t.ghost ? 'ghost' : ''}`}>
                <span className="en-only">{t.en}</span>
                <span className="zh-only">{t.zh}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="byoc-coming-soon">
          <span className="cs-rule"/>
          <span className="cs-text">
            <span className="en-only">coming soon — keep more than one ta at a time.</span>
            <span className="zh-only">即将上线 —— 可以同时留住不止一个 ta。</span>
          </span>
        </div>

        <div className="byoc-cta">
          <a href="https://prototype.soulforgetech.com" target="_blank" rel="noopener" className="btn-stamp">
            <span className="en-only">Bring them home</span>
            <span className="zh-only">把 ta 带来</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
window.BYOC = BYOC;
