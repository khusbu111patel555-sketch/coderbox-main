// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp, X } from 'lucide-react';

// const AboutSection = () => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const videoUrl = "/Your business doesn’t need more noise.It needs the right digital system.From web design & develo.mp4";

//   const openVideo = () => {
//     setIsVideoOpen(true);
//     setIsPlaying(true);
//     setTimeout(() => {
//       if (videoRef.current) {
//         videoRef.current.play();
//       }
//     }, 300);
//   };

//   const closeVideo = () => {
//     setIsVideoOpen(false);
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//     }
//   };

//   // ===== STATS DATA =====
//   const statsData = [
//     {
//       label: 'Years Building',
//       value: '13+',
//       icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
//       bgClass: 'bg-[#006FA6]',
//       valueColor: 'text-[#006FA6]'
//     },
//     {
//       label: 'Ventures Led',
//       value: '03',
//       icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
//       bgClass: 'bg-[#006FA6]',
//       valueColor: 'text-[#006FA6]'
//     },
//     {
//       label: 'Industries',
//       value: '06',
//       icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
//       bgClass: 'bg-[#006FA6]',
//       valueColor: 'text-[#006FA6]'
//     },
//     {
//       label: 'Top Voice',
//       value: 'Yes',
//       icon: <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
//       bgClass: 'bg-[#006FA6]',
//       valueColor: 'text-[#006FA6]'
//     }
//   ];

//   const progressData = [
//     { label: 'Tech Innovation', value: 95, color: '#005B8F' },     
//     { label: 'Team Leadership', value: 100, color: '#005B8F' },   
//     { label: 'Business Strategy', value: 95, color: '#005B8F' }        
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] } }
//   };

//   return (
//     <>
//       <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f5f5f5] overflow-hidden">
        
//         {/* Background Blobs */}
//         <div className="absolute inset-0 pointer-events-none">
//           <motion.div
//             className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
//             animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
//             animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
//             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
//             {/* ===== LEFT COLUMN ===== */}
//             <motion.div
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="max-w-lg"
//             >
//               <motion.span 
//                 className="sec-badge inline-block"
//                 whileHover={{ scale: 1.05 }}
//                 animate={{ y: [0, -3, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               >
//                 Meet Our Founder
//               </motion.span>

//               <motion.h2 
//                 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 Ashwin R. Singh{' '}
//                 <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//                   (Aashu Singh)
//                 </span>
//               </motion.h2>

//               <motion.p 
//                 className="sec-p sec-text-dark-soft mt-1 max-w-md"
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions. With a background in Computer Science and AI, he has spent 13+ years building technology-led businesses.
//               </motion.p>
              
//               <motion.div 
//                 className="space-y-4 mb-6 mt-4 max-w-md"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//               >
//                 {progressData.map((item, index) => (
//                   <motion.div key={index} variants={itemVariants}>
//                     <div className="flex justify-between mb-2">
//                       <span className="sec-h3 text-gray-800 mb-0">{item.label}</span>
//                       <span className="sec-h3 mb-0" style={{ color: item.color }}>{item.value}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//                       <motion.div 
//                         className="h-3 rounded-full"
//                         style={{ backgroundColor: item.color }}
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${item.value}%` }}
//                         transition={{ duration: 1, delay: 0.15 + index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
//                         viewport={{ once: true }}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
              
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 <motion.a
//                   href="/AboutUs"
//                   whileTap={{ scale: 0.95 }}
//                   className="sec-btn"
//                 >
//                   Connect With Ashwin
//                   <motion.span
//                     animate={{ x: [0, 6, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="h-4 w-4" />
//                   </motion.span>
//                 </motion.a>
//               </motion.div>
//             </motion.div>

//             {/* ===== RIGHT COLUMN ===== */}
//             <motion.div
//               initial={{ opacity: 0, x: 15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="space-y-3 w-full"
//             >
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {statsData.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 15 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.35, delay: 0.04 * index }}
//                     viewport={{ once: true }}
//                     whileHover={{ y: -3 }}
//                     className="group bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-lg hover:shadow-[#008df1]/20 border-2 border-transparent hover:border-[#008df1] hover:bg-[#008df1]/5 transition-all duration-300"
//                   >
//                     <div className="flex items-center gap-3">
//                       <motion.div 
//                         className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${item.bgClass} flex items-center justify-center shadow-md`}
//                         whileHover={{ rotate: 6, scale: 1.05 }}
//                       >
//                         {item.icon}
//                       </motion.div>

//                       <div className="min-w-0">
//                         <p className={`sec-h2 mb-0 font-extrabold ${item.valueColor} leading-none`}>
//                           {item.value}
//                         </p>
//                         <h3 className="sec-p text-gray-500 mt-0.5 font-medium">
//                           {item.label}
//                         </h3>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.3 }}
//                 viewport={{ once: true }}
//                 className="relative bg-white rounded-lg p-4 shadow-sm border border-gray-100"
//               >
//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <h3 className="sec-h3 text-gray-900 mb-0.5">Founder's Principles</h3>
//                     <p className="sec-p text-gray-500">Core philosophy</p>
//                   </div>
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 8 }}
//                     className="bg-[#008df1] p-1.5 rounded-lg flex-shrink-0 shadow-md"
//                   >
//                     <Shield className="h-3.5 w-3.5 text-white" />
//                   </motion.div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-2 mb-3">
//                   {[
//                     { icon: Zap, label: 'Think in systems' },
//                     { icon: TrendingUp, label: 'Execute with discipline' }
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="group relative overflow-hidden flex items-center gap-2 bg-gray-50 rounded-md px-2.5 py-2 border border-gray-100 transition-colors"
//                     >
//                       {/* Sliding Gradient Background */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-in-out"></div>
                      
//                       {/* Content */}
//                       <div className="relative z-10 flex items-center gap-2">
//                         <item.icon className="h-3.5 w-3.5 flex-shrink-0 text-[#008df1] group-hover:text-white transition-colors duration-300" />
//                         <span className="sec-p text-gray-700 group-hover:text-white transition-colors duration-300 font-medium">
//                           {item.label}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Video Thumbnail with Stylish Blurred Frame */}
//                 <motion.div
//                   whileHover={{ scale: 1.01 }}
//                   onClick={openVideo}
//                   className="relative rounded-lg overflow-hidden cursor-pointer group/video"
//                 >
//                   <div className="relative w-full aspect-[16/7] overflow-hidden bg-slate-900">
//                     {/* Blurred Background Image */}
//                     <img
//                       src="/founder.jpeg"
//                       alt="Background Blur"
//                       className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60 scale-110"
//                     />
                    
//                     {/* Gradient Overlay for blending */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#005b8f]/80 via-transparent to-[#005b8f]/80"></div>

//                     {/* Sharp Foreground Image */}
//                     <img
//                       src="/founder.jpeg"
//                       alt="Watch Founder's Note"
//                       className="relative z-10 w-full h-full object-contain opacity-90 group-hover/video:opacity-100 transition-all duration-500"
//                     />
                    
//                     {/* Dark Overlay */}
//                     <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-all duration-300 z-20"></div>
                    
//                     {/* Play Button and Text */}
//                     <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
//                       <motion.div
//                         className="w-11 h-11 rounded-full bg-[#008df1] flex items-center justify-center shadow-2xl shadow-[#008df1]/50 relative"
//                         animate={{
//                           boxShadow: [
//                             '0 0 15px rgba(0,141,241,0.4)',
//                             '0 0 35px rgba(0,141,241,0.6)',
//                             '0 0 15px rgba(0,141,241,0.4)'
//                           ],
//                           scale: [1, 1.05, 1]
//                         }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       >
//                         <motion.div
//                           className="absolute inset-0 rounded-full border-2 border-white/40"
//                           animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                         />
//                         <Play className="h-4 w-4 text-white ml-0.5 relative z-10" fill="currentColor" />
//                       </motion.div>
                      
//                       <motion.p 
//                         className="sec-p text-white font-semibold mt-1.5 drop-shadow-lg"
//                         animate={{ y: [0, -2, 0] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       >
//                         Watch
//                       </motion.p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {isVideoOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-3"
//             onClick={closeVideo}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
//               className="relative w-full max-w-3xl bg-black/50 rounded-xl overflow-hidden shadow-2xl shadow-[#008df1]/15 border border-white/10"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={closeVideo}
//                 className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-[#008df1]/80 backdrop-blur-sm p-1.5 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20"
//               >
//                 <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//               </button>

//               <div className="relative aspect-video bg-black">
//                 <video
//                   ref={videoRef}
//                   src={videoUrl}
//                   className="w-full h-full object-contain"
//                   controls
//                   autoPlay
//                   onClick={(e) => e.stopPropagation()}
//                   onPlay={() => setIsPlaying(true)}
//                   onPause={() => setIsPlaying(false)}
//                 />
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent">
//                 <p className="sec-p text-white flex items-center gap-1.5">
//                   <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500 animate-pulse"></span>
//                   Now Playing: Founder's Note
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AboutSection;







import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp, X } from 'lucide-react';

const AboutSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const videoUrl = "/Your business doesn’t need more noise.It needs the right digital system.From web design & develo.mp4";

  const openVideo = () => {
    setIsVideoOpen(true);
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 300);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // ===== STATS DATA =====
  const statsData = [
    {
      label: 'Years Building',
      value: '13+',
      icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
      bgClass: 'bg-[#006FA6]',
      valueColor: 'text-[#006FA6]'
    },
    {
      label: 'Ventures Led',
      value: '03',
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
      bgClass: 'bg-[#006FA6]',
      valueColor: 'text-[#006FA6]'
    },
    {
      label: 'Industries',
      value: '06',
      icon: <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
      bgClass: 'bg-[#006FA6]',
      valueColor: 'text-[#006FA6]'
    },
    {
      label: 'Top Voice',
      value: 'Yes',
      icon: <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />,
      bgClass: 'bg-[#006FA6]',
      valueColor: 'text-[#006FA6]'
    }
  ];

  const progressData = [
    { label: 'Tech Innovation', value: 95, color: '#005B8F' },     
    { label: 'Team Leadership', value: 100, color: '#005B8F' },   
    { label: 'Business Strategy', value: 95, color: '#005B8F' }        
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] } }
  };

  return (
    <>
      <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f5f5f5] overflow-hidden">
        
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
            animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
            animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* ===== LEFT COLUMN ===== */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <motion.span 
                className="sec-badge inline-block"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                About Us
              </motion.span>

              <motion.h2 
                className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ashwin R. Singh{' '}
                <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                  (Aashu Singh)
                </span>
              </motion.h2>

              <motion.p 
                className="sec-p sec-text-dark-soft mt-1 max-w-md"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions. With a background in Computer Science and AI, he has spent 13+ years building technology-led businesses.
              </motion.p>
              
              <motion.div 
                className="space-y-4 mb-6 mt-4 max-w-md"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {progressData.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <span className="sec-h3 text-gray-800 mb-0">{item.label}</span>
                      <span className="sec-h3 mb-0" style={{ color: item.color }}>{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className="h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: 0.15 + index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="/AboutUs"
                  whileTap={{ scale: 0.95 }}
                  className="sec-btn"
                >
                  Connect With Ashwin
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* ===== RIGHT COLUMN ===== */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3 w-full"
            >
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {statsData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.04 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className="group bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-lg hover:shadow-[#008df1]/20 border-2 border-transparent hover:border-[#008df1] hover:bg-[#008df1]/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${item.bgClass} flex items-center justify-center shadow-md`}
                        whileHover={{ rotate: 6, scale: 1.05 }}
                      >
                        {item.icon}
                      </motion.div>

                      <div className="min-w-0">
                        <p className={`sec-h2 mb-0 font-extrabold ${item.valueColor} leading-none`}>
                          {item.value}
                        </p>
                        <h3 className="sec-p text-gray-500 mt-0.5 font-medium">
                          {item.label}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="sec-h3 text-gray-900 mb-0.5">Founder's Principles</h3>
                    <p className="sec-p text-gray-500">Core philosophy</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    className="bg-[#008df1] p-1.5 rounded-lg flex-shrink-0 shadow-md"
                  >
                    <Shield className="h-3.5 w-3.5 text-white" />
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { icon: Zap, label: 'Think in systems' },
                    { icon: TrendingUp, label: 'Execute with discipline' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden flex items-center gap-2 bg-gray-50 rounded-md px-2.5 py-2 border border-gray-100 transition-colors"
                    >
                      {/* Sliding Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-in-out"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-2">
                        <item.icon className="h-3.5 w-3.5 flex-shrink-0 text-[#008df1] group-hover:text-white transition-colors duration-300" />
                        <span className="sec-p text-gray-700 group-hover:text-white transition-colors duration-300 font-medium">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Video Thumbnail - Premium Cinematic Tech Design */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  onClick={openVideo}
                  className="relative rounded-lg overflow-hidden cursor-pointer group/video shadow-md"
                >
                  <div className="relative w-full aspect-[16/7] bg-[#0a192f]">
                    
                    {/* Tech Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
                    
                    {/* Glow Effects */}
                    <motion.div 
                      className="absolute -top-10 -right-10 w-32 h-32 bg-[#01ADF0]/30 rounded-full blur-3xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00C6FB]/20 rounded-full blur-3xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />

                    {/* Founder Image (Contained to show full face) */}
                    <img
                      src="/founder.jpeg"
                      alt="Founder"
                      className="relative z-10 w-full h-full object-contain object-center opacity-95 group-hover/video:opacity-100 transition-all duration-500"
                    />

                    {/* Cinematic Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001E3C] via-transparent to-transparent z-20 opacity-90" />

                    {/* Top Badge */}
                    <div className="absolute top-3 right-3 z-30">
                      <span className="text-[9px] font-bold tracking-wider text-white bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 uppercase shadow-sm">
                        Founder's Note
                      </span>
                    </div>

                    {/* Center Play Button (Glassmorphism) */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <motion.div
                        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,198,251,0.4)] relative group-hover/video:bg-[#01ADF0]/80 group-hover/video:border-white transition-all duration-300"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(255,255,255,0.1)',
                            '0 0 40px rgba(0,198,251,0.5)',
                            '0 0 20px rgba(255,255,255,0.1)'
                          ],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Play className="h-6 w-6 text-white ml-1 relative z-10" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Bottom Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-30 flex justify-between items-end">
                      <div>
                        <p className="text-white text-sm font-bold tracking-wide drop-shadow-md">Ashwin R. Singh</p>
                        <p className="text-[#01ADF0] text-[10px] font-medium tracking-wider uppercase drop-shadow-md">Watch the vision</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-3"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative w-full max-w-3xl bg-black/50 rounded-xl overflow-hidden shadow-2xl shadow-[#008df1]/15 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideo}
                className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-[#008df1]/80 backdrop-blur-sm p-1.5 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>

              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="sec-p text-white flex items-center gap-1.5">
                  <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  Now Playing: Founder's Note
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection;