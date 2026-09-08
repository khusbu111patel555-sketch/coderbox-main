// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { ArrowRight, Star, Users, Award, Target, Play, Sparkles, Zap, ChevronRight } from 'lucide-react';
// // // import Particles from './Particles';

// // // const HeroSection = () => {
// // //   // Animation variants for staggered animations
// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: 0.15,
// // //         delayChildren: 0.2
// // //       }
// // //     }
// // //   };

// // //   const itemVariants = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.7,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
// // //       {/* Background Effects */}
// // //       <div className="absolute inset-0">
// // //         <div 
// // //           className="absolute inset-0 opacity-20"
// // //           style={{
// // //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
// // //           }}
// // //         />
        
// // //         {/* Animated Gradient Orbs with more dynamic movement */}
// // //         <motion.div
// // //           className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent blur-3xl"
// // //           animate={{ 
// // //             x: [0, 150, -100, 0],
// // //             y: [0, -80, 60, 0],
// // //             scale: [1, 1.3, 0.7, 1],
// // //             rotate: [0, 45, -30, 0]
// // //           }}
// // //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-600/20 via-cyan-600/10 to-transparent blur-3xl"
// // //           animate={{ 
// // //             x: [0, -120, 80, 0],
// // //             y: [0, 60, -80, 0],
// // //             scale: [1, 0.8, 1.4, 1],
// // //             rotate: [0, -45, 30, 0]
// // //           }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/10 to-violet-600/10 blur-3xl"
// // //           animate={{ 
// // //             scale: [1, 1.2, 0.9, 1],
// // //             rotate: [0, 180, 360, 0],
// // //             opacity: [0.3, 0.6, 0.3]
// // //           }}
// // //           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// // //         />
// // //       </div>

// // //       {/* Particles */}
// // //       <Particles />

// // //       {/* Main Content with increased side spacing */}
// // //       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10 py-20">
// // //         <motion.div 
// // //           className="grid lg:grid-cols-2 gap-16 items-center"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           animate="visible"
// // //         >
// // //           {/* Left Column */}
// // //           <div className="space-y-8">
// // //             {/* Badge with bounce */}
// // //             {/* <motion.div
// // //               variants={itemVariants}
// // //               whileHover={{ scale: 1.05 }}
// // //               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm cursor-default"
// // //             > */}
// // //               {/* <motion.div
// // //                 animate={{ 
// // //                   rotate: [0, 15, -15, 0],
// // //                   scale: [1, 1.2, 1]
// // //                 }}
// // //                 transition={{ duration: 2, repeat: Infinity }}
// // //               >
// // //                 <Sparkles className="h-4 w-4 text-yellow-400" />
// // //               </motion.div> */}
// // //               {/* <span className="text-sm text-blue-200/80 font-medium">Trusted by 1000+ businesses</span>
// // //               <motion.div
// // //                 animate={{ x: [0, 6, 0] }}
// // //                 transition={{ duration: 1.5, repeat: Infinity }}
// // //               >
// // //                 <ChevronRight className="h-3 w-3 text-blue-200/60" />
// // //               </motion.div> */}
// // //             {/* </motion.div> */}

// // //             {/* Main Heading with gradient animation */}
// // //             <motion.div variants={itemVariants}>
// // //               <motion.h1 
// // //                 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight pt-10"
// // //                 initial={{ opacity: 0, y: 40 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.2 }}
// // //               >
// // //                 Build Better{' '}
// // //                 <motion.span 
// // //                   className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
// // //                   animate={{ 
// // //                     backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// // //                   }}
// // //                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// // //                   style={{ backgroundSize: '200% 200%' }}
// // //                 >
// // //                   Digital
// // //                 </motion.span>{' '}
// // //                 Experiences
// // //               </motion.h1>
// // //             </motion.div>
            
// // //             {/* Description with fade */}
// // //             <motion.p 
// // //               variants={itemVariants}
// // //               className="text-xl text-blue-200/80 max-w-lg leading-relaxed font-light"
// // //             >
// // //               Transform your ideas into powerful digital solutions with our expert team. 
// // //               We combine cutting-edge technology with creative design.
// // //             </motion.p>
            
// // //             {/* Buttons with enhanced animations */}
// // //             <motion.div 
// // //               variants={itemVariants}
// // //               className="flex flex-wrap gap-4"
// // //             >
// // //               <motion.a
// // //                 href="/contact"
// // //                 whileHover={{ 
// // //                   scale: 1.05, 
// // //                   boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
// // //                   y: -3
// // //                 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className="group relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300"
// // //               >
// // //                 <span className="relative z-10 flex items-center">
// // //                   Start Building
// // //                   <motion.span
// // //                     animate={{ x: [0, 6, 0] }}
// // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // //                   >
// // //                     <ArrowRight className="ml-2 h-5 w-5" />
// // //                   </motion.span>
// // //                 </span>
// // //                 <motion.div 
// // //                   className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
// // //                   initial={{ opacity: 0 }}
// // //                   whileHover={{ opacity: 1 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 />
// // //               </motion.a>
              
// // //               <motion.a
// // //                 href="#how-we-work"
// // //                 whileHover={{ 
// // //                   scale: 1.05,
// // //                   borderColor: "rgba(255,255,255,0.6)"
// // //                 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className="group px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2"
// // //               >
// // //                 <motion.span
// // //                   animate={{ 
// // //                     scale: [1, 1.3, 1],
// // //                     opacity: [0.7, 1, 0.7]
// // //                   }}
// // //                   transition={{ duration: 2, repeat: Infinity }}
// // //                 >
// // //                   <Play className="h-5 w-5" />
// // //                 </motion.span>
// // //                 Watch Demo
// // //               </motion.a>
// // //             </motion.div>

// // //             {/* Stats with hover effects */}
// // //             {/* <motion.div 
// // //               variants={itemVariants}
// // //               className="flex items-center gap-8 pt-6 border-t border-white/10"
// // //             >
// // //               <motion.div 
// // //                 className="flex -space-x-2"
// // //                 whileHover={{ scale: 1.05 }}
// // //               >
// // //                 {['JD', 'MK', 'SR', 'AL'].map((initials, i) => (
// // //                   <motion.div 
// // //                     key={i} 
// // //                     className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm"
// // //                     style={{ zIndex: 4 - i }}
// // //                     whileHover={{ 
// // //                       y: -6,
// // //                       borderColor: "rgba(255,255,255,0.6)",
// // //                       scale: 1.1
// // //                     }}
// // //                   >
// // //                     {initials}
// // //                   </motion.div>
// // //                 ))}
// // //               </motion.div>
// // //               <div>
// // //                 <div className="flex items-center gap-1">
// // //                   {[1, 2, 3, 4, 5].map((i) => (
// // //                     <motion.div
// // //                       key={i}
// // //                       whileHover={{ scale: 1.3, rotate: 15 }}
// // //                     >
// // //                       <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
// // //                     </motion.div>
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-blue-200/60 text-sm">Join 5,000+ happy clients</p>
// // //               </div>
// // //             </motion.div> */}
// // //           </div>

// // //           {/* Right Column - Interactive Card with enhanced animations */}
// // //           <motion.div
// // //             variants={itemVariants}
// // //             className="hidden lg:block"
// // //           >
// // //             <motion.div 
// // //               className="relative group"
// // //               whileHover={{ scale: 1.02, y: -5 }}
// // //               transition={{ duration: 0.3 }}
// // //             >
// // //               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
// // //               <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(99,102,241,0.4)] transition-all duration-500">
// // //                 <motion.div 
// // //                   className="absolute top-0 right-0 -mt-4 -mr-4"
// // //                   animate={{ 
// // //                     rotate: [0, 5, -5, 0],
// // //                     scale: [1, 1.05, 1]
// // //                   }}
// // //                   transition={{ duration: 3, repeat: Infinity }}
// // //                 >
// // //                   <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
// // //                     ⚡ Popular
// // //                   </div>
// // //                 </motion.div>
                
// // //                 <div className="space-y-6 relative">
// // //                   <motion.div 
// // //                     className="flex items-center justify-between pb-4 border-b border-white/10"
// // //                     whileHover={{ x: 8 }}
// // //                     transition={{ duration: 0.2 }}
// // //                   >
// // //                     <div className="flex items-center space-x-4">
// // //                       <motion.div 
// // //                         className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-3 rounded-xl backdrop-blur-sm"
// // //                         whileHover={{ rotate: 10, scale: 1.1 }}
// // //                       >
// // //                         <Users className="h-6 w-6 text-blue-300" />
// // //                       </motion.div>
// // //                       <div>
// // //                         <motion.div 
// // //                           className="text-white font-bold text-3xl"
// // //                           whileHover={{ scale: 1.05 }}
// // //                         >
// // //                           12,847
// // //                         </motion.div>
// // //                         <div className="text-blue-200/60 text-sm">Active Users</div>
// // //                       </div>
// // //                     </div>
// // //                     <motion.div 
// // //                       className="flex items-center gap-1 text-yellow-400"
// // //                       whileHover={{ scale: 1.1 }}
// // //                     >
// // //                       <Star className="h-5 w-5 fill-yellow-400" />
// // //                       <span className="text-white font-bold">4.9</span>
// // //                     </motion.div>
// // //                   </motion.div>
                  
// // //                   <motion.div 
// // //                     className="flex items-center justify-between pb-4 border-b border-white/10"
// // //                     whileHover={{ x: 8 }}
// // //                     transition={{ duration: 0.2 }}
// // //                   >
// // //                     <div className="flex items-center space-x-4">
// // //                       <motion.div 
// // //                         className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-xl backdrop-blur-sm"
// // //                         whileHover={{ rotate: 10, scale: 1.1 }}
// // //                       >
// // //                         <Award className="h-6 w-6 text-purple-300" />
// // //                       </motion.div>
// // //                       <div>
// // //                         <motion.div 
// // //                           className="text-white font-bold text-3xl"
// // //                           whileHover={{ scale: 1.05 }}
// // //                         >
// // //                           15+
// // //                         </motion.div>
// // //                         <div className="text-blue-200/60 text-sm">Years Expertise</div>
// // //                       </div>
// // //                     </div>
// // //                     <motion.div 
// // //                       className="text-emerald-400 text-xs font-medium bg-emerald-400/10 px-3 py-1 rounded-full"
// // //                       whileHover={{ scale: 1.05 }}
// // //                     >
// // //                       🏆 Award Winning
// // //                     </motion.div>
// // //                   </motion.div>
                  
