// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion, useInView } from 'framer-motion';
// // import { 
// //   MapPin, Mail, Star, Award, Users, Briefcase, 
// //   ChevronRight, ChevronLeft, Quote, Phone, Send, CheckCircle, Play, X, ArrowRight 
// // } from 'lucide-react';
// // import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// // // ============================================
// // // 1. HERO SECTION
// // // ============================================
// // const AboutHero = () => {
// //   return (
// //     <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0a0a1a] via-[#1a103c] to-[#0a0a1a] overflow-hidden">
// //       <div className="absolute inset-0 opacity-20">
// //         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center"></div>
// //       </div>
      
// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //         <motion.div 
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center"
// //         >
// //           <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-4">
// //             About Us
// //           </span>

// //           <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
// //             Your Journey of Digital Transformation Begins Here! <br />
// //             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// //               TheCoderBox
// //             </span>
// //           </h5>

// //           <p className="text-blue-200/60 max-w-2xl mx-auto mt-6 text-sm sm:text-base">
// //             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
// //           </p>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 2. ABOUT CONTENT SECTION (SCROLL ANIMATION - LEFT SLIDE)
// // // ============================================
// // const AboutContent = () => {
// //   const [isVideoOpen, setIsVideoOpen] = useState(false);
  
// //   const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

// //   return (
// //     <section className="py-16 sm:py-20 md:py-24 bg-[#f1f1f1] relative overflow-hidden">
      
// //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01adf0]/10 rounded-full blur-[120px] pointer-events-none"></div>
// //       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
// //       <div 
// //         className="absolute inset-0 opacity-[0.03] pointer-events-none"
// //         style={{
// //           backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
// //           backgroundSize: '40px 40px'
// //         }}
// //       ></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //         <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
// //           <motion.div
// //             initial={{ opacity: 0, x: -150, rotate: -5 }}
// //             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
// //             viewport={{ once: true, amount: 0.3 }}
// //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
// //             className="relative flex justify-center"
// //           >
// //             <div className="relative w-full max-w-md aspect-[4/5] bg-[#0f172a] rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10">
              
// //               <div className="absolute -inset-1 bg-gradient-to-r from-[#01adf0]/20 via-purple-500/20 to-[#01adf0]/20 rounded-[40px] blur-2xl opacity-50"></div>

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
// //                   <div className="absolute inset-0 rounded-full bg-[#01adf0]/40 animate-ping"></div>
// //                   <div className="absolute inset-[-8px] rounded-full bg-[#01adf0]/20 animate-pulse"></div>
                  
// //                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01adf0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01adf0]/50 group-hover:scale-110 transition-transform duration-300">
// //                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01adf0] rounded-full flex items-center justify-center border-2 border-white/30">
// //                       <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </button>

// //               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
// //                 <svg viewBox="0 0 100 100" className="w-full h-full">
// //                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01adf0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
// //                 </svg>
// //               </div>

// //               <div className="absolute -top-2 -left-2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[#01adf0]/50 rotate-[-30deg] z-30"></div>
// //               <div className="absolute -bottom-2 -right-2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-[#01adf0]/50 rotate-[150deg] z-30"></div>
// //             </div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 150 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, amount: 0.3 }}
// //             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
// //           >
// //             <span className="inline-block text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 px-3 py-1 rounded-full border border-[#01adf0]/20">
// //               About us
// //             </span>

// //             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
// //               CRAFTING DIGITAL <br />
// //               <span className="text-[#01adf0]">SUCCESS</span>
// //             </h2>

// //             <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
// //               <p>We are CoderBox, your <span className="text-[#01adf0] font-semibold">Leading Digital Marketing Company</span> that helps you mark a strong, noticeable digital presence. Whether you're just starting out, expanding, or already well-established, we offer <span className="text-[#01adf0] font-semibold">digital marketing solutions</span> that fit your needs.</p>
// //               <p>We are your AI Powered Digital Marketing Agency, we mix creativity, smart strategies, and the latest technology to make sure you get results that really matter. Our goal is very simple: we want your business to shine (very bright) on the internet!</p>
// //               <p>We are CoderBox, your best friends in the digital world. Think of us as not just your <span className="text-[#01adf0] font-semibold">Digital Marketing Company</span> but your go-to partner for everything digital from boosting your online presence to helping your business grow.</p>
// //               <p>For over 10 years, CoderBox has been the <span className="text-[#01adf0] font-semibold">Best Digital Marketing Agency in India</span>. We're all about helping companies crush their financial and branding goals with super smart, tailor-made solutions.</p>
// //             </div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 10 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.4, delay: 0.3 }}
// //               viewport={{ once: true }}
// //               className="mt-8 flex flex-wrap items-center gap-3"
// //             >
// //               <motion.a
// //                 href="/contact"
// //                 whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(1,173,240,0.4)", y: -3 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm"
// //               >
// //                 Know More
// //                 <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
// //                   <ArrowRight className="h-4 w-4" />
// //                 </motion.span>
// //               </motion.a>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {isVideoOpen && (
// //         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
// //           <button 
// //             onClick={() => setIsVideoOpen(false)}
// //             className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01adf0] rounded-full flex items-center justify-center transition-colors z-10"
// //           >
// //             <X className="h-6 w-6 text-white" />
// //           </button>
          
// //           <motion.div 
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01adf0]/20 border border-white/10"
// //           >
// //             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
// //           </motion.div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };


// // // ============================================
// // // 3. THIS IS US / STATS + VISION & MISSION SECTION (UPGRADED ICONS)
// // // ============================================

// // const Counter = ({ end, suffix = '', duration = 2500 }) => {
// //   const [count, setCount] = useState(0);
// //   const ref = useRef(null);
// //   const isInView = useInView(ref, { once: true, amount: 0.5 });

// //   useEffect(() => {
// //     if (!isInView) return;

// //     let startTime = null;
// //     const target = parseInt(end);

// //     const animate = (currentTime) => {
// //       if (startTime === null) startTime = currentTime;
// //       const progress = Math.min((currentTime - startTime) / duration, 1);
// //       const easedProgress = 1 - Math.pow(1 - progress, 3);
// //       setCount(Math.floor(easedProgress * target));

// //       if (progress < 1) {
// //         requestAnimationFrame(animate);
// //       } else {
// //         setCount(target);
// //       }
// //     };

// //     requestAnimationFrame(animate);
// //   }, [isInView, end, duration]);

// //   return (
// //     <span ref={ref}>
// //       {count}
// //       {suffix}
// //     </span>
// //   );
// // };

// // const VisionMission = () => {
// //   const stats = [
// //     { number: 22, suffix: '', label: 'Years and Beyond', autoCount: false },
// //     { number: 1000, suffix: '+', label: 'Businesses Transformed', autoCount: true },
// //     { number: 5, suffix: '', label: 'Major Certifications', autoCount: false },
// //     { number: 7, suffix: '', label: 'Continents Journeyed', autoCount: false },
// //   ];

// //   const items = [
// //     {
// //       title: 'Our Vision',
// //       icon: 'eye',
// //       content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.'
// //     },
// //     {
// //       title: 'Our Mission',
// //       icon: 'target',
// //       content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.'
// //     }
// //   ];

// //   return (
// //     <section className="bg-white">
      
// //       <div className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a2a] to-[#0a0a1a] overflow-hidden">
        
// //         <div className="absolute inset-0 pointer-events-none">
// //           <motion.div
// //             className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"
// //             animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
// //             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //           />
// //           <motion.div
// //             className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
// //             animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
// //             transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //           />
// //           {[...Array(15)].map((_, i) => (
// //             <motion.div
// //               key={i}
// //               className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
// //               style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
// //               animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
// //               transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
// //             />
// //           ))}
// //         </div>

// //         <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="text-center mb-12"
// //           >
// //             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
// //               This is us now
// //               <span className="block text-base sm:text-lg font-normal text-white/80 mt-2">
// //                 A capable engine with multiple milestones
// //               </span>
// //             </h2>
// //           </motion.div>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
// //             {stats.map((stat, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// //                 className="text-center"
// //               >
// //                 <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white flex items-center justify-center gap-1">
// //                   {stat.autoCount ? (
// //                     <Counter end={stat.number} suffix={stat.suffix} duration={2500} />
// //                   ) : (
// //                     <>
// //                       <span>{stat.number}</span>
// //                       {stat.suffix && <span className="text-3xl sm:text-4xl md:text-5xl">{stat.suffix}</span>}
// //                     </>
// //                   )}
// //                 </div>
// //                 <p className="text-white/80 text-xs sm:text-sm mt-2 font-medium tracking-wide">
// //                   {stat.label}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="relative py-20 sm:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        
// //         <div 
// //           className="absolute inset-0 opacity-[0.03] pointer-events-none"
// //           style={{
// //             backgroundImage: `linear-gradient(#01adf0 1px, transparent 1px), linear-gradient(90deg, #01adf0 1px, transparent 1px)`,
// //             backgroundSize: '40px 40px'
// //           }}
// //         ></div>

// //         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
// //         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

// //         <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //           <div className="grid md:grid-cols-2 gap-16 md:gap-8 max-w-5xl mx-auto">
            
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
// //                   className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center"
// //                   whileHover={{ scale: 1.08, rotate: 5 }}
// //                   transition={{ type: "spring", stiffness: 300 }}
// //                 >
// //                   <motion.div
// //                     className="absolute inset-0 rounded-full"
// //                     style={{
// //                       background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)',
// //                       padding: '3px'
// //                     }}
// //                     animate={{ rotate: 360 }}
// //                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
// //                   >
// //                     <div className="w-full h-full rounded-full bg-white"></div>
// //                   </motion.div>

// //                   <div className="absolute inset-3 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>

// //                   <motion.div
// //                     className="absolute inset-6 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
// //                     animate={{ scale: [1, 1.15, 1] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                   ></motion.div>

// //                   <motion.div 
// //                     className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#01adf0] rounded-tl-lg"
// //                     animate={{ opacity: [0.5, 1, 0.5] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                   ></motion.div>
// //                   <motion.div 
// //                     className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#01adf0] rounded-tr-lg"
// //                     animate={{ opacity: [0.5, 1, 0.5] }}
// //                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
// //                   ></motion.div>
// //                   <motion.div 
// //                     className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#01adf0] rounded-bl-lg"
// //                     animate={{ opacity: [0.5, 1, 0.5] }}
// //                     transition={{ duration: 2, repeat: Infinity, delay: 1 }}
// //                   ></motion.div>
// //                   <motion.div 
// //                     className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#01adf0] rounded-br-lg"
// //                     animate={{ opacity: [0.5, 1, 0.5] }}
// //                     transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
// //                   ></motion.div>

