// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const ProjectSection = () => {
// //   // Data mapped from your Elementor HTML
// //   const projects = [
// //     {
// //       id: 1,
// //       category: 'Digital Marketing',
// //       title: 'Brand Identity Design',
// //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/Brand-Identity-Design.webp',
// //       animation: 'fadeLeft',
// //     },
// //     {
// //       id: 2,
// //       category: 'WordPress Development',
// //       title: 'SparkleClicks Agency',
// //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/worpress-work-1024x683.webp',
// //       animation: 'fadeUp',
// //     },
// //     {
// //       id: 3,
// //       category: 'Digital Marketing',
// //       title: 'Brand Identity Design',
// //       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/project-9.webp',
// //       animation: 'fadeRight',
// //     },
// //   ];

// //   // Framer Motion Variants for entrance animations
// //   const fadeLeft = {
// //     hidden: { opacity: 0, x: -50 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// //   };

// //   const fadeRight = {
// //     hidden: { opacity: 0, x: 50 },
// //     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// //   };

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// //   };

// //   const getAnimation = (anim) => {
// //     if (anim === 'fadeLeft') return fadeLeft;
// //     if (anim === 'fadeRight') return fadeRight;
// //     return fadeUp;
// //   };

// //   return (
// //     // ✅ Background color changed to match ServicesSection (bg-[#f1f1f1])
// //     <section className="relative py-16 md:py-24 bg-[#f1f1f1] overflow-hidden">
      
// //       {/* Animated Background Elements (Same as ServicesSection) */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-0 left-1/4 w-40 h-40 bg-[#01ADF0]/10 rounded-full blur-3xl"
// //           animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.2, 0.8, 1] }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#00C6FB]/10 rounded-full blur-3xl"
// //           animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// //         {/* ===== HEADER SECTION ===== */}
// //         <motion.div 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={fadeUp}
// //           className="text-center mb-12 md:mb-16"
// //         >
// //           {/* Badge (Same style as ServicesSection) */}
// //           <motion.span 
// //             className="inline-block px-4 py-1.5 mb-3 text-sm font-semibold tracking-wider text-white uppercase bg-[#01ADF0] rounded-full shadow-md"
// //             whileHover={{ scale: 1.05 }}
// //             animate={{ y: [0, -3, 0] }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             Our Projects
// //           </motion.span>

// //           {/* Heading (Dark text + Blue Gradient span, Same as ServicesSection) */}
// //           <motion.h2 
// //             className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020200] max-w-3xl mx-auto leading-tight mt-4"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.15 }}
// //           >
// //             Exploring our{' '}
// //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// //               creative and impactful
// //             </span>
// //           </motion.h2>

// //           {/* Subtitle (Same soft text color as ServicesSection) */}
// //           <motion.p 
// //             className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           >
// //             A showcase of our finest work, delivering excellence across industries.
// //           </motion.p>
// //         </motion.div>

// //         {/* ===== GRID SECTION ===== */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
// //           {projects.map((project, index) => (
// //             <motion.div
// //               key={project.id}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               variants={getAnimation(project.animation)}
// //               // Hover par shadow bhi blue ho jayegi (ServicesSection jaisa feel)
// //               className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 cursor-pointer h-[350px] md:h-[450px]"
// //             >
// //               {/* Image with Zoom on Hover */}
// //               <img
// //                 src={project.image}
// //                 alt={project.title}
// //                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
// //                 loading="lazy"
// //               />

// //               {/* Dark Gradient Overlay for text readability */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

// //               {/* ===== SHINE / GLARE HOVER EFFECT ===== */}
// //               <div 
// //                 className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[20px] z-10 transition-all duration-[600ms] ease-linear bg-white/30 group-hover:h-[250%] group-hover:bg-transparent"
// //                 aria-hidden="true"
// //               />

// //               {/* Top Category Badge (Blue accent matching the theme) */}
// //               <div className="absolute top-4 left-4 z-20">
// //                 <span className="bg-[#01ADF0]/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 shadow-md">
// //                   {project.category}
// //                 </span>
// //               </div>

// //               {/* Bottom Title with Slide Up on Hover + Blue Text on Hover */}
// //               <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
// //                 <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00C6FB] transition-colors duration-300">
// //                   {project.title}
// //                 </h4>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default ProjectSection;








// import React from 'react';
// import { motion } from 'framer-motion';

// const ProjectSection = () => {
//   // Data mapped from your Elementor HTML
//   const projects = [
//     {
//       id: 1,
//       category: 'Digital Marketing',
//       title: 'Brand Identity Design',
//       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/Brand-Identity-Design.webp',
//       animation: 'fadeLeft',
//     },
//     {
//       id: 2,
//       category: 'WordPress Development',
//       title: 'SparkleClicks Agency',
//       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/worpress-work-1024x683.webp',
//       animation: 'fadeUp',
//     },
//     {
//       id: 3,
//       category: 'Digital Marketing',
//       title: 'Brand Identity Design',
//       image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/project-9.webp',
//       animation: 'fadeRight',
//     },
//   ];

//   // Framer Motion Variants for entrance animations
//   const fadeLeft = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
//   };

//   const fadeRight = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   const getAnimation = (anim) => {
//     if (anim === 'fadeLeft') return fadeLeft;
//     if (anim === 'fadeRight') return fadeRight;
//     return fadeUp;
//   };

//   return (
//     <section className="relative py-16 md:py-24 bg-[#f1f1f1] overflow-hidden">
      
//       {/* Animated Background Elements (Same as ServicesSection) */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute top-0 left-1/4 w-40 h-40 bg-[#01ADF0]/10 rounded-full blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#00C6FB]/10 rounded-full blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
//         {/* ===== HEADER SECTION ===== */}
//         <motion.div 
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center mb-12 md:mb-16"
//         >
//           {/* ✅ Badge updated to match ServicesSection exactly */}
//           <motion.span 
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Projects
//           </motion.span>

//           {/* Heading */}
//           <motion.h2 
//             className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020200] max-w-3xl mx-auto leading-tight mt-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.15 }}
//           >
//             Exploring our{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               creative and impactful
//             </span>
//           </motion.h2>

//           {/* Subtitle */}
//           <motion.p 
//             className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             A showcase of our finest work, delivering excellence across industries.
//           </motion.p>
//         </motion.div>

//         {/* ===== GRID SECTION ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={getAnimation(project.animation)}
//               className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 cursor-pointer h-[350px] md:h-[450px]"
//             >
//               {/* Image with Zoom on Hover */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
//                 loading="lazy"
//               />

//               {/* Dark Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

//               {/* ===== SHINE / GLARE HOVER EFFECT ===== */}
//               <div 
//                 className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[20px] z-10 transition-all duration-[600ms] ease-linear bg-white/30 group-hover:h-[250%] group-hover:bg-transparent"
//                 aria-hidden="true"
//               />

//               {/* Top Category Badge */}
//               <div className="absolute top-4 left-4 z-20">
//                 <span className="bg-[#01ADF0]/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 shadow-md">
//                   {project.category}
//                 </span>
//               </div>

//               {/* Bottom Title */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                 <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00C6FB] transition-colors duration-300">
//                   {project.title}
//                 </h4>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProjectSection;







import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProjectSection = () => {
  // Data mapped from your Elementor HTML
  const projects = [
    {
      id: 1,
      category: 'Digital Marketing',
      title: 'Brand Identity Design',
      image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/Brand-Identity-Design.webp',
      animation: 'fadeLeft',
    },
    {
      id: 2,
      category: 'WordPress Development',
      title: 'SparkleClicks Agency',
      image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/worpress-work-1024x683.webp',
      animation: 'fadeUp',
    },
    {
      id: 3,
      category: 'Digital Marketing',
      title: 'Brand Identity Design',
      image: 'https://webgrowinfotech.com/wp-content/uploads/2026/04/project-9.webp',
      animation: 'fadeRight',
    },
  ];

  // Framer Motion Variants for entrance animations
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const getAnimation = (anim) => {
    if (anim === 'fadeLeft') return fadeLeft;
    if (anim === 'fadeRight') return fadeRight;
    return fadeUp;
  };

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f1f1f1] overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-40 h-40 bg-[#01ADF0]/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#00C6FB]/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          {/* Badge */}
          <motion.span 
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Projects
          </motion.span>

          {/* Heading - ServicesSection jaisi classes use ki gayi hain */}
          <motion.h2 
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Exploring our{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              creative and impactful
            </span>
          </motion.h2>

          {/* Subtitle - ServicesSection jaisi classes use ki gayi hain */}
          <motion.p 
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A showcase of our finest work, delivering excellence across industries.
          </motion.p>
        </motion.div>

        {/* ===== GRID SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={getAnimation(project.animation)}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#01ADF0]/20 transition-all duration-500 cursor-pointer h-[350px] md:h-[450px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div 
                className="absolute top-1/2 left-1/2 w-[200%] h-0 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[20px] z-10 transition-all duration-[600ms] ease-linear bg-white/30 group-hover:h-[250%] group-hover:bg-transparent"
                aria-hidden="true"
              />

              <div className="absolute top-4 left-4 z-20">
                <span className="bg-[#01ADF0]/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30 shadow-md">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00C6FB] transition-colors duration-300">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== BOTTOM CTA BUTTON ===== */}
        <motion.div 
          className="text-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/portfolio"
            whileTap={{ scale: 0.95 }}
            className="sec-btn"
          >
            Explore Our Project
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectSection;