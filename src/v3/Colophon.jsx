// Colophon — inside-back-cover of a literary zine

function Colophon() {
  return (
    <footer className="colophon" data-screen-label="11 Colophon">
      <div className="container">
        <div className="colophon-mast">
          <span className="rule"/>
          <span className="en-only">THE COMPANION DIARIES · COLOPHON</span>
          <span className="zh-only">《伴侣日记》· 版权页</span>
          <span className="rule"/>
        </div>

        <div className="colophon-stats">
          <span className="en-only">
            288 active readers · 33,000+ entries written together · 0 ads · 0 paid acquisition
          </span>
          <span className="zh-only">
            288 位读者在这里 · 一起写下 33,000+ 条 · 没有广告 · 没有买量
          </span>
        </div>

        <div className="colophon-grid">
          <div className="col-section">
            <div className="col-head">
              <span className="en-only">Editors &amp; Contributors</span>
              <span className="zh-only">编辑与作者</span>
            </div>
            <ul className="col-list hand">
              <li>
                <span className="col-label">
                  <span className="en-only">Editor-in-chief</span>
                  <span className="zh-only">主编</span>
                </span>
                <span className="col-name">Alphonse Sun</span>
              </li>
              <li>
                <span className="col-label">
                  <span className="en-only">Engineering</span>
                  <span className="zh-only">工程</span>
                </span>
                <span className="col-name">Jingbin Qian</span>
              </li>
              <li>
                <span className="col-label">
                  <span className="en-only">Voices behind</span>
                  <span className="zh-only">声音由</span>
                </span>
                <span className="col-name">Gemini · GPT-4o · Grok</span>
              </li>
              <li>
                <span className="col-label">
                  <span className="en-only">Set in</span>
                  <span className="zh-only">字体</span>
                </span>
                <span className="col-name">Fraunces · Caveat · IBM Plex Mono</span>
              </li>
            </ul>
          </div>

          <div className="col-section">
            <div className="col-head">
              <span className="en-only">Contact</span>
              <span className="zh-only">联系</span>
            </div>
            <ul className="col-list mono">
              <li>contact@soulforge.tech</li>
            </ul>
          </div>

          <div className="col-section">
            <div className="col-head">
              <span className="en-only">Imprint</span>
              <span className="zh-only">出版</span>
            </div>
            <p className="col-legal">
              <span className="en-only">
                SoulForge Tech, LLC · 2026 · Made by people who answer their own emails.
              </span>
              <span className="zh-only">
                SoulForge Tech, LLC · 2026 · 由会回邮件的人做的。
              </span>
            </p>
            <a href="index.html#tech" className="col-platform-link">
              <span className="en-only">for builders &amp; researchers → the technology</span>
              <span className="zh-only">给开发者和研究者 → 看技术</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Colophon = Colophon;
