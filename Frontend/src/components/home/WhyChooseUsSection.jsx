// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight, Sparkles } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     {
//       id: 1,
//       src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format',
//       title: 'Expert Team',
//       description: '24+ skilled professionals'
//     },
//     {
//       id: 2,
//       src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format',
//       title: 'Global Reach',
//       description: '10 countries worldwide'
//     },
//     {
//       id: 3,
//       src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format',
//       title: 'Success Stories',
//       description: '500+ projects delivered'
//     },
//     {
//       id: 4,
//       src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format',
//       title: 'Innovation Hub',
//       description: 'Cutting-edge solutions'
//     },
//     {
//       id: 5,
//       src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format',
//       title: 'Trusted Partner',
//       description: '98% client satisfaction'
//     },
//     {
//       id: 6,
//       src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format',
//       title: 'Financial Growth',
//       description: '10x revenue increase'
//     }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     {
//       icon: Users,
//       title: '24+ Expert Team Members',
//       description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.'
//     },
//     {
//       icon: Globe,
//       title: '10 Countries Presence',
//       description: 'We have branches in 10 countries, serving clients globally with localized solutions.'
//     },
//     {
//       icon: Shield,
//       title: 'Investment & Insurance',
//       description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.'
//     }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE HANDLER =====
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//       });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ===== GET RESPONSIVE IMAGE SIZE =====
//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 480) return { w: 80, h: 55 };
//     if (width < 640) return { w: 100, h: 70 };
//     if (width < 768) return { w: 130, h: 90 };
//     if (width < 1024) return { w: 160, h: 110 };
//     if (width < 1280) return { w: 180, h: 125 };
//     return { w: 200, h: 140 };
//   };

//   // ===== GET RESPONSIVE RADIUS =====
//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 480) return 60;
//     if (width < 640) return 75;
//     if (width < 768) return 95;
//     if (width < 1024) return 115;
//     if (width < 1280) return 135;
//     return 155;
//   };

//   // ===== GET RESPONSIVE CONTAINER HEIGHT =====
//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 480) return 200;
//     if (width < 640) return 240;
//     if (width < 768) return 280;
//     if (width < 1024) return 330;
//     if (width < 1280) return 380;
//     return 420;
//   };

//   // ===== CIRCLE POSITIONS =====
//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <div 
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 xl:gap-16 items-center">
          
//           {/* ===== LEFT COLUMN - 3D CIRCLE CAROUSEL ===== */}
//           <div 
//             className="relative flex items-center justify-center w-full"
//             style={{ height: `${containerHeight}px` }}
//           >
            
