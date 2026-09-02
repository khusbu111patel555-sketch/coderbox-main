// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Target, TrendingUp, Heart, Sparkles, Award, Users, Clock, CheckCircle } from 'lucide-react';
// // import AnimatedSection from './AnimatedSection';
// // import Counter from './Counter';

// // const WhyChooseUsSection = () => {
// //   const whyChooseUs = [
// //     {
// //       icon: Target,
// //       title: 'Data-Driven Insights',
// //       description: 'Harness the power of data to make informed decisions'
// //     },
// //     {
// //       icon: TrendingUp,
// //       title: 'Maximum ROI',
// //       description: 'Strategic budget allocation for optimal returns'
// //     },
// //     {
// //       icon: Heart,
// //       title: 'Dedicated Support',
// //       description: '24/7 support with regular updates and insights'
// //     },
// //     {
// //       icon: Sparkles,
// //       title: 'Innovative Solutions',
// //       description: 'Cutting-edge strategies for brand elevation'
// //     }
// //   ];

// //   const stats = [
// //     { target: 8, label: 'Projects Done', icon: Award, suffix: 'K+' },
// //     { target: 9, label: 'Winner Award', icon: Target, suffix: '+' },
// //     { target: 100, label: 'Happy Customers', icon: Users, suffix: '+' },
// //     { target: 10, label: 'Years Experience', icon: Clock, suffix: '+' }
// //   ];

// //   // Animation variants for staggered children
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, x: -20 },
// //     visible: {
// //       opacity: 1,
// //       x: 0,
// //       transition: {
// //         duration: 0.5,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   const statVariants = {
// //     hidden: { opacity: 0, y: 30 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   return (
// //     <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, 50, -30, 0],
// //             y: [0, -30, 30, 0],
// //             scale: [1, 1.2, 0.8, 1]
// //           }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, -50, 30, 0],
// //             y: [0, 30, -30, 0],
// //             scale: [1, 0.8, 1.2, 1]
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl"
// //           animate={{ 
// //             scale: [1, 1.3, 0.7, 1],
// //             opacity: [0.3, 0.5, 0.3]
// //           }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>
      
// //       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
// //         <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">
// //           {/* Left Column */}
// //           <div>
// //             <motion.span 
// //               className="text-blue-300 font-semibold text-sm tracking-widest uppercase bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 inline-block"
// //               whileHover={{ scale: 1.05 }}
// //               animate={{ 
// //                 y: [0, -3, 0],
// //               }}
// //               transition={{ duration: 2, repeat: Infinity }}
// //             >
// //               Why Choose Us
// //             </motion.span>
// //             <motion.h2 
// //               className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6"
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.2 }}
// //             >
// //               For Your <span className="text-yellow-400">Business!</span>
// //             </motion.h2>
// //             <motion.p 
// //               className="text-blue-200/80 text-lg leading-relaxed mb-8"
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.3 }}
// //             >
// //               Discover the transformative power of our cutting-edge digital marketing solutions, meticulously crafted to elevate your brand's presence in the digital sphere.
// //             </motion.p>
            
// //             <motion.div 
// //               className="grid grid-cols-2 gap-4"
// //               variants={containerVariants}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //             >
// //               {whyChooseUs.map((item, index) => (
// //                 <motion.div
// //                   key={index}
// //                   variants={itemVariants}
// //                   whileHover={{ 
// //                     scale: 1.05, 
// //                     y: -5,
// //                     backgroundColor: "rgba(255,255,255,0.15)",
// //                     borderColor: "rgba(255,255,255,0.3)"
// //                   }}
// //                   className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transition-all group cursor-default"
// //                 >
// //                   <motion.div 
// //                     className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3"
// //                     whileHover={{ 
// //                       scale: 1.2, 
// //                       rotate: 10,
// //                       backgroundColor: "rgba(255,255,255,0.3)"
// //                     }}
// //                   >
// //                     <item.icon className="h-5 w-5 text-yellow-400" />
// //                   </motion.div>
// //                   <motion.h4 
// //                     className="text-white font-semibold text-sm mb-1"
// //                     whileHover={{ x: 3 }}
// //                   >
// //                     {item.title}
// //                   </motion.h4>
// //                   <p className="text-blue-200/70 text-xs">{item.description}</p>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>

// //           {/* Right Column - Stats with better visibility */}
// //           <div>
// //             <motion.div 
// //               className="grid grid-cols-2 gap-6"
// //               variants={containerVariants}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //             >
// //               {stats.map((stat, index) => (
// //                 <motion.div
// //                   key={index}
// //                   variants={statVariants}
// //                   whileHover={{ 
// //                     scale: 1.05, 
// //                     y: -8,
// //                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.4)"
// //                   }}
// //                   className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
// //                 >
// //                   <motion.div 
// //                     className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-500/30 flex items-center justify-center mx-auto mb-3"
// //                     whileHover={{ rotate: 10, scale: 1.1 }}
// //                   >
// //                     <stat.icon className="h-6 w-6 text-yellow-400" />
// //                   </motion.div>
// //                   <Counter 
// //                     target={stat.target} 
// //                     label={stat.label} 
// //                     icon={stat.icon}
// //                     suffix={stat.suffix}
// //                   />
// //                 </motion.div>
// //               ))}
// //             </motion.div>

// //             {/* Additional Trust Badge with better visibility */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.8, delay: 0.5 }}
// //               viewport={{ once: true }}
// //               className="mt-6 p-6 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 text-center"
// //             >
// //               <div className="flex items-center justify-center gap-6 flex-wrap">
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="h-5 w-5 text-green-400" />
// //                   <span className="text-white text-sm font-medium">100% Satisfaction</span>
// //                 </div>
// //                 <div className="w-px h-8 bg-white/20"></div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="h-5 w-5 text-green-400" />
// //                   <span className="text-white text-sm font-medium">24/7 Support</span>
// //                 </div>
// //                 <div className="w-px h-8 bg-white/20"></div>
// //                 <div className="flex items-center gap-2">
// //                   <CheckCircle className="h-5 w-5 text-green-400" />
// //                   <span className="text-white text-sm font-medium">Trusted Partner</span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyChooseUsSection;

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
//   const [rotation, setRotation] = useState(0);

//   // ===== AUTO-ROTATE =====
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
//       setRotation((prev) => prev - 60);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [carouselImages.length]);

//   // ===== CIRCLE POSITIONS =====
//   const getPosition = (index) => {
//     const total = carouselImages.length;
//     const angle = (index / total) * 360;
//     const radius = 160;
//     const x = radius * Math.sin((angle * Math.PI) / 180);
//     const y = -radius * Math.cos((angle * Math.PI) / 180);
//     return { x, y, angle };
//   };

//   return (
//     <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* ===== BACKGROUND ===== */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl"
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

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
          
//           {/* ===== LEFT COLUMN - 3D CIRCLE CAROUSEL ===== */}
//           <div className="relative flex items-center justify-center h-[400px] md:h-[480px] lg:h-[520px]">
            
//             {/* ===== 3D CIRCLE CONTAINER ===== */}
//             <motion.div 
//               className="relative w-full h-full"
//               animate={{ rotate: rotation }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               {carouselImages.map((image, index) => {
//                 const { x, y } = getPosition(index);
//                 const isActive = index === currentIndex;
//                 const isNext = index === (currentIndex + 1) % carouselImages.length;
//                 const isPrev = index === (currentIndex - 1 + carouselImages.length) % carouselImages.length;
                
//                 let scale = 0.6;
//                 let opacity = 0.3;
//                 let zIndex = 0;
                
//                 if (isActive) {
//                   scale = 1;
//                   opacity = 1;
//                   zIndex = 10;
//                 } else if (isNext || isPrev) {
//                   scale = 0.8;
//                   opacity = 0.6;
//                   zIndex = 5;
//                 }

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
//                       transformStyle: 'preserve-3d',
//                     }}
//                     animate={{
//                       scale: scale,
//                       opacity: opacity,
//                       zIndex: zIndex,
//                     }}
//                     transition={{
//                       duration: 0.8,
//                       ease: "easeInOut",
//                       delay: isActive ? 0 : 0.1
//                     }}
//                   >
//                     <div 
//                       className={`relative w-[180px] h-[120px] md:w-[220px] md:h-[150px] lg:w-[260px] lg:h-[170px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
//                         isActive 
//                           ? 'shadow-blue-500/50 scale-105 border-2 border-white/30' 
//                           : 'shadow-blue-500/20 border border-white/10'
//                       }`}
//                       style={{
//                         transform: isActive ? 'rotateY(0deg)' : 'rotateY(10deg)',
//                       }}
//                     >
//                       <img 
//                         src={image.src}
//                         alt={image.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute bottom-0 left-0 right-0 p-4"
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           <h4 className="text-white font-bold text-sm md:text-base">{image.title}</h4>
//                           <p className="text-blue-200/70 text-xs">{image.description}</p>
//                         </motion.div>
//                       )}
                      
//                       {isActive && (
//                         <motion.div 
//                           className="absolute top-2 right-2 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20"
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           <span className="text-white text-[10px] font-medium flex items-center gap-1">
//                             <Sparkles className="h-2.5 w-2.5 text-yellow-400" />
//                             Active
//                           </span>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>

//             {/* ===== CENTER GLOW ===== */}
//             <motion.div 
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"
//               animate={{ 
//                 scale: [1, 1.3, 1],
//                 opacity: [0.3, 0.6, 0.3]
//               }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </div>

//           {/* ===== RIGHT COLUMN - CONTENT ===== */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <motion.span 
//               className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30 inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ 
//                 y: [0, -3, 0],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Why Choose Us
//             </motion.span>
            
//             <motion.h2 
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
//             >
//               Why Choose{' '}
//               <motion.span 
//                 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//                 animate={{ 
//                   backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//                 }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                 style={{ backgroundSize: '200% 200%' }}
//               >
//                 Us
//               </motion.span>
//             </motion.h2>
            
//             <motion.p 
//               className="text-blue-200/70 text-sm md:text-base leading-relaxed bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5"
//             >
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
//             </motion.p>
            
//             <div className="space-y-3 pt-2">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ 
//                     x: 8,
//                     scale: 1.02,
//                     boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
//                   }}
//                   className="flex gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
//                 >
//                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 flex items-center justify-center">
//                     <feature.icon className="h-5 w-5 text-blue-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-semibold text-sm md:text-base">
//                       {feature.title}
//                     </h4>
//                     <p className="text-blue-200/60 text-xs md:text-sm mt-1 leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <motion.div 
//               className="text-center mt-4"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <motion.a
//                 href="#contact"
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
//                   y: -3
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300"
//               >
//                 Learn More
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight className="h-5 w-5" />
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




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Shield, ArrowRight, Sparkles } from 'lucide-react';

const WhyChooseUsSection = () => {
  // ===== CAROUSEL IMAGES =====
  const carouselImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format',
      title: 'Expert Team',
      description: '24+ skilled professionals'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format',
      title: 'Global Reach',
      description: '10 countries worldwide'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format',
      title: 'Success Stories',
      description: '500+ projects delivered'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format',
      title: 'Innovation Hub',
      description: 'Cutting-edge solutions'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format',
      title: 'Trusted Partner',
      description: '98% client satisfaction'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format',
      title: 'Financial Growth',
      description: '10x revenue increase'
    }
  ];

  // ===== FEATURES DATA =====
  const features = [
    {
      icon: Users,
      title: '24+ Expert Team Members',
      description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.'
    },
    {
      icon: Globe,
      title: '10 Countries Presence',
      description: 'We have branches in 10 countries, serving clients globally with localized solutions.'
    },
    {
      icon: Shield,
      title: 'Investment & Insurance',
      description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.'
    }
  ];

  // ===== STATE =====
  const [currentIndex, setCurrentIndex] = useState(0);

  // ===== AUTO-ROTATE =====
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // ===== CIRCLE POSITIONS =====
  const getPosition = (index) => {
    const total = carouselImages.length;
    const angle = (index / total) * 360;
    const radius = 180;
    const x = radius * Math.sin((angle * Math.PI) / 180);
    const y = -radius * Math.cos((angle * Math.PI) / 180);
    return { x, y, angle };
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl"
          animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl"
          animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-28 items-center">
          
          {/* ===== LEFT COLUMN - 3D CIRCLE CAROUSEL ===== */}
          <div className="relative flex items-center justify-center h-[400px] md:h-[480px] lg:h-[520px]">
            
            {/* ===== 3D CIRCLE CONTAINER ===== */}
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => {
                const { x, y } = getPosition(index);
                const isActive = index === currentIndex;
                
                // Calculate distance from center (0 = center, 1 = edge)
                const distance = Math.sqrt(x * x + y * y) / 180;
                const scale = isActive ? 1 : 0.7 - distance * 0.15;
                const opacity = isActive ? 1 : 0.5 - distance * 0.2;
                const zIndex = isActive ? 10 : 1;

                return (
                  <motion.div
                    key={image.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x: x,
                      y: y,
                      translateX: '-50%',
                      translateY: '-50%',
                      zIndex: zIndex,
                    }}
                    animate={{
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                      x: x,
                      y: y,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    <div 
                      className={`relative w-[180px] h-[120px] md:w-[220px] md:h-[150px] lg:w-[260px] lg:h-[170px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                        isActive 
                          ? 'shadow-blue-500/50 scale-105 border-2 border-white/30' 
                          : 'shadow-blue-500/20 border border-white/10'
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {isActive && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 p-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h4 className="text-white font-bold text-sm md:text-base">{image.title}</h4>
                          <p className="text-blue-200/70 text-xs">{image.description}</p>
                        </motion.div>
                      )}
                      
                      {isActive && (
                        <motion.div 
                          className="absolute top-2 right-2 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <span className="text-white text-[10px] font-medium flex items-center gap-1">
                            <Sparkles className="h-2.5 w-2.5 text-yellow-400" />
                            Active
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ===== CENTER GLOW ===== */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* ===== RIGHT COLUMN - CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.span 
              className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30 inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Why Choose Us
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Why Choose{' '}
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Us
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-blue-200/70 text-sm md:text-base leading-relaxed bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5"
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
            </motion.p>
            
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
                  }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-blue-200/60 text-xs md:text-sm mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300"
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;