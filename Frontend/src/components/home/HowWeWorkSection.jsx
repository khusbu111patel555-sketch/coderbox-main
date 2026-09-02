// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronRight, Lightbulb, Target, Shield, Rocket } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const HowWeWorkSection = () => {
//   const processSteps = [
//     {
//       number: '01',
//       title: 'Idea & Concept',
//       description: 'We start with your vision, transforming ideas into innovative technology solutions that drive real impact.',
//       icon: Lightbulb,
//       gradient: 'from-yellow-400 to-orange-500'
//     },
//     {
//       number: '02',
//       title: 'Market Research',
//       description: 'Deep market analysis to identify opportunities and drive strategic decisions for sustainable growth.',
//       icon: Target,
//       gradient: 'from-blue-400 to-cyan-500'
//     },
//     {
//       number: '03',
//       title: 'Support & Secure',
//       description: 'Comprehensive support and security to protect and grow your business value with confidence.',
//       icon: Shield,
//       gradient: 'from-green-400 to-emerald-500'
//     },
//     {
//       number: '04',
//       title: 'Launch & Grow',
//       description: 'Seamless launch and continuous growth strategies for long-term success and market leadership.',
//       icon: Rocket,
//       gradient: 'from-purple-400 to-pink-500'
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
//     <section id="how-we-work" className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 50, -50, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -50, 50, 0],
//             scale: [1, 0.8, 1.2, 1]
//           }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
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
//             How We Work
//           </motion.span>
//           <motion.h2 
//             className="text-5xl md:text-6xl font-bold text-white mt-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Simple Process</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             We follow a systematic approach to deliver exceptional results for your business
//           </motion.p>
//         </AnimatedSection>
        
//         <motion.div 
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {processSteps.map((step, index) => (
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
//               {/* Animated number background */}
//               <motion.div 
//                 className={`absolute top-0 right-0 text-9xl font-bold opacity-5 group-hover:opacity-10 transition-opacity ${step.gradient}`}
//                 animate={{ 
//                   scale: [1, 1.1, 1],
//                   rotate: [0, 5, -5, 0]
//                 }}
//                 transition={{ duration: 8, repeat: Infinity }}
//               >
//                 {step.number}
//               </motion.div>
              
//               <div className="relative z-10">
//                 <motion.div 
//                   className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
//                   whileHover={{ 
//                     scale: 1.15, 
//                     rotate: 10,
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   <step.icon className="h-8 w-8 text-white" />
//                 </motion.div>
                
//                 <motion.h3 
//                   className="text-xl font-bold text-white mb-3"
//                   whileHover={{ x: 5 }}
//                 >
//                   {step.title}
//                 </motion.h3>
                
//                 <p className="text-blue-200/70 text-sm leading-relaxed">{step.description}</p>
                
//                 <motion.div 
//                   className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
//                   animate={{ 
//                     x: [0, 5, 0],
//                   }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ChevronRight className="h-6 w-6 text-blue-400" />
//                 </motion.div>
//               </div>

//               {/* Animated border glow */}
//               <motion.div
//                 className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0"
//                 whileHover={{
//                   background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
//                   transition: { duration: 0.3 }
//                 }}
//               />
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
//             Ready to Start Your Project?
//             <motion.span
//               animate={{ x: [0, 6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ChevronRight className="h-5 w-5" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HowWeWorkSection;










import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Lightbulb, Target, Shield, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HowWeWorkSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Idea & Concept',
      description: 'We start with your vision, transforming ideas into innovative technology solutions that drive real impact.',
      icon: Lightbulb,
      gradient: 'from-yellow-400 to-orange-500',
      link: '/services/cognitive'
    },
    {
      number: '02',
      title: 'Market Research',
      description: 'Deep market analysis to identify opportunities and drive strategic decisions for sustainable growth.',
      icon: Target,
      gradient: 'from-blue-400 to-cyan-500',
      link: '/services/digital'
    },
    {
      number: '03',
      title: 'Support & Secure',
      description: 'Comprehensive support and security to protect and grow your business value with confidence.',
      icon: Shield,
      gradient: 'from-green-400 to-emerald-500',
      link: '/services/it'
    },
    {
      number: '04',
      title: 'Launch & Grow',
      description: 'Seamless launch and continuous growth strategies for long-term success and market leadership.',
      icon: Rocket,
      gradient: 'from-purple-400 to-pink-500',
      link: '/contact'
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
    <section id="how-we-work" className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.span 
            className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            How We Work
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Simple Process</span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We follow a systematic approach to deliver exceptional results for your business
          </motion.p>
        </AnimatedSection>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden cursor-pointer"
            >
              {/* Animated number background */}
              <motion.div 
                className={`absolute top-0 right-0 text-9xl font-bold opacity-5 group-hover:opacity-10 transition-opacity ${step.gradient}`}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                {step.number}
              </motion.div>
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-3"
                  whileHover={{ x: 5 }}
                >
                  {step.title}
                </motion.h3>
                
                <p className="text-blue-200/70 text-sm leading-relaxed">{step.description}</p>
                
                {/* ===== READ MORE WITH ARROW - HOVER PAR SHOW ===== */}
                <motion.div 
                  className="mt-4 flex items-center gap-2 text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Read More</span>
                  <motion.span
                    animate={{ 
                      x: [0, 5, 0],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.span>
                </motion.div>
              </div>

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0"
                whileHover={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA with enhanced animation */}
        <motion.div 
          className="text-center mt-16"
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
            Ready to Start Your Project?
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;