import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Play, ChevronLeft, ChevronRight, Globe, Zap, Users,
  Award, TrendingUp, Bot, BarChart3, Building2, Search, Megaphone,
  Target, RefreshCw, LineChart, Sparkles, Star, Shield, Rocket,
  Code2, Palette, Database
} from 'lucide-react';

/* ============================================================
   CONSTANTS
   ============================================================ */
const SERVICES_DATA = [
  { title: 'Branding',        desc: 'Identity systems, voice and visuals people actually remember.', icon: Palette },
  { title: 'Technology',      desc: 'Websites, apps and platforms engineered to scale with you.',     icon: Code2 },
  { title: 'AI',              desc: 'Practical AI woven into workflows, content and customer journeys.', icon: Bot },
  { title: 'Digital Strategy',desc: 'Roadmaps that connect business goals to every channel.',         icon: Target },
  { title: 'Performance Marketing', desc: 'Paid media built around ROAS, not vanity metrics.',        icon: TrendingUp },
  { title: 'SEO',             desc: 'Search visibility that compounds month after month.',            icon: Search },
  { title: 'Automation',      desc: 'Systems that work 24/7, so your team can focus on people.',      icon: RefreshCw },
  { title: 'Lead Generation', desc: 'Pipelines that turn attention into qualified conversations.',    icon: Users },
  { title: 'Analytics',       desc: "Clear insight into what's working, and why.",                   icon: BarChart3 },
];

const SLIDES_DATA = [
  {
    tag: '01 · Our Vision',
    title: 'Made in India. Trusted worldwide.',
    state: 'To be the growth partner that proves a team from India can build brands the whole world remembers.',
    points: [
      { b: 'Global standards, Indian heart.', rest: ' World-class craft with the warmth and hustle we grew up with.' },
      { b: 'Every ambitious brand.',          rest: ' From first-time founders to enterprises crossing borders.' },
    ],
  },
  {
    tag: '02 · Our Mission',
    title: 'Build. Scale. Transform.',
    state: 'To unite human creativity with AI-driven execution, so every business we partner with can build, scale and transform with confidence.',
    points: [
      { b: 'Build',     rest: ' brands, platforms and foundations that last.' },
      { b: 'Scale',     rest: ' with performance marketing, SEO and lead generation that compounds.' },
      { b: 'Transform', rest: ' operations with automation and analytics that run 24/7.' },
    ],
  },
  {
    tag: '03 · Redefining the Market',
    title: 'Agencies sell services. We build engines.',
    state: "The old way is nine vendors, nine invoices and nobody owning the outcome. We're changing that.",
    points: [
      { b: 'One partner, not nine vendors.',    rest: ' Brand, tech, marketing and data under one roof.' },
      { b: 'Creativity leads, AI amplifies.',   rest: ' Ideas come from people; speed comes from smart tools.' },
      { b: 'Outcomes over deliverables.',       rest: ' We measure success in growth, not in hours logged.' },
    ],
  },
  {
    tag: '04 · Human-Centered',
    title: 'People first. Always.',
    state: 'Every strategy starts with a person, not a prompt. Real people plan, write, design and review every piece of work.',
    points: [
      { b: 'We listen before we build.',         rest: ' Your customers and your voice come first.' },
      { b: 'Creatives with a point of view.',    rest: ' Work that feels crafted, not generated.' },
      { b: 'A team you can call.',               rest: ' Real humans, real accountability.' },
    ],
  },
  {
    tag: '05 · AI-Driven',
    title: 'AI does the lifting. People make the calls.',
    state: 'We use AI where it genuinely helps: faster research, sharper targeting, automation that never sleeps. Judgement and taste stay human.',
    points: [
      { b: 'Smarter, not noisier.',    rest: ' AI in the engine room, never as the face of your brand.' },
      { b: '24/7 automation.',         rest: ' Leads, reports and follow-ups that run while you sleep.' },
      { b: 'Analytics that explain.',  rest: ' Insight you can act on, not dashboards you ignore.' },
    ],
  },
];

const MARQUEE_SERVICES = SERVICES_DATA.map((s) => s.title);
const MARQUEE_LINES = [
  'Made in India', 'Built for the World', 'Human-Centered',
  'AI-Driven', 'Build. Scale. Transform.', 'Your Expertise. Our Strategy. Your Growth.',
];

/* ============================================================
   COMPONENT
   ============================================================ */
const CoderBoxDigital = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const [buildIndex, setBuildIndex] = useState(0);

  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const slideTimerRef = useRef(null);
  const buildTimerRef = useRef(null);
  const dragRef = useRef({ down: false, startX: 0, startL: 0 });
  const touchRef = useRef({ startX: null });

  const SLIDE_DURATION = 7000;

  useEffect(() => {
    buildTimerRef.current = setInterval(() => {
      setBuildIndex((i) => (i + 1) % 3);
    }, 1600);
    return () => clearInterval(buildTimerRef.current);
  }, []);

  const scheduleNextSlide = useCallback(() => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    if (sliderPaused) return;
    slideTimerRef.current = setTimeout(() => {
      setCurrentSlide((i) => (i + 1) % SLIDES_DATA.length);
    }, SLIDE_DURATION);
  }, [sliderPaused]);

  useEffect(() => {
    scheduleNextSlide();
    return () => {
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    };
  }, [currentSlide, sliderPaused, scheduleNextSlide]);

  const goToSlide = (i) => {
    setCurrentSlide((i + SLIDES_DATA.length) % SLIDES_DATA.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!sliderRef.current) return;
      const r = sliderRef.current.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
      if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentSlide]);

  const scrollCarousel = (dir) => {
    if (!carouselRef.current) return;
    const step = window.innerWidth < 640 ? 280 : 340;
    carouselRef.current.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      if (e.pointerType !== 'mouse') return;
      dragRef.current = { down: true, startX: e.clientX, startL: el.scrollLeft };
      el.classList.add('cursor-grabbing');
    };
    const onPointerMove = (e) => {
      if (!dragRef.current.down) return;
      const dx = e.clientX - dragRef.current.startX;
      el.scrollLeft = dragRef.current.startL - dx;
    };
    const onPointerUp = () => {
      dragRef.current.down = false;
      el.classList.remove('cursor-grabbing');
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  const onTouchStart = (e) => {
    touchRef.current.startX = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchRef.current.startX === null) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    if (Math.abs(dx) > 50) goToSlide(currentSlide + (dx < 0 ? 1 : -1));
    touchRef.current.startX = null;
  };

  const NAV_BTN = "swiper-button-custom bg-white/80 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-gray-200 hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";
  const NAV_BTN_ICON = "h-4 w-4 sm:h-5 sm:w-5 text-gray-700 group-hover:text-white transition-colors";
  const SLIDER_BTN = "swiper-button-custom bg-white/10 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-[rgba(143,203,242,.3)] hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";
  const SLIDER_BTN_ICON = "h-4 w-4 sm:h-5 sm:w-5 text-white";

  /* ✅ Full-bleed wrapper — poore screen me chalti hai */
  const FULL_BLEED = "relative w-screen left-1/2 -translate-x-1/2 overflow-hidden";

  return (
    <>
      <style>{`
        @keyframes cbBlink { 50% { opacity: .25; } }
        @keyframes cbRise { to { transform: none; } }
        @keyframes cbGrow { from { transform: scaleX(0); transform-origin: left; } }
        @keyframes cbChipIn { to { opacity: 1; transform: none; } }
        @keyframes cbDraw { to { stroke-dashoffset: 0; } }
        @keyframes cbSpinY { 0% { transform: scaleX(1); } 50% { transform: scaleX(0); } 100% { transform: scaleX(-1); } }
        @keyframes cbRun { from { stroke-dashoffset: 418; } to { stroke-dashoffset: 0; } }
        @keyframes cbPing { from { transform: scale(1); opacity: .9; } to { transform: scale(5); opacity: 0; } }
        @keyframes cbPing2 { 0% { transform: scale(.6); opacity: 1; } 100% { transform: scale(1.8); opacity: 0; } }
        @keyframes cbRot { to { transform: rotate(360deg); } }
        @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -12px; } }
        @keyframes cbMq { to { transform: translateX(-50%); } }
        @keyframes cbUp { to { opacity: 1; transform: none; } }
        @keyframes cbProg { to { width: 100%; } }
        @keyframes cbShine { from { background-position: 200% 0; } to { background-position: 0 0; } }

        .cb-chip { opacity: 0; transform: translateY(10px); animation: cbChipIn .6s cubic-bezier(.2,.8,.2,1) forwards; }
        .cb-grain {
          position: fixed; inset: 0; pointer-events: none; z-index: 100; opacity: .35; mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .cb-marquee-track { display: flex; width: max-content; animation: cbMq 42s linear infinite; }
        .cb-marquee-track-rev { display: flex; width: max-content; animation: cbMq 36s linear infinite reverse; }
        .cb-carousel::-webkit-scrollbar { display: none; }
        .cb-carousel { scrollbar-width: none; }
        .cb-stroke-run { stroke-dasharray: 18 400; animation: cbRun 3.6s linear infinite; }
        .cb-merid { transform-origin: 260px 250px; animation: cbSpinY 9s linear infinite; }
        .cb-merid:nth-child(2) { animation-delay: -3s; }
        .cb-merid:nth-child(3) { animation-delay: -6s; }
        .cb-badge-spin { animation: cbRot 24s linear infinite; transform-origin: 150px 150px; }
        .cb-badge-spin-sm { animation: cbRot 18s linear infinite; transform-origin: 75px 75px; }
        .cb-bob { animation: cbBob 6s ease-in-out infinite; }
        .cb-pulse-ring { transform-origin: center; transform-box: fill-box; animation: cbPing 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
        .cb-pulse-ring-2 { animation-delay: 1.1s; }
        .cb-draw { stroke-dasharray: 900; stroke-dashoffset: 900; }
        .cb-slide-active .cb-draw { animation: cbDraw 2.2s .2s cubic-bezier(.2,.8,.2,1) forwards; }
        .cb-huge-o {
          background: linear-gradient(90deg, rgba(255,255,255,.3) 0%, #fff 30%, rgba(255,255,255,.3) 60%);
          background-size: 200% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: cbShine 4s linear infinite;
        }
        .swiper-button-custom:hover .swiper-icon { color: #fff !important; }

        .cb-stat-num {
          font-family: 'Sora', system-ui, sans-serif;
          font-weight: 800;
          font-style: normal;
          color: #0A5E93;
          letter-spacing: -.02em;
          line-height: 1;
        }
      `}</style>

      <div className="cb-grain" aria-hidden="true" />

      <div className="bg-[#F3F4F1] text-[#0B1526] font-['Manrope'] overflow-x-hidden" style={{ fontSize: '17px', lineHeight: 1.6 }}>

        {/* HERO */}
        <header id="top" className="relative pt-24 sm:pt-28 md:pt-36 pb-0">
          <div className="px-4 sm:px-6 md:px-10">
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1.12fr_.88fr] gap-10 sm:gap-12 lg:gap-14 items-center">

              <div className="order-2 lg:order-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-5 sm:mb-6 mt-2 sm:mt-4 md:mt-8">
                  <span className="sec-badge inline-flex items-center gap-2">
                    <i className="w-2 h-2 rounded-full bg-[#0D86CF]" style={{ animation: 'cbBlink 2s infinite' }} />
                    CoderBox Digital
                  </span>
                  <span className="sec-badge">Human-Centered. AI-Driven.</span>
                </div>

                <h1 className="sec-h2 sec-text-dark font-['Sora'] mx-auto lg:mx-0"
                    style={{ fontSize: 'clamp(34px,9vw,100px)', lineHeight: 1, letterSpacing: '-.045em' }}>
                  <span className="block overflow-hidden pb-[.06em]">
                    <span className="inline-block" style={{ transform: 'translateY(105%)', animation: 'cbRise 1s cubic-bezier(.2,.8,.2,1) forwards' }}>
                      Made in India.
                    </span>
                  </span>
                  <span className="block overflow-hidden pb-[.06em]">
                    <span className="inline-block" style={{ transform: 'translateY(105%)', animation: 'cbRise 1s cubic-bezier(.2,.8,.2,1) .12s forwards' }}>
                      Built for the
                    </span>
                  </span>
                  <span className="block overflow-hidden pb-[.06em]">
                    <span className="inline-block" style={{ transform: 'translateY(105%)', animation: 'cbRise 1s cubic-bezier(.2,.8,.2,1) .24s forwards' }}>
                      <span className="font-['Instrument_Serif'] italic font-normal text-[#0D86CF] tracking-[-.02em]">World.</span>
                    </span>
                  </span>
                </h1>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 mb-4 sm:mb-5 font-['Sora'] font-extrabold"
                     style={{ fontSize: 'clamp(18px,4.5vw,32px)', lineHeight: 1, letterSpacing: '-.02em' }}>
                  {['BUILD.', 'SCALE.', 'TRANSFORM.'].map((word, i) => (
                    <span key={word} className={`transition-colors duration-500 ${buildIndex === i ? 'text-[#0B1526]' : 'text-[#B9C0C9]'}`}>
                      {word}
                      {buildIndex === i && <span className="block h-[3px] mt-2 bg-[#0D86CF]" style={{ animation: 'cbGrow .6s cubic-bezier(.2,.8,.2,1)' }} />}
                    </span>
                  ))}
                </div>

                <p className="sec-p sec-text-dark-soft max-w-[560px] mx-auto lg:mx-0">
                  A growth partner from India with a global mindset. We put <b className="text-[#0B1526]">people first</b> and let AI do the heavy lifting, bringing every discipline your brand needs into one team.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 my-5 sm:my-6 max-w-[600px] mx-auto lg:mx-0">
                  {['Branding','Technology','AI','Digital Strategy','Performance Marketing','SEO','Automation','Lead Generation','Analytics'].map((chip, i) => (
                    <span
                      key={chip}
                      className="cb-chip px-3 py-1.5 sm:px-3.5 sm:py-2 border border-[#D9DDD6] rounded-full text-xs sm:text-[13.5px] font-semibold text-[#3A4557] bg-white transition-all hover:border-[#0D86CF] hover:text-[#0A5E93] hover:-translate-y-0.5"
                      style={{ animationDelay: `${0.6 + i * 0.06}s` }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start flex-wrap gap-4 sm:gap-6 mt-6">
                  <a href="#contact" className="sec-btn group">
                    Connect With CoderBox
                    <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                  <a href="#services" className="sec-h3 text-[#0A5E93] underline decoration-[1.5px] underline-offset-[6px] hover:decoration-[#0A5E93]">
                    Explore services
                  </a>
                </div>

                <div className="sec-p sec-text-dark-soft mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-3.5">
                  <span className="w-9 h-[1.5px] bg-current inline-block" />
                  Your Expertise. Our Strategy. Your Growth.
                </div>
              </div>

              {/* RIGHT — Globe */}
              <div className="order-1 lg:order-2 relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] mx-auto lg:mx-0 lg:justify-self-end"
                   style={{ aspectRatio: '1/1.02' }} aria-hidden="true">

                <svg className="absolute -left-[4%] sm:-left-[6%] -top-[4%] sm:-top-[6%] w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] z-[3]"
                     viewBox="0 0 150 150">
                  <circle cx="75" cy="75" r="72" fill="#F3F4F1" stroke="#0B1526" strokeWidth="1.5" />
                  <defs>
                    <path id="cb-circ" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
                  </defs>
                  <g className="cb-badge-spin-sm">
                    <text style={{ font: '800 11.5px Manrope, sans-serif', letterSpacing: '.16em', fill: '#0B1526' }}>
                      <textPath href="#cb-circ" startOffset="6%">
                        BUILT FOR THE WORLD • MADE IN INDIA •
                      </textPath>
                    </text>
                  </g>
                  <rect x="50" y="58" width="50" height="34" rx="5" fill="#0B1526" />
                  <text x="75" y="79" textAnchor="middle" style={{ font: '800 16px Sora, sans-serif', fill: '#FFFFFF', letterSpacing: '0.02em' }}>
                    CB
                  </text>
                  <rect x="50" y="88" width="16.6" height="4" fill="#F09A36" />
                  <rect x="66.6" y="88" width="16.7" height="4" fill="#FFFFFF" />
                  <rect x="83.3" y="88" width="16.7" height="4" fill="#2E8B57" />
                </svg>

                <div className="absolute top-[8%] right-[2%] bottom-[10%] left-[10%] bg-[#08111F] rounded-[22px] sm:rounded-[28px] overflow-hidden"
                     style={{ boxShadow: '0 40px 80px -30px rgba(8,17,31,.55)' }}>
                  <svg className="w-full h-full block" viewBox="0 0 520 500">
                    <defs>
                      <radialGradient id="cb-gl" cx="45%" cy="40%" r="65%">
                        <stop offset="0" stopColor="#15375A" />
                        <stop offset="1" stopColor="#08111F" stopOpacity="0" />
                      </radialGradient>
                      <clipPath id="cb-gclip"><circle cx="260" cy="250" r="170" /></clipPath>
                    </defs>
                    <circle cx="260" cy="250" r="230" fill="url(#cb-gl)" />
                    <g clipPath="url(#cb-gclip)">
                      <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
                        <ellipse cx="260" cy="250" rx="170" ry="40" />
                        <ellipse cx="260" cy="190" rx="160" ry="34" />
                        <ellipse cx="260" cy="310" rx="160" ry="34" />
                        <ellipse cx="260" cy="130" rx="118" ry="22" />
                        <ellipse cx="260" cy="370" rx="118" ry="22" />
                      </g>
                      <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
                        <ellipse className="cb-merid" cx="260" cy="250" rx="170" ry="170" />
                        <ellipse className="cb-merid" cx="260" cy="250" rx="170" ry="170" />
                        <ellipse className="cb-merid" cx="260" cy="250" rx="170" ry="170" />
                        <line x1="260" y1="80" x2="260" y2="420" />
                      </g>
                    </g>
                    <circle cx="260" cy="250" r="170" fill="none" stroke="rgba(143,203,242,.4)" />

                    {[
                      'M318 262 Q 240 120 150 176',
                      'M318 262 Q 180 70 70 205',
                      'M318 262 Q 300 200 262 228',
                      'M318 262 Q 390 250 392 300',
                      'M318 262 Q 450 260 440 390',
                    ].map((d, i) => (
                      <path key={`arc-${i}`} d={d} fill="none" stroke="#8FCBF2" strokeWidth="1.6" strokeDasharray="4 5" opacity=".9" />
                    ))}
                    {[
                      { d: 'M318 262 Q 240 120 150 176', delay: '0s' },
                      { d: 'M318 262 Q 180 70 70 205', delay: '-.9s' },
                      { d: 'M318 262 Q 300 200 262 228', delay: '-1.8s' },
                      { d: 'M318 262 Q 390 250 392 300', delay: '-2.7s' },
                      { d: 'M318 262 Q 450 260 440 390', delay: '-1.3s' },
                    ].map((r, i) => (
                      <path key={`run-${i}`} className="cb-stroke-run" d={r.d} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" style={{ animationDelay: r.delay }} />
                    ))}

                    {[
                      [150, 176, 'LONDON', 118, 165],
                      [70, 205, 'NEW YORK', 40, 228],
                      [262, 228, 'DUBAI', 222, 218],
                      [392, 300, 'SINGAPORE', 400, 304],
                      [440, 390, 'SYDNEY', 408, 412],
                    ].map(([cx, cy, label, tx, ty]) => (
                      <g key={label}>
                        <circle cx={cx} cy={cy} r="4" fill="#8FCBF2" />
                        <text x={tx} y={ty} fill="#CFE6F7" style={{ font: '700 11px Manrope, sans-serif', letterSpacing: '.06em' }}>{label}</text>
                      </g>
                    ))}

                    <g>
                      <circle className="cb-pulse-ring" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
                      <circle className="cb-pulse-ring cb-pulse-ring-2" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
                      <circle cx="318" cy="262" r="6.5" fill="#F09A36" />
                      <text x="332" y="252" fill="#fff" style={{ font: '800 12px Manrope, sans-serif', letterSpacing: '.1em' }}>INDIA</text>
                    </g>
                  </svg>

                  <div className="absolute left-4 sm:left-7 right-4 sm:right-7 bottom-3 sm:bottom-5 flex justify-between items-end text-white">
                    <div>
                      <b className="block font-['Sora'] font-extrabold text-sm sm:text-base md:text-lg">CoderBox Digital</b>
                      <small className="font-bold text-[9px] sm:text-[10px] md:text-[11px] tracking-[.16em] text-[#8FCBF2]">FUTURE DIGITAL TRANSFORMATION</small>
                    </div>
                    <span className="flex items-center gap-1 sm:gap-1.5 font-extrabold text-[9px] sm:text-[10px] md:text-[11px] tracking-[.14em] text-white border border-white/25 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      <i className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#4ADE80]" style={{ animation: 'cbBlink 1.4s infinite' }} />
                      LIVE
                    </span>
                  </div>
                </div>

                <div className="cb-bob hidden sm:flex absolute z-[3] bg-white rounded-2xl px-3 sm:px-4.5 py-2.5 sm:py-3.5 items-center gap-2 sm:gap-3"
                     style={{ right: '-4%', top: '14%', transform: 'rotate(3deg)', boxShadow: '0 18px 40px -18px rgba(11,21,38,.35)' }}>
                  <span className="w-8 h-8 sm:w-9.5 sm:h-9.5 rounded-lg sm:rounded-xl bg-[#0A5E93] grid place-items-center text-white">
                    <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <div>
                    <b className="block font-['Sora'] font-extrabold text-base sm:text-[22px] leading-none">24/7</b>
                    <small className="sec-p sec-text-dark-soft mb-0 text-[10px] sm:text-[12.5px]">Automation</small>
                  </div>
                </div>

                <div className="cb-bob hidden sm:flex absolute z-[3] bg-white rounded-2xl px-3 sm:px-4.5 py-2.5 sm:py-3.5 items-center gap-2 sm:gap-3"
                     style={{ left: '-6%', top: '50%', transform: 'rotate(-3deg)', animationDelay: '-3s', boxShadow: '0 18px 40px -18px rgba(11,21,38,.35)' }}>
                  <span className="w-8 h-8 sm:w-9.5 sm:h-9.5 rounded-lg sm:rounded-xl bg-[#0A5E93] grid place-items-center text-white">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <div>
                    <b className="block font-['Sora'] font-extrabold text-base sm:text-[22px] leading-none">[XX]+</b>
                    <small className="sec-p sec-text-dark-soft mb-0 text-[10px] sm:text-[12.5px]">Brands Scaled</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Dark Marquee — FULL-BLEED (edge to edge) */}
          <div className={`${FULL_BLEED} bg-[#08111F] text-white py-3 sm:py-5 mt-16 sm:mt-20 md:mt-24`}>
            <div className="cb-marquee-track">
              {[0, 1].map((k) => (
                <span key={k} className="flex items-center gap-4 sm:gap-9 pr-4 sm:pr-9 font-['Sora'] font-bold text-base sm:text-xl md:text-[26px] whitespace-nowrap">
                  {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((n, i) => (
                    <React.Fragment key={`${k}-${i}`}>
                      {n}
                      <em className="not-italic text-[#8FCBF2] text-[10px] sm:text-sm">◆</em>
                    </React.Fragment>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ✅ Blue Marquee — FULL-BLEED (edge to edge) */}
        <div className={`${FULL_BLEED} bg-[#0A5E93] text-white py-2 sm:py-3`}>
          <div className="cb-marquee-track-rev">
            {[0, 1].map((k) => (
              <span key={k} className="flex items-center gap-4 sm:gap-9 pr-4 sm:pr-9 font-['Instrument_Serif'] italic font-normal text-base sm:text-xl md:text-2xl whitespace-nowrap">
                {[...MARQUEE_LINES, ...MARQUEE_LINES].map((n, i) => (
                  <React.Fragment key={`${k}-${i}`}>
                    {n}
                    <em className="not-italic text-[#F09A36] text-[10px] sm:text-sm">◆</em>
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* PRINCIPLES */}
        <section id="principles" className="py-16 sm:py-20 md:py-24">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <span className="sec-badge inline-block">Our Principles</span>
              <h2 className="sec-h2 sec-text-dark mt-3 max-w-3xl mx-auto">
                Your Expertise. Our Strategy.{' '}
                <span className="font-['Instrument_Serif'] italic font-normal text-[#0D86CF]">Your Growth.</span>
              </h2>
              <p className="sec-p sec-text-dark-soft mt-3 max-w-2xl mx-auto">
                You know your business better than anyone. We bring the strategy and the engine. Growth is what we build together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                { num: '01', title: 'Your Expertise', tag: 'YOU', desc: 'We start by listening. Your market knowledge, customers and ambitions shape everything we make.', w: '72%' },
                { num: '02', title: 'Our Strategy',  tag: 'US',  desc: 'Nine disciplines, one plan. Creative thinking leads; data and automation keep it sharp.',       w: '86%' },
                { num: '03', title: 'Your Growth',   tag: 'TOGETHER', desc: 'Measurable results you can see: more reach, more qualified leads, more revenue.',          w: '100%' },
              ].map((p, i) => (
                <motion.article
                  key={p.num}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl px-6 sm:px-8 pt-7 sm:pt-8 pb-6 sm:pb-7 border border-[#D9DDD6] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-30px_rgba(11,21,38,.4)]"
                >
                  <span className="absolute right-5 sm:right-6 top-6 sm:top-7 font-extrabold text-xs sm:text-[13px] text-[#6B7585] tracking-widest">{p.tag}</span>
                  <div className="font-['Instrument_Serif'] italic text-6xl sm:text-7xl md:text-[88px] leading-none text-[#0D86CF] opacity-90">{p.num}</div>
                  <h3 className="sec-h3 sec-text-dark mt-3 sm:mt-4 mb-2">{p.title}</h3>
                  <p className="sec-p sec-text-dark-soft mb-0">{p.desc}</p>
                  <div className="h-2 rounded-full bg-[#E9EBE6] mt-6 sm:mt-7 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: p.w }}
                      transition={{ duration: 1.4, delay: 0.2 + i * 0.15 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg,#0A5E93,#8FCBF2,#0D86CF)' }}
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 sm:mt-6 border border-[#D9DDD6] rounded-3xl bg-white overflow-hidden">
              {[
                { b: '09',   s: 'Service Pillars' },
                { b: '1',    s: 'Team, One Engine' },
                { b: '24/7', s: 'Automation' },
                { b: '[XX]+',s: 'Brands Scaled' },
              ].map((st, i) => (
                <div key={st.s} className={`px-4 sm:px-6 md:px-8 py-7 sm:py-8 md:py-9 text-center border-[#D9DDD6]
                  ${i % 2 === 0 ? 'border-r' : ''}
                  ${i < 2 ? 'border-b lg:border-b-0' : ''}
                  ${i === 2 ? 'lg:border-r' : ''}
                `}>
                  <b className="cb-stat-num block mb-2 text-[52px] sm:text-[64px] md:text-[80px]">{st.b}</b>
                  <span className="sec-p sec-text-dark-soft mb-0 text-sm sm:text-base">{st.s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION / MISSION SLIDER */}
        <section id="vision" className="py-16 sm:py-20 md:py-24 bg-[#08111F] text-white overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <span className="sec-badge inline-block">What drives us</span>
              <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
                Redefining the market,{' '}
                <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">one brand at a time.</span>
              </h2>
              <p className="sec-p mt-3 max-w-2xl mx-auto text-[#AFC0D4]">
                Our vision, our mission and the promises behind them. Swipe, click, or let it play.
              </p>
            </motion.div>

            <div
              ref={sliderRef}
              className="relative bg-[#0F1E33] border border-[rgba(143,203,242,.12)] rounded-3xl sm:rounded-[32px] min-h-[560px] sm:min-h-[620px] md:min-h-[680px] overflow-hidden"
              onMouseEnter={() => setSliderPaused(true)}
              onMouseLeave={() => setSliderPaused(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {SLIDES_DATA.map((slide, i) => (
                <div
                  key={slide.tag}
                  className={`absolute inset-0 grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-10 px-5 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16 pb-24 sm:pb-28 md:pb-32 items-center transition-all duration-700 ${currentSlide === i ? 'cb-slide-active opacity-100 visible' : 'opacity-0 invisible'}`}
                >
                  <div className="text-center md:text-left">
                    <span className="sec-badge inline-flex items-center gap-2 sm:gap-3 text-[#8FCBF2]">
                      <i className="w-5 sm:w-7 h-[1.5px] bg-[#F09A36]" />
                      {slide.tag}
                    </span>
                    <h3 className="sec-h2 my-4 sm:my-5 text-white">
                      {slide.title}
                    </h3>
                    <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-[#E4EEF7] max-w-[620px] mx-auto md:mx-0 text-lg sm:text-xl md:text-2xl lg:text-[clamp(24px,2.4vw,34px)]"
                       style={{ lineHeight: 1.25 }}>
                      {slide.state}
                    </p>
                    <ul className="mt-6 sm:mt-8 grid gap-3 sm:gap-3.5 max-w-[600px] mx-auto md:mx-0 text-left">
                      {slide.points.map((pt, k) => (
                        <li key={k} className="sec-p mb-0 flex gap-3 sm:gap-3.5 items-start text-[#B8C7D8] text-sm sm:text-base">
                          <span className="flex-none w-2 h-2 sm:w-2.5 sm:h-2.5 mt-1.5 sm:mt-2 rounded-sm bg-[#8FCBF2] rotate-45" />
                          <span>
                            <b className="text-white">{pt.b}</b>
                            {pt.rest}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden md:grid place-items-center relative">
                    <span className="absolute right-0 -top-8 font-['Sora'] font-extrabold text-6xl md:text-[220px] leading-none text-[rgba(143,203,242,.07)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <SlideArt index={i} />
                  </div>
                </div>
              ))}

              <div className="absolute left-4 sm:left-8 right-4 sm:right-8 bottom-4 sm:bottom-8 flex items-center gap-3 sm:gap-6 z-10">
                <div className="hidden sm:flex gap-1.5 flex-1">
                  {SLIDES_DATA.map((s, i) => (
                    <button
                      key={s.tag}
                      onClick={() => goToSlide(i)}
                      className={`flex-1 text-left pt-3 relative bg-transparent border-0 cursor-pointer transition-colors font-bold text-[12.5px] tracking-wider ${i === currentSlide ? 'text-white' : 'text-[#7F93AA]'}`}
                    >
                      <span className="absolute top-0 left-0 right-0 h-[3px] rounded bg-[rgba(143,203,242,.18)]" />
                      <span
                        className={`absolute top-0 left-0 h-[3px] rounded bg-[#8FCBF2] ${i < currentSlide ? 'w-full' : ''}`}
                        style={i === currentSlide ? { animation: `cbProg ${SLIDE_DURATION}ms linear forwards`, animationPlayState: sliderPaused ? 'paused' : 'running' } : { width: 0 }}
                      />
                      <span className="hidden md:inline">{`0${i + 1} ${s.tag.split('·')[1].trim()}`}</span>
                    </button>
                  ))}
                </div>

                <div className="flex sm:hidden gap-1.5 flex-1 justify-center">
                  {SLIDES_DATA.map((s, i) => (
                    <button
                      key={`dot-${s.tag}`}
                      onClick={() => goToSlide(i)}
                      aria-label={`Go to ${s.tag}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-[#8FCBF2]' : 'w-1.5 bg-[rgba(143,203,242,.25)]'}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2 sm:gap-2.5">
                  <button onClick={() => goToSlide(currentSlide - 1)} aria-label="Previous slide" className={SLIDER_BTN}>
                    <ChevronLeft className={`${SLIDER_BTN_ICON} swiper-icon`} />
                  </button>
                  <button onClick={() => goToSlide(currentSlide + 1)} aria-label="Next slide" className={SLIDER_BTN}>
                    <ChevronRight className={`${SLIDER_BTN_ICON} swiper-icon`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 sm:py-20 md:py-24">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12"
            >
              <span className="sec-badge inline-block">One engine · nine pillars</span>
              <h2 className="sec-h2 sec-text-dark mt-3 max-w-3xl mx-auto">
                Everything your brand needs,{' '}
                <span className="font-['Instrument_Serif'] italic font-normal text-[#0D86CF]">under one roof.</span>
              </h2>
              <p className="sec-p sec-text-dark-soft mt-3 max-w-2xl mx-auto">
                From strategy and design to technology and growth — every capability your brand needs, working as one team.
              </p>
            </motion.div>

            <div className="relative">
              <div
                ref={carouselRef}
                className="cb-carousel flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory px-1 pb-4 cursor-grab"
              >
                {SERVICES_DATA.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <article
                      key={svc.title}
                      className="group flex-none snap-start bg-white border border-[#D9DDD6] rounded-3xl p-6 sm:p-7 w-[78vw] sm:w-[340px] md:w-[320px] min-h-[280px] sm:min-h-[330px] flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-[#0B1526] hover:text-white hover:border-[#0B1526] select-none"
                    >
                      <span className="pointer-events-none absolute w-[260px] h-[260px] rounded-full -right-32 -bottom-36 transition-transform duration-500 group-hover:scale-[1.8]"
                            style={{ background: 'radial-gradient(circle,rgba(13,134,207,.22),transparent 70%)' }} />
                      <div className="flex justify-between items-start relative z-10">
                        <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E3F0FA] text-[#0A5E93] grid place-items-center transition-all duration-500 group-hover:bg-[#0D86CF] group-hover:text-white group-hover:-rotate-6">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </span>
                        <span className="font-['Instrument_Serif'] italic text-2xl sm:text-3xl text-[#6B7585] group-hover:text-[#8FCBF2]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="sec-h3 sec-text-dark relative z-10 mt-auto pt-8 sm:pt-10 group-hover:text-white">
                        {svc.title}
                      </h3>
                      <p className="sec-p sec-text-dark-soft relative z-10 mt-3 mb-0 group-hover:text-[#B8C7D8]">
                        {svc.desc}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="flex justify-center gap-2.5 mt-6 sm:mt-8">
                <button onClick={() => scrollCarousel(-1)} aria-label="Scroll left" className={NAV_BTN}>
                  <ChevronLeft className={`${NAV_BTN_ICON} swiper-icon`} />
                </button>
                <button onClick={() => scrollCarousel(1)} aria-label="Scroll right" className={NAV_BTN}>
                  <ChevronRight className={`${NAV_BTN_ICON} swiper-icon`} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section id="contact" className="relative bg-[#0A5E93] text-white py-16 sm:py-20 md:py-24 overflow-hidden">
          <svg className="absolute right-4 sm:right-6 md:right-[6%] top-16 sm:top-24 md:top-32 w-28 h-28 sm:w-40 sm:h-40 md:w-72 md:h-72 opacity-40 sm:opacity-50 md:opacity-95"
               viewBox="0 0 300 300" aria-hidden="true">
            <defs><path id="cb-circ2" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" /></defs>
            <circle cx="150" cy="150" r="146" fill="none" stroke="rgba(255,255,255,.35)" />
            <circle cx="150" cy="150" r="92" fill="none" stroke="rgba(255,255,255,.2)" strokeDasharray="3 7" />
            <g className="cb-badge-spin">
              <text style={{ font: '800 15px Manrope, sans-serif', letterSpacing: '.3em', fill: '#fff' }}>
                <textPath href="#cb-circ2">BUILD • SCALE • TRANSFORM • MADE IN INDIA • </textPath>
              </text>
            </g>
            <text x="150" y="162" textAnchor="middle" style={{ font: '800 40px Sora, sans-serif', fill: '#fff' }}>CB</text>
            <rect x="118" y="176" width="21.3" height="5" fill="#F09A36" />
            <rect x="139.3" y="176" width="21.4" height="5" fill="#fff" />
            <rect x="160.7" y="176" width="21.3" height="5" fill="#2E8B57" />
          </svg>

          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-6 sm:mb-8"
            >
              <span className="sec-badge inline-block">Let's build together</span>
              <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
                Have a digital idea in mind?{' '}
                <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">Let's turn it into reality.</span>
              </h2>
              <p className="sec-p mt-3 max-w-2xl mx-auto text-white/80">
                CoderBox Digital · Human-Centered. AI-Driven.
              </p>
            </motion.div>

            <div className="text-center font-['Sora'] font-extrabold tracking-[-.06em]"
                 style={{ fontSize: 'clamp(48px,14vw,190px)', lineHeight: .9 }}>
              <span className="block">BUILD.</span>
              <span className="cb-huge-o block">SCALE.</span>
              <span className="font-['Instrument_Serif'] italic font-normal tracking-[-.03em] text-[#8FCBF2] block">Transform.</span>
            </div>

            <div className="flex flex-col items-center gap-6 sm:gap-8 mt-10 sm:mt-14">
              <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-white text-center text-xl sm:text-2xl md:text-3xl"
                 style={{ lineHeight: 1.25 }}>
                Your Expertise. Our Strategy. Your Growth.
              </p>
              <a href="#top" className="sec-btn bg-white text-[#0B1526] shadow-none hover:bg-[#F09A36] hover:text-[#0B1526]">
                Connect With CoderBox
                <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/* SlideArt */
const SlideArt = ({ index }) => {
  if (index === 0) {
    return (
      <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
        <circle className="cb-draw" cx="190" cy="220" r="150" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <circle className="cb-draw" cx="190" cy="220" r="105" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <path className="cb-draw" d="M40 220 H340" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
        <path className="cb-draw" d="M110 220 A80 80 0 0 1 270 220" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
        <circle className="cb-bob" cx="190" cy="140" r="10" fill="#F09A36" />
        <circle className="cb-pulse-ring" cx="190" cy="140" r="10" fill="none" stroke="#F09A36" opacity=".5" />
        <path className="cb-draw" d="M190 108 V70 M142 120 L120 92 M238 120 L260 92" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
        <path className="cb-draw" d="M70 260 H310 M100 290 H280" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
        <text x="190" y="330" textAnchor="middle" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>RISING · GLOBAL</text>
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
        <circle className="cb-draw" cx="140" cy="140" r="78" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
        <circle className="cb-draw" cx="240" cy="140" r="78" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
        <circle className="cb-draw" cx="190" cy="226" r="78" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
        <circle cx="190" cy="168" r="7" fill="#8FCBF2" />
        <circle className="cb-pulse-ring" cx="190" cy="168" r="7" fill="none" stroke="#8FCBF2" />
        <text x="118" y="120" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>BUILD</text>
        <text x="228" y="120" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>SCALE</text>
        <text x="152" y="268" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>TRANSFORM</text>
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
        <path d="M40 300 H350" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <rect x="60" y="230" width="36" height="70" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <rect x="112" y="210" width="36" height="90" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <rect x="164" y="220" width="36" height="80" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <rect x="216" y="200" width="36" height="100" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <path className="cb-draw" d="M60 250 C 130 240, 170 210, 220 150 S 300 60, 330 40" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
        <path className="cb-draw" d="M300 40 H332 V72" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
        <rect className="cb-draw" x="268" y="120" width="36" height="180" rx="4" fill="none" stroke="#8FCBF2" strokeWidth="2" />
        <text x="226" y="325" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>THE OLD CURVE ↗ BROKEN</text>
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
        <circle cx="190" cy="170" r="140" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <circle cx="190" cy="170" r="96" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
        <circle className="cb-draw" cx="190" cy="130" r="28" fill="none" stroke="#F09A36" strokeWidth="3" />
        <path className="cb-draw" d="M130 230 C 140 185, 240 185, 250 230" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
        {[[70,120],[320,200],[110,280],[290,70]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="6" fill="#8FCBF2" />
        ))}
        <path d="M76 122 L162 130 M314 198 L250 210 M116 276 L150 232 M284 76 L212 112" fill="none" stroke="#8FCBF2" strokeWidth="1.5" strokeDasharray="3 6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
      <g fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5">
        <rect x="60" y="50" width="60" height="60" rx="10" /><rect x="160" y="50" width="60" height="60" rx="10" /><rect x="260" y="50" width="60" height="60" rx="10" />
        <rect x="60" y="140" width="60" height="60" rx="10" /><rect x="260" y="140" width="60" height="60" rx="10" />
        <rect x="60" y="230" width="60" height="60" rx="10" /><rect x="160" y="230" width="60" height="60" rx="10" /><rect x="260" y="230" width="60" height="60" rx="10" />
      </g>
      <rect className="cb-draw" x="160" y="140" width="60" height="60" rx="10" fill="none" stroke="#F09A36" strokeWidth="3" />
      <circle cx="190" cy="170" r="8" fill="#F09A36" />
      <circle className="cb-pulse-ring" cx="190" cy="170" r="8" fill="none" stroke="#F09A36" />
      <path className="cb-draw" d="M120 80 H160 M220 80 H260 M120 170 H160 M220 170 H260 M120 260 H160 M220 260 H260 M190 110 V140 M190 200 V230" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default CoderBoxDigital;