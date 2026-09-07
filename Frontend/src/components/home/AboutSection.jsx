// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const AboutSection = () => {
//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <section className="relative py-32 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -50, 50, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 50, -50, 0],
//             scale: [1, 0.8, 1.2, 1]
//           }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
//           {/* Left Column */}
//           <div>
//             <motion.span 
//               className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30 inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ 
//                 y: [0, -3, 0],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               About Us
//             </motion.span>
//             <motion.h2 
//               className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Grow Your Business{' '}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">With Coderbox</span>
//             </motion.h2>
//             <motion.p 
//               className="text-blue-200/80 text-lg leading-relaxed mb-4"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               Over 10 years of helping companies reach their financial and branding goals.
//             </motion.p>
//             <motion.p 
//               className="text-blue-200/70 leading-relaxed mb-8"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.
//             </motion.p>
            
//             <motion.div 
//               className="space-y-5 mb-8"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               {[
//                 { label: 'Brand Presence', value: 92 },
//                 { label: 'Digital Presence', value: 95 },
//                 { label: 'Optimization', value: 95 }
//               ].map((item, index) => (
//                 <motion.div key={index} variants={itemVariants}>
//                   <div className="flex justify-between mb-2">
//                     <span className="text-blue-200/80 font-medium">{item.label}</span>
//                     <span className="text-blue-400 font-bold">{item.value}%</span>
//                   </div>
//                   <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
//                     <motion.div 
//                       className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${item.value}%` }}
//                       transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
//                       viewport={{ once: true }}
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
            
//             <motion.a
//               href="/about"
//               whileHover={{ x: 10 }}
//               className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 group gap-2"
//             >
//               Know More About Us
//               <motion.span
//                 animate={{ x: [0, 6, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               >
//                 <ArrowRight className="h-5 w-5" />
//               </motion.span>
//             </motion.a>
//           </div>

//           {/* Right Column - Enhanced with better visibility */}
//           <div>
//             <div className="space-y-6">
//               {/* Stats Grid */}
//               <motion.div 
//                 className="grid grid-cols-2 gap-6"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 {[
//                   { label: 'Years Experience', value: '10+', gradient: 'from-blue-500/30 to-cyan-500/30', icon: Clock },
//                   { label: 'Happy Clients', value: '8K+', gradient: 'from-purple-500/30 to-pink-500/30', icon: Users },
//                   { label: 'Awards Won', value: '12+', gradient: 'from-green-500/30 to-emerald-500/30', icon: Award },
//                   { label: 'Client Satisfaction', value: '100%', gradient: 'from-orange-500/30 to-red-500/30', icon: ThumbsUp }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     variants={itemVariants}
//                     whileHover={{ 
//                       scale: 1.05, 
//                       y: -8,
//                       boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
//                     }}
//                     className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/30 transition-all duration-300`}
//                   >
//                     <motion.div 
//                       className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3"
//                       whileHover={{ rotate: 10, scale: 1.1 }}
//                     >
//                       <item.icon className="h-6 w-6 text-blue-400" />
//                     </motion.div>
//                     <motion.div 
//                       className="text-3xl font-bold text-white"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       {item.value}
//                     </motion.div>
//                     <div className="text-blue-200/70 text-sm mt-1">{item.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Video/Image Card with better visibility */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 viewport={{ once: true }}
//                 className="relative group"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
//                 <div className="relative bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <h4 className="text-white font-bold text-lg mb-2">Why Choose Coderbox?</h4>
//                       <p className="text-blue-200/70 text-sm">We deliver excellence with every project</p>
//                     </div>
//                     <motion.div
//                       whileHover={{ scale: 1.1, rotate: 10 }}
//                       className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl"
//                     >
//                       <Shield className="h-5 w-5 text-white" />
//                     </motion.div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mt-6">
//                     {[
//                       { icon: Zap, label: 'Fast Delivery', color: 'text-yellow-400' },
//                       { icon: TrendingUp, label: 'Growth Focus', color: 'text-green-400' }
//                     ].map((item, index) => (
//                       <motion.div
//                         key={index}
//                         whileHover={{ scale: 1.05 }}
//                         className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3 border border-white/10"
//                       >
//                         <item.icon className={`h-5 w-5 ${item.color}`} />
//                         <span className="text-white/80 text-sm font-medium">{item.label}</span>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Video thumbnail */}
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className="mt-6 relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-500/30 to-purple-500/30 p-8 text-center border border-white/20 cursor-pointer group/video"
//                   >
//                     <div className="flex flex-col items-center">
//                       <motion.div
//                         whileHover={{ scale: 1.1 }}
//                         className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg mb-3"
//                       >
//                         <Play className="h-8 w-8 text-white ml-1" />
//                       </motion.div>
//                       <p className="text-white font-medium">Watch Our Story</p>
//                       <p className="text-blue-200/60 text-sm mt-1">3 min • See how we work</p>
//                     </div>
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;






// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp, X, Pause } from 'lucide-react';

// const AboutSection = () => {
//   // ===== STATE FOR VIDEO MODAL =====
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   // ===== VIDEO URL =====
//   const videoUrl = "/Your business doesn’t need more noise.It needs the right digital system.From web design & develo.mp4";

//   // ===== TOGGLE VIDEO =====
//   const openVideo = () => {
//     setIsVideoOpen(true);
//     setIsPlaying(true);
//     setTimeout(() => {
//       if (videoRef.current) {
//         videoRef.current.play();
//       }
//     }, 300);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <>
//       <section className="relative py-32 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           <motion.div
//             className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
//             animate={{ 
//               x: [0, 50, -50, 0],
//               y: [0, -50, 50, 0],
//               scale: [1, 1.2, 0.8, 1]
//             }}
//             transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
//             animate={{ 
//               x: [0, -50, 50, 0],
//               y: [0, 50, -50, 0],
//               scale: [1, 0.8, 1.2, 1]
//             }}
//             transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
//             {/* Left Column */}
//             <div>
//               <motion.span 
//                 className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30 inline-block"
//                 whileHover={{ scale: 1.05 }}
//                 animate={{ 
//                   y: [0, -3, 0],
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               >
//                 About Us
//               </motion.span>
//               <motion.h2 
//                 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 Grow Your Business{' '}
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">With Coderbox</span>
//               </motion.h2>
//               <motion.p 
//                 className="text-blue-200/80 text-lg leading-relaxed mb-4"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//               >
//                 Over 10 years of helping companies reach their financial and branding goals.
//               </motion.p>
//               <motion.p 
//                 className="text-blue-200/70 leading-relaxed mb-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//               >
//                 We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.
//               </motion.p>
              
//               <motion.div 
//                 className="space-y-5 mb-8"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 {[
//                   { label: 'Brand Presence', value: 92 },
//                   { label: 'Digital Presence', value: 95 },
//                   { label: 'Optimization', value: 95 }
//                 ].map((item, index) => (
//                   <motion.div key={index} variants={itemVariants}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-blue-200/80 font-medium">{item.label}</span>
//                       <span className="text-blue-400 font-bold">{item.value}%</span>
//                     </div>
//                     <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
//                       <motion.div 
//                         className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${item.value}%` }}
//                         transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
//                         viewport={{ once: true }}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
              
//               <motion.a
//                 href="/about"
//                 whileHover={{ x: 10 }}
//                 className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 group gap-2"
//               >
//                 Know More About Us
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight className="h-5 w-5" />
//                 </motion.span>
//               </motion.a>
//             </div>

