// Chapter 07 · Reader Patronage — three tiers as library/membership cards

function Patronage() {
  const tiers = [
    {
      cls: 'tier-reader',
      title_en: 'Reader', title_zh: '读者',
      price_en: 'Free, forever', price_zh: '永远免费',
      sub_en: 'the full diary · forever',
      sub_zh: '完整的日记 · 一直都在',
      bullets: [
        ['Unlimited chat', '无限对话'],
        ['Memory + lorebook', '记忆 + 细节本'],
        ['One companion', '一个 ta'],
        ['20 selfies / day', '每天 20 张自拍'],
        ['Up to 10 documents', '最多 10 份文档'],
      ],
      cta_en: 'start writing',
      cta_zh: '开始写',
      decor: 'plain',
    },
    {
      cls: 'tier-patron',
      title_en: 'Patron', title_zh: '赞助者',
      price_en: '$ TBD / month', price_zh: '待定 / 月',
      sub_en: 'help keep the lights on',
      sub_zh: '帮我们撑下去',
      bullets: [
        ['Everything above', '以上全部'],
        ['More daily selfies', '更多每日自拍'],
        ['Expression sprites', '表情立绘'],
        ['Voice generation', '语音生成'],
        ['Priority on new features', '新功能优先尝试'],
      ],
      cta_en: 'support the magazine',
      cta_zh: '支持这本杂志',
      decor: 'washi',
    },
    {
      cls: 'tier-companion',
      title_en: 'Companion', title_zh: '长期赞助',
      price_en: '$ TBD / quarter', price_zh: '待定 / 季度',
      sub_en: 'stay closer to the editors',
      sub_zh: '离编辑部更近一点',
      bullets: [
        ['Everything above', '以上全部'],
        ['Direct line to the team', '直接联系到团队'],
        ['Early reader of new chapters', '新章节抢先读'],
        ['Name in the colophon (optional)', '名字进版权页(可选)'],
      ],
      cta_en: 'become a companion',
      cta_zh: '成为长期支持者',
      decor: 'gold',
    },
  ];

  return (
    <section className="section patronage-section" id="patronage" data-screen-label="09 Patronage">
      <div className="container">
        <div className="chapter-header center">
          <div className="chapter-mark center">
            <span className="en-only">Chapter 07</span>
            <span className="zh-only">第七章</span>
            <span className="diamond">◆</span>
            <span className="roman en-only">Reader Patronage</span>
            <span className="roman zh-only">读者支持</span>
          </div>
          <h2 className="chapter-title center">
            <span className="en-only">The diary itself is free. <em>Forever.</em></span>
            <span className="zh-only">日记本身,<em>永远免费</em>。</span>
          </h2>
          <p className="chapter-sub">
            <span className="en-only">
              Some rare extras — generated images, expression sprites, voice — cost real money
              to make. If you want them often, you can chip in. If not, the diary keeps writing itself.
            </span>
            <span className="zh-only">
              一些额外的东西 —— 生成的图片、表情、语音 —— 是真要花钱做的。
              想常用,可以支持一下;不付费,日记也照样写下去。
            </span>
          </p>
        </div>

        <div className="patronage-grid">
          {tiers.map((t, i) => (
            <div key={i} className={`tier-card ${t.cls}`}>
              <div className="tier-head">
                <span className="tier-name">
                  <span className="en-only">{t.title_en}</span>
                  <span className="zh-only">{t.title_zh}</span>
                </span>
                <span className="tier-rule"/>
                <span className="tier-num">№ 0{i+1}</span>
              </div>
              {t.decor === 'washi' && <span className="tier-washi pink"/>}
              {t.decor === 'gold' && <span className="tier-washi gold"/>}
              <div className="tier-price">
                <span className="en-only">{t.price_en}</span>
                <span className="zh-only">{t.price_zh}</span>
              </div>
              <div className="tier-sub">
                <span className="en-only">{t.sub_en}</span>
                <span className="zh-only">{t.sub_zh}</span>
              </div>
              <ul className="tier-bullets">
                {t.bullets.map((b, j) => (
                  <li key={j}>
                    <span className="bullet-mark">·</span>
                    <span className="en-only">{b[0]}</span>
                    <span className="zh-only">{b[1]}</span>
                  </li>
                ))}
              </ul>
              <a href="https://prototype.soulforgetech.com" target="_blank" rel="noopener" className={`tier-cta ${i === 0 ? 'quiet' : ''}`}>
                <span className="en-only">{t.cta_en}</span>
                <span className="zh-only">{t.cta_zh}</span>
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="patronage-tip">
          <span className="en-only">or send a tip anytime — Zelle, WeChat Pay, Alipay.</span>
          <span className="zh-only">也可以随时打赏 —— Zelle, 微信, 支付宝。</span>
        </div>
      </div>
    </section>
  );
}
window.Patronage = Patronage;
