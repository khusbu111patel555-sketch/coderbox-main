// // // // // import React from 'react';
// // // // // import { motion } from 'framer-motion';

// // // // // const ProjectSection = () => {
// // // // //   // Data mapped from your Elementor HTML
// // // // //   const projects = [
// // // // //     {
// // // // //       id: 1,
// // // // //       category: 'Digital Marketing',
// // // // //       title: 'Brand Identity Design',
// // // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/Brand-Identity-Design.webp',
// // // // //       animation: 'fadeLeft',
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       category: 'WordPress Development',
// // // // //       title: 'SparkleClicks Agency',
// // // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/worpress-work-1024x683.webp',
// // // // //       animation: 'fadeUp',
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       category: 'Digital Marketing',
// // // // //       title: 'Brand Identity Design',
// // // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/project-9.webp',
// // // // //       animation: 'fadeRight',
// // // // //     },
// // // // //   ];

// // // // //   // Framer Motion Variants for entrance animations
// // // // //   const fadeLeft = {
// // // // //     hidden: { opacity: 0, x: -50 },
// // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// // // // //   };

// // // // //   const fadeRight = {
// // // // //     hidden: { opacity: 0, x: 50 },
// // // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// // // // //   };

// // // // //   const fadeUp = {
// // // // //     hidden: { opacity: 0, y: 50 },
// // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // // // //   };

// // // // //   const getAnimation = (anim) => {
// // // // //     if (anim === 'fadeLeft') return fadeLeft;
// // // // //     if (anim === 'fadeRight') return fadeRight;
// // // // //     return fadeUp;
// // // // //   };

// // // // //   return (
// // // // //     // ✅ Background color changed to match ServicesSection (bg-[#f1f1f1])
// // // // //     <section className="relative py-16 md:py-24 bg-[#f1f1f1] overflow-hidden">
      
// // // // //       {/* Animated Background Elements (Same as ServicesSection) */}
// // // // //       <div className="absolute inset-0 pointer-events-none">
// // // // //         <motion.div 
// // // // //           className="absolute top-0 left-1/4 w-40 h-40 bg-[#01ADF0]/10 rounded-full blur-3xl"
// // // // //           animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.2, 0.8, 1] }}
// // // // //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// // // // //         />
// // // // //         <motion.div 
// // // // //           className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#00C6FB]/10 rounded-full blur-3xl"
// // // // //           animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
// // // // //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // // // //         {/* ===== HEADER SECTION ===== */}
// // // // //         <motion.div 
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true }}
// // // // //           variants={fadeUp}
// // // // //           className="text-center mb-12 md:mb-16"
// // // // //         >
// // // // //           {/* Badge (Same style as ServicesSection) */}
// // // // //           <motion.span 
// // // // //             className="inline-block px-4 py-1.5 mb-3 text-sm font-semibold tracking-wider text-white uppercase bg-[#01ADF0] rounded-full shadow-md"
// // // // //             whileHover={{ scale: 1.05 }}
// // // // //             animate={{ y: [0, -3, 0] }}
// // // // //             transition={{ duration: 2, repeat: Infinity }}
// // // // //           >
// // // // //             Our Projects
// // // // //           </motion.span>

// // // // //           {/* Heading (Dark text + Blue Gradient span, Same as ServicesSection) */}
// // // // //           <motion.h2 
// // // // //             className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020200] max-w-3xl mx-auto leading-tight mt-4"
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.5, delay: 0.15 }}
// // // // //           >
// // // // //             Exploring our{' '}
// // // // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // // // //               creative and impactful
// // // // //             </span>
// // // // //           </motion.h2>

// // // // //           {/* Subtitle (Same soft text color as ServicesSection) */}
// // // // //           <motion.p 
// // // // //             className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.5, delay: 0.2 }}
// // // // //           >
// // // // //             A showcase of our finest work, delivering excellence across industries.
// // // // //           </motion.p>
// // // // //         </motion.div>

// // // // //         {/* ===== GRID SECTION ===== */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
// // // // //           {projects.map((project, index) => (
// // // // //             <motion.div
// // // // //               key={project.id}
// // // // //               initial="hidden"
// // // // //               whileInView="visible"
// // // // //               viewport={{ once: true }}
// // // // //               variants={getAnimation(project.animation)}
// // // // //               // Hover par shadow bhi blue ho jayegi (ServicesSection jaisa feel)
// // // // //               className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 cursor-pointer h-[350px] md:h-[450px]"
// // // // //             >
// // // // //               {/* Image with Zoom on Hover */}
// // // // //               <img
// // // // //                 src={project.image}
// // // // //                 alt={project.title}
// // // // //                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
// // // // //                 loading="lazy"
// // // // //               />

// // // // //               {/* Dark Gradient Overlay for text readability */}
// // // // //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

// // // // //               {/* ===== SHINE / GLARE HOVER EFFECT ===== */}
// // // // //               <div 
// // // // //                 className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[20px] z-10 transition-all duration-[600ms] ease-linear bg-white/30 group-hover:h-[250%] group-hover:bg-transparent"
// // // // //                 aria-hidden="true"
// // // // //               />

// // // // //               {/* Top Category Badge (Blue accent matching the theme) */}
// // // // //               <div className="absolute top-4 left-4 z-20">
// // // // //                 <span className="bg-[#01ADF0]/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 shadow-md">
// // // // //                   {project.category}
// // // // //                 </span>
// // // // //               </div>

// // // // //               {/* Bottom Title with Slide Up on Hover + Blue Text on Hover */}
// // // // //               <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
// // // // //                 <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00C6FB] transition-colors duration-300">
// // // // //                   {project.title}
// // // // //                 </h4>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ProjectSection;








// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';

// // // // const ProjectSection = () => {
// // // //   // Data mapped from your Elementor HTML
// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       category: 'Digital Marketing',
// // // //       title: 'Brand Identity Design',
// // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/Brand-Identity-Design.webp',
// // // //       animation: 'fadeLeft',
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       category: 'WordPress Development',
// // // //       title: 'SparkleClicks Agency',
// // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/worpress-work-1024x683.webp',
// // // //       animation: 'fadeUp',
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       category: 'Digital Marketing',
// // // //       title: 'Brand Identity Design',
// // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/project-9.webp',
// // // //       animation: 'fadeRight',
// // // //     },
// // // //   ];

// // // //   // Framer Motion Variants for entrance animations
// // // //   const fadeLeft = {
// // // //     hidden: { opacity: 0, x: -50 },
// // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// // // //   };

// // // //   const fadeRight = {
// // // //     hidden: { opacity: 0, x: 50 },
// // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// // // //   };

// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 50 },
// // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // // //   };

// // // //   const getAnimation = (anim) => {
// // // //     if (anim === 'fadeLeft') return fadeLeft;
// // // //     if (anim === 'fadeRight') return fadeRight;
// // // //     return fadeUp;
// // // //   };

// // // //   return (
// // // //     <section className="relative py-16 md:py-24 bg-[#f1f1f1] overflow-hidden">
      
// // // //       {/* Animated Background Elements (Same as ServicesSection) */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <motion.div 
// // // //           className="absolute top-0 left-1/4 w-40 h-40 bg-[#01ADF0]/10 rounded-full blur-3xl"
// // // //           animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.2, 0.8, 1] }}
// // // //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div 
// // // //           className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#00C6FB]/10 rounded-full blur-3xl"
// // // //           animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
// // // //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // // //         {/* ===== HEADER SECTION ===== */}
// // // //         <motion.div 
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //           variants={fadeUp}
// // // //           className="text-center mb-12 md:mb-16"
// // // //         >
// // // //           {/* ✅ Badge updated to match ServicesSection exactly */}
// // // //           <motion.span 
// // // //             className="sec-badge inline-block"
// // // //             whileHover={{ scale: 1.05 }}
// // // //             animate={{ y: [0, -3, 0] }}
// // // //             transition={{ duration: 2, repeat: Infinity }}
// // // //           >
// // // //             Our Projects
// // // //           </motion.span>

// // // //           {/* Heading */}
// // // //           <motion.h2 
// // // //             className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020200] max-w-3xl mx-auto leading-tight mt-4"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.15 }}
// // // //           >
// // // //             Exploring our{' '}
// // // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // // //               creative and impactful
// // // //             </span>
// // // //           </motion.h2>

// // // //           {/* Subtitle */}
// // // //           <motion.p 
// // // //             className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.2 }}
// // // //           >
// // // //             A showcase of our finest work, delivering excellence across industries.
// // // //           </motion.p>
// // // //         </motion.div>

// // // //         {/* ===== GRID SECTION ===== */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
// // // //           {projects.map((project, index) => (
// // // //             <motion.div
// // // //               key={project.id}
// // // //               initial="hidden"
// // // //               whileInView="visible"
// // // //               viewport={{ once: true }}
// // // //               variants={getAnimation(project.animation)}
// // // //               className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 cursor-pointer h-[350px] md:h-[450px]"
// // // //             >
// // // //               {/* Image with Zoom on Hover */}
// // // //               <img
// // // //                 src={project.image}
// // // //                 alt={project.title}
// // // //                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
// // // //                 loading="lazy"
// // // //               />

// // // //               {/* Dark Gradient Overlay */}
// // // //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

// // // //               {/* ===== SHINE / GLARE HOVER EFFECT ===== */}
// // // //               <div 
// // // //                 className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[20px] z-10 transition-all duration-[600ms] ease-linear bg-white/30 group-hover:h-[250%] group-hover:bg-transparent"
// // // //                 aria-hidden="true"
// // // //               />

// // // //               {/* Top Category Badge */}
// // // //               <div className="absolute top-4 left-4 z-20">
// // // //                 <span className="bg-[#01ADF0]/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 shadow-md">
// // // //                   {project.category}
// // // //                 </span>
// // // //               </div>

// // // //               {/* Bottom Title */}
// // // //               <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
// // // //                 <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00C6FB] transition-colors duration-300">
// // // //                   {project.title}
// // // //                 </h4>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ProjectSection;







// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { ArrowRight } from 'lucide-react';

// // // // const ProjectSection = () => {
// // // //   // Data mapped from your Elementor HTML
// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       category: 'Digital Marketing',
// // // //       title: 'Brand Identity Design',
// // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/Brand-Identity-Design.webp',
// // // //       animation: 'fadeLeft',
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       category: 'WordPress Development',
// // // //       title: 'SparkleClicks Agency',
// // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/worpress-work-1024x683.webp',
// // // //       animation: 'fadeUp',
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       category: 'Digital Marketing',
// // // //       title: 'Brand Identity Design',
// // // //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/project-9.webp',
// // // //       animation: 'fadeRight',
// // // //     },
// // // //   ];

// // // //   // Framer Motion Variants for entrance animations
// // // //   const fadeLeft = {
// // // //     hidden: { opacity: 0, x: -50 },
// // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// // // //   };

// // // //   const fadeRight = {
// // // //     hidden: { opacity: 0, x: 50 },
// // // //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// // // //   };

// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 50 },
// // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // // //   };

// // // //   const getAnimation = (anim) => {
// // // //     if (anim === 'fadeLeft') return fadeLeft;
// // // //     if (anim === 'fadeRight') return fadeRight;
// // // //     return fadeUp;
// // // //   };

// // // //   return (
// // // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f1f1f1] overflow-hidden">
      
// // // //       {/* Animated Background Elements */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <motion.div 
// // // //           className="absolute top-0 left-1/4 w-40 h-40 bg-[#01ADF0]/10 rounded-full blur-3xl"
// // // //           animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.2, 0.8, 1] }}
// // // //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div 
// // // //           className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#00C6FB]/10 rounded-full blur-3xl"
// // // //           animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
// // // //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // // //         {/* ===== HEADER SECTION ===== */}
// // // //         <motion.div 
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //           variants={fadeUp}
// // // //           className="text-center mb-8 sm:mb-10 md:mb-12"
// // // //         >
// // // //           {/* Badge */}
// // // //           <motion.span 
// // // //             className="sec-badge inline-block"
// // // //             whileHover={{ scale: 1.05 }}
// // // //             animate={{ y: [0, -3, 0] }}
// // // //             transition={{ duration: 2, repeat: Infinity }}
// // // //           >
// // // //             Our Projects
// // // //           </motion.span>

// // // //           {/* Heading - ServicesSection jaisi classes use ki gayi hain */}
// // // //           <motion.h2 
// // // //             className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.15 }}
// // // //           >
// // // //             Exploring our{' '}
// // // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // // //               creative and impactful
// // // //             </span>
// // // //           </motion.h2>

// // // //           {/* Subtitle - ServicesSection jaisi classes use ki gayi hain */}
// // // //           <motion.p 
// // // //             className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5, delay: 0.2 }}
// // // //           >
// // // //             A showcase of our finest work, delivering excellence across industries.
// // // //           </motion.p>
// // // //         </motion.div>

// // // //         {/* ===== GRID SECTION ===== */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
// // // //           {projects.map((project, index) => (
// // // //             <motion.div
// // // //               key={project.id}
// // // //               initial="hidden"
// // // //               whileInView="visible"
// // // //               viewport={{ once: true }}
// // // //               variants={getAnimation(project.animation)}
// // // //               className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 cursor-pointer h-[350px] md:h-[450px]"
// // // //             >
// // // //               <img
// // // //                 src={project.image}
// // // //                 alt={project.title}
// // // //                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
// // // //                 loading="lazy"
// // // //               />

// // // //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

// // // //               <div 
// // // //                 className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[20px] z-10 transition-all duration-[600ms] ease-linear bg-white/30 group-hover:h-[250%] group-hover:bg-transparent"
// // // //                 aria-hidden="true"
// // // //               />

// // // //               <div className="absolute top-4 left-4 z-20">
// // // //                 <span className="bg-[#01ADF0]/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 shadow-md">
// // // //                   {project.category}
// // // //                 </span>
// // // //               </div>

// // // //               <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
// // // //                 <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00C6FB] transition-colors duration-300">
// // // //                   {project.title}
// // // //                 </h4>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>

// // // //         {/* ===== BOTTOM CTA BUTTON ===== */}
// // // //         <motion.div 
// // // //           className="text-center mt-8 sm:mt-10 md:mt-12"
// // // //           initial={{ opacity: 0, y: 15 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.4, delay: 0.2 }}
// // // //           viewport={{ once: true }}
// // // //         >
// // // //           <motion.a
// // // //             href="/portfolio"
// // // //             whileTap={{ scale: 0.95 }}
// // // //             className="sec-btn"
// // // //           >
// // // //             Explore Our Project
// // // //             <motion.span
// // // //               animate={{ x: [0, 6, 0] }}
// // // //               transition={{ duration: 1.5, repeat: Infinity }}
// // // //             >
// // // //               <ArrowRight className="h-4 w-4" />
// // // //             </motion.span>
// // // //           </motion.a>
// // // //         </motion.div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ProjectSection;




// // // // import React, { useState, useEffect, useRef, useCallback } from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { ArrowLeft, ArrowRight } from 'lucide-react';

// // // // /* ============================================================
// // // //    RING CARDS DATA (3D Carousel)
// // // //    ============================================================ */
// // // // const RING_CARDS = [
// // // //   {
// // // //     id: 0,
// // // //     name: "The Mom's Co.",
// // // //     sub: "Baby & Mom Care · D2C",
// // // //     tag: "D2C · Social & Performance",
// // // //     stat: "3X",
// // // //     statLabel: "Traffic",
// // // //     go: 0,
// // // //     img: "/images/themomsco.jpg", // replace with your base64 / url
// // // //     bgClass: "from-[#dbe9fd] to-[#9fc1f5]",
// // // //     imgContain: true,
// // // //   },
// // // //   {
// // // //     id: 1,
// // // //     name: "Lodha · Navi Mumbai",
// // // //     sub: "Real Estate · Lead Generation",
// // // //     tag: "Real Estate · Lead Gen",
// // // //     stat: "672+",
// // // //     statLabel: "Leads",
// // // //     go: 3,
// // // //     img: "/images/lodha.jpg",
// // // //     imgPos: "object-[30%_50%]",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Ciora Cafe · Dubai",
// // // //     sub: "Café & Dining · Brand & Growth",
// // // //     tag: "Café · Brand & Growth",
// // // //     stat: "250K+",
// // // //     statLabel: "Reach / mo",
// // // //     go: 6,
// // // //     img: "/images/ciora.jpg",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "Shomi Healings",
// // // //     sub: "Wellness · Instagram Growth Strategy",
// // // //     tag: "Wellness · Instagram",
// // // //     stat: "5",
// // // //     statLabel: "Pillars",
// // // //     go: 9,
// // // //     isOrbit: true,
// // // //     orbitBg: "radial-gradient(circle at 50% 36%,#7b5fc4 0,#3a2566 38%,#1a1030 80%)",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "Ultra Fragrance Ltd",
// // // //     sub: "Fragrance · Website Strategy",
// // // //     tag: "Fragrance · Website",
// // // //     stat: "5",
// // // //     statLabel: "Parameters",
// // // //     go: 11,
// // // //     isBottle: true,
// // // //     bottleBg: "radial-gradient(circle at 50% 30%,#fff 0,#f4dfe4 35%,#c78196 100%)",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "SmileCare",
// // // //     sub: "Dental care app · UI/UX design",
// // // //     tag: "Healthcare · App UI/UX",
// // // //     stat: "4",
// // // //     statLabel: "Core screens",
// // // //     go: 13,
// // // //     img: "/images/smilecare.jpg",
// // // //     smileBg: "radial-gradient(circle at 50% 30%,#fff,#bfe9e6 60%,#6cc8c2)",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "SR Infra · Earth Work Solutions",
// // // //     sub: "Earthwork & infrastructure · Hyderabad",
// // // //     tag: "Infrastructure · Earthwork",
// // // //     stat: "15",
// // // //     statLabel: "Projects",
// // // //     go: 15,
// // // //     img: "/images/srinfra.jpg",
// // // //     imgPos: "object-[40%_50%]",
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     name: "Fairbanks Orthodontics",
// // // //     sub: "Orthodontics · SEO & Lead Generation",
// // // //     tag: "Orthodontics · SEO & Leads",
// // // //     stat: "Lehi",
// // // //     statLabel: "Utah",
// // // //     go: 18,
// // // //     isOrbit: true,
// // // //     orbitBg: "radial-gradient(circle at 50% 30%,#2a6aa8,#0f2340 75%)",
// // // //     orbitColor: "#5fd4b0",
// // // //   },
// // // //   {
// // // //     id: 8,
// // // //     name: "Your brand next",
// // // //     sub: "Start a project with CoderBox",
// // // //     tag: "Your brand next",
// // // //     isNext: true,
// // // //   },
// // // // ];

// // // // /* ============================================================
// // // //    TABS
// // // //    ============================================================ */
// // // // const TABS = [
// // // //   { label: "The Mom's Co.", go: 0 },
// // // //   { label: "Lodha", go: 3 },
// // // //   { label: "Ciora Cafe", go: 6 },
// // // //   { label: "Shomi Healings", go: 9 },
// // // //   { label: "Ultra Fragrance", go: 11 },
// // // //   { label: "SmileCare", go: 13 },
// // // //   { label: "SR Infra", go: 15 },
// // // //   { label: "Fairbanks Ortho", go: 18 },
// // // // ];

// // // // /* ============================================================
// // // //    DRUM FACES DATA — full case-study content
// // // //    ============================================================ */
// // // // const DRUM_FACES = [
// // // //   {
// // // //     id: 0, c: 0, title: "The Mom's Co. — Brand overview", type: "mom-overview",
// // // //   },
// // // //   {
// // // //     id: 1, c: 0, title: "The Mom's Co. — Challenge & solution", type: "mom-challenge",
// // // //   },
// // // //   {
// // // //     id: 2, c: 0, title: "The Mom's Co. — Results", type: "mom-results",
// // // //   },
// // // //   {
// // // //     id: 3, c: 1, title: "Lodha — Navi Mumbai overview", type: "lodha-overview",
// // // //   },
// // // //   {
// // // //     id: 4, c: 1, title: "Lodha — The lead engine", type: "lodha-engine",
// // // //   },
// // // //   {
// // // //     id: 5, c: 1, title: "Lodha — Results", type: "lodha-results",
// // // //   },
// // // //   {
// // // //     id: 6, c: 2, title: "Ciora Cafe — Brand overview", type: "ciora-overview",
// // // //   },
// // // //   {
// // // //     id: 7, c: 2, title: "Ciora Cafe — The work", type: "ciora-work",
// // // //   },
// // // //   {
// // // //     id: 8, c: 2, title: "Ciora Cafe — Results", type: "ciora-results",
// // // //   },
// // // //   {
// // // //     id: 9, c: 3, title: "Shomi Healings — Brand positioning", type: "shomi-positioning",
// // // //   },
// // // //   {
// // // //     id: 10, c: 3, title: "Shomi Healings — The growth playbook", type: "shomi-playbook",
// // // //   },
// // // //   {
// // // //     id: 11, c: 4, title: "Ultra Fragrance Ltd — Website strategy", type: "ultra-fivecs",
// // // //   },
// // // //   {
// // // //     id: 12, c: 4, title: "Ultra Fragrance Ltd — Five parameters", type: "ultra-params",
// // // //   },
// // // //   {
// // // //     id: 13, c: 5, title: "SmileCare — App design", type: "smile-design",
// // // //   },
// // // //   {
// // // //     id: 14, c: 5, title: "SmileCare — The patient journey", type: "smile-journey",
// // // //   },
// // // //   {
// // // //     id: 15, c: 6, title: "SR Infra — Company overview", type: "sr-overview",
// // // //   },
// // // //   {
// // // //     id: 16, c: 6, title: "SR Infra — Services & fleet", type: "sr-fleet",
// // // //   },
// // // //   {
// // // //     id: 17, c: 6, title: "SR Infra — Projects", type: "sr-projects",
// // // //   },
// // // //   {
// // // //     id: 18, c: 7, title: "Fairbanks Orthodontics — SEO", type: "fair-seo",
// // // //   },
// // // //   {
// // // //     id: 19, c: 7, title: "Fairbanks Orthodontics — Lead generation", type: "fair-leads",
// // // //   },
// // // // ];

// // // // /* ============================================================
// // // //    SHOMI PILLARS
// // // //    ============================================================ */
// // // // const PILLARS = [
// // // //   "Vastu education",
// // // //   "Spiritual growth",
// // // //   "Problem → solution",
// // // //   "Social proof",
// // // //   "Behind the scenes",
// // // // ];

// // // // /* ============================================================
// // // //    UTILITY — count-up hook
// // // //    ============================================================ */
// // // // const useCountUp = (end, dec = 0, suffix = "", start = false, duration = 1400) => {
// // // //   const [value, setValue] = useState(0);
// // // //   const raf = useRef(null);
// // // //   useEffect(() => {
// // // //     if (!start) return;
// // // //     let t0 = null;
// // // //     const step = (t) => {
// // // //       if (!t0) t0 = t;
// // // //       const k = Math.min(1, (t - t0) / duration);
// // // //       const eased = 1 - Math.pow(1 - k, 3);
// // // //       setValue(end * eased);
// // // //       if (k < 1) raf.current = requestAnimationFrame(step);
// // // //     };
// // // //     raf.current = requestAnimationFrame(step);
// // // //     return () => cancelAnimationFrame(raf.current);
// // // //   }, [start, end, duration]);
// // // //   return value.toFixed(dec) + suffix;
// // // // };

// // // // /* ============================================================
// // // //    RING CARD
// // // //    ============================================================ */
// // // // const RingCard = React.forwardRef(({ card, onClick, isDragging }, ref) => {
// // // //   if (card.isNext) {
// // // //     return (
// // // //       <a
// // // //         ref={ref}
// // // //         href="#contact"
// // // //         onClick={onClick}
// // // //         className="absolute rounded-2xl overflow-hidden text-white block bg-gradient-to-br from-[#0d1b3d] via-[#16366f] to-[#0a8af0] p-6 flex flex-col justify-center"
// // // //         style={{
// // // //           width: "var(--cw, 280px)",
// // // //           aspectRatio: "304/337",
// // // //           left: "calc(var(--cw, 280px) / -2)",
// // // //           top: "calc(var(--cw, 280px) * -0.554)",
// // // //           backfaceVisibility: "hidden",
// // // //         }}
// // // //       >
// // // //         <span className="inline-block bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full w-fit shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
// // // //           Your brand next
// // // //         </span>
// // // //         <h3 className="text-[22px] leading-tight mt-10 mb-2.5 font-extrabold">
// // // //           Could your brand be the next case study?
// // // //         </h3>
// // // //         <p className="text-[13px] opacity-80 leading-[1.55] mb-4">
// // // //           Websites, social, performance marketing and lead generation, built around measurable results.
// // // //         </p>
// // // //         <span className="inline-flex items-center gap-2 bg-white text-[#0f1a2c] font-bold text-[13px] rounded-full px-4 py-2.5 w-fit">
// // // //           Start a project →
// // // //         </span>
// // // //       </a>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <button
// // // //       ref={ref}
// // // //       onClick={onClick}
// // // //       className="absolute rounded-2xl overflow-hidden text-white block p-0 border-0 cursor-pointer text-left shadow-[0_22px_40px_-18px_rgba(15,26,44,.5)]"
// // // //       style={{
// // // //         width: "var(--cw, 280px)",
// // // //         aspectRatio: "304/337",
// // // //         left: "calc(var(--cw, 280px) / -2)",
// // // //         top: "calc(var(--cw, 280px) * -0.554)",
// // // //         backfaceVisibility: "hidden",
// // // //       }}
// // // //     >
// // // //       {/* Background */}
// // // //       <div
// // // //         className={`absolute inset-0 bg-gradient-to-br ${card.bgClass || ""}`}
// // // //         style={
// // // //           card.orbitBg
// // // //             ? { background: card.orbitBg }
// // // //             : card.bottleBg
// // // //             ? { background: card.bottleBg }
// // // //             : card.smileBg
// // // //             ? { background: card.smileBg }
// // // //             : undefined
// // // //         }
// // // //       >
// // // //         {card.img && (
// // // //           <img
// // // //             src={card.img}
// // // //             alt={card.name}
// // // //             draggable="false"
// // // //             className={`w-full h-full object-cover ${card.imgPos || ""}`}
// // // //             style={card.imgContain ? { objectFit: "contain", paddingTop: 30, mixBlendMode: "multiply" } : undefined}
// // // //           />
// // // //         )}

// // // //         {/* CSS orbit art */}
// // // //         {card.isOrbit && (
// // // //           <>
// // // //             <div
// // // //               className="absolute left-1/2 top-[40%] w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
// // // //               style={{ animation: "cbpSpinY 14s linear infinite" }}
// // // //             >
// // // //               {[0, 1, 2, 3].map((i) => (
// // // //                 <span
// // // //                   key={i}
// // // //                   className="absolute inset-0 rounded-full border"
// // // //                   style={{
// // // //                     borderColor: card.orbitColor ? `${card.orbitColor}88` : "rgba(214,196,255,.55)",
// // // //                     transform:
// // // //                       i === 1 ? "rotateX(60deg)" : i === 2 ? "rotateX(-60deg)" : i === 3 ? "rotateY(90deg)" : undefined,
// // // //                   }}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //             <div
// // // //               className="absolute left-1/2 top-[40%] w-[44px] h-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[1px]"
// // // //               style={{
// // // //                 background: card.orbitColor
// // // //                   ? "radial-gradient(circle,#fff 0,#bff3e2 35%,rgba(95,212,176,0) 72%)"
// // // //                   : "radial-gradient(circle,#fff 0,#e7dcff 35%,rgba(185,163,240,0) 72%)",
// // // //               }}
// // // //             />
// // // //           </>
// // // //         )}

// // // //         {/* CSS bottle art */}
// // // //         {card.isBottle && (
// // // //           <div
// // // //             className="absolute left-1/2 top-[14%] w-[92px] h-[138px] -translate-x-1/2 rounded-[20px] rounded-b-[26px]"
// // // //             style={{
// // // //               background: "linear-gradient(135deg,rgba(255,255,255,.9),rgba(255,255,255,.25) 45%,rgba(168,68,106,.35))",
// // // //               boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.8), 0 30px 40px -20px rgba(58,29,43,.6)",
// // // //               animation: "cbpFloat 5s ease-in-out infinite",
// // // //             }}
// // // //           >
// // // //             <span
// // // //               className="absolute left-1/2 -top-[30px] w-[34px] h-[30px] -translate-x-1/2 rounded-[6px] rounded-t-[3px]"
// // // //               style={{ background: "linear-gradient(180deg,#d9b27a,#9c7440)" }}
// // // //             />
// // // //             <span
// // // //               className="absolute bottom-9 left-0 right-0 text-center text-[34px]"
// // // //               style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600, color: "#3a1d2b" }}
// // // //             >
// // // //               U
// // // //             </span>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* Gradient overlay */}
// // // //       <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050c1c]/85 pointer-events-none" />

// // // //       {/* Tag */}
// // // //       <span className="absolute top-3 left-3 z-[2] bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
// // // //         {card.tag}
// // // //       </span>

// // // //       {/* Stat */}
// // // //       {card.stat && (
// // // //         <span className="absolute top-3 right-3 z-[2] bg-white/95 text-[#0f1a2c] font-extrabold text-[12px] rounded-[10px] px-2.5 py-1.5 leading-[1.1] text-center">
// // // //           {card.stat}
// // // //           <i className="block not-italic font-semibold text-[9px] text-[#5b6474] tracking-wider uppercase">
// // // //             {card.statLabel}
// // // //           </i>
// // // //         </span>
// // // //       )}

// // // //       {/* Meta */}
// // // //       <div className="absolute left-[18px] right-[18px] bottom-4 z-[2]">
// // // //         <b className="block text-[19px] font-bold tracking-[-.01em]">{card.name}</b>
// // // //         <small className="block text-[12px] opacity-85 mt-1">{card.sub} · View case study →</small>
// // // //       </div>
// // // //     </button>
// // // //   );
// // // // });
// // // // RingCard.displayName = "RingCard";

// // // // /* ============================================================
// // // //    DRUM FACE — renders case-study content by type
// // // //    ============================================================ */
// // // // const DrumFace = React.forwardRef(({ face, live }, ref) => {
// // // //   const baseClass = `absolute inset-0 rounded-[22px] overflow-hidden grid grid-cols-[1.05fr_.95fr] shadow-[0_30px_60px_-30px_rgba(15,26,44,.45)] ring-1 ring-black/5 ${
// // // //     live ? "live" : ""
// // // //   }`;

// // // //   const content = renderFaceContent(face.type);
// // // //   if (!content) return null;

// // // //   return (
// // // //     <article
// // // //       ref={ref}
// // // //       className={`${baseClass} ${content.bg || "bg-white"} ${content.dark ? "text-white" : "text-[#0f1a2c]"}`}
// // // //     >
// // // //       <div className="p-9 flex flex-col justify-center min-w-0">{content.copy}</div>
// // // //       <div className="relative overflow-hidden flex items-center justify-center [perspective:900px]">
// // // //         {content.visual}
// // // //       </div>
// // // //       <span className="absolute inset-0 bg-[#0f1a2c] opacity-0 pointer-events-none z-[5]" />
// // // //     </article>
// // // //   );
// // // // });
// // // // DrumFace.displayName = "DrumFace";

// // // // /* ============================================================
// // // //    FACE CONTENT RENDERER
// // // //    ============================================================ */
// // // // const Kicker = ({ children, color = "#0bb4ef" }) => (
// // // //   <div className="text-[11px] font-bold tracking-[.16em] uppercase flex items-center gap-2.5" style={{ color }}>
// // // //     <span className="w-[22px] h-0.5 rounded-[2px] bg-current" />
// // // //     {children}
// // // //   </div>
// // // // );

// // // // const Chip = ({ children }) => (
// // // //   <span className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[#f2f4f7] border border-[#e2e5ea]">
// // // //     {children}
// // // //   </span>
// // // // );

// // // // const ListBefore = ({ items }) => (
// // // //   <ul className="list-none p-0 m-0 grid gap-2.5">
// // // //     {items.map((it, i) => (
// // // //       <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#5b6474] before:content-['✕'] before:absolute before:left-0 before:top-0 before:font-extrabold before:text-[#e0525c]">
// // // //         {it}
// // // //       </li>
// // // //     ))}
// // // //   </ul>
// // // // );

// // // // const ListAfter = ({ items }) => (
// // // //   <ul className="list-none p-0 m-0 grid gap-2.5">
// // // //     {items.map((it, i) => (
// // // //       <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#2c3444] before:content-['✓'] before:absolute before:left-0 before:top-0 before:font-extrabold before:text-[#16a36a]">
// // // //         {it}
// // // //       </li>
// // // //     ))}
// // // //   </ul>
// // // // );

// // // // const Stat = ({ value, label, color = "#1f6fe0", bg = "#eaf2fe", border = "#d6e5fc" }) => (
// // // //   <div
// // // //     className="rounded-2xl p-[18px] border"
// // // //     style={{ background: bg, borderColor: border }}
// // // //   >
// // // //     <b className="block text-[clamp(28px,3.4vw,42px)] font-extrabold tracking-[-.03em] leading-none" style={{ color }}>
// // // //       {value}
// // // //     </b>
// // // //     <span className="block text-[13px] text-[#5b6474] mt-2 leading-[1.35]">{label}</span>
// // // //   </div>
// // // // );

// // // // const CountStat = ({ end, dec = 0, suffix = "", word, label, color = "#1f6fe0", bg = "#eaf2fe", border = "#d6e5fc", start }) => {
// // // //   const val = useCountUp(end, dec, suffix, start);
// // // //   return <Stat value={word || val} label={label} color={color} bg={bg} border={border} />;
// // // // };

// // // // const renderFaceContent = (type) => {
// // // //   switch (type) {
// // // //     /* ---------- MOM'S CO ---------- */
// // // //     case "mom-overview":
// // // //       return {
// // // //         copy: (
// // // //           <>
// // // //             <div className="flex items-center gap-3.5">
// // // //               <span className="w-[54px] h-[54px] rounded-full grid place-items-center text-[13px] leading-[.95] text-center flex-none bg-[#1f6fe0] text-white" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 the<br />mom's<br />co.
// // // //               </span>
// // // //               <Kicker color="#1f6fe0">Client · Baby &amp; Mom Care (D2C)</Kicker>
// // // //             </div>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               The Mom's Co.<br />
// // // //               <em className="not-italic" style={{ color: "#1f6fe0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 Clean. Safe. Effective.
// // // //               </em>
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
// // // //               A trusted D2C brand offering safe, natural and toxin-free personal care products for moms, babies and families. CoderBox partnered with them to build a consistent brand narrative across every digital touchpoint.
// // // //             </p>
// // // //             <div className="flex flex-wrap gap-2">
// // // //               {["01 Strategy", "02 Content", "03 Performance", "04 Website", "05 SEO"].map((c) => (
// // // //                 <Chip key={c}>{c}</Chip>
// // // //               ))}
// // // //             </div>
// // // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#e2e5ea]">
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Website</small>
// // // //                 themomsco.com
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Instagram</small>
// // // //                 @themomsco
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Our role</small>
// // // //                 Digital growth partner
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="w-full h-full" style={{ background: "linear-gradient(160deg,#eaf2fe,#c9dcfb)" }} />
// // // //         ),
// // // //       };

// // // //     case "mom-challenge":
// // // //       return {
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#1f6fe0">From low visibility to high growth</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Where they were.{" "}
// // // //               <em className="not-italic" style={{ color: "#1f6fe0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 What we did.
// // // //               </em>
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-4.5">
// // // //               <div>
// // // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">The challenge</h4>
// // // //                 <ListBefore
// // // //                   items={[
// // // //                     "Limited digital visibility in a competitive market",
// // // //                     "Inconsistent social media presence",
// // // //                     "Low website traffic and conversions",
// // // //                     "Needed stronger brand positioning",
// // // //                   ]}
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">The solution</h4>
// // // //                 <ListAfter
// // // //                   items={[
// // // //                     "Clear digital strategy aligned to brand values",
// // // //                     "End-to-end social media with informative content",
// // // //                     "Targeted performance campaigns",
// // // //                     "Website optimised for UX & conversions",
// // // //                     "Brand storytelling to build trust & community",
// // // //                   ]}
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: <div className="w-full h-full" style={{ background: "#f4f5f7" }} />,
// // // //       };

// // // //     case "mom-results":
// // // //       return {
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#1f6fe0">The results</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               A stronger,{" "}
// // // //               <em className="not-italic" style={{ color: "#1f6fe0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 more visible
// // // //               </em>{" "}
// // // //               brand.
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-3.5">
// // // //               <CountStat end={3} suffix="X" label="Increase in website traffic" start />
// // // //               <CountStat end={2.5} dec={1} suffix="X" label="Growth in social media reach" start />
// // // //               <CountStat end={60} suffix="%" label="Increase in online conversions" start />
// // // //               <Stat value="Stronger" label="Brand recall & community engagement" />
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="w-full h-full p-9 flex flex-col justify-center gap-4 text-white" style={{ background: "linear-gradient(160deg,#1f6fe0,#0d3f8f)" }}>
// // // //             <p className="text-[clamp(20px,2.4vw,30px)] leading-[1.25] m-0" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //               "From a growing brand to a digital-first category leader."
// // // //             </p>
// // // //             <p className="m-0 opacity-80 text-[14px] leading-[1.55]">
// // // //               A partnership built on strategy, consistency and measurable results.
// // // //             </p>
// // // //           </div>
// // // //         ),
// // // //         dark: true,
// // // //       };

// // // //     /* ---------- LODHA ---------- */
// // // //     case "lodha-overview":
// // // //       return {
// // // //         bg: "bg-[#0d1b3d]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#e0b24a">Client · Real estate developer</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Landmark homes.<br />
// // // //               <em className="not-italic" style={{ color: "#e0b24a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 Full
// // // //               </em>{" "}
// // // //               pipeline.
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b9c3d8]">
// // // //               How CoderBox, as lead generation growth partner, drove 672+ home-buyer leads for Lodha's Navi Mumbai projects with aggressive social campaigns and Google PPC.
// // // //             </p>
// // // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Project</small>
// // // //                 Lodha Taloja · 1 BHK homes
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Channels</small>
// // // //                 Meta · Instagram · Google Ads
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Our role</small>
// // // //                 Lead generation growth partner
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: <div className="w-full h-full bg-[#0a1530]" />,
// // // //       };

// // // //     case "lodha-engine":
// // // //       return {
// // // //         bg: "bg-[#0d1b3d]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#e0b24a">The work</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Leads from every{" "}
// // // //               <em className="not-italic" style={{ color: "#e0b24a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 scroll.
// // // //               </em>
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-4.5 mb-4">
// // // //               <div>
// // // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">Where they were</h4>
// // // //                 <ListBefore
// // // //                   items={[
// // // //                     "Crowded, price-sensitive market",
// // // //                     "Low-intent portal enquiries",
// // // //                     "Leads going cold before follow-up",
// // // //                   ]}
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">What we did</h4>
// // // //                 <ListAfter
// // // //                   items={[
// // // //                     "Meta & Instagram lead ads",
// // // //                     "Google PPC on high-intent keywords",
// // // //                     "Instant WhatsApp & call-back follow-up",
// // // //                   ]}
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //             <div className="grid grid-cols-5 gap-1.5">
// // // //               {[
// // // //                 { bg: "#b98c3a", i: "01", t: "Audience", s: "Navi Mumbai buyers" },
// // // //                 { bg: "#c9a24a", i: "02", t: "Social ads", s: "Reels · carousels" },
// // // //                 { bg: "#1d64e0", i: "03", t: "Google PPC", s: "High-intent search" },
// // // //                 { bg: "#16366f", i: "04", t: "Landing page", s: "Instant forms" },
// // // //                 { bg: "#050b1c", i: "05", t: "672+ leads", s: "To sales, real time", shadow: true },
// // // //               ].map((s) => (
// // // //                 <div
// // // //                   key={s.i}
// // // //                   className="rounded-[10px] px-2.5 py-3 text-[12.5px] font-bold leading-tight text-white"
// // // //                   style={{ background: s.bg, boxShadow: s.shadow ? "inset 0 0 0 1px rgba(255,255,255,.2)" : undefined }}
// // // //                 >
// // // //                   <i className="block not-italic mb-1" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontSize: 13, opacity: 0.85 }}>
// // // //                     {s.i}
// // // //                   </i>
// // // //                   {s.t}
// // // //                   <small className="block text-[10px] font-semibold opacity-80 mt-1">{s.s}</small>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: <div className="w-full h-full bg-[#0a1530]" />,
// // // //       };

// // // //     case "lodha-results":
// // // //       return {
// // // //         bg: "bg-[#0d1b3d]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#e0b24a">The results</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               672+ leads.{" "}
// // // //               <em className="not-italic" style={{ color: "#e0b24a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 One
// // // //               </em>{" "}
// // // //               full pipeline.
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-3.5">
// // // //               <CountStat end={672} suffix="+" label="Home-buyer leads delivered to sales" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // // //               <Stat value="Always-on" label="Meta & Instagram lead ads" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // // //               <Stat value="High-intent" label="Google Search PPC" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // // //               <Stat value="Real-time" label="Leads to sales via CRM & WhatsApp" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-full h-full bg-[#0a1530]">
// // // //             <div
// // // //               className="absolute right-5 bottom-5 w-[120px] h-[120px] rounded-full grid place-items-center text-center font-extrabold shadow-[0_18px_40px_-10px_rgba(0,0,0,.5)] bg-[#e0b24a] text-[#0d1b3d]"
// // // //               style={{ animation: "cbpWobble 6s ease-in-out infinite" }}
// // // //             >
// // // //               <div>
// // // //                 <b className="text-[30px] tracking-[-.03em] block leading-none">672+</b>
// // // //                 <small className="text-[9.5px] tracking-[.14em]">QUALIFIED LEADS</small>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     /* ---------- CIORA ---------- */
// // // //     case "ciora-overview":
// // // //       return {
// // // //         bg: "bg-[#f7f0e5]",
// // // //         copy: (
// // // //           <>
// // // //             <div className="flex items-center gap-3.5">
// // // //               <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#241a15] text-[#e0a24a] text-[24px]" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", boxShadow: "inset 0 0 0 2px #e0a24a" }}>
// // // //                 C
// // // //               </span>
// // // //               <Kicker color="#c0643a">Client · Café &amp; dining · Dubai</Kicker>
// // // //             </div>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Coffee first.<br />
// // // //               <em className="not-italic" style={{ color: "#c0643a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 Crowds follow.
// // // //               </em>
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
// // // //               How CoderBox, brand &amp; growth partner since January 2026, turned a new Dubai Investment Park café into a name people search, shoot and share: a full identity, a website, a proper food shoot and a Meta presence built from zero.
// // // //             </p>
// // // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#e6d9c6]">
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Website</small>
// // // //                 cioracafe.ae
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Meta presence</small>
// // // //                 @cioracafe
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Our role</small>
// // // //                 Brand &amp; growth partner
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-full h-full" style={{ background: "#efe4d2" }}>
// // // //             <div
// // // //               className="absolute right-5 bottom-5 w-[120px] h-[120px] rounded-full grid place-items-center text-center font-extrabold shadow-[0_18px_40px_-10px_rgba(0,0,0,.5)] bg-[#e0a24a] text-[#241a15]"
// // // //               style={{ animation: "cbpWobble 6s ease-in-out infinite" }}
// // // //             >
// // // //               <div>
// // // //                 <small className="text-[9.5px] tracking-[.14em] block">SINCE</small>
// // // //                 <b className="text-[30px] tracking-[-.03em] block leading-none">JAN</b>
// // // //                 <small className="text-[9.5px] tracking-[.14em] block">2026</small>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     case "ciora-work":
// // // //       return {
// // // //         bg: "bg-[#f7f0e5]",
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#c0643a">Branding · Web · Photoshoot · Meta</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Seen before they're{" "}
// // // //               <em className="not-italic" style={{ color: "#c0643a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 seated.
// // // //               </em>
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-4.5">
// // // //               <div>
// // // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">Where they were</h4>
// // // //                 <ListBefore
// // // //                   items={[
// // // //                     "A brand-new café with no brand system",
// // // //                     "No website; the menu lived on paper",
// // // //                     "Food shot on phones, under yellow light",
// // // //                     "No Instagram or Facebook presence",
// // // //                   ]}
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">What CoderBox did</h4>
// // // //                 <ListAfter
// // // //                   items={[
// // // //                     "Full identity: logo, palette, menu & collateral",
// // // //                     "Website with menu, gallery & enquiries",
// // // //                     "On-site food, drinks & interior shoot",
// // // //                     "Instagram + Facebook built from zero",
// // // //                   ]}
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //             <div className="grid grid-cols-5 gap-1.5 mt-4.5 relative">
// // // //               <div className="absolute left-1.5 right-1.5 top-[5px] h-0.5 rounded" style={{ background: "linear-gradient(90deg,#c0643a,#e0a24a)" }} />
// // // //               {[
// // // //                 { s: "JAN", t: "Brand identity" },
// // // //                 { s: "FEB", t: "Website live" },
// // // //                 { s: "MAR", t: "Photoshoot" },
// // // //                 { s: "APR", t: "Meta launch" },
// // // //                 { s: "NOW", t: "Always-on content" },
// // // //               ].map((s, i) => (
// // // //                 <div key={i} className="relative pt-[18px] text-[11.5px] font-bold leading-[1.3]">
// // // //                   <span className="absolute left-0 top-0 w-3 h-3 rounded-full border-2 border-[#c0643a]" style={{ background: "#f7f0e5" }} />
// // // //                   <small className="block text-[9.5px] tracking-[.12em] text-[#c0643a] mb-0.5">{s.s}</small>
// // // //                   {s.t}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: <div className="w-full h-full bg-[#efe4d2]" />,
// // // //       };

// // // //     case "ciora-results":
// // // //       return {
// // // //         bg: "bg-[#241a15]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#e0a24a">The results</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               A café people find,{" "}
// // // //               <em className="not-italic" style={{ color: "#e0a24a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 follow
// // // //               </em>{" "}
// // // //               and fill.
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-3.5">
// // // //               <CountStat end={4.2} dec={1} suffix="K+" label="Instagram followers" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // // //               <CountStat end={180} suffix="+" label="Posts, reels & stories shipped" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // // //               <CountStat end={250} suffix="K+" label="Monthly Meta reach · Instagram + Facebook" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // // //               <Stat value="Dubai" label="DIP · Al Furjan · Jebel Ali · Expo City" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: <div className="w-full h-full bg-[#efe4d2]" />,
// // // //       };

// // // //     /* ---------- SHOMI ---------- */
// // // //     case "shomi-positioning":
// // // //       return {
// // // //         bg: "bg-[#24163a]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#b9a3f0">Client · Vastu, tarot &amp; healing</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Align your space, energy and soul,{" "}
// // // //               <em className="not-italic" style={{ color: "#b9a3f0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 and life flows.
// // // //               </em>
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#cfc3e8]">
// // // //               An Instagram growth strategy that positions Shomi Healings not as a service page but as a guidance ecosystem: people come for clarity, balance, peace and direction.
// // // //             </p>
// // // //             <div className="flex flex-wrap gap-2">
// // // //               {["Calm, reassuring, wise", "Spiritual but practical", "High trust, not sensational"].map((c) => (
// // // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#efe9fc]">
// // // //                   {c}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Platform</small>
// // // //                 Instagram
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Deliverable</small>
// // // //                 Growth strategy
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Goal</small>
// // // //                 Followers → consultation leads
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-[min(340px,80%)] aspect-square [transform:rotateX(64deg)] [transform-style:preserve-3d]">
// // // //             <div
// // // //               className="absolute inset-0 [transform-style:preserve-3d]"
// // // //               style={{ animation: "cbpSpinZ 22s linear infinite" }}
// // // //             >
// // // //               <div className="absolute inset-0 rounded-full border border-dashed border-[rgba(214,196,255,.45)]" />
// // // //               {PILLARS.map((t, i) => {
// // // //                 const a = i * (360 / PILLARS.length);
// // // //                 return (
// // // //                   <div key={i} className="absolute left-1/2 top-1/2 w-0 h-0" style={{ transform: `rotateZ(${a}deg) translateY(-50%)` }}>
// // // //                     <span
// // // //                       className="absolute block whitespace-nowrap bg-white/10 border border-[rgba(214,196,255,.45)] backdrop-blur text-white text-[12px] font-bold px-3 py-2 rounded-full"
// // // //                       style={{ transform: `translate(-50%,-50%) rotateZ(${-a}deg) rotateX(-64deg)` }}
// // // //                     >
// // // //                       {t}
// // // //                     </span>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>
// // // //             <div
// // // //               className="absolute left-1/2 top-1/2 w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full grid place-items-center text-center text-[#24163a] text-[15px] leading-[1.1]"
// // // //               style={{
// // // //                 transform: "rotateX(-64deg) translateZ(40px)",
// // // //                 background: "radial-gradient(circle,#fff 0,#e3d6ff 22%,rgba(185,163,240,.35) 55%,rgba(185,163,240,0) 72%)",
// // // //                 fontFamily: "Fraunces,Georgia,serif",
// // // //                 fontStyle: "italic",
// // // //                 fontWeight: 600,
// // // //               }}
// // // //             >
// // // //               Shomi<br />Healings
// // // //             </div>
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     case "shomi-playbook":
// // // //       return {
// // // //         bg: "bg-[#24163a]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#b9a3f0">The playbook</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Consistency{" "}
// // // //               <em className="not-italic" style={{ color: "#b9a3f0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 over virality.
// // // //               </em>
// // // //             </h3>
// // // //             <div className="grid grid-cols-5 gap-1.5 mb-4">
// // // //               {[
// // // //                 { b: "1–2", s: "Reels / day" },
// // // //                 { b: "8–15", s: "Stories / day" },
// // // //                 { b: "2–3", s: "Carousels / wk" },
// // // //                 { b: "1", s: "Live / wk" },
// // // //                 { b: "3–4", s: "Broadcasts / wk" },
// // // //               ].map((c, i) => (
// // // //                 <div key={i} className="bg-white/5 border border-white/10 rounded-[10px] px-2 py-2.5 text-center">
// // // //                   <b className="block text-[15px] text-[#b9a3f0]">{c.b}</b>
// // // //                   <span className="text-[10.5px] text-[#cfc3e8]">{c.s}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //             <div className="grid grid-cols-2 gap-3.5">
// // // //               <Stat value="+15–25%" label="Monthly follower growth target" color="#b9a3f0" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // // //               <Stat value="5–15" label="DM leads / day target" color="#b9a3f0" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // // //             </div>
// // // //             <p className="text-[11.5px] text-[#b7a9d6] italic mt-3">
// // // //               Targets set in the strategy. Framework: education builds authority, emotion builds trust, proof builds confidence, DMs build revenue.
// // // //             </p>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="p-7 w-full h-full" style={{ background: "radial-gradient(circle at 50% 50%,#4a2f85 0,#24163a 70%)" }}>
// // // //             <div className="text-[#efe9fc] w-full max-w-[340px]">
// // // //               <h4 className="text-[12px] tracking-[.14em] uppercase mb-2.5" style={{ color: "#b9a3f0" }}>Reels framework</h4>
// // // //               <ul className="list-none p-0 m-0 grid gap-2.5">
// // // //                 {[
// // // //                   "0–3 sec · Pattern break: eye contact or home visual",
// // // //                   "3–7 sec · Pain or curiosity hook",
// // // //                   "7–15 sec · Value and explanation",
// // // //                   "15–20 sec · Gentle CTA: DM \"VASTU\"",
// // // //                 ].map((t, i) => (
// // // //                   <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#cfc3e8] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:opacity-70 before:text-[#b9a3f0]">
// // // //                     {t}
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //               <h4 className="text-[12px] tracking-[.14em] uppercase mb-2.5 mt-4.5" style={{ color: "#b9a3f0" }}>DM conversion, non-salesy</h4>
// // // //               <ul className="list-none p-0 m-0 grid gap-2.5">
// // // //                 <li className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#cfc3e8] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-[#b9a3f0]">
// // // //                   Gratitude → emotional question → soft offer
// // // //                 </li>
// // // //               </ul>
// // // //             </div>
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     /* ---------- ULTRA ---------- */
// // // //     case "ultra-fivecs":
// // // //       return {
// // // //         bg: "bg-[#fbf4ef]",
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#a8446a">Client · Fragrance</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               A website built on{" "}
// // // //               <em className="not-italic" style={{ color: "#a8446a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 five Cs.
// // // //               </em>
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
// // // //               For Ultra Fragrance Ltd, CoderBox set out the parameters for running a successful website: a platform to talk to every customer individually, easy to manage, and at a fraction of the cost of other channels.
// // // //             </p>
// // // //             <div className="flex flex-wrap gap-2">
// // // //               {["Credibility", "Convenience", "Constant connectivity", "Communication", "Cost"].map((c) => (
// // // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-[#f0dde2]">
// // // //                   {c}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-full h-full grid place-items-center" style={{ background: "radial-gradient(circle at 50% 40%,#fff 0,#f6e2e6 45%,#d9a3b3 100%)" }}>
// // // //             <div className="relative w-[170px] h-[230px] [transform-style:preserve-3d]" style={{ animation: "cbpSpinY 16s linear infinite" }}>
// // // //               {["C", "C", "C", "C", "C"].map((letter, i) => (
// // // //                 <div
// // // //                   key={i}
// // // //                   className="absolute inset-0 rounded-[10px] flex flex-col justify-end p-4 text-white"
// // // //                   style={{
// // // //                     background: "linear-gradient(165deg,rgba(255,255,255,.35),rgba(168,68,106,.85))",
// // // //                     border: "1px solid rgba(255,255,255,.6)",
// // // //                     boxShadow: "inset 0 0 40px rgba(255,255,255,.25)",
// // // //                     transform: `rotateY(${i * 72}deg) translateZ(140px)`,
// // // //                   }}
// // // //                 >
// // // //                   <b className="text-[34px] leading-none" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600 }}>
// // // //                     {letter}
// // // //                   </b>
// // // //                   <span className="text-[12.5px] font-bold tracking-[.04em] mt-1.5">
// // // //                     {["Credibility", "Convenience", "Connectivity", "Communication", "Cost"][i]}
// // // //                   </span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //             <div
// // // //               className="absolute bottom-[14%] left-1/2 w-[240px] h-[40px] -translate-x-1/2 rounded-[50%]"
// // // //               style={{ background: "radial-gradient(ellipse,rgba(58,29,43,.35),transparent 70%)" }}
// // // //             />
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     case "ultra-params":
// // // //       return {
// // // //         bg: "bg-[#fbf4ef]",
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#a8446a">The framework</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Five parameters for a site{" "}
// // // //               <em className="not-italic" style={{ color: "#a8446a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 that performs.
// // // //               </em>
// // // //             </h3>
// // // //             <div className="grid gap-2">
// // // //               {[
// // // //                 { i: "01", b: "Content & messaging", s: "Accurate product, campaign and brand content with a consistent voice." },
// // // //                 { i: "02", b: "Stability & technical excellence", s: "Reliable DNS, regular backups and dependable maintenance." },
// // // //                 { i: "03", b: "Speed & robustness", s: "Fast on any device and connection, on a sound framework." },
// // // //                 { i: "04", b: "Aesthetics & functionalism", s: "Simplicity and elegance over complex design patterns." },
// // // //                 { i: "05", b: "Accessibility & usability", s: "Responsive in design and performance for every user." },
// // // //               ].map((p) => (
// // // //                 <div key={p.i} className="grid grid-cols-[34px_1fr] gap-3 items-start bg-white border border-[#f0dde2] rounded-[12px] px-3 py-2.5">
// // // //                   <i className="text-[18px]" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600, color: "#a8446a" }}>
// // // //                     {p.i}
// // // //                   </i>
// // // //                   <p className="m-0">
// // // //                     <b className="block text-[13.5px]">{p.b}</b>
// // // //                     <span className="text-[12px] text-[#5b6474] leading-[1.4]">{p.s}</span>
// // // //                   </p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-full h-full grid place-items-center" style={{ background: "radial-gradient(circle at 50% 40%,#fff 0,#f6e2e6 45%,#d9a3b3 100%)" }}>
// // // //             <div className="relative w-[58%] h-[44%] [transform-style:preserve-3d]" style={{ transform: "translateY(14%) rotateX(50deg) rotateZ(-28deg)" }}>
// // // //               {[136, 102, 68, 34, 0].map((z, i) => (
// // // //                 <div
// // // //                   key={i}
// // // //                   className="absolute inset-0 flex flex-col justify-end items-end rounded-xl bg-white border border-[#f0dde2] px-3.5 py-3 text-[12px] font-bold text-[#3a1d2b]"
// // // //                   style={{
// // // //                     boxShadow: "0 20px 40px -20px rgba(58,29,43,.5)",
// // // //                     transform: `translateZ(${z}px) translate(${z * -0.5}px,${z * -0.5}px)`,
// // // //                   }}
// // // //                 >
// // // //                   <span className="absolute left-3.5 top-2.5 text-[7px] tracking-widest text-[#e0b4c1]">● ● ●</span>
// // // //                   {["05 · Accessibility", "04 · Aesthetics", "03 · Speed", "02 · Stability", "01 · Content & messaging"][i]}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     /* ---------- SMILE ---------- */
// // // //     case "smile-design":
// // // //       return {
// // // //         bg: "bg-gradient-to-br from-[#f3fbfb] to-[#e2f4f3]",
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#138f8f">Client · Dental care app · UI/UX</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               A healthy smile,{" "}
// // // //               <em className="not-italic" style={{ color: "#138f8f", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 one tap away.
// // // //               </em>
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
// // // //               A calm, aqua glass interface for SmileCare's dental app, designed so patients can find a dentist, explore treatments and book a visit in one smooth flow.
// // // //             </p>
// // // //             <div className="flex flex-wrap gap-2">
// // // //               {["Onboarding", "Home dashboard", "Treatment pages", "Booking flow", "Glass UI system"].map((c) => (
// // // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-[#cdebea]">
// // // //                   {c}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#cdebea]">
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Brand line</small>
// // // //                 Healthy Smile, Happy Life
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Platform</small>
// // // //                 Mobile app
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Scope</small>
// // // //                 UI/UX design
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-full h-full grid place-items-center" style={{ background: "radial-gradient(circle at 50% 45%,#ffffff 0,#d6f1ef 45%,#9fdcd8 100%)" }}>
// // // //             <div className="flex gap-3 items-center">
// // // //               {[0, 1, 2].map((i) => (
// // // //                 <div
// // // //                   key={i}
// // // //                   className="w-[110px] h-[220px] rounded-[18px] bg-white/70 border-2 border-white shadow-[0_30px_50px_-20px_rgba(10,90,90,.55)]"
// // // //                   style={{
// // // //                     transform: i === 0 ? "rotateY(28deg) translateZ(-60px)" : i === 2 ? "rotateY(-28deg) translateZ(-60px)" : "translateZ(40px)",
// // // //                     animation: "cbpFan 7s ease-in-out infinite",
// // // //                     animationDelay: `${-i * 2}s`,
// // // //                   }}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     case "smile-journey":
// // // //       return {
// // // //         bg: "bg-gradient-to-br from-[#f3fbfb] to-[#e2f4f3]",
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#138f8f">The patient journey</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               From hello to{" "}
// // // //               <em className="not-italic" style={{ color: "#138f8f", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 booked.
// // // //               </em>
// // // //             </h3>
// // // //             <ul className="list-none p-0 m-0 grid gap-2.5">
// // // //               {[
// // // //                 { b: "01 Welcome", s: "brand promise, Get Started and sign in" },
// // // //                 { b: "02 Home", s: "search, Find Dentist, Appointments, Treatments and 24/7 Emergency" },
// // // //                 { b: "03 Treatment", s: "duration, sessions, results, benefits and starting price" },
// // // //                 { b: "04 Booking", s: "date, time slot, in-clinic or video consult, and fee before you confirm" },
// // // //               ].map((s, i) => (
// // // //                 <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#2c3444] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-[#16a3a3]">
// // // //                   <b>{s.b}</b> · {s.s}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-[34%] aspect-[9/16] [transform-style:preserve-3d]" style={{ animation: "cbpSpinY 18s linear infinite" }}>
// // // //             {[0, 1, 2, 3].map((i) => (
// // // //               <div
// // // //                 key={i}
// // // //                 className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e2f4f3] to-[#9fdcd8] border-[3px] border-white shadow-[0_20px_40px_-18px_rgba(10,90,90,.6)]"
// // // //                 style={{ transform: `rotateY(${i * 90}deg) translateZ(140px)`, backfaceVisibility: "hidden" }}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     /* ---------- SR INFRA ---------- */
// // // //     case "sr-overview":
// // // //       return {
// // // //         bg: "bg-[#1c1813]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <div className="flex items-center gap-3.5">
// // // //               <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#f2b705] text-[#1c1813] font-extrabold text-[15px]">
// // // //                 SR
// // // //               </span>
// // // //               <Kicker color="#f2b705">Client · Earthwork &amp; infrastructure</Kicker>
// // // //             </div>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Moving earth,{" "}
// // // //               <em className="not-italic" style={{ color: "#f2b705", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 since 2005.
// // // //               </em>
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#cfc6b8]">
// // // //               SR Infra – Earth Work Solutions supplies earthworks, major civil infrastructure and mining projects with a well-maintained fleet and a skilled team, known for mobilising machinery anywhere in the state, including remote sites.
// // // //             </p>
// // // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Established</small>
// // // //                 2005
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Base</small>
// // // //                 Kompally, Hyderabad
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Leadership</small>
// // // //                 Shankar Pallapu · 27+ yrs
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: <div className="w-full h-full bg-[#2a241c]" />,
// // // //       };

// // // //     case "sr-fleet":
// // // //       return {
// // // //         bg: "bg-[#1c1813]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#f2b705">Services &amp; fleet</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               The right machine,{" "}
// // // //               <em className="not-italic" style={{ color: "#f2b705", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 at the right time.
// // // //               </em>
// // // //             </h3>
// // // //             <div className="flex flex-wrap gap-2 mb-4">
// // // //               {["Cellar excavation", "Controlled blasting", "Forest clearance", "Demolition", "Trenching", "Culverts", "Landscaping", "Concrete breaking & removal"].map((c) => (
// // // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#f3ede3]">
// // // //                   {c}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //             <div className="grid grid-cols-5 gap-1.5 mt-4">
// // // //               {[
// // // //                 { b: 14, s: "Excavators, 20–22 t" },
// // // //                 { b: 30, s: "16 cum dumpers" },
// // // //                 { b: 15, s: "JHR machines" },
// // // //                 { b: 3, s: "Rig machines" },
// // // //                 { b: 2, s: "Transport vehicles" },
// // // //               ].map((f, i) => (
// // // //                 <div key={i} className="rounded-[10px] px-2 py-2.5 text-center bg-[#f2b705]/10 border border-[#f2b705]/30">
// // // //                   <b className="block text-[22px] leading-none text-[#f2b705]">{f.b}</b>
// // // //                   <span className="block text-[10.5px] leading-tight text-[#cfc6b8] mt-1">{f.s}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: <div className="w-full h-full bg-[#2a241c]" />,
// // // //       };

// // // //     case "sr-projects":
// // // //       return {
// // // //         bg: "bg-[#1c1813]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#f2b705">Track record</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Hyderabad's skyline,{" "}
// // // //               <em className="not-italic" style={{ color: "#f2b705", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 from the ground down.
// // // //               </em>
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-3.5">
// // // //               <CountStat end={15} label="Major projects across Hyderabad" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // // //               <CountStat end={13.9} dec={1} suffix="L+" label="Cubic metres excavated or in progress" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // // //               <CountStat end={2} suffix="L" label="m³ on the largest single site, SRIYAS Khajaguda" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // // //               <CountStat end={64} label="Machines in the owned fleet" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-full h-full bg-[#2a241c]">
// // // //             <div className="absolute left-0 right-0 bottom-0 z-[3] overflow-hidden bg-[#1c1813]/85 backdrop-blur border-t border-[#f2b705]/35 py-2.5">
// // // //               <div
// // // //                 className="flex gap-7 w-max text-[12px] font-bold tracking-[.08em] uppercase text-[#f3ede3]"
// // // //                 style={{ animation: "cbpMarq 26s linear infinite" }}
// // // //               >
// // // //                 {[0, 1].map((k) => (
// // // //                   <React.Fragment key={k}>
// // // //                     {["Rajapushpa", "Legend", "Mahaveer", "SAAS Infra", "AkzoNobel", "Poulomi", "Sunyuga", "SRIYAS Life Spaces", "Magna Infratech", "Delhi Public School", "Shilpa"].map((t, i) => (
// // // //                       <span key={`${k}-${i}`} className="before:content-['◆'] before:text-[#f2b705] before:mr-7">
// // // //                         {t}
// // // //                       </span>
// // // //                     ))}
// // // //                   </React.Fragment>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     /* ---------- FAIRBANKS ---------- */
// // // //     case "fair-seo":
// // // //       return {
// // // //         bg: "bg-[#0f2340]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <div className="flex items-center gap-3.5">
// // // //               <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#5fd4b0] text-[#0f2340] font-extrabold text-[15px]">
// // // //                 FO
// // // //               </span>
// // // //               <Kicker color="#5fd4b0">Client · Orthodontics · Lehi, Utah</Kicker>
// // // //             </div>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               Straight smiles,{" "}
// // // //               <em className="not-italic" style={{ color: "#5fd4b0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 found first.
// // // //               </em>
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b8c7dd]">
// // // //               Fairbanks Orthodontics is a patient-first practice in Lehi, UT, led by Dr. Benjamin Harvey, DDS, MS. CoderBox handles SEO so families searching for braces and aligners nearby find the practice first.
// // // //             </p>
// // // //             <div className="flex flex-wrap gap-2">
// // // //               {["Local SEO", "Service-page SEO", "Google Business Profile", "Invisalign®", "Damon™ & clear braces"].map((c) => (
// // // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#e6eef8]">
// // // //                   {c}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Website</small>
// // // //                 fairbanksorthodontics.com
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Location</small>
// // // //                 Lehi, Utah, USA
// // // //               </div>
// // // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Our role</small>
// // // //                 SEO &amp; lead generation
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-[82%] max-w-[400px] [transform-style:preserve-3d]" style={{ transform: "rotateX(18deg) rotateY(-18deg)", animation: "cbpSerp 8s ease-in-out infinite" }}>
// // // //             <div className="bg-white text-[#1f2a3a] rounded-[14px] px-4 py-3.5 shadow-[0_30px_50px_-24px_rgba(0,0,0,.6)]">
// // // //               <div className="flex items-center gap-2 border border-[#dfe3ea] rounded-full px-3 py-2 text-[12px] text-[#3c4656] mb-3">
// // // //                 <span className="w-2.5 h-2.5 border-2 border-[#7b8698] rounded-full" />
// // // //                 orthodontist in lehi ut
// // // //               </div>
// // // //               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474]" style={{ background: "linear-gradient(90deg,rgba(95,212,176,.18),transparent)", margin: "0 -16px", padding: "9px 16px", borderLeft: "3px solid #2bb38a" }}>
// // // //                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Fairbanks Orthodontics in Lehi, UT</b>
// // // //                 Braces, Invisalign® and complimentary consultations.
// // // //               </div>
// // // //               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474] opacity-55">
// // // //                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Orthodontists near you</b>
// // // //                 Compare local providers…
// // // //               </div>
// // // //               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474] opacity-40">
// // // //                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Braces cost guide</b>
// // // //                 What to expect…
// // // //               </div>
// // // //             </div>
// // // //             <div
// // // //               className="absolute right-0 -bottom-6 w-[52%] p-2.5 rounded-[14px] bg-white shadow-[0_30px_50px_-24px_rgba(0,0,0,.6)]"
// // // //               style={{ transform: "translateZ(60px) translate(38%,-14%)" }}
// // // //             >
// // // //               <span className="text-[#f5a623] tracking-widest text-[11px]">★★★★★</span>
// // // //               <b className="block text-[12.5px]">Fairbanks Orthodontics</b>
// // // //               <span className="text-[11px] text-[#5b6474]">Orthodontist · Lehi, UT</span>
// // // //             </div>
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     case "fair-leads":
// // // //       return {
// // // //         bg: "bg-[#0f2340]",
// // // //         dark: true,
// // // //         copy: (
// // // //           <>
// // // //             <Kicker color="#5fd4b0">Lead generation</Kicker>
// // // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // // //               From search{" "}
// // // //               <em className="not-italic" style={{ color: "#5fd4b0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // // //                 to consultation chair.
// // // //               </em>
// // // //             </h3>
// // // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b8c7dd]">
// // // //               Every search, visit and referral is steered toward one action: booking the practice's complimentary orthodontic consultation.
// // // //             </p>
// // // //             <div className="grid grid-cols-5 gap-1.5">
// // // //               {[
// // // //                 { i: "01", t: "Search", s: "Local & service SEO" },
// // // //                 { i: "02", t: "Visit", s: "Treatment pages" },
// // // //                 { i: "03", t: "Offer", s: "Free consultation" },
// // // //                 { i: "04", t: "Enquiry", s: "Call · form · booking" },
// // // //                 { i: "05", t: "Referral", s: "Refer-a-friend & rewards" },
// // // //               ].map((s) => (
// // // //                 <div key={s.i} className="rounded-[10px] px-2.5 py-3 text-[12.5px] font-bold leading-tight text-white bg-[#5fd4b0]/10 border border-[#5fd4b0]/35">
// // // //                   <i className="block mb-1 text-[#5fd4b0] text-[13px]" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", opacity: 1 }}>
// // // //                     {s.i}
// // // //                   </i>
// // // //                   {s.t}
// // // //                   <small className="block text-[10px] font-semibold opacity-80 mt-1">{s.s}</small>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </>
// // // //         ),
// // // //         visual: (
// // // //           <div className="relative w-[240px] h-[280px] [transform-style:preserve-3d]" style={{ transform: "rotateX(62deg)" }}>
// // // //             {[
// // // //               { w: 240, h: 240, ml: -120, t: 0, z: 120, color: "rgba(95,212,176,.7)", name: "cbpR1", label: "Search" },
// // // //               { w: 180, h: 180, ml: -90, t: 30, z: 60, color: "rgba(95,212,176,.7)", name: "cbpR2", label: "Visit" },
// // // //               { w: 120, h: 120, ml: -60, t: 60, z: 0, color: "rgba(95,212,176,.7)", name: "cbpR3", label: "Enquiry" },
// // // //               { w: 64, h: 64, ml: -32, t: 88, z: -60, color: "#5fd4b0", name: null, label: "" },
// // // //             ].map((ring, i) => (
// // // //               <div
// // // //                 key={i}
// // // //                 className="absolute left-1/2 rounded-full border-2"
// // // //                 style={{
// // // //                   width: ring.w,
// // // //                   height: ring.h,
// // // //                   marginLeft: ring.ml,
// // // //                   top: ring.t,
// // // //                   transform: `translateZ(${ring.z}px)`,
// // // //                   borderColor: ring.color,
// // // //                   boxShadow: "0 0 30px rgba(95,212,176,.25) inset",
// // // //                   background: i === 3 ? "#5fd4b0" : undefined,
// // // //                   animation: ring.name ? `${ring.name} 12s linear infinite` : undefined,
// // // //                 }}
// // // //               >
// // // //                 {ring.label && (
// // // //                   <span
// // // //                     className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white text-[#0f2340] text-[11px] font-extrabold rounded-full px-2.5 py-1 whitespace-nowrap"
// // // //                     style={{ transform: "translateX(-50%) rotateX(-62deg)" }}
// // // //                   >
// // // //                     {ring.label}
// // // //                   </span>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         ),
// // // //       };

// // // //     default:
// // // //       return null;
// // // //   }
// // // // };

// // // // /* ============================================================
// // // //    MAIN SECTION
// // // //    ============================================================ */
// // // // const ClientPortfoliosSection = () => {
// // // //   /* ---------- RING STATE ---------- */
// // // //   const stageRef = useRef(null);
// // // //   const ringRef = useRef(null);
// // // //   const cardRefs = useRef([]);
// // // //   const ringState = useRef({ angle: 0, target: 0, radius: 0, dragging: false, hover: false, last: 0, front: -1 });
// // // //   const [ringName, setRingName] = useState(RING_CARDS[0].name);
// // // //   const [ringSub, setRingSub] = useState(RING_CARDS[0].sub);

// // // //   const RN = RING_CARDS.length;
// // // //   const RSTEP = 360 / RN;

// // // //   /* ---------- ROLLER STATE ---------- */
// // // //   const rollerRef = useRef(null);
// // // //   const drumRef = useRef(null);
// // // //   const faceRefs = useRef([]);
// // // //   const barRef = useRef(null);
// // // //   const railRef = useRef(null);
// // // //   const rollerState = useRef({ cur: 0, radius: 0, fh: 0, active: -1, counted: {} });
// // // //   const [activeFace, setActiveFace] = useState(0);
// // // //   const [countDisplay, setCountDisplay] = useState("01 / " + DRUM_FACES.length);
// // // //   const [currentFaceTitle, setCurrentFaceTitle] = useState(DRUM_FACES[0].title);
// // // //   const [activeTab, setActiveTab] = useState(0);

// // // //   const N = DRUM_FACES.length;
// // // //   const SLOTS = 6;
// // // //   const STEP = 360 / SLOTS;

// // // //   const reduce =
// // // //     typeof window !== "undefined" &&
// // // //     window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// // // //   /* ---------- LAYOUT ---------- */
// // // //   const layout = useCallback(() => {
// // // //     if (!stageRef.current || !ringRef.current) return;
// // // //     const w = window.innerWidth;
// // // //     const cw = w < 600 ? Math.min(230, w * 0.6) : w < 900 ? 250 : 280;
// // // //     stageRef.current.style.setProperty("--cw", `${cw}px`);
// // // //     stageRef.current.style.setProperty(
// // // //       "--rh",
// // // //       `${Math.round(cw * 1.108 + (w < 600 ? 70 : 110))}px`
// // // //     );
// // // //     ringState.current.radius = Math.round(
// // // //       cw / 2 / Math.tan(Math.PI / RN) + (w < 600 ? 40 : 110)
// // // //     );

// // // //     const vh = window.innerHeight;
// // // //     const fh = Math.round(Math.min(540, vh * (w < 600 ? 0.64 : 0.6)));
// // // //     rollerState.current.fh = fh;
// // // //     document.documentElement.style.setProperty("--fh", `${fh}px`);
// // // //     if (drumRef.current) {
// // // //       drumRef.current.style.height = `${fh}px`;
// // // //     }
// // // //     rollerState.current.radius = fh / 2 / Math.tan(Math.PI / SLOTS);
// // // //     if (rollerRef.current) {
// // // //       rollerRef.current.style.height = reduce ? "auto" : `${N * 52 + 100}vh`;
// // // //     }

// // // //     cardRefs.current.forEach((card, i) => {
// // // //       if (!card) return;
// // // //       card.dataset.base = i * RSTEP;
// // // //     });
// // // //     faceRefs.current.forEach((face, i) => {
// // // //       if (!face) return;
// // // //       face.style.transform = `rotateX(${-i * STEP}deg) translateZ(${
// // // //         rollerState.current.radius
// // // //       }px)`;
// // // //     });
// // // //   }, [RN, RSTEP, N, STEP, reduce]);

// // // //   /* ---------- RING FRAME ---------- */
// // // //   useEffect(() => {
// // // //     if (reduce) return;
// // // //     let raf;
// // // //     const frame = () => {
// // // //       const s = ringState.current;
// // // //       if (!s.dragging && !s.hover && Date.now() - s.last > 3500) s.target -= 0.06;
// // // //       s.angle += (s.target - s.angle) * 0.09;
// // // //       const tilt = Math.max(-8, Math.min(8, (s.target - s.angle) * 0.4));
// // // //       if (ringRef.current) {
// // // //         ringRef.current.style.transform = `translateZ(${-s.radius}px) rotateX(${
// // // //           -6 + tilt * 0.3
// // // //         }deg) rotateY(${s.angle}deg)`;
// // // //       }
// // // //       let best = 0;
// // // //       let bestD = 999;
// // // //       cardRefs.current.forEach((card, i) => {
// // // //         if (!card) return;
// // // //         const a = (((+card.dataset.base + s.angle) % 360) + 540) % 360 - 180;
// // // //         const d = Math.abs(a);
// // // //         card.style.transform = `rotateY(${card.dataset.base}deg) translateZ(${s.radius}px)`;
// // // //         const dim = card.querySelector(".cbp-dim");
// // // //         if (dim) dim.style.opacity = Math.min(0.6, d / 180).toFixed(3);
// // // //         card.style.setProperty("--sx", `${-60 + a * 1.1}%`);
// // // //         card.style.zIndex = Math.round(200 - d);
// // // //         if (d < bestD) {
// // // //           bestD = d;
// // // //           best = i;
// // // //         }
// // // //       });
// // // //       if (best !== s.front) {
// // // //         s.front = best;
// // // //         setRingName(RING_CARDS[best].name);
// // // //         setRingSub(RING_CARDS[best].sub);
// // // //       }
// // // //       raf = requestAnimationFrame(frame);
// // // //     };
// // // //     raf = requestAnimationFrame(frame);
// // // //     return () => cancelAnimationFrame(raf);
// // // //   }, [reduce]);

// // // //   /* ---------- ROLLER FRAME ---------- */
// // // //   useEffect(() => {
// // // //     if (reduce) {
// // // //       faceRefs.current.forEach((f, i) => {
// // // //         if (f) f.classList.add("cbp-live");
// // // //       });
// // // //       return;
// // // //     }
// // // //     let raf;
// // // //     const frame = () => {
// // // //       const roller = rollerRef.current;
// // // //       const drum = drumRef.current;
// // // //       if (!roller || !drum) {
// // // //         raf = requestAnimationFrame(frame);
// // // //         return;
// // // //       }
// // // //       const r = roller.getBoundingClientRect();
// // // //       const total = roller.offsetHeight - window.innerHeight;
// // // //       const p = Math.min(1, Math.max(0, -r.top / total));
// // // //       const raw = p * (N - 1);
// // // //       const base = Math.floor(raw);
// // // //       const f = raw - base;
// // // //       const eased = f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
// // // //       const target = (base + eased) * STEP;
// // // //       const vel = target - rollerState.current.cur;
// // // //       rollerState.current.cur += Math.max(-10, Math.min(10, vel * 0.13));
// // // //       const yaw = Math.max(-14, Math.min(14, vel * 0.45));
// // // //       const push = Math.min(160, Math.abs(vel) * 7);
// // // //       const roll = Math.max(-3, Math.min(3, vel * 0.08));
// // // //       drum.style.transform = `translateZ(${-rollerState.current.radius - push}px) rotateY(${yaw}deg) rotateZ(${roll}deg) rotateX(${rollerState.current.cur}deg)`;

// // // //       faceRefs.current.forEach((face, i) => {
// // // //         if (!face) return;
// // // //         const d = Math.abs(rollerState.current.cur / STEP - i);
// // // //         const shade = face.querySelector(".cbp-shade");
// // // //         if (shade) shade.style.opacity = Math.min(0.6, d * 0.6).toFixed(3);
// // // //         face.style.opacity = Math.max(0, 1 - d * 0.82).toFixed(3);
// // // //         face.style.visibility = d > 1.4 ? "hidden" : "visible";
// // // //         face.style.pointerEvents = d < 0.5 ? "auto" : "none";
// // // //       });

// // // //       if (barRef.current) barRef.current.style.width = `${p * 100}%`;
// // // //       const idx = Math.max(0, Math.min(N - 1, Math.round(rollerState.current.cur / STEP)));
// // // //       if (idx !== rollerState.current.active) setActiveFace(idx);
// // // //       raf = requestAnimationFrame(frame);
// // // //     };
// // // //     raf = requestAnimationFrame(frame);
// // // //     return () => cancelAnimationFrame(raf);
// // // //   }, [N, STEP, reduce]);

// // // //   /* ---------- ACTIVE FACE HANDLER ---------- */
// // // //   useEffect(() => {
// // // //     const s = rollerState.current;
// // // //     if (s.active >= 0 && faceRefs.current[s.active]) {
// // // //       faceRefs.current[s.active].classList.remove("cbp-live");
// // // //     }
// // // //     s.active = activeFace;
// // // //     if (faceRefs.current[activeFace]) {
// // // //       faceRefs.current[activeFace].classList.add("cbp-live");
// // // //     }
// // // //     setCurrentFaceTitle(DRUM_FACES[activeFace].title);
// // // //     setCountDisplay(("0" + (activeFace + 1)).slice(-2) + " / " + N);
// // // //     const c = DRUM_FACES[activeFace].c;
// // // //     setActiveTab(c);
// // // //   }, [activeFace, N]);

// // // //   /* ---------- RESIZE ---------- */
// // // //   useEffect(() => {
// // // //     layout();
// // // //     window.addEventListener("resize", layout);
// // // //     return () => window.removeEventListener("resize", layout);
// // // //   }, [layout]);

// // // //   /* ---------- RING DRAG ---------- */
// // // //   useEffect(() => {
// // // //     const stage = stageRef.current;
// // // //     if (!stage || reduce) return;
// // // //     let dragging = false;
// // // //     let sx = 0;
// // // //     let sa = 0;
// // // //     let moved = 0;
// // // //     const onDown = (e) => {
// // // //       dragging = true;
// // // //       moved = 0;
// // // //       sx = e.clientX;
// // // //       sa = ringState.current.target;
// // // //       ringState.current.dragging = true;
// // // //       stage.classList.add("cursor-grabbing");
// // // //     };
// // // //     const onMove = (e) => {
// // // //       if (!dragging) return;
// // // //       const dx = e.clientX - sx;
// // // //       moved = Math.max(moved, Math.abs(dx));
// // // //       ringState.current.target = sa + dx * 0.35;
// // // //       ringState.current.last = Date.now();
// // // //     };
// // // //     const onUp = () => {
// // // //       if (!dragging) return;
// // // //       dragging = false;
// // // //       ringState.current.dragging = false;
// // // //       stage.classList.remove("cursor-grabbing");
// // // //       if (moved > 6) {
// // // //         ringState.current.target =
// // // //           Math.round(ringState.current.target / RSTEP) * RSTEP;
// // // //       }
// // // //       ringState.current.last = Date.now();
// // // //     };
// // // //     stage.addEventListener("pointerdown", onDown);
// // // //     window.addEventListener("pointermove", onMove);
// // // //     window.addEventListener("pointerup", onUp);
// // // //     return () => {
// // // //       stage.removeEventListener("pointerdown", onDown);
// // // //       window.removeEventListener("pointermove", onMove);
// // // //       window.removeEventListener("pointerup", onUp);
// // // //     };
// // // //   }, [RSTEP, reduce]);

// // // //   /* ---------- HELPERS ---------- */
// // // //   const goToFace = (i) => {
// // // //     if (reduce) {
// // // //       if (faceRefs.current[i]) faceRefs.current[i].scrollIntoView({ block: "center" });
// // // //       return;
// // // //     }
// // // //     const roller = rollerRef.current;
// // // //     const t = roller.offsetHeight - window.innerHeight;
// // // //     const top =
// // // //       roller.getBoundingClientRect().top + window.scrollY + t * (i / (N - 1)) + 2;
// // // //     window.scrollTo({ top, behavior: "smooth" });
// // // //   };

// // // //   const snapToRing = (i) => {
// // // //     const want = -i * RSTEP;
// // // //     const k = Math.round((ringState.current.target - want) / 360);
// // // //     ringState.current.target = want + k * 360;
// // // //     ringState.current.last = Date.now();
// // // //   };

// // // //   const handleRingCardClick = (i) => (e) => {
// // // //     if (i !== ringState.current.front) {
// // // //       e.preventDefault();
// // // //       snapToRing(i);
// // // //       return;
// // // //     }
// // // //     const go = RING_CARDS[i].go;
// // // //     if (typeof go === "number") {
// // // //       e.preventDefault();
// // // //       goToFace(go);
// // // //     }
// // // //   };

// // // //   const handlePrev = () => {
// // // //     ringState.current.last = Date.now();
// // // //     ringState.current.target =
// // // //       Math.round(ringState.current.target / RSTEP) * RSTEP + RSTEP;
// // // //   };
// // // //   const handleNext = () => {
// // // //     ringState.current.last = Date.now();
// // // //     ringState.current.target =
// // // //       Math.round(ringState.current.target / RSTEP) * RSTEP - RSTEP;
// // // //   };

// // // //   /* ---------- RENDER ---------- */
// // // //   return (
// // // //     <section
// // // //       id="client-portfolios"
// // // //       className="cbp-root relative bg-[#f0f1f3] text-[#0f1a2c] overflow-clip"
// // // //       style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
// // // //     >
// // // //       {/* Keyframes injected once */}
// // // //       <style>{`
// // // //         @keyframes cbpSpinY { to { transform: rotateY(360deg); } }
// // // //         @keyframes cbpSpinZ { to { transform: rotateZ(360deg); } }
// // // //         @keyframes cbpFloat { 50% { transform: translateY(-10px) rotate(2deg); } }
// // // //         @keyframes cbpWobble { 0%,100% { transform: rotate(-8deg); } 50% { transform: rotate(4deg) scale(1.04); } }
// // // //         @keyframes cbpMarq { to { transform: translateX(-50%); } }
// // // //         @keyframes cbpFan {
// // // //           0%,100% { transform: translate(var(--x),-48%) rotateY(var(--r)) translateZ(var(--z)); }
// // // //           50%     { transform: translate(var(--x),-54%) rotateY(calc(var(--r) * .6)) translateZ(calc(var(--z) + 20px)); }
// // // //         }
// // // //         @keyframes cbpSerp {
// // // //           50% { transform: rotateX(10deg) rotateY(-6deg) translateY(-8px); }
// // // //         }
// // // //         @keyframes cbpR1 { from { transform: translateZ(120px) rotateZ(0); } to { transform: translateZ(120px) rotateZ(360deg); } }
// // // //         @keyframes cbpR2 { from { transform: translateZ(60px) rotateZ(0); } to { transform: translateZ(60px) rotateZ(360deg); } }
// // // //         @keyframes cbpR3 { from { transform: translateZ(0) rotateZ(0); } to { transform: translateZ(0) rotateZ(360deg); } }
// // // //         .cbp-face .cbp-copy > * {
// // // //           opacity: 0;
// // // //           transform: translateY(18px);
// // // //           transition: opacity .6s ease, transform .7s cubic-bezier(.2,.8,.2,1);
// // // //         }
// // // //         .cbp-face.cbp-live .cbp-copy > * { opacity: 1; transform: none; }
// // // //         .cbp-face.cbp-live .cbp-copy > *:nth-child(2) { transition-delay: .07s; }
// // // //         .cbp-face.cbp-live .cbp-copy > *:nth-child(3) { transition-delay: .14s; }
// // // //         .cbp-face.cbp-live .cbp-copy > *:nth-child(4) { transition-delay: .21s; }
// // // //         .cbp-face.cbp-live .cbp-copy > *:nth-child(5) { transition-delay: .28s; }
// // // //         @media (max-width: 900px) {
// // // //           .cbp-face { grid-template-columns: 1fr; grid-template-rows: 32% 1fr; }
// // // //         }
// // // //       `}</style>

// // // //       {/* Background blurs */}
// // // //       <div className="absolute -left-36 -top-24 w-[460px] h-[460px] rounded-full bg-[#dde8f2] blur-[80px] opacity-60 pointer-events-none z-0" />
// // // //       <div className="absolute -right-44 top-[520px] w-[560px] h-[560px] rounded-full bg-[#e4eef8] blur-[80px] opacity-60 pointer-events-none z-0" />

// // // //       <div className="relative z-10 max-w-[1180px] mx-auto px-4 pt-24 pb-3">
// // // //         {/* ---------- HEADER ---------- */}
// // // //         <motion.header
// // // //           initial={{ opacity: 0, y: 28 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.7 }}
// // // //           className="text-center max-w-[720px] mx-auto"
// // // //         >
// // // //           <span className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase text-[#1596c9] bg-[#e3f4fc] border border-[#bfe5f6] px-3.5 py-1.5 rounded-full">
// // // //             Client Portfolios
// // // //           </span>
// // // //           <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold mt-4.5 mb-3 tracking-[-0.02em]">
// // // //             Real brands. <span className="text-[#0bb4ef]">Real growth.</span>
// // // //           </h2>
// // // //           <p className="text-[#5b6474] text-[15px] leading-[1.6]">
// // // //             From D2C, real estate and cafés to wellness, healthcare, orthodontics and infrastructure: the strategy, creative and numbers behind the brands we partner with.
// // // //           </p>
// // // //         </motion.header>

// // // //         {/* ---------- RING STAGE ---------- */}
// // // //         <motion.div
// // // //           ref={stageRef}
// // // //           initial={{ opacity: 0, y: 28 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.7, delay: 0.1 }}
// // // //           className="relative mt-6 select-none cursor-grab [perspective:1500px] [perspective-origin:50%_40%] [touch-action:pan-y]"
// // // //           style={{ height: "var(--rh, 460px)" }}
// // // //           onMouseEnter={() => (ringState.current.hover = true)}
// // // //           onMouseLeave={() => (ringState.current.hover = false)}
// // // //         >
// // // //           <div
// // // //             ref={ringRef}
// // // //             className="absolute left-1/2 top-1/2 w-0 h-0 [transform-style:preserve-3d] will-change-transform"
// // // //           >
// // // //             {RING_CARDS.map((card, i) => (
// // // //               <RingCard
// // // //                 key={card.id}
// // // //                 ref={(el) => (cardRefs.current[i] = el)}
// // // //                 card={card}
// // // //                 onClick={handleRingCardClick(i)}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* ---------- RING NAV ---------- */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true }}
// // // //           transition={{ duration: 0.6, delay: 0.15 }}
// // // //           className="flex justify-center items-center gap-3.5 mt-1"
// // // //         >
// // // //           <button
// // // //             aria-label="Previous client"
// // // //             onClick={handlePrev}
// // // //             className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
// // // //           >
// // // //             <ArrowLeft className="w-4 h-4" />
// // // //           </button>
// // // //           <div className="min-w-[210px] text-center text-[13px] text-[#5b6474]">
// // // //             <b className="block text-[#0f1a2c] text-[15px]">{ringName}</b>
// // // //             <span dangerouslySetInnerHTML={{ __html: ringSub }} />
// // // //           </div>
// // // //           <button
// // // //             aria-label="Next client"
// // // //             onClick={handleNext}
// // // //             className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
// // // //           >
// // // //             <ArrowRight className="w-4 h-4" />
// // // //           </button>
// // // //         </motion.div>
// // // //       </div>

// // // //       {/* ---------- ROLLER ---------- */}
// // // //       <div
// // // //         ref={rollerRef}
// // // //         className="relative z-10"
// // // //         style={{ height: reduce ? "auto" : `${N * 52 + 100}vh` }}
// // // //       >
// // // //         <div
// // // //           className={
// // // //             reduce
// // // //               ? "relative py-10 px-4"
// // // //               : "sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden px-4"
// // // //           }
// // // //         >
// // // //           {/* Case study header */}
// // // //           <div className="relative z-10 w-full max-w-[1100px] flex justify-between items-end gap-4 mb-1 flex-wrap">
// // // //             <div className="flex-1 min-w-0 text-[12px] font-bold tracking-[0.14em] uppercase text-[#5b6474]">
// // // //               Case study <span>{countDisplay}</span>
// // // //               <strong className="block text-[22px] tracking-[-.01em] normal-case text-[#0f1a2c] mt-1 transition">
// // // //                 {currentFaceTitle}
// // // //               </strong>
// // // //             </div>
// // // //             <div
// // // //               className="flex gap-1 bg-white border border-[#e2e5ea] rounded-full p-1 overflow-x-auto max-w-full"
// // // //               style={{ scrollbarWidth: "none" }}
// // // //             >
// // // //               {TABS.map((tab, i) => (
// // // //                 <button
// // // //                   key={i}
// // // //                   onClick={() => goToFace(tab.go)}
// // // //                   className={`flex-none border-0 text-[13px] font-semibold px-3.5 py-2 rounded-full transition ${
// // // //                     activeTab === i
// // // //                       ? "bg-[#0f1a2c] text-white"
// // // //                       : "bg-transparent text-[#5b6474] hover:text-[#0f1a2c]"
// // // //                   }`}
// // // //                 >
// // // //                   {tab.label}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Window */}
// // // //           <div
// // // //             className="w-[calc(100%+32px)] -mx-4 py-9 overflow-hidden"
// // // //             style={{
// // // //               WebkitMaskImage:
// // // //                 "linear-gradient(180deg,transparent 0,#000 38px,#000 calc(100% - 38px),transparent 100%)",
// // // //               maskImage:
// // // //                 "linear-gradient(180deg,transparent 0,#000 38px,#000 calc(100% - 38px),transparent 100%)",
// // // //             }}
// // // //           >
// // // //             <div
// // // //               className="relative mx-auto max-w-[1100px] [perspective:1700px] [perspective-origin:50%_50%]"
// // // //               style={{ height: "var(--fh, 540px)" }}
// // // //             >
// // // //               <div
// // // //                 ref={drumRef}
// // // //                 className="absolute inset-0 [transform-style:preserve-3d] will-change-transform"
// // // //               >
// // // //                 {DRUM_FACES.map((face, i) => (
// // // //                   <DrumFace
// // // //                     key={face.id}
// // // //                     face={face}
// // // //                     live={activeFace === i || reduce}
// // // //                     ref={(el) => (faceRefs.current[i] = el)}
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Rail */}
// // // //           {!reduce && (
// // // //             <div
// // // //               ref={railRef}
// // // //               className="absolute right-[max(10px,calc((100vw-1100px)/2-40px))] top-1/2 -translate-y-1/2 flex flex-col gap-2 z-[12]"
// // // //             >
// // // //               {DRUM_FACES.map((_, i) => (
// // // //                 <button
// // // //                   key={i}
// // // //                   onClick={() => goToFace(i)}
// // // //                   aria-hidden="true"
// // // //                   className={`w-2 h-2 rounded-full border-0 p-0 transition ${
// // // //                     activeFace === i
// // // //                       ? "bg-[#0bb4ef] scale-150"
// // // //                       : "bg-[#c9ced8] hover:bg-[#9aa3b2]"
// // // //                   }`}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //           )}

// // // //           {/* Progress bar */}
// // // //           <div className="relative z-10 w-full max-w-[1100px] h-[3px] bg-[#e2e5ea] rounded-sm mt-1 overflow-hidden">
// // // //             <i
// // // //               ref={barRef}
// // // //               className="block h-full w-0 bg-gradient-to-r from-[#0bb4ef] to-[#0a8af0] rounded-sm transition-[width]"
// // // //             />
// // // //           </div>

// // // //           {/* Hint */}
// // // //           <div className="relative z-10 text-[12px] text-[#5b6474] mt-2.5 flex items-center gap-2">
// // // //             <span className="relative w-3.5 h-5.5 border-[1.5px] border-[#9aa3b2] rounded-lg">
// // // //               <span
// // // //                 className="absolute left-1/2 top-1 w-0.5 h-[5px] -ml-[1px] bg-[#9aa3b2] rounded"
// // // //                 style={{ animation: "cbpwheel 1.6s infinite" }}
// // // //               />
// // // //             </span>
// // // //             Scroll to roll through each case study
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* ---------- CTA ---------- */}
// // // //       <div className="text-center px-4 pt-8 pb-24 relative z-10">
// // // //         <motion.a
// // // //           href="#contact"
// // // //           whileHover={{ y: -3 }}
// // // //           whileTap={{ scale: 0.96 }}
// // // //           className="inline-flex items-center gap-3 bg-[#0a8af0] text-white font-bold text-[14.5px] no-underline px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(10,138,240,.6)] hover:shadow-[0_20px_36px_-12px_rgba(10,138,240,.7)] transition"
// // // //         >
// // // //           Start Your Project
// // // //           <ArrowRight className="w-4 h-4" />
// // // //         </motion.a>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ClientPortfoliosSection;





// // // import React, { useState, useEffect, useRef, useCallback } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { ArrowLeft, ArrowRight } from 'lucide-react';

// // // /* ============================================================
// // //    RING CARDS DATA (3D Carousel)
// // //    — images web (Unsplash) se, apni local /images/... wapas daal sakte ho
// // //    ============================================================ */
// // // const RING_CARDS = [
// // //   {
// // //     id: 0,
// // //     name: "The Mom's Co.",
// // //     sub: "Baby & Mom Care · D2C",
// // //     tag: "D2C · Social & Performance",
// // //     stat: "3X",
// // //     statLabel: "Traffic",
// // //     go: 0,
// // //     img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
// // //     bgClass: "from-[#dbe9fd] to-[#9fc1f5]",
// // //     imgContain: true,
// // //   },
// // //   {
// // //     id: 1,
// // //     name: "Lodha · Navi Mumbai",
// // //     sub: "Real Estate · Lead Generation",
// // //     tag: "Real Estate · Lead Gen",
// // //     stat: "672+",
// // //     statLabel: "Leads",
// // //     go: 3,
// // //     img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
// // //     imgPos: "object-[30%_50%]",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Ciora Cafe · Dubai",
// // //     sub: "Café & Dining · Brand & Growth",
// // //     tag: "Café · Brand & Growth",
// // //     stat: "250K+",
// // //     statLabel: "Reach / mo",
// // //     go: 6,
// // //     img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Shomi Healings",
// // //     sub: "Wellness · Instagram Growth Strategy",
// // //     tag: "Wellness · Instagram",
// // //     stat: "5",
// // //     statLabel: "Pillars",
// // //     go: 9,
// // //     isOrbit: true,
// // //     orbitBg: "radial-gradient(circle at 50% 36%,#7b5fc4 0,#3a2566 38%,#1a1030 80%)",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Ultra Fragrance Ltd",
// // //     sub: "Fragrance · Website Strategy",
// // //     tag: "Fragrance · Website",
// // //     stat: "5",
// // //     statLabel: "Parameters",
// // //     go: 11,
// // //     isBottle: true,
// // //     bottleBg: "radial-gradient(circle at 50% 30%,#fff 0,#f4dfe4 35%,#c78196 100%)",
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "SmileCare",
// // //     sub: "Dental care app · UI/UX design",
// // //     tag: "Healthcare · App UI/UX",
// // //     stat: "4",
// // //     statLabel: "Core screens",
// // //     go: 13,
// // //     img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
// // //     smileBg: "radial-gradient(circle at 50% 30%,#fff,#bfe9e6 60%,#6cc8c2)",
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "SR Infra · Earth Work Solutions",
// // //     sub: "Earthwork & infrastructure · Hyderabad",
// // //     tag: "Infrastructure · Earthwork",
// // //     stat: "15",
// // //     statLabel: "Projects",
// // //     go: 15,
// // //     img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
// // //     imgPos: "object-[40%_50%]",
// // //   },
// // //   {
// // //     id: 7,
// // //     name: "Fairbanks Orthodontics",
// // //     sub: "Orthodontics · SEO & Lead Generation",
// // //     tag: "Orthodontics · SEO & Leads",
// // //     stat: "Lehi",
// // //     statLabel: "Utah",
// // //     go: 18,
// // //     isOrbit: true,
// // //     orbitBg: "radial-gradient(circle at 50% 30%,#2a6aa8,#0f2340 75%)",
// // //     orbitColor: "#5fd4b0",
// // //   },
// // //   {
// // //     id: 8,
// // //     name: "Your brand next",
// // //     sub: "Start a project with CoderBox",
// // //     tag: "Your brand next",
// // //     isNext: true,
// // //   },
// // // ];

// // // /* ============================================================
// // //    TABS
// // //    ============================================================ */
// // // const TABS = [
// // //   { label: "The Mom's Co.", go: 0 },
// // //   { label: "Lodha", go: 3 },
// // //   { label: "Ciora Cafe", go: 6 },
// // //   { label: "Shomi Healings", go: 9 },
// // //   { label: "Ultra Fragrance", go: 11 },
// // //   { label: "SmileCare", go: 13 },
// // //   { label: "SR Infra", go: 15 },
// // //   { label: "Fairbanks Ortho", go: 18 },
// // // ];

// // // /* ============================================================
// // //    DRUM FACES DATA — full case-study content
// // //    ============================================================ */
// // // const DRUM_FACES = [
// // //   { id: 0,  c: 0, title: "The Mom's Co. — Brand overview", type: "mom-overview" },
// // //   { id: 1,  c: 0, title: "The Mom's Co. — Challenge & solution", type: "mom-challenge" },
// // //   { id: 2,  c: 0, title: "The Mom's Co. — Results", type: "mom-results" },
// // //   { id: 3,  c: 1, title: "Lodha — Navi Mumbai overview", type: "lodha-overview" },
// // //   { id: 4,  c: 1, title: "Lodha — The lead engine", type: "lodha-engine" },
// // //   { id: 5,  c: 1, title: "Lodha — Results", type: "lodha-results" },
// // //   { id: 6,  c: 2, title: "Ciora Cafe — Brand overview", type: "ciora-overview" },
// // //   { id: 7,  c: 2, title: "Ciora Cafe — The work", type: "ciora-work" },
// // //   { id: 8,  c: 2, title: "Ciora Cafe — Results", type: "ciora-results" },
// // //   { id: 9,  c: 3, title: "Shomi Healings — Brand positioning", type: "shomi-positioning" },
// // //   { id: 10, c: 3, title: "Shomi Healings — The growth playbook", type: "shomi-playbook" },
// // //   { id: 11, c: 4, title: "Ultra Fragrance Ltd — Website strategy", type: "ultra-fivecs" },
// // //   { id: 12, c: 4, title: "Ultra Fragrance Ltd — Five parameters", type: "ultra-params" },
// // //   { id: 13, c: 5, title: "SmileCare — App design", type: "smile-design" },
// // //   { id: 14, c: 5, title: "SmileCare — The patient journey", type: "smile-journey" },
// // //   { id: 15, c: 6, title: "SR Infra — Company overview", type: "sr-overview" },
// // //   { id: 16, c: 6, title: "SR Infra — Services & fleet", type: "sr-fleet" },
// // //   { id: 17, c: 6, title: "SR Infra — Projects", type: "sr-projects" },
// // //   { id: 18, c: 7, title: "Fairbanks Orthodontics — SEO", type: "fair-seo" },
// // //   { id: 19, c: 7, title: "Fairbanks Orthodontics — Lead generation", type: "fair-leads" },
// // // ];

// // // /* ============================================================
// // //    SHOMI PILLARS
// // //    ============================================================ */
// // // const PILLARS = [
// // //   "Vastu education",
// // //   "Spiritual growth",
// // //   "Problem → solution",
// // //   "Social proof",
// // //   "Behind the scenes",
// // // ];

// // // /* ============================================================
// // //    UTILITY — count-up hook
// // //    ============================================================ */
// // // const useCountUp = (end, dec = 0, suffix = "", start = false, duration = 1400) => {
// // //   const [value, setValue] = useState(0);
// // //   const raf = useRef(null);
// // //   useEffect(() => {
// // //     if (!start) return;
// // //     let t0 = null;
// // //     const step = (t) => {
// // //       if (!t0) t0 = t;
// // //       const k = Math.min(1, (t - t0) / duration);
// // //       const eased = 1 - Math.pow(1 - k, 3);
// // //       setValue(end * eased);
// // //       if (k < 1) raf.current = requestAnimationFrame(step);
// // //     };
// // //     raf.current = requestAnimationFrame(step);
// // //     return () => cancelAnimationFrame(raf.current);
// // //   }, [start, end, duration]);
// // //   return value.toFixed(dec) + suffix;
// // // };

// // // /* ============================================================
// // //    RING CARD
// // //    ============================================================ */
// // // const RingCard = React.forwardRef(({ card, onClick, isDragging }, ref) => {
// // //   if (card.isNext) {
// // //     return (
// // //       <a
// // //         ref={ref}
// // //         href="#contact"
// // //         onClick={onClick}
// // //         className="absolute rounded-2xl overflow-hidden text-white block bg-gradient-to-br from-[#0d1b3d] via-[#16366f] to-[#0a8af0] p-6 flex flex-col justify-center"
// // //         style={{
// // //           width: "var(--cw, 280px)",
// // //           aspectRatio: "304/337",
// // //           left: "calc(var(--cw, 280px) / -2)",
// // //           top: "calc(var(--cw, 280px) * -0.554)",
// // //           backfaceVisibility: "hidden",
// // //         }}
// // //       >
// // //         <span className="inline-block bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full w-fit shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
// // //           Your brand next
// // //         </span>
// // //         <h3 className="text-[22px] leading-tight mt-10 mb-2.5 font-extrabold">
// // //           Could your brand be the next case study?
// // //         </h3>
// // //         <p className="text-[13px] opacity-80 leading-[1.55] mb-4">
// // //           Websites, social, performance marketing and lead generation, built around measurable results.
// // //         </p>
// // //         <span className="inline-flex items-center gap-2 bg-white text-[#0f1a2c] font-bold text-[13px] rounded-full px-4 py-2.5 w-fit">
// // //           Start a project →
// // //         </span>
// // //       </a>
// // //     );
// // //   }

// // //   return (
// // //     <button
// // //       ref={ref}
// // //       onClick={onClick}
// // //       className="absolute rounded-2xl overflow-hidden text-white block p-0 border-0 cursor-pointer text-left shadow-[0_22px_40px_-18px_rgba(15,26,44,.5)]"
// // //       style={{
// // //         width: "var(--cw, 280px)",
// // //         aspectRatio: "304/337",
// // //         left: "calc(var(--cw, 280px) / -2)",
// // //         top: "calc(var(--cw, 280px) * -0.554)",
// // //         backfaceVisibility: "hidden",
// // //       }}
// // //     >
// // //       {/* Background */}
// // //       <div
// // //         className={`absolute inset-0 bg-gradient-to-br ${card.bgClass || ""}`}
// // //         style={
// // //           card.orbitBg
// // //             ? { background: card.orbitBg }
// // //             : card.bottleBg
// // //             ? { background: card.bottleBg }
// // //             : card.smileBg
// // //             ? { background: card.smileBg }
// // //             : undefined
// // //         }
// // //       >
// // //         {card.img && (
// // //           <img
// // //             src={card.img}
// // //             alt={card.name}
// // //             draggable="false"
// // //             className={`w-full h-full object-cover ${card.imgPos || ""}`}
// // //             style={card.imgContain ? { objectFit: "contain", paddingTop: 30, mixBlendMode: "multiply" } : undefined}
// // //           />
// // //         )}

// // //         {/* CSS orbit art */}
// // //         {card.isOrbit && (
// // //           <>
// // //             <div
// // //               className="absolute left-1/2 top-[40%] w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
// // //               style={{ animation: "cbpSpinY 14s linear infinite" }}
// // //             >
// // //               {[0, 1, 2, 3].map((i) => (
// // //                 <span
// // //                   key={i}
// // //                   className="absolute inset-0 rounded-full border"
// // //                   style={{
// // //                     borderColor: card.orbitColor ? `${card.orbitColor}88` : "rgba(214,196,255,.55)",
// // //                     transform:
// // //                       i === 1 ? "rotateX(60deg)" : i === 2 ? "rotateX(-60deg)" : i === 3 ? "rotateY(90deg)" : undefined,
// // //                   }}
// // //                 />
// // //               ))}
// // //             </div>
// // //             <div
// // //               className="absolute left-1/2 top-[40%] w-[44px] h-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[1px]"
// // //               style={{
// // //                 background: card.orbitColor
// // //                   ? "radial-gradient(circle,#fff 0,#bff3e2 35%,rgba(95,212,176,0) 72%)"
// // //                   : "radial-gradient(circle,#fff 0,#e7dcff 35%,rgba(185,163,240,0) 72%)",
// // //               }}
// // //             />
// // //           </>
// // //         )}

// // //         {/* CSS bottle art */}
// // //         {card.isBottle && (
// // //           <div
// // //             className="absolute left-1/2 top-[14%] w-[92px] h-[138px] -translate-x-1/2 rounded-[20px] rounded-b-[26px]"
// // //             style={{
// // //               background: "linear-gradient(135deg,rgba(255,255,255,.9),rgba(255,255,255,.25) 45%,rgba(168,68,106,.35))",
// // //               boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.8), 0 30px 40px -20px rgba(58,29,43,.6)",
// // //               animation: "cbpFloat 5s ease-in-out infinite",
// // //             }}
// // //           >
// // //             <span
// // //               className="absolute left-1/2 -top-[30px] w-[34px] h-[30px] -translate-x-1/2 rounded-[6px] rounded-t-[3px]"
// // //               style={{ background: "linear-gradient(180deg,#d9b27a,#9c7440)" }}
// // //             />
// // //             <span
// // //               className="absolute bottom-9 left-0 right-0 text-center text-[34px]"
// // //               style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600, color: "#3a1d2b" }}
// // //             >
// // //               U
// // //             </span>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Gradient overlay */}
// // //       <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050c1c]/85 pointer-events-none" />

// // //       {/* Tag */}
// // //       <span className="absolute top-3 left-3 z-[2] bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
// // //         {card.tag}
// // //       </span>

// // //       {/* Stat */}
// // //       {card.stat && (
// // //         <span className="absolute top-3 right-3 z-[2] bg-white/95 text-[#0f1a2c] font-extrabold text-[12px] rounded-[10px] px-2.5 py-1.5 leading-[1.1] text-center">
// // //           {card.stat}
// // //           <i className="block not-italic font-semibold text-[9px] text-[#5b6474] tracking-wider uppercase">
// // //             {card.statLabel}
// // //           </i>
// // //         </span>
// // //       )}

// // //       {/* Meta */}
// // //       <div className="absolute left-[18px] right-[18px] bottom-4 z-[2]">
// // //         <b className="block text-[19px] font-bold tracking-[-.01em]">{card.name}</b>
// // //         <small className="block text-[12px] opacity-85 mt-1">{card.sub} · View case study →</small>
// // //       </div>
// // //     </button>
// // //   );
// // // });
// // // RingCard.displayName = "RingCard";

// // // /* ============================================================
// // //    DRUM FACE — renders case-study content by type
// // //    ============================================================ */
// // // const DrumFace = React.forwardRef(({ face, live }, ref) => {
// // //   const baseClass = `absolute inset-0 rounded-[22px] overflow-hidden grid grid-cols-[1.05fr_.95fr] shadow-[0_30px_60px_-30px_rgba(15,26,44,.45)] ring-1 ring-black/5 ${
// // //     live ? "live" : ""
// // //   }`;

// // //   const content = renderFaceContent(face.type);
// // //   if (!content) return null;

// // //   return (
// // //     <article
// // //       ref={ref}
// // //       className={`${baseClass} ${content.bg || "bg-white"} ${content.dark ? "text-white" : "text-[#0f1a2c]"}`}
// // //     >
// // //       <div className="p-9 flex flex-col justify-center min-w-0">{content.copy}</div>
// // //       <div className="relative overflow-hidden flex items-center justify-center [perspective:900px]">
// // //         {content.visual}
// // //       </div>
// // //       <span className="absolute inset-0 bg-[#0f1a2c] opacity-0 pointer-events-none z-[5]" />
// // //     </article>
// // //   );
// // // });
// // // DrumFace.displayName = "DrumFace";

// // // /* ============================================================
// // //    FACE CONTENT RENDERER
// // //    ============================================================ */
// // // const Kicker = ({ children, color = "#0bb4ef" }) => (
// // //   <div className="text-[11px] font-bold tracking-[.16em] uppercase flex items-center gap-2.5" style={{ color }}>
// // //     <span className="w-[22px] h-0.5 rounded-[2px] bg-current" />
// // //     {children}
// // //   </div>
// // // );

// // // const Chip = ({ children }) => (
// // //   <span className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[#f2f4f7] border border-[#e2e5ea]">
// // //     {children}
// // //   </span>
// // // );

// // // const ListBefore = ({ items }) => (
// // //   <ul className="list-none p-0 m-0 grid gap-2.5">
// // //     {items.map((it, i) => (
// // //       <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#5b6474] before:content-['✕'] before:absolute before:left-0 before:top-0 before:font-extrabold before:text-[#e0525c]">
// // //         {it}
// // //       </li>
// // //     ))}
// // //   </ul>
// // // );

// // // const ListAfter = ({ items }) => (
// // //   <ul className="list-none p-0 m-0 grid gap-2.5">
// // //     {items.map((it, i) => (
// // //       <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#2c3444] before:content-['✓'] before:absolute before:left-0 before:top-0 before:font-extrabold before:text-[#16a36a]">
// // //         {it}
// // //       </li>
// // //     ))}
// // //   </ul>
// // // );

// // // const Stat = ({ value, label, color = "#1f6fe0", bg = "#eaf2fe", border = "#d6e5fc" }) => (
// // //   <div
// // //     className="rounded-2xl p-[18px] border"
// // //     style={{ background: bg, borderColor: border }}
// // //   >
// // //     <b className="block text-[clamp(28px,3.4vw,42px)] font-extrabold tracking-[-.03em] leading-none" style={{ color }}>
// // //       {value}
// // //     </b>
// // //     <span className="block text-[13px] text-[#5b6474] mt-2 leading-[1.35]">{label}</span>
// // //   </div>
// // // );

// // // const CountStat = ({ end, dec = 0, suffix = "", word, label, color = "#1f6fe0", bg = "#eaf2fe", border = "#d6e5fc", start }) => {
// // //   const val = useCountUp(end, dec, suffix, start);
// // //   return <Stat value={word || val} label={label} color={color} bg={bg} border={border} />;
// // // };

// // // const renderFaceContent = (type) => {
// // //   switch (type) {
// // //     /* ---------- MOM'S CO ---------- */
// // //     case "mom-overview":
// // //       return {
// // //         copy: (
// // //           <>
// // //             <div className="flex items-center gap-3.5">
// // //               <span className="w-[54px] h-[54px] rounded-full grid place-items-center text-[13px] leading-[.95] text-center flex-none bg-[#1f6fe0] text-white" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 the<br />mom's<br />co.
// // //               </span>
// // //               <Kicker color="#1f6fe0">Client · Baby &amp; Mom Care (D2C)</Kicker>
// // //             </div>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               The Mom's Co.<br />
// // //               <em className="not-italic" style={{ color: "#1f6fe0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 Clean. Safe. Effective.
// // //               </em>
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
// // //               A trusted D2C brand offering safe, natural and toxin-free personal care products for moms, babies and families. CoderBox partnered with them to build a consistent brand narrative across every digital touchpoint.
// // //             </p>
// // //             <div className="flex flex-wrap gap-2">
// // //               {["01 Strategy", "02 Content", "03 Performance", "04 Website", "05 SEO"].map((c) => (
// // //                 <Chip key={c}>{c}</Chip>
// // //               ))}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#e2e5ea]">
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Website</small>
// // //                 themomsco.com
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Instagram</small>
// // //                 @themomsco
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Our role</small>
// // //                 Digital growth partner
// // //               </div>
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="w-full h-full" style={{ background: "linear-gradient(160deg,#eaf2fe,#c9dcfb)" }} />
// // //         ),
// // //       };

// // //     case "mom-challenge":
// // //       return {
// // //         copy: (
// // //           <>
// // //             <Kicker color="#1f6fe0">From low visibility to high growth</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Where they were.{" "}
// // //               <em className="not-italic" style={{ color: "#1f6fe0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 What we did.
// // //               </em>
// // //             </h3>
// // //             <div className="grid grid-cols-2 gap-4.5">
// // //               <div>
// // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">The challenge</h4>
// // //                 <ListBefore
// // //                   items={[
// // //                     "Limited digital visibility in a competitive market",
// // //                     "Inconsistent social media presence",
// // //                     "Low website traffic and conversions",
// // //                     "Needed stronger brand positioning",
// // //                   ]}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">The solution</h4>
// // //                 <ListAfter
// // //                   items={[
// // //                     "Clear digital strategy aligned to brand values",
// // //                     "End-to-end social media with informative content",
// // //                     "Targeted performance campaigns",
// // //                     "Website optimised for UX & conversions",
// // //                     "Brand storytelling to build trust & community",
// // //                   ]}
// // //                 />
// // //               </div>
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: <div className="w-full h-full" style={{ background: "#f4f5f7" }} />,
// // //       };

// // //     case "mom-results":
// // //       return {
// // //         copy: (
// // //           <>
// // //             <Kicker color="#1f6fe0">The results</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               A stronger,{" "}
// // //               <em className="not-italic" style={{ color: "#1f6fe0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 more visible
// // //               </em>{" "}
// // //               brand.
// // //             </h3>
// // //             <div className="grid grid-cols-2 gap-3.5">
// // //               <CountStat end={3} suffix="X" label="Increase in website traffic" start />
// // //               <CountStat end={2.5} dec={1} suffix="X" label="Growth in social media reach" start />
// // //               <CountStat end={60} suffix="%" label="Increase in online conversions" start />
// // //               <Stat value="Stronger" label="Brand recall & community engagement" />
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="w-full h-full p-9 flex flex-col justify-center gap-4 text-white" style={{ background: "linear-gradient(160deg,#1f6fe0,#0d3f8f)" }}>
// // //             <p className="text-[clamp(20px,2.4vw,30px)] leading-[1.25] m-0" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //               "From a growing brand to a digital-first category leader."
// // //             </p>
// // //             <p className="m-0 opacity-80 text-[14px] leading-[1.55]">
// // //               A partnership built on strategy, consistency and measurable results.
// // //             </p>
// // //           </div>
// // //         ),
// // //         dark: true,
// // //       };

// // //     /* ---------- LODHA ---------- */
// // //     case "lodha-overview":
// // //       return {
// // //         bg: "bg-[#0d1b3d]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#e0b24a">Client · Real estate developer</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Landmark homes.<br />
// // //               <em className="not-italic" style={{ color: "#e0b24a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 Full
// // //               </em>{" "}
// // //               pipeline.
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b9c3d8]">
// // //               How CoderBox, as lead generation growth partner, drove 672+ home-buyer leads for Lodha's Navi Mumbai projects with aggressive social campaigns and Google PPC.
// // //             </p>
// // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Project</small>
// // //                 Lodha Taloja · 1 BHK homes
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Channels</small>
// // //                 Meta · Instagram · Google Ads
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Our role</small>
// // //                 Lead generation growth partner
// // //               </div>
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: <div className="w-full h-full bg-[#0a1530]" />,
// // //       };

// // //     case "lodha-engine":
// // //       return {
// // //         bg: "bg-[#0d1b3d]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#e0b24a">The work</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Leads from every{" "}
// // //               <em className="not-italic" style={{ color: "#e0b24a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 scroll.
// // //               </em>
// // //             </h3>
// // //             <div className="grid grid-cols-2 gap-4.5 mb-4">
// // //               <div>
// // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">Where they were</h4>
// // //                 <ListBefore
// // //                   items={[
// // //                     "Crowded, price-sensitive market",
// // //                     "Low-intent portal enquiries",
// // //                     "Leads going cold before follow-up",
// // //                   ]}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">What we did</h4>
// // //                 <ListAfter
// // //                   items={[
// // //                     "Meta & Instagram lead ads",
// // //                     "Google PPC on high-intent keywords",
// // //                     "Instant WhatsApp & call-back follow-up",
// // //                   ]}
// // //                 />
// // //               </div>
// // //             </div>
// // //             <div className="grid grid-cols-5 gap-1.5">
// // //               {[
// // //                 { bg: "#b98c3a", i: "01", t: "Audience", s: "Navi Mumbai buyers" },
// // //                 { bg: "#c9a24a", i: "02", t: "Social ads", s: "Reels · carousels" },
// // //                 { bg: "#1d64e0", i: "03", t: "Google PPC", s: "High-intent search" },
// // //                 { bg: "#16366f", i: "04", t: "Landing page", s: "Instant forms" },
// // //                 { bg: "#050b1c", i: "05", t: "672+ leads", s: "To sales, real time", shadow: true },
// // //               ].map((s) => (
// // //                 <div
// // //                   key={s.i}
// // //                   className="rounded-[10px] px-2.5 py-3 text-[12.5px] font-bold leading-tight text-white"
// // //                   style={{ background: s.bg, boxShadow: s.shadow ? "inset 0 0 0 1px rgba(255,255,255,.2)" : undefined }}
// // //                 >
// // //                   <i className="block not-italic mb-1" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontSize: 13, opacity: 0.85 }}>
// // //                     {s.i}
// // //                   </i>
// // //                   {s.t}
// // //                   <small className="block text-[10px] font-semibold opacity-80 mt-1">{s.s}</small>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: <div className="w-full h-full bg-[#0a1530]" />,
// // //       };

// // //     case "lodha-results":
// // //       return {
// // //         bg: "bg-[#0d1b3d]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#e0b24a">The results</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               672+ leads.{" "}
// // //               <em className="not-italic" style={{ color: "#e0b24a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 One
// // //               </em>{" "}
// // //               full pipeline.
// // //             </h3>
// // //             <div className="grid grid-cols-2 gap-3.5">
// // //               <CountStat end={672} suffix="+" label="Home-buyer leads delivered to sales" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // //               <Stat value="Always-on" label="Meta & Instagram lead ads" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // //               <Stat value="High-intent" label="Google Search PPC" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // //               <Stat value="Real-time" label="Leads to sales via CRM & WhatsApp" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-full h-full bg-[#0a1530]">
// // //             <div
// // //               className="absolute right-5 bottom-5 w-[120px] h-[120px] rounded-full grid place-items-center text-center font-extrabold shadow-[0_18px_40px_-10px_rgba(0,0,0,.5)] bg-[#e0b24a] text-[#0d1b3d]"
// // //               style={{ animation: "cbpWobble 6s ease-in-out infinite" }}
// // //             >
// // //               <div>
// // //                 <b className="text-[30px] tracking-[-.03em] block leading-none">672+</b>
// // //                 <small className="text-[9.5px] tracking-[.14em]">QUALIFIED LEADS</small>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ),
// // //       };

// // //     /* ---------- CIORA ---------- */
// // //     case "ciora-overview":
// // //       return {
// // //         bg: "bg-[#f7f0e5]",
// // //         copy: (
// // //           <>
// // //             <div className="flex items-center gap-3.5">
// // //               <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#241a15] text-[#e0a24a] text-[24px]" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", boxShadow: "inset 0 0 0 2px #e0a24a" }}>
// // //                 C
// // //               </span>
// // //               <Kicker color="#c0643a">Client · Café &amp; dining · Dubai</Kicker>
// // //             </div>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Coffee first.<br />
// // //               <em className="not-italic" style={{ color: "#c0643a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 Crowds follow.
// // //               </em>
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
// // //               How CoderBox, brand &amp; growth partner since January 2026, turned a new Dubai Investment Park café into a name people search, shoot and share: a full identity, a website, a proper food shoot and a Meta presence built from zero.
// // //             </p>
// // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#e6d9c6]">
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Website</small>
// // //                 cioracafe.ae
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Meta presence</small>
// // //                 @cioracafe
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Our role</small>
// // //                 Brand &amp; growth partner
// // //               </div>
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-full h-full" style={{ background: "#efe4d2" }}>
// // //             <div
// // //               className="absolute right-5 bottom-5 w-[120px] h-[120px] rounded-full grid place-items-center text-center font-extrabold shadow-[0_18px_40px_-10px_rgba(0,0,0,.5)] bg-[#e0a24a] text-[#241a15]"
// // //               style={{ animation: "cbpWobble 6s ease-in-out infinite" }}
// // //             >
// // //               <div>
// // //                 <small className="text-[9.5px] tracking-[.14em] block">SINCE</small>
// // //                 <b className="text-[30px] tracking-[-.03em] block leading-none">JAN</b>
// // //                 <small className="text-[9.5px] tracking-[.14em] block">2026</small>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ),
// // //       };

// // //     case "ciora-work":
// // //       return {
// // //         bg: "bg-[#f7f0e5]",
// // //         copy: (
// // //           <>
// // //             <Kicker color="#c0643a">Branding · Web · Photoshoot · Meta</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Seen before they're{" "}
// // //               <em className="not-italic" style={{ color: "#c0643a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 seated.
// // //               </em>
// // //             </h3>
// // //             <div className="grid grid-cols-2 gap-4.5">
// // //               <div>
// // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">Where they were</h4>
// // //                 <ListBefore
// // //                   items={[
// // //                     "A brand-new café with no brand system",
// // //                     "No website; the menu lived on paper",
// // //                     "Food shot on phones, under yellow light",
// // //                     "No Instagram or Facebook presence",
// // //                   ]}
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">What CoderBox did</h4>
// // //                 <ListAfter
// // //                   items={[
// // //                     "Full identity: logo, palette, menu & collateral",
// // //                     "Website with menu, gallery & enquiries",
// // //                     "On-site food, drinks & interior shoot",
// // //                     "Instagram + Facebook built from zero",
// // //                   ]}
// // //                 />
// // //               </div>
// // //             </div>
// // //             <div className="grid grid-cols-5 gap-1.5 mt-4.5 relative">
// // //               <div className="absolute left-1.5 right-1.5 top-[5px] h-0.5 rounded" style={{ background: "linear-gradient(90deg,#c0643a,#e0a24a)" }} />
// // //               {[
// // //                 { s: "JAN", t: "Brand identity" },
// // //                 { s: "FEB", t: "Website live" },
// // //                 { s: "MAR", t: "Photoshoot" },
// // //                 { s: "APR", t: "Meta launch" },
// // //                 { s: "NOW", t: "Always-on content" },
// // //               ].map((s, i) => (
// // //                 <div key={i} className="relative pt-[18px] text-[11.5px] font-bold leading-[1.3]">
// // //                   <span className="absolute left-0 top-0 w-3 h-3 rounded-full border-2 border-[#c0643a]" style={{ background: "#f7f0e5" }} />
// // //                   <small className="block text-[9.5px] tracking-[.12em] text-[#c0643a] mb-0.5">{s.s}</small>
// // //                   {s.t}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: <div className="w-full h-full bg-[#efe4d2]" />,
// // //       };

// // //     case "ciora-results":
// // //       return {
// // //         bg: "bg-[#241a15]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#e0a24a">The results</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               A café people find,{" "}
// // //               <em className="not-italic" style={{ color: "#e0a24a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 follow
// // //               </em>{" "}
// // //               and fill.
// // //             </h3>
// // //             <div className="grid grid-cols-2 gap-3.5">
// // //               <CountStat end={4.2} dec={1} suffix="K+" label="Instagram followers" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // //               <CountStat end={180} suffix="+" label="Posts, reels & stories shipped" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // //               <CountStat end={250} suffix="K+" label="Monthly Meta reach · Instagram + Facebook" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // //               <Stat value="Dubai" label="DIP · Al Furjan · Jebel Ali · Expo City" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: <div className="w-full h-full bg-[#efe4d2]" />,
// // //       };

// // //     /* ---------- SHOMI ---------- */
// // //     case "shomi-positioning":
// // //       return {
// // //         bg: "bg-[#24163a]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#b9a3f0">Client · Vastu, tarot &amp; healing</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Align your space, energy and soul,{" "}
// // //               <em className="not-italic" style={{ color: "#b9a3f0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 and life flows.
// // //               </em>
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#cfc3e8]">
// // //               An Instagram growth strategy that positions Shomi Healings not as a service page but as a guidance ecosystem: people come for clarity, balance, peace and direction.
// // //             </p>
// // //             <div className="flex flex-wrap gap-2">
// // //               {["Calm, reassuring, wise", "Spiritual but practical", "High trust, not sensational"].map((c) => (
// // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#efe9fc]">
// // //                   {c}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Platform</small>
// // //                 Instagram
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Deliverable</small>
// // //                 Growth strategy
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Goal</small>
// // //                 Followers → consultation leads
// // //               </div>
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-[min(340px,80%)] aspect-square [transform:rotateX(64deg)] [transform-style:preserve-3d]">
// // //             <div
// // //               className="absolute inset-0 [transform-style:preserve-3d]"
// // //               style={{ animation: "cbpSpinZ 22s linear infinite" }}
// // //             >
// // //               <div className="absolute inset-0 rounded-full border border-dashed border-[rgba(214,196,255,.45)]" />
// // //               {PILLARS.map((t, i) => {
// // //                 const a = i * (360 / PILLARS.length);
// // //                 return (
// // //                   <div key={i} className="absolute left-1/2 top-1/2 w-0 h-0" style={{ transform: `rotateZ(${a}deg) translateY(-50%)` }}>
// // //                     <span
// // //                       className="absolute block whitespace-nowrap bg-white/10 border border-[rgba(214,196,255,.45)] backdrop-blur text-white text-[12px] font-bold px-3 py-2 rounded-full"
// // //                       style={{ transform: `translate(-50%,-50%) rotateZ(${-a}deg) rotateX(-64deg)` }}
// // //                     >
// // //                       {t}
// // //                     </span>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //             <div
// // //               className="absolute left-1/2 top-1/2 w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full grid place-items-center text-center text-[#24163a] text-[15px] leading-[1.1]"
// // //               style={{
// // //                 transform: "rotateX(-64deg) translateZ(40px)",
// // //                 background: "radial-gradient(circle,#fff 0,#e3d6ff 22%,rgba(185,163,240,.35) 55%,rgba(185,163,240,0) 72%)",
// // //                 fontFamily: "Fraunces,Georgia,serif",
// // //                 fontStyle: "italic",
// // //                 fontWeight: 600,
// // //               }}
// // //             >
// // //               Shomi<br />Healings
// // //             </div>
// // //           </div>
// // //         ),
// // //       };

// // //     case "shomi-playbook":
// // //       return {
// // //         bg: "bg-[#24163a]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#b9a3f0">The playbook</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Consistency{" "}
// // //               <em className="not-italic" style={{ color: "#b9a3f0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 over virality.
// // //               </em>
// // //             </h3>
// // //             <div className="grid grid-cols-5 gap-1.5 mb-4">
// // //               {[
// // //                 { b: "1–2", s: "Reels / day" },
// // //                 { b: "8–15", s: "Stories / day" },
// // //                 { b: "2–3", s: "Carousels / wk" },
// // //                 { b: "1", s: "Live / wk" },
// // //                 { b: "3–4", s: "Broadcasts / wk" },
// // //               ].map((c, i) => (
// // //                 <div key={i} className="bg-white/5 border border-white/10 rounded-[10px] px-2 py-2.5 text-center">
// // //                   <b className="block text-[15px] text-[#b9a3f0]">{c.b}</b>
// // //                   <span className="text-[10.5px] text-[#cfc3e8]">{c.s}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //             <div className="grid grid-cols-2 gap-3.5">
// // //               <Stat value="+15–25%" label="Monthly follower growth target" color="#b9a3f0" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // //               <Stat value="5–15" label="DM leads / day target" color="#b9a3f0" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
// // //             </div>
// // //             <p className="text-[11.5px] text-[#b7a9d6] italic mt-3">
// // //               Targets set in the strategy. Framework: education builds authority, emotion builds trust, proof builds confidence, DMs build revenue.
// // //             </p>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="p-7 w-full h-full" style={{ background: "radial-gradient(circle at 50% 50%,#4a2f85 0,#24163a 70%)" }}>
// // //             <div className="text-[#efe9fc] w-full max-w-[340px]">
// // //               <h4 className="text-[12px] tracking-[.14em] uppercase mb-2.5" style={{ color: "#b9a3f0" }}>Reels framework</h4>
// // //               <ul className="list-none p-0 m-0 grid gap-2.5">
// // //                 {[
// // //                   "0–3 sec · Pattern break: eye contact or home visual",
// // //                   "3–7 sec · Pain or curiosity hook",
// // //                   "7–15 sec · Value and explanation",
// // //                   "15–20 sec · Gentle CTA: DM \"VASTU\"",
// // //                 ].map((t, i) => (
// // //                   <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#cfc3e8] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:opacity-70 before:text-[#b9a3f0]">
// // //                     {t}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //               <h4 className="text-[12px] tracking-[.14em] uppercase mb-2.5 mt-4.5" style={{ color: "#b9a3f0" }}>DM conversion, non-salesy</h4>
// // //               <ul className="list-none p-0 m-0 grid gap-2.5">
// // //                 <li className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#cfc3e8] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-[#b9a3f0]">
// // //                   Gratitude → emotional question → soft offer
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         ),
// // //       };

// // //     /* ---------- ULTRA ---------- */
// // //     case "ultra-fivecs":
// // //       return {
// // //         bg: "bg-[#fbf4ef]",
// // //         copy: (
// // //           <>
// // //             <Kicker color="#a8446a">Client · Fragrance</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               A website built on{" "}
// // //               <em className="not-italic" style={{ color: "#a8446a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 five Cs.
// // //               </em>
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
// // //               For Ultra Fragrance Ltd, CoderBox set out the parameters for running a successful website: a platform to talk to every customer individually, easy to manage, and at a fraction of the cost of other channels.
// // //             </p>
// // //             <div className="flex flex-wrap gap-2">
// // //               {["Credibility", "Convenience", "Constant connectivity", "Communication", "Cost"].map((c) => (
// // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-[#f0dde2]">
// // //                   {c}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-full h-full grid place-items-center" style={{ background: "radial-gradient(circle at 50% 40%,#fff 0,#f6e2e6 45%,#d9a3b3 100%)" }}>
// // //             <div className="relative w-[170px] h-[230px] [transform-style:preserve-3d]" style={{ animation: "cbpSpinY 16s linear infinite" }}>
// // //               {["C", "C", "C", "C", "C"].map((letter, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="absolute inset-0 rounded-[10px] flex flex-col justify-end p-4 text-white"
// // //                   style={{
// // //                     background: "linear-gradient(165deg,rgba(255,255,255,.35),rgba(168,68,106,.85))",
// // //                     border: "1px solid rgba(255,255,255,.6)",
// // //                     boxShadow: "inset 0 0 40px rgba(255,255,255,.25)",
// // //                     transform: `rotateY(${i * 72}deg) translateZ(140px)`,
// // //                   }}
// // //                 >
// // //                   <b className="text-[34px] leading-none" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600 }}>
// // //                     {letter}
// // //                   </b>
// // //                   <span className="text-[12.5px] font-bold tracking-[.04em] mt-1.5">
// // //                     {["Credibility", "Convenience", "Connectivity", "Communication", "Cost"][i]}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //             <div
// // //               className="absolute bottom-[14%] left-1/2 w-[240px] h-[40px] -translate-x-1/2 rounded-[50%]"
// // //               style={{ background: "radial-gradient(ellipse,rgba(58,29,43,.35),transparent 70%)" }}
// // //             />
// // //           </div>
// // //         ),
// // //       };

// // //     case "ultra-params":
// // //       return {
// // //         bg: "bg-[#fbf4ef]",
// // //         copy: (
// // //           <>
// // //             <Kicker color="#a8446a">The framework</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Five parameters for a site{" "}
// // //               <em className="not-italic" style={{ color: "#a8446a", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 that performs.
// // //               </em>
// // //             </h3>
// // //             <div className="grid gap-2">
// // //               {[
// // //                 { i: "01", b: "Content & messaging", s: "Accurate product, campaign and brand content with a consistent voice." },
// // //                 { i: "02", b: "Stability & technical excellence", s: "Reliable DNS, regular backups and dependable maintenance." },
// // //                 { i: "03", b: "Speed & robustness", s: "Fast on any device and connection, on a sound framework." },
// // //                 { i: "04", b: "Aesthetics & functionalism", s: "Simplicity and elegance over complex design patterns." },
// // //                 { i: "05", b: "Accessibility & usability", s: "Responsive in design and performance for every user." },
// // //               ].map((p) => (
// // //                 <div key={p.i} className="grid grid-cols-[34px_1fr] gap-3 items-start bg-white border border-[#f0dde2] rounded-[12px] px-3 py-2.5">
// // //                   <i className="text-[18px]" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600, color: "#a8446a" }}>
// // //                     {p.i}
// // //                   </i>
// // //                   <p className="m-0">
// // //                     <b className="block text-[13.5px]">{p.b}</b>
// // //                     <span className="text-[12px] text-[#5b6474] leading-[1.4]">{p.s}</span>
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-full h-full grid place-items-center" style={{ background: "radial-gradient(circle at 50% 40%,#fff 0,#f6e2e6 45%,#d9a3b3 100%)" }}>
// // //             <div className="relative w-[58%] h-[44%] [transform-style:preserve-3d]" style={{ transform: "translateY(14%) rotateX(50deg) rotateZ(-28deg)" }}>
// // //               {[136, 102, 68, 34, 0].map((z, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="absolute inset-0 flex flex-col justify-end items-end rounded-xl bg-white border border-[#f0dde2] px-3.5 py-3 text-[12px] font-bold text-[#3a1d2b]"
// // //                   style={{
// // //                     boxShadow: "0 20px 40px -20px rgba(58,29,43,.5)",
// // //                     transform: `translateZ(${z}px) translate(${z * -0.5}px,${z * -0.5}px)`,
// // //                   }}
// // //                 >
// // //                   <span className="absolute left-3.5 top-2.5 text-[7px] tracking-widest text-[#e0b4c1]">● ● ●</span>
// // //                   {["05 · Accessibility", "04 · Aesthetics", "03 · Speed", "02 · Stability", "01 · Content & messaging"][i]}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         ),
// // //       };

// // //     /* ---------- SMILE ---------- */
// // //     case "smile-design":
// // //       return {
// // //         bg: "bg-gradient-to-br from-[#f3fbfb] to-[#e2f4f3]",
// // //         copy: (
// // //           <>
// // //             <Kicker color="#138f8f">Client · Dental care app · UI/UX</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               A healthy smile,{" "}
// // //               <em className="not-italic" style={{ color: "#138f8f", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 one tap away.
// // //               </em>
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
// // //               A calm, aqua glass interface for SmileCare's dental app, designed so patients can find a dentist, explore treatments and book a visit in one smooth flow.
// // //             </p>
// // //             <div className="flex flex-wrap gap-2">
// // //               {["Onboarding", "Home dashboard", "Treatment pages", "Booking flow", "Glass UI system"].map((c) => (
// // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-[#cdebea]">
// // //                   {c}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#cdebea]">
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Brand line</small>
// // //                 Healthy Smile, Happy Life
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Platform</small>
// // //                 Mobile app
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Scope</small>
// // //                 UI/UX design
// // //               </div>
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-full h-full grid place-items-center" style={{ background: "radial-gradient(circle at 50% 45%,#ffffff 0,#d6f1ef 45%,#9fdcd8 100%)" }}>
// // //             <div className="flex gap-3 items-center">
// // //               {[0, 1, 2].map((i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="w-[110px] h-[220px] rounded-[18px] bg-white/70 border-2 border-white shadow-[0_30px_50px_-20px_rgba(10,90,90,.55)]"
// // //                   style={{
// // //                     transform: i === 0 ? "rotateY(28deg) translateZ(-60px)" : i === 2 ? "rotateY(-28deg) translateZ(-60px)" : "translateZ(40px)",
// // //                     animation: "cbpFan 7s ease-in-out infinite",
// // //                     animationDelay: `${-i * 2}s`,
// // //                   }}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         ),
// // //       };

// // //     case "smile-journey":
// // //       return {
// // //         bg: "bg-gradient-to-br from-[#f3fbfb] to-[#e2f4f3]",
// // //         copy: (
// // //           <>
// // //             <Kicker color="#138f8f">The patient journey</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               From hello to{" "}
// // //               <em className="not-italic" style={{ color: "#138f8f", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 booked.
// // //               </em>
// // //             </h3>
// // //             <ul className="list-none p-0 m-0 grid gap-2.5">
// // //               {[
// // //                 { b: "01 Welcome", s: "brand promise, Get Started and sign in" },
// // //                 { b: "02 Home", s: "search, Find Dentist, Appointments, Treatments and 24/7 Emergency" },
// // //                 { b: "03 Treatment", s: "duration, sessions, results, benefits and starting price" },
// // //                 { b: "04 Booking", s: "date, time slot, in-clinic or video consult, and fee before you confirm" },
// // //               ].map((s, i) => (
// // //                 <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#2c3444] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-[#16a3a3]">
// // //                   <b>{s.b}</b> · {s.s}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-[34%] aspect-[9/16] [transform-style:preserve-3d]" style={{ animation: "cbpSpinY 18s linear infinite" }}>
// // //             {[0, 1, 2, 3].map((i) => (
// // //               <div
// // //                 key={i}
// // //                 className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e2f4f3] to-[#9fdcd8] border-[3px] border-white shadow-[0_20px_40px_-18px_rgba(10,90,90,.6)]"
// // //                 style={{ transform: `rotateY(${i * 90}deg) translateZ(140px)`, backfaceVisibility: "hidden" }}
// // //               />
// // //             ))}
// // //           </div>
// // //         ),
// // //       };

// // //     /* ---------- SR INFRA ---------- */
// // //     case "sr-overview":
// // //       return {
// // //         bg: "bg-[#1c1813]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <div className="flex items-center gap-3.5">
// // //               <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#f2b705] text-[#1c1813] font-extrabold text-[15px]">
// // //                 SR
// // //               </span>
// // //               <Kicker color="#f2b705">Client · Earthwork &amp; infrastructure</Kicker>
// // //             </div>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Moving earth,{" "}
// // //               <em className="not-italic" style={{ color: "#f2b705", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 since 2005.
// // //               </em>
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#cfc6b8]">
// // //               SR Infra – Earth Work Solutions supplies earthworks, major civil infrastructure and mining projects with a well-maintained fleet and a skilled team, known for mobilising machinery anywhere in the state, including remote sites.
// // //             </p>
// // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Established</small>
// // //                 2005
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Base</small>
// // //                 Kompally, Hyderabad
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Leadership</small>
// // //                 Shankar Pallapu · 27+ yrs
// // //               </div>
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: <div className="w-full h-full bg-[#2a241c]" />,
// // //       };

// // //     case "sr-fleet":
// // //       return {
// // //         bg: "bg-[#1c1813]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#f2b705">Services &amp; fleet</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               The right machine,{" "}
// // //               <em className="not-italic" style={{ color: "#f2b705", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 at the right time.
// // //               </em>
// // //             </h3>
// // //             <div className="flex flex-wrap gap-2 mb-4">
// // //               {["Cellar excavation", "Controlled blasting", "Forest clearance", "Demolition", "Trenching", "Culverts", "Landscaping", "Concrete breaking & removal"].map((c) => (
// // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#f3ede3]">
// // //                   {c}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <div className="grid grid-cols-5 gap-1.5 mt-4">
// // //               {[
// // //                 { b: 14, s: "Excavators, 20–22 t" },
// // //                 { b: 30, s: "16 cum dumpers" },
// // //                 { b: 15, s: "JHR machines" },
// // //                 { b: 3, s: "Rig machines" },
// // //                 { b: 2, s: "Transport vehicles" },
// // //               ].map((f, i) => (
// // //                 <div key={i} className="rounded-[10px] px-2 py-2.5 text-center bg-[#f2b705]/10 border border-[#f2b705]/30">
// // //                   <b className="block text-[22px] leading-none text-[#f2b705]">{f.b}</b>
// // //                   <span className="block text-[10.5px] leading-tight text-[#cfc6b8] mt-1">{f.s}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: <div className="w-full h-full bg-[#2a241c]" />,
// // //       };

// // //     case "sr-projects":
// // //       return {
// // //         bg: "bg-[#1c1813]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#f2b705">Track record</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Hyderabad's skyline,{" "}
// // //               <em className="not-italic" style={{ color: "#f2b705", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 from the ground down.
// // //               </em>
// // //             </h3>
// // //             <div className="grid grid-cols-2 gap-3.5">
// // //               <CountStat end={15} label="Major projects across Hyderabad" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // //               <CountStat end={13.9} dec={1} suffix="L+" label="Cubic metres excavated or in progress" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // //               <CountStat end={2} suffix="L" label="m³ on the largest single site, SRIYAS Khajaguda" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // //               <CountStat end={64} label="Machines in the owned fleet" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-full h-full bg-[#2a241c]">
// // //             <div className="absolute left-0 right-0 bottom-0 z-[3] overflow-hidden bg-[#1c1813]/85 backdrop-blur border-t border-[#f2b705]/35 py-2.5">
// // //               <div
// // //                 className="flex gap-7 w-max text-[12px] font-bold tracking-[.08em] uppercase text-[#f3ede3]"
// // //                 style={{ animation: "cbpMarq 26s linear infinite" }}
// // //               >
// // //                 {[0, 1].map((k) => (
// // //                   <React.Fragment key={k}>
// // //                     {["Rajapushpa", "Legend", "Mahaveer", "SAAS Infra", "AkzoNobel", "Poulomi", "Sunyuga", "SRIYAS Life Spaces", "Magna Infratech", "Delhi Public School", "Shilpa"].map((t, i) => (
// // //                       <span key={`${k}-${i}`} className="before:content-['◆'] before:text-[#f2b705] before:mr-7">
// // //                         {t}
// // //                       </span>
// // //                     ))}
// // //                   </React.Fragment>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ),
// // //       };

// // //     /* ---------- FAIRBANKS ---------- */
// // //     case "fair-seo":
// // //       return {
// // //         bg: "bg-[#0f2340]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <div className="flex items-center gap-3.5">
// // //               <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#5fd4b0] text-[#0f2340] font-extrabold text-[15px]">
// // //                 FO
// // //               </span>
// // //               <Kicker color="#5fd4b0">Client · Orthodontics · Lehi, Utah</Kicker>
// // //             </div>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               Straight smiles,{" "}
// // //               <em className="not-italic" style={{ color: "#5fd4b0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 found first.
// // //               </em>
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b8c7dd]">
// // //               Fairbanks Orthodontics is a patient-first practice in Lehi, UT, led by Dr. Benjamin Harvey, DDS, MS. CoderBox handles SEO so families searching for braces and aligners nearby find the practice first.
// // //             </p>
// // //             <div className="flex flex-wrap gap-2">
// // //               {["Local SEO", "Service-page SEO", "Google Business Profile", "Invisalign®", "Damon™ & clear braces"].map((c) => (
// // //                 <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#e6eef8]">
// // //                   {c}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Website</small>
// // //                 fairbanksorthodontics.com
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Location</small>
// // //                 Lehi, Utah, USA
// // //               </div>
// // //               <div className="text-[13px] font-semibold leading-[1.35]">
// // //                 <small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Our role</small>
// // //                 SEO &amp; lead generation
// // //               </div>
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-[82%] max-w-[400px] [transform-style:preserve-3d]" style={{ transform: "rotateX(18deg) rotateY(-18deg)", animation: "cbpSerp 8s ease-in-out infinite" }}>
// // //             <div className="bg-white text-[#1f2a3a] rounded-[14px] px-4 py-3.5 shadow-[0_30px_50px_-24px_rgba(0,0,0,.6)]">
// // //               <div className="flex items-center gap-2 border border-[#dfe3ea] rounded-full px-3 py-2 text-[12px] text-[#3c4656] mb-3">
// // //                 <span className="w-2.5 h-2.5 border-2 border-[#7b8698] rounded-full" />
// // //                 orthodontist in lehi ut
// // //               </div>
// // //               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474]" style={{ background: "linear-gradient(90deg,rgba(95,212,176,.18),transparent)", margin: "0 -16px", padding: "9px 16px", borderLeft: "3px solid #2bb38a" }}>
// // //                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Fairbanks Orthodontics in Lehi, UT</b>
// // //                 Braces, Invisalign® and complimentary consultations.
// // //               </div>
// // //               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474] opacity-55">
// // //                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Orthodontists near you</b>
// // //                 Compare local providers…
// // //               </div>
// // //               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474] opacity-40">
// // //                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Braces cost guide</b>
// // //                 What to expect…
// // //               </div>
// // //             </div>
// // //             <div
// // //               className="absolute right-0 -bottom-6 w-[52%] p-2.5 rounded-[14px] bg-white shadow-[0_30px_50px_-24px_rgba(0,0,0,.6)]"
// // //               style={{ transform: "translateZ(60px) translate(38%,-14%)" }}
// // //             >
// // //               <span className="text-[#f5a623] tracking-widest text-[11px]">★★★★★</span>
// // //               <b className="block text-[12.5px]">Fairbanks Orthodontics</b>
// // //               <span className="text-[11px] text-[#5b6474]">Orthodontist · Lehi, UT</span>
// // //             </div>
// // //           </div>
// // //         ),
// // //       };

// // //     case "fair-leads":
// // //       return {
// // //         bg: "bg-[#0f2340]",
// // //         dark: true,
// // //         copy: (
// // //           <>
// // //             <Kicker color="#5fd4b0">Lead generation</Kicker>
// // //             <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
// // //               From search{" "}
// // //               <em className="not-italic" style={{ color: "#5fd4b0", fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic" }}>
// // //                 to consultation chair.
// // //               </em>
// // //             </h3>
// // //             <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b8c7dd]">
// // //               Every search, visit and referral is steered toward one action: booking the practice's complimentary orthodontic consultation.
// // //             </p>
// // //             <div className="grid grid-cols-5 gap-1.5">
// // //               {[
// // //                 { i: "01", t: "Search", s: "Local & service SEO" },
// // //                 { i: "02", t: "Visit", s: "Treatment pages" },
// // //                 { i: "03", t: "Offer", s: "Free consultation" },
// // //                 { i: "04", t: "Enquiry", s: "Call · form · booking" },
// // //                 { i: "05", t: "Referral", s: "Refer-a-friend & rewards" },
// // //               ].map((s) => (
// // //                 <div key={s.i} className="rounded-[10px] px-2.5 py-3 text-[12.5px] font-bold leading-tight text-white bg-[#5fd4b0]/10 border border-[#5fd4b0]/35">
// // //                   <i className="block mb-1 text-[#5fd4b0] text-[13px]" style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", opacity: 1 }}>
// // //                     {s.i}
// // //                   </i>
// // //                   {s.t}
// // //                   <small className="block text-[10px] font-semibold opacity-80 mt-1">{s.s}</small>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </>
// // //         ),
// // //         visual: (
// // //           <div className="relative w-[240px] h-[280px] [transform-style:preserve-3d]" style={{ transform: "rotateX(62deg)" }}>
// // //             {[
// // //               { w: 240, h: 240, ml: -120, t: 0, z: 120, color: "rgba(95,212,176,.7)", name: "cbpR1", label: "Search" },
// // //               { w: 180, h: 180, ml: -90, t: 30, z: 60, color: "rgba(95,212,176,.7)", name: "cbpR2", label: "Visit" },
// // //               { w: 120, h: 120, ml: -60, t: 60, z: 0, color: "rgba(95,212,176,.7)", name: "cbpR3", label: "Enquiry" },
// // //               { w: 64, h: 64, ml: -32, t: 88, z: -60, color: "#5fd4b0", name: null, label: "" },
// // //             ].map((ring, i) => (
// // //               <div
// // //                 key={i}
// // //                 className="absolute left-1/2 rounded-full border-2"
// // //                 style={{
// // //                   width: ring.w,
// // //                   height: ring.h,
// // //                   marginLeft: ring.ml,
// // //                   top: ring.t,
// // //                   transform: `translateZ(${ring.z}px)`,
// // //                   borderColor: ring.color,
// // //                   boxShadow: "0 0 30px rgba(95,212,176,.25) inset",
// // //                   background: i === 3 ? "#5fd4b0" : undefined,
// // //                   animation: ring.name ? `${ring.name} 12s linear infinite` : undefined,
// // //                 }}
// // //               >
// // //                 {ring.label && (
// // //                   <span
// // //                     className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white text-[#0f2340] text-[11px] font-extrabold rounded-full px-2.5 py-1 whitespace-nowrap"
// // //                     style={{ transform: "translateX(-50%) rotateX(-62deg)" }}
// // //                   >
// // //                     {ring.label}
// // //                   </span>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ),
// // //       };

// // //     default:
// // //       return null;
// // //   }
// // // };

// // // /* ============================================================
// // //    MAIN SECTION
// // //    ============================================================ */
// // // const ClientPortfoliosSection = () => {
// // //   /* ---------- RING STATE ---------- */
// // //   const stageRef = useRef(null);
// // //   const ringRef = useRef(null);
// // //   const cardRefs = useRef([]);
// // //   const ringState = useRef({ angle: 0, target: 0, radius: 0, dragging: false, hover: false, last: 0, front: -1 });
// // //   const [ringName, setRingName] = useState(RING_CARDS[0].name);
// // //   const [ringSub, setRingSub] = useState(RING_CARDS[0].sub);

// // //   const RN = RING_CARDS.length;
// // //   const RSTEP = 360 / RN;

// // //   /* ---------- ROLLER STATE ---------- */
// // //   const rollerRef = useRef(null);
// // //   const drumRef = useRef(null);
// // //   const faceRefs = useRef([]);
// // //   const barRef = useRef(null);
// // //   const railRef = useRef(null);
// // //   const rollerState = useRef({ cur: 0, radius: 0, fh: 0, active: -1, counted: {} });
// // //   const [activeFace, setActiveFace] = useState(0);
// // //   const [countDisplay, setCountDisplay] = useState("01 / " + DRUM_FACES.length);
// // //   const [currentFaceTitle, setCurrentFaceTitle] = useState(DRUM_FACES[0].title);
// // //   const [activeTab, setActiveTab] = useState(0);

// // //   const N = DRUM_FACES.length;
// // //   const SLOTS = 6;
// // //   const STEP = 360 / SLOTS;

// // //   const reduce =
// // //     typeof window !== "undefined" &&
// // //     window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// // //   /* ---------- LAYOUT ---------- */
// // //   const layout = useCallback(() => {
// // //     if (!stageRef.current || !ringRef.current) return;
// // //     const w = window.innerWidth;
// // //     const cw = w < 600 ? Math.min(230, w * 0.6) : w < 900 ? 250 : 280;
// // //     stageRef.current.style.setProperty("--cw", `${cw}px`);
// // //     stageRef.current.style.setProperty(
// // //       "--rh",
// // //       `${Math.round(cw * 1.108 + (w < 600 ? 70 : 110))}px`
// // //     );
// // //     ringState.current.radius = Math.round(
// // //       cw / 2 / Math.tan(Math.PI / RN) + (w < 600 ? 40 : 110)
// // //     );

// // //     const vh = window.innerHeight;
// // //     const fh = Math.round(Math.min(540, vh * (w < 600 ? 0.64 : 0.6)));
// // //     rollerState.current.fh = fh;
// // //     document.documentElement.style.setProperty("--fh", `${fh}px`);
// // //     if (drumRef.current) {
// // //       drumRef.current.style.height = `${fh}px`;
// // //     }
// // //     rollerState.current.radius = fh / 2 / Math.tan(Math.PI / SLOTS);
// // //     if (rollerRef.current) {
// // //       rollerRef.current.style.height = reduce ? "auto" : `${N * 52 + 100}vh`;
// // //     }

// // //     cardRefs.current.forEach((card, i) => {
// // //       if (!card) return;
// // //       card.dataset.base = i * RSTEP;
// // //     });
// // //     faceRefs.current.forEach((face, i) => {
// // //       if (!face) return;
// // //       face.style.transform = `rotateX(${-i * STEP}deg) translateZ(${
// // //         rollerState.current.radius
// // //       }px)`;
// // //     });
// // //   }, [RN, RSTEP, N, STEP, reduce]);

// // //   /* ---------- RING FRAME ---------- */
// // //   useEffect(() => {
// // //     if (reduce) return;
// // //     let raf;
// // //     const frame = () => {
// // //       const s = ringState.current;
// // //       if (!s.dragging && !s.hover && Date.now() - s.last > 3500) s.target -= 0.06;
// // //       s.angle += (s.target - s.angle) * 0.09;
// // //       const tilt = Math.max(-8, Math.min(8, (s.target - s.angle) * 0.4));
// // //       if (ringRef.current) {
// // //         ringRef.current.style.transform = `translateZ(${-s.radius}px) rotateX(${
// // //           -6 + tilt * 0.3
// // //         }deg) rotateY(${s.angle}deg)`;
// // //       }
// // //       let best = 0;
// // //       let bestD = 999;
// // //       cardRefs.current.forEach((card, i) => {
// // //         if (!card) return;
// // //         const a = (((+card.dataset.base + s.angle) % 360) + 540) % 360 - 180;
// // //         const d = Math.abs(a);
// // //         card.style.transform = `rotateY(${card.dataset.base}deg) translateZ(${s.radius}px)`;
// // //         const dim = card.querySelector(".cbp-dim");
// // //         if (dim) dim.style.opacity = Math.min(0.6, d / 180).toFixed(3);
// // //         card.style.setProperty("--sx", `${-60 + a * 1.1}%`);
// // //         card.style.zIndex = Math.round(200 - d);
// // //         if (d < bestD) {
// // //           bestD = d;
// // //           best = i;
// // //         }
// // //       });
// // //       if (best !== s.front) {
// // //         s.front = best;
// // //         setRingName(RING_CARDS[best].name);
// // //         setRingSub(RING_CARDS[best].sub);
// // //       }
// // //       raf = requestAnimationFrame(frame);
// // //     };
// // //     raf = requestAnimationFrame(frame);
// // //     return () => cancelAnimationFrame(raf);
// // //   }, [reduce]);

// // //   /* ---------- ROLLER FRAME ---------- */
// // //   useEffect(() => {
// // //     if (reduce) {
// // //       faceRefs.current.forEach((f, i) => {
// // //         if (f) f.classList.add("cbp-live");
// // //       });
// // //       return;
// // //     }
// // //     let raf;
// // //     const frame = () => {
// // //       const roller = rollerRef.current;
// // //       const drum = drumRef.current;
// // //       if (!roller || !drum) {
// // //         raf = requestAnimationFrame(frame);
// // //         return;
// // //       }
// // //       const r = roller.getBoundingClientRect();
// // //       const total = roller.offsetHeight - window.innerHeight;
// // //       const p = Math.min(1, Math.max(0, -r.top / total));
// // //       const raw = p * (N - 1);
// // //       const base = Math.floor(raw);
// // //       const f = raw - base;
// // //       const eased = f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
// // //       const target = (base + eased) * STEP;
// // //       const vel = target - rollerState.current.cur;
// // //       rollerState.current.cur += Math.max(-10, Math.min(10, vel * 0.13));
// // //       const yaw = Math.max(-14, Math.min(14, vel * 0.45));
// // //       const push = Math.min(160, Math.abs(vel) * 7);
// // //       const roll = Math.max(-3, Math.min(3, vel * 0.08));
// // //       drum.style.transform = `translateZ(${-rollerState.current.radius - push}px) rotateY(${yaw}deg) rotateZ(${roll}deg) rotateX(${rollerState.current.cur}deg)`;

// // //       faceRefs.current.forEach((face, i) => {
// // //         if (!face) return;
// // //         const d = Math.abs(rollerState.current.cur / STEP - i);
// // //         const shade = face.querySelector(".cbp-shade");
// // //         if (shade) shade.style.opacity = Math.min(0.6, d * 0.6).toFixed(3);
// // //         face.style.opacity = Math.max(0, 1 - d * 0.82).toFixed(3);
// // //         face.style.visibility = d > 1.4 ? "hidden" : "visible";
// // //         face.style.pointerEvents = d < 0.5 ? "auto" : "none";
// // //       });

// // //       if (barRef.current) barRef.current.style.width = `${p * 100}%`;
// // //       const idx = Math.max(0, Math.min(N - 1, Math.round(rollerState.current.cur / STEP)));
// // //       if (idx !== rollerState.current.active) setActiveFace(idx);
// // //       raf = requestAnimationFrame(frame);
// // //     };
// // //     raf = requestAnimationFrame(frame);
// // //     return () => cancelAnimationFrame(raf);
// // //   }, [N, STEP, reduce]);

// // //   /* ---------- ACTIVE FACE HANDLER ---------- */
// // //   useEffect(() => {
// // //     const s = rollerState.current;
// // //     if (s.active >= 0 && faceRefs.current[s.active]) {
// // //       faceRefs.current[s.active].classList.remove("cbp-live");
// // //     }
// // //     s.active = activeFace;
// // //     if (faceRefs.current[activeFace]) {
// // //       faceRefs.current[activeFace].classList.add("cbp-live");
// // //     }
// // //     setCurrentFaceTitle(DRUM_FACES[activeFace].title);
// // //     setCountDisplay(("0" + (activeFace + 1)).slice(-2) + " / " + N);
// // //     const c = DRUM_FACES[activeFace].c;
// // //     setActiveTab(c);
// // //   }, [activeFace, N]);

// // //   /* ---------- RESIZE ---------- */
// // //   useEffect(() => {
// // //     layout();
// // //     window.addEventListener("resize", layout);
// // //     return () => window.removeEventListener("resize", layout);
// // //   }, [layout]);

// // //   /* ---------- RING DRAG ---------- */
// // //   useEffect(() => {
// // //     const stage = stageRef.current;
// // //     if (!stage || reduce) return;
// // //     let dragging = false;
// // //     let sx = 0;
// // //     let sa = 0;
// // //     let moved = 0;
// // //     const onDown = (e) => {
// // //       dragging = true;
// // //       moved = 0;
// // //       sx = e.clientX;
// // //       sa = ringState.current.target;
// // //       ringState.current.dragging = true;
// // //       stage.classList.add("cursor-grabbing");
// // //     };
// // //     const onMove = (e) => {
// // //       if (!dragging) return;
// // //       const dx = e.clientX - sx;
// // //       moved = Math.max(moved, Math.abs(dx));
// // //       ringState.current.target = sa + dx * 0.35;
// // //       ringState.current.last = Date.now();
// // //     };
// // //     const onUp = () => {
// // //       if (!dragging) return;
// // //       dragging = false;
// // //       ringState.current.dragging = false;
// // //       stage.classList.remove("cursor-grabbing");
// // //       if (moved > 6) {
// // //         ringState.current.target =
// // //           Math.round(ringState.current.target / RSTEP) * RSTEP;
// // //       }
// // //       ringState.current.last = Date.now();
// // //     };
// // //     stage.addEventListener("pointerdown", onDown);
// // //     window.addEventListener("pointermove", onMove);
// // //     window.addEventListener("pointerup", onUp);
// // //     return () => {
// // //       stage.removeEventListener("pointerdown", onDown);
// // //       window.removeEventListener("pointermove", onMove);
// // //       window.removeEventListener("pointerup", onUp);
// // //     };
// // //   }, [RSTEP, reduce]);

// // //   /* ---------- HELPERS ---------- */
// // //   const goToFace = (i) => {
// // //     if (reduce) {
// // //       if (faceRefs.current[i]) faceRefs.current[i].scrollIntoView({ block: "center" });
// // //       return;
// // //     }
// // //     const roller = rollerRef.current;
// // //     const t = roller.offsetHeight - window.innerHeight;
// // //     const top =
// // //       roller.getBoundingClientRect().top + window.scrollY + t * (i / (N - 1)) + 2;
// // //     window.scrollTo({ top, behavior: "smooth" });
// // //   };

// // //   const snapToRing = (i) => {
// // //     const want = -i * RSTEP;
// // //     const k = Math.round((ringState.current.target - want) / 360);
// // //     ringState.current.target = want + k * 360;
// // //     ringState.current.last = Date.now();
// // //   };

// // //   const handleRingCardClick = (i) => (e) => {
// // //     if (i !== ringState.current.front) {
// // //       e.preventDefault();
// // //       snapToRing(i);
// // //       return;
// // //     }
// // //     const go = RING_CARDS[i].go;
// // //     if (typeof go === "number") {
// // //       e.preventDefault();
// // //       goToFace(go);
// // //     }
// // //   };

// // //   const handlePrev = () => {
// // //     ringState.current.last = Date.now();
// // //     ringState.current.target =
// // //       Math.round(ringState.current.target / RSTEP) * RSTEP + RSTEP;
// // //   };
// // //   const handleNext = () => {
// // //     ringState.current.last = Date.now();
// // //     ringState.current.target =
// // //       Math.round(ringState.current.target / RSTEP) * RSTEP - RSTEP;
// // //   };

// // //   /* ---------- RENDER ---------- */
// // //   return (
// // //     <section
// // //       id="client-portfolios"
// // //       className="cbp-root relative bg-[#f0f1f3] text-[#0f1a2c] overflow-clip"
// // //       style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
// // //     >
// // //       {/* Keyframes injected once */}
// // //       <style>{`
// // //         @keyframes cbpSpinY { to { transform: rotateY(360deg); } }
// // //         @keyframes cbpSpinZ { to { transform: rotateZ(360deg); } }
// // //         @keyframes cbpFloat { 50% { transform: translateY(-10px) rotate(2deg); } }
// // //         @keyframes cbpWobble { 0%,100% { transform: rotate(-8deg); } 50% { transform: rotate(4deg) scale(1.04); } }
// // //         @keyframes cbpMarq { to { transform: translateX(-50%); } }
// // //         @keyframes cbpFan {
// // //           0%,100% { transform: translate(var(--x),-48%) rotateY(var(--r)) translateZ(var(--z)); }
// // //           50%     { transform: translate(var(--x),-54%) rotateY(calc(var(--r) * .6)) translateZ(calc(var(--z) + 20px)); }
// // //         }
// // //         @keyframes cbpSerp {
// // //           50% { transform: rotateX(10deg) rotateY(-6deg) translateY(-8px); }
// // //         }
// // //         @keyframes cbpR1 { from { transform: translateZ(120px) rotateZ(0); } to { transform: translateZ(120px) rotateZ(360deg); } }
// // //         @keyframes cbpR2 { from { transform: translateZ(60px) rotateZ(0); } to { transform: translateZ(60px) rotateZ(360deg); } }
// // //         @keyframes cbpR3 { from { transform: translateZ(0) rotateZ(0); } to { transform: translateZ(0) rotateZ(360deg); } }
// // //         .cbp-face .cbp-copy > * {
// // //           opacity: 0;
// // //           transform: translateY(18px);
// // //           transition: opacity .6s ease, transform .7s cubic-bezier(.2,.8,.2,1);
// // //         }
// // //         .cbp-face.cbp-live .cbp-copy > * { opacity: 1; transform: none; }
// // //         .cbp-face.cbp-live .cbp-copy > *:nth-child(2) { transition-delay: .07s; }
// // //         .cbp-face.cbp-live .cbp-copy > *:nth-child(3) { transition-delay: .14s; }
// // //         .cbp-face.cbp-live .cbp-copy > *:nth-child(4) { transition-delay: .21s; }
// // //         .cbp-face.cbp-live .cbp-copy > *:nth-child(5) { transition-delay: .28s; }
// // //         @media (max-width: 900px) {
// // //           .cbp-face { grid-template-columns: 1fr; grid-template-rows: 32% 1fr; }
// // //         }
// // //       `}</style>

// // //       {/* Background blurs */}
// // //       <div className="absolute -left-36 -top-24 w-[460px] h-[460px] rounded-full bg-[#dde8f2] blur-[80px] opacity-60 pointer-events-none z-0" />
// // //       <div className="absolute -right-44 top-[520px] w-[560px] h-[560px] rounded-full bg-[#e4eef8] blur-[80px] opacity-60 pointer-events-none z-0" />

// // //       <div className="relative z-10 max-w-[1180px] mx-auto px-4 pt-24 pb-3">
// // //         {/* ---------- HEADER ---------- */}
// // //         <motion.header
// // //           initial={{ opacity: 0, y: 28 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.7 }}
// // //           className="text-center max-w-[720px] mx-auto"
// // //         >
// // //           <span className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase text-[#1596c9] bg-[#e3f4fc] border border-[#bfe5f6] px-3.5 py-1.5 rounded-full">
// // //             Client Portfolios
// // //           </span>
// // //           <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold mt-4.5 mb-3 tracking-[-0.02em]">
// // //             Real brands. <span className="text-[#0bb4ef]">Real growth.</span>
// // //           </h2>
// // //           <p className="text-[#5b6474] text-[15px] leading-[1.6]">
// // //             From D2C, real estate and cafés to wellness, healthcare, orthodontics and infrastructure: the strategy, creative and numbers behind the brands we partner with.
// // //           </p>
// // //         </motion.header>

// // //         {/* ---------- RING STAGE ---------- */}
// // //         <motion.div
// // //           ref={stageRef}
// // //           initial={{ opacity: 0, y: 28 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.7, delay: 0.1 }}
// // //           className="relative mt-6 select-none cursor-grab [perspective:1500px] [perspective-origin:50%_40%] [touch-action:pan-y]"
// // //           style={{ height: "var(--rh, 460px)" }}
// // //           onMouseEnter={() => (ringState.current.hover = true)}
// // //           onMouseLeave={() => (ringState.current.hover = false)}
// // //         >
// // //           <div
// // //             ref={ringRef}
// // //             className="absolute left-1/2 top-1/2 w-0 h-0 [transform-style:preserve-3d] will-change-transform"
// // //           >
// // //             {RING_CARDS.map((card, i) => (
// // //               <RingCard
// // //                 key={card.id}
// // //                 ref={(el) => (cardRefs.current[i] = el)}
// // //                 card={card}
// // //                 onClick={handleRingCardClick(i)}
// // //               />
// // //             ))}
// // //           </div>
// // //         </motion.div>

// // //         {/* ---------- RING NAV ---------- */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.6, delay: 0.15 }}
// // //           className="flex justify-center items-center gap-3.5 mt-1"
// // //         >
// // //           <button
// // //             aria-label="Previous client"
// // //             onClick={handlePrev}
// // //             className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
// // //           >
// // //             <ArrowLeft className="w-4 h-4" />
// // //           </button>
// // //           <div className="min-w-[210px] text-center text-[13px] text-[#5b6474]">
// // //             <b className="block text-[#0f1a2c] text-[15px]">{ringName}</b>
// // //             <span dangerouslySetInnerHTML={{ __html: ringSub }} />
// // //           </div>
// // //           <button
// // //             aria-label="Next client"
// // //             onClick={handleNext}
// // //             className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
// // //           >
// // //             <ArrowRight className="w-4 h-4" />
// // //           </button>
// // //         </motion.div>
// // //       </div>

// // //       {/* ---------- ROLLER ---------- */}
// // //       <div
// // //         ref={rollerRef}
// // //         className="relative z-10"
// // //         style={{ height: reduce ? "auto" : `${N * 52 + 100}vh` }}
// // //       >
// // //         <div
// // //           className={
// // //             reduce
// // //               ? "relative py-10 px-4"
// // //               : "sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden px-4"
// // //           }
// // //         >
// // //           {/* Case study header */}
// // //           <div className="relative z-10 w-full max-w-[1100px] flex justify-between items-end gap-4 mb-1 flex-wrap">
// // //             <div className="flex-1 min-w-0 text-[12px] font-bold tracking-[0.14em] uppercase text-[#5b6474]">
// // //               Case study <span>{countDisplay}</span>
// // //               <strong className="block text-[22px] tracking-[-.01em] normal-case text-[#0f1a2c] mt-1 transition">
// // //                 {currentFaceTitle}
// // //               </strong>
// // //             </div>
// // //             <div
// // //               className="flex gap-1 bg-white border border-[#e2e5ea] rounded-full p-1 overflow-x-auto max-w-full"
// // //               style={{ scrollbarWidth: "none" }}
// // //             >
// // //               {TABS.map((tab, i) => (
// // //                 <button
// // //                   key={i}
// // //                   onClick={() => goToFace(tab.go)}
// // //                   className={`flex-none border-0 text-[13px] font-semibold px-3.5 py-2 rounded-full transition ${
// // //                     activeTab === i
// // //                       ? "bg-[#0f1a2c] text-white"
// // //                       : "bg-transparent text-[#5b6474] hover:text-[#0f1a2c]"
// // //                   }`}
// // //                 >
// // //                   {tab.label}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Window */}
// // //           <div
// // //             className="w-[calc(100%+32px)] -mx-4 py-9 overflow-hidden"
// // //             style={{
// // //               WebkitMaskImage:
// // //                 "linear-gradient(180deg,transparent 0,#000 38px,#000 calc(100% - 38px),transparent 100%)",
// // //               maskImage:
// // //                 "linear-gradient(180deg,transparent 0,#000 38px,#000 calc(100% - 38px),transparent 100%)",
// // //             }}
// // //           >
// // //             <div
// // //               className="relative mx-auto max-w-[1100px] [perspective:1700px] [perspective-origin:50%_50%]"
// // //               style={{ height: "var(--fh, 540px)" }}
// // //             >
// // //               <div
// // //                 ref={drumRef}
// // //                 className="absolute inset-0 [transform-style:preserve-3d] will-change-transform"
// // //               >
// // //                 {DRUM_FACES.map((face, i) => (
// // //                   <DrumFace
// // //                     key={face.id}
// // //                     face={face}
// // //                     live={activeFace === i || reduce}
// // //                     ref={(el) => (faceRefs.current[i] = el)}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Rail */}
// // //           {!reduce && (
// // //             <div
// // //               ref={railRef}
// // //               className="absolute right-[max(10px,calc((100vw-1100px)/2-40px))] top-1/2 -translate-y-1/2 flex flex-col gap-2 z-[12]"
// // //             >
// // //               {DRUM_FACES.map((_, i) => (
// // //                 <button
// // //                   key={i}
// // //                   onClick={() => goToFace(i)}
// // //                   aria-hidden="true"
// // //                   className={`w-2 h-2 rounded-full border-0 p-0 transition ${
// // //                     activeFace === i
// // //                       ? "bg-[#0bb4ef] scale-150"
// // //                       : "bg-[#c9ced8] hover:bg-[#9aa3b2]"
// // //                   }`}
// // //                 />
// // //               ))}
// // //             </div>
// // //           )}

// // //           {/* Progress bar */}
// // //           <div className="relative z-10 w-full max-w-[1100px] h-[3px] bg-[#e2e5ea] rounded-sm mt-1 overflow-hidden">
// // //             <i
// // //               ref={barRef}
// // //               className="block h-full w-0 bg-gradient-to-r from-[#0bb4ef] to-[#0a8af0] rounded-sm transition-[width]"
// // //             />
// // //           </div>

// // //           {/* Hint */}
// // //           <div className="relative z-10 text-[12px] text-[#5b6474] mt-2.5 flex items-center gap-2">
// // //             <span className="relative w-3.5 h-5.5 border-[1.5px] border-[#9aa3b2] rounded-lg">
// // //               <span
// // //                 className="absolute left-1/2 top-1 w-0.5 h-[5px] -ml-[1px] bg-[#9aa3b2] rounded"
// // //                 style={{ animation: "cbpwheel 1.6s infinite" }}
// // //               />
// // //             </span>
// // //             Scroll to roll through each case study
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ---------- CTA ---------- */}
// // //       <div className="text-center px-4 pt-8 pb-24 relative z-10">
// // //         <motion.a
// // //           href="#contact"
// // //           whileHover={{ y: -3 }}
// // //           whileTap={{ scale: 0.96 }}
// // //           className="inline-flex items-center gap-3 bg-[#0a8af0] text-white font-bold text-[14.5px] no-underline px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(10,138,240,.6)] hover:shadow-[0_20px_36px_-12px_rgba(10,138,240,.7)] transition"
// // //         >
// // //           Start Your Project
// // //           <ArrowRight className="w-4 h-4" />
// // //         </motion.a>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ClientPortfoliosSection;




// /* ============================================================
//    PART 1 — 3D RING CAROUSEL
//    (Client cards rotating ring — matches the screenshot design)
//    + Explore Our Portfolio CTA below
//    ============================================================ */
// import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// /* ---------- RING CARDS DATA ---------- */
// const RING_CARDS = [
//   {
//     id: 0,
//     name: "The Mom's Co.",
//     sub: "Baby & Mom Care · D2C",
//     tag: "D2C · Social & Performance",
//     stat: "3X",
//     statLabel: "Traffic",
//     go: 0,
//     img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
//     bgClass: "from-[#dbe9fd] to-[#9fc1f5]",
//     imgContain: true,
//   },
//   {
//     id: 1,
//     name: "Lodha · Navi Mumbai",
//     sub: "Real Estate · Lead Generation",
//     tag: "Real Estate · Lead Gen",
//     stat: "672+",
//     statLabel: "Leads",
//     go: 3,
//     img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
//     imgPos: "object-[30%_50%]",
//   },
//   {
//     id: 2,
//     name: "Ciora Cafe · Dubai",
//     sub: "Café & Dining · Brand & Growth",
//     tag: "Café · Brand & Growth",
//     stat: "250K+",
//     statLabel: "Reach / mo",
//     go: 6,
//     img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
//   },
//   {
//     id: 3,
//     name: "Shomi Healings",
//     sub: "Wellness · Instagram Growth Strategy",
//     tag: "Wellness · Instagram",
//     stat: "5",
//     statLabel: "Pillars",
//     go: 9,
//     isOrbit: true,
//     orbitBg: "radial-gradient(circle at 50% 36%,#7b5fc4 0,#3a2566 38%,#1a1030 80%)",
//   },
//   {
//     id: 4,
//     name: "Ultra Fragrance Ltd",
//     sub: "Fragrance · Website Strategy",
//     tag: "Fragrance · Website",
//     stat: "5",
//     statLabel: "Parameters",
//     go: 11,
//     isBottle: true,
//     bottleBg: "radial-gradient(circle at 50% 30%,#fff 0,#f4dfe4 35%,#c78196 100%)",
//   },
//   {
//     id: 5,
//     name: "SmileCare",
//     sub: "Dental care app · UI/UX design",
//     tag: "Healthcare · App UI/UX",
//     stat: "4",
//     statLabel: "Core screens",
//     go: 13,
//     img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
//     smileBg: "radial-gradient(circle at 50% 30%,#fff,#bfe9e6 60%,#6cc8c2)",
//   },
//   {
//     id: 6,
//     name: "SR Infra · Earth Work Solutions",
//     sub: "Earthwork & infrastructure · Hyderabad",
//     tag: "Infrastructure · Earthwork",
//     stat: "15",
//     statLabel: "Projects",
//     go: 15,
//     img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
//     imgPos: "object-[40%_50%]",
//   },
//   {
//     id: 7,
//     name: "Fairbanks Orthodontics",
//     sub: "Orthodontics · SEO & Lead Generation",
//     tag: "Orthodontics · SEO & Leads",
//     stat: "Lehi",
//     statLabel: "Utah",
//     go: 18,
//     isOrbit: true,
//     orbitBg: "radial-gradient(circle at 50% 30%,#2a6aa8,#0f2340 75%)",
//     orbitColor: "#5fd4b0",
//   },
//   {
//     id: 8,
//     name: "Your brand next",
//     sub: "Start a project with CoderBox",
//     tag: "Your brand next",
//     isNext: true,
//   },
// ];

// /* ---------- RING CARD ---------- */
// const RingCard = forwardRef(({ card, onClick }, ref) => {
//   if (card.isNext) {
//     return (
//       <a
//         ref={ref}
//         href="#contact"
//         onClick={onClick}
//         className="absolute rounded-2xl overflow-hidden text-white block bg-gradient-to-br from-[#0d1b3d] via-[#16366f] to-[#0a8af0] p-6 flex flex-col justify-center"
//         style={{
//           width: "var(--cw, 280px)",
//           aspectRatio: "304/337",
//           left: "calc(var(--cw, 280px) / -2)",
//           top: "calc(var(--cw, 280px) * -0.554)",
//           backfaceVisibility: "hidden",
//         }}
//       >
//         <span className="inline-block bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full w-fit shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
//           Your brand next
//         </span>
//         <h3 className="text-[22px] leading-tight mt-10 mb-2.5 font-extrabold">
//           Could your brand be the next case study?
//         </h3>
//         <p className="text-[13px] opacity-80 leading-[1.55] mb-4">
//           Websites, social, performance marketing and lead generation, built around measurable results.
//         </p>
//         <span className="inline-flex items-center gap-2 bg-white text-[#0f1a2c] font-bold text-[13px] rounded-full px-4 py-2.5 w-fit">
//           Start a project →
//         </span>
//       </a>
//     );
//   }

//   return (
//     <button
//       ref={ref}
//       onClick={onClick}
//       className="absolute rounded-2xl overflow-hidden text-white block p-0 border-0 cursor-pointer text-left shadow-[0_22px_40px_-18px_rgba(15,26,44,.5)]"
//       style={{
//         width: "var(--cw, 280px)",
//         aspectRatio: "304/337",
//         left: "calc(var(--cw, 280px) / -2)",
//         top: "calc(var(--cw, 280px) * -0.554)",
//         backfaceVisibility: "hidden",
//       }}
//     >
//       {/* Background */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br ${card.bgClass || ""}`}
//         style={
//           card.orbitBg
//             ? { background: card.orbitBg }
//             : card.bottleBg
//             ? { background: card.bottleBg }
//             : card.smileBg
//             ? { background: card.smileBg }
//             : undefined
//         }
//       >
//         {card.img && (
//           <img
//             src={card.img}
//             alt={card.name}
//             draggable="false"
//             className={`w-full h-full object-cover ${card.imgPos || ""}`}
//             style={card.imgContain ? { objectFit: "contain", paddingTop: 30, mixBlendMode: "multiply" } : undefined}
//           />
//         )}

//         {/* CSS orbit art (Shomi / Fairbanks) */}
//         {card.isOrbit && (
//           <>
//             <div
//               className="absolute left-1/2 top-[40%] w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
//               style={{ animation: "cbpSpinY 14s linear infinite" }}
//             >
//               {[0, 1, 2, 3].map((i) => (
//                 <span
//                   key={i}
//                   className="absolute inset-0 rounded-full border"
//                   style={{
//                     borderColor: card.orbitColor ? `${card.orbitColor}88` : "rgba(214,196,255,.55)",
//                     transform:
//                       i === 1 ? "rotateX(60deg)" : i === 2 ? "rotateX(-60deg)" : i === 3 ? "rotateY(90deg)" : undefined,
//                   }}
//                 />
//               ))}
//             </div>
//             <div
//               className="absolute left-1/2 top-[40%] w-[44px] h-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[1px]"
//               style={{
//                 background: card.orbitColor
//                   ? "radial-gradient(circle,#fff 0,#bff3e2 35%,rgba(95,212,176,0) 72%)"
//                   : "radial-gradient(circle,#fff 0,#e7dcff 35%,rgba(185,163,240,0) 72%)",
//               }}
//             />
//           </>
//         )}

//         {/* CSS bottle art (Ultra Fragrance) */}
//         {card.isBottle && (
//           <div
//             className="absolute left-1/2 top-[14%] w-[92px] h-[138px] -translate-x-1/2 rounded-[20px] rounded-b-[26px]"
//             style={{
//               background: "linear-gradient(135deg,rgba(255,255,255,.9),rgba(255,255,255,.25) 45%,rgba(168,68,106,.35))",
//               boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.8), 0 30px 40px -20px rgba(58,29,43,.6)",
//               animation: "cbpFloat 5s ease-in-out infinite",
//             }}
//           >
//             <span
//               className="absolute left-1/2 -top-[30px] w-[34px] h-[30px] -translate-x-1/2 rounded-[6px] rounded-t-[3px]"
//               style={{ background: "linear-gradient(180deg,#d9b27a,#9c7440)" }}
//             />
//             <span
//               className="absolute bottom-9 left-0 right-0 text-center text-[34px]"
//               style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600, color: "#3a1d2b" }}
//             >
//               U
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Gradient overlay */}
//       <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050c1c]/85 pointer-events-none" />

//       {/* Tag (top-left) */}
//       <span className="absolute top-3 left-3 z-[2] bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
//         {card.tag}
//       </span>

//       {/* Stat (top-right) */}
//       {card.stat && (
//         <span className="absolute top-3 right-3 z-[2] bg-white/95 text-[#0f1a2c] font-extrabold text-[12px] rounded-[10px] px-2.5 py-1.5 leading-[1.1] text-center">
//           {card.stat}
//           <i className="block not-italic font-semibold text-[9px] text-[#5b6474] tracking-wider uppercase">
//             {card.statLabel}
//           </i>
//         </span>
//       )}

//       {/* Name + sub (bottom) */}
//       <div className="absolute left-[18px] right-[18px] bottom-4 z-[2]">
//         <b className="block text-[19px] font-bold tracking-[-.01em]">{card.name}</b>
//         <small className="block text-[12px] opacity-85 mt-1">{card.sub} · View case study →</small>
//       </div>
//     </button>
//   );
// });
// RingCard.displayName = "RingCard";

// /* ---------- MAIN COMPONENT ---------- */
// const ClientRingCarousel = ({ onSelectCard }) => {
//   const stageRef = useRef(null);
//   const ringRef = useRef(null);
//   const cardRefs = useRef([]);
//   const ringState = useRef({ angle: 0, target: 0, radius: 0, dragging: false, hover: false, last: 0, front: -1 });
//   const [ringName, setRingName] = useState(RING_CARDS[0].name);
//   const [ringSub, setRingSub] = useState(RING_CARDS[0].sub);

//   const RN = RING_CARDS.length;
//   const RSTEP = 360 / RN;

//   const reduce =
//     typeof window !== "undefined" &&
//     window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   /* ---------- LAYOUT ---------- */
//   const layout = useCallback(() => {
//     if (!stageRef.current || !ringRef.current) return;
//     const w = window.innerWidth;
//     const cw = w < 600 ? Math.min(230, w * 0.6) : w < 900 ? 250 : 280;
//     stageRef.current.style.setProperty("--cw", `${cw}px`);
//     stageRef.current.style.setProperty(
//       "--rh",
//       `${Math.round(cw * 1.108 + (w < 600 ? 70 : 110))}px`
//     );
//     ringState.current.radius = Math.round(
//       cw / 2 / Math.tan(Math.PI / RN) + (w < 600 ? 40 : 110)
//     );
//     cardRefs.current.forEach((card, i) => {
//       if (!card) return;
//       card.dataset.base = i * RSTEP;
//     });
//   }, [RN, RSTEP]);

//   /* ---------- RING FRAME LOOP ---------- */
//   useEffect(() => {
//     if (reduce) return;
//     let raf;
//     const frame = () => {
//       const s = ringState.current;
//       if (!s.dragging && !s.hover && Date.now() - s.last > 3500) s.target -= 0.06;
//       s.angle += (s.target - s.angle) * 0.09;
//       const tilt = Math.max(-8, Math.min(8, (s.target - s.angle) * 0.4));
//       if (ringRef.current) {
//         ringRef.current.style.transform = `translateZ(${-s.radius}px) rotateX(${
//           -6 + tilt * 0.3
//         }deg) rotateY(${s.angle}deg)`;
//       }
//       let best = 0;
//       let bestD = 999;
//       cardRefs.current.forEach((card, i) => {
//         if (!card) return;
//         const a = (((+card.dataset.base + s.angle) % 360) + 540) % 360 - 180;
//         const d = Math.abs(a);
//         card.style.transform = `rotateY(${card.dataset.base}deg) translateZ(${s.radius}px)`;
//         card.style.setProperty("--sx", `${-60 + a * 1.1}%`);
//         card.style.zIndex = Math.round(200 - d);
//         if (d < bestD) {
//           bestD = d;
//           best = i;
//         }
//       });
//       if (best !== s.front) {
//         s.front = best;
//         setRingName(RING_CARDS[best].name);
//         setRingSub(RING_CARDS[best].sub);
//       }
//       raf = requestAnimationFrame(frame);
//     };
//     raf = requestAnimationFrame(frame);
//     return () => cancelAnimationFrame(raf);
//   }, [reduce]);

//   useEffect(() => {
//     layout();
//     window.addEventListener("resize", layout);
//     return () => window.removeEventListener("resize", layout);
//   }, [layout]);

//   /* ---------- DRAG ---------- */
//   useEffect(() => {
//     const stage = stageRef.current;
//     if (!stage || reduce) return;
//     let dragging = false, sx = 0, sa = 0, moved = 0;
//     const onDown = (e) => {
//       dragging = true; moved = 0; sx = e.clientX; sa = ringState.current.target;
//       ringState.current.dragging = true;
//       stage.classList.add("cursor-grabbing");
//     };
//     const onMove = (e) => {
//       if (!dragging) return;
//       const dx = e.clientX - sx;
//       moved = Math.max(moved, Math.abs(dx));
//       ringState.current.target = sa + dx * 0.35;
//       ringState.current.last = Date.now();
//     };
//     const onUp = () => {
//       if (!dragging) return;
//       dragging = false;
//       ringState.current.dragging = false;
//       stage.classList.remove("cursor-grabbing");
//       if (moved > 6) {
//         ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP;
//       }
//       ringState.current.last = Date.now();
//     };
//     stage.addEventListener("pointerdown", onDown);
//     window.addEventListener("pointermove", onMove);
//     window.addEventListener("pointerup", onUp);
//     return () => {
//       stage.removeEventListener("pointerdown", onDown);
//       window.removeEventListener("pointermove", onMove);
//       window.removeEventListener("pointerup", onUp);
//     };
//   }, [RSTEP, reduce]);

//   const snapToRing = (i) => {
//     const want = -i * RSTEP;
//     const k = Math.round((ringState.current.target - want) / 360);
//     ringState.current.target = want + k * 360;
//     ringState.current.last = Date.now();
//   };

//   const handleRingCardClick = (i) => (e) => {
//     if (i !== ringState.current.front) {
//       e.preventDefault();
//       snapToRing(i);
//       return;
//     }
//     if (onSelectCard) {
//       e.preventDefault();
//       onSelectCard(i); // parent ko batao konsa card click hua → drum me scroll karega
//     }
//   };

//   const handlePrev = () => {
//     ringState.current.last = Date.now();
//     ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP + RSTEP;
//   };
//   const handleNext = () => {
//     ringState.current.last = Date.now();
//     ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP - RSTEP;
//   };

//   return (
//     <div className="cbp-ring-root relative w-full">
//       <style>{`
//         @keyframes cbpSpinY { to { transform: rotateY(360deg); } }
//         @keyframes cbpFloat { 50% { transform: translateY(-10px) rotate(2deg); } }
//       `}</style>

//       {/* ===== RING STAGE ===== */}
//       <motion.div
//         ref={stageRef}
//         initial={{ opacity: 0, y: 28 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.1 }}
//         className="relative select-none cursor-grab [perspective:1500px] [perspective-origin:50%_40%] [touch-action:pan-y]"
//         style={{ height: "var(--rh, 460px)" }}
//         onMouseEnter={() => (ringState.current.hover = true)}
//         onMouseLeave={() => (ringState.current.hover = false)}
//       >
//         <div
//           ref={ringRef}
//           className="absolute left-1/2 top-1/2 w-0 h-0 [transform-style:preserve-3d] will-change-transform"
//         >
//           {RING_CARDS.map((card, i) => (
//             <RingCard
//               key={card.id}
//               ref={(el) => (cardRefs.current[i] = el)}
//               card={card}
//               onClick={handleRingCardClick(i)}
//             />
//           ))}
//         </div>
//       </motion.div>

//       {/* ===== RING NAV (name + prev/next) ===== */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.15 }}
//         className="flex justify-center items-center gap-3.5 mt-1"
//       >
//         <button
//           aria-label="Previous client"
//           onClick={handlePrev}
//           className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
//         >
//           <ArrowLeft className="w-4 h-4" />
//         </button>
//         <div className="min-w-[210px] text-center text-[13px] text-[#5b6474]">
//           <b className="block text-[#0f1a2c] text-[15px]">{ringName}</b>
//           <span dangerouslySetInnerHTML={{ __html: ringSub }} />
//         </div>
//         <button
//           aria-label="Next client"
//           onClick={handleNext}
//           className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
//         >
//           <ArrowRight className="w-4 h-4" />
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// /* ============================================================
//    🎯 FULL SECTION — Header + Ring Carousel + Explore CTA
//    - Top & bottom padding: 60px
//    ============================================================ */
// const ClientPortfoliosSection = () => {
//   return (
//     <section
//       id="client-portfolios"
//       className="relative bg-[#f0f1f3] text-[#0f1a2c] overflow-clip pt-[60px] pb-[60px]"
//       style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
//     >
//       {/* Background blurs */}
//       <div className="absolute -left-36 -top-24 w-[460px] h-[460px] rounded-full bg-[#dde8f2] blur-[80px] opacity-60 pointer-events-none z-0" />
//       <div className="absolute -right-44 top-[520px] w-[560px] h-[560px] rounded-full bg-[#e4eef8] blur-[80px] opacity-60 pointer-events-none z-0" />

//       <div className="relative z-10 max-w-[1180px] mx-auto px-4">
//         {/* ===== HEADER ===== */}
//         <motion.header
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-[760px] mx-auto"
//         >
//           <span className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase text-[#1596c9] bg-[#e3f4fc] border border-[#bfe5f6] px-3.5 py-1.5 rounded-full">
//             Client Portfolios
//           </span>
//           <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold mt-4.5 mb-3 tracking-[-0.02em]">
//             Real brands.{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Real growth.
//             </span>
//           </h2>
//           <p className="text-[#5b6474] text-[15px] leading-[1.6]">
//             From D2C, real estate and cafés to wellness, healthcare, orthodontics and infrastructure: the strategy, creative and numbers behind the brands we partner with.
//           </p>
//         </motion.header>

//         {/* ===== RING CAROUSEL ===== */}
//         <div className="mt-6">
//           <ClientRingCarousel />
//         </div>

//         {/* ===== EXPLORE OUR PORTFOLIO CTA ===== */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-center mt-8 sm:mt-10"
//         >
//           <motion.a
//             href="/portfolio"
//             whileHover={{ y: -3 }}
//             whileTap={{ scale: 0.96 }}
//             className="inline-flex items-center gap-3 bg-[#0a8af0] text-white font-bold text-[14.5px] no-underline px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(10,138,240,.6)] hover:shadow-[0_20px_36px_-12px_rgba(10,138,240,.7)] transition"
//           >
//             Explore Our Portfolio
//             <motion.span
//               animate={{ x: [0, 6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <ArrowRight className="w-4 h-4" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ClientPortfoliosSection;





/* ============================================================
   PART 1 — 3D RING CAROUSEL
   (Client cards rotating ring — matches the screenshot design)
   + Explore Our Portfolio CTA below
   + Stat badge hidden on mobile
   ============================================================ */
import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/* ---------- RING CARDS DATA ---------- */
const RING_CARDS = [
  {
    id: 0,
    name: "The Mom's Co.",
    sub: "Baby & Mom Care · D2C",
    tag: "D2C · Social & Performance",
    stat: "3X",
    statLabel: "Traffic",
    go: 0,
    img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
    bgClass: "from-[#dbe9fd] to-[#9fc1f5]",
    imgContain: true,
  },
  {
    id: 1,
    name: "Lodha · Navi Mumbai",
    sub: "Real Estate · Lead Generation",
    tag: "Real Estate · Lead Gen",
    stat: "672+",
    statLabel: "Leads",
    go: 3,
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    imgPos: "object-[30%_50%]",
  },
  {
    id: 2,
    name: "Ciora Cafe · Dubai",
    sub: "Café & Dining · Brand & Growth",
    tag: "Café · Brand & Growth",
    stat: "250K+",
    statLabel: "Reach / mo",
    go: 6,
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  },
  {
    id: 3,
    name: "Shomi Healings",
    sub: "Wellness · Instagram Growth Strategy",
    tag: "Wellness · Instagram",
    stat: "5",
    statLabel: "Pillars",
    go: 9,
    isOrbit: true,
    orbitBg: "radial-gradient(circle at 50% 36%,#7b5fc4 0,#3a2566 38%,#1a1030 80%)",
  },
  {
    id: 4,
    name: "Ultra Fragrance Ltd",
    sub: "Fragrance · Website Strategy",
    tag: "Fragrance · Website",
    stat: "5",
    statLabel: "Parameters",
    go: 11,
    isBottle: true,
    bottleBg: "radial-gradient(circle at 50% 30%,#fff 0,#f4dfe4 35%,#c78196 100%)",
  },
  {
    id: 5,
    name: "SmileCare",
    sub: "Dental care app · UI/UX design",
    tag: "Healthcare · App UI/UX",
    stat: "4",
    statLabel: "Core screens",
    go: 13,
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    smileBg: "radial-gradient(circle at 50% 30%,#fff,#bfe9e6 60%,#6cc8c2)",
  },
  {
    id: 6,
    name: "SR Infra · Earth Work Solutions",
    sub: "Earthwork & infrastructure · Hyderabad",
    tag: "Infrastructure · Earthwork",
    stat: "15",
    statLabel: "Projects",
    go: 15,
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    imgPos: "object-[40%_50%]",
  },
  {
    id: 7,
    name: "Fairbanks Orthodontics",
    sub: "Orthodontics · SEO & Lead Generation",
    tag: "Orthodontics · SEO & Leads",
    stat: "Lehi",
    statLabel: "Utah",
    go: 18,
    isOrbit: true,
    orbitBg: "radial-gradient(circle at 50% 30%,#2a6aa8,#0f2340 75%)",
    orbitColor: "#5fd4b0",
  },
  {
    id: 8,
    name: "Your brand next",
    sub: "Start a project with CoderBox",
    tag: "Your brand next",
    isNext: true,
  },
];

/* ---------- RING CARD ---------- */
const RingCard = forwardRef(({ card, onClick }, ref) => {
  if (card.isNext) {
    return (
      <a
        ref={ref}
        href="#contact"
        onClick={onClick}
        className="absolute rounded-2xl overflow-hidden text-white block bg-gradient-to-br from-[#0d1b3d] via-[#16366f] to-[#0a8af0] p-6 flex flex-col justify-center"
        style={{
          width: "var(--cw, 280px)",
          aspectRatio: "304/337",
          left: "calc(var(--cw, 280px) / -2)",
          top: "calc(var(--cw, 280px) * -0.554)",
          backfaceVisibility: "hidden",
        }}
      >
        <span className="inline-block bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full w-fit shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
          Your brand next
        </span>
        <h3 className="text-[22px] leading-tight mt-10 mb-2.5 font-extrabold">
          Could your brand be the next case study?
        </h3>
        <p className="text-[13px] opacity-80 leading-[1.55] mb-4">
          Websites, social, performance marketing and lead generation, built around measurable results.
        </p>
        <span className="inline-flex items-center gap-2 bg-white text-[#0f1a2c] font-bold text-[13px] rounded-full px-4 py-2.5 w-fit">
          Start a project →
        </span>
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      className="absolute rounded-2xl overflow-hidden text-white block p-0 border-0 cursor-pointer text-left shadow-[0_22px_40px_-18px_rgba(15,26,44,.5)]"
      style={{
        width: "var(--cw, 280px)",
        aspectRatio: "304/337",
        left: "calc(var(--cw, 280px) / -2)",
        top: "calc(var(--cw, 280px) * -0.554)",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.bgClass || ""}`}
        style={
          card.orbitBg
            ? { background: card.orbitBg }
            : card.bottleBg
            ? { background: card.bottleBg }
            : card.smileBg
            ? { background: card.smileBg }
            : undefined
        }
      >
        {card.img && (
          <img
            src={card.img}
            alt={card.name}
            draggable="false"
            className={`w-full h-full object-cover ${card.imgPos || ""}`}
            style={card.imgContain ? { objectFit: "contain", paddingTop: 30, mixBlendMode: "multiply" } : undefined}
          />
        )}

        {/* CSS orbit art (Shomi / Fairbanks) */}
        {card.isOrbit && (
          <>
            <div
              className="absolute left-1/2 top-[40%] w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
              style={{ animation: "cbpSpinY 14s linear infinite" }}
            >
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="absolute inset-0 rounded-full border"
                  style={{
                    borderColor: card.orbitColor ? `${card.orbitColor}88` : "rgba(214,196,255,.55)",
                    transform:
                      i === 1 ? "rotateX(60deg)" : i === 2 ? "rotateX(-60deg)" : i === 3 ? "rotateY(90deg)" : undefined,
                  }}
                />
              ))}
            </div>
            <div
              className="absolute left-1/2 top-[40%] w-[44px] h-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[1px]"
              style={{
                background: card.orbitColor
                  ? "radial-gradient(circle,#fff 0,#bff3e2 35%,rgba(95,212,176,0) 72%)"
                  : "radial-gradient(circle,#fff 0,#e7dcff 35%,rgba(185,163,240,0) 72%)",
              }}
            />
          </>
        )}

        {/* CSS bottle art (Ultra Fragrance) */}
        {card.isBottle && (
          <div
            className="absolute left-1/2 top-[14%] w-[92px] h-[138px] -translate-x-1/2 rounded-[20px] rounded-b-[26px]"
            style={{
              background: "linear-gradient(135deg,rgba(255,255,255,.9),rgba(255,255,255,.25) 45%,rgba(168,68,106,.35))",
              boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.8), 0 30px 40px -20px rgba(58,29,43,.6)",
              animation: "cbpFloat 5s ease-in-out infinite",
            }}
          >
            <span
              className="absolute left-1/2 -top-[30px] w-[34px] h-[30px] -translate-x-1/2 rounded-[6px] rounded-t-[3px]"
              style={{ background: "linear-gradient(180deg,#d9b27a,#9c7440)" }}
            />
            <span
              className="absolute bottom-9 left-0 right-0 text-center text-[34px]"
              style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600, color: "#3a1d2b" }}
            >
              U
            </span>
          </div>
        )}
      </div>

      {/* Gradient overlay */}
      <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050c1c]/85 pointer-events-none" />

      {/* Tag (top-left) */}
      <span className="absolute top-3 left-3 z-[2] bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
        {card.tag}
      </span>

      {/* Stat (top-right) — HIDDEN on mobile (shows from sm and up) */}
      {card.stat && (
        <span className="hidden sm:block absolute top-3 right-3 z-[2] bg-white/95 text-[#0f1a2c] font-extrabold text-[12px] rounded-[10px] px-2.5 py-1.5 leading-[1.1] text-center">
          {card.stat}
          <i className="block not-italic font-semibold text-[9px] text-[#5b6474] tracking-wider uppercase">
            {card.statLabel}
          </i>
        </span>
      )}

      {/* Name + sub (bottom) */}
      <div className="absolute left-[18px] right-[18px] bottom-4 z-[2]">
        <b className="block text-[19px] font-bold tracking-[-.01em]">{card.name}</b>
        <small className="block text-[12px] opacity-85 mt-1">{card.sub} · View case study →</small>
      </div>
    </button>
  );
});
RingCard.displayName = "RingCard";

/* ---------- MAIN COMPONENT ---------- */
const ClientRingCarousel = ({ onSelectCard }) => {
  const stageRef = useRef(null);
  const ringRef = useRef(null);
  const cardRefs = useRef([]);
  const ringState = useRef({ angle: 0, target: 0, radius: 0, dragging: false, hover: false, last: 0, front: -1 });
  const [ringName, setRingName] = useState(RING_CARDS[0].name);
  const [ringSub, setRingSub] = useState(RING_CARDS[0].sub);

  const RN = RING_CARDS.length;
  const RSTEP = 360 / RN;

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- LAYOUT ---------- */
  const layout = useCallback(() => {
    if (!stageRef.current || !ringRef.current) return;
    const w = window.innerWidth;
    const cw = w < 600 ? Math.min(230, w * 0.6) : w < 900 ? 250 : 280;
    stageRef.current.style.setProperty("--cw", `${cw}px`);
    stageRef.current.style.setProperty(
      "--rh",
      `${Math.round(cw * 1.108 + (w < 600 ? 70 : 110))}px`
    );
    ringState.current.radius = Math.round(
      cw / 2 / Math.tan(Math.PI / RN) + (w < 600 ? 40 : 110)
    );
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      card.dataset.base = i * RSTEP;
    });
  }, [RN, RSTEP]);

  /* ---------- RING FRAME LOOP ---------- */
  useEffect(() => {
    if (reduce) return;
    let raf;
    const frame = () => {
      const s = ringState.current;
      if (!s.dragging && !s.hover && Date.now() - s.last > 3500) s.target -= 0.06;
      s.angle += (s.target - s.angle) * 0.09;
      const tilt = Math.max(-8, Math.min(8, (s.target - s.angle) * 0.4));
      if (ringRef.current) {
        ringRef.current.style.transform = `translateZ(${-s.radius}px) rotateX(${
          -6 + tilt * 0.3
        }deg) rotateY(${s.angle}deg)`;
      }
      let best = 0;
      let bestD = 999;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const a = (((+card.dataset.base + s.angle) % 360) + 540) % 360 - 180;
        const d = Math.abs(a);
        card.style.transform = `rotateY(${card.dataset.base}deg) translateZ(${s.radius}px)`;
        card.style.setProperty("--sx", `${-60 + a * 1.1}%`);
        card.style.zIndex = Math.round(200 - d);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      if (best !== s.front) {
        s.front = best;
        setRingName(RING_CARDS[best].name);
        setRingSub(RING_CARDS[best].sub);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  useEffect(() => {
    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [layout]);

  /* ---------- DRAG ---------- */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reduce) return;
    let dragging = false, sx = 0, sa = 0, moved = 0;
    const onDown = (e) => {
      dragging = true; moved = 0; sx = e.clientX; sa = ringState.current.target;
      ringState.current.dragging = true;
      stage.classList.add("cursor-grabbing");
    };
    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - sx;
      moved = Math.max(moved, Math.abs(dx));
      ringState.current.target = sa + dx * 0.35;
      ringState.current.last = Date.now();
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      ringState.current.dragging = false;
      stage.classList.remove("cursor-grabbing");
      if (moved > 6) {
        ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP;
      }
      ringState.current.last = Date.now();
    };
    stage.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      stage.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [RSTEP, reduce]);

  const snapToRing = (i) => {
    const want = -i * RSTEP;
    const k = Math.round((ringState.current.target - want) / 360);
    ringState.current.target = want + k * 360;
    ringState.current.last = Date.now();
  };

  const handleRingCardClick = (i) => (e) => {
    if (i !== ringState.current.front) {
      e.preventDefault();
      snapToRing(i);
      return;
    }
    if (onSelectCard) {
      e.preventDefault();
      onSelectCard(i);
    }
  };

  const handlePrev = () => {
    ringState.current.last = Date.now();
    ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP + RSTEP;
  };
  const handleNext = () => {
    ringState.current.last = Date.now();
    ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP - RSTEP;
  };

  return (
    <div className="cbp-ring-root relative w-full">
      <style>{`
        @keyframes cbpSpinY { to { transform: rotateY(360deg); } }
        @keyframes cbpFloat { 50% { transform: translateY(-10px) rotate(2deg); } }
      `}</style>

      {/* ===== RING STAGE ===== */}
      <motion.div
        ref={stageRef}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative select-none cursor-grab [perspective:1500px] [perspective-origin:50%_40%] [touch-action:pan-y]"
        style={{ height: "var(--rh, 460px)" }}
        onMouseEnter={() => (ringState.current.hover = true)}
        onMouseLeave={() => (ringState.current.hover = false)}
      >
        <div
          ref={ringRef}
          className="absolute left-1/2 top-1/2 w-0 h-0 [transform-style:preserve-3d] will-change-transform"
        >
          {RING_CARDS.map((card, i) => (
            <RingCard
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)}
              card={card}
              onClick={handleRingCardClick(i)}
            />
          ))}
        </div>
      </motion.div>

      {/* ===== RING NAV ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex justify-center items-center gap-3.5 mt-1"
      >
        <button
          aria-label="Previous client"
          onClick={handlePrev}
          className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="min-w-[210px] text-center text-[13px] text-[#5b6474]">
          <b className="block text-[#0f1a2c] text-[15px]">{ringName}</b>
          <span dangerouslySetInnerHTML={{ __html: ringSub }} />
        </div>
        <button
          aria-label="Next client"
          onClick={handleNext}
          className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
};

/* ============================================================
   🎯 FULL SECTION — Header + Ring Carousel + Explore CTA
   - Top & bottom padding: 60px
   ============================================================ */
const ClientPortfoliosSection = () => {
  return (
    <section
      id="client-portfolios"
      className="relative bg-[#f0f1f3] text-[#0f1a2c] overflow-clip pt-[60px] pb-[60px]"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
    >
      {/* Background blurs */}
      <div className="absolute -left-36 -top-24 w-[460px] h-[460px] rounded-full bg-[#dde8f2] blur-[80px] opacity-60 pointer-events-none z-0" />
      <div className="absolute -right-44 top-[520px] w-[560px] h-[560px] rounded-full bg-[#e4eef8] blur-[80px] opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-4">
        {/* ===== HEADER ===== */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[760px] mx-auto"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase text-[#1596c9] bg-[#e3f4fc] border border-[#bfe5f6] px-3.5 py-1.5 rounded-full">
            Client Portfolios
          </span>
          <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.15] font-extrabold mt-4.5 mb-3 tracking-[-0.02em]">
            Real brands.{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Real growth.
            </span>
          </h2>
          <p className="text-[#5b6474] text-[15px] leading-[1.6]">
            From D2C, real estate and cafés to wellness, healthcare, orthodontics and infrastructure: the strategy, creative and numbers behind the brands we partner with.
          </p>
        </motion.header>

        {/* ===== RING CAROUSEL ===== */}
        <div className="mt-6">
          <ClientRingCarousel />
        </div>

        {/* ===== EXPLORE OUR PORTFOLIO CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 sm:mt-10"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 bg-[#0a8af0] text-white font-bold text-[14.5px] no-underline px-7 py-4 rounded-full shadow-[0_14px_30px_-10px_rgba(10,138,240,.6)] hover:shadow-[0_20px_36px_-12px_rgba(10,138,240,.7)] transition"
          >
            Explore Our Portfolio
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPortfoliosSection;