// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
// // import AnimatedSection from './AnimatedSection';

// // const ServicesSection = () => {
// //   const services = [
// //     { 
// //       title: 'Cognitive AI', 
// //       icon: Brain, 
// //       description: 'Advanced AI & ML solutions for intelligent automation and decision-making',
// //       gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
// //       badge: 'AI Powered',
// //       badgeColor: 'text-blue-400 bg-blue-400/10'
// //     },
// //     { 
// //       title: 'Digital Experience', 
// //       icon: Monitor, 
// //       description: 'Transform your digital presence with cutting-edge technology and design',
// //       gradient: 'from-purple-500 via-pink-500 to-rose-500',
// //       badge: 'Creative',
// //       badgeColor: 'text-purple-400 bg-purple-400/10'
// //     },
// //     { 
// //       title: 'IT Infrastructure', 
// //       icon: Server, 
// //       description: 'Enterprise-grade IT solutions for scalable and reliable business growth',
// //       gradient: 'from-green-500 via-emerald-500 to-teal-500',
// //       badge: 'Enterprise',
// //       badgeColor: 'text-green-400 bg-green-400/10'
// //     },
// //     { 
// //       title: 'Cyber Security', 
// //       icon: Lock, 
// //       description: 'Advanced security solutions to protect your infrastructure and data',
// //       gradient: 'from-red-500 via-orange-500 to-yellow-500',
// //       badge: 'Secure',
// //       badgeColor: 'text-red-400 bg-red-400/10'
// //     }
// //   ];

// //   // Animation variants for staggered children
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.15,
// //         delayChildren: 0.2
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.7,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   return (
// //     <section className="relative py-32 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2e] to-[#0a0a1a] overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, 50, -50, 0],
// //             y: [0, -30, 30, 0],
// //             scale: [1, 1.2, 0.8, 1]
// //           }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, -50, 50, 0],
// //             y: [0, 30, -30, 0],
// //             scale: [1, 0.8, 1.2, 1]
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
// //           animate={{ 
// //             scale: [1, 1.2, 0.9, 1],
// //             rotate: [0, 180, 360, 0]
// //           }}
// //           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// //         />
// //       </div>
      
// //       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
// //         <AnimatedSection className="text-center mb-20">
// //           <motion.span 
// //             className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 inline-block"
// //             whileHover={{ scale: 1.05 }}
// //             animate={{ 
// //               y: [0, -3, 0],
// //             }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             Our Services
// //           </motion.span>
// //           <motion.h2 
// //             className="text-5xl md:text-6xl font-bold text-white mt-6"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //           >
// //             Best IT Solutions{' '}
// //             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">by CoderBox</span>
// //           </motion.h2>
// //           <motion.p 
// //             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //           >
// //             Comprehensive technology solutions designed to drive innovation and growth for your business
// //           </motion.p>
// //         </AnimatedSection>
        
// //         <motion.div 
// //           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.2 }}
// //         >
// //           {services.map((service, index) => (
// //             <motion.div
// //               key={index}
// //               variants={itemVariants}
// //               whileHover={{ 
// //                 y: -10,
// //                 scale: 1.02,
// //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// //               }}
// //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden"
// //             >
// //               {/* Animated gradient background */}
// //               <motion.div 
// //                 className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
// //                 animate={{
// //                   scale: [1, 1.1, 1],
// //                 }}
// //                 transition={{ duration: 8, repeat: Infinity }}
// //               />
              
// //               <div className="relative z-10">
// //                 <motion.div 
// //                   className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
// //                   whileHover={{ 
// //                     scale: 1.15, 
// //                     rotate: 10,
// //                     transition: { duration: 0.3 }
// //                   }}
// //                 >
// //                   <service.icon className="h-8 w-8 text-white" />
// //                 </motion.div>
                
// //                 <motion.h3 
// //                   className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
// //                   whileHover={{ x: 5 }}
// //                 >
// //                   {service.title}
// //                 </motion.h3>
                
// //                 <motion.span 
// //                   className={`inline-block text-xs font-medium ${service.badgeColor} px-3 py-1 rounded-full mb-3`}
// //                   whileHover={{ scale: 1.05 }}
// //                 >
// //                   {service.badge}
// //                 </motion.span>
                
// //                 <p className="text-blue-200/70 text-sm leading-relaxed">{service.description}</p>
                
// //                 <motion.a
// //                   href="#"
// //                   whileHover={{ x: 8 }}
// //                   className="inline-flex items-center text-blue-400 font-medium mt-4 group-hover:text-blue-300 gap-1"
// //                 >
// //                   Learn More
// //                   <motion.span
// //                     animate={{ x: [0, 4, 0] }}
// //                     transition={{ duration: 1.5, repeat: Infinity }}
// //                   >
// //                     <ArrowRight className="h-4 w-4" />
// //                   </motion.span>
// //                 </motion.a>
// //               </div>

// //               {/* Floating icon in background */}
// //               <motion.div
// //                 className="absolute -bottom-8 -right-8 text-8xl opacity-5 group-hover:opacity-10 transition-opacity"
// //                 animate={{ 
// //                   rotate: [0, 10, -10, 0],
// //                   scale: [1, 1.1, 1]
// //                 }}
// //                 transition={{ duration: 10, repeat: Infinity }}
// //               >
// //                 <service.icon className="h-32 w-32" />
// //               </motion.div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Bottom CTA with enhanced animation */}
// //         <motion.div 
// //           className="text-center mt-16"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           viewport={{ once: true }}
// //         >
// //           <motion.a
// //             href="#contact"
// //             whileHover={{ 
// //               scale: 1.05,
// //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// //               y: -3
// //             }}
// //             whileTap={{ scale: 0.95 }}
// //             className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300"
// //           >
// //             Explore All Services
// //             <motion.span
// //               animate={{ x: [0, 6, 0] }}
// //               transition={{ duration: 1.5, repeat: Infinity }}
// //             >
// //               <ArrowRight className="h-5 w-5" />
// //             </motion.span>
// //           </motion.a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesSection;






// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
// // import AnimatedSection from './AnimatedSection';

// // const ServicesSection = () => {
// //   const services = [
// //     { 
// //       title: 'Cognitive AI', 
// //       icon: Brain, 
// //       description: 'Advanced AI & ML solutions for intelligent automation and decision-making',
// //       gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
// //       badge: 'AI Powered',
// //       badgeColor: 'text-blue-400 bg-blue-400/10',
// //       link: '/services/cognitive-ai'
// //     },
// //     { 
// //       title: 'Digital Experience', 
// //       icon: Monitor, 
// //       description: 'Transform your digital presence with cutting-edge technology and design',
// //       gradient: 'from-purple-500 via-pink-500 to-rose-500',
// //       badge: 'Creative',
// //       badgeColor: 'text-purple-400 bg-purple-400/10',
// //       link: '/services/digital-experience'
// //     },
// //     { 
// //       title: 'IT Infrastructure', 
// //       icon: Server, 
// //       description: 'Enterprise-grade IT solutions for scalable and reliable business growth',
// //       gradient: 'from-green-500 via-emerald-500 to-teal-500',
// //       badge: 'Enterprise',
// //       badgeColor: 'text-green-400 bg-green-400/10',
// //       link: '/services/it-infrastructure'
// //     },
// //     { 
// //       title: 'Cyber Security', 
// //       icon: Lock, 
// //       description: 'Advanced security solutions to protect your infrastructure and data',
// //       gradient: 'from-red-500 via-orange-500 to-yellow-500',
// //       badge: 'Secure',
// //       badgeColor: 'text-red-400 bg-red-400/10',
// //       link: '/services/cyber-security'
// //     }
// //   ];

// //   // Animation variants for staggered children
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.15,
// //         delayChildren: 0.2
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.7,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   return (
// //     <section className="relative py-28 sm:py-32 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2e] to-[#0a0a1a] overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, 50, -50, 0],
// //             y: [0, -30, 30, 0],
// //             scale: [1, 1.2, 0.8, 1]
// //           }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, -50, 50, 0],
// //             y: [0, 30, -30, 0],
// //             scale: [1, 0.8, 1.2, 1]
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
// //           animate={{ 
// //             scale: [1, 1.2, 0.9, 1],
// //             rotate: [0, 180, 360, 0]
// //           }}
// //           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// //         />
// //       </div>
      
// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //         <AnimatedSection className="text-center mb-16 sm:mb-20">
// //           <motion.span 
// //             className="text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-blue-500/20 inline-block"
// //             whileHover={{ scale: 1.05 }}
// //             animate={{ 
// //               y: [0, -3, 0],
// //             }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             Our Services
// //           </motion.span>
// //           <motion.h2 
// //             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-5 sm:mt-6 leading-[1.15]"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //           >
// //             Best IT Solutions{' '}
// //             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">by CoderBox</span>
// //           </motion.h2>
// //           <motion.p 
// //             className="text-blue-200/80 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //           >
// //             Comprehensive technology solutions designed to drive innovation and growth for your business
// //           </motion.p>
// //         </AnimatedSection>
        
// //         <motion.div 
// //           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.2 }}
// //         >
// //           {services.map((service, index) => (
// //             <motion.div
// //               key={index}
// //               variants={itemVariants}
// //               whileHover={{ 
// //                 y: -10,
// //                 scale: 1.02,
// //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// //               }}
// //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden"
// //             >
// //               {/* Animated gradient background */}
// //               <motion.div 
// //                 className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
// //                 animate={{
// //                   scale: [1, 1.1, 1],
// //                 }}
// //                 transition={{ duration: 8, repeat: Infinity }}
// //               />
              
// //               <div className="relative z-10">
// //                 <motion.div 
// //                   className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
// //                   whileHover={{ 
// //                     scale: 1.15, 
// //                     rotate: 10,
// //                     transition: { duration: 0.3 }
// //                   }}
// //                 >
// //                   <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
// //                 </motion.div>
                
// //                 <motion.h3 
// //                   className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors"
// //                   whileHover={{ x: 5 }}
// //                 >
// //                   {service.title}
// //                 </motion.h3>
                
// //                 <motion.span 
// //                   className={`inline-block text-[10px] sm:text-xs font-medium ${service.badgeColor} px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full mb-2.5 sm:mb-3`}
// //                   whileHover={{ scale: 1.05 }}
// //                 >
// //                   {service.badge}
// //                 </motion.span>
                
// //                 <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                
// //                 <motion.a
// //                   href={service.link}
// //                   whileHover={{ x: 8 }}
// //                   className="inline-flex items-center text-blue-400 font-medium mt-3 sm:mt-4 group-hover:text-blue-300 gap-1 text-sm"
// //                 >
// //                   Learn More
// //                   <motion.span
// //                     animate={{ x: [0, 4, 0] }}
// //                     transition={{ duration: 1.5, repeat: Infinity }}
// //                   >
// //                     <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
// //                   </motion.span>
// //                 </motion.a>
// //               </div>

// //               {/* Floating icon in background */}
// //               <motion.div
// //                 className="absolute -bottom-8 -right-8 text-6xl sm:text-8xl opacity-5 group-hover:opacity-10 transition-opacity"
// //                 animate={{ 
// //                   rotate: [0, 10, -10, 0],
// //                   scale: [1, 1.1, 1]
// //                 }}
// //                 transition={{ duration: 10, repeat: Infinity }}
// //               >
// //                 <service.icon className="h-24 w-24 sm:h-32 sm:w-32" />
// //               </motion.div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Bottom CTA with enhanced animation */}
// //         <motion.div 
// //           className="text-center mt-12 sm:mt-16"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           viewport={{ once: true }}
// //         >
// //           <motion.a
// //             href="/services"
// //             whileHover={{ 
// //               scale: 1.05,
// //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// //               y: -3
// //             }}
// //             whileTap={{ scale: 0.95 }}
// //             className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
// //           >
// //             Explore All Services
// //             <motion.span
// //               animate={{ x: [0, 6, 0] }}
// //               transition={{ duration: 1.5, repeat: Infinity }}
// //             >
// //               <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
// //             </motion.span>
// //           </motion.a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesSection;








// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
// // import AnimatedSection from './AnimatedSection';

// // const ServicesSection = () => {
// //   const services = [
// //     { 
// //       title: 'Cognitive AI', 
// //       icon: Brain, 
// //       description: 'Advanced AI & ML solutions for intelligent automation and decision-making',
// //       gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
// //       badge: 'AI Powered',
// //       badgeColor: 'text-blue-400 bg-blue-400/10',
// //       link: '/services/cognitive-ai'
// //     },
// //     { 
// //       title: 'Digital Experience', 
// //       icon: Monitor, 
// //       description: 'Transform your digital presence with cutting-edge technology and design',
// //       gradient: 'from-purple-500 via-pink-500 to-rose-500',
// //       badge: 'Creative',
// //       badgeColor: 'text-purple-400 bg-purple-400/10',
// //       link: '/services/digital-experience'
// //     },
// //     { 
// //       title: 'IT Infrastructure', 
// //       icon: Server, 
// //       description: 'Enterprise-grade IT solutions for scalable and reliable business growth',
// //       gradient: 'from-green-500 via-emerald-500 to-teal-500',
// //       badge: 'Enterprise',
// //       badgeColor: 'text-green-400 bg-green-400/10',
// //       link: '/services/it-infrastructure'
// //     },
// //     { 
// //       title: 'Cyber Security', 
// //       icon: Lock, 
// //       description: 'Advanced security solutions to protect your infrastructure and data',
// //       gradient: 'from-red-500 via-orange-500 to-yellow-500',
// //       badge: 'Secure',
// //       badgeColor: 'text-red-400 bg-red-400/10',
// //       link: '/services/cyber-security'
// //     }
// //   ];

// //   // Animation variants for staggered children
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.15,
// //         delayChildren: 0.2
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.7,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   return (
// //     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2e] to-[#0a0a1a] overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-0 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-blue-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, 50, -50, 0],
// //             y: [0, -30, 30, 0],
// //             scale: [1, 1.2, 0.8, 1]
// //           }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute bottom-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-purple-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, -50, 50, 0],
// //             y: [0, 30, -30, 0],
// //             scale: [1, 0.8, 1.2, 1]
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
// //           animate={{ 
// //             scale: [1, 1.2, 0.9, 1],
// //             rotate: [0, 180, 360, 0]
// //           }}
// //           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
// //         />
// //       </div>
      
// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// //         <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-14">
// //           <motion.span 
// //             className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/20 inline-block"
// //             whileHover={{ scale: 1.05 }}
// //             animate={{ 
// //               y: [0, -3, 0],
// //             }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             Our Services
// //           </motion.span>
// //           <motion.h2 
// //             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //           >
// //             Best IT Solutions{' '}
// //             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">by CoderBox</span>
// //           </motion.h2>
// //           <motion.p 
// //             className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //           >
// //             Comprehensive technology solutions designed to drive innovation and growth for your business
// //           </motion.p>
// //         </AnimatedSection>
        
// //         <motion.div 
// //           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.2 }}
// //         >
// //           {services.map((service, index) => (
// //             <motion.div
// //               key={index}
// //               variants={itemVariants}
// //               whileHover={{ 
// //                 y: -8,
// //                 scale: 1.02,
// //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// //               }}
// //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 lg:p-7 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden"
// //             >
// //               {/* Animated gradient background */}
// //               <motion.div 
// //                 className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
// //                 animate={{
// //                   scale: [1, 1.1, 1],
// //                 }}
// //                 transition={{ duration: 8, repeat: Infinity }}
// //               />
              
// //               <div className="relative z-10">
// //                 <motion.div 
// //                   className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
// //                   whileHover={{ 
// //                     scale: 1.15, 
// //                     rotate: 10,
// //                     transition: { duration: 0.3 }
// //                   }}
// //                 >
// //                   <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
// //                 </motion.div>
                
// //                 <motion.h3 
// //                   className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors"
// //                   whileHover={{ x: 5 }}
// //                 >
// //                   {service.title}
// //                 </motion.h3>
                
// //                 <motion.span 
// //                   className={`inline-block text-[8px] sm:text-[10px] font-medium ${service.badgeColor} px-2 sm:px-2.5 py-0.5 rounded-full mb-2 sm:mb-2.5`}
// //                   whileHover={{ scale: 1.05 }}
// //                 >
// //                   {service.badge}
// //                 </motion.span>
                
// //                 <p className="text-blue-200/70 text-[10px] sm:text-xs leading-relaxed">{service.description}</p>
                
// //                 <motion.a
// //                   href={service.link}
// //                   whileHover={{ x: 8 }}
// //                   className="inline-flex items-center text-blue-400 font-medium mt-2 sm:mt-3 group-hover:text-blue-300 gap-1 text-[10px] sm:text-xs"
// //                 >
// //                   Learn More
// //                   <motion.span
// //                     animate={{ x: [0, 4, 0] }}
// //                     transition={{ duration: 1.5, repeat: Infinity }}
// //                   >
// //                     <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
// //                   </motion.span>
// //                 </motion.a>
// //               </div>

// //               {/* Floating icon in background */}
// //               <motion.div
// //                 className="absolute -bottom-8 -right-8 text-5xl sm:text-7xl opacity-5 group-hover:opacity-10 transition-opacity"
// //                 animate={{ 
// //                   rotate: [0, 10, -10, 0],
// //                   scale: [1, 1.1, 1]
// //                 }}
// //                 transition={{ duration: 10, repeat: Infinity }}
// //               >
// //                 <service.icon className="h-20 w-20 sm:h-28 sm:w-28" />
// //               </motion.div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Bottom CTA with enhanced animation */}
// //         <motion.div 
// //           className="text-center mt-8 sm:mt-10 md:mt-12"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           viewport={{ once: true }}
// //         >
// //           <motion.a
// //             href="/services"
// //             whileHover={{ 
// //               scale: 1.05,
// //               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
// //               y: -3
// //             }}
// //             whileTap={{ scale: 0.95 }}
// //             className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
// //           >
// //             Explore All Services
// //             <motion.span
// //               animate={{ x: [0, 6, 0] }}
// //               transition={{ duration: 1.5, repeat: Infinity }}
// //             >
// //               <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
// //             </motion.span>
// //           </motion.a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesSection;







// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const ServicesSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const services = [
//     { 
//       title: 'Website Designing', 
//       icon: Monitor, 
//       description: 'We create visually stunning and user-friendly websites that reflect your brand identity and deliver a seamless user experience across all devices.',
//       gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
//       badge: 'Design',
//       badgeColor: 'text-blue-400 bg-blue-400/10',
//       link: '/services/website-designing',
//       image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Website Development', 
//       icon: Server, 
//       description: 'We develop fast, secure, and scalable websites tailored to your business needs, ensuring smooth performance and a seamless user experience.',
//       gradient: 'from-purple-500 via-pink-500 to-rose-500',
//       badge: 'Development',
//       badgeColor: 'text-purple-400 bg-purple-400/10',
//       link: '/services/website-development',
//       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Cognitive AI', 
//       icon: Brain, 
//       description: 'Advanced AI & ML solutions for intelligent automation and decision-making.',
//       gradient: 'from-green-500 via-emerald-500 to-teal-500',
//       badge: 'AI Powered',
//       badgeColor: 'text-green-400 bg-green-400/10',
//       link: '/services/cognitive-ai',
//       image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Cyber Security', 
//       icon: Lock, 
//       description: 'Advanced security solutions to protect your infrastructure and data.',
//       gradient: 'from-red-500 via-orange-500 to-yellow-500',
//       badge: 'Secure',
//       badgeColor: 'text-red-400 bg-red-400/10',
//       link: '/services/cyber-security',
//       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center'
//     }
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#f1f1f1] overflow-hidden">
//       {/* Animated Background Elements - Light Version */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-0 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#01adf0]/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -30, 30, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 30, -30, 0],
//             scale: [1, 0.8, 1.2, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-14">
//           <motion.span 
//             className="text-[#01adf0] font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#01adf0]/30 inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Services
//           </motion.span>
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-3 sm:mt-4 leading-[1.15]"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             We Deliver Truly{' '}
//             <span className="bg-gradient-to-r from-[#01adf0] to-purple-600 bg-clip-text text-transparent">Digital Solutions</span>
//           </motion.h2>
//           <motion.p 
//             className="text-gray-600 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             combine creativity, technology, and strategy to help businesses grow, engage, and succeed in the online world.
//           </motion.p>
//         </AnimatedSection>
        
//         <motion.div 
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {services.map((service, index) => {
//             const isHovered = hoveredIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 whileHover={{ 
//                   y: -8,
//                   scale: 1.02,
//                   boxShadow: "0 20px 60px -15px rgba(1,173,240,0.2)"
//                 }}
//                 className="group relative bg-white rounded-2xl p-5 sm:p-6 lg:p-7 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#01adf0]/50 overflow-hidden cursor-pointer"
//               >
//                 {/* Animated gradient background - #01adf0 */}
//                 <motion.div 
//                   className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 8, repeat: Infinity }}
//                 />

//                 {/* ===== IMAGE - SHOW ON HOVER ===== */}
//                 <AnimatePresence mode="wait">
//                   {isHovered ? (
//                     <motion.div 
//                       className="relative z-10 mb-3 sm:mb-4"
//                       initial={{ opacity: 0, scale: 0.8, y: 10 }}
//                       animate={{ opacity: 1, scale: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.8, y: 10 }}
//                       transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
//                     >
//                       <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-200">
//                         <img 
//                           src={service.image} 
//                           alt={service.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </motion.div>
//                   ) : (
//                     <motion.div 
//                       className="relative z-10 mb-3 sm:mb-4"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.8 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <motion.div 
//                         className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}
//                         whileHover={{ 
//                           scale: 1.15, 
//                           rotate: 10,
//                           transition: { duration: 0.3 }
//                         }}
//                       >
//                         <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
//                       </motion.div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
                
//                 {/* Title */}
//                 <motion.h3 
//                   className="relative z-10 text-base sm:text-lg font-bold text-gray-800 mb-1 group-hover:text-[#01adf0] transition-colors"
//                   whileHover={{ x: 5 }}
//                 >
//                   {service.title}
//                 </motion.h3>
                
//                 {/* Badge */}
//                 <motion.span 
//                   className={`relative z-10 inline-block text-[8px] sm:text-[10px] font-medium ${service.badgeColor} px-2 sm:px-2.5 py-0.5 rounded-full mb-2 sm:mb-2.5`}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {service.badge}
//                 </motion.span>
                
//                 {/* Description - Only show when not hovered */}
//                 <AnimatePresence mode="wait">
//                   {!isHovered && (
//                     <motion.p 
//                       className="relative z-10 text-gray-600 text-[10px] sm:text-xs leading-relaxed"
//                       initial={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {service.description}
//                     </motion.p>
//                   )}
//                 </AnimatePresence>
                
//                 {/* Learn More Link */}
//                 <motion.a
//                   href={service.link}
//                   whileHover={{ x: 8 }}
//                   className="relative z-10 inline-flex items-center text-[#01adf0] font-medium mt-2 sm:mt-3 group-hover:text-[#01adf0]/80 gap-1 text-[10px] sm:text-xs"
//                 >
//                   Learn More
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//                   </motion.span>
//                 </motion.a>

//                 {/* Floating icon in background */}
//                 <motion.div
//                   className="absolute -bottom-8 -right-8 text-5xl sm:text-7xl opacity-5 group-hover:opacity-10 transition-opacity"
//                   animate={{ 
//                     rotate: [0, 10, -10, 0],
//                     scale: [1, 1.1, 1]
//                   }}
//                   transition={{ duration: 10, repeat: Infinity }}
//                 >
//                   <service.icon className="h-20 w-20 sm:h-28 sm:w-28" />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div 
//           className="text-center mt-8 sm:mt-10 md:mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="/Contact"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 20px 40px rgba(1,173,240,0.3)",
//               y: -3
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
//           >
//             Explore All Services
//             <motion.span
//               animate={{ x: [0, 6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;







// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const ServicesSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const services = [
//     { 
//       title: 'Website Designing', 
//       icon: Monitor, 
//       description: 'We create visually stunning and user-friendly websites that reflect your brand identity and deliver a seamless user experience across all devices.',
//       gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
//       badge: 'Design',
//       badgeColor: 'text-blue-400 bg-blue-400/10',
//       link: '/services/website-designing',
//       image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Website Development', 
//       icon: Server, 
//       description: 'We develop fast, secure, and scalable websites tailored to your business needs, ensuring smooth performance and a seamless user experience.',
//       gradient: 'from-purple-500 via-pink-500 to-rose-500',
//       badge: 'Development',
//       badgeColor: 'text-purple-400 bg-purple-400/10',
//       link: '/services/website-development',
//       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Cognitive AI', 
//       icon: Brain, 
//       description: 'Advanced AI & ML solutions for intelligent automation and decision-making.',
//       gradient: 'from-green-500 via-emerald-500 to-teal-500',
//       badge: 'AI Powered',
//       badgeColor: 'text-green-400 bg-green-400/10',
//       link: '/services/cognitive-ai',
//       image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Cyber Security', 
//       icon: Lock, 
//       description: 'Advanced security solutions to protect your infrastructure and data.',
//       gradient: 'from-red-500 via-orange-500 to-yellow-500',
//       badge: 'Secure',
//       badgeColor: 'text-red-400 bg-red-400/10',
//       link: '/services/cyber-security',
//       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center'
//     }
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2e] to-[#0a0a1a] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-0 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-blue-600/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -30, 30, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-purple-600/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 30, -30, 0],
//             scale: [1, 0.8, 1.2, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
//           animate={{ 
//             scale: [1, 1.2, 0.9, 1],
//             rotate: [0, 180, 360, 0]
//           }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-14">
//           <motion.span 
//             className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/20 inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Services
//           </motion.span>
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             We Deliver Truly{' '}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Solutions</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             combine creativity, technology, and strategy to help businesses grow, engage, and succeed in the online world.
//           </motion.p>
//         </AnimatedSection>
        
//         <motion.div 
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {services.map((service, index) => {
//             const isHovered = hoveredIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 whileHover={{ 
//                   y: -8,
//                   scale: 1.02,
//                   boxShadow: "0 20px 60px -15px rgba(1,173,240,0.2)"
//                 }}
//                 className={`group relative rounded-2xl p-5 sm:p-6 lg:p-7 hover:shadow-2xl transition-all duration-500 border overflow-hidden cursor-pointer ${
//                   isHovered 
//                     ? 'bg-white border-[#01adf0]/50 shadow-[#01adf0]/20' 
//                     : 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-white/10 hover:border-white/20'
//                 }`}
//               >
//                 {/* Animated gradient background */}
//                 <motion.div 
//                   className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 8, repeat: Infinity }}
//                 />

//                 {/* ===== NORMAL STATE - Dark Theme ===== */}
//                 <AnimatePresence mode="wait">
//                   {!isHovered ? (
//                     <motion.div 
//                       className="relative z-10"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {/* Icon */}
//                       <motion.div 
//                         className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4`}
//                         whileHover={{ 
//                           scale: 1.15, 
//                           rotate: 10,
//                           transition: { duration: 0.3 }
//                         }}
//                       >
//                         <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
//                       </motion.div>
                      
//                       {/* Title */}
//                       <motion.h3 
//                         className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors"
//                         whileHover={{ x: 5 }}
//                       >
//                         {service.title}
//                       </motion.h3>
                      
//                       {/* Badge */}
//                       <motion.span 
//                         className={`inline-block text-[8px] sm:text-[10px] font-medium ${service.badgeColor} px-2 sm:px-2.5 py-0.5 rounded-full mb-2 sm:mb-2.5`}
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {service.badge}
//                       </motion.span>
                      
//                       {/* Description */}
//                       <p className="text-blue-200/70 text-[10px] sm:text-xs leading-relaxed">
//                         {service.description}
//                       </p>
                      
//                       {/* Learn More Link */}
//                       <motion.a
//                         href={service.link}
//                         whileHover={{ x: 8 }}
//                         className="inline-flex items-center text-[#01adf0] font-medium mt-2 sm:mt-3 group-hover:text-[#01adf0]/80 gap-1 text-[10px] sm:text-xs"
//                       >
//                         Learn More
//                         <motion.span
//                           animate={{ x: [0, 4, 0] }}
//                           transition={{ duration: 1.5, repeat: Infinity }}
//                         >
//                           <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//                         </motion.span>
//                       </motion.a>
//                     </motion.div>
//                   ) : (
//                     /* ===== HOVER STATE - White Background with Image ===== */
//                     <motion.div 
//                       className="relative z-10"
//                       initial={{ opacity: 0, scale: 0.95, y: 10 }}
//                       animate={{ opacity: 1, scale: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.95, y: 10 }}
//                       transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
//                     >
//                       {/* Image */}
//                       <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 mb-3">
//                         <img 
//                           src={service.image} 
//                           alt={service.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
                      
//                       {/* Title - Dark text on white bg */}
//                       <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
//                         {service.title}
//                       </h3>
                      
//                       {/* Badge */}
//                       <span className={`inline-block text-[8px] sm:text-[10px] font-medium ${service.badgeColor} px-2 sm:px-2.5 py-0.5 rounded-full mb-2 sm:mb-2.5`}>
//                         {service.badge}
//                       </span>
                      
//                       {/* Learn More Link - #01adf0 */}
//                       <a
//                         href={service.link}
//                         className="inline-flex items-center text-[#01adf0] font-medium mt-1 sm:mt-2 gap-1 text-[10px] sm:text-xs hover:text-[#01adf0]/80 transition-colors"
//                       >
//                         Learn More
//                         <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//                       </a>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Floating icon in background */}
//                 <motion.div
//                   className="absolute -bottom-8 -right-8 text-5xl sm:text-7xl opacity-5 group-hover:opacity-10 transition-opacity"
//                   animate={{ 
//                     rotate: [0, 10, -10, 0],
//                     scale: [1, 1.1, 1]
//                   }}
//                   transition={{ duration: 10, repeat: Infinity }}
//                 >
//                   <service.icon className="h-20 w-20 sm:h-28 sm:w-28" />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom CTA - #01adf0 color */}
//         <motion.div 
//           className="text-center mt-8 sm:mt-10 md:mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="/contact"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 20px 40px rgba(1,173,240,0.3)",
//               y: -3
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
//           >
//             Explore All Services
//             <motion.span
//               animate={{ x: [0, 6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;






// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const ServicesSection = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const services = [
//     { 
//       title: 'Website Designing', 
//       icon: Monitor, 
//       description: 'We create visually stunning and user-friendly websites that reflect your brand identity and deliver a seamless user experience across all devices.',
//       gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
//       badge: 'Design',
//       badgeColor: 'text-blue-400 bg-blue-400/10',
//       link: '/services/website-designing',
//       image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Website Development', 
//       icon: Server, 
//       description: 'We develop fast, secure, and scalable websites tailored to your business needs, ensuring smooth performance and a seamless user experience.',
//       gradient: 'from-purple-500 via-pink-500 to-rose-500',
//       badge: 'Development',
//       badgeColor: 'text-purple-400 bg-purple-400/10',
//       link: '/services/website-development',
//       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Cognitive AI', 
//       icon: Brain, 
//       description: 'Advanced AI & ML solutions for intelligent automation and decision-making.',
//       gradient: 'from-green-500 via-emerald-500 to-teal-500',
//       badge: 'AI Powered',
//       badgeColor: 'text-green-400 bg-green-400/10',
//       link: '/services/cognitive-ai',
//       image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&crop=center'
//     },
//     { 
//       title: 'Cyber Security', 
//       icon: Lock, 
//       description: 'Advanced security solutions to protect your infrastructure and data.',
//       gradient: 'from-red-500 via-orange-500 to-yellow-500',
//       badge: 'Secure',
//       badgeColor: 'text-red-400 bg-red-400/10',
//       link: '/services/cyber-security',
//       image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center'
//     }
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.15
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2e] to-[#0a0a1a] overflow-hidden">
//       {/* Animated Background Elements - Smaller */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-0 left-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-blue-600/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, 40, -40, 0],
//             y: [0, -20, 20, 0],
//             scale: [1, 1.1, 0.9, 1]
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-0 right-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-purple-600/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, -40, 40, 0],
//             y: [0, 20, -20, 0],
//             scale: [1, 0.9, 1.1, 1]
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
//           animate={{ 
//             scale: [1, 1.1, 0.9, 1],
//             rotate: [0, 180, 360, 0]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         {/* Header - Compact */}
//         <AnimatedSection className="text-center mb-6 sm:mb-8 md:mb-10">
//           <motion.span 
//             className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/20 inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Services
//           </motion.span>
//           <motion.h2 
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 sm:mt-3 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             We Deliver Truly{' '}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Solutions</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-1 max-w-2xl mx-auto text-[10px] sm:text-xs"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             combine creativity, technology, and strategy to help businesses grow, engage, and succeed in the online world.
//           </motion.p>
//         </AnimatedSection>
        
//         {/* Cards - Compact */}
//         <motion.div 
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {services.map((service, index) => {
//             const isHovered = hoveredIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 whileHover={{ 
//                   y: -6,
//                   scale: 1.02,
//                   boxShadow: "0 15px 40px -10px rgba(1,173,240,0.2)"
//                 }}
//                 className={`group relative rounded-xl p-4 sm:p-5 lg:p-6 hover:shadow-2xl transition-all duration-400 border overflow-hidden cursor-pointer ${
//                   isHovered 
//                     ? 'bg-white border-[#01adf0]/50 shadow-[#01adf0]/20' 
//                     : 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border-white/10 hover:border-white/20'
//                 }`}
//               >
//                 {/* Animated gradient background */}
//                 <motion.div 
//                   className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-400`}
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 8, repeat: Infinity }}
//                 />

//                 {/* ===== NORMAL STATE - Dark Theme ===== */}
//                 <AnimatePresence mode="wait">
//                   {!isHovered ? (
//                     <motion.div 
//                       className="relative z-10"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.25 }}
//                     >
//                       {/* Icon */}
//                       <motion.div 
//                         className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center shadow-md mb-2 sm:mb-3`}
//                         whileHover={{ 
//                           scale: 1.12, 
//                           rotate: 8,
//                           transition: { duration: 0.25 }
//                         }}
//                       >
//                         <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
//                       </motion.div>
                      
//                       {/* Title */}
//                       <motion.h3 
//                         className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-blue-400 transition-colors"
//                         whileHover={{ x: 4 }}
//                       >
//                         {service.title}
//                       </motion.h3>
                      
//                       {/* Badge */}
//                       <motion.span 
//                         className={`inline-block text-[8px] sm:text-[9px] font-medium ${service.badgeColor} px-1.5 sm:px-2 py-0.5 rounded-full mb-1.5 sm:mb-2`}
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {service.badge}
//                       </motion.span>
                      
//                       {/* Description - Shorter */}
//                       <p className="text-blue-200/70 text-[9px] sm:text-[10px] leading-relaxed line-clamp-3">
//                         {service.description}
//                       </p>
                      
//                       {/* Learn More Link */}
//                       <motion.a
//                         href={service.link}
//                         whileHover={{ x: 6 }}
//                         className="inline-flex items-center text-[#01adf0] font-medium mt-1.5 sm:mt-2 group-hover:text-[#01adf0]/80 gap-1 text-[9px] sm:text-[10px]"
//                       >
//                         Learn More
//                         <motion.span
//                           animate={{ x: [0, 4, 0] }}
//                           transition={{ duration: 1.5, repeat: Infinity }}
//                         >
//                           <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
//                         </motion.span>
//                       </motion.a>
//                     </motion.div>
//                   ) : (
//                     /* ===== HOVER STATE - White Background with Image ===== */
//                     <motion.div 
//                       className="relative z-10"
//                       initial={{ opacity: 0, scale: 0.95, y: 8 }}
//                       animate={{ opacity: 1, scale: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.95, y: 8 }}
//                       transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
//                     >
//                       {/* Image */}
//                       <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 mb-2">
//                         <img 
//                           src={service.image} 
//                           alt={service.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
                      
//                       {/* Title - Dark text on white bg */}
//                       <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-0.5">
//                         {service.title}
//                       </h3>
                      
//                       {/* Badge */}
//                       <span className={`inline-block text-[8px] sm:text-[9px] font-medium ${service.badgeColor} px-1.5 sm:px-2 py-0.5 rounded-full mb-1.5 sm:mb-2`}>
//                         {service.badge}
//                       </span>
                      
//                       {/* Learn More Link */}
//                       <a
//                         href={service.link}
//                         className="inline-flex items-center text-[#01adf0] font-medium mt-0.5 sm:mt-1 gap-1 text-[9px] sm:text-[10px] hover:text-[#01adf0]/80 transition-colors"
//                       >
//                         Learn More
//                         <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
//                       </a>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Floating icon in background */}
//                 <motion.div
//                   className="absolute -bottom-6 -right-6 text-4xl sm:text-6xl opacity-5 group-hover:opacity-10 transition-opacity"
//                   animate={{ 
//                     rotate: [0, 10, -10, 0],
//                     scale: [1, 1.1, 1]
//                   }}
//                   transition={{ duration: 10, repeat: Infinity }}
//                 >
//                   <service.icon className="h-16 w-16 sm:h-20 sm:w-20" />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom CTA - Compact */}
//         <motion.div 
//           className="text-center mt-5 sm:mt-6 md:mt-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="/contact"
//             whileHover={{ 
//               scale: 1.04,
//               boxShadow: "0 15px 30px rgba(1,173,240,0.3)",
//               y: -2
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-[9px] sm:text-[10px] md:text-xs"
//           >
//             Explore All Services
//             <motion.span
//               animate={{ x: [0, 5, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;




import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp, ChevronLeft, ChevronRight, Code, Palette, Cloud, Smartphone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // ===== CODERBOX WEBSITE SE LIYE GAYE REAL SERVICES =====
  const services = [
    {
      title: 'Web Development',
      subtitle: 'Custom websites tailored to your business needs',
      location: 'Full Stack Solutions',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop&crop=center',
      badge: 'Popular'
    },
    {
      title: 'AI Solutions',
      subtitle: 'Intelligent automation & decision-making',
      location: 'Machine Learning & AI',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop&crop=center',
      badge: 'AI Powered'
    },
    {
      title: 'Digital Marketing',
      subtitle: 'Strategic marketing for online growth',
      location: 'SEO, Social Media & Branding',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=500&fit=crop&crop=center',
      badge: 'Growth'
    },
    {
      title: 'UI/UX Design',
      subtitle: 'Stunning interfaces & seamless experiences',
      location: 'Creative Design Solutions',
      icon: Palette,
      gradient: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&crop=center',
      badge: 'Creative'
    },
    {
      title: 'Cloud Services',
      subtitle: 'Scalable infrastructure & cloud solutions',
      location: 'Cloud Migration & Management',
      icon: Cloud,
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center',
      badge: 'Enterprise'
    },
    {
      title: 'Mobile App Development',
      subtitle: 'Native & cross-platform mobile solutions',
      location: 'iOS & Android Apps',
      icon: Smartphone,
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&crop=center',
      badge: 'Mobile'
    },
    {
      title: 'Cyber Security',
      subtitle: 'Advanced security for your digital assets',
      location: 'Threat Protection & Compliance',
      icon: Shield,
      gradient: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&crop=center',
      badge: 'Secure'
    },
    {
      title: 'IT Consulting',
      subtitle: 'Expert guidance for digital transformation',
      location: 'Strategic IT Solutions',
      icon: Server,
      gradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&crop=center',
      badge: 'Consulting'
    }
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a2a] to-[#0a0a1a] overflow-hidden">
      
      {/* Animated Background Elements - Smaller */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
        {/* Header - Compact */}
        <AnimatedSection className="text-center mb-4 sm:mb-5 md:mb-6">
          <motion.span 
            className="text-[#01adf0] font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#01adf0]/20 inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Services
          </motion.span>
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Best IT Solutions{' '}
            <span className="bg-gradient-to-r from-[#01adf0] to-purple-500 bg-clip-text text-transparent">by CoderBox</span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/80 mt-1 max-w-2xl mx-auto text-[10px] sm:text-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive technology solutions designed to drive innovation and growth for your business
          </motion.p>
        </AnimatedSection>

        {/* ===== RESPONSIVE CAROUSEL - COMPACT ===== */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 250,
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
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="py-4 px-2 sm:px-6"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="pb-6">
                {({ isActive }) => (
                  <motion.div
                    className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                      isActive 
                        ? 'scale-100 shadow-2xl shadow-[#01adf0]/20 ring-2 ring-[#01adf0]/30' 
                        : 'scale-95 opacity-70'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Image Background */}
                    <div className="relative w-full aspect-[4/3]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 mix-blend-multiply`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Content - Smaller */}
                      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                        {/* Badge */}
                        {isActive && service.badge && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-2 right-2 bg-[#01adf0] text-white text-[7px] font-semibold px-2 py-0.5 rounded-full shadow-lg"
                          >
                            {service.badge}
                          </motion.div>
                        )}

                        {/* Icon - Smaller */}
                        <motion.div 
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-1.5 shadow-lg shadow-blue-500/20`}
                          whileHover={{ scale: 1.1, rotate: 8 }}
                        >
                          <service.icon className="h-4 w-4 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h3 className={`text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 leading-tight ${
                          isActive ? 'opacity-100' : 'opacity-80'
                        }`}>
                          {service.title}
                        </h3>
                        
                        {/* Subtitle */}
                        <p className="text-white/80 text-[8px] sm:text-[9px] mb-0.5">
                          {service.subtitle}
                        </p>
                        
                        {/* Location */}
                        <div className="flex items-center gap-1">
                          <span className="text-[#01adf0] text-[8px]">📍</span>
                          <span className="text-white/60 text-[7px] sm:text-[8px]">
                            {service.location}
                          </span>
                        </div>

                        {/* Learn More - Only Active */}
                        {isActive && (
                          <motion.a
                            href="#"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex items-center gap-1 text-[#01adf0] font-medium mt-1.5 text-[8px] sm:text-[9px] group"
                          >
                            Learn More
                            <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-1" />
                          </motion.a>
                        )}
                      </div>

                      {/* Featured Badge */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm text-white text-[6px] px-1.5 py-0.5 rounded-full border border-white/20"
                        >
                          ★ Featured
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Smaller */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
          </button>
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
          </button>
        </div>

        {/* Pagination Dots - Smaller */}
        <div className="flex items-center justify-center gap-1.5 mt-1">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-6 bg-[#01adf0]'
                  : 'w-1 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA - Compact */}
        <motion.div 
          className="text-center mt-3 sm:mt-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            whileHover={{ 
              scale: 1.04,
              boxShadow: "0 10px 25px rgba(1,173,240,0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-[8px] sm:text-[9px] md:text-[10px]"
          >
            Explore All Services
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;