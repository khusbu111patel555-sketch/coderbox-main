// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import {
// //   MapPin, Mail, Briefcase,
// //   Quote, Phone, CheckCircle, Play, X, ArrowRight,
// //   MessageSquare, Clock, AlertCircle, CircleCheck, Globe
// // } from 'lucide-react';
// // import { supabase } from "../lib/supabaseClient";

// // // ============================================
// // // 1. HERO SECTION
// // // ============================================
// // const AboutHero = () => {
// //   return (
// //     <section
// //       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 pb-14"
// //       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
// //     >
// //       {/* ===== BACKGROUND SHAPES ===== */}
// //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //         <div
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
// //           style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
// //         />

// //         <div
// //           className="absolute inset-0"
// //           style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
// //         />

// //         <motion.div
// //           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
// //           style={{
// //             background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
// //             boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
// //             filter: 'blur(2px)',
// //           }}
// //           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
// //           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
// //         />

// //         <motion.div
// //           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
// //           style={{
// //             background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
// //             boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
// //             filter: 'blur(2px)',
// //           }}
// //           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
// //           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
// //         />

// //         <motion.div
// //           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
// //           style={{
// //             background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
// //             boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
// //             filter: 'blur(2px)',
// //           }}
// //           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
// //           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
// //         />

// //         <motion.svg
// //           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70"
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

// //         <motion.div
// //           className="absolute top-[22%] right-[10%] w-[110px] h-[110px] rounded-2xl"
// //           style={{ background: 'linear-gradient(135deg, rgba(77, 211, 255, 0.18) 0%, rgba(1, 173, 240, 0.03) 100%)', boxShadow: '0 0 40px rgba(77, 211, 255, 0.1)', border: '1px solid rgba(77, 211, 255, 0.15)', transform: 'rotate(45deg)' }}
// //           animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
// //           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
// //         />

// //         <motion.div
// //           className="absolute bottom-[25%] right-[20%] w-[130px] h-[130px] rounded-2xl"
// //           style={{ background: 'linear-gradient(135deg, rgba(0, 198, 251, 0.18) 0%, rgba(0, 143, 209, 0.03) 100%)', boxShadow: '0 0 40px rgba(0, 198, 251, 0.1)', border: '1px solid rgba(0, 198, 251, 0.15)', transform: 'rotate(-20deg)' }}
// //           animate={{ rotate: [-20, -10, -20], y: [0, -30, 0] }}
// //           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
// //         />

// //         {[...Array(18)].map((_, i) => {
// //           const size = Math.random() * 3 + 2;
// //           return (
// //             <motion.div
// //               key={i}
// //               className="absolute rounded-full"
// //               style={{
// //                 top: `${Math.random() * 100}%`,
// //                 left: `${Math.random() * 100}%`,
// //                 width: `${size}px`,
// //                 height: `${size}px`,
// //                 background: 'rgba(180, 230, 255, 0.9)',
// //                 boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
// //               }}
// //               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
// //               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
// //             />
// //           );
// //         })}
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
// //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
// //             About Us
// //           </motion.span>

// //           <motion.h2
// //             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
// //             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.15 }}
// //           >
// //             Your Journey of Digital Transformation Begins Here! <br />
// //             <span className="bg-gradient-to-r from-[#33D6FF] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
// //           </motion.h2>

// //           <motion.p
// //             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
// //             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           >
// //             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
// //           </motion.p>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 2. ABOUT CONTENT SECTION (Video + Founder Info)
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
// //     { number: "03", label: "VENTURES LED" },
// //     { number: "06", label: "INDUSTRIES" },
// //   ];

// //   const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
// //   const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
// //   const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

// //   return (
// //     <section className="py-8 sm:py-10 md:py-12 bg-[#E6F8FF] relative overflow-hidden">
// //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //         <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">

// //           {/* ===== LEFT SIDE: Video & Image Block ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -150, rotate: -5 }}
// //             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
// //             viewport={{ once: true, amount: 0.3 }}
// //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
// //             className="relative flex justify-center"
// //           >
// //             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
// //               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>

// //               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
// //                 <div className="relative w-full h-full">
// //                   <img
// //                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
// //                     alt="CoderBox Team"
// //                     className="w-full h-full object-cover"
// //                   />
// //                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
// //                 </div>
// //               </div>

// //               <button
// //                 onClick={() => setIsVideoOpen(true)}
// //                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20"
// //               >
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

// //               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
// //                 <svg viewBox="0 0 100 100" className="w-full h-full">
// //                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01ADF0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
// //                 </svg>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* ===== RIGHT SIDE: Founder Information ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 150 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, amount: 0.3 }}
// //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
// //             className="relative"
// //           >
// //             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#01ADF0]/10 rounded-full blur-[100px] pointer-events-none" />
// //             <div
// //               className="absolute inset-0 opacity-[0.04] pointer-events-none"
// //               style={{
// //                 backgroundImage:
// //                   'linear-gradient(#003F7D 1px, transparent 1px), linear-gradient(90deg, #003F7D 1px, transparent 1px)',
// //                 backgroundSize: '40px 40px',
// //                 maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// //                 WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
// //               }}
// //             />

// //             <div className="relative">
// //               {/* Badge */}
// //               <motion.span
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 0.3 }}
// //                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0] text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#01ADF0]/30"
// //               >
// //                 <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
// //                 Leadership
// //               </motion.span>

// //               {/* Heading */}
// //               <motion.h2
// //                 initial={{ opacity: 0, y: 15 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 0.4 }}
// //                 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003F7D] leading-[1.15] tracking-tight"
// //               >
// //                 MEET OUR{" "}
// //                 <span className="relative inline-block">
// //                   <span className="bg-gradient-to-r from-[#00C6FB] via-[#01ADF0] to-[#006FA6] bg-clip-text text-transparent">
// //                     FOUNDER
// //                   </span>
// //                   <motion.span
// //                     initial={{ width: 0 }}
// //                     whileInView={{ width: "100%" }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: 0.9, duration: 0.6 }}
// //                     className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-[#00C6FB] to-[#01ADF0]"
// //                   />
// //                 </span>
// //               </motion.h2>

// //               {/* Name / title line */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 0.5 }}
// //                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
// //               >
// //                 <span className="text-lg font-bold text-[#003F7D]">{founderData.name}</span>
// //                 <span className="text-xs text-gray-500 font-medium">{founderData.alias}</span>
// //                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
// //                 <span className="text-[11px] font-bold tracking-[0.15em] text-[#01ADF0] uppercase">
// //                   {founderData.title}
// //                 </span>
// //               </motion.div>

// //               {/* Bio */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 15 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 0.6 }}
// //                 className="space-y-3.5 text-[15px] sm:text-base text-gray-700 leading-relaxed mt-6"
// //               >
// //                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
// //                 <p>{founderData.bio2}</p>
// //                 <p>{founderData.bio3}</p>
// //               </motion.div>

// //               {/* Stats */}
// //               <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
// //                 {stats.map((stat, idx) => (
// //                   <motion.div
// //                     key={idx}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ delay: 0.7 + idx * 0.1, type: "spring", stiffness: 120 }}
// //                     whileHover={{ y: -6 }}
// //                     className="group relative bg-white rounded-2xl p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
// //                   >
// //                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
// //                     <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent mb-1">
// //                       {stat.number}
// //                     </p>
// //                     <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">
// //                       {stat.label}
// //                     </p>
// //                   </motion.div>
// //                 ))}
// //               </div>

// //               {/* Ventures Led */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 1.0 }}
// //                 className="mt-8"
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <Briefcase size={16} className="text-[#01ADF0]" />
// //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Ventures Led</h4>
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
// //                       <span className="absolute top-2 right-3 text-[10px] font-bold text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors">
// //                         0{i + 1}
// //                       </span>
// //                       <p className="text-xs sm:text-[13px] font-bold text-[#003F7D] pr-6 leading-snug">{v}</p>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </motion.div>

// //               {/* Worked Across */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 1.1 }}
// //                 className="mt-7"
// //               >
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <Globe size={16} className="text-[#01ADF0]" />
// //                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Worked Across</h4>
// //                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
// //                 </div>
// //                 <div className="flex flex-wrap gap-2">
// //                   {industries.map((ind, i) => (
// //                     <motion.span
// //                       key={i}
// //                       whileHover={{ scale: 1.06, y: -2 }}
// //                       transition={{ type: "spring", stiffness: 400 }}
// //                       className="px-3.5 py-1.5 bg-white text-[#003F7D] text-[11px] font-bold tracking-wide rounded-full border border-[#01ADF0]/25 hover:border-[#01ADF0] hover:bg-[#01ADF0] hover:text-white hover:shadow-lg hover:shadow-[#01ADF0]/30 transition-colors duration-300 cursor-default"
// //                     >
// //                       {ind}
// //                     </motion.span>
// //                   ))}
// //                 </div>
// //               </motion.div>

// //               {/* Founder's Note */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 25 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 1.2 }}
// //                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
// //                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
// //               >
// //                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
// //                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />

// //                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />

// //                 <div className="relative z-10">
// //                   <div className="flex items-center gap-2 mb-3">
// //                     <span className="w-6 h-px bg-[#01ADF0]" />
// //                     <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#01ADF0] uppercase">
// //                       Founder's Note
// //                     </h4>
// //                   </div>

// //                   <p className="italic text-[15px] sm:text-base text-white leading-relaxed mb-3">
// //                     "Technology should create meaningful business value."
// //                   </p>
// //                   <p className="text-xs text-white/70 leading-relaxed mb-5">
// //                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
// //                   </p>

// //                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
// //                     {principles.map((p, i) => (
// //                       <motion.div
// //                         key={i}
// //                         initial={{ opacity: 0, x: -8 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ delay: 1.4 + i * 0.12 }}
// //                         className="flex items-center gap-2"
// //                       >
// //                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
// //                         <span className="text-[11px] font-bold tracking-wider text-white/90">{p}</span>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* Video Modal */}
// //       {isVideoOpen && (
// //         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
// //           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
// //             <X className="h-6 w-6 text-white" />
// //           </button>
// //           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
// //             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
// //           </motion.div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // // ============================================
// // // 3. VISION & MISSION SECTION
// // // ============================================
// // const VisionMission = () => {
// //   const items = [
// //     { title: 'Our Vision', icon: 'eye', content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.' },
// //     { title: 'Our Mission', icon: 'target', content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.' }
// //   ];

// //   return (
    
// //       <div className="relative pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
// //         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
// //         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

// //         <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //           <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
// //             {items.map((item, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: idx * 0.2 }}
// //                 className="text-center group"
// //               >
// //                 <motion.div
// //                   className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 flex items-center justify-center"
// //                   whileHover={{ scale: 1.08, rotate: 5 }}
// //                   transition={{ type: "spring", stiffness: 300 }}
// //                 >
// //                   <motion.div
// //                     className="absolute inset-0 rounded-full"
// //                     style={{ background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)', padding: '3px' }}
// //                     animate={{ rotate: 360 }}
// //                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
// //                   >
// //                     <div className="w-full h-full rounded-full bg-white"></div>
// //                   </motion.div>
// //                   <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>
// //                   <motion.div
// //                     className="absolute inset-4 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
// //                     animate={{ scale: [1, 1.15, 1] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                   ></motion.div>

// //                   <div className="relative z-10">
// //                     <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                       <defs>
// //                         <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
// //                           <stop offset="0%" stopColor="#01adf0" />
// //                           <stop offset="100%" stopColor="#a855f7" />
// //                         </linearGradient>
// //                       </defs>
// //                       {item.icon === 'eye' ? (
// //                         <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //                           <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
// //                           <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
// //                           <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
// //                           <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
// //                         </g>
// //                       ) : (
// //                         <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //                           <circle cx="12" cy="12" r="10" />
// //                           <circle cx="12" cy="12" r="6" />
// //                           <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
// //                           <path d="m16 8 4-4" />
// //                           <path d="M20 4v4h-4" />
// //                         </g>
// //                       )}
// //                     </svg>
// //                   </div>
// //                 </motion.div>

// //                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#01adf0] transition-colors duration-300">
// //                   {item.title}
// //                 </h3>

// //                 <motion.div
// //                   className="w-14 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-3"
// //                   whileHover={{ width: 80 }}
// //                 ></motion.div>

// //                 <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
// //                   {item.content}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //   );
// // };

// // // ============================================
// // // 4. OUR JOURNEY SECTION
// // // ============================================
// // const HowWeWork = () => {
// //   const journeyData = [
// //     [
// //       { date: 'May 2024', shortDate: 'MAY 24', desc: 'TheCoderBox CMMI Level 3 Appraised' },
// //       { date: 'Nov 15 2018', shortDate: 'NOV 18', desc: 'TheCoderBox undergoing CMMI Level 3 Re-Appraisal Process' },
// //       { date: 'OCT 30 2018', shortDate: 'OCT 30', desc: 'ISO 27001:2013 Certification - TheCoderBox is Awarded ISO 27001:2013 Certification by BSI' },
// //     ],
// //     [
// //       { date: 'SEP 20 2018', shortDate: 'SEP 20', desc: 'ISO 9001:2015 Certification - TheCoderBox is Awarded ISO 9001:2015 Certification by BSI' },
// //       { date: 'November 21, 2017', shortDate: 'NOV 17', desc: 'TheCoderBox Ranked Among Top 50 Fastest Growing Tech Companies 2017' },
// //       { date: 'September 27, 2017', shortDate: 'SEP 27', desc: 'Company Recognized by Insight Success Magazine as 10 Best Google Partners to Watch in 2017' },
// //     ],
// //     [
// //       { date: 'August 5, 2017', shortDate: 'AUG 5', desc: 'Won a Recognition as 30 Fastest Growing Companies in India 2017' },
// //       { date: 'December 12, 2016', shortDate: 'DEC 12', desc: 'TheCoderBox to Build an Automated Platform for European Telecom Service Provider' },
// //       { date: 'December 6, 2016', shortDate: 'DEC 6', desc: 'TheCoderBox Releases "Threat Manage" a Cloud-based Security Management Platform' },
// //     ],
// //     [
// //       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP Community: "Technology Pavilion"' },
// //       { date: 'August 1, 2016', shortDate: 'AUG 1', desc: 'TheCoderBox Releases "Managed Cloud Platform" for IoT Businesses' },
// //       { date: 'June 10, 2016', shortDate: 'JUN 10', desc: 'TheCoderBox Becomes a Member of MSPAlliance' },
// //     ],
// //     [
// //       { date: 'February 2016', shortDate: 'FEB 16', desc: 'TheCoderBox is an Oracle Silver Partner for the Second Time in a Row' },
// //       { date: 'October 30, 2015', shortDate: 'OCT 30', desc: 'TheCoderBox Awarded ISO 27001 Certificate' },
// //       { date: 'December 26, 2014', shortDate: 'DEC 26', desc: 'TheCoderBox Earns CMMI® Maturity Level 3 Appraisal' },
// //     ],
// //     [
// //       { date: '2013', shortDate: '2013', desc: 'TheCoderBox becomes a Microsoft Gold Partner in 2013' },
// //       { date: 'Quality Brands Award', shortDate: '2013-2015', desc: 'TheCoderBox Bestowed With Quality Brands Award 2013-2015' },
// //       { date: 'ISO 9001:2008 Certification', shortDate: '2013-2015', desc: 'TheCoderBox certified with ISO 9001:2008 in 2013' },
// //     ],
// //     [
// //       { date: 'October 1, 2012', shortDate: 'OCT 1', desc: 'TheCoderBox becomes a Successful NASSCOM Member' },
// //     ]
// //   ];

// //   return (
// //     <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 lg:pt-10 lg:pb-12 bg-white relative overflow-hidden">
// //       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// //       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Journey</motion.span>
// //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// //             TheCoderBox{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Journey</span>
// //           </motion.h2>
// //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// //             Our milestones and achievements that define who we are today
// //           </motion.p>
// //         </motion.div>

// //         <div className="relative max-w-6xl mx-auto">
// //           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>
// //           {journeyData.map((row, rowIdx) => (
// //             <div key={rowIdx} className="relative mb-12 last:mb-0">
// //               <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
// //                 <path d={rowIdx % 2 === 0 ? "M 0 50 Q 300 0 600 50 T 1200 50" : "M 0 50 Q 300 100 600 50 T 1200 50"} stroke="#01ADF0" strokeWidth="2" strokeDasharray="6 8" fill="none" strokeLinecap="round" opacity="0.35" />
// //               </svg>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
// //                 {row.map((item, idx) => (
// //                   <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="flex flex-col items-center text-center group">
// //                     <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
// //                       <div className="absolute inset-0 rounded-full bg-[#01ADF0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
// //                       <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C6FB]/40" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}></motion.div>
// //                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#008FD1] flex items-center justify-center shadow-2xl shadow-[#01ADF0]/40 border-4 border-white">
// //                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
// //                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
// //                         <div className="text-center px-2 relative z-10">
// //                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">{item.shortDate}</p>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                     <motion.div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01ADF0]/30 group-hover:-translate-y-2">
// //                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-b-full"></div>
// //                       <h4 className="sec-h3 sec-text-dark mb-3 mt-2">{item.date}</h4>
// //                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] mx-auto mb-4 rounded-full"></div>
// //                       <p className="sec-p sec-text-dark-soft leading-relaxed">{item.desc}</p>
// //                     </motion.div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 5. OUR VALUES SECTION
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
// //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
// //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Values</motion.span>
// //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// //             What We{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Stand For</span>
// //           </motion.h2>
// //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// //             The principles that guide every project, partnership, and decision we make
// //           </motion.p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {values.map((value, idx) => (
// //             <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="h-full">
// //               <div className="group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/20">
// //                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out"></div>
// //                 <div className="relative z-10">
// //                   <div className="flex items-start mb-4">
// //                     <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white shrink-0" style={{ backgroundColor: value.bg }}>
// //                       <CircleCheck size={22} className="text-white" />
// //                     </div>
// //                     <h3 className="sec-h3 sec-text-dark transition-colors duration-500 group-hover:text-black">{value.title}</h3>
// //                   </div>
// //                   <p className="text-[15px] text-gray-700 leading-relaxed font-medium transition-colors duration-500 group-hover:text-black/90">{value.desc}</p>
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
// // // 6. CONTACT US SECTION
// // // ============================================
// // const ContactUsSection = () => {
// //   const locations = [
// //     { id: 1, city: "Bengaluru", country: "India", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
// //   ];

// //   const [selectedLocation] = useState(locations[0]);
// //   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// //   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
// //   const [isSuccess, setIsSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === "phone") {
// //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }
// //     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
// //   };

// //   const validateForm = () => {
// //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// //     let isValid = true;
// //     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
// //     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
// //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
// //     if (!formData.phone.trim()) { newErrors.phone = "Please enter your phone number."; isValid = false; }
// //     else if (!/^[6-9]\d{9}$/.test(formData.phone)) { newErrors.phone = "Please enter a valid 10-digit mobile number."; isValid = false; }
// //     if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
// //     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;
// //     setIsLoading(true);
// //     try {
// //       const { data, error } = await supabase.from("contacts").insert([{ name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message }]);
// //       if (error) throw error;
// //       setIsSuccess(true);
// //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
// //       setTimeout(() => setIsSuccess(false), 5000);
// //     } catch (error) {
// //       console.error("Supabase Error:", error);
// //       setErrors((prev) => ({ ...prev, message: "Failed to send message to database. Please try again later." }));
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
// //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// //         <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// //         <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// //       </div>

// //       <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-16">
// //         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
// //           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Contact Us</motion.span>
// //           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
// //             Get in{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Touch</span>
// //           </motion.h2>
// //           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
// //             Have a project in mind? Reach out to us for a free consultation.
// //           </motion.p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
// //           <div className="lg:col-span-7 flex flex-col">
// //             <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// //               <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />
// //               <div className="relative">
// //                 <h3 className="sec-h3 sec-text-dark mb-5">Send Us a Message</h3>
// //                 <AnimatePresence>
// //                   {isSuccess && (
// //                     <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 16 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
// //                       <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// //                         <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// //                         <div>
// //                           <p className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</p>
// //                           <p className="mt-0.5 text-xs text-emerald-700">Thank you! We'll get back to you soon.</p>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>

// //                 <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //                   <div>
// //                     <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
// //                     <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.name ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// //                     <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.name}</motion.p>}</AnimatePresence>
// //                   </div>

// //                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// //                     <div>
// //                       <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
// //                       <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.email ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// //                       <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.email}</motion.p>}</AnimatePresence>
// //                     </div>
// //                     <div>
// //                       <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
// //                       <input id="phone" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.phone ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// //                       <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.phone}</motion.p>}</AnimatePresence>
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
// //                     <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.service ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`}>
// //                       <option value="">Select a service</option>
// //                       <option value="Mobile App Development">Mobile App Development</option>
// //                       <option value="Website Development">Website Development</option>
// //                       <option value="Custom Software">Custom Software</option>
// //                       <option value="UI/UX Design">UI/UX Design</option>
// //                       <option value="Cloud & Hosting">Cloud & Hosting</option>
// //                       <option value="Maintenance & Support">Maintenance & Support</option>
// //                       <option value="Other">Other</option>
// //                     </select>
// //                     <AnimatePresence>{errors.service && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.service}</motion.p>}</AnimatePresence>
// //                   </div>

// //                   <div>
// //                     <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
// //                     <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.message ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
// //                     <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.message}</motion.p>}</AnimatePresence>
// //                   </div>

// //                   <div className="pt-2">
// //                     <button type="submit" disabled={isLoading} className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${isLoading ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20" : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"}`}>
// //                       <span className="relative z-10">{isLoading ? "Sending..." : "Submit Inquiry"}</span>
// //                       {!isLoading && <ArrowRight size={17} className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
// //                       {!isLoading && <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />}
// //                     </button>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="lg:col-span-5 flex flex-col">
// //             <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// //               <div className="absolute right-0 top-0 h-full w-full opacity-10">
// //                 <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                 <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //               </div>
// //               <div className="relative">
// //                 <h3 className="sec-h3 text-white mb-4">Connect With Us</h3>
// //                 <p className="sec-p text-white/80 mb-6">We're available to answer your questions and help with your project.</p>
// //                 <div className="space-y-4">
// //                   <ContactItem icon={<Phone size={18} />} title="Phone" value="+91 8928809025" href="tel:+918928809025" />
// //                   <ContactItem icon={<MessageSquare size={18} />} title="WhatsApp" value="+91 8928809025" href="https://wa.me/918928809025" />
// //                   <ContactItem icon={<Mail size={18} />} title="Email" value="support@thecoderbox.com" href="mailto:support@thecoderbox.com" />
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
// //               <div className="space-y-5">
// //                 <div className="flex items-center">
// //                   <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><Clock size={18} /></div>
// //                   <div>
// //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Hours</h4>
// //                     <p className="sec-p sec-text-dark-soft">Monday - Saturday: 9AM - 7PM</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start">
// //                   <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><MapPin size={18} /></div>
// //                   <div>
// //                     <h4 className="sec-h3 sec-text-dark mb-1">Office Location</h4>
// //                     <p className="sec-p sec-text-dark-soft leading-6">{selectedLocation?.address}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const ContactItem = ({ icon, title, value, href }) => {
// //   return (
// //     <div className="flex items-center">
// //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
// //       <div>
// //         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
// //         <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="sec-p text-white/80 transition-colors duration-300 hover:text-white">{value}</a>
// //       </div>
// //     </div>
// //   );
// // };

// // // ============================================
// // // MAIN ABOUT US COMPONENT
// // // ============================================
// // const AboutUs = () => {
// //   return (
// //     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
// //       <AboutHero />
// //       <AboutContent />
// //       <VisionMission />
// //       <HowWeWork />
// //       <OurValuesAndMission />
// //       <ContactUsSection />
// //     </div>
// //   );
// // };

// // export default AboutUs;







// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin, Mail, Briefcase,
//   Quote, Phone, CheckCircle, Play, X, ArrowRight,
//   MessageSquare, Clock, AlertCircle, CircleCheck, Globe
// } from 'lucide-react';
// import { supabase } from "../lib/supabaseClient";

// // ============================================
// // 1. HERO SECTION
// // ============================================
// const AboutHero = () => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 pb-14"
//       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
//     >
//       {/* ===== BACKGROUND SHAPES ===== */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
//           style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
//         />
//         <motion.div
//           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
//             boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
//             filter: 'blur(2px)',
//           }}
//           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
//             boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
//             filter: 'blur(2px)',
//           }}
//           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
//             boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
//             filter: 'blur(2px)',
//           }}
//           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
//           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.svg
//           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70"
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
//         <motion.div
//           className="absolute top-[22%] right-[10%] w-[110px] h-[110px] rounded-2xl"
//           style={{ background: 'linear-gradient(135deg, rgba(77, 211, 255, 0.18) 0%, rgba(1, 173, 240, 0.03) 100%)', boxShadow: '0 0 40px rgba(77, 211, 255, 0.1)', border: '1px solid rgba(77, 211, 255, 0.15)', transform: 'rotate(45deg)' }}
//           animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute bottom-[25%] right-[20%] w-[130px] h-[130px] rounded-2xl"
//           style={{ background: 'linear-gradient(135deg, rgba(0, 198, 251, 0.18) 0%, rgba(0, 143, 209, 0.03) 100%)', boxShadow: '0 0 40px rgba(0, 198, 251, 0.1)', border: '1px solid rgba(0, 198, 251, 0.15)', transform: 'rotate(-20deg)' }}
//           animate={{ rotate: [-20, -10, -20], y: [0, -30, 0] }}
//           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         {[...Array(18)].map((_, i) => {
//           const size = Math.random() * 3 + 2;
//           return (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 background: 'rgba(180, 230, 255, 0.9)',
//                 boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
//               }}
//               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
//               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
//             />
//           );
//         })}
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
//           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
//             About Us
//           </motion.span>

//           <motion.h2
//             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
//             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.15 }}
//           >
//             Your Journey of Digital Transformation Begins Here! <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
//           </motion.h2>

//           <motion.p
//             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
//             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 2. ABOUT CONTENT SECTION
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
//     { number: "03", label: "VENTURES LED" },
//     { number: "06", label: "INDUSTRIES" },
//   ];

//   const ventures = ["CoderBox Digital", "LexEdge", "MedAgree Health"];
//   const industries = ["FINTECH", "HEALTHTECH", "EDTECH", "SAAS", "AUTOMATION", "ENTERPRISE TECH"];
//   const principles = ["THINK IN SYSTEMS", "EXECUTE WITH DISCIPLINE", "BUILD FOR LASTING IMPACT"];

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#E6F8FF] overflow-hidden">
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-12 items-center">

//           {/* ===== LEFT SIDE: Video & Image Block ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -150, rotate: -5 }}
//             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
//               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>

//               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
//                 <div className="relative w-full h-full">
//                   <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
//                     alt="CoderBox Team"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setIsVideoOpen(true)}
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20"
//               >
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

//               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
//                 <svg viewBox="0 0 100 100" className="w-full h-full">
//                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01ADF0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
//                 </svg>
//               </div>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE: Founder Information ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 150 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#01ADF0]/10 rounded-full blur-[100px] pointer-events-none" />
//             <div
//               className="absolute inset-0 opacity-[0.04] pointer-events-none"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(#003F7D 1px, transparent 1px), linear-gradient(90deg, #003F7D 1px, transparent 1px)',
//                 backgroundSize: '40px 40px',
//                 maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
//                 WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
//               }}
//             />

//             <div className="relative">
//               {/* Badge */}
//               <motion.span
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="sec-badge inline-block"
//               >
//                 Leadership
//               </motion.span>

//               {/* Heading */}
//               <motion.h2
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4 }}
//                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
//               >
//                 MEET OUR{" "}
//                 <span className="relative inline-block">
//                   <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//                     FOUNDER
//                   </span>
//                   <motion.span
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "100%" }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.9, duration: 0.6 }}
//                     className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-[#00C6FB] to-[#01ADF0]"
//                   />
//                 </span>
//               </motion.h2>

//               {/* Name / title line */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5 }}
//                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
//               >
//                 <span className="text-lg font-bold text-[#003F7D]">{founderData.name}</span>
//                 <span className="text-xs text-gray-500 font-medium">{founderData.alias}</span>
//                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
//                 <span className="text-[11px] font-bold tracking-[0.15em] text-[#01ADF0] uppercase">
//                   {founderData.title}
//                 </span>
//               </motion.div>

//               {/* Bio */}
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.6 }}
//                 className="space-y-3.5 sec-p sec-text-dark-soft mt-6 max-w-2xl"
//               >
//                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
//                 <p>{founderData.bio2}</p>
//                 <p>{founderData.bio3}</p>
//               </motion.div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
//                 {stats.map((stat, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.7 + idx * 0.1, type: "spring", stiffness: 120 }}
//                     whileHover={{ y: -6 }}
//                     className="group relative bg-white rounded-2xl p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
//                   >
//                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent mb-1">
//                       {stat.number}
//                     </p>
//                     <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">
//                       {stat.label}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Ventures Led */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1.0 }}
//                 className="mt-8"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Briefcase size={16} className="text-[#01ADF0]" />
//                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Ventures Led</h4>
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
//                       <span className="absolute top-2 right-3 text-[10px] font-bold text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors">
//                         0{i + 1}
//                       </span>
//                       <p className="text-xs sm:text-[13px] font-bold text-[#003F7D] pr-6 leading-snug">{v}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Worked Across */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1.1 }}
//                 className="mt-7"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Globe size={16} className="text-[#01ADF0]" />
//                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Worked Across</h4>
//                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {industries.map((ind, i) => (
//                     <motion.span
//                       key={i}
//                       whileHover={{ scale: 1.06, y: -2 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                       className="px-3.5 py-1.5 bg-white text-[#003F7D] text-[11px] font-bold tracking-wide rounded-full border border-[#01ADF0]/25 hover:border-[#01ADF0] hover:bg-[#01ADF0] hover:text-white hover:shadow-lg hover:shadow-[#01ADF0]/30 transition-colors duration-300 cursor-default"
//                     >
//                       {ind}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Founder's Note */}
//               <motion.div
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1.2 }}
//                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
//                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
//               >
//                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
//                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />

//                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />

//                 <div className="relative z-10">
//                   <div className="flex items-center gap-2 mb-3">
//                     <span className="w-6 h-px bg-[#01ADF0]" />
//                     <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#01ADF0] uppercase">
//                       Founder's Note
//                     </h4>
//                   </div>

//                   <p className="italic text-[15px] sm:text-base text-white leading-relaxed mb-3">
//                     "Technology should create meaningful business value."
//                   </p>
//                   <p className="text-xs text-white/70 leading-relaxed mb-5">
//                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
//                   </p>

//                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
//                     {principles.map((p, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, x: -8 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 1.4 + i * 0.12 }}
//                         className="flex items-center gap-2"
//                       >
//                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
//                         <span className="text-[11px] font-bold tracking-wider text-white/90">{p}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {isVideoOpen && (
//         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
//           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
//             <X className="h-6 w-6 text-white" />
//           </button>
//           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
//             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// };

// // ============================================
// // 3. VISION & MISSION SECTION
// // ============================================
// const VisionMission = () => {
//   const items = [
//     { title: 'Our Vision', icon: 'eye', content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.' },
//     { title: 'Our Mission', icon: 'target', content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.' }
//   ];

//   return (
//     <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-4 sm:mb-5 md:mb-6">
//           <span className="sec-badge inline-block">Our Vision & Mission</span>
//           <h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
//             What Drives{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Us Forward
//             </span>
//           </h2>
//           <p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
//             The core principles and goals that shape our journey and define our path to excellence.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
//           {items.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: idx * 0.2 }}
//               className="text-center group"
//             >
//               <motion.div
//                 className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 flex items-center justify-center"
//                 whileHover={{ scale: 1.08, rotate: 5 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <motion.div
//                   className="absolute inset-0 rounded-full"
//                   style={{ background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)', padding: '3px' }}
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                 >
//                   <div className="w-full h-full rounded-full bg-white"></div>
//                 </motion.div>
//                 <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>
//                 <motion.div
//                   className="absolute inset-4 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
//                   animate={{ scale: [1, 1.15, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 ></motion.div>

//                 <div className="relative z-10">
//                   <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                       <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
//                         <stop offset="0%" stopColor="#01adf0" />
//                         <stop offset="100%" stopColor="#a855f7" />
//                       </linearGradient>
//                     </defs>
//                     {item.icon === 'eye' ? (
//                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//                         <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
//                         <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
//                         <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
//                       </g>
//                     ) : (
//                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                         <circle cx="12" cy="12" r="10" />
//                         <circle cx="12" cy="12" r="6" />
//                         <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
//                         <path d="m16 8 4-4" />
//                         <path d="M20 4v4h-4" />
//                       </g>
//                     )}
//                   </svg>
//                 </div>
//               </motion.div>

//               <h3 className="sec-h3 sec-text-dark mb-3 group-hover:text-[#01adf0] transition-colors duration-300">
//                 {item.title}
//               </h3>

//               <motion.div
//                 className="w-14 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-3"
//                 whileHover={{ width: 80 }}
//               ></motion.div>

//               <p className="sec-p sec-text-dark-soft leading-relaxed max-w-sm mx-auto">
//                 {item.content}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ============================================
// // 4. OUR JOURNEY SECTION
// // ============================================
// const HowWeWork = () => {
//   const journeyData = [
//     [
//       { date: 'May 2024', shortDate: 'MAY 24', desc: 'TheCoderBox CMMI Level 3 Appraised' },
//       { date: 'Nov 15 2018', shortDate: 'NOV 18', desc: 'TheCoderBox undergoing CMMI Level 3 Re-Appraisal Process' },
//       { date: 'OCT 30 2018', shortDate: 'OCT 30', desc: 'ISO 27001:2013 Certification - TheCoderBox is Awarded ISO 27001:2013 Certification by BSI' },
//     ],
//     [
//       { date: 'SEP 20 2018', shortDate: 'SEP 20', desc: 'ISO 9001:2015 Certification - TheCoderBox is Awarded ISO 9001:2015 Certification by BSI' },
//       { date: 'November 21, 2017', shortDate: 'NOV 17', desc: 'TheCoderBox Ranked Among Top 50 Fastest Growing Tech Companies 2017' },
//       { date: 'September 27, 2017', shortDate: 'SEP 27', desc: 'Company Recognized by Insight Success Magazine as 10 Best Google Partners to Watch in 2017' },
//     ],
//     [
//       { date: 'August 5, 2017', shortDate: 'AUG 5', desc: 'Won a Recognition as 30 Fastest Growing Companies in India 2017' },
//       { date: 'December 12, 2016', shortDate: 'DEC 12', desc: 'TheCoderBox to Build an Automated Platform for European Telecom Service Provider' },
//       { date: 'December 6, 2016', shortDate: 'DEC 6', desc: 'TheCoderBox Releases "Threat Manage" a Cloud-based Security Management Platform' },
//     ],
//     [
//       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP Community: "Technology Pavilion"' },
//       { date: 'August 1, 2016', shortDate: 'AUG 1', desc: 'TheCoderBox Releases "Managed Cloud Platform" for IoT Businesses' },
//       { date: 'June 10, 2016', shortDate: 'JUN 10', desc: 'TheCoderBox Becomes a Member of MSPAlliance' },
//     ],
//     [
//       { date: 'February 2016', shortDate: 'FEB 16', desc: 'TheCoderBox is an Oracle Silver Partner for the Second Time in a Row' },
//       { date: 'October 30, 2015', shortDate: 'OCT 30', desc: 'TheCoderBox Awarded ISO 27001 Certificate' },
//       { date: 'December 26, 2014', shortDate: 'DEC 26', desc: 'TheCoderBox Earns CMMI® Maturity Level 3 Appraisal' },
//     ],
//     [
//       { date: '2013', shortDate: '2013', desc: 'TheCoderBox becomes a Microsoft Gold Partner in 2013' },
//       { date: 'Quality Brands Award', shortDate: '2013-2015', desc: 'TheCoderBox Bestowed With Quality Brands Award 2013-2015' },
//       { date: 'ISO 9001:2008 Certification', shortDate: '2013-2015', desc: 'TheCoderBox certified with ISO 9001:2008 in 2013' },
//     ],
//     [
//       { date: 'October 1, 2012', shortDate: 'OCT 1', desc: 'TheCoderBox becomes a Successful NASSCOM Member' },
//     ]
//   ];

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-white overflow-hidden">
//       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
//           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Journey</motion.span>
//           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
//             TheCoderBox{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Journey</span>
//           </motion.h2>
//           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             Our milestones and achievements that define who we are today
//           </motion.p>
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>
//           {journeyData.map((row, rowIdx) => (
//             <div key={rowIdx} className="relative mb-12 last:mb-0">
//               <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
//                 <path d={rowIdx % 2 === 0 ? "M 0 50 Q 300 0 600 50 T 1200 50" : "M 0 50 Q 300 100 600 50 T 1200 50"} stroke="#01ADF0" strokeWidth="2" strokeDasharray="6 8" fill="none" strokeLinecap="round" opacity="0.35" />
//               </svg>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
//                 {row.map((item, idx) => (
//                   <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="flex flex-col items-center text-center group">
//                     <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
//                       <div className="absolute inset-0 rounded-full bg-[#01ADF0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
//                       <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C6FB]/40" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}></motion.div>
//                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#008FD1] flex items-center justify-center shadow-2xl shadow-[#01ADF0]/40 border-4 border-white">
//                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
//                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
//                         <div className="text-center px-2 relative z-10">
//                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">{item.shortDate}</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                     <motion.div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01ADF0]/30 group-hover:-translate-y-2">
//                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-b-full"></div>
//                       <h4 className="sec-h3 sec-text-dark mb-3 mt-2">{item.date}</h4>
//                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] mx-auto mb-4 rounded-full"></div>
//                       <p className="sec-p sec-text-dark-soft leading-relaxed">{item.desc}</p>
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 5. OUR VALUES SECTION
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
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
//           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Values</motion.span>
//           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
//             What We{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Stand For</span>
//           </motion.h2>
//           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             The principles that guide every project, partnership, and decision we make
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {values.map((value, idx) => (
//             <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="h-full">
//               <div className="group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/20">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out"></div>
//                 <div className="relative z-10">
//                   <div className="flex items-start mb-4">
//                     <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white shrink-0" style={{ backgroundColor: value.bg }}>
//                       <CircleCheck size={22} className="text-white" />
//                     </div>
//                     <h3 className="sec-h3 sec-text-dark transition-colors duration-500 group-hover:text-black">{value.title}</h3>
//                   </div>
//                   <p className="text-[15px] text-gray-700 leading-relaxed font-medium transition-colors duration-500 group-hover:text-black/90">{value.desc}</p>
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
// // 6. CONTACT US SECTION
// // ============================================
// const ContactUsSection = () => {
//   const locations = [
//     { id: 1, city: "Bengaluru", country: "India", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
//   ];

//   const [selectedLocation] = useState(locations[0]);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;
//     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
//     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
//     if (!formData.phone.trim()) { newErrors.phone = "Please enter your phone number."; isValid = false; }
//     else if (!/^[6-9]\d{9}$/.test(formData.phone)) { newErrors.phone = "Please enter a valid 10-digit mobile number."; isValid = false; }
//     if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
//     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsLoading(true);
//     try {
//       const { data, error } = await supabase.from("contacts").insert([{ name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message }]);
//       if (error) throw error;
//       setIsSuccess(true);
//       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
//       setTimeout(() => setIsSuccess(false), 5000);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({ ...prev, message: "Failed to send message to database. Please try again later." }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] to-white overflow-hidden">
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
//         <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
//           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Contact Us</motion.span>
//           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
//             Get in{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Touch</span>
//           </motion.h2>
//           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             Have a project in mind? Reach out to us for a free consultation.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
//           <div className="lg:col-span-7 flex flex-col">
//             <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
//               <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />
//               <div className="relative">
//                 <h3 className="sec-h3 sec-text-dark mb-5">Send Us a Message</h3>
//                 <AnimatePresence>
//                   {isSuccess && (
//                     <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 16 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
//                       <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
//                         <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
//                         <div>
//                           <p className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</p>
//                           <p className="mt-0.5 text-xs text-emerald-700">Thank you! We'll get back to you soon.</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//                   <div>
//                     <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
//                     <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.name ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
//                     <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.name}</motion.p>}</AnimatePresence>
//                   </div>

//                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                     <div>
//                       <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
//                       <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.email ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
//                       <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.email}</motion.p>}</AnimatePresence>
//                     </div>
//                     <div>
//                       <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
//                       <input id="phone" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.phone ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
//                       <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.phone}</motion.p>}</AnimatePresence>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
//                     <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.service ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`}>
//                       <option value="">Select a service</option>
//                       <option value="Mobile App Development">Mobile App Development</option>
//                       <option value="Website Development">Website Development</option>
//                       <option value="Custom Software">Custom Software</option>
//                       <option value="UI/UX Design">UI/UX Design</option>
//                       <option value="Cloud & Hosting">Cloud & Hosting</option>
//                       <option value="Maintenance & Support">Maintenance & Support</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <AnimatePresence>{errors.service && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.service}</motion.p>}</AnimatePresence>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
//                     <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.message ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
//                     <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.message}</motion.p>}</AnimatePresence>
//                   </div>

//                   <div className="pt-2">
//                     <button type="submit" disabled={isLoading} className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${isLoading ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20" : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"}`}>
//                       <span className="relative z-10">{isLoading ? "Sending..." : "Submit Inquiry"}</span>
//                       {!isLoading && <ArrowRight size={17} className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
//                       {!isLoading && <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-5 flex flex-col">
//             <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
//               <div className="absolute right-0 top-0 h-full w-full opacity-10">
//                 <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                 <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//               </div>
//               <div className="relative">
//                 <h3 className="sec-h3 text-white mb-4">Connect With Us</h3>
//                 <p className="sec-p text-white/80 mb-6">We're available to answer your questions and help with your project.</p>
//                 <div className="space-y-4">
//                   <ContactItem icon={<Phone size={18} />} title="Phone" value="+91 8928809025" href="tel:+918928809025" />
//                   <ContactItem icon={<MessageSquare size={18} />} title="WhatsApp" value="+91 8928809025" href="https://wa.me/918928809025" />
//                   <ContactItem icon={<Mail size={18} />} title="Email" value="support@thecoderbox.com" href="mailto:support@thecoderbox.com" />
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
//               <div className="space-y-5">
//                 <div className="flex items-center">
//                   <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><Clock size={18} /></div>
//                   <div>
//                     <h4 className="sec-h3 sec-text-dark mb-1">Office Hours</h4>
//                     <p className="sec-p sec-text-dark-soft">Monday - Saturday: 9AM - 7PM</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><MapPin size={18} /></div>
//                   <div>
//                     <h4 className="sec-h3 sec-text-dark mb-1">Office Location</h4>
//                     <p className="sec-p sec-text-dark-soft leading-6">{selectedLocation?.address}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ContactItem = ({ icon, title, value, href }) => {
//   return (
//     <div className="flex items-center">
//       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
//       <div>
//         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
//         <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="sec-p text-white/80 transition-colors duration-300 hover:text-white">{value}</a>
//       </div>
//     </div>
//   );
// };

// // ============================================
// // MAIN ABOUT US COMPONENT
// // ============================================
// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
//       <AboutHero />
//       <AboutContent />
//       <VisionMission />
//       <HowWeWork />
//       <OurValuesAndMission />
//       <ContactUsSection />
//     </div>
//   );
// };

// export default AboutUs;







// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MapPin, Mail, Briefcase,
//   Quote, Phone, CheckCircle, Play, X, ArrowRight,
//   MessageSquare, Clock, AlertCircle, CircleCheck, Globe
// } from 'lucide-react';
// import { supabase } from "../lib/supabaseClient";

// // ============================================
// // 1. HERO SECTION
// // ============================================
// const AboutHero = () => {
//   return (
//     <section
//       className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 border-0 outline-none"
//       style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
//     >
//       {/* ===== BACKGROUND SHAPES ===== */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
//           style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
//         />
//         <motion.div
//           className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
//             boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
//             filter: 'blur(2px)',
//           }}
//           animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
//             boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
//             filter: 'blur(2px)',
//           }}
//           animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
//             boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
//             filter: 'blur(2px)',
//           }}
//           animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
//           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.svg
//           className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70"
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
//         <motion.div
//           className="absolute top-[22%] right-[10%] w-[110px] h-[110px] rounded-2xl"
//           style={{ background: 'linear-gradient(135deg, rgba(77, 211, 255, 0.18) 0%, rgba(1, 173, 240, 0.03) 100%)', boxShadow: '0 0 40px rgba(77, 211, 255, 0.1)', border: '1px solid rgba(77, 211, 255, 0.15)', transform: 'rotate(45deg)' }}
//           animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         <motion.div
//           className="absolute bottom-[25%] right-[20%] w-[130px] h-[130px] rounded-2xl"
//           style={{ background: 'linear-gradient(135deg, rgba(0, 198, 251, 0.18) 0%, rgba(0, 143, 209, 0.03) 100%)', boxShadow: '0 0 40px rgba(0, 198, 251, 0.1)', border: '1px solid rgba(0, 198, 251, 0.15)', transform: 'rotate(-20deg)' }}
//           animate={{ rotate: [-20, -10, -20], y: [0, -30, 0] }}
//           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
//         />
//         {[...Array(18)].map((_, i) => {
//           const size = Math.random() * 3 + 2;
//           return (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 background: 'rgba(180, 230, 255, 0.9)',
//                 boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
//               }}
//               animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
//               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
//             />
//           );
//         })}
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
//           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
//             About Us
//           </motion.span>

//           <motion.h2
//             className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
//             style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.15 }}
//           >
//             Your Journey of Digital Transformation Begins Here! <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">TheCoderBox</span>
//           </motion.h2>

//           <motion.p
//             className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
//             style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 2. ABOUT CONTENT SECTION
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
//     { number: "03", label: "VENTURES LED" },
//     { number: "06", label: "INDUSTRIES" },
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

//           {/* ===== LEFT SIDE: Video & Image Block ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -150, rotate: -5 }}
//             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative w-full max-w-xl aspect-[3/4] bg-[#003F7D] rounded-[40px] overflow-hidden shadow-2xl shadow-[#005B8F]/20 border border-white/10">
//               <div className="absolute -inset-1 bg-gradient-to-r from-[#01ADF0]/20 via-[#00C6FB]/20 to-[#01ADF0]/20 rounded-[40px] blur-2xl opacity-50"></div>

//               <div className="absolute inset-4 rounded-[30px] overflow-hidden border-2 border-white/10">
//                 <div className="relative w-full h-full">
//                   <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
//                     alt="CoderBox Team"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setIsVideoOpen(true)}
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20"
//               >
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

//               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
//                 <svg viewBox="0 0 100 100" className="w-full h-full">
//                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01ADF0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
//                 </svg>
//               </div>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE: Founder Information ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 150 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#01ADF0]/10 rounded-full blur-[100px] pointer-events-none" />
//             <div
//               className="absolute inset-0 opacity-[0.04] pointer-events-none"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(#003F7D 1px, transparent 1px), linear-gradient(90deg, #003F7D 1px, transparent 1px)',
//                 backgroundSize: '40px 40px',
//                 maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
//                 WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
//               }}
//             />

//             <div className="relative">
//               {/* Badge */}
//               <motion.span
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="sec-badge inline-block"
//               >
//                 Leadership
//               </motion.span>

//               {/* Heading — Line Removed */}
//               <motion.h2
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4 }}
//                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
//               >
//                 Meet Our{" "}
//                 <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//                   Founder
//                 </span>
//               </motion.h2>

//               {/* Name / title line */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5 }}
//                 className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
//               >
//                 <span className="text-lg font-bold text-[#003F7D]">{founderData.name}</span>
//                 <span className="text-xs text-gray-500 font-medium">{founderData.alias}</span>
//                 <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
//                 <span className="text-[11px] font-bold tracking-[0.15em] text-[#01ADF0] uppercase">
//                   {founderData.title}
//                 </span>
//               </motion.div>

//               {/* Bio */}
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.6 }}
//                 className="space-y-3.5 sec-p sec-text-dark-soft mt-6 max-w-2xl"
//               >
//                 <p className="relative pl-4 border-l-2 border-[#01ADF0]/40">{founderData.bio1}</p>
//                 <p>{founderData.bio2}</p>
//                 <p>{founderData.bio3}</p>
//               </motion.div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
//                 {stats.map((stat, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.7 + idx * 0.1, type: "spring", stiffness: 120 }}
//                     whileHover={{ y: -6 }}
//                     className="group relative bg-white rounded-2xl p-4 text-center shadow-sm border border-[#01ADF0]/15 hover:border-[#01ADF0]/40 hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-300 overflow-hidden"
//                   >
//                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01ADF0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                     <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent mb-1">
//                       {stat.number}
//                     </p>
//                     <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase">
//                       {stat.label}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Ventures Led */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1.0 }}
//                 className="mt-8"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Briefcase size={16} className="text-[#01ADF0]" />
//                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Ventures Led</h4>
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
//                       <span className="absolute top-2 right-3 text-[10px] font-bold text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors">
//                         0{i + 1}
//                       </span>
//                       <p className="text-xs sm:text-[13px] font-bold text-[#003F7D] pr-6 leading-snug">{v}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Worked Across */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1.1 }}
//                 className="mt-7"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Globe size={16} className="text-[#01ADF0]" />
//                   <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Worked Across</h4>
//                   <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {industries.map((ind, i) => (
//                     <motion.span
//                       key={i}
//                       whileHover={{ scale: 1.06, y: -2 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                       className="px-3.5 py-1.5 bg-white text-[#003F7D] text-[11px] font-bold tracking-wide rounded-full border border-[#01ADF0]/25 hover:border-[#01ADF0] hover:bg-[#01ADF0] hover:text-white hover:shadow-lg hover:shadow-[#01ADF0]/30 transition-colors duration-300 cursor-default"
//                     >
//                       {ind}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Founder's Note */}
//               <motion.div
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1.2 }}
//                 className="relative mt-9 p-6 rounded-2xl text-white shadow-2xl shadow-[#003F7D]/30 overflow-hidden"
//                 style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}
//               >
//                 <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#01ADF0]/25 rounded-full blur-3xl pointer-events-none" />
//                 <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-[#00C6FB]/15 rounded-full blur-3xl pointer-events-none" />

//                 <Quote className="absolute top-5 right-5 h-10 w-10 text-white/10" />

//                 <div className="relative z-10">
//                   <div className="flex items-center gap-2 mb-3">
//                     <span className="w-6 h-px bg-[#01ADF0]" />
//                     <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#01ADF0] uppercase">
//                       Founder's Note
//                     </h4>
//                   </div>

//                   <p className="italic text-[15px] sm:text-base text-white leading-relaxed mb-3">
//                     "Technology should create meaningful business value."
//                   </p>
//                   <p className="text-xs text-white/70 leading-relaxed mb-5">
//                     Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.
//                   </p>

//                   <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-white/10">
//                     {principles.map((p, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, x: -8 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 1.4 + i * 0.12 }}
//                         className="flex items-center gap-2"
//                       >
//                         <CircleCheck size={15} className="text-[#00C6FB] shrink-0" />
//                         <span className="text-[11px] font-bold tracking-wider text-white/90">{p}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {isVideoOpen && (
//         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
//           <button onClick={() => setIsVideoOpen(false)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01ADF0] rounded-full flex items-center justify-center transition-colors z-10">
//             <X className="h-6 w-6 text-white" />
//           </button>
//           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01ADF0]/20 border border-white/10">
//             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// };

// // ============================================
// // 3. VISION & MISSION SECTION
// // ============================================
// const VisionMission = () => {
//   const items = [
//     { title: 'Our Vision', icon: 'eye', content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.' },
//     { title: 'Our Mission', icon: 'target', content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.' }
//   ];

//   return (
//     <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden border-0">
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-4 sm:mb-5 md:mb-6">
//           <span className="sec-badge inline-block">Our Vision & Mission</span>
//           <h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
//             What Drives{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Us Forward
//             </span>
//           </h2>
//           <p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
//             The core principles and goals that shape our journey and define our path to excellence.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
//           {items.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: idx * 0.2 }}
//               className="text-center group"
//             >
//               <motion.div
//                 className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 flex items-center justify-center"
//                 whileHover={{ scale: 1.08, rotate: 5 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <motion.div
//                   className="absolute inset-0 rounded-full"
//                   style={{ background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)', padding: '3px' }}
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                 >
//                   <div className="w-full h-full rounded-full bg-white"></div>
//                 </motion.div>
//                 <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>
//                 <motion.div
//                   className="absolute inset-4 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
//                   animate={{ scale: [1, 1.15, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 ></motion.div>

//                 <div className="relative z-10">
//                   <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                       <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
//                         <stop offset="0%" stopColor="#01adf0" />
//                         <stop offset="100%" stopColor="#a855f7" />
//                       </linearGradient>
//                     </defs>
//                     {item.icon === 'eye' ? (
//                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//                         <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
//                         <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
//                         <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
//                       </g>
//                     ) : (
//                       <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                         <circle cx="12" cy="12" r="10" />
//                         <circle cx="12" cy="12" r="6" />
//                         <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
//                         <path d="m16 8 4-4" />
//                         <path d="M20 4v4h-4" />
//                       </g>
//                     )}
//                   </svg>
//                 </div>
//               </motion.div>

//               <h3 className="sec-h3 sec-text-dark mb-3 group-hover:text-[#01adf0] transition-colors duration-300">
//                 {item.title}
//               </h3>

//               <motion.div
//                 className="w-14 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-3"
//                 whileHover={{ width: 80 }}
//               ></motion.div>