// // //                   <motion.div 
// // //                     className="flex items-center justify-between"
// // //                     whileHover={{ x: 8 }}
// // //                     transition={{ duration: 0.2 }}
// // //                   >
// // //                     <div className="flex items-center space-x-4">
// // //                       <motion.div 
// // //                         className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-3 rounded-xl backdrop-blur-sm"
// // //                         whileHover={{ rotate: 10, scale: 1.1 }}
// // //                       >
// // //                         <Target className="h-6 w-6 text-orange-300" />
// // //                       </motion.div>
// // //                       <div>
// // //                         <motion.div 
// // //                           className="text-white font-bold text-3xl"
// // //                           whileHover={{ scale: 1.05 }}
// // //                         >
// // //                           99.8%
// // //                         </motion.div>
// // //                         <div className="text-blue-200/60 text-sm">Success Rate</div>
// // //                       </div>
// // //                     </div>
// // //                     <motion.div 
// // //                       className="text-blue-300 text-xs font-medium bg-blue-400/10 px-3 py-1 rounded-full flex items-center gap-1"
// // //                       whileHover={{ scale: 1.05 }}
// // //                     >
// // //                       <Zap className="h-3 w-3" />
// // //                       Fast Delivery
// // //                     </motion.div>
// // //                   </motion.div>

// // //                   {/* Progress bar with animated counter */}
// // //                   <motion.div 
// // //                     className="pt-4 border-t border-white/10"
// // //                     whileHover={{ scale: 1.02 }}
// // //                   >
// // //                     <div className="flex justify-between text-xs text-blue-200/60 mb-1">
// // //                       <span>Project completion</span>
// // //                       <motion.span
// // //                         initial={{ opacity: 0 }}
// // //                         animate={{ opacity: 1 }}
// // //                         transition={{ delay: 0.8 }}
// // //                       >
// // //                         94%
// // //                       </motion.span>
// // //                     </div>
// // //                     <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
// // //                       <motion.div 
// // //                         className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
// // //                         initial={{ width: 0 }}
// // //                         animate={{ width: '94%' }}
// // //                         transition={{ duration: 1.5, delay: 0.8 }}
// // //                       />
// // //                     </div>
// // //                   </motion.div>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection










// // // import React, { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // // const HeroSection = () => {
// // //   // ===== VIDEOS DATA WITH TEXT =====
// // //   const videos = [
// // //     {
// // //       id: 1,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Build Better Digital Experiences',
// // //       highlightedText: 'Digital',
// // //       description: 'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
// // //       buttonText: 'Start Building',
// // //       badge: 'AI-Powered Innovation'
// // //     },
// // //     {
// // //       id: 2,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Secure Your Digital Future',
// // //       highlightedText: 'Secure',
// // //       description: 'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
// // //       buttonText: 'Get Protected',
// // //       badge: 'Cybersecurity Expert'
// // //     },
// // //     {
// // //       id: 3,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Scale Your Business with AI',
// // //       highlightedText: 'AI',
// // //       description: 'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
// // //       buttonText: 'Explore AI',
// // //       badge: 'AI-Powered Solutions'
// // //     }
// // //   ];

// // //   // ===== RIGHT COLUMN CARDS DATA =====
// // //   const rightCards = [
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
// // //         </svg>
// // //       ),
// // //       title: 'AI-Powered Security',
// // //       description: 'Real-time threat detection & response',
// // //       color: 'border-blue-500/30',
// // //       bg: 'bg-blue-500/20'
// // //     },
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
// // //         </svg>
// // //       ),
// // //       title: 'Scalable Infrastructure',
// // //       description: 'Enterprise-grade performance & reliability',
// // //       color: 'border-purple-500/30',
// // //       bg: 'bg-purple-500/20'
// // //     },
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// // //         </svg>
// // //       ),
// // //       title: 'Zero-Trust Security',
// // //       description: 'Advanced protection for modern threats',
// // //       color: 'border-pink-500/30',
// // //       bg: 'bg-pink-500/20'
// // //     }
// // //   ];

// // //   // ===== STATE =====
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   // ===== AUTO-PLAY LOGIC =====
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentIndex((prev) => (prev + 1) % videos.length);
// // //     }, 6000);

// // //     return () => clearInterval(interval);
// // //   }, [videos.length]);

// // //   // ===== NAVIGATION FUNCTIONS =====
// // //   const goToPrevious = () => {
// // //     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
// // //   };

// // //   const goToNext = () => {
// // //     setCurrentIndex((prev) => (prev + 1) % videos.length);
// // //   };

// // //   const goToSlide = (index) => {
// // //     setCurrentIndex(index);
// // //   };

// // //   const currentVideo = videos[currentIndex];

// // //   // ===== TEXT ANIMATION VARIANTS =====
// // //   const textVariants = {
// // //     initial: { opacity: 0, y: 30 },
// // //     animate: { 
// // //       opacity: 1, 
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.6,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       y: -30,
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   const headingTextVariants = {
// // //     initial: { opacity: 0, y: 40, scale: 0.95 },
// // //     animate: { 
// // //       opacity: 1, 
// // //       y: 0, 
// // //       scale: 1,
// // //       transition: {
// // //         duration: 0.7,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       y: -40, 
// // //       scale: 0.95,
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative min-h-screen flex items-center overflow-hidden">
      
// // //       {/* ===== BACKGROUND VIDEO ===== */}
// // //       <div className="absolute inset-0 w-full h-full z-0">
// // //         <div className="absolute inset-0 bg-black/60 z-10"></div>
        
// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={currentIndex}
// // //             initial={{ opacity: 0, scale: 1.05 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             exit={{ opacity: 0, scale: 0.95 }}
// // //             transition={{ duration: 1.2, ease: "easeInOut" }}
// // //             className="absolute inset-0 w-full h-full"
// // //           >
// // //             <iframe
// // //               src={currentVideo.url}
// // //               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
// // //               style={{ 
// // //                 width: '100vw', 
// // //                 height: '100vh',
// // //                 pointerEvents: 'none'
// // //               }}
// // //               allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
// // //               allowFullScreen
// // //               title={`Background Video ${currentIndex + 1}`}
// // //             />
// // //           </motion.div>
// // //         </AnimatePresence>
// // //       </div>

// // //       {/* ===== LEFT ARROW ===== */}
// // //       <button
// // //         onClick={goToPrevious}
// // //         className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// // //         aria-label="Previous video"
// // //       >
// // //         <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// // //       </button>

// // //       {/* ===== RIGHT ARROW ===== */}
// // //       <button
// // //         onClick={goToNext}
// // //         className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// // //         aria-label="Next video"
// // //       >
// // //         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// // //       </button>

// // //       {/* ===== DOTS INDICATOR ===== */}
// // //       <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
// // //         {videos.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => goToSlide(index)}
// // //             className={`transition-all duration-300 rounded-full ${
// // //               index === currentIndex 
// // //                 ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-white shadow-lg shadow-blue-500/50' 
// // //                 : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/70'
// // //             }`}
// // //             aria-label={`Go to video ${index + 1}`}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* ===== MAIN CONTENT ===== */}
// // //       <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20 py-16 sm:py-20 lg:py-24">
// // //         <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 xl:gap-14 2xl:gap-20 items-center">
          
// // //           {/* ===== LEFT COLUMN - Text with Animation ===== */}
// // //           <div className="lg:col-span-3">
// // //             <AnimatePresence mode="wait">
// // //               <motion.div
// // //                 key={currentIndex}
// // //                 initial="initial"
// // //                 animate="animate"
// // //                 exit="exit"
// // //                 className="space-y-5 sm:space-y-6 lg:space-y-8 xl:space-y-10 max-w-3xl"
// // //               >
// // //                 {/* Badge */}
// // //                 <motion.div variants={textVariants}>
// // //                   <span className="inline-block text-blue-300 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30">
// // //                     {currentVideo.badge}
// // //                   </span>
// // //                 </motion.div>

// // //                 {/* Main Heading */}
// // //                 <motion.h1 
// // //                   variants={headingTextVariants}
// // //                   className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-[1.05] tracking-tight"
// // //                 >
// // //                   {currentVideo.heading.split(currentVideo.highlightedText)[0]}
// // //                   <motion.span 
// // //                     className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
// // //                     animate={{ 
// // //                       backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// // //                     }}
// // //                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// // //                     style={{ backgroundSize: '200% 200%' }}
// // //                   >
// // //                     {currentVideo.highlightedText}
// // //                   </motion.span>
// // //                   {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
// // //                 </motion.h1>
                
// // //                 {/* Description */}
// // //                 <motion.p 
// // //                   variants={textVariants}
// // //                   className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-200/80 max-w-2xl leading-relaxed font-light"
// // //                 >
// // //                   {currentVideo.description}
// // //                 </motion.p>
                
// // //                 {/* Buttons */}
// // //                 <motion.div 
// // //                   variants={textVariants}
// // //                   className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 pt-1 sm:pt-2"
// // //                 >
// // //                   <motion.a
// // //                     href="/contact"
// // //                     whileHover={{ 
// // //                       scale: 1.05, 
// // //                       boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
// // //                       y: -3
// // //                     }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="group relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 text-sm sm:text-base lg:text-lg xl:text-xl"
// // //                   >
// // //                     <span className="relative z-10 flex items-center">
// // //                       {currentVideo.buttonText}
// // //                       <motion.span
// // //                         animate={{ x: [0, 6, 0] }}
// // //                         transition={{ duration: 1.5, repeat: Infinity }}
// // //                       >
// // //                         <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
// // //                       </motion.span>
// // //                     </span>
// // //                     <motion.div 
// // //                       className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
// // //                       initial={{ opacity: 0 }}
// // //                       whileHover={{ opacity: 1 }}
// // //                       transition={{ duration: 0.3 }}
// // //                     />
// // //                   </motion.a>
                  
// // //                   <motion.a
// // //                     href="#how-we-work"
// // //                     whileHover={{ 
// // //                       scale: 1.05,
// // //                       borderColor: "rgba(255,255,255,0.6)"
// // //                     }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2 text-sm sm:text-base lg:text-lg xl:text-xl"
// // //                   >
// // //                     <Play className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
// // //                     Watch Demo
// // //                   </motion.a>
// // //                 </motion.div>
// // //               </motion.div>
// // //             </AnimatePresence>
// // //           </div>

// // //           {/* ===== RIGHT COLUMN - Feature Cards ===== */}
// // //           <div className="lg:col-span-2">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.4 }}
// // //               className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6"
// // //             >
// // //               {rightCards.map((card, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   whileHover={{ 
// // //                     scale: 1.02,
// // //                     x: 5,
// // //                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
// // //                   }}
// // //                   className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 xl:p-7 border ${card.color} hover:border-white/30 transition-all duration-300`}
// // //                 >
// // //                   <div className="flex items-start gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
// // //                     <div className={`${card.bg} p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl flex-shrink-0`}>
// // //                       {card.icon}
// // //                     </div>
// // //                     <div className="min-w-0 flex-1">
// // //                       <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">{card.title}</h3>
// // //                       <p className="text-blue-200/60 text-xs sm:text-sm lg:text-base xl:text-lg truncate">{card.description}</p>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;









// // // import React, { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // // const HeroSection = () => {
// // //   // ===== VIDEOS DATA WITH TEXT =====
// // //   const videos = [
// // //     {
// // //       id: 1,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Build Better Digital Experiences',
// // //       highlightedText: 'Digital',
// // //       description: 'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
// // //       buttonText: 'Start Building',
// // //       badge: 'AI-Powered Innovation'
// // //     },
// // //     {
// // //       id: 2,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Secure Your Digital Future',
// // //       highlightedText: 'Secure',
// // //       description: 'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
// // //       buttonText: 'Get Protected',
// // //       badge: 'Cybersecurity Expert'
// // //     },
// // //     {
// // //       id: 3,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Scale Your Business with AI',
// // //       highlightedText: 'AI',
// // //       description: 'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
// // //       buttonText: 'Explore AI',
// // //       badge: 'AI-Powered Solutions'
// // //     }
// // //   ];

// // //   // ===== RIGHT COLUMN CARDS DATA =====
// // //   const rightCards = [
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
// // //         </svg>
// // //       ),
// // //       title: 'AI-Powered Security',
// // //       description: 'Real-time threat detection & response',
// // //       color: 'border-blue-500/30',
// // //       bg: 'bg-blue-500/20'
// // //     },
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
// // //         </svg>
// // //       ),
// // //       title: 'Scalable Infrastructure',
// // //       description: 'Enterprise-grade performance & reliability',
// // //       color: 'border-purple-500/30',
// // //       bg: 'bg-purple-500/20'
// // //     },
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// // //         </svg>
// // //       ),
// // //       title: 'Zero-Trust Security',
// // //       description: 'Advanced protection for modern threats',
// // //       color: 'border-pink-500/30',
// // //       bg: 'bg-pink-500/20'
// // //     }
// // //   ];

// // //   // ===== STATE =====
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   // ===== AUTO-PLAY LOGIC =====
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentIndex((prev) => (prev + 1) % videos.length);
// // //     }, 6000);

// // //     return () => clearInterval(interval);
// // //   }, [videos.length]);

// // //   // ===== NAVIGATION FUNCTIONS =====
// // //   const goToPrevious = () => {
// // //     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
// // //   };

// // //   const goToNext = () => {
// // //     setCurrentIndex((prev) => (prev + 1) % videos.length);
// // //   };

// // //   const goToSlide = (index) => {
// // //     setCurrentIndex(index);
// // //   };

// // //   const currentVideo = videos[currentIndex];

// // //   // ===== TEXT ANIMATION VARIANTS =====
// // //   const textVariants = {
// // //     initial: { opacity: 0, y: 30 },
// // //     animate: { 
// // //       opacity: 1, 
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.6,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       y: -30,
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   const headingTextVariants = {
// // //     initial: { opacity: 0, y: 40, scale: 0.95 },
// // //     animate: { 
// // //       opacity: 1, 
// // //       y: 0, 
// // //       scale: 1,
// // //       transition: {
// // //         duration: 0.7,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       y: -40, 
// // //       scale: 0.95,
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative min-h-screen flex items-center overflow-hidden">
      
// // //       {/* ===== BACKGROUND VIDEO ===== */}
// // //       <div className="absolute inset-0 w-full h-full z-0">
// // //         <div className="absolute inset-0 bg-black/60 z-10"></div>
        
// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={currentIndex}
// // //             initial={{ opacity: 0, scale: 1.05 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             exit={{ opacity: 0, scale: 0.95 }}
// // //             transition={{ duration: 1.2, ease: "easeInOut" }}
// // //             className="absolute inset-0 w-full h-full"
// // //           >
// // //             <iframe
// // //               src={currentVideo.url}
// // //               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
// // //               style={{ 
// // //                 width: '100vw', 
// // //                 height: '100vh',
// // //                 pointerEvents: 'none'
// // //               }}
// // //               allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
// // //               allowFullScreen
// // //               title={`Background Video ${currentIndex + 1}`}
// // //             />
// // //           </motion.div>
// // //         </AnimatePresence>
// // //       </div>

// // //       {/* ===== LEFT ARROW ===== */}
// // //       <button
// // //         onClick={goToPrevious}
// // //         className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// // //         aria-label="Previous video"
// // //       >
// // //         <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// // //       </button>

// // //       {/* ===== RIGHT ARROW ===== */}
// // //       <button
// // //         onClick={goToNext}
// // //         className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// // //         aria-label="Next video"
// // //       >
// // //         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// // //       </button>

// // //       {/* ===== DOTS INDICATOR ===== */}
// // //       <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
// // //         {videos.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => goToSlide(index)}
// // //             className={`transition-all duration-300 rounded-full ${
// // //               index === currentIndex 
// // //                 ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-white shadow-lg shadow-blue-500/50' 
// // //                 : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/70'
// // //             }`}
// // //             aria-label={`Go to video ${index + 1}`}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* ===== MAIN CONTENT ===== */}
// // //       <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20 py-16 sm:py-20 lg:py-24">
// // //         <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 xl:gap-14 2xl:gap-20 items-center">
          
// // //           {/* ===== LEFT COLUMN - Text with Animation ===== */}
// // //           <div className="lg:col-span-3">
// // //             <AnimatePresence mode="wait">
// // //               <motion.div
// // //                 key={currentIndex}
// // //                 initial="initial"
// // //                 animate="animate"
// // //                 exit="exit"
// // //                 className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 max-w-3xl"
// // //               >
// // //                 {/* Badge - SMALLER */}
// // //                 <motion.div variants={textVariants}>
// // //                   <span className="inline-block text-blue-300 font-medium text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30">
// // //                     {currentVideo.badge}
// // //                   </span>
// // //                 </motion.div>

// // //                 {/* Main Heading - SMALLER: h1 60px, Highlighted 54px */}
// // //                 <motion.h1 
// // //                   variants={headingTextVariants}
// // //                   className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[60px] 2xl:text-[60px] font-bold text-white leading-[1.1] tracking-tight"
// // //                 >
// // //                   {/* Regular text - 60px */}
// // //                   <span className="text-white">
// // //                     {currentVideo.heading.split(currentVideo.highlightedText)[0]}
// // //                   </span>
                  
// // //                   {/* Highlighted text - 54px */}
// // //                   <motion.span 
// // //                     className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
// // //                     style={{ fontSize: '54px' }}
// // //                     animate={{ 
// // //                       backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// // //                     }}
// // //                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// // //                   >
// // //                     {currentVideo.highlightedText}
// // //                   </motion.span>
                  
// // //                   {/* Remaining text - 60px */}
// // //                   <span className="text-white">
// // //                     {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
// // //                   </span>
// // //                 </motion.h1>
                
// // //                 {/* Description - SMALLER */}
// // //                 <motion.p 
// // //                   variants={textVariants}
// // //                   className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-200/80 max-w-2xl leading-relaxed font-light"
// // //                 >
// // //                   {currentVideo.description}
// // //                 </motion.p>
                
// // //                 {/* Buttons - SMALLER */}
// // //                 <motion.div 
// // //                   variants={textVariants}
// // //                   className="flex flex-wrap gap-3 sm:gap-4 pt-1"
// // //                 >
// // //                   <motion.a
// // //                     href="/contact"
// // //                     whileHover={{ 
// // //                       scale: 1.05, 
// // //                       boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
// // //                       y: -3
// // //                     }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="group relative px-5 sm:px-7 md:px-9 lg:px-10 py-2.5 sm:py-3.5 lg:py-4 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 text-xs sm:text-sm lg:text-base xl:text-lg"
// // //                   >
// // //                     <span className="relative z-10 flex items-center">
// // //                       {currentVideo.buttonText}
// // //                       <motion.span
// // //                         animate={{ x: [0, 6, 0] }}
// // //                         transition={{ duration: 1.5, repeat: Infinity }}
// // //                       >
// // //                         <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
// // //                       </motion.span>
// // //                     </span>
// // //                     <motion.div 
// // //                       className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
// // //                       initial={{ opacity: 0 }}
// // //                       whileHover={{ opacity: 1 }}
// // //                       transition={{ duration: 0.3 }}
// // //                     />
// // //                   </motion.a>
                  
// // //                   <motion.a
// // //                     href="#how-we-work"
// // //                     whileHover={{ 
// // //                       scale: 1.05,
// // //                       borderColor: "rgba(255,255,255,0.6)"
// // //                     }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="group px-5 sm:px-7 md:px-9 lg:px-10 py-2.5 sm:py-3.5 lg:py-4 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2 text-xs sm:text-sm lg:text-base xl:text-lg"
// // //                   >
// // //                     <Play className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
// // //                     Watch Demo
// // //                   </motion.a>
// // //                 </motion.div>
// // //               </motion.div>
// // //             </AnimatePresence>
// // //           </div>

// // //           {/* ===== RIGHT COLUMN - Feature Cards ===== */}
// // //           <div className="lg:col-span-2">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.4 }}
// // //               className="space-y-2.5 sm:space-y-3 lg:space-y-4 xl:space-y-5"
// // //             >
// // //               {rightCards.map((card, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   whileHover={{ 
// // //                     scale: 1.02,
// // //                     x: 5,
// // //                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
// // //                   }}
// // //                   className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-5 xl:p-6 border ${card.color} hover:border-white/30 transition-all duration-300`}
// // //                 >
// // //                   <div className="flex items-start gap-2.5 sm:gap-3 lg:gap-4 xl:gap-5">
// // //                     <div className={`${card.bg} p-1.5 sm:p-2.5 lg:p-3.5 rounded-lg sm:rounded-xl lg:rounded-2xl flex-shrink-0`}>
// // //                       {card.icon}
// // //                     </div>
// // //                     <div className="min-w-0 flex-1">
// // //                       <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">{card.title}</h3>
// // //                       <p className="text-blue-200/60 text-[10px] sm:text-xs lg:text-sm xl:text-base truncate">{card.description}</p>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;











// // // import React, { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // // const HeroSection = () => {
// // //   // ===== VIDEOS DATA WITH TEXT =====
// // //   const videos = [
// // //     {
// // //       id: 1,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Build Better Digital Experiences',
// // //       highlightedText: 'Digital',
// // //       description: 'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
// // //       buttonText: 'Start Building',
// // //       badge: 'AI-Powered Innovation'
// // //     },
// // //     {
// // //       id: 2,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Secure Your Digital Future',
// // //       highlightedText: 'Secure',
// // //       description: 'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
// // //       buttonText: 'Get Protected',
// // //       badge: 'Cybersecurity Expert'
// // //     },
// // //     {
// // //       id: 3,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Scale Your Business with AI',
// // //       highlightedText: 'AI',
// // //       description: 'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
// // //       buttonText: 'Explore AI',
// // //       badge: 'AI-Powered Solutions'
// // //     }
// // //   ];

// // //   // ===== RIGHT COLUMN CARDS DATA =====
// // //   const rightCards = [
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
// // //         </svg>
// // //       ),
// // //       title: 'AI-Powered Security',
// // //       description: 'Real-time threat detection & response',
// // //       color: 'border-blue-500/30',
// // //       bg: 'bg-blue-500/20'
// // //     },
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
// // //         </svg>
// // //       ),
// // //       title: 'Scalable Infrastructure',
// // //       description: 'Enterprise-grade performance & reliability',
// // //       color: 'border-purple-500/30',
// // //       bg: 'bg-purple-500/20'
// // //     },
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// // //         </svg>
// // //       ),
// // //       title: 'Zero-Trust Security',
// // //       description: 'Advanced protection for modern threats',
// // //       color: 'border-pink-500/30',
// // //       bg: 'bg-pink-500/20'
// // //     }
// // //   ];

// // //   // ===== STATE =====
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   // ===== AUTO-PLAY LOGIC =====
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentIndex((prev) => (prev + 1) % videos.length);
// // //     }, 6000);

// // //     return () => clearInterval(interval);
// // //   }, [videos.length]);

// // //   // ===== NAVIGATION FUNCTIONS =====
// // //   const goToPrevious = () => {
// // //     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
// // //   };

// // //   const goToNext = () => {
// // //     setCurrentIndex((prev) => (prev + 1) % videos.length);
// // //   };

// // //   const goToSlide = (index) => {
// // //     setCurrentIndex(index);
// // //   };

// // //   const currentVideo = videos[currentIndex];

// // //   // ===== TEXT ANIMATION VARIANTS =====
// // //   const textVariants = {
// // //     initial: { opacity: 0, y: 30 },
// // //     animate: { 
// // //       opacity: 1, 
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.6,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       y: -30,
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   const headingTextVariants = {
// // //     initial: { opacity: 0, y: 40, scale: 0.95 },
// // //     animate: { 
// // //       opacity: 1, 
// // //       y: 0, 
// // //       scale: 1,
// // //       transition: {
// // //         duration: 0.7,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       y: -40, 
// // //       scale: 0.95,
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative w-full h-screen flex items-center overflow-hidden">
      
// // //       {/* ===== BACKGROUND VIDEO - FULL SCREEN ===== */}
// // //       <div className="absolute inset-0 w-full h-full z-0">
// // //         <div className="absolute inset-0 bg-black/60 z-10"></div>
        
// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={currentIndex}
// // //             initial={{ opacity: 0, scale: 1.05 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             exit={{ opacity: 0, scale: 0.95 }}
// // //             transition={{ duration: 1.2, ease: "easeInOut" }}
// // //             className="absolute inset-0 w-full h-full"
// // //           >
// // //             <iframe
// // //               src={currentVideo.url}
// // //               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
// // //               style={{ 
// // //                 width: '100vw', 
// // //                 height: '100vh',
// // //                 pointerEvents: 'none',
// // //                 objectFit: 'cover'
// // //               }}
// // //               allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
// // //               allowFullScreen
// // //               title={`Background Video ${currentIndex + 1}`}
// // //             />
// // //           </motion.div>
// // //         </AnimatePresence>
// // //       </div>

// // //       {/* ===== LEFT ARROW ===== */}
// // //       <button
// // //         onClick={goToPrevious}
// // //         className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// // //         aria-label="Previous video"
// // //       >
// // //         <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// // //       </button>

// // //       {/* ===== RIGHT ARROW ===== */}
// // //       <button
// // //         onClick={goToNext}
// // //         className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// // //         aria-label="Next video"
// // //       >
// // //         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// // //       </button>

// // //       {/* ===== DOTS INDICATOR ===== */}
// // //       <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
// // //         {videos.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => goToSlide(index)}
// // //             className={`transition-all duration-300 rounded-full ${
// // //               index === currentIndex 
// // //                 ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-white shadow-lg shadow-blue-500/50' 
// // //                 : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/70'
// // //             }`}
// // //             aria-label={`Go to video ${index + 1}`}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* ===== MAIN CONTENT - Full Screen Centered with WIDER COLUMNS ===== */}
// // //       <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20">
// // //         <div className="grid lg:grid-cols-6 gap-8 lg:gap-10 xl:gap-14 2xl:gap-20 items-center min-h-[80vh]">
          
// // //           {/* ===== LEFT COLUMN - WIDER (4 columns instead of 3) ===== */}
// // //           <div className="lg:col-span-4">
// // //             <AnimatePresence mode="wait">
// // //               <motion.div
// // //                 key={currentIndex}
// // //                 initial="initial"
// // //                 animate="animate"
// // //                 exit="exit"
// // //                 className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 max-w-4xl"
// // //               >
// // //                 {/* Badge */}
// // //                 <motion.div variants={textVariants}>
// // //                   <span className="inline-block text-blue-300 font-medium text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30">
// // //                     {currentVideo.badge}
// // //                   </span>
// // //                 </motion.div>

// // //                 {/* Main Heading */}
// // //                 <motion.h1 
// // //                   variants={headingTextVariants}
// // //                   className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[60px] 2xl:text-[60px] font-bold text-white leading-[1.1] tracking-tight"
// // //                 >
// // //                   <span className="text-white">
// // //                     {currentVideo.heading.split(currentVideo.highlightedText)[0]}
// // //                   </span>
                  
// // //                   <motion.span 
// // //                     className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
// // //                     style={{ fontSize: '54px' }}
// // //                     animate={{ 
// // //                       backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// // //                     }}
// // //                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// // //                   >
// // //                     {currentVideo.highlightedText}
// // //                   </motion.span>
                  
// // //                   <span className="text-white">
// // //                     {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
// // //                   </span>
// // //                 </motion.h1>
                
// // //                 {/* Description */}
// // //                 <motion.p 
// // //                   variants={textVariants}
// // //                   className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-200/80 max-w-3xl leading-relaxed font-light"
// // //                 >
// // //                   {currentVideo.description}
// // //                 </motion.p>
                
// // //                 {/* Buttons - Using ServicesSection button colors */}
// // //                 <motion.div 
// // //                   variants={textVariants}
// // //                   className="flex flex-wrap gap-3 sm:gap-4 pt-1"
// // //                 >
// // //                   <motion.a
// // //                     href="/contact"
// // //                     whileHover={{ 
// // //                       scale: 1.05,
// // //                       boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // //                       y: -3
// // //                     }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="inline-flex items-center gap-2 px-5 sm:px-7 md:px-9 lg:px-10 py-2.5 sm:py-3.5 lg:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-xs sm:text-sm lg:text-base xl:text-lg"
// // //                   >
// // //                     {currentVideo.buttonText}
// // //                     <motion.span
// // //                       animate={{ x: [0, 6, 0] }}
// // //                       transition={{ duration: 1.5, repeat: Infinity }}
// // //                     >
// // //                       <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
// // //                     </motion.span>
// // //                   </motion.a>
                  
// // //                   <motion.a
// // //                     href="#how-we-work"
// // //                     whileHover={{ 
// // //                       scale: 1.05,
// // //                       borderColor: "rgba(255,255,255,0.6)"
// // //                     }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="group px-5 sm:px-7 md:px-9 lg:px-10 py-2.5 sm:py-3.5 lg:py-4 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2 text-xs sm:text-sm lg:text-base xl:text-lg"
// // //                   >
// // //                     <Play className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
// // //                     Watch Demo
// // //                   </motion.a>
// // //                 </motion.div>
// // //               </motion.div>
// // //             </AnimatePresence>
// // //           </div>

// // //           {/* ===== RIGHT COLUMN - WIDER (2 columns) ===== */}
// // //           <div className="lg:col-span-2">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.4 }}
// // //               className="space-y-2.5 sm:space-y-3 lg:space-y-4 xl:space-y-5"
// // //             >
// // //               {rightCards.map((card, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   whileHover={{ 
// // //                     scale: 1.02,
// // //                     x: 5,
// // //                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
// // //                   }}
// // //                   className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-5 xl:p-6 border ${card.color} hover:border-white/30 transition-all duration-300`}
// // //                 >
// // //                   <div className="flex items-start gap-2.5 sm:gap-3 lg:gap-4 xl:gap-5">
// // //                     <div className={`${card.bg} p-1.5 sm:p-2.5 lg:p-3.5 rounded-lg sm:rounded-xl lg:rounded-2xl flex-shrink-0`}>
// // //                       {card.icon}
// // //                     </div>
// // //                     <div className="min-w-0 flex-1">
// // //                       <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">{card.title}</h3>
// // //                       <p className="text-blue-200/60 text-[10px] sm:text-xs lg:text-sm xl:text-base truncate">{card.description}</p>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;




// // // import React, { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // // const HeroSection = () => {
// // //   // ===== VIDEOS DATA WITH TEXT =====
// // //   const videos = [
// // //     {
// // //       id: 1,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Build Better Digital Experiences',
// // //       highlightedText: 'Digital',
// // //       description: 'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
// // //       buttonText: 'Start Building',
// // //       badge: 'AI-Powered Innovation'
// // //     },
// // //     {
// // //       id: 2,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Secure Your Digital Future',
// // //       highlightedText: 'Secure',
// // //       description: 'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
// // //       buttonText: 'Get Protected',
// // //       badge: 'Cybersecurity Expert'
// // //     },
// // //     {
// // //       id: 3,
// // //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// // //       heading: 'Scale Your Business with AI',
// // //       highlightedText: 'AI',
// // //       description: 'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
// // //       buttonText: 'Explore AI',
// // //       badge: 'AI-Powered Solutions'
// // //     }
// // //   ];

// // //   // ===== RIGHT COLUMN CARDS DATA =====
// // //   const rightCards = [
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
// // //         </svg>
// // //       ),
// // //       title: 'AI-Powered Security',
// // //       description: 'Real-time threat detection & response',
// // //       color: 'border-blue-500/30',
// // //       bg: 'bg-blue-500/20'
// // //     },
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
// // //         </svg>
// // //       ),
// // //       title: 'Scalable Infrastructure',
// // //       description: 'Enterprise-grade performance & reliability',
// // //       color: 'border-purple-500/30',
// // //       bg: 'bg-purple-500/20'
// // //     },
// // //     {
// // //       icon: (
// // //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// // //         </svg>
// // //       ),
// // //       title: 'Zero-Trust Security',
// // //       description: 'Advanced protection for modern threats',
// // //       color: 'border-pink-500/30',
// // //       bg: 'bg-pink-500/20'
// // //     }
// // //   ];

// // //   // ===== STATE =====
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   // ===== AUTO-PLAY LOGIC =====
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentIndex((prev) => (prev + 1) % videos.length);
// // //     }, 6000);

// // //     return () => clearInterval(interval);
// // //   }, [videos.length]);

// // //   // ===== NAVIGATION FUNCTIONS =====
// // //   const goToPrevious = () => {
// // //     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
// // //   };

// // //   const goToNext = () => {
// // //     setCurrentIndex((prev) => (prev + 1) % videos.length);
// // //   };

// // //   const goToSlide = (index) => {
// // //     setCurrentIndex(index);
// // //   };

// // //   const currentVideo = videos[currentIndex];

// // //   // ===== TEXT ANIMATION VARIANTS =====
// // //   const textVariants = {
// // //     initial: { opacity: 0, y: 30 },
// // //     animate: { 
// // //       opacity: 1, 
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.6,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       y: -30,
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   const headingTextVariants = {
// // //     initial: { opacity: 0, y: 40, scale: 0.95 },
// // //     animate: { 
// // //       opacity: 1, 
// // //       y: 0, 
// // //       scale: 1,
// // //       transition: {
// // //         duration: 0.7,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     },
// // //     exit: { 
// // //       opacity: 0, 
// // //       y: -40, 
// // //       scale: 0.95,
// // //       transition: {
// // //         duration: 0.4,
// // //         ease: [0.215, 0.61, 0.355, 1]
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative w-full h-screen flex items-center overflow-hidden">
      
// // //       {/* ===== BACKGROUND VIDEO - FULL SCREEN FIX ===== */}
// // //       <div className="absolute inset-0 w-full h-full z-0">
// // //         <div className="absolute inset-0 bg-black/60 z-10"></div>
        
// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={currentIndex}
// // //             initial={{ opacity: 0, scale: 1.05 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             exit={{ opacity: 0, scale: 0.95 }}
// // //             transition={{ duration: 1.2, ease: "easeInOut" }}
// // //             className="absolute inset-0 w-full h-full"
// // //           >
// // //             <div className="relative w-full h-full overflow-hidden">
// // //               <iframe
// // //                 src={currentVideo.url}
// // //                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] w-auto h-auto"
// // //                 style={{ 
// // //                   pointerEvents: 'none',
// // //                 }}
// // //                 allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
// // //                 allowFullScreen
// // //                 title={`Background Video ${currentIndex + 1}`}
// // //               />
// // //             </div>
// // //           </motion.div>
// // //         </AnimatePresence>
// // //       </div>

// // //       {/* ===== LEFT ARROW ===== */}
// // //       <button
// // //         onClick={goToPrevious}
// // //         className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// // //         aria-label="Previous video"
// // //       >
// // //         <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// // //       </button>

// // //       {/* ===== RIGHT ARROW ===== */}
// // //       <button
// // //         onClick={goToNext}
// // //         className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// // //         aria-label="Next video"
// // //       >
// // //         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// // //       </button>

// // //       {/* ===== DOTS INDICATOR ===== */}
// // //       <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
// // //         {videos.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             onClick={() => goToSlide(index)}
// // //             className={`transition-all duration-300 rounded-full ${
// // //               index === currentIndex 
// // //                 ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-white shadow-lg shadow-blue-500/50' 
// // //                 : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/70'
// // //             }`}
// // //             aria-label={`Go to video ${index + 1}`}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* ===== MAIN CONTENT - Full Screen Centered with WIDER COLUMNS ===== */}
// // //       <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20">
// // //         <div className="grid lg:grid-cols-6 gap-8 lg:gap-10 xl:gap-14 2xl:gap-20 items-center min-h-[80vh]">
          
// // //           {/* ===== LEFT COLUMN - WIDER (4 columns instead of 3) ===== */}
// // //           <div className="lg:col-span-4">
// // //             <AnimatePresence mode="wait">
// // //               <motion.div
// // //                 key={currentIndex}
// // //                 initial="initial"
// // //                 animate="animate"
// // //                 exit="exit"
// // //                 className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 max-w-4xl"
// // //               >
// // //                 {/* Badge */}
// // //                 <motion.div variants={textVariants}>
// // //                   <span className="inline-block text-blue-300 font-medium text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30">
// // //                     {currentVideo.badge}
// // //                   </span>
// // //                 </motion.div>

// // //                 {/* Main Heading */}
// // //                 <motion.h1 
// // //                   variants={headingTextVariants}
// // //                   className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[60px] 2xl:text-[60px] font-bold text-white leading-[1.1] tracking-tight"
// // //                 >
// // //                   <span className="text-white">
// // //                     {currentVideo.heading.split(currentVideo.highlightedText)[0]}
// // //                   </span>
                  
// // //                   <motion.span 
// // //                     className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
// // //                     style={{ fontSize: '54px' }}
// // //                     animate={{ 
// // //                       backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// // //                     }}
// // //                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// // //                   >
// // //                     {currentVideo.highlightedText}
// // //                   </motion.span>
                  
// // //                   <span className="text-white">
// // //                     {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
// // //                   </span>
// // //                 </motion.h1>
                
// // //                 {/* Description */}
// // //                 <motion.p 
// // //                   variants={textVariants}
// // //                   className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-200/80 max-w-3xl leading-relaxed font-light"
// // //                 >
// // //                   {currentVideo.description}
// // //                 </motion.p>
                
// // //                 {/* Buttons - Using ServicesSection button colors */}
// // //                 <motion.div 
// // //                   variants={textVariants}
// // //                   className="flex flex-wrap gap-3 sm:gap-4 pt-1"
// // //                 >
// // //                   <motion.a
// // //                     href="/contact"
// // //                     whileHover={{ 
// // //                       scale: 1.05,
// // //                       boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // //                       y: -3
// // //                     }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="inline-flex items-center gap-2 px-5 sm:px-7 md:px-9 lg:px-10 py-2.5 sm:py-3.5 lg:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-xs sm:text-sm lg:text-base xl:text-lg"
// // //                   >
// // //                     {currentVideo.buttonText}
// // //                     <motion.span
// // //                       animate={{ x: [0, 6, 0] }}
// // //                       transition={{ duration: 1.5, repeat: Infinity }}
// // //                     >
// // //                       <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
// // //                     </motion.span>
// // //                   </motion.a>
                  
// // //                   <motion.a
// // //                     href="#how-we-work"
// // //                     whileHover={{ 
// // //                       scale: 1.05,
// // //                       borderColor: "rgba(255,255,255,0.6)"
// // //                     }}
// // //                     whileTap={{ scale: 0.95 }}
// // //                     className="group px-5 sm:px-7 md:px-9 lg:px-10 py-2.5 sm:py-3.5 lg:py-4 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2 text-xs sm:text-sm lg:text-base xl:text-lg"
// // //                   >
// // //                     <Play className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
// // //                     Watch Demo
// // //                   </motion.a>
// // //                 </motion.div>
// // //               </motion.div>
// // //             </AnimatePresence>
// // //           </div>

// // //           {/* ===== RIGHT COLUMN - WIDER (2 columns) ===== */}
// // //           <div className="lg:col-span-2">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: 30 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.8, delay: 0.4 }}
// // //               className="space-y-2.5 sm:space-y-3 lg:space-y-4 xl:space-y-5"
// // //             >
// // //               {rightCards.map((card, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   whileHover={{ 
// // //                     scale: 1.02,
// // //                     x: 5,
// // //                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
// // //                   }}
// // //                   className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-5 xl:p-6 border ${card.color} hover:border-white/30 transition-all duration-300`}
// // //                 >
// // //                   <div className="flex items-start gap-2.5 sm:gap-3 lg:gap-4 xl:gap-5">
// // //                     <div className={`${card.bg} p-1.5 sm:p-2.5 lg:p-3.5 rounded-lg sm:rounded-xl lg:rounded-2xl flex-shrink-0`}>
// // //                       {card.icon}
// // //                     </div>
// // //                     <div className="min-w-0 flex-1">
// // //                       <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">{card.title}</h3>
// // //                       <p className="text-blue-200/60 text-[10px] sm:text-xs lg:text-sm xl:text-base truncate">{card.description}</p>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;






// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // const HeroSection = () => {
// //   // ===== VIDEOS DATA WITH TEXT =====
// //   const videos = [
// //     {
// //       id: 1,
// //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// //       heading: 'Build Better Digital Experiences',
// //       highlightedText: 'Digital',
// //       description: 'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
// //       buttonText: 'Start a Project',
// //       badge: 'AI-Powered Innovation'
// //     },
// //     {
// //       id: 2,
// //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// //       heading: 'Secure Your Digital Future',
// //       highlightedText: 'Secure',
// //       description: 'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
// //       buttonText: 'Start a Project',
// //       badge: 'Cybersecurity Expert'
// //     },
// //     {
// //       id: 3,
// //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// //       heading: 'Scale Your Business with AI',
// //       highlightedText: 'AI',
// //       description: 'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
// //       buttonText: 'Start a Project',
// //       badge: 'AI-Powered Solutions'
// //     }
// //   ];

// //   // ===== RIGHT COLUMN CARDS DATA =====
// //   const rightCards = [
// //     {
// //       icon: (
// //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
// //         </svg>
// //       ),
// //       title: 'AI-Powered Security',
// //       description: 'Real-time threat detection & response',
// //       color: 'border-blue-500/30',
// //       bg: 'bg-blue-500/20'
// //     },
// //     {
// //       icon: (
// //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
// //         </svg>
// //       ),
// //       title: 'Scalable Infrastructure',
// //       description: 'Enterprise-grade performance & reliability',
// //       color: 'border-purple-500/30',
// //       bg: 'bg-purple-500/20'
// //     },
// //     {
// //       icon: (
// //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// //         </svg>
// //       ),
// //       title: 'Zero-Trust Security',
// //       description: 'Advanced protection for modern threats',
// //       color: 'border-pink-500/30',
// //       bg: 'bg-pink-500/20'
// //     }
// //   ];

// //   // ===== STATE =====
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // ===== AUTO-PLAY LOGIC =====
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % videos.length);
// //     }, 6000);

// //     return () => clearInterval(interval);
// //   }, [videos.length]);

// //   // ===== NAVIGATION FUNCTIONS =====
// //   const goToPrevious = () => {
// //     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
// //   };

// //   const goToNext = () => {
// //     setCurrentIndex((prev) => (prev + 1) % videos.length);
// //   };

// //   const goToSlide = (index) => {
// //     setCurrentIndex(index);
// //   };

// //   const currentVideo = videos[currentIndex];

// //   // ===== TEXT ANIMATION VARIANTS =====
// //   const textVariants = {
// //     initial: { opacity: 0, y: 30 },
// //     animate: { 
// //       opacity: 1, 
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     },
// //     exit: { 
// //       opacity: 0, 
// //       y: -30,
// //       transition: {
// //         duration: 0.4,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   const headingTextVariants = {
// //     initial: { opacity: 0, y: 40, scale: 0.95 },
// //     animate: { 
// //       opacity: 1, 
// //       y: 0, 
// //       scale: 1,
// //       transition: {
// //         duration: 0.7,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     },
// //     exit: { 
// //       opacity: 0, 
// //       y: -40, 
// //       scale: 0.95,
// //       transition: {
// //         duration: 0.4,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   return (
// //     <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
// //       {/* ===== BACKGROUND VIDEO - FULL SCREEN FIX ===== */}
// //       <div className="absolute inset-0 w-full h-full z-0">
// //         {/* Dark overlay with more opacity for better text readability */}
// //         <div className="absolute inset-0 bg-black/70 z-10"></div>
        
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentIndex}
// //             initial={{ opacity: 0, scale: 1.05 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.95 }}
// //             transition={{ duration: 1.2, ease: "easeInOut" }}
// //             className="absolute inset-0 w-full h-full"
// //           >
// //             <div className="relative w-full h-full overflow-hidden">
// //               <iframe
// //                 src={currentVideo.url}
// //                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] w-auto h-auto"
// //                 style={{ 
// //                   pointerEvents: 'none',
// //                 }}
// //                 allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
// //                 allowFullScreen
// //                 title={`Background Video ${currentIndex + 1}`}
// //               />
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>

// //       {/* ===== LEFT ARROW ===== */}
// //       <button
// //         onClick={goToPrevious}
// //         className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// //         aria-label="Previous video"
// //       >
// //         <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// //       </button>

// //       {/* ===== RIGHT ARROW ===== */}
// //       <button
// //         onClick={goToNext}
// //         className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// //         aria-label="Next video"
// //       >
// //         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// //       </button>

// //       {/* ===== DOTS INDICATOR ===== */}
// //       <div className="absolute bottom-8 sm:bottom-10 md:bottom-14 lg:bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
// //         {videos.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => goToSlide(index)}
// //             className={`transition-all duration-300 rounded-full ${
// //               index === currentIndex 
// //                 ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-white shadow-lg shadow-blue-500/50' 
// //                 : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/70'
// //             }`}
// //             aria-label={`Go to video ${index + 1}`}
// //           />
// //         ))}
// //       </div>

// //       {/* ===== MAIN CONTENT - Full Screen Centered with WIDER COLUMNS ===== */}
// //       <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20">
// //         <div className="grid lg:grid-cols-6 gap-8 lg:gap-10 xl:gap-14 2xl:gap-20 items-center min-h-[85vh] py-12">
          
// //           {/* ===== LEFT COLUMN - WIDER (4 columns) ===== */}
// //           <div className="lg:col-span-4">
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={currentIndex}
// //                 initial="initial"
// //                 animate="animate"
// //                 exit="exit"
// //                 className="space-y-5 sm:space-y-6 lg:space-y-7 xl:space-y-8 max-w-4xl"
// //               >
// //                 {/* Badge */}
// //                 <motion.div variants={textVariants}>
// //                   <span className="inline-block text-blue-300 font-medium text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30">
// //                     {currentVideo.badge}
// //                   </span>
// //                 </motion.div>

// //                 {/* Main Heading - Reduced size for better balance */}
// //                 <motion.h1 
// //                   variants={headingTextVariants}
// //                   className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] 2xl:text-[56px] font-bold text-white leading-[1.15] tracking-tight"
// //                 >
// //                   <span className="text-white">
// //                     {currentVideo.heading.split(currentVideo.highlightedText)[0]}
// //                   </span>
                  
// //                   <motion.span 
// //                     className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
// //                     style={{ fontSize: '48px' }}
// //                     animate={{ 
// //                       backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// //                     }}
// //                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// //                   >
// //                     {currentVideo.highlightedText}
// //                   </motion.span>
                  
// //                   <span className="text-white">
// //                     {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
// //                   </span>
// //                 </motion.h1>
                
// //                 {/* Description - More breathing space */}
// //                 <motion.p 
// //                   variants={textVariants}
// //                   className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-200/80 max-w-3xl leading-relaxed font-light mt-2"
// //                 >
// //                   {currentVideo.description}
// //                 </motion.p>
                
// //                 {/* Buttons - More spacing */}
// //                 <motion.div 
// //                   variants={textVariants}
// //                   className="flex flex-wrap gap-4 sm:gap-5 pt-3"
// //                 >
// //                   <motion.a
// //                     href="/contact"
// //                     whileHover={{ 
// //                       scale: 1.05,
// //                       boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// //                       y: -3
// //                     }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-4.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base lg:text-lg xl:text-xl"
// //                   >
// //                     {currentVideo.buttonText}
// //                     <motion.span
// //                       animate={{ x: [0, 6, 0] }}
// //                       transition={{ duration: 1.5, repeat: Infinity }}
// //                     >
// //                       <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
// //                     </motion.span>
// //                   </motion.a>
                  
// //                   <motion.a
// //                     href="#how-we-work"
// //                     whileHover={{ 
// //                       scale: 1.05,
// //                       borderColor: "rgba(255,255,255,0.6)"
// //                     }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-4.5 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2 text-sm sm:text-base lg:text-lg xl:text-xl"
// //                   >
// //                     <Play className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
// //                     Watch Demo
// //                   </motion.a>
// //                 </motion.div>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>

// //           {/* ===== RIGHT COLUMN - WIDER (2 columns) ===== */}
// //           <div className="lg:col-span-2">
// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6"
// //             >
// //               {rightCards.map((card, index) => (
// //                 <motion.div
// //                   key={index}
// //                   whileHover={{ 
// //                     scale: 1.02,
// //                     x: 5,
// //                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
// //                   }}
// //                   className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3.5 sm:p-4.5 lg:p-5.5 xl:p-6.5 border ${card.color} hover:border-white/30 transition-all duration-300`}
// //                 >
// //                   <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4.5 xl:gap-5.5">
// //                     <div className={`${card.bg} p-2 sm:p-2.5 lg:p-3.5 rounded-lg sm:rounded-xl lg:rounded-2xl flex-shrink-0`}>
// //                       {card.icon}
// //                     </div>
// //                     <div className="min-w-0 flex-1">
// //                       <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">{card.title}</h3>
// //                       <p className="text-blue-200/60 text-[10px] sm:text-xs lg:text-sm xl:text-base truncate">{card.description}</p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;





// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// // const HeroSection = () => {
// //   // ===== VIDEOS DATA WITH TEXT =====
// //   const videos = [
// //     {
// //       id: 1,
// //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// //       heading: 'Build Better Digital Experiences',
// //       highlightedText: 'Digital',
// //       description: 'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
// //       buttonText: 'Start Building',
// //       badge: 'AI-Powered Innovation'
// //     },
// //     {
// //       id: 2,
// //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// //       heading: 'Secure Your Digital Future',
// //       highlightedText: 'Secure',
// //       description: 'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
// //       buttonText: 'Get Protected',
// //       badge: 'Cybersecurity Expert'
// //     },
// //     {
// //       id: 3,
// //       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
// //       heading: 'Scale Your Business with AI',
// //       highlightedText: 'AI',
// //       description: 'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
// //       buttonText: 'Explore AI',
// //       badge: 'AI-Powered Solutions'
// //     }
// //   ];

// //   // ===== RIGHT COLUMN CARDS DATA =====
// //   const rightCards = [
// //     {
// //       icon: (
// //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
// //         </svg>
// //       ),
// //       title: 'AI-Powered Security',
// //       description: 'Real-time threat detection & response',
// //       color: 'border-blue-500/30',
// //       bg: 'bg-blue-500/20'
// //     },
// //     {
// //       icon: (
// //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
// //         </svg>
// //       ),
// //       title: 'Scalable Infrastructure',
// //       description: 'Enterprise-grade performance & reliability',
// //       color: 'border-purple-500/30',
// //       bg: 'bg-purple-500/20'
// //     },
// //     {
// //       icon: (
// //         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
// //         </svg>
// //       ),
// //       title: 'Zero-Trust Security',
// //       description: 'Advanced protection for modern threats',
// //       color: 'border-pink-500/30',
// //       bg: 'bg-pink-500/20'
// //     }
// //   ];

// //   // ===== STATE =====
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // ===== AUTO-PLAY LOGIC =====
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % videos.length);
// //     }, 6000);

// //     return () => clearInterval(interval);
// //   }, [videos.length]);

// //   // ===== NAVIGATION FUNCTIONS =====
// //   const goToPrevious = () => {
// //     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
// //   };

// //   const goToNext = () => {
// //     setCurrentIndex((prev) => (prev + 1) % videos.length);
// //   };

// //   const goToSlide = (index) => {
// //     setCurrentIndex(index);
// //   };

// //   const currentVideo = videos[currentIndex];

// //   // ===== TEXT ANIMATION VARIANTS =====
// //   const textVariants = {
// //     initial: { opacity: 0, y: 30 },
// //     animate: { 
// //       opacity: 1, 
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     },
// //     exit: { 
// //       opacity: 0, 
// //       y: -30,
// //       transition: {
// //         duration: 0.4,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   const headingTextVariants = {
// //     initial: { opacity: 0, y: 40, scale: 0.95 },
// //     animate: { 
// //       opacity: 1, 
// //       y: 0, 
// //       scale: 1,
// //       transition: {
// //         duration: 0.7,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     },
// //     exit: { 
// //       opacity: 0, 
// //       y: -40, 
// //       scale: 0.95,
// //       transition: {
// //         duration: 0.4,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   return (
// //     <section className="relative min-h-screen flex items-center overflow-hidden">
      
// //       {/* ===== BACKGROUND VIDEO ===== */}
// //       <div className="absolute inset-0 w-full h-full z-0">
// //         <div className="absolute inset-0 bg-black/60 z-10"></div>
        
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentIndex}
// //             initial={{ opacity: 0, scale: 1.05 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.95 }}
// //             transition={{ duration: 1.2, ease: "easeInOut" }}
// //             className="absolute inset-0 w-full h-full"
// //           >
// //             <iframe
// //               src={currentVideo.url}
// //               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
// //               style={{ 
// //                 width: '100vw', 
// //                 height: '100vh',
// //                 pointerEvents: 'none'
// //               }}
// //               allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
// //               allowFullScreen
// //               title={`Background Video ${currentIndex + 1}`}
// //             />
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>

// //       {/* ===== LEFT ARROW ===== */}
// //       <button
// //         onClick={goToPrevious}
// //         className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// //         aria-label="Previous video"
// //       >
// //         <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// //       </button>

// //       {/* ===== RIGHT ARROW ===== */}
// //       <button
// //         onClick={goToNext}
// //         className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
// //         aria-label="Next video"
// //       >
// //         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
// //       </button>

// //       {/* ===== DOTS INDICATOR ===== */}
// //       <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
// //         {videos.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => goToSlide(index)}
// //             className={`transition-all duration-300 rounded-full ${
// //               index === currentIndex 
// //                 ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-white shadow-lg shadow-blue-500/50' 
// //                 : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/70'
// //             }`}
// //             aria-label={`Go to video ${index + 1}`}
// //           />
// //         ))}
// //       </div>

// //       {/* ===== MAIN CONTENT ===== */}
// //       <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20 py-16 sm:py-20 lg:py-24">
// //         <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 xl:gap-14 2xl:gap-20 items-center">
          
// //           {/* ===== LEFT COLUMN - Text with Animation ===== */}
// //           <div className="lg:col-span-3">
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={currentIndex}
// //                 initial="initial"
// //                 animate="animate"
// //                 exit="exit"
// //                 className="space-y-5 sm:space-y-6 lg:space-y-8 xl:space-y-10 max-w-3xl"
// //               >
// //                 {/* Badge */}
// //                 <motion.div variants={textVariants}>
// //                   <span className="inline-block text-blue-300 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30">
// //                     {currentVideo.badge}
// //                   </span>
// //                 </motion.div>

// //                 {/* Main Heading */}
// //                 <motion.h1 
// //                   variants={headingTextVariants}
// //                   className="text-0xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-[1.05] tracking-tight"
// //                 >
// //                   {currentVideo.heading.split(currentVideo.highlightedText)[0]}
// //                   <motion.span 
// //                     className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
// //                     animate={{ 
// //                       backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
// //                     }}
// //                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// //                     style={{ backgroundSize: '200% 200%' }}
// //                   >
// //                     {currentVideo.highlightedText}
// //                   </motion.span>
// //                   {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
// //                 </motion.h1>
                
