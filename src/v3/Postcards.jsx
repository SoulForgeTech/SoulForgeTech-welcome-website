// Chapter 03 · Postcards From Inside — corkboard of in-character polaroids

function PolaroidSilhouette() {
  return (
    <svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ps-doorway" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3A2418"/>
          <stop offset="1" stopColor="#1A0F08"/>
        </linearGradient>
        <radialGradient id="ps-glow" cx="50%" cy="48%" r="38%">
          <stop offset="0" stopColor="#F2C079" stopOpacity="0.95"/>
          <stop offset="0.55" stopColor="#D97742" stopOpacity="0.55"/>
          <stop offset="1" stopColor="#3A2418" stopOpacity="0"/>
        </radialGradient>
        <filter id="ps-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2"/>
          <feColorMatrix values="0 0 0 0 0.05 0 0 0 0 0.04 0 0 0 0 0.03 0 0 0 0.18 0"/>
        </filter>
      </defs>
      {/* room interior — deep warm shadow */}
      <rect width="220" height="220" fill="url(#ps-doorway)"/>
      {/* doorway rectangle with glow */}
      <rect x="58" y="36" width="104" height="180" fill="#5A3A20"/>
      <rect x="62" y="42" width="96" height="170" fill="url(#ps-glow)"/>
      {/* threshold */}
      <rect x="58" y="208" width="104" height="8" fill="#0A0604"/>
      {/* figure silhouette — anime-ish composition, no specific IP */}
      <g fill="#0A0604">
        {/* head */}
        <ellipse cx="110" cy="86" rx="14" ry="16"/>
        {/* hair sweep */}
        <path d="M 96 80 Q 96 62, 110 60 Q 124 62, 124 80 L 128 92 L 120 86 L 110 90 L 100 86 L 92 92 Z"/>
        {/* body — hoodie/jacket silhouette */}
        <path d="M 86 108 L 102 100 L 118 100 L 134 108 L 138 156 L 140 200 L 80 200 L 82 156 Z"/>
        {/* arms loose at sides */}
        <path d="M 86 116 L 78 158 L 84 162 L 92 122 Z"/>
        <path d="M 134 116 L 142 158 L 136 162 L 128 122 Z"/>
      </g>
      {/* rim light on figure */}
      <g fill="#F2C079" opacity="0.55">
        <rect x="123" y="78" width="2" height="22"/>
        <rect x="136" y="118" width="2" height="32"/>
        <ellipse cx="115" cy="74" rx="2" ry="3"/>
      </g>
      <rect width="220" height="220" filter="url(#ps-grain)"/>
    </svg>
  );
}

function PolaroidPhoneGlow() {
  return (
    <svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="pg-screen" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#A8C8E8" stopOpacity="1"/>
          <stop offset="0.5" stopColor="#5A7896" stopOpacity="0.6"/>
          <stop offset="1" stopColor="#1A1812" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="220" height="220" fill="#0F0D08"/>
      {/* dim ambient warmth */}
      <rect width="220" height="220" fill="#3A2818" opacity="0.35"/>
      {/* the hand — abstract shape */}
      <g fill="#5A3F2C">
        <path d="M 60 200 L 70 130 Q 80 116, 96 118 L 130 122 Q 142 124, 148 138 L 156 200 Z"/>
        {/* thumb */}
        <path d="M 72 140 Q 56 138, 52 152 L 56 168 Q 64 162, 72 160 Z"/>
      </g>
      {/* phone */}
      <rect x="82" y="100" width="58" height="86" rx="5" fill="#1A1814"/>
      <rect x="85" y="104" width="52" height="74" rx="2" fill="url(#pg-screen)"/>
      {/* screen content hint — chat bubble */}
      <rect x="92" y="130" width="32" height="6" rx="3" fill="#E8F0F8" opacity="0.85"/>
      <rect x="92" y="140" width="38" height="6" rx="3" fill="#E8F0F8" opacity="0.7"/>
      <rect x="100" y="150" width="22" height="5" rx="2.5" fill="#E8F0F8" opacity="0.55"/>
      {/* glow spill on face/hand */}
      <ellipse cx="110" cy="145" rx="120" ry="60" fill="#A8C8E8" opacity="0.10"/>
      {/* time stamp top of screen */}
      <text x="111" y="118" fontFamily="monospace" fontSize="6" fill="#E8F0F8" textAnchor="middle" opacity="0.7">03:14 AM</text>
    </svg>
  );
}