//               <p className="sec-p sec-text-dark-soft leading-relaxed max-w-sm mx-auto">
//                 {item.content}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ============================================
// // 4. OUR JOURNEY SECTION
// // ============================================
// const HowWeWork = () => {
//   const journeyData = [
//     [
//       { date: 'May 2024', shortDate: 'MAY 24', desc: 'TheCoderBox CMMI Level 3 Appraised' },
//       { date: 'Nov 15 2018', shortDate: 'NOV 18', desc: 'TheCoderBox undergoing CMMI Level 3 Re-Appraisal Process' },
//       { date: 'OCT 30 2018', shortDate: 'OCT 30', desc: 'ISO 27001:2013 Certification - TheCoderBox is Awarded ISO 27001:2013 Certification by BSI' },
//     ],
//     [
//       { date: 'SEP 20 2018', shortDate: 'SEP 20', desc: 'ISO 9001:2015 Certification - TheCoderBox is Awarded ISO 9001:2015 Certification by BSI' },
//       { date: 'November 21, 2017', shortDate: 'NOV 17', desc: 'TheCoderBox Ranked Among Top 50 Fastest Growing Tech Companies 2017' },
//       { date: 'September 27, 2017', shortDate: 'SEP 27', desc: 'Company Recognized by Insight Success Magazine as 10 Best Google Partners to Watch in 2017' },
//     ],
//     [
//       { date: 'August 5, 2017', shortDate: 'AUG 5', desc: 'Won a Recognition as 30 Fastest Growing Companies in India 2017' },
//       { date: 'December 12, 2016', shortDate: 'DEC 12', desc: 'TheCoderBox to Build an Automated Platform for European Telecom Service Provider' },
//       { date: 'December 6, 2016', shortDate: 'DEC 6', desc: 'TheCoderBox Releases "Threat Manage" a Cloud-based Security Management Platform' },
//     ],
//     [
//       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP Community: "Technology Pavilion"' },
//       { date: 'August 1, 2016', shortDate: 'AUG 1', desc: 'TheCoderBox Releases "Managed Cloud Platform" for IoT Businesses' },
//       { date: 'June 10, 2016', shortDate: 'JUN 10', desc: 'TheCoderBox Becomes a Member of MSPAlliance' },
//     ],
//     [
//       { date: 'February 2016', shortDate: 'FEB 16', desc: 'TheCoderBox is an Oracle Silver Partner for the Second Time in a Row' },
//       { date: 'October 30, 2015', shortDate: 'OCT 30', desc: 'TheCoderBox Awarded ISO 27001 Certificate' },
//       { date: 'December 26, 2014', shortDate: 'DEC 26', desc: 'TheCoderBox Earns CMMI® Maturity Level 3 Appraisal' },
//     ],
//     [
//       { date: '2013', shortDate: '2013', desc: 'TheCoderBox becomes a Microsoft Gold Partner in 2013' },
//       { date: 'Quality Brands Award', shortDate: '2013-2015', desc: 'TheCoderBox Bestowed With Quality Brands Award 2013-2015' },
//       { date: 'ISO 9001:2008 Certification', shortDate: '2013-2015', desc: 'TheCoderBox certified with ISO 9001:2008 in 2013' },
//     ],
//     [
//       { date: 'October 1, 2012', shortDate: 'OCT 1', desc: 'TheCoderBox becomes a Successful NASSCOM Member' },
//     ]
//   ];

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-white overflow-hidden border-0">
//       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
//           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Journey</motion.span>
//           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
//             TheCoderBox{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Journey</span>
//           </motion.h2>
//           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             Our milestones and achievements that define who we are today
//           </motion.p>
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>
//           {journeyData.map((row, rowIdx) => (
//             <div key={rowIdx} className="relative mb-12 last:mb-0">
//               <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
//                 <path d={rowIdx % 2 === 0 ? "M 0 50 Q 300 0 600 50 T 1200 50" : "M 0 50 Q 300 100 600 50 T 1200 50"} stroke="#01ADF0" strokeWidth="2" strokeDasharray="6 8" fill="none" strokeLinecap="round" opacity="0.35" />
//               </svg>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
//                 {row.map((item, idx) => (
//                   <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="flex flex-col items-center text-center group">
//                     <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
//                       <div className="absolute inset-0 rounded-full bg-[#01ADF0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
//                       <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C6FB]/40" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}></motion.div>
//                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#008FD1] flex items-center justify-center shadow-2xl shadow-[#01ADF0]/40 border-4 border-white">
//                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
//                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
//                         <div className="text-center px-2 relative z-10">
//                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">{item.shortDate}</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                     <motion.div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01ADF0]/30 group-hover:-translate-y-2">
//                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-b-full"></div>
//                       <h4 className="sec-h3 sec-text-dark mb-3 mt-2">{item.date}</h4>
//                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] mx-auto mb-4 rounded-full"></div>
//                       <p className="sec-p sec-text-dark-soft leading-relaxed">{item.desc}</p>
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 5. OUR VALUES SECTION
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
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
//           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Our Values</motion.span>
//           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
//             What We{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Stand For</span>
//           </motion.h2>
//           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             The principles that guide every project, partnership, and decision we make
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {values.map((value, idx) => (
//             <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="h-full">
//               <div className="group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/20">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out"></div>
//                 <div className="relative z-10">
//                   <div className="flex items-start mb-4">
//                     <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white shrink-0" style={{ backgroundColor: value.bg }}>
//                       <CircleCheck size={22} className="text-white" />
//                     </div>
//                     <h3 className="sec-h3 sec-text-dark transition-colors duration-500 group-hover:text-black">{value.title}</h3>
//                   </div>
//                   <p className="text-[15px] text-gray-700 leading-relaxed font-medium transition-colors duration-500 group-hover:text-black/90">{value.desc}</p>
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
// // 6. CONTACT US SECTION
// // ============================================
// const ContactUsSection = () => {
//   const locations = [
//     { id: 1, city: "Bengaluru", country: "India", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
//   ];

//   const [selectedLocation] = useState(locations[0]);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;
//     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
//     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
//     if (!formData.phone.trim()) { newErrors.phone = "Please enter your phone number."; isValid = false; }
//     else if (!/^[6-9]\d{9}$/.test(formData.phone)) { newErrors.phone = "Please enter a valid 10-digit mobile number."; isValid = false; }
//     if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
//     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsLoading(true);
//     try {
//       const { data, error } = await supabase.from("contacts").insert([{ name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message }]);
//       if (error) throw error;
//       setIsSuccess(true);
//       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
//       setTimeout(() => setIsSuccess(false), 5000);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({ ...prev, message: "Failed to send message to database. Please try again later." }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] to-white overflow-hidden border-0">
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
//         <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-4 sm:mb-5 md:mb-6">
//           <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>Contact Us</motion.span>
//           <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
//             Get in{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Touch</span>
//           </motion.h2>
//           <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             Have a project in mind? Reach out to us for a free consultation.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
//           <div className="lg:col-span-7 flex flex-col">
//             <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
//               <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />
//               <div className="relative">
//                 <h3 className="sec-h3 sec-text-dark mb-5">Send Us a Message</h3>
//                 <AnimatePresence>
//                   {isSuccess && (
//                     <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 16 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
//                       <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
//                         <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
//                         <div>
//                           <p className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</p>
//                           <p className="mt-0.5 text-xs text-emerald-700">Thank you! We'll get back to you soon.</p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//                   <div>
//                     <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
//                     <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.name ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
//                     <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.name}</motion.p>}</AnimatePresence>
//                   </div>

//                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                     <div>
//                       <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
//                       <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.email ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
//                       <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.email}</motion.p>}</AnimatePresence>
//                     </div>
//                     <div>
//                       <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
//                       <input id="phone" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.phone ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
//                       <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.phone}</motion.p>}</AnimatePresence>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
//                     <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.service ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`}>
//                       <option value="">Select a service</option>
//                       <option value="Mobile App Development">Mobile App Development</option>
//                       <option value="Website Development">Website Development</option>
//                       <option value="Custom Software">Custom Software</option>
//                       <option value="UI/UX Design">UI/UX Design</option>
//                       <option value="Cloud & Hosting">Cloud & Hosting</option>
//                       <option value="Maintenance & Support">Maintenance & Support</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <AnimatePresence>{errors.service && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.service}</motion.p>}</AnimatePresence>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
//                     <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.message ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
//                     <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.message}</motion.p>}</AnimatePresence>
//                   </div>

//                   <div className="pt-2">
//                     <button type="submit" disabled={isLoading} className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${isLoading ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20" : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"}`}>
//                       <span className="relative z-10">{isLoading ? "Sending..." : "Submit Inquiry"}</span>
//                       {!isLoading && <ArrowRight size={17} className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
//                       {!isLoading && <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-5 flex flex-col">
//             <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
//               <div className="absolute right-0 top-0 h-full w-full opacity-10">
//                 <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                 <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//               </div>
//               <div className="relative">
//                 <h3 className="sec-h3 text-white mb-4">Connect With Us</h3>
//                 <p className="sec-p text-white/80 mb-6">We're available to answer your questions and help with your project.</p>
//                 <div className="space-y-4">
//                   <ContactItem icon={<Phone size={18} />} title="Phone" value="+91 8928809025" href="tel:+918928809025" />
//                   <ContactItem icon={<MessageSquare size={18} />} title="WhatsApp" value="+91 8928809025" href="https://wa.me/918928809025" />
//                   <ContactItem icon={<Mail size={18} />} title="Email" value="support@thecoderbox.com" href="mailto:support@thecoderbox.com" />
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
//               <div className="space-y-5">
//                 <div className="flex items-center">
//                   <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><Clock size={18} /></div>
//                   <div>
//                     <h4 className="sec-h3 sec-text-dark mb-1">Office Hours</h4>
//                     <p className="sec-p sec-text-dark-soft">Monday - Saturday: 9AM - 7PM</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><MapPin size={18} /></div>
//                   <div>
//                     <h4 className="sec-h3 sec-text-dark mb-1">Office Location</h4>
//                     <p className="sec-p sec-text-dark-soft leading-6">{selectedLocation?.address}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ContactItem = ({ icon, title, value, href }) => {
//   return (
//     <div className="flex items-center">
//       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
//       <div>
//         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
//         <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="sec-p text-white/80 transition-colors duration-300 hover:text-white">{value}</a>
//       </div>
//     </div>
//   );
// };

// // ============================================
// // MAIN ABOUT US COMPONENT
// // ============================================
// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden font-sans">
//       <AboutHero />
//       <AboutContent />
//       <VisionMission />
//       <HowWeWork />
//       <OurValuesAndMission />
//       <ContactUsSection />
//     </div>
//   );
// };

// export default AboutUs;





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Mail, Briefcase,
  Quote, Phone, CheckCircle, Play, X, ArrowRight,
  MessageSquare, Clock, AlertCircle, CircleCheck, Globe
} from 'lucide-react';
import { supabase } from "../lib/supabaseClient";

// ============================================
// 1. HERO SECTION (Reduced Height)
// ============================================
const AboutHero = () => {
  return (
    <section
      className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
      style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
    >
      {/* ===== BACKGROUND SHAPES ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
        />
        <motion.div
          className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
            boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
            filter: 'blur(2px)',
          }}
          animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
            boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
            filter: 'blur(2px)',
          }}
          animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
            boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
            filter: 'blur(2px)',
          }}
          animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
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
        <motion.div
          className="absolute top-[22%] right-[10%] w-[110px] h-[110px] rounded-2xl hidden sm:block"
          style={{ background: 'linear-gradient(135deg, rgba(77, 211, 255, 0.18) 0%, rgba(1, 173, 240, 0.03) 100%)', boxShadow: '0 0 40px rgba(77, 211, 255, 0.1)', border: '1px solid rgba(77, 211, 255, 0.15)', transform: 'rotate(45deg)' }}
          animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[20%] w-[130px] h-[130px] rounded-2xl hidden sm:block"
          style={{ background: 'linear-gradient(135deg, rgba(0, 198, 251, 0.18) 0%, rgba(0, 143, 209, 0.03) 100%)', boxShadow: '0 0 40px rgba(0, 198, 251, 0.1)', border: '1px solid rgba(0, 198, 251, 0.15)', transform: 'rotate(-20deg)' }}
          animate={{ rotate: [-20, -10, -20], y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Fewer particles on mobile for faster load */}
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 3 + 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: 'rgba(180, 230, 255, 0.9)',
                boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
              }}
              animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
              transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
            />
          );
        })}
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
// 2. ABOUT CONTENT SECTION
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
    { number: "03", label: "VENTURES LED" },
    { number: "06", label: "INDUSTRIES" },
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

          {/* ===== LEFT SIDE: Video & Image Block ===== */}
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
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
                    alt="CoderBox Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
              </div>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group z-20"
              >
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

              <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01ADF0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE: Founder Information ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#01ADF0]/10 rounded-full blur-[100px] pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(#003F7D 1px, transparent 1px), linear-gradient(90deg, #003F7D 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
              }}
            />

            <div className="relative">
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="sec-badge inline-block"
              >
                Leadership
              </motion.span>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
              >
                Meet Our{" "}
                <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                  Founder
                </span>
              </motion.h2>

              {/* Name / title line */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1"
              >
                <span className="text-lg font-bold text-[#003F7D]">{founderData.name}</span>
                <span className="text-xs text-gray-500 font-medium">{founderData.alias}</span>
                <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#01ADF0] uppercase">
                  {founderData.title}
                </span>
              </motion.div>

              {/* Bio */}
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

              {/* STATS */}
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
                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent mb-1 leading-none">
                      {stat.number}
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-500 tracking-wider uppercase leading-tight break-words">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Ventures Led */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="mt-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={16} className="text-[#01ADF0]" />
                  <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Ventures Led</h4>
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
                      <span className="absolute top-2 right-3 text-[10px] font-bold text-[#01ADF0]/40 group-hover:text-[#01ADF0] transition-colors">
                        0{i + 1}
                      </span>
                      <p className="text-xs sm:text-[13px] font-bold text-[#003F7D] pr-6 leading-snug">{v}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Worked Across */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={16} className="text-[#01ADF0]" />
                  <h4 className="text-xs font-bold tracking-[0.15em] text-[#003F7D] uppercase">Worked Across</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="px-3.5 py-1.5 bg-white text-[#003F7D] text-[11px] font-bold tracking-wide rounded-full border border-[#01ADF0]/25 hover:border-[#01ADF0] hover:bg-[#01ADF0] hover:text-white hover:shadow-lg hover:shadow-[#01ADF0]/30 transition-colors duration-300 cursor-default"
                    >
                      {ind}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Founder's Note */}
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
                    <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#01ADF0] uppercase">
                      Founder's Note
                    </h4>
                  </div>

                  <p className="italic text-[15px] sm:text-base text-white leading-relaxed mb-3">
                    "Technology should create meaningful business value."
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed mb-5">
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
                        <span className="text-[11px] font-bold tracking-wider text-white/90">{p}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
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
// 3. VISION & MISSION SECTION
// ============================================
const VisionMission = () => {
  const items = [
    { title: 'Our Vision', icon: 'eye', content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.' },
    { title: 'Our Mission', icon: 'target', content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.' }
  ];

  return (
    <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden border-0">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <span className="sec-badge inline-block">Our Vision & Mission</span>
          <h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
            What Drives{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Us Forward
            </span>
          </h2>
          <p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
            The core principles and goals that shape our journey and define our path to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 flex items-center justify-center"
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)', padding: '3px' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-white"></div>
                </motion.div>
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>
                <motion.div
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>

                <div className="relative z-10">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#01adf0" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    {item.icon === 'eye' ? (
                      <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
                        <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
                        <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
                      </g>
                    ) : (
                      <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
                        <path d="m16 8 4-4" />
                        <path d="M20 4v4h-4" />
                      </g>
                    )}
                  </svg>
                </div>
              </motion.div>

              <h3 className="sec-h3 sec-text-dark mb-3 group-hover:text-[#01adf0] transition-colors duration-300">
                {item.title}
              </h3>

              <motion.div
                className="w-14 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-3"
                whileHover={{ width: 80 }}
              ></motion.div>

              <p className="sec-p sec-text-dark-soft leading-relaxed max-w-sm mx-auto">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// 4. OUR JOURNEY SECTION
// ============================================
const HowWeWork = () => {
  const journeyData = [
    [
      { date: 'May 2024', shortDate: 'MAY 24', desc: 'TheCoderBox CMMI Level 3 Appraised' },
      { date: 'Nov 15 2018', shortDate: 'NOV 18', desc: 'TheCoderBox undergoing CMMI Level 3 Re-Appraisal Process' },
      { date: 'OCT 30 2018', shortDate: 'OCT 30', desc: 'ISO 27001:2013 Certification - TheCoderBox is Awarded ISO 27001:2013 Certification by BSI' },
    ],
    [
      { date: 'SEP 20 2018', shortDate: 'SEP 20', desc: 'ISO 9001:2015 Certification - TheCoderBox is Awarded ISO 9001:2015 Certification by BSI' },
      { date: 'November 21, 2017', shortDate: 'NOV 17', desc: 'TheCoderBox Ranked Among Top 50 Fastest Growing Tech Companies 2017' },
      { date: 'September 27, 2017', shortDate: 'SEP 27', desc: 'Company Recognized by Insight Success Magazine as 10 Best Google Partners to Watch in 2017' },
    ],
    [
      { date: 'August 5, 2017', shortDate: 'AUG 5', desc: 'Won a Recognition as 30 Fastest Growing Companies in India 2017' },
      { date: 'December 12, 2016', shortDate: 'DEC 12', desc: 'TheCoderBox to Build an Automated Platform for European Telecom Service Provider' },
      { date: 'December 6, 2016', shortDate: 'DEC 6', desc: 'TheCoderBox Releases "Threat Manage" a Cloud-based Security Management Platform' },
    ],
    [
      { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP Community: "Technology Pavilion"' },
      { date: 'August 1, 2016', shortDate: 'AUG 1', desc: 'TheCoderBox Releases "Managed Cloud Platform" for IoT Businesses' },
      { date: 'June 10, 2016', shortDate: 'JUN 10', desc: 'TheCoderBox Becomes a Member of MSPAlliance' },
    ],
    [
      { date: 'February 2016', shortDate: 'FEB 16', desc: 'TheCoderBox is an Oracle Silver Partner for the Second Time in a Row' },
      { date: 'October 30, 2015', shortDate: 'OCT 30', desc: 'TheCoderBox Awarded ISO 27001 Certificate' },
      { date: 'December 26, 2014', shortDate: 'DEC 26', desc: 'TheCoderBox Earns CMMI® Maturity Level 3 Appraisal' },
    ],
    [
      { date: '2013', shortDate: '2013', desc: 'TheCoderBox becomes a Microsoft Gold Partner in 2013' },
      { date: 'Quality Brands Award', shortDate: '2013-2015', desc: 'TheCoderBox Bestowed With Quality Brands Award 2013-2015' },
      { date: 'ISO 9001:2008 Certification', shortDate: '2013-2015', desc: 'TheCoderBox certified with ISO 9001:2008 in 2013' },
    ],
    [
      { date: 'October 1, 2012', shortDate: 'OCT 1', desc: 'TheCoderBox becomes a Successful NASSCOM Member' },
    ]
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-white overflow-hidden border-0">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block">Our Journey</motion.span>
          <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
            TheCoderBox{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
            Our milestones and achievements that define who we are today
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>
          {journeyData.map((row, rowIdx) => (
            <div key={rowIdx} className="relative mb-12 last:mb-0">
              <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path d={rowIdx % 2 === 0 ? "M 0 50 Q 300 0 600 50 T 1200 50" : "M 0 50 Q 300 100 600 50 T 1200 50"} stroke="#01ADF0" strokeWidth="2" strokeDasharray="6 8" fill="none" strokeLinecap="round" opacity="0.35" />
              </svg>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
                {row.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                      <div className="absolute inset-0 rounded-full bg-[#01ADF0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                      <motion.div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C6FB]/40" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}></motion.div>
                      <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#008FD1] flex items-center justify-center shadow-2xl shadow-[#01ADF0]/40 border-4 border-white">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
                        <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
                        <div className="text-center px-2 relative z-10">
                          <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">{item.shortDate}</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01ADF0]/30 group-hover:-translate-y-2">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-b-full"></div>
                      <h4 className="sec-h3 sec-text-dark mb-3 mt-2">{item.date}</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] mx-auto mb-4 rounded-full"></div>
                      <p className="sec-p sec-text-dark-soft leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 5. OUR VALUES SECTION
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
            What We{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Stand For</span>
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
              <div className="group relative bg-white h-full rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#01ADF0]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out"></div>
                <div className="relative z-10">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white shrink-0" style={{ backgroundColor: value.bg }}>
                      <CircleCheck size={22} className="text-white" />
                    </div>
                    <h3 className="sec-h3 sec-text-dark transition-colors duration-500 group-hover:text-black">{value.title}</h3>
                  </div>
                  <p className="text-[15px] text-gray-700 leading-relaxed font-medium transition-colors duration-500 group-hover:text-black/90">{value.desc}</p>
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
// 6. CONTACT US SECTION
// ============================================
const ContactUsSection = () => {
  const locations = [
    { id: 1, city: "Bengaluru", country: "India", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
  ];

  const [selectedLocation] = useState(locations[0]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
    let isValid = true;
    if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
    if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
    if (!formData.phone.trim()) { newErrors.phone = "Please enter your phone number."; isValid = false; }
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) { newErrors.phone = "Please enter a valid 10-digit mobile number."; isValid = false; }
    if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const { data, error } = await supabase.from("contacts").insert([{ name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, message: formData.message }]);
      if (error) throw error;
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setErrors({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Supabase Error:", error);
      setErrors((prev) => ({ ...prev, message: "Failed to send message to database. Please try again later." }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] to-white overflow-hidden border-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block">Contact Us</motion.span>
          <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
            Get in{' '}<span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
            Have a project in mind? Reach out to us for a free consultation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />
              <div className="relative">
                <h3 className="sec-h3 sec-text-dark mb-5">Send Us a Message</h3>
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 16 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <div>
                          <p className="text-sm font-semibold text-emerald-900">Message Sent Successfully!</p>
                          <p className="mt-0.5 text-xs text-emerald-700">Thank you! We'll get back to you soon.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Name</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.name ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
                    <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.name}</motion.p>}</AnimatePresence>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email Address</label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.email ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
                      <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.email}</motion.p>}</AnimatePresence>
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone Number</label>
                      <input id="phone" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="+91 12345 67890" className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.phone ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
                      <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.phone}</motion.p>}</AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">Service</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.service ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`}>
                      <option value="">Select a service</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Cloud & Hosting">Cloud & Hosting</option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                      <option value="Other">Other</option>
                    </select>
                    <AnimatePresence>{errors.service && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.service}</motion.p>}</AnimatePresence>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${errors.message ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"}`} />
                    <AnimatePresence>{errors.message && <motion.p initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 6 }} exit={{ opacity: 0, height: 0, marginTop: 0 }} className="flex items-center gap-1 text-xs font-medium text-red-500"><AlertCircle className="h-3 w-3 shrink-0" />{errors.message}</motion.p>}</AnimatePresence>
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={isLoading} className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${isLoading ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20" : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"}`}>
                      <span className="relative z-10">{isLoading ? "Sending..." : "Submit Inquiry"}</span>
                      {!isLoading && <ArrowRight size={17} className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
                      {!isLoading && <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
              <div className="absolute right-0 top-0 h-full w-full opacity-10">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
              </div>
              <div className="relative">
                <h3 className="sec-h3 text-white mb-4">Connect With Us</h3>
                <p className="sec-p text-white/80 mb-6">We're available to answer your questions and help with your project.</p>
                <div className="space-y-4">
                  <ContactItem icon={<Phone size={18} />} title="Phone" value="+91 8928809025" href="tel:+918928809025" />
                  <ContactItem icon={<MessageSquare size={18} />} title="WhatsApp" value="+91 8928809025" href="https://wa.me/918928809025" />
                  <ContactItem icon={<Mail size={18} />} title="Email" value="support@thecoderbox.com" href="mailto:support@thecoderbox.com" />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg flex-1">
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><Clock size={18} /></div>
                  <div>
                    <h4 className="sec-h3 sec-text-dark mb-1">Office Hours</h4>
                    <p className="sec-p sec-text-dark-soft">Monday - Saturday: 9AM - 7PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]"><MapPin size={18} /></div>
                  <div>
                    <h4 className="sec-h3 sec-text-dark mb-1">Office Location</h4>
                    <p className="sec-p sec-text-dark-soft leading-6">{selectedLocation?.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, value, href }) => {
  return (
    <div className="flex items-center">
      <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
      <div>
        <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
        <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} className="sec-p text-white/80 transition-colors duration-300 hover:text-white">{value}</a>
      </div>
    </div>
  );
};

// ============================================
// MAIN ABOUT US COMPONENT
// ============================================
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <AboutHero />
      <AboutContent />
      <VisionMission />
      <HowWeWork />
      <OurValuesAndMission />
      <ContactUsSection />
    </div>
  );
};

export default AboutUs;