// // // import React, { useState, useRef } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp, X } from 'lucide-react';

// // // const AboutSection = () => {
// // //   const [isVideoOpen, setIsVideoOpen] = useState(false);
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const videoRef = useRef(null);

// // //   const videoUrl = "/Your business doesn’t need more noise.It needs the right digital system.From web design & develo.mp4";

// // //   const openVideo = () => {
// // //     setIsVideoOpen(true);
// // //     setIsPlaying(true);
// // //     setTimeout(() => {
// // //       if (videoRef.current) {
// // //         videoRef.current.play();
// // //       }
// // //     }, 300);
// // //   };

// // //   const closeVideo = () => {
// // //     setIsVideoOpen(false);
// // //     setIsPlaying(false);
// // //     if (videoRef.current) {
// // //       videoRef.current.pause();
// // //     }
// // //   };

// // //   // ===== STATS DATA =====
// // //   const statsData = [
// // //     {
// // //       label: 'Years Building',
// // //       value: '13+',
// // //       icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
// // //       bgClass: 'bg-[#006FA6]',
// // //       valueColor: 'text-[#006FA6]'
// // //     },
// // //     {
// // //       label: 'Ventures Led',
// // //       value: '03',
// // //       icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
// // //       bgClass: 'bg-[#006FA6]',
// // //       valueColor: 'text-[#006FA6]'
// // //     },
// // //     {
// // //       label: 'Industries',
// // //       value: '06',
// // //       icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
// // //       bgClass: 'bg-[#006FA6]',
// // //       valueColor: 'text-[#006FA6]'
// // //     },
// // //     {
// // //       label: 'Top Voice',
// // //       value: 'Yes',
// // //       icon: <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
// // //       bgClass: 'bg-[#006FA6]',
// // //       valueColor: 'text-[#006FA6]'
// // //     }
// // //   ];

// // //   const progressData = [
// // //     { label: 'Tech Innovation', value: 95, color: '#005B8F' },     
// // //     { label: 'Team Leadership', value: 100, color: '#005B8F' },   
// // //     { label: 'Business Strategy', value: 95, color: '#005B8F' }        
// // //   ];

// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
// // //   };

// // //   const itemVariants = {
// // //     hidden: { opacity: 0, y: 15 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] } }
// // //   };

// // //   return (
// // //     <>
// // //       <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f5f5f5] overflow-hidden">
        
// // //         {/* Background Blobs */}
// // //         <div className="absolute inset-0 pointer-events-none">
// // //           <motion.div
// // //             className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
// // //             animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
// // //             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// // //           />
// // //           <motion.div
// // //             className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
// // //             animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
// // //             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// // //           />
// // //         </div>

// // //         <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //           <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
// // //             {/* ===== LEFT COLUMN ===== */}
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -15 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               viewport={{ once: true }}
// // //               className="max-w-lg"
// // //             >
// // //               <motion.span 
// // //                 className="sec-badge inline-block"
// // //                 whileHover={{ scale: 1.05 }}
// // //                 animate={{ y: [0, -3, 0] }}
// // //                 transition={{ duration: 2, repeat: Infinity }}
// // //               >
// // //                 Meet Our Founder
// // //               </motion.span>

// // //               <motion.h2 
// // //                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
// // //                 initial={{ opacity: 0, y: 15 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.5, delay: 0.1 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 Ashwin R. Singh{' '}
// // //                 <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //                   (Aashu Singh)
// // //                 </span>
// // //               </motion.h2>

// // //               <motion.p 
// // //                 className="sec-p sec-text-dark-soft mt-1 max-w-md"
// // //                 initial={{ opacity: 0, y: 15 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.5, delay: 0.2 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions. With a background in Computer Science and AI, he has spent 13+ years building technology-led businesses.
// // //               </motion.p>
              
// // //               <motion.div 
// // //                 className="space-y-4 mb-6 mt-4 max-w-md"
// // //                 variants={containerVariants}
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //               >
// // //                 {progressData.map((item, index) => (
// // //                   <motion.div key={index} variants={itemVariants}>
// // //                     <div className="flex justify-between mb-2">
// // //                       <span className="sec-h3 text-gray-800 mb-0">{item.label}</span>
// // //                       <span className="sec-h3 mb-0" style={{ color: item.color }}>{item.value}%</span>
// // //                     </div>
// // //                     <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
// // //                       <motion.div 
// // //                         className="h-3 rounded-full"
// // //                         style={{ backgroundColor: item.color }}
// // //                         initial={{ width: 0 }}
// // //                         whileInView={{ width: `${item.value}%` }}
// // //                         transition={{ duration: 1, delay: 0.15 + index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
// // //                         viewport={{ once: true }}
// // //                       />
// // //                     </div>
// // //                   </motion.div>
// // //                 ))}
// // //               </motion.div>
              
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.4, delay: 0.3 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 <motion.a
// // //                   href="/AboutUs"
// // //                   whileTap={{ scale: 0.95 }}
// // //                   className="sec-btn"
// // //                 >
// // //                   Connect With Ashwin
// // //                   <motion.span
// // //                     animate={{ x: [0, 6, 0] }}
// // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // //                   >
// // //                     <ArrowRight className="h-4 w-4" />
// // //                   </motion.span>
// // //                 </motion.a>
// // //               </motion.div>
// // //             </motion.div>

// // //             {/* ===== RIGHT COLUMN ===== */}
// // //             <motion.div
// // //               initial={{ opacity: 0, x: 15 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               viewport={{ once: true }}
// // //               className="space-y-3 w-full"
// // //             >
              
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // //                 {statsData.map((item, index) => (
// // //                   <motion.div
// // //                     key={index}
// // //                     initial={{ opacity: 0, y: 15 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.35, delay: 0.04 * index }}
// // //                     viewport={{ once: true }}
// // //                     whileHover={{ y: -3 }}
// // //                     className="group bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-lg hover:shadow-[#008df1]/20 border-2 border-transparent hover:border-[#008df1] hover:bg-[#008df1]/5 transition-all duration-300"
// // //                   >
// // //                     <div className="flex items-center gap-3">
// // //                       <motion.div 
// // //                         className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${item.bgClass} flex items-center justify-center shadow-md`}
// // //                         whileHover={{ rotate: 6, scale: 1.05 }}
// // //                       >
// // //                         {item.icon}
// // //                       </motion.div>

// // //                       <div className="min-w-0">
// // //                         <p className={`sec-h2 mb-0 font-extrabold ${item.valueColor} leading-none`}>
// // //                           {item.value}
// // //                         </p>
// // //                         <h3 className="sec-p text-gray-500 mt-0.5 font-medium">
// // //                           {item.label}
// // //                         </h3>
// // //                       </div>
// // //                     </div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>

// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 10 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.4, delay: 0.3 }}
// // //                 viewport={{ once: true }}
// // //                 className="relative bg-white rounded-lg p-4 shadow-sm border border-gray-100"
// // //               >
// // //                 <div className="flex items-center justify-between mb-3">
// // //                   <div>
// // //                     <h3 className="sec-h3 text-gray-900 mb-0.5">Founder's Principles</h3>
// // //                     <p className="sec-p text-gray-500">Core philosophy</p>
// // //                   </div>
// // //                   <motion.div
// // //                     whileHover={{ scale: 1.1, rotate: 8 }}
// // //                     className="bg-[#008df1] p-1.5 rounded-lg flex-shrink-0 shadow-md"
// // //                   >
// // //                     <Shield className="h-3.5 w-3.5 text-white" />
// // //                   </motion.div>
// // //                 </div>

// // //                 <div className="grid grid-cols-2 gap-2 mb-3">
// // //                   {[
// // //                     { icon: Zap, label: 'Think in systems' },
// // //                     { icon: TrendingUp, label: 'Execute with discipline' }
// // //                   ].map((item, index) => (
// // //                     <div
// // //                       key={index}
// // //                       className="group relative overflow-hidden flex items-center gap-2 bg-gray-50 rounded-md px-2.5 py-2 border border-gray-100 transition-colors"
// // //                     >
// // //                       {/* Sliding Gradient Background */}
// // //                       <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-in-out"></div>
                      
// // //                       {/* Content */}
// // //                       <div className="relative z-10 flex items-center gap-2">
// // //                         <item.icon className="h-3.5 w-3.5 flex-shrink-0 text-[#008df1] group-hover:text-white transition-colors duration-300" />
// // //                         <span className="sec-p text-gray-700 group-hover:text-white transition-colors duration-300 font-medium">
// // //                           {item.label}
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 {/* Video Thumbnail with Stylish Blurred Frame */}
// // //                 <motion.div
// // //                   whileHover={{ scale: 1.01 }}
// // //                   onClick={openVideo}
// // //                   className="relative rounded-lg overflow-hidden cursor-pointer group/video"
// // //                 >
// // //                   <div className="relative w-full aspect-[16/7] overflow-hidden bg-slate-900">
// // //                     {/* Blurred Background Image */}
// // //                     <img
// // //                       src="/founder.jpeg"
// // //                       alt="Background Blur"
// // //                       className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-110"
// // //                     />
                    
// // //                     {/* Gradient Overlay for blending */}
// // //                     <div className="absolute inset-0 bg-gradient-to-r from-[#005b8f]/80 via-transparent to-[#005b8f]/80"></div>

// // //                     {/* Sharp Foreground Image */}
// // //                     <img
// // //                       src="/founder.jpeg"
// // //                       alt="Watch Founder's Note"
// // //                       className="relative z-10 w-full h-full object-contain opacity-90 group-hover/video:opacity-100 transition-all duration-500"
// // //                     />
                    
// // //                     {/* Dark Overlay */}
// // //                     <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-all duration-300 z-20"></div>
                    
// // //                     {/* Play Button and Text */}
// // //                     <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
// // //                       <motion.div
// // //                         className="w-11 h-11 rounded-full bg-[#008df1] flex items-center justify-center shadow-2xl shadow-[#008df1]/50 relative"
// // //                         animate={{
// // //                           boxShadow: [
// // //                             '0 0 15px rgba(0,141,241,0.4)',
// // //                             '0 0 35px rgba(0,141,241,0.6)',
// // //                             '0 0 15px rgba(0,141,241,0.4)'
// // //                           ],
// // //                           scale: [1, 1.05, 1]
// // //                         }}
// // //                         transition={{ duration: 2, repeat: Infinity }}
// // //                       >
// // //                         <motion.div
// // //                           className="absolute inset-0 rounded-full border-2 border-white/40"
// // //                           animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
// // //                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
// // //                         />
// // //                         <Play className="h-4 w-4 text-white ml-0.5 relative z-10" fill="currentColor" />
// // //                       </motion.div>
                      
// // //                       <motion.p 
// // //                         className="sec-p text-white font-semibold mt-1.5 drop-shadow-lg"
// // //                         animate={{ y: [0, -2, 0] }}
// // //                         transition={{ duration: 2, repeat: Infinity }}
// // //                       >
// // //                         Watch
// // //                       </motion.p>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               </motion.div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Video Modal */}
// // //       <AnimatePresence>
// // //         {isVideoOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-3"
// // //             onClick={closeVideo}
// // //           >
// // //             <motion.div
// // //               initial={{ scale: 0.8, opacity: 0 }}
// // //               animate={{ scale: 1, opacity: 1 }}
// // //               exit={{ scale: 0.8, opacity: 0 }}
// // //               transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
// // //               className="relative w-full max-w-3xl bg-black/50 rounded-xl overflow-hidden shadow-2xl shadow-[#008df1]/15 border border-white/10"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <button
// // //                 onClick={closeVideo}
// // //                 className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-[#008df1]/80 backdrop-blur-sm p-1.5 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20"
// // //               >
// // //                 <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
// // //               </button>

// // //               <div className="relative aspect-video bg-black">
// // //                 <video
// // //                   ref={videoRef}
// // //                   src={videoUrl}
// // //                   className="w-full h-full object-contain"
// // //                   controls
// // //                   autoPlay
// // //                   onClick={(e) => e.stopPropagation()}
// // //                   onPlay={() => setIsPlaying(true)}
// // //                   onPause={() => setIsPlaying(false)}
// // //                 />
// // //               </div>

// // //               <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent">
// // //                 <p className="sec-p text-white flex items-center gap-1.5">
// // //                   <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500 animate-pulse"></span>
// // //                   Now Playing: Founder's Note
// // //                 </p>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // };

// // // export default AboutSection;







// // import React, { useState, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp, X } from 'lucide-react';

// // const AboutSection = () => {
// //   const [isVideoOpen, setIsVideoOpen] = useState(false);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const videoRef = useRef(null);

// //   const videoUrl = "/Your business doesn’t need more noise.It needs the right digital system.From web design & develo.mp4";

// //   const openVideo = () => {
// //     setIsVideoOpen(true);
// //     setIsPlaying(true);
// //     setTimeout(() => {
// //       if (videoRef.current) {
// //         videoRef.current.play();
// //       }
// //     }, 300);
// //   };

// //   const closeVideo = () => {
// //     setIsVideoOpen(false);
// //     setIsPlaying(false);
// //     if (videoRef.current) {
// //       videoRef.current.pause();
// //     }
// //   };

// //   // ===== STATS DATA =====
// //   const statsData = [
// //     {
// //       label: 'Years Building',
// //       value: '13+',
// //       icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
// //       bgClass: 'bg-[#006FA6]',
// //       valueColor: 'text-[#006FA6]'
// //     },
// //     {
// //       label: 'Ventures Led',
// //       value: '03',
// //       icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
// //       bgClass: 'bg-[#006FA6]',
// //       valueColor: 'text-[#006FA6]'
// //     },
// //     {
// //       label: 'Industries',
// //       value: '06',
// //       icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
// //       bgClass: 'bg-[#006FA6]',
// //       valueColor: 'text-[#006FA6]'
// //     },
// //     {
// //       label: 'Top Voice',
// //       value: 'Yes',
// //       icon: <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
// //       bgClass: 'bg-[#006FA6]',
// //       valueColor: 'text-[#006FA6]'
// //     }
// //   ];

// //   const progressData = [
// //     { label: 'Tech Innovation', value: 95, color: '#005B8F' },     
// //     { label: 'Team Leadership', value: 100, color: '#005B8F' },   
// //     { label: 'Business Strategy', value: 95, color: '#005B8F' }        
// //   ];

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 15 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] } }
// //   };

// //   return (
// //     <>
// //       <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f5f5f5] overflow-hidden">
        
// //         {/* Background Blobs */}
// //         <div className="absolute inset-0 pointer-events-none">
// //           <motion.div
// //             className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
// //             animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
// //             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //           />
// //           <motion.div
// //             className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
// //             animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
// //             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //           />
// //         </div>

// //         <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //           <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
// //             {/* ===== LEFT COLUMN ===== */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -15 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5 }}
// //               viewport={{ once: true }}
// //               className="max-w-lg"
// //             >
// //               <motion.span 
// //                 className="sec-badge inline-block"
// //                 whileHover={{ scale: 1.05 }}
// //                 animate={{ y: [0, -3, 0] }}
// //                 transition={{ duration: 2, repeat: Infinity }}
// //               >
// //                 About Us
// //               </motion.span>

// //               <motion.h2 
// //                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
// //                 initial={{ opacity: 0, y: 15 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: 0.1 }}
// //                 viewport={{ once: true }}
// //               >
// //                 Ashwin R. Singh{' '}
// //                 <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// //                   (Aashu Singh)
// //                 </span>
// //               </motion.h2>

// //               <motion.p 
// //                 className="sec-p sec-text-dark-soft mt-1 max-w-md"
// //                 initial={{ opacity: 0, y: 15 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: 0.2 }}
// //                 viewport={{ once: true }}
// //               >
// //                 Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions. With a background in Computer Science and AI, he has spent 13+ years building technology-led businesses.
// //               </motion.p>
              
// //               <motion.div 
// //                 className="space-y-4 mb-6 mt-4 max-w-md"
// //                 variants={containerVariants}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //               >
// //                 {progressData.map((item, index) => (
// //                   <motion.div key={index} variants={itemVariants}>
// //                     <div className="flex justify-between mb-2">
// //                       <span className="sec-h3 text-gray-800 mb-0">{item.label}</span>
// //                       <span className="sec-h3 mb-0" style={{ color: item.color }}>{item.value}%</span>
// //                     </div>
// //                     <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
// //                       <motion.div 
// //                         className="h-3 rounded-full"
// //                         style={{ backgroundColor: item.color }}
// //                         initial={{ width: 0 }}
// //                         whileInView={{ width: `${item.value}%` }}
// //                         transition={{ duration: 1, delay: 0.15 + index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
// //                         viewport={{ once: true }}
// //                       />
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </motion.div>
              
// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.4, delay: 0.3 }}
// //                 viewport={{ once: true }}
// //               >
// //                 <motion.a
// //                   href="/AboutUs"
// //                   whileTap={{ scale: 0.95 }}
// //                   className="sec-btn"
// //                 >
// //                   Connect With Ashwin
// //                   <motion.span
// //                     animate={{ x: [0, 6, 0] }}
// //                     transition={{ duration: 1.5, repeat: Infinity }}
// //                   >
// //                     <ArrowRight className="h-4 w-4" />
// //                   </motion.span>
// //                 </motion.a>
// //               </motion.div>
// //             </motion.div>

// //             {/* ===== RIGHT COLUMN ===== */}
// //             <motion.div
// //               initial={{ opacity: 0, x: 15 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5 }}
// //               viewport={{ once: true }}
// //               className="space-y-3 w-full"
// //             >
              
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //                 {statsData.map((item, index) => (
// //                   <motion.div
// //                     key={index}
// //                     initial={{ opacity: 0, y: 15 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.35, delay: 0.04 * index }}
// //                     viewport={{ once: true }}
// //                     whileHover={{ y: -3 }}
// //                     className="group bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-lg hover:shadow-[#008df1]/20 border-2 border-transparent hover:border-[#008df1] hover:bg-[#008df1]/5 transition-all duration-300"
// //                   >
// //                     <div className="flex items-center gap-3">
// //                       <motion.div 
// //                         className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${item.bgClass} flex items-center justify-center shadow-md`}
// //                         whileHover={{ rotate: 6, scale: 1.05 }}
// //                       >
// //                         {item.icon}
// //                       </motion.div>

// //                       <div className="min-w-0">
// //                         <p className={`sec-h2 mb-0 font-extrabold ${item.valueColor} leading-none`}>
// //                           {item.value}
// //                         </p>
// //                         <h3 className="sec-p text-gray-500 mt-0.5 font-medium">
// //                           {item.label}
// //                         </h3>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>

// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.4, delay: 0.3 }}
// //                 viewport={{ once: true }}
// //                 className="relative bg-white rounded-lg p-4 shadow-sm border border-gray-100"
// //               >
// //                 <div className="flex items-center justify-between mb-3">
// //                   <div>
// //                     <h3 className="sec-h3 text-gray-900 mb-0.5">Founder's Principles</h3>
// //                     <p className="sec-p text-gray-500">Core philosophy</p>
// //                   </div>
// //                   <motion.div
// //                     whileHover={{ scale: 1.1, rotate: 8 }}
// //                     className="bg-[#008df1] p-1.5 rounded-lg flex-shrink-0 shadow-md"
// //                   >
// //                     <Shield className="h-3.5 w-3.5 text-white" />
// //                   </motion.div>
// //                 </div>

// //                 <div className="grid grid-cols-2 gap-2 mb-3">
// //                   {[
// //                     { icon: Zap, label: 'Think in systems' },
// //                     { icon: TrendingUp, label: 'Execute with discipline' }
// //                   ].map((item, index) => (
// //                     <div
// //                       key={index}
// //                       className="group relative overflow-hidden flex items-center gap-2 bg-gray-50 rounded-md px-2.5 py-2 border border-gray-100 transition-colors"
// //                     >
// //                       {/* Sliding Gradient Background */}
// //                       <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-in-out"></div>
                      
// //                       {/* Content */}
// //                       <div className="relative z-10 flex items-center gap-2">
// //                         <item.icon className="h-3.5 w-3.5 flex-shrink-0 text-[#008df1] group-hover:text-white transition-colors duration-300" />
// //                         <span className="sec-p text-gray-700 group-hover:text-white transition-colors duration-300 font-medium">
// //                           {item.label}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Video Thumbnail - Premium Cinematic Tech Design */}
// //                 <motion.div
// //                   whileHover={{ scale: 1.01 }}
// //                   onClick={openVideo}
// //                   className="relative rounded-lg overflow-hidden cursor-pointer group/video shadow-md"
// //                 >
// //                   <div className="relative w-full aspect-[16/7] bg-[#0a192f]">
                    
// //                     {/* Tech Grid Background */}
// //                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
                    
// //                     {/* Glow Effects */}
// //                     <motion.div 
// //                       className="absolute -top-10 -right-10 w-32 h-32 bg-[#01ADF0]/30 rounded-full blur-3xl"
// //                       animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
// //                       transition={{ duration: 4, repeat: Infinity }}
// //                     />
// //                     <motion.div 
// //                       className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00C6FB]/20 rounded-full blur-3xl"
// //                       animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
// //                       transition={{ duration: 5, repeat: Infinity }}
// //                     />

// //                     {/* Founder Image (Contained to show full face) */}
// //                     <img
// //                       src="/founder.jpeg"
// //                       alt="Founder"
// //                       className="relative z-10 w-full h-full object-contain object-center opacity-95 group-hover/video:opacity-100 transition-all duration-500"
// //                     />

// //                     {/* Cinematic Gradient Overlay for Text Readability */}
// //                     <div className="absolute inset-0 bg-gradient-to-t from-[#001E3C] via-transparent to-transparent z-20 opacity-90" />

// //                     {/* Top Badge */}
// //                     <div className="absolute top-3 right-3 z-30">
// //                       <span className="text-[9px] font-bold tracking-wider text-white bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 uppercase shadow-sm">
// //                         Founder's Note
// //                       </span>
// //                     </div>

// //                     {/* Center Play Button (Glassmorphism) */}
// //                     <div className="absolute inset-0 flex items-center justify-center z-30">
// //                       <motion.div
// //                         className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,198,251,0.4)] relative group-hover/video:bg-[#01ADF0]/80 group-hover/video:border-white transition-all duration-300"
// //                         animate={{
// //                           boxShadow: [
// //                             '0 0 20px rgba(255,255,255,0.1)',
// //                             '0 0 40px rgba(0,198,251,0.5)',
// //                             '0 0 20px rgba(255,255,255,0.1)'
// //                           ],
// //                           scale: [1, 1.05, 1]
// //                         }}
// //                         transition={{ duration: 2, repeat: Infinity }}
// //                       >
// //                         <Play className="h-6 w-6 text-white ml-1 relative z-10" fill="currentColor" />
// //                       </motion.div>
// //                     </div>

// //                     {/* Bottom Text Overlay */}
// //                     <div className="absolute bottom-0 left-0 right-0 p-4 z-30 flex justify-between items-end">
// //                       <div>
// //                         <p className="text-white text-sm font-bold tracking-wide drop-shadow-md">Ashwin R. Singh</p>
// //                         <p className="text-[#01ADF0] text-[10px] font-medium tracking-wider uppercase drop-shadow-md">Watch the vision</p>
// //                       </div>
// //                     </div>

// //                   </div>
// //                 </motion.div>
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Video Modal */}
// //       <AnimatePresence>
// //         {isVideoOpen && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-3"
// //             onClick={closeVideo}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.8, opacity: 0 }}
// //               transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
// //               className="relative w-full max-w-3xl bg-black/50 rounded-xl overflow-hidden shadow-2xl shadow-[#008df1]/15 border border-white/10"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button
// //                 onClick={closeVideo}
// //                 className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-[#008df1]/80 backdrop-blur-sm p-1.5 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20"
// //               >
// //                 <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
// //               </button>

// //               <div className="relative aspect-video bg-black">
// //                 <video
// //                   ref={videoRef}
// //                   src={videoUrl}
// //                   className="w-full h-full object-contain"
// //                   controls
// //                   autoPlay
// //                   onClick={(e) => e.stopPropagation()}
// //                   onPlay={() => setIsPlaying(true)}
// //                   onPause={() => setIsPlaying(false)}
// //                 />
// //               </div>

// //               <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent">
// //                 <p className="sec-p text-white flex items-center gap-1.5">
// //                   <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500 animate-pulse"></span>
// //                   Now Playing: Founder's Note
// //                 </p>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default AboutSection;





// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import { ArrowRight, RefreshCw, TrendingUp } from 'lucide-react';

// // /* ============================================================
// //    DATA
// //    ============================================================ */
// // const CHIPS = [
// //   'Branding', 'Technology', 'AI', 'Digital Strategy',
// //   'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
// // ];

// // const MARQUEE_SERVICES = [
// //   'Branding', 'Technology', 'AI', 'Digital Strategy',
// //   'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
// // ];

// // const MARQUEE_LINES = [
// //   'Made in India', 'Built for the World', 'Human-Centered',
// //   'AI-Driven', 'Build. Scale. Transform.',
// //   'Your Expertise. Our Strategy. Your Growth.',
// // ];

// // const STATS = [
// //   { value: '09',    label: 'Service Pillars' },
// //   { value: '1',     label: 'Team, One Engine' },
// //   { value: '24/7',  label: 'Automation' },
// //   { value: '[XX]+', label: 'Brands Scaled' },
// // ];

// // const BUILD_WORDS = ['BUILD.', 'SCALE.', 'TRANSFORM.'];

// // /* ============================================================
// //    MAIN COMPONENT
// //    ============================================================ */
// // const CoderBoxDigital = () => {
// //   const [buildIndex, setBuildIndex] = useState(0);

// //   useEffect(() => {
// //     const t = setInterval(() => setBuildIndex((i) => (i + 1) % 3), 1800);
// //     return () => clearInterval(t);
// //   }, []);

// //   return (
// //     <>
// //       <style>{`
// //         @keyframes cbBlink { 50% { opacity: .25; } }
// //         @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
// //         @keyframes cbSpin { to { transform: rotate(360deg); } }
// //         @keyframes cbPulse {
// //           0%   { transform: scale(1); opacity: .9; }
// //           100% { transform: scale(4); opacity: 0; }
// //         }
// //         @keyframes cbDash { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }
// //         @keyframes cbMq  { to { transform: translateX(-50%); } }

// //         .cb-bob    { animation: cbBob 6s ease-in-out infinite; }
// //         .cb-spin   { animation: cbSpin 28s linear infinite; transform-origin: center; }
// //         .cb-pulse  { transform-box: fill-box; transform-origin: center; animation: cbPulse 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
// //         .cb-arc    { stroke-dasharray: 4 5; }
// //         .cb-arc-run{ stroke-dasharray: 18 400; animation: cbDash 3.6s linear infinite; }

// //         .cb-marquee-track     { display: flex; width: max-content; animation: cbMq 42s linear infinite; }
// //         .cb-marquee-track-rev { display: flex; width: max-content; animation: cbMq 36s linear infinite reverse; }
// //       `}</style>

// //       <div className="bg-[#f5f5f5] text-gray-900 font-['DM_Sans'] overflow-x-hidden">

// //         {/* ============================================================
// //            HERO
// //            ============================================================ */}
// //         <section className="relative pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12 overflow-hidden">
// //           <div className="absolute inset-0 pointer-events-none">
// //             <motion.div
// //               className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
// //               animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
// //               transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
// //             />
// //             <motion.div
// //               className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
// //               animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
// //               transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
// //             />
// //           </div>

// //           <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

// //               {/* LEFT */}
// //               <motion.div
// //                 initial={{ opacity: 0, x: -15 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.5 }}
// //                 viewport={{ once: true }}
// //               >
// //                 <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
// //                   <motion.span
// //                     className="sec-badge inline-flex items-center gap-2"
// //                     whileHover={{ scale: 1.05 }}
// //                     animate={{ y: [0, -3, 0] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                   >
// //                     <i className="w-2 h-2 rounded-full bg-[#006FA6]" style={{ animation: 'cbBlink 2s infinite' }} />
// //                     CoderBox Digital
// //                   </motion.span>
// //                   <motion.span
// //                     className="sec-badge inline-block"
// //                     whileHover={{ scale: 1.05 }}
// //                     animate={{ y: [0, -3, 0] }}
// //                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
// //                   >
// //                     Human-Centered. AI-Driven.
// //                   </motion.span>
// //                 </div>

// //                 <h1
// //                   className="sec-h2 sec-text-dark font-['Space_Grotesk'] leading-[1.02] tracking-[-.03em]"
// //                   style={{ fontSize: 'clamp(38px,6vw,72px)' }}
// //                 >
// //                   <span className="block">Made in India.</span>
// //                   <span className="block">Built for the</span>
// //                   <span className="block bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// //                     World.
// //                   </span>
// //                 </h1>

// //                 <div
// //                   className="flex flex-wrap items-center gap-3 sm:gap-5 mt-5 mb-5 font-['Space_Grotesk'] font-extrabold"
// //                   style={{ fontSize: 'clamp(16px,3vw,24px)', letterSpacing: '-.02em' }}
// //                 >
// //                   {BUILD_WORDS.map((word, i) => (
// //                     <span
// //                       key={word}
// //                       className={`relative transition-colors duration-500 ${
// //                         buildIndex === i ? 'text-gray-900' : 'text-gray-300'
// //                       }`}
// //                     >
// //                       {word}
// //                       {buildIndex === i && (
// //                         <motion.span
// //                           layoutId="build-underline"
// //                           className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#006FA6]"
// //                           initial={{ scaleX: 0 }}
// //                           animate={{ scaleX: 1 }}
// //                           transition={{ duration: 0.4 }}
// //                         />
// //                       )}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 <p className="sec-p sec-text-dark-soft max-w-[560px]">
// //                   A growth partner from India with a global mindset. We put{' '}
// //                   <b className="text-gray-900">people first</b> and let AI do the heavy lifting,
// //                   bringing every discipline your brand needs into one team.
// //                 </p>

// //                 <div className="flex flex-wrap gap-2 my-5 sm:my-6 max-w-[600px]">
// //                   {CHIPS.map((chip, i) => (
// //                     <motion.span
// //                       key={chip}
// //                       initial={{ opacity: 0, y: 8 }}
// //                       whileInView={{ opacity: 1, y: 0 }}
// //                       transition={{ duration: 0.3, delay: i * 0.04 }}
// //                       viewport={{ once: true }}
// //                       className="px-3 py-1.5 border border-gray-200 rounded-full text-[13px] font-semibold text-gray-600 bg-white transition-all duration-300 hover:border-[#006FA6] hover:text-[#006FA6] hover:-translate-y-0.5"
// //                     >
// //                       {chip}
// //                     </motion.span>
// //                   ))}
// //                 </div>

// //                 <div className="flex flex-wrap items-center gap-5 mt-5">
// //                   <motion.a href="#contact" whileTap={{ scale: 0.95 }} className="sec-btn">
// //                     Connect With CoderBox
// //                     <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
// //                       <ArrowRight className="h-4 w-4" />
// //                     </motion.span>
// //                   </motion.a>

// //                   <a
// //                     href="#services"
// //                     className="sec-h3 text-[#006FA6] underline decoration-[1.5px] underline-offset-[6px] hover:decoration-[#006FA6] mb-0"
// //                   >
// //                     Explore services
// //                   </a>
// //                 </div>

// //                 <div className="sec-p sec-text-dark-soft mt-7 sm:mt-8 flex items-center gap-3">
// //                   <span className="w-9 h-[1.5px] bg-gray-400 inline-block" />
// //                   Your Expertise. Our Strategy. Your Growth.
// //                 </div>
// //               </motion.div>

// //               {/* RIGHT — Globe card */}
// //               <motion.div
// //                 initial={{ opacity: 0, x: 15 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.5 }}
// //                 viewport={{ once: true }}
// //                 className="relative w-full max-w-[520px] mx-auto lg:mx-0"
// //                 style={{ aspectRatio: '1 / 1.02' }}
// //               >
// //                 <div className="absolute -left-[3%] -top-[3%] w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] z-[3]">
// //                   <svg viewBox="0 0 150 150" className="w-full h-full">
// //                     <circle cx="75" cy="75" r="72" fill="#f5f5f5" stroke="#0B1526" strokeWidth="1.5" />
// //                     <defs>
// //                       <path id="cb-circ" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
// //                     </defs>
// //                     <g className="cb-spin">
// //                       <text style={{ font: '800 11px DM Sans, sans-serif', letterSpacing: '.16em', fill: '#0B1526' }}>
// //                         <textPath href="#cb-circ" startOffset="6%">
// //                           BUILT FOR THE WORLD • MADE IN INDIA •
// //                         </textPath>
// //                       </text>
// //                     </g>
// //                     <rect x="50" y="58" width="50" height="34" rx="5" fill="#0B1526" />
// //                     <text x="75" y="79" textAnchor="middle" style={{ font: '800 16px Space Grotesk, sans-serif', fill: '#FFFFFF' }}>
// //                       CB
// //                     </text>
// //                     <rect x="50"   y="88" width="16.6" height="4" fill="#F09A36" />
// //                     <rect x="66.6" y="88" width="16.7" height="4" fill="#FFFFFF" />
// //                     <rect x="83.3" y="88" width="16.7" height="4" fill="#2E8B57" />
// //                   </svg>
// //                 </div>

// //                 <div
// //                   className="absolute top-[8%] right-[2%] bottom-[10%] left-[10%] bg-[#0B1F3A] rounded-[22px] sm:rounded-[28px] overflow-hidden"
// //                   style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.55)' }}
// //                 >
// //                   <svg className="w-full h-full block" viewBox="0 0 520 500" preserveAspectRatio="xMidYMid slice">
// //                     <defs>
// //                       <radialGradient id="cb-gl" cx="45%" cy="40%" r="65%">
// //                         <stop offset="0" stopColor="#15375A" />
// //                         <stop offset="1" stopColor="#0B1F3A" stopOpacity="0" />
// //                       </radialGradient>
// //                       <clipPath id="cb-gclip"><circle cx="260" cy="250" r="170" /></clipPath>
// //                     </defs>

// //                     <circle cx="260" cy="250" r="230" fill="url(#cb-gl)" />

// //                     <g clipPath="url(#cb-gclip)">
// //                       <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
// //                         <ellipse cx="260" cy="250" rx="170" ry="40" />
// //                         <ellipse cx="260" cy="190" rx="160" ry="34" />
// //                         <ellipse cx="260" cy="310" rx="160" ry="34" />
// //                         <ellipse cx="260" cy="130" rx="118" ry="22" />
// //                         <ellipse cx="260" cy="370" rx="118" ry="22" />
// //                       </g>
// //                       <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
// //                         <ellipse cx="260" cy="250" rx="100" ry="170" />
// //                         <ellipse cx="260" cy="250" rx="40"  ry="170" />
// //                         <line x1="260" y1="80" x2="260" y2="420" />
// //                       </g>
// //                     </g>

// //                     <circle cx="260" cy="250" r="170" fill="none" stroke="rgba(143,203,242,.35)" />

// //                     {[
// //                       'M318 262 Q 240 120 150 176',
// //                       'M318 262 Q 180 70 70 205',
// //                       'M318 262 Q 300 200 262 228',
// //                       'M318 262 Q 390 250 392 300',
// //                       'M318 262 Q 450 260 440 390',
// //                     ].map((d, i) => (
// //                       <path key={`arc-${i}`} className="cb-arc" d={d} fill="none" stroke="#8FCBF2" strokeWidth="1.6" opacity=".85" />
// //                     ))}

// //                     {[
// //                       { d: 'M318 262 Q 240 120 150 176', delay: '0s' },
// //                       { d: 'M318 262 Q 180 70 70 205',   delay: '-.9s' },
// //                       { d: 'M318 262 Q 300 200 262 228', delay: '-1.8s' },
// //                       { d: 'M318 262 Q 390 250 392 300', delay: '-2.7s' },
// //                       { d: 'M318 262 Q 450 260 440 390', delay: '-1.3s' },
// //                     ].map((r, i) => (
// //                       <path key={`run-${i}`} className="cb-arc-run" d={r.d} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" style={{ animationDelay: r.delay }} />
// //                     ))}

// //                     {[
// //                       [150, 176, 'LONDON', 118, 165],
// //                       [70,  205, 'NEW YORK', 40, 228],
// //                       [262, 228, 'DUBAI', 222, 218],
// //                       [392, 300, 'SINGAPORE', 400, 304],
// //                       [440, 390, 'SYDNEY', 408, 412],
// //                     ].map(([cx, cy, label, tx, ty]) => (
// //                       <g key={label}>
// //                         <circle cx={cx} cy={cy} r="4" fill="#8FCBF2" />
// //                         <text x={tx} y={ty} fill="#CFE6F7" style={{ font: '700 11px DM Sans, sans-serif', letterSpacing: '.06em' }}>{label}</text>
// //                       </g>
// //                     ))}

// //                     <g>
// //                       <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
// //                       <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" style={{ animationDelay: '1.1s' }} />
// //                       <circle cx="318" cy="262" r="6.5" fill="#F09A36" />
// //                       <text x="332" y="252" fill="#fff" style={{ font: '800 12px DM Sans, sans-serif', letterSpacing: '.1em' }}>INDIA</text>
// //                     </g>
// //                   </svg>

// //                   <div className="absolute left-4 sm:left-7 right-4 sm:right-7 bottom-3 sm:bottom-5 flex justify-between items-end text-white">
// //                     <div>
// //                       <b className="block font-['Space_Grotesk'] font-extrabold text-sm sm:text-base">CoderBox Digital</b>
// //                       <small className="font-bold text-[9px] sm:text-[10px] tracking-[.16em] text-[#8FCBF2]">
// //                         FUTURE DIGITAL TRANSFORMATION
// //                       </small>
// //                     </div>
// //                     <span className="flex items-center gap-1.5 font-extrabold text-[9px] sm:text-[10px] tracking-[.14em] text-white border border-white/25 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
// //                       <i className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" style={{ animation: 'cbBlink 1.4s infinite' }} />
// //                       LIVE
// //                     </span>
// //                   </div>
// //                 </div>

// //                 <motion.div
// //                   whileHover={{ scale: 1.03 }}
// //                   className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
// //                   style={{ right: '-4%', top: '14%' }}
// //                 >
// //                   <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
// //                     <RefreshCw className="h-4 w-4" />
// //                   </span>
// //                   <div>
// //                     <b className="block font-['Space_Grotesk'] font-extrabold text-base sm:text-lg leading-none">24/7</b>
// //                     <small className="sec-p sec-text-dark-soft mb-0 text-[11px]">Automation</small>
// //                   </div>
// //                 </motion.div>

// //                 <motion.div
// //                   whileHover={{ scale: 1.03 }}
// //                   className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
// //                   style={{ left: '-6%', top: '50%', animationDelay: '-3s' }}
// //                 >
// //                   <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
// //                     <TrendingUp className="h-4 w-4" />
// //                   </span>
// //                   <div>
// //                     <b className="block font-['Space_Grotesk'] font-extrabold text-base sm:text-lg leading-none">[XX]+</b>
// //                     <small className="sec-p sec-text-dark-soft mb-0 text-[11px]">Brands Scaled</small>
// //                   </div>
// //                 </motion.div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================================
// //            DARK NAVY MARQUEE
// //            ============================================================ */}
// //         <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0B1F3A] text-white py-3 sm:py-4 md:py-5">
// //           <div className="cb-marquee-track">
// //             {[0, 1].map((k) => (
// //               <span
// //                 key={k}
// //                 className="flex items-center gap-4 sm:gap-8 md:gap-12 pr-4 sm:pr-8 md:pr-12 font-['Space_Grotesk'] font-extrabold whitespace-nowrap"
// //                 style={{ fontSize: 'clamp(18px, 2.5vw, 32px)', letterSpacing: '-.01em' }}
// //               >
// //                 {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((n, i) => (
// //                   <React.Fragment key={`${k}-${i}`}>
// //                     <span>{n}</span>
// //                     <span className="text-[#8FCBF2] text-[10px] sm:text-xs" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
// //                   </React.Fragment>
// //                 ))}
// //               </span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ============================================================
// //            BLUE ITALIC MARQUEE
// //            ============================================================ */}
// //         <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0A5E93] text-white py-2.5 sm:py-3 md:py-3.5">
// //           <div className="cb-marquee-track-rev">
// //             {[0, 1].map((k) => (
// //               <span
// //                 key={k}
// //                 className="flex items-center gap-4 sm:gap-8 md:gap-12 pr-4 sm:pr-8 md:pr-12 font-['Instrument_Serif',_Georgia,_serif] italic whitespace-nowrap"
// //                 style={{ fontSize: 'clamp(16px, 2.2vw, 26px)', letterSpacing: '-.005em' }}
// //               >
// //                 {[...MARQUEE_LINES, ...MARQUEE_LINES].map((n, i) => (
// //                   <React.Fragment key={`${k}-${i}`}>
// //                     <span>{n}</span>
// //                     <span className="text-[#F09A36] text-[10px] sm:text-xs not-italic" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
// //                   </React.Fragment>
// //                 ))}
// //               </span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ============================================================
// //            PRINCIPLES HEADER + STATS ROW (3 cards hata diye)
// //            ============================================================ */}
// //         <section id="principles" className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f5f5f5] overflow-hidden">
// //           <div className="absolute inset-0 pointer-events-none">
          

// //             {/* Stats row */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 15 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               viewport={{ once: true }}
// //               className="mx-auto max-w-[1200px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
// //             >
// //               <div className="grid grid-cols-2 lg:grid-cols-4">
// //                 {STATS.map((st, i) => (
// //                   <div
// //                     key={st.label}
// //                     className={`flex flex-col items-center justify-center text-center py-8 sm:py-10 md:py-12 px-4 border-gray-200
// //                       ${i % 2 === 0 ? 'border-r' : ''}
// //                       ${i < 2 ? 'border-b lg:border-b-0' : ''}
// //                       ${i === 1 || i === 2 ? 'lg:border-r' : ''}
// //                     `}
// //                   >
// //                     <b
// //                       className="block font-['Space_Grotesk'] font-bold leading-none text-[#1E5B8F]"
// //                       style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-.04em' }}
// //                     >
// //                       {st.value}
// //                     </b>
// //                     <span
// //                       className="mt-3 sm:mt-4 font-['DM_Sans'] text-gray-700"
// //                       style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}
// //                     >
// //                       {st.label}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default CoderBoxDigital;








// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, RefreshCw, TrendingUp } from 'lucide-react';

// /* ============================================================
//    DATA
//    ============================================================ */
// const CHIPS = [
//   'Branding', 'Technology', 'AI', 'Digital Strategy',
//   'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
// ];

// const MARQUEE_SERVICES = [
//   'Branding', 'Technology', 'AI', 'Digital Strategy',
//   'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
// ];

// const MARQUEE_LINES = [
//   'Made in India', 'Built for the World', 'Human-Centered',
//   'AI-Driven', 'Build. Scale. Transform.',
//   'Your Expertise. Our Strategy. Your Growth.',
// ];

// const STATS = [
//   { value: '09',    label: 'Service Pillars' },
//   { value: '1',     label: 'Team, One Engine' },
//   { value: '24/7',  label: 'Automation' },
//   { value: '[XX]+', label: 'Brands Scaled' },
// ];

// const BUILD_WORDS = ['BUILD.', 'SCALE.', 'TRANSFORM.'];

// /* ============================================================
//    MAIN COMPONENT
//    ============================================================ */
// const CoderBoxDigital = () => {
//   const [buildIndex, setBuildIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setBuildIndex((i) => (i + 1) % 3), 1800);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes cbBlink { 50% { opacity: .25; } }
//         @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
//         @keyframes cbSpin { to { transform: rotate(360deg); } }
//         @keyframes cbPulse {
//           0%   { transform: scale(1); opacity: .9; }
//           100% { transform: scale(4); opacity: 0; }
//         }
//         @keyframes cbDash { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }
//         @keyframes cbMq  { to { transform: translateX(-50%); } }

//         .cb-bob    { animation: cbBob 6s ease-in-out infinite; }
//         .cb-spin   { animation: cbSpin 28s linear infinite; transform-origin: center; }
//         .cb-pulse  { transform-box: fill-box; transform-origin: center; animation: cbPulse 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
//         .cb-arc    { stroke-dasharray: 4 5; }
//         .cb-arc-run{ stroke-dasharray: 18 400; animation: cbDash 3.6s linear infinite; }

//         .cb-marquee-track     { display: flex; width: max-content; animation: cbMq 42s linear infinite; }
//         .cb-marquee-track-rev { display: flex; width: max-content; animation: cbMq 36s linear infinite reverse; }
//       `}</style>

//       <div className="bg-[#f5f5f5] text-gray-900 font-['DM_Sans'] overflow-x-hidden">

//         {/* ============================================================
//            HERO
//            ============================================================ */}
//         <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none">
//             <motion.div
//               className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
//               animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
//               transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
//             />
//             <motion.div
//               className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
//               animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
//               transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
//             />
//           </div>

//           <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

//               {/* LEFT — Content column (stretched to match right) */}
//               <motion.div
//                 initial={{ opacity: 0, x: -15 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="max-w-lg w-full flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
//                     <motion.span
//                       className="sec-badge inline-flex items-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       animate={{ y: [0, -3, 0] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     >
//                       <i className="w-2 h-2 rounded-full bg-[#006FA6]" style={{ animation: 'cbBlink 2s infinite' }} />
//                       CoderBox Digital
//                     </motion.span>
//                     <motion.span
//                       className="sec-badge inline-block"
//                       whileHover={{ scale: 1.05 }}
//                       animate={{ y: [0, -3, 0] }}
//                       transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                     >
//                       Human-Centered. AI-Driven.
//                     </motion.span>
//                   </div>

//                   <motion.h2
//                     className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
//                     initial={{ opacity: 0, y: 15 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     Made in India. Built for the{' '}
//                     <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//                       World.
//                     </span>
//                   </motion.h2>

//                   <div
//                     className="flex flex-wrap items-center gap-3 sm:gap-5 mt-4 mb-4"
//                     style={{ fontSize: 'clamp(16px,3vw,24px)', letterSpacing: '-.02em' }}
//                   >
//                     {BUILD_WORDS.map((word, i) => (
//                       <span
//                         key={word}
//                         className={`relative transition-colors duration-500 ${
//                           buildIndex === i ? 'text-gray-900' : 'text-gray-300'
//                         }`}
//                         style={{ fontWeight: 800 }}
//                       >
//                         {word}
//                         {buildIndex === i && (
//                           <motion.span
//                             layoutId="build-underline"
//                             className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#006FA6]"
//                             initial={{ scaleX: 0 }}
//                             animate={{ scaleX: 1 }}
//                             transition={{ duration: 0.4 }}
//                           />
//                         )}
//                       </span>
//                     ))}
//                   </div>

//                   <motion.p
//                     className="sec-p sec-text-dark-soft max-w-md"
//                     initial={{ opacity: 0, y: 15 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     viewport={{ once: true }}
//                   >
//                     A growth partner from India with a global mindset. We put{' '}
//                     <b className="text-gray-900">people first</b> and let AI do the heavy lifting,
//                     bringing every discipline your brand needs into one team.
//                   </motion.p>

//                   <div className="flex flex-wrap gap-2 my-5 sm:my-6 max-w-md">
//                     {CHIPS.map((chip, i) => (
//                       <motion.span
//                         key={chip}
//                         initial={{ opacity: 0, y: 8 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: i * 0.04 }}
//                         viewport={{ once: true }}
//                         className="sec-p px-3 py-1.5 border border-gray-200 rounded-full text-gray-600 bg-white transition-all duration-300 hover:border-[#006FA6] hover:text-[#006FA6] hover:-translate-y-0.5"
//                         style={{ fontWeight: 600 }}
//                       >
//                         {chip}
//                       </motion.span>
//                     ))}
//                   </div>

//                   <motion.div
//                     className="flex flex-wrap items-center gap-5 mt-4"
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.3 }}
//                     viewport={{ once: true }}
//                   >
//                     <motion.a href="/AboutUs" whileTap={{ scale: 0.95 }} className="sec-btn">
//                       Connect With CoderBox
//                       <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//                         <ArrowRight className="h-4 w-4" />
//                       </motion.span>
//                     </motion.a>

//                     <a
//                       href="/services"
//                       className="sec-h3 text-[#006FA6] underline decoration-[1.5px] underline-offset-[6px] hover:decoration-[#006FA6] mb-0"
//                     >
//                       Explore services
//                     </a>
//                   </motion.div>
//                 </div>

//                 {/* Tagline — bottom of left column */}
//                 <div className="sec-p sec-text-dark-soft mt-6 flex items-center gap-3">
//                   <span className="w-9 h-[1.5px] bg-gray-400 inline-block" />
//                   Your Expertise. Our Strategy. Your Growth.
//                 </div>
//               </motion.div>

//               {/* RIGHT — Globe card + Stats row */}
//               <motion.div
//                 initial={{ opacity: 0, x: 15 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="flex flex-col gap-4 w-full max-w-[520px] mx-auto lg:mx-0"
//               >
//                 {/* Globe wrapper */}
//                 <div className="relative w-full" style={{ aspectRatio: '1 / 1.02' }}>
//                   <div className="absolute -left-[3%] -top-[3%] w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] z-[3]">
//                     <svg viewBox="0 0 150 150" className="w-full h-full">
//                       <circle cx="75" cy="75" r="72" fill="#f5f5f5" stroke="#0B1526" strokeWidth="1.5" />
//                       <defs>
//                         <path id="cb-circ" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
//                       </defs>
//                       <g className="cb-spin">
//                         <text style={{ font: '800 11px DM Sans, sans-serif', letterSpacing: '.16em', fill: '#0B1526' }}>
//                           <textPath href="#cb-circ" startOffset="6%">
//                             BUILT FOR THE WORLD • MADE IN INDIA •
//                           </textPath>
//                         </text>
//                       </g>
//                       <rect x="50" y="58" width="50" height="34" rx="5" fill="#0B1526" />
//                       <text x="75" y="79" textAnchor="middle" style={{ font: '800 16px DM Sans, sans-serif', fill: '#FFFFFF' }}>
//                         CB
//                       </text>
//                       <rect x="50"   y="88" width="16.6" height="4" fill="#F09A36" />
//                       <rect x="66.6" y="88" width="16.7" height="4" fill="#FFFFFF" />
//                       <rect x="83.3" y="88" width="16.7" height="4" fill="#2E8B57" />
//                     </svg>
//                   </div>

//                   <div
//                     className="absolute top-[8%] right-[2%] bottom-[10%] left-[10%] bg-[#0B1F3A] rounded-[22px] sm:rounded-[28px] overflow-hidden"
//                     style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.55)' }}
//                   >
//                     <svg className="w-full h-full block" viewBox="0 0 520 500" preserveAspectRatio="xMidYMid slice">
//                       <defs>
//                         <radialGradient id="cb-gl" cx="45%" cy="40%" r="65%">
//                           <stop offset="0" stopColor="#15375A" />
//                           <stop offset="1" stopColor="#0B1F3A" stopOpacity="0" />
//                         </radialGradient>
//                         <clipPath id="cb-gclip"><circle cx="260" cy="250" r="170" /></clipPath>
//                       </defs>

//                       <circle cx="260" cy="250" r="230" fill="url(#cb-gl)" />

//                       <g clipPath="url(#cb-gclip)">
//                         <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
//                           <ellipse cx="260" cy="250" rx="170" ry="40" />
//                           <ellipse cx="260" cy="190" rx="160" ry="34" />
//                           <ellipse cx="260" cy="310" rx="160" ry="34" />
//                           <ellipse cx="260" cy="130" rx="118" ry="22" />
//                           <ellipse cx="260" cy="370" rx="118" ry="22" />
//                         </g>
//                         <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
//                           <ellipse cx="260" cy="250" rx="100" ry="170" />
//                           <ellipse cx="260" cy="250" rx="40"  ry="170" />
//                           <line x1="260" y1="80" x2="260" y2="420" />
//                         </g>
//                       </g>

//                       <circle cx="260" cy="250" r="170" fill="none" stroke="rgba(143,203,242,.35)" />

//                       {[
//                         'M318 262 Q 240 120 150 176',
//                         'M318 262 Q 180 70 70 205',
//                         'M318 262 Q 300 200 262 228',
//                         'M318 262 Q 390 250 392 300',
//                         'M318 262 Q 450 260 440 390',
//                       ].map((d, i) => (
//                         <path key={`arc-${i}`} className="cb-arc" d={d} fill="none" stroke="#8FCBF2" strokeWidth="1.6" opacity=".85" />
//                       ))}

//                       {[
//                         { d: 'M318 262 Q 240 120 150 176', delay: '0s' },
//                         { d: 'M318 262 Q 180 70 70 205',   delay: '-.9s' },
//                         { d: 'M318 262 Q 300 200 262 228', delay: '-1.8s' },
//                         { d: 'M318 262 Q 390 250 392 300', delay: '-2.7s' },
//                         { d: 'M318 262 Q 450 260 440 390', delay: '-1.3s' },
//                       ].map((r, i) => (
//                         <path key={`run-${i}`} className="cb-arc-run" d={r.d} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" style={{ animationDelay: r.delay }} />
//                       ))}

//                       {[
//                         [150, 176, 'LONDON', 118, 165],
//                         [70,  205, 'NEW YORK', 40, 228],
//                         [262, 228, 'DUBAI', 222, 218],
//                         [392, 300, 'SINGAPORE', 400, 304],
//                         [440, 390, 'SYDNEY', 408, 412],
//                       ].map(([cx, cy, label, tx, ty]) => (
//                         <g key={label}>
//                           <circle cx={cx} cy={cy} r="4" fill="#8FCBF2" />
//                           <text x={tx} y={ty} fill="#CFE6F7" style={{ font: '700 11px DM Sans, sans-serif', letterSpacing: '.06em' }}>{label}</text>
//                         </g>
//                       ))}

//                       <g>
//                         <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
//                         <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" style={{ animationDelay: '1.1s' }} />
//                         <circle cx="318" cy="262" r="6.5" fill="#F09A36" />
//                         <text x="332" y="252" fill="#fff" style={{ font: '800 12px DM Sans, sans-serif', letterSpacing: '.1em' }}>INDIA</text>
//                       </g>
//                     </svg>

//                     <div className="absolute left-4 sm:left-7 right-4 sm:right-7 bottom-3 sm:bottom-5 flex justify-between items-end text-white">
//                       <div>
//                         <b className="block font-bold text-sm sm:text-base">CoderBox Digital</b>
//                         <small className="font-bold text-[9px] sm:text-[10px] tracking-[.16em] text-[#8FCBF2]">
//                           FUTURE DIGITAL TRANSFORMATION
//                         </small>
//                       </div>
//                       <span className="flex items-center gap-1.5 font-extrabold text-[9px] sm:text-[10px] tracking-[.14em] text-white border border-white/25 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
//                         <i className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" style={{ animation: 'cbBlink 1.4s infinite' }} />
//                         LIVE
//                       </span>
//                     </div>
//                   </div>