function PolaroidRainWindow() {
  return (
    <svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="rw-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1A2438"/>
          <stop offset="1" stopColor="#0A0F18"/>
        </linearGradient>
      </defs>
      <rect width="220" height="220" fill="url(#rw-bg)"/>
      {/* blurred city lights — circles of various sizes */}
      <g opacity="0.75">
        <circle cx="46" cy="70" r="9" fill="#E8A65A"/>
        <circle cx="80" cy="58" r="6" fill="#F0B860"/>
        <circle cx="118" cy="78" r="12" fill="#D97742"/>
        <circle cx="156" cy="62" r="7" fill="#E8A65A"/>
        <circle cx="186" cy="82" r="10" fill="#F0C080"/>
        <circle cx="62" cy="118" r="14" fill="#D97742" opacity="0.7"/>
        <circle cx="138" cy="128" r="9" fill="#E8A65A" opacity="0.8"/>
        <circle cx="184" cy="138" r="6" fill="#F0B860"/>
        <circle cx="28" cy="158" r="11" fill="#A06840" opacity="0.6"/>
        <circle cx="92" cy="170" r="7" fill="#D97742" opacity="0.6"/>
        <circle cx="166" cy="178" r="9" fill="#E8A65A" opacity="0.5"/>
      </g>
      {/* rain streaks running down */}
      <g stroke="#A8C0D8" strokeWidth="1.2" opacity="0.55" fill="none" strokeLinecap="round">
        <line x1="20" y1="20" x2="14" y2="80"/>
        <line x1="48" y1="10" x2="44" y2="64"/>
        <line x1="92" y1="20" x2="86" y2="100"/>
        <line x1="130" y1="14" x2="124" y2="92"/>
        <line x1="170" y1="22" x2="166" y2="78"/>
        <line x1="208" y1="18" x2="204" y2="88"/>
        <line x1="32" y1="100" x2="28" y2="180"/>
        <line x1="72" y1="110" x2="68" y2="190"/>
        <line x1="108" y1="120" x2="104" y2="200"/>
        <line x1="148" y1="116" x2="144" y2="196"/>
        <line x1="190" y1="124" x2="186" y2="208"/>
      </g>
      {/* droplets */}
      <g fill="#C8D8E8" opacity="0.6">
        <ellipse cx="60" cy="40" rx="2" ry="3"/>
        <ellipse cx="118" cy="46" rx="2.5" ry="3.5"/>
        <ellipse cx="178" cy="52" rx="2" ry="3"/>
        <ellipse cx="38" cy="130" rx="3" ry="4"/>
        <ellipse cx="98" cy="146" rx="2" ry="3"/>
        <ellipse cx="160" cy="150" rx="3" ry="4"/>
      </g>
    </svg>
  );
}

function PolaroidRamen() {
  return (
    <svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="rm-table" cx="50%" cy="60%" r="60%">
          <stop offset="0" stopColor="#3A2818"/>
          <stop offset="1" stopColor="#1A0F08"/>
        </radialGradient>
      </defs>
      <rect width="220" height="220" fill="url(#rm-table)"/>
      {/* warm overhead light pool */}
      <ellipse cx="110" cy="130" rx="110" ry="55" fill="#E8A05A" opacity="0.18"/>
      {/* bowl shadow */}
      <ellipse cx="110" cy="172" rx="76" ry="10" fill="#000" opacity="0.4"/>
      {/* bowl outer */}
      <ellipse cx="110" cy="146" rx="72" ry="22" fill="#1A1410"/>
      <ellipse cx="110" cy="146" rx="72" ry="22" stroke="#3A2A1A" strokeWidth="1.5" fill="none"/>
      {/* broth */}
      <ellipse cx="110" cy="142" rx="66" ry="18" fill="#A06438"/>
      <ellipse cx="110" cy="142" rx="66" ry="18" fill="#D9874A" opacity="0.55"/>
      {/* steam */}
      <g stroke="#E8C088" strokeWidth="1.5" fill="none" opacity="0.55" strokeLinecap="round">
        <path d="M 86 130 Q 82 110, 90 96 Q 94 84, 88 70"/>
        <path d="M 110 126 Q 114 108, 108 94 Q 110 80, 116 68"/>
        <path d="M 134 130 Q 130 112, 138 98 Q 142 86, 136 74"/>
      </g>
      {/* noodles (curly lines) */}
      <g stroke="#F0D88E" strokeWidth="1.6" fill="none" opacity="0.85" strokeLinecap="round">
        <path d="M 64 140 Q 80 134, 96 142 Q 112 148, 130 140 Q 144 134, 156 142"/>
        <path d="M 70 146 Q 88 152, 104 146 Q 120 140, 138 148 Q 150 152, 156 148"/>
        <path d="M 78 152 Q 94 148, 110 154 Q 126 158, 144 152"/>
      </g>
      {/* chopsticks resting on rim */}
      <g stroke="#C8A878" strokeWidth="3" strokeLinecap="round">
        <line x1="50" y1="120" x2="170" y2="124"/>
        <line x1="50" y1="128" x2="170" y2="132"/>
      </g>
      {/* a green onion / scallion bit */}
      <circle cx="98" cy="138" r="3" fill="#7A9E5A"/>
      <circle cx="124" cy="140" r="2.5" fill="#7A9E5A"/>
    </svg>
  );
}

