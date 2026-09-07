// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star, Quote, Users, ThumbsUp, Award } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const TestimonialsSection = () => {
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
//     <section className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
//           animate={{ 
//             scale: [1, 1.2, 0.9, 1],
//             opacity: [0.3, 0.5, 0.3]
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -50, 50, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 50, -50, 0],
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
//             Testimonials
//           </motion.span>
//           <motion.h2 
//             className="text-5xl md:text-6xl font-bold text-white mt-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Real stories from real clients who have transformed their businesses with us
//           </motion.p>
//         </AnimatedSection>

//         <motion.div 
//           className="grid md:grid-cols-2 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -10,
//                 scale: 1.02,
//                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
//               }}
//               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
//             >
//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-3xl"
//                 whileHover={{
//                   background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
//                   transition: { duration: 0.3 }
//                 }}
//               />

//               <div className="relative z-10">
//                 {/* Quote icon with animation */}
//                 <motion.div
//                   whileHover={{ 
//                     rotate: 10,
//                     scale: 1.1
//                   }}
//                   className="mb-4"
//                 >
//                   <Quote className="h-10 w-10 text-blue-400/30" />
//                 </motion.div>

//                 {/* Rating stars with animation */}
//                 <motion.div 
//                   className="flex items-center gap-1 mb-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                 >
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       whileHover={{ 
//                         scale: 1.3, 
//                         rotate: 10,
//                         transition: { duration: 0.2 }
//                       }}
//                     >
//                       <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Quote text */}
//                 <motion.p 
//                   className="text-white/80 text-lg leading-relaxed mb-6"
//                   whileHover={{ x: 5 }}
//                 >
//                   "{testimonial.quote}"
//                 </motion.p>

//                 {/* Author section with image */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <motion.div
//                       whileHover={{ scale: 1.1 }}
//                       className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors"
//                     >
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.author}
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.div>
//                     <div>
//                       <motion.p 
//                         className="text-white font-semibold"
//                         whileHover={{ x: 3 }}
//                       >
//                         {testimonial.author}
//                       </motion.p>
//                       <p className="text-blue-200/60 text-sm">{testimonial.role}</p>
//                       <p className="text-blue-200/40 text-xs">{testimonial.company}</p>
//                     </div>
//                   </div>
                  
//                   {/* Trust badge */}
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-3 py-1 rounded-full border border-green-500/20"
//                   >
//                     <div className="flex items-center gap-1">
//                       <ThumbsUp className="h-3 w-3 text-green-400" />
//                       <span className="text-green-400 text-xs font-medium">Verified</span>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
//         >
//           {[
//             { icon: Users, label: 'Happy Clients', value: '500+' },
//             { icon: ThumbsUp, label: 'Satisfaction Rate', value: '99%' },
//             { icon: Award, label: 'Awards Won', value: '12+' }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ 
//                 scale: 1.05,
//                 y: -5,
//                 backgroundColor: "rgba(255,255,255,0.08)"
//               }}
//               className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 transition-all duration-300"
//             >
//               <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
//               <div className="text-2xl font-bold text-white">{stat.value}</div>
//               <div className="text-blue-200/60 text-sm">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star, Quote, Users, ThumbsUp, Award } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const TestimonialsSection = () => {
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
//     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
//           animate={{ 
//             scale: [1, 1.2, 0.9, 1],
//             opacity: [0.3, 0.5, 0.3]
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -50, 50, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 50, -50, 0],
//             scale: [1, 0.8, 1.2, 1]
//           }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-14">
//           <motion.span 
//             className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/20 inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ 
//               y: [0, -3, 0],
//             }}
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
//             Real stories from real clients who have transformed their businesses with us
//           </motion.p>
//         </AnimatedSection>

//         <motion.div 
//           className="grid md:grid-cols-2 gap-5 sm:gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -8,
//                 scale: 1.02,
//                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
//               }}
//               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
//             >
//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl sm:rounded-3xl"
//                 whileHover={{
//                   background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
//                   transition: { duration: 0.3 }
//                 }}
//               />

//               <div className="relative z-10">
//                 {/* Quote icon with animation */}
//                 <motion.div
//                   whileHover={{ 
//                     rotate: 10,
//                     scale: 1.1
//                   }}
//                   className="mb-3"
//                 >
//                   <Quote className="h-8 w-8 text-blue-400/30" />
//                 </motion.div>

