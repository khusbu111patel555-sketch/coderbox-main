// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { ChevronRight, Lightbulb, Target, Shield, Rocket } from 'lucide-react';
// // // // import AnimatedSection from './AnimatedSection';

// // // // const HowWeWorkSection = () => {
// // // //   const processSteps = [
// // // //     {
// // // //       number: '01',
// // // //       title: 'Idea & Concept',
// // // //       description: 'We start with your vision, transforming ideas into innovative technology solutions that drive real impact.',
// // // //       icon: Lightbulb,
// // // //       gradient: 'from-yellow-400 to-orange-500'
// // // //     },
// // // //     {
// // // //       number: '02',
// // // //       title: 'Market Research',
// // // //       description: 'Deep market analysis to identify opportunities and drive strategic decisions for sustainable growth.',
// // // //       icon: Target,
// // // //       gradient: 'from-blue-400 to-cyan-500'
// // // //     },
// // // //     {
// // // //       number: '03',
// // // //       title: 'Support & Secure',
// // // //       description: 'Comprehensive support and security to protect and grow your business value with confidence.',
// // // //       icon: Shield,
// // // //       gradient: 'from-green-400 to-emerald-500'
// // // //     },
// // // //     {
// // // //       number: '04',
// // // //       title: 'Launch & Grow',
// // // //       description: 'Seamless launch and continuous growth strategies for long-term success and market leadership.',
// // // //       icon: Rocket,
// // // //       gradient: 'from-purple-400 to-pink-500'
// // // //     }
// // // //   ];

// // // //   // Animation variants for staggered children
// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       transition: {
// // // //         staggerChildren: 0.15,
// // // //         delayChildren: 0.2
// // // //       }
// // // //     }
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { opacity: 0, y: 50 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: {
// // // //         duration: 0.7,
// // // //         ease: [0.215, 0.61, 0.355, 1]
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section id="how-we-work" className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // // //       {/* Animated background elements */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <motion.div
// // // //           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
// // // //           animate={{ 
// // // //             x: [0, -50, 50, 0],
// // // //             y: [0, 50, -50, 0],
// // // //             scale: [1, 1.2, 0.8, 1]
// // // //           }}
// // // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// // // //           animate={{ 
// // // //             x: [0, 50, -50, 0],
// // // //             y: [0, -50, 50, 0],
// // // //             scale: [1, 0.8, 1.2, 1]
// // // //           }}
// // // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
// // // //         <AnimatedSection className="text-center mb-20">
// // // //           <motion.span 
// // // //             className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 inline-block"
// // // //             whileHover={{ scale: 1.05 }}
// // // //             animate={{ 
// // // //               y: [0, -3, 0],
// // // //             }}
// // // //             transition={{ duration: 2, repeat: Infinity }}
// // // //           >
// // // //             How We Work
// // // //           </motion.span>
// // // //           <motion.h2 
// // // //             className="text-5xl md:text-6xl font-bold text-white mt-6"
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // //           >
// // // //             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Simple Process</span>
// // // //           </motion.h2>
// // // //           <motion.p 
// // // //             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.3 }}
// // // //           >
// // // //             We follow a systematic approach to deliver exceptional results for your business
// // // //           </motion.p>
// // // //         </AnimatedSection>
        
// // // //         <motion.div 
// // // //           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
// // // //           variants={containerVariants}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true, amount: 0.2 }}
// // // //         >
// // // //           {processSteps.map((step, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               variants={itemVariants}
// // // //               whileHover={{ 
// // // //                 y: -10,
// // // //                 scale: 1.02,
// // // //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// // // //               }}
// // // //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden"
// // // //             >
// // // //               {/* Animated number background */}
// // // //               <motion.div 
// // // //                 className={`absolute top-0 right-0 text-9xl font-bold opacity-5 group-hover:opacity-10 transition-opacity ${step.gradient}`}
// // // //                 animate={{ 
// // // //                   scale: [1, 1.1, 1],
// // // //                   rotate: [0, 5, -5, 0]
// // // //                 }}
// // // //                 transition={{ duration: 8, repeat: Infinity }}
// // // //               >
// // // //                 {step.number}
// // // //               </motion.div>
              
// // // //               <div className="relative z-10">
// // // //                 <motion.div 
// // // //                   className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
// // // //                   whileHover={{ 
// // // //                     scale: 1.15, 
// // // //                     rotate: 10,
// // // //                     transition: { duration: 0.3 }
// // // //                   }}
// // // //                 >
// // // //                   <step.icon className="h-8 w-8 text-white" />
// // // //                 </motion.div>
                
// // // //                 <motion.h3 
// // // //                   className="text-xl font-bold text-white mb-3"
// // // //                   whileHover={{ x: 5 }}
// // // //                 >
// // // //                   {step.title}
// // // //                 </motion.h3>
                
// // // //                 <p className="text-blue-200/70 text-sm leading-relaxed">{step.description}</p>
                
// // // //                 <motion.div 
// // // //                   className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
// // // //                   animate={{ 
// // // //                     x: [0, 5, 0],
// // // //                   }}
// // // //                   transition={{ duration: 1.5, repeat: Infinity }}
// // // //                 >
// // // //                   <ChevronRight className="h-6 w-6 text-blue-400" />
// // // //                 </motion.div>
// // // //               </div>

// // // //               {/* Animated border glow */}
// // // //               <motion.div
// // // //                 className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0"
// // // //                 whileHover={{
// // // //                   background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
// // // //                   transition: { duration: 0.3 }
// // // //                 }}
// // // //               />
// // // //             </motion.div>
// // // //           ))}
// // // //         </motion.div>

// // // //         {/* Bottom CTA with enhanced animation */}
// // // //         <motion.div 
// // // //           className="text-center mt-16"
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // //           viewport={{ once: true }}
// // // //         >
// // // //           <motion.a
// // // //             href="#contact"
// // // //             whileHover={{ 
// // // //               scale: 1.05,
// // // //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // // //               y: -3
// // // //             }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //             className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300"
// // // //           >
// // // //             Ready to Start Your Project?
// // // //             <motion.span
// // // //               animate={{ x: [0, 6, 0] }}
// // // //               transition={{ duration: 1.5, repeat: Infinity }}
// // // //             >
// // // //               <ChevronRight className="h-5 w-5" />
// // // //             </motion.span>
// // // //           </motion.a>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default HowWeWorkSection;










// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { ChevronRight, Lightbulb, Target, Shield, Rocket } from 'lucide-react';
// // // import AnimatedSection from './AnimatedSection';

// // // const HowWeWorkSection = () => {
// // //   const processSteps = [
// // //     {
// // //       number: '01',
// // //       title: 'Idea & Concept',
// // //       description: 'We start with your vision, transforming ideas into innovative technology solutions that drive real impact.',
// // //       icon: Lightbulb,
// // //       gradient: 'from-yellow-400 to-orange-500',
// // //       link: '/services/cognitive'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Market Research',
// // //       description: 'Deep market analysis to identify opportunities and drive strategic decisions for sustainable growth.',
// // //       icon: Target,
// // //       gradient: 'from-blue-400 to-cyan-500',
// // //       link: '/services/digital'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Support & Secure',
// // //       description: 'Comprehensive support and security to protect and grow your business value with confidence.',
// // //       icon: Shield,
// // //       gradient: 'from-green-400 to-emerald-500',
// // //       link: '/services/it'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Launch & Grow',
// // //       description: 'Seamless launch and continuous growth strategies for long-term success and market leadership.',
// // //       icon: Rocket,
// // //       gradient: 'from-purple-400 to-pink-500',
// // //       link: '/contact'
// // //     }
// // //   ];

// // //   // Animation variants for staggered children
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
// // //     hidden: { opacity: 0, y: 50 },
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
// // //     <section id="how-we-work" className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // //       {/* Animated background elements */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, -50, 50, 0],
// // //             y: [0, 50, -50, 0],
// // //             scale: [1, 1.2, 0.8, 1]
// // //           }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, 50, -50, 0],
// // //             y: [0, -50, 50, 0],
// // //             scale: [1, 0.8, 1.2, 1]
// // //           }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
// // //         <AnimatedSection className="text-center mb-20">
// // //           <motion.span 
// // //             className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 inline-block"
// // //             whileHover={{ scale: 1.05 }}
// // //             animate={{ 
// // //               y: [0, -3, 0],
// // //             }}
// // //             transition={{ duration: 2, repeat: Infinity }}
// // //           >
// // //             How We Work
// // //           </motion.span>
// // //           <motion.h2 
// // //             className="text-5xl md:text-6xl font-bold text-white mt-6"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //           >
// // //             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Simple Process</span>
// // //           </motion.h2>
// // //           <motion.p 
// // //             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.3 }}
// // //           >
// // //             We follow a systematic approach to deliver exceptional results for your business
// // //           </motion.p>
// // //         </AnimatedSection>
        
// // //         <motion.div 
// // //           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.2 }}
// // //         >
// // //           {processSteps.map((step, index) => (
// // //             <motion.div
// // //               key={index}
// // //               variants={itemVariants}
// // //               whileHover={{ 
// // //                 y: -10,
// // //                 scale: 1.02,
// // //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// // //               }}
// // //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden cursor-pointer"
// // //             >
// // //               {/* Animated number background */}
// // //               <motion.div 
// // //                 className={`absolute top-0 right-0 text-9xl font-bold opacity-5 group-hover:opacity-10 transition-opacity ${step.gradient}`}
// // //                 animate={{ 
// // //                   scale: [1, 1.1, 1],
// // //                   rotate: [0, 5, -5, 0]
// // //                 }}
// // //                 transition={{ duration: 8, repeat: Infinity }}
// // //               >
// // //                 {step.number}
// // //               </motion.div>
              
// // //               <div className="relative z-10">
// // //                 <motion.div 
// // //                   className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
// // //                   whileHover={{ 
// // //                     scale: 1.15, 
// // //                     rotate: 10,
// // //                     transition: { duration: 0.3 }
// // //                   }}
// // //                 >
// // //                   <step.icon className="h-8 w-8 text-white" />
// // //                 </motion.div>
                
// // //                 <motion.h3 
// // //                   className="text-xl font-bold text-white mb-3"
// // //                   whileHover={{ x: 5 }}
// // //                 >
// // //                   {step.title}
// // //                 </motion.h3>
                
// // //                 <p className="text-blue-200/70 text-sm leading-relaxed">{step.description}</p>
                
// // //                 {/* ===== READ MORE WITH ARROW - HOVER PAR SHOW ===== */}
// // //                 <motion.div 
// // //                   className="mt-4 flex items-center gap-2 text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
// // //                   initial={{ x: -10 }}
// // //                   whileHover={{ x: 0 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 >
// // //                   <span>Read More</span>
// // //                   <motion.span
// // //                     animate={{ 
// // //                       x: [0, 5, 0],
// // //                     }}
// // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // //                   >
// // //                     <ChevronRight className="h-4 w-4" />
// // //                   </motion.span>
// // //                 </motion.div>
// // //               </div>

// // //               {/* Animated border glow */}
// // //               <motion.div
// // //                 className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0"
// // //                 whileHover={{
// // //                   background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
// // //                   transition: { duration: 0.3 }
// // //                 }}
// // //               />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Bottom CTA with enhanced animation */}
// // //         <motion.div 
// // //           className="text-center mt-16"
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.2 }}
// // //           viewport={{ once: true }}
// // //         >
// // //           <motion.a
// // //             href="#contact"
// // //             whileHover={{ 
// // //               scale: 1.05,
// // //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // //               y: -3
// // //             }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300"
// // //           >
// // //             Ready to Start Your Project?
// // //             <motion.span
// // //               animate={{ x: [0, 6, 0] }}
// // //               transition={{ duration: 1.5, repeat: Infinity }}
// // //             >
// // //               <ChevronRight className="h-5 w-5" />
// // //             </motion.span>
// // //           </motion.a>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;






// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { ChevronRight, Lightbulb, Target, Shield, Rocket } from 'lucide-react';
// // // import AnimatedSection from './AnimatedSection';

// // // const HowWeWorkSection = () => {
// // //   const processSteps = [
// // //     {
// // //       number: '01',
// // //       title: 'Idea & Concept',
// // //       description: 'We start with your vision, transforming ideas into innovative technology solutions that drive real impact.',
// // //       icon: Lightbulb,
// // //       gradient: 'from-yellow-400 to-orange-500',
// // //       link: '/services/cognitive'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Market Research',
// // //       description: 'Deep market analysis to identify opportunities and drive strategic decisions for sustainable growth.',
// // //       icon: Target,
// // //       gradient: 'from-blue-400 to-cyan-500',
// // //       link: '/services/digital'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Support & Secure',
// // //       description: 'Comprehensive support and security to protect and grow your business value with confidence.',
// // //       icon: Shield,
// // //       gradient: 'from-green-400 to-emerald-500',
// // //       link: '/services/it'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Launch & Grow',
// // //       description: 'Seamless launch and continuous growth strategies for long-term success and market leadership.',
// // //       icon: Rocket,
// // //       gradient: 'from-purple-400 to-pink-500',
// // //       link: '/contact'
// // //     }
// // //   ];

// // //   // Animation variants for staggered children
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
// // //     hidden: { opacity: 0, y: 50 },
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
// // //     <section id="how-we-work" className="relative py-20 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // //       {/* Animated background elements */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, -50, 50, 0],
// // //             y: [0, 50, -50, 0],
// // //             scale: [1, 1.2, 0.8, 1]
// // //           }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, 50, -50, 0],
// // //             y: [0, -50, 50, 0],
// // //             scale: [1, 0.8, 1.2, 1]
// // //           }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
// // //         <AnimatedSection className="text-center mb-12">
// // //           <motion.span 
// // //             className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 inline-block"
// // //             whileHover={{ scale: 1.05 }}
// // //             animate={{ 
// // //               y: [0, -3, 0],
// // //             }}
// // //             transition={{ duration: 2, repeat: Infinity }}
// // //           >
// // //             How We Work
// // //           </motion.span>
// // //           <motion.h2 
// // //             className="text-4xl md:text-5xl font-bold text-white mt-4"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //           >
// // //             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Simple Process</span>
// // //           </motion.h2>
// // //           <motion.p 
// // //             className="text-blue-200/80 mt-3 max-w-2xl mx-auto text-base"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.3 }}
// // //           >
// // //             We follow a systematic approach to deliver exceptional results for your business
// // //           </motion.p>
// // //         </AnimatedSection>
        
// // //         <motion.div 
// // //           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.2 }}
// // //         >
// // //           {processSteps.map((step, index) => (
// // //             <motion.div
// // //               key={index}
// // //               variants={itemVariants}
// // //               whileHover={{ 
// // //                 y: -8,
// // //                 scale: 1.02,
// // //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// // //               }}
// // //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden cursor-pointer"
// // //             >
// // //               {/* Animated number background */}
// // //               <motion.div 
// // //                 className={`absolute top-0 right-0 text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity ${step.gradient}`}
// // //                 animate={{ 
// // //                   scale: [1, 1.1, 1],
// // //                   rotate: [0, 5, -5, 0]
// // //                 }}
// // //                 transition={{ duration: 8, repeat: Infinity }}
// // //               >
// // //                 {step.number}
// // //               </motion.div>
              
// // //               <div className="relative z-10">
// // //                 <motion.div 
// // //                   className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
// // //                   whileHover={{ 
// // //                     scale: 1.15, 
// // //                     rotate: 10,
// // //                     transition: { duration: 0.3 }
// // //                   }}
// // //                 >
// // //                   <step.icon className="h-7 w-7 text-white" />
// // //                 </motion.div>
                
// // //                 <motion.h3 
// // //                   className="text-lg font-bold text-white mb-2"
// // //                   whileHover={{ x: 5 }}
// // //                 >
// // //                   {step.title}
// // //                 </motion.h3>
                
// // //                 <p className="text-blue-200/70 text-sm leading-relaxed">{step.description}</p>
                
// // //                 {/* ===== READ MORE WITH ARROW - HOVER PAR SHOW ===== */}
// // //                 <motion.div 
// // //                   className="mt-3 flex items-center gap-2 text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
// // //                   initial={{ x: -10 }}
// // //                   whileHover={{ x: 0 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 >
// // //                   <span>Read More</span>
// // //                   <motion.span
// // //                     animate={{ 
// // //                       x: [0, 5, 0],
// // //                     }}
// // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // //                   >
// // //                     <ChevronRight className="h-4 w-4" />
// // //                   </motion.span>
// // //                 </motion.div>
// // //               </div>

// // //               {/* Animated border glow */}
// // //               <motion.div
// // //                 className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0"
// // //                 whileHover={{
// // //                   background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
// // //                   transition: { duration: 0.3 }
// // //                 }}
// // //               />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Bottom CTA with enhanced animation */}
// // //         <motion.div 
// // //           className="text-center mt-10"
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.2 }}
// // //           viewport={{ once: true }}
// // //         >
// // //           <motion.a
// // //             href="#contact"
// // //             whileHover={{ 
// // //               scale: 1.05,
// // //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // //               y: -3
// // //             }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm"
// // //           >
// // //             Ready to Start Your Project?
// // //             <motion.span
// // //               animate={{ x: [0, 6, 0] }}
// // //               transition={{ duration: 1.5, repeat: Infinity }}
// // //             >
// // //               <ChevronRight className="h-4 w-4" />
// // //             </motion.span>
// // //           </motion.a>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;






// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { ChevronRight, Lightbulb, Target, Shield, Rocket } from 'lucide-react';
// // // import AnimatedSection from './AnimatedSection';

// // // const HowWeWorkSection = () => {
// // //   const processSteps = [
// // //     {
// // //       number: '01',
// // //       title: 'Idea & Concept',
// // //       description: 'We start with your vision, transforming ideas into innovative technology solutions that drive real impact.',
// // //       icon: Lightbulb,
// // //       gradient: 'from-yellow-400 to-orange-500',
// // //       link: '/services/cognitive'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Market Research',
// // //       description: 'Deep market analysis to identify opportunities and drive strategic decisions for sustainable growth.',
// // //       icon: Target,
// // //       gradient: 'from-blue-400 to-cyan-500',
// // //       link: '/services/digital'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Support & Secure',
// // //       description: 'Comprehensive support and security to protect and grow your business value with confidence.',
// // //       icon: Shield,
// // //       gradient: 'from-green-400 to-emerald-500',
// // //       link: '/services/it'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Launch & Grow',
// // //       description: 'Seamless launch and continuous growth strategies for long-term success and market leadership.',
// // //       icon: Rocket,
// // //       gradient: 'from-purple-400 to-pink-500',
// // //       link: '/contact'
// // //     }
// // //   ];

// // //   // Animation variants for staggered children
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
// // //     hidden: { opacity: 0, y: 50 },
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
// // //     <section id="how-we-work" className="relative py-20 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // //       {/* Animated background elements */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, -50, 50, 0],
// // //             y: [0, 50, -50, 0],
// // //             scale: [1, 1.2, 0.8, 1]
// // //           }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, 50, -50, 0],
// // //             y: [0, -50, 50, 0],
// // //             scale: [1, 0.8, 1.2, 1]
// // //           }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
// // //         <AnimatedSection className="text-center mb-12">
// // //           <motion.span 
// // //             className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 inline-block"
// // //             whileHover={{ scale: 1.05 }}
// // //             animate={{ 
// // //               y: [0, -3, 0],
// // //             }}
// // //             transition={{ duration: 2, repeat: Infinity }}
// // //           >
// // //             How We Work
// // //           </motion.span>
// // //           <motion.h2 
// // //             className="text-4xl md:text-5xl font-bold text-white mt-4"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //           >
// // //             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Simple Process</span>
// // //           </motion.h2>
// // //           <motion.p 
// // //             className="text-blue-200/80 mt-3 max-w-2xl mx-auto text-base"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.3 }}
// // //           >
// // //             We follow a systematic approach to deliver exceptional results for your business
// // //           </motion.p>
// // //         </AnimatedSection>
        
// // //         <motion.div 
// // //           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.2 }}
// // //         >
// // //           {processSteps.map((step, index) => (
// // //             <motion.div
// // //               key={index}
// // //               variants={itemVariants}
// // //               whileHover={{ 
// // //                 y: -8,
// // //                 scale: 1.02,
// // //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// // //               }}
// // //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-[40px] p-6 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden cursor-pointer"
// // //             >
// // //               {/* Animated number background */}
// // //               <motion.div 
// // //                 className={`absolute top-0 right-0 text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity ${step.gradient}`}
// // //                 animate={{ 
// // //                   scale: [1, 1.1, 1],
// // //                   rotate: [0, 5, -5, 0]
// // //                 }}
// // //                 transition={{ duration: 8, repeat: Infinity }}
// // //               >
// // //                 {step.number}
// // //               </motion.div>
              
// // //               <div className="relative z-10">
// // //                 <motion.div 
// // //                   className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-[16px] flex items-center justify-center mb-4 shadow-lg`}
// // //                   whileHover={{ 
// // //                     scale: 1.15, 
// // //                     rotate: 10,
// // //                     transition: { duration: 0.3 }
// // //                   }}
// // //                 >
// // //                   <step.icon className="h-7 w-7 text-white" />
// // //                 </motion.div>
                
// // //                 <motion.h3 
// // //                   className="text-lg font-bold text-white mb-2"
// // //                   whileHover={{ x: 5 }}
// // //                 >
// // //                   {step.title}
// // //                 </motion.h3>
                
// // //                 <p className="text-blue-200/70 text-sm leading-relaxed">{step.description}</p>
                
// // //                 {/* ===== READ MORE WITH ARROW - HOVER PAR SHOW ===== */}
// // //                 <motion.div 
// // //                   className="mt-3 flex items-center gap-2 text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
// // //                   initial={{ x: -10 }}
// // //                   whileHover={{ x: 0 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 >
// // //                   <span>Read More</span>
// // //                   <motion.span
// // //                     animate={{ 
// // //                       x: [0, 5, 0],
// // //                     }}
// // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // //                   >
// // //                     <ChevronRight className="h-4 w-4" />
// // //                   </motion.span>
// // //                 </motion.div>
// // //               </div>

// // //               {/* Animated border glow */}
// // //               <motion.div
// // //                 className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0"
// // //                 whileHover={{
// // //                   background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
// // //                   transition: { duration: 0.3 }
// // //                 }}
// // //               />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Bottom CTA with enhanced animation */}
// // //         <motion.div 
// // //           className="text-center mt-10"
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.2 }}
// // //           viewport={{ once: true }}
// // //         >
// // //           <motion.a
// // //             href="#contact"
// // //             whileHover={{ 
// // //               scale: 1.05,
// // //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // //               y: -3
// // //             }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm"
// // //           >
// // //             Ready to Start Your Project?
// // //             <motion.span
// // //               animate={{ x: [0, 6, 0] }}
// // //               transition={{ duration: 1.5, repeat: Infinity }}
// // //             >
// // //               <ChevronRight className="h-4 w-4" />
// // //             </motion.span>
// // //           </motion.a>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;




// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { ChevronRight, Lightbulb, Target, Shield, Rocket } from 'lucide-react';
// // // import AnimatedSection from './AnimatedSection';

// // // const HowWeWorkSection = () => {
// // //   const processSteps = [
// // //     {
// // //       number: '01',
// // //       title: 'Idea & Concept',
// // //       description: 'We start with your vision, transforming ideas into innovative technology solutions that drive real impact.',
// // //       icon: Lightbulb,
// // //       gradient: 'from-yellow-400 to-orange-500',
// // //       link: '/services/cognitive'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Market Research',
// // //       description: 'Deep market analysis to identify opportunities and drive strategic decisions for sustainable growth.',
// // //       icon: Target,
// // //       gradient: 'from-blue-400 to-cyan-500',
// // //       link: '/services/digital'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Support & Secure',
// // //       description: 'Comprehensive support and security to protect and grow your business value with confidence.',
// // //       icon: Shield,
// // //       gradient: 'from-green-400 to-emerald-500',
// // //       link: '/services/it'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Launch & Grow',
// // //       description: 'Seamless launch and continuous growth strategies for long-term success and market leadership.',
// // //       icon: Rocket,
// // //       gradient: 'from-purple-400 to-pink-500',
// // //       link: '/contact'
// // //     }
// // //   ];

// // //   // Animation variants for staggered children
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
// // //     hidden: { opacity: 0, y: 50 },
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
// // //     <section id="how-we-work" className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // //       {/* Animated background elements */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -left-40 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, -50, 50, 0],
// // //             y: [0, 50, -50, 0],
// // //             scale: [1, 1.2, 0.8, 1]
// // //           }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -right-40 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, 50, -50, 0],
// // //             y: [0, -50, 50, 0],
// // //             scale: [1, 0.8, 1.2, 1]
// // //           }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
// // //         <AnimatedSection className="text-center mb-12 sm:mb-14 md:mb-16">
// // //           <motion.span 
// // //             className="text-blue-400 font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full border border-blue-500/20 inline-block"
// // //             whileHover={{ scale: 1.05 }}
// // //             animate={{ 
// // //               y: [0, -3, 0],
// // //             }}
// // //             transition={{ duration: 2, repeat: Infinity }}
// // //           >
// // //             How We Work
// // //           </motion.span>
// // //           <motion.h2 
// // //             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 sm:mt-5 leading-[1.15]"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //           >
// // //             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Simple Process</span>
// // //           </motion.h2>
// // //           <motion.p 
// // //             className="text-blue-200/80 mt-3 max-w-2xl mx-auto text-sm sm:text-base"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.3 }}
// // //           >
// // //             We follow a systematic approach to deliver exceptional results for your business
// // //           </motion.p>
// // //         </AnimatedSection>
        
// // //         <motion.div 
// // //           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.2 }}
// // //         >
// // //           {processSteps.map((step, index) => (
// // //             <motion.div
// // //               key={index}
// // //               variants={itemVariants}
// // //               whileHover={{ 
// // //                 y: -8,
// // //                 scale: 1.02,
// // //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// // //               }}
// // //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-[32px] sm:rounded-[40px] p-5 sm:p-6 lg:p-7 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden cursor-pointer"
// // //             >
// // //               {/* Animated number background */}
// // //               <motion.div 
// // //                 className={`absolute top-0 right-0 text-6xl sm:text-7xl lg:text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity ${step.gradient}`}
// // //                 animate={{ 
// // //                   scale: [1, 1.1, 1],
// // //                   rotate: [0, 5, -5, 0]
// // //                 }}
// // //                 transition={{ duration: 8, repeat: Infinity }}
// // //               >
// // //                 {step.number}
// // //               </motion.div>
              
// // //               <div className="relative z-10">
// // //                 <motion.div 
// // //                   className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${step.gradient} rounded-[14px] sm:rounded-[16px] flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
// // //                   whileHover={{ 
// // //                     scale: 1.15, 
// // //                     rotate: 10,
// // //                     transition: { duration: 0.3 }
// // //                   }}
// // //                 >
// // //                   <step.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
// // //                 </motion.div>
                
// // //                 <motion.h3 
// // //                   className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2"
// // //                   whileHover={{ x: 5 }}
// // //                 >
// // //                   {step.title}
// // //                 </motion.h3>
                
// // //                 <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                
// // //                 {/* ===== READ MORE WITH ARROW - HOVER PAR SHOW ===== */}
// // //                 <motion.a
// // //                   href={step.link}
// // //                   className="mt-3 flex items-center gap-2 text-blue-400 font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
// // //                   initial={{ x: -10 }}
// // //                   whileHover={{ x: 0 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 >
// // //                   <span>Read More</span>
// // //                   <motion.span
// // //                     animate={{ 
// // //                       x: [0, 5, 0],
// // //                     }}
// // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // //                   >
// // //                     <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
// // //                   </motion.span>
// // //                 </motion.a>
// // //               </div>

// // //               {/* Animated border glow */}
// // //               <motion.div
// // //                 className="absolute inset-0 rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0"
// // //                 whileHover={{
// // //                   background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(147,51,234,0.08))",
// // //                   transition: { duration: 0.3 }
// // //                 }}
// // //               />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Bottom CTA with enhanced animation */}
// // //         <motion.div 
// // //           className="text-center mt-10 sm:mt-12 md:mt-14"
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.2 }}
// // //           viewport={{ once: true }}
// // //         >
// // //           <motion.a
// // //             href="/contact"
// // //             whileHover={{ 
// // //               scale: 1.05,
// // //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // //               y: -3
// // //             }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-xs sm:text-sm md:text-base"
// // //           >
// // //             Ready to Start Your Project?
// // //             <motion.span
// // //               animate={{ x: [0, 6, 0] }}
// // //               transition={{ duration: 1.5, repeat: Infinity }}
// // //             >
// // //               <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
// // //             </motion.span>
// // //           </motion.a>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;









// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { ChevronRight, Lightbulb, Target, Shield, Rocket } from 'lucide-react';
// // // import AnimatedSection from './AnimatedSection';

// // // const HowWeWorkSection = () => {
// // //   const processSteps = [
// // //     {
// // //       number: '01',
// // //       title: 'Idea & Concept',
// // //       description: 'We start with your vision, transforming ideas into innovative technology solutions that drive real impact.',
// // //       icon: Lightbulb,
// // //       gradient: 'from-yellow-400 to-orange-500',
// // //       link: '/services/cognitive'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Market Research',
// // //       description: 'Deep market analysis to identify opportunities and drive strategic decisions for sustainable growth.',
// // //       icon: Target,
// // //       gradient: 'from-blue-400 to-cyan-500',
// // //       link: '/services/digital'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Support & Secure',
// // //       description: 'Comprehensive support and security to protect and grow your business value with confidence.',
// // //       icon: Shield,
// // //       gradient: 'from-green-400 to-emerald-500',
// // //       link: '/services/it'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Launch & Grow',
// // //       description: 'Seamless launch and continuous growth strategies for long-term success and market leadership.',
// // //       icon: Rocket,
// // //       gradient: 'from-purple-400 to-pink-500',
// // //       link: '/contact'
// // //     }
// // //   ];

// // //   // Animation variants for staggered children
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
// // //     hidden: { opacity: 0, y: 50 },
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
// // //     <section id="how-we-work" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // //       {/* Animated background elements */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -left-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, -50, 50, 0],
// // //             y: [0, 50, -50, 0],
// // //             scale: [1, 1.2, 0.8, 1]
// // //           }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -right-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// // //           animate={{ 
// // //             x: [0, 50, -50, 0],
// // //             y: [0, -50, 50, 0],
// // //             scale: [1, 0.8, 1.2, 1]
// // //           }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
// // //         <AnimatedSection className="text-center mb-8 sm:mb-10 md:mb-12">
// // //           <motion.span 
// // //             className="text-blue-400 font-semibold text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 rounded-full border border-blue-500/20 inline-block"
// // //             whileHover={{ scale: 1.05 }}
// // //             animate={{ 
// // //               y: [0, -3, 0],
// // //             }}
// // //             transition={{ duration: 2, repeat: Infinity }}
// // //           >
// // //             How We Work
// // //           </motion.span>
// // //           <motion.h2 
// // //             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //           >
// // //             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Simple Process</span>
// // //           </motion.h2>
// // //           <motion.p 
// // //             className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.3 }}
// // //           >
// // //             We follow a systematic approach to deliver exceptional results for your business
// // //           </motion.p>
// // //         </AnimatedSection>
        
// // //         <motion.div 
// // //           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.2 }}
// // //         >
// // //           {processSteps.map((step, index) => (
// // //             <motion.div
// // //               key={index}
// // //               variants={itemVariants}
// // //               whileHover={{ 
// // //                 y: -6,
// // //                 scale: 1.02,
// // //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// // //               }}
// // //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 lg:p-6 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden cursor-pointer"
// // //             >
// // //               {/* Animated number background */}
// // //               <motion.div 
// // //                 className={`absolute top-0 right-0 text-5xl sm:text-6xl lg:text-7xl font-bold opacity-5 group-hover:opacity-10 transition-opacity ${step.gradient}`}
// // //                 animate={{ 
// // //                   scale: [1, 1.1, 1],
// // //                   rotate: [0, 5, -5, 0]
// // //                 }}
// // //                 transition={{ duration: 8, repeat: Infinity }}
// // //               >
// // //                 {step.number}
// // //               </motion.div>
              
// // //               <div className="relative z-10">
// // //                 <motion.div 
// // //                   className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.gradient} rounded-[12px] sm:rounded-[14px] flex items-center justify-center mb-2.5 sm:mb-3 shadow-lg`}
// // //                   whileHover={{ 
// // //                     scale: 1.15, 
// // //                     rotate: 10,
// // //                     transition: { duration: 0.3 }
// // //                   }}
// // //                 >
// // //                   <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
// // //                 </motion.div>
                
// // //                 <motion.h3 
// // //                   className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-1.5"
// // //                   whileHover={{ x: 5 }}
// // //                 >
// // //                   {step.title}
// // //                 </motion.h3>
                
// // //                 <p className="text-blue-200/70 text-[10px] sm:text-xs leading-relaxed">{step.description}</p>
                
// // //                 {/* ===== READ MORE WITH ARROW - HOVER PAR SHOW ===== */}
// // //                 <motion.a
// // //                   href={step.link}
// // //                   className="mt-2 flex items-center gap-1.5 text-blue-400 font-medium text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-all duration-300"
// // //                   initial={{ x: -10 }}
// // //                   whileHover={{ x: 0 }}
// // //                   transition={{ duration: 0.3 }}
// // //                 >
// // //                   <span>Read More</span>
// // //                   <motion.span
// // //                     animate={{ 
// // //                       x: [0, 5, 0],
// // //                     }}
// // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // //                   >
// // //                     <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
// // //                   </motion.span>
// // //                 </motion.a>
// // //               </div>

// // //               {/* Animated border glow */}
// // //               <motion.div
// // //                 className="absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0"
// // //                 whileHover={{
// // //                   background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(147,51,234,0.08))",
// // //                   transition: { duration: 0.3 }
// // //                 }}
// // //               />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* Bottom CTA with enhanced animation */}
// // //         <motion.div 
// // //           className="text-center mt-8 sm:mt-10 md:mt-12"
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.2 }}
// // //           viewport={{ once: true }}
// // //         >
// // //           <motion.a
// // //             href="/contact"
// // //             whileHover={{ 
// // //               scale: 1.05,
// // //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // //               y: -3
// // //             }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
// // //           >
// // //             Ready to Start Your Project?
// // //             <motion.span
// // //               animate={{ x: [0, 6, 0] }}
// // //               transition={{ duration: 1.5, repeat: Infinity }}
// // //             >
// // //               <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
// // //             </motion.span>
// // //           </motion.a>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;





// // // import React, { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ChevronRight } from 'lucide-react';

// // // const HowWeWorkSection = () => {
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const [isHovering, setIsHovering] = useState(false);

// // //   const processSteps = [
// // //     {
// // //       number: '05',
// // //       title: 'Monitoring & Growth',
// // //       description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
// // //       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Implementation & Optimization',
// // //       description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
// // //       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Design & Development',
// // //       description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
// // //       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Planning & Strategy',
// // //       description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
// // //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '01',
// // //       title: 'Requirement Analysis',
// // //       description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
// // //       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center'
// // //     }
// // //   ];

// // //   // Auto-play effect
// // //   useEffect(() => {
// // //     if (!isHovering) {
// // //       const interval = setInterval(() => {
// // //         setActiveIndex((prev) => (prev + 1) % processSteps.length);
// // //       }, 3500);
// // //       return () => clearInterval(interval);
// // //     }
// // //   }, [isHovering, processSteps.length]);

// // //   const handleCardClick = (index) => {
// // //     setIsHovering(true);
// // //     setActiveIndex(index);
// // //   };

// // //   const handleCardLeave = () => {
// // //     setIsHovering(false);
// // //   };

// // //   const getVisibleItems = () => {
// // //     const items = [];
// // //     const totalItems = processSteps.length;
// // //     for (let i = 0; i < totalItems; i++) {
// // //       const index = (activeIndex + i) % totalItems;
// // //       items.push({
// // //         ...processSteps[index],
// // //         position: i,
// // //         isActive: i === 0
// // //       });
// // //     }
// // //     return items;
// // //   };

// // //   const visibleItems = getVisibleItems();

// // //   return (
// // //     <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden">
// // //       {/* Animated background */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // //           animate={{ 
// // //             x: [0, 50, -50, 0],
// // //             y: [0, -50, 50, 0],
// // //             scale: [1, 1.2, 0.8, 1]
// // //           }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // //           animate={{ 
// // //             x: [0, -50, 50, 0],
// // //             y: [0, 50, -50, 0],
// // //             scale: [1, 0.8, 1.2, 1]
// // //           }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
// // //           {/* Left Column */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //           >
// // //             <div className="sec-title">
// // //               <motion.span 
// // //                 className="text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30 inline-block"
// // //                 whileHover={{ scale: 1.05 }}
// // //                 animate={{ y: [0, -3, 0] }}
// // //                 transition={{ duration: 2, repeat: Infinity }}
// // //               >
// // //                 How We Work
// // //               </motion.span>

// // //               <motion.h2 
// // //                 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 sm:mt-5 mb-3 sm:mb-4 leading-[1.15]"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.2 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
// // //               </motion.h2>

// // //               <motion.p 
// // //                 className="text-blue-200/80 text-sm sm:text-base leading-relaxed mb-4"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.3 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
// // //               </motion.p>

// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.6, delay: 0.4 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 <motion.a
// // //                   href="/about"
// // //                   whileHover={{ 
// // //                     scale: 1.05,
// // //                     boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// // //                     y: -3
// // //                   }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                   className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-xs sm:text-sm"
// // //                 >
// // //                   Know More About Get Web India
// // //                   <motion.span
// // //                     animate={{ x: [0, 6, 0] }}
// // //                     transition={{ duration: 1.5, repeat: Infinity }}
// // //                   >
// // //                     <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
// // //                   </motion.span>
// // //                 </motion.a>
// // //               </motion.div>
// // //             </div>
// // //           </motion.div>

// // //           {/* Right Column - Bigger Boxes */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             onMouseLeave={handleCardLeave}
// // //             className="relative"
// // //             style={{ minHeight: '650px' }}
// // //           >
// // //             <div className="relative">
// // //               <AnimatePresence mode="popLayout">
// // //                 {visibleItems.map((item, idx) => {
// // //                   const isActive = idx === 0;
// // //                   const stackOffset = idx * 28;
// // //                   const scale = isActive ? 1 : 1 - (idx * 0.06);
// // //                   const opacity = isActive ? 1 : 0.4 - (idx * 0.07);
// // //                   const zIndex = visibleItems.length - idx;

// // //                   return (
// // //                     <motion.div
// // //                       key={item.number}
// // //                       layout
// // //                       initial={{ 
// // //                         opacity: 0,
// // //                         y: 100,
// // //                         scale: 0.9
// // //                       }}
// // //                       animate={{ 
// // //                         opacity: opacity,
// // //                         y: stackOffset,
// // //                         scale: scale,
// // //                         zIndex: zIndex,
// // //                         transition: {
// // //                           duration: 0.8,
// // //                           ease: [0.215, 0.61, 0.355, 1],
// // //                           delay: idx * 0.12
// // //                         }
// // //                       }}
// // //                       exit={{ 
// // //                         opacity: 0,
// // //                         y: -100,
// // //                         scale: 0.8,
// // //                         transition: { duration: 0.4 }
// // //                       }}
// // //                       onClick={() => handleCardClick(
// // //                         processSteps.findIndex(s => s.number === item.number)
// // //                       )}
// // //                       className={`absolute left-0 right-0 cursor-pointer transition-all duration-500 ${
// // //                         isActive ? 'z-50' : 'z-10 hover:z-20'
// // //                       }`}
// // //                       style={{
// // //                         top: 0,
// // //                         transform: `scale(${scale})`,
// // //                         opacity: opacity,
// // //                         zIndex: zIndex
// // //                       }}
// // //                     >
// // //                       <div className={`process-item group bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border transition-all duration-500 ${
// // //                         isActive 
// // //                           ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 bg-white/10' 
// // //                           : 'border-white/10 hover:border-white/20'
// // //                       }`}>
// // //                         {/* Number */}
// // //                         <div className="flex items-center gap-3 mb-4">
// // //                           <span className={`text-3xl sm:text-4xl font-bold ${
// // //                             isActive 
// // //                               ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
// // //                               : 'text-white/30'
// // //                           }`}>
// // //                             {item.number}
// // //                           </span>
// // //                         </div>

// // //                         {/* Bigger Image */}
// // //                         <div className={`rounded-xl overflow-hidden mb-4 transition-all duration-500 ${
// // //                           isActive 
// // //                             ? 'scale-100 opacity-100 shadow-lg shadow-blue-500/20' 
// // //                             : 'scale-95 opacity-40'
// // //                         }`}
// // //                         style={{ 
// // //                           height: isActive ? '300px' : '140px'
// // //                         }}>
// // //                           <img 
// // //                             src={item.image} 
// // //                             alt={item.title}
// // //                             className="w-full h-full object-cover"
// // //                           />
// // //                         </div>

// // //                         {/* Bigger Title */}
// // //                         <h3 className={`text-xl sm:text-2xl font-bold mb-2 transition-all duration-500 ${
// // //                           isActive ? 'text-white' : 'text-white/40'
// // //                         }`}>
// // //                           {item.title}
// // //                         </h3>

// // //                         {/* Bigger Description */}
// // //                         {isActive && (
// // //                           <motion.p 
// // //                             initial={{ opacity: 0, y: 10 }}
// // //                             animate={{ opacity: 1, y: 0 }}
// // //                             transition={{ duration: 0.5, delay: 0.2 }}
// // //                             className="text-blue-200/80 text-base sm:text-lg leading-relaxed"
// // //                           >
// // //                             {item.description}
// // //                           </motion.p>
// // //                         )}

// // //                         {/* Active Indicator Line */}
// // //                         {isActive && (
// // //                           <motion.div 
// // //                             className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
// // //                             initial={{ width: '0%' }}
// // //                             animate={{ width: '100%' }}
// // //                             transition={{ duration: 0.6 }}
// // //                           />
// // //                         )}
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </AnimatePresence>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;




// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ChevronRight } from 'lucide-react';

// // // const HowWeWorkSection = () => {
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const sectionRef = useRef(null);
// // //   const isLockedRef = useRef(false);
// // //   const wheelTimeoutRef = useRef(null);

// // //   const processSteps = [
// // //     {
// // //       number: '05',
// // //       title: 'Monitoring & Growth',
// // //       description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
// // //       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Implementation & Optimization',
// // //       description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
// // //       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Design & Development',
// // //       description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
// // //       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Planning & Strategy',
// // //       description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
// // //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '01',
// // //       title: 'Requirement Analysis',
// // //       description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
// // //       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop&crop=center'
// // //     }
// // //   ];

// // //   // Scroll lock/unlock functions
// // //   const lockPageScroll = () => {
// // //     if (window.innerWidth < 1024) return;
// // //     if (!isLockedRef.current) {
// // //       isLockedRef.current = true;
// // //       document.body.style.overflow = 'hidden';
// // //       document.documentElement.style.overflow = 'hidden';
// // //     }
// // //   };

// // //   const unlockPageScroll = () => {
// // //     isLockedRef.current = false;
// // //     document.body.style.overflow = '';
// // //     document.documentElement.style.overflow = '';
// // //   };

// // //   // Check if section is in view
// // //   const isSectionInView = () => {
// // //     const section = sectionRef.current;
// // //     if (!section) return false;
// // //     const rect = section.getBoundingClientRect();
// // //     return rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
// // //   };

// // //   // Mouse wheel functionality - exactly like recording
// // //   useEffect(() => {
// // //     const handleWheel = (event) => {
// // //       // Desktop only
// // //       if (window.innerWidth < 1024) return;
      
// // //       // Only work when section is visible
// // //       if (!isSectionInView()) {
// // //         if (isLockedRef.current) unlockPageScroll();
// // //         return;
// // //       }

// // //       const section = sectionRef.current;
// // //       if (!section) return;

// // //       // Check if mouse is over the workflow section
// // //       const rect = section.getBoundingClientRect();
// // //       const mouseInsideSection = event.clientX >= rect.left && event.clientX <= rect.right &&
// // //         event.clientY >= rect.top && event.clientY <= rect.bottom;

// // //       if (!mouseInsideSection) return;
// // //       if (wheelTimeoutRef.current) return;

// // //       const direction = event.deltaY > 0 ? 'down' : 'up';

// // //       // Scroll Down - Move to next card
// // //       if (direction === 'down') {
// // //         if (activeIndex < processSteps.length - 1) {
// // //           event.preventDefault();
// // //           lockPageScroll();
// // //           setActiveIndex((prev) => prev + 1);
// // //           wheelTimeoutRef.current = setTimeout(() => {
// // //             wheelTimeoutRef.current = null;
// // //           }, 800);
// // //           return;
// // //         }
// // //         if (activeIndex === processSteps.length - 1) {
// // //           unlockPageScroll();
// // //           return;
// // //         }
// // //       }

// // //       // Scroll Up - Move to previous card
// // //       if (direction === 'up') {
// // //         if (activeIndex > 0) {
// // //           event.preventDefault();
// // //           lockPageScroll();
// // //           setActiveIndex((prev) => prev - 1);
// // //           wheelTimeoutRef.current = setTimeout(() => {
// // //             wheelTimeoutRef.current = null;
// // //           }, 800);
// // //           return;
// // //         }
// // //         if (activeIndex === 0) {
// // //           unlockPageScroll();
// // //           return;
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener('wheel', handleWheel, { passive: false });
// // //     return () => {
// // //       window.removeEventListener('wheel', handleWheel);
// // //       if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
// // //       unlockPageScroll();
// // //     };
// // //   }, [activeIndex, processSteps.length]);

// // //   const handleCardClick = (index) => {
// // //     setActiveIndex(index);
// // //     if (index > 0 && index < processSteps.length - 1) {
// // //       lockPageScroll();
// // //     }
// // //   };

// // //   const getVisibleItems = () => {
// // //     const items = [];
// // //     const totalItems = processSteps.length;
// // //     for (let i = 0; i < totalItems; i++) {
// // //       const index = (activeIndex + i) % totalItems;
// // //       items.push({
// // //         ...processSteps[index],
// // //         position: i,
// // //         isActive: i === 0
// // //       });
// // //     }
// // //     return items;
// // //   };

// // //   const visibleItems = getVisibleItems();

// // //   return (
// // //     <section
// // //       ref={sectionRef}
// // //       className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden"
// // //       style={{ minHeight: '100vh' }}
// // //     >
// // //       {/* Background */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

// // //           {/* Left Column */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             className="lg:sticky lg:top-24"
// // //           >
// // //             <div className="sec-title">
// // //               <motion.span
// // //                 className="text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30 inline-block"
// // //                 whileHover={{ scale: 1.05 }}
// // //               >
// // //                 How We Work
// // //               </motion.span>

// // //               <motion.h2
// // //                 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 sm:mt-5 mb-4 leading-[1.15]"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.2 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
// // //               </motion.h2>

// // //               <motion.p
// // //                 className="text-blue-200/80 text-sm sm:text-base leading-relaxed mb-6"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.3 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
// // //               </motion.p>

// // //               <motion.a
// // //                 href="/about"
// // //                 whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99,102,241,0.3)', y: -3 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm"
// // //               >
// // //                 Know More About Get Web India
// // //                 <ChevronRight className="h-4 w-4" />
// // //               </motion.a>

// // //               {/* Progress Indicator */}
// // //               <div className="mt-6 flex gap-2">
// // //                 {processSteps.map((_, idx) => (
// // //                   <div
// // //                     key={idx}
// // //                     className={`h-1 rounded-full transition-all duration-700 ${
// // //                       idx <= activeIndex
// // //                         ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
// // //                         : 'w-4 bg-white/20'
// // //                     }`}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* Right Column - Stacked Cards Exactly Like Recording */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             className="relative"
// // //             style={{ minHeight: '600px' }}
// // //           >
// // //             {/* Scroll Hint */}
// // //             <div className="hidden lg:block absolute -top-8 right-2 z-[60] text-xs text-blue-300/60">
// // //               Scroll over cards ↑ ↓
// // //             </div>

// // //             <div className="relative">
// // //               <AnimatePresence mode="wait">
// // //                 {visibleItems.map((item, idx) => {
// // //                   const isActive = idx === 0;
// // //                   // Each card moves down by 25px
// // //                   const yOffset = idx * 25;
// // //                   // Scale: active = 1, next = 0.95, then 0.90, etc.
// // //                   const scale = isActive ? 1 : Math.max(0.85, 1 - (idx * 0.045));
// // //                   // Opacity: active = 1, next = 0.7, then decreasing
// // //                   const opacity = isActive ? 1 : Math.max(0.2, 0.7 - (idx * 0.12));
// // //                   // zIndex: highest for active
// // //                   const zIndex = visibleItems.length - idx;

// // //                   return (
// // //                     <motion.div
// // //                       key={item.number}
// // //                       layout
// // //                       initial={{ opacity: 0, y: 60, scale: 0.9 }}
// // //                       animate={{ 
// // //                         opacity: opacity,
// // //                         y: yOffset,
// // //                         scale: scale,
// // //                         zIndex: zIndex
// // //                       }}
// // //                       exit={{ 
// // //                         opacity: 0, 
// // //                         y: -60, 
// // //                         scale: 0.8,
// // //                         transition: { duration: 0.3 }
// // //                       }}
// // //                       transition={{ 
// // //                         duration: 0.6,
// // //                         ease: [0.25, 0.1, 0.25, 1],
// // //                         delay: idx * 0.05
// // //                       }}
// // //                       onClick={() => handleCardClick(processSteps.findIndex(step => step.number === item.number))}
// // //                       className="absolute left-0 right-0 cursor-pointer"
// // //                       style={{ 
// // //                         top: 0,
// // //                         zIndex: zIndex
// // //                       }}
// // //                     >
// // //                       <div className={`process-item group backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-7 border transition-all duration-300 ${
// // //                         isActive
// // //                           ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 bg-white/10'
// // //                           : 'border-white/10 bg-white/5 hover:border-white/20'
// // //                       }`}>
// // //                         {/* Number - Centered */}
// // //                         <div className="flex items-center justify-center mb-3">
// // //                           <span className={`text-3xl sm:text-4xl font-bold ${
// // //                             isActive
// // //                               ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
// // //                               : 'text-white/30'
// // //                           }`}>
// // //                             {item.number}
// // //                           </span>
// // //                         </div>

// // //                         {/* Image */}
// // //                         <div
// // //                           className={`rounded-xl overflow-hidden mb-4 mx-auto transition-all duration-300 ${
// // //                             isActive ? 'opacity-100 shadow-lg shadow-blue-500/20' : 'opacity-30'
// // //                           }`}
// // //                           style={{ 
// // //                             height: isActive ? '280px' : '120px',
// // //                             maxWidth: isActive ? '100%' : '90%'
// // //                           }}
// // //                         >
// // //                           <img 
// // //                             src={item.image} 
// // //                             alt={item.title} 
// // //                             className="w-full h-full object-cover"
// // //                           />
// // //                         </div>

// // //                         {/* Title - Centered */}
// // //                         <h3 className={`text-center text-lg sm:text-xl font-bold mb-2 transition-all duration-300 ${
// // //                           isActive ? 'text-white' : 'text-white/40'
// // //                         }`}>
// // //                           {item.title}
// // //                         </h3>

// // //                         {/* Description - Only visible on active card */}
// // //                         {isActive && (
// // //                           <motion.p
// // //                             initial={{ opacity: 0, y: 10 }}
// // //                             animate={{ opacity: 1, y: 0 }}
// // //                             transition={{ duration: 0.5, delay: 0.1 }}
// // //                             className="text-center text-blue-200/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
// // //                           >
// // //                             {item.description}
// // //                           </motion.p>
// // //                         )}

// // //                         {/* Active Line */}
// // //                         {isActive && (
// // //                           <motion.div
// // //                             className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
// // //                             initial={{ width: '0%' }}
// // //                             animate={{ width: '80%' }}
// // //                             transition={{ duration: 0.6 }}
// // //                           />
// // //                         )}
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </AnimatePresence>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;







// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ChevronRight } from 'lucide-react';

// // // const HowWeWorkSection = () => {
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const sectionRef = useRef(null);
// // //   const isLockedRef = useRef(false);
// // //   const wheelTimeoutRef = useRef(null);
// // //   const [isHovering, setIsHovering] = useState(false);

// // //   const processSteps = [
// // //     {
// // //       number: '05',
// // //       title: 'Monitoring & Growth',
// // //       description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
// // //       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Implementation & Optimization',
// // //       description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
// // //       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Design & Development',
// // //       description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
// // //       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Planning & Strategy',
// // //       description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
// // //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '01',
// // //       title: 'Requirement Analysis',
// // //       description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
// // //       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop&crop=center'
// // //     }
// // //   ];

// // //   // Lock page scroll
// // //   const lockPageScroll = () => {
// // //     if (window.innerWidth < 1024) return;
// // //     if (!isLockedRef.current) {
// // //       isLockedRef.current = true;
// // //       document.body.style.overflow = 'hidden';
// // //       document.documentElement.style.overflow = 'hidden';
// // //     }
// // //   };

// // //   // Unlock page scroll
// // //   const unlockPageScroll = () => {
// // //     isLockedRef.current = false;
// // //     document.body.style.overflow = '';
// // //     document.documentElement.style.overflow = '';
// // //   };

// // //   // Mouse wheel functionality
// // //   useEffect(() => {
// // //     const handleWheel = (event) => {
// // //       // Desktop only
// // //       if (window.innerWidth < 1024) return;

// // //       const section = sectionRef.current;
// // //       if (!section) return;

// // //       const rect = section.getBoundingClientRect();
      
// // //       // Check if mouse is over the workflow section
// // //       const mouseInsideSection = 
// // //         event.clientX >= rect.left && 
// // //         event.clientX <= rect.right &&
// // //         event.clientY >= rect.top && 
// // //         event.clientY <= rect.bottom;

// // //       // If mouse is NOT inside section, unlock scroll and return
// // //       if (!mouseInsideSection) {
// // //         if (isLockedRef.current) {
// // //           unlockPageScroll();
// // //         }
// // //         return;
// // //       }

// // //       // If wheel timeout is active, ignore
// // //       if (wheelTimeoutRef.current) return;

// // //       const direction = event.deltaY > 0 ? 'down' : 'up';

// // //       // --- SCROLL DOWN ---
// // //       if (direction === 'down') {
// // //         // If not at last card, move to next and lock scroll
// // //         if (activeIndex < processSteps.length - 1) {
// // //           event.preventDefault();
// // //           lockPageScroll();
// // //           setActiveIndex((prev) => prev + 1);
          
// // //           wheelTimeoutRef.current = setTimeout(() => {
// // //             wheelTimeoutRef.current = null;
// // //           }, 600);
// // //           return;
// // //         }
        
// // //         // If at last card, unlock scroll so page can scroll down
// // //         if (activeIndex === processSteps.length - 1) {
// // //           unlockPageScroll();
// // //           return;
// // //         }
// // //       }

// // //       // --- SCROLL UP ---
// // //       if (direction === 'up') {
// // //         // If not at first card, move to previous and lock scroll
// // //         if (activeIndex > 0) {
// // //           event.preventDefault();
// // //           lockPageScroll();
// // //           setActiveIndex((prev) => prev - 1);
          
// // //           wheelTimeoutRef.current = setTimeout(() => {
// // //             wheelTimeoutRef.current = null;
// // //           }, 600);
// // //           return;
// // //         }
        
// // //         // If at first card, unlock scroll so page can scroll up
// // //         if (activeIndex === 0) {
// // //           unlockPageScroll();
// // //           return;
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener('wheel', handleWheel, { passive: false });
    
// // //     return () => {
// // //       window.removeEventListener('wheel', handleWheel);
// // //       if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
// // //       unlockPageScroll();
// // //     };
// // //   }, [activeIndex, processSteps.length]);

// // //   const handleCardClick = (index) => {
// // //     setActiveIndex(index);
// // //   };

// // //   const handleCardHover = (index) => {
// // //     setIsHovering(true);
// // //     setActiveIndex(index);
// // //   };

// // //   const handleCardLeave = () => {
// // //     setIsHovering(false);
// // //   };

// // //   const getVisibleItems = () => {
// // //     const items = [];
// // //     const totalItems = processSteps.length;
// // //     for (let i = 0; i < totalItems; i++) {
// // //       const index = (activeIndex + i) % totalItems;
// // //       items.push({
// // //         ...processSteps[index],
// // //         position: i,
// // //         isActive: i === 0
// // //       });
// // //     }
// // //     return items;
// // //   };

// // //   const visibleItems = getVisibleItems();

// // //   return (
// // //     <section
// // //       ref={sectionRef}
// // //       className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden"
// // //       style={{ minHeight: '100vh' }}
// // //     >
// // //       {/* Background */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

// // //           {/* Left Column */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             className="lg:sticky lg:top-24"
// // //           >
// // //             <div className="sec-title">
// // //               <motion.span
// // //                 className="text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30 inline-block"
// // //                 whileHover={{ scale: 1.05 }}
// // //               >
// // //                 How We Work
// // //               </motion.span>

// // //               <motion.h2
// // //                 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 sm:mt-5 mb-4 leading-[1.15]"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.2 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
// // //               </motion.h2>

// // //               <motion.p
// // //                 className="text-blue-200/80 text-sm sm:text-base leading-relaxed mb-6"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.3 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
// // //               </motion.p>

// // //               <motion.a
// // //                 href="/about"
// // //                 whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99,102,241,0.3)', y: -3 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm"
// // //               >
// // //                 Know More About Get Web India
// // //                 <ChevronRight className="h-4 w-4" />
// // //               </motion.a>

// // //               {/* Progress Indicator */}
// // //               <div className="mt-6 flex gap-2">
// // //                 {processSteps.map((_, idx) => (
// // //                   <div
// // //                     key={idx}
// // //                     className={`h-1 rounded-full transition-all duration-700 ${
// // //                       idx === activeIndex
// // //                         ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
// // //                         : 'w-4 bg-white/20'
// // //                     }`}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* Right Column - Stacked Cards */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             onMouseLeave={handleCardLeave}
// // //             className="relative"
// // //             style={{ minHeight: '600px' }}
// // //           >
// // //             {/* Scroll Hint */}
// // //             <div className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 z-[60] text-xs text-blue-300/60 bg-black/40 px-3 py-1 rounded-full">
// // //               Scroll over cards ↑ ↓
// // //             </div>

// // //             <div className="relative" style={{ marginTop: '30px' }}>
// // //               <AnimatePresence mode="wait">
// // //                 {visibleItems.map((item, idx) => {
// // //                   const isActive = idx === 0;
// // //                   const yOffset = idx * 25;
// // //                   const scale = isActive ? 1 : Math.max(0.85, 1 - (idx * 0.045));
// // //                   const opacity = isActive ? 1 : Math.max(0.2, 0.7 - (idx * 0.12));
// // //                   const zIndex = visibleItems.length - idx;

// // //                   return (
// // //                     <motion.div
// // //                       key={item.number}
// // //                       layout
// // //                       initial={{ opacity: 0, y: 60, scale: 0.9 }}
// // //                       animate={{ 
// // //                         opacity: opacity,
// // //                         y: yOffset,
// // //                         scale: scale,
// // //                         zIndex: zIndex
// // //                       }}
// // //                       exit={{ 
// // //                         opacity: 0, 
// // //                         y: -60, 
// // //                         scale: 0.8,
// // //                         transition: { duration: 0.3 }
// // //                       }}
// // //                       transition={{ 
// // //                         duration: 0.6,
// // //                         ease: [0.25, 0.1, 0.25, 1],
// // //                         delay: idx * 0.05
// // //                       }}
// // //                       onMouseEnter={() => handleCardHover(idx)}
// // //                       onClick={() => handleCardClick(idx)}
// // //                       className="absolute left-0 right-0 cursor-pointer"
// // //                       style={{ 
// // //                         top: 0,
// // //                         zIndex: zIndex
// // //                       }}
// // //                     >
// // //                       <div className={`process-item group backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-7 border transition-all duration-300 ${
// // //                         isActive
// // //                           ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 bg-white/10'
// // //                           : 'border-white/10 bg-white/5 hover:border-white/20'
// // //                       }`}>
// // //                         {/* Number - Centered */}
// // //                         <div className="flex items-center justify-center mb-3">
// // //                           <span className={`text-3xl sm:text-4xl font-bold ${
// // //                             isActive
// // //                               ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
// // //                               : 'text-white/30'
// // //                           }`}>
// // //                             {item.number}
// // //                           </span>
// // //                         </div>

// // //                         {/* Image */}
// // //                         <div
// // //                           className={`rounded-xl overflow-hidden mb-4 mx-auto transition-all duration-300 ${
// // //                             isActive ? 'opacity-100 shadow-lg shadow-blue-500/20' : 'opacity-30'
// // //                           }`}
// // //                           style={{ 
// // //                             height: isActive ? '280px' : '120px',
// // //                             maxWidth: isActive ? '100%' : '90%'
// // //                           }}
// // //                         >
// // //                           <img 
// // //                             src={item.image} 
// // //                             alt={item.title} 
// // //                             className="w-full h-full object-cover"
// // //                           />
// // //                         </div>

// // //                         {/* Title - Centered */}
// // //                         <h3 className={`text-center text-lg sm:text-xl font-bold mb-2 transition-all duration-300 ${
// // //                           isActive ? 'text-white' : 'text-white/40'
// // //                         }`}>
// // //                           {item.title}
// // //                         </h3>

// // //                         {/* Description - Only visible on active card */}
// // //                         {isActive && (
// // //                           <motion.p
// // //                             initial={{ opacity: 0, y: 10 }}
// // //                             animate={{ opacity: 1, y: 0 }}
// // //                             transition={{ duration: 0.5, delay: 0.1 }}
// // //                             className="text-center text-blue-200/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
// // //                           >
// // //                             {item.description}
// // //                           </motion.p>
// // //                         )}

// // //                         {/* Active Line */}
// // //                         {isActive && (
// // //                           <motion.div
// // //                             className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
// // //                             initial={{ width: '0%' }}
// // //                             animate={{ width: '80%' }}
// // //                             transition={{ duration: 0.6 }}
// // //                           />
// // //                         )}
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </AnimatePresence>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;







// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { ChevronRight } from 'lucide-react';

// // // const HowWeWorkSection = () => {
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const sectionRef = useRef(null);
// // //   const isLockedRef = useRef(false);
// // //   const wheelTimeoutRef = useRef(null);

// // //   const processSteps = [
// // //     {
// // //       number: '05',
// // //       title: 'Monitoring & Growth',
// // //       description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
// // //       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '04',
// // //       title: 'Implementation & Optimization',
// // //       description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
// // //       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '03',
// // //       title: 'Design & Development',
// // //       description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
// // //       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '02',
// // //       title: 'Planning & Strategy',
// // //       description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
// // //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center'
// // //     },
// // //     {
// // //       number: '01',
// // //       title: 'Requirement Analysis',
// // //       description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
// // //       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop&crop=center'
// // //     }
// // //   ];

// // //   // Lock page scroll
// // //   const lockPageScroll = () => {
// // //     if (window.innerWidth < 1024) return;
// // //     if (!isLockedRef.current) {
// // //       isLockedRef.current = true;
// // //       document.body.style.overflow = 'hidden';
// // //       document.documentElement.style.overflow = 'hidden';
// // //     }
// // //   };

// // //   // Unlock page scroll
// // //   const unlockPageScroll = () => {
// // //     isLockedRef.current = false;
// // //     document.body.style.overflow = '';
// // //     document.documentElement.style.overflow = '';
// // //   };

// // //   // Mouse wheel functionality
// // //   useEffect(() => {
// // //     const handleWheel = (event) => {
// // //       // Desktop only
// // //       if (window.innerWidth < 1024) return;

// // //       const section = sectionRef.current;
// // //       if (!section) return;

// // //       const rect = section.getBoundingClientRect();
      
// // //       // Check if mouse is over the workflow section
// // //       const mouseInsideSection = 
// // //         event.clientX >= rect.left && 
// // //         event.clientX <= rect.right &&
// // //         event.clientY >= rect.top && 
// // //         event.clientY <= rect.bottom;

// // //       // If mouse is NOT inside section, unlock scroll and return
// // //       if (!mouseInsideSection) {
// // //         if (isLockedRef.current) {
// // //           unlockPageScroll();
// // //         }
// // //         return;
// // //       }

// // //       // If wheel timeout is active, ignore
// // //       if (wheelTimeoutRef.current) return;

// // //       const direction = event.deltaY > 0 ? 'down' : 'up';

// // //       console.log('Direction:', direction, 'ActiveIndex:', activeIndex); // Debug log

// // //       // --- SCROLL DOWN ---
// // //       if (direction === 'down') {
// // //         // If not at last card, move to next and lock scroll
// // //         if (activeIndex < processSteps.length - 1) {
// // //           event.preventDefault();
// // //           lockPageScroll();
// // //           setActiveIndex((prev) => {
// // //             console.log('Moving to:', prev + 1);
// // //             return prev + 1;
// // //           });
          
// // //           wheelTimeoutRef.current = setTimeout(() => {
// // //             wheelTimeoutRef.current = null;
// // //           }, 600);
// // //           return;
// // //         }
        
// // //         // If at last card, unlock scroll so page can scroll down
// // //         if (activeIndex === processSteps.length - 1) {
// // //           unlockPageScroll();
// // //           return;
// // //         }
// // //       }

// // //       // --- SCROLL UP ---
// // //       if (direction === 'up') {
// // //         // If not at first card, move to previous and lock scroll
// // //         if (activeIndex > 0) {
// // //           event.preventDefault();
// // //           lockPageScroll();
// // //           setActiveIndex((prev) => {
// // //             console.log('Moving to:', prev - 1);
// // //             return prev - 1;
// // //           });
          
// // //           wheelTimeoutRef.current = setTimeout(() => {
// // //             wheelTimeoutRef.current = null;
// // //           }, 600);
// // //           return;
// // //         }
        
// // //         // If at first card, unlock scroll so page can scroll up
// // //         if (activeIndex === 0) {
// // //           unlockPageScroll();
// // //           return;
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener('wheel', handleWheel, { passive: false });
    
// // //     return () => {
// // //       window.removeEventListener('wheel', handleWheel);
// // //       if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
// // //       unlockPageScroll();
// // //     };
// // //   }, [activeIndex, processSteps.length]);

// // //   const handleCardClick = (index) => {
// // //     setActiveIndex(index);
// // //   };

// // //   const getVisibleItems = () => {
// // //     const items = [];
// // //     const totalItems = processSteps.length;
// // //     for (let i = 0; i < totalItems; i++) {
// // //       const index = (activeIndex + i) % totalItems;
// // //       items.push({
// // //         ...processSteps[index],
// // //         position: i,
// // //         isActive: i === 0
// // //       });
// // //     }
// // //     return items;
// // //   };

// // //   const visibleItems = getVisibleItems();

// // //   return (
// // //     <section
// // //       ref={sectionRef}
// // //       className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden"
// // //       style={{ minHeight: '100vh' }}
// // //     >
// // //       {/* Background */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // //         <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

// // //           {/* Left Column */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             className="lg:sticky lg:top-24"
// // //           >
// // //             <div className="sec-title">
// // //               <motion.span
// // //                 className="text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-500/30 inline-block"
// // //                 whileHover={{ scale: 1.05 }}
// // //               >
// // //                 How We Work
// // //               </motion.span>

// // //               <motion.h2
// // //                 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 sm:mt-5 mb-4 leading-[1.15]"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.2 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
// // //               </motion.h2>

// // //               <motion.p
// // //                 className="text-blue-200/80 text-sm sm:text-base leading-relaxed mb-6"
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.8, delay: 0.3 }}
// // //                 viewport={{ once: true }}
// // //               >
// // //                 At thecoderbox, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
// // //               </motion.p>

// // //               <motion.a
// // //                 href="/about"
// // //                 whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99,102,241,0.3)', y: -3 }}
// // //                 whileTap={{ scale: 0.95 }}
// // //                 className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm"
// // //               >
// // //                 Know More About thecoderbox
// // //                 <ChevronRight className="h-4 w-4" />
// // //               </motion.a>

// // //               {/* Progress Indicator */}
// // //               <div className="mt-6 flex gap-2">
// // //                 {processSteps.map((_, idx) => (
// // //                   <div
// // //                     key={idx}
// // //                     className={`h-1 rounded-full transition-all duration-700 ${
// // //                       idx === activeIndex
// // //                         ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
// // //                         : 'w-4 bg-white/20'
// // //                     }`}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* Right Column - Stacked Cards */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             className="relative"
// // //             style={{ minHeight: '600px' }}
// // //           >
            

// // //             <div className="relative" style={{ marginTop: '30px' }}>
// // //               <AnimatePresence mode="wait">
// // //                 {visibleItems.map((item, idx) => {
// // //                   const isActive = idx === 0;
// // //                   const yOffset = idx * 25;
// // //                   const scale = isActive ? 1 : Math.max(0.85, 1 - (idx * 0.045));
// // //                   const opacity = isActive ? 1 : Math.max(0.2, 0.7 - (idx * 0.12));
// // //                   const zIndex = visibleItems.length - idx;

// // //                   return (
// // //                     <motion.div
// // //                       key={item.number}
// // //                       layout
// // //                       initial={{ opacity: 0, y: 60, scale: 0.9 }}
// // //                       animate={{ 
// // //                         opacity: opacity,
// // //                         y: yOffset,
// // //                         scale: scale,
// // //                         zIndex: zIndex
// // //                       }}
// // //                       exit={{ 
// // //                         opacity: 0, 
// // //                         y: -60, 
// // //                         scale: 0.8,
// // //                         transition: { duration: 0.3 }
// // //                       }}
// // //                       transition={{ 
// // //                         duration: 0.6,
// // //                         ease: [0.25, 0.1, 0.25, 1],
// // //                         delay: idx * 0.05
// // //                       }}
// // //                       onClick={() => handleCardClick(idx)}
// // //                       className="absolute left-0 right-0 cursor-pointer"
// // //                       style={{ 
// // //                         top: 0,
// // //                         zIndex: zIndex
// // //                       }}
// // //                     >
// // //                       <div className={`process-item group backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-7 border transition-all duration-300 ${
// // //                         isActive
// // //                           ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 bg-white/10'
// // //                           : 'border-white/10 bg-white/5 hover:border-white/20'
// // //                       }`}>
// // //                         {/* Number - Centered */}
// // //                         <div className="flex items-center justify-center mb-3">
// // //                           <span className={`text-3xl sm:text-4xl font-bold ${
// // //                             isActive
// // //                               ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
// // //                               : 'text-white/30'
// // //                           }`}>
// // //                             {item.number}
// // //                           </span>
// // //                         </div>

// // //                         {/* Image */}
// // //                         <div
// // //                           className={`rounded-xl overflow-hidden mb-4 mx-auto transition-all duration-300 ${
// // //                             isActive ? 'opacity-100 shadow-lg shadow-blue-500/20' : 'opacity-30'
// // //                           }`}
// // //                           style={{ 
// // //                             height: isActive ? '280px' : '120px',
// // //                             maxWidth: isActive ? '100%' : '90%'
// // //                           }}
// // //                         >
// // //                           <img 
// // //                             src={item.image} 
// // //                             alt={item.title} 
// // //                             className="w-full h-full object-cover"
// // //                           />
// // //                         </div>

// // //                         {/* Title - Centered */}
// // //                         <h3 className={`text-center text-lg sm:text-xl font-bold mb-2 transition-all duration-300 ${
// // //                           isActive ? 'text-white' : 'text-white/40'
// // //                         }`}>
// // //                           {item.title}
// // //                         </h3>

// // //                         {/* Description - Only visible on active card */}
// // //                         {isActive && (
// // //                           <motion.p
// // //                             initial={{ opacity: 0, y: 10 }}
// // //                             animate={{ opacity: 1, y: 0 }}
// // //                             transition={{ duration: 0.5, delay: 0.1 }}
// // //                             className="text-center text-blue-200/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
// // //                           >
// // //                             {item.description}
// // //                           </motion.p>
// // //                         )}

// // //                         {/* Active Line */}
// // //                         {/* {isActive && (
// // //                           <motion.div
// // //                             className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
// // //                             initial={{ width: '0%' }}
// // //                             animate={{ width: '80%' }}
// // //                             transition={{ duration: 0.6 }}
// // //                           />
// // //                         )} */}
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </AnimatePresence>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeWorkSection;



// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ChevronRight } from 'lucide-react';

// // const HowWeWorkSection = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const sectionRef = useRef(null);
// //   const isCooldownRef = useRef(false);

// //   const processSteps = [
// //     {
// //       number: '01',
// //       title: 'Requirement Analysis',
// //       description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
// //       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '02',
// //       title: 'Planning & Strategy',
// //       description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
// //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '03',
// //       title: 'Design & Development',
// //       description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
// //       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '04',
// //       title: 'Implementation & Optimization',
// //       description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
// //       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '05',
// //       title: 'Monitoring & Growth',
// //       description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
// //       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&crop=center'
// //     }
// //   ];

// //   // Mouse Scroll Interceptor
// //   useEffect(() => {
// //     const handleWheel = (e) => {
// //       if (window.innerWidth < 1024) return;

// //       const section = sectionRef.current;
// //       if (!section) return;

// //       const rect = section.getBoundingClientRect();
// //       const windowHeight = window.innerHeight;

// //       const isInViewport = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4;

// //       if (!isInViewport) return;

// //       const isScrollingDown = e.deltaY > 0;
// //       const isScrollingUp = e.deltaY < 0;

// //       if (isScrollingDown && activeIndex < processSteps.length - 1) {
// //         e.preventDefault();
// //         if (!isCooldownRef.current) {
// //           isCooldownRef.current = true;
// //           setActiveIndex((prev) => prev + 1);
// //           setTimeout(() => { isCooldownRef.current = false; }, 350);
// //         }
// //       } 
// //       else if (isScrollingUp && activeIndex > 0) {
// //         e.preventDefault();
// //         if (!isCooldownRef.current) {
// //           isCooldownRef.current = true;
// //           setActiveIndex((prev) => prev - 1);
// //           setTimeout(() => { isCooldownRef.current = false; }, 350);
// //         }
// //       }
// //     };

// //     window.addEventListener('wheel', handleWheel, { passive: false });
// //     return () => window.removeEventListener('wheel', handleWheel);
// //   }, [activeIndex, processSteps.length]);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative py-10 lg:py-14 bg-[#0a0a1a] overflow-hidden min-h-screen flex items-center justify-center"
// //     >
// //       {/* Background Lights */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[120px]" />
// //         <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-[120px]" />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
// //         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

// //           {/* Left Side Content */}
// //           <div className="flex flex-col justify-center">
// //             <span className="w-fit text-blue-400 font-medium text-xs sm:text-sm tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 mb-3">
// //               How We Work
// //             </span>

// //             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
// //               Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
// //             </h2>

// //             <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
// //               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
// //             </p>

// //             <div>
// //               <a
// //                 href="https://getwebindia.com/about"
// //                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
// //               >
// //                 Know More About Get Web India
// //                 <ChevronRight className="h-4 w-4" />
// //               </a>
// //             </div>

// //             {/* Steps Dots */}
// //             <div className="mt-6 flex items-center gap-2">
// //               {processSteps.map((_, idx) => (
// //                 <button
// //                   key={idx}
// //                   onClick={() => setActiveIndex(idx)}
// //                   className={`h-2 rounded-full transition-all duration-300 ${
// //                     idx === activeIndex
// //                       ? 'w-10 bg-gradient-to-r from-blue-500 to-purple-500'
// //                       : 'w-3 bg-white/20 hover:bg-white/40'
// //                   }`}
// //                   aria-label={`Step ${idx + 1}`}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right Side Cards - Fixed Stair Stacking & Z-Index */}
// //           <div className="relative min-h-[540px] sm:min-h-[580px] w-full flex items-start justify-center pt-2">
// //             {processSteps.map((step, idx) => {
// //               const isActive = idx === activeIndex;
// //               const isPast = idx < activeIndex;

// //               // Offset calculations: Pehle wale card top par staircase sequence me rahenge, upcoming neeche stack honge
// //               let yOffset = (idx - activeIndex) * 36;
// //               if (isPast) {
// //                 yOffset = idx * 26;
// //               }

// //               // Active card always gets the highest zIndex so it's fully visible
// //               const zIndex = isActive ? 50 : isPast ? idx + 10 : 30 - idx;

// //               return (
// //                 <motion.div
// //                   key={step.number}
// //                   className="absolute w-full max-w-lg cursor-pointer"
// //                   style={{
// //                     top: 0,
// //                     zIndex: zIndex,
// //                   }}
// //                   initial={false}
// //                   animate={{
// //                     y: yOffset,
// //                     scale: isActive ? 1 : isPast ? 0.96 : 0.92,
// //                     opacity: isActive ? 1 : isPast ? 0.85 : 0.4,
// //                   }}
// //                   transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
// //                   onClick={() => setActiveIndex(idx)}
// //                 >
// //                   <div
// //                     className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
// //                       isActive
// //                         ? 'bg-[#12122b] border-blue-500/70 shadow-2xl shadow-blue-500/25 ring-1 ring-blue-500/30'
// //                         : isPast
// //                         ? 'bg-[#0f0f24]/95 border-blue-400/30 shadow-md'
// //                         : 'bg-[#0f0f24]/80 border-white/10'
// //                     }`}
// //                   >
// //                     {/* Header */}
// //                     <div className="flex items-center justify-between mb-2">
// //                       <span
// //                         className={`text-2xl sm:text-3xl font-extrabold ${
// //                           isActive
// //                             ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
// //                             : isPast
// //                             ? 'text-blue-400/70'
// //                             : 'text-gray-500'
// //                         }`}
// //                       >
// //                         {step.number}
// //                       </span>
// //                       <h3
// //                         className={`text-base sm:text-lg font-bold ${
// //                           isActive ? 'text-white' : 'text-gray-300'
// //                         }`}
// //                       >
// //                         {step.title}
// //                       </h3>
// //                     </div>

// //                     {/* Content Body - Fully Expanded for Active Card */}
// //                     <AnimatePresence mode="wait">
// //                       {isActive && (
// //                         <motion.div
// //                           initial={{ opacity: 0, height: 0 }}
// //                           animate={{ opacity: 1, height: 'auto' }}
// //                           exit={{ opacity: 0, height: 0 }}
// //                           transition={{ duration: 0.25 }}
// //                         >
// //                           <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-3 mt-2 border border-white/10 shadow-inner">
// //                             <img
// //                               src={step.image}
// //                               alt={step.title}
// //                               className="w-full h-full object-cover"
// //                             />
// //                           </div>
// //                           <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed">
// //                             {step.description}
// //                           </p>
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HowWeWorkSection;





// // /////testing /////////


// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ChevronRight } from 'lucide-react';

// // const HowWeWorkSection = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const sectionRef = useRef(null);
// //   const isCooldownRef = useRef(false);

// //   const processSteps = [
// //     {
// //       number: '01',
// //       title: 'Requirement Analysis',
// //       description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
// //       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '02',
// //       title: 'Planning & Strategy',
// //       description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
// //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '03',
// //       title: 'Design & Development',
// //       description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
// //       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '04',
// //       title: 'Implementation & Optimization',
// //       description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
// //       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '05',
// //       title: 'Monitoring & Growth',
// //       description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
// //       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&crop=center'
// //     }
// //   ];

// //   // Mouse Scroll Interceptor
// //   useEffect(() => {
// //     const handleWheel = (e) => {
// //       if (window.innerWidth < 1024) return;

// //       const section = sectionRef.current;
// //       if (!section) return;

// //       const rect = section.getBoundingClientRect();
// //       const windowHeight = window.innerHeight;

// //       const isInViewport = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4;

// //       if (!isInViewport) return;

// //       const isScrollingDown = e.deltaY > 0;
// //       const isScrollingUp = e.deltaY < 0;

// //       if (isScrollingDown && activeIndex < processSteps.length - 1) {
// //         e.preventDefault();
// //         if (!isCooldownRef.current) {
// //           isCooldownRef.current = true;
// //           setActiveIndex((prev) => prev + 1);
// //           setTimeout(() => { isCooldownRef.current = false; }, 400);
// //         }
// //       } 
// //       else if (isScrollingUp && activeIndex > 0) {
// //         e.preventDefault();
// //         if (!isCooldownRef.current) {
// //           isCooldownRef.current = true;
// //           setActiveIndex((prev) => prev - 1);
// //           setTimeout(() => { isCooldownRef.current = false; }, 400);
// //         }
// //       }
// //     };

// //     window.addEventListener('wheel', handleWheel, { passive: false });
// //     return () => window.removeEventListener('wheel', handleWheel);
// //   }, [activeIndex, processSteps.length]);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative py-10 lg:py-14 bg-[#0a0a1a] overflow-hidden min-h-screen flex items-center justify-center"
// //     >
// //       {/* Background Lights */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[120px]" />
// //         <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-[120px]" />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
// //         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
// //           {/* Left Side - Sticky Content */}
// //           <div className="lg:sticky lg:top-24 flex flex-col">
// //             <span className="w-fit text-blue-400 font-medium text-xs sm:text-sm tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 mb-3">
// //               How We Work
// //             </span>

// //             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
// //               Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
// //             </h2>

// //             <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
// //               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
// //             </p>

// //             <div>
// //               <a
// //                 href="https://getwebindia.com/about"
// //                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
// //               >
// //                 Know More About Get Web India
// //                 <ChevronRight className="h-4 w-4" />
// //               </a>
// //             </div>

// //             {/* Steps Dots */}
// //             <div className="mt-6 flex items-center gap-2">
// //               {processSteps.map((_, idx) => (
// //                 <button
// //                   key={idx}
// //                   onClick={() => setActiveIndex(idx)}
// //                   className={`h-2 rounded-full transition-all duration-300 ${
// //                     idx === activeIndex
// //                       ? 'w-10 bg-gradient-to-r from-blue-500 to-purple-500'
// //                       : 'w-3 bg-white/20 hover:bg-white/40'
// //                   }`}
// //                   aria-label={`Step ${idx + 1}`}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right Side - Card Stack with Slide Effect */}
// //           <div className="relative min-h-[600px] sm:min-h-[650px] w-full flex items-start justify-center">
// //             {processSteps.map((step, idx) => {
// //               const isActive = idx === activeIndex;
// //               const isPast = idx < activeIndex;
// //               const isFuture = idx > activeIndex;

// //               // Y offset - Active card at top, Past cards slide down, Future cards slide up
// //               let yOffset = 0;
// //               if (isActive) {
// //                 yOffset = 0; // Active card - top position
// //               } else if (isPast) {
// //                 // Past cards - slide down (negative offset means down)
// //                 yOffset = (idx - activeIndex) * 70 + 20;
// //               } else {
// //                 // Future cards - slide up (positive offset means up, hidden)
// //                 yOffset = (idx - activeIndex) * 50 + 80;
// //               }

// //               // Scale
// //               let scale = 1;
// //               if (isActive) {
// //                 scale = 1;
// //               } else if (isPast) {
// //                 scale = 0.92 - (idx - activeIndex) * 0.02;
// //               } else {
// //                 scale = 0.85 - (idx - activeIndex) * 0.02;
// //               }

// //               // Opacity
// //               let opacity = 1;
// //               if (isActive) {
// //                 opacity = 1;
// //               } else if (isPast) {
// //                 opacity = 0.7 - (idx - activeIndex) * 0.05;
// //               } else {
// //                 opacity = 0.3 - (idx - activeIndex) * 0.04;
// //               }

// //               // Z-index
// //               let zIndex = 50 - Math.abs(idx - activeIndex);

// //               return (
// //                 <motion.div
// //                   key={step.number}
// //                   className="absolute w-full max-w-lg cursor-pointer"
// //                   style={{
// //                     top: 0,
// //                     zIndex: zIndex,
// //                   }}
// //                   initial={false}
// //                   animate={{
// //                     y: yOffset,
// //                     scale: scale,
// //                     opacity: opacity,
// //                   }}
// //                   transition={{ 
// //                     duration: 0.6, 
// //                     ease: [0.25, 0.1, 0.25, 1] 
// //                   }}
// //                   onClick={() => setActiveIndex(idx)}
// //                 >
// //                   <div
// //                     className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
// //                       isActive
// //                         ? 'bg-[#12122b] border-blue-500/70 shadow-2xl shadow-blue-500/25 ring-1 ring-blue-500/30'
// //                         : isPast
// //                         ? 'bg-[#0f0f24]/70 border-blue-400/10 shadow-md'
// //                         : 'bg-[#0f0f24]/40 border-white/5'
// //                     }`}
// //                   >
// //                     {/* Header */}
// //                     <div className="flex items-center justify-between mb-2">
// //                       <span
// //                         className={`text-2xl sm:text-3xl font-extrabold transition-all duration-300 ${
// //                           isActive
// //                             ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
// //                             : isPast
// //                             ? 'text-blue-400/50'
// //                             : 'text-gray-600'
// //                         }`}
// //                       >
// //                         {step.number}
// //                       </span>
// //                       <h3
// //                         className={`text-base sm:text-lg font-bold transition-all duration-300 ${
// //                           isActive ? 'text-white' : isPast ? 'text-gray-400' : 'text-gray-600'
// //                         }`}
// //                       >
// //                         {step.title}
// //                       </h3>
// //                     </div>

// //                     {/* Image - Only for Active and Past cards */}
// //                     {(isActive || isPast) && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0 }}
// //                         animate={{ opacity: 1, height: 'auto' }}
// //                         exit={{ opacity: 0, height: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                       >
// //                         <div className="rounded-xl overflow-hidden mb-3 mt-2 border border-white/10">
// //                           <img
// //                             src={step.image}
// //                             alt={step.title}
// //                             className="w-full h-32 sm:h-40 object-cover"
// //                           />
// //                         </div>
// //                       </motion.div>
// //                     )}

// //                     {/* Description - Only for Active card */}
// //                     <AnimatePresence mode="wait">
// //                       {isActive && (
// //                         <motion.div
// //                           initial={{ opacity: 0, height: 0 }}
// //                           animate={{ opacity: 1, height: 'auto' }}
// //                           exit={{ opacity: 0, height: 0 }}
// //                           transition={{ duration: 0.3, delay: 0.1 }}
// //                         >
// //                           <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed pt-1 border-t border-white/5">
// //                             {step.description}
// //                           </p>
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HowWeWorkSection;





// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ChevronRight } from 'lucide-react';

// // const HowWeWorkSection = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const sectionRef = useRef(null);
// //   const isCooldownRef = useRef(false);

// //   const processSteps = [
// //     {
// //       number: '01',
// //       title: 'Requirement Analysis',
// //       description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
// //       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '02',
// //       title: 'Planning & Strategy',
// //       description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
// //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '03',
// //       title: 'Design & Development',
// //       description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
// //       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '04',
// //       title: 'Implementation & Optimization',
// //       description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
// //       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=600&fit=crop&crop=center'
// //     },
// //     {
// //       number: '05',
// //       title: 'Monitoring & Growth',
// //       description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
// //       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&crop=center'
// //     }
// //   ];

// //   // Mouse Scroll Interceptor
// //   useEffect(() => {
// //     const handleWheel = (e) => {
// //       if (window.innerWidth < 1024) return;

// //       const section = sectionRef.current;
// //       if (!section) return;

// //       const rect = section.getBoundingClientRect();
// //       const windowHeight = window.innerHeight;

// //       const isInViewport = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4;

// //       if (!isInViewport) return;

// //       const isScrollingDown = e.deltaY > 0;
// //       const isScrollingUp = e.deltaY < 0;

// //       if (isScrollingDown && activeIndex < processSteps.length - 1) {
// //         e.preventDefault();
// //         if (!isCooldownRef.current) {
// //           isCooldownRef.current = true;
// //           setActiveIndex((prev) => prev + 1);
// //           setTimeout(() => { isCooldownRef.current = false; }, 400);
// //         }
// //       } 
// //       else if (isScrollingUp && activeIndex > 0) {
// //         e.preventDefault();
// //         if (!isCooldownRef.current) {
// //           isCooldownRef.current = true;
// //           setActiveIndex((prev) => prev - 1);
// //           setTimeout(() => { isCooldownRef.current = false; }, 400);
// //         }
// //       }
// //     };

// //     window.addEventListener('wheel', handleWheel, { passive: false });
// //     return () => window.removeEventListener('wheel', handleWheel);
// //   }, [activeIndex, processSteps.length]);

// //   // ===== DYNAMIC HEIGHT - EVEN BIGGER CARDS =====
// //   const getContainerHeight = () => {
// //     if (activeIndex === 0) return '620px';
// //     if (activeIndex === 1) return '680px';
// //     if (activeIndex === 2) return '720px';
// //     if (activeIndex === 3) return '680px';
// //     if (activeIndex === 4) return '620px';
// //     return '720px';
// //   };

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative py-8 lg:py-12 bg-[#0a0a1a] overflow-hidden min-h-screen flex items-center justify-center"
// //     >
// //       {/* Background Lights */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[120px]" />
// //         <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-[120px]" />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
// //         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
// //           {/* Left Side - Sticky Content */}
// //           <div className="lg:sticky lg:top-20 flex flex-col">
// //             <span className="w-fit text-blue-400 font-medium text-xs sm:text-sm tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 mb-3">
// //               How We Work
// //             </span>

// //             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
// //               Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
// //             </h2>

// //             <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
// //               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
// //             </p>

// //             <div>
// //               <a
// //                 href="https://getwebindia.com/about"
// //                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#01adf0] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#01adf0]/30 transition-all duration-300 hover:scale-105"
// //               >
// //                 Know More About Get Web India
// //                 <ChevronRight className="h-4 w-4" />
// //               </a>
// //             </div>

// //             {/* Steps Dots */}
// //             <div className="mt-6 flex items-center gap-2">
// //               {processSteps.map((_, idx) => (
// //                 <button
// //                   key={idx}
// //                   onClick={() => setActiveIndex(idx)}
// //                   className={`h-2 rounded-full transition-all duration-300 ${
// //                     idx === activeIndex
// //                       ? 'w-10 bg-gradient-to-r from-blue-500 to-purple-500'
// //                       : 'w-3 bg-white/20 hover:bg-white/40'
// //                   }`}
// //                   aria-label={`Step ${idx + 1}`}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right Side - EVEN BIGGER CARDS */}
// //           <div 
// //             className="relative w-full transition-all duration-500 ease-in-out overflow-hidden"
// //             style={{ 
// //               minHeight: getContainerHeight(),
// //               height: 'auto'
// //             }}
// //           >
// //             {processSteps.map((step, idx) => {
// //               const isActive = idx === activeIndex;
// //               const isPast = idx < activeIndex;
// //               const isFuture = idx > activeIndex;

// //               // ===== CARD DECK EFFECT - EVEN BIGGER =====
// //               let yOffset = 0;
// //               let rotate = 0;
// //               let scale = 1;
// //               let opacity = 1;

// //               if (isActive) {
// //                 yOffset = 0;
// //                 rotate = 0;
// //                 scale = 1;
// //                 opacity = 1;
// //               } else if (isPast) {
// //                 const stepsDown = idx - activeIndex;
// //                 yOffset = 55 + stepsDown * 45;
// //                 rotate = -2 - stepsDown * 1.2;
// //                 scale = 0.95 - stepsDown * 0.015;
// //                 opacity = 0.85 - stepsDown * 0.06;
// //               } else {
// //                 const stepsDown = idx - activeIndex;
// //                 yOffset = 110 + stepsDown * 40;
// //                 rotate = 1 + stepsDown * 1.2;
// //                 scale = 0.90 - stepsDown * 0.015;
// //                 opacity = 0.45 - stepsDown * 0.05;
// //               }

// //               let zIndex = 50 - Math.abs(idx - activeIndex);

// //               return (
// //                 <motion.div
// //                   key={step.number}
// //                   className="absolute w-full max-w-lg cursor-pointer"
// //                   style={{
// //                     top: 0,
// //                     zIndex: zIndex,
// //                   }}
// //                   initial={false}
// //                   animate={{
// //                     y: yOffset,
// //                     rotate: rotate,
// //                     scale: scale,
// //                     opacity: opacity,
// //                   }}
// //                   transition={{ 
// //                     duration: 0.5, 
// //                     ease: [0.25, 0.1, 0.25, 1] 
// //                   }}
// //                   onClick={() => setActiveIndex(idx)}
// //                 >
// //                   <div
// //                     className={`p-7 sm:p-9 rounded-2xl border transition-all duration-300 shadow-lg ${
// //                       isActive
// //                         ? 'bg-[#ffffff] border-[#01adf0]/50 shadow-2xl shadow-[#01adf0]/20 ring-1 ring-[#01adf0]/20'
// //                         : isPast
// //                         ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
// //                         : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
// //                     }`}
// //                   >
// //                     {/* Header */}
// //                     <div className="flex items-center justify-between mb-4">
// //                       <span
// //                         className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${
// //                           isActive
// //                             ? 'bg-gradient-to-r from-[#01adf0] to-purple-600 bg-clip-text text-transparent'
// //                             : isPast
// //                             ? 'text-[#01adf0]/50'
// //                             : 'text-gray-400'
// //                         }`}
// //                       >
// //                         {step.number}
// //                       </span>
// //                       <h3
// //                         className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${
// //                           isActive ? 'text-gray-900' : isPast ? 'text-gray-600' : 'text-gray-400'
// //                         }`}
// //                       >
// //                         {step.title}
// //                       </h3>
// //                     </div>

// //                     {/* Image - Much Bigger */}
// //                     {(isActive || isPast) && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0 }}
// //                         animate={{ opacity: 1, height: 'auto' }}
// //                         exit={{ opacity: 0, height: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                       >
// //                         <div className="rounded-xl overflow-hidden mb-4 mt-2 border border-gray-200">
// //                           <img
// //                             src={step.image}
// //                             alt={step.title}
// //                             className="w-full h-48 sm:h-56 object-cover"
// //                           />
// //                         </div>
// //                       </motion.div>
// //                     )}

// //                     {/* Description - Bigger text */}
// //                     <AnimatePresence mode="wait">
// //                       {isActive && (
// //                         <motion.div
// //                           initial={{ opacity: 0, height: 0 }}
// //                           animate={{ opacity: 1, height: 'auto' }}
// //                           exit={{ opacity: 0, height: 0 }}
// //                           transition={{ duration: 0.3, delay: 0.1 }}
// //                         >
// //                           <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-3 border-t border-gray-200">
// //                             {step.description}
// //                           </p>
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HowWeWorkSection;



// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronRight } from 'lucide-react';

// const HowWeWorkSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRef = useRef(null);
//   const isCooldownRef = useRef(false);

//   const processSteps = [
//     {
//       number: '01',
//       title: 'Requirement Analysis',
//       description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
//       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop&crop=center'
//     },
//     {
//       number: '02',
//       title: 'Planning & Strategy',
//       description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center'
//     },
//     {
//       number: '03',
//       title: 'Design & Development',
//       description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
//       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=600&fit=crop&crop=center'
//     },
//     {
//       number: '04',
//       title: 'Implementation & Optimization',
//       description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
//       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=600&fit=crop&crop=center'
//     },
//     {
//       number: '05',
//       title: 'Monitoring & Growth',
//       description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
//       image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&crop=center'
//     }
//   ];

//   // Mouse Scroll Interceptor
//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (window.innerWidth < 1024) return;

//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const isInViewport = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4;

//       if (!isInViewport) return;

//       const isScrollingDown = e.deltaY > 0;
//       const isScrollingUp = e.deltaY < 0;

//       if (isScrollingDown && activeIndex < processSteps.length - 1) {
//         e.preventDefault();
//         if (!isCooldownRef.current) {
//           isCooldownRef.current = true;
//           setActiveIndex((prev) => prev + 1);
//           setTimeout(() => { isCooldownRef.current = false; }, 400);
//         }
//       } 
//       else if (isScrollingUp && activeIndex > 0) {
//         e.preventDefault();
//         if (!isCooldownRef.current) {
//           isCooldownRef.current = true;
//           setActiveIndex((prev) => prev - 1);
//           setTimeout(() => { isCooldownRef.current = false; }, 400);
//         }
//       }
//     };

//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [activeIndex, processSteps.length]);

//   // ===== DYNAMIC HEIGHT - REDUCED BOTTOM SPACE =====
//   const getContainerHeight = () => {
//     if (activeIndex === 0) return '560px';
//     if (activeIndex === 1) return '600px';
//     if (activeIndex === 2) return '640px';
//     if (activeIndex === 3) return '600px';
//     if (activeIndex === 4) return '560px';
//     return '640px';
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-6 lg:py-8 bg-[#0a0a1a] overflow-hidden min-h-screen flex items-center justify-center"
//     >
//       {/* Background Lights */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[120px]" />
//         <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
//           {/* Left Side - Sticky Content */}
//           <div className="lg:sticky lg:top-20 flex flex-col">
//             <span className="w-fit text-blue-400 font-medium text-xs sm:text-sm tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 mb-3">
//               How We Work
//             </span>

//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
//               Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
//             </h2>

//             <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
//               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
//             </p>

//             <div>
//               <a
//                 href="https://getwebindia.com/about"
//                 className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#01adf0] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#01adf0]/30 transition-all duration-300 hover:scale-105"
//               >
//                 Know More About Get Web India
//                 <ChevronRight className="h-4 w-4" />
//               </a>
//             </div>

//             {/* Steps Dots */}
//             <div className="mt-6 flex items-center gap-2">
//               {processSteps.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveIndex(idx)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     idx === activeIndex
//                       ? 'w-10 bg-gradient-to-r from-blue-500 to-purple-500'
//                       : 'w-3 bg-white/20 hover:bg-white/40'
//                   }`}
//                   aria-label={`Step ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Cards (Bottom size increased, top space reduced) */}
//           <div 
//             className="relative w-full transition-all duration-500 ease-in-out overflow-hidden"
//             style={{ 
//               minHeight: getContainerHeight(),
//               height: 'auto'
//             }}
//           >
//             {processSteps.map((step, idx) => {
//               const isActive = idx === activeIndex;
//               const isPast = idx < activeIndex;
//               const isFuture = idx > activeIndex;

//               // ===== CARD DECK EFFECT =====
//               let yOffset = 0;
//               let rotate = 0;
//               let scale = 1;
//               let opacity = 1;

//               if (isActive) {
//                 yOffset = 0;
//                 rotate = 0;
//                 scale = 1;
//                 opacity = 1;
//               } else if (isPast) {
//                 const stepsDown = idx - activeIndex;
//                 yOffset = 45 + stepsDown * 35;
//                 rotate = -2 - stepsDown * 1.2;
//                 scale = 0.95 - stepsDown * 0.015;
//                 opacity = 0.85 - stepsDown * 0.06;
//               } else {
//                 const stepsDown = idx - activeIndex;
//                 yOffset = 90 + stepsDown * 30;
//                 rotate = 1 + stepsDown * 1.2;
//                 scale = 0.90 - stepsDown * 0.015;
//                 opacity = 0.45 - stepsDown * 0.05;
//               }

//               let zIndex = 50 - Math.abs(idx - activeIndex);

//               return (
//                 <motion.div
//                   key={step.number}
//                   className="absolute w-full max-w-lg cursor-pointer"
//                   style={{
//                     top: 0,
//                     zIndex: zIndex,
//                   }}
//                   initial={false}
//                   animate={{
//                     y: yOffset,
//                     rotate: rotate,
//                     scale: scale,
//                     opacity: opacity,
//                   }}
//                   transition={{ 
//                     duration: 0.5, 
//                     ease: [0.25, 0.1, 0.25, 1] 
//                   }}
//                   onClick={() => setActiveIndex(idx)}
//                 >
//                   <div
//                     className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-lg ${
//                       isActive
//                         ? 'bg-[#ffffff] border-[#01adf0]/50 shadow-2xl shadow-[#01adf0]/20 ring-1 ring-[#01adf0]/20'
//                         : isPast
//                         ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
//                         : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
//                     }`}
//                   >
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-3">
//                       <span
//                         className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${
//                           isActive
//                             ? 'bg-gradient-to-r from-[#01adf0] to-purple-600 bg-clip-text text-transparent'
//                             : isPast
//                             ? 'text-[#01adf0]/50'
//                             : 'text-gray-400'
//                         }`}
//                       >
//                         {step.number}
//                       </span>
//                       <h3
//                         className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${
//                           isActive ? 'text-gray-900' : isPast ? 'text-gray-600' : 'text-gray-400'
//                         }`}
//                       >
//                         {step.title}
//                       </h3>
//                     </div>

//                     {/* Image - Bigger when active */}
//                     {(isActive || isPast) && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="rounded-xl overflow-hidden mb-3 mt-2 border border-gray-200">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="w-full h-52 sm:h-64 object-cover"
//                           />
//                         </div>
//                       </motion.div>
//                     )}

//                     {/* Description - Bigger text */}
//                     <AnimatePresence mode="wait">
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3, delay: 0.1 }}
//                         >
//                           <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2 border-t border-gray-200">
//                             {step.description}
//                           </p>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWeWorkSection;





import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HowWeWorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isCooldownRef = useRef(false);

  const processSteps = [
    {
      number: '01',
      title: 'Requirement Analysis',
      description: 'We begin by understanding your business goals, target audience, and competitors to create a clear strategy tailored to your needs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop&crop=center'
    },
    {
      number: '02',
      title: 'Planning & Strategy',
      description: 'Our team designs a customized roadmap including SEO planning, website structure, and marketing approach for maximum impact.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&crop=center'
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'We create visually appealing, user-friendly, and responsive websites with smooth functionality and modern design standards.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&h=600&fit=crop&crop=center'
    },
    {
      number: '04',
      title: 'Implementation & Optimization',
      description: 'We apply SEO techniques, optimize content, improve site speed, and ensure everything is aligned for better performance on search engines.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=600&fit=crop&crop=center'
    },
    {
      number: '05',
      title: 'Monitoring & Growth',
      description: 'We continuously track performance, analyze results, and make improvements to ensure long-term growth, higher rankings, and better ROI.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=600&fit=crop&crop=center'
    }
  ];

  // Mouse Scroll Interceptor
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.innerWidth < 1024) return;

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isInViewport = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4;

      if (!isInViewport) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if (isScrollingDown && activeIndex < processSteps.length - 1) {
        e.preventDefault();
        if (!isCooldownRef.current) {
          isCooldownRef.current = true;
          setActiveIndex((prev) => prev + 1);
          setTimeout(() => { isCooldownRef.current = false; }, 400);
        }
      } 
      else if (isScrollingUp && activeIndex > 0) {
        e.preventDefault();
        if (!isCooldownRef.current) {
          isCooldownRef.current = true;
          setActiveIndex((prev) => prev - 1);
          setTimeout(() => { isCooldownRef.current = false; }, 400);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, processSteps.length]);

  // ===== DYNAMIC HEIGHT - BALANCED TOP & BOTTOM =====
  const getContainerHeight = () => {
    if (activeIndex === 0) return '520px';
    if (activeIndex === 1) return '560px';
    if (activeIndex === 2) return '600px';
    if (activeIndex === 3) return '560px';
    if (activeIndex === 4) return '520px';
    return '600px';
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-6 lg:py-8 bg-[#0a0a1a] overflow-hidden flex items-center justify-center"
    >
      {/* Background Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Sticky Content */}
          <div className="lg:sticky lg:top-20 flex flex-col">
            <span className="w-fit text-blue-400 font-medium text-xs sm:text-sm tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 mb-3">
              How We Work
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
            </p>

            <div>
              <a
                href="https://getwebindia.com/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#01adf0] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#01adf0]/30 transition-all duration-300 hover:scale-105"
              >
                Know More About Get Web India
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Steps Dots */}
            <div className="mt-6 flex items-center gap-2">
              {processSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-10 bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Step ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Cards with balanced top/bottom */}
          <div 
            className="relative w-full transition-all duration-500 ease-in-out overflow-hidden flex items-start justify-center pt-2"
            style={{ 
              minHeight: getContainerHeight(),
              height: 'auto'
            }}
          >
            {processSteps.map((step, idx) => {
              const isActive = idx === activeIndex;
              const isPast = idx < activeIndex;
              const isFuture = idx > activeIndex;

              // ===== CARD DECK EFFECT - BALANCED =====
              let yOffset = 0;
              let rotate = 0;
              let scale = 1;
              let opacity = 1;

              if (isActive) {
                yOffset = 0;
                rotate = 0;
                scale = 1;
                opacity = 1;
              } else if (isPast) {
                const stepsDown = idx - activeIndex;
                yOffset = 42 + stepsDown * 30;
                rotate = -2 - stepsDown * 1.2;
                scale = 0.95 - stepsDown * 0.015;
                opacity = 0.85 - stepsDown * 0.06;
              } else {
                const stepsDown = idx - activeIndex;
                yOffset = 80 + stepsDown * 24;
                rotate = 1 + stepsDown * 1.2;
                scale = 0.90 - stepsDown * 0.015;
                opacity = 0.45 - stepsDown * 0.05;
              }

              let zIndex = 50 - Math.abs(idx - activeIndex);

              return (
                <motion.div
                  key={step.number}
                  className="absolute w-full max-w-lg cursor-pointer"
                  style={{
                    top: 0,
                    zIndex: zIndex,
                  }}
                  initial={false}
                  animate={{
                    y: yOffset,
                    rotate: rotate,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div
                    className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-lg ${
                      isActive
                        ? 'bg-[#ffffff] border-[#01adf0]/50 shadow-2xl shadow-[#01adf0]/20 ring-1 ring-[#01adf0]/20'
                        : isPast
                        ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
                        : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#01adf0] to-purple-600 bg-clip-text text-transparent'
                            : isPast
                            ? 'text-[#01adf0]/50'
                            : 'text-gray-400'
                        }`}
                      >
                        {step.number}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 ${
                          isActive ? 'text-gray-900' : isPast ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {/* Image - Slightly bigger for balance */}
                    {(isActive || isPast) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="rounded-xl overflow-hidden mb-2 mt-1 border border-gray-200">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-48 sm:h-60 object-cover"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Description - Only Active */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2 border-t border-gray-200">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;