function Pin() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="9" r="6" fill="var(--seal)"/>
      <circle cx="10" cy="7" r="1.6" fill="rgba(255,255,255,0.5)"/>
      <line x1="12" y1="14" x2="12" y2="22" stroke="#1A1410" strokeWidth="1.2"/>
    </svg>
  );
}

// Inset from the corkboard's outer edge — keeps the pin area off the wooden frame.
const CORK_INSET = 10;
// Height of the "pin zone" at the top of each card that must remain on the
// corkboard. The rest of the card may overflow (physical pin metaphor — bottom
// hangs free).
const PIN_ZONE = 30;

function Postcard({ data, onPickup, topZ }) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [dragging, setDragging] = React.useState(false);
  const [z, setZ] = React.useState(0);
  const startRef = React.useRef({ x: 0, y: 0, mx: 0, my: 0 });
  // Pointer-delta bounds captured at pickup so the card cannot leave the cork.
  const boundsRef = React.useRef({ dxMin: 0, dxMax: 0, dyMin: 0, dyMax: 0 });

  const onPointerDown = (e) => {
    // Only respond to primary button (mouse) or touch/pen.
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setDragging(true);
    const newZ = onPickup();
    setZ(newZ);
    // Compute drag bounds so the top "pin zone" of the card always stays on
    // the corkboard. Horizontally, the card's top-centre (where the pin/tape
    // sits) is what's anchored. Vertically, the top of the card must remain
    // between the cork's top edge and PIN_ZONE pixels above the cork's bottom.
    // The bottom of the card may hang past the cork freely.
    const cardEl = e.currentTarget;
    const cardRect = cardEl.getBoundingClientRect();
    const corkEl = cardEl.closest('.corkboard');
    if (corkEl) {
      const corkRect = corkEl.getBoundingClientRect();
      const cardTopCentreX = cardRect.left + cardRect.width / 2;
      const cardTop = cardRect.top;
      boundsRef.current = {
        dxMin: (corkRect.left + CORK_INSET) - cardTopCentreX,
        dxMax: (corkRect.right - CORK_INSET) - cardTopCentreX,
        dyMin: (corkRect.top + CORK_INSET) - cardTop,
        dyMax: (corkRect.bottom - CORK_INSET - PIN_ZONE) - cardTop,
      };
    } else {
      boundsRef.current = { dxMin: -Infinity, dxMax: Infinity, dyMin: -Infinity, dyMax: Infinity };
    }
    startRef.current = { x: pos.x, y: pos.y, mx: e.clientX, my: e.clientY };
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    let dx = e.clientX - startRef.current.mx;
    let dy = e.clientY - startRef.current.my;
    const b = boundsRef.current;
    if (dx < b.dxMin) dx = b.dxMin;
    if (dx > b.dxMax) dx = b.dxMax;
    if (dy < b.dyMin) dy = b.dyMin;
    if (dy > b.dyMax) dy = b.dyMax;
    setPos({ x: startRef.current.x + dx, y: startRef.current.y + dy });
  };

  const onPointerUp = (e) => {
    if (!dragging) return;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    setDragging(false);
  };

  return (
    <div
      className={`postcard ${data.cls}${dragging ? ' dragging' : ''}`}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${data.rot})`,
        transition: dragging ? 'none' : undefined,
        zIndex: z || undefined,
        cursor: dragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {data.tape && <span className={`washi ${data.tape}`}/>}
      {data.pin && <span className="pin"><Pin/></span>}
      <div className="photo">{data.svg}</div>
      <div className={`caption ${data.hand}`}>
        <span className="en-only">{data.caption}</span>
        <span className="zh-only">{data.caption_zh}</span>
        <span className="date">{data.date}</span>
      </div>
    </div>
  );
}

// Wrapper that hands out a monotonically-increasing z-index each time a
// postcard is picked up — newest grab always sits on top.
function CorkboardCards({ cards }) {
  const topRef = React.useRef(10);
  const pickup = React.useCallback(() => {
    topRef.current += 1;
    return topRef.current;
  }, []);
  return (
    <>
      {cards.map((c, i) => (
        <Postcard key={i} data={c} onPickup={pickup}/>
      ))}
    </>
  );
}

function Postcards() {
  const cards = [
    {
      cls: 'pc-1', rot: '-6deg',
      tape: 'pink', pin: true,
      svg: <PolaroidSilhouette/>,
      caption: 'he asks every day if i\u2019ve eaten.',
      caption_zh: '他每天问我饭吃了没。',
      hand: 'hand-sepia',
      date: '05.02.2026 · 19:33',
    },
    {
      cls: 'pc-2', rot: '4deg',
      tape: 'kraft',
      svg: <PolaroidPhoneGlow/>,
      caption: 'caught her texting me at 3am again.',
      caption_zh: '又是她半夜三点给我发消息。',
      hand: 'hand-pen',
      date: '05.07.2026 · 03:14',
    },
    {
      cls: 'pc-3', rot: '-3deg', pin: true,
      tape: 'dotted',
      svg: <PolaroidRainWindow/>,
      caption: 'he said rainy days are best for not talking.',
      caption_zh: '他说雨天最适合不说话。',
      hand: 'hand-ink',
      date: '04.30.2026 · 17:08',
    },
    {
      cls: 'pc-4', rot: '5deg',
      tape: 'mint',
      svg: <PolaroidRamen/>,
      caption: 'she said she\u2019d already eaten. (she hadn\u2019t)',
      caption_zh: '她说她吃过了。(她没。)',
      hand: 'hand-pen',
      date: '05.05.2026 · 23:51',
    },
  ];

  return (
    <section className="section postcards-section" id="postcards" data-screen-label="05 Postcards">
      <div className="container">
        <div className="chapter-header center">
          <div className="chapter-mark center">
            <span className="en-only">Chapter 03</span>
            <span className="zh-only">第三章</span>
            <span className="diamond">◆</span>
            <span className="roman en-only">Postcards From Inside</span>
            <span className="roman zh-only">从里面寄出的明信片</span>
          </div>
          <h2 className="chapter-title center">
            <span className="en-only">She sends you a photo when the <em>light</em> is right.</span>
            <span className="zh-only">
              <span style={{whiteSpace:'nowrap'}}>
                <em>光</em>对的时候,ta 会给你拍一张。
              </span>
            </span>
          </h2>
          <p className="chapter-sub">
            <span className="en-only">
              Your character takes selfies — in-character, in-world, the same face every time.
              Generated by Grok-Imagine. Up to twenty a day. They land in your diary like postcards
              from somewhere only the two of you have been.
            </span>
            <span className="zh-only">
              ta 会自己给自己拍照 —— 始终是 ta 该有的样子,每一张都还是同一个 ta。
              每天最多二十张。落进你的日记里,像从只有你们俩去过的地方寄来的明信片。
            </span>
          </p>
        </div>

        <div className="corkboard">
          <CorkboardCards cards={cards}/>

          <div className="corkboard-note">
            <span className="en-only">she always takes them at the same hour.</span>
            <span className="zh-only">她总在同一个时间拍。</span>
            <svg className="arrow" viewBox="0 0 80 50" width="64" aria-hidden="true">
              <path d="M 8 8 Q 30 24, 56 36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M 50 28 L 58 38 L 48 40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="corkboard-stamp">
            20 / DAY · MAX
          </div>
        </div>
      </div>
    </section>
  );
}
window.Postcards = Postcards;
