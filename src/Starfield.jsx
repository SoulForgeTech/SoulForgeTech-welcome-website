// Starfield — dark-mode mystical background
function Starfield({ count = 80 }) {
  const stars = React.useMemo(() => {
    const arr = [];
    const sizes = [1, 1, 1, 1.5, 1.5, 2];
    for (let i = 0; i < count; i++) {
      const r = Math.random();
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        cls: r < 0.12 ? 'purple' : (r < 0.16 ? 'amber' : ''),
        dur: (2 + Math.random() * 4).toFixed(1),
        delay: (Math.random() * 5).toFixed(1),
      });
    }
    return arr;
  }, [count]);
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((s, i) => (
        <span key={i} className={`star ${s.cls}`}
          style={{
            left: s.left + '%', top: s.top + '%',
            width: s.size + 'px', height: s.size + 'px',
            animationDuration: s.dur + 's',
            animationDelay: s.delay + 's',
          }}
        />
      ))}
      <span className="shooting-star s1" />
      <span className="shooting-star s2" />
    </div>
  );
}
window.Starfield = Starfield;