//                   <motion.div
//                     whileHover={{ scale: 1.03 }}
//                     className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
//                     style={{ right: '-4%', top: '14%' }}
//                   >
//                     <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
//                       <RefreshCw className="h-4 w-4" />
//                     </span>
//                     <div>
//                       <b className="block font-bold text-base sm:text-lg leading-none">24/7</b>
//                       <small className="sec-p text-gray-500 mb-0">Automation</small>
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     whileHover={{ scale: 1.03 }}
//                     className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
//                     style={{ left: '-6%', top: '50%', animationDelay: '-3s' }}
//                   >
//                     <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
//                       <TrendingUp className="h-4 w-4" />
//                     </span>
//                     <div>
//                       <b className="block font-bold text-base sm:text-lg leading-none">[XX]+</b>
//                       <small className="sec-p text-gray-500 mb-0">Brands Scaled</small>
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* STATS — horizontal 4-column, same width as globe card */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.15 }}
//                   viewport={{ once: true }}
//                   className="w-full bg-white border border-gray-100 rounded-[22px] sm:rounded-[28px] overflow-hidden"
//                   style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.15)' }}
//                 >
//                   <div className="grid grid-cols-4">
//                     {STATS.map((st, i) => (
//                       <motion.div
//                         key={st.label}
//                         initial={{ opacity: 0, y: 8 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
//                         viewport={{ once: true }}
//                         className={`group relative flex flex-col items-center justify-center text-center py-5 sm:py-6 md:py-7 px-2 transition-colors duration-300 hover:bg-[#f8fbff]
//                           ${i < STATS.length - 1 ? 'border-r border-gray-100' : ''}
//                         `}
//                       >
//                         <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full transition-all duration-500 group-hover:w-12" />

//                         <b className="sec-h3 mb-0 font-bold text-[#006FA6] leading-none">
//                           {st.value}
//                         </b>

//                         <span className="sec-p text-gray-500 mb-0 mt-1.5 leading-tight text-center">
//                           {st.label}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================================
//            DARK NAVY MARQUEE
//            ============================================================ */}
//         <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0B1F3A] text-white py-2.5 sm:py-3 md:py-3.5">
//           <div className="cb-marquee-track">
//             {[0, 1].map((k) => (
//               <span
//                 key={k}
//                 className="flex items-center gap-3 sm:gap-5 md:gap-7 pr-3 sm:pr-5 md:pr-7 font-extrabold whitespace-nowrap"
//                 style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', letterSpacing: '.02em' }}
//               >
//                 {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((n, i) => (
//                   <React.Fragment key={`${k}-${i}`}>
//                     <span>{n}</span>
//                     <span className="text-[#8FCBF2] text-[8px] sm:text-[10px]" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
//                   </React.Fragment>
//                 ))}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* ============================================================
//            BLUE ITALIC MARQUEE
//            ============================================================ */}
//         <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0A5E93] text-white py-2 sm:py-2.5 md:py-3">
//           <div className="cb-marquee-track-rev">
//             {[0, 1].map((k) => (
//               <span
//                 key={k}
//                 className="flex items-center gap-3 sm:gap-5 md:gap-7 pr-3 sm:pr-5 md:pr-7 italic whitespace-nowrap"
//                 style={{ fontSize: 'clamp(11px, 1.2vw, 15px)', letterSpacing: '.01em' }}
//               >
//                 {[...MARQUEE_LINES, ...MARQUEE_LINES].map((n, i) => (
//                   <React.Fragment key={`${k}-${i}`}>
//                     <span>{n}</span>
//                     <span className="text-[#F09A36] text-[8px] sm:text-[10px] not-italic" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
//                   </React.Fragment>
//                 ))}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CoderBoxDigital;







// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, RefreshCw, TrendingUp } from 'lucide-react';

// /* ============================================================
//    DATA
//    ============================================================ */
// const CHIPS = [
//   'Branding', 'Technology', 'AI', 'Digital Strategy',
//   'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
// ];

// const MARQUEE_SERVICES = [
//   'Branding', 'Technology', 'AI', 'Digital Strategy',
//   'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
// ];

// const MARQUEE_LINES = [
//   'Made in India', 'Built for the World', 'Human-Centered',
//   'AI-Driven', 'Build. Scale. Transform.',
//   'Your Expertise. Our Strategy. Your Growth.',
// ];

// const STATS = [
//   { value: '09',    label: 'Service Pillars' },
//   { value: '1',     label: 'Team, One Engine' },
//   { value: '24/7',  label: 'Automation' },
//   { value: '[XX]+', label: 'Brands Scaled' },
// ];

// const BUILD_WORDS = ['BUILD.', 'SCALE.', 'TRANSFORM.'];

// /* ============================================================
//    MAIN COMPONENT
//    ============================================================ */
// const CoderBoxDigital = () => {
//   const [buildIndex, setBuildIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setBuildIndex((i) => (i + 1) % 3), 1800);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes cbBlink { 50% { opacity: .25; } }
//         @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
//         @keyframes cbSpin { to { transform: rotate(360deg); } }
//         @keyframes cbPulse {
//           0%   { transform: scale(1); opacity: .9; }
//           100% { transform: scale(4); opacity: 0; }
//         }
//         @keyframes cbDash { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }
//         @keyframes cbMq  { to { transform: translateX(-50%); } }

//         .cb-bob    { animation: cbBob 6s ease-in-out infinite; }
//         .cb-spin   { animation: cbSpin 28s linear infinite; transform-origin: center; }
//         .cb-pulse  { transform-box: fill-box; transform-origin: center; animation: cbPulse 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
//         .cb-arc    { stroke-dasharray: 4 5; }
//         .cb-arc-run{ stroke-dasharray: 18 400; animation: cbDash 3.6s linear infinite; }

//         .cb-marquee-track     { display: flex; width: max-content; animation: cbMq 42s linear infinite; }
//         .cb-marquee-track-rev { display: flex; width: max-content; animation: cbMq 36s linear infinite reverse; }
//       `}</style>

//       <div className="bg-[#f5f5f5] text-gray-900 font-['DM_Sans'] overflow-x-hidden">

//         {/* ============================================================
//            HERO
//            ============================================================ */}
//         <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none">
//             <motion.div
//               className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
//               animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
//               transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
//             />
//             <motion.div
//               className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
//               animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
//               transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
//             />
//           </div>

//           <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

//               {/* LEFT — Content column */}
//               <motion.div
//                 initial={{ opacity: 0, x: -15 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="max-w-lg w-full flex flex-col justify-between"
//               >
//                 <div>
//                   {/* Badges — sec-badge */}
//                   <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
//                     <motion.span
//                       className="sec-badge inline-flex items-center gap-2"
//                       whileHover={{ scale: 1.05 }}
//                       animate={{ y: [0, -3, 0] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     >
//                       <i className="w-2 h-2 rounded-full bg-[#006FA6]" style={{ animation: 'cbBlink 2s infinite' }} />
//                       CoderBox Digital
//                     </motion.span>
//                     <motion.span
//                       className="sec-badge inline-block"
//                       whileHover={{ scale: 1.05 }}
//                       animate={{ y: [0, -3, 0] }}
//                       transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                     >
//                       Human-Centered. AI-Driven.
//                     </motion.span>
//                   </div>

//                   {/* Heading — sec-h2 sec-text-dark (same as ServicesSection) */}
//                   <motion.h2
//                     className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
//                     initial={{ opacity: 0, y: 15 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     Made in India. Built for the{' '}
//                     <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//                       World.
//                     </span>
//                   </motion.h2>

//                   {/* BUILD / SCALE / TRANSFORM — sec-h3 size */}
//                   <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-4 mb-4">
//                     {BUILD_WORDS.map((word, i) => (
//                       <span
//                         key={word}
//                         className={`sec-h3 relative transition-colors duration-500 mb-0 ${
//                           buildIndex === i ? 'text-gray-900' : 'text-gray-300'
//                         }`}
//                       >
//                         {word}
//                         {buildIndex === i && (
//                           <motion.span
//                             layoutId="build-underline"
//                             className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#006FA6]"
//                             initial={{ scaleX: 0 }}
//                             animate={{ scaleX: 1 }}
//                             transition={{ duration: 0.4 }}
//                           />
//                         )}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Paragraph — sec-p sec-text-dark-soft */}
//                   <motion.p
//                     className="sec-p sec-text-dark-soft max-w-md"
//                     initial={{ opacity: 0, y: 15 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     viewport={{ once: true }}
//                   >
//                     A growth partner from India with a global mindset. We put{' '}
//                     <b className="text-gray-900">people first</b> and let AI do the heavy lifting,
//                     bringing every discipline your brand needs into one team.
//                   </motion.p>

//                   {/* Chips — sec-p */}
//                   <div className="flex flex-wrap gap-2 my-5 sm:my-6 max-w-md">
//                     {CHIPS.map((chip, i) => (
//                       <motion.span
//                         key={chip}
//                         initial={{ opacity: 0, y: 8 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3, delay: i * 0.04 }}
//                         viewport={{ once: true }}
//                         className="sec-p px-3 py-1.5 border border-gray-200 rounded-full text-gray-600 bg-white transition-all duration-300 hover:border-[#006FA6] hover:text-[#006FA6] hover:-translate-y-0.5 font-semibold"
//                       >
//                         {chip}
//                       </motion.span>
//                     ))}
//                   </div>

//                   {/* CTAs — sec-btn + sec-h3 link */}
//                   <motion.div
//                     className="flex flex-wrap items-center gap-5 mt-4"
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.3 }}
//                     viewport={{ once: true }}
//                   >
//                     <motion.a href="/AboutUs" whileTap={{ scale: 0.95 }} className="sec-btn">
//                       Connect With CoderBox
//                       <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//                         <ArrowRight className="h-4 w-4" />
//                       </motion.span>
//                     </motion.a>

//                     <a
//                       href="/services"
//                       className="sec-h3 text-[#006FA6] underline decoration-[1.5px] underline-offset-[6px] hover:decoration-[#006FA6] mb-0"
//                     >
//                       Explore services
//                     </a>
//                   </motion.div>
//                 </div>

//                 {/* Tagline — sec-p sec-text-dark-soft */}
//                 <div className="sec-p sec-text-dark-soft mt-6 flex items-center gap-3">
//                   <span className="w-9 h-[1.5px] bg-gray-400 inline-block" />
//                   Your Expertise. Our Strategy. Your Growth.
//                 </div>
//               </motion.div>

//               {/* RIGHT — Globe card + Stats row */}
//               <motion.div
//                 initial={{ opacity: 0, x: 15 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="flex flex-col gap-4 w-full max-w-[520px] mx-auto lg:mx-0"
//               >
//                 {/* Globe wrapper */}
//                 <div className="relative w-full" style={{ aspectRatio: '1 / 1.02' }}>
//                   <div className="absolute -left-[3%] -top-[3%] w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] z-[3]">
//                     <svg viewBox="0 0 150 150" className="w-full h-full">
//                       <circle cx="75" cy="75" r="72" fill="#f5f5f5" stroke="#0B1526" strokeWidth="1.5" />
//                       <defs>
//                         <path id="cb-circ" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
//                       </defs>
//                       <g className="cb-spin">
//                         <text style={{ font: '800 11px DM Sans, sans-serif', letterSpacing: '.16em', fill: '#0B1526' }}>
//                           <textPath href="#cb-circ" startOffset="6%">
//                             BUILT FOR THE WORLD • MADE IN INDIA •
//                           </textPath>
//                         </text>
//                       </g>
//                       <rect x="50" y="58" width="50" height="34" rx="5" fill="#0B1526" />
//                       <text x="75" y="79" textAnchor="middle" style={{ font: '800 16px DM Sans, sans-serif', fill: '#FFFFFF' }}>
//                         CB
//                       </text>
//                       <rect x="50"   y="88" width="16.6" height="4" fill="#F09A36" />
//                       <rect x="66.6" y="88" width="16.7" height="4" fill="#FFFFFF" />
//                       <rect x="83.3" y="88" width="16.7" height="4" fill="#2E8B57" />
//                     </svg>
//                   </div>

//                   <div
//                     className="absolute top-[8%] right-[2%] bottom-[10%] left-[10%] bg-[#0B1F3A] rounded-[22px] sm:rounded-[28px] overflow-hidden"
//                     style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.55)' }}
//                   >
//                     <svg className="w-full h-full block" viewBox="0 0 520 500" preserveAspectRatio="xMidYMid slice">
//                       <defs>
//                         <radialGradient id="cb-gl" cx="45%" cy="40%" r="65%">
//                           <stop offset="0" stopColor="#15375A" />
//                           <stop offset="1" stopColor="#0B1F3A" stopOpacity="0" />
//                         </radialGradient>
//                         <clipPath id="cb-gclip"><circle cx="260" cy="250" r="170" /></clipPath>
//                       </defs>

//                       <circle cx="260" cy="250" r="230" fill="url(#cb-gl)" />

//                       <g clipPath="url(#cb-gclip)">
//                         <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
//                           <ellipse cx="260" cy="250" rx="170" ry="40" />
//                           <ellipse cx="260" cy="190" rx="160" ry="34" />
//                           <ellipse cx="260" cy="310" rx="160" ry="34" />
//                           <ellipse cx="260" cy="130" rx="118" ry="22" />
//                           <ellipse cx="260" cy="370" rx="118" ry="22" />
//                         </g>
//                         <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
//                           <ellipse cx="260" cy="250" rx="100" ry="170" />
//                           <ellipse cx="260" cy="250" rx="40"  ry="170" />
//                           <line x1="260" y1="80" x2="260" y2="420" />
//                         </g>
//                       </g>

//                       <circle cx="260" cy="250" r="170" fill="none" stroke="rgba(143,203,242,.35)" />

//                       {[
//                         'M318 262 Q 240 120 150 176',
//                         'M318 262 Q 180 70 70 205',
//                         'M318 262 Q 300 200 262 228',
//                         'M318 262 Q 390 250 392 300',
//                         'M318 262 Q 450 260 440 390',
//                       ].map((d, i) => (
//                         <path key={`arc-${i}`} className="cb-arc" d={d} fill="none" stroke="#8FCBF2" strokeWidth="1.6" opacity=".85" />
//                       ))}

//                       {[
//                         { d: 'M318 262 Q 240 120 150 176', delay: '0s' },
//                         { d: 'M318 262 Q 180 70 70 205',   delay: '-.9s' },
//                         { d: 'M318 262 Q 300 200 262 228', delay: '-1.8s' },
//                         { d: 'M318 262 Q 390 250 392 300', delay: '-2.7s' },
//                         { d: 'M318 262 Q 450 260 440 390', delay: '-1.3s' },
//                       ].map((r, i) => (
//                         <path key={`run-${i}`} className="cb-arc-run" d={r.d} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" style={{ animationDelay: r.delay }} />
//                       ))}

//                       {[
//                         [150, 176, 'LONDON', 118, 165],
//                         [70,  205, 'NEW YORK', 40, 228],
//                         [262, 228, 'DUBAI', 222, 218],
//                         [392, 300, 'SINGAPORE', 400, 304],
//                         [440, 390, 'SYDNEY', 408, 412],
//                       ].map(([cx, cy, label, tx, ty]) => (
//                         <g key={label}>
//                           <circle cx={cx} cy={cy} r="4" fill="#8FCBF2" />
//                           <text x={tx} y={ty} fill="#CFE6F7" style={{ font: '700 11px DM Sans, sans-serif', letterSpacing: '.06em' }}>{label}</text>
//                         </g>
//                       ))}

//                       <g>
//                         <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
//                         <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" style={{ animationDelay: '1.1s' }} />
//                         <circle cx="318" cy="262" r="6.5" fill="#F09A36" />
//                         <text x="332" y="252" fill="#fff" style={{ font: '800 12px DM Sans, sans-serif', letterSpacing: '.1em' }}>INDIA</text>
//                       </g>
//                     </svg>

//                     <div className="absolute left-4 sm:left-7 right-4 sm:right-7 bottom-3 sm:bottom-5 flex justify-between items-end text-white">
//                       <div>
//                         <b className="sec-h3 block text-white mb-0">CoderBox Digital</b>
//                         <small className="sec-p block text-[#8FCBF2] tracking-[.16em] mb-0">
//                           FUTURE DIGITAL TRANSFORMATION
//                         </small>
//                       </div>
//                       <span className="flex items-center gap-1.5 font-extrabold text-[9px] sm:text-[10px] tracking-[.14em] text-white border border-white/25 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
//                         <i className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" style={{ animation: 'cbBlink 1.4s infinite' }} />
//                         LIVE
//                       </span>
//                     </div>
//                   </div>

//                   {/* Floating stat — 24/7 Automation */}
//                   <motion.div
//                     whileHover={{ scale: 1.03 }}
//                     className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
//                     style={{ right: '-4%', top: '14%' }}
//                   >
//                     <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
//                       <RefreshCw className="h-4 w-4" />
//                     </span>
//                     <div>
//                       <b className="sec-h3 block text-[#006FA6] mb-0">24/7</b>
//                       <small className="sec-p text-gray-500 mb-0">Automation</small>
//                     </div>
//                   </motion.div>

//                   {/* Floating stat — [XX]+ */}
//                   <motion.div
//                     whileHover={{ scale: 1.03 }}
//                     className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
//                     style={{ left: '-6%', top: '50%', animationDelay: '-3s' }}
//                   >
//                     <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
//                       <TrendingUp className="h-4 w-4" />
//                     </span>
//                     <div>
//                       <b className="sec-h3 block text-[#006FA6] mb-0">[XX]+</b>
//                       <small className="sec-p text-gray-500 mb-0">Brands Scaled</small>
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* STATS — horizontal 4-column, same width as globe card */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 15 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.15 }}
//                   viewport={{ once: true }}
//                   className="w-full bg-white border border-gray-100 rounded-[22px] sm:rounded-[28px] overflow-hidden"
//                   style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.15)' }}
//                 >
//                   <div className="grid grid-cols-4">
//                     {STATS.map((st, i) => (
//                       <motion.div
//                         key={st.label}
//                         initial={{ opacity: 0, y: 8 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
//                         viewport={{ once: true }}
//                         className={`group relative flex flex-col items-center justify-center text-center py-5 sm:py-6 md:py-7 px-2 transition-colors duration-300 hover:bg-[#f8fbff]
//                           ${i < STATS.length - 1 ? 'border-r border-gray-100' : ''}
//                         `}
//                       >
//                         <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full transition-all duration-500 group-hover:w-12" />

//                         {/* Number — sec-h3, dark navy blue */}
//                         <b className="sec-h3 mb-0 text-[#006FA6] leading-none">
//                           {st.value}
//                         </b>

//                         {/* Label — sec-p, muted */}
//                         <span className="sec-p text-gray-500 mb-0 mt-1.5 leading-tight text-center">
//                           {st.label}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================================
//            DARK NAVY MARQUEE
//            ============================================================ */}
//         <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0B1F3A] text-white py-2.5 sm:py-3 md:py-3.5">
//           <div className="cb-marquee-track">
//             {[0, 1].map((k) => (
//               <span
//                 key={k}
//                 className="flex items-center gap-3 sm:gap-5 md:gap-7 pr-3 sm:pr-5 md:pr-7 font-extrabold whitespace-nowrap"
//                 style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', letterSpacing: '.02em' }}
//               >
//                 {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((n, i) => (
//                   <React.Fragment key={`${k}-${i}`}>
//                     <span>{n}</span>
//                     <span className="text-[#8FCBF2] text-[8px] sm:text-[10px]" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
//                   </React.Fragment>
//                 ))}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* ============================================================
//            BLUE ITALIC MARQUEE
//            ============================================================ */}
//         <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0A5E93] text-white py-2 sm:py-2.5 md:py-3">
//           <div className="cb-marquee-track-rev">
//             {[0, 1].map((k) => (
//               <span
//                 key={k}
//                 className="flex items-center gap-3 sm:gap-5 md:gap-7 pr-3 sm:pr-5 md:pr-7 italic whitespace-nowrap"
//                 style={{ fontSize: 'clamp(11px, 1.2vw, 15px)', letterSpacing: '.01em' }}
//               >
//                 {[...MARQUEE_LINES, ...MARQUEE_LINES].map((n, i) => (
//                   <React.Fragment key={`${k}-${i}`}>
//                     <span>{n}</span>
//                     <span className="text-[#F09A36] text-[8px] sm:text-[10px] not-italic" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
//                   </React.Fragment>
//                 ))}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CoderBoxDigital;








import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, TrendingUp } from 'lucide-react';

/* ============================================================
   DATA
   ============================================================ */
const CHIPS = [
  'Branding', 'Technology', 'AI', 'Digital Strategy',
  'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
];

const MARQUEE_SERVICES = [
  'Branding', 'Technology', 'AI', 'Digital Strategy',
  'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
];

const MARQUEE_LINES = [
  'Made in India', 'Built for the World', 'Human-Centered',
  'AI-Driven', 'Build. Scale. Transform.',
  'Your Expertise. Our Strategy. Your Growth.',
];

const STATS = [
  { value: '09',    label: 'Service Pillars' },
  { value: '1',     label: 'Team, One Engine' },
  { value: '24/7',  label: 'Automation' },
  { value: '[XX]+', label: 'Brands Scaled' },
];

const BUILD_WORDS = ['BUILD.', 'SCALE.', 'TRANSFORM.'];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
const CoderBoxDigital = () => {
  const [buildIndex, setBuildIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBuildIndex((i) => (i + 1) % 3), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes cbBlink { 50% { opacity: .25; } }
        @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
        @keyframes cbSpin { to { transform: rotate(360deg); } }
        @keyframes cbPulse {
          0%   { transform: scale(1); opacity: .9; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes cbDash { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }
        @keyframes cbMq  { to { transform: translateX(-50%); } }

        .cb-bob    { animation: cbBob 6s ease-in-out infinite; }
        .cb-spin   { animation: cbSpin 28s linear infinite; transform-origin: center; }
        .cb-pulse  { transform-box: fill-box; transform-origin: center; animation: cbPulse 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
        .cb-arc    { stroke-dasharray: 4 5; }
        .cb-arc-run{ stroke-dasharray: 18 400; animation: cbDash 3.6s linear infinite; }

        .cb-marquee-track     { display: flex; width: max-content; animation: cbMq 42s linear infinite; }
        .cb-marquee-track-rev { display: flex; width: max-content; animation: cbMq 36s linear infinite reverse; }
      `}</style>

      <div className="bg-[#f5f5f5] text-gray-900 font-['DM_Sans'] overflow-x-hidden">

        {/* ============================================================
           HERO
           ============================================================ */}
        <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
              animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
              animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
            {/* ============ GRID: Left content + Right globe ============ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

              {/* LEFT — Content column */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-lg w-full flex flex-col justify-center"
              >
                <div>
                  {/* Badges — sec-badge */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <motion.span
                      className="sec-badge inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <i className="w-2 h-2 rounded-full bg-[#006FA6]" style={{ animation: 'cbBlink 2s infinite' }} />
                      CoderBox Digital
                    </motion.span>
                    <motion.span
                      className="sec-badge inline-block"
                      whileHover={{ scale: 1.05 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      Human-Centered. AI-Driven.
                    </motion.span>
                  </div>

                  {/* Heading — sec-h2 sec-text-dark */}
                  <motion.h2
                    className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Made in India. Built for the{' '}
                    <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                      World.
                    </span>
                  </motion.h2>

                  {/* BUILD / SCALE / TRANSFORM */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-4 mb-4">
                    {BUILD_WORDS.map((word, i) => (
                      <span
                        key={word}
                        className={`sec-h3 relative transition-colors duration-500 mb-0 ${
                          buildIndex === i ? 'text-gray-900' : 'text-gray-300'
                        }`}
                      >
                        {word}
                        {buildIndex === i && (
                          <motion.span
                            layoutId="build-underline"
                            className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#006FA6]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.4 }}
                          />
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Paragraph */}
                  <motion.p
                    className="sec-p sec-text-dark-soft max-w-md"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    A growth partner from India with a global mindset. We put{' '}
                    <b className="text-gray-900">people first</b> and let AI do the heavy lifting,
                    bringing every discipline your brand needs into one team.
                  </motion.p>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 my-5 sm:my-6 max-w-md">
                    {CHIPS.map((chip, i) => (
                      <motion.span
                        key={chip}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        viewport={{ once: true }}
                        className="sec-p px-3 py-1.5 border border-gray-200 rounded-full text-gray-600 bg-white transition-all duration-300 hover:border-[#006FA6] hover:text-[#006FA6] hover:-translate-y-0.5 font-semibold"
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <motion.div
                    className="flex flex-wrap items-center gap-5 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.a href="/AboutUs" whileTap={{ scale: 0.95 }} className="sec-btn">
                      Connect With CoderBox
                      <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </motion.a>

                    <a
                      href="/services"
                      className="sec-h3 text-[#006FA6] underline decoration-[1.5px] underline-offset-[6px] hover:decoration-[#006FA6] mb-0"
                    >
                      Explore services
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT — Globe card */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 w-full max-w-[520px] mx-auto lg:mx-0"
              >
                <div className="relative w-full" style={{ aspectRatio: '1 / 1.02' }}>
                  <div className="absolute -left-[3%] -top-[3%] w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] z-[3]">
                    <svg viewBox="0 0 150 150" className="w-full h-full">
                      <circle cx="75" cy="75" r="72" fill="#f5f5f5" stroke="#0B1526" strokeWidth="1.5" />
                      <defs>
                        <path id="cb-circ" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
                      </defs>
                      <g className="cb-spin">
                        <text style={{ font: '800 11px DM Sans, sans-serif', letterSpacing: '.16em', fill: '#0B1526' }}>
                          <textPath href="#cb-circ" startOffset="6%">
                            BUILT FOR THE WORLD • MADE IN INDIA •
                          </textPath>
                        </text>
                      </g>
                      <rect x="50" y="58" width="50" height="34" rx="5" fill="#0B1526" />
                      <text x="75" y="79" textAnchor="middle" style={{ font: '800 16px DM Sans, sans-serif', fill: '#FFFFFF' }}>
                        CB
                      </text>
                      <rect x="50"   y="88" width="16.6" height="4" fill="#F09A36" />
                      <rect x="66.6" y="88" width="16.7" height="4" fill="#FFFFFF" />
                      <rect x="83.3" y="88" width="16.7" height="4" fill="#2E8B57" />
                    </svg>
                  </div>

                  <div
                    className="absolute top-[8%] right-[2%] bottom-[10%] left-[10%] bg-[#0B1F3A] rounded-[22px] sm:rounded-[28px] overflow-hidden"
                    style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.55)' }}
                  >
                    <svg className="w-full h-full block" viewBox="0 0 520 500" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <radialGradient id="cb-gl" cx="45%" cy="40%" r="65%">
                          <stop offset="0" stopColor="#15375A" />
                          <stop offset="1" stopColor="#0B1F3A" stopOpacity="0" />
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
                          <ellipse cx="260" cy="250" rx="100" ry="170" />
                          <ellipse cx="260" cy="250" rx="40"  ry="170" />
                          <line x1="260" y1="80" x2="260" y2="420" />
                        </g>
                      </g>

                      <circle cx="260" cy="250" r="170" fill="none" stroke="rgba(143,203,242,.35)" />

                      {[
                        'M318 262 Q 240 120 150 176',
                        'M318 262 Q 180 70 70 205',
                        'M318 262 Q 300 200 262 228',
                        'M318 262 Q 390 250 392 300',
                        'M318 262 Q 450 260 440 390',
                      ].map((d, i) => (
                        <path key={`arc-${i}`} className="cb-arc" d={d} fill="none" stroke="#8FCBF2" strokeWidth="1.6" opacity=".85" />
                      ))}

                      {[
                        { d: 'M318 262 Q 240 120 150 176', delay: '0s' },
                        { d: 'M318 262 Q 180 70 70 205',   delay: '-.9s' },
                        { d: 'M318 262 Q 300 200 262 228', delay: '-1.8s' },
                        { d: 'M318 262 Q 390 250 392 300', delay: '-2.7s' },
                        { d: 'M318 262 Q 450 260 440 390', delay: '-1.3s' },
                      ].map((r, i) => (
                        <path key={`run-${i}`} className="cb-arc-run" d={r.d} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" style={{ animationDelay: r.delay }} />
                      ))}

                      {[
                        [150, 176, 'LONDON', 118, 165],
                        [70,  205, 'NEW YORK', 40, 228],
                        [262, 228, 'DUBAI', 222, 218],
                        [392, 300, 'SINGAPORE', 400, 304],
                        [440, 390, 'SYDNEY', 408, 412],
                      ].map(([cx, cy, label, tx, ty]) => (
                        <g key={label}>
                          <circle cx={cx} cy={cy} r="4" fill="#8FCBF2" />
                          <text x={tx} y={ty} fill="#CFE6F7" style={{ font: '700 11px DM Sans, sans-serif', letterSpacing: '.06em' }}>{label}</text>
                        </g>
                      ))}

                      <g>
                        <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
                        <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" style={{ animationDelay: '1.1s' }} />
                        <circle cx="318" cy="262" r="6.5" fill="#F09A36" />
                        <text x="332" y="252" fill="#fff" style={{ font: '800 12px DM Sans, sans-serif', letterSpacing: '.1em' }}>INDIA</text>
                      </g>
                    </svg>

                    <div className="absolute left-4 sm:left-7 right-4 sm:right-7 bottom-3 sm:bottom-5 flex justify-between items-end text-white">
                      <div>
                        <b className="sec-h3 block text-white mb-0">CoderBox Digital</b>
                        <small className="sec-p block text-[#8FCBF2] tracking-[.16em] mb-0">
                          FUTURE DIGITAL TRANSFORMATION
                        </small>
                      </div>
                      <span className="flex items-center gap-1.5 font-extrabold text-[9px] sm:text-[10px] tracking-[.14em] text-white border border-white/25 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                        <i className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" style={{ animation: 'cbBlink 1.4s infinite' }} />
                        LIVE
                      </span>
                    </div>
                  </div>

                  {/* Floating stat — 24/7 Automation */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
                    style={{ right: '-4%', top: '14%' }}
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
                      <RefreshCw className="h-4 w-4" />
                    </span>
                    <div>
                      <b className="sec-h3 block text-[#006FA6] mb-0">24/7</b>
                      <small className="sec-p text-gray-500 mb-0">Automation</small>
                    </div>
                  </motion.div>

                  {/* Floating stat — [XX]+ */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
                    style={{ left: '-6%', top: '50%', animationDelay: '-3s' }}
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
                      <TrendingUp className="h-4 w-4" />
                    </span>
                    <div>
                      <b className="sec-h3 block text-[#006FA6] mb-0">[XX]+</b>
                      <small className="sec-p text-gray-500 mb-0">Brands Scaled</small>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* ============================================================
               FULL-WIDTH — Tagline + Stats strip
               ============================================================ */}
            <div className="mt-8 sm:mt-10 md:mt-12 w-full">

              {/* Tagline — full width line + text */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="sec-p sec-text-dark-soft flex items-center gap-3 mb-4 sm:mb-5"
              >
                <span className="w-9 h-[1.5px] bg-gray-400 inline-block shrink-0" />
                <span className="whitespace-nowrap">Your Expertise. Our Strategy. Your Growth.</span>
                <span className="flex-1 h-[1.5px] bg-gradient-to-r from-gray-300 to-transparent" />
              </motion.div>

              {/* STATS — full width 4-column strip */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full bg-white border border-gray-100 rounded-[22px] sm:rounded-[28px] overflow-hidden"
                style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.15)' }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {STATS.map((st, i) => (
                    <motion.div
                      key={st.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                      viewport={{ once: true }}
                      className={`group relative flex flex-col items-center justify-center text-center py-5 sm:py-6 md:py-7 px-2 transition-colors duration-300 hover:bg-[#f8fbff]
                        ${i < STATS.length - 1 ? 'sm:border-r border-gray-100' : ''}
                        ${i === 0 || i === 1 ? 'border-b sm:border-b-0 border-gray-100' : ''}
                      `}
                    >
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full transition-all duration-500 group-hover:w-12" />

                      <b className="sec-h3 mb-0 text-[#006FA6] leading-none">
                        {st.value}
                      </b>

                      <span className="sec-p text-gray-500 mb-0 mt-1.5 leading-tight text-center">
                        {st.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================
           DARK NAVY MARQUEE
           ============================================================ */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0B1F3A] text-white py-2.5 sm:py-3 md:py-3.5">
          <div className="cb-marquee-track">
            {[0, 1].map((k) => (
              <span
                key={k}
                className="flex items-center gap-3 sm:gap-5 md:gap-7 pr-3 sm:pr-5 md:pr-7 font-extrabold whitespace-nowrap"
                style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', letterSpacing: '.02em' }}
              >
                {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((n, i) => (
                  <React.Fragment key={`${k}-${i}`}>
                    <span>{n}</span>
                    <span className="text-[#8FCBF2] text-[8px] sm:text-[10px]" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ============================================================
           BLUE ITALIC MARQUEE
           ============================================================ */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0A5E93] text-white py-2 sm:py-2.5 md:py-3">
          <div className="cb-marquee-track-rev">
            {[0, 1].map((k) => (
              <span
                key={k}
                className="flex items-center gap-3 sm:gap-5 md:gap-7 pr-3 sm:pr-5 md:pr-7 italic whitespace-nowrap"
                style={{ fontSize: 'clamp(11px, 1.2vw, 15px)', letterSpacing: '.01em' }}
              >
                {[...MARQUEE_LINES, ...MARQUEE_LINES].map((n, i) => (
                  <React.Fragment key={`${k}-${i}`}>
                    <span>{n}</span>
                    <span className="text-[#F09A36] text-[8px] sm:text-[10px] not-italic" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoderBoxDigital;