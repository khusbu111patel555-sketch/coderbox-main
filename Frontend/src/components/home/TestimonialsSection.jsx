// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Star, Quote, Users, ThumbsUp, Award } from 'lucide-react';
// // import AnimatedSection from './AnimatedSection';

// // const TestimonialsSection = () => {
// //   const testimonials = [
// //     {
// //       quote: "Coderbox transformed our digital presence completely. Their AI solutions increased our efficiency by 300%.",
// //       author: "John Doe",
// //       company: "TechCorp Inc.",
// //       rating: 5,
// //       role: "CEO",
// //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "The team's expertise in digital marketing helped us achieve unprecedented growth in just 6 months.",
// //       author: "Jane Smith",
// //       company: "GrowthHub Ltd.",
// //       rating: 5,
// //       role: "Marketing Director",
// //       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
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
// //     <section className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             scale: [1, 1.2, 0.9, 1],
// //             opacity: [0.3, 0.5, 0.3]
// //           }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// //           animate={{ 
// //             x: [0, 50, -50, 0],
// //             y: [0, -50, 50, 0],
// //             scale: [1, 1.2, 0.8, 1]
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 blur-3xl"
// //           animate={{ 
// //             x: [0, -50, 50, 0],
// //             y: [0, 50, -50, 0],
// //             scale: [1, 0.8, 1.2, 1]
// //           }}
// //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
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
// //             Testimonials
// //           </motion.span>
// //           <motion.h2 
// //             className="text-5xl md:text-6xl font-bold text-white mt-6"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //           >
// //             What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
// //           </motion.h2>
// //           <motion.p 
// //             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //           >
// //             Real stories from real clients who have transformed their businesses with us
// //           </motion.p>
// //         </AnimatedSection>

// //         <motion.div 
// //           className="grid md:grid-cols-2 gap-8"
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.2 }}
// //         >
// //           {testimonials.map((testimonial, index) => (
// //             <motion.div
// //               key={index}
// //               variants={itemVariants}
// //               whileHover={{ 
// //                 y: -10,
// //                 scale: 1.02,
// //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// //               }}
// //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
// //             >
// //               {/* Animated gradient overlay */}
// //               <motion.div
// //                 className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-3xl"
// //                 whileHover={{
// //                   background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
// //                   transition: { duration: 0.3 }
// //                 }}
// //               />

// //               <div className="relative z-10">
// //                 {/* Quote icon with animation */}
// //                 <motion.div
// //                   whileHover={{ 
// //                     rotate: 10,
// //                     scale: 1.1
// //                   }}
// //                   className="mb-4"
// //                 >
// //                   <Quote className="h-10 w-10 text-blue-400/30" />
// //                 </motion.div>

// //                 {/* Rating stars with animation */}
// //                 <motion.div 
// //                   className="flex items-center gap-1 mb-4"
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   transition={{ delay: 0.3 + index * 0.1 }}
// //                 >
// //                   {[...Array(testimonial.rating)].map((_, i) => (
// //                     <motion.div
// //                       key={i}
// //                       whileHover={{ 
// //                         scale: 1.3, 
// //                         rotate: 10,
// //                         transition: { duration: 0.2 }
// //                       }}
// //                     >
// //                       <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
// //                     </motion.div>
// //                   ))}
// //                 </motion.div>

// //                 {/* Quote text */}
// //                 <motion.p 
// //                   className="text-white/80 text-lg leading-relaxed mb-6"
// //                   whileHover={{ x: 5 }}
// //                 >
// //                   "{testimonial.quote}"
// //                 </motion.p>

// //                 {/* Author section with image */}
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-4">
// //                     <motion.div
// //                       whileHover={{ scale: 1.1 }}
// //                       className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors"
// //                     >
// //                       <img 
// //                         src={testimonial.image} 
// //                         alt={testimonial.author}
// //                         className="w-full h-full object-cover"
// //                       />
// //                     </motion.div>
// //                     <div>
// //                       <motion.p 
// //                         className="text-white font-semibold"
// //                         whileHover={{ x: 3 }}
// //                       >
// //                         {testimonial.author}
// //                       </motion.p>
// //                       <p className="text-blue-200/60 text-sm">{testimonial.role}</p>
// //                       <p className="text-blue-200/40 text-xs">{testimonial.company}</p>
// //                     </div>
// //                   </div>
                  
// //                   {/* Trust badge */}
// //                   <motion.div
// //                     whileHover={{ scale: 1.1, rotate: 5 }}
// //                     className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-3 py-1 rounded-full border border-green-500/20"
// //                   >
// //                     <div className="flex items-center gap-1">
// //                       <ThumbsUp className="h-3 w-3 text-green-400" />
// //                       <span className="text-green-400 text-xs font-medium">Verified</span>
// //                     </div>
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Stats bar */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.3 }}
// //           viewport={{ once: true }}
// //           className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
// //         >
// //           {[
// //             { icon: Users, label: 'Happy Clients', value: '500+' },
// //             { icon: ThumbsUp, label: 'Satisfaction Rate', value: '99%' },
// //             { icon: Award, label: 'Awards Won', value: '12+' }
// //           ].map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               whileHover={{ 
// //                 scale: 1.05,
// //                 y: -5,
// //                 backgroundColor: "rgba(255,255,255,0.08)"
// //               }}
// //               className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 transition-all duration-300"
// //             >
// //               <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
// //               <div className="text-2xl font-bold text-white">{stat.value}</div>
// //               <div className="text-blue-200/60 text-sm">{stat.label}</div>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialsSection;





// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Star, Quote, Users, ThumbsUp, Award } from 'lucide-react';
// // import AnimatedSection from './AnimatedSection';

// // const TestimonialsSection = () => {
// //   const testimonials = [
// //     {
// //       quote: "Coderbox transformed our digital presence completely. Their AI solutions increased our efficiency by 300%.",
// //       author: "John Doe",
// //       company: "TechCorp Inc.",
// //       rating: 5,
// //       role: "CEO",
// //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "The team's expertise in digital marketing helped us achieve unprecedented growth in just 6 months.",
// //       author: "Jane Smith",
// //       company: "GrowthHub Ltd.",
// //       rating: 5,
// //       role: "Marketing Director",
// //       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
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
// //     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             scale: [1, 1.2, 0.9, 1],
// //             opacity: [0.3, 0.5, 0.3]
// //           }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// //           animate={{ 
// //             x: [0, 50, -50, 0],
// //             y: [0, -50, 50, 0],
// //             scale: [1, 1.2, 0.8, 1]
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 blur-3xl"
// //           animate={{ 
// //             x: [0, -50, 50, 0],
// //             y: [0, 50, -50, 0],
// //             scale: [1, 0.8, 1.2, 1]
// //           }}
// //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
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
// //             Testimonials
// //           </motion.span>
// //           <motion.h2 
// //             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //           >
// //             What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
// //           </motion.h2>
// //           <motion.p 
// //             className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //           >
// //             Real stories from real clients who have transformed their businesses with us
// //           </motion.p>
// //         </AnimatedSection>

// //         <motion.div 
// //           className="grid md:grid-cols-2 gap-5 sm:gap-6"
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.2 }}
// //         >
// //           {testimonials.map((testimonial, index) => (
// //             <motion.div
// //               key={index}
// //               variants={itemVariants}
// //               whileHover={{ 
// //                 y: -8,
// //                 scale: 1.02,
// //                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// //               }}
// //               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
// //             >
// //               {/* Animated gradient overlay */}
// //               <motion.div
// //                 className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl sm:rounded-3xl"
// //                 whileHover={{
// //                   background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
// //                   transition: { duration: 0.3 }
// //                 }}
// //               />

// //               <div className="relative z-10">
// //                 {/* Quote icon with animation */}
// //                 <motion.div
// //                   whileHover={{ 
// //                     rotate: 10,
// //                     scale: 1.1
// //                   }}
// //                   className="mb-3"
// //                 >
// //                   <Quote className="h-8 w-8 text-blue-400/30" />
// //                 </motion.div>

// //                 {/* Rating stars with animation */}
// //                 <motion.div 
// //                   className="flex items-center gap-1 mb-3"
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   transition={{ delay: 0.3 + index * 0.1 }}
// //                 >
// //                   {[...Array(testimonial.rating)].map((_, i) => (
// //                     <motion.div
// //                       key={i}
// //                       whileHover={{ 
// //                         scale: 1.3, 
// //                         rotate: 10,
// //                         transition: { duration: 0.2 }
// //                       }}
// //                     >
// //                       <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
// //                     </motion.div>
// //                   ))}
// //                 </motion.div>

// //                 {/* Quote text */}
// //                 <motion.p 
// //                   className="text-white/80 text-sm sm:text-base leading-relaxed mb-4"
// //                   whileHover={{ x: 5 }}
// //                 >
// //                   "{testimonial.quote}"
// //                 </motion.p>

// //                 {/* Author section with image */}
// //                 <div className="flex items-center justify-between">
// //                   <div className="flex items-center gap-3">
// //                     <motion.div
// //                       whileHover={{ scale: 1.1 }}
// //                       className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors"
// //                     >
// //                       <img 
// //                         src={testimonial.image} 
// //                         alt={testimonial.author}
// //                         className="w-full h-full object-cover"
// //                       />
// //                     </motion.div>
// //                     <div>
// //                       <motion.p 
// //                         className="text-white font-semibold text-sm"
// //                         whileHover={{ x: 3 }}
// //                       >
// //                         {testimonial.author}
// //                       </motion.p>
// //                       <p className="text-blue-200/60 text-[10px] sm:text-xs">{testimonial.role}</p>
// //                       <p className="text-blue-200/40 text-[8px] sm:text-[10px]">{testimonial.company}</p>
// //                     </div>
// //                   </div>
                  
// //                   {/* Trust badge */}
// //                   <motion.div
// //                     whileHover={{ scale: 1.1, rotate: 5 }}
// //                     className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-2 py-0.5 rounded-full border border-green-500/20"
// //                   >
// //                     <div className="flex items-center gap-0.5">
// //                       <ThumbsUp className="h-2.5 w-2.5 text-green-400" />
// //                       <span className="text-green-400 text-[8px] sm:text-[10px] font-medium">Verified</span>
// //                     </div>
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Stats bar */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.3 }}
// //           viewport={{ once: true }}
// //           className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto"
// //         >
// //           {[
// //             { icon: Users, label: 'Happy Clients', value: '500+' },
// //             { icon: ThumbsUp, label: 'Satisfaction Rate', value: '99%' },
// //             { icon: Award, label: 'Awards Won', value: '12+' }
// //           ].map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               whileHover={{ 
// //                 scale: 1.05,
// //                 y: -5,
// //                 backgroundColor: "rgba(255,255,255,0.08)"
// //               }}
// //               className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center border border-white/10 transition-all duration-300"
// //             >
// //               <stat.icon className="h-5 w-5 text-blue-400 mx-auto mb-1.5" />
// //               <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
// //               <div className="text-blue-200/60 text-[10px] sm:text-xs">{stat.label}</div>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialsSection;





// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import { Star, Quote, Users, ThumbsUp, Award, ChevronLeft, ChevronRight } from 'lucide-react';
// // import AnimatedSection from './AnimatedSection';

// // const TestimonialsSection = () => {
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Expanded to 10 Rich Testimonials
// //   const testimonials = [
// //     {
// //       quote: "Coderbox transformed our digital presence completely. Their AI solutions increased our efficiency by 300%.",
// //       author: "John Doe",
// //       company: "TechCorp Inc.",
// //       rating: 5,
// //       role: "CEO",
// //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "The team's expertise in digital marketing helped us achieve unprecedented growth in just 6 months.",
// //       author: "Jane Smith",
// //       company: "GrowthHub Ltd.",
// //       rating: 5,
// //       role: "Marketing Director",
// //       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "Delivered our complex web portal 2 weeks ahead of deadline. The UX design quality is top notch!",
// //       author: "Robert Miller",
// //       company: "Nexus Systems",
// //       rating: 5,
// //       role: "CTO",
// //       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "Outstanding SEO & Web Development services. Our organic search leads spiked by 180% within 90 days.",
// //       author: "Sophia Williams",
// //       company: "Aura Creative",
// //       rating: 5,
// //       role: "Founder",
// //       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "Their team handled our cloud migration seamlessly. ZERO downtime experienced during the entire transition.",
// //       author: "David Lee",
// //       company: "FinTech Global",
// //       rating: 5,
// //       role: "VP of Engineering",
// //       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "Remarkable custom software development! Built a scalable mobile app that hit 100k downloads in 1 month.",
// //       author: "Emily Davis",
// //       company: "AppScale Studio",
// //       rating: 5,
// //       role: "Product Manager",
// //       image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "Very professional workflow, high responsiveness, and unbeatable design system aesthetics. Highly recommended!",
// //       author: "Michael Brown",
// //       company: "Elevate Brand",
// //       rating: 5,
// //       role: "Managing Director",
// //       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "They revitalized our outdated e-commerce store into a high-converting automated sales machine.",
// //       author: "Olivia Taylor",
// //       company: "Luxe Retail",
// //       rating: 5,
// //       role: "Head of E-Commerce",
// //       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "The best tech collaboration partner we've worked with. Their proactive communication is unmatched.",
// //       author: "Alex Johnson",
// //       company: "Venture Wave",
// //       rating: 5,
// //       role: "Chief Innovation Officer",
// //       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       quote: "Delivered robust security protocols and AI automation that saved us 40+ manual working hours weekly.",
// //       author: "Sarah Wilson",
// //       company: "DataShield Security",
// //       rating: 5,
// //       role: "Chief Operations Officer",
// //       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
// //     }
// //   ];

// //   // Auto Slider Effect Interval
// //   useEffect(() => {
// //     if (isPaused) return;

// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
// //     }, 3500);

// //     return () => clearInterval(interval);
// //   }, [isPaused, testimonials.length]);

// //   const handleNext = () => {
// //     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
// //   };

// //   const handlePrev = () => {
// //     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
// //   };

// //   return (
// //     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
// //           animate={{ 
// //             scale: [1, 1.2, 0.9, 1],
// //             opacity: [0.3, 0.5, 0.3]
// //           }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
// //           animate={{ 
// //             x: [0, 50, -50, 0],
// //             y: [0, -50, 50, 0],
// //             scale: [1, 1.2, 0.8, 1]
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 blur-3xl"
// //           animate={{ 
// //             x: [0, -50, 50, 0],
// //             y: [0, 50, -50, 0],
// //             scale: [1, 0.8, 1.2, 1]
// //           }}
// //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
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
// //             Testimonials
// //           </motion.span>
// //           <motion.h2 
// //             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //           >
// //             What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
// //           </motion.h2>
// //           <motion.p 
// //             className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //           >
// //             Real stories from 10+ real clients who transformed their businesses with us
// //           </motion.p>
// //         </AnimatedSection>

// //         {/* Carousel Slider with Auto-Play & Pause on Hover */}
// //         <div 
// //           className="relative max-w-6xl mx-auto overflow-hidden px-2 py-4"
// //           onMouseEnter={() => setIsPaused(true)}
// //           onMouseLeave={() => setIsPaused(false)}
// //         >
// //           <motion.div 
// //             className="flex gap-5 sm:gap-6"
// //             animate={{ x: `-${currentIndex * (100 / (window.innerWidth >= 768 ? 2 : 1))}%` }}
// //             transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
// //           >
// //             {testimonials.map((testimonial, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="min-w-full md:min-w-[calc(50%-12px)] group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
// //                 whileHover={{ 
// //                   y: -6,
// //                   scale: 1.01,
// //                   boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
// //                 }}
// //               >
// //                 {/* Animated gradient overlay */}
// //                 <motion.div
// //                   className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl sm:rounded-3xl pointer-events-none"
// //                   whileHover={{
// //                     background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
// //                     transition: { duration: 0.3 }
// //                   }}
// //                 />

// //                 <div className="relative z-10">
// //                   {/* Quote icon with animation */}
// //                   <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-3">
// //                     <Quote className="h-8 w-8 text-blue-400/30" />
// //                   </motion.div>

// //                   {/* Rating stars */}
// //                   <div className="flex items-center gap-1 mb-3">
// //                     {[...Array(testimonial.rating)].map((_, i) => (
// //                       <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
// //                     ))}
// //                   </div>

// //                   {/* Quote text */}
// //                   <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
// //                     "{testimonial.quote}"
// //                   </p>
// //                 </div>

// //                 {/* Author section */}
// //                 <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
// //                   <div className="flex items-center gap-3">
// //                     <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors">
// //                       <img 
// //                         src={testimonial.image} 
// //                         alt={testimonial.author}
// //                         className="w-full h-full object-cover"
// //                       />
// //                     </div>
// //                     <div>
// //                       <p className="text-white font-semibold text-sm">{testimonial.author}</p>
// //                       <p className="text-blue-200/60 text-[10px] sm:text-xs">{testimonial.role}</p>
// //                       <p className="text-blue-200/40 text-[8px] sm:text-[10px]">{testimonial.company}</p>
// //                     </div>
// //                   </div>
                  
// //                   {/* Trust badge */}
// //                   <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
// //                     <div className="flex items-center gap-1">
// //                       <ThumbsUp className="h-2.5 w-2.5 text-green-400" />
// //                       <span className="text-green-400 text-[8px] sm:text-[10px] font-medium">Verified</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>

// //           {/* Navigation Arrows */}
// //           <button
// //             onClick={handlePrev}
// //             className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-blue-600/80 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full border border-white/10 transition-all duration-300"
// //             aria-label="Previous Testimonial"
// //           >
// //             <ChevronLeft className="h-5 w-5" />
// //           </button>
// //           <button
// //             onClick={handleNext}
// //             className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-blue-600/80 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full border border-white/10 transition-all duration-300"
// //             aria-label="Next Testimonial"
// //           >
// //             <ChevronRight className="h-5 w-5" />
// //           </button>
// //         </div>

// //         {/* Carousel Pagination Indicator Dots */}
// //         <div className="flex items-center justify-center gap-2 mt-6">
// //           {testimonials.map((_, idx) => (
// //             <button
// //               key={idx}
// //               onClick={() => setCurrentIndex(idx)}
// //               className={`h-2 rounded-full transition-all duration-300 ${
// //                 idx === currentIndex
// //                   ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400'
// //                   : 'w-2 bg-white/20 hover:bg-white/40'
// //               }`}
// //               aria-label={`Go to slide ${idx + 1}`}
// //             />
// //           ))}
// //         </div>

