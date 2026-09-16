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

// //   // ===== DYNAMIC HEIGHT - REDUCED BOTTOM =====
// //   const getContainerHeight = () => {
// //     if (activeIndex === 0) return '460px';
// //     if (activeIndex === 1) return '500px';
// //     if (activeIndex === 2) return '540px';
// //     if (activeIndex === 3) return '500px';
// //     if (activeIndex === 4) return '460px';
// //     return '540px';
// //   };

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative py-4 lg:py-6 bg-[#0a0a1a] overflow-hidden flex items-center justify-center"
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

// //           {/* Right Side - Cards */}
// //           <div 
// //             className="relative w-full transition-all duration-500 ease-in-out overflow-hidden flex items-start justify-center pt-2"
// //             style={{ 
// //               minHeight: getContainerHeight(),
// //               height: 'auto'
// //             }}
// //           >
// //             {processSteps.map((step, idx) => {
// //               const isActive = idx === activeIndex;
// //               const isPast = idx < activeIndex;
// //               const isFuture = idx > activeIndex;

// //               // ===== CARD DECK EFFECT =====
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
// //                 yOffset = 40 + stepsDown * 26;
// //                 rotate = -2 - stepsDown * 1.2;
// //                 scale = 0.95 - stepsDown * 0.015;
// //                 opacity = 0.85 - stepsDown * 0.06;
// //               } else {
// //                 const stepsDown = idx - activeIndex;
// //                 yOffset = 72 + stepsDown * 20;
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
// //                     className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-lg ${
// //                       isActive
// //                         ? 'bg-[#ffffff] border-[#01adf0]/50 shadow-2xl shadow-[#01adf0]/20 ring-1 ring-[#01adf0]/20'
// //                         : isPast
// //                         ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
// //                         : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
// //                     }`}
// //                   >
// //                     {/* Header */}
// //                     <div className="flex items-center justify-between mb-2">
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
// //                         className={`text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 ${
// //                           isActive ? 'text-gray-900' : isPast ? 'text-gray-600' : 'text-gray-400'
// //                         }`}
// //                       >
// //                         {step.title}
// //                       </h3>
// //                     </div>

// //                     {/* Image */}
// //                     {(isActive || isPast) && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0 }}
// //                         animate={{ opacity: 1, height: 'auto' }}
// //                         exit={{ opacity: 0, height: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                       >
// //                         <div className="rounded-xl overflow-hidden mb-2 mt-1 border border-gray-200">
// //                           <img
// //                             src={step.image}
// //                             alt={step.title}
// //                             className="w-full h-44 sm:h-52 object-cover"
// //                           />
// //                         </div>
// //                       </motion.div>
// //                     )}

// //                     {/* Description */}
// //                     <AnimatePresence mode="wait">
// //                       {isActive && (
// //                         <motion.div
// //                           initial={{ opacity: 0, height: 0 }}
// //                           animate={{ opacity: 1, height: 'auto' }}
// //                           exit={{ opacity: 0, height: 0 }}
// //                           transition={{ duration: 0.3, delay: 0.1 }}
// //                         >
// //                           <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2 border-t border-gray-200">
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

//   // ===== DYNAMIC HEIGHT - REDUCED BOTTOM =====
//   const getContainerHeight = () => {
//     if (activeIndex === 0) return '460px';
//     if (activeIndex === 1) return '500px';
//     if (activeIndex === 2) return '540px';
//     if (activeIndex === 3) return '500px';
//     if (activeIndex === 4) return '460px';
//     return '540px';
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-4 lg:py-6 bg-[#0a0a1a] overflow-hidden flex items-center justify-center"
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
//             {/* Badge */}
//             <span className="sec-badge w-fit mb-3">
//               How We Work
//             </span>

//             {/* Heading (h2) */}
//             <h2 className="sec-h2 sec-text-light mb-4 leading-tight">
//               Our 5-Step <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
//             </h2>

//             {/* Paragraph */}
//             <p className="sec-p sec-text-light-soft leading-relaxed mb-6 max-w-lg">
//               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
//             </p>

//             {/* CTA Button */}
//             <div>
//               <a
//                 href="https://getwebindia.com/about"
//                 className="sec-btn"
//               >
//                 Know More About Us
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

//           {/* Right Side - Cards */}
//           <div 
//             className="relative w-full transition-all duration-500 ease-in-out overflow-hidden flex items-start justify-center pt-2"
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
//                 yOffset = 40 + stepsDown * 26;
//                 rotate = -2 - stepsDown * 1.2;
//                 scale = 0.95 - stepsDown * 0.015;
//                 opacity = 0.85 - stepsDown * 0.06;
//               } else {
//                 const stepsDown = idx - activeIndex;
//                 yOffset = 72 + stepsDown * 20;
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
//                     className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-lg ${
//                       isActive
//                         ? 'bg-[#ffffff] border-[#01adf0]/50 shadow-2xl shadow-[#01adf0]/20 ring-1 ring-[#01adf0]/20'
//                         : isPast
//                         ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
//                         : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
//                     }`}
//                   >
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-2">
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
                      
//                       {/* Title (h3) */}
//                       <h3
//                         className={`sec-h3 transition-all duration-300 ${
//                           isActive ? 'sec-text-dark' : isPast ? 'sec-text-dark-soft' : 'sec-text-muted'
//                         }`}
//                       >
//                         {step.title}
//                       </h3>
//                     </div>

//                     {/* Image */}
//                     {(isActive || isPast) && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="rounded-xl overflow-hidden mb-2 mt-1 border border-gray-200">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="w-full h-44 sm:h-52 object-cover"
//                           />
//                         </div>
//                       </motion.div>
//                     )}

//                     {/* Description (p) */}
//                     <AnimatePresence mode="wait">
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3, delay: 0.1 }}
//                         >
//                           <p className="sec-p sec-text-dark-soft leading-relaxed pt-2 border-t border-gray-200">
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

//   // ===== DYNAMIC HEIGHT =====
//   const getContainerHeight = () => {
//     if (activeIndex === 0) return '460px';
//     if (activeIndex === 1) return '500px';
//     if (activeIndex === 2) return '540px';
//     if (activeIndex === 3) return '500px';
//     if (activeIndex === 4) return '460px';
//     return '540px';
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-4 lg:py-6 bg-[#0a0a1a] overflow-hidden flex items-center justify-center"
//     >
//       {/* Background Lights — #008df1 + #005b8f */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#008df1]/10 blur-[120px]" />
//         <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#005b8f]/15 blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
//           {/* Left Side - Sticky Content */}
//           <div className="lg:sticky lg:top-20 flex flex-col">
//             {/* Badge */}
//             <span className="sec-badge w-fit mb-3">
//               How We Work
//             </span>

//             {/* Heading — #00c6fb highlighted (solid) */}
//             <h2 className="sec-h2 sec-text-light mb-4 leading-tight">
//               Our 5-Step <span style={{ color: '#00c6fb' }}>Workflow</span>
//             </h2>

//             {/* Paragraph */}
//             <p className="sec-p sec-text-light-soft leading-relaxed mb-6 max-w-lg">
//               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
//             </p>

//             {/* CTA Button — #008df1 */}
//             <div>
//               <a
//                 href="https://getwebindia.com/about"
//                 className="inline-flex items-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#008df1]/30 transition-all duration-300"
//               >
//                 Know More About Us
//                 <ChevronRight className="h-4 w-4" />
//               </a>
//             </div>

//             {/* Steps Dots — #008df1 active */}
//             <div className="mt-6 flex items-center gap-2">
//               {processSteps.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveIndex(idx)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     idx === activeIndex
//                       ? 'w-10 bg-[#008df1]'
//                       : 'w-3 bg-white/20 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Step ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Cards */}
//           <div 
//             className="relative w-full transition-all duration-500 ease-in-out overflow-hidden flex items-start justify-center pt-2"
//             style={{ 
//               minHeight: getContainerHeight(),
//               height: 'auto'
//             }}
//           >
//             {processSteps.map((step, idx) => {
//               const isActive = idx === activeIndex;
//               const isPast = idx < activeIndex;

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
//                 yOffset = 40 + stepsDown * 26;
//                 rotate = -2 - stepsDown * 1.2;
//                 scale = 0.95 - stepsDown * 0.015;
//                 opacity = 0.85 - stepsDown * 0.06;
//               } else {
//                 const stepsDown = idx - activeIndex;
//                 yOffset = 72 + stepsDown * 20;
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
//                     className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-lg ${
//                       isActive
//                         ? 'bg-[#ffffff] border-[#008df1]/50 shadow-2xl shadow-[#008df1]/20 ring-1 ring-[#008df1]/20'
//                         : isPast
//                         ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
//                         : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
//                     }`}
//                   >
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-2">
//                       <span
//                         className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${
//                           isActive
//                             ? 'bg-[#00c6fb] bg-clip-text text-transparent'
//                             : isPast
//                             ? 'text-[#008df1]/50'
//                             : 'text-gray-400'
//                         }`}
//                       >
//                         {step.number}
//                       </span>
                      
//                       {/* Title (h3) */}
//                       <h3
//                         className={`sec-h3 transition-all duration-300 ${
//                           isActive ? 'sec-text-dark' : isPast ? 'sec-text-dark-soft' : 'sec-text-muted'
//                         }`}
//                       >
//                         {step.title}
//                       </h3>
//                     </div>

//                     {/* Image */}
//                     {(isActive || isPast) && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="rounded-xl overflow-hidden mb-2 mt-1 border border-gray-200">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="w-full h-44 sm:h-52 object-cover"
//                           />
//                         </div>
//                       </motion.div>
//                     )}

//                     {/* Description (p) */}
//                     <AnimatePresence mode="wait">
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3, delay: 0.1 }}
//                         >
//                           <p className="sec-p sec-text-dark-soft leading-relaxed pt-2 border-t border-gray-200">
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

//   // ===== DYNAMIC HEIGHT =====
//   const getContainerHeight = () => {
//     if (activeIndex === 0) return '460px';
//     if (activeIndex === 1) return '500px';
//     if (activeIndex === 2) return '540px';
//     if (activeIndex === 3) return '500px';
//     if (activeIndex === 4) return '460px';
//     return '540px';
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-4 lg:py-6 bg-[#0a0a1a] overflow-hidden flex items-center justify-center"
//     >
//       {/* Background Lights — #008df1 + #005b8f */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#008df1]/10 blur-[120px]" />
//         <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#005b8f]/15 blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
//           {/* Left Side - Sticky Content */}
//           <div className="lg:sticky lg:top-20 flex flex-col">
//             {/* Badge */}
//             <span className="sec-badge w-fit mb-3">
//               How We Work
//             </span>

//             {/* Heading — #00c6fb highlighted (solid) */}
//             <h2 className="sec-h2 sec-text-light mb-4 leading-tight">
//               Our 5-Step <span style={{ color: '#00c6fb' }}>Workflow</span>
//             </h2>

//             {/* Paragraph */}
//             <p className="sec-p sec-text-light-soft leading-relaxed mb-6 max-w-lg">
//               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
//             </p>

//             {/* CTA Button — #008df1 */}
//             <div>
//               <a
//                 href="https://getwebindia.com/about"
//                 className="inline-flex items-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#008df1]/30 transition-all duration-300"
//               >
//                 Know More About Us
//                 {/* 👇 Arrow animation EXACT HeroSection jaisi */}
//                 <motion.span
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ChevronRight className="h-4 w-4" />
//                 </motion.span>
//               </a>
//             </div>

//             {/* Steps Dots — #008df1 active */}
//             <div className="mt-6 flex items-center gap-2">
//               {processSteps.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveIndex(idx)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     idx === activeIndex
//                       ? 'w-10 bg-[#008df1]'
//                       : 'w-3 bg-white/20 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Step ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Cards */}
//           <div 
//             className="relative w-full transition-all duration-500 ease-in-out overflow-hidden flex items-start justify-center pt-2"
//             style={{ 
//               minHeight: getContainerHeight(),
//               height: 'auto'
//             }}
//           >
//             {processSteps.map((step, idx) => {
//               const isActive = idx === activeIndex;
//               const isPast = idx < activeIndex;

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
//                 yOffset = 40 + stepsDown * 26;
//                 rotate = -2 - stepsDown * 1.2;
//                 scale = 0.95 - stepsDown * 0.015;
//                 opacity = 0.85 - stepsDown * 0.06;
//               } else {
//                 const stepsDown = idx - activeIndex;
//                 yOffset = 72 + stepsDown * 20;
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
//                     className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-lg ${
//                       isActive
//                         ? 'bg-[#ffffff] border-[#008df1]/50 shadow-2xl shadow-[#008df1]/20 ring-1 ring-[#008df1]/20'
//                         : isPast
//                         ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
//                         : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
//                     }`}
//                   >
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-2">
//                       <span
//                         className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${
//                           isActive
//                             ? 'bg-[#00c6fb] bg-clip-text text-transparent'
//                             : isPast
//                             ? 'text-[#008df1]/50'
//                             : 'text-gray-400'
//                         }`}
//                       >
//                         {step.number}
//                       </span>
                      
//                       {/* Title (h3) */}
//                       <h3
//                         className={`sec-h3 transition-all duration-300 ${
//                           isActive ? 'sec-text-dark' : isPast ? 'sec-text-dark-soft' : 'sec-text-muted'
//                         }`}
//                       >
//                         {step.title}
//                       </h3>
//                     </div>

//                     {/* Image */}
//                     {(isActive || isPast) && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="rounded-xl overflow-hidden mb-2 mt-1 border border-gray-200">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="w-full h-44 sm:h-52 object-cover"
//                           />
//                         </div>
//                       </motion.div>
//                     )}

//                     {/* Description (p) */}
//                     <AnimatePresence mode="wait">
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3, delay: 0.1 }}
//                         >
//                           <p className="sec-p sec-text-dark-soft leading-relaxed pt-2 border-t border-gray-200">
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




// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight } from 'lucide-react'; // 👈 ChevronRight ki jagah ArrowRight

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

//   // ===== DYNAMIC HEIGHT =====
//   const getContainerHeight = () => {
//     if (activeIndex === 0) return '460px';
//     if (activeIndex === 1) return '500px';
//     if (activeIndex === 2) return '540px';
//     if (activeIndex === 3) return '500px';
//     if (activeIndex === 4) return '460px';
//     return '540px';
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-4 lg:py-6 bg-[#0a0a1a] overflow-hidden flex items-center justify-center"
//     >
//       {/* Background Lights — #008df1 + #005b8f */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#008df1]/10 blur-[120px]" />
//         <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#005b8f]/15 blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
//           {/* Left Side - Sticky Content */}
//           <div className="lg:sticky lg:top-20 flex flex-col">
//             {/* Badge */}
//             <span className="sec-badge w-fit mb-3">
//               How We Work
//             </span>

//             {/* Heading — #00c6fb highlighted (solid) */}
//             <h2 className="sec-h2 sec-text-light mb-4 leading-tight">
//               Our 5-Step <span style={{ color: '#00c6fb' }}>Workflow</span>
//             </h2>

//             {/* Paragraph */}
//             <p className="sec-p sec-text-light-soft leading-relaxed mb-6 max-w-lg">
//               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
//             </p>

//             {/* CTA Button — #008df1 — Arrow EXACT HeroSection jaisa */}
//             <div>
//               <motion.a
//                 href="https://getwebindia.com/about"
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 15px 30px rgba(0,141,241,0.4)",
//                   y: -3
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-white overflow-hidden bg-[#008df1] hover:bg-[#006fa6] transition-all duration-300 text-sm shadow-lg shadow-[#008df1]/30"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Know More About Us
//                   <motion.span
//                     animate={{ x: [0, 6, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </motion.span>
//                 </span>
//               </motion.a>
//             </div>

//             {/* Steps Dots — #008df1 active */}
//             <div className="mt-6 flex items-center gap-2">
//               {processSteps.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveIndex(idx)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     idx === activeIndex
//                       ? 'w-10 bg-[#008df1]'
//                       : 'w-3 bg-white/20 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Step ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Cards */}
//           <div 
//             className="relative w-full transition-all duration-500 ease-in-out overflow-hidden flex items-start justify-center pt-2"
//             style={{ 
//               minHeight: getContainerHeight(),
//               height: 'auto'
//             }}
//           >
//             {processSteps.map((step, idx) => {
//               const isActive = idx === activeIndex;
//               const isPast = idx < activeIndex;

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
//                 yOffset = 40 + stepsDown * 26;
//                 rotate = -2 - stepsDown * 1.2;
//                 scale = 0.95 - stepsDown * 0.015;
//                 opacity = 0.85 - stepsDown * 0.06;
//               } else {
//                 const stepsDown = idx - activeIndex;
//                 yOffset = 72 + stepsDown * 20;
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
//                     className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-lg ${
//                       isActive
//                         ? 'bg-[#ffffff] border-[#008df1]/50 shadow-2xl shadow-[#008df1]/20 ring-1 ring-[#008df1]/20'
//                         : isPast
//                         ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
//                         : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
//                     }`}
//                   >
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-2">
//                       <span
//                         className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${
//                           isActive
//                             ? 'bg-[#00c6fb] bg-clip-text text-transparent'
//                             : isPast
//                             ? 'text-[#008df1]/50'
//                             : 'text-gray-400'
//                         }`}
//                       >
//                         {step.number}
//                       </span>
                      
//                       {/* Title (h3) */}
//                       <h3
//                         className={`sec-h3 transition-all duration-300 ${
//                           isActive ? 'sec-text-dark' : isPast ? 'sec-text-dark-soft' : 'sec-text-muted'
//                         }`}
//                       >
//                         {step.title}
//                       </h3>
//                     </div>

//                     {/* Image */}
//                     {(isActive || isPast) && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="rounded-xl overflow-hidden mb-2 mt-1 border border-gray-200">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="w-full h-44 sm:h-52 object-cover"
//                           />
//                         </div>
//                       </motion.div>
//                     )}

//                     {/* Description (p) */}
//                     <AnimatePresence mode="wait">
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3, delay: 0.1 }}
//                         >
//                           <p className="sec-p sec-text-dark-soft leading-relaxed pt-2 border-t border-gray-200">
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










// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

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

//   // ===== DYNAMIC HEIGHT =====
//   const getContainerHeight = () => {
//     if (activeIndex === 0) return '460px';
//     if (activeIndex === 1) return '500px';
//     if (activeIndex === 2) return '540px';
//     if (activeIndex === 3) return '500px';
//     if (activeIndex === 4) return '460px';
//     return '540px';
//   };

//   return (
//     // 👇 Section Background — TeamSection jaisa SAME gradient
//     <section
//       ref={sectionRef}
//       className="relative py-4 lg:py-6 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a2a] to-[#0a0a1a] overflow-hidden flex items-center justify-center"
//     >
//       {/* Background Lights — TeamSection jaisa SAME colors */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#008df1]/10 blur-3xl"
//           animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#005b8f]/15 blur-3xl"
//           animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
//           {/* Left Side - Sticky Content */}
//           <div className="lg:sticky lg:top-20 flex flex-col">
//             {/* Badge */}
//             <span className="sec-badge w-fit mb-3">
//               How We Work
//             </span>

//             {/* Heading */}
//             <h2 className="sec-h2 sec-text-light mb-4 leading-tight">
//               Our 5-Step <span style={{ color: '#00c6fb' }}>Workflow</span>
//             </h2>

//             {/* Paragraph */}
//             <p className="sec-p sec-text-light-soft leading-relaxed mb-6 max-w-lg">
//               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
//             </p>

//             {/* CTA Button */}
//             <div>
//               <motion.a
//                 href="https://getwebindia.com/about"
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 15px 30px rgba(0,141,241,0.4)",
//                   y: -3
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-white overflow-hidden bg-[#008df1] hover:bg-[#006fa6] transition-all duration-300 text-sm shadow-lg shadow-[#008df1]/30"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Know More About Us
//                   <motion.span
//                     animate={{ x: [0, 6, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </motion.span>
//                 </span>
//               </motion.a>
//             </div>

//             {/* Steps Dots */}
//             <div className="mt-6 flex items-center gap-2">
//               {processSteps.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveIndex(idx)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     idx === activeIndex
//                       ? 'w-10 bg-[#008df1]'
//                       : 'w-3 bg-white/20 hover:bg-[#00c6fb]/60'
//                   }`}
//                   aria-label={`Step ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Cards */}
//           <div 
//             className="relative w-full transition-all duration-500 ease-in-out overflow-hidden flex items-start justify-center pt-2"
//             style={{ 
//               minHeight: getContainerHeight(),
//               height: 'auto'
//             }}
//           >
//             {processSteps.map((step, idx) => {
//               const isActive = idx === activeIndex;
//               const isPast = idx < activeIndex;

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
//                 yOffset = 40 + stepsDown * 26;
//                 rotate = -2 - stepsDown * 1.2;
//                 scale = 0.95 - stepsDown * 0.015;
//                 opacity = 0.85 - stepsDown * 0.06;
//               } else {
//                 const stepsDown = idx - activeIndex;
//                 yOffset = 72 + stepsDown * 20;
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
//                     className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-lg ${
//                       isActive
//                         ? 'bg-[#ffffff] border-[#008df1]/50 shadow-2xl shadow-[#008df1]/20 ring-1 ring-[#008df1]/20'
//                         : isPast
//                         ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
//                         : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
//                     }`}
//                   >
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-2">
//                       <span
//                         className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${
//                           isActive
//                             ? 'bg-[#00c6fb] bg-clip-text text-transparent'
//                             : isPast
//                             ? 'text-[#008df1]/50'
//                             : 'text-gray-400'
//                         }`}
//                       >
//                         {step.number}
//                       </span>
                      
//                       <h3
//                         className={`sec-h3 transition-all duration-300 ${
//                           isActive ? 'sec-text-dark' : isPast ? 'sec-text-dark-soft' : 'sec-text-muted'
//                         }`}
//                       >
//                         {step.title}
//                       </h3>
//                     </div>

//                     {/* Image */}
//                     {(isActive || isPast) && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="rounded-xl overflow-hidden mb-2 mt-1 border border-gray-200">
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="w-full h-44 sm:h-52 object-cover"
//                           />
//                         </div>
//                       </motion.div>
//                     )}

//                     {/* Description */}
//                     <AnimatePresence mode="wait">
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3, delay: 0.1 }}
//                         >
//                           <p className="sec-p sec-text-dark-soft leading-relaxed pt-2 border-t border-gray-200">
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







// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

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

//   // ===== DYNAMIC HEIGHT =====
//   const getContainerHeight = () => {
//     if (activeIndex === 0) return '460px';
//     if (activeIndex === 1) return '500px';
//     if (activeIndex === 2) return '540px';
//     if (activeIndex === 3) return '500px';
//     if (activeIndex === 4) return '460px';
//     return '540px';
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-4 lg:py-6 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a2a] to-[#0a0a1a] overflow-hidden flex items-center justify-center"
//     >
//       {/* Background Lights */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#008df1]/10 blur-3xl"
//           animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#005b8f]/15 blur-3xl"
//           animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
//           {/* Left Side - Sticky Content */}
//           <div className="lg:sticky lg:top-20 flex flex-col">
//             {/* Badge */}
//             <span className="sec-badge w-fit mb-3">
//               How We Work
//             </span>

//             {/* Heading */}
//             <h2 className="sec-h2 sec-text-light mb-4 leading-tight">
//               Our 5-Step <span style={{ color: '#00c6fb' }}>Workflow</span>
//             </h2>

//             {/* Paragraph */}
//             <p className="sec-p sec-text-light-soft leading-relaxed mb-6 max-w-lg">
//               At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
//             </p>

//             {/* CTA Button */}
//             <div>
//               <motion.a
//                 href="https://getwebindia.com/about"
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 15px 30px rgba(0,141,241,0.4)",
//                   y: -3
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-white overflow-hidden bg-[#008df1] hover:bg-[#006fa6] transition-all duration-300 text-sm shadow-lg shadow-[#008df1]/30"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Know More About Us
//                   <motion.span
//                     animate={{ x: [0, 6, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </motion.span>
//                 </span>
//               </motion.a>
//             </div>
//           </div>

//           {/* Right Side - Cards */}
//           <div className="relative w-full">
            
//             {/* ===== Step Counter (Top-center of card area) ===== */}
//             <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-30">
//               <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-semibold">
//                 <span className="text-[#00c6fb]">
//                   {String(activeIndex + 1).padStart(2, '0')}
//                 </span>
//                 <span className="text-white/50"> / {String(processSteps.length).padStart(2, '0')}</span>
//               </span>
//             </div>

//             {/* ===== CARDS DECK ===== */}
//             <div 
//               className="relative w-full transition-all duration-500 ease-in-out overflow-hidden flex items-start justify-center pt-2"
//               style={{ 
//                 minHeight: getContainerHeight(),
//                 height: 'auto'
//               }}
//             >
//               {processSteps.map((step, idx) => {
//                 const isActive = idx === activeIndex;
//                 const isPast = idx < activeIndex;

//                 // ===== CARD DECK EFFECT =====
//                 let yOffset = 0;
//                 let rotate = 0;
//                 let scale = 1;
//                 let opacity = 1;

//                 if (isActive) {
//                   yOffset = 0;
//                   rotate = 0;
//                   scale = 1;
//                   opacity = 1;
//                 } else if (isPast) {
//                   const stepsDown = idx - activeIndex;
//                   yOffset = 40 + stepsDown * 26;
//                   rotate = -2 - stepsDown * 1.2;
//                   scale = 0.95 - stepsDown * 0.015;
//                   opacity = 0.85 - stepsDown * 0.06;
//                 } else {
//                   const stepsDown = idx - activeIndex;
//                   yOffset = 72 + stepsDown * 20;
//                   rotate = 1 + stepsDown * 1.2;
//                   scale = 0.90 - stepsDown * 0.015;
//                   opacity = 0.45 - stepsDown * 0.05;
//                 }

//                 let zIndex = 50 - Math.abs(idx - activeIndex);

//                 return (
//                   <motion.div
//                     key={step.number}
//                     className="absolute w-full max-w-lg cursor-pointer"
//                     style={{
//                       top: 0,
//                       zIndex: zIndex,
//                     }}
//                     initial={false}
//                     animate={{
//                       y: yOffset,
//                       rotate: rotate,
//                       scale: scale,
//                       opacity: opacity,
//                     }}
//                     transition={{ 
//                       duration: 0.5, 
//                       ease: [0.25, 0.1, 0.25, 1] 
//                     }}
//                     onClick={() => setActiveIndex(idx)}
//                   >
//                     <div
//                       className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 shadow-lg ${
//                         isActive
//                           ? 'bg-[#ffffff] border-[#008df1]/50 shadow-2xl shadow-[#008df1]/20 ring-1 ring-[#008df1]/20'
//                           : isPast
//                           ? 'bg-[#ffffff] border-gray-200/50 shadow-md'
//                           : 'bg-[#ffffff] border-gray-200/30 shadow-sm'
//                       }`}
//                     >
//                       {/* Header */}
//                       <div className="flex items-center justify-between mb-2">
//                         <span
//                           className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${
//                             isActive
//                               ? 'bg-[#00c6fb] bg-clip-text text-transparent'
//                               : isPast
//                               ? 'text-[#008df1]/50'
//                               : 'text-gray-400'
//                           }`}
//                         >
//                           {step.number}
//                         </span>
                        
//                         <h3
//                           className={`sec-h3 transition-all duration-300 ${
//                             isActive ? 'sec-text-dark' : isPast ? 'sec-text-dark-soft' : 'sec-text-muted'
//                           }`}
//                         >
//                           {step.title}
//                         </h3>
//                       </div>

//                       {/* Image */}
//                       {(isActive || isPast) && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <div className="rounded-2xl overflow-hidden mb-2 mt-1 border border-gray-200">
//                             <img
//                               src={step.image}
//                               alt={step.title}
//                               className="w-full h-44 sm:h-52 object-cover"
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Description */}
//                       <AnimatePresence mode="wait">
//                         {isActive && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3, delay: 0.1 }}
//                           >
//                             <p className="sec-p sec-text-dark-soft leading-relaxed pt-2 border-t border-gray-200">
//                               {step.description}
//                             </p>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWeWorkSection;





import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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

  // ===== DYNAMIC HEIGHT =====
  const getContainerHeight = () => {
    if (activeIndex === 0) return '460px';
    if (activeIndex === 1) return '500px';
    if (activeIndex === 2) return '540px';
    if (activeIndex === 3) return '500px';
    if (activeIndex === 4) return '460px';
    return '540px';
  };

  // ===== ARROW NAVIGATION HANDLERS =====
  const goToPrev = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (activeIndex < processSteps.length - 1) setActiveIndex((prev) => prev + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-4 lg:py-6 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a2a] to-[#0a0a1a] overflow-hidden flex items-center justify-center"
    >
      {/* Background Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#008df1]/10 blur-3xl"
          animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#005b8f]/15 blur-3xl"
          animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Sticky Content */}
          <div className="lg:sticky lg:top-20 flex flex-col">
            {/* Badge */}
            <span className="sec-badge w-fit mb-3">
              How We Work
            </span>

            {/* Heading */}
            <h2 className="sec-h2 sec-text-light mb-4 leading-tight">
              Our 5-Step <span style={{ color: '#00c6fb' }}>Workflow</span>
            </h2>

            {/* Paragraph */}
            <p className="sec-p sec-text-light-soft leading-relaxed mb-6 max-w-lg">
              At Get Web India, we follow a structured and result-driven process to deliver powerful digital solutions that help your business grow online.
            </p>

            {/* CTA Button */}
            <div>
              <motion.a
                href="https://getwebindia.com/about"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(0,141,241,0.4)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-white overflow-hidden bg-[#008df1] hover:bg-[#006fa6] transition-all duration-300 text-sm shadow-lg shadow-[#008df1]/30"
              >
                <span className="relative z-10 flex items-center">
                  Know More About Us
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </span>
              </motion.a>
            </div>

            {/* ===== ARROWS (Below the button) ===== */}
            <div className="flex items-center gap-3 mt-5">
              {/* Left Arrow */}
              <motion.button
                onClick={goToPrev}
                disabled={activeIndex === 0}
                whileHover={activeIndex > 0 ? { scale: 1.1 } : {}}
                whileTap={activeIndex > 0 ? { scale: 0.95 } : {}}
                className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 ${
                  activeIndex === 0
                    ? 'border-white/10 bg-white/5 text-white/20 cursor-not-allowed'
                    : 'border-[#008df1]/50 bg-[#008df1]/10 text-[#00c6fb] hover:bg-[#008df1] hover:text-white hover:border-[#008df1] cursor-pointer shadow-lg shadow-[#008df1]/20'
                }`}
                aria-label="Previous step"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.button>

              {/* Right Arrow */}
              <motion.button
                onClick={goToNext}
                disabled={activeIndex === processSteps.length - 1}
                whileHover={activeIndex < processSteps.length - 1 ? { scale: 1.1 } : {}}
                whileTap={activeIndex < processSteps.length - 1 ? { scale: 0.95 } : {}}
                className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 ${
                  activeIndex === processSteps.length - 1
                    ? 'border-white/10 bg-white/5 text-white/20 cursor-not-allowed'
                    : 'border-[#008df1]/50 bg-[#008df1]/10 text-[#00c6fb] hover:bg-[#008df1] hover:text-white hover:border-[#008df1] cursor-pointer shadow-lg shadow-[#008df1]/20'
                }`}
                aria-label="Next step"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.button>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="relative w-full">
            
            {/* ===== Step Counter (Top-center) ===== */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-30">
              <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-semibold">
                <span className="text-[#00c6fb]">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-white/50"> / {String(processSteps.length).padStart(2, '0')}</span>
              </span>
            </div>

            {/* ===== CARDS DECK ===== */}
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

                // ===== CARD DECK EFFECT =====
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
                  yOffset = 40 + stepsDown * 26;
                  rotate = -2 - stepsDown * 1.2;
                  scale = 0.95 - stepsDown * 0.015;
                  opacity = 0.85 - stepsDown * 0.06;
                } else {
                  const stepsDown = idx - activeIndex;
                  yOffset = 72 + stepsDown * 20;
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
                      className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 shadow-lg ${
                        isActive
                          ? 'bg-[#ffffff] border-[#008df1]/50 shadow-2xl shadow-[#008df1]/20 ring-1 ring-[#008df1]/20'
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
                              ? 'bg-[#00c6fb] bg-clip-text text-transparent'
                              : isPast
                              ? 'text-[#008df1]/50'
                              : 'text-gray-400'
                          }`}
                        >
                          {step.number}
                        </span>
                        
                        <h3
                          className={`sec-h3 transition-all duration-300 ${
                            isActive ? 'sec-text-dark' : isPast ? 'sec-text-dark-soft' : 'sec-text-muted'
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      {/* Image */}
                      {(isActive || isPast) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="rounded-2xl overflow-hidden mb-2 mt-1 border border-gray-200">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-44 sm:h-52 object-cover"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Description */}
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <p className="sec-p sec-text-dark-soft leading-relaxed pt-2 border-t border-gray-200">
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
      </div>
    </section>
  );
};

export default HowWeWorkSection;