// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { 
// //   Globe, 
// //   Phone, 
// //   Mail, 
// //   MapPin, 
// //   ChevronRight,
// //   ArrowUp,
// //   Building,
// //   MapPinned,
// //   Star,
// //   ExternalLink,
// //   Clock
// // } from 'lucide-react';
// // import { FaGoogle, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();

// //   const quickLinks = [
// //     { name: 'Home', href: '/' },
// //     { name: 'About Us', href: '/about' },
// //     { name: 'Contact Us', href: '/contact' },
// //   ];

// //   const ourServices = [
// //     { name: 'Cognitive Services', href: '/services/cognitive' },
// //     { name: 'Digital Services', href: '/services/digital' },
// //     { name: 'Information Technology Services', href: '/services/it' },
// //     { name: 'Contact Us', href: '/contact' },
// //   ];

// //   const branchOffices = [
// //     '18th Floor, Cyberone, opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703',
// //     'Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana - 50008',
// //     'D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309',
// //     '35V6+54 - Al Sufouh - Dubai Internet City - Dubai - United Arab Emirates'
// //   ];

// //   const socialIcons = [
// //     { icon: FaGoogle, href: 'https://www.google.com', label: 'Google', color: 'hover:text-blue-500' },
// //     { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
// //     { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
// //     { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
// //     { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
// //   ];

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   // Animation variants for staggered children
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.2
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         ease: [0.215, 0.61, 0.355, 1]
// //       }
// //     }
// //   };

// //   return (
// //     <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div 
// //           className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, 50, -30, 0],
// //             y: [0, -30, 30, 0],
// //             scale: [1, 1.2, 0.8, 1]
// //           }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
// //           animate={{ 
// //             x: [0, -50, 30, 0],
// //             y: [0, 30, -30, 0],
// //             scale: [1, 0.8, 1.2, 1]
// //           }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>

// //       {/* Main Footer */}
// //       <div className="relative container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 py-16">
// //         <motion.div 
// //           className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.1 }}
// //         >
          
// //           {/* Company Info - 4 columns */}
// //           <motion.div 
// //             variants={itemVariants}
// //             className="lg:col-span-4"
// //           >
// //             <motion.div 
// //               className="flex items-center space-x-2 mb-4"
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <motion.div 
// //                 className="bg-blue-600 p-2 rounded-lg"
// //                 whileHover={{ rotate: 10 }}
// //               >
// //                 <Globe className="h-7 w-7 text-white" />
// //               </motion.div>
// //               <span className="text-2xl font-bold text-white">
// //                 CODER<span className="text-blue-500">BOX</span>
// //               </span>
// //             </motion.div>
            
// //             <motion.p 
// //               className="text-gray-400 leading-relaxed mb-4"
// //               whileHover={{ x: 5 }}
// //             >
// //               CoderBox, your go-to team for all things digital! We specialize in crafting digital marketing solutions. It lets take your work to the next level-together!
// //             </motion.p>
            
// //             <motion.div 
// //               className="flex items-center space-x-2 mb-6 bg-gray-800/50 rounded-lg px-4 py-2 w-fit backdrop-blur-sm border border-gray-700"
// //               whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.5)" }}
// //             >
// //               <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
// //               <span className="text-sm text-gray-300">Review us on</span>
// //               <motion.a 
// //                 href="https://www.google.com" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 className="text-blue-400 hover:text-blue-300 font-semibold flex items-center transition-colors"
// //                 whileHover={{ x: 3 }}
// //               >
// //                 Google
// //                 <ExternalLink className="h-3 w-3 ml-1" />
// //               </motion.a>
// //             </motion.div>

// //             <div className="space-y-2">
// //               <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center">
// //                 <Building className="h-4 w-4 mr-2 text-blue-500" />
// //                 Registered Office
// //               </h4>
// //               <motion.div 
// //                 className="flex items-start space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
// //                 whileHover={{ x: 5, borderColor: "rgba(59,130,246,0.5)" }}
// //               >
// //                 <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
// //                 <p className="text-sm text-gray-300 leading-relaxed">
// //                   Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068
// //                 </p>
// //               </motion.div>
// //             </div>
// //           </motion.div>

// //           {/* Quick Links - 2 columns */}
// //           <motion.div 
// //             variants={itemVariants}
// //             className="lg:col-span-2"
// //           >
// //             <h3 className="text-white font-bold text-lg mb-4 flex items-center">
// //               <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
// //               QUICK LINKS
// //             </h3>
// //             <ul className="space-y-3">
// //               {quickLinks.map((link) => (
// //                 <li key={link.name}>
// //                   <motion.a 
// //                     href={link.href} 
// //                     className="group flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200"
// //                     whileHover={{ x: 5 }}
// //                   >
// //                     <ChevronRight className="h-4 w-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
// //                     <span className="group-hover:translate-x-1 transition-transform duration-200">
// //                       {link.name}
// //                     </span>
// //                   </motion.a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Our Services - 2 columns */}
// //           <motion.div 
// //             variants={itemVariants}
// //             className="lg:col-span-2"
// //           >
// //             <h3 className="text-white font-bold text-lg mb-4 flex items-center">
// //               <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
// //               OUR SERVICES
// //             </h3>
// //             <ul className="space-y-3">
// //               {ourServices.map((service) => (
// //                 <li key={service.name}>
// //                   <motion.a 
// //                     href={service.href} 
// //                     className="group flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200"
// //                     whileHover={{ x: 5 }}
// //                   >
// //                     <ChevronRight className="h-4 w-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
// //                     <span className="group-hover:translate-x-1 transition-transform duration-200">
// //                       {service.name}
// //                     </span>
// //                   </motion.a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Contact Us - 4 columns */}
// //           <motion.div 
// //             variants={itemVariants}
// //             className="lg:col-span-4"
// //           >
// //             <h3 className="text-white font-bold text-lg mb-4 flex items-center">
// //               <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
// //               CONTACT US
// //             </h3>
            
// //             <div className="space-y-4">
// //               <div className="space-y-2">
// //                 <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center">
// //                   <Building className="h-4 w-4 mr-2 text-blue-500" />
// //                   Branches Office
// //                 </h4>
// //                 <div className="space-y-2">
// //                   {branchOffices.map((office, index) => (
// //                     <motion.div 
// //                       key={index} 
// //                       className="flex items-start space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
// //                       whileHover={{ x: 5, borderColor: "rgba(59,130,246,0.5)" }}
// //                     >
// //                       <MapPinned className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
// //                       <p className="text-sm text-gray-300 leading-relaxed">{office}</p>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
// //                 <motion.div 
// //                   className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
// //                   whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.5)" }}
// //                 >
// //                   <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
// //                   <div>
// //                     <a href="tel:+918928809025" className="text-gray-300 hover:text-blue-400 transition-colors text-sm block">
// //                       +91 8928809025
// //                     </a>
// //                     <a href="tel:+917208769025" className="text-gray-300 hover:text-blue-400 transition-colors text-sm block">
// //                       +91 7208769025
// //                     </a>
// //                   </div>
// //                 </motion.div>
// //                 <motion.div 
// //                   className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
// //                   whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.5)" }}
// //                 >
// //                   <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
// //                   <a href="mailto:support@thecoderbox.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
// //                     support@thecoderbox.com
// //                   </a>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </motion.div>

// //         {/* Social Icons - Bottom of main footer */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           viewport={{ once: true }}
// //           className="flex justify-center space-x-3 mt-12 pt-8 border-t border-gray-800"
// //         >
// //           {socialIcons.map((social, index) => (
// //             <motion.a
// //               key={index}
// //               href={social.href}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               whileHover={{ scale: 1.15, y: -5 }}
// //               whileTap={{ scale: 0.95 }}
// //               className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-all duration-200 ${social.color}`}
// //               aria-label={social.label}
// //             >
// //               <social.icon className="h-5 w-5" />
// //             </motion.a>
// //           ))}
// //         </motion.div>
// //       </div>

// //       {/* Bottom Bar */}
// //       <div className="relative border-t border-gray-800 bg-black/30 backdrop-blur-sm">
// //         <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 py-5">
// //           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
// //             <motion.p
// //               initial={{ opacity: 0 }}
// //               whileInView={{ opacity: 1 }}
// //               transition={{ duration: 0.5 }}
// //               viewport={{ once: true }}
// //               className="text-sm text-gray-400 text-center md:text-left"
// //             >
// //               Copyright © {currentYear} <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">thecoderbox.com</a> | All Rights Reserved
// //             </motion.p>
            
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.5 }}
// //               viewport={{ once: true }}
// //               className="flex items-center space-x-4"
// //             >
// //               <motion.button
// //                 onClick={scrollToTop}
// //                 className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl group"
// //                 aria-label="Scroll to top"
// //                 whileHover={{ scale: 1.1 }}
// //                 whileTap={{ scale: 0.9 }}
// //               >
// //                 <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-200" />
// //               </motion.button>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;








// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Mail, Phone, MapPin, Send, Building2, Globe, MapPinned, ArrowUp, Sparkles, Zap, Star, ChevronDown, ChevronUp } from 'lucide-react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();
// //   const [showAllBranches, setShowAllBranches] = useState(false);

// //   // ============= DATA =============
// //   const servicesLinks = [
// //     { name: 'Cognitive Services', path: '/services/cognitive' },
// //     { name: 'Digital Services', path: '/services/digital' },
// //     { name: 'Information Technology Services', path: '/services/it' },
// //     { name: 'Contact Us', path: '/contact' }
// //   ];

// //   const solutionsLinks = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About Us', path: '/about' },
// //     { name: 'Contact Us', path: '/contact' }
// //   ];

// //   const branchOffices = [
// //     { id: 1, city: 'Mumbai', address: '18th Floor, Cyberone, opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703', icon: '🌆' },
// //     { id: 2, city: 'Hyderabad', address: 'Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana - 50008', icon: '🌃' },
// //     { id: 3, city: 'Noida', address: 'D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309', icon: '🏙️' },
// //     { id: 4, city: 'Dubai', address: '35V6+54 - Al Sufouh - Dubai Internet City - Dubai - United Arab Emirates', icon: '🌇' }
// //   ];

// //   const registeredOffice = {
// //     address: 'Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068',
// //     phone: '+918928809025 / +917208769025',
// //     email: 'support@thecoderbox.com'
// //   };

// //   // ============= SOCIAL ICONS =============
// //   const FacebookIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
// //     </svg>
// //   );

// //   const TwitterIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
// //     </svg>
// //   );

// //   const LinkedinIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
// //     </svg>
// //   );

// //   const YoutubeIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
// //     </svg>
// //   );

// //   const InstagramIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
// //     </svg>
// //   );

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   return (
// //     <footer className="relative bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] text-gray-300 overflow-hidden">
      
// //       {/* ===== CINEMATIC BACKGROUND EFFECTS ===== */}
// //       <div className="absolute inset-0">
// //         <div 
// //           className="absolute inset-0 opacity-20"
// //           style={{
// //             backgroundImage: `url('https://t4.ftcdn.net/jpg/02/50/95/91/360_F_250959105_KFS05K9HHels3cK6nZcID63s1sEjciGn.jpg')`,
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             backgroundRepeat: 'no-repeat'
// //           }}
// //         />
// //         <motion.div 
// //           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl"
// //           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.8, 1] }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl"
// //           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.2, 1] }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-3xl"
// //           animate={{ scale: [1, 1.3, 0.7, 1], opacity: [0.2, 0.5, 0.2] }}
// //           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
// //         />

// //         <div 
// //           className="absolute inset-0 opacity-5"
// //           style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
// //           }}
// //         />
// //       </div>

// //       {/* ===== GLOWING TOP LINE ===== */}
// //       <div className="relative z-10 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>

// //       <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12 z-10">
        
// //         {/* ====== MAIN FOOTER GRID ====== */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-8">
          
// //           {/* Column 1 - CODERBOX WITH LOGO */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-1"
// //           >
// //             <motion.div 
// //               className="flex items-center gap-3 mb-4"
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <motion.img 
// //                 src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vY29kZXJib3gtb3JpZ2luYWwuanBn.webp"
// //                 alt="CoderBox Logo"
// //                 className="w-14 h-14 object-contain rounded-lg"
// //                 whileHover={{ rotate: 10, scale: 1.1 }}
// //                 onError={(e) => {
// //                   e.target.onerror = null;
// //                   e.target.src = 'https://via.placeholder.com/56/2563eb/ffffff?text=CB';
// //                 }}
// //               />
// //               <motion.h3 
// //                 className="text-3xl font-bold text-white tracking-tight"
// //                 whileHover={{ scale: 1.02 }}
// //               >
// //                 CODER<span className="text-blue-500">BOX</span>
// //               </motion.h3>
// //             </motion.div>
            
// //             <motion.p 
// //               className="text-[15px] text-gray-400 leading-relaxed mb-4"
// //               whileHover={{ x: 5 }}
// //             >
// //               CoderBox, your go-to team for all things digital! We specialize in crafting digital marketing solutions !!! Let's take your business to the next level-together!
// //             </motion.p>
            
// //             <motion.div whileHover={{ x: 5 }}>
// //               <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
// //                 <Sparkles className="h-4 w-4 text-yellow-400" />
// //                 REGISTERED OFFICE
// //               </h4>
// //               <p className="text-[15px] text-gray-400 leading-relaxed">
// //                 {registeredOffice.address}
// //               </p>
// //             </motion.div>
// //           </motion.div>

// //           {/* Column 2 - OUR SERVICES */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               OUR SERVICES
// //             </h3>
// //             <ul className="space-y-2 text-[15px]">
// //               {servicesLinks.map((link, index) => (
// //                 <motion.li key={index} whileHover={{ x: 8 }}>
// //                   <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
// //                     {link.name}
// //                   </Link>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Column 3 - QUICK LINKS */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               QUICK LINKS
// //             </h3>
// //             <ul className="space-y-2 text-[15px]">
// //               {solutionsLinks.map((link, index) => (
// //                 <motion.li key={index} whileHover={{ x: 8 }}>
// //                   <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
// //                     {link.name}
// //                   </Link>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Column 4 - CONTACT US with Branch Offices - HOVER TO EXPAND */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               CONTACT US
// //             </h3>
            
// //             {/* ===== BRANCH OFFICES - HOVER TO EXPAND ===== */}
// //             <div className="mb-4">
// //               <span className="text-blue-400 font-semibold text-sm block mb-3">🏢 BRANCH OFFICES</span>
              
// //               {/* Main Container - Hover to Expand */}
// //               <motion.div 
// //                 className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 transition-all duration-500 ease-in-out shadow-lg"
// //                 style={{
// //                   minHeight: showAllBranches ? 'auto' : '68px',
// //                 }}
// //                 onMouseEnter={() => setShowAllBranches(true)}
// //                 onMouseLeave={() => setShowAllBranches(false)}
// //               >
// //                 {/* Glow Effect on Hover */}
// //                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
// //                 {/* Content Container */}
// //                 <div className="relative z-10 p-4">
// //                   <AnimatePresence mode="wait">
// //                     {!showAllBranches ? (
// //                       // ===== SHOW ONLY FIRST BRANCH (MUMBAI) =====
// //                       <motion.div
// //                         initial={{ opacity: 0 }}
// //                         animate={{ opacity: 1 }}
// //                         exit={{ opacity: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                         className="flex items-start gap-3 cursor-pointer"
// //                       >
// //                         <span className="text-2xl flex-shrink-0 mt-0.5">{branchOffices[0].icon}</span>
// //                         <div className="flex-1">
// //                           <span className="text-white font-semibold text-base block">{branchOffices[0].city}</span>
// //                           <span className="text-gray-400 text-sm leading-relaxed line-clamp-2">{branchOffices[0].address}</span>
// //                         </div>
// //                         {/* Chevron indicator */}
// //                         <motion.div 
// //                           animate={{ rotate: 0 }}
// //                           className="text-blue-400 flex-shrink-0 mt-1"
// //                         >
// //                           <ChevronDown size={18} />
// //                         </motion.div>
// //                       </motion.div>
// //                     ) : (
// //                       // ===== SHOW ALL 4 BRANCHES =====
// //                       <motion.div
// //                         initial={{ opacity: 0, y: -10 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         exit={{ opacity: 0, y: -10 }}
// //                         transition={{ duration: 0.4, staggerChildren: 0.05 }}
// //                         className="space-y-4"
// //                       >
// //                         {/* Header with close hint */}
// //                         <div className="flex justify-between items-center mb-2">
// //                           <span className="text-xs text-blue-400/70 font-medium">📍 All Branch Offices</span>
// //                           <motion.div 
// //                             animate={{ rotate: 180 }}
// //                             className="text-blue-400"
// //                           >
// //                             <ChevronUp size={16} />
// //                           </motion.div>
// //                         </div>
                        
// //                         {/* All Branches */}
// //                         {branchOffices.map((office, index) => (
// //                           <motion.div
// //                             key={office.id}
// //                             initial={{ opacity: 0, x: -10 }}
// //                             animate={{ opacity: 1, x: 0 }}
// //                             transition={{ delay: index * 0.06 }}
// //                             className="flex items-start gap-3 py-1.5 border-b border-white/5 last:border-0"
// //                           >
// //                             <span className="text-xl flex-shrink-0 mt-0.5">{office.icon}</span>
// //                             <div>
// //                               <span className="text-white font-semibold text-sm block">{office.city}</span>
// //                               <span className="text-gray-400 text-xs leading-relaxed">{office.address}</span>
// //                             </div>
// //                           </motion.div>
// //                         ))}
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </div>
// //               </motion.div>
// //             </div>

// //             {/* Phone & Email with BLUE icons */}
// //             <div className="pt-3 border-t border-white/10 space-y-1.5">
// //               <motion.div whileHover={{ x: 5 }} className="text-[14px] text-gray-400 flex items-center gap-2">
// //                 <Phone size={16} className="text-blue-400 flex-shrink-0" />
// //                 <span>{registeredOffice.phone}</span>
// //               </motion.div>
// //               <motion.div whileHover={{ x: 5 }} className="text-[14px] text-gray-400 flex items-center gap-2">
// //                 <Mail size={16} className="text-blue-400 flex-shrink-0" />
// //                 <span>{registeredOffice.email}</span>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* ====== NEWSLETTER + SOCIAL ====== */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-t border-white/10">
// //           {/* Newsletter */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.4 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
// //               <Zap className="h-5 w-5 text-yellow-400" />
// //               Subscribe to get latest insights
// //             </h3>
// //             <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 overflow-hidden max-w-md hover:border-blue-500/50 transition-all duration-300">
// //               <input 
// //                 type="email" 
// //                 placeholder="Email Address*" 
// //                 className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none"
// //               />
// //               <motion.button 
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full mx-1 transition-all duration-200 shadow-lg shadow-blue-500/30"
// //               >
// //                 <Send size={18} />
// //               </motion.button>
// //             </div>
// //           </motion.div>

// //           {/* Social Icons */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.5 }}
// //             viewport={{ once: true }}
// //             className="flex items-center justify-start md:justify-end gap-4"
// //           >
// //             {[
// //               { icon: FacebookIcon, color: 'hover:bg-blue-600', shadow: 'hover:shadow-blue-600/30' },
// //               { icon: TwitterIcon, color: 'hover:bg-sky-500', shadow: 'hover:shadow-sky-500/30' },
// //               { icon: LinkedinIcon, color: 'hover:bg-blue-700', shadow: 'hover:shadow-blue-700/30' },
// //               { icon: YoutubeIcon, color: 'hover:bg-red-600', shadow: 'hover:shadow-red-600/30' },
// //               { icon: InstagramIcon, color: 'hover:bg-pink-600', shadow: 'hover:shadow-pink-600/30' }
// //             ].map((social, index) => (
// //               <motion.a
// //                 key={index}
// //                 href="#"
// //                 whileHover={{ scale: 1.15, y: -5 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg ${social.color} ${social.shadow} border border-white/10 hover:border-transparent`}
// //               >
// //                 <social.icon />
// //               </motion.a>
// //             ))}
// //           </motion.div>
// //         </div>

// //         {/* ====== BOTTOM BAR - ONE LINE ====== */}
// //         <div className="py-6 mt-4 border-t border-white/10">
// //           <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
// //             {/* Copyright */}
// //             <p className="text-gray-400">
// //               © {currentYear} CoderBox. All rights reserved.
// //             </p>
            
// //             {/* Policy Links - In One Line */}
// //             <div className="flex items-center gap-3 text-gray-500">
// //               <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">
// //                 Privacy Policy
// //               </Link>
// //               <span className="text-gray-600">|</span>
// //               <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
// //                 Terms of Service
// //               </Link>
// //               <span className="text-gray-600">|</span>
// //               <Link to="/cookies" className="hover:text-blue-400 transition-colors duration-200">
// //                 Cookie Policy
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ===== FLOATING SCROLL TO TOP BUTTON ===== */}
// //       {/* <motion.button
// //         onClick={scrollToTop}
// //         initial={{ opacity: 0, scale: 0.8 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ scale: 0.9 }}
// //         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-purple-500/50 transition-all duration-300"
// //       >
// //         <ArrowUp className="h-6 w-6" />
// //       </motion.button> */}
// //     </footer>
// //   );
// // };

// // export default Footer;





// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Mail, Phone, MapPin, Send, Building2, Globe, MapPinned, ArrowUp, Sparkles, Zap, Star, ChevronDown, ChevronUp } from 'lucide-react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();
// //   const [currentBranchIndex, setCurrentBranchIndex] = useState(0);

// //   // ============= DATA =============
// //   const servicesLinks = [
// //     { name: 'Cognitive Services', path: '/services/cognitive' },
// //     { name: 'Digital Services', path: '/services/digital' },
// //     { name: 'Information Technology Services', path: '/services/it' },
// //     { name: 'Contact Us', path: '/contact' }
// //   ];

// //   const solutionsLinks = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About Us', path: '/about' },
// //     { name: 'Contact Us', path: '/contact' }
// //   ];

// //   const branchOffices = [
// //     { id: 1, city: 'Mumbai', address: '18th Floor, Cyberone, opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703', icon: '🌆' },
// //     { id: 2, city: 'Hyderabad', address: 'Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana - 50008', icon: '🌃' },
// //     { id: 3, city: 'Noida', address: 'D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309', icon: '🏙️' },
// //     { id: 4, city: 'Dubai', address: '35V6+54 - Al Sufouh - Dubai Internet City - Dubai - United Arab Emirates', icon: '🌇' }
// //   ];

// //   const registeredOffice = {
// //     address: 'Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068',
// //     phone: '+918928809025 / +917208769025',
// //     email: 'support@thecoderbox.com'
// //   };

// //   // ===== AUTO-SLIDE LOGIC =====
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentBranchIndex((prev) => (prev + 1) % branchOffices.length);
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, [branchOffices.length]);

// //   // ===== NAVIGATION FUNCTIONS =====
// //   const goToNextBranch = () => {
// //     setCurrentBranchIndex((prev) => (prev + 1) % branchOffices.length);
// //   };

// //   const goToPreviousBranch = () => {
// //     setCurrentBranchIndex((prev) => (prev - 1 + branchOffices.length) % branchOffices.length);
// //   };

// //   const currentBranch = branchOffices[currentBranchIndex];

// //   // ============= SOCIAL ICONS =============
// //   const FacebookIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
// //     </svg>
// //   );

// //   const TwitterIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
// //     </svg>
// //   );

// //   const LinkedinIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
// //     </svg>
// //   );

// //   const YoutubeIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
// //     </svg>
// //   );

// //   const InstagramIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
// //     </svg>
// //   );

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   return (
// //     <footer className="relative bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] text-gray-300 overflow-hidden">
      
// //       {/* ===== CINEMATIC BACKGROUND EFFECTS ===== */}
// //       <div className="absolute inset-0">
// //         <div 
// //           className="absolute inset-0 opacity-20"
// //           style={{
// //             backgroundImage: `url('https://t4.ftcdn.net/jpg/02/50/95/91/360_F_250959105_KFS05K9HHels3cK6nZcID63s1sEjciGn.jpg')`,
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             backgroundRepeat: 'no-repeat'
// //           }}
// //         />
// //         <motion.div 
// //           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl"
// //           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.8, 1] }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl"
// //           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.2, 1] }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-3xl"
// //           animate={{ scale: [1, 1.3, 0.7, 1], opacity: [0.2, 0.5, 0.2] }}
// //           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
// //         />

// //         <div 
// //           className="absolute inset-0 opacity-5"
// //           style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
// //           }}
// //         />
// //       </div>

// //       {/* ===== GLOWING TOP LINE ===== */}
// //       <div className="relative z-10 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>

// //       <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12 z-10">
        
// //         {/* ====== MAIN FOOTER GRID ====== */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-8">
          
// //           {/* Column 1 - CODERBOX WITH LOGO */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-1"
// //           >
// //             <motion.div 
// //               className="flex items-center gap-3 mb-4"
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <motion.img 
// //                 src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vY29kZXJib3gtb3JpZ2luYWwuanBn.webp"
// //                 alt="CoderBox Logo"
// //                 className="w-14 h-14 object-contain rounded-lg"
// //                 whileHover={{ rotate: 10, scale: 1.1 }}
// //                 onError={(e) => {
// //                   e.target.onerror = null;
// //                   e.target.src = 'https://via.placeholder.com/56/2563eb/ffffff?text=CB';
// //                 }}
// //               />
// //               {/* <motion.h3 
// //                 className="text-3xl font-bold text-white tracking-tight"
// //                 whileHover={{ scale: 1.02 }}
// //               >
// //                 CODER<span className="text-blue-500">BOX</span>
// //               </motion.h3> */}
// //             </motion.div>
            
// //             <motion.p 
// //               className="text-[15px] text-gray-400 leading-relaxed mb-4"
// //               whileHover={{ x: 5 }}
// //             >
// //               CoderBox, your go-to team for all things digital! We specialize in crafting digital marketing solutions !!! Let's take your business to the next level-together!
// //             </motion.p>
            
// //             <motion.div whileHover={{ x: 5 }}>
// //               <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
// //                 <Sparkles className="h-4 w-4 text-yellow-400" />
// //                 REGISTERED OFFICE
// //               </h4>
// //               <p className="text-[15px] text-gray-400 leading-relaxed">
// //                 {registeredOffice.address}
// //               </p>
// //             </motion.div>
// //           </motion.div>

// //           {/* Column 2 - OUR SERVICES */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               OUR SERVICES
// //             </h3>
// //             <ul className="space-y-2 text-[15px]">
// //               {servicesLinks.map((link, index) => (
// //                 <motion.li key={index} whileHover={{ x: 8 }}>
// //                   <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
// //                     {link.name}
// //                   </Link>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Column 3 - QUICK LINKS */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               QUICK LINKS
// //             </h3>
// //             <ul className="space-y-2 text-[15px]">
// //               {solutionsLinks.map((link, index) => (
// //                 <motion.li key={index} whileHover={{ x: 8 }}>
// //                   <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
// //                     {link.name}
// //                   </Link>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Column 4 - CONTACT US with Branch Offices - CLICK TO CHANGE */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               CONTACT US
// //             </h3>
            
// //             {/* ===== BRANCH OFFICES - CLICK TO CHANGE ===== */}
// //             <div className="mb-4">
// //               <span className="text-blue-400 font-semibold text-sm block mb-3">🏢 BRANCH OFFICES</span>
              
// //               {/* Main Container - Click to Change */}
// //               <motion.div 
// //                 className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg"
// //               >
// //                 {/* Glow Effect */}
// //                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
// //                 {/* Content Container */}
// //                 <div className="relative z-10 p-4">
// //                   <AnimatePresence mode="wait">
// //                     <motion.div
// //                       key={currentBranchIndex}
// //                       initial={{ opacity: 0, x: 20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       exit={{ opacity: 0, x: -20 }}
// //                       transition={{ duration: 0.4, ease: "easeInOut" }}
// //                       className="flex items-start gap-3"
// //                     >
// //                       <span className="text-2xl flex-shrink-0 mt-0.5">{currentBranch.icon}</span>
// //                       <div className="flex-1">
// //                         <span className="text-white font-semibold text-base block">{currentBranch.city}</span>
// //                         <span className="text-gray-400 text-sm leading-relaxed">{currentBranch.address}</span>
// //                       </div>
// //                     </motion.div>
// //                   </AnimatePresence>
                  
// //                   {/* Navigation Arrows - Click to change */}
// //                   <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
// //                     <motion.button
// //                       onClick={goToPreviousBranch}
// //                       whileHover={{ scale: 1.1, x: -3 }}
// //                       whileTap={{ scale: 0.9 }}
// //                       className="text-blue-400 hover:text-blue-300 transition-colors p-1"
// //                       aria-label="Previous branch"
// //                     >
// //                       <ChevronUp size={20} />
// //                     </motion.button>
                    
// //                     {/* Dot Indicators */}
// //                     <div className="flex gap-1.5">
// //                       {branchOffices.map((_, index) => (
// //                         <button
// //                           key={index}
// //                           onClick={() => setCurrentBranchIndex(index)}
// //                           className={`transition-all duration-300 rounded-full ${
// //                             index === currentBranchIndex 
// //                               ? 'w-6 h-1.5 bg-blue-400' 
// //                               : 'w-1.5 h-1.5 bg-gray-500 hover:bg-gray-400'
// //                           }`}
// //                           aria-label={`Go to branch ${index + 1}`}
// //                         />
// //                       ))}
// //                     </div>
                    
// //                     <motion.button
// //                       onClick={goToNextBranch}
// //                       whileHover={{ scale: 1.1, x: 3 }}
// //                       whileTap={{ scale: 0.9 }}
// //                       className="text-blue-400 hover:text-blue-300 transition-colors p-1"
// //                       aria-label="Next branch"
// //                     >
// //                       <ChevronDown size={20} />
// //                     </motion.button>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>

// //             {/* Phone & Email with BLUE icons */}
// //             <div className="pt-3 border-t border-white/10 space-y-1.5">
// //               <motion.div whileHover={{ x: 5 }} className="text-[14px] text-gray-400 flex items-center gap-2">
// //                 <Phone size={16} className="text-blue-400 flex-shrink-0" />
// //                 <span>{registeredOffice.phone}</span>
// //               </motion.div>
// //               <motion.div whileHover={{ x: 5 }} className="text-[14px] text-gray-400 flex items-center gap-2">
// //                 <Mail size={16} className="text-blue-400 flex-shrink-0" />
// //                 <span>{registeredOffice.email}</span>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* ====== NEWSLETTER + SOCIAL ====== */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-t border-white/10">
// //           {/* Newsletter */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.4 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
// //               <Zap className="h-5 w-5 text-yellow-400" />
// //               Subscribe to get latest insights
// //             </h3>
// //             <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 overflow-hidden max-w-md hover:border-blue-500/50 transition-all duration-300">
// //               <input 
// //                 type="email" 
// //                 placeholder="Email Address*" 
// //                 className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none"
// //               />
// //               <motion.button 
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full mx-1 transition-all duration-200 shadow-lg shadow-blue-500/30"
// //               >
// //                 <Send size={18} />
// //               </motion.button>
// //             </div>
// //           </motion.div>

// //           {/* Social Icons */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.5 }}
// //             viewport={{ once: true }}
// //             className="flex items-center justify-start md:justify-end gap-4"
// //           >
// //             {[
// //               { icon: FacebookIcon, color: 'hover:bg-blue-600', shadow: 'hover:shadow-blue-600/30' },
// //               { icon: TwitterIcon, color: 'hover:bg-sky-500', shadow: 'hover:shadow-sky-500/30' },
// //               { icon: LinkedinIcon, color: 'hover:bg-blue-700', shadow: 'hover:shadow-blue-700/30' },
// //               { icon: YoutubeIcon, color: 'hover:bg-red-600', shadow: 'hover:shadow-red-600/30' },
// //               { icon: InstagramIcon, color: 'hover:bg-pink-600', shadow: 'hover:shadow-pink-600/30' }
// //             ].map((social, index) => (
// //               <motion.a
// //                 key={index}
// //                 href="#"
// //                 whileHover={{ scale: 1.15, y: -5 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg ${social.color} ${social.shadow} border border-white/10 hover:border-transparent`}
// //               >
// //                 <social.icon />
// //               </motion.a>
// //             ))}
// //           </motion.div>
// //         </div>

// //         {/* ====== BOTTOM BAR - ONE LINE ====== */}
// //         <div className="py-6 mt-4 border-t border-white/10">
// //           <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
// //             {/* Copyright */}
// //             <p className="text-gray-400">
// //               © {currentYear} CoderBox. All rights reserved.
// //             </p>
            
// //             {/* Policy Links - In One Line */}
// //             <div className="flex items-center gap-3 text-gray-500">
// //               <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">
// //                 Privacy Policy
// //               </Link>
// //               <span className="text-gray-600">|</span>
// //               <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
// //                 Terms of Service
// //               </Link>
// //               <span className="text-gray-600">|</span>
// //               <Link to="/cookies" className="hover:text-blue-400 transition-colors duration-200">
// //                 Cookie Policy
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ===== FLOATING SCROLL TO TOP BUTTON ===== */}
// //       {/* <motion.button
// //         onClick={scrollToTop}
// //         initial={{ opacity: 0, scale: 0.8 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ scale: 0.9 }}
// //         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-purple-500/50 transition-all duration-300"
// //       >
// //         <ArrowUp className="h-6 w-6" />
// //       </motion.button> */}
// //     </footer>
// //   );
// // };

// // export default Footer;








// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Mail, Phone, MapPin, Send, Building2, Globe, MapPinned, ArrowUp, Sparkles, Zap, Star, ChevronDown, ChevronUp } from 'lucide-react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();
// //   const [currentBranchIndex, setCurrentBranchIndex] = useState(0);

// //   // ============= DATA =============
// //   const servicesLinks = [
// //     { name: 'Cognitive Services', path: '/services/cognitive' },
// //     { name: 'Digital Services', path: '/services/digital' },
// //     { name: 'Information Technology Services', path: '/services/it' },
// //     { name: 'Contact Us', path: '/contact' }
// //   ];

// //   const solutionsLinks = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About Us', path: '/about' },
// //     { name: 'Contact Us', path: '/contact' }
// //   ];

// //   const branchOffices = [
// //     { id: 1, city: 'Mumbai', address: '18th Floor, Cyberone, opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703', icon: '🌆' },
// //     { id: 2, city: 'Hyderabad', address: 'Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana - 50008', icon: '🌃' },
// //     { id: 3, city: 'Noida', address: 'D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309', icon: '🏙️' },
// //     { id: 4, city: 'Dubai', address: '35V6+54 - Al Sufouh - Dubai Internet City - Dubai - United Arab Emirates', icon: '🌇' }
// //   ];

// //   const registeredOffice = {
// //     address: 'Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068',
// //     phone: '+918928809025 / +917208769025',
// //     email: 'support@thecoderbox.com'
// //   };

// //   // ===== AUTO-SLIDE LOGIC =====
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentBranchIndex((prev) => (prev + 1) % branchOffices.length);
// //     }, 4000);

// //     return () => clearInterval(interval);
// //   }, [branchOffices.length]);

// //   // ===== NAVIGATION FUNCTIONS =====
// //   const goToNextBranch = () => {
// //     setCurrentBranchIndex((prev) => (prev + 1) % branchOffices.length);
// //   };

// //   const goToPreviousBranch = () => {
// //     setCurrentBranchIndex((prev) => (prev - 1 + branchOffices.length) % branchOffices.length);
// //   };

// //   const currentBranch = branchOffices[currentBranchIndex];

// //   // ============= SOCIAL ICONS =============
// //   const FacebookIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
// //     </svg>
// //   );

// //   const TwitterIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
// //     </svg>
// //   );

// //   const LinkedinIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
// //     </svg>
// //   );

// //   const YoutubeIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
// //     </svg>
// //   );

// //   const InstagramIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
// //       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
// //     </svg>
// //   );

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   return (
// //     <footer className="relative bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] text-gray-300 overflow-hidden">
      
// //       {/* ===== CINEMATIC BACKGROUND EFFECTS ===== */}
// //       <div className="absolute inset-0">
// //         <div 
// //           className="absolute inset-0 opacity-20"
// //           style={{
// //             backgroundImage: `url('https://t4.ftcdn.net/jpg/02/50/95/91/360_F_250959105_KFS05K9HHels3cK6nZcID63s1sEjciGn.jpg')`,
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             backgroundRepeat: 'no-repeat'
// //           }}
// //         />
// //         <motion.div 
// //           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl"
// //           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.8, 1] }}
// //           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl"
// //           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.2, 1] }}
// //           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div 
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-3xl"
// //           animate={{ scale: [1, 1.3, 0.7, 1], opacity: [0.2, 0.5, 0.2] }}
// //           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
// //         />

// //         <div 
// //           className="absolute inset-0 opacity-5"
// //           style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
// //           }}
// //         />
// //       </div>

// //       {/* ===== GLOWING TOP LINE ===== */}
// //       <div className="relative z-10 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>

// //       <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-6 z-10"> {/* Reduced py-12 to py-6 */}
        
// //         {/* ====== MAIN FOOTER GRID ====== */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-4"> {/* Reduced py-8 to py-4 and gap */}
          
// //           {/* Column 1 - CODERBOX WITH LOGO */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-1"
// //           >
// //             <motion.div 
// //               className="flex items-center gap-3 mb-3" // Reduced mb-4 to mb-3
// //               whileHover={{ scale: 1.02 }}
// //             >
// //               <motion.img 
// //                 src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vY29kZXJib3gtb3JpZ2luYWwuanBn.webp"
// //                 alt="CoderBox Logo"
// //                 className="w-12 h-12 object-contain rounded-lg" // Reduced from w-14 h-14 to w-12 h-12
// //                 whileHover={{ rotate: 10, scale: 1.1 }}
// //                 onError={(e) => {
// //                   e.target.onerror = null;
// //                   e.target.src = 'https://via.placeholder.com/56/2563eb/ffffff?text=CB';
// //                 }}
// //               />
// //             </motion.div>
            
// //             <motion.p 
// //               className="text-[14px] text-gray-400 leading-relaxed mb-3" // Reduced text-[15px] to text-[14px] and mb-4 to mb-3
// //               whileHover={{ x: 5 }}
// //             >
// //               CoderBox, your go-to team for all things digital! We specialize in crafting digital marketing solutions !!! Let's take your business to the next level-together!
// //             </motion.p>
            
// //             {/* Removed separate Registered Office section from here */}
// //           </motion.div>

// //           {/* Column 2 - OUR SERVICES */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.1 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2"> {/* Reduced text-2xl to text-xl and mb-4 to mb-3 */}
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               OUR SERVICES
// //             </h3>
// //             <ul className="space-y-1.5 text-[14px]"> {/* Reduced space-y-2 to space-y-1.5 and text-[15px] to text-[14px] */}
// //               {servicesLinks.map((link, index) => (
// //                 <motion.li key={index} whileHover={{ x: 8 }}>
// //                   <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
// //                     {link.name}
// //                   </Link>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Column 3 - QUICK LINKS */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2"> {/* Reduced text-2xl to text-xl and mb-4 to mb-3 */}
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               QUICK LINKS
// //             </h3>
// //             <ul className="space-y-1.5 text-[14px]"> {/* Reduced space-y-2 to space-y-1.5 and text-[15px] to text-[14px] */}
// //               {solutionsLinks.map((link, index) => (
// //                 <motion.li key={index} whileHover={{ x: 8 }}>
// //                   <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
// //                     {link.name}
// //                   </Link>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           {/* Column 4 - CONTACT US with Branch Offices + Registered Office */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2"> {/* Reduced text-2xl to text-xl and mb-4 to mb-3 */}
// //               <span className="w-8 h-0.5 bg-blue-500"></span>
// //               CONTACT US
// //             </h3>
            
// //             {/* ===== BRANCH OFFICES ===== */}
// //             <div className="mb-3"> {/* Reduced mb-4 to mb-3 */}
// //               <span className="text-blue-400 font-semibold text-xs block mb-2">🏢 BRANCH OFFICES</span> {/* Reduced text-sm to text-xs and mb-3 to mb-2 */}
              
// //               <motion.div 
// //                 className="relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg"
// //               >
// //                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
// //                 <div className="relative z-10 p-3"> {/* Reduced p-4 to p-3 */}
// //                   <AnimatePresence mode="wait">
// //                     <motion.div
// //                       key={currentBranchIndex}
// //                       initial={{ opacity: 0, x: 20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       exit={{ opacity: 0, x: -20 }}
// //                       transition={{ duration: 0.4, ease: "easeInOut" }}
// //                       className="flex items-start gap-2" // Reduced gap-3 to gap-2
// //                     >
// //                       <span className="text-xl flex-shrink-0 mt-0.5">{currentBranch.icon}</span> {/* Reduced text-2xl to text-xl */}
// //                       <div className="flex-1">
// //                         <span className="text-white font-semibold text-sm block">{currentBranch.city}</span> {/* Added text-sm */}
// //                         <span className="text-gray-400 text-xs leading-relaxed">{currentBranch.address}</span> {/* Reduced text-sm to text-xs */}
// //                       </div>
// //                     </motion.div>
// //                   </AnimatePresence>
                  
// //                   <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10"> {/* Reduced mt-4 to mt-3 and pt-3 to pt-2 */}
// //                     <motion.button
// //                       onClick={goToPreviousBranch}
// //                       whileHover={{ scale: 1.1, x: -3 }}
// //                       whileTap={{ scale: 0.9 }}
// //                       className="text-blue-400 hover:text-blue-300 transition-colors p-1"
// //                       aria-label="Previous branch"
// //                     >
// //                       <ChevronUp size={18} /> {/* Reduced from 20 to 18 */}
// //                     </motion.button>
                    
// //                     <div className="flex gap-1.5">
// //                       {branchOffices.map((_, index) => (
// //                         <button
// //                           key={index}
// //                           onClick={() => setCurrentBranchIndex(index)}
// //                           className={`transition-all duration-300 rounded-full ${
// //                             index === currentBranchIndex 
// //                               ? 'w-5 h-1.5 bg-blue-400' 
// //                               : 'w-1.5 h-1.5 bg-gray-500 hover:bg-gray-400'
// //                           }`}
// //                           aria-label={`Go to branch ${index + 1}`}
// //                         />
// //                       ))}
// //                     </div>
                    
// //                     <motion.button
// //                       onClick={goToNextBranch}
// //                       whileHover={{ scale: 1.1, x: 3 }}
// //                       whileTap={{ scale: 0.9 }}
// //                       className="text-blue-400 hover:text-blue-300 transition-colors p-1"
// //                       aria-label="Next branch"
// //                     >
// //                       <ChevronDown size={18} /> {/* Reduced from 20 to 18 */}
// //                     </motion.button>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>

// //             {/* ===== REGISTERED OFFICE - Now right below branch offices ===== */}
// //             <div className="pt-2 border-t border-white/10"> {/* Reduced pt-3 to pt-2 */}
// //               <span className="text-blue-400 font-semibold text-xs block mb-1.5">📌 REGISTERED OFFICE</span> {/* Reduced mb-2 to mb-1.5 and text-sm to text-xs */}
// //               <p className="text-gray-400 text-xs leading-relaxed mb-1.5"> {/* Reduced text-[14px] to text-xs and mb-1.5 */}
// //                 {registeredOffice.address}
// //               </p>
// //               <div className="space-y-1"> {/* Reduced space-y-1.5 to space-y-1 */}
// //                 <motion.div whileHover={{ x: 5 }} className="text-[12px] text-gray-400 flex items-center gap-2"> {/* Reduced text-[14px] to text-[12px] */}
// //                   <Phone size={14} className="text-blue-400 flex-shrink-0" /> {/* Reduced from 16 to 14 */}
// //                   <span>{registeredOffice.phone}</span>
// //                 </motion.div>
// //                 <motion.div whileHover={{ x: 5 }} className="text-[12px] text-gray-400 flex items-center gap-2"> {/* Reduced text-[14px] to text-[12px] */}
// //                   <Mail size={14} className="text-blue-400 flex-shrink-0" /> {/* Reduced from 16 to 14 */}
// //                   <span>{registeredOffice.email}</span>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* ====== NEWSLETTER + SOCIAL ====== */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-t border-white/10"> {/* Reduced gap-6 to gap-4, py-6 to py-4 */}
// //           {/* Newsletter */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.4 }}
// //             viewport={{ once: true }}
// //           >
// //             <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2"> {/* Reduced text-2xl to text-lg and mb-4 to mb-3 */}
// //               <Zap className="h-4 w-4 text-yellow-400" /> {/* Reduced h-5 w-5 to h-4 w-4 */}
// //               Subscribe to get latest insights
// //             </h3>
// //             <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 overflow-hidden max-w-md hover:border-blue-500/50 transition-all duration-300">
// //               <input 
// //                 type="email" 
// //                 placeholder="Email Address*" 
// //                 className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none" // Reduced py-3 to py-2.5
// //               />
// //               <motion.button 
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2.5 rounded-full mx-1 transition-all duration-200 shadow-lg shadow-blue-500/30" // Reduced p-3 to p-2.5
// //               >
// //                 <Send size={16} /> {/* Reduced from 18 to 16 */}
// //               </motion.button>
// //             </div>
// //           </motion.div>

// //           {/* Social Icons */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.5 }}
// //             viewport={{ once: true }}
// //             className="flex items-center justify-start md:justify-end gap-3" // Reduced gap-4 to gap-3
// //           >
// //             {[
// //               { icon: FacebookIcon, color: 'hover:bg-blue-600', shadow: 'hover:shadow-blue-600/30' },
// //               { icon: TwitterIcon, color: 'hover:bg-sky-500', shadow: 'hover:shadow-sky-500/30' },
// //               { icon: LinkedinIcon, color: 'hover:bg-blue-700', shadow: 'hover:shadow-blue-700/30' },
// //               { icon: YoutubeIcon, color: 'hover:bg-red-600', shadow: 'hover:shadow-red-600/30' },
// //               { icon: InstagramIcon, color: 'hover:bg-pink-600', shadow: 'hover:shadow-pink-600/30' }
// //             ].map((social, index) => (
// //               <motion.a
// //                 key={index}
// //                 href="#"
// //                 whileHover={{ scale: 1.15, y: -5 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className={`w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg ${social.color} ${social.shadow} border border-white/10 hover:border-transparent`} // Reduced w-12 h-12 to w-10 h-10
// //               >
// //                 <social.icon />
// //               </motion.a>
// //             ))}
// //           </motion.div>
// //         </div>

// //         {/* ====== BOTTOM BAR - ONE LINE ====== */}
// //         <div className="py-4 mt-2 border-t border-white/10"> {/* Reduced py-6 to py-4, mt-4 to mt-2 */}
// //           <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 text-xs"> {/* Reduced gap-3 to gap-2 and text-sm to text-xs */}
// //             {/* Copyright */}
// //             <p className="text-gray-400">
// //               © {currentYear} CoderBox. All rights reserved.
// //             </p>
            
// //             {/* Policy Links - In One Line */}
// //             <div className="flex items-center gap-2 text-gray-500"> {/* Reduced gap-3 to gap-2 */}
// //               <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">
// //                 Privacy Policy
// //               </Link>
// //               <span className="text-gray-600">|</span>
// //               <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
// //                 Terms of Service
// //               </Link>
// //               <span className="text-gray-600">|</span>
// //               <Link to="/cookies" className="hover:text-blue-400 transition-colors duration-200">
// //                 Cookie Policy
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;









// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Mail, Phone, MapPin, Send, Building2, Globe, MapPinned, ArrowUp, Sparkles, Zap, Star, ChevronDown, ChevronUp } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   // ============= DATA =============
//   const servicesLinks = [
//     { name: 'Cognitive Services', path: '/services/cognitive' },
//     { name: 'Digital Services', path: '/services/digital' },
//     { name: 'Information Technology Services', path: '/services/it' },
//     { name: 'Contact Us', path: '/contact' }
//   ];

//   const solutionsLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Contact Us', path: '/contact' }
//   ];

//   const registeredOffice = {
//     address: 'Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068',
//     phone: '+918928809025 / +917208769025',
//     email: 'support@thecoderbox.com'
//   };

//   // ============= SOCIAL ICONS =============
//   const FacebookIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//     </svg>
//   );

//   const TwitterIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//     </svg>
//   );

//   const LinkedinIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//     </svg>
//   );

//   const YoutubeIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//     </svg>
//   );

//   const InstagramIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
//     </svg>
//   );

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="relative bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] text-gray-300 overflow-hidden">
      
//       {/* ===== CINEMATIC BACKGROUND EFFECTS ===== */}
//       <div className="absolute inset-0">
//         <div 
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage: `url('https://t4.ftcdn.net/jpg/02/50/95/91/360_F_250959105_KFS05K9HHels3cK6nZcID63s1sEjciGn.jpg')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat'
//           }}
//         />
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-3xl"
//           animate={{ scale: [1, 1.3, 0.7, 1], opacity: [0.2, 0.5, 0.2] }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div 
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//           }}
//         />
//       </div>

//       {/* ===== GLOWING TOP LINE ===== */}
//       <div className="relative z-10 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>

//       <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-6 z-10">
        
//         {/* ====== MAIN FOOTER GRID ====== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-4">
          
//           {/* Column 1 - CODERBOX WITH LOGO */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="lg:col-span-1"
//           >
//             <motion.div 
//               className="flex items-center gap-3 mb-3"
//               whileHover={{ scale: 1.02 }}
//             >
//               <motion.img 
//                 src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vY29kZXJib3gtb3JpZ2luYWwuanBn.webp"
//                 alt="CoderBox Logo"
//                 className="w-12 h-12 object-contain rounded-lg"
//                 whileHover={{ rotate: 10, scale: 1.1 }}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = 'https://via.placeholder.com/56/2563eb/ffffff?text=CB';
//                 }}
//               />
//             </motion.div>
            
//             <motion.p 
//               className="text-[15x] text-gray-400 leading-relaxed mb-3"
//               whileHover={{ x: 5 }}
//             >
//               CoderBox, your go-to team for all things digital! We specialize in crafting digital marketing solutions 
//             </motion.p>
//           </motion.div>

//           {/* Column 2 - OUR SERVICES */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
//               <span className="w-8 h-0.5 bg-blue-500"></span>
//               OUR SERVICES
//             </h3>
//             <ul className="space-y-1.5 text-[15px]">
//               {servicesLinks.map((link, index) => (
//                 <motion.li key={index} whileHover={{ x: 8 }}>
//                   <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Column 3 - QUICK LINKS */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
//               <span className="w-8 h-0.5 bg-blue-500"></span>
//               QUICK LINKS
//             </h3>
//             <ul className="space-y-1.5 text-[15px]">
//               {solutionsLinks.map((link, index) => (
//                 <motion.li key={index} whileHover={{ x: 8 }}>
//                   <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Column 4 - CONTACT US with Registered Office only */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
//               <span className="w-8 h-0.5 bg-blue-500"></span>
//               CONTACT US
//             </h3>
            
//             {/* ===== REGISTERED OFFICE ===== */}
//             <div>
//               <span className="text-blue-400 font-semibold text-xs block mb-1.5">📌 REGISTERED OFFICE</span>
//               <p className="text-[15px] text-gray-400 text-xs leading-relaxed mb-1.5">
//                 {registeredOffice.address}
//               </p>
//               <div className="space-y-1">
//                 <motion.div whileHover={{ x: 5 }} className="text-[15px] text-gray-400 flex items-center gap-2">
//                   <Phone size={14} className="text-blue-400 flex-shrink-0" />
//                   <span>{registeredOffice.phone}</span>
//                 </motion.div>
//                 <motion.div whileHover={{ x: 5 }} className="text-[15px] text-gray-400 flex items-center gap-2">
//                   <Mail size={14} className="text-blue-400 flex-shrink-0" />
//                   <span>{registeredOffice.email}</span>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* ====== NEWSLETTER + SOCIAL ====== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-t border-white/10">
//           {/* Newsletter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
//               <Zap className="h-4 w-4 text-yellow-400" />
//               Subscribe to get latest insights
//             </h3>
//             <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 overflow-hidden max-w-md hover:border-blue-500/50 transition-all duration-300">
//               <input 
//                 type="email" 
//                 placeholder="Email Address*" 
//                 className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none"
//               />
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2.5 rounded-full mx-1 transition-all duration-200 shadow-lg shadow-blue-500/30"
//               >
//                 <Send size={16} />
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Social Icons */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             viewport={{ once: true }}
//             className="flex items-center justify-start md:justify-end gap-3"
//           >
//             {[
//               { icon: FacebookIcon, color: 'hover:bg-blue-600', shadow: 'hover:shadow-blue-600/30' },
//               { icon: TwitterIcon, color: 'hover:bg-sky-500', shadow: 'hover:shadow-sky-500/30' },
//               { icon: LinkedinIcon, color: 'hover:bg-blue-700', shadow: 'hover:shadow-blue-700/30' },
//               { icon: YoutubeIcon, color: 'hover:bg-red-600', shadow: 'hover:shadow-red-600/30' },
//               { icon: InstagramIcon, color: 'hover:bg-pink-600', shadow: 'hover:shadow-pink-600/30' }
//             ].map((social, index) => (
//               <motion.a
//                 key={index}
//                 href="#"
//                 whileHover={{ scale: 1.15, y: -5 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg ${social.color} ${social.shadow} border border-white/10 hover:border-transparent`}
//               >
//                 <social.icon />
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>

//         {/* ====== BOTTOM BAR ====== */}
//         <div className="py-4 mt-2 border-t border-white/10">
//           <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 text-xs">
//             <p className="text-[15px] text-gray-400">
//               © {currentYear} CoderBox. All rights reserved.
//             </p>
            
//             <div className="text-[15px] flex items-center gap-2 text-gray-500">
//               <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">
//                 Privacy Policy
//               </Link>
//               <span className="text-[15px] text-gray-600">|</span>
//               <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
//                 Terms of Service
//               </Link>
//               <span className="text-gray-600">|</span>
//               <Link to="/cookies" className="hover:text-blue-400 transition-colors duration-200">
//                 Cookie Policy
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Building2, Globe, MapPinned, ArrowUp, Sparkles, Zap, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ============= DATA =============
  const servicesLinks = [
    { name: 'Cognitive Services', path: '/services/cognitive' },
    { name: 'Digital Services', path: '/services/digital' },
    { name: 'Information Technology Services', path: '/services/it' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const solutionsLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const registeredOffice = {
    address: 'Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068',
    phone: '+918928809025 / +917208769025',
    email: 'support@thecoderbox.com'
  };

  // ============= SOCIAL ICONS =============
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] text-gray-300 overflow-hidden">
      
      {/* ===== CINEMATIC BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://t4.ftcdn.net/jpg/02/50/95/91/360_F_250959105_KFS05K9HHels3cK6nZcID63s1sEjciGn.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <motion.div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
          animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
          animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-pink-600/10 blur-3xl"
          animate={{ scale: [1, 1.3, 0.7, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* ===== GLOWING TOP LINE ===== */}
      <div className="relative z-10 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"></div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6 z-10">
        
        {/* ====== MAIN FOOTER GRID ====== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-4">
          
          {/* Column 1 - CODERBOX WITH LOGO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="flex items-center gap-3 mb-3"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/aHR0cHM6Ly9tZWRpYS5uYXVrcmkuY29tL21lZGlhL2FiY29tcGxvZ28vY29kZXJib3gtb3JpZ2luYWwuanBn.webp"
                alt="CoderBox Logo"
                className="w-12 h-12 object-contain rounded-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/56/2563eb/ffffff?text=CB';
                }}
              />
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-400 leading-relaxed mb-3"
              whileHover={{ x: 5 }}
            >
              CoderBox, your go-to team for all things digital! We specialize in crafting digital marketing solutions 
            </motion.p>
          </motion.div>

          {/* Column 2 - OUR SERVICES */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-500"></span>
              OUR SERVICES
            </h3>
            <ul className="space-y-1.5 text-sm">
              {servicesLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 8 }}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - QUICK LINKS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-500"></span>
              QUICK LINKS
            </h3>
            <ul className="space-y-1.5 text-sm">
              {solutionsLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 8 }}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - CONTACT US */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-500"></span>
              CONTACT US
            </h3>
            
            <div>
              <span className="text-blue-400 font-semibold text-xs block mb-1.5">📌 REGISTERED OFFICE</span>
              <p className="text-sm text-gray-400 leading-relaxed mb-1.5">
                {registeredOffice.address}
              </p>
              <div className="space-y-1">
                <motion.div whileHover={{ x: 5 }} className="text-sm text-gray-400 flex items-center gap-2">
                  <Phone size={14} className="text-blue-400 flex-shrink-0" />
                  <span>{registeredOffice.phone}</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="text-sm text-gray-400 flex items-center gap-2">
                  <Mail size={14} className="text-blue-400 flex-shrink-0" />
                  <span>{registeredOffice.email}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ====== NEWSLETTER + SOCIAL ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-t border-white/10">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              Subscribe to get latest insights
            </h3>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 overflow-hidden max-w-md hover:border-blue-500/50 transition-all duration-300">
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2.5 rounded-full mx-1 transition-all duration-200 shadow-lg shadow-blue-500/30"
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-start md:justify-end gap-3"
          >
            {[
              { icon: FacebookIcon, color: 'hover:bg-blue-600', shadow: 'hover:shadow-blue-600/30' },
              { icon: TwitterIcon, color: 'hover:bg-sky-500', shadow: 'hover:shadow-sky-500/30' },
              { icon: LinkedinIcon, color: 'hover:bg-blue-700', shadow: 'hover:shadow-blue-700/30' },
              { icon: YoutubeIcon, color: 'hover:bg-red-600', shadow: 'hover:shadow-red-600/30' },
              { icon: InstagramIcon, color: 'hover:bg-pink-600', shadow: 'hover:shadow-pink-600/30' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg ${social.color} ${social.shadow} border border-white/10 hover:border-transparent"
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ====== BOTTOM BAR ====== */}
        <div className="py-4 mt-2 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 text-xs">
            <p className="text-sm text-gray-400">
              © {currentYear} CoderBox. All rights reserved.
            </p>
            
            <div className="text-sm flex items-center gap-2 text-gray-500">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;