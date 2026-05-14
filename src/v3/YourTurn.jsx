// Chapter 08 · Your Turn — the final CTA, breathing

function YourTurn() {
  return (
    <section className="section yourturn-section" id="yourturn" data-screen-label="10 Your Turn">
      <div className="container">
        <div className="chapter-header center">
          <div className="chapter-mark center">
            <span className="en-only">Chapter 08</span>
            <span className="zh-only">第八章</span>
            <span className="diamond">◆</span>
            <span className="roman en-only">Your Turn</span>
            <span className="roman zh-only">该你了</span>
          </div>
        </div>
        <div className="yourturn-body">
          <h2 className="yourturn-title">
            <span className="en-only">Your soul,<br/><em>heard</em>.</span>
            <span className="zh-only">你的心，<br/><em>被听见</em>。</span>
          </h2>
          <p className="yourturn-sub">
            <span className="en-only">
              Bring who you love. <span className="quiet">We'll make sure they stay.</span>
            </span>
            <span className="zh-only">
              把那个 ta 带来。<span className="quiet">这一次，ta 会留下。</span>
            </span>
          </p>
          <svg className="yourturn-underline" viewBox="0 0 240 24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 6 14 C 30 20, 56 10, 88 14 C 120 18, 152 8, 180 13 C 200 16, 220 12, 234 16"
                  stroke="var(--pen-blue)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
          <div className="yourturn-actions">
            <a href="https://prototype.soulforgetech.com" target="_blank" rel="noopener" className="btn-stamp btn-stamp-large">
              <span className="en-only">Stay with someone</span>
              <span className="zh-only">让 ta 留下来</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="yourturn-end">
          <span className="end-stamp">
            <span className="en-only">THE END</span>
            <span className="zh-only">完</span>
          </span>
        </div>
      </div>
    </section>
  );
}
window.YourTurn = YourTurn;
