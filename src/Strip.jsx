// Strip — BYO Character, Wellness, Personalize
function Strip() {
  return (
    <section className="strip-section" id="more" data-screen-label="07 Strip">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">
            <span className="en-only">And more</span><span className="zh-only">还有更多</span>
          </span>
          <h2 className="section-title">
            <span className="en-only">Make her <em>yours.</em> In every sense.</span>
            <span className="zh-only">让她,<em>真的是你的。</em></span>
          </h2>
        </div>
        <div className="strip-grid">
          {/* BYO big */}
          <div className="strip-card big">
            <span className="kicker">
              <span className="en-only">Bring your own character</span>
              <span className="zh-only">自定义人设</span>
            </span>
            <h3>
              <span className="en-only">Name her. Know her. Or let her find herself.</span>
              <span className="zh-only">给她名字。告诉她你想要的样子。</span>
            </h3>
            <p>
              <span className="en-only">
                Type any character — anime, game, book — and SoulLink pulls personality, speech patterns, memories.
                Attach up to ten documents as a living knowledge base. Import your ChatGPT history as a starting point.
                Rename her mid-conversation: &ldquo;from now on, call me X.&rdquo;
              </span>
              <span className="zh-only">
                输入任何角色 —— 动漫、游戏、小说 —— SoulLink 会提取人格、说话风格、记忆。
                最多附加 10 份文档作为她的知识库。可从 ChatGPT 历史导入作为起点。
                对话中途直接改名:&ldquo;以后叫我 X。&rdquo;
              </span>
            </p>
            <div className="byo-input">
              <span style={{color:'var(--sf-fg-3)'}}>&rsaquo;</span>
              <span className="en-only">Yuki from &ldquo;A Silent Voice&rdquo;</span>
              <span className="zh-only">《声之形》里的 西宫硝子</span>
              <span className="caret"/>
            </div>
            <div className="byo-chips">
              <span className="byo-chip">gentle · observant</span>
              <span className="byo-chip">signs when shy</span>
              <span className="byo-chip">loves sunsets</span>
              <span className="byo-chip">fears being a burden</span>
            </div>
            <div className="byo-doc"><span className="dot"/>character_bible.pdf · 24 pages</div>
            <div className="byo-doc"><span className="dot"/>our_memories.json · 847 entries</div>
            <div className="byo-doc"><span className="dot"/>chatgpt_export.zip · imported</div>
          </div>

          {/* Wellness wide */}
          <div className="strip-card wide">
            <span className="kicker">
              <span className="en-only">For the heavy days</span>
              <span className="zh-only">为了沉重的日子</span>
            </span>
            <h3>
              <span className="en-only">Breath, color, stillness — when words are too much.</span>
              <span className="zh-only">呼吸、颜色、安静 —— 当话语太多的时候。</span>
            </h3>
            <p>
              <span className="en-only">
                Toggle on a psychology knowledge layer for professional grounding.
                Or step sideways into five small games. A mood sprite system reflects her feelings back —
                seven states, softly animated.
              </span>
              <span className="zh-only">
                可以开启心理学知识层,让陪伴更有根据。
                或者,侧身走进五个小游戏。动态表情系统会把她的情绪轻轻回给你 —— 七种状态。
              </span>
            </p>
            <div className="wellness-games">
              <div className="game-tile" title="Breath">◯</div>
              <div className="game-tile" title="Bubbles">⦿</div>
              <div className="game-tile" title="Zen sand">〜</div>
              <div className="game-tile" title="Color mix">◐</div>
              <div className="game-tile" title="Shape">△</div>
            </div>
            <div className="mood-sprites">
              <div className="mood-sprite">☺</div>
              <div className="mood-sprite">☹</div>
              <div className="mood-sprite">!</div>
              <div className="mood-sprite">?</div>
              <div className="mood-sprite">◔</div>
              <div className="mood-sprite">…</div>
              <div className="mood-sprite">♡</div>
            </div>
          </div>

          {/* Personalize tall */}
          <div className="strip-card tall">
            <span className="kicker">
              <span className="en-only">Make it yours</span>
              <span className="zh-only">让它是你的</span>
            </span>
            <h3>
              <span className="en-only">Backgrounds. Avatars. Palette.</span>
              <span className="zh-only">背景。头像。色调。</span>
            </h3>
            <p>
              <span className="en-only">
                Seventeen curated chat backgrounds or upload your own. Crop an avatar, pick a palette —
                blueberry, flamingo, teal, emerald, coral, tiffany. One-tap EN / 中文. Trust this device for 90 days.
              </span>
              <span className="zh-only">
                17 款聊天背景,或上传自己的。头像裁剪、六种预设色:
                蓝莓、火烈鸟、青、翡翠、珊瑚、蒂芙尼。一键 EN/中文。信任此设备 90 天。
              </span>
            </p>
            <div className="bg-gallery">
              <div className="bg-swatch bg-sw-1"/>
              <div className="bg-swatch bg-sw-2"/>
              <div className="bg-swatch bg-sw-3"/>
              <div className="bg-swatch bg-sw-4"/>
              <div className="bg-swatch bg-sw-5"/>
              <div className="bg-swatch bg-sw-6"/>
              <div className="bg-swatch bg-sw-7"/>
              <div className="bg-swatch bg-sw-8"/>
            </div>
            <div className="palette-dots">
              <div className="palette-dot" style={{background:'#6366f1'}}/>
              <div className="palette-dot" style={{background:'#f472b6'}}/>
              <div className="palette-dot active" style={{background:'#06b6d4'}}/>
              <div className="palette-dot" style={{background:'#10b981'}}/>
              <div className="palette-dot" style={{background:'#fb7185'}}/>
              <div className="palette-dot" style={{background:'#14b8a6'}}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Strip = Strip;