// //                   <div className="relative z-10">
// //                     <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

// //                   <motion.div
// //                     className="absolute -top-1 left-1/2 w-2 h-2 bg-[#01adf0] rounded-full"
// //                     animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                   ></motion.div>
// //                   <motion.div
// //                     className="absolute -bottom-1 left-1/2 w-2 h-2 bg-purple-500 rounded-full"
// //                     animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                   ></motion.div>
// //                   <motion.div
// //                     className="absolute top-1/2 -left-1 w-2 h-2 bg-pink-500 rounded-full"
// //                     animate={{ x: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                   ></motion.div>
// //                   <motion.div
// //                     className="absolute top-1/2 -right-1 w-2 h-2 bg-[#01adf0] rounded-full"
// //                     animate={{ x: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                   ></motion.div>
// //                 </motion.div>

// //                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#01adf0] transition-colors duration-300">
// //                   {item.title}
// //                 </h3>

// //                 <motion.div 
// //                   className="w-16 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-4"
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
// //     </section>
// //   );
// // };

// // // ============================================
// // // 4. GLOBAL PRESENCE MAP SECTION (DARK THEME)
// // // ============================================
// // const GlobalPresence = () => {
// //   const worldLocations = [
// //    { country: 'Dubai', flag: '🇦🇪', top: '49%', left: '59%' },
// //        { country: 'India', flag: '🇮🇳', top: '46%', left: '65%' },
// //   ];

// //   const indiaLocations = [
// //     { city: 'Bengaluru', top: '75%', left: '25%' },
// //     { city: 'Hyderabad', top: '67%', left: '34%' },
// //     { city: 'Mumbai', top: '60%', left: '15%' },
// //     { city: 'Noida', top: '26%', left: '30%' },
// //   ];

// //   return (
// //     <section className="py-16 sm:py-20 bg-[#1a103c] relative overflow-hidden">
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-12"
// //         >
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
// //             Our Global <span className="text-purple-400">Presence</span>
// //           </h2>
// //           <p className="text-purple-200/60 text-sm mt-3 tracking-wider uppercase">
// //             Time is Presence - Find us at our global locations
// //           </p>
// //         </motion.div>

// //         <div className="relative w-full max-w-6xl mx-auto aspect-[2/1] mb-16">
// //           <img src="https://digitalcorsel.com/wp-content/uploads/2022/12/Vector-1.png" alt="World Map" className="w-full h-full object-contain opacity-60" loading="lazy" />
// //           {worldLocations.map((loc, idx) => (
// //             <motion.div
// //               key={idx}
// //               initial={{ opacity: 0, scale: 0 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring' }}
// //               className="absolute flex flex-col items-center group cursor-pointer"
// //               style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
// //             >
// //               <div className="relative">
// //                 <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300 border-2 border-purple-400">
// //                   <span className="text-sm sm:text-lg md:text-xl">{loc.flag}</span>
// //                 </div>
// //                 <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
// //               </div>
// //               <div className="mt-1 md:mt-2 text-center">
// //                 <p className="text-white font-semibold text-[8px] sm:text-[10px] md:text-xs bg-black/60 backdrop-blur-sm px-1.5 md:px-2 py-0.5 rounded border border-white/10 whitespace-nowrap">
// //                   {loc.country}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         <div className="relative w-full max-w-2xl mx-auto aspect-[4/5]">
// //           <img src="https://digitalcorsel.com/wp-content/uploads/2022/12/Vector-3.png" alt="India Map" className="w-full h-full object-contain opacity-60" loading="lazy" />
// //           {indiaLocations.map((loc, idx) => (
// //             <motion.div
// //               key={idx}
// //               initial={{ opacity: 0, scale: 0 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring' }}
// //               className="absolute flex flex-col items-center group cursor-pointer"
// //               style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
// //             >
// //               <div className="relative">
// //                 <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300 border-2 border-purple-400">
// //                   <span className="text-sm sm:text-lg">🇮🇳</span>
// //                 </div>
// //                 <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
// //               </div>
// //               <div className="mt-1 text-center">
// //                 <p className="text-white font-semibold text-[8px] sm:text-[10px] bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10 whitespace-nowrap">
// //                   {loc.city}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 5. OUR JOURNEY SECTION (PREMIUM TIMELINE)
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
// //       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP (Managed / Cloud Service Providers) Community: "Technology Pavilion"' },
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
// //     <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      
// //       <div 
// //         className="absolute inset-0 opacity-[0.03] pointer-events-none"
// //         style={{
// //           backgroundImage: `linear-gradient(#01adf0 1px, transparent 1px), linear-gradient(90deg, #01adf0 1px, transparent 1px)`,
// //           backgroundSize: '50px 50px'
// //         }}
// //       ></div>

// //       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
// //       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-20"
// //         >
// //           <span className="text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#01adf0]/20 inline-block mb-4">
// //             Our Journey
// //           </span>
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
// //             TheCoderBox <span className="text-[#01adf0]">Journey</span>
// //           </h2>
// //           <div className="w-24 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mt-4"></div>
// //         </motion.div>

// //         <div className="relative max-w-6xl mx-auto">
          
// //           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01adf0]/30 to-transparent -translate-x-1/2"></div>

// //           {journeyData.map((row, rowIdx) => (
// //             <div key={rowIdx} className="relative mb-20 last:mb-0">
              
// //               <svg 
// //                 className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block"
// //                 viewBox="0 0 1200 100" 
// //                 preserveAspectRatio="none"
// //               >
// //                 <path 
// //                   d={rowIdx % 2 === 0 
// //                     ? "M 0 50 Q 300 0 600 50 T 1200 50" 
// //                     : "M 0 50 Q 300 100 600 50 T 1200 50"
// //                   }
// //                   stroke="#01adf0" 
// //                   strokeWidth="2" 
// //                   strokeDasharray="6 8" 
// //                   fill="none" 
// //                   strokeLinecap="round"
// //                   opacity="0.35"
// //                 />
// //               </svg>

// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
// //                 {row.map((item, idx) => (
// //                   <motion.div
// //                     key={idx}
// //                     initial={{ opacity: 0, y: 40 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ duration: 0.6, delay: idx * 0.15 }}
// //                     className="flex flex-col items-center text-center group"
// //                   >
// //                     <motion.div 
// //                       className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center z-10"
// //                       whileHover={{ scale: 1.1, rotate: 3 }}
// //                       transition={{ type: "spring", stiffness: 300 }}
// //                     >
// //                       <div className="absolute inset-0 rounded-full bg-[#01adf0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                      
// //                       <motion.div
// //                         className="absolute inset-0 rounded-full border-2 border-dashed border-[#01adf0]/40"
// //                         animate={{ rotate: 360 }}
// //                         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //                       ></motion.div>

// //                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#01adf0] via-[#01adf0] to-[#0090d0] flex items-center justify-center shadow-2xl shadow-[#01adf0]/40 border-4 border-white">
                        
// //                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
                        
// //                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
                        
// //                         <div className="text-center px-2 relative z-10">
// //                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">
// //                             {item.shortDate}
// //                           </p>
// //                         </div>
// //                       </div>

// //                       <div className="absolute top-1 right-4 w-3.5 h-3.5 bg-white rounded-full border-2 border-[#01adf0] shadow-lg shadow-[#01adf0]/50">
// //                         <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"></div>
// //                       </div>
// //                     </motion.div>

// //                     <motion.div
// //                       className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01adf0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01adf0]/30 group-hover:-translate-y-2"
// //                     >
// //                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-b-full"></div>

// //                       <h4 className="text-[#01adf0] font-bold text-base sm:text-lg mb-3 mt-2">
// //                         {item.date}
// //                       </h4>

// //                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#01adf0] to-purple-400 mx-auto mb-4 rounded-full"></div>

// //                       <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
// //                         {item.desc}
// //                       </p>
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
// // // 6. TESTIMONIALS SECTION (SWIPER 3D - SAME AS TEAM)
// // // ============================================
// // const Testimonials = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const swiperRef = useRef(null);

// //   const testimonials = [
// //     { name: 'Sobha Interiors', role: 'Interior Design', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-16.jpg', text: "I'm impressed with this Bangalore-based digital marketing firm and the caliber of its work. Very professional, punctual, communicate effectively and comes up with brilliant ideas on time." },
// //     { name: 'Red Bus', role: 'Travel Tech', image: 'https://digitalcorsel.com/wp-content/uploads/2024/12/redbus.png', text: 'Working with Digital Corsel has been a game-changer for RedBus! Their expertise, creativity, and data-driven strategies have elevated our online presence and engagement.' },
// //     { name: 'Ridgetop Dental', role: 'Healthcare', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-19.jpg', text: 'Our digital presence in the local market has been established by a team of talented and driven individuals at Digital Corsel.' },
// //     { name: 'Raxa Solutions', role: 'IT Services', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-18.jpg', text: 'The complete team at this Digital marketing agency is fantastic. They are dedicated and provided us with prompt replies. Simply said, they are the best.' },
// //     { name: 'Booze House', role: 'F&B', image: 'https://digitalcorsel.com/wp-content/uploads/2022/11/New-Project-22.jpg', text: 'Satisfied with this SEO company in Bangalore for their better ROI than conventional marketing platforms. They were super easy to negotiate.' },
// //     { name: 'Looope', role: 'Creative Agency', image: 'https://digitalcorsel.com/wp-content/uploads/2022/11/New-Project-23.jpg', text: "This Digital Marketing Company in Bangalore is one of the greatest I've come across in my extensive experience." }
// //   ];

// //   return (
// //     <section className="relative py-16 sm:py-20 md:py-24 bg-white/[0.02] border-t border-white/10 overflow-hidden">
      
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div
// //           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"
// //           animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
// //           animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         {[...Array(20)].map((_, i) => (
// //           <motion.div
// //             key={i}
// //             className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
// //             style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
// //             animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
// //             transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
// //           />
// //         ))}
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-6 sm:mb-8"
// //         >
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5 }}
// //             className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/20 mb-2"
// //           >
// //             <Quote className="h-3 w-3 text-blue-400" />
// //             <span className="text-blue-400 font-semibold text-[9px] sm:text-[10px] tracking-widest uppercase">
// //               Testimonials
// //             </span>
// //           </motion.div>
          
// //           <motion.h2 
// //             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 leading-tight"
// //             initial={{ opacity: 0, y: 15 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.1 }}
// //           >
// //             Don't Just Take Our{' '}
// //             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// //               Words For It
// //             </span>
// //           </motion.h2>
// //           <motion.p 
// //             className="text-blue-200/60 mt-1 max-w-2xl mx-auto text-[9px] sm:text-[10px]"
// //             initial={{ opacity: 0, y: 15 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.15 }}
// //           >
// //             Hear what our clients have to say about us
// //           </motion.p>
// //         </motion.div>

// //         <div className="relative max-w-5xl mx-auto">
// //           <Swiper
// //             ref={swiperRef}
// //             modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
// //             effect="coverflow"
// //             grabCursor={true}
// //             centeredSlides={true}
// //             slidesPerView="auto"
// //             coverflowEffect={{
// //               rotate: 50,
// //               stretch: 0,
// //               depth: 100,
// //               modifier: 1,
// //               slideShadows: true,
// //             }}
// //             pagination={{
// //               clickable: true,
// //               dynamicBullets: true,
// //             }}
// //             navigation={{
// //               prevEl: '.swiper-button-prev-custom',
// //               nextEl: '.swiper-button-next-custom',
// //             }}
// //             autoplay={{
// //               delay: 4000,
// //               disableOnInteraction: false,
// //               pauseOnMouseEnter: true,
// //             }}
// //             loop={true}
// //             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
// //             breakpoints={{
// //               320: { slidesPerView: 1, spaceBetween: 15 },
// //               640: { slidesPerView: 2, spaceBetween: 20 },
// //               1024: { slidesPerView: 3, spaceBetween: 30 },
// //             }}
// //             className="py-6 px-2 sm:px-6"
// //           >
// //             {testimonials.map((testi, index) => (
// //               <SwiperSlide key={index} className="pb-10">
// //                 {({ isActive }) => (
// //                   <motion.div
// //                     className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-5 sm:p-6 hover:shadow-2xl transition-all duration-400 border ${
// //                       isActive 
// //                         ? 'border-[#01adf0]/50 shadow-2xl shadow-[#01adf0]/20' 
// //                         : 'border-white/10 hover:border-[#01adf0]/30'
// //                     } text-center overflow-hidden`}
// //                     whileHover={{ y: -4 }}
// //                   >
// //                     <motion.div
// //                       className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#01adf0]/0 via-purple-500/0 to-[#01adf0]/0 group-hover:from-[#01adf0]/20 group-hover:via-purple-500/20 group-hover:to-[#01adf0]/20 blur-xl transition-all duration-400 -z-10"
// //                     />

// //                     <div className="relative z-10">
// //                       <div className="mb-3">
// //                         <Quote className="h-6 w-6 text-[#01adf0]/40 mx-auto" />
// //                       </div>

// //                       <div className="relative mb-3 mx-auto w-16 h-16 sm:w-20 sm:h-20">
// //                         <motion.div 
// //                           className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-[#01adf0]/20 group-hover:ring-[#01adf0]/50 shadow-xl shadow-[#01adf0]/10 transition-all duration-300"
// //                           whileHover={{ scale: 1.05 }}
// //                         >
// //                           <img 
// //                             src={testi.image} 
// //                             alt={testi.name}
// //                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                           />
// //                         </motion.div>
// //                       </div>

// //                       <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#01adf0] group-hover:to-purple-400 transition-all duration-300">
// //                         {testi.name}
// //                       </h3>
// //                       <p className="text-[#01adf0] font-medium text-[8px] sm:text-[9px] mt-0.5">{testi.role}</p>

// //                       <div className="flex items-center justify-center gap-0.5 mt-2">
// //                         {[...Array(5)].map((_, i) => (
// //                           <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
// //                         ))}
// //                       </div>

// //                       <div className="w-6 h-0.5 bg-gradient-to-r from-[#01adf0] to-purple-500 mx-auto my-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

// //                       <p className="text-blue-200/60 text-[10px] sm:text-xs leading-relaxed italic">
// //                         "{testi.text}"
// //                       </p>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>

// //           <button
// //             className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
// //             onClick={() => swiperRef.current?.slidePrev()}
// //           >
// //             <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white hover:text-white" />
// //           </button>
// //           <button
// //             className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
// //             onClick={() => swiperRef.current?.slideNext()}
// //           >
// //             <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white hover:text-white" />
// //           </button>
// //         </div>

// //         <motion.div 
// //           className="text-center mt-6 sm:mt-8"
// //           initial={{ opacity: 0, y: 15 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.4, delay: 0.1 }}
// //           viewport={{ once: true }}
// //         >
// //           <motion.a
// //             href="/contact"
// //             whileHover={{ scale: 1.04, boxShadow: "0 15px 30px rgba(1,173,240,0.3)", y: -2 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#01adf0] text-white font-semibold text-[10px] sm:text-xs hover:shadow-xl transition-all duration-300"
// //           >
// //             Become a Client
// //             <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
// //               →
// //             </motion.span>
// //           </motion.a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // 7. CONTACT / FOOTER CTA SECTION (ATTRACTIVE)
// // // ============================================
// // const ContactCTA = () => {
// //   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [focusedField, setFocusedField] = useState(null);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setIsSubmitted(true);
// //     setTimeout(() => setIsSubmitted(false), 5000);
// //   };

// //   const locations = [
// //     { city: 'Bangalore', icon: '🏢', address: '692, 5th floor A, Kay Arr Ivy building 6th A cross, 16th Main Rd, 3rd Block, Koramangala, Bengaluru 560034' },
// //     { city: 'Hyderabad', icon: '🏙️', address: '2nd floor, Survey No.18, Plot No 19 Vaishnavi Cynosure, Gachibowli, Hyderabad, Telangana 500032' },
// //     { city: 'Mumbai', icon: '🌆', address: '303, Brahans Business Park, Paper Box Rd, M.I.D.C, Andheri East, Mumbai, Maharashtra 400093' },
// //   ];

// //   const inputClasses = (fieldName) => `
// //     w-full px-4 py-3.5 bg-white/5 border 
// //     ${focusedField === fieldName ? 'border-[#01adf0]/60 ring-2 ring-[#01adf0]/20' : 'border-white/10'} 
// //     rounded-xl text-white placeholder-white/30 
// //     focus:outline-none focus:ring-2 focus:ring-[#01adf0]/30 focus:border-[#01adf0]/60 
// //     transition-all duration-300 text-sm
// //     hover:border-white/20
// //   `;

// //   return (
// //     <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#0a0a1a] via-[#1a103c] to-[#0a0a1a] overflow-hidden">
      
// //       {/* Animated Background Blobs */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div
// //           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#01adf0]/10 blur-3xl"
// //           animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
// //           animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         {/* Floating particles */}
// //         {[...Array(15)].map((_, i) => (
// //           <motion.div
// //             key={i}
// //             className="absolute w-1 h-1 bg-[#01adf0]/20 rounded-full"
// //             style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
// //             animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
// //             transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
// //           />
// //         ))}
// //       </div>

// //       {/* Subtle Grid Pattern */}
// //       <div 
// //         className="absolute inset-0 opacity-[0.03] pointer-events-none"
// //         style={{
// //           backgroundImage: `linear-gradient(#01adf0 1px, transparent 1px), linear-gradient(90deg, #01adf0 1px, transparent 1px)`,
// //           backgroundSize: '50px 50px'
// //         }}
// //       ></div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16"
// //         >
// //           <span className="text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#01adf0]/20 inline-block mb-4">
// //             Get In Touch
// //           </span>
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
// //             Let's Build Something <span className="bg-gradient-to-r from-[#01adf0] to-purple-400 bg-clip-text text-transparent">Great</span>
// //           </h2>
// //           <div className="w-24 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mt-4"></div>
// //         </motion.div>

// //         <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          
// //           {/* ================= LEFT: CONTACT INFO ================= */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7 }}
// //             className="space-y-6"
// //           >
// //             <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#01adf0]/30 transition-all duration-500 relative overflow-hidden group">
              
// //               {/* Glow Effect */}
// //               <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01adf0]/0 via-[#01adf0]/10 to-purple-500/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

// //               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
// //                 <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center">
// //                   <MapPin className="h-5 w-5 text-[#01adf0]" />
// //                 </div>
// //                 Our Offices
// //               </h3>

// //               <div className="space-y-5">
// //                 {locations.map((loc, idx) => (
// //                   <motion.div
// //                     key={idx}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     viewport={{ once: true }}
// //                     transition={{ duration: 0.4, delay: idx * 0.15 }}
// //                     className="flex items-start gap-4 group/item"
// //                   >
// //                     <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-[#01adf0] to-purple-500 rounded-full flex items-center justify-center text-lg shadow-lg shadow-[#01adf0]/30 group-hover/item:scale-110 transition-transform duration-300">
// //                       {loc.icon}
// //                     </div>
// //                     <div>
// //                       <h4 className="text-white font-semibold text-sm mb-1 group-hover/item:text-[#01adf0] transition-colors">
// //                         {loc.city}
// //                       </h4>
// //                       <p className="text-blue-200/60 text-xs leading-relaxed">
// //                         {loc.address}
// //                       </p>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Contact Quick Info */}
// //             <div className="grid grid-cols-2 gap-4">
// //               <motion.a
// //                 href="tel:+918088550055"
// //                 whileHover={{ y: -3, scale: 1.02 }}
// //                 className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#01adf0]/40 transition-all duration-300 group"
// //               >
// //                 <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
// //                   <Phone className="h-5 w-5 text-[#01adf0]" />
// //                 </div>
// //                 <p className="text-white/50 text-xs mb-1">Call Us</p>
// //                 <p className="text-white font-semibold text-sm">+91 80885 50055</p>
// //               </motion.a>