// //                 {/* Description */}
// //                 <motion.p 
// //                   variants={textVariants}
// //                   className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl text-blue-200/80 max-w-2xl leading-relaxed font-light"
// //                 >
// //                   {currentVideo.description}
// //                 </motion.p>
                
// //                 {/* Buttons */}
// //                 <motion.div 
// //                   variants={textVariants}
// //                   className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 pt-1 sm:pt-2"
// //                 >
// //                   <motion.a
// //                     href="/contact"
// //                     whileHover={{ 
// //                       scale: 1.05, 
// //                       boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
// //                       y: -3
// //                     }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="group relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 text-sm sm:text-base lg:text-lg xl:text-xl"
// //                   >
// //                     <span className="relative z-10 flex items-center">
// //                       {currentVideo.buttonText}
// //                       <motion.span
// //                         animate={{ x: [0, 6, 0] }}
// //                         transition={{ duration: 1.5, repeat: Infinity }}
// //                       >
// //                         <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
// //                       </motion.span>
// //                     </span>
// //                     <motion.div 
// //                       className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
// //                       initial={{ opacity: 0 }}
// //                       whileHover={{ opacity: 1 }}
// //                       transition={{ duration: 0.3 }}
// //                     />
// //                   </motion.a>
                  
// //                   <motion.a
// //                     href="#how-we-work"
// //                     whileHover={{ 
// //                       scale: 1.05,
// //                       borderColor: "rgba(255,255,255,0.6)"
// //                     }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="group px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2 text-sm sm:text-base lg:text-lg xl:text-xl"
// //                   >
// //                     <Play className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
// //                     Watch Demo
// //                   </motion.a>
// //                 </motion.div>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>

// //           {/* ===== RIGHT COLUMN - Feature Cards ===== */}
// //           <div className="lg:col-span-2">
// //             <motion.div
// //               initial={{ opacity: 0, x: 30 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8, delay: 0.4 }}
// //               className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6"
// //             >
// //               {rightCards.map((card, index) => (
// //                 <motion.div
// //                   key={index}
// //                   whileHover={{ 
// //                     scale: 1.02,
// //                     x: 5,
// //                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
// //                   }}
// //                   className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 xl:p-7 border ${card.color} hover:border-white/30 transition-all duration-300`}
// //                 >
// //                   <div className="flex items-start gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
// //                     <div className={`${card.bg} p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl flex-shrink-0`}>
// //                       {card.icon}
// //                     </div>
// //                     <div className="min-w-0 flex-1">
// //                       <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">{card.title}</h3>
// //                       <p className="text-blue-200/60 text-xs sm:text-sm lg:text-base xl:text-lg truncate">{card.description}</p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;












// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// const HeroSection = () => {
//   // ===== VIDEOS DATA WITH TEXT =====
//   const videos = [
//     {
//       id: 1,
//       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
//       heading: 'Build Better Digital Experiences',
//       highlightedText: 'Digital',
//       description: 'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
//       buttonText: 'Start Building',
//       badge: 'AI-Powered Innovation'
//     },
//     {
//       id: 2,
//       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
//       heading: 'Secure Your Digital Future',
//       highlightedText: 'Secure',
//       description: 'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
//       buttonText: 'Get Protected',
//       badge: 'Cybersecurity Expert'
//     },
//     {
//       id: 3,
//       url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
//       heading: 'Scale Your Business with AI',
//       highlightedText: 'AI',
//       description: 'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
//       buttonText: 'Explore AI',
//       badge: 'AI-Powered Solutions'
//     }
//   ];

