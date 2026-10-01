// // // import React, { useState, useEffect, useRef, useCallback } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import {
// // //   ArrowRight, Play, ChevronLeft, ChevronRight, Globe, Zap, Users,
// // //   Award, TrendingUp, Bot, BarChart3, Building2, Search, Megaphone,
// // //   Target, RefreshCw, LineChart, Sparkles, Star, Shield, Rocket,
// // //   Code2, Palette, Database
// // // } from 'lucide-react';

// // // /* ============================================================
// // //    CONSTANTS
// // //    ============================================================ */
// // // const SERVICES_DATA = [
// // //   { title: 'Branding',        desc: 'Identity systems, voice and visuals people actually remember.', icon: Palette },
// // //   { title: 'Technology',      desc: 'Websites, apps and platforms engineered to scale with you.',     icon: Code2 },
// // //   { title: 'AI',              desc: 'Practical AI woven into workflows, content and customer journeys.', icon: Bot },
// // //   { title: 'Digital Strategy',desc: 'Roadmaps that connect business goals to every channel.',         icon: Target },
// // //   { title: 'Performance Marketing', desc: 'Paid media built around ROAS, not vanity metrics.',        icon: TrendingUp },
// // //   { title: 'SEO',             desc: 'Search visibility that compounds month after month.',            icon: Search },
// // //   { title: 'Automation',      desc: 'Systems that work 24/7, so your team can focus on people.',      icon: RefreshCw },
// // //   { title: 'Lead Generation', desc: 'Pipelines that turn attention into qualified conversations.',    icon: Users },
// // //   { title: 'Analytics',       desc: "Clear insight into what's working, and why.",                   icon: BarChart3 },
// // // ];

// // // const SLIDES_DATA = [
// // //   {
// // //     tag: '01 · Our Vision',
// // //     title: 'Made in India. Trusted worldwide.',
// // //     state: 'To be the growth partner that proves a team from India can build brands the whole world remembers.',
// // //     points: [
// // //       { b: 'Global standards, Indian heart.', rest: ' World-class craft with the warmth and hustle we grew up with.' },
// // //       { b: 'Every ambitious brand.',          rest: ' From first-time founders to enterprises crossing borders.' },
// // //     ],
// // //   },
// // //   {
// // //     tag: '02 · Our Mission',
// // //     title: 'Build. Scale. Transform.',
// // //     state: 'To unite human creativity with AI-driven execution, so every business we partner with can build, scale and transform with confidence.',
// // //     points: [
// // //       { b: 'Build',     rest: ' brands, platforms and foundations that last.' },
// // //       { b: 'Scale',     rest: ' with performance marketing, SEO and lead generation that compounds.' },
// // //       { b: 'Transform', rest: ' operations with automation and analytics that run 24/7.' },
// // //     ],
// // //   },
// // //   {
// // //     tag: '03 · Redefining the Market',
// // //     title: 'Agencies sell services. We build engines.',
// // //     state: "The old way is nine vendors, nine invoices and nobody owning the outcome. We're changing that.",
// // //     points: [
// // //       { b: 'One partner, not nine vendors.',    rest: ' Brand, tech, marketing and data under one roof.' },
// // //       { b: 'Creativity leads, AI amplifies.',   rest: ' Ideas come from people; speed comes from smart tools.' },
// // //       { b: 'Outcomes over deliverables.',       rest: ' We measure success in growth, not in hours logged.' },
// // //     ],
// // //   },
// // //   {
// // //     tag: '04 · Human-Centered',
// // //     title: 'People first. Always.',
// // //     state: 'Every strategy starts with a person, not a prompt. Real people plan, write, design and review every piece of work.',
// // //     points: [
// // //       { b: 'We listen before we build.',         rest: ' Your customers and your voice come first.' },
// // //       { b: 'Creatives with a point of view.',    rest: ' Work that feels crafted, not generated.' },
// // //       { b: 'A team you can call.',               rest: ' Real humans, real accountability.' },
// // //     ],
// // //   },
// // //   {
// // //     tag: '05 · AI-Driven',
// // //     title: 'AI does the lifting. People make the calls.',
// // //     state: 'We use AI where it genuinely helps: faster research, sharper targeting, automation that never sleeps. Judgement and taste stay human.',
// // //     points: [
// // //       { b: 'Smarter, not noisier.',    rest: ' AI in the engine room, never as the face of your brand.' },
// // //       { b: '24/7 automation.',         rest: ' Leads, reports and follow-ups that run while you sleep.' },
// // //       { b: 'Analytics that explain.',  rest: ' Insight you can act on, not dashboards you ignore.' },
// // //     ],
// // //   },
// // // ];

// // // const MARQUEE_SERVICES = SERVICES_DATA.map((s) => s.title);
// // // const MARQUEE_LINES = [
// // //   'Made in India', 'Built for the World', 'Human-Centered',
// // //   'AI-Driven', 'Build. Scale. Transform.', 'Your Expertise. Our Strategy. Your Growth.',
// // // ];

// // // /* ============================================================
// // //    COMPONENT
// // //    ============================================================ */
// // // const CoderBoxDigital = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const [sliderPaused, setSliderPaused] = useState(false);
// // //   const [buildIndex, setBuildIndex] = useState(0);

// // //   const carouselRef = useRef(null);
// // //   const sliderRef = useRef(null);
// // //   const slideTimerRef = useRef(null);
// // //   const buildTimerRef = useRef(null);
// // //   const dragRef = useRef({ down: false, startX: 0, startL: 0 });
// // //   const touchRef = useRef({ startX: null });

// // //   const SLIDE_DURATION = 7000;

// // //   useEffect(() => {
// // //     buildTimerRef.current = setInterval(() => {
// // //       setBuildIndex((i) => (i + 1) % 3);
// // //     }, 1600);
// // //     return () => clearInterval(buildTimerRef.current);
// // //   }, []);

// // //   const scheduleNextSlide = useCallback(() => {
// // //     if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
// // //     if (sliderPaused) return;
// // //     slideTimerRef.current = setTimeout(() => {
// // //       setCurrentSlide((i) => (i + 1) % SLIDES_DATA.length);
// // //     }, SLIDE_DURATION);
// // //   }, [sliderPaused]);

// // //   useEffect(() => {
// // //     scheduleNextSlide();
// // //     return () => {
// // //       if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
// // //     };
// // //   }, [currentSlide, sliderPaused, scheduleNextSlide]);

// // //   const goToSlide = (i) => {
// // //     setCurrentSlide((i + SLIDES_DATA.length) % SLIDES_DATA.length);
// // //   };

// // //   useEffect(() => {
// // //     const onKey = (e) => {
// // //       if (!sliderRef.current) return;
// // //       const r = sliderRef.current.getBoundingClientRect();
// // //       if (r.bottom < 0 || r.top > window.innerHeight) return;
// // //       if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
// // //       if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
// // //     };
// // //     window.addEventListener('keydown', onKey);
// // //     return () => window.removeEventListener('keydown', onKey);
// // //   }, [currentSlide]);

// // //   const scrollCarousel = (dir) => {
// // //     if (!carouselRef.current) return;
// // //     const step = window.innerWidth < 640 ? 280 : 340;
// // //     carouselRef.current.scrollBy({ left: dir * step, behavior: 'smooth' });
// // //   };

// // //   useEffect(() => {
// // //     const el = carouselRef.current;
// // //     if (!el) return;

// // //     const onPointerDown = (e) => {
// // //       if (e.pointerType !== 'mouse') return;
// // //       dragRef.current = { down: true, startX: e.clientX, startL: el.scrollLeft };
// // //       el.classList.add('cursor-grabbing');
// // //     };
// // //     const onPointerMove = (e) => {
// // //       if (!dragRef.current.down) return;
// // //       const dx = e.clientX - dragRef.current.startX;
// // //       el.scrollLeft = dragRef.current.startL - dx;
// // //     };
// // //     const onPointerUp = () => {
// // //       dragRef.current.down = false;
// // //       el.classList.remove('cursor-grabbing');
// // //     };

// // //     el.addEventListener('pointerdown', onPointerDown);
// // //     window.addEventListener('pointermove', onPointerMove);
// // //     window.addEventListener('pointerup', onPointerUp);
// // //     return () => {
// // //       el.removeEventListener('pointerdown', onPointerDown);
// // //       window.removeEventListener('pointermove', onPointerMove);
// // //       window.removeEventListener('pointerup', onPointerUp);
// // //     };
// // //   }, []);

// // //   const onTouchStart = (e) => {
// // //     touchRef.current.startX = e.touches[0].clientX;
// // //   };
// // //   const onTouchEnd = (e) => {
// // //     if (touchRef.current.startX === null) return;
// // //     const dx = e.changedTouches[0].clientX - touchRef.current.startX;
// // //     if (Math.abs(dx) > 50) goToSlide(currentSlide + (dx < 0 ? 1 : -1));
// // //     touchRef.current.startX = null;
// // //   };

// // //   const NAV_BTN = "swiper-button-custom bg-white/80 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-gray-200 hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";
// // //   const NAV_BTN_ICON = "h-4 w-4 sm:h-5 sm:w-5 text-gray-700 group-hover:text-white transition-colors";
// // //   const SLIDER_BTN = "swiper-button-custom bg-white/10 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-[rgba(143,203,242,.3)] hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";
// // //   const SLIDER_BTN_ICON = "h-4 w-4 sm:h-5 sm:w-5 text-white";

// // //   /* ✅ Full-bleed wrapper — poore screen me chalti hai */
// // //   const FULL_BLEED = "relative w-screen left-1/2 -translate-x-1/2 overflow-hidden";

// // //   return (
// // //     <>
// // //       <style>{`
// // //         @keyframes cbBlink { 50% { opacity: .25; } }
// // //         @keyframes cbRise { to { transform: none; } }
// // //         @keyframes cbGrow { from { transform: scaleX(0); transform-origin: left; } }
// // //         @keyframes cbChipIn { to { opacity: 1; transform: none; } }
// // //         @keyframes cbDraw { to { stroke-dashoffset: 0; } }
// // //         @keyframes cbSpinY { 0% { transform: scaleX(1); } 50% { transform: scaleX(0); } 100% { transform: scaleX(-1); } }
// // //         @keyframes cbRun { from { stroke-dashoffset: 418; } to { stroke-dashoffset: 0; } }
// // //         @keyframes cbPing { from { transform: scale(1); opacity: .9; } to { transform: scale(5); opacity: 0; } }
// // //         @keyframes cbPing2 { 0% { transform: scale(.6); opacity: 1; } 100% { transform: scale(1.8); opacity: 0; } }
// // //         @keyframes cbRot { to { transform: rotate(360deg); } }
// // //         @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -12px; } }
// // //         @keyframes cbMq { to { transform: translateX(-50%); } }
// // //         @keyframes cbUp { to { opacity: 1; transform: none; } }
// // //         @keyframes cbProg { to { width: 100%; } }
// // //         @keyframes cbShine { from { background-position: 200% 0; } to { background-position: 0 0; } }

// // //         .cb-chip { opacity: 0; transform: translateY(10px); animation: cbChipIn .6s cubic-bezier(.2,.8,.2,1) forwards; }
// // //         .cb-grain {
// // //           position: fixed; inset: 0; pointer-events: none; z-index: 100; opacity: .35; mix-blend-mode: multiply;
// // //           background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
// // //         }
// // //         .cb-marquee-track { display: flex; width: max-content; animation: cbMq 42s linear infinite; }
// // //         .cb-marquee-track-rev { display: flex; width: max-content; animation: cbMq 36s linear infinite reverse; }
// // //         .cb-carousel::-webkit-scrollbar { display: none; }
// // //         .cb-carousel { scrollbar-width: none; }
// // //         .cb-stroke-run { stroke-dasharray: 18 400; animation: cbRun 3.6s linear infinite; }
// // //         .cb-merid { transform-origin: 260px 250px; animation: cbSpinY 9s linear infinite; }
// // //         .cb-merid:nth-child(2) { animation-delay: -3s; }
// // //         .cb-merid:nth-child(3) { animation-delay: -6s; }
// // //         .cb-badge-spin { animation: cbRot 24s linear infinite; transform-origin: 150px 150px; }
// // //         .cb-badge-spin-sm { animation: cbRot 18s linear infinite; transform-origin: 75px 75px; }
// // //         .cb-bob { animation: cbBob 6s ease-in-out infinite; }
// // //         .cb-pulse-ring { transform-origin: center; transform-box: fill-box; animation: cbPing 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
// // //         .cb-pulse-ring-2 { animation-delay: 1.1s; }
// // //         .cb-draw { stroke-dasharray: 900; stroke-dashoffset: 900; }
// // //         .cb-slide-active .cb-draw { animation: cbDraw 2.2s .2s cubic-bezier(.2,.8,.2,1) forwards; }
// // //         .cb-huge-o {
// // //           background: linear-gradient(90deg, rgba(255,255,255,.3) 0%, #fff 30%, rgba(255,255,255,.3) 60%);
// // //           background-size: 200% 100%;
// // //           -webkit-background-clip: text; background-clip: text; color: transparent;
// // //           animation: cbShine 4s linear infinite;
// // //         }
// // //         .swiper-button-custom:hover .swiper-icon { color: #fff !important; }

// // //         .cb-stat-num {
// // //           font-family: 'Sora', system-ui, sans-serif;
// // //           font-weight: 800;
// // //           font-style: normal;
// // //           color: #0A5E93;
// // //           letter-spacing: -.02em;
// // //           line-height: 1;
// // //         }
// // //       `}</style>

// // //       <div className="cb-grain" aria-hidden="true" />

// // //       <div className="bg-[#F3F4F1] text-[#0B1526] font-['Manrope'] overflow-x-hidden" style={{ fontSize: '17px', lineHeight: 1.6 }}>

// // //         {/* HERO */}
// // //         <header id="top" className="relative pt-24 sm:pt-28 md:pt-36 pb-0">
// // //           <div className="px-4 sm:px-6 md:px-10">
// // //             <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1.12fr_.88fr] gap-10 sm:gap-12 lg:gap-14 items-center">

// // //               <div className="order-2 lg:order-1 text-center lg:text-left">
// // //                 <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-5 sm:mb-6 mt-2 sm:mt-4 md:mt-8">
// // //                   <span className="sec-badge inline-flex items-center gap-2">
// // //                     <i className="w-2 h-2 rounded-full bg-[#0D86CF]" style={{ animation: 'cbBlink 2s infinite' }} />
// // //                     CoderBox Digital
// // //                   </span>
// // //                   <span className="sec-badge">Human-Centered. AI-Driven.</span>
// // //                 </div>

// // //                 <h1 className="sec-h2 sec-text-dark font-['Sora'] mx-auto lg:mx-0"
// // //                     style={{ fontSize: 'clamp(34px,9vw,100px)', lineHeight: 1, letterSpacing: '-.045em' }}>
// // //                   <span className="block overflow-hidden pb-[.06em]">
// // //                     <span className="inline-block" style={{ transform: 'translateY(105%)', animation: 'cbRise 1s cubic-bezier(.2,.8,.2,1) forwards' }}>
// // //                       Made in India.
// // //                     </span>
// // //                   </span>
// // //                   <span className="block overflow-hidden pb-[.06em]">
// // //                     <span className="inline-block" style={{ transform: 'translateY(105%)', animation: 'cbRise 1s cubic-bezier(.2,.8,.2,1) .12s forwards' }}>
// // //                       Built for the
// // //                     </span>
// // //                   </span>
// // //                   <span className="block overflow-hidden pb-[.06em]">
// // //                     <span className="inline-block" style={{ transform: 'translateY(105%)', animation: 'cbRise 1s cubic-bezier(.2,.8,.2,1) .24s forwards' }}>
// // //                       <span className="font-['Instrument_Serif'] italic font-normal text-[#0D86CF] tracking-[-.02em]">World.</span>
// // //                     </span>
// // //                   </span>
// // //                 </h1>

// // //                 <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 mb-4 sm:mb-5 font-['Sora'] font-extrabold"
// // //                      style={{ fontSize: 'clamp(18px,4.5vw,32px)', lineHeight: 1, letterSpacing: '-.02em' }}>
// // //                   {['BUILD.', 'SCALE.', 'TRANSFORM.'].map((word, i) => (
// // //                     <span key={word} className={`transition-colors duration-500 ${buildIndex === i ? 'text-[#0B1526]' : 'text-[#B9C0C9]'}`}>
// // //                       {word}
// // //                       {buildIndex === i && <span className="block h-[3px] mt-2 bg-[#0D86CF]" style={{ animation: 'cbGrow .6s cubic-bezier(.2,.8,.2,1)' }} />}
// // //                     </span>
// // //                   ))}
// // //                 </div>

// // //                 <p className="sec-p sec-text-dark-soft max-w-[560px] mx-auto lg:mx-0">
// // //                   A growth partner from India with a global mindset. We put <b className="text-[#0B1526]">people first</b> and let AI do the heavy lifting, bringing every discipline your brand needs into one team.
// // //                 </p>

// // //                 <div className="flex flex-wrap justify-center lg:justify-start gap-2 my-5 sm:my-6 max-w-[600px] mx-auto lg:mx-0">
// // //                   {['Branding','Technology','AI','Digital Strategy','Performance Marketing','SEO','Automation','Lead Generation','Analytics'].map((chip, i) => (
// // //                     <span
// // //                       key={chip}
// // //                       className="cb-chip px-3 py-1.5 sm:px-3.5 sm:py-2 border border-[#D9DDD6] rounded-full text-xs sm:text-[13.5px] font-semibold text-[#3A4557] bg-white transition-all hover:border-[#0D86CF] hover:text-[#0A5E93] hover:-translate-y-0.5"
// // //                       style={{ animationDelay: `${0.6 + i * 0.06}s` }}
// // //                     >
// // //                       {chip}
// // //                     </span>
// // //                   ))}
// // //                 </div>

// // //                 <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start flex-wrap gap-4 sm:gap-6 mt-6">
// // //                   <a href="#contact" className="sec-btn group">
// // //                     Connect With CoderBox
// // //                     <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
// // //                       <ArrowRight className="h-4 w-4" />
// // //                     </motion.span>
// // //                   </a>
// // //                   <a href="#services" className="sec-h3 text-[#0A5E93] underline decoration-[1.5px] underline-offset-[6px] hover:decoration-[#0A5E93]">
// // //                     Explore services
// // //                   </a>
// // //                 </div>

// // //                 <div className="sec-p sec-text-dark-soft mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-3.5">
// // //                   <span className="w-9 h-[1.5px] bg-current inline-block" />
// // //                   Your Expertise. Our Strategy. Your Growth.
// // //                 </div>
// // //               </div>

// // //               {/* RIGHT — Globe */}
// // //               <div className="order-1 lg:order-2 relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] mx-auto lg:mx-0 lg:justify-self-end"
// // //                    style={{ aspectRatio: '1/1.02' }} aria-hidden="true">

// // //                 <svg className="absolute -left-[4%] sm:-left-[6%] -top-[4%] sm:-top-[6%] w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] z-[3]"
// // //                      viewBox="0 0 150 150">
// // //                   <circle cx="75" cy="75" r="72" fill="#F3F4F1" stroke="#0B1526" strokeWidth="1.5" />
// // //                   <defs>
// // //                     <path id="cb-circ" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
// // //                   </defs>
// // //                   <g className="cb-badge-spin-sm">
// // //                     <text style={{ font: '800 11.5px Manrope, sans-serif', letterSpacing: '.16em', fill: '#0B1526' }}>
// // //                       <textPath href="#cb-circ" startOffset="6%">
// // //                         BUILT FOR THE WORLD • MADE IN INDIA •
// // //                       </textPath>
// // //                     </text>
// // //                   </g>
// // //                   <rect x="50" y="58" width="50" height="34" rx="5" fill="#0B1526" />
// // //                   <text x="75" y="79" textAnchor="middle" style={{ font: '800 16px Sora, sans-serif', fill: '#FFFFFF', letterSpacing: '0.02em' }}>
// // //                     CB
// // //                   </text>
// // //                   <rect x="50" y="88" width="16.6" height="4" fill="#F09A36" />
// // //                   <rect x="66.6" y="88" width="16.7" height="4" fill="#FFFFFF" />
// // //                   <rect x="83.3" y="88" width="16.7" height="4" fill="#2E8B57" />
// // //                 </svg>

// // //                 <div className="absolute top-[8%] right-[2%] bottom-[10%] left-[10%] bg-[#08111F] rounded-[22px] sm:rounded-[28px] overflow-hidden"
// // //                      style={{ boxShadow: '0 40px 80px -30px rgba(8,17,31,.55)' }}>
// // //                   <svg className="w-full h-full block" viewBox="0 0 520 500">
// // //                     <defs>
// // //                       <radialGradient id="cb-gl" cx="45%" cy="40%" r="65%">
// // //                         <stop offset="0" stopColor="#15375A" />
// // //                         <stop offset="1" stopColor="#08111F" stopOpacity="0" />
// // //                       </radialGradient>
// // //                       <clipPath id="cb-gclip"><circle cx="260" cy="250" r="170" /></clipPath>
// // //                     </defs>
// // //                     <circle cx="260" cy="250" r="230" fill="url(#cb-gl)" />
// // //                     <g clipPath="url(#cb-gclip)">
// // //                       <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
// // //                         <ellipse cx="260" cy="250" rx="170" ry="40" />
// // //                         <ellipse cx="260" cy="190" rx="160" ry="34" />
// // //                         <ellipse cx="260" cy="310" rx="160" ry="34" />
// // //                         <ellipse cx="260" cy="130" rx="118" ry="22" />
// // //                         <ellipse cx="260" cy="370" rx="118" ry="22" />
// // //                       </g>
// // //                       <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
// // //                         <ellipse className="cb-merid" cx="260" cy="250" rx="170" ry="170" />
// // //                         <ellipse className="cb-merid" cx="260" cy="250" rx="170" ry="170" />
// // //                         <ellipse className="cb-merid" cx="260" cy="250" rx="170" ry="170" />
// // //                         <line x1="260" y1="80" x2="260" y2="420" />
// // //                       </g>
// // //                     </g>
// // //                     <circle cx="260" cy="250" r="170" fill="none" stroke="rgba(143,203,242,.4)" />

// // //                     {[
// // //                       'M318 262 Q 240 120 150 176',
// // //                       'M318 262 Q 180 70 70 205',
// // //                       'M318 262 Q 300 200 262 228',
// // //                       'M318 262 Q 390 250 392 300',
// // //                       'M318 262 Q 450 260 440 390',
// // //                     ].map((d, i) => (
// // //                       <path key={`arc-${i}`} d={d} fill="none" stroke="#8FCBF2" strokeWidth="1.6" strokeDasharray="4 5" opacity=".9" />
// // //                     ))}
// // //                     {[
// // //                       { d: 'M318 262 Q 240 120 150 176', delay: '0s' },
// // //                       { d: 'M318 262 Q 180 70 70 205', delay: '-.9s' },
// // //                       { d: 'M318 262 Q 300 200 262 228', delay: '-1.8s' },
// // //                       { d: 'M318 262 Q 390 250 392 300', delay: '-2.7s' },
// // //                       { d: 'M318 262 Q 450 260 440 390', delay: '-1.3s' },
// // //                     ].map((r, i) => (
// // //                       <path key={`run-${i}`} className="cb-stroke-run" d={r.d} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" style={{ animationDelay: r.delay }} />
// // //                     ))}

// // //                     {[
// // //                       [150, 176, 'LONDON', 118, 165],
// // //                       [70, 205, 'NEW YORK', 40, 228],
// // //                       [262, 228, 'DUBAI', 222, 218],
// // //                       [392, 300, 'SINGAPORE', 400, 304],
// // //                       [440, 390, 'SYDNEY', 408, 412],
// // //                     ].map(([cx, cy, label, tx, ty]) => (
// // //                       <g key={label}>
// // //                         <circle cx={cx} cy={cy} r="4" fill="#8FCBF2" />
// // //                         <text x={tx} y={ty} fill="#CFE6F7" style={{ font: '700 11px Manrope, sans-serif', letterSpacing: '.06em' }}>{label}</text>
// // //                       </g>
// // //                     ))}

// // //                     <g>
// // //                       <circle className="cb-pulse-ring" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
// // //                       <circle className="cb-pulse-ring cb-pulse-ring-2" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
// // //                       <circle cx="318" cy="262" r="6.5" fill="#F09A36" />
// // //                       <text x="332" y="252" fill="#fff" style={{ font: '800 12px Manrope, sans-serif', letterSpacing: '.1em' }}>INDIA</text>
// // //                     </g>
// // //                   </svg>

// // //                   <div className="absolute left-4 sm:left-7 right-4 sm:right-7 bottom-3 sm:bottom-5 flex justify-between items-end text-white">
// // //                     <div>
// // //                       <b className="block font-['Sora'] font-extrabold text-sm sm:text-base md:text-lg">CoderBox Digital</b>
// // //                       <small className="font-bold text-[9px] sm:text-[10px] md:text-[11px] tracking-[.16em] text-[#8FCBF2]">FUTURE DIGITAL TRANSFORMATION</small>
// // //                     </div>
// // //                     <span className="flex items-center gap-1 sm:gap-1.5 font-extrabold text-[9px] sm:text-[10px] md:text-[11px] tracking-[.14em] text-white border border-white/25 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
// // //                       <i className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#4ADE80]" style={{ animation: 'cbBlink 1.4s infinite' }} />
// // //                       LIVE
// // //                     </span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="cb-bob hidden sm:flex absolute z-[3] bg-white rounded-2xl px-3 sm:px-4.5 py-2.5 sm:py-3.5 items-center gap-2 sm:gap-3"
// // //                      style={{ right: '-4%', top: '14%', transform: 'rotate(3deg)', boxShadow: '0 18px 40px -18px rgba(11,21,38,.35)' }}>
// // //                   <span className="w-8 h-8 sm:w-9.5 sm:h-9.5 rounded-lg sm:rounded-xl bg-[#0A5E93] grid place-items-center text-white">
// // //                     <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5" />
// // //                   </span>
// // //                   <div>
// // //                     <b className="block font-['Sora'] font-extrabold text-base sm:text-[22px] leading-none">24/7</b>
// // //                     <small className="sec-p sec-text-dark-soft mb-0 text-[10px] sm:text-[12.5px]">Automation</small>
// // //                   </div>
// // //                 </div>

// // //                 <div className="cb-bob hidden sm:flex absolute z-[3] bg-white rounded-2xl px-3 sm:px-4.5 py-2.5 sm:py-3.5 items-center gap-2 sm:gap-3"
// // //                      style={{ left: '-6%', top: '50%', transform: 'rotate(-3deg)', animationDelay: '-3s', boxShadow: '0 18px 40px -18px rgba(11,21,38,.35)' }}>
// // //                   <span className="w-8 h-8 sm:w-9.5 sm:h-9.5 rounded-lg sm:rounded-xl bg-[#0A5E93] grid place-items-center text-white">
// // //                     <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
// // //                   </span>
// // //                   <div>
// // //                     <b className="block font-['Sora'] font-extrabold text-base sm:text-[22px] leading-none">[XX]+</b>
// // //                     <small className="sec-p sec-text-dark-soft mb-0 text-[10px] sm:text-[12.5px]">Brands Scaled</small>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* ✅ Dark Marquee — FULL-BLEED (edge to edge) */}
// // //           <div className={`${FULL_BLEED} bg-[#08111F] text-white py-3 sm:py-5 mt-16 sm:mt-20 md:mt-24`}>
// // //             <div className="cb-marquee-track">
// // //               {[0, 1].map((k) => (
// // //                 <span key={k} className="flex items-center gap-4 sm:gap-9 pr-4 sm:pr-9 font-['Sora'] font-bold text-base sm:text-xl md:text-[26px] whitespace-nowrap">
// // //                   {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((n, i) => (
// // //                     <React.Fragment key={`${k}-${i}`}>
// // //                       {n}
// // //                       <em className="not-italic text-[#8FCBF2] text-[10px] sm:text-sm">◆</em>
// // //                     </React.Fragment>
// // //                   ))}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </header>

// // //         {/* ✅ Blue Marquee — FULL-BLEED (edge to edge) */}
// // //         <div className={`${FULL_BLEED} bg-[#0A5E93] text-white py-2 sm:py-3`}>
// // //           <div className="cb-marquee-track-rev">
// // //             {[0, 1].map((k) => (
// // //               <span key={k} className="flex items-center gap-4 sm:gap-9 pr-4 sm:pr-9 font-['Instrument_Serif'] italic font-normal text-base sm:text-xl md:text-2xl whitespace-nowrap">
// // //                 {[...MARQUEE_LINES, ...MARQUEE_LINES].map((n, i) => (
// // //                   <React.Fragment key={`${k}-${i}`}>
// // //                     {n}
// // //                     <em className="not-italic text-[#F09A36] text-[10px] sm:text-sm">◆</em>
// // //                   </React.Fragment>
// // //                 ))}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* PRINCIPLES */}
// // //         <section id="principles" className="py-16 sm:py-20 md:py-24">
// // //           <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               viewport={{ once: true }}
// // //               className="text-center mb-10 sm:mb-12"
// // //             >
// // //               <span className="sec-badge inline-block">Our Principles</span>
// // //               <h2 className="sec-h2 sec-text-dark mt-3 max-w-3xl mx-auto">
// // //                 Your Expertise. Our Strategy.{' '}
// // //                 <span className="font-['Instrument_Serif'] italic font-normal text-[#0D86CF]">Your Growth.</span>
// // //               </h2>
// // //               <p className="sec-p sec-text-dark-soft mt-3 max-w-2xl mx-auto">
// // //                 You know your business better than anyone. We bring the strategy and the engine. Growth is what we build together.
// // //               </p>
// // //             </motion.div>

// // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
// // //               {[
// // //                 { num: '01', title: 'Your Expertise', tag: 'YOU', desc: 'We start by listening. Your market knowledge, customers and ambitions shape everything we make.', w: '72%' },
// // //                 { num: '02', title: 'Our Strategy',  tag: 'US',  desc: 'Nine disciplines, one plan. Creative thinking leads; data and automation keep it sharp.',       w: '86%' },
// // //                 { num: '03', title: 'Your Growth',   tag: 'TOGETHER', desc: 'Measurable results you can see: more reach, more qualified leads, more revenue.',          w: '100%' },
// // //               ].map((p, i) => (
// // //                 <motion.article
// // //                   key={p.num}
// // //                   initial={{ opacity: 0, y: 34 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   transition={{ duration: 0.6, delay: i * 0.1 }}
// // //                   viewport={{ once: true }}
// // //                   className="group relative bg-white rounded-3xl px-6 sm:px-8 pt-7 sm:pt-8 pb-6 sm:pb-7 border border-[#D9DDD6] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-30px_rgba(11,21,38,.4)]"
// // //                 >
// // //                   <span className="absolute right-5 sm:right-6 top-6 sm:top-7 font-extrabold text-xs sm:text-[13px] text-[#6B7585] tracking-widest">{p.tag}</span>
// // //                   <div className="font-['Instrument_Serif'] italic text-6xl sm:text-7xl md:text-[88px] leading-none text-[#0D86CF] opacity-90">{p.num}</div>
// // //                   <h3 className="sec-h3 sec-text-dark mt-3 sm:mt-4 mb-2">{p.title}</h3>
// // //                   <p className="sec-p sec-text-dark-soft mb-0">{p.desc}</p>
// // //                   <div className="h-2 rounded-full bg-[#E9EBE6] mt-6 sm:mt-7 overflow-hidden">
// // //                     <motion.div
// // //                       initial={{ width: 0 }}
// // //                       whileInView={{ width: p.w }}
// // //                       transition={{ duration: 1.4, delay: 0.2 + i * 0.15 }}
// // //                       viewport={{ once: true }}
// // //                       className="h-full rounded-full"
// // //                       style={{ background: 'linear-gradient(90deg,#0A5E93,#8FCBF2,#0D86CF)' }}
// // //                     />
// // //                   </div>
// // //                 </motion.article>
// // //               ))}
// // //             </div>

// // //             <div className="grid grid-cols-2 lg:grid-cols-4 mt-5 sm:mt-6 border border-[#D9DDD6] rounded-3xl bg-white overflow-hidden">
// // //               {[
// // //                 { b: '09',   s: 'Service Pillars' },
// // //                 { b: '1',    s: 'Team, One Engine' },
// // //                 { b: '24/7', s: 'Automation' },
// // //                 { b: '[XX]+',s: 'Brands Scaled' },
// // //               ].map((st, i) => (
// // //                 <div key={st.s} className={`px-4 sm:px-6 md:px-8 py-7 sm:py-8 md:py-9 text-center border-[#D9DDD6]
// // //                   ${i % 2 === 0 ? 'border-r' : ''}
// // //                   ${i < 2 ? 'border-b lg:border-b-0' : ''}
// // //                   ${i === 2 ? 'lg:border-r' : ''}
// // //                 `}>
// // //                   <b className="cb-stat-num block mb-2 text-[52px] sm:text-[64px] md:text-[80px]">{st.b}</b>
// // //                   <span className="sec-p sec-text-dark-soft mb-0 text-sm sm:text-base">{st.s}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* VISION / MISSION SLIDER */}
// // //         <section id="vision" className="py-16 sm:py-20 md:py-24 bg-[#08111F] text-white overflow-hidden">
// // //           <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               viewport={{ once: true }}
// // //               className="text-center mb-10 sm:mb-12"
// // //             >
// // //               <span className="sec-badge inline-block">What drives us</span>
// // //               <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
// // //                 Redefining the market,{' '}
// // //                 <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">one brand at a time.</span>
// // //               </h2>
// // //               <p className="sec-p mt-3 max-w-2xl mx-auto text-[#AFC0D4]">
// // //                 Our vision, our mission and the promises behind them. Swipe, click, or let it play.
// // //               </p>
// // //             </motion.div>

// // //             <div
// // //               ref={sliderRef}
// // //               className="relative bg-[#0F1E33] border border-[rgba(143,203,242,.12)] rounded-3xl sm:rounded-[32px] min-h-[560px] sm:min-h-[620px] md:min-h-[680px] overflow-hidden"
// // //               onMouseEnter={() => setSliderPaused(true)}
// // //               onMouseLeave={() => setSliderPaused(false)}
// // //               onTouchStart={onTouchStart}
// // //               onTouchEnd={onTouchEnd}
// // //             >
// // //               {SLIDES_DATA.map((slide, i) => (
// // //                 <div
// // //                   key={slide.tag}
// // //                   className={`absolute inset-0 grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-10 px-5 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16 pb-24 sm:pb-28 md:pb-32 items-center transition-all duration-700 ${currentSlide === i ? 'cb-slide-active opacity-100 visible' : 'opacity-0 invisible'}`}
// // //                 >
// // //                   <div className="text-center md:text-left">
// // //                     <span className="sec-badge inline-flex items-center gap-2 sm:gap-3 text-[#8FCBF2]">
// // //                       <i className="w-5 sm:w-7 h-[1.5px] bg-[#F09A36]" />
// // //                       {slide.tag}
// // //                     </span>
// // //                     <h3 className="sec-h2 my-4 sm:my-5 text-white">
// // //                       {slide.title}
// // //                     </h3>
// // //                     <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-[#E4EEF7] max-w-[620px] mx-auto md:mx-0 text-lg sm:text-xl md:text-2xl lg:text-[clamp(24px,2.4vw,34px)]"
// // //                        style={{ lineHeight: 1.25 }}>
// // //                       {slide.state}
// // //                     </p>
// // //                     <ul className="mt-6 sm:mt-8 grid gap-3 sm:gap-3.5 max-w-[600px] mx-auto md:mx-0 text-left">
// // //                       {slide.points.map((pt, k) => (
// // //                         <li key={k} className="sec-p mb-0 flex gap-3 sm:gap-3.5 items-start text-[#B8C7D8] text-sm sm:text-base">
// // //                           <span className="flex-none w-2 h-2 sm:w-2.5 sm:h-2.5 mt-1.5 sm:mt-2 rounded-sm bg-[#8FCBF2] rotate-45" />
// // //                           <span>
// // //                             <b className="text-white">{pt.b}</b>
// // //                             {pt.rest}
// // //                           </span>
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   </div>

// // //                   <div className="hidden md:grid place-items-center relative">
// // //                     <span className="absolute right-0 -top-8 font-['Sora'] font-extrabold text-6xl md:text-[220px] leading-none text-[rgba(143,203,242,.07)]">
// // //                       {String(i + 1).padStart(2, '0')}
// // //                     </span>
// // //                     <SlideArt index={i} />
// // //                   </div>
// // //                 </div>
// // //               ))}

// // //               <div className="absolute left-4 sm:left-8 right-4 sm:right-8 bottom-4 sm:bottom-8 flex items-center gap-3 sm:gap-6 z-10">
// // //                 <div className="hidden sm:flex gap-1.5 flex-1">
// // //                   {SLIDES_DATA.map((s, i) => (
// // //                     <button
// // //                       key={s.tag}
// // //                       onClick={() => goToSlide(i)}
// // //                       className={`flex-1 text-left pt-3 relative bg-transparent border-0 cursor-pointer transition-colors font-bold text-[12.5px] tracking-wider ${i === currentSlide ? 'text-white' : 'text-[#7F93AA]'}`}
// // //                     >
// // //                       <span className="absolute top-0 left-0 right-0 h-[3px] rounded bg-[rgba(143,203,242,.18)]" />
// // //                       <span
// // //                         className={`absolute top-0 left-0 h-[3px] rounded bg-[#8FCBF2] ${i < currentSlide ? 'w-full' : ''}`}
// // //                         style={i === currentSlide ? { animation: `cbProg ${SLIDE_DURATION}ms linear forwards`, animationPlayState: sliderPaused ? 'paused' : 'running' } : { width: 0 }}
// // //                       />
// // //                       <span className="hidden md:inline">{`0${i + 1} ${s.tag.split('·')[1].trim()}`}</span>
// // //                     </button>
// // //                   ))}
// // //                 </div>

// // //                 <div className="flex sm:hidden gap-1.5 flex-1 justify-center">
// // //                   {SLIDES_DATA.map((s, i) => (
// // //                     <button
// // //                       key={`dot-${s.tag}`}
// // //                       onClick={() => goToSlide(i)}
// // //                       aria-label={`Go to ${s.tag}`}
// // //                       className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-[#8FCBF2]' : 'w-1.5 bg-[rgba(143,203,242,.25)]'}`}
// // //                     />
// // //                   ))}
// // //                 </div>

// // //                 <div className="flex gap-2 sm:gap-2.5">
// // //                   <button onClick={() => goToSlide(currentSlide - 1)} aria-label="Previous slide" className={SLIDER_BTN}>
// // //                     <ChevronLeft className={`${SLIDER_BTN_ICON} swiper-icon`} />
// // //                   </button>
// // //                   <button onClick={() => goToSlide(currentSlide + 1)} aria-label="Next slide" className={SLIDER_BTN}>
// // //                     <ChevronRight className={`${SLIDER_BTN_ICON} swiper-icon`} />
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* SERVICES */}
// // //         <section id="services" className="py-16 sm:py-20 md:py-24">
// // //           <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               viewport={{ once: true }}
// // //               className="text-center mb-10 sm:mb-12"
// // //             >
// // //               <span className="sec-badge inline-block">One engine · nine pillars</span>
// // //               <h2 className="sec-h2 sec-text-dark mt-3 max-w-3xl mx-auto">
// // //                 Everything your brand needs,{' '}
// // //                 <span className="font-['Instrument_Serif'] italic font-normal text-[#0D86CF]">under one roof.</span>
// // //               </h2>
// // //               <p className="sec-p sec-text-dark-soft mt-3 max-w-2xl mx-auto">
// // //                 From strategy and design to technology and growth — every capability your brand needs, working as one team.
// // //               </p>
// // //             </motion.div>

// // //             <div className="relative">
// // //               <div
// // //                 ref={carouselRef}
// // //                 className="cb-carousel flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory px-1 pb-4 cursor-grab"
// // //               >
// // //                 {SERVICES_DATA.map((svc, i) => {
// // //                   const Icon = svc.icon;
// // //                   return (
// // //                     <article
// // //                       key={svc.title}
// // //                       className="group flex-none snap-start bg-white border border-[#D9DDD6] rounded-3xl p-6 sm:p-7 w-[78vw] sm:w-[340px] md:w-[320px] min-h-[280px] sm:min-h-[330px] flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-[#0B1526] hover:text-white hover:border-[#0B1526] select-none"
// // //                     >
// // //                       <span className="pointer-events-none absolute w-[260px] h-[260px] rounded-full -right-32 -bottom-36 transition-transform duration-500 group-hover:scale-[1.8]"
// // //                             style={{ background: 'radial-gradient(circle,rgba(13,134,207,.22),transparent 70%)' }} />
// // //                       <div className="flex justify-between items-start relative z-10">
// // //                         <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E3F0FA] text-[#0A5E93] grid place-items-center transition-all duration-500 group-hover:bg-[#0D86CF] group-hover:text-white group-hover:-rotate-6">
// // //                           <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
// // //                         </span>
// // //                         <span className="font-['Instrument_Serif'] italic text-2xl sm:text-3xl text-[#6B7585] group-hover:text-[#8FCBF2]">
// // //                           {String(i + 1).padStart(2, '0')}
// // //                         </span>
// // //                       </div>
// // //                       <h3 className="sec-h3 sec-text-dark relative z-10 mt-auto pt-8 sm:pt-10 group-hover:text-white">
// // //                         {svc.title}
// // //                       </h3>
// // //                       <p className="sec-p sec-text-dark-soft relative z-10 mt-3 mb-0 group-hover:text-[#B8C7D8]">
// // //                         {svc.desc}
// // //                       </p>
// // //                     </article>
// // //                   );
// // //                 })}
// // //               </div>

// // //               <div className="flex justify-center gap-2.5 mt-6 sm:mt-8">
// // //                 <button onClick={() => scrollCarousel(-1)} aria-label="Scroll left" className={NAV_BTN}>
// // //                   <ChevronLeft className={`${NAV_BTN_ICON} swiper-icon`} />
// // //                 </button>
// // //                 <button onClick={() => scrollCarousel(1)} aria-label="Scroll right" className={NAV_BTN}>
// // //                   <ChevronRight className={`${NAV_BTN_ICON} swiper-icon`} />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* CLOSING CTA */}
// // //         <section id="contact" className="relative bg-[#0A5E93] text-white py-16 sm:py-20 md:py-24 overflow-hidden">
// // //           <svg className="absolute right-4 sm:right-6 md:right-[6%] top-16 sm:top-24 md:top-32 w-28 h-28 sm:w-40 sm:h-40 md:w-72 md:h-72 opacity-40 sm:opacity-50 md:opacity-95"
// // //                viewBox="0 0 300 300" aria-hidden="true">
// // //             <defs><path id="cb-circ2" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" /></defs>
// // //             <circle cx="150" cy="150" r="146" fill="none" stroke="rgba(255,255,255,.35)" />
// // //             <circle cx="150" cy="150" r="92" fill="none" stroke="rgba(255,255,255,.2)" strokeDasharray="3 7" />
// // //             <g className="cb-badge-spin">
// // //               <text style={{ font: '800 15px Manrope, sans-serif', letterSpacing: '.3em', fill: '#fff' }}>
// // //                 <textPath href="#cb-circ2">BUILD • SCALE • TRANSFORM • MADE IN INDIA • </textPath>
// // //               </text>
// // //             </g>
// // //             <text x="150" y="162" textAnchor="middle" style={{ font: '800 40px Sora, sans-serif', fill: '#fff' }}>CB</text>
// // //             <rect x="118" y="176" width="21.3" height="5" fill="#F09A36" />
// // //             <rect x="139.3" y="176" width="21.4" height="5" fill="#fff" />
// // //             <rect x="160.7" y="176" width="21.3" height="5" fill="#2E8B57" />
// // //           </svg>

// // //           <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 relative">
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               viewport={{ once: true }}
// // //               className="text-center mb-6 sm:mb-8"
// // //             >
// // //               <span className="sec-badge inline-block">Let's build together</span>
// // //               <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
// // //                 Have a digital idea in mind?{' '}
// // //                 <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">Let's turn it into reality.</span>
// // //               </h2>
// // //               <p className="sec-p mt-3 max-w-2xl mx-auto text-white/80">
// // //                 CoderBox Digital · Human-Centered. AI-Driven.
// // //               </p>
// // //             </motion.div>

// // //             <div className="text-center font-['Sora'] font-extrabold tracking-[-.06em]"
// // //                  style={{ fontSize: 'clamp(48px,14vw,190px)', lineHeight: .9 }}>
// // //               <span className="block">BUILD.</span>
// // //               <span className="cb-huge-o block">SCALE.</span>
// // //               <span className="font-['Instrument_Serif'] italic font-normal tracking-[-.03em] text-[#8FCBF2] block">Transform.</span>
// // //             </div>

// // //             <div className="flex flex-col items-center gap-6 sm:gap-8 mt-10 sm:mt-14">
// // //               <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-white text-center text-xl sm:text-2xl md:text-3xl"
// // //                  style={{ lineHeight: 1.25 }}>
// // //                 Your Expertise. Our Strategy. Your Growth.
// // //               </p>
// // //               <a href="#top" className="sec-btn bg-white text-[#0B1526] shadow-none hover:bg-[#F09A36] hover:text-[#0B1526]">
// // //                 Connect With CoderBox
// // //                 <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
// // //                   <ArrowRight className="h-4 w-4" />
// // //                 </motion.span>
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // /* SlideArt */
// // // const SlideArt = ({ index }) => {
// // //   if (index === 0) {
// // //     return (
// // //       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// // //         <circle className="cb-draw" cx="190" cy="220" r="150" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <circle className="cb-draw" cx="190" cy="220" r="105" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <path className="cb-draw" d="M40 220 H340" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// // //         <path className="cb-draw" d="M110 220 A80 80 0 0 1 270 220" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// // //         <circle className="cb-bob" cx="190" cy="140" r="10" fill="#F09A36" />
// // //         <circle className="cb-pulse-ring" cx="190" cy="140" r="10" fill="none" stroke="#F09A36" opacity=".5" />
// // //         <path className="cb-draw" d="M190 108 V70 M142 120 L120 92 M238 120 L260 92" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// // //         <path className="cb-draw" d="M70 260 H310 M100 290 H280" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// // //         <text x="190" y="330" textAnchor="middle" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>RISING · GLOBAL</text>
// // //       </svg>
// // //     );
// // //   }
// // //   if (index === 1) {
// // //     return (
// // //       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// // //         <circle className="cb-draw" cx="140" cy="140" r="78" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// // //         <circle className="cb-draw" cx="240" cy="140" r="78" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// // //         <circle className="cb-draw" cx="190" cy="226" r="78" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// // //         <circle cx="190" cy="168" r="7" fill="#8FCBF2" />
// // //         <circle className="cb-pulse-ring" cx="190" cy="168" r="7" fill="none" stroke="#8FCBF2" />
// // //         <text x="118" y="120" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>BUILD</text>
// // //         <text x="228" y="120" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>SCALE</text>
// // //         <text x="152" y="268" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>TRANSFORM</text>
// // //       </svg>
// // //     );
// // //   }
// // //   if (index === 2) {
// // //     return (
// // //       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// // //         <path d="M40 300 H350" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <rect x="60" y="230" width="36" height="70" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <rect x="112" y="210" width="36" height="90" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <rect x="164" y="220" width="36" height="80" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <rect x="216" y="200" width="36" height="100" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <path className="cb-draw" d="M60 250 C 130 240, 170 210, 220 150 S 300 60, 330 40" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// // //         <path className="cb-draw" d="M300 40 H332 V72" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// // //         <rect className="cb-draw" x="268" y="120" width="36" height="180" rx="4" fill="none" stroke="#8FCBF2" strokeWidth="2" />
// // //         <text x="226" y="325" fill="#CFE6F7" style={{ font: '700 12px Manrope, sans-serif', letterSpacing: '.12em' }}>THE OLD CURVE ↗ BROKEN</text>
// // //       </svg>
// // //     );
// // //   }
// // //   if (index === 3) {
// // //     return (
// // //       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// // //         <circle cx="190" cy="170" r="140" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <circle cx="190" cy="170" r="96" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// // //         <circle className="cb-draw" cx="190" cy="130" r="28" fill="none" stroke="#F09A36" strokeWidth="3" />
// // //         <path className="cb-draw" d="M130 230 C 140 185, 240 185, 250 230" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// // //         {[[70,120],[320,200],[110,280],[290,70]].map(([x,y],i) => (
// // //           <circle key={i} cx={x} cy={y} r="6" fill="#8FCBF2" />
// // //         ))}
// // //         <path d="M76 122 L162 130 M314 198 L250 210 M116 276 L150 232 M284 76 L212 112" fill="none" stroke="#8FCBF2" strokeWidth="1.5" strokeDasharray="3 6" />
// // //       </svg>
// // //     );
// // //   }
// // //   return (
// // //     <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// // //       <g fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5">
// // //         <rect x="60" y="50" width="60" height="60" rx="10" /><rect x="160" y="50" width="60" height="60" rx="10" /><rect x="260" y="50" width="60" height="60" rx="10" />
// // //         <rect x="60" y="140" width="60" height="60" rx="10" /><rect x="260" y="140" width="60" height="60" rx="10" />
// // //         <rect x="60" y="230" width="60" height="60" rx="10" /><rect x="160" y="230" width="60" height="60" rx="10" /><rect x="260" y="230" width="60" height="60" rx="10" />
// // //       </g>
// // //       <rect className="cb-draw" x="160" y="140" width="60" height="60" rx="10" fill="none" stroke="#F09A36" strokeWidth="3" />
// // //       <circle cx="190" cy="170" r="8" fill="#F09A36" />
// // //       <circle className="cb-pulse-ring" cx="190" cy="170" r="8" fill="none" stroke="#F09A36" />
// // //       <path className="cb-draw" d="M120 80 H160 M220 80 H260 M120 170 H160 M220 170 H260 M120 260 H160 M220 260 H260 M190 110 V140 M190 200 V230" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// // //     </svg>
// // //   );
// // // };

// // // export default CoderBoxDigital;











// // // // import React, { useState } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import {
// // // //   MapPin, Mail, Briefcase,
// // // //   Quote, Phone, CheckCircle, Play, X, ArrowRight,
// // // //   MessageSquare, Clock, AlertCircle, CircleCheck, Globe
// // // // } from 'lucide-react';
// // // // import { supabase } from "../lib/supabaseClient";

// // // // // ============================================
// // // // // 1. HERO SECTION
// // // // // ============================================
// // // // const AboutHero = () => {
// // // //   return (
// // // //     <section
// // // //       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 pb-14"
// // // //       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
// // // //     >
// // // //       {/* ===== BACKGROUND SHAPES ===== */}
// // // //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // // //         <div
// // // //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
// // // //           style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
// // // //         />

// // // //         <div
// // // //           className="absolute inset-0"
// // // //           style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
// // // //         />

// // // //         <motion.div
// // // //           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
// // // //           style={{
// // // //             background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
// // // //             boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
// // // //             filter: 'blur(2px)',
// // // //           }}
// // // //           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
// // // //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // // //         />

// // // //         <motion.div
// // // //           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
// // // //           style={{
// // // //             background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
// // // //             boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
// // // //             filter: 'blur(2px)',
// // // //           }}
// // // //           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
// // // //           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
// // // //         />

// // // //         <motion.div
// // // //           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
// // // //           style={{
// // // //             background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
// // // //             boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
// // // //             filter: 'blur(2px)',
// // // //           }}
// // // //           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
// // // //           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
// // // //         />

// // // //         <motion.svg
// // // //           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70"
// // // //           viewBox="0 0 500 500" fill="none"
// // // //           style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
// // // //           animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
// // // //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // // //         >
// // // //           <defs>
// // // //             <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// // // //               <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
// // // //               <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
// // // //               <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
// // // //             </linearGradient>
// // // //           </defs>
// // // //           <motion.polygon points="250,40 460,250 250,460 40,250" stroke="url(#wireGrad)" strokeWidth="1.2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// // // //           <motion.polygon points="250,80 420,250 250,420 80,250" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" opacity="0.6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// // // //           <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// // // //           <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// // // //         </motion.svg>

// // // //         <motion.div
// // // //           className="absolute top-[22%] right-[10%] w-[110px] h-[110px] rounded-2xl"
// // // //           style={{ background: 'linear-gradient(135deg, rgba(77, 211, 255, 0.18) 0%, rgba(1, 173, 240, 0.03) 100%)', boxShadow: '0 0 40px rgba(77, 211, 255, 0.1)', border: '1px solid rgba(77, 211, 255, 0.15)', transform: 'rotate(45deg)' }}
// // // //           animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
// // // //           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
// // // //         />

// // // //         <motion.div
// // // //           className="absolute bottom-[25%] right-[20%] w-[130px] h-[130px] rounded-2xl"
// // // //           style={{ background: 'linear-gradient(135deg, rgba(0, 198, 251, 0.18) 0%, rgba(0, 143, 209, 0.03) 100%)', boxShadow: '0 0 40px rgba(0, 198, 251, 0.1)', border: '1px solid rgba(0, 198, 251, 0.15)', transform: 'rotate(-20deg)' }}
// // // //           animate={{ rotate: [-20, -10, -20], y: [0, -30, 0] }}
// // // //           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
// // // //         />

// // // //         {[...Array(18)].map((_, i) => {
// // // //           const size = Math.random() * 3 + 2;
// // // //           return (
// // // //             <motion.div
// // // //               key={i}
// // // //               className="absolute rounded-full"
// // // //               style={{
// // // //                 top: `${Math.random() * 100}%`,
// // // //                 left: `${Math.random() * 100}%`,
// // // //                 width: `${size}px`,
// // // //                 height: `${size}px`,
// // // //                 background: 'rgba(180, 230, 255, 0.9)',
// // // //                 boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
// // // //               }}
// // // //               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
// // // //               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
// // // //             />
// // // //           );
// // // //         })}
// // // //       </div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// // // //         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
// // // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
// // // //             About Us
// // // //           </motion.span>

// // // //           <motion.h2
// // // //             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
// // // //             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.15 }}
// // // //           >
// // // //             Your Journey of Digital Transformation Begins Here! <br />
// // // //             <span className="bg-gradient-to-r from-[#33D6FF] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
// // // //           </motion.h2>

// // // //           <motion.p
// // // //             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
// // // //             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.2 }}
// // // //           >
// // // //             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
// // // //           </motion.p>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // // ============================================
// // // // // 2. ABOUT CONTENT SECTION (Video + Founder Info)
// // // // // ============================================
// // // // const AboutContent = () => {
// // // //   const [isVideoOpen, setIsVideoOpen] = useState(false);
// // // //   const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

// // // //   const founderData = {
// // // //     name: "Ashwin R. Singh",
// // // //     alias: "(AASHU SINGH)",
// // // //     title: "FOUNDER / CTO / CEO",
// // // //     bio1: "Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions.",
// // // //     bio2: "Ashwin R. Singh has spent 13+ years building technology-led businesses. With a background in Computer Science and AI, he leads products and ventures from idea to execution.",
// // // //     bio3: "As Founder, CEO and CTO, he has built technology teams, shaped product strategies, and helped businesses navigate digital transformation.",
// // // //   };

// // // //   const stats = [
// // // //     { number: "13+", label: "YEARS BUILDING" },
// // // //     { number: "03", label: "VENTURES LED" },
// // // //     { number: "06", label: "INDUSTRIES" },
// // // //   ];

// // // //   const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
// // // //   const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
// // // //   const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

// // // //   return (
// // // //     <section className="py-8 sm:py-10 md:py-12 bg-[#E6F8FF] relative overflow-hidden">
// // // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// // // //         <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">

// // // //           {/* ===== LEFT SIDE: Video & Image Block ===== */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: -150, rotate: -5 }}
// // // //             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
// // // //             viewport={{ once: true, amount: 0.3 }}
// // // //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
// // // //             className="relative flex justify-center"
// // // //           >
// // // //             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
// // // //               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>

// // // //               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
// // // //                 <div className="relative w-full h-full">
// // // //                   <img
// // // //                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
// // // //                     alt="CoderBox Team"
// // // //                     className="w-full h-full object-cover"
// // // //                   />
// // // //                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
// // // //                 </div>
// // // //               </div>

// // // //               <button
// // // //                 onClick={() => setIsVideoOpen(true)}
// // // //                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20"
// // // //               >
// // // //                 <div className="relative">
// // // //                   <div className="absolute inset-0 rounded-full bg-[#01ADF0]/40 animate-ping"></div>
// // // //                   <div className="absolute inset-[-8px] rounded-full bg-[#01ADF0]/20 animate-pulse"></div>
// // // //                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01ADF0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01ADF0]/50 group-hover:scale-110 transition-transform duration-300">
// // // //                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01ADF0] rounded-full flex items-center justify-center border-2 border-white/30">
// // // //                       <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </button>

// // // //               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
// // // //                 <svg viewBox="0 0 100 100" className="w-full h-full">
// // // //                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01ADF0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
// // // //                 </svg>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* ===== RIGHT SIDE: Founder Information ===== */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: 150 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             viewport={{ once: true, amount: 0.3 }}
// // // //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
// // // //             className="relative"
// // // //           >
// // // //             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#01ADF0]/10 rounded-full blur-[100px] pointer-events-none" />
// // // //             <div
// // // //               className="absolute inset-0 opacity-[0.04] pointer-events-none"
// // // //               style={{
// // // //                 backgroundImage:
// // // //                   'linear-gradient(#003F7D 1px, transparent 1px), linear-gradient(90deg, #003F7D 1px, transparent 1px)',
// // // //                 backgroundSize: '40px 40px',
// // // //                 maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// // // //                 WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// // // //               }}
// // // //             />

// // // //             <div className="relative">
// // // //               {/* Badge */}
// // // //               <motion.span
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: 0.3 }}
// // // //                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0] text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#01ADF0]/30"
// // // //               >
// // // //                 <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
// // // //                 Leadership
// // // //               </motion.span>

// // // //               {/* Heading */}
// // // //               <motion.h2
// // // //                 initial={{ opacity: 0, y: 15 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: 0.4 }}
// // // //                 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003F7D] leading-[1.15] tracking-tight"
// // // //               >
// // // //                 MEET OUR{" "}
// // // //                 <span className="relative inline-block">
// // // //                   <span className="bg-gradient-to-r from-[#00C6FB] via-[#01ADF0] to-[#006FA6] bg-clip-text text-transparent">
// // // //                     FOUNDER
// // // //                   </span>
// // // //                   <motion.span
// // // //                     initial={{ width: 0 }}
// // // //                     whileInView={{ width: "100%" }}
// // // //                     viewport={{ once: true }}
// // // //                     transition={{ delay: 0.9, duration: 0.6 }}
// // // //                     className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-[#00C6FB] to-[#01ADF0]"
// // // //                   />
// // // //                 </span>
// // // //               </motion.h2>

// // // //               {/* Name / title line */}
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: 0.5 }}
// // // //                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
// // // //               >
// // // //                 <span className="text-lg font-bold text-[#003F7D]">{founderData.name}</span>
// // // //                 <span className="text-xs text-gray-500 font-medium">{founderData.alias}</span>
// // // //                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
// // // //                 <span className="text-[11px] font-bold tracking-[0.15em] text-[#01ADF0] uppercase">
// // // //                   {founderData.title}
// // // //                 </span>
// // // //               </motion.div>

// // // //               {/* Bio */}
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: 15 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: 0.6 }}
// // // //                 className="space-y-3.5 text-[15px] sm:text-base text-gray-700 leading-relaxed mt-6"
// // // //               >
// // // //                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
// // // //                 <p>{founderData.bio2}</p>
// // // //                 <p>{founderData.bio3}</p>
// // // //               </motion.div>

// // // //               {/* Stats */}
// // // //               <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
// // // //                 {stats.map((stat, idx) => (
// // // //                   <motion.div
// // // //                     key={idx}
// // // //                     initial={{ opacity: 0, y: 20 }}
// // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // //                     viewport={{ once: true }}
// // // //                     transition={{ delay: 0.7 + idx * 0.1, type: "spring", stiffness: 120 }}
// // // //                     whileHover={{ y: -6 }}
// // // //                     className="group relative bg-white rounded-2xl p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
// // // //                   >
// // // //                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
// // // //                     <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent mb-1">
// // // //                       {stat.number}
// // // //                     </p>
// // // //                     <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">
// // // //                       {stat.label}
// // // //                     </p>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </div>

// // // //               {/* Ventures Led */}
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: 1.0 }}
// // // //                 className="mt-8"
// // // //               >
// // // //                 <div className="flex items-center gap-3 mb-4">
// // // //                   <Briefcase size={16} className="text-[#01ADF0]" />
// // // //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Ventures Led</h4>
// // // //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// // // //                 </div>
// // // //                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
// // // //                   {ventures.map((v, i) => (
// // // //                     <motion.div
// // // //                       key={i}
// // // //                       whileHover={{ y: -4, scale: 1.02 }}
// // // //                       transition={{ type: "spring", stiffness: 300 }}
// // // //                       className="group relative bg-white rounded-xl p-3.5 border border-gray-100 hover:border-[#01ADF0]/40 shadow-sm hover:shadow-lg hover:shadow-[#01ADF0]/10 transition-all duration-300"
// // // //                     >
// // // //                       <span className="absolute top-2 right-3 text-[10px] font-bold text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors">
// // // //                         0{i + 1}
// // // //                       </span>
// // // //                       <p className="text-xs sm:text-[13px] font-bold text-[#003F7D] pr-6 leading-snug">{v}</p>
// // // //                     </motion.div>
// // // //                   ))}
// // // //                 </div>
// // // //               </motion.div>

// // // //               {/* Worked Across */}
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: 1.1 }}
// // // //                 className="mt-7"
// // // //               >
// // // //                 <div className="flex items-center gap-3 mb-4">
// // // //                   <Globe size={16} className="text-[#01ADF0]" />
// // // //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Worked Across</h4>
// // // //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// // // //                 </div>
// // // //                 <div className="flex flex-wrap gap-2">
// // // //                   {industries.map((ind, i) => (
// // // //                     <motion.span
// // // //                       key={i}
// // // //                       whileHover={{ scale: 1.06, y: -2 }}
// // // //                       transition={{ type: "spring", stiffness: 400 }}
// // // //                       className="px-3.5 py-1.5 bg-white text-[#003F7D] text-[11px] font-bold tracking-wide rounded-full border border-[#01ADF0]/25 hover:border-[#01ADF0] hover:bg-[#01ADF0] hover:text-white hover:shadow-lg hover:shadow-[#01ADF0]/30 transition-colors duration-300 cursor-default"
// // // //                     >
// // // //                       {ind}
// // // //                     </motion.span>
// // // //                   ))}
// // // //                 </div>
// // // //               </motion.div>

// // // //               {/* Founder's Note */}
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: 25 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: 1.2 }}
// // // //                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
// // // //                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
// // // //               >
// // // //                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
// // // //                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />

// // // //                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />

// // // //                 <div className="relative z-10">
// // // //                   <div className="flex items-center gap-2 mb-3">
// // // //                     <span className="w-6 h-px bg-[#01ADF0]" />
// // // //                     <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#01ADF0] uppercase">
// // // //                       Founder's Note
// // // //                     </h4>
// // // //                   </div>

// // // //                   <p className="italic text-[15px] sm:text-base text-white leading-relaxed mb-3">
// // // //                     "Technology should create meaningful business value."
// // // //                   </p>
// // // //                   <p className="text-xs text-white/70 leading-relaxed mb-5">
// // // //                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
// // // //                   </p>

// // // //                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
// // // //                     {principles.map((p, i) => (
// // // //                       <motion.div
// // // //                         key={i}
// // // //                         initial={{ opacity: 0, x: -8 }}
// // // //                         whileInView={{ opacity: 1, x: 0 }}
// // // //                         viewport={{ once: true }}
// // // //                         transition={{ delay: 1.4 + i * 0.12 }}
// // // //                         className="flex items-center gap-2"
// // // //                       >
// // // //                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
// // // //                         <span className="text-[11px] font-bold tracking-wider text-white/90">{p}</span>
// // // //                       </motion.div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Video Modal */}
// // // //       {isVideoOpen && (
// // // //         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
// // // //           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
// // // //             <X className="h-6 w-6 text-white" />
// // // //           </button>
// // // //           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
// // // //             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
// // // //           </motion.div>
// // // //         </div>
// // // //       )}
// // // //     </section>
// // // //   );
// // // // };

// // // // // ============================================
// // // // // 3. VISION & MISSION SECTION
// // // // // ============================================
// // // // const VisionMission = () => {
// // // //   const items = [
// // // //     { title: 'Our Vision', icon: 'eye', content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.' },
// // // //     { title: 'Our Mission', icon: 'target', content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.' }
// // // //   ];