// //               <motion.a
// //                 href="mailto:support@thecoderbox.com"
// //                 whileHover={{ y: -3, scale: 1.02 }}
// //                 className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#01adf0]/40 transition-all duration-300 group"
// //               >
// //                 <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
// //                   <Mail className="h-5 w-5 text-[#01adf0]" />
// //                 </div>
// //                 <p className="text-white/50 text-xs mb-1">Email Us</p>
// //                 <p className="text-white font-semibold text-xs break-all">support@thecoderbox.com</p>
// //               </motion.a>
// //             </div>
// //           </motion.div>

// //           {/* ================= RIGHT: FORM ================= */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.7, delay: 0.2 }}
// //             className="relative bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 overflow-hidden group"
// //           >
// //             {/* Decorative Corner Accents */}
// //             <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#01adf0]/40 rounded-tl-3xl"></div>
// //             <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#01adf0]/40 rounded-br-3xl"></div>

// //             {/* Glow Effect */}
// //             <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01adf0]/0 via-purple-500/10 to-[#01adf0]/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

// //             {isSubmitted ? (
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 className="text-center py-16"
// //               >
// //                 <motion.div
// //                   className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30"
// //                   animate={{ scale: [1, 1.1, 1] }}
// //                   transition={{ duration: 1.5, repeat: Infinity }}
// //                 >
// //                   <CheckCircle className="h-10 w-10 text-white" />
// //                 </motion.div>
// //                 <h3 className="text-2xl font-bold text-white mb-2">Thank You! 🎉</h3>
// //                 <p className="text-blue-200/60">We'll get back to you soon.</p>
// //               </motion.div>
// //             ) : (
// //               <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
// //                 <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     onFocus={() => setFocusedField('name')}
// //                     onBlur={() => setFocusedField(null)}
// //                     placeholder="Full Name*"
// //                     required
// //                     className={inputClasses('name')}
// //                   />
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     onFocus={() => setFocusedField('email')}
// //                     onBlur={() => setFocusedField(null)}
// //                     placeholder="Email Address*"
// //                     required
// //                     className={inputClasses('email')}
// //                   />
// //                 </div>

// //                 <input
// //                   type="tel"
// //                   name="phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   onFocus={() => setFocusedField('phone')}
// //                   onBlur={() => setFocusedField(null)}
// //                   placeholder="Phone Number"
// //                   className={inputClasses('phone')}
// //                 />

// //                 <textarea
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   onFocus={() => setFocusedField('message')}
// //                   onBlur={() => setFocusedField(null)}
// //                   placeholder="Tell us about your project..."
// //                   rows="4"
// //                   className={inputClasses('message') + ' resize-none'}
// //                 ></textarea>

// //                 <motion.button
// //                   type="submit"
// //                   whileHover={{ scale: 1.02, y: -2 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   className="relative w-full py-4 rounded-xl bg-gradient-to-r from-[#01adf0] to-[#0090d0] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#01adf0]/30 hover:shadow-2xl hover:shadow-[#01adf0]/50 overflow-hidden group/btn"
// //                 >
// //                   {/* Shine Effect */}
// //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  
// //                   <span className="relative z-10 flex items-center gap-2">
// //                     Send Message
// //                     <motion.span
// //                       animate={{ x: [0, 5, 0] }}
// //                       transition={{ duration: 1.5, repeat: Infinity }}
// //                     >
// //                       <Send className="h-4 w-4" />
// //                     </motion.span>
// //                   </span>
// //                 </motion.button>
// //               </form>
// //             )}
// //           </motion.div>
// //         </div>

// //         {/* Bottom Decorative Dots */}
// //         <div className="flex items-center justify-center gap-2 mt-12">
// //           {[...Array(5)].map((_, i) => (
// //             <motion.div
// //               key={i}
// //               className="w-2 h-2 rounded-full bg-[#01adf0]/40"
// //               animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
// //               transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // ============================================
// // // MAIN ABOUT US COMPONENT
// // // ============================================
// // const AboutUs = () => {
// //   return (
// //     <div className="min-h-screen bg-[#0a0a1a] overflow-x-hidden font-sans">
// //       <AboutHero />
// //       <AboutContent />
// //       <VisionMission />
// //       <GlobalPresence />
// //       <HowWeWork />
// //       <Testimonials />
// //       <ContactCTA />
// //     </div>
// //   );
// // };

// // export default AboutUs;







// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { 
//   MapPin, Mail, Star, Award, Users, Briefcase, 
//   ChevronRight, ChevronLeft, Quote, Phone, Send, CheckCircle, Play, X, ArrowRight 
// } from 'lucide-react';
// import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // ============================================
// // 1. HERO SECTION (SIZE SAME - NOT REDUCED)
// // ============================================
// const AboutHero = () => {
//   return (
//     <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0a0a1a] via-[#1a103c] to-[#0a0a1a] overflow-hidden">
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center"></div>
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-4">
//             About Us
//           </span>

//           <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
//             Your Journey of Digital Transformation Begins Here! <br />
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               TheCoderBox
//             </span>
//           </h5>

//           <p className="text-blue-200/60 max-w-2xl mx-auto mt-6 text-sm sm:text-base">
//             A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 2. ABOUT CONTENT SECTION (REDUCED)
// // ============================================
// const AboutContent = () => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
  
//   const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

//   return (
//     <section className="py-10 sm:py-12 md:py-14 bg-[#f1f1f1] relative overflow-hidden">
      
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01adf0]/10 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
//       <div 
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
//           backgroundSize: '40px 40px'
//         }}
//       ></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           <motion.div
//             initial={{ opacity: 0, x: -150, rotate: -5 }}
//             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative w-full max-w-md aspect-[4/5] bg-[#0f172a] rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10">
              
//               <div className="absolute -inset-1 bg-gradient-to-r from-[#01adf0]/20 via-purple-500/20 to-[#01adf0]/20 rounded-[40px] blur-2xl opacity-50"></div>

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
//                   <div className="absolute inset-0 rounded-full bg-[#01adf0]/40 animate-ping"></div>
//                   <div className="absolute inset-[-8px] rounded-full bg-[#01adf0]/20 animate-pulse"></div>
                  
//                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01adf0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01adf0]/50 group-hover:scale-110 transition-transform duration-300">
//                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01adf0] rounded-full flex items-center justify-center border-2 border-white/30">
//                       <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
//                     </div>
//                   </div>
//                 </div>
//               </button>

//               <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
//                 <svg viewBox="0 0 100 100" className="w-full h-full">
//                   <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01adf0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
//                 </svg>
//               </div>

//               <div className="absolute -top-2 -left-2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[#01adf0]/50 rotate-[-30deg] z-30"></div>
//               <div className="absolute -bottom-2 -right-2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-[#01adf0]/50 rotate-[150deg] z-30"></div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 150 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
//           >
//             <span className="inline-block text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 px-3 py-1 rounded-full border border-[#01adf0]/20">
//               About us
//             </span>

//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
//               CRAFTING DIGITAL <br />
//               <span className="text-[#01adf0]">SUCCESS</span>
//             </h2>

//             <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
//               <p>We are CoderBox, your <span className="text-[#01adf0] font-semibold">Leading Digital Marketing Company</span> that helps you mark a strong, noticeable digital presence. Whether you're just starting out, expanding, or already well-established, we offer <span className="text-[#01adf0] font-semibold">digital marketing solutions</span> that fit your needs.</p>
//               <p>We are your AI Powered Digital Marketing Agency, we mix creativity, smart strategies, and the latest technology to make sure you get results that really matter. Our goal is very simple: we want your business to shine (very bright) on the internet!</p>
//               <p>We are CoderBox, your best friends in the digital world. Think of us as not just your <span className="text-[#01adf0] font-semibold">Digital Marketing Company</span> but your go-to partner for everything digital from boosting your online presence to helping your business grow.</p>
//               <p>For over 10 years, CoderBox has been the <span className="text-[#01adf0] font-semibold">Best Digital Marketing Agency in India</span>. We're all about helping companies crush their financial and branding goals with super smart, tailor-made solutions.</p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="mt-6 flex flex-wrap items-center gap-3"
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(1,173,240,0.4)", y: -3 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm"
//               >
//                 Know More
//                 <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//                   <ArrowRight className="h-4 w-4" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {isVideoOpen && (
//         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
//           <button 
//             onClick={() => setIsVideoOpen(false)}
//             className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01adf0] rounded-full flex items-center justify-center transition-colors z-10"
//           >
//             <X className="h-6 w-6 text-white" />
//           </button>
          
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01adf0]/20 border border-white/10"
//           >
//             <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// };


// // ============================================
// // 3. THIS IS US / STATS + VISION & MISSION SECTION (REDUCED)
// // ============================================

// const Counter = ({ end, suffix = '', duration = 2500 }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });

//   useEffect(() => {
//     if (!isInView) return;

//     let startTime = null;
//     const target = parseInt(end);

//     const animate = (currentTime) => {
//       if (startTime === null) startTime = currentTime;
//       const progress = Math.min((currentTime - startTime) / duration, 1);
//       const easedProgress = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(easedProgress * target));

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         setCount(target);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [isInView, end, duration]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const VisionMission = () => {
//   const stats = [
//     { number: 22, suffix: '', label: 'Years and Beyond', autoCount: false },
//     { number: 1000, suffix: '+', label: 'Businesses Transformed', autoCount: true },
//     { number: 5, suffix: '', label: 'Major Certifications', autoCount: false },
//     { number: 7, suffix: '', label: 'Continents Journeyed', autoCount: false },
//   ];

//   const items = [
//     {
//       title: 'Our Vision',
//       icon: 'eye',
//       content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.'
//     },
//     {
//       title: 'Our Mission',
//       icon: 'target',
//       content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.'
//     }
//   ];

//   return (
//     <section className="bg-white">
      
//       <div className="relative py-10 sm:py-12 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a2a] to-[#0a0a1a] overflow-hidden">
        
//         <div className="absolute inset-0 pointer-events-none">
//           <motion.div
//             className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"
//             animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
//             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
//             animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
//             transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//           />
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
//               style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
//               animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
//               transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
//             />
//           ))}
//         </div>

//         <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-8"
//           >
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//               This is us now
//               <span className="block text-base sm:text-lg font-normal text-white/80 mt-2">
//                 A capable engine with multiple milestones
//               </span>
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {stats.map((stat, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white flex items-center justify-center gap-1">
//                   {stat.autoCount ? (
//                     <Counter end={stat.number} suffix={stat.suffix} duration={2500} />
//                   ) : (
//                     <>
//                       <span>{stat.number}</span>
//                       {stat.suffix && <span className="text-3xl sm:text-4xl md:text-5xl">{stat.suffix}</span>}
//                     </>
//                   )}
//                 </div>
//                 <p className="text-white/80 text-xs sm:text-sm mt-2 font-medium tracking-wide">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="relative py-12 sm:py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        
//         <div 
//           className="absolute inset-0 opacity-[0.03] pointer-events-none"
//           style={{
//             backgroundImage: `linear-gradient(#01adf0 1px, transparent 1px), linear-gradient(90deg, #01adf0 1px, transparent 1px)`,
//             backgroundSize: '40px 40px'
//           }}
//         ></div>

//         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

//         <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
//           <div className="grid md:grid-cols-2 gap-16 md:gap-8 max-w-5xl mx-auto">
            
//             {items.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: idx * 0.2 }}
//                 className="text-center group"
//               >
//                 <motion.div 
//                   className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center"
//                   whileHover={{ scale: 1.08, rotate: 5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <motion.div
//                     className="absolute inset-0 rounded-full"
//                     style={{
//                       background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)',
//                       padding: '3px'
//                     }}
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                   >
//                     <div className="w-full h-full rounded-full bg-white"></div>
//                   </motion.div>

//                   <div className="absolute inset-3 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>

//                   <motion.div
//                     className="absolute inset-6 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
//                     animate={{ scale: [1, 1.15, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   ></motion.div>

//                   <motion.div 
//                     className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#01adf0] rounded-tl-lg"
//                     animate={{ opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   ></motion.div>
//                   <motion.div 
//                     className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#01adf0] rounded-tr-lg"
//                     animate={{ opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                   ></motion.div>
//                   <motion.div 
//                     className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#01adf0] rounded-bl-lg"
//                     animate={{ opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 1 }}
//                   ></motion.div>
//                   <motion.div 
//                     className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#01adf0] rounded-br-lg"
//                     animate={{ opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
//                   ></motion.div>

//                   <div className="relative z-10">
//                     <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <defs>
//                         <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
//                           <stop offset="0%" stopColor="#01adf0" />
//                           <stop offset="100%" stopColor="#a855f7" />
//                         </linearGradient>
//                       </defs>
                      
//                       {item.icon === 'eye' ? (
//                         <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                           <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
//                           <circle cx="12" cy="12" r="3" fill={`url(#grad-${idx})`} fillOpacity="0.2" />
//                           <path d="M12 5c-1.5 1-2 3-2 5" strokeWidth="1.8" />
//                           <path d="M12 19c1.5-1 2-3 2-5" strokeWidth="1.8" />
//                         </g>
//                       ) : (
//                         <g stroke={`url(#grad-${idx})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                           <circle cx="12" cy="12" r="10" />
//                           <circle cx="12" cy="12" r="6" />
//                           <circle cx="12" cy="12" r="2" fill={`url(#grad-${idx})`} fillOpacity="0.3" />
//                           <path d="m16 8 4-4" />
//                           <path d="M20 4v4h-4" />
//                         </g>
//                       )}
//                     </svg>
//                   </div>

//                   <motion.div
//                     className="absolute -top-1 left-1/2 w-2 h-2 bg-[#01adf0] rounded-full"
//                     animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   ></motion.div>
//                   <motion.div
//                     className="absolute -bottom-1 left-1/2 w-2 h-2 bg-purple-500 rounded-full"
//                     animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   ></motion.div>
//                   <motion.div
//                     className="absolute top-1/2 -left-1 w-2 h-2 bg-pink-500 rounded-full"
//                     animate={{ x: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   ></motion.div>
//                   <motion.div
//                     className="absolute top-1/2 -right-1 w-2 h-2 bg-[#01adf0] rounded-full"
//                     animate={{ x: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   ></motion.div>
//                 </motion.div>

//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#01adf0] transition-colors duration-300">
//                   {item.title}
//                 </h3>

//                 <motion.div 
//                   className="w-16 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-4"
//                   whileHover={{ width: 80 }}
//                 ></motion.div>

//                 <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
//                   {item.content}
//                 </p>
//               </motion.div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 4. GLOBAL PRESENCE MAP SECTION (REDUCED)
// // ============================================
// const GlobalPresence = () => {
//   const worldLocations = [
//    { country: 'Dubai', flag: '🇦🇪', top: '49%', left: '59%' },
//        { country: 'India', flag: '🇮🇳', top: '46%', left: '65%' },
//   ];

//   const indiaLocations = [
//     { city: 'Bengaluru', top: '75%', left: '25%' },
//     { city: 'Hyderabad', top: '67%', left: '34%' },
//     { city: 'Mumbai', top: '60%', left: '15%' },
//     { city: 'Noida', top: '26%', left: '30%' },
//   ];

//   return (
//     <section className="py-10 sm:py-12 bg-[#1a103c] relative overflow-hidden">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-8"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//             Our Global <span className="text-purple-400">Presence</span>
//           </h2>
//           <p className="text-purple-200/60 text-sm mt-3 tracking-wider uppercase">
//             Time is Presence - Find us at our global locations
//           </p>
//         </motion.div>

//         <div className="relative w-full max-w-6xl mx-auto aspect-[2/1] mb-10">
//           <img src="https://digitalcorsel.com/wp-content/uploads/2022/12/Vector-1.png" alt="World Map" className="w-full h-full object-contain opacity-60" loading="lazy" />
//           {worldLocations.map((loc, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring' }}
//               className="absolute flex flex-col items-center group cursor-pointer"
//               style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
//             >
//               <div className="relative">
//                 <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300 border-2 border-purple-400">
//                   <span className="text-sm sm:text-lg md:text-xl">{loc.flag}</span>
//                 </div>
//                 <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
//               </div>
//               <div className="mt-1 md:mt-2 text-center">
//                 <p className="text-white font-semibold text-[8px] sm:text-[10px] md:text-xs bg-black/60 backdrop-blur-sm px-1.5 md:px-2 py-0.5 rounded border border-white/10 whitespace-nowrap">
//                   {loc.country}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative w-full max-w-2xl mx-auto aspect-[4/5]">
//           <img src="https://digitalcorsel.com/wp-content/uploads/2022/12/Vector-3.png" alt="India Map" className="w-full h-full object-contain opacity-60" loading="lazy" />
//           {indiaLocations.map((loc, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring' }}
//               className="absolute flex flex-col items-center group cursor-pointer"
//               style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
//             >
//               <div className="relative">
//                 <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300 border-2 border-purple-400">
//                   <span className="text-sm sm:text-lg">🇮🇳</span>
//                 </div>
//                 <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
//               </div>
//               <div className="mt-1 text-center">
//                 <p className="text-white font-semibold text-[8px] sm:text-[10px] bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10 whitespace-nowrap">
//                   {loc.city}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 5. OUR JOURNEY SECTION (REDUCED)
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
//       { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP (Managed / Cloud Service Providers) Community: "Technology Pavilion"' },
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
//     <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      
//       <div 
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(#01adf0 1px, transparent 1px), linear-gradient(90deg, #01adf0 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }}
//       ></div>

//       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
//       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <span className="text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#01adf0]/20 inline-block mb-4">
//             Our Journey
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
//             TheCoderBox <span className="text-[#01adf0]">Journey</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mt-4"></div>
//         </motion.div>

//         <div className="relative max-w-6xl mx-auto">
          
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01adf0]/30 to-transparent -translate-x-1/2"></div>

//           {journeyData.map((row, rowIdx) => (
//             <div key={rowIdx} className="relative mb-12 last:mb-0">
              
//               <svg 
//                 className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block"
//                 viewBox="0 0 1200 100" 
//                 preserveAspectRatio="none"
//               >
//                 <path 
//                   d={rowIdx % 2 === 0 
//                     ? "M 0 50 Q 300 0 600 50 T 1200 50" 
//                     : "M 0 50 Q 300 100 600 50 T 1200 50"
//                   }
//                   stroke="#01adf0" 
//                   strokeWidth="2" 
//                   strokeDasharray="6 8" 
//                   fill="none" 
//                   strokeLinecap="round"
//                   opacity="0.35"
//                 />
//               </svg>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
//                 {row.map((item, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: idx * 0.15 }}
//                     className="flex flex-col items-center text-center group"
//                   >
//                     <motion.div 
//                       className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10"
//                       whileHover={{ scale: 1.1, rotate: 3 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <div className="absolute inset-0 rounded-full bg-[#01adf0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                      
//                       <motion.div
//                         className="absolute inset-0 rounded-full border-2 border-dashed border-[#01adf0]/40"
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                       ></motion.div>

//                       <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#01adf0] via-[#01adf0] to-[#0090d0] flex items-center justify-center shadow-2xl shadow-[#01adf0]/40 border-4 border-white">
                        
//                         <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
                        
//                         <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
                        
//                         <div className="text-center px-2 relative z-10">
//                           <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">
//                             {item.shortDate}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="absolute top-1 right-4 w-3.5 h-3.5 bg-white rounded-full border-2 border-[#01adf0] shadow-lg shadow-[#01adf0]/50">
//                         <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"></div>
//                       </div>
//                     </motion.div>

//                     <motion.div
//                       className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01adf0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01adf0]/30 group-hover:-translate-y-2"
//                     >
//                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-b-full"></div>

//                       <h4 className="text-[#01adf0] font-bold text-base sm:text-lg mb-3 mt-2">
//                         {item.date}
//                       </h4>

//                       <div className="w-12 h-0.5 bg-gradient-to-r from-[#01adf0] to-purple-400 mx-auto mb-4 rounded-full"></div>

//                       <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
//                         {item.desc}
//                       </p>
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
// // 6. TESTIMONIALS SECTION (REDUCED)
// // ============================================
// const Testimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);

//   const testimonials = [
//     { name: 'Sobha Interiors', role: 'Interior Design', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-16.jpg', text: "I'm impressed with this Bangalore-based digital marketing firm and the caliber of its work. Very professional, punctual, communicate effectively and comes up with brilliant ideas on time." },
//     { name: 'Red Bus', role: 'Travel Tech', image: 'https://digitalcorsel.com/wp-content/uploads/2024/12/redbus.png', text: 'Working with Digital Corsel has been a game-changer for RedBus! Their expertise, creativity, and data-driven strategies have elevated our online presence and engagement.' },
//     { name: 'Ridgetop Dental', role: 'Healthcare', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-19.jpg', text: 'Our digital presence in the local market has been established by a team of talented and driven individuals at Digital Corsel.' },
//     { name: 'Raxa Solutions', role: 'IT Services', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-18.jpg', text: 'The complete team at this Digital marketing agency is fantastic. They are dedicated and provided us with prompt replies. Simply said, they are the best.' },
//     { name: 'Booze House', role: 'F&B', image: 'https://digitalcorsel.com/wp-content/uploads/2022/11/New-Project-22.jpg', text: 'Satisfied with this SEO company in Bangalore for their better ROI than conventional marketing platforms. They were super easy to negotiate.' },
//     { name: 'Looope', role: 'Creative Agency', image: 'https://digitalcorsel.com/wp-content/uploads/2022/11/New-Project-23.jpg', text: "This Digital Marketing Company in Bangalore is one of the greatest I've come across in my extensive experience." }
//   ];

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 bg-white/[0.02] border-t border-white/10 overflow-hidden">
      
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"
//           animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
//           animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
//             style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
//             animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
//             transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-6 sm:mb-8"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/20 mb-2"
//           >
//             <Quote className="h-3 w-3 text-blue-400" />
//             <span className="text-blue-400 font-semibold text-[9px] sm:text-[10px] tracking-widest uppercase">
//               Testimonials
//             </span>
//           </motion.div>
          
//           <motion.h2 
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 leading-tight"
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             Don't Just Take Our{' '}
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Words For It
//             </span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/60 mt-1 max-w-2xl mx-auto text-[9px] sm:text-[10px]"
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.15 }}
//           >
//             Hear what our clients have to say about us
//           </motion.p>
//         </motion.div>

//         <div className="relative max-w-5xl mx-auto">
//           <Swiper
//             ref={swiperRef}
//             modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//             effect="coverflow"
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView="auto"
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             navigation={{
//               prevEl: '.swiper-button-prev-custom',
//               nextEl: '.swiper-button-next-custom',
//             }}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             loop={true}
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//             breakpoints={{
//               320: { slidesPerView: 1, spaceBetween: 15 },
//               640: { slidesPerView: 2, spaceBetween: 20 },
//               1024: { slidesPerView: 3, spaceBetween: 30 },
//             }}
//             className="py-6 px-2 sm:px-6"
//           >
//             {testimonials.map((testi, index) => (
//               <SwiperSlide key={index} className="pb-10">
//                 {({ isActive }) => (
//                   <motion.div
//                     className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-5 sm:p-6 hover:shadow-2xl transition-all duration-400 border ${
//                       isActive 
//                         ? 'border-[#01adf0]/50 shadow-2xl shadow-[#01adf0]/20' 
//                         : 'border-white/10 hover:border-[#01adf0]/30'
//                     } text-center overflow-hidden`}
//                     whileHover={{ y: -4 }}
//                   >
//                     <motion.div
//                       className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#01adf0]/0 via-purple-500/0 to-[#01adf0]/0 group-hover:from-[#01adf0]/20 group-hover:via-purple-500/20 group-hover:to-[#01adf0]/20 blur-xl transition-all duration-400 -z-10"
//                     />

//                     <div className="relative z-10">
//                       <div className="mb-3">
//                         <Quote className="h-6 w-6 text-[#01adf0]/40 mx-auto" />
//                       </div>

//                       <div className="relative mb-3 mx-auto w-16 h-16 sm:w-20 sm:h-20">
//                         <motion.div 
//                           className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-[#01adf0]/20 group-hover:ring-[#01adf0]/50 shadow-xl shadow-[#01adf0]/10 transition-all duration-300"
//                           whileHover={{ scale: 1.05 }}
//                         >
//                           <img 
//                             src={testi.image} 
//                             alt={testi.name}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                           />
//                         </motion.div>
//                       </div>

//                       <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#01adf0] group-hover:to-purple-400 transition-all duration-300">
//                         {testi.name}
//                       </h3>
//                       <p className="text-[#01adf0] font-medium text-[8px] sm:text-[9px] mt-0.5">{testi.role}</p>

//                       <div className="flex items-center justify-center gap-0.5 mt-2">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
//                         ))}
//                       </div>

//                       <div className="w-6 h-0.5 bg-gradient-to-r from-[#01adf0] to-purple-500 mx-auto my-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

//                       <p className="text-blue-200/60 text-[10px] sm:text-xs leading-relaxed italic">
//                         "{testi.text}"
//                       </p>
//                     </div>
//                   </motion.div>
//                 )}
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <button
//             className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
//             onClick={() => swiperRef.current?.slidePrev()}
//           >
//             <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white hover:text-white" />
//           </button>
//           <button
//             className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
//             onClick={() => swiperRef.current?.slideNext()}
//           >
//             <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white hover:text-white" />
//           </button>
//         </div>

//         <motion.div 
//           className="text-center mt-6 sm:mt-8"
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.04, boxShadow: "0 15px 30px rgba(1,173,240,0.3)", y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#01adf0] text-white font-semibold text-[10px] sm:text-xs hover:shadow-xl transition-all duration-300"
//           >
//             Become a Client
//             <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//               →
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 7. CONTACT / FOOTER CTA SECTION (REDUCED)
// // ============================================
// const ContactCTA = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 5000);
//   };

//   const locations = [
//     { city: 'Bangalore', icon: '🏢', address: '692, 5th floor A, Kay Arr Ivy building 6th A cross, 16th Main Rd, 3rd Block, Koramangala, Bengaluru 560034' },
//     { city: 'Hyderabad', icon: '🏙️', address: '2nd floor, Survey No.18, Plot No 19 Vaishnavi Cynosure, Gachibowli, Hyderabad, Telangana 500032' },
//     { city: 'Mumbai', icon: '🌆', address: '303, Brahans Business Park, Paper Box Rd, M.I.D.C, Andheri East, Mumbai, Maharashtra 400093' },
//   ];

//   const inputClasses = (fieldName) => `
//     w-full px-4 py-3.5 bg-white/5 border 
//     ${focusedField === fieldName ? 'border-[#01adf0]/60 ring-2 ring-[#01adf0]/20' : 'border-white/10'} 
//     rounded-xl text-white placeholder-white/30 
//     focus:outline-none focus:ring-2 focus:ring-[#01adf0]/30 focus:border-[#01adf0]/60 
//     transition-all duration-300 text-sm
//     hover:border-white/20
//   `;

//   return (
//     <section className="relative py-12 sm:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#1a103c] to-[#0a0a1a] overflow-hidden">
      
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#01adf0]/10 blur-3xl"
//           animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
//           animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-[#01adf0]/20 rounded-full"
//             style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
//             animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
//             transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
//           />
//         ))}
//       </div>

//       <div 
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(#01adf0 1px, transparent 1px), linear-gradient(90deg, #01adf0 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }}
//       ></div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <span className="text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#01adf0]/20 inline-block mb-4">
//             Get In Touch
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//             Let's Build Something <span className="bg-gradient-to-r from-[#01adf0] to-purple-400 bg-clip-text text-transparent">Great</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mt-4"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="space-y-6"
//           >
//             <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#01adf0]/30 transition-all duration-500 relative overflow-hidden group">
              
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01adf0]/0 via-[#01adf0]/10 to-purple-500/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

//               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
//                 <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center">
//                   <MapPin className="h-5 w-5 text-[#01adf0]" />
//                 </div>
//                 Our Offices
//               </h3>

//               <div className="space-y-5">
//                 {locations.map((loc, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: idx * 0.15 }}
//                     className="flex items-start gap-4 group/item"
//                   >
//                     <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-[#01adf0] to-purple-500 rounded-full flex items-center justify-center text-lg shadow-lg shadow-[#01adf0]/30 group-hover/item:scale-110 transition-transform duration-300">
//                       {loc.icon}
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold text-sm mb-1 group-hover/item:text-[#01adf0] transition-colors">
//                         {loc.city}
//                       </h4>
//                       <p className="text-blue-200/60 text-xs leading-relaxed">
//                         {loc.address}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <motion.a
//                 href="tel:+918088550055"
//                 whileHover={{ y: -3, scale: 1.02 }}
//                 className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#01adf0]/40 transition-all duration-300 group"
//               >
//                 <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
//                   <Phone className="h-5 w-5 text-[#01adf0]" />
//                 </div>
//                 <p className="text-white/50 text-xs mb-1">Call Us</p>
//                 <p className="text-white font-semibold text-sm">+91 80885 50055</p>
//               </motion.a>

//               <motion.a
//                 href="mailto:support@thecoderbox.com"
//                 whileHover={{ y: -3, scale: 1.02 }}
//                 className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#01adf0]/40 transition-all duration-300 group"
//               >
//                 <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
//                   <Mail className="h-5 w-5 text-[#01adf0]" />
//                 </div>
//                 <p className="text-white/50 text-xs mb-1">Email Us</p>
//                 <p className="text-white font-semibold text-xs break-all">support@thecoderbox.com</p>
//               </motion.a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="relative bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 overflow-hidden group"
//           >
//             <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#01adf0]/40 rounded-tl-3xl"></div>
//             <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#01adf0]/40 rounded-br-3xl"></div>

//             <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01adf0]/0 via-purple-500/10 to-[#01adf0]/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

//             {isSubmitted ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-16"
//               >
//                 <motion.div
//                   className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30"
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <CheckCircle className="h-10 w-10 text-white" />
//                 </motion.div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Thank You! 🎉</h3>
//                 <p className="text-blue-200/60">We'll get back to you soon.</p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
//                 <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField('name')}
//                     onBlur={() => setFocusedField(null)}
//                     placeholder="Full Name*"
//                     required
//                     className={inputClasses('name')}
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField('email')}
//                     onBlur={() => setFocusedField(null)}
//                     placeholder="Email Address*"
//                     required
//                     className={inputClasses('email')}
//                   />
//                 </div>

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('phone')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Phone Number"
//                   className={inputClasses('phone')}
//                 />

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('message')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Tell us about your project..."
//                   rows="4"
//                   className={inputClasses('message') + ' resize-none'}
//                 ></textarea>

//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="relative w-full py-4 rounded-xl bg-gradient-to-r from-[#01adf0] to-[#0090d0] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#01adf0]/30 hover:shadow-2xl hover:shadow-[#01adf0]/50 overflow-hidden group/btn"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  
//                   <span className="relative z-10 flex items-center gap-2">
//                     Send Message
//                     <motion.span
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                     >
//                       <Send className="h-4 w-4" />
//                     </motion.span>
//                   </span>
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>
//         </div>

//         <div className="flex items-center justify-center gap-2 mt-8">
//           {[...Array(5)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="w-2 h-2 rounded-full bg-[#01adf0]/40"
//               animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
//               transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // MAIN ABOUT US COMPONENT
// // ============================================
// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-[#0a0a1a] overflow-x-hidden font-sans">
//       <AboutHero />
//       <AboutContent />
//       <VisionMission />
//       <GlobalPresence />
//       <HowWeWork />
//       <Testimonials />
//       <ContactCTA />
//     </div>
//   );
// };

// export default AboutUs;







import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, Mail, Star, Award, Users, Briefcase, 
  ChevronRight, ChevronLeft, Quote, Phone, Send, CheckCircle, Play, X, ArrowRight 
} from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ============================================
// 1. HERO SECTION (SIZE SAME - NOT REDUCED)
// ============================================
const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0a0a1a] via-[#1a103c] to-[#0a0a1a] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-4">
            About Us
          </span>

          <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
            Your Journey of Digital Transformation Begins Here! <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TheCoderBox
            </span>
          </h5>

          <p className="text-blue-200/60 max-w-2xl mx-auto mt-6 text-sm sm:text-base">
            A group of creative thinkers gathered under one roof collaboratively striving forward with a motto to take business developments to its pinnacle.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 2. ABOUT CONTENT SECTION (REDUCED - NO GRID)
// ============================================
const AboutContent = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const videoUrl = "https://thecoderbox.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-03-at-18.07.03_dc978412.mp4";

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-[#f1f1f1] relative overflow-hidden">
      
      {/* Only Blobs - No Grid */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01adf0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -150, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] bg-[#0f172a] rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-[#01adf0]/20 via-purple-500/20 to-[#01adf0]/20 rounded-[40px] blur-2xl opacity-50"></div>

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
                  <div className="absolute inset-0 rounded-full bg-[#01adf0]/40 animate-ping"></div>
                  <div className="absolute inset-[-8px] rounded-full bg-[#01adf0]/20 animate-pulse"></div>
                  
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#01adf0] rounded-full flex items-center justify-center shadow-2xl shadow-[#01adf0]/50 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#01adf0] rounded-full flex items-center justify-center border-2 border-white/30">
                      <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white fill-current ml-1" />
                    </div>
                  </div>
                </div>
              </button>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-30">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M 10 90 Q 10 50 50 30 Q 80 20 90 10" stroke="#01adf0" strokeWidth="4" strokeDasharray="8 6" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              <div className="absolute -top-2 -left-2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-[#01adf0]/50 rotate-[-30deg] z-30"></div>
              <div className="absolute -bottom-2 -right-2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-[#01adf0]/50 rotate-[150deg] z-30"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
          >
            <span className="inline-block text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 px-3 py-1 rounded-full border border-[#01adf0]/20">
              About us
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              CRAFTING DIGITAL <br />
              <span className="text-[#01adf0]">SUCCESS</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>We are CoderBox, your <span className="text-[#01adf0] font-semibold">Leading Digital Marketing Company</span> that helps you mark a strong, noticeable digital presence. Whether you're just starting out, expanding, or already well-established, we offer <span className="text-[#01adf0] font-semibold">digital marketing solutions</span> that fit your needs.</p>
              <p>We are your AI Powered Digital Marketing Agency, we mix creativity, smart strategies, and the latest technology to make sure you get results that really matter. Our goal is very simple: we want your business to shine (very bright) on the internet!</p>
              <p>We are CoderBox, your best friends in the digital world. Think of us as not just your <span className="text-[#01adf0] font-semibold">Digital Marketing Company</span> but your go-to partner for everything digital from boosting your online presence to helping your business grow.</p>
              <p>For over 10 years, CoderBox has been the <span className="text-[#01adf0] font-semibold">Best Digital Marketing Agency in India</span>. We're all about helping companies crush their financial and branding goals with super smart, tailor-made solutions.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(1,173,240,0.4)", y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm"
              >
                Know More
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#01adf0] rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-[#01adf0]/20 border border-white/10"
          >
            <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" />
          </motion.div>
        </div>
      )}
    </section>
  );
};


// ============================================
// 3. THIS IS US / STATS + VISION & MISSION SECTION (NO GRID)
// ============================================

const Counter = ({ end, suffix = '', duration = 2500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const target = parseInt(end);

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const VisionMission = () => {
  const stats = [
    { number: 22, suffix: '', label: 'Years and Beyond', autoCount: false },
    { number: 1000, suffix: '+', label: 'Businesses Transformed', autoCount: true },
    { number: 5, suffix: '', label: 'Major Certifications', autoCount: false },
    { number: 7, suffix: '', label: 'Continents Journeyed', autoCount: false },
  ];

  const items = [
    {
      title: 'Our Vision',
      icon: 'eye',
      content: 'To become the Most Preferred Technology Solution & Service provider in the Global Market.'
    },
    {
      title: 'Our Mission',
      icon: 'target',
      content: 'Our mission is to provide top-notch agile digital transformation services, which will help enhance the business.'
    }
  ];

  return (
    <section className="bg-white">
      
      <div className="relative py-10 sm:py-12 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a2a] to-[#0a0a1a] overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"
            animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
            animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
              transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              This is us now
              <span className="block text-base sm:text-lg font-normal text-white/80 mt-2">
                A capable engine with multiple milestones
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white flex items-center justify-center gap-1">
                  {stat.autoCount ? (
                    <Counter end={stat.number} suffix={stat.suffix} duration={2500} />
                  ) : (
                    <>
                      <span>{stat.number}</span>
                      {stat.suffix && <span className="text-3xl sm:text-4xl md:text-5xl">{stat.suffix}</span>}
                    </>
                  )}
                </div>
                <p className="text-white/80 text-xs sm:text-sm mt-2 font-medium tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative py-12 sm:py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        
        {/* Only Blobs - No Grid */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-8 max-w-5xl mx-auto">
            
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="text-center group"
              >
                <motion.div 
                  className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center"
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, #01adf0, #a855f7, #ec4899, #01adf0)',
                      padding: '3px'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-white"></div>
                  </motion.div>

                  <div className="absolute inset-3 rounded-full border-2 border-dashed border-[#01adf0]/40"></div>

                  <motion.div
                    className="absolute inset-6 rounded-full bg-gradient-to-br from-[#01adf0]/10 to-purple-500/10"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>

                  <motion.div 
                    className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#01adf0] rounded-tl-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#01adf0] rounded-tr-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#01adf0] rounded-bl-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#01adf0] rounded-br-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  ></motion.div>

                  <div className="relative z-10">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                  <motion.div
                    className="absolute -top-1 left-1/2 w-2 h-2 bg-[#01adf0] rounded-full"
                    animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-2 h-2 bg-purple-500 rounded-full"
                    animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-1/2 -left-1 w-2 h-2 bg-pink-500 rounded-full"
                    animate={{ x: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-1/2 -right-1 w-2 h-2 bg-[#01adf0] rounded-full"
                    animate={{ x: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#01adf0] transition-colors duration-300">
                  {item.title}
                </h3>

                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mb-4"
                  whileHover={{ width: 80 }}
                ></motion.div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                  {item.content}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 4. GLOBAL PRESENCE MAP SECTION (REDUCED - NO GRID)
// ============================================
const GlobalPresence = () => {
  const worldLocations = [
   { country: 'Dubai', flag: '🇦🇪', top: '49%', left: '59%' },
       { country: 'India', flag: '🇮🇳', top: '46%', left: '65%' },
  ];

  const indiaLocations = [
    { city: 'Bengaluru', top: '75%', left: '25%' },
    { city: 'Hyderabad', top: '67%', left: '34%' },
    { city: 'Mumbai', top: '60%', left: '15%' },
    { city: 'Noida', top: '26%', left: '30%' },
  ];

  return (
    <section className="py-10 sm:py-12 bg-[#1a103c] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Global <span className="text-purple-400">Presence</span>
          </h2>
          <p className="text-purple-200/60 text-sm mt-3 tracking-wider uppercase">
            Time is Presence - Find us at our global locations
          </p>
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto aspect-[2/1] mb-10">
          <img src="https://digitalcorsel.com/wp-content/uploads/2022/12/Vector-1.png" alt="World Map" className="w-full h-full object-contain opacity-60" loading="lazy" />
          {worldLocations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring' }}
              className="absolute flex flex-col items-center group cursor-pointer"
              style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300 border-2 border-purple-400">
                  <span className="text-sm sm:text-lg md:text-xl">{loc.flag}</span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
              </div>
              <div className="mt-1 md:mt-2 text-center">
                <p className="text-white font-semibold text-[8px] sm:text-[10px] md:text-xs bg-black/60 backdrop-blur-sm px-1.5 md:px-2 py-0.5 rounded border border-white/10 whitespace-nowrap">
                  {loc.country}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-[4/5]">
          <img src="https://digitalcorsel.com/wp-content/uploads/2022/12/Vector-3.png" alt="India Map" className="w-full h-full object-contain opacity-60" loading="lazy" />
          {indiaLocations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring' }}
              className="absolute flex flex-col items-center group cursor-pointer"
              style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform duration-300 border-2 border-purple-400">
                  <span className="text-sm sm:text-lg">🇮🇳</span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
              </div>
              <div className="mt-1 text-center">
                <p className="text-white font-semibold text-[8px] sm:text-[10px] bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10 whitespace-nowrap">
                  {loc.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 5. OUR JOURNEY SECTION (REDUCED - NO GRID)
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
      { date: 'September 6, 2016', shortDate: 'SEP 6', desc: 'A Solution for MSP / CSP (Managed / Cloud Service Providers) Community: "Technology Pavilion"' },
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
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      
      {/* Only Blobs - No Grid */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01adf0]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#01adf0]/20 inline-block mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            TheCoderBox <span className="text-[#01adf0]">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01adf0]/30 to-transparent -translate-x-1/2"></div>

          {journeyData.map((row, rowIdx) => (
            <div key={rowIdx} className="relative mb-12 last:mb-0">
              
              <svg 
                className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none hidden md:block"
                viewBox="0 0 1200 100" 
                preserveAspectRatio="none"
              >
                <path 
                  d={rowIdx % 2 === 0 
                    ? "M 0 50 Q 300 0 600 50 T 1200 50" 
                    : "M 0 50 Q 300 100 600 50 T 1200 50"
                  }
                  stroke="#01adf0" 
                  strokeWidth="2" 
                  strokeDasharray="6 8" 
                  fill="none" 
                  strokeLinecap="round"
                  opacity="0.35"
                />
              </svg>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
                {row.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <motion.div 
                      className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center z-10"
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-[#01adf0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                      
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-dashed border-[#01adf0]/40"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      ></motion.div>

                      <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#01adf0] via-[#01adf0] to-[#0090d0] flex items-center justify-center shadow-2xl shadow-[#01adf0]/40 border-4 border-white">
                        
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-white/20 rounded-full blur-sm"></div>
                        
                        <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/50"></div>
                        
                        <div className="text-center px-2 relative z-10">
                          <p className="text-white font-extrabold text-xs sm:text-sm leading-tight uppercase tracking-wider drop-shadow-md">
                            {item.shortDate}
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-1 right-4 w-3.5 h-3.5 bg-white rounded-full border-2 border-[#01adf0] shadow-lg shadow-[#01adf0]/50">
                        <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="relative bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-[#01adf0]/20 transition-all duration-500 w-full max-w-xs group-hover:border-[#01adf0]/30 group-hover:-translate-y-2"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-b-full"></div>

                      <h4 className="text-[#01adf0] font-bold text-base sm:text-lg mb-3 mt-2">
                        {item.date}
                      </h4>

                      <div className="w-12 h-0.5 bg-gradient-to-r from-[#01adf0] to-purple-400 mx-auto mb-4 rounded-full"></div>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
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
// 6. TESTIMONIALS SECTION (REDUCED - NO GRID)
// ============================================
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const testimonials = [
    { name: 'Sobha Interiors', role: 'Interior Design', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-16.jpg', text: "I'm impressed with this Bangalore-based digital marketing firm and the caliber of its work. Very professional, punctual, communicate effectively and comes up with brilliant ideas on time." },
    { name: 'Red Bus', role: 'Travel Tech', image: 'https://digitalcorsel.com/wp-content/uploads/2024/12/redbus.png', text: 'Working with Digital Corsel has been a game-changer for RedBus! Their expertise, creativity, and data-driven strategies have elevated our online presence and engagement.' },
    { name: 'Ridgetop Dental', role: 'Healthcare', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-19.jpg', text: 'Our digital presence in the local market has been established by a team of talented and driven individuals at Digital Corsel.' },
    { name: 'Raxa Solutions', role: 'IT Services', image: 'https://digitalcorsel.com/wp-content/uploads/2022/08/New-Project-18.jpg', text: 'The complete team at this Digital marketing agency is fantastic. They are dedicated and provided us with prompt replies. Simply said, they are the best.' },
    { name: 'Booze House', role: 'F&B', image: 'https://digitalcorsel.com/wp-content/uploads/2022/11/New-Project-22.jpg', text: 'Satisfied with this SEO company in Bangalore for their better ROI than conventional marketing platforms. They were super easy to negotiate.' },
    { name: 'Looope', role: 'Creative Agency', image: 'https://digitalcorsel.com/wp-content/uploads/2022/11/New-Project-23.jpg', text: "This Digital Marketing Company in Bangalore is one of the greatest I've come across in my extensive experience." }
  ];

  return (
    <section className="relative py-10 sm:py-12 md:py-14 bg-white/[0.02] border-t border-white/10 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"
          animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
          animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/20 mb-2"
          >
            <Quote className="h-3 w-3 text-blue-400" />
            <span className="text-blue-400 font-semibold text-[9px] sm:text-[10px] tracking-widest uppercase">
              Testimonials
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Don't Just Take Our{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Words For It
            </span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/60 mt-1 max-w-2xl mx-auto text-[9px] sm:text-[10px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Hear what our clients have to say about us
          </motion.p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="py-6 px-2 sm:px-6"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide key={index} className="pb-10">
                {({ isActive }) => (
                  <motion.div
                    className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-5 sm:p-6 hover:shadow-2xl transition-all duration-400 border ${
                      isActive 
                        ? 'border-[#01adf0]/50 shadow-2xl shadow-[#01adf0]/20' 
                        : 'border-white/10 hover:border-[#01adf0]/30'
                    } text-center overflow-hidden`}
                    whileHover={{ y: -4 }}
                  >
                    <motion.div
                      className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#01adf0]/0 via-purple-500/0 to-[#01adf0]/0 group-hover:from-[#01adf0]/20 group-hover:via-purple-500/20 group-hover:to-[#01adf0]/20 blur-xl transition-all duration-400 -z-10"
                    />

                    <div className="relative z-10">
                      <div className="mb-3">
                        <Quote className="h-6 w-6 text-[#01adf0]/40 mx-auto" />
                      </div>

                      <div className="relative mb-3 mx-auto w-16 h-16 sm:w-20 sm:h-20">
                        <motion.div 
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-[#01adf0]/20 group-hover:ring-[#01adf0]/50 shadow-xl shadow-[#01adf0]/10 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src={testi.image} 
                            alt={testi.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </motion.div>
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#01adf0] group-hover:to-purple-400 transition-all duration-300">
                        {testi.name}
                      </h3>
                      <p className="text-[#01adf0] font-medium text-[8px] sm:text-[9px] mt-0.5">{testi.role}</p>

                      <div className="flex items-center justify-center gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <div className="w-6 h-0.5 bg-gradient-to-r from-[#01adf0] to-purple-500 mx-auto my-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                      <p className="text-blue-200/60 text-[10px] sm:text-xs leading-relaxed italic">
                        "{testi.text}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white hover:text-white" />
          </button>
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white hover:text-white" />
          </button>
        </div>

        <motion.div 
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04, boxShadow: "0 15px 30px rgba(1,173,240,0.3)", y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#01adf0] text-white font-semibold text-[10px] sm:text-xs hover:shadow-xl transition-all duration-300"
          >
            Become a Client
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 7. CONTACT / FOOTER CTA SECTION (REDUCED - NO GRID)
// ============================================
const ContactCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const locations = [
    { city: 'Bangalore', icon: '🏢', address: '692, 5th floor A, Kay Arr Ivy building 6th A cross, 16th Main Rd, 3rd Block, Koramangala, Bengaluru 560034' },
    { city: 'Hyderabad', icon: '🏙️', address: '2nd floor, Survey No.18, Plot No 19 Vaishnavi Cynosure, Gachibowli, Hyderabad, Telangana 500032' },
    { city: 'Mumbai', icon: '🌆', address: '303, Brahans Business Park, Paper Box Rd, M.I.D.C, Andheri East, Mumbai, Maharashtra 400093' },
  ];

  const inputClasses = (fieldName) => `
    w-full px-4 py-3.5 bg-white/5 border 
    ${focusedField === fieldName ? 'border-[#01adf0]/60 ring-2 ring-[#01adf0]/20' : 'border-white/10'} 
    rounded-xl text-white placeholder-white/30 
    focus:outline-none focus:ring-2 focus:ring-[#01adf0]/30 focus:border-[#01adf0]/60 
    transition-all duration-300 text-sm
    hover:border-white/20
  `;

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#1a103c] to-[#0a0a1a] overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#01adf0]/10 blur-3xl"
          animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
          animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#01adf0]/20 rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0], x: [0, Math.random() * 15 - 7, 0] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#01adf0] font-semibold text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#01adf0]/20 inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let's Build Something <span className="bg-gradient-to-r from-[#01adf0] to-purple-400 bg-clip-text text-transparent">Great</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#01adf0] to-purple-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#01adf0]/30 transition-all duration-500 relative overflow-hidden group">
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01adf0]/0 via-[#01adf0]/10 to-purple-500/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#01adf0]" />
                </div>
                Our Offices
              </h3>

              <div className="space-y-5">
                {locations.map((loc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-[#01adf0] to-purple-500 rounded-full flex items-center justify-center text-lg shadow-lg shadow-[#01adf0]/30 group-hover/item:scale-110 transition-transform duration-300">
                      {loc.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1 group-hover/item:text-[#01adf0] transition-colors">
                        {loc.city}
                      </h4>
                      <p className="text-blue-200/60 text-xs leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="tel:+918088550055"
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#01adf0]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-[#01adf0]" />
                </div>
                <p className="text-white/50 text-xs mb-1">Call Us</p>
                <p className="text-white font-semibold text-sm">+91 80885 50055</p>
              </motion.a>

              <motion.a
                href="mailto:support@thecoderbox.com"
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#01adf0]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#01adf0]/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-[#01adf0]" />
                </div>
                <p className="text-white/50 text-xs mb-1">Email Us</p>
                <p className="text-white font-semibold text-xs break-all">support@thecoderbox.com</p>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#01adf0]/40 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#01adf0]/40 rounded-br-3xl"></div>

            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#01adf0]/0 via-purple-500/10 to-[#01adf0]/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <CheckCircle className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You! 🎉</h3>
                <p className="text-blue-200/60">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Full Name*"
                    required
                    className={inputClasses('name')}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Email Address*"
                    required
                    className={inputClasses('email')}
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Phone Number"
                  className={inputClasses('phone')}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your project..."
                  rows="4"
                  className={inputClasses('message') + ' resize-none'}
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-4 rounded-xl bg-gradient-to-r from-[#01adf0] to-[#0090d0] text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#01adf0]/30 hover:shadow-2xl hover:shadow-[#01adf0]/50 overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send className="h-4 w-4" />
                    </motion.span>
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#01adf0]/40"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN ABOUT US COMPONENT
// ============================================
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1a] overflow-x-hidden font-sans">
      <AboutHero />
      <AboutContent />
      <VisionMission />
      <GlobalPresence />
      <HowWeWork />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default AboutUs;