// //         {/* Stats bar */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.3 }}
// //           viewport={{ once: true }}
// //           className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto"
// //         >
// //           {[
// //             { icon: Users, label: 'Happy Clients', value: '500+' },
// //             { icon: ThumbsUp, label: 'Satisfaction Rate', value: '99%' },
// //             { icon: Award, label: 'Awards Won', value: '12+' }
// //           ].map((stat, index) => (
// //             <motion.div
// //               key={index}
// //               whileHover={{ 
// //                 scale: 1.05,
// //                 y: -5,
// //                 backgroundColor: "rgba(255,255,255,0.08)"
// //               }}
// //               className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center border border-white/10 transition-all duration-300"
// //             >
// //               <stat.icon className="h-5 w-5 text-blue-400 mx-auto mb-1.5" />
// //               <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
// //               <div className="text-blue-200/60 text-[10px] sm:text-xs">{stat.label}</div>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialsSection;





// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Star, Quote, Users, ThumbsUp, Award, ChevronLeft, ChevronRight, Phone, Briefcase } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const TestimonialsSection = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeStatIndex, setActiveStatIndex] = useState(0);

//   // Expanded to 10 Rich Testimonials
//   const testimonials = [
//     {
//       quote: "Coderbox transformed our digital presence completely. Their AI solutions increased our efficiency by 300%.",
//       author: "John Doe",
//       company: "TechCorp Inc.",
//       rating: 5,
//       role: "CEO",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "The team's expertise in digital marketing helped us achieve unprecedented growth in just 6 months.",
//       author: "Jane Smith",
//       company: "GrowthHub Ltd.",
//       rating: 5,
//       role: "Marketing Director",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Delivered our complex web portal 2 weeks ahead of deadline. The UX design quality is top notch!",
//       author: "Robert Miller",
//       company: "Nexus Systems",
//       rating: 5,
//       role: "CTO",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Outstanding SEO & Web Development services. Our organic search leads spiked by 180% within 90 days.",
//       author: "Sophia Williams",
//       company: "Aura Creative",
//       rating: 5,
//       role: "Founder",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Their team handled our cloud migration seamlessly. ZERO downtime experienced during the entire transition.",
//       author: "David Lee",
//       company: "FinTech Global",
//       rating: 5,
//       role: "VP of Engineering",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Remarkable custom software development! Built a scalable mobile app that hit 100k downloads in 1 month.",
//       author: "Emily Davis",
//       company: "AppScale Studio",
//       rating: 5,
//       role: "Product Manager",
//       image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Very professional workflow, high responsiveness, and unbeatable design system aesthetics. Highly recommended!",
//       author: "Michael Brown",
//       company: "Elevate Brand",
//       rating: 5,
//       role: "Managing Director",
//       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "They revitalized our outdated e-commerce store into a high-converting automated sales machine.",
//       author: "Olivia Taylor",
//       company: "Luxe Retail",
//       rating: 5,
//       role: "Head of E-Commerce",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "The best tech collaboration partner we've worked with. Their proactive communication is unmatched.",
//       author: "Alex Johnson",
//       company: "Venture Wave",
//       rating: 5,
//       role: "Chief Innovation Officer",
//       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Delivered robust security protocols and AI automation that saved us 40+ manual working hours weekly.",
//       author: "Sarah Wilson",
//       company: "DataShield Security",
//       rating: 5,
//       role: "Chief Operations Officer",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
//     }
//   ];

//   // Stats Data - Image ke jaisa
//   const statsData = [
//     { icon: Users, label: 'Lead Generated', value: '100%', color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20', gradient: 'from-blue-500 to-cyan-500' },
//     { icon: ThumbsUp, label: 'Appearance', value: '96%', color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/20', gradient: 'from-purple-500 to-pink-500' },
//     { icon: Award, label: 'Sales Hike', value: '92%', color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/20', gradient: 'from-green-500 to-emerald-500' }
//   ];

//   // Auto Slider Effect Interval
//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [isPaused, testimonials.length]);

//   // Auto rotate stats
//   useEffect(() => {
//     const statInterval = setInterval(() => {
//       setActiveStatIndex((prev) => (prev + 1) % statsData.length);
//     }, 3000);

//     return () => clearInterval(statInterval);
//   }, [statsData.length]);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 0.9, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
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
//             Testimonials
//           </motion.span>
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Real stories from 10+ real clients who transformed their businesses with us
//           </motion.p>
//         </AnimatedSection>

//         {/* Carousel Slider with Auto-Play & Pause on Hover */}
//         <div 
//           className="relative max-w-6xl mx-auto overflow-hidden px-2 py-4"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <motion.div 
//             className="flex gap-5 sm:gap-6"
//             animate={{ x: `-${currentIndex * (100 / (window.innerWidth >= 768 ? 2 : 1))}%` }}
//             transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 className="min-w-full md:min-w-[calc(50%-12px)] group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
//                 whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)" }}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl sm:rounded-3xl pointer-events-none"
//                   whileHover={{
//                     background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
//                     transition: { duration: 0.3 }
//                   }}
//                 />

//                 <div className="relative z-10">
//                   <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-3">
//                     <Quote className="h-8 w-8 text-blue-400/30" />
//                   </motion.div>

//                   <div className="flex items-center gap-1 mb-3">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
//                     ))}
//                   </div>

//                   <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
//                     "{testimonial.quote}"
//                   </p>
//                 </div>

//                 <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors">
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.author}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-white font-semibold text-sm">{testimonial.author}</p>
//                       <p className="text-blue-200/60 text-[10px] sm:text-xs">{testimonial.role}</p>
//                       <p className="text-blue-200/40 text-[8px] sm:text-[10px]">{testimonial.company}</p>
//                     </div>
//                   </div>
                  
//                   <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
//                     <div className="flex items-center gap-1">
//                       <ThumbsUp className="h-2.5 w-2.5 text-green-400" />
//                       <span className="text-green-400 text-[8px] sm:text-[10px] font-medium">Verified</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-blue-600/80 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full border border-white/10 transition-all duration-300"
//             aria-label="Previous Testimonial"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-blue-600/80 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full border border-white/10 transition-all duration-300"
//             aria-label="Next Testimonial"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Carousel Pagination Indicator Dots */}
//         <div className="flex items-center justify-center gap-2 mt-6">
//           {testimonials.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 idx === currentIndex
//                   ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400'
//                   : 'w-2 bg-white/20 hover:bg-white/40'
//               }`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>

//         {/* ===== STATS CARDS - IMAGE KE JAISA ===== */}
//         <div className="mt-12 sm:mt-14">
//           {/* Top Buttons - Schedule a Call & See Our Portfolio */}
//           <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(1,173,240,0.3)", y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#01adf0] text-white font-semibold text-xs sm:text-sm hover:shadow-xl transition-all duration-300"
//             >
//               <Phone className="h-4 w-4" />
//               Schedule a Call
//             </motion.a>
//             <motion.a
//               href="/portfolio"
//               whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99,102,241,0.2)", y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//             >
//               <Briefcase className="h-4 w-4" />
//               See Our Portfolio
//             </motion.a>
//           </div>

//           {/* 3 Stats Cards - Click se ek-ek karke samne aayein */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
//             {statsData.map((stat, index) => {
//               const isActive = index === activeStatIndex;
              
//               return (
//                 <motion.div
//                   key={index}
//                   onClick={() => setActiveStatIndex(index)}
//                   whileHover={{ 
//                     scale: 1.04,
//                     y: -4,
//                     boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)"
//                   }}
//                   className={`relative cursor-pointer rounded-2xl p-5 sm:p-6 text-center border transition-all duration-500 overflow-hidden ${
//                     isActive 
//                       ? `bg-gradient-to-br ${stat.gradient} border-${stat.color.split('-')[1]}/50 shadow-2xl shadow-${stat.color.split('-')[1]}/20 scale-105` 
//                       : `${stat.bgColor} border-${stat.color.split('-')[1]}/20 hover:border-${stat.color.split('-')[1]}/40`
//                   }`}
//                 >
//                   {/* Animated Glow */}
//                   <motion.div
//                     className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 ${isActive ? 'opacity-10' : 'group-hover:opacity-5'} transition-opacity duration-500`}
//                   />

//                   {/* Icon */}
//                   <motion.div 
//                     className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto shadow-lg shadow-${stat.color.split('-')[1]}/20 mb-3`}
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     animate={isActive ? { scale: [1, 1.1, 1], rotate: [0, 5, 0] } : {}}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <stat.icon className="h-7 w-7 text-white" />
//                   </motion.div>

//                   {/* Value */}
//                   <motion.div 
//                     className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-0.5`}
//                     animate={isActive ? { scale: [1, 1.1, 1] } : {}}
//                     transition={{ duration: 0.4 }}
//                   >
//                     {stat.value}
//                   </motion.div>

//                   {/* Label */}
//                   <div className="text-blue-200/60 text-xs sm:text-sm font-medium">{stat.label}</div>

//                   {/* Active Indicator Line */}
//                   <motion.div 
//                     className={`h-0.5 bg-gradient-to-r ${stat.gradient} mx-auto mt-3 rounded-full transition-all duration-500 ${
//                       isActive ? 'w-12' : 'w-0'
//                     }`}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Click instruction */}
//           <p className="text-center text-blue-200/30 text-[8px] sm:text-[9px] mt-3">
//             Click on any stat card to view details
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;





// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Star, Quote, Users, ThumbsUp, Award, ChevronLeft, ChevronRight, Phone, Briefcase } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const TestimonialsSection = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   // ===== CARD COLUMNS STATE =====
//   const [columns, setColumns] = useState([
//     [
//       { value: '100%', label: 'Lead Generated', id: '1a' },
//       { value: '96%', label: 'Appearance', id: '1b' },
//       { value: '92%', label: 'Sales Hike', id: '1c' }
//     ],
//     [
//       { value: '96%', label: 'Appearance', id: '2a' },
//       { value: '92%', label: 'Sales Hike', id: '2b' },
//       { value: '100%', label: 'Lead Generated', id: '2c' }
//     ],
//     [
//       { value: '92%', label: 'Sales Hike', id: '3a' },
//       { value: '100%', label: 'Lead Generated', id: '3b' },
//       { value: '96%', label: 'Appearance', id: '3c' }
//     ]
//   ]);

//   // Testimonials Data
//   const testimonials = [
//     {
//       quote: "Coderbox transformed our digital presence completely. Their AI solutions increased our efficiency by 300%.",
//       author: "John Doe",
//       company: "TechCorp Inc.",
//       rating: 5,
//       role: "CEO",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "The team's expertise in digital marketing helped us achieve unprecedented growth in just 6 months.",
//       author: "Jane Smith",
//       company: "GrowthHub Ltd.",
//       rating: 5,
//       role: "Marketing Director",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Delivered our complex web portal 2 weeks ahead of deadline. The UX design quality is top notch!",
//       author: "Robert Miller",
//       company: "Nexus Systems",
//       rating: 5,
//       role: "CTO",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Outstanding SEO & Web Development services. Our organic search leads spiked by 180% within 90 days.",
//       author: "Sophia Williams",
//       company: "Aura Creative",
//       rating: 5,
//       role: "Founder",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Their team handled our cloud migration seamlessly. ZERO downtime experienced during the entire transition.",
//       author: "David Lee",
//       company: "FinTech Global",
//       rating: 5,
//       role: "VP of Engineering",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Remarkable custom software development! Built a scalable mobile app that hit 100k downloads in 1 month.",
//       author: "Emily Davis",
//       company: "AppScale Studio",
//       rating: 5,
//       role: "Product Manager",
//       image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "Very professional workflow, high responsiveness, and unbeatable design system aesthetics. Highly recommended!",
//       author: "Michael Brown",
//       company: "Elevate Brand",
//       rating: 5,
//       role: "Managing Director",
//       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "They revitalized our outdated e-commerce store into a high-converting automated sales machine.",
//       author: "Olivia Taylor",
//       company: "Luxe Retail",
//       rating: 5,
//       role: "Head of E-Commerce",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
//     },
//     {
//       quote: "The best tech collaboration partner we've worked with. Their proactive communication is unmatched.",
//       author: "Alex Johnson",
//       company: "Venture Wave",
//       rating: 5,
//       role: "Chief Innovation Officer",
//       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
//     }
//   ];

//   // Auto Slider Effect Interval
//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [isPaused, testimonials.length]);

//   // ===== ROTATE COLUMN ON CLICK =====
//   const rotateColumn = (colIndex) => {
//     setColumns(prevColumns => {
//       const newColumns = [...prevColumns];
//       const column = [...newColumns[colIndex]];
//       const first = column.shift();
//       column.push(first);
//       newColumns[colIndex] = column;
//       return newColumns;
//     });
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   // Get color based on label
//   const getColor = (label) => {
//     if (label === 'Lead Generated') return 'from-blue-500 to-cyan-500 text-blue-400 border-blue-500/50 shadow-blue-500/20';
//     if (label === 'Appearance') return 'from-purple-500 to-pink-500 text-purple-400 border-purple-500/50 shadow-purple-500/20';
//     if (label === 'Sales Hike') return 'from-green-500 to-emerald-500 text-green-400 border-green-500/50 shadow-green-500/20';
//     return 'from-blue-500 to-cyan-500 text-blue-400 border-blue-500/50 shadow-blue-500/20';
//   };

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f1f1f1] overflow-hidden">
      
//       {/* Animated Background Elements - Light Version */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 0.9, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/20 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         {/* Header - Compact */}
//         <AnimatedSection className="text-center mb-4 sm:mb-6">
//           <motion.span 
//             className="text-[#01adf0] font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#01adf0]/20 inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Testimonials
//           </motion.span>
//           <motion.h2 
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             What Our <span className="bg-gradient-to-r from-[#01adf0] to-purple-500 bg-clip-text text-transparent">Clients Say</span>
//           </motion.h2>
//           <motion.p 
//             className="text-gray-500 mt-1 max-w-2xl mx-auto text-[10px] sm:text-xs"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Real stories from real clients who transformed their businesses with us
//           </motion.p>
//         </AnimatedSection>

//         {/* Testimonials Carousel - Compact */}
//         <div 
//           className="relative max-w-6xl mx-auto overflow-hidden px-2 py-2"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <motion.div 
//             className="flex gap-4 sm:gap-5"
//             animate={{ x: `-${currentIndex * (100 / (window.innerWidth >= 768 ? 2 : 1))}%` }}
//             transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 className="min-w-full md:min-w-[calc(50%-12px)] group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-gray-200 hover:border-[#01adf0]/30 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl"
//                 whileHover={{ y: -4, scale: 1.01, boxShadow: "0 15px 40px -10px rgba(1,173,240,0.15)" }}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-[#01adf0]/0 via-purple-500/0 to-pink-500/0 rounded-2xl sm:rounded-3xl pointer-events-none"
//                   whileHover={{
//                     background: "linear-gradient(135deg, rgba(1,173,240,0.04), rgba(147,51,234,0.04), rgba(236,72,153,0.04))",
//                     transition: { duration: 0.3 }
//                   }}
//                 />

//                 <div className="relative z-10">
//                   <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-2">
//                     <Quote className="h-6 w-6 text-[#01adf0]/30" />
//                   </motion.div>

//                   <div className="flex items-center gap-1 mb-2">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
//                     ))}
//                   </div>

//                   <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4">
//                     "{testimonial.quote}"
//                   </p>
//                 </div>

//                 <div className="relative z-10 flex items-center justify-between pt-2 border-t border-gray-100">
//                   <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#01adf0]/20 group-hover:border-[#01adf0] transition-colors">
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.author}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-gray-800 font-semibold text-xs sm:text-sm">{testimonial.author}</p>
//                       <p className="text-gray-500 text-[8px] sm:text-[9px]">{testimonial.role}</p>
//                       <p className="text-gray-400 text-[7px] sm:text-[8px]">{testimonial.company}</p>
//                     </div>
//                   </div>
                  
//                   <div className="bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
//                     <div className="flex items-center gap-0.5">
//                       <ThumbsUp className="h-2 w-2 text-green-500" />
//                       <span className="text-green-600 text-[7px] sm:text-[8px] font-medium">Verified</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#01adf0] backdrop-blur-sm text-gray-600 hover:text-white p-1.5 sm:p-2 rounded-full border border-gray-200 hover:border-[#01adf0] transition-all duration-300 shadow-sm"
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#01adf0] backdrop-blur-sm text-gray-600 hover:text-white p-1.5 sm:p-2 rounded-full border border-gray-200 hover:border-[#01adf0] transition-all duration-300 shadow-sm"
//           >
//             <ChevronRight className="h-4 w-4" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex items-center justify-center gap-1.5 mt-3">
//           {testimonials.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`h-1.5 rounded-full transition-all duration-300 ${
//                 idx === currentIndex
//                   ? 'w-6 bg-[#01adf0]'
//                   : 'w-1.5 bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>

//         {/* ===== 3 COLUMN CARDS - COMPACT ===== */}
//         <div className="mt-8 sm:mt-10">
//           {/* Top Buttons - Compact */}
//           <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
//             <motion.a
//               href="/contact"
//               whileHover={{ scale: 1.04, boxShadow: "0 8px 25px rgba(1,173,240,0.3)", y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#01adf0] text-white font-semibold text-[10px] sm:text-xs hover:shadow-xl transition-all duration-300"
//             >
//               <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//               Schedule a Call
//             </motion.a>
//             <motion.a
//               href="/portfolio"
//               whileHover={{ scale: 1.04, boxShadow: "0 8px 25px rgba(0,0,0,0.05)", y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-gray-700 font-semibold text-[10px] sm:text-xs border border-gray-200 hover:border-[#01adf0]/50 hover:shadow-md transition-all duration-300"
//             >
//               <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//               See Our Portfolio
//             </motion.a>
//           </div>

//           {/* 3 Columns - Click to Rotate */}
//           <div className="flex flex-wrap justify-center items-start max-w-4xl mx-auto gap-3 sm:gap-5">
//             {columns.map((column, colIndex) => (
//               <div 
//                 key={colIndex} 
//                 className="relative flex flex-col items-center justify-start min-h-[150px] w-[110px] sm:w-[150px] cursor-pointer group"
//                 onClick={() => rotateColumn(colIndex)}
//               >
//                 <div className="relative w-full h-full">
//                   {column.map((card, cardIndex) => {
//                     const isFirst = cardIndex === 0;
//                     const isSecond = cardIndex === 1;
//                     const isThird = cardIndex === 2;
//                     const colorInfo = getColor(card.label);
//                     const colorParts = colorInfo.split(' ');
//                     const textColor = colorParts.find(c => c.startsWith('text-')) || 'text-blue-400';
//                     const borderColor = colorParts.find(c => c.startsWith('border-')) || 'border-blue-500/50';
//                     const shadowColor = colorParts.find(c => c.startsWith('shadow-')) || 'shadow-blue-500/20';
                    
//                     let transform = '';
//                     let zIndex = 10;
//                     let opacity = 0.4;
//                     let bgClass = 'bg-white border-gray-200';
                    
//                     if (isFirst) {
//                       transform = 'translateY(0px) translateX(0px) scale(1)';
//                       zIndex = 30;
//                       opacity = 1;
//                       bgClass = `bg-gradient-to-br from-blue-50 to-purple-50 border-2 ${borderColor} shadow-2xl ${shadowColor}`;
//                     } else if (isSecond) {
//                       transform = 'translateY(-10px) translateX(10px) scale(0.94)';
//                       zIndex = 20;
//                       opacity = 0.7;
//                       bgClass = 'bg-white border border-gray-200';
//                     } else {
//                       transform = 'translateY(-20px) translateX(20px) scale(0.88)';
//                       zIndex = 10;
//                       opacity = 0.4;
//                       bgClass = 'bg-white border border-gray-200';
//                     }

//                     return (
//                       <div
//                         key={card.id}
//                         className={`absolute top-0 left-0 w-full rounded-xl p-2.5 sm:p-3 text-center transition-all duration-500 ${bgClass}`}
//                         style={{
//                           transform: transform,
//                           zIndex: zIndex,
//                           opacity: opacity,
//                         }}
//                       >
//                         <p className={`text-lg sm:text-xl font-bold ${textColor}`}>
//                           {card.value}
//                         </p>
//                         <h3 className="text-gray-600 text-[8px] sm:text-[10px] font-medium mt-0.5">
//                           {card.label}
//                         </h3>
//                       </div>
//                     );
//                   })}
//                 </div>
               
//               </div>
//             ))}
//           </div>

         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Users, ThumbsUp, Award, ChevronLeft, ChevronRight, Phone, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // ===== CARD COLUMNS STATE =====
  const [columns, setColumns] = useState([
    [
      { value: '100%', label: 'Lead Generated', id: '1a' },
      { value: '96%', label: 'Appearance', id: '1b' },
      { value: '92%', label: 'Sales Hike', id: '1c' }
    ],
    [
      { value: '96%', label: 'Appearance', id: '2a' },
      { value: '92%', label: 'Sales Hike', id: '2b' },
      { value: '100%', label: 'Lead Generated', id: '2c' }
    ],
    [
      { value: '92%', label: 'Sales Hike', id: '3a' },
      { value: '100%', label: 'Lead Generated', id: '3b' },
      { value: '96%', label: 'Appearance', id: '3c' }
    ]
  ]);

  // Testimonials Data
  const testimonials = [
    {
      quote: "Coderbox transformed our digital presence completely. Their AI solutions increased our efficiency by 300%.",
      author: "John Doe",
      company: "TechCorp Inc.",
      rating: 5,
      role: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "The team's expertise in digital marketing helped us achieve unprecedented growth in just 6 months.",
      author: "Jane Smith",
      company: "GrowthHub Ltd.",
      rating: 5,
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "Delivered our complex web portal 2 weeks ahead of deadline. The UX design quality is top notch!",
      author: "Robert Miller",
      company: "Nexus Systems",
      rating: 5,
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "Outstanding SEO & Web Development services. Our organic search leads spiked by 180% within 90 days.",
      author: "Sophia Williams",
      company: "Aura Creative",
      rating: 5,
      role: "Founder",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "Their team handled our cloud migration seamlessly. ZERO downtime experienced during the entire transition.",
      author: "David Lee",
      company: "FinTech Global",
      rating: 5,
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "Remarkable custom software development! Built a scalable mobile app that hit 100k downloads in 1 month.",
      author: "Emily Davis",
      company: "AppScale Studio",
      rating: 5,
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "Very professional workflow, high responsiveness, and unbeatable design system aesthetics. Highly recommended!",
      author: "Michael Brown",
      company: "Elevate Brand",
      rating: 5,
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "They revitalized our outdated e-commerce store into a high-converting automated sales machine.",
      author: "Olivia Taylor",
      company: "Luxe Retail",
      rating: 5,
      role: "Head of E-Commerce",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "The best tech collaboration partner we've worked with. Their proactive communication is unmatched.",
      author: "Alex Johnson",
      company: "Venture Wave",
      rating: 5,
      role: "Chief Innovation Officer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
    }
  ];

  // Auto Slider Effect Interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // ===== ROTATE COLUMN ON CLICK =====
  const rotateColumn = (colIndex) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const column = [...newColumns[colIndex]];
      const first = column.shift();
      column.push(first);
      newColumns[colIndex] = column;
      return newColumns;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get color based on label
  const getColor = (label) => {
    if (label === 'Lead Generated') return 'from-blue-500 to-cyan-500 text-blue-400 border-blue-500/50 shadow-blue-500/20';
    if (label === 'Appearance') return 'from-purple-500 to-pink-500 text-purple-400 border-purple-500/50 shadow-purple-500/20';
    if (label === 'Sales Hike') return 'from-green-500 to-emerald-500 text-green-400 border-green-500/50 shadow-green-500/20';
    return 'from-blue-500 to-cyan-500 text-blue-400 border-blue-500/50 shadow-blue-500/20';
  };

  return (
    <section className="relative py-4 sm:py-5 md:py-6 lg:py-8 bg-[#f1f1f1] overflow-hidden">
      
      {/* Animated Background Elements - Smaller */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 0.9, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/20 blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        {/* Header - Compact */}
        <AnimatedSection className="text-center mb-3 sm:mb-4">
          <motion.span 
            className="text-[#01adf0] font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#01adf0]/20 inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mt-1.5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            What Our <span className="bg-gradient-to-r from-[#01adf0] to-purple-500 bg-clip-text text-transparent">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-gray-500 mt-1 max-w-2xl mx-auto text-[9px] sm:text-[10px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real stories from real clients who transformed their businesses with us
          </motion.p>
        </AnimatedSection>

        {/* Testimonials Carousel - Compact */}
        <div 
          className="relative max-w-6xl mx-auto overflow-hidden px-2 py-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex gap-3 sm:gap-4"
            animate={{ x: `-${currentIndex * (100 / (window.innerWidth >= 768 ? 2 : 1))}%` }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-full md:min-w-[calc(50%-12px)] group relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-gray-200 hover:border-[#01adf0]/30 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl"
                whileHover={{ y: -3, scale: 1.01, boxShadow: "0 15px 40px -10px rgba(1,173,240,0.15)" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#01adf0]/0 via-purple-500/0 to-pink-500/0 rounded-xl sm:rounded-2xl pointer-events-none"
                  whileHover={{
                    background: "linear-gradient(135deg, rgba(1,173,240,0.04), rgba(147,51,234,0.04), rgba(236,72,153,0.04))",
                    transition: { duration: 0.3 }
                  }}
                />

                <div className="relative z-10">
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-1.5">
                    <Quote className="h-5 w-5 text-[#01adf0]/30" />
                  </motion.div>

                  <div className="flex items-center gap-1 mb-1.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-[10px] sm:text-xs leading-relaxed mb-3 line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-1.5 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-[#01adf0]/20 group-hover:border-[#01adf0] transition-colors">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-[10px] sm:text-xs">{testimonial.author}</p>
                      <p className="text-gray-500 text-[7px] sm:text-[8px]">{testimonial.role}</p>
                      <p className="text-gray-400 text-[6px] sm:text-[7px]">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 px-1.5 py-0.5 rounded-full border border-green-200">
                    <div className="flex items-center gap-0.5">
                      <ThumbsUp className="h-1.5 w-1.5 text-green-500" />
                      <span className="text-green-600 text-[6px] sm:text-[7px] font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#01adf0] backdrop-blur-sm text-gray-600 hover:text-white p-1 sm:p-1.5 rounded-full border border-gray-200 hover:border-[#01adf0] transition-all duration-300 shadow-sm"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#01adf0] backdrop-blur-sm text-gray-600 hover:text-white p-1 sm:p-1.5 rounded-full border border-gray-200 hover:border-[#01adf0] transition-all duration-300 shadow-sm"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Dots - Smaller */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-4 bg-[#01adf0]'
                  : 'w-1 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* ===== 3 COLUMN CARDS - COMPACT ===== */}
        <div className="mt-4 sm:mt-6">
          {/* Top Buttons - Compact */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-5">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 25px rgba(1,173,240,0.3)", y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#01adf0] text-white font-semibold text-[9px] sm:text-[10px] hover:shadow-xl transition-all duration-300"
            >
              <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              Schedule a Call
            </motion.a>
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 25px rgba(0,0,0,0.05)", y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white text-gray-700 font-semibold text-[9px] sm:text-[10px] border border-gray-200 hover:border-[#01adf0]/50 hover:shadow-md transition-all duration-300"
            >
              <Briefcase className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              See Our Portfolio
            </motion.a>
          </div>

          {/* 3 Columns - Click to Rotate - Smaller */}
          <div className="flex flex-wrap justify-center items-start max-w-3xl mx-auto gap-2 sm:gap-3">
            {columns.map((column, colIndex) => (
              <div 
                key={colIndex} 
                className="relative flex flex-col items-center justify-start min-h-[120px] w-[90px] sm:w-[120px] cursor-pointer group"
                onClick={() => rotateColumn(colIndex)}
              >
                <div className="relative w-full h-full">
                  {column.map((card, cardIndex) => {
                    const isFirst = cardIndex === 0;
                    const isSecond = cardIndex === 1;
                    const isThird = cardIndex === 2;
                    const colorInfo = getColor(card.label);
                    const colorParts = colorInfo.split(' ');
                    const textColor = colorParts.find(c => c.startsWith('text-')) || 'text-blue-400';
                    const borderColor = colorParts.find(c => c.startsWith('border-')) || 'border-blue-500/50';
                    const shadowColor = colorParts.find(c => c.startsWith('shadow-')) || 'shadow-blue-500/20';
                    
                    let transform = '';
                    let zIndex = 10;
                    let opacity = 0.4;
                    let bgClass = 'bg-white border-gray-200';
                    
                    if (isFirst) {
                      transform = 'translateY(0px) translateX(0px) scale(1)';
                      zIndex = 30;
                      opacity = 1;
                      bgClass = `bg-gradient-to-br from-blue-50 to-purple-50 border-2 ${borderColor} shadow-2xl ${shadowColor}`;
                    } else if (isSecond) {
                      transform = 'translateY(-8px) translateX(8px) scale(0.94)';
                      zIndex = 20;
                      opacity = 0.7;
                      bgClass = 'bg-white border border-gray-200';
                    } else {
                      transform = 'translateY(-16px) translateX(16px) scale(0.88)';
                      zIndex = 10;
                      opacity = 0.4;
                      bgClass = 'bg-white border border-gray-200';
                    }

                    return (
                      <div
                        key={card.id}
                        className={`absolute top-0 left-0 w-full rounded-lg p-1.5 sm:p-2 text-center transition-all duration-500 ${bgClass}`}
                        style={{
                          transform: transform,
                          zIndex: zIndex,
                          opacity: opacity,
                        }}
                      >
                        <p className={`text-sm sm:text-lg font-bold ${textColor}`}>
                          {card.value}
                        </p>
                        <h3 className="text-gray-600 text-[7px] sm:text-[9px] font-medium mt-0.5">
                          {card.label}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;