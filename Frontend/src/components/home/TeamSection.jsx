// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Mail, Star } from 'lucide-react';
// import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import AnimatedSection from './AnimatedSection';

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: 'Preeti Rai',
//       role: 'Senior Consultant',
//       location: 'India',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
//       email: 'preeti@coderbox.com',
//       socials: {
//         linkedin: '#',
//         twitter: '#'
//       }
//     },
//     {
//       name: 'Rahul Sharma',
//       role: 'AI Specialist',
//       location: 'India',
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
//       email: 'rahul@coderbox.com',
//       socials: {
//         linkedin: '#',
//         twitter: '#'
//       }
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
//             Our Team
//           </motion.span>
//           <motion.h2 
//             className="text-5xl md:text-6xl font-bold text-white mt-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Our experienced team is dedicated to delivering excellence and driving your success
//           </motion.p>
//         </AnimatedSection>

//         <motion.div 
//           className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -10,
//                 scale: 1.03,
//                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
//               }}
//               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 text-center overflow-hidden"
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
//                 <div className="relative mb-6">
//                   <motion.div 
//                     className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500 transition-colors duration-300 shadow-xl"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <img 
//                       src={member.image} 
//                       alt={member.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </motion.div>
                  
//                   <motion.div 
//                     className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-4 py-1 rounded-full shadow-lg"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {member.location}
//                   </motion.div>

//                   {/* Rating badge */}
//                   <motion.div
//                     className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg"
//                     whileHover={{ scale: 1.1, rotate: 10 }}
//                   >
//                     <Star className="h-3 w-3 inline-block mr-1" />
//                     4.9
//                   </motion.div>
//                 </div>

//                 <motion.h3 
//                   className="text-xl font-bold text-white"
//                   whileHover={{ x: 5 }}
//                 >
//                   {member.name}
//                 </motion.h3>
                
//                 <p className="text-blue-400 font-medium text-sm">{member.role}</p>
                
//                 <div className="flex items-center justify-center gap-2 mt-3 text-blue-200/50 text-sm">
//                   <MapPin className="h-4 w-4" />
//                   <span>{member.location}</span>
//                 </div>

//                 {/* Email */}
//                 <motion.a
//                   href={`mailto:${member.email}`}
//                   whileHover={{ x: 5 }}
//                   className="flex items-center justify-center gap-2 mt-4 text-blue-200/60 hover:text-blue-400 text-sm transition-colors"
//                 >
//                   <Mail className="h-4 w-4" />
//                   {member.email}
//                 </motion.a>

//                 {/* Social links */}
//                 <div className="flex items-center justify-center gap-4 mt-4">
//                   <motion.a
//                     href={member.socials.linkedin}
//                     whileHover={{ scale: 1.2, y: -2 }}
//                     className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600/20 flex items-center justify-center transition-colors border border-white/10 hover:border-blue-500/30"
//                   >
//                     <FaLinkedinIn className="h-4 w-4 text-blue-400" />
//                   </motion.a>
//                   <motion.a
//                     href={member.socials.twitter}
//                     whileHover={{ scale: 1.2, y: -2 }}
//                     className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600/20 flex items-center justify-center transition-colors border border-white/10 hover:border-blue-500/30"
//                   >
//                     <FaTwitter className="h-4 w-4 text-blue-400" />
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.p 
//           className="text-center text-blue-200/70 mt-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Our team has deep expertise across all areas of digital. Need a deep dive on how to set up event tracking?
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Mail, Star } from 'lucide-react';
// import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import AnimatedSection from './AnimatedSection';

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: 'Preeti Rai',
//       role: 'Senior Consultant',
//       location: 'India',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
//       email: 'preeti@coderbox.com',
//       socials: {
//         linkedin: '#',
//         twitter: '#'
//       }
//     },
//     {
//       name: 'Rahul Sharma',
//       role: 'AI Specialist',
//       location: 'India',
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
//       email: 'rahul@coderbox.com',
//       socials: {
//         linkedin: '#',
//         twitter: '#'
//       }
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
//             Our Team
//           </motion.span>
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-[1.15]"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
//           </motion.h2>
//           <motion.p 
//             className="text-blue-200/80 mt-2 max-w-2xl mx-auto text-xs sm:text-sm"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             Our experienced team is dedicated to delivering excellence and driving your success
//           </motion.p>
//         </AnimatedSection>

//         <motion.div 
//           className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -8,
//                 scale: 1.02,
//                 boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
//               }}
//               className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 text-center overflow-hidden"
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
//                 <div className="relative mb-4">
//                   <motion.div 
//                     className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500 transition-colors duration-300 shadow-xl"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <img 
//                       src={member.image} 
//                       alt={member.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </motion.div>
                  
//                   <motion.div 
//                     className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[8px] sm:text-[10px] px-3 py-0.5 rounded-full shadow-lg"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {member.location}
//                   </motion.div>

//                   {/* Rating badge */}
//                   <motion.div
//                     className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg"
//                     whileHover={{ scale: 1.1, rotate: 10 }}
//                   >
//                     <Star className="h-2.5 w-2.5 inline-block mr-0.5" />
//                     4.9
//                   </motion.div>
//                 </div>

//                 <motion.h3 
//                   className="text-base sm:text-lg font-bold text-white"
//                   whileHover={{ x: 5 }}
//                 >
//                   {member.name}
//                 </motion.h3>
                
//                 <p className="text-blue-400 font-medium text-[10px] sm:text-xs">{member.role}</p>
                
//                 <div className="flex items-center justify-center gap-1.5 mt-2 text-blue-200/50 text-[10px] sm:text-xs">
//                   <MapPin className="h-3 w-3" />
//                   <span>{member.location}</span>
//                 </div>

//                 {/* Email */}
//                 <motion.a
//                   href={`mailto:${member.email}`}
//                   whileHover={{ x: 5 }}
//                   className="flex items-center justify-center gap-1.5 mt-3 text-blue-200/60 hover:text-blue-400 text-[10px] sm:text-xs transition-colors"
//                 >
//                   <Mail className="h-3 w-3" />
//                   {member.email}
//                 </motion.a>

//                 {/* Social links */}
//                 <div className="flex items-center justify-center gap-3 mt-3">
//                   <motion.a
//                     href={member.socials.linkedin}
//                     whileHover={{ scale: 1.2, y: -2 }}
//                     className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-blue-600/20 flex items-center justify-center transition-colors border border-white/10 hover:border-blue-500/30"
//                   >
//                     <FaLinkedinIn className="h-3.5 w-3.5 text-blue-400" />
//                   </motion.a>
//                   <motion.a
//                     href={member.socials.twitter}
//                     whileHover={{ scale: 1.2, y: -2 }}
//                     className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-blue-600/20 flex items-center justify-center transition-colors border border-white/10 hover:border-blue-500/30"
//                   >
//                     <FaTwitter className="h-3.5 w-3.5 text-blue-400" />
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.p 
//           className="text-center text-blue-200/70 mt-8 sm:mt-10 max-w-2xl mx-auto text-[10px] sm:text-xs"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Our team has deep expertise across all areas of digital. Need a deep dive on how to set up event tracking?
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;






import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Star, Award, Users, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AnimatedSection from './AnimatedSection';

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const teamMembers = [
    {
      name: 'Preeti Rai',
      role: 'Senior Consultant',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      email: 'preeti@coderbox.com',
      experience: '10+ Years',
      socials: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Rahul Sharma',
      role: 'AI Specialist',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      email: 'rahul@coderbox.com',
      experience: '8+ Years',
      socials: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Ananya Singh',
      role: 'Digital Marketing Head',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop&crop=face',
      email: 'ananya@coderbox.com',
      experience: '12+ Years',
      socials: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Vikram Mehta',
      role: 'Full Stack Developer',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      email: 'vikram@coderbox.com',
      experience: '6+ Years',
      socials: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Sneha Patel',
      role: 'UI/UX Designer',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
      email: 'sneha@coderbox.com',
      experience: '5+ Years',
      socials: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#'
      }
    }
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a2a] to-[#0a0a1a] overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl"
          animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 0.7, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"
          animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0], scale: [1, 0.7, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
              x: [0, Math.random() * 15 - 7, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        {/* Header - Compact */}
        <AnimatedSection className="text-center mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/20 mb-2"
          >
            <Users className="h-3 w-3 text-blue-400" />
            <span className="text-blue-400 font-semibold text-[9px] sm:text-[10px] tracking-widest uppercase">
              Our Team
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expert Team
            </span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/60 mt-1 max-w-2xl mx-auto text-[9px] sm:text-[10px]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Our experienced team is dedicated to delivering excellence and driving your success
          </motion.p>
        </AnimatedSection>

        {/* ===== SWIPER SLIDER WITH 3D EFFECT ===== */}
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
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
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="py-6 px-2 sm:px-6"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="pb-10">
                {({ isActive }) => (
                  <motion.div
                    className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-4 sm:p-5 hover:shadow-2xl transition-all duration-400 border ${
                      isActive 
                        ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                        : 'border-white/10 hover:border-blue-500/30'
                    } text-center overflow-hidden`}
                    whileHover={{ y: -4 }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 blur-xl transition-all duration-400 -z-10"
                    />

                    <div className="relative z-10">
                      {/* Profile Image - Smaller */}
                      <div className="relative mb-3 mx-auto w-20 h-20 sm:w-24 sm:h-24">
                        <motion.div 
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 shadow-xl shadow-blue-500/10 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </motion.div>
                        
                        {/* Status dot */}
                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a0a1a] shadow-lg shadow-green-400/30">
                          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                        </div>

                        {/* Rating */}
                        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-[7px] font-bold px-1.5 py-0.5 rounded-full shadow-lg shadow-yellow-400/30 flex items-center gap-0.5">
                          <Star className="h-2 w-2 fill-current" />
                          4.9
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {member.name}
                      </h3>
                      
                      <p className="text-blue-400 font-medium text-[8px] sm:text-[9px] mt-0.5">{member.role}</p>

                      {/* Location & Experience */}
                      <div className="flex items-center justify-center gap-2 text-[8px] sm:text-[9px] text-blue-200/40 mt-1.5">
                        <span className="flex items-center gap-0.5">
                          <MapPin className="h-2 w-2" />
                          {member.location}
                        </span>
                        <span className="w-px h-2.5 bg-white/10"></span>
                        <span className="flex items-center gap-0.5">
                          <Briefcase className="h-2 w-2" />
                          {member.experience}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-1.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                      {/* Email */}
                      <motion.a
                        href={`mailto:${member.email}`}
                        whileHover={{ x: 2 }}
                        className="flex items-center justify-center gap-0.5 text-blue-200/40 hover:text-blue-400 text-[7px] sm:text-[8px] transition-colors"
                      >
                        <Mail className="h-2 w-2" />
                        {member.email}
                      </motion.a>

                      {/* Social Links */}
                      <div className="flex items-center justify-center gap-1.5 mt-2">
                        {[
                          { icon: FaLinkedinIn, href: member.socials.linkedin, color: 'hover:bg-blue-600/30 hover:text-blue-400' },
                          { icon: FaTwitter, href: member.socials.twitter, color: 'hover:bg-sky-600/30 hover:text-sky-400' },
                          { icon: FaDribbble, href: member.socials.dribbble, color: 'hover:bg-pink-600/30 hover:text-pink-400' }
                        ].map((social, i) => (
                          <motion.a
                            key={i}
                            href={social.href}
                            whileHover={{ scale: 1.15, y: -2 }}
                            className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-transparent ${social.color}`}
                          >
                            <social.icon className="h-2.5 w-2.5" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white hover:text-white" />
          </button>
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#01adf0] backdrop-blur-sm rounded-full p-1.5 sm:p-2 border border-white/10 hover:border-[#01adf0] transition-all duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white hover:text-white" />
          </button>
        </div>

        {/* Bottom CTA - #01adf0 color */}
        <motion.div 
          className="text-center mt-4 sm:mt-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/careers"
            whileHover={{ 
              scale: 1.04,
              boxShadow: "0 15px 30px rgba(1,173,240,0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#01adf0] text-white font-semibold text-[9px] sm:text-[10px] hover:shadow-xl transition-all duration-300"
          >
            Join Our Team
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;