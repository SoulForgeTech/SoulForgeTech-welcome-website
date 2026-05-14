// Icon primitives (Lucide-style, 1.5 stroke, rounded caps)
const Icon = ({ d, size = 20, stroke = 1.75, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
       strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    {typeof d === 'string' ? <path d={d}/> : d}
  </svg>
);

const IconArrow = (p) => <Icon {...p} d="M5 12h14M13 6l6 6-6 6"/>;
const IconSun = (p) => <Icon {...p} d={<g><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></g>}/>;
const IconMoon = (p) => <Icon {...p} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>;
const IconPlay = (p) => <Icon {...p} fill="currentColor" stroke="none" d="M8 5v14l11-7z"/>;
const IconSparkle = (p) => <Icon {...p} d={<g><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></g>}/>;
const IconMemory = (p) => <Icon {...p} d={<g><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M3 12h3M18 12h3M12 3v3M12 18v3"/><circle cx="12" cy="12" r="9" strokeDasharray="2 3"/></g>}/>;
const IconHeart = (p) => <Icon {...p} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>;
const IconClock = (p) => <Icon {...p} d={<g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>}/>;
const IconShield = (p) => <Icon {...p} d={<g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></g>}/>;
const IconCheck = (p) => <Icon {...p} d="M20 6L9 17l-5-5"/>;
const IconMic = (p) => <Icon {...p} d={<g><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M19 11v1a7 7 0 0 1-14 0v-1M12 19v3"/></g>}/>;
const IconGlobe = (p) => <Icon {...p} d={<g><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></g>}/>;

window.Icon = Icon;
Object.assign(window, {
  IconArrow, IconSun, IconMoon, IconPlay, IconSparkle,
  IconMemory, IconHeart, IconClock, IconCheck, IconMic, IconGlobe, IconShield
});