// // // //   return (
    
// // // //       <div className="relative pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
// // // //         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
// // // //         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

// // // //         <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// // // //           <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
// // // //             {items.map((item, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={{ opacity: 0, y: 40 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ duration: 0.7, delay: idx * 0.2 }}
// // // //                 className="text-center group"
// // // //               >
// // // //                 <motion.div
// // // //                   className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 flex items-center justify-center"
// // // //                   whileHover={{ scale: 1.08, rotate: 5 }}
// // // //                   transition={{ type: "spring", stiffness: 300 }}
// // // //                 >
// // // //                   <motion.div
// // // //                     className="absolute inset-0 rounded-full"
// // // //                     style={{ background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)', padding: '3px' }}
// // // //                     animate={{ rotate: 360 }}
// // // //                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
// // // //                   >
// // // //                     <div className="w-full h-full rounded-full bg-white"></div>
// // // //                   </motion.div>
// // // //                   <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>
// // // //                   <motion.div
// // // //                     className="absolute inset-4 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
// // // //                     animate={{ scale: [1, 1.15, 1] }}
// // // //                     transition={{ duration: 2, repeat: Infinity }}
// // // //                   ></motion.div>

// // // //                   <div className="relative z-10">
// // // //                     <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //                       <defs>
// // // //                         <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
// // // //                           <stop offset="0%" stopColor="#01adf0" />
// // // //                           <stop offset="100%" stopColor="#a855f7" />
// // // //                         </linearGradient>
// // // //                       </defs>
// // // //                       {item.icon === 'eye' ? (
// // // //                         <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// // // //                           <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
// // // //                           <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
// // // //                           <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
// // // //                           <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
// // // //                         </g>
// // // //                       ) : (
// // // //                         <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// // // //                           <circle cx="12" cy="12" r="10" />
// // // //                           <circle cx="12" cy="12" r="6" />
// // // //                           <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
// // // //                           <path d="m16 8 4-4" />
// // // //                           <path d="M20 4v4h-4" />
// // // //                         </g>
// // // //                       )}
// // // //                     </svg>
// // // //                   </div>
// // // //                 </motion.div>

// // // //                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#01adf0] transition-colors duration-300">
// // // //                   {item.title}
// // // //                 </h3>

// // // //                 <motion.div
// // // //                   className="w-14 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-3"
// // // //                   whileHover={{ width: 80 }}
// // // //                 ></motion.div>

// // // //                 <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
// // // //                   {item.content}
// // // //                 </p>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //   );
// // // // };

// // // // // ============================================
// // // // // 4. OUR JOURNEY SECTION
// // // // // ============================================
// // // // const HowWeWork = () => {
// // // //   const journeyData = [
// // // //     [
// // // //       { date: 'May 2024', shortDate: 'MAY 24', desc: 'TheCoderBox CMMI Level 3 Appraised' },
// // // //       { date: 'Nov 15 2018', shortDate: 'NOV 18', desc: 'TheCoderBox undergoing CMMI Level 3 Re-Appraisal Process' },
// // // //       { date: 'OCT 30 2018', shortDate: 'OCT 30', desc: 'ISO 27001:2013 Certification - TheCoderBox is Awarded ISO 27001:2013 Certification by BSI' },
// // // //     ],
// // // //     [
// // // //       { date: 'SEP 20 2018', shortDate: 'SEP 20', desc: 'ISO 9001:2015 Certification - TheCoderBox is Awarded ISO 9001:2015 Certification by BSI' },
// // // //       { date: 'November 21, 2017', shortDate: 'NOV 17', desc: 'TheCoderBox Ranked Among Top 50 Fastest Growing Tech Companies 2017' },
// // // //       { date: 'September 27, 2017', shortDate: 'SEP 27', desc: 'Company Recognized by Insight Success Magazine as 10 Best Google Partners to Watch in 2017' },
// // // //     ],
// // // //     [
// // // //       { date: 'August 5, 2017', shortDate: 'AUG 5', desc: 'Won a Recognition as 30 Fastest Growing Companies in India 2017' },
// // // //       { date: 'December 12, 2016', shortDate: 'DEC 12', desc: 'TheCoderBox to Build an Automated Platform for European Telecom Service Provider' },
// // // //       { date: 'December 6, 2016', shortDate: 'DEC 6', desc: 'TheCoderBox Releases "Threat Manage" a Cloud-based Security Management Platform' },
// // // //     ],
// // // //     [
// // // //       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP Community: "Technology Pavilion"' },
// // // //       { date: 'August 1, 2016', shortDate: 'AUG 1', desc: 'TheCoderBox Releases "Managed Cloud Platform" for IoT Businesses' },
// // // //       { date: 'June 10, 2016', shortDate: 'JUN 10', desc: 'TheCoderBox Becomes a Member of MSPAlliance' },
// // // //     ],
// // // //     [
// // // //       { date: 'February 2016', shortDate: 'FEB 16', desc: 'TheCoderBox is an Oracle Silver Partner for the Second Time in a Row' },
// // // //       { date: 'October 30, 2015', shortDate: 'OCT 30', desc: 'TheCoderBox Awarded ISO 27001 Certificate' },
// // // //       { date: 'December 26, 2014', shortDate: 'DEC 26', desc: 'TheCoderBox Earns CMMI® Maturity Level 3 Appraisal' },
// // // //     ],
// // // //     [
// // // //       { date: '2013', shortDate: '2013', desc: 'TheCoderBox becomes a Microsoft Gold Partner in 2013' },
// // // //       { date: 'Quality Brands Award', shortDate: '2013-2015', desc: 'TheCoderBox Bestowed With Quality Brands Award 2013-2015' },
// // // //       { date: 'ISO 9001:2008 Certification', shortDate: '2013-2015', desc: 'TheCoderBox certified with ISO 9001:2008 in 2013' },
// // // //     ],
// // // //     [
// // // //       { date: 'October 1, 2012', shortDate: 'OCT 1', desc: 'TheCoderBox becomes a Successful NASSCOM Member' },
// // // //     ]
// // // //   ];

// // // //   return (
// // // //     <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 lg:pt-10 lg:pb-12 bg-white relative overflow-hidden">
// // // //       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // // //       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// // // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Journey</motion.span>
// // // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // // //             TheCoderBox{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Journey</span>
// // // //           </motion.h2>
// // // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // // //             Our milestones and achievements that define who we are today
// // // //           </motion.p>
// // // //         </motion.div>

// // // //         <div className="relative max-w-6xl mx-auto">
// // // //           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>
// // // //           {journeyData.map((row, rowIdx) => (
// // // //             <div key={rowIdx} className="relative mb-12 last:mb-0">
// // // //               <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
// // // //                 <path d={rowIdx % 2 === 0 ? "M 0 50 Q 300 0 600 50 T 1200 50" : "M 0 50 Q 300 100 600 50 T 1200 50"} stroke="#01ADF0" strokeWidth="2" strokeDasharray="6 8" fill="none" strokeLinecap="round" opacity="0.35" />
// // // //               </svg>
// // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
// // // //                 {row.map((item, idx) => (
// // // //                   <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="flex flex-col items-center text-center group">
// // // //                     <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
// // // //                       <div className="absolute inset-0 rounded-full bg-[#01ADF0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
// // // //                       <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C6FB]/40" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}></motion.div>
// // // //                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#008FD1] flex items-center justify-center shadow-2xl shadow-[#01ADF0]/40 border-4 border-white">
// // // //                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
// // // //                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
// // // //                         <div className="text-center px-2 relative z-10">
// // // //                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">{item.shortDate}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </motion.div>
// // // //                     <motion.div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01ADF0]/30 group-hover:-translate-y-2">
// // // //                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-b-full"></div>
// // // //                       <h4 className="sec-h3 sec-text-dark mb-3 mt-2">{item.date}</h4>
// // // //                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] mx-auto mb-4 rounded-full"></div>
// // // //                       <p className="sec-p sec-text-dark-soft leading-relaxed">{item.desc}</p>
// // // //                     </motion.div>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // // ============================================
// // // // // 5. OUR VALUES SECTION
// // // // // ============================================
// // // // const OurValuesAndMission = () => {
// // // //   const values = [
// // // //     { title: 'Innovation',    desc: 'We thrive on creative solutions using modern technologies.',  bg: '#003F7D' },
// // // //     { title: 'Integrity',     desc: 'Honesty and transparency guide our actions.',                  bg: '#166534' },
// // // //     { title: 'Quality',       desc: 'We prioritise delivering reliable, high-performing products.', bg: '#9A3412' },
// // // //     { title: 'Client Focus',  desc: 'Your business goals are our top priority.',                     bg: '#9D174D' },
// // // //     { title: 'Collaboration', desc: 'We believe in the power of teamwork and open communication.',   bg: '#374151' },
// // // //     { title: 'Adaptability',  desc: 'We embrace change and move quickly with evolving trends.',      bg: '#6B21A8' },
// // // //   ];

// // // //   return (
// // // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
// // // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// // // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Values</motion.span>
// // // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // // //             What We{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Stand For</span>
// // // //           </motion.h2>
// // // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // // //             The principles that guide every project, partnership, and decision we make
// // // //           </motion.p>
// // // //         </motion.div>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {values.map((value, idx) => (
// // // //             <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="h-full">
// // // //               <div className="group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/20">
// // // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out"></div>
// // // //                 <div className="relative z-10">
// // // //                   <div className="flex items-start mb-4">
// // // //                     <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white shrink-0" style={{ backgroundColor: value.bg }}>
// // // //                       <CircleCheck size={22} className="text-white" />
// // // //                     </div>
// // // //                     <h3 className="sec-h3 sec-text-dark transition-colors duration-500 group-hover:text-black">{value.title}</h3>
// // // //                   </div>
// // // //                   <p className="text-[15px] text-gray-700 leading-relaxed font-medium transition-colors duration-500 group-hover:text-black/90">{value.desc}</p>
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // // ============================================
// // // // // 6. CONTACT US SECTION
// // // // // ============================================
// // // // const ContactUsSection = () => {
// // // //   const locations = [
// // // //     { id: 1, city: "Bengaluru", country: "India", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
// // // //   ];

// // // //   const [selectedLocation] = useState(locations[0]);
// // // //   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// // // //   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// // // //   const [isSuccess, setIsSuccess] = useState(false);
// // // //   const [isLoading, setIsLoading] = useState(false);

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     if (name === "phone") {
// // // //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// // // //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// // // //     } else {
// // // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // // //     }
// // // //     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
// // // //   };

// // // //   const validateForm = () => {
// // // //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// // // //     let isValid = true;
// // // //     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
// // // //     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
// // // //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
// // // //     if (!formData.phone.trim()) { newErrors.phone = "Please enter your phone number."; isValid = false; }
// // // //     else if (!/^[6-9]\d{9}$/.test(formData.phone)) { newErrors.phone = "Please enter a valid 10-digit mobile number."; isValid = false; }
// // // //     if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
// // // //     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
// // // //     setErrors(newErrors);
// // // //     return isValid;
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!validateForm()) return;
// // // //     setIsLoading(true);
// // // //     try {
// // // //       const { data, error } = await supabase.from("contacts").insert([{ name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message }]);
// // // //       if (error) throw error;
// // // //       setIsSuccess(true);
// // // //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// // // //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
// // // //       setTimeout(() => setIsSuccess(false), 5000);
// // // //     } catch (error) {
// // // //       console.error("Supabase Error:", error);
// // // //       setErrors((prev) => ({ ...prev, message: "Failed to send message to database. Please try again later." }));
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
// // // //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// // // //         <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// // // //         <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// // // //       </div>

// // // //       <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-16">
// // // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Contact Us</motion.span>
// // // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // // //             Get in{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Touch</span>
// // // //           </motion.h2>
// // // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // // //             Have a project in mind? Reach out to us for a free consultation.
// // // //           </motion.p>
// // // //         </motion.div>

// // // //         <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
// // // //           <div className="lg:col-span-7 flex flex-col">
// // // //             <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// // // //               <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />
// // // //               <div className="relative">
// // // //                 <h3 className="sec-h3 sec-text-dark mb-5">Send Us a Message</h3>
// // // //                 <AnimatePresence>
// // // //                   {isSuccess && (
// // // //                     <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 16 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
// // // //                       <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// // // //                         <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// // // //                         <div>
// // // //                           <p className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</p>
// // // //                           <p className="mt-0.5 text-xs text-emerald-700">Thank you! We'll get back to you soon.</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </motion.div>
// // // //                   )}
// // // //                 </AnimatePresence>

// // // //                 <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// // // //                   <div>
// // // //                     <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
// // // //                     <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.name ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // // //                     <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.name}</motion.p>}</AnimatePresence>
// // // //                   </div>

// // // //                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// // // //                     <div>
// // // //                       <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
// // // //                       <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.email ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // // //                       <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.email}</motion.p>}</AnimatePresence>
// // // //                     </div>
// // // //                     <div>
// // // //                       <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
// // // //                       <input id="phone" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.phone ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // // //                       <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.phone}</motion.p>}</AnimatePresence>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div>
// // // //                     <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
// // // //                     <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.service ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`}>
// // // //                       <option value="">Select a service</option>
// // // //                       <option value="Mobile App Development">Mobile App Development</option>
// // // //                       <option value="Website Development">Website Development</option>
// // // //                       <option value="Custom Software">Custom Software</option>
// // // //                       <option value="UI/UX Design">UI/UX Design</option>
// // // //                       <option value="Cloud & Hosting">Cloud & Hosting</option>
// // // //                       <option value="Maintenance & Support">Maintenance & Support</option>
// // // //                       <option value="Other">Other</option>
// // // //                     </select>
// // // //                     <AnimatePresence>{errors.service && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.service}</motion.p>}</AnimatePresence>
// // // //                   </div>

// // // //                   <div>
// // // //                     <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
// // // //                     <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.message ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // // //                     <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.message}</motion.p>}</AnimatePresence>
// // // //                   </div>

// // // //                   <div className="pt-2">
// // // //                     <button type="submit" disabled={isLoading} className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${isLoading ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20" : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"}`}>
// // // //                       <span className="relative z-10">{isLoading ? "Sending..." : "Submit Inquiry"}</span>
// // // //                       {!isLoading && <ArrowRight size={17} className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
// // // //                       {!isLoading && <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />}
// // // //                     </button>
// // // //                   </div>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="lg:col-span-5 flex flex-col">
// // // //             <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// // // //               <div className="absolute right-0 top-0 h-full w-full opacity-10">
// // // //                 <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // // //                 <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // // //               </div>
// // // //               <div className="relative">
// // // //                 <h3 className="sec-h3 text-white mb-4">Connect With Us</h3>
// // // //                 <p className="sec-p text-white/80 mb-6">We're available to answer your questions and help with your project.</p>
// // // //                 <div className="space-y-4">
// // // //                   <ContactItem icon={<Phone size={18} />} title="Phone" value="+91 8928809025" href="tel:+918928809025" />
// // // //                   <ContactItem icon={<MessageSquare size={18} />} title="WhatsApp" value="+91 8928809025" href="https://wa.me/918928809025" />
// // // //                   <ContactItem icon={<Mail size={18} />} title="Email" value="support@thecoderbox.com" href="mailto:support@thecoderbox.com" />
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// // // //               <div className="space-y-5">
// // // //                 <div className="flex items-center">
// // // //                   <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><Clock size={18} /></div>
// // // //                   <div>
// // // //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Hours</h4>
// // // //                     <p className="sec-p sec-text-dark-soft">Monday - Saturday: 9AM - 7PM</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex items-start">
// // // //                   <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><MapPin size={18} /></div>
// // // //                   <div>
// // // //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Location</h4>
// // // //                     <p className="sec-p sec-text-dark-soft leading-6">{selectedLocation?.address}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // const ContactItem = ({ icon, title, value, href }) => {
// // // //   return (
// // // //     <div className="flex items-center">
// // // //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
// // // //       <div>
// // // //         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
// // // //         <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="sec-p text-white/80 transition-colors duration-300 hover:text-white">{value}</a>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // ============================================
// // // // // MAIN ABOUT US COMPONENT
// // // // // ============================================
// // // // const AboutUs = () => {
// // // //   return (
// // // //     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
// // // //       <AboutHero />
// // // //       <AboutContent />
// // // //       <VisionMission />
// // // //       <HowWeWork />
// // // //       <OurValuesAndMission />
// // // //       <ContactUsSection />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AboutUs;







// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import {
// // //   MapPin, Mail, Briefcase,
// // //   Quote, Phone, CheckCircle, Play, X, ArrowRight,
// // //   MessageSquare, Clock, AlertCircle, CircleCheck, Globe
// // // } from 'lucide-react';
// // // import { supabase } from "../lib/supabaseClient";

// // // // ============================================
// // // // 1. HERO SECTION
// // // // ============================================
// // // const AboutHero = () => {
// // //   return (
// // //     <section
// // //       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 pb-14"
// // //       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
// // //     >
// // //       {/* ===== BACKGROUND SHAPES ===== */}
// // //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //         <div
// // //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
// // //           style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
// // //         />
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
// // //         />
// // //         <motion.div
// // //           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
// // //             boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
// // //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
// // //             boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
// // //           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
// // //             boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
// // //           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.svg
// // //           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70"
// // //           viewBox="0 0 500 500" fill="none"
// // //           style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
// // //           animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
// // //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // //         >
// // //           <defs>
// // //             <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// // //               <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
// // //               <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
// // //               <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
// // //             </linearGradient>
// // //           </defs>
// // //           <motion.polygon points="250,40 460,250 250,460 40,250" stroke="url(#wireGrad)" strokeWidth="1.2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// // //           <motion.polygon points="250,80 420,250 250,420 80,250" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" opacity="0.6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// // //           <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// // //           <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// // //         </motion.svg>
// // //         <motion.div
// // //           className="absolute top-[22%] right-[10%] w-[110px] h-[110px] rounded-2xl"
// // //           style={{ background: 'linear-gradient(135deg, rgba(77, 211, 255, 0.18) 0%, rgba(1, 173, 240, 0.03) 100%)', boxShadow: '0 0 40px rgba(77, 211, 255, 0.1)', border: '1px solid rgba(77, 211, 255, 0.15)', transform: 'rotate(45deg)' }}
// // //           animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
// // //           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-[25%] right-[20%] w-[130px] h-[130px] rounded-2xl"
// // //           style={{ background: 'linear-gradient(135deg, rgba(0, 198, 251, 0.18) 0%, rgba(0, 143, 209, 0.03) 100%)', boxShadow: '0 0 40px rgba(0, 198, 251, 0.1)', border: '1px solid rgba(0, 198, 251, 0.15)', transform: 'rotate(-20deg)' }}
// // //           animate={{ rotate: [-20, -10, -20], y: [0, -30, 0] }}
// // //           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         {[...Array(18)].map((_, i) => {
// // //           const size = Math.random() * 3 + 2;
// // //           return (
// // //             <motion.div
// // //               key={i}
// // //               className="absolute rounded-full"
// // //               style={{
// // //                 top: `${Math.random() * 100}%`,
// // //                 left: `${Math.random() * 100}%`,
// // //                 width: `${size}px`,
// // //                 height: `${size}px`,
// // //                 background: 'rgba(180, 230, 255, 0.9)',
// // //                 boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
// // //               }}
// // //               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
// // //               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
// // //             />
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
// // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
// // //             About Us
// // //           </motion.span>

// // //           <motion.h2
// // //             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
// // //             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.15 }}
// // //           >
// // //             Your Journey of Digital Transformation Begins Here! <br />
// // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
// // //           </motion.h2>

// // //           <motion.p
// // //             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
// // //             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.2 }}
// // //           >
// // //             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
// // //           </motion.p>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 2. ABOUT CONTENT SECTION
// // // // ============================================
// // // const AboutContent = () => {
// // //   const [isVideoOpen, setIsVideoOpen] = useState(false);
// // //   const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

// // //   const founderData = {
// // //     name: "Ashwin R. Singh",
// // //     alias: "(AASHU SINGH)",
// // //     title: "FOUNDER / CTO / CEO",
// // //     bio1: "Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions.",
// // //     bio2: "Ashwin R. Singh has spent 13+ years building technology-led businesses. With a background in Computer Science and AI, he leads products and ventures from idea to execution.",
// // //     bio3: "As Founder, CEO and CTO, he has built technology teams, shaped product strategies, and helped businesses navigate digital transformation.",
// // //   };

// // //   const stats = [
// // //     { number: "13+", label: "YEARS BUILDING" },
// // //     { number: "03", label: "VENTURES LED" },
// // //     { number: "06", label: "INDUSTRIES" },
// // //   ];

// // //   const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
// // //   const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
// // //   const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#E6F8FF] overflow-hidden">
// // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">

// // //           {/* ===== LEFT SIDE: Video & Image Block ===== */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -150, rotate: -5 }}
// // //             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
// // //             viewport={{ once: true, amount: 0.3 }}
// // //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
// // //             className="relative flex justify-center"
// // //           >
// // //             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
// // //               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>

// // //               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
// // //                 <div className="relative w-full h-full">
// // //                   <img
// // //                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
// // //                     alt="CoderBox Team"
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
// // //                 </div>
// // //               </div>

// // //               <button
// // //                 onClick={() => setIsVideoOpen(true)}
// // //                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20"
// // //               >
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 rounded-full bg-[#01ADF0]/40 animate-ping"></div>
// // //                   <div className="absolute inset-[-8px] rounded-full bg-[#01ADF0]/20 animate-pulse"></div>
// // //                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01ADF0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01ADF0]/50 group-hover:scale-110 transition-transform duration-300">
// // //                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01ADF0] rounded-full flex items-center justify-center border-2 border-white/30">
// // //                       <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </button>

// // //               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
// // //                 <svg viewBox="0 0 100 100" className="w-full h-full">
// // //                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01ADF0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
// // //                 </svg>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* ===== RIGHT SIDE: Founder Information ===== */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 150 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true, amount: 0.3 }}
// // //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
// // //             className="relative"
// // //           >
// // //             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#01ADF0]/10 rounded-full blur-[100px] pointer-events-none" />
// // //             <div
// // //               className="absolute inset-0 opacity-[0.04] pointer-events-none"
// // //               style={{
// // //                 backgroundImage:
// // //                   'linear-gradient(#003F7D 1px, transparent 1px), linear-gradient(90deg, #003F7D 1px, transparent 1px)',
// // //                 backgroundSize: '40px 40px',
// // //                 maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// // //                 WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// // //               }}
// // //             />

// // //             <div className="relative">
// // //               {/* Badge */}
// // //               <motion.span
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 0.3 }}
// // //                 className="sec-badge inline-block"
// // //               >
// // //                 Leadership
// // //               </motion.span>

// // //               {/* Heading */}
// // //               <motion.h2
// // //                 initial={{ opacity: 0, y: 15 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 0.4 }}
// // //                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
// // //               >
// // //                 MEET OUR{" "}
// // //                 <span className="relative inline-block">
// // //                   <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //                     FOUNDER
// // //                   </span>
// // //                   <motion.span
// // //                     initial={{ width: 0 }}
// // //                     whileInView={{ width: "100%" }}
// // //                     viewport={{ once: true }}
// // //                     transition={{ delay: 0.9, duration: 0.6 }}
// // //                     className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-[#00C6FB] to-[#01ADF0]"
// // //                   />
// // //                 </span>
// // //               </motion.h2>

// // //               {/* Name / title line */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 0.5 }}
// // //                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
// // //               >
// // //                 <span className="text-lg font-bold text-[#003F7D]">{founderData.name}</span>
// // //                 <span className="text-xs text-gray-500 font-medium">{founderData.alias}</span>
// // //                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
// // //                 <span className="text-[11px] font-bold tracking-[0.15em] text-[#01ADF0] uppercase">
// // //                   {founderData.title}
// // //                 </span>
// // //               </motion.div>

// // //               {/* Bio */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 15 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 0.6 }}
// // //                 className="space-y-3.5 sec-p sec-text-dark-soft mt-6 max-w-2xl"
// // //               >
// // //                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
// // //                 <p>{founderData.bio2}</p>
// // //                 <p>{founderData.bio3}</p>
// // //               </motion.div>

// // //               {/* Stats */}
// // //               <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
// // //                 {stats.map((stat, idx) => (
// // //                   <motion.div
// // //                     key={idx}
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     viewport={{ once: true }}
// // //                     transition={{ delay: 0.7 + idx * 0.1, type: "spring", stiffness: 120 }}
// // //                     whileHover={{ y: -6 }}
// // //                     className="group relative bg-white rounded-2xl p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
// // //                   >
// // //                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
// // //                     <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent mb-1">
// // //                       {stat.number}
// // //                     </p>
// // //                     <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">
// // //                       {stat.label}
// // //                     </p>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>

// // //               {/* Ventures Led */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 1.0 }}
// // //                 className="mt-8"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <Briefcase size={16} className="text-[#01ADF0]" />
// // //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Ventures Led</h4>
// // //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// // //                 </div>
// // //                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
// // //                   {ventures.map((v, i) => (
// // //                     <motion.div
// // //                       key={i}
// // //                       whileHover={{ y: -4, scale: 1.02 }}
// // //                       transition={{ type: "spring", stiffness: 300 }}
// // //                       className="group relative bg-white rounded-xl p-3.5 border border-gray-100 hover:border-[#01ADF0]/40 shadow-sm hover:shadow-lg hover:shadow-[#01ADF0]/10 transition-all duration-300"
// // //                     >
// // //                       <span className="absolute top-2 right-3 text-[10px] font-bold text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors">
// // //                         0{i + 1}
// // //                       </span>
// // //                       <p className="text-xs sm:text-[13px] font-bold text-[#003F7D] pr-6 leading-snug">{v}</p>
// // //                     </motion.div>
// // //                   ))}
// // //                 </div>
// // //               </motion.div>

// // //               {/* Worked Across */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 1.1 }}
// // //                 className="mt-7"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <Globe size={16} className="text-[#01ADF0]" />
// // //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Worked Across</h4>
// // //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// // //                 </div>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {industries.map((ind, i) => (
// // //                     <motion.span
// // //                       key={i}
// // //                       whileHover={{ scale: 1.06, y: -2 }}
// // //                       transition={{ type: "spring", stiffness: 400 }}
// // //                       className="px-3.5 py-1.5 bg-white text-[#003F7D] text-[11px] font-bold tracking-wide rounded-full border border-[#01ADF0]/25 hover:border-[#01ADF0] hover:bg-[#01ADF0] hover:text-white hover:shadow-lg hover:shadow-[#01ADF0]/30 transition-colors duration-300 cursor-default"
// // //                     >
// // //                       {ind}
// // //                     </motion.span>
// // //                   ))}
// // //                 </div>
// // //               </motion.div>

// // //               {/* Founder's Note */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 25 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 1.2 }}
// // //                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
// // //                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
// // //               >
// // //                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
// // //                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />

// // //                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />

// // //                 <div className="relative z-10">
// // //                   <div className="flex items-center gap-2 mb-3">
// // //                     <span className="w-6 h-px bg-[#01ADF0]" />
// // //                     <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#01ADF0] uppercase">
// // //                       Founder's Note
// // //                     </h4>
// // //                   </div>

// // //                   <p className="italic text-[15px] sm:text-base text-white leading-relaxed mb-3">
// // //                     "Technology should create meaningful business value."
// // //                   </p>
// // //                   <p className="text-xs text-white/70 leading-relaxed mb-5">
// // //                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
// // //                   </p>

// // //                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
// // //                     {principles.map((p, i) => (
// // //                       <motion.div
// // //                         key={i}
// // //                         initial={{ opacity: 0, x: -8 }}
// // //                         whileInView={{ opacity: 1, x: 0 }}
// // //                         viewport={{ once: true }}
// // //                         transition={{ delay: 1.4 + i * 0.12 }}
// // //                         className="flex items-center gap-2"
// // //                       >
// // //                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
// // //                         <span className="text-[11px] font-bold tracking-wider text-white/90">{p}</span>
// // //                       </motion.div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>

// // //       {/* Video Modal */}
// // //       {isVideoOpen && (
// // //         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
// // //           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
// // //             <X className="h-6 w-6 text-white" />
// // //           </button>
// // //           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
// // //             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
// // //           </motion.div>
// // //         </div>
// // //       )}
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 3. VISION & MISSION SECTION
// // // // ============================================
// // // const VisionMission = () => {
// // //   const items = [
// // //     { title: 'Our Vision', icon: 'eye', content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.' },
// // //     { title: 'Our Mission', icon: 'target', content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.' }
// // //   ];

// // //   return (
// // //     <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
// // //       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // //         {/* Header */}
// // //         <div className="text-center mb-4 sm:mb-5 md:mb-6">
// // //           <span className="sec-badge inline-block">Our Vision & Mission</span>
// // //           <h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
// // //             What Drives{' '}
// // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //               Us Forward
// // //             </span>
// // //           </h2>
// // //           <p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
// // //             The core principles and goals that shape our journey and define our path to excellence.
// // //           </p>
// // //         </div>

// // //         <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
// // //           {items.map((item, idx) => (
// // //             <motion.div
// // //               key={idx}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.7, delay: idx * 0.2 }}
// // //               className="text-center group"
// // //             >
// // //               <motion.div
// // //                 className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 flex items-center justify-center"
// // //                 whileHover={{ scale: 1.08, rotate: 5 }}
// // //                 transition={{ type: "spring", stiffness: 300 }}
// // //               >
// // //                 <motion.div
// // //                   className="absolute inset-0 rounded-full"
// // //                   style={{ background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)', padding: '3px' }}
// // //                   animate={{ rotate: 360 }}
// // //                   transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
// // //                 >
// // //                   <div className="w-full h-full rounded-full bg-white"></div>
// // //                 </motion.div>
// // //                 <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>
// // //                 <motion.div
// // //                   className="absolute inset-4 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
// // //                   animate={{ scale: [1, 1.15, 1] }}
// // //                   transition={{ duration: 2, repeat: Infinity }}
// // //                 ></motion.div>

// // //                 <div className="relative z-10">
// // //                   <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <defs>
// // //                       <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
// // //                         <stop offset="0%" stopColor="#01adf0" />
// // //                         <stop offset="100%" stopColor="#a855f7" />
// // //                       </linearGradient>
// // //                     </defs>
// // //                     {item.icon === 'eye' ? (
// // //                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// // //                         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
// // //                         <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
// // //                         <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
// // //                         <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
// // //                       </g>
// // //                     ) : (
// // //                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// // //                         <circle cx="12" cy="12" r="10" />
// // //                         <circle cx="12" cy="12" r="6" />
// // //                         <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
// // //                         <path d="m16 8 4-4" />
// // //                         <path d="M20 4v4h-4" />
// // //                       </g>
// // //                     )}
// // //                   </svg>
// // //                 </div>
// // //               </motion.div>

// // //               <h3 className="sec-h3 sec-text-dark mb-3 group-hover:text-[#01adf0] transition-colors duration-300">
// // //                 {item.title}
// // //               </h3>

// // //               <motion.div
// // //                 className="w-14 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-3"
// // //                 whileHover={{ width: 80 }}
// // //               ></motion.div>

// // //               <p className="sec-p sec-text-dark-soft leading-relaxed max-w-sm mx-auto">
// // //                 {item.content}
// // //               </p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // ============================================
// // // // 4. OUR JOURNEY SECTION
// // // // ============================================
// // // const HowWeWork = () => {
// // //   const journeyData = [
// // //     [
// // //       { date: 'May 2024', shortDate: 'MAY 24', desc: 'TheCoderBox CMMI Level 3 Appraised' },
// // //       { date: 'Nov 15 2018', shortDate: 'NOV 18', desc: 'TheCoderBox undergoing CMMI Level 3 Re-Appraisal Process' },
// // //       { date: 'OCT 30 2018', shortDate: 'OCT 30', desc: 'ISO 27001:2013 Certification - TheCoderBox is Awarded ISO 27001:2013 Certification by BSI' },
// // //     ],
// // //     [
// // //       { date: 'SEP 20 2018', shortDate: 'SEP 20', desc: 'ISO 9001:2015 Certification - TheCoderBox is Awarded ISO 9001:2015 Certification by BSI' },
// // //       { date: 'November 21, 2017', shortDate: 'NOV 17', desc: 'TheCoderBox Ranked Among Top 50 Fastest Growing Tech Companies 2017' },
// // //       { date: 'September 27, 2017', shortDate: 'SEP 27', desc: 'Company Recognized by Insight Success Magazine as 10 Best Google Partners to Watch in 2017' },
// // //     ],
// // //     [
// // //       { date: 'August 5, 2017', shortDate: 'AUG 5', desc: 'Won a Recognition as 30 Fastest Growing Companies in India 2017' },
// // //       { date: 'December 12, 2016', shortDate: 'DEC 12', desc: 'TheCoderBox to Build an Automated Platform for European Telecom Service Provider' },
// // //       { date: 'December 6, 2016', shortDate: 'DEC 6', desc: 'TheCoderBox Releases "Threat Manage" a Cloud-based Security Management Platform' },
// // //     ],
// // //     [
// // //       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP Community: "Technology Pavilion"' },
// // //       { date: 'August 1, 2016', shortDate: 'AUG 1', desc: 'TheCoderBox Releases "Managed Cloud Platform" for IoT Businesses' },
// // //       { date: 'June 10, 2016', shortDate: 'JUN 10', desc: 'TheCoderBox Becomes a Member of MSPAlliance' },
// // //     ],
// // //     [
// // //       { date: 'February 2016', shortDate: 'FEB 16', desc: 'TheCoderBox is an Oracle Silver Partner for the Second Time in a Row' },
// // //       { date: 'October 30, 2015', shortDate: 'OCT 30', desc: 'TheCoderBox Awarded ISO 27001 Certificate' },
// // //       { date: 'December 26, 2014', shortDate: 'DEC 26', desc: 'TheCoderBox Earns CMMI® Maturity Level 3 Appraisal' },
// // //     ],
// // //     [
// // //       { date: '2013', shortDate: '2013', desc: 'TheCoderBox becomes a Microsoft Gold Partner in 2013' },
// // //       { date: 'Quality Brands Award', shortDate: '2013-2015', desc: 'TheCoderBox Bestowed With Quality Brands Award 2013-2015' },
// // //       { date: 'ISO 9001:2008 Certification', shortDate: '2013-2015', desc: 'TheCoderBox certified with ISO 9001:2008 in 2013' },
// // //     ],
// // //     [
// // //       { date: 'October 1, 2012', shortDate: 'OCT 1', desc: 'TheCoderBox becomes a Successful NASSCOM Member' },
// // //     ]
// // //   ];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-white overflow-hidden">
// // //       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Journey</motion.span>
// // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // //             TheCoderBox{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Journey</span>
// // //           </motion.h2>
// // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // //             Our milestones and achievements that define who we are today
// // //           </motion.p>
// // //         </motion.div>

// // //         <div className="relative max-w-6xl mx-auto">
// // //           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>
// // //           {journeyData.map((row, rowIdx) => (
// // //             <div key={rowIdx} className="relative mb-12 last:mb-0">
// // //               <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
// // //                 <path d={rowIdx % 2 === 0 ? "M 0 50 Q 300 0 600 50 T 1200 50" : "M 0 50 Q 300 100 600 50 T 1200 50"} stroke="#01ADF0" strokeWidth="2" strokeDasharray="6 8" fill="none" strokeLinecap="round" opacity="0.35" />
// // //               </svg>
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
// // //                 {row.map((item, idx) => (
// // //                   <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="flex flex-col items-center text-center group">
// // //                     <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
// // //                       <div className="absolute inset-0 rounded-full bg-[#01ADF0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
// // //                       <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C6FB]/40" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}></motion.div>
// // //                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#008FD1] flex items-center justify-center shadow-2xl shadow-[#01ADF0]/40 border-4 border-white">
// // //                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
// // //                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
// // //                         <div className="text-center px-2 relative z-10">
// // //                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">{item.shortDate}</p>
// // //                         </div>
// // //                       </div>
// // //                     </motion.div>
// // //                     <motion.div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01ADF0]/30 group-hover:-translate-y-2">
// // //                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-b-full"></div>
// // //                       <h4 className="sec-h3 sec-text-dark mb-3 mt-2">{item.date}</h4>
// // //                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] mx-auto mb-4 rounded-full"></div>
// // //                       <p className="sec-p sec-text-dark-soft leading-relaxed">{item.desc}</p>
// // //                     </motion.div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 5. OUR VALUES SECTION
// // // // ============================================
// // // const OurValuesAndMission = () => {
// // //   const values = [
// // //     { title: 'Innovation',    desc: 'We thrive on creative solutions using modern technologies.',  bg: '#003F7D' },
// // //     { title: 'Integrity',     desc: 'Honesty and transparency guide our actions.',                  bg: '#166534' },
// // //     { title: 'Quality',       desc: 'We prioritise delivering reliable, high-performing products.', bg: '#9A3412' },
// // //     { title: 'Client Focus',  desc: 'Your business goals are our top priority.',                     bg: '#9D174D' },
// // //     { title: 'Collaboration', desc: 'We believe in the power of teamwork and open communication.',   bg: '#374151' },
// // //     { title: 'Adaptability',  desc: 'We embrace change and move quickly with evolving trends.',      bg: '#6B21A8' },
// // //   ];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
// // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Values</motion.span>
// // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // //             What We{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Stand For</span>
// // //           </motion.h2>
// // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // //             The principles that guide every project, partnership, and decision we make
// // //           </motion.p>
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {values.map((value, idx) => (
// // //             <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="h-full">
// // //               <div className="group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/20">
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out"></div>
// // //                 <div className="relative z-10">
// // //                   <div className="flex items-start mb-4">
// // //                     <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white shrink-0" style={{ backgroundColor: value.bg }}>
// // //                       <CircleCheck size={22} className="text-white" />
// // //                     </div>
// // //                     <h3 className="sec-h3 sec-text-dark transition-colors duration-500 group-hover:text-black">{value.title}</h3>
// // //                   </div>
// // //                   <p className="text-[15px] text-gray-700 leading-relaxed font-medium transition-colors duration-500 group-hover:text-black/90">{value.desc}</p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 6. CONTACT US SECTION
// // // // ============================================
// // // const ContactUsSection = () => {
// // //   const locations = [
// // //     { id: 1, city: "Bengaluru", country: "India", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
// // //   ];

// // //   const [selectedLocation] = useState(locations[0]);
// // //   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// // //   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// // //   const [isSuccess, setIsSuccess] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     if (name === "phone") {
// // //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// // //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// // //     } else {
// // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // //     }
// // //     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
// // //   };

// // //   const validateForm = () => {
// // //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// // //     let isValid = true;
// // //     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
// // //     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
// // //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
// // //     if (!formData.phone.trim()) { newErrors.phone = "Please enter your phone number."; isValid = false; }
// // //     else if (!/^[6-9]\d{9}$/.test(formData.phone)) { newErrors.phone = "Please enter a valid 10-digit mobile number."; isValid = false; }
// // //     if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
// // //     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
// // //     setErrors(newErrors);
// // //     return isValid;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!validateForm()) return;
// // //     setIsLoading(true);
// // //     try {
// // //       const { data, error } = await supabase.from("contacts").insert([{ name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message }]);
// // //       if (error) throw error;
// // //       setIsSuccess(true);
// // //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// // //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
// // //       setTimeout(() => setIsSuccess(false), 5000);
// // //     } catch (error) {
// // //       console.error("Supabase Error:", error);
// // //       setErrors((prev) => ({ ...prev, message: "Failed to send message to database. Please try again later." }));
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] to-white overflow-hidden">
// // //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// // //         <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// // //         <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Contact Us</motion.span>
// // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // //             Get in{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Touch</span>
// // //           </motion.h2>
// // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // //             Have a project in mind? Reach out to us for a free consultation.
// // //           </motion.p>
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
// // //           <div className="lg:col-span-7 flex flex-col">
// // //             <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// // //               <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />
// // //               <div className="relative">
// // //                 <h3 className="sec-h3 sec-text-dark mb-5">Send Us a Message</h3>
// // //                 <AnimatePresence>
// // //                   {isSuccess && (
// // //                     <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 16 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
// // //                       <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// // //                         <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// // //                         <div>
// // //                           <p className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</p>
// // //                           <p className="mt-0.5 text-xs text-emerald-700">Thank you! We'll get back to you soon.</p>
// // //                         </div>
// // //                       </div>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>

// // //                 <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// // //                   <div>
// // //                     <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
// // //                     <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.name ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // //                     <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.name}</motion.p>}</AnimatePresence>
// // //                   </div>

// // //                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// // //                     <div>
// // //                       <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
// // //                       <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.email ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // //                       <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.email}</motion.p>}</AnimatePresence>
// // //                     </div>
// // //                     <div>
// // //                       <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
// // //                       <input id="phone" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.phone ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // //                       <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.phone}</motion.p>}</AnimatePresence>
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
// // //                     <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.service ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`}>
// // //                       <option value="">Select a service</option>
// // //                       <option value="Mobile App Development">Mobile App Development</option>
// // //                       <option value="Website Development">Website Development</option>
// // //                       <option value="Custom Software">Custom Software</option>
// // //                       <option value="UI/UX Design">UI/UX Design</option>
// // //                       <option value="Cloud & Hosting">Cloud & Hosting</option>
// // //                       <option value="Maintenance & Support">Maintenance & Support</option>
// // //                       <option value="Other">Other</option>
// // //                     </select>
// // //                     <AnimatePresence>{errors.service && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.service}</motion.p>}</AnimatePresence>
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
// // //                     <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.message ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // //                     <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.message}</motion.p>}</AnimatePresence>
// // //                   </div>

// // //                   <div className="pt-2">
// // //                     <button type="submit" disabled={isLoading} className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${isLoading ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20" : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"}`}>
// // //                       <span className="relative z-10">{isLoading ? "Sending..." : "Submit Inquiry"}</span>
// // //                       {!isLoading && <ArrowRight size={17} className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
// // //                       {!isLoading && <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />}
// // //                     </button>
// // //                   </div>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="lg:col-span-5 flex flex-col">
// // //             <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// // //               <div className="absolute right-0 top-0 h-full w-full opacity-10">
// // //                 <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // //                 <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // //               </div>
// // //               <div className="relative">
// // //                 <h3 className="sec-h3 text-white mb-4">Connect With Us</h3>
// // //                 <p className="sec-p text-white/80 mb-6">We're available to answer your questions and help with your project.</p>
// // //                 <div className="space-y-4">
// // //                   <ContactItem icon={<Phone size={18} />} title="Phone" value="+91 8928809025" href="tel:+918928809025" />
// // //                   <ContactItem icon={<MessageSquare size={18} />} title="WhatsApp" value="+91 8928809025" href="https://wa.me/918928809025" />
// // //                   <ContactItem icon={<Mail size={18} />} title="Email" value="support@thecoderbox.com" href="mailto:support@thecoderbox.com" />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// // //               <div className="space-y-5">
// // //                 <div className="flex items-center">
// // //                   <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><Clock size={18} /></div>
// // //                   <div>
// // //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Hours</h4>
// // //                     <p className="sec-p sec-text-dark-soft">Monday - Saturday: 9AM - 7PM</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-start">
// // //                   <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><MapPin size={18} /></div>
// // //                   <div>
// // //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Location</h4>
// // //                     <p className="sec-p sec-text-dark-soft leading-6">{selectedLocation?.address}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ContactItem = ({ icon, title, value, href }) => {
// // //   return (
// // //     <div className="flex items-center">
// // //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
// // //       <div>
// // //         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
// // //         <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="sec-p text-white/80 transition-colors duration-300 hover:text-white">{value}</a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // ============================================
// // // // MAIN ABOUT US COMPONENT
// // // // ============================================
// // // const AboutUs = () => {
// // //   return (
// // //     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
// // //       <AboutHero />
// // //       <AboutContent />
// // //       <VisionMission />
// // //       <HowWeWork />
// // //       <OurValuesAndMission />
// // //       <ContactUsSection />
// // //     </div>
// // //   );
// // // };

// // // export default AboutUs;







// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import {
// // //   MapPin, Mail, Briefcase,
// // //   Quote, Phone, CheckCircle, Play, X, ArrowRight,
// // //   MessageSquare, Clock, AlertCircle, CircleCheck, Globe
// // // } from 'lucide-react';
// // // import { supabase } from "../lib/supabaseClient";

// // // // ============================================
// // // // 1. HERO SECTION
// // // // ============================================
// // // const AboutHero = () => {
// // //   return (
// // //     <section
// // //       className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 border-0 outline-none"
// // //       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
// // //     >
// // //       {/* ===== BACKGROUND SHAPES ===== */}
// // //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //         <div
// // //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
// // //           style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
// // //         />
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
// // //         />
// // //         <motion.div
// // //           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
// // //             boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
// // //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
// // //             boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
// // //           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
// // //             boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
// // //           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.svg
// // //           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70"
// // //           viewBox="0 0 500 500" fill="none"
// // //           style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
// // //           animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
// // //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // //         >
// // //           <defs>
// // //             <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// // //               <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
// // //               <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
// // //               <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
// // //             </linearGradient>
// // //           </defs>
// // //           <motion.polygon points="250,40 460,250 250,460 40,250" stroke="url(#wireGrad)" strokeWidth="1.2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// // //           <motion.polygon points="250,80 420,250 250,420 80,250" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" opacity="0.6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// // //           <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// // //           <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// // //         </motion.svg>
// // //         <motion.div
// // //           className="absolute top-[22%] right-[10%] w-[110px] h-[110px] rounded-2xl"
// // //           style={{ background: 'linear-gradient(135deg, rgba(77, 211, 255, 0.18) 0%, rgba(1, 173, 240, 0.03) 100%)', boxShadow: '0 0 40px rgba(77, 211, 255, 0.1)', border: '1px solid rgba(77, 211, 255, 0.15)', transform: 'rotate(45deg)' }}
// // //           animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
// // //           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-[25%] right-[20%] w-[130px] h-[130px] rounded-2xl"
// // //           style={{ background: 'linear-gradient(135deg, rgba(0, 198, 251, 0.18) 0%, rgba(0, 143, 209, 0.03) 100%)', boxShadow: '0 0 40px rgba(0, 198, 251, 0.1)', border: '1px solid rgba(0, 198, 251, 0.15)', transform: 'rotate(-20deg)' }}
// // //           animate={{ rotate: [-20, -10, -20], y: [0, -30, 0] }}
// // //           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         {[...Array(18)].map((_, i) => {
// // //           const size = Math.random() * 3 + 2;
// // //           return (
// // //             <motion.div
// // //               key={i}
// // //               className="absolute rounded-full"
// // //               style={{
// // //                 top: `${Math.random() * 100}%`,
// // //                 left: `${Math.random() * 100}%`,
// // //                 width: `${size}px`,
// // //                 height: `${size}px`,
// // //                 background: 'rgba(180, 230, 255, 0.9)',
// // //                 boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
// // //               }}
// // //               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
// // //               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
// // //             />
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
// // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
// // //             About Us
// // //           </motion.span>

// // //           <motion.h2
// // //             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
// // //             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.15 }}
// // //           >
// // //             Your Journey of Digital Transformation Begins Here! <br />
// // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
// // //           </motion.h2>

// // //           <motion.p
// // //             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
// // //             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.2 }}
// // //           >
// // //             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
// // //           </motion.p>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 2. ABOUT CONTENT SECTION
// // // // ============================================
// // // const AboutContent = () => {
// // //   const [isVideoOpen, setIsVideoOpen] = useState(false);
// // //   const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

// // //   const founderData = {
// // //     name: "Ashwin R. Singh",
// // //     alias: "(AASHU SINGH)",
// // //     title: "FOUNDER / CTO / CEO",
// // //     bio1: "Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions.",
// // //     bio2: "Ashwin R. Singh has spent 13+ years building technology-led businesses. With a background in Computer Science and AI, he leads products and ventures from idea to execution.",
// // //     bio3: "As Founder, CEO and CTO, he has built technology teams, shaped product strategies, and helped businesses navigate digital transformation.",
// // //   };

// // //   const stats = [
// // //     { number: "13+", label: "YEARS BUILDING" },
// // //     { number: "03", label: "VENTURES LED" },
// // //     { number: "06", label: "INDUSTRIES" },
// // //   ];

// // //   const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
// // //   const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
// // //   const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#E6F8FF] overflow-hidden border-0">
// // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">

// // //           {/* ===== LEFT SIDE: Video & Image Block ===== */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -150, rotate: -5 }}
// // //             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
// // //             viewport={{ once: true, amount: 0.3 }}
// // //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
// // //             className="relative flex justify-center"
// // //           >
// // //             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
// // //               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>

// // //               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
// // //                 <div className="relative w-full h-full">
// // //                   <img
// // //                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
// // //                     alt="CoderBox Team"
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
// // //                 </div>
// // //               </div>

// // //               <button
// // //                 onClick={() => setIsVideoOpen(true)}
// // //                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20"
// // //               >
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 rounded-full bg-[#01ADF0]/40 animate-ping"></div>
// // //                   <div className="absolute inset-[-8px] rounded-full bg-[#01ADF0]/20 animate-pulse"></div>
// // //                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01ADF0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01ADF0]/50 group-hover:scale-110 transition-transform duration-300">
// // //                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01ADF0] rounded-full flex items-center justify-center border-2 border-white/30">
// // //                       <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </button>

// // //               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
// // //                 <svg viewBox="0 0 100 100" className="w-full h-full">
// // //                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01ADF0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
// // //                 </svg>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* ===== RIGHT SIDE: Founder Information ===== */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 150 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true, amount: 0.3 }}
// // //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
// // //             className="relative"
// // //           >
// // //             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#01ADF0]/10 rounded-full blur-[100px] pointer-events-none" />
// // //             <div
// // //               className="absolute inset-0 opacity-[0.04] pointer-events-none"
// // //               style={{
// // //                 backgroundImage:
// // //                   'linear-gradient(#003F7D 1px, transparent 1px), linear-gradient(90deg, #003F7D 1px, transparent 1px)',
// // //                 backgroundSize: '40px 40px',
// // //                 maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// // //                 WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// // //               }}
// // //             />

// // //             <div className="relative">
// // //               {/* Badge */}
// // //               <motion.span
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 0.3 }}
// // //                 className="sec-badge inline-block"
// // //               >
// // //                 Leadership
// // //               </motion.span>

// // //               {/* Heading — Line Removed */}
// // //               <motion.h2
// // //                 initial={{ opacity: 0, y: 15 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 0.4 }}
// // //                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
// // //               >
// // //                 Meet Our{" "}
// // //                 <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //                   Founder
// // //                 </span>
// // //               </motion.h2>

// // //               {/* Name / title line */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 0.5 }}
// // //                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
// // //               >
// // //                 <span className="text-lg font-bold text-[#003F7D]">{founderData.name}</span>
// // //                 <span className="text-xs text-gray-500 font-medium">{founderData.alias}</span>
// // //                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
// // //                 <span className="text-[11px] font-bold tracking-[0.15em] text-[#01ADF0] uppercase">
// // //                   {founderData.title}
// // //                 </span>
// // //               </motion.div>

// // //               {/* Bio */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 15 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 0.6 }}
// // //                 className="space-y-3.5 sec-p sec-text-dark-soft mt-6 max-w-2xl"
// // //               >
// // //                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
// // //                 <p>{founderData.bio2}</p>
// // //                 <p>{founderData.bio3}</p>
// // //               </motion.div>

// // //               {/* Stats */}
// // //               <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
// // //                 {stats.map((stat, idx) => (
// // //                   <motion.div
// // //                     key={idx}
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     viewport={{ once: true }}
// // //                     transition={{ delay: 0.7 + idx * 0.1, type: "spring", stiffness: 120 }}
// // //                     whileHover={{ y: -6 }}
// // //                     className="group relative bg-white rounded-2xl p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
// // //                   >
// // //                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
// // //                     <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent mb-1">
// // //                       {stat.number}
// // //                     </p>
// // //                     <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">
// // //                       {stat.label}
// // //                     </p>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>

// // //               {/* Ventures Led */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 1.0 }}
// // //                 className="mt-8"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <Briefcase size={16} className="text-[#01ADF0]" />
// // //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Ventures Led</h4>
// // //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// // //                 </div>
// // //                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
// // //                   {ventures.map((v, i) => (
// // //                     <motion.div
// // //                       key={i}
// // //                       whileHover={{ y: -4, scale: 1.02 }}
// // //                       transition={{ type: "spring", stiffness: 300 }}
// // //                       className="group relative bg-white rounded-xl p-3.5 border border-gray-100 hover:border-[#01ADF0]/40 shadow-sm hover:shadow-lg hover:shadow-[#01ADF0]/10 transition-all duration-300"
// // //                     >
// // //                       <span className="absolute top-2 right-3 text-[10px] font-bold text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors">
// // //                         0{i + 1}
// // //                       </span>
// // //                       <p className="text-xs sm:text-[13px] font-bold text-[#003F7D] pr-6 leading-snug">{v}</p>
// // //                     </motion.div>
// // //                   ))}
// // //                 </div>
// // //               </motion.div>

// // //               {/* Worked Across */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 1.1 }}
// // //                 className="mt-7"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <Globe size={16} className="text-[#01ADF0]" />
// // //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Worked Across</h4>
// // //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// // //                 </div>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {industries.map((ind, i) => (
// // //                     <motion.span
// // //                       key={i}
// // //                       whileHover={{ scale: 1.06, y: -2 }}
// // //                       transition={{ type: "spring", stiffness: 400 }}
// // //                       className="px-3.5 py-1.5 bg-white text-[#003F7D] text-[11px] font-bold tracking-wide rounded-full border border-[#01ADF0]/25 hover:border-[#01ADF0] hover:bg-[#01ADF0] hover:text-white hover:shadow-lg hover:shadow-[#01ADF0]/30 transition-colors duration-300 cursor-default"
// // //                     >
// // //                       {ind}
// // //                     </motion.span>
// // //                   ))}
// // //                 </div>
// // //               </motion.div>

// // //               {/* Founder's Note */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 25 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: 1.2 }}
// // //                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
// // //                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
// // //               >
// // //                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
// // //                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />

// // //                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />

// // //                 <div className="relative z-10">
// // //                   <div className="flex items-center gap-2 mb-3">
// // //                     <span className="w-6 h-px bg-[#01ADF0]" />
// // //                     <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#01ADF0] uppercase">
// // //                       Founder's Note
// // //                     </h4>
// // //                   </div>

// // //                   <p className="italic text-[15px] sm:text-base text-white leading-relaxed mb-3">
// // //                     "Technology should create meaningful business value."
// // //                   </p>
// // //                   <p className="text-xs text-white/70 leading-relaxed mb-5">
// // //                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
// // //                   </p>

// // //                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
// // //                     {principles.map((p, i) => (
// // //                       <motion.div
// // //                         key={i}
// // //                         initial={{ opacity: 0, x: -8 }}
// // //                         whileInView={{ opacity: 1, x: 0 }}
// // //                         viewport={{ once: true }}
// // //                         transition={{ delay: 1.4 + i * 0.12 }}
// // //                         className="flex items-center gap-2"
// // //                       >
// // //                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
// // //                         <span className="text-[11px] font-bold tracking-wider text-white/90">{p}</span>
// // //                       </motion.div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>

// // //       {/* Video Modal */}
// // //       {isVideoOpen && (
// // //         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
// // //           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
// // //             <X className="h-6 w-6 text-white" />
// // //           </button>
// // //           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
// // //             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
// // //           </motion.div>
// // //         </div>
// // //       )}
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 3. VISION & MISSION SECTION
// // // // ============================================
// // // const VisionMission = () => {
// // //   const items = [
// // //     { title: 'Our Vision', icon: 'eye', content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.' },
// // //     { title: 'Our Mission', icon: 'target', content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.' }
// // //   ];

// // //   return (
// // //     <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden border-0">
// // //       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // //         {/* Header */}
// // //         <div className="text-center mb-4 sm:mb-5 md:mb-6">
// // //           <span className="sec-badge inline-block">Our Vision & Mission</span>
// // //           <h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
// // //             What Drives{' '}
// // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //               Us Forward
// // //             </span>
// // //           </h2>
// // //           <p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
// // //             The core principles and goals that shape our journey and define our path to excellence.
// // //           </p>
// // //         </div>

// // //         <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
// // //           {items.map((item, idx) => (
// // //             <motion.div
// // //               key={idx}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.7, delay: idx * 0.2 }}
// // //               className="text-center group"
// // //             >
// // //               <motion.div
// // //                 className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 flex items-center justify-center"
// // //                 whileHover={{ scale: 1.08, rotate: 5 }}
// // //                 transition={{ type: "spring", stiffness: 300 }}
// // //               >
// // //                 <motion.div
// // //                   className="absolute inset-0 rounded-full"
// // //                   style={{ background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)', padding: '3px' }}
// // //                   animate={{ rotate: 360 }}
// // //                   transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
// // //                 >
// // //                   <div className="w-full h-full rounded-full bg-white"></div>
// // //                 </motion.div>
// // //                 <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>
// // //                 <motion.div
// // //                   className="absolute inset-4 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
// // //                   animate={{ scale: [1, 1.15, 1] }}
// // //                   transition={{ duration: 2, repeat: Infinity }}
// // //                 ></motion.div>

// // //                 <div className="relative z-10">
// // //                   <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <defs>
// // //                       <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
// // //                         <stop offset="0%" stopColor="#01adf0" />
// // //                         <stop offset="100%" stopColor="#a855f7" />
// // //                       </linearGradient>
// // //                     </defs>
// // //                     {item.icon === 'eye' ? (
// // //                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// // //                         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
// // //                         <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
// // //                         <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
// // //                         <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
// // //                       </g>
// // //                     ) : (
// // //                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// // //                         <circle cx="12" cy="12" r="10" />
// // //                         <circle cx="12" cy="12" r="6" />
// // //                         <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
// // //                         <path d="m16 8 4-4" />
// // //                         <path d="M20 4v4h-4" />
// // //                       </g>
// // //                     )}
// // //                   </svg>
// // //                 </div>
// // //               </motion.div>

// // //               <h3 className="sec-h3 sec-text-dark mb-3 group-hover:text-[#01adf0] transition-colors duration-300">
// // //                 {item.title}
// // //               </h3>

// // //               <motion.div
// // //                 className="w-14 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-3"
// // //                 whileHover={{ width: 80 }}
// // //               ></motion.div>

// // //               <p className="sec-p sec-text-dark-soft leading-relaxed max-w-sm mx-auto">
// // //                 {item.content}
// // //               </p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // ============================================
// // // // 4. OUR JOURNEY SECTION
// // // // ============================================
// // // const HowWeWork = () => {
// // //   const journeyData = [
// // //     [
// // //       { date: 'May 2024', shortDate: 'MAY 24', desc: 'TheCoderBox CMMI Level 3 Appraised' },
// // //       { date: 'Nov 15 2018', shortDate: 'NOV 18', desc: 'TheCoderBox undergoing CMMI Level 3 Re-Appraisal Process' },
// // //       { date: 'OCT 30 2018', shortDate: 'OCT 30', desc: 'ISO 27001:2013 Certification - TheCoderBox is Awarded ISO 27001:2013 Certification by BSI' },
// // //     ],
// // //     [
// // //       { date: 'SEP 20 2018', shortDate: 'SEP 20', desc: 'ISO 9001:2015 Certification - TheCoderBox is Awarded ISO 9001:2015 Certification by BSI' },
// // //       { date: 'November 21, 2017', shortDate: 'NOV 17', desc: 'TheCoderBox Ranked Among Top 50 Fastest Growing Tech Companies 2017' },
// // //       { date: 'September 27, 2017', shortDate: 'SEP 27', desc: 'Company Recognized by Insight Success Magazine as 10 Best Google Partners to Watch in 2017' },
// // //     ],
// // //     [
// // //       { date: 'August 5, 2017', shortDate: 'AUG 5', desc: 'Won a Recognition as 30 Fastest Growing Companies in India 2017' },
// // //       { date: 'December 12, 2016', shortDate: 'DEC 12', desc: 'TheCoderBox to Build an Automated Platform for European Telecom Service Provider' },
// // //       { date: 'December 6, 2016', shortDate: 'DEC 6', desc: 'TheCoderBox Releases "Threat Manage" a Cloud-based Security Management Platform' },
// // //     ],
// // //     [
// // //       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP Community: "Technology Pavilion"' },
// // //       { date: 'August 1, 2016', shortDate: 'AUG 1', desc: 'TheCoderBox Releases "Managed Cloud Platform" for IoT Businesses' },
// // //       { date: 'June 10, 2016', shortDate: 'JUN 10', desc: 'TheCoderBox Becomes a Member of MSPAlliance' },
// // //     ],
// // //     [
// // //       { date: 'February 2016', shortDate: 'FEB 16', desc: 'TheCoderBox is an Oracle Silver Partner for the Second Time in a Row' },
// // //       { date: 'October 30, 2015', shortDate: 'OCT 30', desc: 'TheCoderBox Awarded ISO 27001 Certificate' },
// // //       { date: 'December 26, 2014', shortDate: 'DEC 26', desc: 'TheCoderBox Earns CMMI® Maturity Level 3 Appraisal' },
// // //     ],
// // //     [
// // //       { date: '2013', shortDate: '2013', desc: 'TheCoderBox becomes a Microsoft Gold Partner in 2013' },
// // //       { date: 'Quality Brands Award', shortDate: '2013-2015', desc: 'TheCoderBox Bestowed With Quality Brands Award 2013-2015' },
// // //       { date: 'ISO 9001:2008 Certification', shortDate: '2013-2015', desc: 'TheCoderBox certified with ISO 9001:2008 in 2013' },
// // //     ],
// // //     [
// // //       { date: 'October 1, 2012', shortDate: 'OCT 1', desc: 'TheCoderBox becomes a Successful NASSCOM Member' },
// // //     ]
// // //   ];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-white overflow-hidden border-0">
// // //       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Journey</motion.span>
// // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // //             TheCoderBox{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Journey</span>
// // //           </motion.h2>
// // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // //             Our milestones and achievements that define who we are today
// // //           </motion.p>
// // //         </motion.div>

// // //         <div className="relative max-w-6xl mx-auto">
// // //           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>
// // //           {journeyData.map((row, rowIdx) => (
// // //             <div key={rowIdx} className="relative mb-12 last:mb-0">
// // //               <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
// // //                 <path d={rowIdx % 2 === 0 ? "M 0 50 Q 300 0 600 50 T 1200 50" : "M 0 50 Q 300 100 600 50 T 1200 50"} stroke="#01ADF0" strokeWidth="2" strokeDasharray="6 8" fill="none" strokeLinecap="round" opacity="0.35" />
// // //               </svg>
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
// // //                 {row.map((item, idx) => (
// // //                   <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="flex flex-col items-center text-center group">
// // //                     <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
// // //                       <div className="absolute inset-0 rounded-full bg-[#01ADF0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
// // //                       <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C6FB]/40" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}></motion.div>
// // //                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#008FD1] flex items-center justify-center shadow-2xl shadow-[#01ADF0]/40 border-4 border-white">
// // //                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
// // //                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
// // //                         <div className="text-center px-2 relative z-10">
// // //                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">{item.shortDate}</p>
// // //                         </div>
// // //                       </div>
// // //                     </motion.div>
// // //                     <motion.div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01ADF0]/30 group-hover:-translate-y-2">
// // //                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-b-full"></div>
// // //                       <h4 className="sec-h3 sec-text-dark mb-3 mt-2">{item.date}</h4>
// // //                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] mx-auto mb-4 rounded-full"></div>
// // //                       <p className="sec-p sec-text-dark-soft leading-relaxed">{item.desc}</p>
// // //                     </motion.div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 5. OUR VALUES SECTION
// // // // ============================================
// // // const OurValuesAndMission = () => {
// // //   const values = [
// // //     { title: 'Innovation',    desc: 'We thrive on creative solutions using modern technologies.',  bg: '#003F7D' },
// // //     { title: 'Integrity',     desc: 'Honesty and transparency guide our actions.',                  bg: '#166534' },
// // //     { title: 'Quality',       desc: 'We prioritise delivering reliable, high-performing products.', bg: '#9A3412' },
// // //     { title: 'Client Focus',  desc: 'Your business goals are our top priority.',                     bg: '#9D174D' },
// // //     { title: 'Collaboration', desc: 'We believe in the power of teamwork and open communication.',   bg: '#374151' },
// // //     { title: 'Adaptability',  desc: 'We embrace change and move quickly with evolving trends.',      bg: '#6B21A8' },
// // //   ];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden border-0">
// // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Values</motion.span>
// // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // //             What We{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Stand For</span>
// // //           </motion.h2>
// // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // //             The principles that guide every project, partnership, and decision we make
// // //           </motion.p>
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {values.map((value, idx) => (
// // //             <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="h-full">
// // //               <div className="group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/20">
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out"></div>
// // //                 <div className="relative z-10">
// // //                   <div className="flex items-start mb-4">
// // //                     <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white shrink-0" style={{ backgroundColor: value.bg }}>
// // //                       <CircleCheck size={22} className="text-white" />
// // //                     </div>
// // //                     <h3 className="sec-h3 sec-text-dark transition-colors duration-500 group-hover:text-black">{value.title}</h3>
// // //                   </div>
// // //                   <p className="text-[15px] text-gray-700 leading-relaxed font-medium transition-colors duration-500 group-hover:text-black/90">{value.desc}</p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 6. CONTACT US SECTION
// // // // ============================================
// // // const ContactUsSection = () => {
// // //   const locations = [
// // //     { id: 1, city: "Bengaluru", country: "India", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
// // //   ];

// // //   const [selectedLocation] = useState(locations[0]);
// // //   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// // //   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// // //   const [isSuccess, setIsSuccess] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     if (name === "phone") {
// // //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// // //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// // //     } else {
// // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // //     }
// // //     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
// // //   };

// // //   const validateForm = () => {
// // //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// // //     let isValid = true;
// // //     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
// // //     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
// // //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
// // //     if (!formData.phone.trim()) { newErrors.phone = "Please enter your phone number."; isValid = false; }
// // //     else if (!/^[6-9]\d{9}$/.test(formData.phone)) { newErrors.phone = "Please enter a valid 10-digit mobile number."; isValid = false; }
// // //     if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
// // //     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
// // //     setErrors(newErrors);
// // //     return isValid;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!validateForm()) return;
// // //     setIsLoading(true);
// // //     try {
// // //       const { data, error } = await supabase.from("contacts").insert([{ name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message }]);
// // //       if (error) throw error;
// // //       setIsSuccess(true);
// // //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// // //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
// // //       setTimeout(() => setIsSuccess(false), 5000);
// // //     } catch (error) {
// // //       console.error("Supabase Error:", error);
// // //       setErrors((prev) => ({ ...prev, message: "Failed to send message to database. Please try again later." }));
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] to-white overflow-hidden border-0">
// // //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// // //         <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// // //         <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// // //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Contact Us</motion.span>
// // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// // //             Get in{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Touch</span>
// // //           </motion.h2>
// // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// // //             Have a project in mind? Reach out to us for a free consultation.
// // //           </motion.p>
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
// // //           <div className="lg:col-span-7 flex flex-col">
// // //             <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// // //               <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />
// // //               <div className="relative">
// // //                 <h3 className="sec-h3 sec-text-dark mb-5">Send Us a Message</h3>
// // //                 <AnimatePresence>
// // //                   {isSuccess && (
// // //                     <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 16 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
// // //                       <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// // //                         <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// // //                         <div>
// // //                           <p className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</p>
// // //                           <p className="mt-0.5 text-xs text-emerald-700">Thank you! We'll get back to you soon.</p>
// // //                         </div>
// // //                       </div>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>

// // //                 <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// // //                   <div>
// // //                     <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
// // //                     <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.name ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // //                     <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.name}</motion.p>}</AnimatePresence>
// // //                   </div>

// // //                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// // //                     <div>
// // //                       <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
// // //                       <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.email ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // //                       <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.email}</motion.p>}</AnimatePresence>
// // //                     </div>
// // //                     <div>
// // //                       <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
// // //                       <input id="phone" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.phone ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // //                       <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.phone}</motion.p>}</AnimatePresence>
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
// // //                     <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.service ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`}>
// // //                       <option value="">Select a service</option>
// // //                       <option value="Mobile App Development">Mobile App Development</option>
// // //                       <option value="Website Development">Website Development</option>
// // //                       <option value="Custom Software">Custom Software</option>
// // //                       <option value="UI/UX Design">UI/UX Design</option>
// // //                       <option value="Cloud & Hosting">Cloud & Hosting</option>
// // //                       <option value="Maintenance & Support">Maintenance & Support</option>
// // //                       <option value="Other">Other</option>
// // //                     </select>
// // //                     <AnimatePresence>{errors.service && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.service}</motion.p>}</AnimatePresence>
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
// // //                     <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.message ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // //                     <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.message}</motion.p>}</AnimatePresence>
// // //                   </div>

// // //                   <div className="pt-2">
// // //                     <button type="submit" disabled={isLoading} className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${isLoading ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20" : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"}`}>
// // //                       <span className="relative z-10">{isLoading ? "Sending..." : "Submit Inquiry"}</span>
// // //                       {!isLoading && <ArrowRight size={17} className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
// // //                       {!isLoading && <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />}
// // //                     </button>
// // //                   </div>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="lg:col-span-5 flex flex-col">
// // //             <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// // //               <div className="absolute right-0 top-0 h-full w-full opacity-10">
// // //                 <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // //                 <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // //               </div>
// // //               <div className="relative">
// // //                 <h3 className="sec-h3 text-white mb-4">Connect With Us</h3>
// // //                 <p className="sec-p text-white/80 mb-6">We're available to answer your questions and help with your project.</p>
// // //                 <div className="space-y-4">
// // //                   <ContactItem icon={<Phone size={18} />} title="Phone" value="+91 8928809025" href="tel:+918928809025" />
// // //                   <ContactItem icon={<MessageSquare size={18} />} title="WhatsApp" value="+91 8928809025" href="https://wa.me/918928809025" />
// // //                   <ContactItem icon={<Mail size={18} />} title="Email" value="support@thecoderbox.com" href="mailto:support@thecoderbox.com" />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// // //               <div className="space-y-5">
// // //                 <div className="flex items-center">
// // //                   <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><Clock size={18} /></div>
// // //                   <div>
// // //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Hours</h4>
// // //                     <p className="sec-p sec-text-dark-soft">Monday - Saturday: 9AM - 7PM</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex items-start">
// // //                   <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><MapPin size={18} /></div>
// // //                   <div>
// // //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Location</h4>
// // //                     <p className="sec-p sec-text-dark-soft leading-6">{selectedLocation?.address}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ContactItem = ({ icon, title, value, href }) => {
// // //   return (
// // //     <div className="flex items-center">
// // //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
// // //       <div>
// // //         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
// // //         <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="sec-p text-white/80 transition-colors duration-300 hover:text-white">{value}</a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // ============================================
// // // // MAIN ABOUT US COMPONENT
// // // // ============================================
// // // const AboutUs = () => {
// // //   return (
// // //     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
// // //       <AboutHero />
// // //       <AboutContent />
// // //       <VisionMission />
// // //       <HowWeWork />
// // //       <OurValuesAndMission />
// // //       <ContactUsSection />
// // //     </div>
// // //   );
// // // };

// // // export default AboutUs;





// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import {
// // //   MapPin, Mail, Briefcase,
// // //   Quote, Phone, CheckCircle, Play, X, ArrowRight,
// // //   MessageSquare, Clock, AlertCircle, CircleCheck, Globe
// // // } from 'lucide-react';
// // // import { supabase } from "../lib/supabaseClient";

// // // // ============================================
// // // // 1. HERO SECTION (Reduced Height)
// // // // ============================================
// // // const AboutHero = () => {
// // //   return (
// // //     <section
// // //       className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
// // //       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
// // //     >
// // //       {/* ===== BACKGROUND SHAPES ===== */}
// // //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //         <div
// // //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
// // //           style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
// // //         />
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
// // //         />
// // //         <motion.div
// // //           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
// // //             boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
// // //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
// // //             boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
// // //           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
// // //           style={{
// // //             background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
// // //             boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
// // //             filter: 'blur(2px)',
// // //           }}
// // //           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
// // //           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.svg
// // //           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
// // //           viewBox="0 0 500 500" fill="none"
// // //           style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
// // //           animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
// // //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// // //         >
// // //           <defs>
// // //             <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// // //               <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
// // //               <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
// // //               <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
// // //             </linearGradient>
// // //           </defs>
// // //           <motion.polygon points="250,40 460,250 250,460 40,250" stroke="url(#wireGrad)" strokeWidth="1.2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// // //           <motion.polygon points="250,80 420,250 250,420 80,250" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" opacity="0.6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// // //           <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// // //           <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// // //         </motion.svg>
// // //         <motion.div
// // //           className="absolute top-[22%] right-[10%] w-[110px] h-[110px] rounded-2xl hidden sm:block"
// // //           style={{ background: 'linear-gradient(135deg, rgba(77, 211, 255, 0.18) 0%, rgba(1, 173, 240, 0.03) 100%)', boxShadow: '0 0 40px rgba(77, 211, 255, 0.1)', border: '1px solid rgba(77, 211, 255, 0.15)', transform: 'rotate(45deg)' }}
// // //           animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
// // //           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-[25%] right-[20%] w-[130px] h-[130px] rounded-2xl hidden sm:block"
// // //           style={{ background: 'linear-gradient(135deg, rgba(0, 198, 251, 0.18) 0%, rgba(0, 143, 209, 0.03) 100%)', boxShadow: '0 0 40px rgba(0, 198, 251, 0.1)', border: '1px solid rgba(0, 198, 251, 0.15)', transform: 'rotate(-20deg)' }}
// // //           animate={{ rotate: [-20, -10, -20], y: [0, -30, 0] }}
// // //           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         {/* Fewer particles on mobile for faster load */}
// // //         {[...Array(8)].map((_, i) => {
// // //           const size = Math.random() * 3 + 2;
// // //           return (
// // //             <motion.div
// // //               key={i}
// // //               className="absolute rounded-full"
// // //               style={{
// // //                 top: `${Math.random() * 100}%`,
// // //                 left: `${Math.random() * 100}%`,
// // //                 width: `${size}px`,
// // //                 height: `${size}px`,
// // //                 background: 'rgba(180, 230, 255, 0.9)',
// // //                 boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
// // //               }}
// // //               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
// // //               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
// // //             />
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center">
// // //           <motion.span
// // //             initial={{ opacity: 0, y: 8 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.3, delay: 0.05 }}
// // //             className="sec-badge inline-block"
// // //             whileHover={{ scale: 1.05 }}
// // //           >
// // //             About Us
// // //           </motion.span>

// // //           <motion.h2
// // //             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
// // //             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
// // //             initial={{ opacity: 0, y: 10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.35, delay: 0.1 }}
// // //           >
// // //             Your Journey of Digital Transformation Begins Here! <br />
// // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
// // //           </motion.h2>

// // //           <motion.p
// // //             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
// // //             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
// // //             initial={{ opacity: 0, y: 10 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.35, delay: 0.15 }}
// // //           >
// // //             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
// // //           </motion.p>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 2. ABOUT CONTENT SECTION
// // // // ============================================
// // // const AboutContent = () => {
// // //   const [isVideoOpen, setIsVideoOpen] = useState(false);
// // //   const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

// // //   const founderData = {
// // //     name: "Ashwin R. Singh",
// // //     alias: "(AASHU SINGH)",
// // //     title: "FOUNDER / CTO / CEO",
// // //     bio1: "Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions.",
// // //     bio2: "Ashwin R. Singh has spent 13+ years building technology-led businesses. With a background in Computer Science and AI, he leads products and ventures from idea to execution.",
// // //     bio3: "As Founder, CEO and CTO, he has built technology teams, shaped product strategies, and helped businesses navigate digital transformation.",
// // //   };

// // //   const stats = [
// // //     { number: "13+", label: "YEARS BUILDING" },
// // //     { number: "03", label: "VENTURES LED" },
// // //     { number: "06", label: "INDUSTRIES" },
// // //   ];

// // //   const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
// // //   const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
// // //   const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#E6F8FF] overflow-hidden border-0">
// // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">

// // //           {/* ===== LEFT SIDE: Video & Image Block ===== */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true, amount: 0.15 }}
// // //             transition={{ duration: 0.5, ease: "easeOut" }}
// // //             className="relative flex justify-center"
// // //           >
// // //             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
// // //               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>

// // //               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
// // //                 <div className="relative w-full h-full">
// // //                   <img
// // //                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
// // //                     alt="CoderBox Team"
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
// // //                 </div>
// // //               </div>

// // //               <button
// // //                 onClick={() => setIsVideoOpen(true)}
// // //                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20"
// // //               >
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 rounded-full bg-[#01ADF0]/40 animate-ping"></div>
// // //                   <div className="absolute inset-[-8px] rounded-full bg-[#01ADF0]/20 animate-pulse"></div>
// // //                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01ADF0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01ADF0]/50 group-hover:scale-110 transition-transform duration-300">
// // //                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01ADF0] rounded-full flex items-center justify-center border-2 border-white/30">
// // //                       <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </button>

// // //               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
// // //                 <svg viewBox="0 0 100 100" className="w-full h-full">
// // //                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01ADF0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
// // //                 </svg>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* ===== RIGHT SIDE: Founder Information ===== */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true, amount: 0.15 }}
// // //             transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
// // //             className="relative"
// // //           >
// // //             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#01ADF0]/10 rounded-full blur-[100px] pointer-events-none" />
// // //             <div
// // //               className="absolute inset-0 opacity-[0.04] pointer-events-none"
// // //               style={{
// // //                 backgroundImage:
// // //                   'linear-gradient(#003F7D 1px, transparent 1px), linear-gradient(90deg, #003F7D 1px, transparent 1px)',
// // //                 backgroundSize: '40px 40px',
// // //                 maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// // //                 WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// // //               }}
// // //             />

// // //             <div className="relative">
// // //               {/* Badge */}
// // //               <motion.span
// // //                 initial={{ opacity: 0, y: 6 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.3, delay: 0.05 }}
// // //                 className="sec-badge inline-block"
// // //               >
// // //                 Leadership
// // //               </motion.span>

// // //               {/* Heading */}
// // //               <motion.h2
// // //                 initial={{ opacity: 0, y: 8 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.3, delay: 0.1 }}
// // //                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
// // //               >
// // //                 Meet Our{" "}
// // //                 <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //                   Founder
// // //                 </span>
// // //               </motion.h2>

// // //               {/* Name / title line */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 6 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.3, delay: 0.15 }}
// // //                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
// // //               >
// // //                 <span className="text-lg font-bold text-[#003F7D]">{founderData.name}</span>
// // //                 <span className="text-xs text-gray-500 font-medium">{founderData.alias}</span>
// // //                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
// // //                 <span className="text-[11px] font-bold tracking-[0.15em] text-[#01ADF0] uppercase">
// // //                   {founderData.title}
// // //                 </span>
// // //               </motion.div>

// // //               {/* Bio */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 8 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.3, delay: 0.2 }}
// // //                 className="space-y-3.5 sec-p sec-text-dark-soft mt-6 max-w-2xl"
// // //               >
// // //                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
// // //                 <p>{founderData.bio2}</p>
// // //                 <p>{founderData.bio3}</p>
// // //               </motion.div>

// // //               {/* STATS */}
// // //               <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-8">
// // //                 {stats.map((stat, idx) => (
// // //                   <motion.div
// // //                     key={idx}
// // //                     initial={{ opacity: 0, y: 10 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     viewport={{ once: true }}
// // //                     transition={{ duration: 0.3, delay: 0.25 + idx * 0.05, type: "spring", stiffness: 150 }}
// // //                     whileHover={{ y: -6 }}
// // //                     className="group relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
// // //                   >
// // //                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
// // //                     <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent mb-1 leading-none">
// // //                       {stat.number}
// // //                     </p>
// // //                     <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-500 tracking-wider uppercase leading-tight break-words">
// // //                       {stat.label}
// // //                     </p>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>

// // //               {/* Ventures Led */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.3, delay: 0.35 }}
// // //                 className="mt-8"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <Briefcase size={16} className="text-[#01ADF0]" />
// // //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Ventures Led</h4>
// // //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// // //                 </div>
// // //                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
// // //                   {ventures.map((v, i) => (
// // //                     <motion.div
// // //                       key={i}
// // //                       whileHover={{ y: -4, scale: 1.02 }}
// // //                       transition={{ type: "spring", stiffness: 300 }}
// // //                       className="group relative bg-white rounded-xl p-3.5 border border-gray-100 hover:border-[#01ADF0]/40 shadow-sm hover:shadow-lg hover:shadow-[#01ADF0]/10 transition-all duration-300"
// // //                     >
// // //                       <span className="absolute top-2 right-3 text-[10px] font-bold text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors">
// // //                         0{i + 1}
// // //                       </span>
// // //                       <p className="text-xs sm:text-[13px] font-bold text-[#003F7D] pr-6 leading-snug">{v}</p>
// // //                     </motion.div>
// // //                   ))}
// // //                 </div>
// // //               </motion.div>

// // //               {/* Worked Across */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.3, delay: 0.4 }}
// // //                 className="mt-7"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <Globe size={16} className="text-[#01ADF0]" />
// // //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Worked Across</h4>
// // //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// // //                 </div>
// // //                 <div className="flex flex-wrap gap-2">
// // //                   {industries.map((ind, i) => (
// // //                     <motion.span
// // //                       key={i}
// // //                       whileHover={{ scale: 1.06, y: -2 }}
// // //                       transition={{ type: "spring", stiffness: 400 }}
// // //                       className="px-3.5 py-1.5 bg-white text-[#003F7D] text-[11px] font-bold tracking-wide rounded-full border border-[#01ADF0]/25 hover:border-[#01ADF0] hover:bg-[#01ADF0] hover:text-white hover:shadow-lg hover:shadow-[#01ADF0]/30 transition-colors duration-300 cursor-default"
// // //                     >
// // //                       {ind}
// // //                     </motion.span>
// // //                   ))}
// // //                 </div>
// // //               </motion.div>

// // //               {/* Founder's Note */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.4, delay: 0.45 }}
// // //                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
// // //                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
// // //               >
// // //                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
// // //                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />

// // //                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />

// // //                 <div className="relative z-10">
// // //                   <div className="flex items-center gap-2 mb-3">
// // //                     <span className="w-6 h-px bg-[#01ADF0]" />
// // //                     <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#01ADF0] uppercase">
// // //                       Founder's Note
// // //                     </h4>
// // //                   </div>

// // //                   <p className="italic text-[15px] sm:text-base text-white leading-relaxed mb-3">
// // //                     "Technology should create meaningful business value."
// // //                   </p>
// // //                   <p className="text-xs text-white/70 leading-relaxed mb-5">
// // //                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
// // //                   </p>

// // //                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
// // //                     {principles.map((p, i) => (
// // //                       <motion.div
// // //                         key={i}
// // //                         initial={{ opacity: 0, x: -6 }}
// // //                         whileInView={{ opacity: 1, x: 0 }}
// // //                         viewport={{ once: true }}
// // //                         transition={{ duration: 0.25, delay: 0.5 + i * 0.05 }}
// // //                         className="flex items-center gap-2"
// // //                       >
// // //                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
// // //                         <span className="text-[11px] font-bold tracking-wider text-white/90">{p}</span>
// // //                       </motion.div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>

// // //       {/* Video Modal */}
// // //       {isVideoOpen && (
// // //         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
// // //           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
// // //             <X className="h-6 w-6 text-white" />
// // //           </button>
// // //           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
// // //             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
// // //           </motion.div>
// // //         </div>
// // //       )}
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 3. VISION & MISSION SECTION
// // // // ============================================
// // // const VisionMission = () => {
// // //   const items = [
// // //     { title: 'Our Vision', icon: 'eye', content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.' },
// // //     { title: 'Our Mission', icon: 'target', content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.' }
// // //   ];

// // //   return (
// // //     <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden border-0">
// // //       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // //         {/* Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 10 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="text-center mb-4 sm:mb-5 md:mb-6"
// // //         >
// // //           <span className="sec-badge inline-block">Our Vision & Mission</span>
// // //           <h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
// // //             What Drives{' '}
// // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //               Us Forward
// // //             </span>
// // //           </h2>
// // //           <p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
// // //             The core principles and goals that shape our journey and define our path to excellence.
// // //           </p>
// // //         </motion.div>

// // //         <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
// // //           {items.map((item, idx) => (
// // //             <motion.div
// // //               key={idx}
// // //               initial={{ opacity: 0, y: 15 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.4, delay: idx * 0.1 }}
// // //               className="text-center group"
// // //             >
// // //               <motion.div
// // //                 className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 flex items-center justify-center"
// // //                 whileHover={{ scale: 1.08, rotate: 5 }}
// // //                 transition={{ type: "spring", stiffness: 300 }}
// // //               >
// // //                 <motion.div
// // //                   className="absolute inset-0 rounded-full"
// // //                   style={{ background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)', padding: '3px' }}
// // //                   animate={{ rotate: 360 }}
// // //                   transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
// // //                 >
// // //                   <div className="w-full h-full rounded-full bg-white"></div>
// // //                 </motion.div>
// // //                 <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>
// // //                 <motion.div
// // //                   className="absolute inset-4 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
// // //                   animate={{ scale: [1, 1.15, 1] }}
// // //                   transition={{ duration: 2, repeat: Infinity }}
// // //                 ></motion.div>

// // //                 <div className="relative z-10">
// // //                   <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                     <defs>
// // //                       <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
// // //                         <stop offset="0%" stopColor="#01adf0" />
// // //                         <stop offset="100%" stopColor="#a855f7" />
// // //                       </linearGradient>
// // //                     </defs>
// // //                     {item.icon === 'eye' ? (
// // //                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// // //                         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
// // //                         <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
// // //                         <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
// // //                         <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
// // //                       </g>
// // //                     ) : (
// // //                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// // //                         <circle cx="12" cy="12" r="10" />
// // //                         <circle cx="12" cy="12" r="6" />
// // //                         <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
// // //                         <path d="m16 8 4-4" />
// // //                         <path d="M20 4v4h-4" />
// // //                       </g>
// // //                     )}
// // //                   </svg>
// // //                 </div>
// // //               </motion.div>

// // //               <h3 className="sec-h3 sec-text-dark mb-3 group-hover:text-[#01adf0] transition-colors duration-300">
// // //                 {item.title}
// // //               </h3>

// // //               <motion.div
// // //                 className="w-14 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-3"
// // //                 whileHover={{ width: 80 }}
// // //               ></motion.div>

// // //               <p className="sec-p sec-text-dark-soft leading-relaxed max-w-sm mx-auto">
// // //                 {item.content}
// // //               </p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // ============================================
// // // // 4. OUR JOURNEY SECTION
// // // // ============================================
// // // const HowWeWork = () => {
// // //   const journeyData = [
// // //     [
// // //       { date: 'May 2024', shortDate: 'MAY 24', desc: 'TheCoderBox CMMI Level 3 Appraised' },
// // //       { date: 'Nov 15 2018', shortDate: 'NOV 18', desc: 'TheCoderBox undergoing CMMI Level 3 Re-Appraisal Process' },
// // //       { date: 'OCT 30 2018', shortDate: 'OCT 30', desc: 'ISO 27001:2013 Certification - TheCoderBox is Awarded ISO 27001:2013 Certification by BSI' },
// // //     ],
// // //     [
// // //       { date: 'SEP 20 2018', shortDate: 'SEP 20', desc: 'ISO 9001:2015 Certification - TheCoderBox is Awarded ISO 9001:2015 Certification by BSI' },
// // //       { date: 'November 21, 2017', shortDate: 'NOV 17', desc: 'TheCoderBox Ranked Among Top 50 Fastest Growing Tech Companies 2017' },
// // //       { date: 'September 27, 2017', shortDate: 'SEP 27', desc: 'Company Recognized by Insight Success Magazine as 10 Best Google Partners to Watch in 2017' },
// // //     ],
// // //     [
// // //       { date: 'August 5, 2017', shortDate: 'AUG 5', desc: 'Won a Recognition as 30 Fastest Growing Companies in India 2017' },
// // //       { date: 'December 12, 2016', shortDate: 'DEC 12', desc: 'TheCoderBox to Build an Automated Platform for European Telecom Service Provider' },
// // //       { date: 'December 6, 2016', shortDate: 'DEC 6', desc: 'TheCoderBox Releases "Threat Manage" a Cloud-based Security Management Platform' },
// // //     ],
// // //     [
// // //       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP Community: "Technology Pavilion"' },
// // //       { date: 'August 1, 2016', shortDate: 'AUG 1', desc: 'TheCoderBox Releases "Managed Cloud Platform" for IoT Businesses' },
// // //       { date: 'June 10, 2016', shortDate: 'JUN 10', desc: 'TheCoderBox Becomes a Member of MSPAlliance' },
// // //     ],
// // //     [
// // //       { date: 'February 2016', shortDate: 'FEB 16', desc: 'TheCoderBox is an Oracle Silver Partner for the Second Time in a Row' },
// // //       { date: 'October 30, 2015', shortDate: 'OCT 30', desc: 'TheCoderBox Awarded ISO 27001 Certificate' },
// // //       { date: 'December 26, 2014', shortDate: 'DEC 26', desc: 'TheCoderBox Earns CMMI® Maturity Level 3 Appraisal' },
// // //     ],
// // //     [
// // //       { date: '2013', shortDate: '2013', desc: 'TheCoderBox becomes a Microsoft Gold Partner in 2013' },
// // //       { date: 'Quality Brands Award', shortDate: '2013-2015', desc: 'TheCoderBox Bestowed With Quality Brands Award 2013-2015' },
// // //       { date: 'ISO 9001:2008 Certification', shortDate: '2013-2015', desc: 'TheCoderBox certified with ISO 9001:2008 in 2013' },
// // //     ],
// // //     [
// // //       { date: 'October 1, 2012', shortDate: 'OCT 1', desc: 'TheCoderBox becomes a Successful NASSCOM Member' },
// // //     ]
// // //   ];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-white overflow-hidden border-0">
// // //       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 10 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="text-center mb-4 sm:mb-5 md:mb-6"
// // //         >
// // //           <motion.span className="sec-badge inline-block">Our Journey</motion.span>
// // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
// // //             TheCoderBox{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Journey</span>
// // //           </motion.h2>
// // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
// // //             Our milestones and achievements that define who we are today
// // //           </motion.p>
// // //         </motion.div>

// // //         <div className="relative max-w-6xl mx-auto">
// // //           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>
// // //           {journeyData.map((row, rowIdx) => (
// // //             <div key={rowIdx} className="relative mb-12 last:mb-0">
// // //               <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
// // //                 <path d={rowIdx % 2 === 0 ? "M 0 50 Q 300 0 600 50 T 1200 50" : "M 0 50 Q 300 100 600 50 T 1200 50"} stroke="#01ADF0" strokeWidth="2" strokeDasharray="6 8" fill="none" strokeLinecap="round" opacity="0.35" />
// // //               </svg>
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
// // //                 {row.map((item, idx) => (
// // //                   <motion.div
// // //                     key={idx}
// // //                     initial={{ opacity: 0, y: 15 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     viewport={{ once: true }}
// // //                     transition={{ duration: 0.4, delay: idx * 0.08 }}
// // //                     className="flex flex-col items-center text-center group"
// // //                   >
// // //                     <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
// // //                       <div className="absolute inset-0 rounded-full bg-[#01ADF0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
// // //                       <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C6FB]/40" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}></motion.div>
// // //                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#008FD1] flex items-center justify-center shadow-2xl shadow-[#01ADF0]/40 border-4 border-white">
// // //                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
// // //                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
// // //                         <div className="text-center px-2 relative z-10">
// // //                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">{item.shortDate}</p>
// // //                         </div>
// // //                       </div>
// // //                     </motion.div>
// // //                     <motion.div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01ADF0]/30 group-hover:-translate-y-2">
// // //                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-b-full"></div>
// // //                       <h4 className="sec-h3 sec-text-dark mb-3 mt-2">{item.date}</h4>
// // //                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] mx-auto mb-4 rounded-full"></div>
// // //                       <p className="sec-p sec-text-dark-soft leading-relaxed">{item.desc}</p>
// // //                     </motion.div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // ============================================
// // // // 5. OUR VALUES SECTION
// // // // ============================================
// // // const OurValuesAndMission = () => {
// // //   const values = [
// // //     { title: 'Innovation',    desc: 'We thrive on creative solutions using modern technologies.',  bg: '#003F7D' },
// // //     { title: 'Integrity',     desc: 'Honesty and transparency guide our actions.',                  bg: '#166534' },
// // //     { title: 'Quality',       desc: 'We prioritise delivering reliable, high-performing products.', bg: '#9A3412' },
// // //     { title: 'Client Focus',  desc: 'Your business goals are our top priority.',                     bg: '#9D174D' },
// // //     { title: 'Collaboration', desc: 'We believe in the power of teamwork and open communication.',   bg: '#374151' },
// // //     { title: 'Adaptability',  desc: 'We embrace change and move quickly with evolving trends.',      bg: '#6B21A8' },
// // //   ];

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden border-0">
// // //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// // //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 10 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="text-center mb-4 sm:mb-5 md:mb-6"
// // //         >
// // //           <motion.span className="sec-badge inline-block">Our Values</motion.span>
// // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
// // //             What We{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Stand For</span>
// // //           </motion.h2>
// // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
// // //             The principles that guide every project, partnership, and decision we make
// // //           </motion.p>
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {values.map((value, idx) => (
// // //             <motion.div
// // //               key={value.title}
// // //               initial={{ opacity: 0, y: 15 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.4, delay: idx * 0.05 }}
// // //               className="h-full"
// // //             >
// // //               <div className="group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/20">
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out"></div>
// // //                 <div className="relative z-10">
// // //                   <div className="flex items-start mb-4">
// // //                     <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white shrink-0" style={{ backgroundColor: value.bg }}>
// // //                       <CircleCheck size={22} className="text-white" />
// // //                     </div>
// // //                     <h3 className="sec-h3 sec-text-dark transition-colors duration-500 group-hover:text-black">{value.title}</h3>
// // //                   </div>
// // //                   <p className="text-[15px] text-gray-700 leading-relaxed font-medium transition-colors duration-500 group-hover:text-black/90">{value.desc}</p>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // // // ============================================
// // // // // 6. CONTACT US SECTION
// // // // // ============================================
// // // // const ContactUsSection = () => {
// // // //   const locations = [
// // // //     { id: 1, city: "Bengaluru", country: "India", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
// // // //   ];

// // // //   const [selectedLocation] = useState(locations[0]);
// // // //   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// // // //   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// // // //   const [isSuccess, setIsSuccess] = useState(false);
// // // //   const [isLoading, setIsLoading] = useState(false);

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     if (name === "phone") {
// // // //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// // // //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// // // //     } else {
// // // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // // //     }
// // // //     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
// // // //   };

// // // //   const validateForm = () => {
// // // //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// // // //     let isValid = true;
// // // //     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
// // // //     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
// // // //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
// // // //     if (!formData.phone.trim()) { newErrors.phone = "Please enter your phone number."; isValid = false; }
// // // //     else if (!/^[6-9]\d{9}$/.test(formData.phone)) { newErrors.phone = "Please enter a valid 10-digit mobile number."; isValid = false; }
// // // //     if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
// // // //     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
// // // //     setErrors(newErrors);
// // // //     return isValid;
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!validateForm()) return;
// // // //     setIsLoading(true);
// // // //     try {
// // // //       const { data, error } = await supabase.from("contacts").insert([{ name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message }]);
// // // //       if (error) throw error;
// // // //       setIsSuccess(true);
// // // //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// // // //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
// // // //       setTimeout(() => setIsSuccess(false), 5000);
// // // //     } catch (error) {
// // // //       console.error("Supabase Error:", error);
// // // //       setErrors((prev) => ({ ...prev, message: "Failed to send message to database. Please try again later." }));
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] to-white overflow-hidden border-0">
// // // //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// // // //         <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// // // //         <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// // // //       </div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 10 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.4 }}
// // // //           className="text-center mb-4 sm:mb-5 md:mb-6"
// // // //         >
// // // //           <motion.span className="sec-badge inline-block">Contact Us</motion.span>
// // // //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
// // // //             Get in{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Touch</span>
// // // //           </motion.h2>
// // // //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
// // // //             Have a project in mind? Reach out to us for a free consultation.
// // // //           </motion.p>
// // // //         </motion.div>

// // // //         <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
// // // //           <div className="lg:col-span-7 flex flex-col">
// // // //             <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// // // //               <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />
// // // //               <div className="relative">
// // // //                 <h3 className="sec-h3 sec-text-dark mb-5">Send Us a Message</h3>
// // // //                 <AnimatePresence>
// // // //                   {isSuccess && (
// // // //                     <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 16 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
// // // //                       <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// // // //                         <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// // // //                         <div>
// // // //                           <p className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</p>
// // // //                           <p className="mt-0.5 text-xs text-emerald-700">Thank you! We'll get back to you soon.</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </motion.div>
// // // //                   )}
// // // //                 </AnimatePresence>

// // // //                 <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// // // //                   <div>
// // // //                     <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
// // // //                     <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.name ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // // //                     <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.name}</motion.p>}</AnimatePresence>
// // // //                   </div>

// // // //                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// // // //                     <div>
// // // //                       <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
// // // //                       <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.email ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // // //                       <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.email}</motion.p>}</AnimatePresence>
// // // //                     </div>
// // // //                     <div>
// // // //                       <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
// // // //                       <input id="phone" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.phone ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // // //                       <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.phone}</motion.p>}</AnimatePresence>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div>
// // // //                     <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
// // // //                     <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.service ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`}>
// // // //                       <option value="">Select a service</option>
// // // //                       <option value="Mobile App Development">Mobile App Development</option>
// // // //                       <option value="Website Development">Website Development</option>
// // // //                       <option value="Custom Software">Custom Software</option>
// // // //                       <option value="UI/UX Design">UI/UX Design</option>
// // // //                       <option value="Cloud & Hosting">Cloud & Hosting</option>
// // // //                       <option value="Maintenance & Support">Maintenance & Support</option>
// // // //                       <option value="Other">Other</option>
// // // //                     </select>
// // // //                     <AnimatePresence>{errors.service && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.service}</motion.p>}</AnimatePresence>
// // // //                   </div>

// // // //                   <div>
// // // //                     <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
// // // //                     <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.message ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// // // //                     <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.message}</motion.p>}</AnimatePresence>
// // // //                   </div>

// // // //                   <div className="pt-2">
// // // //                     <button type="submit" disabled={isLoading} className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${isLoading ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20" : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"}`}>
// // // //                       <span className="relative z-10">{isLoading ? "Sending..." : "Submit Inquiry"}</span>
// // // //                       {!isLoading && <ArrowRight size={17} className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
// // // //                       {!isLoading && <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />}
// // // //                     </button>
// // // //                   </div>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="lg:col-span-5 flex flex-col">
// // // //             <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// // // //               <div className="absolute right-0 top-0 h-full w-full opacity-10">
// // // //                 <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // // //                 <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // // //               </div>
// // // //               <div className="relative">
// // // //                 <h3 className="sec-h3 text-white mb-4">Connect With Us</h3>
// // // //                 <p className="sec-p text-white/80 mb-6">We're available to answer your questions and help with your project.</p>
// // // //                 <div className="space-y-4">
// // // //                   <ContactItem icon={<Phone size={18} />} title="Phone" value="+91 8928809025" href="tel:+918928809025" />
// // // //                   <ContactItem icon={<MessageSquare size={18} />} title="WhatsApp" value="+91 8928809025" href="https://wa.me/918928809025" />
// // // //                   <ContactItem icon={<Mail size={18} />} title="Email" value="support@thecoderbox.com" href="mailto:support@thecoderbox.com" />
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// // // //               <div className="space-y-5">
// // // //                 <div className="flex items-center">
// // // //                   <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><Clock size={18} /></div>
// // // //                   <div>
// // // //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Hours</h4>
// // // //                     <p className="sec-p sec-text-dark-soft">Monday - Saturday: 9AM - 7PM</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="flex items-start">
// // // //                   <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><MapPin size={18} /></div>
// // // //                   <div>
// // // //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Location</h4>
// // // //                     <p className="sec-p sec-text-dark-soft leading-6">{selectedLocation?.address}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // const ContactItem = ({ icon, title, value, href }) => {
// // // //   return (
// // // //     <div className="flex items-center">
// // // //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
// // // //       <div>
// // // //         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
// // // //         <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="sec-p text-white/80 transition-colors duration-300 hover:text-white">{value}</a>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // ============================================
// // // // MAIN ABOUT US COMPONENT
// // // // ============================================
// // // const AboutUs = () => {
// // //   return (
// // //     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
// // //       <AboutHero />
// // //       <AboutContent />
// // //       <VisionMission />
// // //       <HowWeWork />
// // //       <OurValuesAndMission />
// // //       {/* <ContactUsSection /> */}
// // //     </div>
// // //   );
// // // };

// // // export default AboutUs;










// // import React, { useState, useRef, useCallback, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import {
// //   MapPin, Mail, Briefcase,
// //   Quote, Phone, CheckCircle, Play, X, ArrowRight,
// //   MessageSquare, Clock, AlertCircle, CircleCheck, Globe,
// //   ChevronLeft, ChevronRight,
// //   Palette, Code2, Bot, Target, TrendingUp, Search, RefreshCw, Users, BarChart3,
// // } from 'lucide-react';
// // import { Link } from 'react-router-dom';
// // import { supabase } from "../lib/supabaseClient";

// // // ============================================
// // // CONSTANTS
// // // ============================================
// // const SERVICES_DATA = [
// //   { title: 'Branding',              desc: 'Identity systems, voice and visuals people actually remember.', icon: Palette },
// //   { title: 'Technology',            desc: 'Websites, apps and platforms engineered to scale with you.',     icon: Code2 },
// //   { title: 'AI',                    desc: 'Practical AI woven into workflows, content and customer journeys.', icon: Bot },
// //   { title: 'Digital Strategy',      desc: 'Roadmaps that connect business goals to every channel.',         icon: Target },
// //   { title: 'Performance Marketing', desc: 'Paid media built around ROAS, not vanity metrics.',              icon: TrendingUp },
// //   { title: 'SEO',                   desc: 'Search visibility that compounds month after month.',            icon: Search },
// //   { title: 'Automation',            desc: 'Systems that work 24/7, so your team can focus on people.',      icon: RefreshCw },
// //   { title: 'Lead Generation',       desc: 'Pipelines that turn attention into qualified conversations.',    icon: Users },
// //   { title: 'Analytics',             desc: "Clear insight into what's working, and why.",                   icon: BarChart3 },
// // ];

// // const SLIDES_DATA = [
// //   {
// //     tag: '01 · Our Vision',
// //     title: 'Made in India. Trusted worldwide.',
// //     state: 'To be the growth partner that proves a team from India can build brands the whole world remembers.',
// //     points: [
// //       { b: 'Global standards, Indian heart.', rest: ' World-class craft with the warmth and hustle we grew up with.' },
// //       { b: 'Every ambitious brand.',          rest: ' From first-time founders to enterprises crossing borders.' },
// //     ],
// //   },
// //   {
// //     tag: '02 · Our Mission',
// //     title: 'Build. Scale. Transform.',
// //     state: 'To unite human creativity with AI-driven execution, so every business we partner with can build, scale and transform with confidence.',
// //     points: [
// //       { b: 'Build',     rest: ' brands, platforms and foundations that last.' },
// //       { b: 'Scale',     rest: ' with performance marketing, SEO and lead generation that compounds.' },
// //       { b: 'Transform', rest: ' operations with automation and analytics that run 24/7.' },
// //     ],
// //   },
// //   {
// //     tag: '03 · Redefining the Market',
// //     title: 'Agencies sell services. We build engines.',
// //     state: "The old way is nine vendors, nine invoices and nobody owning the outcome. We're changing that.",
// //     points: [
// //       { b: 'One partner, not nine vendors.',    rest: ' Brand, tech, marketing and data under one roof.' },
// //       { b: 'Creativity leads, AI amplifies.',   rest: ' Ideas come from people; speed comes from smart tools.' },
// //       { b: 'Outcomes over deliverables.',       rest: ' We measure success in growth, not in hours logged.' },
// //     ],
// //   },
// //   {
// //     tag: '04 · Human-Centered',
// //     title: 'People first. Always.',
// //     state: 'Every strategy starts with a person, not a prompt. Real people plan, write, design and review every piece of work.',
// //     points: [
// //       { b: 'We listen before we build.',         rest: ' Your customers and your voice come first.' },
// //       { b: 'Creatives with a point of view.',    rest: ' Work that feels crafted, not generated.' },
// //       { b: 'A team you can call.',               rest: ' Real humans, real accountability.' },
// //     ],
// //   },
// //   {
// //     tag: '05 · AI-Driven',
// //     title: 'AI does the lifting. People make the calls.',
// //     state: 'We use AI where it genuinely helps: faster research, sharper targeting, automation that never sleeps. Judgement and taste stay human.',
// //     points: [
// //       { b: 'Smarter, not noisier.',    rest: ' AI in the engine room, never as the face of your brand.' },
// //       { b: '24/7 automation.',         rest: ' Leads, reports and follow-ups that run while you sleep.' },
// //       { b: 'Analytics that explain.',  rest: ' Insight you can act on, not dashboards you ignore.' },
// //     ],
// //   },
// // ];

// // // ============================================
// // // SHARED STYLES
// // // ============================================
// // const SharedStyles = () => (
// //   <style>{`
// //     @keyframes cbProg { to { width: 100%; } }
// //     @keyframes cbDraw { to { stroke-dashoffset: 0; } }
// //     @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
// //     @keyframes cbPing { from { transform: scale(1); opacity: .9; } to { transform: scale(4); opacity: 0; } }
// //     @keyframes cbBlink { 50% { opacity: .25; } }
// //     @keyframes cbSpinCW { to { transform: rotate(360deg); } }

// //     .cb-draw { stroke-dasharray: 900; stroke-dashoffset: 900; }
// //     .cb-slide-active .cb-draw { animation: cbDraw 2.2s .2s cubic-bezier(.2,.8,.2,1) forwards; }
// //     .cb-bob { animation: cbBob 6s ease-in-out infinite; }
// //     .cb-pulse-ring { transform-origin: center; transform-box: fill-box; animation: cbPing 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
// //     .cb-carousel::-webkit-scrollbar { display: none; }
// //     .cb-carousel { scrollbar-width: none; }
// //     .swiper-button-custom:hover .swiper-icon { color: #fff !important; }

// //     /* ============================================
// //        NINE PILLARS — hover: dark bg + white text
// //        ============================================ */
// //     .pillar-card:hover .pillar-title { color: #ffffff !important; }
// //     .pillar-card:hover .pillar-desc  { color: rgba(255,255,255,0.78) !important; }
// //     .pillar-card:hover .pillar-icon-box {
// //       background-color: #0D86CF !important;
// //       color: #ffffff !important;
// //     }
// //     .pillar-card:hover .pillar-num { color: #8FCBF2 !important; }

// //     /* ============================================
// //        OUR VALUES — hover: gradient bg + black text
// //        ============================================ */
// //     .value-card:hover .value-title { color: #111827 !important; }
// //     .value-card:hover .value-desc  { color: #1f2937 !important; }
// //     .value-card:hover .value-icon-box { background-color: #003F7D !important; }
// //   `}</style>
// // );

// // // ============================================
// // // 1. HERO
// // // ============================================
// // const AboutHero = () => {
// //   return (
// //     <section
// //       className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
// //       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
// //     >
// //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }} />
// //         <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />
// //         <motion.div
// //           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
// //           style={{ background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)', boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)', filter: 'blur(2px)' }}
// //           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
// //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// //         />
// //         <motion.div
// //           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
// //           style={{ background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)', boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)', filter: 'blur(2px)' }}
// //           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
// //           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
// //         />
// //         <motion.div
// //           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
// //           style={{ background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)', boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)', filter: 'blur(2px)' }}
// //           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
// //           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
// //         />
// //         <motion.svg
// //           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
// //           viewBox="0 0 500 500" fill="none"
// //           style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
// //           animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
// //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// //         >
// //           <defs>
// //             <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
// //               <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
// //               <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
// //               <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
// //             </linearGradient>
// //           </defs>
// //           <motion.polygon points="250,40 460,250 250,460 40,250" stroke="url(#wireGrad)" strokeWidth="1.2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// //           <motion.polygon points="250,80 420,250 250,420 80,250" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" opacity="0.6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
// //           <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// //           <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
// //         </motion.svg>
// //         {[...Array(8)].map((_, i) => {
// //           const size = Math.random() * 3 + 2;
// //           return (
// //             <motion.div
// //               key={i}
// //               className="absolute rounded-full"
// //               style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${size}px`, height: `${size}px`, background: 'rgba(180, 230, 255, 0.9)', boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)` }}
// //               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
// //               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
// //             />
// //           );
// //         })}
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //         <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center">
// //           <motion.span
// //             initial={{ opacity: 0, y: 8 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.3, delay: 0.05 }}
// //             className="sec-badge inline-block"
// //             whileHover={{ scale: 1.05 }}
// //           >
// //             About Us
// //           </motion.span>

// //           <motion.h2
// //             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
// //             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.35, delay: 0.1 }}
// //           >
// //             Your Journey of Digital Transformation Begins Here! <br />
// //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
// //           </motion.h2>

// //           <motion.p
// //             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
// //             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.35, delay: 0.15 }}
// //           >
// //             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
// //           </motion.p>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 2. ABOUT CONTENT
// // // ============================================
// // const AboutContent = () => {
// //   const [isVideoOpen, setIsVideoOpen] = useState(false);
// //   const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

// //   const founderData = {
// //     name: "Ashwin R. Singh",
// //     alias: "(AASHU SINGH)",
// //     title: "FOUNDER / CTO / CEO",
// //     bio1: "Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions.",
// //     bio2: "Ashwin R. Singh has spent 13+ years building technology-led businesses. With a background in Computer Science and AI, he leads products and ventures from idea to execution.",
// //     bio3: "As Founder, CEO and CTO, he has built technology teams, shaped product strategies, and helped businesses navigate digital transformation.",
// //   };

// //   const stats = [
// //     { number: "13+", label: "YEARS BUILDING" },
// //     { number: "03",  label: "VENTURES LED" },
// //     { number: "06",  label: "INDUSTRIES" },
// //   ];

// //   const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
// //   const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
// //   const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

// //   return (
// //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#E6F8FF] overflow-hidden border-0">
// //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //         <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, amount: 0.15 }}
// //             transition={{ duration: 0.5, ease: "easeOut" }}
// //             className="relative flex justify-center"
// //           >
// //             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
// //               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>
// //               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
// //                 <div className="relative w-full h-full">
// //                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10" alt="CoderBox Team" className="w-full h-full object-cover" />
// //                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
// //                 </div>
// //               </div>
// //               <button onClick={() => setIsVideoOpen(true)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20">
// //                 <div className="relative">
// //                   <div className="absolute inset-0 rounded-full bg-[#01ADF0]/40 animate-ping"></div>
// //                   <div className="absolute inset-[-8px] rounded-full bg-[#01ADF0]/20 animate-pulse"></div>
// //                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01ADF0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01ADF0]/50 group-hover:scale-110 transition-transform duration-300">
// //                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01ADF0] rounded-full flex items-center justify-center border-2 border-white/30">
// //                       <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </button>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, amount: 0.15 }}
// //             transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
// //             className="relative"
// //           >
// //             <div className="relative">
// //               <motion.span
// //                 initial={{ opacity: 0, y: 6 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.3, delay: 0.05 }}
// //                 className="sec-badge inline-block"
// //               >
// //                 Leadership
// //               </motion.span>

// //               <motion.h2
// //                 initial={{ opacity: 0, y: 8 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.3, delay: 0.1 }}
// //                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
// //               >
// //                 Meet Our{" "}
// //                 <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Founder</span>
// //               </motion.h2>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 6 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.3, delay: 0.15 }}
// //                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
// //               >
// //                 <span className="sec-h3 sec-text-dark mb-0">{founderData.name}</span>
// //                 <span className="sec-p sec-text-muted mb-0">{founderData.alias}</span>
// //                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
// //                 <span className="sec-badge">{founderData.title}</span>
// //               </motion.div>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 8 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.3, delay: 0.2 }}
// //                 className="space-y-3.5 sec-p sec-text-dark-soft mt-6 max-w-2xl"
// //               >
// //                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
// //                 <p>{founderData.bio2}</p>
// //                 <p>{founderData.bio3}</p>
// //               </motion.div>

// //               <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-8">
// //                 {stats.map((stat, idx) => (
// //                   <motion.div
// //                     key={idx}
// //                     initial={{ opacity: 0, y: 10 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ duration: 0.3, delay: 0.25 + idx * 0.05, type: "spring", stiffness: 150 }}
// //                     whileHover={{ y: -6 }}
// //                     className="group relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
// //                   >
// //                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
// //                     <p className="sec-h2 mb-1 bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent">
// //                       {stat.number}
// //                     </p>
// //                     <p className="sec-p sec-text-muted mb-0">{stat.label}</p>
// //                   </motion.div>
// //                 ))}
// //               </div>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.3, delay: 0.35 }}
// //                 className="mt-8"
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <Briefcase size={16} className="text-[#01ADF0]" />
// //                   <h4 className="sec-badge mb-0">Ventures Led</h4>
// //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// //                 </div>
// //                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
// //                   {ventures.map((v, i) => (
// //                     <motion.div
// //                       key={i}
// //                       whileHover={{ y: -4, scale: 1.02 }}
// //                       transition={{ type: "spring", stiffness: 300 }}
// //                       className="group relative bg-white rounded-xl p-3.5 border border-gray-100 hover:border-[#01ADF0]/40 shadow-sm hover:shadow-lg hover:shadow-[#01ADF0]/10 transition-all duration-300"
// //                     >
// //                       <span className="sec-p absolute top-2 right-3 mb-0 text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors font-bold">
// //                         0{i + 1}
// //                       </span>
// //                       <p className="sec-p sec-text-dark font-bold pr-6 mb-0">{v}</p>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </motion.div>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.3, delay: 0.4 }}
// //                 className="mt-7"
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <Globe size={16} className="text-[#01ADF0]" />
// //                   <h4 className="sec-badge mb-0">Worked Across</h4>
// //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// //                 </div>
// //                 <div className="flex flex-wrap gap-2">
// //                   {industries.map((ind, i) => (
// //                     <motion.span
// //                       key={i}
// //                       whileHover={{ scale: 1.06, y: -2 }}
// //                       transition={{ type: "spring", stiffness: 400 }}
// //                       className="sec-badge"
// //                     >
// //                       {ind}
// //                     </motion.span>
// //                   ))}
// //                 </div>
// //               </motion.div>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.4, delay: 0.45 }}
// //                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
// //                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
// //               >
// //                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
// //                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />
// //                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />
// //                 <div className="relative z-10">
// //                   <div className="flex items-center gap-2 mb-3">
// //                     <span className="w-6 h-px bg-[#01ADF0]" />
// //                     <h4 className="sec-badge mb-0">Founder's Note</h4>
// //                   </div>
// //                   <p className="sec-h3 sec-text-light mb-3 italic">"Technology should create meaningful business value."</p>
// //                   <p className="sec-p sec-text-light-soft mb-5">
// //                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
// //                   </p>
// //                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
// //                     {principles.map((p, i) => (
// //                       <motion.div
// //                         key={i}
// //                         initial={{ opacity: 0, x: -6 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ duration: 0.25, delay: 0.5 + i * 0.05 }}
// //                         className="flex items-center gap-2"
// //                       >
// //                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
// //                         <span className="sec-p sec-text-light mb-0 font-bold">{p}</span>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {isVideoOpen && (
// //         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
// //           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
// //             <X className="h-6 w-6 text-white" />
// //           </button>
// //           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
// //             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
// //           </motion.div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // // ============================================
// // // 3. WHAT DRIVES US (Slider)
// // // ============================================
// // const WhatDrivesUs = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [sliderPaused, setSliderPaused] = useState(false);
// //   const sliderRef = useRef(null);
// //   const slideTimerRef = useRef(null);
// //   const touchRef = useRef({ startX: null });
// //   const SLIDE_DURATION = 7000;

// //   const goToSlide = useCallback((i) => {
// //     setCurrentSlide(((i % SLIDES_DATA.length) + SLIDES_DATA.length) % SLIDES_DATA.length);
// //   }, []);

// //   useEffect(() => {
// //     if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
// //     if (sliderPaused) return;
// //     slideTimerRef.current = setTimeout(() => {
// //       setCurrentSlide((i) => (i + 1) % SLIDES_DATA.length);
// //     }, SLIDE_DURATION);
// //     return () => { if (slideTimerRef.current) clearTimeout(slideTimerRef.current); };
// //   }, [currentSlide, sliderPaused]);

// //   const onTouchStart = (e) => { touchRef.current.startX = e.touches[0].clientX; };
// //   const onTouchEnd = (e) => {
// //     if (touchRef.current.startX === null) return;
// //     const dx = e.changedTouches[0].clientX - touchRef.current.startX;
// //     if (Math.abs(dx) > 50) goToSlide(currentSlide + (dx < 0 ? 1 : -1));
// //     touchRef.current.startX = null;
// //   };

// //   const SLIDER_BTN = "swiper-button-custom bg-white/10 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-[rgba(143,203,242,.3)] hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";

// //   return (
// //     <section id="vision" className="relative py-16 sm:py-20 md:py-24 bg-[#08111F] text-white overflow-hidden">
// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5 }}
// //           className="text-center mb-10 sm:mb-12"
// //         >
// //           <span className="sec-badge inline-block">What drives us</span>
// //           <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
// //             Redefining the market,{' '}
// //             <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">one brand at a time.</span>
// //           </h2>
// //           <p className="sec-p mt-3 max-w-2xl mx-auto text-[#AFC0D4]">
// //             Our vision, our mission and the promises behind them. Swipe, click, or let it play.
// //           </p>
// //         </motion.div>

// //         <div
// //           ref={sliderRef}
// //           className="relative bg-[#0F1E33] border border-[rgba(143,203,242,.12)] rounded-3xl sm:rounded-[32px] min-h-[560px] sm:min-h-[620px] md:min-h-[680px] overflow-hidden"
// //           onMouseEnter={() => setSliderPaused(true)}
// //           onMouseLeave={() => setSliderPaused(false)}
// //           onTouchStart={onTouchStart}
// //           onTouchEnd={onTouchEnd}
// //         >
// //           {SLIDES_DATA.map((slide, i) => (
// //             <div
// //               key={slide.tag}
// //               className={`absolute inset-0 grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-10 px-5 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16 pb-24 sm:pb-28 md:pb-32 items-center transition-all duration-700 ${
// //                 currentSlide === i ? 'cb-slide-active opacity-100 visible' : 'opacity-0 invisible'
// //               }`}
// //             >
// //               <div className="text-center md:text-left">
// //                 <span className="sec-badge inline-flex items-center gap-2 sm:gap-3 text-[#8FCBF2]">
// //                   <i className="w-5 sm:w-7 h-[1.5px] bg-[#F09A36]" />
// //                   {slide.tag}
// //                 </span>
// //                 <h3 className="sec-h2 my-4 sm:my-5 text-white">{slide.title}</h3>
// //                 <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-[#E4EEF7] max-w-[620px] mx-auto md:mx-0 text-lg sm:text-xl md:text-2xl lg:text-[clamp(24px,2.4vw,34px)]" style={{ lineHeight: 1.25 }}>
// //                   {slide.state}
// //                 </p>
// //                 <ul className="mt-6 sm:mt-8 grid gap-3 sm:gap-3.5 max-w-[600px] mx-auto md:mx-0 text-left">
// //                   {slide.points.map((pt, k) => (
// //                     <li key={k} className="sec-p mb-0 flex gap-3 sm:gap-3.5 items-start text-[#B8C7D8]">
// //                       <span className="flex-none w-2 h-2 sm:w-2.5 sm:h-2.5 mt-1.5 sm:mt-2 rounded-sm bg-[#8FCBF2] rotate-45" />
// //                       <span>
// //                         <b className="text-white">{pt.b}</b>
// //                         {pt.rest}
// //                       </span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               <div className="hidden md:grid place-items-center relative">
// //                 <span className="absolute right-0 -top-8 font-['Sora'] font-extrabold text-6xl md:text-[220px] leading-none text-[rgba(143,203,242,.07)]">
// //                   {String(i + 1).padStart(2, '0')}
// //                 </span>
// //                 <SlideArt index={i} />
// //               </div>
// //             </div>
// //           ))}

// //           <div className="absolute left-4 sm:left-8 right-4 sm:right-8 bottom-4 sm:bottom-8 flex items-center gap-3 sm:gap-6 z-10">
// //             <div className="hidden sm:flex gap-1.5 flex-1">
// //               {SLIDES_DATA.map((s, i) => (
// //                 <button
// //                   key={s.tag}
// //                   onClick={() => goToSlide(i)}
// //                   className={`flex-1 text-left pt-3 relative bg-transparent border-0 cursor-pointer transition-colors font-bold text-[12.5px] tracking-wider ${i === currentSlide ? 'text-white' : 'text-[#7F93AA]'}`}
// //                 >
// //                   <span className="absolute top-0 left-0 right-0 h-[3px] rounded bg-[rgba(143,203,242,.18)]" />
// //                   <span
// //                     className={`absolute top-0 left-0 h-[3px] rounded bg-[#8FCBF2] ${i < currentSlide ? 'w-full' : ''}`}
// //                     style={i === currentSlide ? { animation: `cbProg ${SLIDE_DURATION}ms linear forwards`, animationPlayState: sliderPaused ? 'paused' : 'running' } : { width: 0 }}
// //                   />
// //                   <span className="hidden md:inline">{`0${i + 1} ${s.tag.split('·')[1].trim()}`}</span>
// //                 </button>
// //               ))}
// //             </div>
// //             <div className="flex sm:hidden gap-1.5 flex-1 justify-center">
// //               {SLIDES_DATA.map((s, i) => (
// //                 <button
// //                   key={`dot-${s.tag}`}
// //                   onClick={() => goToSlide(i)}
// //                   aria-label={`Go to ${s.tag}`}
// //                   className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-[#8FCBF2]' : 'w-1.5 bg-[rgba(143,203,242,.25)]'}`}
// //                 />
// //               ))}
// //             </div>
// //             <div className="flex gap-2 sm:gap-2.5">
// //               <button onClick={() => goToSlide(currentSlide - 1)} aria-label="Previous slide" className={SLIDER_BTN}>
// //                 <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white swiper-icon" />
// //               </button>
// //               <button onClick={() => goToSlide(currentSlide + 1)} aria-label="Next slide" className={SLIDER_BTN}>
// //                 <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white swiper-icon" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 4. NINE PILLARS — hover: dark bg + white text
// // // ============================================
// // const NinePillarsSection = () => {
// //   const carouselRef = useRef(null);
// //   const dragRef = useRef({ down: false, startX: 0, startL: 0 });

// //   const scrollCarousel = (dir) => {
// //     if (!carouselRef.current) return;
// //     const step = window.innerWidth < 640 ? 280 : 340;
// //     carouselRef.current.scrollBy({ left: dir * step, behavior: 'smooth' });
// //   };

// //   useEffect(() => {
// //     const el = carouselRef.current;
// //     if (!el) return;
// //     const onPointerDown = (e) => {
// //       if (e.pointerType !== 'mouse') return;
// //       dragRef.current = { down: true, startX: e.clientX, startL: el.scrollLeft };
// //       el.classList.add('cursor-grabbing');
// //     };
// //     const onPointerMove = (e) => {
// //       if (!dragRef.current.down) return;
// //       const dx = e.clientX - dragRef.current.startX;
// //       el.scrollLeft = dragRef.current.startL - dx;
// //     };
// //     const onPointerUp = () => {
// //       dragRef.current.down = false;
// //       el.classList.remove('cursor-grabbing');
// //     };
// //     el.addEventListener('pointerdown', onPointerDown);
// //     window.addEventListener('pointermove', onPointerMove);
// //     window.addEventListener('pointerup', onPointerUp);
// //     return () => {
// //       el.removeEventListener('pointerdown', onPointerDown);
// //       window.removeEventListener('pointermove', onPointerMove);
// //       window.removeEventListener('pointerup', onPointerUp);
// //     };
// //   }, []);

// //   const NAV_BTN = "swiper-button-custom bg-white/80 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-gray-200 hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";

// //   return (
// //     <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-[#F3F4F1] overflow-hidden">
// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5 }}
// //           className="text-center mb-10 sm:mb-12"
// //         >
// //           <span className="sec-badge inline-block">One engine · nine pillars</span>
// //           <h2 className="sec-h2 sec-text-dark mt-3 max-w-3xl mx-auto">
// //             Everything your brand needs,{' '}
// //             <span className="font-['Instrument_Serif'] italic font-normal text-[#0D86CF]">under one roof.</span>
// //           </h2>
// //           <p className="sec-p sec-text-dark-soft mt-3 max-w-2xl mx-auto">
// //             From strategy and design to technology and growth — every capability your brand needs, working as one team.
// //           </p>
// //         </motion.div>

// //         <div className="relative">
// //           <div ref={carouselRef} className="cb-carousel flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory px-1 pb-4 cursor-grab">
// //             {SERVICES_DATA.map((svc, i) => {
// //               const Icon = svc.icon;
// //               return (
// //                 <article
// //                   key={svc.title}
// //                   className="pillar-card group flex-none snap-start bg-white border border-[#D9DDD6] rounded-3xl p-6 sm:p-7 w-[78vw] sm:w-[340px] md:w-[320px] min-h-[280px] sm:min-h-[330px] flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-[#0B1526] hover:border-[#0B1526] select-none"
// //                 >
// //                   <span className="pointer-events-none absolute w-[260px] h-[260px] rounded-full -right-32 -bottom-36 transition-transform duration-500 group-hover:scale-[1.8]" style={{ background: 'radial-gradient(circle,rgba(13,134,207,.25),transparent 70%)' }} />
// //                   <div className="flex justify-between items-start relative z-10">
// //                     <span className="pillar-icon-box w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E3F0FA] text-[#0A5E93] grid place-items-center transition-all duration-500 group-hover:-rotate-6">
// //                       <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
// //                     </span>
// //                     <span className="pillar-num font-['Instrument_Serif'] italic text-2xl sm:text-3xl text-[#6B7585] transition-colors duration-500">
// //                       {String(i + 1).padStart(2, '0')}
// //                     </span>
// //                   </div>
// //                   <h3 className="pillar-title sec-h3 sec-text-dark relative z-10 mt-auto pt-8 sm:pt-10 transition-colors duration-500">
// //                     {svc.title}
// //                   </h3>
// //                   <p className="pillar-desc sec-p sec-text-dark-soft relative z-10 mt-3 mb-0 transition-colors duration-500">
// //                     {svc.desc}
// //                   </p>
// //                 </article>
// //               );
// //             })}
// //           </div>

// //           <div className="flex justify-center gap-2.5 mt-6 sm:mt-8">
// //             <button onClick={() => scrollCarousel(-1)} aria-label="Scroll left" className={NAV_BTN}>
// //               <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 swiper-icon" />
// //             </button>
// //             <button onClick={() => scrollCarousel(1)} aria-label="Scroll right" className={NAV_BTN}>
// //               <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 swiper-icon" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 5. OUR VALUES — hover: gradient bg + black text
// // // ============================================
// // const OurValuesAndMission = () => {
// //   const values = [
// //     { title: 'Innovation',    desc: 'We thrive on creative solutions using modern technologies.',  bg: '#003F7D' },
// //     { title: 'Integrity',     desc: 'Honesty and transparency guide our actions.',                  bg: '#166534' },
// //     { title: 'Quality',       desc: 'We prioritise delivering reliable, high-performing products.', bg: '#9A3412' },
// //     { title: 'Client Focus',  desc: 'Your business goals are our top priority.',                     bg: '#9D174D' },
// //     { title: 'Collaboration', desc: 'We believe in the power of teamwork and open communication.',   bg: '#374151' },
// //     { title: 'Adaptability',  desc: 'We embrace change and move quickly with evolving trends.',      bg: '#6B21A8' },
// //   ];

// //   return (
// //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden border-0">
// //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.4 }}
// //           className="text-center mb-4 sm:mb-5 md:mb-6"
// //         >
// //           <motion.span className="sec-badge inline-block">Our Values</motion.span>
// //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
// //             What We{' '}
// //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// //               Stand For
// //             </span>
// //           </motion.h2>
// //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
// //             The principles that guide every project, partnership, and decision we make
// //           </motion.p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {values.map((value, idx) => (
// //             <motion.div
// //               key={value.title}
// //               initial={{ opacity: 0, y: 15 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.4, delay: idx * 0.05 }}
// //               className="h-full"
// //             >
// //               <div className="value-card group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/30">
// //                 {/* Sliding gradient background */}
// //                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />

// //                 <div className="relative z-10">
// //                   <div className="flex items-start mb-4">
// //                     {/* Icon box — dark navy on hover, white icon stays */}
// //                     <div
// //                       className="value-icon-box relative w-10 h-10 rounded-lg flex items-center justify-center mr-4 shrink-0 transition-colors duration-500"
// //                       style={{ backgroundColor: value.bg }}
// //                     >
// //                       <CircleCheck size={22} className="text-white" />
// //                     </div>

// //                     {/* Title — black on hover */}
// //                     <h3 className="value-title sec-h3 sec-text-dark transition-colors duration-500 mb-0">
// //                       {value.title}
// //                     </h3>
// //                   </div>

// //                   {/* Description — black on hover */}
// //                   <p className="value-desc sec-p sec-text-dark-soft transition-colors duration-500 mb-0">
// //                     {value.desc}
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 6. CLOSING CTA
// // // ============================================
// // const ClosingCTA = () => {
// //   return (
// //     <section id="contact" className="relative bg-[#0A5E93] text-white py-16 sm:py-20 md:py-24 overflow-hidden">
// //       <svg className="absolute right-4 sm:right-6 md:right-[6%] top-16 sm:top-24 md:top-32 w-28 h-28 sm:w-40 sm:h-40 md:w-72 md:h-72 opacity-40 sm:opacity-50 md:opacity-95" viewBox="0 0 300 300" aria-hidden="true">
// //         <defs>
// //           <path id="cb-circ2" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" />
// //         </defs>
// //         <circle cx="150" cy="150" r="146" fill="none" stroke="rgba(255,255,255,.35)" />
// //         <circle cx="150" cy="150" r="92" fill="none" stroke="rgba(255,255,255,.2)" strokeDasharray="3 7" />
// //         <g style={{ transformOrigin: '150px 150px', animation: 'cbSpinCW 24s linear infinite' }}>
// //           <text style={{ font: '800 15px DM Sans, sans-serif', letterSpacing: '.3em', fill: '#fff' }}>
// //             <textPath href="#cb-circ2">BUILD • SCALE • TRANSFORM • MADE IN INDIA • </textPath>
// //           </text>
// //         </g>
// //         <text x="150" y="162" textAnchor="middle" style={{ font: '800 40px DM Sans, sans-serif', fill: '#fff' }}>CB</text>
// //         <rect x="118" y="176" width="21.3" height="5" fill="#F09A36" />
// //         <rect x="139.3" y="176" width="21.4" height="5" fill="#fff" />
// //         <rect x="160.7" y="176" width="21.3" height="5" fill="#2E8B57" />
// //       </svg>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.5 }}
// //           className="text-center mb-6 sm:mb-8"
// //         >
// //           <span className="sec-badge inline-block">Let's build together</span>
// //           <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
// //             Have a digital idea in mind?{' '}
// //             <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">Let's turn it into reality.</span>
// //           </h2>
// //           <p className="sec-p mt-3 max-w-2xl mx-auto text-white/80">
// //             CoderBox Digital · Human-Centered. AI-Driven.
// //           </p>
// //         </motion.div>

// //         <div className="text-center font-['Space_Grotesk'] font-extrabold tracking-[-.06em]" style={{ fontSize: 'clamp(48px,14vw,190px)', lineHeight: .9 }}>
// //           <span className="block">BUILD.</span>
// //           <span className="block" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,.3) 0%, #fff 30%, rgba(255,255,255,.3) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>SCALE.</span>
// //           <span className="font-['Instrument_Serif'] italic font-normal tracking-[-.03em] text-[#8FCBF2] block">Transform.</span>
// //         </div>

// //         <div className="flex flex-col items-center gap-6 sm:gap-8 mt-10 sm:mt-14">
// //           <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-white text-center text-xl sm:text-2xl md:text-3xl" style={{ lineHeight: 1.25 }}>
// //             Your Expertise. Our Strategy. Your Growth.
// //           </p>
// //           <Link to="/contact" className="sec-btn bg-white text-[#0B1526] shadow-none hover:bg-[#F09A36] hover:text-[#0B1526]">
// //             Connect With CoderBox
// //             <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
// //               <ArrowRight className="h-4 w-4" />
// //             </motion.span>
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // SlideArt
// // // ============================================
// // const SlideArt = ({ index }) => {
// //   if (index === 0) {
// //     return (
// //       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// //         <circle className="cb-draw" cx="190" cy="220" r="150" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <circle className="cb-draw" cx="190" cy="220" r="105" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <path className="cb-draw" d="M40 220 H340" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// //         <path className="cb-draw" d="M110 220 A80 80 0 0 1 270 220" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// //         <circle className="cb-bob" cx="190" cy="140" r="10" fill="#F09A36" />
// //         <circle className="cb-pulse-ring" cx="190" cy="140" r="10" fill="none" stroke="#F09A36" opacity=".5" />
// //         <path className="cb-draw" d="M190 108 V70 M142 120 L120 92 M238 120 L260 92" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// //         <path className="cb-draw" d="M70 260 H310 M100 290 H280" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// //         <text x="190" y="330" textAnchor="middle" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>RISING · GLOBAL</text>
// //       </svg>
// //     );
// //   }
// //   if (index === 1) {
// //     return (
// //       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// //         <circle className="cb-draw" cx="140" cy="140" r="78" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// //         <circle className="cb-draw" cx="240" cy="140" r="78" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// //         <circle className="cb-draw" cx="190" cy="226" r="78" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// //         <circle cx="190" cy="168" r="7" fill="#8FCBF2" />
// //         <circle className="cb-pulse-ring" cx="190" cy="168" r="7" fill="none" stroke="#8FCBF2" />
// //         <text x="118" y="120" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>BUILD</text>
// //         <text x="228" y="120" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>SCALE</text>
// //         <text x="152" y="268" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>TRANSFORM</text>
// //       </svg>
// //     );
// //   }
// //   if (index === 2) {
// //     return (
// //       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// //         <path d="M40 300 H350" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <rect x="60" y="230" width="36" height="70" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <rect x="112" y="210" width="36" height="90" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <rect x="164" y="220" width="36" height="80" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <rect x="216" y="200" width="36" height="100" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <path className="cb-draw" d="M60 250 C 130 240, 170 210, 220 150 S 300 60, 330 40" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// //         <path className="cb-draw" d="M300 40 H332 V72" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// //         <rect className="cb-draw" x="268" y="120" width="36" height="180" rx="4" fill="none" stroke="#8FCBF2" strokeWidth="2" />
// //         <text x="226" y="325" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>THE OLD CURVE ↗ BROKEN</text>
// //       </svg>
// //     );
// //   }
// //   if (index === 3) {
// //     return (
// //       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// //         <circle cx="190" cy="170" r="140" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <circle cx="190" cy="170" r="96" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
// //         <circle className="cb-draw" cx="190" cy="130" r="28" fill="none" stroke="#F09A36" strokeWidth="3" />
// //         <path className="cb-draw" d="M130 230 C 140 185, 240 185, 250 230" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
// //         {[[70,120],[320,200],[110,280],[290,70]].map(([x, y], i) => (
// //           <circle key={i} cx={x} cy={y} r="6" fill="#8FCBF2" />
// //         ))}
// //         <path d="M76 122 L162 130 M314 198 L250 210 M116 276 L150 232 M284 76 L212 112" fill="none" stroke="#8FCBF2" strokeWidth="1.5" strokeDasharray="3 6" />
// //       </svg>
// //     );
// //   }
// //   return (
// //     <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
// //       <g fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5">
// //         <rect x="60" y="50" width="60" height="60" rx="10" /><rect x="160" y="50" width="60" height="60" rx="10" /><rect x="260" y="50" width="60" height="60" rx="10" />
// //         <rect x="60" y="140" width="60" height="60" rx="10" /><rect x="260" y="140" width="60" height="60" rx="10" />
// //         <rect x="60" y="230" width="60" height="60" rx="10" /><rect x="160" y="230" width="60" height="60" rx="10" /><rect x="260" y="230" width="60" height="60" rx="10" />
// //       </g>
// //       <rect className="cb-draw" x="160" y="140" width="60" height="60" rx="10" fill="none" stroke="#F09A36" strokeWidth="3" />
// //       <circle cx="190" cy="170" r="8" fill="#F09A36" />
// //       <circle className="cb-pulse-ring" cx="190" cy="170" r="8" fill="none" stroke="#F09A36" />
// //       <path className="cb-draw" d="M120 80 H160 M220 80 H260 M120 170 H160 M220 170 H260 M120 260 H160 M220 260 H260 M190 110 V140 M190 200 V230" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
// //     </svg>
// //   );
// // };

// // // ============================================
// // // MAIN
// // // ============================================
// // const AboutUs = () => {
// //   return (
// //     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
// //       <SharedStyles />
// //       <AboutHero />
// //       <AboutContent />
// //       {/* VisionMission section removed — same content is in the WhatDrivesUs slider below */}
// //       <WhatDrivesUs />
// //       <NinePillarsSection />
// //       <OurValuesAndMission />
// //       <ClosingCTA />
// //     </div>
// //   );
// // };

// // export default AboutUs;





// import React, { useState, useRef, useCallback, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin, Mail, Briefcase,
//   Quote, Phone, CheckCircle, Play, X, ArrowRight,
//   MessageSquare, Clock, AlertCircle, CircleCheck, Globe,
//   ChevronLeft, ChevronRight,
//   Palette, Code2, Bot, Target, TrendingUp, Search, RefreshCw, Users, BarChart3,
// } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { supabase } from "../lib/supabaseClient";

// // ============================================
// // CONSTANTS
// // ============================================
// const SERVICES_DATA = [
//   { title: 'Branding',              desc: 'Identity systems, voice and visuals people actually remember.', icon: Palette },
//   { title: 'Technology',            desc: 'Websites, apps and platforms engineered to scale with you.',     icon: Code2 },
//   { title: 'AI',                    desc: 'Practical AI woven into workflows, content and customer journeys.', icon: Bot },
//   { title: 'Digital Strategy',      desc: 'Roadmaps that connect business goals to every channel.',         icon: Target },
//   { title: 'Performance Marketing', desc: 'Paid media built around ROAS, not vanity metrics.',              icon: TrendingUp },
//   { title: 'SEO',                   desc: 'Search visibility that compounds month after month.',            icon: Search },
//   { title: 'Automation',            desc: 'Systems that work 24/7, so your team can focus on people.',      icon: RefreshCw },
//   { title: 'Lead Generation',       desc: 'Pipelines that turn attention into qualified conversations.',    icon: Users },
//   { title: 'Analytics',             desc: "Clear insight into what's working, and why.",                   icon: BarChart3 },
// ];

// const SLIDES_DATA = [
//   {
//     tag: '01 · Our Vision',
//     title: 'Made in India. Trusted worldwide.',
//     state: 'To be the growth partner that proves a team from India can build brands the whole world remembers.',
//     points: [
//       { b: 'Global standards, Indian heart.', rest: ' World-class craft with the warmth and hustle we grew up with.' },
//       { b: 'Every ambitious brand.',          rest: ' From first-time founders to enterprises crossing borders.' },
//     ],
//   },
//   {
//     tag: '02 · Our Mission',
//     title: 'Build. Scale. Transform.',
//     state: 'To unite human creativity with AI-driven execution, so every business we partner with can build, scale and transform with confidence.',
//     points: [
//       { b: 'Build',     rest: ' brands, platforms and foundations that last.' },
//       { b: 'Scale',     rest: ' with performance marketing, SEO and lead generation that compounds.' },
//       { b: 'Transform', rest: ' operations with automation and analytics that run 24/7.' },
//     ],
//   },
//   {
//     tag: '03 · Redefining the Market',
//     title: 'Agencies sell services. We build engines.',
//     state: "The old way is nine vendors, nine invoices and nobody owning the outcome. We're changing that.",
//     points: [
//       { b: 'One partner, not nine vendors.',    rest: ' Brand, tech, marketing and data under one roof.' },
//       { b: 'Creativity leads, AI amplifies.',   rest: ' Ideas come from people; speed comes from smart tools.' },
//       { b: 'Outcomes over deliverables.',       rest: ' We measure success in growth, not in hours logged.' },
//     ],
//   },
//   {
//     tag: '04 · Human-Centered',
//     title: 'People first. Always.',
//     state: 'Every strategy starts with a person, not a prompt. Real people plan, write, design and review every piece of work.',
//     points: [
//       { b: 'We listen before we build.',         rest: ' Your customers and your voice come first.' },
//       { b: 'Creatives with a point of view.',    rest: ' Work that feels crafted, not generated.' },
//       { b: 'A team you can call.',               rest: ' Real humans, real accountability.' },
//     ],
//   },
//   {
//     tag: '05 · AI-Driven',
//     title: 'AI does the lifting. People make the calls.',
//     state: 'We use AI where it genuinely helps: faster research, sharper targeting, automation that never sleeps. Judgement and taste stay human.',
//     points: [
//       { b: 'Smarter, not noisier.',    rest: ' AI in the engine room, never as the face of your brand.' },
//       { b: '24/7 automation.',         rest: ' Leads, reports and follow-ups that run while you sleep.' },
//       { b: 'Analytics that explain.',  rest: ' Insight you can act on, not dashboards you ignore.' },
//     ],
//   },
// ];

// // ============================================
// // SHARED STYLES
// // ============================================
// const SharedStyles = () => (
//   <style>{`
//     @keyframes cbProg { to { width: 100%; } }
//     @keyframes cbDraw { to { stroke-dashoffset: 0; } }
//     @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
//     @keyframes cbPing { from { transform: scale(1); opacity: .9; } to { transform: scale(4); opacity: 0; } }
//     @keyframes cbBlink { 50% { opacity: .25; } }
//     @keyframes cbSpinCW { to { transform: rotate(360deg); } }

//     .cb-draw { stroke-dasharray: 900; stroke-dashoffset: 900; }
//     .cb-slide-active .cb-draw { animation: cbDraw 2.2s .2s cubic-bezier(.2,.8,.2,1) forwards; }
//     .cb-bob { animation: cbBob 6s ease-in-out infinite; }
//     .cb-pulse-ring { transform-origin: center; transform-box: fill-box; animation: cbPing 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
//     .cb-carousel::-webkit-scrollbar { display: none; }
//     .cb-carousel { scrollbar-width: none; }
//     .swiper-button-custom:hover .swiper-icon { color: #fff !important; }

//     /* ============================================
//        NINE PILLARS — hover: dark bg + white text
//        ============================================ */
//     .pillar-card:hover .pillar-title { color: #ffffff !important; }
//     .pillar-card:hover .pillar-desc  { color: rgba(255,255,255,0.78) !important; }
//     .pillar-card:hover .pillar-icon-box {
//       background-color: #0D86CF !important;
//       color: #ffffff !important;
//     }
//     .pillar-card:hover .pillar-num { color: #8FCBF2 !important; }

//     /* ============================================
//        OUR VALUES — hover: gradient bg + black text
//        ============================================ */
//     .value-card:hover .value-title { color: #111827 !important; }
//     .value-card:hover .value-desc  { color: #1f2937 !important; }
//     .value-card:hover .value-icon-box { background-color: #003F7D !important; }
//   `}</style>
// );

// // ============================================
// // 1. HERO — kept exactly as ORIGINAL
// // ============================================
// const AboutHero = () => {
//   return (
//     <section
//       className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
//       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
//     >
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }} />
//         <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />
//         <motion.div
//           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
//           style={{ background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)', boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)', filter: 'blur(2px)' }}
//           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
//           style={{ background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)', boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)', filter: 'blur(2px)' }}
//           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
//           style={{ background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)', boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)', filter: 'blur(2px)' }}
//           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
//           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.svg
//           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
//           viewBox="0 0 500 500" fill="none"
//           style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
//           animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <defs>
//             <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
//               <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
//               <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
//             </linearGradient>
//           </defs>
//           <motion.polygon points="250,40 460,250 250,460 40,250" stroke="url(#wireGrad)" strokeWidth="1.2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
//           <motion.polygon points="250,80 420,250 250,420 80,250" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" opacity="0.6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
//           <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
//           <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
//         </motion.svg>
//         {[...Array(8)].map((_, i) => {
//           const size = Math.random() * 3 + 2;
//           return (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${size}px`, height: `${size}px`, background: 'rgba(180, 230, 255, 0.9)', boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)` }}
//               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
//               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
//             />
//           );
//         })}
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center">
//           <motion.span
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 0.05 }}
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//           >
//             About Us
//           </motion.span>

//           {/* ⬇️ HERO — back to ORIGINAL gradient (#01ADF0, not #8FCBF2) */}
//           <motion.h2
//             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
//             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.35, delay: 0.1 }}
//           >
//             Your Journey of Digital Transformation Begins Here! <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
//           </motion.h2>

//           <motion.p
//             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
//             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.35, delay: 0.15 }}
//           >
//             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 2. ABOUT CONTENT
// // ============================================
// const AboutContent = () => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

//   const founderData = {
//     name: "Ashwin R. Singh",
//     alias: "(AASHU SINGH)",
//     title: "FOUNDER / CTO / CEO",
//     bio1: "Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions.",
//     bio2: "Ashwin R. Singh has spent 13+ years building technology-led businesses. With a background in Computer Science and AI, he leads products and ventures from idea to execution.",
//     bio3: "As Founder, CEO and CTO, he has built technology teams, shaped product strategies, and helped businesses navigate digital transformation.",
//   };

//   const stats = [
//     { number: "13+", label: "YEARS BUILDING" },
//     { number: "03",  label: "VENTURES LED" },
//     { number: "06",  label: "INDUSTRIES" },
//   ];

//   const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
//   const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
//   const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#E6F8FF] overflow-hidden border-0">
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.15 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="relative flex justify-center"
//           >
//             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
//               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>
//               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
//                 <div className="relative w-full h-full">
//                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10" alt="CoderBox Team" className="w-full h-full object-cover" />
//                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
//                 </div>
//               </div>
//               <button onClick={() => setIsVideoOpen(true)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20">
//                 <div className="relative">
//                   <div className="absolute inset-0 rounded-full bg-[#01ADF0]/40 animate-ping"></div>
//                   <div className="absolute inset-[-8px] rounded-full bg-[#01ADF0]/20 animate-pulse"></div>
//                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01ADF0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01ADF0]/50 group-hover:scale-110 transition-transform duration-300">
//                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01ADF0] rounded-full flex items-center justify-center border-2 border-white/30">
//                       <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
//                     </div>
//                   </div>
//                 </div>
//               </button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.15 }}
//             transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
//             className="relative"
//           >
//             <div className="relative">
//               <motion.span
//                 initial={{ opacity: 0, y: 6 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.05 }}
//                 className="sec-badge inline-block"
//               >
//                 Leadership
//               </motion.span>

//               <motion.h2
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.1 }}
//                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
//               >
//                 Meet Our{" "}
//                 <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Founder</span>
//               </motion.h2>