//             {/* Right Column */}
//             <div>
//               <div className="space-y-6">
//                 {/* Stats Grid */}
//                 <motion.div 
//                   className="grid grid-cols-2 gap-6"
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   {[
//                     { label: 'Years Experience', value: '10+', gradient: 'from-blue-500/30 to-cyan-500/30', icon: Clock },
//                     { label: 'Happy Clients', value: '8K+', gradient: 'from-purple-500/30 to-pink-500/30', icon: Users },
//                     { label: 'Awards Won', value: '12+', gradient: 'from-green-500/30 to-emerald-500/30', icon: Award },
//                     { label: 'Client Satisfaction', value: '100%', gradient: 'from-orange-500/30 to-red-500/30', icon: ThumbsUp }
//                   ].map((item, index) => (
//                     <motion.div
//                       key={index}
//                       variants={itemVariants}
//                       whileHover={{ 
//                         scale: 1.05, 
//                         y: -8,
//                         boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
//                       }}
//                       className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/30 transition-all duration-300`}
//                     >
//                       <motion.div 
//                         className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3"
//                         whileHover={{ rotate: 10, scale: 1.1 }}
//                       >
//                         <item.icon className="h-6 w-6 text-blue-400" />
//                       </motion.div>
//                       <motion.div 
//                         className="text-3xl font-bold text-white"
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {item.value}
//                       </motion.div>
//                       <div className="text-blue-200/70 text-sm mt-1">{item.label}</div>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Why Choose Coderbox? Card with Video */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   viewport={{ once: true }}
//                   className="relative group"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
//                   <div className="relative bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <h4 className="text-white font-bold text-lg mb-2">Why Choose Coderbox?</h4>
//                         <p className="text-blue-200/70 text-sm">We deliver excellence with every project</p>
//                       </div>
//                       <motion.div
//                         whileHover={{ scale: 1.1, rotate: 10 }}
//                         className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl"
//                       >
//                         <Shield className="h-5 w-5 text-white" />
//                       </motion.div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4 mt-6">
//                       {[
//                         { icon: Zap, label: 'Fast Delivery', color: 'text-yellow-400' },
//                         { icon: TrendingUp, label: 'Growth Focus', color: 'text-green-400' }
//                       ].map((item, index) => (
//                         <motion.div
//                           key={index}
//                           whileHover={{ scale: 1.05 }}
//                           className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3 border border-white/10"
//                         >
//                           <item.icon className={`h-5 w-5 ${item.color}`} />
//                           <span className="text-white/80 text-sm font-medium">{item.label}</span>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* ===== VIDEO THUMBNAIL WITH PLAY BUTTON ===== */}
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       onClick={openVideo}
//                       className="mt-6 relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-500/30 to-purple-500/30 p-8 text-center border border-white/20 cursor-pointer group/video"
//                     >
//                       <div className="flex flex-col items-center">
//                         <motion.div
//                           whileHover={{ scale: 1.15 }}
//                           className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-3"
//                         >
//                           <Play className="h-8 w-8 text-white ml-1" />
//                         </motion.div>
//                         <p className="text-white font-medium">Watch Our Story</p>
//                         <p className="text-blue-200/60 text-sm mt-1">Click to play • See how we work</p>
//                       </div>
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
//                         initial={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== VIDEO MODAL ===== */}
//       <AnimatePresence>
//         {isVideoOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
//             onClick={closeVideo}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
//               className="relative w-full max-w-4xl bg-black/50 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closeVideo}
//                 className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20"
//               >
//                 <X className="h-6 w-6" />
//               </button>

//               {/* Video Player */}
//               <div className="relative aspect-video bg-black">
//                 <video
//                   ref={videoRef}
//                   src={videoUrl}
//                   className="w-full h-full object-contain"
//                   controls
//                   autoPlay
//                   onClick={(e) => e.stopPropagation()}
//                   onPlay={() => setIsPlaying(true)}
//                   onPause={() => setIsPlaying(false)}
//                 />
//               </div>

//               {/* Video Info */}
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
//                 <p className="text-white font-medium text-sm flex items-center gap-2">
//                   <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
//                   Now Playing: Our Story
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AboutSection;






// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp, X, Pause } from 'lucide-react';

// const AboutSection = () => {
//   // ===== STATE FOR VIDEO MODAL =====
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   // ===== VIDEO URL =====
//   const videoUrl = "/Your business doesn’t need more noise.It needs the right digital system.From web design & develo.mp4";

//   // ===== TOGGLE VIDEO =====
//   const openVideo = () => {
//     setIsVideoOpen(true);
//     setIsPlaying(true);
//     setTimeout(() => {
//       if (videoRef.current) {
//         videoRef.current.play();
//       }
//     }, 300);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <>
//       <section className="relative py-32 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           <motion.div
//             className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
//             animate={{ 
//               x: [0, 50, -50, 0],
//               y: [0, -50, 50, 0],
//               scale: [1, 1.2, 0.8, 1]
//             }}
//             transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
//             animate={{ 
//               x: [0, -50, 50, 0],
//               y: [0, 50, -50, 0],
//               scale: [1, 0.8, 1.2, 1]
//             }}
//             transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
//             {/* Left Column */}
//             <div>
//               <motion.span 
//                 className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30 inline-block"
//                 whileHover={{ scale: 1.05 }}
//                 animate={{ 
//                   y: [0, -3, 0],
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               >
//                 About Us
//               </motion.span>
//               <motion.h2 
//                 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 Grow Your Business{' '}
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">With Coderbox</span>
//               </motion.h2>
//               <motion.p 
//                 className="text-blue-200/80 text-lg leading-relaxed mb-4"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//               >
//                 Over 10 years of helping companies reach their financial and branding goals.
//               </motion.p>
//               <motion.p 
//                 className="text-blue-200/70 leading-relaxed mb-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//               >
//                 We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.
//               </motion.p>
              
//               <motion.div 
//                 className="space-y-5 mb-8"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 {[
//                   { label: 'Brand Presence', value: 92 },
//                   { label: 'Digital Presence', value: 95 },
//                   { label: 'Optimization', value: 95 }
//                 ].map((item, index) => (
//                   <motion.div key={index} variants={itemVariants}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-blue-200/80 font-medium">{item.label}</span>
//                       <span className="text-blue-400 font-bold">{item.value}%</span>
//                     </div>
//                     <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
//                       <motion.div 
//                         className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${item.value}%` }}
//                         transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
//                         viewport={{ once: true }}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
              
//               <motion.a
//                 href="/about"
//                 whileHover={{ x: 10 }}
//                 className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 group gap-2"
//               >
//                 Know More About Us
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight className="h-5 w-5" />
//                 </motion.span>
//               </motion.a>
//             </div>

//             {/* Right Column */}
//             <div>
//               <div className="space-y-6">
//                 {/* Stats Grid */}
//                 <motion.div 
//                   className="grid grid-cols-2 gap-6"
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   {[
//                     { label: 'Years Experience', value: '10+', gradient: 'from-blue-500/30 to-cyan-500/30', icon: Clock },
//                     { label: 'Happy Clients', value: '8K+', gradient: 'from-purple-500/30 to-pink-500/30', icon: Users },
//                     { label: 'Awards Won', value: '12+', gradient: 'from-green-500/30 to-emerald-500/30', icon: Award },
//                     { label: 'Client Satisfaction', value: '100%', gradient: 'from-orange-500/30 to-red-500/30', icon: ThumbsUp }
//                   ].map((item, index) => (
//                     <motion.div
//                       key={index}
//                       variants={itemVariants}
//                       whileHover={{ 
//                         scale: 1.05, 
//                         y: -8,
//                         boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
//                       }}
//                       className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/30 transition-all duration-300`}
//                     >
//                       <motion.div 
//                         className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3"
//                         whileHover={{ rotate: 10, scale: 1.1 }}
//                       >
//                         <item.icon className="h-6 w-6 text-blue-400" />
//                       </motion.div>
//                       <motion.div 
//                         className="text-3xl font-bold text-white"
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {item.value}
//                       </motion.div>
//                       <div className="text-blue-200/70 text-sm mt-1">{item.label}</div>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Why Choose Coderbox? Card with Video */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   viewport={{ once: true }}
//                   className="relative group"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
//                   <div className="relative bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <h4 className="text-white font-bold text-lg mb-2">Why Choose Coderbox?</h4>
//                         <p className="text-blue-200/70 text-sm">We deliver excellence with every project</p>
//                       </div>
//                       <motion.div
//                         whileHover={{ scale: 1.1, rotate: 10 }}
//                         className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl"
//                       >
//                         <Shield className="h-5 w-5 text-white" />
//                       </motion.div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4 mt-6">
//                       {[
//                         { icon: Zap, label: 'Fast Delivery', color: 'text-yellow-400' },
//                         { icon: TrendingUp, label: 'Growth Focus', color: 'text-green-400' }
//                       ].map((item, index) => (
//                         <motion.div
//                           key={index}
//                           whileHover={{ scale: 1.05 }}
//                           className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3 border border-white/10"
//                         >
//                           <item.icon className={`h-5 w-5 ${item.color}`} />
//                           <span className="text-white/80 text-sm font-medium">{item.label}</span>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* ===== VIDEO THUMBNAIL WITH WAVE EFFECT ===== */}
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       onClick={openVideo}
//                       className="mt-6 relative rounded-xl overflow-hidden cursor-pointer group/video"
//                     >
//                       {/* Thumbnail Image */}
//                       <div className="relative w-full aspect-video bg-gradient-to-r from-blue-900/80 to-purple-900/80">
//                         <img
//                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
//                           alt="Watch Our Story"
//                           className="w-full h-full object-cover opacity-70 group-hover/video:opacity-50 transition-opacity duration-500"
//                         />
                        
//                         {/* Dark Overlay */}
//                         <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/30 transition-all duration-500"></div>
                        
//                         {/* Gradient Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
//                         {/* ===== WAVE ANIMATION EFFECT (Failti Hui Tarangein) ===== */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           {/* Wave 1 - Sabse Badi */}
//                           <motion.div
//                             className="absolute w-64 h-64 rounded-full border-4 border-blue-400/30"
//                             animate={{
//                               scale: [0.5, 1.8, 0.5],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 0
//                             }}
//                           />
                          
//                           {/* Wave 2 - Medium */}
//                           <motion.div
//                             className="absolute w-48 h-48 rounded-full border-4 border-purple-400/30"
//                             animate={{
//                               scale: [0.5, 1.6, 0.5],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 0.4
//                             }}
//                           />
                          
//                           {/* Wave 3 - Chhoti */}
//                           <motion.div
//                             className="absolute w-32 h-32 rounded-full border-4 border-pink-400/30"
//                             animate={{
//                               scale: [0.5, 1.4, 0.5],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 0.8
//                             }}
//                           />
                          
//                           {/* Wave 4 - Sabse Chhoti */}
//                           <motion.div
//                             className="absolute w-20 h-20 rounded-full border-4 border-cyan-400/30"
//                             animate={{
//                               scale: [0.5, 1.2, 0.5],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 1.2
//                             }}
//                           />
//                         </div>
                        
//                         {/* Play Button - Centered on Top of Image */}
//                         <motion.div
//                           whileHover={{ scale: 1.15 }}
//                           whileTap={{ scale: 0.9 }}
//                           className="absolute inset-0 flex flex-col items-center justify-center z-10"
//                         >
//                           {/* Play Button Circle with Pulse */}
//                           <motion.div
//                             className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 relative"
//                             animate={{
//                               boxShadow: [
//                                 '0 0 20px rgba(59,130,246,0.3)',
//                                 '0 0 60px rgba(59,130,246,0.6)',
//                                 '0 0 20px rgba(59,130,246,0.3)'
//                               ],
//                               scale: [1, 1.05, 1]
//                             }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           >
//                             {/* Inner Pulse Ring */}
//                             <motion.div
//                               className="absolute inset-0 rounded-full border-2 border-white/30"
//                               animate={{
//                                 scale: [1, 1.5, 1],
//                                 opacity: [0.8, 0, 0.8]
//                               }}
//                               transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                               }}
//                             />
//                             <Play className="h-10 w-10 text-white ml-1 relative z-10" />
//                           </motion.div>
                          
//                           {/* Text Below Play Button */}
//                           <motion.p 
//                             className="text-white font-semibold text-lg mt-4 drop-shadow-lg"
//                             animate={{
//                               y: [0, -3, 0]
//                             }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           >
//                             Watch Our Story
//                           </motion.p>
//                           <p className="text-blue-200/70 text-sm mt-1 drop-shadow-lg">Click to play • See how we work</p>
//                         </motion.div>
//                       </div>
                      
//                       {/* Hover Border Glow */}
//                       <motion.div
//                         className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/video:border-blue-500/50 transition-all duration-300"
//                       />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== VIDEO MODAL ===== */}
//       <AnimatePresence>
//         {isVideoOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
//             onClick={closeVideo}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
//               className="relative w-full max-w-4xl bg-black/50 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closeVideo}
//                 className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20"
//               >
//                 <X className="h-6 w-6" />
//               </button>

//               {/* Video Player */}
//               <div className="relative aspect-video bg-black">
//                 <video
//                   ref={videoRef}
//                   src={videoUrl}
//                   className="w-full h-full object-contain"
//                   controls
//                   autoPlay
//                   onClick={(e) => e.stopPropagation()}
//                   onPlay={() => setIsPlaying(true)}
//                   onPause={() => setIsPlaying(false)}
//                 />
//               </div>

//               {/* Video Info */}
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
//                 <p className="text-white font-medium text-sm flex items-center gap-2">
//                   <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
//                   Now Playing: Our Story
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AboutSection;





// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp, X, Pause } from 'lucide-react';

// const AboutSection = () => {
//   // ===== STATE FOR VIDEO MODAL =====
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   // ===== VIDEO URL =====
//   const videoUrl = "/Your business doesn’t need more noise.It needs the right digital system.From web design & develo.mp4";

//   // ===== TOGGLE VIDEO =====
//   const openVideo = () => {
//     setIsVideoOpen(true);
//     setIsPlaying(true);
//     setTimeout(() => {
//       if (videoRef.current) {
//         videoRef.current.play();
//       }
//     }, 300);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <>
//       <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           <motion.div
//             className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
//             animate={{ 
//               x: [0, 50, -50, 0],
//               y: [0, -50, 50, 0],
//               scale: [1, 1.2, 0.8, 1]
//             }}
//             transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
//             animate={{ 
//               x: [0, -50, 50, 0],
//               y: [0, 50, -50, 0],
//               scale: [1, 0.8, 1.2, 1]
//             }}
//             transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
//             {/* Left Column */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <motion.span 
//                 className="text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30 inline-block"
//                 whileHover={{ scale: 1.05 }}
//                 animate={{ 
//                   y: [0, -3, 0],
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               >
//                 About Us
//               </motion.span>
//               <motion.h2 
//                 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 sm:mt-5 mb-3 sm:mb-4 leading-[1.15]"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 Grow Your Business{' '}
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">With Coderbox</span>
//               </motion.h2>
//               <motion.p 
//                 className="text-blue-200/80 text-sm sm:text-base leading-relaxed mb-2"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 Over 10 years of helping companies reach their financial and branding goals.
//               </motion.p>
//               <motion.p 
//                 className="text-blue-200/70 text-sm leading-relaxed mb-4"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.
//               </motion.p>
              
//               <motion.div 
//                 className="space-y-3 mb-4"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 {[
//                   { label: 'Brand Presence', value: 92 },
//                   { label: 'Digital Presence', value: 95 },
//                   { label: 'Optimization', value: 95 }
//                 ].map((item, index) => (
//                   <motion.div key={index} variants={itemVariants}>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-blue-200/80 font-medium text-xs sm:text-sm">{item.label}</span>
//                       <span className="text-blue-400 font-bold text-xs sm:text-sm">{item.value}%</span>
//                     </div>
//                     <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
//                       <motion.div 
//                         className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${item.value}%` }}
//                         transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
//                         viewport={{ once: true }}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
              
//               {/* CTA Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 viewport={{ once: true }}
//                 className="flex flex-wrap items-center gap-3"
//               >
//                 <motion.a
//                   href="/services"
//                   whileHover={{ 
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
//                     y: -3
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-xs sm:text-sm"
//                 >
//                   Know More About Us
//                   <motion.span
//                     animate={{ x: [0, 6, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                   </motion.span>
//                 </motion.a>
//               </motion.div>
//             </motion.div>

//             {/* Right Column */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="space-y-4">
//                 {/* Stats Grid */}
//                 <motion.div 
//                   className="grid grid-cols-2 gap-3 sm:gap-4"
//                   variants={containerVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                 >
//                   {[
//                     { label: 'Years Experience', value: '10+', gradient: 'from-blue-500/30 to-cyan-500/30', icon: Clock },
//                     { label: 'Happy Clients', value: '8K+', gradient: 'from-purple-500/30 to-pink-500/30', icon: Users },
//                     { label: 'Awards Won', value: '12+', gradient: 'from-green-500/30 to-emerald-500/30', icon: Award },
//                     { label: 'Client Satisfaction', value: '100%', gradient: 'from-orange-500/30 to-red-500/30', icon: ThumbsUp }
//                   ].map((item, index) => (
//                     <motion.div
//                       key={index}
//                       variants={itemVariants}
//                       whileHover={{ 
//                         scale: 1.05, 
//                         y: -5,
//                         boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
//                       }}
//                       className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20 hover:border-white/30 transition-all duration-300`}
//                     >
//                       <motion.div 
//                         className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-1.5 sm:mb-2"
//                         whileHover={{ rotate: 10, scale: 1.1 }}
//                       >
//                         <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
//                       </motion.div>
//                       <motion.div 
//                         className="text-xl sm:text-2xl font-bold text-white"
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {item.value}
//                       </motion.div>
//                       <div className="text-blue-200/70 text-[10px] sm:text-xs mt-0.5">{item.label}</div>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Why Choose Coderbox? Card with Video */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   viewport={{ once: true }}
//                   className="relative group"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
//                   <div className="relative bg-white/15 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/30 transition-all duration-500">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <h4 className="text-white font-bold text-sm sm:text-base mb-1">Why Choose Coderbox?</h4>
//                         <p className="text-blue-200/70 text-[10px] sm:text-xs">We deliver excellence with every project</p>
//                       </div>
//                       <motion.div
//                         whileHover={{ scale: 1.1, rotate: 10 }}
//                         className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 sm:p-2.5 rounded-xl flex-shrink-0"
//                       >
//                         <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
//                       </motion.div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
//                       {[
//                         { icon: Zap, label: 'Fast Delivery', color: 'text-yellow-400' },
//                         { icon: TrendingUp, label: 'Growth Focus', color: 'text-green-400' }
//                       ].map((item, index) => (
//                         <motion.div
//                           key={index}
//                           whileHover={{ scale: 1.05 }}
//                           className="flex items-center gap-2 bg-white/15 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 border border-white/10"
//                         >
//                           <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${item.color}`} />
//                           <span className="text-white/80 text-[10px] sm:text-xs font-medium">{item.label}</span>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* ===== VIDEO THUMBNAIL WITH WAVE EFFECT ===== */}
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       onClick={openVideo}
//                       className="mt-3 sm:mt-4 relative rounded-xl overflow-hidden cursor-pointer group/video"
//                     >
//                       <div className="relative w-full aspect-video bg-gradient-to-r from-blue-900/80 to-purple-900/80">
//                         <img
//                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
//                           alt="Watch Our Story"
//                           className="w-full h-full object-cover opacity-70 group-hover/video:opacity-50 transition-opacity duration-500"
//                         />
                        
//                         <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/30 transition-all duration-500"></div>
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
//                         {/* ===== WAVE ANIMATION EFFECT ===== */}
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <motion.div
//                             className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full border-4 border-blue-400/30"
//                             animate={{
//                               scale: [0.5, 1.8, 0.5],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 0
//                             }}
//                           />
//                           <motion.div
//                             className="absolute w-24 sm:w-36 h-24 sm:h-36 rounded-full border-4 border-purple-400/30"
//                             animate={{
//                               scale: [0.5, 1.6, 0.5],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 0.4
//                             }}
//                           />
//                           <motion.div
//                             className="absolute w-16 sm:w-24 h-16 sm:h-24 rounded-full border-4 border-pink-400/30"
//                             animate={{
//                               scale: [0.5, 1.4, 0.5],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 0.8
//                             }}
//                           />
//                           <motion.div
//                             className="absolute w-10 sm:w-16 h-10 sm:h-16 rounded-full border-4 border-cyan-400/30"
//                             animate={{
//                               scale: [0.5, 1.2, 0.5],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: 1.2
//                             }}
//                           />
//                         </div>
                        
//                         {/* Play Button */}
//                         <motion.div
//                           whileHover={{ scale: 1.15 }}
//                           whileTap={{ scale: 0.9 }}
//                           className="absolute inset-0 flex flex-col items-center justify-center z-10"
//                         >
//                           <motion.div
//                             className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 relative"
//                             animate={{
//                               boxShadow: [
//                                 '0 0 20px rgba(59,130,246,0.3)',
//                                 '0 0 60px rgba(59,130,246,0.6)',
//                                 '0 0 20px rgba(59,130,246,0.3)'
//                               ],
//                               scale: [1, 1.05, 1]
//                             }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           >
//                             <motion.div
//                               className="absolute inset-0 rounded-full border-2 border-white/30"
//                               animate={{
//                                 scale: [1, 1.5, 1],
//                                 opacity: [0.8, 0, 0.8]
//                               }}
//                               transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 ease: "easeInOut"
//                               }}
//                             />
//                             <Play className="h-5 w-5 sm:h-8 sm:w-8 text-white ml-1 relative z-10" />
//                           </motion.div>
                          
//                           <motion.p 
//                             className="text-white font-semibold text-xs sm:text-sm mt-2 sm:mt-3 drop-shadow-lg"
//                             animate={{
//                               y: [0, -3, 0]
//                             }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           >
//                             Watch Our Story
//                           </motion.p>
//                           <p className="text-blue-200/70 text-[8px] sm:text-[10px] mt-0.5 drop-shadow-lg">Click to play • See how we work</p>
//                         </motion.div>
//                       </div>
                      
//                       <motion.div
//                         className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/video:border-blue-500/50 transition-all duration-300"
//                       />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== VIDEO MODAL ===== */}
//       <AnimatePresence>
//         {isVideoOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
//             onClick={closeVideo}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
//               className="relative w-full max-w-4xl bg-black/50 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={closeVideo}
//                 className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20"
//               >
//                 <X className="h-5 w-5 sm:h-6 sm:w-6" />
//               </button>

//               <div className="relative aspect-video bg-black">
//                 <video
//                   ref={videoRef}
//                   src={videoUrl}
//                   className="w-full h-full object-contain"
//                   controls
//                   autoPlay
//                   onClick={(e) => e.stopPropagation()}
//                   onPlay={() => setIsPlaying(true)}
//                   onPause={() => setIsPlaying(false)}
//                 />
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
//                 <p className="text-white font-medium text-xs sm:text-sm flex items-center gap-2">
//                   <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse"></span>
//                   Now Playing: Our Story
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AboutSection;




import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp, X, Pause } from 'lucide-react';

const AboutSection = () => {
  // ===== STATE FOR VIDEO MODAL =====
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // ===== VIDEO URL =====
  const videoUrl = "/Your business doesn’t need more noise.It needs the right digital system.From web design & develo.mp4";

  // ===== TOGGLE VIDEO =====
  const openVideo = () => {
    setIsVideoOpen(true);
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 300);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <>
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
            animate={{ 
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
            animate={{ 
              x: [0, -50, 50, 0],
              y: [0, 50, -50, 0],
              scale: [1, 0.8, 1.2, 1]
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30 inline-block"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                About Us
              </motion.span>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 sm:mt-5 mb-3 sm:mb-4 leading-[1.15]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Grow Your Business{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">With Coderbox</span>
              </motion.h2>
              <motion.p 
                className="text-blue-200/80 text-sm sm:text-base leading-relaxed mb-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Over 10 years of helping companies reach their financial and branding goals.
              </motion.p>
              <motion.p 
                className="text-blue-200/70 text-sm leading-relaxed mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.
              </motion.p>
              
              <motion.div 
                className="space-y-3 mb-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { label: 'Brand Presence', value: 92 },
                  { label: 'Digital Presence', value: 95 },
                  { label: 'Optimization', value: 95 }
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="text-blue-200/80 font-medium text-xs sm:text-sm">{item.label}</span>
                      <span className="text-blue-400 font-bold text-xs sm:text-sm">{item.value}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-3"
              >
                <motion.a
                  href="/services"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-xs sm:text-sm"
                >
                  Know More About Us
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {/* Stats Grid - Exactly Like Digital Corsel */}
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  {[
                    { label: 'Years Experience', value: '10+', color: 'text-blue-400', borderColor: 'border-blue-500/30' },
                    { label: 'Happy Clients', value: '8K+', color: 'text-purple-400', borderColor: 'border-purple-500/30' },
                    { label: 'Awards Won', value: '12+', color: 'text-green-400', borderColor: 'border-green-500/30' },
                    { label: 'Client Satisfaction', value: '100%', color: 'text-orange-400', borderColor: 'border-orange-500/30' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                      }}
                      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 text-center border ${item.borderColor} hover:border-white/50 transition-all duration-300`}
                    >
                      <div className="htab_txt">
                        <p className={`text-3xl sm:text-4xl md:text-5xl font-bold ${item.color} mb-1`}>
                          {item.value}
                        </p>
                        <h3 className="text-blue-200/70 text-xs sm:text-sm font-medium tracking-wide">
                          {item.label}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Why Choose Coderbox? Card with Video */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative bg-white/15 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-white/30 transition-all duration-500">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-white font-bold text-sm sm:text-base mb-1">Why Choose Coderbox?</h4>
                        <p className="text-blue-200/70 text-[10px] sm:text-xs">We deliver excellence with every project</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 sm:p-2.5 rounded-xl flex-shrink-0"
                      >
                        <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                      {[
                        { icon: Zap, label: 'Fast Delivery', color: 'text-yellow-400' },
                        { icon: TrendingUp, label: 'Growth Focus', color: 'text-green-400' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 bg-white/15 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 border border-white/10"
                        >
                          <item.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${item.color}`} />
                          <span className="text-white/80 text-[10px] sm:text-xs font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* ===== VIDEO THUMBNAIL WITH WAVE EFFECT ===== */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={openVideo}
                      className="mt-3 sm:mt-4 relative rounded-xl overflow-hidden cursor-pointer group/video"
                    >
                      <div className="relative w-full aspect-video bg-gradient-to-r from-blue-900/80 to-purple-900/80">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzSpL3Jdz_jPNDd9aN5_0YiS4IuR1O1A5e0Fx5kX1o2DjzWcuN74buxc&s=10"
                          alt="Watch Our Story"
                          className="w-full h-full object-cover opacity-70 group-hover/video:opacity-50 transition-opacity duration-500"
                        />
                        
                        <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/30 transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* ===== WAVE ANIMATION EFFECT ===== */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full border-4 border-blue-400/30"
                            animate={{
                              scale: [0.5, 1.8, 0.5],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0
                            }}
                          />
                          <motion.div
                            className="absolute w-24 sm:w-36 h-24 sm:h-36 rounded-full border-4 border-purple-400/30"
                            animate={{
                              scale: [0.5, 1.6, 0.5],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.4
                            }}
                          />
                          <motion.div
                            className="absolute w-16 sm:w-24 h-16 sm:h-24 rounded-full border-4 border-pink-400/30"
                            animate={{
                              scale: [0.5, 1.4, 0.5],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.8
                            }}
                          />
                          <motion.div
                            className="absolute w-10 sm:w-16 h-10 sm:h-16 rounded-full border-4 border-cyan-400/30"
                            animate={{
                              scale: [0.5, 1.2, 0.5],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.2
                            }}
                          />
                        </div>
                        
                        {/* Play Button */}
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute inset-0 flex flex-col items-center justify-center z-10"
                        >
                          <motion.div
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 relative"
                            animate={{
                              boxShadow: [
                                '0 0 20px rgba(59,130,246,0.3)',
                                '0 0 60px rgba(59,130,246,0.6)',
                                '0 0 20px rgba(59,130,246,0.3)'
                              ],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-white/30"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.8, 0, 0.8]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <Play className="h-5 w-5 sm:h-8 sm:w-8 text-white ml-1 relative z-10" />
                          </motion.div>
                          
                          <motion.p 
                            className="text-white font-semibold text-xs sm:text-sm mt-2 sm:mt-3 drop-shadow-lg"
                            animate={{
                              y: [0, -3, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Watch Our Story
                          </motion.p>
                          <p className="text-blue-200/70 text-[8px] sm:text-[10px] mt-0.5 drop-shadow-lg">Click to play • See how we work</p>
                        </motion.div>
                      </div>
                      
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-transparent group-hover/video:border-blue-500/50 transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO MODAL ===== */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative w-full max-w-4xl bg-black/50 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium text-xs sm:text-sm flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Now Playing: Our Story
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection;