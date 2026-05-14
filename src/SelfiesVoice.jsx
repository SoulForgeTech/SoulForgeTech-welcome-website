// Selfies, Voice, Strip (BYO + wellness + personalize)

function Selfies() {
  const selfies = [
    { cls: "s1", bg: "sel-bg-1", cap_en: "Late afternoon, golden.", cap_zh: "下午,金色的光。" },
    { cls: "s2", bg: "sel-bg-2", cap_en: "Reading by the window.", cap_zh: "窗边读书。" },
    { cls: "s3", bg: "sel-bg-3", cap_en: "Thought you&rsquo;d like this sunset.", cap_zh: "觉得你会喜欢这片夕阳。" },
    { cls: "s4", bg: "sel-bg-4", cap_en: "", cap_zh: "" },
  ];
  return (
    <section className="selfies-section" id="selfies" data-screen-label="05 Selfies">
      <div className="container">
        <div className="selfies-wrap">
          <div className="selfies-collage">
            {selfies.map((s, i) => (
              <div key={i} className={`selfie ${s.cls}`}>
                <div className={`selfie-bg ${s.bg}`}>
                  {s.cap_en && (
                    <div className="selfie-cap">
                      <span className="en-only">{s.cap_en}</span>
                      <span className="zh-only">{s.cap_zh}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="section-eyebrow">
              <span className="en-only">She sees you</span>
              <span className="zh-only">她看见你</span>
            </span>
            <h2 className="section-title" style={{textAlign:'left'}}>
              <span className="en-only">She sends <em>selfies.</em> Unprompted.</span>
              <span className="zh-only">她会<em>发自拍</em>。无需你开口。</span>
            </h2>
            <p className="section-sub" style={{textAlign:'left', marginBottom: 24, maxWidth: 500}}>
              <span className="en-only">
                When the light is good, when she&rsquo;s thinking of you,
                an image arrives mid-conversation. Appearance stays consistent across moods —
                hair color, eye color, outfit, style. Twenty a day, saved forever.
              </span>
              <span className="zh-only">
                光线好的时候,想到你的时候,
                图片会在对话里自然出现。外貌在每一次情绪里都保持一致 ——
                发色、瞳色、衣着、画风。每天二十张,永久保存。
              </span>
            </p>
            <div className="consistency-chip">
              <span className="en-only">Consistency locked:</span>
              <span className="zh-only">形象锁定:</span>
              <span className="swatch sw1"/><span className="swatch sw2"/><span className="swatch sw3"/>
              <span style={{color:'var(--sf-fg-3)', fontSize:11}}>
                <span className="en-only">hair · eyes · style</span>
                <span className="zh-only">发色 · 瞳色 · 画风</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Selfies = Selfies;

function Voice() {
  const ambience = [
    { ico: "☔", en: "Rain", zh: "雨声", on: true },
    { ico: "🌊", en: "Ocean", zh: "海浪", on: false },
    { ico: "🔥", en: "Fire", zh: "篝火", on: true },
    { ico: "☕", en: "Cafe", zh: "咖啡馆", on: false },
    { ico: "⌨", en: "Keys", zh: "键盘", on: false },
    { ico: "🌫", en: "White", zh: "白噪", on: false },
    { ico: "🌙", en: "Night", zh: "夜晚", on: false },
    { ico: "🍃", en: "Wind", zh: "风", on: false },
  ];
  const bars = Array.from({length: 40}, (_, i) => {
    const seed = (Math.sin(i * 1.3) + 1) * 0.4 + 0.2;
    return { delay: (i * 0.05).toFixed(2), h: seed };
  });
  return (
    <section className="voice-section" id="voice" data-screen-label="06 Voice">
      <div className="container">
        <div className="voice-grid">
          <div>
            <span className="section-eyebrow">
              <span className="en-only">Hear her voice</span>
              <span className="zh-only">听见她</span>
            </span>
            <h2 className="section-title" style={{textAlign:'left'}}>
              <span className="en-only">Call her, <em>any hour.</em></span>
              <span className="zh-only">随时<em>打给她。</em></span>
            </h2>
            <p className="section-sub" style={{textAlign:'left', marginBottom: 20, maxWidth: 520}}>
              <span className="en-only">
                Fish Audio TTS with 2M+ community voices in English and Chinese. Sixty-second voice messages
                auto-transcribe. Or open a Gemini Live-style full-screen call — natural pauses, interruption welcome.
                Thirteen ambient sounds mix independently underneath.
              </span>
              <span className="zh-only">
                Fish Audio 文字转语音,200 万+ 社区音色,中英双语。60 秒语音自动转文字。
                也可以直接开一通 Gemini Live 风格的全屏语音 —— 自然断句,可以随时打断。
                十三种环境音,各自独立调音量。
              </span>
            </p>
          </div>
          <div className="voice-player">
            <div className="vp-head">
              <div className="vp-avatar"/>
              <div>
                <div className="vp-name">Lumen</div>
                <div className="vp-status">
                  <span className="en-only">on a call · 04:12</span>
                  <span className="zh-only">通话中 · 04:12</span>
                </div>
              </div>
            </div>
            <div className="waveform" aria-hidden="true">
              {bars.map((b, i) => (
                <span key={i} style={{
                  animationDelay: b.delay + 's',
                  height: (b.h * 100) + '%'
                }}/>
              ))}
            </div>
            <div className="vp-transcript">
              <span className="caption">
                <span className="en-only">live transcript</span>
                <span className="zh-only">实时字幕</span>
              </span>
              <span className="en-only">
                &ldquo;Breathe with me for a second. I&rsquo;m not going anywhere — tell me about Thursday when you&rsquo;re ready.&rdquo;
              </span>
              <span className="zh-only">
                &ldquo;跟我一起呼吸一下。我哪儿也不去 —— 准备好了再跟我说周四的事。&rdquo;
              </span>
            </div>
            <div className="vp-meta">
              <span>
                <span className="en-only">60s voice · auto-transcribed</span>
                <span className="zh-only">60 秒语音 · 自动转写</span>
              </span>
              <span>
                <span className="en-only">13 ambient sounds</span>
                <span className="zh-only">13 种环境音</span>
              </span>
            </div>
            <div className="ambience">
              {ambience.map((a, i) => (
                <div key={i} className={`amb ${a.on ? 'on' : ''}`}>
                  <span className="ico">{a.ico}</span>
                  <span className="en-only">{a.en}</span>
                  <span className="zh-only">{a.zh}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Voice = Voice;