//               <motion.div
//                 initial={{ opacity: 0, y: 6 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.15 }}
//                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
//               >
//                 <span className="sec-h3 sec-text-dark mb-0">{founderData.name}</span>
//                 <span className="sec-p sec-text-muted mb-0">{founderData.alias}</span>
//                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
//                 <span className="sec-badge">{founderData.title}</span>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.2 }}
//                 className="space-y-3.5 sec-p sec-text-dark-soft mt-6 max-w-2xl"
//               >
//                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
//                 <p>{founderData.bio2}</p>
//                 <p>{founderData.bio3}</p>
//               </motion.div>

//               <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-8">
//                 {stats.map((stat, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.3, delay: 0.25 + idx * 0.05, type: "spring", stiffness: 150 }}
//                     whileHover={{ y: -6 }}
//                     className="group relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
//                   >
//                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <p className="sec-h2 mb-1 bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent">
//                       {stat.number}
//                     </p>
//                     <p className="sec-p sec-text-muted mb-0">{stat.label}</p>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.35 }}
//                 className="mt-8"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Briefcase size={16} className="text-[#01ADF0]" />
//                   <h4 className="sec-badge mb-0">Ventures Led</h4>
//                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                   {ventures.map((v, i) => (
//                     <motion.div
//                       key={i}
//                       whileHover={{ y: -4, scale: 1.02 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="group relative bg-white rounded-xl p-3.5 border border-gray-100 hover:border-[#01ADF0]/40 shadow-sm hover:shadow-lg hover:shadow-[#01ADF0]/10 transition-all duration-300"
//                     >
//                       <span className="sec-p absolute top-2 right-3 mb-0 text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors font-bold">
//                         0{i + 1}
//                       </span>
//                       <p className="sec-p sec-text-dark font-bold pr-6 mb-0">{v}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: 0.4 }}
//                 className="mt-7"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Globe size={16} className="text-[#01ADF0]" />
//                   <h4 className="sec-badge mb-0">Worked Across</h4>
//                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {industries.map((ind, i) => (
//                     <motion.span
//                       key={i}
//                       whileHover={{ scale: 1.06, y: -2 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                       className="sec-badge"
//                     >
//                       {ind}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: 0.45 }}
//                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
//                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
//               >
//                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
//                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />
//                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-2 mb-3">
//                     <span className="w-6 h-px bg-[#01ADF0]" />
//                     <h4 className="sec-badge mb-0">Founder's Note</h4>
//                   </div>
//                   <p className="sec-h3 sec-text-light mb-3 italic">"Technology should create meaningful business value."</p>
//                   <p className="sec-p sec-text-light-soft mb-5">
//                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
//                   </p>
//                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
//                     {principles.map((p, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, x: -6 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.25, delay: 0.5 + i * 0.05 }}
//                         className="flex items-center gap-2"
//                       >
//                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
//                         <span className="sec-p sec-text-light mb-0 font-bold">{p}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {isVideoOpen && (
//         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
//           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
//             <X className="h-6 w-6 text-white" />
//           </button>
//           <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
//             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// };

// // ============================================
// // 3. WHAT DRIVES US (Slider)
// // ============================================
// const WhatDrivesUs = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [sliderPaused, setSliderPaused] = useState(false);
//   const sliderRef = useRef(null);
//   const slideTimerRef = useRef(null);
//   const touchRef = useRef({ startX: null });
//   const SLIDE_DURATION = 7000;

//   const goToSlide = useCallback((i) => {
//     setCurrentSlide(((i % SLIDES_DATA.length) + SLIDES_DATA.length) % SLIDES_DATA.length);
//   }, []);

//   useEffect(() => {
//     if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
//     if (sliderPaused) return;
//     slideTimerRef.current = setTimeout(() => {
//       setCurrentSlide((i) => (i + 1) % SLIDES_DATA.length);
//     }, SLIDE_DURATION);
//     return () => { if (slideTimerRef.current) clearTimeout(slideTimerRef.current); };
//   }, [currentSlide, sliderPaused]);

//   const onTouchStart = (e) => { touchRef.current.startX = e.touches[0].clientX; };
//   const onTouchEnd = (e) => {
//     if (touchRef.current.startX === null) return;
//     const dx = e.changedTouches[0].clientX - touchRef.current.startX;
//     if (Math.abs(dx) > 50) goToSlide(currentSlide + (dx < 0 ? 1 : -1));
//     touchRef.current.startX = null;
//   };

//   const SLIDER_BTN = "swiper-button-custom bg-white/10 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-[rgba(143,203,242,.3)] hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";

//   return (
//     <section id="vision" className="relative py-16 sm:py-20 md:py-24 bg-[#08111F] text-white overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-10 sm:mb-12"
//         >
//           <span className="sec-badge inline-block">What drives us</span>

//           {/* "Redefining the market," (white) + "one brand at a time." (gradient, dark bg variant) */}
//           <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
//             Redefining the market,{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#8FCBF2] bg-clip-text text-transparent">
//               one brand at a time.
//             </span>
//           </h2>

//           <p className="sec-p mt-3 max-w-2xl mx-auto text-[#AFC0D4]">
//             Our vision, our mission and the promises behind them. Swipe, click, or let it play.
//           </p>
//         </motion.div>

//         <div
//           ref={sliderRef}
//           className="relative bg-[#0F1E33] border border-[rgba(143,203,242,.12)] rounded-3xl sm:rounded-[32px] min-h-[560px] sm:min-h-[620px] md:min-h-[680px] overflow-hidden"
//           onMouseEnter={() => setSliderPaused(true)}
//           onMouseLeave={() => setSliderPaused(false)}
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//         >
//           {SLIDES_DATA.map((slide, i) => (
//             <div
//               key={slide.tag}
//               className={`absolute inset-0 grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-10 px-5 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16 pb-24 sm:pb-28 md:pb-32 items-center transition-all duration-700 ${
//                 currentSlide === i ? 'cb-slide-active opacity-100 visible' : 'opacity-0 invisible'
//               }`}
//             >
//               <div className="text-center md:text-left">
//                 <span className="sec-badge inline-flex items-center gap-2 sm:gap-3 text-[#8FCBF2]">
//                   <i className="w-5 sm:w-7 h-[1.5px] bg-[#F09A36]" />
//                   {slide.tag}
//                 </span>
//                 <h3 className="sec-h2 my-4 sm:my-5 text-white">{slide.title}</h3>
//                 <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-[#E4EEF7] max-w-[620px] mx-auto md:mx-0 text-lg sm:text-xl md:text-2xl lg:text-[clamp(24px,2.4vw,34px)]" style={{ lineHeight: 1.25 }}>
//                   {slide.state}
//                 </p>
//                 <ul className="mt-6 sm:mt-8 grid gap-3 sm:gap-3.5 max-w-[600px] mx-auto md:mx-0 text-left">
//                   {slide.points.map((pt, k) => (
//                     <li key={k} className="sec-p mb-0 flex gap-3 sm:gap-3.5 items-start text-[#B8C7D8]">
//                       <span className="flex-none w-2 h-2 sm:w-2.5 sm:h-2.5 mt-1.5 sm:mt-2 rounded-sm bg-[#8FCBF2] rotate-45" />
//                       <span>
//                         <b className="text-white">{pt.b}</b>
//                         {pt.rest}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="hidden md:grid place-items-center relative">
//                 <span className="absolute right-0 -top-8 font-['Sora'] font-extrabold text-6xl md:text-[220px] leading-none text-[rgba(143,203,242,.07)]">
//                   {String(i + 1).padStart(2, '0')}
//                 </span>
//                 <SlideArt index={i} />
//               </div>
//             </div>
//           ))}

//           <div className="absolute left-4 sm:left-8 right-4 sm:right-8 bottom-4 sm:bottom-8 flex items-center gap-3 sm:gap-6 z-10">
//             <div className="hidden sm:flex gap-1.5 flex-1">
//               {SLIDES_DATA.map((s, i) => (
//                 <button
//                   key={s.tag}
//                   onClick={() => goToSlide(i)}
//                   className={`flex-1 text-left pt-3 relative bg-transparent border-0 cursor-pointer transition-colors font-bold text-[12.5px] tracking-wider ${i === currentSlide ? 'text-white' : 'text-[#7F93AA]'}`}
//                 >
//                   <span className="absolute top-0 left-0 right-0 h-[3px] rounded bg-[rgba(143,203,242,.18)]" />
//                   <span
//                     className={`absolute top-0 left-0 h-[3px] rounded bg-[#8FCBF2] ${i < currentSlide ? 'w-full' : ''}`}
//                     style={i === currentSlide ? { animation: `cbProg ${SLIDE_DURATION}ms linear forwards`, animationPlayState: sliderPaused ? 'paused' : 'running' } : { width: 0 }}
//                   />
//                   <span className="hidden md:inline">{`0${i + 1} ${s.tag.split('·')[1].trim()}`}</span>
//                 </button>
//               ))}
//             </div>
//             <div className="flex sm:hidden gap-1.5 flex-1 justify-center">
//               {SLIDES_DATA.map((s, i) => (
//                 <button
//                   key={`dot-${s.tag}`}
//                   onClick={() => goToSlide(i)}
//                   aria-label={`Go to ${s.tag}`}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-[#8FCBF2]' : 'w-1.5 bg-[rgba(143,203,242,.25)]'}`}
//                 />
//               ))}
//             </div>
//             <div className="flex gap-2 sm:gap-2.5">
//               <button onClick={() => goToSlide(currentSlide - 1)} aria-label="Previous slide" className={SLIDER_BTN}>
//                 <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white swiper-icon" />
//               </button>
//               <button onClick={() => goToSlide(currentSlide + 1)} aria-label="Next slide" className={SLIDER_BTN}>
//                 <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white swiper-icon" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 4. NINE PILLARS
// // ============================================
// const NinePillarsSection = () => {
//   const carouselRef = useRef(null);
//   const dragRef = useRef({ down: false, startX: 0, startL: 0 });

//   const scrollCarousel = (dir) => {
//     if (!carouselRef.current) return;
//     const step = window.innerWidth < 640 ? 280 : 340;
//     carouselRef.current.scrollBy({ left: dir * step, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const el = carouselRef.current;
//     if (!el) return;
//     const onPointerDown = (e) => {
//       if (e.pointerType !== 'mouse') return;
//       dragRef.current = { down: true, startX: e.clientX, startL: el.scrollLeft };
//       el.classList.add('cursor-grabbing');
//     };
//     const onPointerMove = (e) => {
//       if (!dragRef.current.down) return;
//       const dx = e.clientX - dragRef.current.startX;
//       el.scrollLeft = dragRef.current.startL - dx;
//     };
//     const onPointerUp = () => {
//       dragRef.current.down = false;
//       el.classList.remove('cursor-grabbing');
//     };
//     el.addEventListener('pointerdown', onPointerDown);
//     window.addEventListener('pointermove', onPointerMove);
//     window.addEventListener('pointerup', onPointerUp);
//     return () => {
//       el.removeEventListener('pointerdown', onPointerDown);
//       window.removeEventListener('pointermove', onPointerMove);
//       window.removeEventListener('pointerup', onPointerUp);
//     };
//   }, []);

//   const NAV_BTN = "swiper-button-custom bg-white/80 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-gray-200 hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";

//   return (
//     <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-[#F3F4F1] overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-10 sm:mb-12"
//         >
//           <span className="sec-badge inline-block">One engine · nine pillars</span>

//           {/* "Everything your brand needs," (dark) + "under one roof." (gradient, light bg variant) */}
//           <h2 className="sec-h2 sec-text-dark mt-3 max-w-3xl mx-auto">
//             Everything your brand needs,{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               under one roof.
//             </span>
//           </h2>

//           <p className="sec-p sec-text-dark-soft mt-3 max-w-2xl mx-auto">
//             From strategy and design to technology and growth — every capability your brand needs, working as one team.
//           </p>
//         </motion.div>

//         <div className="relative">
//           <div ref={carouselRef} className="cb-carousel flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory px-1 pb-4 cursor-grab">
//             {SERVICES_DATA.map((svc, i) => {
//               const Icon = svc.icon;
//               return (
//                 <article
//                   key={svc.title}
//                   className="pillar-card group flex-none snap-start bg-white border border-[#D9DDD6] rounded-3xl p-6 sm:p-7 w-[78vw] sm:w-[340px] md:w-[320px] min-h-[280px] sm:min-h-[330px] flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-[#0B1526] hover:border-[#0B1526] select-none"
//                 >
//                   <span className="pointer-events-none absolute w-[260px] h-[260px] rounded-full -right-32 -bottom-36 transition-transform duration-500 group-hover:scale-[1.8]" style={{ background: 'radial-gradient(circle,rgba(13,134,207,.25),transparent 70%)' }} />
//                   <div className="flex justify-between items-start relative z-10">
//                     <span className="pillar-icon-box w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E3F0FA] text-[#0A5E93] grid place-items-center transition-all duration-500 group-hover:-rotate-6">
//                       <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
//                     </span>
//                     <span className="pillar-num font-['Instrument_Serif'] italic text-2xl sm:text-3xl text-[#6B7585] transition-colors duration-500">
//                       {String(i + 1).padStart(2, '0')}
//                     </span>
//                   </div>
//                   <h3 className="pillar-title sec-h3 sec-text-dark relative z-10 mt-auto pt-8 sm:pt-10 transition-colors duration-500">
//                     {svc.title}
//                   </h3>
//                   <p className="pillar-desc sec-p sec-text-dark-soft relative z-10 mt-3 mb-0 transition-colors duration-500">
//                     {svc.desc}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>

//           <div className="flex justify-center gap-2.5 mt-6 sm:mt-8">
//             <button onClick={() => scrollCarousel(-1)} aria-label="Scroll left" className={NAV_BTN}>
//               <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 swiper-icon" />
//             </button>
//             <button onClick={() => scrollCarousel(1)} aria-label="Scroll right" className={NAV_BTN}>
//               <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 swiper-icon" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 5. OUR VALUES
// // ============================================
// const OurValuesAndMission = () => {
//   const values = [
//     { title: 'Innovation',    desc: 'We thrive on creative solutions using modern technologies.',  bg: '#003F7D' },
//     { title: 'Integrity',     desc: 'Honesty and transparency guide our actions.',                  bg: '#166534' },
//     { title: 'Quality',       desc: 'We prioritise delivering reliable, high-performing products.', bg: '#9A3412' },
//     { title: 'Client Focus',  desc: 'Your business goals are our top priority.',                     bg: '#9D174D' },
//     { title: 'Collaboration', desc: 'We believe in the power of teamwork and open communication.',   bg: '#374151' },
//     { title: 'Adaptability',  desc: 'We embrace change and move quickly with evolving trends.',      bg: '#6B21A8' },
//   ];

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden border-0">
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="text-center mb-4 sm:mb-5 md:mb-6"
//         >
//           <motion.span className="sec-badge inline-block">Our Values</motion.span>

//           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
//             What We{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Stand For
//             </span>
//           </motion.h2>

//           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
//             The principles that guide every project, partnership, and decision we make
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {values.map((value, idx) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: idx * 0.05 }}
//               className="h-full"
//             >
//               <div className="value-card group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/30">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />

//                 <div className="relative z-10">
//                   <div className="flex items-start mb-4">
//                     <div
//                       className="value-icon-box relative w-10 h-10 rounded-lg flex items-center justify-center mr-4 shrink-0 transition-colors duration-500"
//                       style={{ backgroundColor: value.bg }}
//                     >
//                       <CircleCheck size={22} className="text-white" />
//                     </div>

//                     <h3 className="value-title sec-h3 sec-text-dark transition-colors duration-500 mb-0">
//                       {value.title}
//                     </h3>
//                   </div>

//                   <p className="value-desc sec-p sec-text-dark-soft transition-colors duration-500 mb-0">
//                     {value.desc}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 6. CLOSING CTA
// // ============================================
// const ClosingCTA = () => {
//   return (
//     <section id="contact" className="relative bg-[#0A5E93] text-white py-16 sm:py-20 md:py-24 overflow-hidden">
//       <svg className="absolute right-4 sm:right-6 md:right-[6%] top-16 sm:top-24 md:top-32 w-28 h-28 sm:w-40 sm:h-40 md:w-72 md:h-72 opacity-40 sm:opacity-50 md:opacity-95" viewBox="0 0 300 300" aria-hidden="true">
//         <defs>
//           <path id="cb-circ2" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" />
//         </defs>
//         <circle cx="150" cy="150" r="146" fill="none" stroke="rgba(255,255,255,.35)" />
//         <circle cx="150" cy="150" r="92" fill="none" stroke="rgba(255,255,255,.2)" strokeDasharray="3 7" />
//         <g style={{ transformOrigin: '150px 150px', animation: 'cbSpinCW 24s linear infinite' }}>
//           <text style={{ font: '800 15px DM Sans, sans-serif', letterSpacing: '.3em', fill: '#fff' }}>
//             <textPath href="#cb-circ2">BUILD • SCALE • TRANSFORM • MADE IN INDIA • </textPath>
//           </text>
//         </g>
//         <text x="150" y="162" textAnchor="middle" style={{ font: '800 40px DM Sans, sans-serif', fill: '#fff' }}>CB</text>
//         <rect x="118" y="176" width="21.3" height="5" fill="#F09A36" />
//         <rect x="139.3" y="176" width="21.4" height="5" fill="#fff" />
//         <rect x="160.7" y="176" width="21.3" height="5" fill="#2E8B57" />
//       </svg>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-6 sm:mb-8"
//         >
//           <span className="sec-badge inline-block">Let's build together</span>

//           {/* "Have a digital idea in mind?" (white) + "Let's turn it into reality." (bright gradient for blue bg) */}
//           <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
//             Have a digital idea in mind?{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#B8E2FF] bg-clip-text text-transparent">
//               Let's turn it into reality.
//             </span>
//           </h2>

//           <p className="sec-p mt-3 max-w-2xl mx-auto text-white/80">
//             CoderBox Digital · Human-Centered. AI-Driven.
//           </p>
//         </motion.div>

//         <div className="text-center font-['Space_Grotesk'] font-extrabold tracking-[-.06em]" style={{ fontSize: 'clamp(48px,14vw,190px)', lineHeight: .9 }}>
//           <span className="block">BUILD.</span>
//           <span className="block" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,.3) 0%, #fff 30%, rgba(255,255,255,.3) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>SCALE.</span>
//           <span className="font-['Instrument_Serif'] italic font-normal tracking-[-.03em] text-[#8FCBF2] block">Transform.</span>
//         </div>

//         <div className="flex flex-col items-center gap-6 sm:gap-8 mt-10 sm:mt-14">
//           <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-white text-center text-xl sm:text-2xl md:text-3xl" style={{ lineHeight: 1.25 }}>
//             Your Expertise. Our Strategy. Your Growth.
//           </p>
//           <Link to="/contact" className="sec-btn bg-white text-[#0B1526] shadow-none hover:bg-[#F09A36] hover:text-[#0B1526]">
//             Connect With CoderBox
//             <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//               <ArrowRight className="h-4 w-4" />
//             </motion.span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // SlideArt
// // ============================================
// const SlideArt = ({ index }) => {
//   if (index === 0) {
//     return (
//       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
//         <circle className="cb-draw" cx="190" cy="220" r="150" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <circle className="cb-draw" cx="190" cy="220" r="105" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <path className="cb-draw" d="M40 220 H340" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
//         <path className="cb-draw" d="M110 220 A80 80 0 0 1 270 220" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
//         <circle className="cb-bob" cx="190" cy="140" r="10" fill="#F09A36" />
//         <circle className="cb-pulse-ring" cx="190" cy="140" r="10" fill="none" stroke="#F09A36" opacity=".5" />
//         <path className="cb-draw" d="M190 108 V70 M142 120 L120 92 M238 120 L260 92" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
//         <path className="cb-draw" d="M70 260 H310 M100 290 H280" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
//         <text x="190" y="330" textAnchor="middle" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>RISING · GLOBAL</text>
//       </svg>
//     );
//   }
//   if (index === 1) {
//     return (
//       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
//         <circle className="cb-draw" cx="140" cy="140" r="78" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
//         <circle className="cb-draw" cx="240" cy="140" r="78" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
//         <circle className="cb-draw" cx="190" cy="226" r="78" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
//         <circle cx="190" cy="168" r="7" fill="#8FCBF2" />
//         <circle className="cb-pulse-ring" cx="190" cy="168" r="7" fill="none" stroke="#8FCBF2" />
//         <text x="118" y="120" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>BUILD</text>
//         <text x="228" y="120" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>SCALE</text>
//         <text x="152" y="268" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>TRANSFORM</text>
//       </svg>
//     );
//   }
//   if (index === 2) {
//     return (
//       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
//         <path d="M40 300 H350" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <rect x="60" y="230" width="36" height="70" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <rect x="112" y="210" width="36" height="90" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <rect x="164" y="220" width="36" height="80" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <rect x="216" y="200" width="36" height="100" rx="4" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <path className="cb-draw" d="M60 250 C 130 240, 170 210, 220 150 S 300 60, 330 40" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
//         <path className="cb-draw" d="M300 40 H332 V72" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
//         <rect className="cb-draw" x="268" y="120" width="36" height="180" rx="4" fill="none" stroke="#8FCBF2" strokeWidth="2" />
//         <text x="226" y="325" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>THE OLD CURVE ↗ BROKEN</text>
//       </svg>
//     );
//   }
//   if (index === 3) {
//     return (
//       <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
//         <circle cx="190" cy="170" r="140" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <circle cx="190" cy="170" r="96" fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5" />
//         <circle className="cb-draw" cx="190" cy="130" r="28" fill="none" stroke="#F09A36" strokeWidth="3" />
//         <path className="cb-draw" d="M130 230 C 140 185, 240 185, 250 230" fill="none" stroke="#F09A36" strokeWidth="3" strokeLinecap="round" />
//         {[[70,120],[320,200],[110,280],[290,70]].map(([x, y], i) => (
//           <circle key={i} cx={x} cy={y} r="6" fill="#8FCBF2" />
//         ))}
//         <path d="M76 122 L162 130 M314 198 L250 210 M116 276 L150 232 M284 76 L212 112" fill="none" stroke="#8FCBF2" strokeWidth="1.5" strokeDasharray="3 6" />
//       </svg>
//     );
//   }
//   return (
//     <svg viewBox="0 0 380 340" className="w-full max-w-[300px] md:max-w-[380px] h-auto relative">
//       <g fill="none" stroke="rgba(143,203,242,.25)" strokeWidth="1.5">
//         <rect x="60" y="50" width="60" height="60" rx="10" /><rect x="160" y="50" width="60" height="60" rx="10" /><rect x="260" y="50" width="60" height="60" rx="10" />
//         <rect x="60" y="140" width="60" height="60" rx="10" /><rect x="260" y="140" width="60" height="60" rx="10" />
//         <rect x="60" y="230" width="60" height="60" rx="10" /><rect x="160" y="230" width="60" height="60" rx="10" /><rect x="260" y="230" width="60" height="60" rx="10" />
//       </g>
//       <rect className="cb-draw" x="160" y="140" width="60" height="60" rx="10" fill="none" stroke="#F09A36" strokeWidth="3" />
//       <circle cx="190" cy="170" r="8" fill="#F09A36" />
//       <circle className="cb-pulse-ring" cx="190" cy="170" r="8" fill="none" stroke="#F09A36" />
//       <path className="cb-draw" d="M120 80 H160 M220 80 H260 M120 170 H160 M220 170 H260 M120 260 H160 M220 260 H260 M190 110 V140 M190 200 V230" fill="none" stroke="#8FCBF2" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   );
// };

// // ============================================
// // MAIN
// // ============================================
// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
//       <SharedStyles />
//       <AboutHero />
//       <AboutContent />
//       <WhatDrivesUs />
//       <NinePillarsSection />
//       <OurValuesAndMission />
//       <ClosingCTA />
//     </div>
//   );
// };

// export default AboutUs;








import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Mail, Briefcase,
  Quote, Phone, CheckCircle, Play, X, ArrowRight,
  MessageSquare, Clock, AlertCircle, CircleCheck, Globe,
  ChevronLeft, ChevronRight,
  Palette, Code2, Bot, Target, TrendingUp, Search, RefreshCw, Users, BarChart3,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from "../lib/supabaseClient";

// ============================================
// CONSTANTS
// ============================================
const SERVICES_DATA = [
  { title: 'Branding',              desc: 'Identity systems, voice and visuals people actually remember.', icon: Palette },
  { title: 'Technology',            desc: 'Websites, apps and platforms engineered to scale with you.',     icon: Code2 },
  { title: 'AI',                    desc: 'Practical AI woven into workflows, content and customer journeys.', icon: Bot },
  { title: 'Digital Strategy',      desc: 'Roadmaps that connect business goals to every channel.',         icon: Target },
  { title: 'Performance Marketing', desc: 'Paid media built around ROAS, not vanity metrics.',              icon: TrendingUp },
  { title: 'SEO',                   desc: 'Search visibility that compounds month after month.',            icon: Search },
  { title: 'Automation',            desc: 'Systems that work 24/7, so your team can focus on people.',      icon: RefreshCw },
  { title: 'Lead Generation',       desc: 'Pipelines that turn attention into qualified conversations.',    icon: Users },
  { title: 'Analytics',             desc: "Clear insight into what's working, and why.",                   icon: BarChart3 },
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

// ============================================
// ABOUT-US-THEMED HERO PARTICLES
// ============================================
const HERO_GLYPHS = ['✦', '★', '◆', '↑', '→', '⚡', '♥', '✓', '☺', '⌘', '✦', '◆'];

const HERO_TAGS = [
  'VISION',
  'MISSION',
  'VALUES',
  'TEAM',
  'CREATIVITY',
  'INNOVATION',
  'INDIA → GLOBAL',
  'SINCE 2014',
];

const HERO_ICONS = [
  { Icon: Users,      label: 'Team',       color: '#00C6FB' },
  { Icon: Target,     label: 'Mission',    color: '#F09A36' },
  { Icon: TrendingUp, label: 'Growth',     color: '#4ADE80' },
  { Icon: Palette,    label: 'Creativity', color: '#B9A3F0' },
  { Icon: Globe,      label: 'Global',     color: '#8FCBF2' },
  { Icon: Quote,      label: 'Culture',    color: '#F09A36' },
];

// ============================================
// SHARED STYLES
// ============================================
const SharedStyles = () => (
  <style>{`
    @keyframes cbProg { to { width: 100%; } }
    @keyframes cbDraw { to { stroke-dashoffset: 0; } }
    @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
    @keyframes cbPing { from { transform: scale(1); opacity: .9; } to { transform: scale(4); opacity: 0; } }
    @keyframes cbBlink { 50% { opacity: .25; } }
    @keyframes cbSpinCW { to { transform: rotate(360deg); } }

    .cb-draw { stroke-dasharray: 900; stroke-dashoffset: 900; }
    .cb-slide-active .cb-draw { animation: cbDraw 2.2s .2s cubic-bezier(.2,.8,.2,1) forwards; }
    .cb-bob { animation: cbBob 6s ease-in-out infinite; }
    .cb-pulse-ring { transform-origin: center; transform-box: fill-box; animation: cbPing 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
    .cb-carousel::-webkit-scrollbar { display: none; }
    .cb-carousel { scrollbar-width: none; }
    .swiper-button-custom:hover .swiper-icon { color: #fff !important; }

    .pillar-card:hover .pillar-title { color: #ffffff !important; }
    .pillar-card:hover .pillar-desc  { color: rgba(255,255,255,0.78) !important; }
    .pillar-card:hover .pillar-icon-box {
      background-color: #0D86CF !important;
      color: #ffffff !important;
    }
    .pillar-card:hover .pillar-num { color: #8FCBF2 !important; }

    .value-card:hover .value-title { color: #111827 !important; }
    .value-card:hover .value-desc  { color: #1f2937 !important; }
    .value-card:hover .value-icon-box { background-color: #003F7D !important; }
  `}</style>
);

// ============================================
// 1. HERO — original orbs + about-themed particles
// ============================================
const AboutHero = () => {
  return (
    <section
      className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
      style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />

        {/* ============ ORIGINAL FLOATING ORBS (circles) ============ */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)', boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)', filter: 'blur(2px)' }}
          animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
          style={{ background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)', boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)', filter: 'blur(2px)' }}
          animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)', boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)', filter: 'blur(2px)' }}
          animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ============ ABOUT-THEMED ICON CHIPS ============ */}
        {HERO_ICONS.map(({ Icon, label, color }, i) => {
          const positions = [
            { top: '12%', left: '6%' },
            { top: '68%', left: '8%' },
            { top: '22%', right: '7%' },
            { top: '72%', right: '9%' },
            { top: '44%', left: '4%' },
            { top: '58%', right: '5%' },
          ];
          const pos = positions[i] || { top: '50%', left: '50%' };
          const dur = 8 + (i % 3) * 2;
          const delay = (i % 4) * 1.2;
          return (
            <motion.div
              key={label}
              className="absolute flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[.06] px-3 py-2 backdrop-blur-sm select-none"
              style={{
                ...pos,
                boxShadow: `0 10px 30px -12px ${color}55`,
              }}
              animate={{
                y: [0, -18, 0, 14, 0],
                x: [0, 10, 0, -8, 0],
                rotate: [0, 4, 0, -4, 0],
              }}
              transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span
                className="grid h-7 w-7 flex-none place-items-center rounded-full"
                style={{ background: `${color}22`, border: `1px solid ${color}55`, color }}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-[.16em]"
                style={{ color: `${color}` }}
              >
                {label}
              </span>
            </motion.div>
          );
        })}

        {/* ============ ROTATING WIREFRAME ============ */}
        <motion.svg
          className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
          viewBox="0 0 500 500" fill="none"
          style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
          animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <motion.polygon points="250,40 460,250 250,460 40,250" stroke="url(#wireGrad)" strokeWidth="1.2" fill="none" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
          <motion.polygon points="250,80 420,250 250,420 80,250" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" opacity="0.6" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
          <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
          <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
        </motion.svg>

        {/* ============ FLOATING GLYPHS ============ */}
        {HERO_GLYPHS.map((glyph, i) => {
          const top = 8 + ((i * 41) % 84);
          const left = 4 + ((i * 59) % 90);
          const size = 14 + (i % 4) * 6;
          const dur = 6 + (i % 5) * 1.6;
          const delay = (i % 6) * 0.8;
          return (
            <motion.span
              key={`g-${i}`}
              className="absolute select-none font-['Space_Grotesk'] font-bold"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                fontSize: `${size}px`,
                color: 'rgba(143,203,242,0.42)',
                textShadow: '0 0 14px rgba(1,173,240,0.55)',
              }}
              animate={{
                y: [0, -22, 0, 18, 0],
                x: [0, 12, 0, -10, 0],
                opacity: [0.15, 0.75, 0.15],
                rotate: [0, 8, 0, -8, 0],
              }}
              transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              {glyph}
            </motion.span>
          );
        })}

        {/* ============ SPARKLE DUST ============ */}
        {[...Array(10)].map((_, i) => {
          const size = Math.random() * 3 + 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${size}px`, height: `${size}px`, background: 'rgba(180, 230, 255, 0.9)', boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)` }}
              animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
              transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
            />
          );
        })}

        {/* ============ ORBITING TAG CHIPS ============ */}
        <motion.div
          className="absolute top-1/2 left-1/2 hidden lg:block"
          style={{ width: 720, height: 720, translateX: '-50%', translateY: '-50%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
        >
          {HERO_TAGS.map((label, i) => {
            const angle = (i * 360) / HERO_TAGS.length;
            const rad = (angle * Math.PI) / 180;
            const x = 360 + Math.cos(rad) * 360;
            const y = 360 + Math.sin(rad) * 360;
            return (
              <motion.div
                key={`tag-${label}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[.16em] text-[#B8E2FF] backdrop-blur-sm whitespace-nowrap"
                style={{ left: x, top: y }}
                animate={{ rotate: -360 }}
                transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
              >
                {label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.span>

          <motion.h2
            className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            Your Journey of Digital Transformation Begins Here! <br />
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
          </motion.h2>

          <motion.p
            className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
          >
            A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 2. ABOUT CONTENT
// ============================================
const AboutContent = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

  const founderData = {
    name: "Ashwin R. Singh",
    alias: "(AASHU SINGH)",
    title: "FOUNDER / CTO / CEO",
    bio1: "Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions.",
    bio2: "Ashwin R. Singh has spent 13+ years building technology-led businesses. With a background in Computer Science and AI, he leads products and ventures from idea to execution.",
    bio3: "As Founder, CEO and CTO, he has built technology teams, shaped product strategies, and helped businesses navigate digital transformation.",
  };

  const stats = [
    { number: "13+", label: "YEARS BUILDING" },
    { number: "03",  label: "VENTURES LED" },
    { number: "06",  label: "INDUSTRIES" },
  ];

  const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
  const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
  const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#E6F8FF] overflow-hidden border-0">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>
              <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
                <div className="relative w-full h-full">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10" alt="CoderBox Team" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
              </div>
              <button onClick={() => setIsVideoOpen(true)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#01ADF0]/40 animate-ping"></div>
                  <div className="absolute inset-[-8px] rounded-full bg-[#01ADF0]/20 animate-pulse"></div>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01ADF0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01ADF0]/50 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01ADF0] rounded-full flex items-center justify-center border-2 border-white/30">
                      <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="relative"
          >
            <div className="relative">
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="sec-badge inline-block"
              >
                Leadership
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
              >
                Meet Our{" "}
                <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Founder</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
              >
                <span className="sec-h3 sec-text-dark mb-0">{founderData.name}</span>
                <span className="sec-p sec-text-muted mb-0">{founderData.alias}</span>
                <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
                <span className="sec-badge">{founderData.title}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="space-y-3.5 sec-p sec-text-dark-soft mt-6 max-w-2xl"
              >
                <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
                <p>{founderData.bio2}</p>
                <p>{founderData.bio3}</p>
              </motion.div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-8">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + idx * 0.05, type: "spring", stiffness: 150 }}
                    whileHover={{ y: -6 }}
                    className="group relative bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="sec-h2 mb-1 bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                    <p className="sec-p sec-text-muted mb-0">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="mt-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={16} className="text-[#01ADF0]" />
                  <h4 className="sec-badge mb-0">Ventures Led</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ventures.map((v, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative bg-white rounded-xl p-3.5 border border-gray-100 hover:border-[#01ADF0]/40 shadow-sm hover:shadow-lg hover:shadow-[#01ADF0]/10 transition-all duration-300"
                    >
                      <span className="sec-p absolute top-2 right-3 mb-0 text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors font-bold">
                        0{i + 1}
                      </span>
                      <p className="sec-p sec-text-dark font-bold pr-6 mb-0">{v}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={16} className="text-[#01ADF0]" />
                  <h4 className="sec-badge mb-0">Worked Across</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="sec-badge"
                    >
                      {ind}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
              >
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />
                <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-px bg-[#01ADF0]" />
                    <h4 className="sec-badge mb-0">Founder's Note</h4>
                  </div>
                  <p className="sec-h3 sec-text-light mb-3 italic">"Technology should create meaningful business value."</p>
                  <p className="sec-p sec-text-light-soft mb-5">
                    Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
                    {principles.map((p, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 0.5 + i * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
                        <span className="sec-p sec-text-light mb-0 font-bold">{p}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
            <X className="h-6 w-6 text-white" />
          </button>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
            <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
          </motion.div>
        </div>
      )}
    </section>
  );
};

// ============================================
// 3. WHAT DRIVES US (Slider)
// ============================================
const WhatDrivesUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);
  const sliderRef = useRef(null);
  const slideTimerRef = useRef(null);
  const touchRef = useRef({ startX: null });
  const SLIDE_DURATION = 7000;

  const goToSlide = useCallback((i) => {
    setCurrentSlide(((i % SLIDES_DATA.length) + SLIDES_DATA.length) % SLIDES_DATA.length);
  }, []);

  useEffect(() => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    if (sliderPaused) return;
    slideTimerRef.current = setTimeout(() => {
      setCurrentSlide((i) => (i + 1) % SLIDES_DATA.length);
    }, SLIDE_DURATION);
    return () => { if (slideTimerRef.current) clearTimeout(slideTimerRef.current); };
  }, [currentSlide, sliderPaused]);

  const onTouchStart = (e) => { touchRef.current.startX = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchRef.current.startX === null) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    if (Math.abs(dx) > 50) goToSlide(currentSlide + (dx < 0 ? 1 : -1));
    touchRef.current.startX = null;
  };

  const SLIDER_BTN = "swiper-button-custom bg-white/10 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-[rgba(143,203,242,.3)] hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";

  return (
    <section id="vision" className="relative py-16 sm:py-20 md:py-24 bg-[#08111F] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="sec-badge inline-block">What drives us</span>
          <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
            Redefining the market,{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#8FCBF2] bg-clip-text text-transparent">
              one brand at a time.
            </span>
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
              className={`absolute inset-0 grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-8 md:gap-10 px-5 sm:px-8 md:px-16 pt-8 sm:pt-12 md:pt-16 pb-24 sm:pb-28 md:pb-32 items-center transition-all duration-700 ${
                currentSlide === i ? 'cb-slide-active opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <div className="text-center md:text-left">
                <span className="sec-badge inline-flex items-center gap-2 sm:gap-3 text-[#8FCBF2]">
                  <i className="w-5 sm:w-7 h-[1.5px] bg-[#F09A36]" />
                  {slide.tag}
                </span>
                <h3 className="sec-h2 my-4 sm:my-5 text-white">{slide.title}</h3>
                <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-[#E4EEF7] max-w-[620px] mx-auto md:mx-0 text-lg sm:text-xl md:text-2xl lg:text-[clamp(24px,2.4vw,34px)]" style={{ lineHeight: 1.25 }}>
                  {slide.state}
                </p>
                <ul className="mt-6 sm:mt-8 grid gap-3 sm:gap-3.5 max-w-[600px] mx-auto md:mx-0 text-left">
                  {slide.points.map((pt, k) => (
                    <li key={k} className="sec-p mb-0 flex gap-3 sm:gap-3.5 items-start text-[#B8C7D8]">
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
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white swiper-icon" />
              </button>
              <button onClick={() => goToSlide(currentSlide + 1)} aria-label="Next slide" className={SLIDER_BTN}>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white swiper-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 4. NINE PILLARS
// ============================================
const NinePillarsSection = () => {
  const carouselRef = useRef(null);
  const dragRef = useRef({ down: false, startX: 0, startL: 0 });

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

  const NAV_BTN = "swiper-button-custom bg-white/80 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-gray-200 hover:border-[#01ADF0] shadow-md transition-all duration-300 grid place-items-center";

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-[#F3F4F1] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="sec-badge inline-block">One engine · nine pillars</span>
          <h2 className="sec-h2 sec-text-dark mt-3 max-w-3xl mx-auto">
            Everything your brand needs,{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              under one roof.
            </span>
          </h2>
          <p className="sec-p sec-text-dark-soft mt-3 max-w-2xl mx-auto">
            From strategy and design to technology and growth — every capability your brand needs, working as one team.
          </p>
        </motion.div>

        <div className="relative">
          <div ref={carouselRef} className="cb-carousel flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory px-1 pb-4 cursor-grab">
            {SERVICES_DATA.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <article
                  key={svc.title}
                  className="pillar-card group flex-none snap-start bg-white border border-[#D9DDD6] rounded-3xl p-6 sm:p-7 w-[78vw] sm:w-[340px] md:w-[320px] min-h-[280px] sm:min-h-[330px] flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-[#0B1526] hover:border-[#0B1526] select-none"
                >
                  <span className="pointer-events-none absolute w-[260px] h-[260px] rounded-full -right-32 -bottom-36 transition-transform duration-500 group-hover:scale-[1.8]" style={{ background: 'radial-gradient(circle,rgba(13,134,207,.25),transparent 70%)' }} />
                  <div className="flex justify-between items-start relative z-10">
                    <span className="pillar-icon-box w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E3F0FA] text-[#0A5E93] grid place-items-center transition-all duration-500 group-hover:-rotate-6">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <span className="pillar-num font-['Instrument_Serif'] italic text-2xl sm:text-3xl text-[#6B7585] transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="pillar-title sec-h3 sec-text-dark relative z-10 mt-auto pt-8 sm:pt-10 transition-colors duration-500">
                    {svc.title}
                  </h3>
                  <p className="pillar-desc sec-p sec-text-dark-soft relative z-10 mt-3 mb-0 transition-colors duration-500">
                    {svc.desc}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="flex justify-center gap-2.5 mt-6 sm:mt-8">
            <button onClick={() => scrollCarousel(-1)} aria-label="Scroll left" className={NAV_BTN}>
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 swiper-icon" />
            </button>
            <button onClick={() => scrollCarousel(1)} aria-label="Scroll right" className={NAV_BTN}>
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 swiper-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 5. OUR VALUES
// ============================================
const OurValuesAndMission = () => {
  const values = [
    { title: 'Innovation',    desc: 'We thrive on creative solutions using modern technologies.',  bg: '#003F7D' },
    { title: 'Integrity',     desc: 'Honesty and transparency guide our actions.',                  bg: '#166534' },
    { title: 'Quality',       desc: 'We prioritise delivering reliable, high-performing products.', bg: '#9A3412' },
    { title: 'Client Focus',  desc: 'Your business goals are our top priority.',                     bg: '#9D174D' },
    { title: 'Collaboration', desc: 'We believe in the power of teamwork and open communication.',   bg: '#374151' },
    { title: 'Adaptability',  desc: 'We embrace change and move quickly with evolving trends.',      bg: '#6B21A8' },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden border-0">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block">Our Values</motion.span>
          <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
            What We{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Stand For
            </span>
          </motion.h2>
          <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
            The principles that guide every project, partnership, and decision we make
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="h-full"
            >
              <div className="value-card group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />

                <div className="relative z-10">
                  <div className="flex items-start mb-4">
                    <div
                      className="value-icon-box relative w-10 h-10 rounded-lg flex items-center justify-center mr-4 shrink-0 transition-colors duration-500"
                      style={{ backgroundColor: value.bg }}
                    >
                      <CircleCheck size={22} className="text-white" />
                    </div>

                    <h3 className="value-title sec-h3 sec-text-dark transition-colors duration-500 mb-0">
                      {value.title}
                    </h3>
                  </div>

                  <p className="value-desc sec-p sec-text-dark-soft transition-colors duration-500 mb-0">
                    {value.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 6. CLOSING CTA
// ============================================
const ClosingCTA = () => {
  return (
    <section id="contact" className="relative bg-[#0A5E93] text-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <svg className="absolute right-4 sm:right-6 md:right-[6%] top-16 sm:top-24 md:top-32 w-28 h-28 sm:w-40 sm:h-40 md:w-72 md:h-72 opacity-40 sm:opacity-50 md:opacity-95" viewBox="0 0 300 300" aria-hidden="true">
        <defs>
          <path id="cb-circ2" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" />
        </defs>
        <circle cx="150" cy="150" r="146" fill="none" stroke="rgba(255,255,255,.35)" />
        <circle cx="150" cy="150" r="92" fill="none" stroke="rgba(255,255,255,.2)" strokeDasharray="3 7" />
        <g style={{ transformOrigin: '150px 150px', animation: 'cbSpinCW 24s linear infinite' }}>
          <text style={{ font: '800 15px DM Sans, sans-serif', letterSpacing: '.3em', fill: '#fff' }}>
            <textPath href="#cb-circ2">BUILD • SCALE • TRANSFORM • MADE IN INDIA • </textPath>
          </text>
        </g>
        <text x="150" y="162" textAnchor="middle" style={{ font: '800 40px DM Sans, sans-serif', fill: '#fff' }}>CB</text>
        <rect x="118" y="176" width="21.3" height="5" fill="#F09A36" />
        <rect x="139.3" y="176" width="21.4" height="5" fill="#fff" />
        <rect x="160.7" y="176" width="21.3" height="5" fill="#2E8B57" />
      </svg>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="sec-badge inline-block">Let's build together</span>
          <h2 className="sec-h2 mt-3 max-w-3xl mx-auto text-white">
            Have a digital idea in mind?{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#B8E2FF] bg-clip-text text-transparent">
              Let's turn it into reality.
            </span>
          </h2>
          <p className="sec-p mt-3 max-w-2xl mx-auto text-white/80">
            CoderBox Digital · Human-Centered. AI-Driven.
          </p>
        </motion.div>

        <div className="text-center font-['Space_Grotesk'] font-extrabold tracking-[-.06em]" style={{ fontSize: 'clamp(48px,14vw,190px)', lineHeight: .9 }}>
          <span className="block">BUILD.</span>
          <span className="block" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,.3) 0%, #fff 30%, rgba(255,255,255,.3) 60%)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>SCALE.</span>
          <span className="font-['Instrument_Serif'] italic font-normal tracking-[-.03em] text-[#8FCBF2] block">Transform.</span>
        </div>

        <div className="flex flex-col items-center gap-6 sm:gap-8 mt-10 sm:mt-14">
          <p className="sec-p mb-0 font-['Instrument_Serif'] italic text-white text-center text-xl sm:text-2xl md:text-3xl" style={{ lineHeight: 1.25 }}>
            Your Expertise. Our Strategy. Your Growth.
          </p>
          <Link to="/contact" className="sec-btn bg-white text-[#0B1526] shadow-none hover:bg-[#F09A36] hover:text-[#0B1526]">
            Connect With CoderBox
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SlideArt
// ============================================
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
        <text x="190" y="330" textAnchor="middle" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>RISING · GLOBAL</text>
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
        <text x="118" y="120" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>BUILD</text>
        <text x="228" y="120" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>SCALE</text>
        <text x="152" y="268" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>TRANSFORM</text>
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
        <text x="226" y="325" fill="#CFE6F7" style={{ font: '700 12px DM Sans, sans-serif', letterSpacing: '.12em' }}>THE OLD CURVE ↗ BROKEN</text>
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
        {[[70,120],[320,200],[110,280],[290,70]].map(([x, y], i) => (
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

// ============================================
// MAIN
// ============================================
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <SharedStyles />
      <AboutHero />
      <AboutContent />
      <WhatDrivesUs />
      <NinePillarsSection />
      <OurValuesAndMission />
      <ClosingCTA />
    </div>
  );
};

export default AboutUs;