// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const BlogSection = () => {
//   const latestBlogs = [
//     {
//       title: "Local SEO Strategies to Grow Restaurant Customers in Pune",
//       date: "August 11, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
//       readTime: "5 min read",
//       author: "Preeti Rai"
//     },
//     {
//       title: "The 5 Big Shifts Making Healthcare Marketing Autonomous in 2026",
//       date: "August 9, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
//       readTime: "7 min read",
//       author: "Rahul Sharma"
//     },
//     {
//       title: "Pharma Digital Transformation in 2026: Key Trends",
//       date: "August 7, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop",
//       readTime: "4 min read",
//       author: "Ananya Patel"
//     },
//     {
//       title: "The AI Playbook Every Healthcare Marketer Needs in 2026",
//       date: "August 5, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
//       readTime: "6 min read",
//       author: "Vikram Singh"
//     }
//   ];

//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
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
//         duration: 0.6,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <section className="relative py-32 bg-[#0a0a1a] overflow-hidden">
//       {/* Animated Background Elements */}
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
//             Our Blog
//           </motion.span>
//           <motion.h2 
//             className="text-5xl md:text-6xl font-bold text-white mt-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">News & Blogs</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Stay updated with the latest trends and insights from our expert team
//           </motion.p>
//         </AnimatedSection>

//         <motion.div 
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {latestBlogs.map((blog, index) => (
//             <motion.article
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -10,
//                 scale: 1.03,
//                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
//               }}
//               className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
//             >
//               <div className="relative overflow-hidden h-48">
//                 <motion.img 
//                   src={blog.image} 
//                   alt={blog.title}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.6 }}
//                 />
                
//                 {/* Category badge with animation */}
//                 <motion.div 
//                   className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Tag className="h-3 w-3 inline-block mr-1" />
//                   {blog.category}
//                 </motion.div>

//                 {/* Read time badge */}
//                 <motion.div 
//                   className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Clock className="h-3 w-3 inline-block mr-1" />
//                   {blog.readTime}
//                 </motion.div>
//               </div>
              
//               <div className="p-6">
//                 <div className="flex items-center text-xs text-blue-200/50 mb-2">
//                   <Calendar className="h-3 w-3 mr-1" />
//                   {blog.date}
//                 </div>
                
//                 <motion.h3 
//                   className="font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
//                   whileHover={{ x: 3 }}
//                 >
//                   {blog.title}
//                 </motion.h3>
                
//                 <div className="flex items-center text-xs text-blue-200/40 mb-3">
//                   <User className="h-3 w-3 mr-1" />
//                   {blog.author}
//                 </div>
                
//                 <motion.a
//                   href="#"
//                   whileHover={{ x: 8 }}
//                   className="inline-flex items-center text-blue-400 font-medium text-sm group/link gap-1"
//                 >
//                   Read More
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="h-4 w-4" />
//                   </motion.span>
//                 </motion.a>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>

//         <motion.div 
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="/blog"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
//               y: -3
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold transition-all duration-300 shadow-2xl"
//           >
//             View All Blogs
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

// export default BlogSection;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const BlogSection = () => {
//   const latestBlogs = [
//     {
//       title: "Local SEO Strategies to Grow Restaurant Customers in Pune",
//       date: "August 11, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
//       readTime: "5 min read",
//       author: "Preeti Rai"
//     },
//     {
//       title: "The 5 Big Shifts Making Healthcare Marketing Autonomous in 2026",
//       date: "August 9, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
//       readTime: "7 min read",
//       author: "Rahul Sharma"
//     },
//     {
//       title: "Pharma Digital Transformation in 2026: Key Trends",
//       date: "August 7, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop",
//       readTime: "4 min read",
//       author: "Ananya Patel"
//     },
//     {
//       title: "The AI Playbook Every Healthcare Marketer Needs in 2026",
//       date: "August 5, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
//       readTime: "6 min read",
//       author: "Vikram Singh"
//     }
//   ];

//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
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
//         duration: 0.6,
//         ease: [0.215, 0.61, 0.355, 1]
//       }
//     }
//   };

//   return (
//     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#0a0a1a] overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
//           animate={{ 
//             x: [0, -50, 50, 0],
//             y: [0, 50, -50, 0],
//             scale: [1, 1.2, 0.8, 1]
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
//           animate={{ 
//             x: [0, 50, -50, 0],
//             y: [0, -50, 50, 0],
//             scale: [1, 0.8, 1.2, 1]
//           }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
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
//             animate={{ 
//               y: [0, -3, 0],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Blog
//           </motion.span>
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">News & Blogs</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Stay updated with the latest trends and insights from our expert team
//           </motion.p>
//         </AnimatedSection>

//         <motion.div 
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {latestBlogs.map((blog, index) => (
//             <motion.article
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -8,
//                 scale: 1.02,
//                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
//               }}
//               className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
//             >
//               <div className="relative overflow-hidden h-36 sm:h-40 md:h-44">
//                 <motion.img 
//                   src={blog.image} 
//                   alt={blog.title}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.6 }}
//                 />
                
//                 {/* Category badge with animation */}
//                 <motion.div 
//                   className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium shadow-lg"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Tag className="h-2.5 w-2.5 inline-block mr-0.5" />
//                   {blog.category}
//                 </motion.div>

//                 {/* Read time badge */}
//                 <motion.div 
//                   className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Clock className="h-2.5 w-2.5 inline-block mr-0.5" />
//                   {blog.readTime}
//                 </motion.div>
//               </div>
              
//               <div className="p-3 sm:p-4 md:p-5">
//                 <div className="flex items-center text-[8px] sm:text-[10px] text-blue-200/50 mb-1">
//                   <Calendar className="h-2.5 w-2.5 mr-1" />
//                   {blog.date}
//                 </div>
                
//                 <motion.h3 
//                   className="font-bold text-white text-xs sm:text-sm mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors"
//                   whileHover={{ x: 3 }}
//                 >
//                   {blog.title}
//                 </motion.h3>
                
//                 <div className="flex items-center text-[8px] sm:text-[10px] text-blue-200/40 mb-2">
//                   <User className="h-2.5 w-2.5 mr-1" />
//                   {blog.author}
//                 </div>
                
//                 <motion.a
//                   href="#"
//                   whileHover={{ x: 8 }}
//                   className="inline-flex items-center text-blue-400 font-medium text-[10px] sm:text-xs group/link gap-1"
//                 >
//                   Read More
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="h-3 w-3" />
//                   </motion.span>
//                 </motion.a>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>

//         <motion.div 
//           className="text-center mt-10 sm:mt-12 md:mt-14"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="/blog"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
//               y: -3
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold transition-all duration-300 shadow-2xl text-xs sm:text-sm"
//           >
//             View All Blogs
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

// export default BlogSection;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
// import AnimatedSection from './AnimatedSection';

// const BlogSection = () => {
//   const latestBlogs = [
//     {
//       title: "Local SEO Strategies to Grow Restaurant Customers in Pune",
//       date: "August 11, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
//       readTime: "5 min read",
//       author: "Preeti Rai"
//     },
//     {
//       title: "The 5 Big Shifts Making Healthcare Marketing Autonomous in 2026",
//       date: "August 9, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
//       readTime: "7 min read",
//       author: "Rahul Sharma"
//     },
//     {
//       title: "Pharma Digital Transformation in 2026: Key Trends",
//       date: "August 7, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop",
//       readTime: "4 min read",
//       author: "Ananya Patel"
//     },
//     {
//       title: "The AI Playbook Every Healthcare Marketer Needs in 2026",
//       date: "August 5, 2026",
//       category: "Digital Marketing",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
//       readTime: "6 min read",
//       author: "Vikram Singh"
//     }
//   ];

//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
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
//     <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-[#f1f1f1] overflow-hidden">
      
//       {/* Animated Background Elements - Light Version */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#01adf0]/10 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-3xl"
//           animate={{ scale: [1, 1.2, 0.9, 1], rotate: [0, 180, 360, 0] }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//         {/* Header - Compact */}
//         <AnimatedSection className="text-center mb-6 sm:mb-8 md:mb-10">
//           <motion.span 
//             className="text-[#01adf0] font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#01adf0]/20 inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Blog
//           </motion.span>
//           <motion.h2 
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Latest <span className="bg-gradient-to-r from-[#01adf0] to-purple-500 bg-clip-text text-transparent">News & Blogs</span>
//           </motion.h2>
//           <motion.p 
//             className="text-gray-500 mt-1 max-w-2xl mx-auto text-[10px] sm:text-xs"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Stay updated with the latest trends and insights from our expert team
//           </motion.p>
//         </AnimatedSection>

//         {/* Blog Cards - Compact */}
//         <motion.div 
//           className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           {latestBlogs.map((blog, index) => (
//             <motion.article
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -6,
//                 scale: 1.02,
//                 boxShadow: "0 15px 40px -10px rgba(1,173,240,0.15)"
//               }}
//               className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#01adf0]/30 transition-all duration-400 shadow-sm hover:shadow-xl"
//             >
//               <div className="relative overflow-hidden h-32 sm:h-36 md:h-40">
//                 <motion.img 
//                   src={blog.image} 
//                   alt={blog.title}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.5 }}
//                 />
                
//                 {/* Category badge */}
//                 <motion.div 
//                   className="absolute top-2 left-2 bg-[#01adf0] text-white text-[7px] sm:text-[9px] px-1.5 py-0.5 rounded-full font-medium shadow-lg"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Tag className="h-2 w-2 inline-block mr-0.5" />
//                   {blog.category}
//                 </motion.div>

//                 {/* Read time badge */}
//                 <motion.div 
//                   className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[7px] sm:text-[9px] px-1.5 py-0.5 rounded-full font-medium"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Clock className="h-2 w-2 inline-block mr-0.5" />
//                   {blog.readTime}
//                 </motion.div>
//               </div>
              
//               <div className="p-2.5 sm:p-3 md:p-4">
//                 <div className="flex items-center text-[7px] sm:text-[9px] text-gray-400 mb-0.5">
//                   <Calendar className="h-2 w-2 mr-1" />
//                   {blog.date}
//                 </div>
                
//                 <motion.h3 
//                   className="font-bold text-gray-800 text-[10px] sm:text-xs mb-0.5 line-clamp-2 group-hover:text-[#01adf0] transition-colors"
//                   whileHover={{ x: 3 }}
//                 >
//                   {blog.title}
//                 </motion.h3>
                
//                 <div className="flex items-center text-[7px] sm:text-[9px] text-gray-400 mb-1.5">
//                   <User className="h-2 w-2 mr-1" />
//                   {blog.author}
//                 </div>
                
//                 <motion.a
//                   href="#"
//                   whileHover={{ x: 6 }}
//                   className="inline-flex items-center text-[#01adf0] font-medium text-[8px] sm:text-[10px] group/link gap-1"
//                 >
//                   Read More
//                   <motion.span
//                     animate={{ x: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="h-2.5 w-2.5" />
//                   </motion.span>
//                 </motion.a>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>

//         {/* Bottom CTA - #01adf0 color */}
//         <motion.div 
//           className="text-center mt-6 sm:mt-8 md:mt-10"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="/blog"
//             whileHover={{ 
//               scale: 1.04,
//               boxShadow: "0 15px 30px rgba(1,173,240,0.3)",
//               y: -2
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#01adf0] text-white font-semibold transition-all duration-300 text-[9px] sm:text-[10px] hover:shadow-xl"
//           >
//             View All Blogs
//             <motion.span
//               animate={{ x: [0, 4, 0] }}
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

// export default BlogSection;








import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const BlogSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const latestBlogs = [
    {
      id: 1,
      title: "Local SEO Strategies to Grow Restaurant Customers in Pune",
      date: "August 11, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      readTime: "5 min read",
      author: "Preeti Rai",
      link: "/blog/local-seo-strategies"
    },
    {
      id: 2,
      title: "The 5 Big Shifts Making Healthcare Marketing Autonomous in 2026",
      date: "August 9, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      readTime: "7 min read",
      author: "Rahul Sharma",
      link: "/blog/healthcare-marketing-shifts"
    },
    {
      id: 3,
      title: "Pharma Digital Transformation in 2026: Key Trends",
      date: "August 7, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop",
      readTime: "4 min read",
      author: "Ananya Patel",
      link: "/blog/pharma-digital-transformation"
    },
    {
      id: 4,
      title: "The AI Playbook Every Healthcare Marketer Needs in 2026",
      date: "August 5, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      readTime: "6 min read",
      author: "Vikram Singh",
      link: "/blog/ai-playbook-healthcare"
    },
    {
      id: 5,
      title: "Local SEO Strategies to Grow Restaurant Customers in Pune",
      date: "August 11, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      readTime: "5 min read",
      author: "Preeti Rai",
      link: "/blog/local-seo-strategies"
    },
    {
      id: 6,
      title: "The 5 Big Shifts Making Healthcare Marketing Autonomous in 2026",
      date: "August 9, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      readTime: "7 min read",
      author: "Rahul Sharma",
      link: "/blog/healthcare-marketing-shifts"
    }
  ];

  // ===== GET POSITION ON RING =====
  const getPosition = (index, total) => {
    const angle = (index / total) * 360;
    // Responsive radius
    const radius = typeof window !== 'undefined' ? 
      window.innerWidth < 640 ? 180 : 
      window.innerWidth < 768 ? 220 : 
      window.innerWidth < 1024 ? 260 : 320 
      : 320;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.sin(radian);
    const z = -radius * Math.cos(radian);
    const rotateY = -angle;
    return { x, z, rotateY };
  };

  // ===== GO TO PREV/NEXT =====
  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + latestBlogs.length) % latestBlogs.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % latestBlogs.length);
  };

  // ===== HANDLE CARD CLICK =====
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  // ===== GET RESPONSIVE CARD SIZE =====
  const getCardSize = () => {
    if (typeof window === 'undefined') return { w: 150, h: 180 };
    const width = window.innerWidth;
    if (width < 480) return { w: 110, h: 140 };
    if (width < 640) return { w: 130, h: 160 };
    if (width < 768) return { w: 150, h: 180 };
    if (width < 1024) return { w: 170, h: 200 };
    return { w: 200, h: 240 };
  };

  const cardSize = getCardSize();

  return (
    <section className="relative py-2 sm:py-3 md:py-4 lg:py-6 bg-[#f1f1f1] overflow-hidden">
      
      {/* Animated Background Elements - Smaller */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-[#01adf0]/10 blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-purple-500/10 blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-8 xl:px-12 relative z-10">
        {/* Header - Compact */}
        <div className="text-center mb-2 sm:mb-3">
          <span className="text-[#01adf0] font-semibold text-[8px] sm:text-[9px] tracking-widest uppercase bg-[#01adf0]/10 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 rounded-full border border-[#01adf0]/20 inline-block">
            Our Blog
          </span>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mt-1 leading-tight">
            Latest <span className="bg-gradient-to-r from-[#01adf0] to-purple-500 bg-clip-text text-transparent">News & Blogs</span>
          </h2>
          <p className="text-gray-500 text-[8px] sm:text-[9px] mt-0.5 max-w-2xl mx-auto">
            Stay updated with latest trends
          </p>
        </div>

        {/* ===== RING CAROUSEL - RESPONSIVE ===== */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons - Smaller */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1 sm:p-1.5 border border-gray-200 hover:border-[#01adf0] transition-all duration-300 shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-600 hover:text-white transition-colors" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1 sm:p-1.5 border border-gray-200 hover:border-[#01adf0] transition-all duration-300 shadow-md"
            aria-label="Next"
          >
            <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-600 hover:text-white transition-colors" />
          </button>

          {/* 3D Ring Container - Responsive */}
          <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px]">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] md:w-[500px] lg:w-[600px] h-[320px] sm:h-[420px] md:h-[500px] lg:h-[600px]"
              style={{
                perspective: '800px',
                transformStyle: 'preserve-3d'
              }}
            >
              <div 
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${activeIndex * -45}deg)`,
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)'
                }}
              >
                {latestBlogs.map((blog, index) => {
                  const { x, z, rotateY } = getPosition(index, latestBlogs.length);
                  const isActive = index === activeIndex;
                  
                  return (
                    <div
                      key={blog.id}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{
                        width: `${cardSize.w}px`,
                        height: `${cardSize.h}px`,
                        transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${rotateY}deg)`,
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                        transition: 'all 0.6s ease'
                      }}
                      onClick={() => handleCardClick(index)}
                    >
                      <div 
                        className={`relative block w-full h-full rounded-lg overflow-hidden shadow-lg bg-white border transition-all duration-500 group ${
                          isActive 
                            ? 'border-[#01adf0] shadow-2xl shadow-[#01adf0]/30 ring-2 ring-[#01adf0]/40 scale-105 z-10' 
                            : 'border-gray-200 hover:border-[#01adf0]/50 hover:scale-105 hover:shadow-xl'
                        }`}
                      >
                        {/* Image - Responsive */}
                        <div className="relative h-[45%] sm:h-[50%] overflow-hidden">
                          <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          
                          {/* Category Badge - Smaller */}
                          <span className="absolute top-1 left-1 bg-[#01adf0] text-white text-[5px] sm:text-[6px] px-1 py-0.5 rounded-full font-medium shadow-lg flex items-center gap-0.5">
                            <Tag className="h-1.5 w-1.5" />
                            {blog.category}
                          </span>
                          
                          {/* Read Time - Smaller */}
                          <span className="absolute bottom-1 right-1 bg-black/50 backdrop-blur-sm text-white text-[5px] sm:text-[6px] px-1 py-0.5 rounded-full font-medium flex items-center gap-0.5">
                            <Clock className="h-1.5 w-1.5" />
                            {blog.readTime}
                          </span>

                          {/* Active Badge - Smaller */}
                          {isActive && (
                            <div className="absolute top-1 right-1 bg-gradient-to-r from-[#01adf0] to-purple-500 text-white text-[4px] font-semibold px-1 py-0.5 rounded-full shadow-lg">
                              ★
                            </div>
                          )}
                        </div>
                        
                        {/* Content - Smaller */}
                        <div className="p-1.5 sm:p-2">
                          <div className="flex items-center text-[5px] sm:text-[6px] text-gray-400 mb-0.5">
                            <Calendar className="h-1.5 w-1.5 mr-0.5" />
                            <span className="truncate">{blog.date}</span>
                          </div>
                          
                          <h3 className={`font-bold text-[7px] sm:text-[8px] mb-0.5 line-clamp-2 transition-colors ${
                            isActive ? 'text-[#01adf0]' : 'text-gray-800 group-hover:text-[#01adf0]'
                          }`}>
                            {blog.title}
                          </h3>
                          
                          <div className="flex items-center text-[5px] sm:text-[6px] text-gray-400 mb-0.5">
                            <User className="h-1.5 w-1.5 mr-0.5" />
                            <span className="truncate">{blog.author}</span>
                          </div>
                          
                          {/* Read More - Only for Active Card */}
                          {isActive && (
                            <a
                              href={blog.link}
                              className="inline-flex items-center text-[#01adf0] font-medium text-[5px] sm:text-[6px] gap-0.5 hover:text-[#01adf0]/70 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Read
                              <ArrowRight className="h-1.5 w-1.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dots Indicator - Smaller */}
          <div className="flex items-center justify-center gap-1 mt-1 sm:mt-1.5">
            {latestBlogs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-3 bg-[#01adf0]'
                    : 'w-0.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA - Compact */}
        <div className="text-center mt-1.5 sm:mt-2">
          <a
            href="/blog"
            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#01adf0] text-white font-semibold transition-all duration-300 text-[7px] sm:text-[8px] hover:shadow-xl"
          >
            View All
            <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;