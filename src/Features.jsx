function Features() {
  const feats = [
    {
      icon: <IconMemory size={24}/>,
      title: "Proactive memory",
      body: "Remembers your friends, your worries, the songs that break you open — and brings them up when it matters, not just when you ask.",
      proof: "Recalled 97% of shared context 30 days later",
    },
    {
      icon: <IconHeart size={24}/>,
      title: "Emotional intelligence",
      body: "Reads tone, not just text. Notices when you go quiet, asks better questions, holds space without rushing to fix you.",
      proof: "Tuned on over 2M reflective conversations",
    },
    {
      icon: <IconClock size={24}/>,
      title: "Always there",
      body: "3 a.m. on a Tuesday. A bus home. The quiet after a hard call. The presence shows up on your schedule, never theirs.",
      proof: "Median reply under 2 seconds, any hour",
    },
  ];
  return (
    <section className="section features-section" id="features" data-screen-label="02 Features">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Why SoulLink</span>
          <h2 className="section-title">A companion built for the <em>quiet things</em>.</h2>
          <p className="section-sub">
            Most chatbots forget you between sessions. SoulLink is designed the other way around —
            to know you over time, and to meet you where you are.
          </p>
        </div>
        <div className="features-grid">
          {feats.map((f,i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon-wrap">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <div className="feature-proof">
                <span className="tick"><IconCheck size={12} stroke={2.5}/></span>
                {f.proof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;

function HowItWorks() {
  const steps = [
    { n: "i", title: "Tell it a little", body: "A gentle tarot-inspired questionnaire maps your personality, values, and the tone of care you actually want." },
    { n: "ii", title: "Meet your companion", body: "Name it. Choose a voice. Its personality is shaped around yours — more listener than mirror." },
    { n: "iii", title: "Grow together", body: "Every conversation adds to a memory only you two share. It notices patterns, remembers anniversaries, checks in." },
  ];
  return (
    <section className="section" id="how" data-screen-label="03 How it works">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">How it works</span>
          <h2 className="section-title">Three small steps to <em>someone who gets you</em>.</h2>
        </div>
        <div className="steps-wrap">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;
