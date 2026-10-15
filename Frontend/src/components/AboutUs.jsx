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
// // ABOUT-US-THEMED HERO PARTICLES
// // ============================================
// const HERO_GLYPHS = ['✦', '★', '◆', '↑', '→', '⚡', '♥', '✓', '☺', '⌘', '✦', '◆'];

// const HERO_TAGS = [
//   'VISION',
//   'MISSION',
//   'VALUES',
//   'TEAM',
//   'CREATIVITY',
//   'INNOVATION',
//   'INDIA → GLOBAL',
//   'SINCE 2014',
// ];

// const HERO_ICONS = [
//   { Icon: Users,      label: 'Team',       color: '#00C6FB' },
//   { Icon: Target,     label: 'Mission',    color: '#F09A36' },
//   { Icon: TrendingUp, label: 'Growth',     color: '#4ADE80' },
//   { Icon: Palette,    label: 'Creativity', color: '#B9A3F0' },
//   { Icon: Globe,      label: 'Global',     color: '#8FCBF2' },
//   { Icon: Quote,      label: 'Culture',    color: '#F09A36' },
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

//     .pillar-card:hover .pillar-title { color: #ffffff !important; }
//     .pillar-card:hover .pillar-desc  { color: rgba(255,255,255,0.78) !important; }
//     .pillar-card:hover .pillar-icon-box {
//       background-color: #0D86CF !important;
//       color: #ffffff !important;
//     }
//     .pillar-card:hover .pillar-num { color: #8FCBF2 !important; }

//     .value-card:hover .value-title { color: #111827 !important; }
//     .value-card:hover .value-desc  { color: #1f2937 !important; }
//     .value-card:hover .value-icon-box { background-color: #003F7D !important; }
//   `}</style>
// );

// // ============================================
// // 1. HERO — original orbs + about-themed particles
// // ============================================
// const AboutHero = () => {
//   return (
//     <section
//       className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
//       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
//     >
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* Central glow */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }} />
//         {/* Vignette */}
//         <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />

//         {/* ============ ORIGINAL FLOATING ORBS (circles) ============ */}
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

//         {/* ============ ABOUT-THEMED ICON CHIPS ============ */}
//         {HERO_ICONS.map(({ Icon, label, color }, i) => {
//           const positions = [
//             { top: '12%', left: '6%' },
//             { top: '68%', left: '8%' },
//             { top: '22%', right: '7%' },
//             { top: '72%', right: '9%' },
//             { top: '44%', left: '4%' },
//             { top: '58%', right: '5%' },
//           ];
//           const pos = positions[i] || { top: '50%', left: '50%' };
//           const dur = 8 + (i % 3) * 2;
//           const delay = (i % 4) * 1.2;
//           return (
//             <motion.div
//               key={label}
//               className="absolute flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[.06] px-3 py-2 backdrop-blur-sm select-none"
//               style={{
//                 ...pos,
//                 boxShadow: `0 10px 30px -12px ${color}55`,
//               }}
//               animate={{
//                 y: [0, -18, 0, 14, 0],
//                 x: [0, 10, 0, -8, 0],
//                 rotate: [0, 4, 0, -4, 0],
//               }}
//               transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
//             >
//               <span
//                 className="grid h-7 w-7 flex-none place-items-center rounded-full"
//                 style={{ background: `${color}22`, border: `1px solid ${color}55`, color }}
//               >
//                 <Icon className="h-3.5 w-3.5" />
//               </span>
//               <span
//                 className="text-[10px] font-bold uppercase tracking-[.16em]"
//                 style={{ color: `${color}` }}
//               >
//                 {label}
//               </span>
//             </motion.div>
//           );
//         })}

//         {/* ============ ROTATING WIREFRAME ============ */}
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

//         {/* ============ FLOATING GLYPHS ============ */}
//         {HERO_GLYPHS.map((glyph, i) => {
//           const top = 8 + ((i * 41) % 84);
//           const left = 4 + ((i * 59) % 90);
//           const size = 14 + (i % 4) * 6;
//           const dur = 6 + (i % 5) * 1.6;
//           const delay = (i % 6) * 0.8;
//           return (
//             <motion.span
//               key={`g-${i}`}
//               className="absolute select-none font-['Space_Grotesk'] font-bold"
//               style={{
//                 top: `${top}%`,
//                 left: `${left}%`,
//                 fontSize: `${size}px`,
//                 color: 'rgba(143,203,242,0.42)',
//                 textShadow: '0 0 14px rgba(1,173,240,0.55)',
//               }}
//               animate={{
//                 y: [0, -22, 0, 18, 0],
//                 x: [0, 12, 0, -10, 0],
//                 opacity: [0.15, 0.75, 0.15],
//                 rotate: [0, 8, 0, -8, 0],
//               }}
//               transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
//             >
//               {glyph}
//             </motion.span>
//           );
//         })}

//         {/* ============ SPARKLE DUST ============ */}
//         {[...Array(10)].map((_, i) => {
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

//         {/* ============ ORBITING TAG CHIPS ============ */}
//         <motion.div
//           className="absolute top-1/2 left-1/2 hidden lg:block"
//           style={{ width: 720, height: 720, translateX: '-50%', translateY: '-50%' }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
//         >
//           {HERO_TAGS.map((label, i) => {
//             const angle = (i * 360) / HERO_TAGS.length;
//             const rad = (angle * Math.PI) / 180;
//             const x = 360 + Math.cos(rad) * 360;
//             const y = 360 + Math.sin(rad) * 360;
//             return (
//               <motion.div
//                 key={`tag-${label}`}
//                 className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[.16em] text-[#B8E2FF] backdrop-blur-sm whitespace-nowrap"
//                 style={{ left: x, top: y }}
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
//               >
//                 {label}
//               </motion.div>
//             );
//           })}
//         </motion.div>
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






import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Briefcase,
  Quote, CheckCircle, Play, X, ArrowRight,
  CircleCheck, Globe,
  ChevronLeft, ChevronRight,
  Palette, Code2, Bot, Target, TrendingUp, Search, RefreshCw, Users, BarChart3,
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
// SHARED STYLES  (Hover fixed for Mobile + Desktop)
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

    /* ====== DESKTOP / LAPTOP (Mouse hover) ====== */
    @media (hover: hover) and (pointer: fine) {
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
    }

    /* ====== MOBILE / TABLET (Touch tap) ====== */
    @media (hover: none) {
      .pillar-card:active .pillar-title { color: #ffffff !important; }
      .pillar-card:active .pillar-desc  { color: rgba(255,255,255,0.78) !important; }
      .pillar-card:active .pillar-icon-box {
        background-color: #0D86CF !important;
        color: #ffffff !important;
      }
      .pillar-card:active .pillar-num { color: #8FCBF2 !important; }

      .value-card:active .value-title { color: #111827 !important; }
      .value-card:active .value-desc  { color: #1f2937 !important; }
      .value-card:active .value-icon-box { background-color: #003F7D !important; }
    }
  `}</style>
);

// ============================================
// 1. HERO
// ============================================
const AboutHero = () => {
  return (
    <section
      className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
      style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />

        {/* ORBS */}
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

        {/* ICON CHIPS */}
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

        {/* ROTATING WIREFRAME */}
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

        {/* GLYPHS */}
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

        {/* SPARKLE DUST */}
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

        {/* ORBITING TAGS */}
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

  const goToSlide = (i) => {
    setCurrentSlide(((i % SLIDES_DATA.length) + SLIDES_DATA.length) % SLIDES_DATA.length);
  };

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