//   // ===== RIGHT COLUMN CARDS DATA =====
//   const rightCards = [
//     {
//       icon: (
//         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       title: 'AI-Powered Security',
//       description: 'Real-time threat detection & response',
//       color: 'border-blue-500/30',
//       bg: 'bg-blue-500/20'
//     },
//     {
//       icon: (
//         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
//         </svg>
//       ),
//       title: 'Scalable Infrastructure',
//       description: 'Enterprise-grade performance & reliability',
//       color: 'border-purple-500/30',
//       bg: 'bg-purple-500/20'
//     },
//     {
//       icon: (
//         <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//         </svg>
//       ),
//       title: 'Zero-Trust Security',
//       description: 'Advanced protection for modern threats',
//       color: 'border-pink-500/30',
//       bg: 'bg-pink-500/20'
//     }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ===== AUTO-PLAY LOGIC =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % videos.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [videos.length]);

//   // ===== NAVIGATION FUNCTIONS =====
//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % videos.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const currentVideo = videos[currentIndex];

//   // ===== TEXT ANIMATION VARIANTS =====
//   const textVariants = {
//     initial: { opacity: 0, y: 30 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       y: -30,
//       transition: {
//         duration: 0.4,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   const headingTextVariants = {
//     initial: { opacity: 0, y: 40, scale: 0.95 },
//     animate: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       y: -40, 
//       scale: 0.95,
//       transition: {
//         duration: 0.4,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* FIXED: Changed min-h-screen to h-screen for exact full viewport height */}
      
//       {/* ===== BACKGROUND VIDEO ===== */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <div className="absolute inset-0 bg-black/60 z-10"></div>
        
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//             className="absolute inset-0 w-full h-full overflow-hidden"
//           >
//             <iframe
//               src={currentVideo.url}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[300%] min-h-[300%]"
//               style={{ 
//                 pointerEvents: 'none',
//                 border: 'none',
//                 objectFit: 'cover'
//               }}
//               allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
//               allowFullScreen
//               title={`Background Video ${currentIndex + 1}`}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* ===== LEFT ARROW ===== */}
//       <button
//         onClick={goToPrevious}
//         className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
//         aria-label="Previous video"
//       >
//         <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
//       </button>

//       {/* ===== RIGHT ARROW ===== */}
//       <button
//         onClick={goToNext}
//         className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
//         aria-label="Next video"
//       >
//         <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
//       </button>

//       {/* ===== DOTS INDICATOR ===== */}
//       <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
//         {videos.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentIndex 
//                 ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-white shadow-lg shadow-blue-500/50' 
//                 : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/70'
//             }`}
//             aria-label={`Go to video ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* ===== MAIN CONTENT ===== */}
//       <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20 h-full flex items-center">
//         <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-10 2xl:gap-14 items-center w-full">
          
//           {/* ===== LEFT COLUMN - Text with Animation ===== */}
//           <div className="lg:col-span-3">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6 max-w-2xl"
//               >
//                 {/* Badge */}
//                 <motion.div variants={textVariants}>
//                   <span className="inline-block text-blue-300 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30">
//                     {currentVideo.badge}
//                   </span>
//                 </motion.div>

//                 {/* Main Heading - H1 size chhota */}
//                 <motion.h1 
//                   variants={headingTextVariants}
//                   className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight"
//                 >
//                   {currentVideo.heading.split(currentVideo.highlightedText)[0]}
//                   <motion.span 
//                     className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//                     animate={{ 
//                       backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                     }}
//                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                     style={{ backgroundSize: '200% 200%' }}
//                   >
//                     {currentVideo.highlightedText}
//                   </motion.span>
//                   {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
//                 </motion.h1>
                
//                 {/* Description - H2 size chhota */}
//                 <motion.p 
//                   variants={textVariants}
//                   className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-200/80 max-w-2xl leading-relaxed font-light"
//                 >
//                   {currentVideo.description}
//                 </motion.p>
                
//                 {/* Buttons */}
//                 <motion.div 
//                   variants={textVariants}
//                   className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2"
//                 >
//                   <motion.a
//                     href="/contact"
//                     whileHover={{ 
//                       scale: 1.05, 
//                       boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
//                       y: -3
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     className="group relative px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 text-sm sm:text-base lg:text-lg"
//                   >
//                     <span className="relative z-10 flex items-center">
//                       {currentVideo.buttonText}
//                       <motion.span
//                         animate={{ x: [0, 6, 0] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                       >
//                         <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//                       </motion.span>
//                     </span>
//                     <motion.div 
//                       className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.a>
                  
//                   <motion.a
//                     href="#how-we-work"
//                     whileHover={{ 
//                       scale: 1.05,
//                       borderColor: "rgba(255,255,255,0.6)"
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     className="group px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2 text-sm sm:text-base lg:text-lg"
//                   >
//                     <Play className="h-4 w-4 sm:h-5 sm:w-5" />
//                     Watch Demo
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* ===== RIGHT COLUMN - Feature Cards ===== */}
//           <div className="lg:col-span-2">
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5"
//             >
//               {rightCards.map((card, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ 
//                     scale: 1.02,
//                     x: 5,
//                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
//                   }}
//                   className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 xl:p-6 border ${card.color} hover:border-white/30 transition-all duration-300`}
//                 >
//                   <div className="flex items-start gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
//                     <div className={`${card.bg} p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl flex-shrink-0`}>
//                       {card.icon}
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">{card.title}</h3>
//                       <p className="text-blue-200/60 text-[10px] sm:text-xs lg:text-sm xl:text-base truncate">{card.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;      



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  // ===== VIDEOS DATA WITH TEXT =====
  const videos = [
    {
      id: 1,
      url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
      heading: 'Build Better Digital Experiences',
      highlightedText: 'Digital',
      description: 'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
      buttonText: 'Start Building',
      badge: 'AI-Powered Innovation'
    },
    {
      id: 2,
      url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
      heading: 'Secure Your Digital Future',
      highlightedText: 'Secure',
      description: 'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
      buttonText: 'Get Protected',
      badge: 'Cybersecurity Expert'
    },
    {
      id: 3,
      url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
      heading: 'Scale Your Business with AI',
      highlightedText: 'AI',
      description: 'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
      buttonText: 'Explore AI',
      badge: 'AI-Powered Solutions'
    }
  ];

  // ===== RIGHT COLUMN CARDS DATA =====
  const rightCards = [
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI-Powered Security',
      description: 'Real-time threat detection & response',
      color: 'border-blue-500/30',
      bg: 'bg-blue-500/20'
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Scalable Infrastructure',
      description: 'Enterprise-grade performance & reliability',
      color: 'border-purple-500/30',
      bg: 'bg-purple-500/20'
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Zero-Trust Security',
      description: 'Advanced protection for modern threats',
      color: 'border-pink-500/30',
      bg: 'bg-pink-500/20'
    }
  ];

  // ===== STATE =====
  const [currentIndex, setCurrentIndex] = useState(0);

  // ===== AUTO-PLAY LOGIC =====
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [videos.length]);

  // ===== NAVIGATION FUNCTIONS =====
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentVideo = videos[currentIndex];

  // ===== TEXT ANIMATION VARIANTS =====
  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const headingTextVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -40, 
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* FIXED: Changed min-h-screen to h-screen for exact full viewport height */}
      
      {/* ===== BACKGROUND VIDEO ===== */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <iframe
              src={currentVideo.url}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[300%] min-h-[300%]"
              style={{ 
                pointerEvents: 'none',
                border: 'none',
                objectFit: 'cover'
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              title={`Background Video ${currentIndex + 1}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== LEFT ARROW ===== */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
        aria-label="Previous video"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
      </button>

      {/* ===== RIGHT ARROW ===== */}
      <button
        onClick={goToNext}
        className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-full text-white transition-all hover:scale-110 border border-white/10 hover:border-white/30"
        aria-label="Next video"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
      </button>

      {/* ===== DOTS INDICATOR ===== */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-white shadow-lg shadow-blue-500/50' 
                : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20 h-full flex items-center">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-10 2xl:gap-14 items-center w-full">
          
          {/* ===== LEFT COLUMN - Text with Animation ===== */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6 max-w-2xl"
              >
                {/* Badge */}
                <motion.div variants={textVariants}>
                  <span className="inline-block text-blue-300 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30">
                    {currentVideo.badge}
                  </span>
                </motion.div>

                {/* Main Heading - H1 size chhota */}
                <motion.h1 
                  variants={headingTextVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                >
                  {currentVideo.heading.split(currentVideo.highlightedText)[0]}
                  <motion.span 
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    {currentVideo.highlightedText}
                  </motion.span>
                  {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
                </motion.h1>
                
                {/* Description - H2 size chhota */}
                <motion.p 
                  variants={textVariants}
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-200/80 max-w-2xl leading-relaxed font-light"
                >
                  {currentVideo.description}
                </motion.p>
                
                {/* Buttons - #01adf0 color */}
                <motion.div 
                  variants={textVariants}
                  className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2"
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 15px 30px rgba(1,173,240,0.4)",
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4 rounded-full font-semibold text-white overflow-hidden bg-[#01adf0] transition-all duration-300 text-sm sm:text-base lg:text-lg"
                  >
                    <span className="relative z-10 flex items-center">
                      {currentVideo.buttonText}
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.span>
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href="#how-we-work"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgba(255,255,255,0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2 text-sm sm:text-base lg:text-lg"
                  >
                    <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                    Watch Demo
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===== RIGHT COLUMN - Feature Cards ===== */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5"
            >
              {rightCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
                  }}
                  className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 xl:p-6 border ${card.color} hover:border-white/30 transition-all duration-300`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
                    <div className={`${card.bg} p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base xl:text-lg">{card.title}</h3>
                      <p className="text-blue-200/60 text-[10px] sm:text-xs lg:text-sm xl:text-base truncate">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;