//             {/* ===== 3D CIRCLE CONTAINER ===== */}
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
                
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) {
//                   scale = 1.15;
//                 } else {
//                   scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
//                 }
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{
//                       x: x,
//                       y: y,
//                       translateX: '-50%',
//                       translateY: '-50%',
//                       zIndex: zIndex,
//                     }}
//                     animate={{
//                       scale: scale,
//                       opacity: opacity,
//                       zIndex: zIndex,
//                       x: x,
//                       y: y,
//                     }}
//                     transition={{
//                       duration: 0.9,
//                       ease: [0.215, 0.61, 0.355, 1],
//                     }}
//                   >
//                     <div 
//                       className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-blue-500/60 border-2 border-white/30' 
//                           : 'shadow-blue-500/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img 
//                         src={image.src}
//                         alt={image.title}
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 md:p-3"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           <h4 className="text-white font-bold text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
//                             {image.title}
//                           </h4>
//                           <p className="text-blue-200/70 text-[6px] sm:text-[8px] md:text-[10px]">
//                             {image.description}
//                           </p>
//                         </motion.div>
//                       )}
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/10 backdrop-blur-md px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full border border-white/20"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           <span className="text-white text-[5px] sm:text-[7px] md:text-[8px] font-medium flex items-center gap-0.5">
//                             <Sparkles className="h-1.5 w-1.5 text-yellow-400" />
//                             Active
//                           </span>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 150),
//                 height: Math.min(containerHeight * 0.3, 150),
//               }}
//               animate={{ 
//                 scale: [1, 1.3, 1],
//                 opacity: [0.3, 0.6, 0.3]
//               }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS INDICATOR ===== */}
//             <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3 sm:w-4 md:w-5 h-1 bg-blue-400' 
//                       : 'w-1 h-1 bg-gray-500 hover:bg-gray-400'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* ===== RIGHT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-3 sm:space-y-4 md:space-y-5"
//           >
//             <motion.span 
//               className="text-blue-400 font-semibold text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 rounded-full border border-blue-500/30 inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             <motion.h2 
//               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15]"
//             >
//               Why Choose{' '}
//               <motion.span 
//                 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//                 animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                 style={{ backgroundSize: '200% 200%' }}
//               >
//                 Us
//               </motion.span>
//             </motion.h2>
            
//             <motion.p 
//               className="text-blue-200/70 text-[10px] sm:text-xs md:text-sm leading-relaxed bg-white/5 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/5"
//             >
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             <div className="space-y-1.5 sm:space-y-2">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 flex items-center justify-center">
//                     <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm">
//                       {feature.title}
//                     </h4>
//                     <p className="text-blue-200/60 text-[8px] sm:text-[10px] md:text-xs mt-0.5 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* ===== CTA BUTTON - CENTERED ===== */}
//             <motion.div 
//               className="flex justify-center mt-2 sm:mt-3"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
//                   y: -3
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;




// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight, Sparkles } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     {
//       id: 1,
//       src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format',
//       title: 'Expert Team',
//       description: '24+ skilled professionals'
//     },
//     {
//       id: 2,
//       src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format',
//       title: 'Global Reach',
//       description: '10 countries worldwide'
//     },
//     {
//       id: 3,
//       src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format',
//       title: 'Success Stories',
//       description: '500+ projects delivered'
//     },
//     {
//       id: 4,
//       src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format',
//       title: 'Innovation Hub',
//       description: 'Cutting-edge solutions'
//     },
//     {
//       id: 5,
//       src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format',
//       title: 'Trusted Partner',
//       description: '98% client satisfaction'
//     },
//     {
//       id: 6,
//       src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format',
//       title: 'Financial Growth',
//       description: '10x revenue increase'
//     }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     {
//       icon: Users,
//       title: '24+ Expert Team Members',
//       description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.'
//     },
//     {
//       icon: Globe,
//       title: '10 Countries Presence',
//       description: 'We have branches in 10 countries, serving clients globally with localized solutions.'
//     },
//     {
//       icon: Shield,
//       title: 'Investment & Insurance',
//       description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.'
//     }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE HANDLER =====
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//       });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ===== GET RESPONSIVE IMAGE SIZE =====
//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 480) return { w: 80, h: 55 };
//     if (width < 640) return { w: 100, h: 70 };
//     if (width < 768) return { w: 130, h: 90 };
//     if (width < 1024) return { w: 160, h: 110 };
//     if (width < 1280) return { w: 180, h: 125 };
//     return { w: 200, h: 140 };
//   };

//   // ===== GET RESPONSIVE RADIUS =====
//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 480) return 60;
//     if (width < 640) return 75;
//     if (width < 768) return 95;
//     if (width < 1024) return 115;
//     if (width < 1280) return 135;
//     return 155;
//   };

//   // ===== GET RESPONSIVE CONTAINER HEIGHT =====
//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 480) return 200;
//     if (width < 640) return 240;
//     if (width < 768) return 280;
//     if (width < 1024) return 330;
//     if (width < 1280) return 380;
//     return 420;
//   };

//   // ===== CIRCLE POSITIONS =====
//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <div 
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 xl:gap-16 items-center">
          
//           {/* ===== LEFT COLUMN - 3D CIRCLE CAROUSEL ===== */}
//           <div 
//             className="relative flex items-center justify-center w-full"
//             style={{ height: `${containerHeight}px` }}
//           >
            
//             {/* ===== 3D CIRCLE CONTAINER ===== */}
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
                
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) {
//                   scale = 1.15;
//                 } else {
//                   scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
//                 }
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{
//                       x: x,
//                       y: y,
//                       translateX: '-50%',
//                       translateY: '-50%',
//                       zIndex: zIndex,
//                     }}
//                     animate={{
//                       scale: scale,
//                       opacity: opacity,
//                       zIndex: zIndex,
//                       x: x,
//                       y: y,
//                     }}
//                     transition={{
//                       duration: 0.9,
//                       ease: [0.215, 0.61, 0.355, 1],
//                     }}
//                   >
//                     <div 
//                       className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-blue-500/60 border-2 border-white/30' 
//                           : 'shadow-blue-500/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img 
//                         src={image.src}
//                         alt={image.title}
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 md:p-3"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           <h4 className="text-white font-bold text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
//                             {image.title}
//                           </h4>
//                           <p className="text-blue-200/70 text-[6px] sm:text-[8px] md:text-[10px]">
//                             {image.description}
//                           </p>
//                         </motion.div>
//                       )}
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/10 backdrop-blur-md px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full border border-white/20"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           <span className="text-white text-[5px] sm:text-[7px] md:text-[8px] font-medium flex items-center gap-0.5">
//                             <Sparkles className="h-1.5 w-1.5 text-yellow-400" />
//                             Active
//                           </span>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 150),
//                 height: Math.min(containerHeight * 0.3, 150),
//               }}
//               animate={{ 
//                 scale: [1, 1.3, 1],
//                 opacity: [0.3, 0.6, 0.3]
//               }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS INDICATOR ===== */}
//             <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3 sm:w-4 md:w-5 h-1 bg-blue-400' 
//                       : 'w-1 h-1 bg-gray-500 hover:bg-gray-400'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* ===== RIGHT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-3 sm:space-y-4 md:space-y-5"
//           >
//             <motion.span 
//               className="text-blue-400 font-semibold text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 rounded-full border border-blue-500/30 inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             <motion.h2 
//               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15]"
//             >
//               Why Choose{' '}
//               <motion.span 
//                 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//                 animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                 style={{ backgroundSize: '200% 200%' }}
//               >
//                 Us
//               </motion.span>
//             </motion.h2>
            
//             <motion.p 
//               className="text-blue-200/70 text-[10px] sm:text-xs md:text-sm leading-relaxed bg-white/5 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/5"
//             >
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             <div className="space-y-1.5 sm:space-y-2">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 flex items-center justify-center">
//                     <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm">
//                       {feature.title}
//                     </h4>
//                     <p className="text-blue-200/60 text-[8px] sm:text-[10px] md:text-xs mt-0.5 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* ===== CTA BUTTON - #01adf0 COLOR ===== */}
//             <motion.div 
//               className="flex justify-center mt-2 sm:mt-3"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 15px 30px rgba(1,173,240,0.3)",
//                   y: -3
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;







// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight, Sparkles } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
//     { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
//     { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE =====
//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 480) return { w: 80, h: 55 };
//     if (width < 640) return { w: 100, h: 70 };
//     if (width < 768) return { w: 130, h: 90 };
//     if (width < 1024) return { w: 160, h: 110 };
//     if (width < 1280) return { w: 180, h: 125 };
//     return { w: 200, h: 140 };
//   };

//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 480) return 60;
//     if (width < 640) return 75;
//     if (width < 768) return 95;
//     if (width < 1024) return 115;
//     if (width < 1280) return 135;
//     return 155;
//   };

//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 480) return 200;
//     if (width < 640) return 240;
//     if (width < 768) return 280;
//     if (width < 1024) return 330;
//     if (width < 1280) return 380;
//     return 420;
//   };

//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 xl:gap-16 items-center">
          
//           {/* ===== LEFT COLUMN - 3D CIRCLE CAROUSEL ===== */}
//           <div 
//             className="relative flex items-center justify-center w-full"
//             style={{ height: `${containerHeight}px` }}
//           >
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) scale = 1.15;
//                 else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }}
//                     animate={{ scale, opacity, zIndex, x, y }}
//                     transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
//                   >
//                     <div 
//                       className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-blue-500/60 border-2 border-white/30' 
//                           : 'shadow-blue-500/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 md:p-3"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           <h3 className="sec-h3 text-white">{image.title}</h3>
//                           <p className="sec-p text-blue-200/70">{image.description}</p>
//                         </motion.div>
//                       )}
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/10 backdrop-blur-md px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full border border-white/20"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           <span className="text-white text-[5px] sm:text-[7px] md:text-[8px] font-medium flex items-center gap-0.5">
//                             <Sparkles className="h-1.5 w-1.5 text-yellow-400" />
//                             Active
//                           </span>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 150),
//                 height: Math.min(containerHeight * 0.3, 150),
//               }}
//               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS ===== */}
//             <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3 sm:w-4 md:w-5 h-1 bg-blue-400' 
//                       : 'w-1 h-1 bg-gray-500 hover:bg-gray-400'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* ===== RIGHT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-3 sm:space-y-4 md:space-y-5"
//           >
//             {/* Badge */}
//             <motion.span 
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             {/* Heading (h2) */}
//             <motion.h2 className="sec-h2 sec-text-light leading-[1.15]">
//               Why Choose{' '}
//               <motion.span 
//                 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//                 animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                 style={{ backgroundSize: '200% 200%' }}
//               >
//                 Us
//               </motion.span>
//             </motion.h2>
            
//             {/* Paragraph (p) */}
//             <motion.p className="sec-p sec-text-light-soft leading-relaxed bg-white/5 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/5">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             {/* Features */}
//             <div className="space-y-1.5 sm:space-y-2">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 flex items-center justify-center">
//                     <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
//                   </div>
//                   <div>
//                     {/* Feature Title (h3) */}
//                     <h3 className="sec-h3 text-white mb-0">
//                       {feature.title}
//                     </h3>
//                     {/* Feature Description (p) */}
//                     <p className="sec-p text-blue-200/60 mt-0.5 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button */}
//             <motion.div 
//               className="flex justify-center mt-2 sm:mt-3"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileTap={{ scale: 0.95 }}
//                 className="sec-btn"
//               >
//                 Get Started
//                 <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 sec-btn-arrow" />
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;




// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight, Sparkles } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
//     { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
//     { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE =====
//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 480) return { w: 80, h: 55 };
//     if (width < 640) return { w: 100, h: 70 };
//     if (width < 768) return { w: 130, h: 90 };
//     if (width < 1024) return { w: 160, h: 110 };
//     if (width < 1280) return { w: 180, h: 125 };
//     return { w: 200, h: 140 };
//   };

//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 480) return 60;
//     if (width < 640) return 75;
//     if (width < 768) return 95;
//     if (width < 1024) return 115;
//     if (width < 1280) return 135;
//     return 155;
//   };

//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 480) return 200;
//     if (width < 640) return 240;
//     if (width < 768) return 280;
//     if (width < 1024) return 330;
//     if (width < 1280) return 380;
//     return 420;
//   };

//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND — #008df1 + #005b8f ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 xl:gap-16 items-center">
          
//           {/* ===== LEFT COLUMN - 3D CIRCLE CAROUSEL ===== */}
//           <div 
//             className="relative flex items-center justify-center w-full"
//             style={{ height: `${containerHeight}px` }}
//           >
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) scale = 1.15;
//                 else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }}
//                     animate={{ scale, opacity, zIndex, x, y }}
//                     transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
//                   >
//                     <div 
//                       className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[#008df1]/60 border-2 border-[#00c6fb]/50' 
//                           : 'shadow-[#008df1]/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 md:p-3"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           <h3 className="sec-h3 text-white">{image.title}</h3>
//                           <p className="sec-p text-[#00c6fb]/80">{image.description}</p>
//                         </motion.div>
//                       )}
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/10 backdrop-blur-md px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full border border-white/20"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           <span className="text-white text-[5px] sm:text-[7px] md:text-[8px] font-medium flex items-center gap-0.5">
//                             <Sparkles className="h-1.5 w-1.5 text-yellow-400" />
//                             Active
//                           </span>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW — #008df1 ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008df1]/20 blur-2xl"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 150),
//                 height: Math.min(containerHeight * 0.3, 150),
//               }}
//               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS — #008df1 active ===== */}
//             <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3 sm:w-4 md:w-5 h-1 bg-[#008df1]' 
//                       : 'w-1 h-1 bg-gray-500 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* ===== RIGHT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-3 sm:space-y-4 md:space-y-5"
//           >
//             {/* Badge */}
//             <motion.span 
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             {/* Heading — #00c6fb highlighted (solid) */}
//             <motion.h2 className="sec-h2 sec-text-light leading-[1.15]">
//               Why Choose{' '}
//               <span style={{ color: '#00c6fb' }}>
//                 Us
//               </span>
//             </motion.h2>
            
//             {/* Paragraph */}
//             <motion.p className="sec-p sec-text-light-soft leading-relaxed bg-white/5 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/5">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             {/* Features */}
//             <div className="space-y-1.5 sm:space-y-2">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#008df1]/40 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#008df1]/20 p-1 flex items-center justify-center">
//                     <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-[#00c6fb]" />
//                   </div>
//                   <div>
//                     {/* Feature Title (h3) */}
//                     <h3 className="sec-h3 text-white mb-0">
//                       {feature.title}
//                     </h3>
//                     {/* Feature Description (p) */}
//                     <p className="sec-p text-[#00c6fb]/70 mt-0.5 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button — #008df1 */}
//             <motion.div 
//               className="flex justify-center mt-2 sm:mt-3"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#008df1]/30 transition-all duration-300"
//               >
//                 Get Started
//                 <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;








// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight, Sparkles } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
//     { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
//     { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE =====
//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 480) return { w: 80, h: 55 };
//     if (width < 640) return { w: 100, h: 70 };
//     if (width < 768) return { w: 130, h: 90 };
//     if (width < 1024) return { w: 160, h: 110 };
//     if (width < 1280) return { w: 180, h: 125 };
//     return { w: 200, h: 140 };
//   };

//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 480) return 60;
//     if (width < 640) return 75;
//     if (width < 768) return 95;
//     if (width < 1024) return 115;
//     if (width < 1280) return 135;
//     return 155;
//   };

//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 480) return 200;
//     if (width < 640) return 240;
//     if (width < 768) return 280;
//     if (width < 1024) return 330;
//     if (width < 1280) return 380;
//     return 420;
//   };

//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     <section className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND — #008df1 + #005b8f ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 xl:gap-16 items-center">
          
//           {/* ===== LEFT COLUMN - CONTENT (Ab left side me) ===== */}
//           {/* Desktop par left me rahega, mobile par pehle aayega */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             // 👇 Desktop par order-1 (left), mobile par bhi pehle
//             className="space-y-3 sm:space-y-4 md:space-y-5 order-1"
//           >
//             {/* Badge */}
//             <motion.span 
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             {/* Heading — #00c6fb highlighted (solid) */}
//             <motion.h2 className="sec-h2 sec-text-light leading-[1.15]">
//               Why Choose{' '}
//               <span style={{ color: '#00c6fb' }}>
//                 Us
//               </span>
//             </motion.h2>
            
//             {/* Paragraph */}
//             <motion.p className="sec-p sec-text-light-soft leading-relaxed bg-white/5 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/5">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             {/* Features */}
//             <div className="space-y-1.5 sm:space-y-2">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#008df1]/40 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#008df1]/20 p-1 flex items-center justify-center">
//                     <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-[#00c6fb]" />
//                   </div>
//                   <div>
//                     <h3 className="sec-h3 text-white mb-0">
//                       {feature.title}
//                     </h3>
//                     <p className="sec-p text-[#00c6fb]/70 mt-0.5 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button — #008df1 */}
//             <motion.div 
//               className="flex justify-start mt-2 sm:mt-3"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#008df1]/30 transition-all duration-300"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* ===== RIGHT COLUMN - 3D CIRCLE CAROUSEL (Ab right side me) ===== */}
//           {/* Desktop par right me jayega, mobile par niche aayega */}
//           <div 
//             // 👇 Desktop par order-2 (right), mobile par bhi baad me (niche)
//             className="relative flex items-center justify-center w-full order-2"
//             style={{ height: `${containerHeight}px` }}
//           >
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) scale = 1.15;
//                 else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }}
//                     animate={{ scale, opacity, zIndex, x, y }}
//                     transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
//                   >
//                     <div 
//                       className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[#008df1]/60 border-2 border-[#00c6fb]/50' 
//                           : 'shadow-[#008df1]/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 md:p-3"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           <h3 className="sec-h3 text-white">{image.title}</h3>
//                           <p className="sec-p text-[#00c6fb]/80">{image.description}</p>
//                         </motion.div>
//                       )}
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/10 backdrop-blur-md px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full border border-white/20"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           <span className="text-white text-[5px] sm:text-[7px] md:text-[8px] font-medium flex items-center gap-0.5">
//                             <Sparkles className="h-1.5 w-1.5 text-yellow-400" />
//                             Active
//                           </span>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW — #008df1 ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008df1]/20 blur-2xl"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 150),
//                 height: Math.min(containerHeight * 0.3, 150),
//               }}
//               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS — #008df1 active ===== */}
//             <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3 sm:w-4 md:w-5 h-1 bg-[#008df1]' 
//                       : 'w-1 h-1 bg-gray-500 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;







// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight, Sparkles } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
//     { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
//     { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE =====
//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 480) return { w: 80, h: 55 };
//     if (width < 640) return { w: 100, h: 70 };
//     if (width < 768) return { w: 130, h: 90 };
//     if (width < 1024) return { w: 160, h: 110 };
//     if (width < 1280) return { w: 180, h: 125 };
//     return { w: 200, h: 140 };
//   };

//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 480) return 60;
//     if (width < 640) return 75;
//     if (width < 768) return 95;
//     if (width < 1024) return 115;
//     if (width < 1280) return 135;
//     return 155;
//   };

//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 480) return 200;
//     if (width < 640) return 240;
//     if (width < 768) return 280;
//     if (width < 1024) return 330;
//     if (width < 1280) return 380;
//     return 420;
//   };

//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     <section className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND — #008df1 + #005b8f ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 xl:gap-16 items-center">
          
//           {/* ===== LEFT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-3 sm:space-y-4 md:space-y-5 order-1"
//           >
//             {/* Badge */}
//             <motion.span 
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             {/* Heading */}
//             <motion.h2 className="sec-h2 sec-text-light leading-[1.15]">
//               Why Choose{' '}
//               <span style={{ color: '#00c6fb' }}>
//                 Us
//               </span>
//             </motion.h2>
            
//             {/* Paragraph */}
//             <motion.p className="sec-p sec-text-light-soft leading-relaxed bg-white/5 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/5">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             {/* Features */}
//             <div className="space-y-1.5 sm:space-y-2">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#008df1]/40 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#008df1]/20 p-1 flex items-center justify-center">
//                     <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-[#00c6fb]" />
//                   </div>
//                   <div>
//                     <h3 className="sec-h3 text-white mb-0">
//                       {feature.title}
//                     </h3>
//                     {/* 👇 Description — ab WHITE */}
//                     <p className="sec-p text-white/80 mt-0.5 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button */}
//             <motion.div 
//               className="flex justify-start mt-2 sm:mt-3"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#008df1]/30 transition-all duration-300"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* ===== RIGHT COLUMN - 3D CIRCLE CAROUSEL ===== */}
//           <div 
//             className="relative flex items-center justify-center w-full order-2"
//             style={{ height: `${containerHeight}px` }}
//           >
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) scale = 1.15;
//                 else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }}
//                     animate={{ scale, opacity, zIndex, x, y }}
//                     transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
//                   >
//                     <div 
//                       className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[#008df1]/60 border-2 border-[#00c6fb]/50' 
//                           : 'shadow-[#008df1]/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 md:p-3"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           <h3 className="sec-h3 text-white">{image.title}</h3>
//                           <p className="sec-p text-[#00c6fb]/80">{image.description}</p>
//                         </motion.div>
//                       )}
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/10 backdrop-blur-md px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full border border-white/20"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           <span className="text-white text-[5px] sm:text-[7px] md:text-[8px] font-medium flex items-center gap-0.5">
//                             <Sparkles className="h-1.5 w-1.5 text-yellow-400" />
//                             Active
//                           </span>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW — #008df1 ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008df1]/20 blur-2xl"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 150),
//                 height: Math.min(containerHeight * 0.3, 150),
//               }}
//               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS — #008df1 active ===== */}
//             <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3 sm:w-4 md:w-5 h-1 bg-[#008df1]' 
//                       : 'w-1 h-1 bg-gray-500 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;








// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
//     { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
//     { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE =====
//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ===== UPDATED: Bigger Image Sizes =====
//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 480) return { w: 120, h: 80 };      // was 80x55
//     if (width < 640) return { w: 160, h: 110 };     // was 100x70
//     if (width < 768) return { w: 200, h: 140 };     // was 130x90
//     if (width < 1024) return { w: 240, h: 170 };    // was 160x110
//     if (width < 1280) return { w: 280, h: 200 };    // was 180x125
//     return { w: 320, h: 220 };                      // was 200x140
//   };

//   // ===== UPDATED: Bigger Radius for Bigger Images =====
//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 480) return 80;      // was 60
//     if (width < 640) return 110;     // was 75
//     if (width < 768) return 140;     // was 95
//     if (width < 1024) return 170;    // was 115
//     if (width < 1280) return 200;    // was 135
//     return 230;                      // was 155
//   };

//   // ===== UPDATED: Taller Container =====
//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 480) return 280;     // was 200
//     if (width < 640) return 340;     // was 240
//     if (width < 768) return 400;     // was 280
//     if (width < 1024) return 460;    // was 330
//     if (width < 1280) return 520;    // was 380
//     return 580;                      // was 420
//   };

//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     <section className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND — #008df1 + #005b8f ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 xl:gap-16 items-center">
          
//           {/* ===== LEFT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-3 sm:space-y-4 md:space-y-5 order-1"
//           >
//             {/* Badge */}
//             <motion.span 
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             {/* Heading */}
//             <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.15]">
//               Why Choose{' '}
//               <span style={{ color: '#00c6fb' }}>
//                 Us
//               </span>
//             </motion.h2>
            
//             {/* Paragraph */}
//             <motion.p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/5">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             {/* Features */}
//             <div className="space-y-2 sm:space-y-3">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#008df1]/40 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#008df1]/20 p-1.5 flex items-center justify-center">
//                     <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
//                       {feature.title}
//                     </h3>
//                     <p className="text-xs sm:text-sm md:text-[15px] text-white leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button */}
//             <motion.div 
//               className="flex justify-start mt-4 sm:mt-5"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg shadow-[#008df1]/30 transition-all duration-300"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* ===== RIGHT COLUMN - 3D CIRCLE CAROUSEL ===== */}
//           <div 
//             className="relative flex items-center justify-center w-full order-2"
//             style={{ height: `${containerHeight}px` }}
//           >
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) scale = 1.15;
//                 else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }}
//                     animate={{ scale, opacity, zIndex, x, y }}
//                     transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
//                   >
//                     <div 
//                       className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[#008df1]/60 border-2 border-[#00c6fb]/50' 
//                           : 'shadow-[#008df1]/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           // 👇 Padding thodi badhai taaki bade card me text acha lage
//                           className="absolute bottom-0 left-0 right-0 p-3 sm:p-4"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           {/* 👇 Font size bada kiya taaki bade card me readable lage */}
//                           <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{image.title}</h3>
//                           <p className="text-sm sm:text-base md:text-[17px] text-white/90">{image.description}</p>
//                         </motion.div>
//                       )}
                      
//                       {/* 👈 "Active" badge yahan se hata diya gaya hai */}
                      
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW — #008df1 ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008df1]/20 blur-2xl"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 220), // Glow bhi bada kiya
//                 height: Math.min(containerHeight * 0.3, 220),
//               }}
//               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS — #008df1 active ===== */}
//             <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3 sm:w-4 md:w-5 h-1 bg-[#008df1]' 
//                       : 'w-1 h-1 bg-gray-500 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;







// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
//     { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
//     { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE =====
//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ===== FIXED: Smaller images on mobile, bigger on desktop =====
//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 400) return { w: 70, h: 50 };        // Very small phones
//     if (width < 480) return { w: 90, h: 65 };        // Small phones
//     if (width < 640) return { w: 120, h: 85 };       // Large phones
//     if (width < 768) return { w: 160, h: 115 };      // Tablets
//     if (width < 1024) return { w: 200, h: 145 };     // Small laptops
//     if (width < 1280) return { w: 260, h: 185 };     // Desktops
//     return { w: 320, h: 220 };                       // Large desktops
//   };

//   // ===== FIXED: Radius adjusted so cards don't overlap on mobile =====
//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 400) return 55;
//     if (width < 480) return 70;
//     if (width < 640) return 100;
//     if (width < 768) return 130;
//     if (width < 1024) return 165;
//     if (width < 1280) return 200;
//     return 230;
//   };

//   // ===== FIXED: Container height bigger on mobile to avoid overlap =====
//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 400) return 260;     // Small phones
//     if (width < 480) return 300;     // Phones
//     if (width < 640) return 360;     // Large phones
//     if (width < 768) return 420;     // Tablets
//     if (width < 1024) return 480;    // Small laptops
//     if (width < 1280) return 540;    // Desktops
//     return 600;                      // Large desktops
//   };

//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     // 👇 FIXED: Top padding badhai — navbar ke neeche se start ho
//     // Mobile: pt-20 (80px), Tablet: pt-16, Desktop: pt-12
//     <section className="relative pt-20 sm:pt-20 md:pt-16 lg:pt-12 pb-10 sm:pb-12 md:pb-14 lg:pb-16 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND — #008df1 + #005b8f ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* 👇 FIXED: Mobile par gap badhaya, taaki dono sections alag dikhein */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-10 lg:gap-14 xl:gap-16 items-center">
          
//           {/* ===== LEFT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-4 sm:space-y-5 md:space-y-6 order-1 w-full"
//           >
//             {/* Badge */}
//             <motion.span 
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             {/* Heading */}
//             <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15]">
//               Why Choose{' '}
//               <span style={{ color: '#00c6fb' }}>
//                 Us
//               </span>
//             </motion.h2>
            
//             {/* Paragraph */}
//             <motion.p className="text-sm sm:text-base md:text-base lg:text-lg text-white/90 leading-relaxed bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/5">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             {/* Features */}
//             <div className="space-y-3 sm:space-y-3.5">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#008df1]/40 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#008df1]/20 p-2 flex items-center justify-center">
//                     <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
//                       {feature.title}
//                     </h3>
//                     <p className="text-xs sm:text-sm md:text-[15px] text-white leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button */}
//             <motion.div 
//               className="flex justify-start mt-4 sm:mt-5"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="sec-btn"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <ArrowRight className="h-4 w-4" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* ===== RIGHT COLUMN - 3D CIRCLE CAROUSEL ===== */}
//           {/* 👇 FIXED: Mobile par extra margin-top taaki left se alag dikhe */}
//           <div 
//             className="relative flex items-center justify-center w-full order-2 mt-4 lg:mt-0"
//             style={{ height: `${containerHeight}px` }}
//           >
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) scale = 1.15;
//                 else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }}
//                     animate={{ scale, opacity, zIndex, x, y }}
//                     transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
//                   >
//                     <div 
//                       className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[#008df1]/60 border-2 border-[#00c6fb]/50' 
//                           : 'shadow-[#008df1]/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           {/* 👇 FIXED: Mobile par chhota, desktop par bada */}
//                           <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white leading-tight">
//                             {image.title}
//                           </h3>
//                           <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/90 leading-tight mt-0.5">
//                             {image.description}
//                           </p>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008df1]/20 blur-2xl pointer-events-none"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 220),
//                 height: Math.min(containerHeight * 0.3, 220),
//               }}
//               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS ===== */}
//             <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-4 sm:w-5 h-1 bg-[#008df1]' 
//                       : 'w-1.5 h-1 bg-gray-500 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;















// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
//     { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
//     { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE =====
//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ===== COMPACT: Smaller image sizes =====
//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 400) return { w: 60, h: 42 };
//     if (width < 480) return { w: 80, h: 55 };
//     if (width < 640) return { w: 100, h: 70 };
//     if (width < 768) return { w: 130, h: 90 };
//     if (width < 1024) return { w: 160, h: 115 };
//     if (width < 1280) return { w: 200, h: 140 };
//     return { w: 240, h: 165 };
//   };

//   // ===== COMPACT: Smaller radius =====
//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 400) return 45;
//     if (width < 480) return 60;
//     if (width < 640) return 80;
//     if (width < 768) return 105;
//     if (width < 1024) return 130;
//     if (width < 1280) return 155;
//     return 180;
//   };

//   // ===== COMPACT: Smaller container height =====
//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 400) return 200;
//     if (width < 480) return 240;
//     if (width < 640) return 290;
//     if (width < 768) return 340;
//     if (width < 1024) return 390;
//     if (width < 1280) return 430;
//     return 470;
//   };

//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     // 👇 COMPACT: Top/Bottom padding kam ki hai
//     <section className="relative pt-12 sm:pt-14 md:pt-12 lg:pt-10 pb-6 sm:pb-8 md:pb-10 lg:pb-12 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* 👇 COMPACT: Gap kam kiya */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-12 xl:gap-14 items-center">
          
//           {/* ===== LEFT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-3 sm:space-y-4 md:space-y-4 order-1 w-full"
//           >
//             {/* Badge */}
//             <motion.span 
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             {/* 👇 COMPACT: Heading chhota kiya */}
//             <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white leading-[1.15]">
//               Why Choose{' '}
//               <span style={{ color: '#00c6fb' }}>
//                 Us
//               </span>
//             </motion.h2>
            
//             {/* 👇 COMPACT: Paragraph chhota kiya */}
//             <motion.p className="text-xs sm:text-sm md:text-sm lg:text-base text-white/90 leading-relaxed bg-white/5 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/5">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             {/* 👇 COMPACT: Features compact kiye */}
//             <div className="space-y-2 sm:space-y-2.5">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#008df1]/40 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#008df1]/20 p-1.5 flex items-center justify-center">
//                     <feature.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     {/* 👇 COMPACT: Title chhota */}
//                     <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-bold text-white mb-0.5 leading-tight">
//                       {feature.title}
//                     </h3>
//                     {/* 👇 COMPACT: Description chhota */}
//                     <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm text-white leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button */}
//             <motion.div 
//               className="flex justify-start mt-3 sm:mt-4"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="sec-btn"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* ===== RIGHT COLUMN - 3D CAROUSEL ===== */}
//           <div 
//             className="relative flex items-center justify-center w-full order-2 mt-2 lg:mt-0"
//             style={{ height: `${containerHeight}px` }}
//           >
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) scale = 1.12;
//                 else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }}
//                     animate={{ scale, opacity, zIndex, x, y }}
//                     transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
//                   >
//                     <div 
//                       className={`relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[#008df1]/60 border-2 border-[#00c6fb]/50' 
//                           : 'shadow-[#008df1]/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           {/* 👇 COMPACT: Carousel text chhota */}
//                           <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-white leading-tight">
//                             {image.title}
//                           </h3>
//                           <p className="text-[9px] sm:text-[10px] md:text-xs text-white/90 leading-tight mt-0.5">
//                             {image.description}
//                           </p>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008df1]/20 blur-2xl pointer-events-none"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 160),
//                 height: Math.min(containerHeight * 0.3, 160),
//               }}
//               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS ===== */}
//             <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3.5 sm:w-4 h-1 bg-[#008df1]' 
//                       : 'w-1.5 h-1 bg-gray-500 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;






// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Shield, ArrowRight } from 'lucide-react';

// const WhyChooseUsSection = () => {
//   // ===== CAROUSEL IMAGES =====
//   const carouselImages = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
//     { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
//     { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' }
//   ];

//   // ===== FEATURES DATA =====
//   const features = [
//     { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
//     { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
//     { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' }
//   ];

//   // ===== STATE =====
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1024,
//   });

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== WINDOW RESIZE =====
//   useEffect(() => {
//     const handleResize = () => setWindowSize({ width: window.innerWidth });
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // ===== 👇 SLIGHTLY BIGGER IMAGE SIZES (~15-20% increase) =====
//   const getImageSize = () => {
//     const width = windowSize.width;
//     if (width < 400) return { w: 72, h: 50 };       // was 60x42
//     if (width < 480) return { w: 95, h: 65 };       // was 80x55
//     if (width < 640) return { w: 120, h: 85 };      // was 100x70
//     if (width < 768) return { w: 155, h: 105 };     // was 130x90
//     if (width < 1024) return { w: 190, h: 135 };    // was 160x115
//     if (width < 1280) return { w: 235, h: 165 };    // was 200x140
//     return { w: 280, h: 195 };                      // was 240x165
//   };

//   // ===== 👇 SLIGHTLY BIGGER RADIUS =====
//   const getResponsiveRadius = () => {
//     const width = windowSize.width;
//     if (width < 400) return 52;      // was 45
//     if (width < 480) return 70;      // was 60
//     if (width < 640) return 92;      // was 80
//     if (width < 768) return 120;     // was 105
//     if (width < 1024) return 150;    // was 130
//     if (width < 1280) return 178;    // was 155
//     return 208;                      // was 180
//   };

//   // ===== 👇 SLIGHTLY BIGGER CONTAINER HEIGHT =====
//   const getContainerHeight = () => {
//     const width = windowSize.width;
//     if (width < 400) return 230;     // was 200
//     if (width < 480) return 275;     // was 240
//     if (width < 640) return 330;     // was 290
//     if (width < 768) return 390;     // was 340
//     if (width < 1024) return 445;    // was 390
//     if (width < 1280) return 490;    // was 430
//     return 540;                      // was 470
//   };

//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = getResponsiveRadius();
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   const imageSize = getImageSize();
//   const containerHeight = getContainerHeight();

//   return (
//     <section className="relative pt-12 sm:pt-14 md:pt-12 lg:pt-10 pb-6 sm:pb-8 md:pb-10 lg:pb-12 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-12 xl:gap-14 items-center">
          
//           {/* ===== LEFT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-3 sm:space-y-4 md:space-y-4 order-1 w-full"
//           >
//             {/* Badge */}
//             <motion.span 
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -2, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             {/* Heading */}
//             <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white leading-[1.15]">
//               Why Choose{' '}
//               <span style={{ color: '#00c6fb' }}>
//                 Us
//               </span>
//             </motion.h2>
            
//             {/* Paragraph */}
//             <motion.p className="text-xs sm:text-sm md:text-sm lg:text-base text-white/90 leading-relaxed bg-white/5 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/5">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             {/* Features */}
//             <div className="space-y-2 sm:space-y-2.5">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ x: 3, scale: 1.01 }}
//                   className="flex gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#008df1]/40 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#008df1]/20 p-1.5 flex items-center justify-center">
//                     <feature.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-bold text-white mb-0.5 leading-tight">
//                       {feature.title}
//                     </h3>
//                     <p className="text-[11px] sm:text-xs md:text-xs lg:text-sm text-white leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button */}
//             <motion.div 
//               className="flex justify-start mt-3 sm:mt-4"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="/contact"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="sec-btn"
//               >
//                 Get Started
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                 </motion.span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* ===== RIGHT COLUMN - 3D CAROUSEL ===== */}
//           <div 
//             className="relative flex items-center justify-center w-full order-2 mt-2 lg:mt-0"
//             style={{ height: `${containerHeight}px` }}
//           >
//             <div className="relative w-full h-full">
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const radius = getResponsiveRadius();
//                 const distance = Math.sqrt(x * x + y * y) / radius;
                
//                 let scale;
//                 if (isActive) scale = 1.12;
//                 else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;
                
//                 const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
//                 const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

//                 return (
//                   <motion.div
//                     key={image.id}
//                     className="absolute top-1/2 left-1/2"
//                     style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }}
//                     animate={{ scale, opacity, zIndex, x, y }}
//                     transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}
//                   >
//                     <div 
//                       className={`relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[#008df1]/60 border-2 border-[#00c6fb]/50' 
//                           : 'shadow-[#008df1]/10 border border-white/10'
//                       }`}
//                       style={{
//                         width: isActive ? imageSize.w * 1.12 : imageSize.w,
//                         height: isActive ? imageSize.h * 1.12 : imageSize.h,
//                       }}
//                     >
//                       <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-white leading-tight">
//                             {image.title}
//                           </h3>
//                           <p className="text-[9px] sm:text-[10px] md:text-xs text-white/90 leading-tight mt-0.5">
//                             {image.description}
//                           </p>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* ===== CENTER GLOW ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008df1]/20 blur-2xl pointer-events-none"
//               style={{
//                 width: Math.min(containerHeight * 0.3, 180),
//                 height: Math.min(containerHeight * 0.3, 180),
//               }}
//               animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* ===== DOTS ===== */}
//             <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
//               {carouselImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     index === currentIndex 
//                       ? 'w-3.5 sm:w-4 h-1 bg-[#008df1]' 
//                       : 'w-1.5 h-1 bg-gray-500 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;






import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Globe,
  CheckCircle2,
  Users,
  DollarSign,
  Settings,
  ShieldCheck,
  Smile,
  Zap,
  LifeBuoy,
} from 'lucide-react';

const WhyChooseUsSection = () => {
  // ===== STATE FOR TABS =====
  const [activeTab, setActiveTab] = useState('impact'); // 'impact' or 'strengths'

  // ===== DATA FOR "OUR IMPACT" TAB =====
  const impactData = [
    {
      id: 1,
      value: '10+',
      label: 'Years of Excellence',
      description: 'Delivering quality since 2016',
      icon: Award,
    },
    {
      id: 2,
      value: '55+',
      label: 'Countries Served',
      description: 'Global reach, local expertise',
      icon: Globe,
    },
    {
      id: 3,
      value: '700+',
      label: 'Projects Delivered',
      description: 'Across diverse industries',
      icon: CheckCircle2,
    },
    {
      id: 4,
      value: '500+',
      label: 'Happy Clients',
      description: 'And growing every day',
      icon: Users,
    },
  ];

  // ===== DATA FOR "OUR STRENGTHS" TAB =====
  // Colors strictly mapped from your Blue Color Shades palette
  const strengthData = [
    {
      id: 1,
      title: 'Experienced Team',
      description: 'Developers, designers, and project managers with 6+ years of expertise.',
      icon: Users,
      color: '#01ADF0', // Primary Blue
    },
    {
      id: 2,
      title: 'Global Delivery',
      description: 'Successfully delivered projects across 55+ countries.',
      icon: Globe,
      color: '#005B8F', // Dark Blue
    },
    {
      id: 3,
      title: 'Affordable Solutions',
      description: 'Competitive pricing with no compromise on quality.',
      icon: DollarSign,
      color: '#00C6FB', // Gradient Blue
    },
    {
      id: 4,
      title: 'Custom-Tailored Development',
      description: 'Every solution is built to match your exact needs.',
      icon: Settings,
      color: '#008FD1', // Medium Blue
    },
    {
      id: 5,
      title: 'Security First',
      description: 'We follow strict data protection and security standards.',
      icon: ShieldCheck,
      color: '#003F7D', // Navy Blue
    },
    {
      id: 6,
      title: 'Client Satisfaction',
      description: 'Trusted by 500+ clients with 93% repeat business.',
      icon: Smile,
      color: '#01ADF0', // Primary Blue
    },
    {
      id: 7,
      title: 'Fast Turnaround',
      description: 'Agile process with quick iterations and delivery.',
      icon: Zap,
      color: '#006FA6', // Deep Blue
    },
    {
      id: 8,
      title: 'Ongoing Support',
      description: 'Dedicated post-launch maintenance and support.',
      icon: LifeBuoy,
      color: '#03B4F6', // Sky Blue
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Background Decor (Using Very Light Blue & Pale Blue) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6F8FF]/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A7E8FF]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1.5 bg-[#01ADF0]/10 rounded-full border border-[#01ADF0]/20"
          >
            <span className="text-sm font-medium text-[#01ADF0]">
              Why Us
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-5 text-[#003F7D] leading-tight"
          >
            Why Choose SCC Infotech?
          </motion.h2>
          
          {/* Divider Line: Navy to Primary Blue Gradient */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-[#003F7D] to-[#01ADF0] mx-auto mb-6 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            With proven expertise and unwavering commitment to excellence, we deliver digital solutions that drive growth and transform businesses.
          </motion.p>
        </div>

        {/* ===== TAB SWITCHER ===== */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full shadow-md relative">
            <button
              onClick={() => setActiveTab('impact')}
              className={`relative px-6 py-2.5 rounded-full z-[2] text-sm font-medium transition-all duration-300 ${
                activeTab === 'impact' ? 'text-white' : 'text-gray-600 hover:text-[#01ADF0]'
              }`}
            >
              {activeTab === 'impact' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              Our Impact
            </button>
            <button
              onClick={() => setActiveTab('strengths')}
              className={`relative px-6 py-2.5 rounded-full z-[2] text-sm font-medium transition-all duration-300 ${
                activeTab === 'strengths' ? 'text-white' : 'text-gray-600 hover:text-[#01ADF0]'
              }`}
            >
              {activeTab === 'strengths' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              Our Strengths
            </button>
          </div>
        </div>

        {/* ===== TAB CONTENT ===== */}
        <AnimatePresence mode="wait">
          {activeTab === 'impact' && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {impactData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#01ADF0]/10 to-white scale-0 group-hover:scale-100 transition-transform duration-500" />
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#01ADF0]/5 to-[#00C6FB]/10 rounded-full relative z-10 text-4xl group-hover:text-[#01ADF0] transition-colors duration-300" style={{ color: '#003F7D' }}>
                        <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  {/* Gradient Text: Navy Blue to Primary Blue */}
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent group-hover:from-[#01ADF0] group-hover:to-[#00C6FB] transition-all duration-500">
                    {item.value}
                  </h3>
                  <p className="text-lg font-semibold text-[#003F7D] mb-1">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'strengths' && (
            <motion.div
              key="strengths"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {strengthData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 border border-gray-100 hover:shadow-xl hover:-translate-y-1 group overflow-hidden relative h-full"
                >
                  {/* Top Gradient Line on Hover: Recommended Gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[#00C6FB] group-hover:to-[#01ADF0] transition-all duration-500" />
                  
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 text-white shadow-md"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  
                  <h3
                    className="text-lg font-bold mb-2 text-[#003F7D] group-hover:text-[#01ADF0] transition-colors duration-300"
                  >
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;