//                 {/* Rating stars with animation */}
//                 <motion.div 
//                   className="flex items-center gap-1 mb-3"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                 >
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       whileHover={{ 
//                         scale: 1.3, 
//                         rotate: 10,
//                         transition: { duration: 0.2 }
//                       }}
//                     >
//                       <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* Quote text */}
//                 <motion.p 
//                   className="text-white/80 text-sm sm:text-base leading-relaxed mb-4"
//                   whileHover={{ x: 5 }}
//                 >
//                   "{testimonial.quote}"
//                 </motion.p>

//                 {/* Author section with image */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <motion.div
//                       whileHover={{ scale: 1.1 }}
//                       className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors"
//                     >
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.author}
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.div>
//                     <div>
//                       <motion.p 
//                         className="text-white font-semibold text-sm"
//                         whileHover={{ x: 3 }}
//                       >
//                         {testimonial.author}
//                       </motion.p>
//                       <p className="text-blue-200/60 text-[10px] sm:text-xs">{testimonial.role}</p>
//                       <p className="text-blue-200/40 text-[8px] sm:text-[10px]">{testimonial.company}</p>
//                     </div>
//                   </div>
                  
//                   {/* Trust badge */}
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-2 py-0.5 rounded-full border border-green-500/20"
//                   >
//                     <div className="flex items-center gap-0.5">
//                       <ThumbsUp className="h-2.5 w-2.5 text-green-400" />
//                       <span className="text-green-400 text-[8px] sm:text-[10px] font-medium">Verified</span>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto"
//         >
//           {[
//             { icon: Users, label: 'Happy Clients', value: '500+' },
//             { icon: ThumbsUp, label: 'Satisfaction Rate', value: '99%' },
//             { icon: Award, label: 'Awards Won', value: '12+' }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ 
//                 scale: 1.05,
//                 y: -5,
//                 backgroundColor: "rgba(255,255,255,0.08)"
//               }}
//               className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center border border-white/10 transition-all duration-300"
//             >
//               <stat.icon className="h-5 w-5 text-blue-400 mx-auto mb-1.5" />
//               <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
//               <div className="text-blue-200/60 text-[10px] sm:text-xs">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;





import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, ThumbsUp, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Expanded to 10 Rich Testimonials
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
    },
    {
      quote: "Delivered robust security protocols and AI automation that saved us 40+ manual working hours weekly.",
      author: "Sarah Wilson",
      company: "DataShield Security",
      rating: 5,
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 blur-3xl"
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
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
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Real stories from 10+ real clients who transformed their businesses with us
          </motion.p>
        </AnimatedSection>

        {/* Carousel Slider with Auto-Play & Pause on Hover */}
        <div 
          className="relative max-w-6xl mx-auto overflow-hidden px-2 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex gap-5 sm:gap-6"
            animate={{ x: `-${currentIndex * (100 / (window.innerWidth >= 768 ? 2 : 1))}%` }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-full md:min-w-[calc(50%-12px)] group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                whileHover={{ 
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
                }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl sm:rounded-3xl pointer-events-none"
                  whileHover={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
                    transition: { duration: 0.3 }
                  }}
                />

                <div className="relative z-10">
                  {/* Quote icon with animation */}
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-3">
                    <Quote className="h-8 w-8 text-blue-400/30" />
                  </motion.div>

                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author section */}
                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-blue-200/60 text-[10px] sm:text-xs">{testimonial.role}</p>
                      <p className="text-blue-200/40 text-[8px] sm:text-[10px]">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Trust badge */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-2.5 w-2.5 text-green-400" />
                      <span className="text-green-400 text-[8px] sm:text-[10px] font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-blue-600/80 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full border border-white/10 transition-all duration-300"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-blue-600/80 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-full border border-white/10 transition-all duration-300"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto"
        >
          {[
            { icon: Users, label: 'Happy Clients', value: '500+' },
            { icon: ThumbsUp, label: 'Satisfaction Rate', value: '99%' },
            { icon: Award, label: 'Awards Won', value: '12+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                backgroundColor: "rgba(255,255,255,0.08)"
              }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center border border-white/10 transition-all duration-300"
            >
              <stat.icon className="h-5 w-5 text-blue-400 mx-auto mb-1.5" />
              <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-blue-200/60 text-[10px] sm:text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;