// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const ServicesSection = () => {
//   const services = [
//     { 
//       title: 'Cognitive AI', 
//       icon: Brain, 
//       description: 'Advanced AI & ML solutions for intelligent automation and decision-making',
//       gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
//       badge: 'AI Powered',
//       badgeColor: 'text-blue-400 bg-blue-400/10'
//     },
//     { 
//       title: 'Digital Experience', 
//       icon: Monitor, 
//       description: 'Transform your digital presence with cutting-edge technology and design',
//       gradient: 'from-purple-500 via-pink-500 to-rose-500',
//       badge: 'Creative',
//       badgeColor: 'text-purple-400 bg-purple-400/10'
//     },
//     { 
//       title: 'IT Infrastructure', 
//       icon: Server, 
//       description: 'Enterprise-grade IT solutions for scalable and reliable business growth',
//       gradient: 'from-green-500 via-emerald-500 to-teal-500',
//       badge: 'Enterprise',
//       badgeColor: 'text-green-400 bg-green-400/10'
//     },
//     { 
//       title: 'Cyber Security', 
//       icon: Lock, 
//       description: 'Advanced security solutions to protect your infrastructure and data',
//       gradient: 'from-red-500 via-orange-500 to-yellow-500',
//       badge: 'Secure',
//       badgeColor: 'text-red-400 bg-red-400/10'
//     }
//   ];

//   // Animation variants for staggered children
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
//     <section className="relative py-32 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2e] to-[#0a0a1a] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -30, 30, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 30, -30, 0],
//             scale: [1, 0.8, 1.2, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
//           animate={{ 
//             scale: [1, 1.2, 0.9, 1],
//             rotate: [0, 180, 360, 0]
//           }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
      
//       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
//         <AnimatedSection className="text-center mb-20">
//           <motion.span 
//             className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ 
//               y: [0, -3, 0],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Services
//           </motion.span>
//           <motion.h2 
//             className="text-5xl md:text-6xl font-bold text-white mt-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Best IT Solutions{' '}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">by CoderBox</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Comprehensive technology solutions designed to drive innovation and growth for your business
//           </motion.p>
//         </AnimatedSection>
        
//         <motion.div 
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -10,
//                 scale: 1.02,
//                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
//               }}
//               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden"
//             >
//               {/* Animated gradient background */}
//               <motion.div 
//                 className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//                 animate={{
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{ duration: 8, repeat: Infinity }}
//               />
              
//               <div className="relative z-10">
//                 <motion.div 
//                   className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
//                   whileHover={{ 
//                     scale: 1.15, 
//                     rotate: 10,
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   <service.icon className="h-8 w-8 text-white" />
//                 </motion.div>
                
//                 <motion.h3 
//                   className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
//                   whileHover={{ x: 5 }}
//                 >
//                   {service.title}
//                 </motion.h3>
                
//                 <motion.span 
//                   className={`inline-block text-xs font-medium ${service.badgeColor} px-3 py-1 rounded-full mb-3`}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {service.badge}
//                 </motion.span>
                
//                 <p className="text-blue-200/70 text-sm leading-relaxed">{service.description}</p>
                
//                 <motion.a
//                   href="#"
//                   whileHover={{ x: 8 }}
//                   className="inline-flex items-center text-blue-400 font-medium mt-4 group-hover:text-blue-300 gap-1"
//                 >
//                   Learn More
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="h-4 w-4" />
//                   </motion.span>
//                 </motion.a>
//               </div>

//               {/* Floating icon in background */}
//               <motion.div
//                 className="absolute -bottom-8 -right-8 text-8xl opacity-5 group-hover:opacity-10 transition-opacity"
//                 animate={{ 
//                   rotate: [0, 10, -10, 0],
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{ duration: 10, repeat: Infinity }}
//               >
//                 <service.icon className="h-32 w-32" />
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA with enhanced animation */}
//         <motion.div 
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
//               y: -3
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300"
//           >
//             Explore All Services
//             <motion.span
//               animate={{ x: [0, 6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ArrowRight className="h-5 w-5" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;






// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const ServicesSection = () => {
//   const services = [
//     { 
//       title: 'Cognitive AI', 
//       icon: Brain, 
//       description: 'Advanced AI & ML solutions for intelligent automation and decision-making',
//       gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
//       badge: 'AI Powered',
//       badgeColor: 'text-blue-400 bg-blue-400/10',
//       link: '/services/cognitive-ai'
//     },
//     { 
//       title: 'Digital Experience', 
//       icon: Monitor, 
//       description: 'Transform your digital presence with cutting-edge technology and design',
//       gradient: 'from-purple-500 via-pink-500 to-rose-500',
//       badge: 'Creative',
//       badgeColor: 'text-purple-400 bg-purple-400/10',
//       link: '/services/digital-experience'
//     },
//     { 
//       title: 'IT Infrastructure', 
//       icon: Server, 
//       description: 'Enterprise-grade IT solutions for scalable and reliable business growth',
//       gradient: 'from-green-500 via-emerald-500 to-teal-500',
//       badge: 'Enterprise',
//       badgeColor: 'text-green-400 bg-green-400/10',
//       link: '/services/it-infrastructure'
//     },
//     { 
//       title: 'Cyber Security', 
//       icon: Lock, 
//       description: 'Advanced security solutions to protect your infrastructure and data',
//       gradient: 'from-red-500 via-orange-500 to-yellow-500',
//       badge: 'Secure',
//       badgeColor: 'text-red-400 bg-red-400/10',
//       link: '/services/cyber-security'
//     }
//   ];

//   // Animation variants for staggered children
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
//     <section className="relative py-28 sm:py-32 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2e] to-[#0a0a1a] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -30, 30, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 30, -30, 0],
//             scale: [1, 0.8, 1.2, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
//           animate={{ 
//             scale: [1, 1.2, 0.9, 1],
//             rotate: [0, 180, 360, 0]
//           }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//         />
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <AnimatedSection className="text-center mb-16 sm:mb-20">
//           <motion.span 
//             className="text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-blue-500/20 inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ 
//               y: [0, -3, 0],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Services
//           </motion.span>
//           <motion.h2 
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-5 sm:mt-6 leading-[1.15]"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Best IT Solutions{' '}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">by CoderBox</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Comprehensive technology solutions designed to drive innovation and growth for your business
//           </motion.p>
//         </AnimatedSection>
        
//         <motion.div 
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -10,
//                 scale: 1.02,
//                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
//               }}
//               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden"
//             >
//               {/* Animated gradient background */}
//               <motion.div 
//                 className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//                 animate={{
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{ duration: 8, repeat: Infinity }}
//               />
              
//               <div className="relative z-10">
//                 <motion.div 
//                   className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
//                   whileHover={{ 
//                     scale: 1.15, 
//                     rotate: 10,
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
//                 </motion.div>
                
//                 <motion.h3 
//                   className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors"
//                   whileHover={{ x: 5 }}
//                 >
//                   {service.title}
//                 </motion.h3>
                
//                 <motion.span 
//                   className={`inline-block text-[10px] sm:text-xs font-medium ${service.badgeColor} px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full mb-2.5 sm:mb-3`}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {service.badge}
//                 </motion.span>
                
//                 <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                
//                 <motion.a
//                   href={service.link}
//                   whileHover={{ x: 8 }}
//                   className="inline-flex items-center text-blue-400 font-medium mt-3 sm:mt-4 group-hover:text-blue-300 gap-1 text-sm"
//                 >
//                   Learn More
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//                   </motion.span>
//                 </motion.a>
//               </div>

//               {/* Floating icon in background */}
//               <motion.div
//                 className="absolute -bottom-8 -right-8 text-6xl sm:text-8xl opacity-5 group-hover:opacity-10 transition-opacity"
//                 animate={{ 
//                   rotate: [0, 10, -10, 0],
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{ duration: 10, repeat: Infinity }}
//               >
//                 <service.icon className="h-24 w-24 sm:h-32 sm:w-32" />
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA with enhanced animation */}
//         <motion.div 
//           className="text-center mt-12 sm:mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="/services"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
//               y: -3
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
//           >
//             Explore All Services
//             <motion.span
//               animate={{ x: [0, 6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;








import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    { 
      title: 'Cognitive AI', 
      icon: Brain, 
      description: 'Advanced AI & ML solutions for intelligent automation and decision-making',
      gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
      badge: 'AI Powered',
      badgeColor: 'text-blue-400 bg-blue-400/10',
      link: '/services/cognitive-ai'
    },
    { 
      title: 'Digital Experience', 
      icon: Monitor, 
      description: 'Transform your digital presence with cutting-edge technology and design',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      badge: 'Creative',
      badgeColor: 'text-purple-400 bg-purple-400/10',
      link: '/services/digital-experience'
    },
    { 
      title: 'IT Infrastructure', 
      icon: Server, 
      description: 'Enterprise-grade IT solutions for scalable and reliable business growth',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      badge: 'Enterprise',
      badgeColor: 'text-green-400 bg-green-400/10',
      link: '/services/it-infrastructure'
    },
    { 
      title: 'Cyber Security', 
      icon: Lock, 
      description: 'Advanced security solutions to protect your infrastructure and data',
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      badge: 'Secure',
      badgeColor: 'text-red-400 bg-red-400/10',
      link: '/services/cyber-security'
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2e] to-[#0a0a1a] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 180, 360, 0]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-14">
          <motion.span 
            className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/20 inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Services
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Best IT Solutions{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">by CoderBox</span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive technology solutions designed to drive innovation and growth for your business
          </motion.p>
        </AnimatedSection>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 lg:p-7 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.span 
                  className={`inline-block text-[8px] sm:text-[10px] font-medium ${service.badgeColor} px-2 sm:px-2.5 py-0.5 rounded-full mb-2 sm:mb-2.5`}
                  whileHover={{ scale: 1.05 }}
                >
                  {service.badge}
                </motion.span>
                
                <p className="text-blue-200/70 text-[10px] sm:text-xs leading-relaxed">{service.description}</p>
                
                <motion.a
                  href={service.link}
                  whileHover={{ x: 8 }}
                  className="inline-flex items-center text-blue-400 font-medium mt-2 sm:mt-3 group-hover:text-blue-300 gap-1 text-[10px] sm:text-xs"
                >
                  Learn More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </motion.span>
                </motion.a>
              </div>

              {/* Floating icon in background */}
              <motion.div
                className="absolute -bottom-8 -right-8 text-5xl sm:text-7xl opacity-5 group-hover:opacity-10 transition-opacity"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <service.icon className="h-20 w-20 sm:h-28 sm:w-28" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA with enhanced animation */}
        <motion.div 
          className="text-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/services"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs md:text-sm"
          >
            Explore All Services
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;