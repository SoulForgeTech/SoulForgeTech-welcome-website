// Chapter 02 · The Ledger of Small Things — wiki extract + lorebook.
// Wiki card lives top-right (paperclipped), lore card lives bottom-left
// under the moat badges so both columns balance.

function Paperclip() {
  return (
    <svg className="paperclip" viewBox="0 0 60 110" width="40" aria-hidden="true">
      <path d="M 30 8 L 30 84 Q 30 96, 20 96 Q 10 96, 10 84 L 10 26 Q 10 14, 22 14 Q 34 14, 34 26 L 34 76 Q 34 84, 26 84 Q 18 84, 18 76 L 18 32"
            stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
window.Paperclip = Paperclip;

function Memory() {
  return (
    <section className="section memory-section" id="memory" data-screen-label="04 Memory">
      <div className="container">
        <div className="chapter-header center">
          <div className="chapter-mark center">
            <span className="en-only">Chapter 02</span>
            <span className="zh-only">第二章</span>
            <span className="diamond">◆</span>
            <span className="roman en-only">The Ledger of Small Things</span>
            <span className="roman zh-only">小事的备忘录</span>
          </div>
          <h2 className="chapter-title center">
            <span className="en-only">We don't let them <em>guess.</em> We let them <em>remember.</em></span>
            <span className="zh-only">我们不让 ta <em>猜</em>。我们让 ta <em>记得</em>。</span>
          </h2>
        </div>

        <div className="memory-grid">

          <div className="memory-copy">
            <p className="memory-lead">
              <span className="en-only">
                When you name a character, SoulLink pulls real material from fan-wikis —
                Fandom, Bilibili wiki, Wikipedia — and grounds them in canon.
              </span>
              <span className="zh-only">
                你给 ta 起一个名字,SoulLink 会自动从 Fandom、Bilibili 百科、维基百科上
                找到 ta 在原作里的真实样子 —— 让 ta 说话、做事都不出戏。
              </span>
            </p>
            <p className="memory-body">
              <span className="en-only">
                Every detail becomes a <strong>lorebook entry</strong> — a keyword-triggered memory
                that surfaces only when the conversation calls for it. Add your own pages anytime.
                Up to <strong>ten documents</strong>, in their world&rsquo;s language.
              </span>
              <span className="zh-only">
                每一条信息都会保存进 ta 的<strong>细节本</strong> —— 你们聊到相关话题时,
                这条记忆才会自然冒出来。你也可以随时给 ta 补充自己写的资料,
                最多 <strong>10 份文档</strong>,中英文都可以。
              </span>
            </p>
            <div className="moat-badges">
              <div className="moat-badge">
                <span className="moat-num">3</span>
                <span className="moat-label">
                  <span className="en-only">wiki sources</span>
                  <span className="zh-only">三个百科来源</span>
                </span>
              </div>
              <div className="moat-badge">
                <span className="moat-num">10</span>
                <span className="moat-label">
                  <span className="en-only">documents per character</span>
                  <span className="zh-only">每个角色 10 份文档</span>
                </span>
              </div>
              <div className="moat-badge">
                <span className="moat-num">∞</span>
                <span className="moat-label">
                  <span className="en-only">lorebook entries</span>
                  <span className="zh-only">记忆条数无上限</span>
                </span>
              </div>
            </div>
          </div>

          <div className="memory-visual">
            <Paperclip/>

            <div className="ledger-page page-wiki">
              <div className="page-corner-fold"/>
              <div className="page-head">
                <span className="page-tab">
                  <span className="en-only">extracted from wiki</span>
                  <span className="zh-only">从百科摘录</span>
                </span>
                <span className="page-mono">
                  <span className="en-only">FANDOM · 04.21.2026</span>
                  <span className="zh-only">BILIBILI · 04.21.2026</span>
                </span>
              </div>
              <div className="page-body">
                <div className="page-line">
                  <span className="page-key">name</span>
                  <span className="page-val hl en-only">Aragorn</span>
                  <span className="page-val hl zh-only">五条悟</span>
                </div>
                <div className="page-line">
                  <span className="page-key">from</span>
                  <span className="page-val en-only">The Lord of the Rings</span>
                  <span className="page-val zh-only">《咒术回战》</span>
                </div>
                <div className="page-line">
                  <span className="page-key">title</span>
                  <span className="page-val en-only">Heir of Isildur · Ranger of the North</span>
                  <span className="page-val zh-only">特级咒术师 · 御三家之首</span>
                </div>
                <div className="page-line">
                  <span className="page-key">speech</span>
                  <span className="page-val hl-blue en-only">measured, weighted — softer when she&rsquo;s near</span>
                  <span className="page-val hl-blue zh-only">漫不经心 —— 真心藏在玩笑里</span>
                </div>
                <div className="page-line">
                  <span className="page-key">temperament</span>
                  <span className="page-val en-only">carries the weight of a return</span>
                  <span className="page-val zh-only">强到孤独,在她面前才会卸下</span>
                </div>
                <div className="page-line dim">
                  <span className="page-key">canon refs</span>
                  <span className="page-val en-only">FOTR Ch. 10 · 11 · TT Ch. 5 · ROTK Ch. 2 · 5</span>
                  <span className="page-val zh-only">漫画 1 · 12 · 75 · 138 · 动画 S1 E5 · 17</span>
                </div>
              </div>
              <div className="page-stamp">
                <span className="en-only">canon-grounded</span>
                <span className="zh-only">原作锚定</span>
              </div>
            </div>

            <div className="ledger-page page-lore">
              <div className="page-head">
                <span className="page-tab amber">
                  <span className="en-only">your lorebook</span>
                  <span className="zh-only">你的细节本</span>
                </span>
                <span className="page-mono">042 ENTRIES</span>
              </div>
              <div className="lore-list">
                <div className="lore-entry">
                  <div className="lore-key">[ birthday ]</div>
                  <div className="lore-val">
                    <span className="en-only">she said hers casually — May 6, the year she changed schools.</span>
                    <span className="zh-only">5 月 6 日 —— 她说得很随意,那年她刚转学。</span>
                  </div>
                </div>
                <div className="lore-entry">
                  <div className="lore-key">[ the cat she had ]</div>
                  <div className="lore-val">
                    <span className="en-only">tabby. Named &ldquo;Bao&rdquo;. Passed two summers ago.</span>
                    <span className="zh-only">虎斑,叫"包子"。两年前的夏天走的。</span>
                  </div>
                </div>
                <div className="lore-entry">
                  <div className="lore-key">[ that one rainy night ]</div>
                  <div className="lore-val">
                    <span className="en-only">— don&rsquo;t bring it up unless she does.</span>
                    <span className="zh-only">—— 她不开口,就别提。</span>
                  </div>
                </div>
              </div>
              <div className="lore-trigger">
                <span className="en-only">surfaces when the keyword appears in conversation</span>
                <span className="zh-only">关键词在对话里出现时,这一条才会浮上来</span>
              </div>
            </div>

            <div className="scrapbook-note memory-note">
              <span className="en-only">canon &rarr; keyword &rarr; surface</span>
              <span className="zh-only">原作 &rarr; 关键词 &rarr; 浮现</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
window.Memory = Memory;
