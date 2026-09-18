// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
// // // // import AnimatedSection from './AnimatedSection';

// // // // const ContactSection = () => {
// // // //   // Animation variants for staggered children
// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       transition: {
// // // //         staggerChildren: 0.1,
// // // //         delayChildren: 0.2
// // // //       }
// // // //     }
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { opacity: 0, y: 20 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: {
// // // //         duration: 0.5,
// // // //         ease: [0.215, 0.61, 0.355, 1]
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // // //       {/* Animated Background Elements */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <motion.div
// // // //           className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // // //           animate={{ 
// // // //             x: [0, 50, -50, 0],
// // // //             y: [0, -50, 50, 0],
// // // //             scale: [1, 1.2, 0.8, 1]
// // // //           }}
// // // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // // //           animate={{ 
// // // //             x: [0, -50, 50, 0],
// // // //             y: [0, 50, -50, 0],
// // // //             scale: [1, 0.8, 1.2, 1]
// // // //           }}
// // // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
// // // //         <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
// // // //           {/* Left Column */}
// // // //           <div>
// // // //             <motion.span 
// // // //               className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30 inline-block"
// // // //               whileHover={{ scale: 1.05 }}
// // // //               animate={{ 
// // // //                 y: [0, -3, 0],
// // // //               }}
// // // //               transition={{ duration: 2, repeat: Infinity }}
// // // //             >
// // // //               Let's Talk!
// // // //             </motion.span>
// // // //             <motion.h2 
// // // //               className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6"
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // //             >
// // // //               Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us!</span>
// // // //             </motion.h2>
// // // //             <motion.p 
// // // //               className="text-blue-200/80 text-lg leading-relaxed mb-8"
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.8, delay: 0.3 }}
// // // //             >
// // // //               Benefit of the society where we operate. A success website obviously needs great.
// // // //             </motion.p>
            
// // // //             <motion.div 
// // // //               className="space-y-4"
// // // //               variants={containerVariants}
// // // //               initial="hidden"
// // // //               whileInView="visible"
// // // //               viewport={{ once: true }}
// // // //             >
// // // //               {[
// // // //                 { icon: Phone, label: 'Call if emergency!', value: '+91 8928809025', href: 'tel:+918928809025', subValue: 'Mon-Sat, 9AM-6PM' },
// // // //                 { icon: Mail, label: 'Email', value: 'info@coderbox.com', href: 'mailto:info@coderbox.com', subValue: 'We reply within 24hrs' },
// // // //                 { icon: MapPin, label: 'Location', value: 'PAN India', href: '#', subValue: 'Multiple offices across India' }
// // // //               ].map((item, index) => (
// // // //                 <motion.div
// // // //                   key={index}
// // // //                   variants={itemVariants}
// // // //                   whileHover={{ 
// // // //                     x: 10,
// // // //                     borderColor: "rgba(59,130,246,0.5)",
// // // //                     backgroundColor: "rgba(255,255,255,0.08)"
// // // //                   }}
// // // //                   className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-white/30 transition-all duration-300"
// // // //                 >
// // // //                   <motion.div 
// // // //                     className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0"
// // // //                     whileHover={{ scale: 1.1, rotate: 5 }}
// // // //                   >
// // // //                     <item.icon className="h-6 w-6" />
// // // //                   </motion.div>
// // // //                   <div className="flex-1">
// // // //                     <p className="text-sm text-blue-200/60">{item.label}</p>
// // // //                     <a href={item.href} className="font-semibold text-white hover:text-blue-400 transition-colors">
// // // //                       {item.value}
// // // //                     </a>
// // // //                     {item.subValue && (
// // // //                       <p className="text-xs text-blue-200/50 flex items-center gap-1 mt-0.5">
// // // //                         <Clock className="h-3 w-3" />
// // // //                         {item.subValue}
// // // //                       </p>
// // // //                     )}
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </motion.div>

// // // //             {/* Trust Badge */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.4 }}
// // // //               viewport={{ once: true }}
// // // //               className="mt-8 flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
// // // //             >
// // // //               <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
// // // //               <div>
// // // //                 <p className="text-white text-sm font-medium">100% Satisfaction Guaranteed</p>
// // // //                 <p className="text-blue-200/50 text-xs">We value your trust and feedback</p>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* Right Column - Form with better visibility */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: 30 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // //           >
// // // //             <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(99,102,241,0.3)] transition-all duration-500">
// // // //               <div className="mb-6">
// // // //                 <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
// // // //                 <p className="text-blue-200/70 text-sm mt-1">We'll get back to you as soon as possible</p>
// // // //               </div>

// // // //               <form className="space-y-5">
// // // //                 <div>
// // // //                   <label className="block text-sm font-semibold text-white/90 mb-2">Your Name</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50"
// // // //                     placeholder="Enter your name"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-sm font-semibold text-white/90 mb-2">Your Email</label>
// // // //                   <input 
// // // //                     type="email" 
// // // //                     className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50"
// // // //                     placeholder="Enter your email"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-sm font-semibold text-white/90 mb-2">Your Subject</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50"
// // // //                     placeholder="Enter subject"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-sm font-semibold text-white/90 mb-2">Message</label>
// // // //                   <textarea 
// // // //                     rows="3"
// // // //                     className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 resize-none"
// // // //                     placeholder="Write your message..."
// // // //                   />
// // // //                 </div>
// // // //                 <motion.button 
// // // //                   type="submit"
// // // //                   whileHover={{ 
// // // //                     scale: 1.02,
// // // //                     boxShadow: "0 20px 40px rgba(99,102,241,0.4)"
// // // //                   }}
// // // //                   whileTap={{ scale: 0.98 }}
// // // //                   className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-2xl text-white py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group"
// // // //                 >
// // // //                   <span>Submit Now</span>
// // // //                   <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
// // // //                 </motion.button>
// // // //               </form>

// // // //               <div className="mt-6 flex items-center justify-center gap-4 text-xs text-blue-200/50">
// // // //                 <span className="flex items-center gap-1">
// // // //                   <CheckCircle className="h-3 w-3 text-green-400" />
// // // //                   Secure
// // // //                 </span>
// // // //                 <span className="w-px h-4 bg-white/20"></span>
// // // //                 <span className="flex items-center gap-1">
// // // //                   <CheckCircle className="h-3 w-3 text-green-400" />
// // // //                   Encrypted
// // // //                 </span>
// // // //                 <span className="w-px h-4 bg-white/20"></span>
// // // //                 <span className="flex items-center gap-1">
// // // //                   <CheckCircle className="h-3 w-3 text-green-400" />
// // // //                   Private
// // // //                 </span>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ContactSection;






// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
// // // // import AnimatedSection from './AnimatedSection';

// // // // const ContactSection = () => {
// // // //   // Animation variants for staggered children
// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       transition: {
// // // //         staggerChildren: 0.1,
// // // //         delayChildren: 0.2
// // // //       }
// // // //     }
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { opacity: 0, y: 20 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: {
// // // //         duration: 0.5,
// // // //         ease: [0.215, 0.61, 0.355, 1]
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // // //       {/* Animated Background Elements */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <motion.div
// // // //           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // // //           animate={{ 
// // // //             x: [0, 50, -50, 0],
// // // //             y: [0, -50, 50, 0],
// // // //             scale: [1, 1.2, 0.8, 1]
// // // //           }}
// // // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // // //           animate={{ 
// // // //             x: [0, -50, 50, 0],
// // // //             y: [0, 50, -50, 0],
// // // //             scale: [1, 0.8, 1.2, 1]
// // // //           }}
// // // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // // //         <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
// // // //           {/* Left Column */}
// // // //           <div>
// // // //             <motion.span 
// // // //               className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/30 inline-block"
// // // //               whileHover={{ scale: 1.05 }}
// // // //               animate={{ 
// // // //                 y: [0, -3, 0],
// // // //               }}
// // // //               transition={{ duration: 2, repeat: Infinity }}
// // // //             >
// // // //               Let's Talk!
// // // //             </motion.span>
// // // //             <motion.h2 
// // // //               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-[1.15]"
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.8, delay: 0.2 }}
// // // //             >
// // // //               Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us!</span>
// // // //             </motion.h2>
// // // //             <motion.p 
// // // //               className="text-blue-200/80 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6"
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.8, delay: 0.3 }}
// // // //             >
// // // //               Benefit of the society where we operate. A success website obviously needs great.
// // // //             </motion.p>
            
// // // //             <motion.div 
// // // //               className="space-y-3"
// // // //               variants={containerVariants}
// // // //               initial="hidden"
// // // //               whileInView="visible"
// // // //               viewport={{ once: true }}
// // // //             >
// // // //               {[
// // // //                 { icon: Phone, label: 'Call if emergency!', value: '+91 8928809025', href: 'tel:+918928809025', subValue: 'Mon-Sat, 9AM-6PM' },
// // // //                 { icon: Mail, label: 'Email', value: 'info@coderbox.com', href: 'mailto:info@coderbox.com', subValue: 'We reply within 24hrs' },
// // // //                 { icon: MapPin, label: 'Location', value: 'PAN India', href: '#', subValue: 'Multiple offices across India' }
// // // //               ].map((item, index) => (
// // // //                 <motion.div
// // // //                   key={index}
// // // //                   variants={itemVariants}
// // // //                   whileHover={{ 
// // // //                     x: 8,
// // // //                     borderColor: "rgba(59,130,246,0.5)",
// // // //                     backgroundColor: "rgba(255,255,255,0.08)"
// // // //                   }}
// // // //                   className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-xl p-3 sm:p-4 border border-white/20 hover:border-white/30 transition-all duration-300"
// // // //                 >
// // // //                   <motion.div 
// // // //                     className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0"
// // // //                     whileHover={{ scale: 1.1, rotate: 5 }}
// // // //                   >
// // // //                     <item.icon className="h-5 w-5" />
// // // //                   </motion.div>
// // // //                   <div className="flex-1">
// // // //                     <p className="text-[10px] sm:text-xs text-blue-200/60">{item.label}</p>
// // // //                     <a href={item.href} className="font-semibold text-white hover:text-blue-400 transition-colors text-sm sm:text-base">
// // // //                       {item.value}
// // // //                     </a>
// // // //                     {item.subValue && (
// // // //                       <p className="text-[8px] sm:text-[10px] text-blue-200/50 flex items-center gap-1 mt-0.5">
// // // //                         <Clock className="h-2.5 w-2.5" />
// // // //                         {item.subValue}
// // // //                       </p>
// // // //                     )}
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </motion.div>

// // // //             {/* Trust Badge */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.4 }}
// // // //               viewport={{ once: true }}
// // // //               className="mt-5 sm:mt-6 flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20"
// // // //             >
// // // //               <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
// // // //               <div>
// // // //                 <p className="text-white text-xs sm:text-sm font-medium">100% Satisfaction Guaranteed</p>
// // // //                 <p className="text-blue-200/50 text-[8px] sm:text-[10px]">We value your trust and feedback</p>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* Right Column - Form */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: 30 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // //           >
// // // //             <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-7 border border-white/20 shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(99,102,241,0.3)] transition-all duration-500">
// // // //               <div className="mb-4">
// // // //                 <h3 className="text-lg sm:text-xl font-bold text-white">Send Us a Message</h3>
// // // //                 <p className="text-blue-200/70 text-[10px] sm:text-xs mt-0.5">We'll get back to you as soon as possible</p>
// // // //               </div>

// // // //               <form className="space-y-3 sm:space-y-4">
// // // //                 <div>
// // // //                   <label className="block text-[10px] sm:text-xs font-semibold text-white/90 mb-1">Your Name</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 text-sm"
// // // //                     placeholder="Enter your name"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-[10px] sm:text-xs font-semibold text-white/90 mb-1">Your Email</label>
// // // //                   <input 
// // // //                     type="email" 
// // // //                     className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 text-sm"
// // // //                     placeholder="Enter your email"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-[10px] sm:text-xs font-semibold text-white/90 mb-1">Your Subject</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 text-sm"
// // // //                     placeholder="Enter subject"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-[10px] sm:text-xs font-semibold text-white/90 mb-1">Message</label>
// // // //                   <textarea 
// // // //                     rows="3"
// // // //                     className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 resize-none text-sm"
// // // //                     placeholder="Write your message..."
// // // //                   />
// // // //                 </div>
// // // //                 <motion.button 
// // // //                   type="submit"
// // // //                   whileHover={{ 
// // // //                     scale: 1.02,
// // // //                     boxShadow: "0 20px 40px rgba(99,102,241,0.4)"
// // // //                   }}
// // // //                   whileTap={{ scale: 0.98 }}
// // // //                   className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-2xl text-white py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group text-sm"
// // // //                 >
// // // //                   <span>Submit Now</span>
// // // //                   <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
// // // //                 </motion.button>
// // // //               </form>

// // // //               <div className="mt-4 flex items-center justify-center gap-3 text-[8px] sm:text-[10px] text-blue-200/50">
// // // //                 <span className="flex items-center gap-0.5">
// // // //                   <CheckCircle className="h-2.5 w-2.5 text-green-400" />
// // // //                   Secure
// // // //                 </span>
// // // //                 <span className="w-px h-3 bg-white/20"></span>
// // // //                 <span className="flex items-center gap-0.5">
// // // //                   <CheckCircle className="h-2.5 w-2.5 text-green-400" />
// // // //                   Encrypted
// // // //                 </span>
// // // //                 <span className="w-px h-3 bg-white/20"></span>
// // // //                 <span className="flex items-center gap-0.5">
// // // //                   <CheckCircle className="h-2.5 w-2.5 text-green-400" />
// // // //                   Private
// // // //                 </span>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ContactSection;




// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
// // // // import AnimatedSection from './AnimatedSection';

// // // // const ContactSection = () => {
// // // //   // Animation variants for staggered children
// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       transition: {
// // // //         staggerChildren: 0.08,
// // // //         delayChildren: 0.15
// // // //       }
// // // //     }
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { opacity: 0, y: 15 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: {
// // // //         duration: 0.4,
// // // //         ease: [0.215, 0.61, 0.355, 1]
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
// // // //       {/* Animated Background Elements - Smaller */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <motion.div
// // // //           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // // //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// // // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // // //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// // // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
// // // //         <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
// // // //           {/* Left Column - Compact */}
// // // //           <div>
// // // //             <motion.span 
// // // //               className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-blue-500/30 inline-block"
// // // //               whileHover={{ scale: 1.05 }}
// // // //               animate={{ y: [0, -3, 0] }}
// // // //               transition={{ duration: 2, repeat: Infinity }}
// // // //             >
// // // //               Let's Talk!
// // // //             </motion.span>
// // // //             <motion.h2 
// // // //               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight"
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.15 }}
// // // //             >
// // // //               Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us!</span>
// // // //             </motion.h2>
// // // //             <motion.p 
// // // //               className="text-blue-200/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5"
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // //             >
// // // //               Benefit of the society where we operate. A success website obviously needs great.
// // // //             </motion.p>
            
// // // //             <motion.div 
// // // //               className="space-y-2 sm:space-y-2.5"
// // // //               variants={containerVariants}
// // // //               initial="hidden"
// // // //               whileInView="visible"
// // // //               viewport={{ once: true }}
// // // //             >
// // // //               {[
// // // //                 { icon: Phone, label: 'Call if emergency!', value: '+91 8928809025', href: 'tel:+918928809025', subValue: 'Mon-Sat, 9AM-6PM' },
// // // //                 { icon: Mail, label: 'Email', value: 'info@coderbox.com', href: 'mailto:info@coderbox.com', subValue: 'We reply within 24hrs' },
// // // //                 { icon: MapPin, label: 'Location', value: 'PAN India', href: '#', subValue: 'Multiple offices across India' }
// // // //               ].map((item, index) => (
// // // //                 <motion.div
// // // //                   key={index}
// // // //                   variants={itemVariants}
// // // //                   whileHover={{ 
// // // //                     x: 6,
// // // //                     borderColor: "rgba(59,130,246,0.5)",
// // // //                     backgroundColor: "rgba(255,255,255,0.08)"
// // // //                   }}
// // // //                   className="flex items-center space-x-2.5 bg-white/10 backdrop-blur-lg rounded-lg p-2.5 sm:p-3 border border-white/20 hover:border-white/30 transition-all duration-300"
// // // //                 >
// // // //                   <motion.div 
// // // //                     className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0"
// // // //                     whileHover={{ scale: 1.1, rotate: 5 }}
// // // //                   >
// // // //                     <item.icon className="h-4 w-4" />
// // // //                   </motion.div>
// // // //                   <div className="flex-1">
// // // //                     <p className="text-[9px] sm:text-[10px] text-blue-200/60">{item.label}</p>
// // // //                     <a href={item.href} className="font-semibold text-white hover:text-blue-400 transition-colors text-xs sm:text-sm">
// // // //                       {item.value}
// // // //                     </a>
// // // //                     {item.subValue && (
// // // //                       <p className="text-[7px] sm:text-[9px] text-blue-200/50 flex items-center gap-1 mt-0.5">
// // // //                         <Clock className="h-2 w-2" />
// // // //                         {item.subValue}
// // // //                       </p>
// // // //                     )}
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </motion.div>

// // // //             {/* Trust Badge - Compact */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 15 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.4, delay: 0.3 }}
// // // //               viewport={{ once: true }}
// // // //               className="mt-4 sm:mt-5 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-white/20"
// // // //             >
// // // //               <CheckCircle className="h-3.5 w-3.5 text-green-400 flex-shrink-0" />
// // // //               <div>
// // // //                 <p className="text-white text-[10px] sm:text-xs font-medium">100% Satisfaction Guaranteed</p>
// // // //                 <p className="text-blue-200/50 text-[7px] sm:text-[9px]">We value your trust and feedback</p>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>

// // // //           {/* Right Column - Form Compact */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: 20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.3 }}
// // // //           >
// // // //             <div className="bg-white/15 backdrop-blur-xl rounded-xl p-4 sm:p-5 md:p-6 border border-white/20 shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(99,102,241,0.3)] transition-all duration-500">
// // // //               <div className="mb-3">
// // // //                 <h3 className="text-base sm:text-lg font-bold text-white">Send Us a Message</h3>
// // // //                 <p className="text-blue-200/70 text-[9px] sm:text-[10px] mt-0.5">We'll get back to you as soon as possible</p>
// // // //               </div>

// // // //               <form className="space-y-2.5 sm:space-y-3">
// // // //                 <div>
// // // //                   <label className="block text-[9px] sm:text-[10px] font-semibold text-white/90 mb-0.5">Your Name</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 text-xs sm:text-sm"
// // // //                     placeholder="Enter your name"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-[9px] sm:text-[10px] font-semibold text-white/90 mb-0.5">Your Email</label>
// // // //                   <input 
// // // //                     type="email" 
// // // //                     className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 text-xs sm:text-sm"
// // // //                     placeholder="Enter your email"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-[9px] sm:text-[10px] font-semibold text-white/90 mb-0.5">Your Subject</label>
// // // //                   <input 
// // // //                     type="text" 
// // // //                     className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 text-xs sm:text-sm"
// // // //                     placeholder="Enter subject"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-[9px] sm:text-[10px] font-semibold text-white/90 mb-0.5">Message</label>
// // // //                   <textarea 
// // // //                     rows="2"
// // // //                     className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 resize-none text-xs sm:text-sm"
// // // //                     placeholder="Write your message..."
// // // //                   />
// // // //                 </div>
// // // //                 <motion.button 
// // // //                   type="submit"
// // // //                   whileHover={{ 
// // // //                     scale: 1.02,
// // // //                     boxShadow: "0 15px 30px rgba(1,173,240,0.4)"
// // // //                   }}
// // // //                   whileTap={{ scale: 0.98 }}
// // // //                   className="w-full bg-[#01adf0] hover:shadow-2xl text-white py-1.5 sm:py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group text-xs sm:text-sm"
// // // //                 >
// // // //                   <span>Submit Now</span>
// // // //                   <Send className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
// // // //                 </motion.button>
// // // //               </form>

// // // //               <div className="mt-3 flex items-center justify-center gap-2 text-[7px] sm:text-[9px] text-blue-200/50">
// // // //                 <span className="flex items-center gap-0.5">
// // // //                   <CheckCircle className="h-2 w-2 text-green-400" />
// // // //                   Secure
// // // //                 </span>
// // // //                 <span className="w-px h-2.5 bg-white/20"></span>
// // // //                 <span className="flex items-center gap-0.5">
// // // //                   <CheckCircle className="h-2 w-2 text-green-400" />
// // // //                   Encrypted
// // // //                 </span>
// // // //                 <span className="w-px h-2.5 bg-white/20"></span>
// // // //                 <span className="flex items-center gap-0.5">
// // // //                   <CheckCircle className="h-2 w-2 text-green-400" />
// // // //                   Private
// // // //                 </span>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ContactSection;


// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Send, CheckCircle } from 'lucide-react';

// // // // const ContactSection = () => {
// // // //   return (
// // // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
      
// // // //       {/* Animated Background Elements */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <motion.div
// // // //           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // // //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// // // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // // //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// // // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // // //         {/* Centered Form */}
// // // //         <div className="max-w-2xl mx-auto">
          
// // // //           {/* Header */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center mb-6 sm:mb-8"
// // // //           >
// // // //             <motion.span 
// // // //               className="sec-badge inline-block"
// // // //               whileHover={{ scale: 1.05 }}
// // // //               animate={{ y: [0, -3, 0] }}
// // // //               transition={{ duration: 2, repeat: Infinity }}
// // // //             >
// // // //               Let's Talk!
// // // //             </motion.span>
            
// // // //             <motion.h2 
// // // //               className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight"
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.15 }}
// // // //             >
// // // //               Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us!</span>
// // // //             </motion.h2>
            
// // // //             <motion.p 
// // // //               className="sec-p sec-text-light-soft"
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6, delay: 0.2 }}
// // // //             >
// // // //               Benefit of the society where we operate. A success website obviously needs great.
// // // //             </motion.p>
// // // //           </motion.div>

// // // //           {/* Form Card */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.3 }}
// // // //             viewport={{ once: true }}
// // // //             className="bg-white/15 backdrop-blur-xl rounded-xl p-4 sm:p-5 md:p-6 border border-white/20 shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(99,102,241,0.3)] transition-all duration-500"
// // // //           >
// // // //             <div className="mb-3 text-center">
// // // //               {/* Subheading (h3) */}
// // // //               <h3 className="sec-h3 sec-text-light">Send Us a Message</h3>
// // // //               {/* Paragraph (p) */}
// // // //               <p className="sec-p sec-text-light-soft mt-0.5">We'll get back to you as soon as possible</p>
// // // //             </div>

// // // //             <form className="space-y-2.5 sm:space-y-3">
// // // //               <div>
// // // //                 <label className="block sec-p font-semibold sec-text-light mb-0.5">Your Name</label>
// // // //                 <input 
// // // //                   type="text" 
// // // //                   className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 sec-p"
// // // //                   placeholder="Enter your name"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block sec-p font-semibold sec-text-light mb-0.5">Your Email</label>
// // // //                 <input 
// // // //                   type="email" 
// // // //                   className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 sec-p"
// // // //                   placeholder="Enter your email"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block sec-p font-semibold sec-text-light mb-0.5">Your Subject</label>
// // // //                 <input 
// // // //                   type="text" 
// // // //                   className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 sec-p"
// // // //                   placeholder="Enter subject"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block sec-p font-semibold sec-text-light mb-0.5">Message</label>
// // // //                 <textarea 
// // // //                   rows="3"
// // // //                   className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 resize-none sec-p"
// // // //                   placeholder="Write your message..."
// // // //                 />
// // // //               </div>
              
// // // //               {/* Submit Button */}
// // // //               <motion.button 
// // // //                 type="submit"
// // // //                 whileTap={{ scale: 0.98 }}
// // // //                 className="sec-btn w-full justify-center"
// // // //               >
// // // //                 <span>Submit Now</span>
// // // //                 <Send className="h-3.5 w-3.5 sec-btn-arrow" />
// // // //               </motion.button>
// // // //             </form>

// // // //             {/* Trust Badges */}
// // // //             <div className="mt-3 flex items-center justify-center gap-2 sec-p sec-text-light-soft">
// // // //               <span className="flex items-center gap-0.5">
// // // //                 <CheckCircle className="h-2.5 w-2.5 text-green-400" />
// // // //                 Secure
// // // //               </span>
// // // //               <span className="w-px h-2.5 bg-white/20"></span>
// // // //               <span className="flex items-center gap-0.5">
// // // //                 <CheckCircle className="h-2.5 w-2.5 text-green-400" />
// // // //                 Encrypted
// // // //               </span>
// // // //               <span className="w-px h-2.5 bg-white/20"></span>
// // // //               <span className="flex items-center gap-0.5">
// // // //                 <CheckCircle className="h-2.5 w-2.5 text-green-400" />
// // // //                 Private
// // // //               </span>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ContactSection;




// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Send, CheckCircle } from 'lucide-react';

// // // // const ContactSection = () => {
// // // //   // Google Maps embed URL (Vinir Tower, BTM Layout)
// // // //   const mapEmbedUrl = 'https://www.google.com/maps?q=Vinir+Tower,+6,+Outer+Ring+Rd,+Old+Madiwala,+Jay+Bheema+Nagar,+1st+Stage,+BTM+Layout,+Bengaluru,+Karnataka+560068&output=embed';

// // // //   return (
// // // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
      
// // // //       {/* Animated Background Elements */}
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <motion.div
// // // //           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
// // // //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// // // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //         <motion.div
// // // //           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
// // // //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// // // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // // //         />
// // // //       </div>

// // // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // // //         {/* ===== HEADER ===== */}
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           viewport={{ once: true }}
// // // //           className="text-center mb-6 sm:mb-8"
// // // //         >
// // // //           <motion.span 
// // // //             className="sec-badge inline-block"
// // // //             whileHover={{ scale: 1.05 }}
// // // //             animate={{ y: [0, -3, 0] }}
// // // //             transition={{ duration: 2, repeat: Infinity }}
// // // //           >
// // // //             Let's Talk!
// // // //           </motion.span>
          
// // // //           <motion.h2 
// // // //             className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.15 }}
// // // //           >
// // // //             Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us!</span>
// // // //           </motion.h2>
          
// // // //           <motion.p 
// // // //             className="sec-p sec-text-light-soft"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // //           >
// // // //             Benefit of the society where we operate. A success website obviously needs great.
// // // //           </motion.p>
// // // //         </motion.div>

// // // //         {/* ===== 2-COLUMN LAYOUT: MAP LEFT (equal height), FORM RIGHT ===== */}
// // // //         <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          
// // // //           {/* ===== LEFT SIDE — GOOGLE MAP (equal height to form) ===== */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: -30 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.2 }}
// // // //             viewport={{ once: true }}
// // // //             className="bg-white/15 backdrop-blur-xl rounded-xl p-2 sm:p-3 border border-white/20 shadow-2xl flex"
// // // //           >
// // // //             <iframe
// // // //               src={mapEmbedUrl}
// // // //               style={{ border: 0 }}
// // // //               allowFullScreen=""
// // // //               loading="lazy"
// // // //               referrerPolicy="no-referrer-when-downgrade"
// // // //               title="CoderBox Office Location"
// // // //               className="w-full h-full min-h-[420px] sm:min-h-[480px] lg:min-h-full rounded-lg"
// // // //             ></iframe>
// // // //           </motion.div>

// // // //           {/* ===== RIGHT SIDE — FORM (WHITE BG) ===== */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: 30 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.6, delay: 0.3 }}
// // // //             viewport={{ once: true }}
// // // //             className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-2xl flex flex-col"
// // // //           >
// // // //             <div className="mb-4 text-center">
// // // //               <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
// // // //               <p className="text-xs sm:text-sm text-gray-500">We'll get back to you as soon as possible</p>
// // // //             </div>

// // // //             <form className="space-y-3 flex-1 flex flex-col">
// // // //               <div>
// // // //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1">Your Name</label>
// // // //                 <input 
// // // //                   type="text" 
// // // //                   className="w-full px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#01adf0] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// // // //                   placeholder="Enter your name"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1">Your Email</label>
// // // //                 <input 
// // // //                   type="email" 
// // // //                   className="w-full px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#01adf0] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// // // //                   placeholder="Enter your email"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1">Your Subject</label>
// // // //                 <input 
// // // //                   type="text" 
// // // //                   className="w-full px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#01adf0] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// // // //                   placeholder="Enter subject"
// // // //                 />
// // // //               </div>
// // // //               <div className="flex-1 flex flex-col">
// // // //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1">Message</label>
// // // //                 <textarea 
// // // //                   rows="4"
// // // //                   className="w-full flex-1 px-3.5 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#01adf0] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[100px]"
// // // //                   placeholder="Write your message..."
// // // //                 />
// // // //               </div>
              
// // // //               {/* Submit Button */}
// // // //               <motion.button 
// // // //                 type="submit"
// // // //                 whileHover={{ scale: 1.02 }}
// // // //                 whileTap={{ scale: 0.98 }}
// // // //                 className="w-full inline-flex items-center justify-center gap-2 bg-[#01adf0] hover:bg-[#0196d1] text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-[#01adf0]/30 text-sm mt-auto"
// // // //               >
// // // //                 <span>Submit Now</span>
// // // //                 <Send className="h-3.5 w-3.5" />
// // // //               </motion.button>
// // // //             </form>

// // // //             {/* ✅ Trust Badges — Icons ab #01adf0 color me */}
// // // //             <div className="mt-3 flex items-center justify-center gap-3 text-xs text-gray-500">
// // // //               <span className="flex items-center gap-1">
// // // //                 <CheckCircle className="h-3 w-3 text-[#01adf0]" />
// // // //                 Secure
// // // //               </span>
// // // //               <span className="w-px h-3 bg-gray-200"></span>
// // // //               <span className="flex items-center gap-1">
// // // //                 <CheckCircle className="h-3 w-3 text-[#01adf0]" />
// // // //                 Encrypted
// // // //               </span>
// // // //               <span className="w-px h-3 bg-gray-200"></span>
// // // //               <span className="flex items-center gap-1">
// // // //                 <CheckCircle className="h-3 w-3 text-[#01adf0]" />
// // // //                 Private
// // // //               </span>
// // // //             </div>
// // // //           </motion.div>

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ContactSection;


// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Send, CheckCircle } from 'lucide-react';
// // // import {
// // //   APIProvider,
// // //   Map,
// // //   AdvancedMarker,
// // //   InfoWindow,
// // // } from "@vis.gl/react-google-maps";

// // // const ContactSection = () => {
// // //   // ===== LOCATIONS DATA =====
// // //   const locations = [
// // //     {
// // //       id: 1,
// // //       city: "Bengaluru",
// // //       country: "India",
// // //       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
// // //       position: { lat: 12.9166, lng: 77.6101 },
// // //     },
// // //     {
// // //       id: 2,
// // //       city: "Navi Mumbai",
// // //       country: "India",
// // //       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
// // //       position: { lat: 19.0771, lng: 73.0009 },
// // //     },
// // //     {
// // //       id: 3,
// // //       city: "Noida",
// // //       country: "India",
// // //       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
// // //       position: { lat: 28.6084, lng: 77.3649 },
// // //     },
// // //     {
// // //       id: 4,
// // //       city: "Hyderabad",
// // //       country: "India",
// // //       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
// // //       position: { lat: 17.4483, lng: 78.3915 },
// // //     },
// // //     {
// // //       id: 5,
// // //       city: "Dubai",
// // //       country: "UAE",
// // //       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
// // //       position: { lat: 25.1022, lng: 55.1665 },
// // //     },
// // //   ];

// // //   const defaultCenter = {
// // //     lat: 22.5,
// // //     lng: 67.5,
// // //   };

// // //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// // //   return (
// // //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
      
// // //       {/* Animated Background Elements */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <motion.div
// // //           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#008df1]/10 blur-3xl"
// // //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// // //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#005b8f]/10 blur-3xl"
// // //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// // //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// // //         />
// // //       </div>

// // //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// // //         {/* ===== HEADER ===== */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-6 sm:mb-8"
// // //         >
// // //           <motion.span 
// // //             className="sec-badge inline-block"
// // //             whileHover={{ scale: 1.05 }}
// // //             animate={{ y: [0, -3, 0] }}
// // //             transition={{ duration: 2, repeat: Infinity }}
// // //           >
// // //             Let's Talk!
// // //           </motion.span>
          
// // //           <motion.h2 
// // //             className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.15 }}
// // //           >
// // //             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
// // //           </motion.h2>
          
// // //           <motion.p 
// // //             className="sec-p sec-text-light-soft max-w-2xl mx-auto"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.2 }}
// // //           >
// // //             Benefit of the society where we operate. A success website obviously needs great.
// // //           </motion.p>
// // //         </motion.div>

// // //         {/* ===== 2-COLUMN LAYOUT: MAP LEFT (60%), FORM RIGHT (40%) ===== */}
// // //         {/* 👇 items-start → items-stretch: form map ki height match karega */}
// // //         <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          
// // //           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.2 }}
// // //             viewport={{ once: true }}
// // //             className="lg:col-span-3 flex flex-col gap-4 w-full"
// // //           >
// // //             {/* Location Cards - Horizontal Scroll */}
// // //             <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent">
// // //               {locations.map((location) => {
// // //                 const isActive = selectedLocation?.id === location.id;
// // //                 return (
// // //                   <button
// // //                     key={location.id}
// // //                     onClick={() => setSelectedLocation(location)}
// // //                     className={`flex-shrink-0 rounded-2xl p-3 min-w-[190px] text-left transition-all duration-300 ${
// // //                       isActive
// // //                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
// // //                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
// // //                     }`}
// // //                   >
// // //                     <div className="flex items-start gap-3">
// // //                       <div
// // //                         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
// // //                           isActive
// // //                             ? "bg-[#008df1] text-white"
// // //                             : "bg-white/10 text-[#00c6fb]"
// // //                         }`}
// // //                       >
// // //                         {String(location.id).padStart(2, "0")}
// // //                       </div>
// // //                       <div className="min-w-0">
// // //                         <h3 className="font-semibold text-sm truncate">{location.city}</h3>
// // //                         <p className={`mt-0.5 text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
// // //                           {location.country}
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                   </button>
// // //                 );
// // //               })}
// // //             </div>

// // //             {/* Google Map */}
// // //             <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
// // //               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
// // //                 <Map
// // //                   defaultCenter={defaultCenter}
// // //                   defaultZoom={4}
// // //                   gestureHandling="greedy"
// // //                   disableDefaultUI={false}
// // //                   mapId="YOUR_GOOGLE_MAP_ID"
// // //                   style={{ width: '100%', height: '100%' }}
// // //                 >
// // //                   {locations.map((location) => (
// // //                     <AdvancedMarker
// // //                       key={location.id}
// // //                       position={location.position}
// // //                       onClick={() => setSelectedLocation(location)}
// // //                     />
// // //                   ))}

// // //                   {selectedLocation && (
// // //                     <InfoWindow
// // //                       position={selectedLocation.position}
// // //                       onCloseClick={() => setSelectedLocation(null)}
// // //                     >
// // //                       <div className="max-w-[240px] p-1">
// // //                         <h3 className="font-semibold text-slate-900">
// // //                           {selectedLocation.city}
// // //                         </h3>
// // //                         <p className="mt-1 text-sm text-slate-600">
// // //                           {selectedLocation.address}
// // //                         </p>
// // //                       </div>
// // //                     </InfoWindow>
// // //                   )}
// // //                 </Map>
// // //               </APIProvider>
// // //             </div>
// // //           </motion.div>

// // //           {/* ===== RIGHT SIDE — FORM (Height Ab Badi) ===== */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.3 }}
// // //             viewport={{ once: true }}
// // //             // 👇 lg:min-h-[750px] add kiya (map + location cards ki total height ke barabar)
// // //             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-2xl flex flex-col lg:min-h-[750px]"
// // //           >
// // //             <div className="mb-6 text-center">
// // //               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">Send Us a Message</h3>
// // //               <p className="text-sm text-gray-500">We'll get back to you as soon as possible</p>
// // //             </div>

// // //             <form className="space-y-4 flex-1 flex flex-col">
// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Name</label>
// // //                 <input 
// // //                   type="text" 
// // //                   className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// // //                   placeholder="Enter your name"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Email</label>
// // //                 <input 
// // //                   type="email" 
// // //                   className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// // //                   placeholder="Enter your email"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Subject</label>
// // //                 <input 
// // //                   type="text" 
// // //                   className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// // //                   placeholder="Enter subject"
// // //                 />
// // //               </div>
// // //               <div className="flex-1 flex flex-col">
// // //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Message</label>
// // //                 <textarea 
// // //                   rows="8"
// // //                   // 👇 min-h badhai (100px se 180px)
// // //                   className="w-full flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[180px]"
// // //                   placeholder="Write your message..."
// // //                 />
// // //               </div>
              
// // //               <motion.button 
// // //                 type="submit"
// // //                 whileHover={{ scale: 1.02 }}
// // //                 whileTap={{ scale: 0.98 }}
// // //                 className="w-full inline-flex items-center justify-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white font-semibold px-5 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-[#008df1]/30 text-sm mt-auto"
// // //               >
// // //                 <span>Submit Now</span>
// // //                 <Send className="h-4 w-4" />
// // //               </motion.button>
// // //             </form>

// // //             {/* Trust Badges */}
// // //             <div className="mt-5 flex items-center justify-center gap-3 text-xs text-gray-500">
// // //               <span className="flex items-center gap-1">
// // //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// // //                 Secure
// // //               </span>
// // //               <span className="w-px h-3 bg-gray-200"></span>
// // //               <span className="flex items-center gap-1">
// // //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// // //                 Encrypted
// // //               </span>
// // //               <span className="w-px h-3 bg-gray-200"></span>
// // //               <span className="flex items-center gap-1">
// // //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// // //                 Private
// // //               </span>
// // //             </div>
// // //           </motion.div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ContactSection;






// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Send, CheckCircle } from 'lucide-react';
// // import {
// //   APIProvider,
// //   Map,
// //   AdvancedMarker,
// //   InfoWindow,
// // } from "@vis.gl/react-google-maps";

// // const ContactSection = () => {
// //   // ===== LOCATIONS DATA =====
// //   const locations = [
// //     {
// //       id: 1,
// //       city: "Bengaluru",
// //       country: "India",
// //       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
// //       position: { lat: 12.9166, lng: 77.6101 },
// //     },
// //     {
// //       id: 2,
// //       city: "Navi Mumbai",
// //       country: "India",
// //       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
// //       position: { lat: 19.0771, lng: 73.0009 },
// //     },
// //     {
// //       id: 3,
// //       city: "Noida",
// //       country: "India",
// //       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
// //       position: { lat: 28.6084, lng: 77.3649 },
// //     },
// //     {
// //       id: 4,
// //       city: "Hyderabad",
// //       country: "India",
// //       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
// //       position: { lat: 17.4483, lng: 78.3915 },
// //     },
// //     {
// //       id: 5,
// //       city: "Dubai",
// //       country: "UAE",
// //       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
// //       position: { lat: 25.1022, lng: 55.1665 },
// //     },
// //   ];

// //   const defaultCenter = {
// //     lat: 22.5,
// //     lng: 67.5,
// //   };

// //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// //   return (
// //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
      
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div
// //           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#008df1]/10 blur-3xl"
// //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#005b8f]/10 blur-3xl"
// //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// //         {/* ===== HEADER ===== */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-6 sm:mb-8"
// //         >
// //           <motion.span 
// //             className="sec-badge inline-block"
// //             whileHover={{ scale: 1.05 }}
// //             animate={{ y: [0, -3, 0] }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             Let's Talk!
// //           </motion.span>
          
// //           <motion.h2 
// //             className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.15 }}
// //           >
// //             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
// //           </motion.h2>
          
// //           <motion.p 
// //             className="sec-p sec-text-light-soft max-w-2xl mx-auto"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //           >
// //             Benefit of the society where we operate. A success website obviously needs great.
// //           </motion.p>
// //         </motion.div>

// //         {/* ===== 2-COLUMN LAYOUT: MAP LEFT (60%), FORM RIGHT (40%) ===== */}
// //         <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          
// //           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-3 flex flex-col gap-4 w-full"
// //           >
// //             {/* Location Cards - Horizontal Scroll */}
// //             <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent">
// //               {locations.map((location) => {
// //                 const isActive = selectedLocation?.id === location.id;
// //                 return (
// //                   <button
// //                     key={location.id}
// //                     onClick={() => setSelectedLocation(location)}
// //                     className={`flex-shrink-0 rounded-2xl p-3 min-w-[190px] text-left transition-all duration-300 ${
// //                       isActive
// //                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
// //                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
// //                     }`}
// //                   >
// //                     <div className="flex items-start gap-3">
// //                       <div
// //                         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
// //                           isActive
// //                             ? "bg-[#008df1] text-white"
// //                             : "bg-white/10 text-[#00c6fb]"
// //                         }`}
// //                       >
// //                         {String(location.id).padStart(2, "0")}
// //                       </div>
// //                       <div className="min-w-0">
// //                         <h3 className="font-semibold text-sm truncate">{location.city}</h3>
// //                         <p className={`mt-0.5 text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
// //                           {location.country}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* Google Map */}
// //             <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
// //               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
// //                 <Map
// //                   defaultCenter={defaultCenter}
// //                   defaultZoom={4}
// //                   gestureHandling="greedy"
// //                   disableDefaultUI={false}
// //                   mapId="YOUR_GOOGLE_MAP_ID"
// //                   style={{ width: '100%', height: '100%' }}
// //                 >
// //                   {locations.map((location) => (
// //                     <AdvancedMarker
// //                       key={location.id}
// //                       position={location.position}
// //                       onClick={() => setSelectedLocation(location)}
// //                     />
// //                   ))}

// //                   {selectedLocation && (
// //                     <InfoWindow
// //                       position={selectedLocation.position}
// //                       onCloseClick={() => setSelectedLocation(null)}
// //                     >
// //                       <div className="max-w-[240px] p-1">
// //                         <h3 className="font-semibold text-slate-900">
// //                           {selectedLocation.city}
// //                         </h3>
// //                         <p className="mt-1 text-sm text-slate-600">
// //                           {selectedLocation.address}
// //                         </p>
// //                       </div>
// //                     </InfoWindow>
// //                   )}
// //                 </Map>
// //               </APIProvider>
// //             </div>
// //           </motion.div>

// //           {/* ===== RIGHT SIDE — FORM (Auto height, left side ke barabar) ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             viewport={{ once: true }}
// //             // 👇 min-h hata diya — items-stretch se automatically equal height milega
// //             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
// //           >
// //             <div className="mb-5 text-center">
// //               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">Send Us a Message</h3>
// //               <p className="text-sm text-gray-500">We'll get back to you as soon as possible</p>
// //             </div>

// //             <form className="space-y-3.5 flex-1 flex flex-col">
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Name</label>
// //                 <input 
// //                   type="text" 
// //                   className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter your name"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Email</label>
// //                 <input 
// //                   type="email" 
// //                   className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter your email"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Subject</label>
// //                 <input 
// //                   type="text" 
// //                   className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter subject"
// //                 />
// //               </div>
// //               <div className="flex-1 flex flex-col">
// //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Message</label>
// //                 <textarea 
// //                   rows="5"
// //                   // 👇 min-h hata diya, flex-1 se automatically stretch hoga
// //                   className="w-full flex-1 px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm"
// //                   placeholder="Write your message..."
// //                 />
// //               </div>
              
// //               <motion.button 
// //                 type="submit"
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className="w-full inline-flex items-center justify-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-[#008df1]/30 text-sm"
// //               >
// //                 <span>Submit Now</span>
// //                 <Send className="h-4 w-4" />
// //               </motion.button>
// //             </form>

// //             {/* Trust Badges */}
// //             <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-500">
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// //                 Secure
// //               </span>
// //               <span className="w-px h-3 bg-gray-200"></span>
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// //                 Encrypted
// //               </span>
// //               <span className="w-px h-3 bg-gray-200"></span>
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// //                 Private
// //               </span>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactSection;









// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Send, CheckCircle } from 'lucide-react';
// // import {
// //   APIProvider,
// //   Map,
// //   AdvancedMarker,
// //   InfoWindow,
// // } from "@vis.gl/react-google-maps";

// // const ContactSection = () => {
// //   // ===== LOCATIONS DATA =====
// //   const locations = [
// //     {
// //       id: 1,
// //       city: "Bengaluru",
// //       country: "India",
// //       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
// //       position: { lat: 12.9166, lng: 77.6101 },
// //     },
// //     {
// //       id: 2,
// //       city: "Navi Mumbai",
// //       country: "India",
// //       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
// //       position: { lat: 19.0771, lng: 73.0009 },
// //     },
// //     {
// //       id: 3,
// //       city: "Noida",
// //       country: "India",
// //       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
// //       position: { lat: 28.6084, lng: 77.3649 },
// //     },
// //     {
// //       id: 4,
// //       city: "Hyderabad",
// //       country: "India",
// //       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
// //       position: { lat: 17.4483, lng: 78.3915 },
// //     },
// //     {
// //       id: 5,
// //       city: "Dubai",
// //       country: "UAE",
// //       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
// //       position: { lat: 25.1022, lng: 55.1665 },
// //     },
// //   ];

// //   const defaultCenter = {
// //     lat: 22.5,
// //     lng: 67.5,
// //   };

// //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// //   return (
// //     // 👇 YAHAN WHYCHOOSEUS WALA DARK BACKGROUND LAGAYA HAI
// //     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
// //       {/* Animated Background Blobs — Wahi WhyChooseUs wale */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div
// //           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
// //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
// //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
// //         {/* ===== HEADER ===== */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-6 sm:mb-8"
// //         >
// //           <motion.span 
// //             className="sec-badge inline-block"
// //             whileHover={{ scale: 1.05 }}
// //             animate={{ y: [0, -3, 0] }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             Let's Talk!
// //           </motion.span>
          
// //           <motion.h2 
// //             className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.15 }}
// //           >
// //             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
// //           </motion.h2>
          
// //           <motion.p 
// //             className="sec-p sec-text-light-soft max-w-2xl mx-auto"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //           >
// //             Benefit of the society where we operate. A success website obviously needs great.
// //           </motion.p>
// //         </motion.div>

// //         {/* ===== 2-COLUMN LAYOUT: MAP LEFT (60%), FORM RIGHT (40%) ===== */}
// //         <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          
// //           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-3 flex flex-col gap-4 w-full"
// //           >
// //             {/* Location Cards - Horizontal Scroll (Dark Theme) */}
// //             <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent">
// //               {locations.map((location) => {
// //                 const isActive = selectedLocation?.id === location.id;
// //                 return (
// //                   <button
// //                     key={location.id}
// //                     onClick={() => setSelectedLocation(location)}
// //                     className={`flex-shrink-0 rounded-2xl p-3 min-w-[190px] text-left transition-all duration-300 ${
// //                       isActive
// //                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
// //                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
// //                     }`}
// //                   >
// //                     <div className="flex items-start gap-3">
// //                       <div
// //                         className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
// //                           isActive
// //                             ? "bg-[#008df1] text-white"
// //                             : "bg-white/10 text-[#00c6fb]"
// //                         }`}
// //                       >
// //                         {String(location.id).padStart(2, "0")}
// //                       </div>
// //                       <div className="min-w-0">
// //                         <h3 className="font-semibold text-sm truncate">{location.city}</h3>
// //                         <p className={`mt-0.5 text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
// //                           {location.country}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* Google Map */}
// //             <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl">
// //               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
// //                 <Map
// //                   defaultCenter={defaultCenter}
// //                   defaultZoom={4}
// //                   gestureHandling="greedy"
// //                   disableDefaultUI={false}
// //                   mapId="YOUR_GOOGLE_MAP_ID"
// //                   style={{ width: '100%', height: '100%' }}
// //                 >
// //                   {locations.map((location) => (
// //                     <AdvancedMarker
// //                       key={location.id}
// //                       position={location.position}
// //                       onClick={() => setSelectedLocation(location)}
// //                     />
// //                   ))}

// //                   {selectedLocation && (
// //                     <InfoWindow
// //                       position={selectedLocation.position}
// //                       onCloseClick={() => setSelectedLocation(null)}
// //                     >
// //                       <div className="max-w-[240px] p-1">
// //                         <h3 className="font-semibold text-slate-900">
// //                           {selectedLocation.city}
// //                         </h3>
// //                         <p className="mt-1 text-sm text-slate-600">
// //                           {selectedLocation.address}
// //                         </p>
// //                       </div>
// //                     </InfoWindow>
// //                   )}
// //                 </Map>
// //               </APIProvider>
// //             </div>
// //           </motion.div>

// //           {/* ===== RIGHT SIDE — FORM (White on Dark) ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
// //           >
// //             <div className="mb-5 text-center">
// //               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">Send Us a Message</h3>
// //               <p className="text-sm text-gray-500">We'll get back to you as soon as possible</p>
// //             </div>

// //             <form className="space-y-3.5 flex-1 flex flex-col">
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Name</label>
// //                 <input 
// //                   type="text" 
// //                   className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter your name"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Email</label>
// //                 <input 
// //                   type="email" 
// //                   className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter your email"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Subject</label>
// //                 <input 
// //                   type="text" 
// //                   className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter subject"
// //                 />
// //               </div>
// //               <div className="flex-1 flex flex-col">
// //                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Message</label>
// //                 <textarea 
// //                   rows="5"
// //                   className="w-full flex-1 px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm"
// //                   placeholder="Write your message..."
// //                 />
// //               </div>
              
// //               <motion.button 
// //                 type="submit"
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className="w-full inline-flex items-center justify-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-[#008df1]/30 text-sm"
// //               >
// //                 <span>Submit Now</span>
// //                 <Send className="h-4 w-4" />
// //               </motion.button>
// //             </form>

// //             {/* Trust Badges */}
// //             <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-500">
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// //                 Secure
// //               </span>
// //               <span className="w-px h-3 bg-gray-200"></span>
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// //                 Encrypted
// //               </span>
// //               <span className="w-px h-3 bg-gray-200"></span>
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3.5 w-3.5 text-[#008df1]" />
// //                 Private
// //               </span>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactSection;










// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Send, CheckCircle } from 'lucide-react';
// // import {
// //   APIProvider,
// //   Map,
// //   AdvancedMarker,
// //   InfoWindow,
// // } from "@vis.gl/react-google-maps";

// // const ContactSection = () => {
// //   // ===== LOCATIONS DATA =====
// //   const locations = [
// //     {
// //       id: 1,
// //       city: "Bengaluru",
// //       country: "India",
// //       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
// //       position: { lat: 12.9166, lng: 77.6101 },
// //     },
// //     {
// //       id: 2,
// //       city: "Navi Mumbai",
// //       country: "India",
// //       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
// //       position: { lat: 19.0771, lng: 73.0009 },
// //     },
// //     {
// //       id: 3,
// //       city: "Noida",
// //       country: "India",
// //       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
// //       position: { lat: 28.6084, lng: 77.3649 },
// //     },
// //     {
// //       id: 4,
// //       city: "Hyderabad",
// //       country: "India",
// //       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
// //       position: { lat: 17.4483, lng: 78.3915 },
// //     },
// //     {
// //       id: 5,
// //       city: "Dubai",
// //       country: "UAE",
// //       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
// //       position: { lat: 25.1022, lng: 55.1665 },
// //     },
// //   ];

// //   const defaultCenter = {
// //     lat: 22.5,
// //     lng: 67.5,
// //   };

// //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// //   return (
// //     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
// //       {/* Animated Background Blobs */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div
// //           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
// //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
// //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
// //         {/* ===== HEADER ===== */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-8 sm:mb-10 md:mb-12"
// //         >
// //           <motion.span 
// //             className="sec-badge inline-block"
// //             whileHover={{ scale: 1.05 }}
// //             animate={{ y: [0, -3, 0] }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             Let's Talk!
// //           </motion.span>
          
// //           <motion.h2 
// //             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.15 }}
// //           >
// //             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
// //           </motion.h2>
          
// //           <motion.p 
// //             className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //           >
// //             Benefit of the society where we operate. A success website obviously needs great.
// //           </motion.p>
// //         </motion.div>

// //         {/* ===== 2-COLUMN LAYOUT ===== */}
// //         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
// //           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-3 flex flex-col gap-4 w-full"
// //           >
// //             {/* Location Cards - Horizontal Scroll */}
// //             <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent -mx-1 px-1">
// //               {locations.map((location) => {
// //                 const isActive = selectedLocation?.id === location.id;
// //                 return (
// //                   <button
// //                     key={location.id}
// //                     onClick={() => setSelectedLocation(location)}
// //                     className={`flex-shrink-0 rounded-xl sm:rounded-2xl p-3 min-w-[150px] sm:min-w-[180px] md:min-w-[190px] text-left transition-all duration-300 ${
// //                       isActive
// //                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
// //                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
// //                     }`}
// //                   >
// //                     <div className="flex items-start gap-2.5 sm:gap-3">
// //                       <div
// //                         className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
// //                           isActive
// //                             ? "bg-[#008df1] text-white"
// //                             : "bg-white/10 text-[#00c6fb]"
// //                         }`}
// //                       >
// //                         {String(location.id).padStart(2, "0")}
// //                       </div>
// //                       <div className="min-w-0">
// //                         <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
// //                         <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
// //                           {location.country}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* Google Map — Responsive Height */}
// //             <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
// //               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
// //                 <Map
// //                   defaultCenter={defaultCenter}
// //                   defaultZoom={4}
// //                   gestureHandling="greedy"
// //                   disableDefaultUI={false}
// //                   mapId="YOUR_GOOGLE_MAP_ID"
// //                   style={{ width: '100%', height: '100%' }}
// //                 >
// //                   {locations.map((location) => (
// //                     <AdvancedMarker
// //                       key={location.id}
// //                       position={location.position}
// //                       onClick={() => setSelectedLocation(location)}
// //                     />
// //                   ))}

// //                   {selectedLocation && (
// //                     <InfoWindow
// //                       position={selectedLocation.position}
// //                       onCloseClick={() => setSelectedLocation(null)}
// //                     >
// //                       <div className="max-w-[200px] sm:max-w-[240px] p-1">
// //                         <h3 className="font-semibold text-sm sm:text-base text-slate-900">
// //                           {selectedLocation.city}
// //                         </h3>
// //                         <p className="mt-1 text-xs sm:text-sm text-slate-600">
// //                           {selectedLocation.address}
// //                         </p>
// //                       </div>
// //                     </InfoWindow>
// //                   )}
// //                 </Map>
// //               </APIProvider>
// //             </div>
// //           </motion.div>

// //           {/* ===== RIGHT SIDE — FORM ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
// //           >
// //             <div className="mb-5 sm:mb-6 text-center">
// //               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
// //                 Send Us a Message
// //               </h3>
// //               <p className="text-xs sm:text-sm text-gray-500">
// //                 We'll get back to you as soon as possible
// //               </p>
// //             </div>

// //             <form className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col">
// //               <div>
// //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
// //                   Your Name
// //                 </label>
// //                 <input 
// //                   type="text" 
// //                   className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter your name"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
// //                   Your Email
// //                 </label>
// //                 <input 
// //                   type="email" 
// //                   className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter your email"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
// //                   Your Subject
// //                 </label>
// //                 <input 
// //                   type="text" 
// //                   className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter subject"
// //                 />
// //               </div>
// //               <div className="flex-1 flex flex-col">
// //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
// //                   Message
// //                 </label>
// //                 <textarea 
// //                   rows="5"
// //                   className="w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[100px]"
// //                   placeholder="Write your message..."
// //                 />
// //               </div>
              
// //               <motion.button 
// //                 type="submit"
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className="w-full inline-flex items-center justify-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-[#008df1]/30 text-sm mt-2"
// //               >
// //                 <span>Submit Now</span>
// //                 <Send className="h-4 w-4" />
// //               </motion.button>
// //             </form>

// //             {/* Trust Badges */}
// //             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
// //                 Secure
// //               </span>
// //               <span className="w-px h-3 bg-gray-200"></span>
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
// //                 Encrypted
// //               </span>
// //               <span className="w-px h-3 bg-gray-200"></span>
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
// //                 Private
// //               </span>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactSection;







// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Send, CheckCircle } from 'lucide-react';
// // import {
// //   APIProvider,
// //   Map,
// //   AdvancedMarker,
// //   InfoWindow,
// // } from "@vis.gl/react-google-maps";

// // const ContactSection = () => {
// //   // ===== LOCATIONS DATA =====
// //   const locations = [
// //     {
// //       id: 1,
// //       city: "Bengaluru",
// //       country: "India",
// //       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
// //       position: { lat: 12.9166, lng: 77.6101 },
// //     },
// //     {
// //       id: 2,
// //       city: "Navi Mumbai",
// //       country: "India",
// //       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
// //       position: { lat: 19.0771, lng: 73.0009 },
// //     },
// //     {
// //       id: 3,
// //       city: "Noida",
// //       country: "India",
// //       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
// //       position: { lat: 28.6084, lng: 77.3649 },
// //     },
// //     {
// //       id: 4,
// //       city: "Hyderabad",
// //       country: "India",
// //       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
// //       position: { lat: 17.4483, lng: 78.3915 },
// //     },
// //     {
// //       id: 5,
// //       city: "Dubai",
// //       country: "UAE",
// //       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
// //       position: { lat: 25.1022, lng: 55.1665 },
// //     },
// //   ];

// //   const defaultCenter = {
// //     lat: 22.5,
// //     lng: 67.5,
// //   };

// //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// //   return (
// //     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
// //       {/* Animated Background Blobs */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <motion.div
// //           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
// //           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
// //           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
// //           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
// //           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
// //         />
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
// //         {/* ===== HEADER ===== */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-8 sm:mb-10 md:mb-12"
// //         >
// //           <motion.span 
// //             className="sec-badge inline-block"
// //             whileHover={{ scale: 1.05 }}
// //             animate={{ y: [0, -3, 0] }}
// //             transition={{ duration: 2, repeat: Infinity }}
// //           >
// //             Let's Talk!
// //           </motion.span>
          
// //           <motion.h2 
// //             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.15 }}
// //           >
// //             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
// //           </motion.h2>
          
// //           <motion.p 
// //             className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //           >
// //             Benefit of the society where we operate. A success website obviously needs great.
// //           </motion.p>
// //         </motion.div>

// //         {/* ===== 2-COLUMN LAYOUT ===== */}
// //         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
// //           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-3 flex flex-col gap-4 w-full"
// //           >
// //             {/* Location Cards - Horizontal Scroll */}
// //             <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent -mx-1 px-1">
// //               {locations.map((location) => {
// //                 const isActive = selectedLocation?.id === location.id;
// //                 return (
// //                   <button
// //                     key={location.id}
// //                     onClick={() => setSelectedLocation(location)}
// //                     className={`flex-shrink-0 rounded-xl sm:rounded-2xl p-3 min-w-[150px] sm:min-w-[180px] md:min-w-[190px] text-left transition-all duration-300 ${
// //                       isActive
// //                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
// //                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
// //                     }`}
// //                   >
// //                     <div className="flex items-start gap-2.5 sm:gap-3">
// //                       <div
// //                         className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
// //                           isActive
// //                             ? "bg-[#008df1] text-white"
// //                             : "bg-white/10 text-[#00c6fb]"
// //                         }`}
// //                       >
// //                         {String(location.id).padStart(2, "0")}
// //                       </div>
// //                       <div className="min-w-0">
// //                         <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
// //                         <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
// //                           {location.country}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* Google Map — Responsive Height */}
// //             <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
// //               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
// //                 <Map
// //                   defaultCenter={defaultCenter}
// //                   defaultZoom={4}
// //                   gestureHandling="greedy"
// //                   disableDefaultUI={false}
// //                   mapId="YOUR_GOOGLE_MAP_ID"
// //                   style={{ width: '100%', height: '100%' }}
// //                 >
// //                   {locations.map((location) => (
// //                     <AdvancedMarker
// //                       key={location.id}
// //                       position={location.position}
// //                       onClick={() => setSelectedLocation(location)}
// //                     />
// //                   ))}

// //                   {selectedLocation && (
// //                     <InfoWindow
// //                       position={selectedLocation.position}
// //                       onCloseClick={() => setSelectedLocation(null)}
// //                     >
// //                       <div className="max-w-[200px] sm:max-w-[240px] p-1">
// //                         <h3 className="font-semibold text-sm sm:text-base text-slate-900">
// //                           {selectedLocation.city}
// //                         </h3>
// //                         <p className="mt-1 text-xs sm:text-sm text-slate-600">
// //                           {selectedLocation.address}
// //                         </p>
// //                       </div>
// //                     </InfoWindow>
// //                   )}
// //                 </Map>
// //               </APIProvider>
// //             </div>
// //           </motion.div>

// //           {/* ===== RIGHT SIDE — FORM ===== */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             viewport={{ once: true }}
// //             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
// //           >
// //             <div className="mb-5 sm:mb-6 text-center">
// //               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
// //                 Send Us a Message
// //               </h3>
// //               <p className="text-xs sm:text-sm text-gray-500">
// //                 We'll get back to you as soon as possible
// //               </p>
// //             </div>

// //             <form className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col">
// //               <div>
// //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
// //               Name
// //                 </label>
// //                 <input 
// //                   type="text" 
// //                   className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter your name"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
// //                   Your Email
// //                 </label>
// //                 <input 
// //                   type="email" 
// //                   className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 text-sm"
// //                   placeholder="Enter your email"
// //                 />
// //               </div>
              
// //               {/* 👇 YAHAN HAI BADLAAV — "Your Subject" input ki jagah "Your Services" dropdown */}
// //               <div>
// //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
// //                   Your Services
// //                 </label>
// //                 <select 
// //                   className="w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 text-sm cursor-pointer"
// //                   defaultValue=""
// //                 >
// //                   <option value="" disabled>Select a service</option>
// //                   <option value="Cognitive Services">Cognitive Services</option>
// //                   <option value="Digital Services">Digital Services</option>
// //                   <option value="Information Technology Services">Information Technology Services</option>
// //                   <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
// //                   <option value="NOC Services">NOC Services</option>
// //                   <option value="Cybersecurity Services">Cybersecurity Services</option>
// //                 </select>
// //               </div>

// //               <div className="flex-1 flex flex-col">
// //                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
// //                   Message
// //                 </label>
// //                 <textarea 
// //                   rows="5"
// //                   className="w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[100px]"
// //                   placeholder="Write your message..."
// //                 />
// //               </div>
              
// //               <motion.button 
// //                 type="submit"
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className="w-full inline-flex items-center justify-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-[#008df1]/30 text-sm mt-2"
// //               >
// //                 <span>Submit Now</span>
// //                 <Send className="h-4 w-4" />
// //               </motion.button>
// //             </form>

// //             {/* Trust Badges */}
// //             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
// //                 Secure
// //               </span>
// //               <span className="w-px h-3 bg-gray-200"></span>
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
// //                 Encrypted
// //               </span>
// //               <span className="w-px h-3 bg-gray-200"></span>
// //               <span className="flex items-center gap-1">
// //                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
// //                 Private
// //               </span>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ContactSection;








// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, CheckCircle, AlertCircle } from 'lucide-react';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// const ContactSection = () => {
//   // ===== LOCATIONS DATA =====
//   const locations = [
//     {
//       id: 1,
//       city: "Bengaluru",
//       country: "India",
//       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
//       position: { lat: 12.9166, lng: 77.6101 },
//     },
//     {
//       id: 2,
//       city: "Navi Mumbai",
//       country: "India",
//       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
//       position: { lat: 19.0771, lng: 73.0009 },
//     },
//     {
//       id: 3,
//       city: "Noida",
//       country: "India",
//       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
//       position: { lat: 28.6084, lng: 77.3649 },
//     },
//     {
//       id: 4,
//       city: "Hyderabad",
//       country: "India",
//       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
//       position: { lat: 17.4483, lng: 78.3915 },
//     },
//     {
//       id: 5,
//       city: "Dubai",
//       country: "UAE",
//       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
//       position: { lat: 25.1022, lng: 55.1665 },
//     },
//   ];

//   const defaultCenter = {
//     lat: 22.5,
//     lng: 67.5,
//   };

//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     service: '',
//     message: ''
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     service: '',
//     message: ''
//   });

//   // ===== SUCCESS STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // Clear error for this field as user types
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: '', email: '', service: '', message: '' };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name.';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Please enter your email address.';
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address.';
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = 'Please select a service.';
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Please write your message.';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // ===== HANDLE SUBMIT =====
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSuccess(true);
//       setFormData({ name: '', email: '', service: '', message: '' });
//       setErrors({ name: '', email: '', service: '', message: '' });
//       // Auto-hide success message after 4 seconds
//       setTimeout(() => setIsSuccess(false), 4000);
//     }
//   };

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
//       {/* Animated Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           <motion.span 
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Let's Talk!
//           </motion.span>
          
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
//           </motion.h2>
          
//           <motion.p 
//             className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Benefit of the society where we operate. A success website obviously needs great.
//           </motion.p>
//         </motion.div>

//         {/* ===== 2-COLUMN LAYOUT ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
//           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 flex flex-col gap-4 w-full"
//           >
//             {/* Location Cards - Horizontal Scroll */}
//             <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent -mx-1 px-1">
//               {locations.map((location) => {
//                 const isActive = selectedLocation?.id === location.id;
//                 return (
//                   <button
//                     key={location.id}
//                     onClick={() => setSelectedLocation(location)}
//                     className={`flex-shrink-0 rounded-xl sm:rounded-2xl p-3 min-w-[150px] sm:min-w-[180px] md:min-w-[190px] text-left transition-all duration-300 ${
//                       isActive
//                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
//                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
//                     }`}
//                   >
//                     <div className="flex items-start gap-2.5 sm:gap-3">
//                       <div
//                         className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
//                           isActive
//                             ? "bg-[#008df1] text-white"
//                             : "bg-white/10 text-[#00c6fb]"
//                         }`}
//                       >
//                         {String(location.id).padStart(2, "0")}
//                       </div>
//                       <div className="min-w-0">
//                         <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
//                         <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
//                           {location.country}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Google Map */}
//             <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
//               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//                 <Map
//                   defaultCenter={defaultCenter}
//                   defaultZoom={4}
//                   gestureHandling="greedy"
//                   disableDefaultUI={false}
//                   mapId="YOUR_GOOGLE_MAP_ID"
//                   style={{ width: '100%', height: '100%' }}
//                 >
//                   {locations.map((location) => (
//                     <AdvancedMarker
//                       key={location.id}
//                       position={location.position}
//                       onClick={() => setSelectedLocation(location)}
//                     />
//                   ))}

//                   {selectedLocation && (
//                     <InfoWindow
//                       position={selectedLocation.position}
//                       onCloseClick={() => setSelectedLocation(null)}
//                     >
//                       <div className="max-w-[200px] sm:max-w-[240px] p-1">
//                         <h3 className="font-semibold text-sm sm:text-base text-slate-900">
//                           {selectedLocation.city}
//                         </h3>
//                         <p className="mt-1 text-xs sm:text-sm text-slate-600">
//                           {selectedLocation.address}
//                         </p>
//                       </div>
//                     </InfoWindow>
//                   )}
//                 </Map>
//               </APIProvider>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE — FORM ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
//           >
//             <div className="mb-5 sm:mb-6 text-center">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
//                 Send Us a Message
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-500">
//                 We'll get back to you as soon as possible
//               </p>
//             </div>

//             {/* ===== SUCCESS MESSAGE ===== */}
//             <AnimatePresence>
//               {isSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
//                   exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
//                     <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
//                     <div className="flex-1">
//                       <p className="text-xs sm:text-sm font-semibold text-emerald-900">
//                         Message Sent Successfully!
//                       </p>
//                       <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5">
//                         Thank you! We'll get back to you soon.
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col" noValidate>
              
//               {/* Name */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Name
//                 </label>
//                 <input 
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.name 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your name"
//                 />
//                 {/* 👇 Error message below field */}
//                 <AnimatePresence>
//                   {errors.name && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.name}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Email
//                 </label>
//                 <input 
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.email 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your email"
//                 />
//                 <AnimatePresence>
//                   {errors.email && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.email}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               {/* Services */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Services
//                 </label>
//                 <select 
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 text-sm cursor-pointer ${
//                     errors.service 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                 >
//                   <option value="" disabled>Select a service</option>
//                   <option value="Cognitive Services">Cognitive Services</option>
//                   <option value="Digital Services">Digital Services</option>
//                   <option value="Information Technology Services">Information Technology Services</option>
//                   <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
//                   <option value="NOC Services">NOC Services</option>
//                   <option value="Cybersecurity Services">Cybersecurity Services</option>
//                 </select>
//                 <AnimatePresence>
//                   {errors.service && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.service}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Message */}
//               <div className="flex-1 flex flex-col">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Message
//                 </label>
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5"
//                   className={`w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[100px] ${
//                     errors.message 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Write your message..."
//                 />
//                 <AnimatePresence>
//                   {errors.message && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.message}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <motion.button 
//                 type="submit"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full inline-flex items-center justify-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-[#008df1]/30 text-sm mt-2"
//               >
//                 <span>Submit Now</span>
//                 <Send className="h-4 w-4" />
//               </motion.button>
//             </form>

//             {/* Trust Badges */}
//             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Secure
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Encrypted
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Private
//               </span>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;










// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, CheckCircle, AlertCircle } from 'lucide-react';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// const ContactSection = () => {
//   // ===== LOCATIONS DATA =====
//   const locations = [
//     {
//       id: 1,
//       city: "Bengaluru",
//       country: "India",
//       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
//       position: { lat: 12.9166, lng: 77.6101 },
//     },
//     {
//       id: 2,
//       city: "Navi Mumbai",
//       country: "India",
//       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
//       position: { lat: 19.0771, lng: 73.0009 },
//     },
//     {
//       id: 3,
//       city: "Noida",
//       country: "India",
//       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
//       position: { lat: 28.6084, lng: 77.3649 },
//     },
//     {
//       id: 4,
//       city: "Hyderabad",
//       country: "India",
//       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
//       position: { lat: 17.4483, lng: 78.3915 },
//     },
//     {
//       id: 5,
//       city: "Dubai",
//       country: "UAE",
//       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
//       position: { lat: 25.1022, lng: 55.1665 },
//     },
//   ];

//   const defaultCenter = {
//     lat: 22.5,
//     lng: 67.5,
//   };

//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     service: '',
//     message: ''
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     service: '',
//     message: ''
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: '', email: '', service: '', message: '' };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name.';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Please enter your email address.';
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address.';
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = 'Please select a service.';
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Please write your message.';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // ===== HANDLE SUBMIT (Web3Forms) =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           // 👇 YAHAN APNI WEB3FORMS ACCESS KEY DAALEIN
//           access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
          
//           // Form data
//           name: formData.name,
//           email: formData.email,
//           service: formData.service,
//           message: formData.message,
          
//           // Email settings
//           subject: `New Contact from ${formData.name} - ${formData.service}`,
//           from_name: 'CoderBox Website',
//           to_email: 'khusbu111patel555@gmail.com',
//         })
//       });

//       const result = await response.json();
//       console.log('Web3Forms Response:', result);

//       if (result.success) {
//         setIsSuccess(true);
//         setFormData({ name: '', email: '', service: '', message: '' });
//         setErrors({ name: '', email: '', service: '', message: '' });
//         setTimeout(() => setIsSuccess(false), 5000);
//       } else {
//         setErrors({
//           ...errors,
//           message: result.message || 'Failed to send message. Please try again.'
//         });
//       }
//     } catch (error) {
//       console.error('Web3Forms Error:', error);
//       setErrors({
//         ...errors,
//         message: 'Network error. Please check your connection and try again.'
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
//       {/* Animated Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           <motion.span 
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Let's Talk!
//           </motion.span>
          
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
//           </motion.h2>
          
//           <motion.p 
//             className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Benefit of the society where we operate. A success website obviously needs great.
//           </motion.p>
//         </motion.div>

//         {/* ===== 2-COLUMN LAYOUT ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
//           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 flex flex-col gap-4 w-full"
//           >
//             {/* Location Cards - Horizontal Scroll */}
//             <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent -mx-1 px-1">
//               {locations.map((location) => {
//                 const isActive = selectedLocation?.id === location.id;
//                 return (
//                   <button
//                     key={location.id}
//                     onClick={() => setSelectedLocation(location)}
//                     className={`flex-shrink-0 rounded-xl sm:rounded-2xl p-3 min-w-[150px] sm:min-w-[180px] md:min-w-[190px] text-left transition-all duration-300 ${
//                       isActive
//                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
//                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
//                     }`}
//                   >
//                     <div className="flex items-start gap-2.5 sm:gap-3">
//                       <div
//                         className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
//                           isActive
//                             ? "bg-[#008df1] text-white"
//                             : "bg-white/10 text-[#00c6fb]"
//                         }`}
//                       >
//                         {String(location.id).padStart(2, "0")}
//                       </div>
//                       <div className="min-w-0">
//                         <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
//                         <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
//                           {location.country}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Google Map */}
//             <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
//               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//                 <Map
//                   defaultCenter={defaultCenter}
//                   defaultZoom={4}
//                   gestureHandling="greedy"
//                   disableDefaultUI={false}
//                   mapId="YOUR_GOOGLE_MAP_ID"
//                   style={{ width: '100%', height: '100%' }}
//                 >
//                   {locations.map((location) => (
//                     <AdvancedMarker
//                       key={location.id}
//                       position={location.position}
//                       onClick={() => setSelectedLocation(location)}
//                     />
//                   ))}

//                   {selectedLocation && (
//                     <InfoWindow
//                       position={selectedLocation.position}
//                       onCloseClick={() => setSelectedLocation(null)}
//                     >
//                       <div className="max-w-[200px] sm:max-w-[240px] p-1">
//                         <h3 className="font-semibold text-sm sm:text-base text-slate-900">
//                           {selectedLocation.city}
//                         </h3>
//                         <p className="mt-1 text-xs sm:text-sm text-slate-600">
//                           {selectedLocation.address}
//                         </p>
//                       </div>
//                     </InfoWindow>
//                   )}
//                 </Map>
//               </APIProvider>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE — FORM ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
//           >
//             <div className="mb-5 sm:mb-6 text-center">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
//                 Send Us a Message
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-500">
//                 We'll get back to you as soon as possible
//               </p>
//             </div>

//             {/* ===== SUCCESS MESSAGE ===== */}
//             <AnimatePresence>
//               {isSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
//                   exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
//                     <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
//                     <div className="flex-1">
//                       <p className="text-xs sm:text-sm font-semibold text-emerald-900">
//                         Message Sent Successfully!
//                       </p>
//                       <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5">
//                         Thank you! We'll get back to you soon.
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col" noValidate>
              
//               {/* Name */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Name
//                 </label>
//                 <input 
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.name 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your name"
//                 />
//                 <AnimatePresence>
//                   {errors.name && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.name}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Email
//                 </label>
//                 <input 
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.email 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your email"
//                 />
//                 <AnimatePresence>
//                   {errors.email && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.email}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               {/* Services */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Services
//                 </label>
//                 <select 
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 text-sm cursor-pointer ${
//                     errors.service 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                 >
//                   <option value="" disabled>Select a service</option>
//                   <option value="Cognitive Services">Cognitive Services</option>
//                   <option value="Digital Services">Digital Services</option>
//                   <option value="Information Technology Services">Information Technology Services</option>
//                   <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
//                   <option value="NOC Services">NOC Services</option>
//                   <option value="Cybersecurity Services">Cybersecurity Services</option>
//                 </select>
//                 <AnimatePresence>
//                   {errors.service && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.service}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Message */}
//               <div className="flex-1 flex flex-col">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Message
//                 </label>
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5"
//                   className={`w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[100px] ${
//                     errors.message 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Write your message..."
//                 />
//                 <AnimatePresence>
//                   {errors.message && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.message}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <motion.button 
//                 type="submit"
//                 disabled={isLoading}
//                 whileHover={!isLoading ? { scale: 1.02 } : {}}
//                 whileTap={!isLoading ? { scale: 0.98 } : {}}
//                 className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg text-sm mt-2 ${
//                   isLoading 
//                     ? 'bg-gray-400 cursor-not-allowed shadow-gray-400/30' 
//                     : 'bg-[#008df1] hover:bg-[#006fa6] shadow-[#008df1]/30'
//                 } text-white`}
//               >
//                 <span>{isLoading ? 'Sending...' : 'Submit Now'}</span>
//                 {!isLoading && <Send className="h-4 w-4" />}
//               </motion.button>
//             </form>

//             {/* Trust Badges */}
//             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Secure
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Encrypted
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Private
//               </span>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;










// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// const ContactSection = () => {
//   // ===== LOCATIONS DATA =====
//   const locations = [
//     {
//       id: 1,
//       city: "Bengaluru",
//       country: "India",
//       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
//       position: { lat: 12.9166, lng: 77.6101 },
//     },
//     {
//       id: 2,
//       city: "Navi Mumbai",
//       country: "India",
//       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
//       position: { lat: 19.0771, lng: 73.0009 },
//     },
//     {
//       id: 3,
//       city: "Noida",
//       country: "India",
//       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
//       position: { lat: 28.6084, lng: 77.3649 },
//     },
//     {
//       id: 4,
//       city: "Hyderabad",
//       country: "India",
//       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
//       position: { lat: 17.4483, lng: 78.3915 },
//     },
//     {
//       id: 5,
//       city: "Dubai",
//       country: "UAE",
//       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
//       position: { lat: 25.1022, lng: 55.1665 },
//     },
//   ];

//   const defaultCenter = {
//     lat: 22.5,
//     lng: 67.5,
//   };

//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   // ===== FORM STATE — 👇 phone add kiya =====
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // ===== ERRORS STATE — 👇 phone add kiya =====
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // 👇 Phone number ke liye sirf digits allow karo (max 10)
//     if (name === 'phone') {
//       const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
//       setFormData({ ...formData, [name]: digitsOnly });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: '', email: '', phone: '', service: '', message: '' };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name.';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Please enter your email address.';
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address.';
//       isValid = false;
//     }

//     // 👇 Phone validation
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Please enter your phone number.';
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       // Indian mobile number — 10 digits, starting with 6-9
//       newErrors.phone = 'Please enter a valid 10-digit mobile number.';
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = 'Please select a service.';
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Please write your message.';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // ===== HANDLE SUBMIT (Web3Forms) =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',

//           // Form data
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,     // 👈 phone add kiya
//           service: formData.service,
//           message: formData.message,

//           // Email settings
//           subject: `New Contact from ${formData.name} - ${formData.service}`,
//           from_name: 'CoderBox Website',
//           to_email: 'khusbu111patel555@gmail.com',
//         })
//       });

//       const result = await response.json();
//       console.log('Web3Forms Response:', result);

//       if (result.success) {
//         setIsSuccess(true);
//         setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//         setErrors({ name: '', email: '', phone: '', service: '', message: '' });
//         setTimeout(() => setIsSuccess(false), 5000);
//       } else {
//         setErrors({
//           ...errors,
//           message: result.message || 'Failed to send message. Please try again.'
//         });
//       }
//     } catch (error) {
//       console.error('Web3Forms Error:', error);
//       setErrors({
//         ...errors,
//         message: 'Network error. Please check your connection and try again.'
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
//       {/* Animated Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           <motion.span 
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Let's Talk!
//           </motion.span>
          
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
//           </motion.h2>
          
//           <motion.p 
//             className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Benefit of the society where we operate. A success website obviously needs great.
//           </motion.p>
//         </motion.div>

//         {/* ===== 2-COLUMN LAYOUT ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
//           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 flex flex-col gap-4 w-full"
//           >
//             {/* Location Cards - Horizontal Scroll */}
//             <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent -mx-1 px-1">
//               {locations.map((location) => {
//                 const isActive = selectedLocation?.id === location.id;
//                 return (
//                   <button
//                     key={location.id}
//                     onClick={() => setSelectedLocation(location)}
//                     className={`flex-shrink-0 rounded-xl sm:rounded-2xl p-3 min-w-[150px] sm:min-w-[180px] md:min-w-[190px] text-left transition-all duration-300 ${
//                       isActive
//                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
//                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
//                     }`}
//                   >
//                     <div className="flex items-start gap-2.5 sm:gap-3">
//                       <div
//                         className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
//                           isActive
//                             ? "bg-[#008df1] text-white"
//                             : "bg-white/10 text-[#00c6fb]"
//                         }`}
//                       >
//                         {String(location.id).padStart(2, "0")}
//                       </div>
//                       <div className="min-w-0">
//                         <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
//                         <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
//                           {location.country}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Google Map */}
//             <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
//               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//                 <Map
//                   defaultCenter={defaultCenter}
//                   defaultZoom={4}
//                   gestureHandling="greedy"
//                   disableDefaultUI={false}
//                   mapId="YOUR_GOOGLE_MAP_ID"
//                   style={{ width: '100%', height: '100%' }}
//                 >
//                   {locations.map((location) => (
//                     <AdvancedMarker
//                       key={location.id}
//                       position={location.position}
//                       onClick={() => setSelectedLocation(location)}
//                     />
//                   ))}

//                   {selectedLocation && (
//                     <InfoWindow
//                       position={selectedLocation.position}
//                       onCloseClick={() => setSelectedLocation(null)}
//                     >
//                       <div className="max-w-[200px] sm:max-w-[240px] p-1">
//                         <h3 className="font-semibold text-sm sm:text-base text-slate-900">
//                           {selectedLocation.city}
//                         </h3>
//                         <p className="mt-1 text-xs sm:text-sm text-slate-600">
//                           {selectedLocation.address}
//                         </p>
//                       </div>
//                     </InfoWindow>
//                   )}
//                 </Map>
//               </APIProvider>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE — FORM ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
//           >
//             <div className="mb-5 sm:mb-6 text-center">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
//                 Send Us a Message
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-500">
//                 We'll get back to you as soon as possible
//               </p>
//             </div>

//             {/* ===== SUCCESS MESSAGE ===== */}
//             <AnimatePresence>
//               {isSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
//                   exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
//                     <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
//                     <div className="flex-1">
//                       <p className="text-xs sm:text-sm font-semibold text-emerald-900">
//                         Message Sent Successfully!
//                       </p>
//                       <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5">
//                         Thank you! We'll get back to you soon.
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col" noValidate>
              
//               {/* Name */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Name
//                 </label>
//                 <input 
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.name 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your name"
//                 />
//                 <AnimatePresence>
//                   {errors.name && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.name}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Email
//                 </label>
//                 <input 
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.email 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your email"
//                 />
//                 <AnimatePresence>
//                   {errors.email && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.email}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* 👇 PHONE NUMBER — NAYA FIELD */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   {/* Country code prefix */}
//                   <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
//                     <Phone className={`h-3.5 w-3.5 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
//                     <span className="text-xs sm:text-sm text-gray-500 font-medium">+91</span>
//                   </div>
//                   <input 
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     maxLength={10}
//                     className={`w-full pl-16 sm:pl-[72px] pr-3.5 sm:pr-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                       errors.phone 
//                         ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                         : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                     }`}
//                     placeholder="98765 43210"
//                   />
//                 </div>
//                 <AnimatePresence>
//                   {errors.phone && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.phone}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               {/* Services */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Services
//                 </label>
//                 <select 
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 text-sm cursor-pointer ${
//                     errors.service 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                 >
//                   <option value="" disabled>Select a service</option>
//                   <option value="Cognitive Services">Cognitive Services</option>
//                   <option value="Digital Services">Digital Services</option>
//                   <option value="Information Technology Services">Information Technology Services</option>
//                   <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
//                   <option value="NOC Services">NOC Services</option>
//                   <option value="Cybersecurity Services">Cybersecurity Services</option>
//                 </select>
//                 <AnimatePresence>
//                   {errors.service && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.service}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Message */}
//               <div className="flex-1 flex flex-col">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Message
//                 </label>
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className={`w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[90px] ${
//                     errors.message 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Write your message..."
//                 />
//                 <AnimatePresence>
//                   {errors.message && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.message}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <motion.button 
//                 type="submit"
//                 disabled={isLoading}
//                 whileHover={!isLoading ? { scale: 1.02 } : {}}
//                 whileTap={!isLoading ? { scale: 0.98 } : {}}
//                 className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg text-sm mt-2 ${
//                   isLoading 
//                     ? 'bg-gray-400 cursor-not-allowed shadow-gray-400/30' 
//                     : 'bg-[#008df1] hover:bg-[#006fa6] shadow-[#008df1]/30'
//                 } text-white`}
//               >
//                 <span>{isLoading ? 'Sending...' : 'Submit Now'}</span>
//                 {!isLoading && <Send className="h-4 w-4" />}
//               </motion.button>
//             </form>

//             {/* Trust Badges */}
//             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Secure
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Encrypted
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Private
//               </span>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;





/////////first code  srcoller code/////////////////////////////



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";
// import { supabase } from "../../lib/supabaseClient"; // 👈 1. Supabase Import kiya (Path apne folder structure ke hisaab se adjust kar lein)

// const ContactSection = () => {
//   // ===== LOCATIONS DATA =====
//   const locations = [
//     {
//       id: 1,
//       city: "Bengaluru",
//       country: "India",
//       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
//       position: { lat: 12.9166, lng: 77.6101 },
//     },
//     {
//       id: 2,
//       city: "Navi Mumbai",
//       country: "India",
//       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
//       position: { lat: 19.0771, lng: 73.0009 },
//     },
//     {
//       id: 3,
//       city: "Noida",
//       country: "India",
//       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
//       position: { lat: 28.6084, lng: 77.3649 },
//     },
//     {
//       id: 4,
//       city: "Hyderabad",
//       country: "India",
//       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
//       position: { lat: 17.4483, lng: 78.3915 },
//     },
//     {
//       id: 5,
//       city: "Dubai",
//       country: "UAE",
//       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
//       position: { lat: 25.1022, lng: 55.1665 },
//     },
//   ];

//   const defaultCenter = {
//     lat: 22.5,
//     lng: 67.5,
//   };

//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Phone number ke liye sirf digits allow karo (max 10)
//     if (name === 'phone') {
//       const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
//       setFormData({ ...formData, [name]: digitsOnly });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: '', email: '', phone: '', service: '', message: '' };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name.';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Please enter your email address.';
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address.';
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Please enter your phone number.';
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = 'Please enter a valid 10-digit mobile number.';
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = 'Please select a service.';
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Please write your message.';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // ===== 2. HANDLE SUBMIT (SUPABASE INTEGRATION) =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       // Supabase me data insert karna
//       const { data, error } = await supabase
//         .from('contacts') // 👈 Table name (jo aapne Supabase me banaya hai)
//         .insert([
//           {
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             service: formData.service,
//             message: formData.message,
//           }
//         ]);

//       // Agar Supabase error deta hai toh throw karo
//       if (error) throw error;

//       // Success State
//       setIsSuccess(true);
//       setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//       setErrors({ name: '', email: '', phone: '', service: '', message: '' });
//       setTimeout(() => setIsSuccess(false), 5000);

//     } catch (error) {
//       console.error('Supabase Error:', error);
//       setErrors(prev => ({
//         ...prev,
//         message: 'Failed to send message to database. Please try again later.'
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
//       {/* Animated Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           <motion.span 
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Let's Talk!
//           </motion.span>
          
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
//           </motion.h2>
          
//           <motion.p 
//             className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Benefit of the society where we operate. A success website obviously needs great.
//           </motion.p>
//         </motion.div>

//         {/* ===== 2-COLUMN LAYOUT ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
//           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 flex flex-col gap-4 w-full"
//           >
//             {/* Location Cards - Horizontal Scroll */}
//             <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-[#008df1]/50 scrollbar-track-transparent -mx-1 px-1">
//               {locations.map((location) => {
//                 const isActive = selectedLocation?.id === location.id;
//                 return (
//                   <button
//                     key={location.id}
//                     onClick={() => setSelectedLocation(location)}
//                     className={`flex-shrink-0 rounded-xl sm:rounded-2xl p-3 min-w-[150px] sm:min-w-[180px] md:min-w-[190px] text-left transition-all duration-300 ${
//                       isActive
//                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
//                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
//                     }`}
//                   >
//                     <div className="flex items-start gap-2.5 sm:gap-3">
//                       <div
//                         className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
//                           isActive
//                             ? "bg-[#008df1] text-white"
//                             : "bg-white/10 text-[#00c6fb]"
//                         }`}
//                       >
//                         {String(location.id).padStart(2, "0")}
//                       </div>
//                       <div className="min-w-0">
//                         <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
//                         <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
//                           {location.country}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Google Map */}
//             <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
//               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//                 <Map
//                   defaultCenter={defaultCenter}
//                   defaultZoom={4}
//                   gestureHandling="greedy"
//                   disableDefaultUI={false}
//                   mapId="YOUR_GOOGLE_MAP_ID"
//                   style={{ width: '100%', height: '100%' }}
//                 >
//                   {locations.map((location) => (
//                     <AdvancedMarker
//                       key={location.id}
//                       position={location.position}
//                       onClick={() => setSelectedLocation(location)}
//                     />
//                   ))}

//                   {selectedLocation && (
//                     <InfoWindow
//                       position={selectedLocation.position}
//                       onCloseClick={() => setSelectedLocation(null)}
//                     >
//                       <div className="max-w-[200px] sm:max-w-[240px] p-1">
//                         <h3 className="font-semibold text-sm sm:text-base text-slate-900">
//                           {selectedLocation.city}
//                         </h3>
//                         <p className="mt-1 text-xs sm:text-sm text-slate-600">
//                           {selectedLocation.address}
//                         </p>
//                       </div>
//                     </InfoWindow>
//                   )}
//                 </Map>
//               </APIProvider>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE — FORM ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
//           >
//             <div className="mb-5 sm:mb-6 text-center">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
//                 Send Us a Message
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-500">
//                 We'll get back to you as soon as possible
//               </p>
//             </div>

//             {/* ===== SUCCESS MESSAGE ===== */}
//             <AnimatePresence>
//               {isSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
//                   exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
//                     <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
//                     <div className="flex-1">
//                       <p className="text-xs sm:text-sm font-semibold text-emerald-900">
//                         Message Sent Successfully!
//                       </p>
//                       <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5">
//                         Thank you! We'll get back to you soon.
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col" noValidate>
              
//               {/* Name */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Name
//                 </label>
//                 <input 
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.name 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your name"
//                 />
//                 <AnimatePresence>
//                   {errors.name && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.name}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Email
//                 </label>
//                 <input 
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.email 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your email"
//                 />
//                 <AnimatePresence>
//                   {errors.email && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.email}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* PHONE NUMBER */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
//                     <Phone className={`h-3.5 w-3.5 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
//                     <span className="text-xs sm:text-sm text-gray-500 font-medium">+91</span>
//                   </div>
//                   <input 
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     maxLength={10}
//                     className={`w-full pl-16 sm:pl-[72px] pr-3.5 sm:pr-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                       errors.phone 
//                         ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                         : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                     }`}
//                     placeholder="98765 43210"
//                   />
//                 </div>
//                 <AnimatePresence>
//                   {errors.phone && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.phone}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               {/* Services */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Services
//                 </label>
//                 <select 
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 text-sm cursor-pointer ${
//                     errors.service 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                 >
//                   <option value="" disabled>Select a service</option>
//                   <option value="Cognitive Services">Cognitive Services</option>
//                   <option value="Digital Services">Digital Services</option>
//                   <option value="Information Technology Services">Information Technology Services</option>
//                   <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
//                   <option value="NOC Services">NOC Services</option>
//                   <option value="Cybersecurity Services">Cybersecurity Services</option>
//                 </select>
//                 <AnimatePresence>
//                   {errors.service && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.service}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Message */}
//               <div className="flex-1 flex flex-col">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Message
//                 </label>
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className={`w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[90px] ${
//                     errors.message 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Write your message..."
//                 />
//                 <AnimatePresence>
//                   {errors.message && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.message}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <motion.button 
//                 type="submit"
//                 disabled={isLoading}
//                 whileHover={!isLoading ? { scale: 1.02 } : {}}
//                 whileTap={!isLoading ? { scale: 0.98 } : {}}
//                 className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg text-sm mt-2 ${
//                   isLoading 
//                     ? 'bg-gray-400 cursor-not-allowed shadow-gray-400/30' 
//                     : 'bg-[#008df1] hover:bg-[#006fa6] shadow-[#008df1]/30'
//                 } text-white`}
//               >
//                 <span>{isLoading ? 'Sending...' : 'Submit Now'}</span>
//                 {!isLoading && <Send className="h-4 w-4" />}
//               </motion.button>
//             </form>

//             {/* Trust Badges */}
//             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Secure
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Encrypted
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Private
//               </span>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;








/////////second code withou sroller card size dicrease ////////////////////

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";
// import { supabase } from "../../lib/supabaseClient"; 

// const ContactSection = () => {
//   // ===== LOCATIONS DATA =====
//   const locations = [
//     {
//       id: 1,
//       city: "Bengaluru",
//       country: "India",
//       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
//       position: { lat: 12.9166, lng: 77.6101 },
//     },
//     {
//       id: 2,
//       city: "Navi Mumbai",
//       country: "India",
//       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
//       position: { lat: 19.0771, lng: 73.0009 },
//     },
//     {
//       id: 3,
//       city: "Noida",
//       country: "India",
//       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
//       position: { lat: 28.6084, lng: 77.3649 },
//     },
//     {
//       id: 4,
//       city: "Hyderabad",
//       country: "India",
//       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
//       position: { lat: 17.4483, lng: 78.3915 },
//     },
//     {
//       id: 5,
//       city: "Dubai",
//       country: "UAE",
//       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
//       position: { lat: 25.1022, lng: 55.1665 },
//     },
//   ];

//   const defaultCenter = {
//     lat: 22.5,
//     lng: 67.5,
//   };

//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'phone') {
//       const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
//       setFormData({ ...formData, [name]: digitsOnly });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: '', email: '', phone: '', service: '', message: '' };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name.';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Please enter your email address.';
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address.';
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Please enter your phone number.';
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = 'Please enter a valid 10-digit mobile number.';
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = 'Please select a service.';
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Please write your message.';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       const { data, error } = await supabase
//         .from('contacts')
//         .insert([
//           {
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             service: formData.service,
//             message: formData.message,
//           }
//         ]);

//       if (error) throw error;

//       setIsSuccess(true);
//       setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//       setErrors({ name: '', email: '', phone: '', service: '', message: '' });
//       setTimeout(() => setIsSuccess(false), 5000);

//     } catch (error) {
//       console.error('Supabase Error:', error);
//       setErrors(prev => ({
//         ...prev,
//         message: 'Failed to send message to database. Please try again later.'
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
//       {/* Animated Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           <motion.span 
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Let's Talk!
//           </motion.span>
          
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
//           </motion.h2>
          
//           <motion.p 
//             className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Benefit of the society where we operate. A success website obviously needs great.
//           </motion.p>
//         </motion.div>

//         {/* ===== 2-COLUMN LAYOUT ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
//           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 flex flex-col gap-4 w-full"
//           >
//             {/* 👇 YAHAN CHANGE KIYA HAI: Grid use kiya taaki saare cards ek saath dikhein, scroll na karna pade */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
//               {locations.map((location) => {
//                 const isActive = selectedLocation?.id === location.id;
//                 return (
//                   <button
//                     key={location.id}
//                     onClick={() => setSelectedLocation(location)}
//                     className={`w-full rounded-xl sm:rounded-2xl p-3 text-left transition-all duration-300 ${
//                       isActive
//                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
//                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
//                     }`}
//                   >
//                     <div className="flex items-start gap-2">
//                       <div
//                         className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] sm:text-xs font-bold ${
//                           isActive
//                             ? "bg-[#008df1] text-white"
//                             : "bg-white/10 text-[#00c6fb]"
//                         }`}
//                       >
//                         {String(location.id).padStart(2, "0")}
//                       </div>
//                       <div className="min-w-0">
//                         <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
//                         <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
//                           {location.country}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Google Map */}
//             <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
//               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//                 <Map
//                   defaultCenter={defaultCenter}
//                   defaultZoom={4}
//                   gestureHandling="greedy"
//                   disableDefaultUI={false}
//                   mapId="YOUR_GOOGLE_MAP_ID"
//                   style={{ width: '100%', height: '100%' }}
//                 >
//                   {locations.map((location) => (
//                     <AdvancedMarker
//                       key={location.id}
//                       position={location.position}
//                       onClick={() => setSelectedLocation(location)}
//                     />
//                   ))}

//                   {selectedLocation && (
//                     <InfoWindow
//                       position={selectedLocation.position}
//                       onCloseClick={() => setSelectedLocation(null)}
//                     >
//                       <div className="max-w-[200px] sm:max-w-[240px] p-1">
//                         <h3 className="font-semibold text-sm sm:text-base text-slate-900">
//                           {selectedLocation.city}
//                         </h3>
//                         <p className="mt-1 text-xs sm:text-sm text-slate-600">
//                           {selectedLocation.address}
//                         </p>
//                       </div>
//                     </InfoWindow>
//                   )}
//                 </Map>
//               </APIProvider>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE — FORM ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
//           >
//             <div className="mb-5 sm:mb-6 text-center">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
//                 Send Us a Message
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-500">
//                 We'll get back to you as soon as possible
//               </p>
//             </div>

//             {/* ===== SUCCESS MESSAGE ===== */}
//             <AnimatePresence>
//               {isSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
//                   exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
//                     <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
//                     <div className="flex-1">
//                       <p className="text-xs sm:text-sm font-semibold text-emerald-900">
//                         Message Sent Successfully!
//                       </p>
//                       <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5">
//                         Thank you! We'll get back to you soon.
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col" noValidate>
              
//               {/* Name */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Name
//                 </label>
//                 <input 
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.name 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your name"
//                 />
//                 <AnimatePresence>
//                   {errors.name && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.name}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Email
//                 </label>
//                 <input 
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.email 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your email"
//                 />
//                 <AnimatePresence>
//                   {errors.email && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.email}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* PHONE NUMBER */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
//                     <Phone className={`h-3.5 w-3.5 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
//                     <span className="text-xs sm:text-sm text-gray-500 font-medium">+91</span>
//                   </div>
//                   <input 
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     maxLength={10}
//                     className={`w-full pl-16 sm:pl-[72px] pr-3.5 sm:pr-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                       errors.phone 
//                         ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                         : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                     }`}
//                     placeholder="98765 43210"
//                   />
//                 </div>
//                 <AnimatePresence>
//                   {errors.phone && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.phone}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               {/* Services */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Services
//                 </label>
//                 <select 
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 text-sm cursor-pointer ${
//                     errors.service 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                 >
//                   <option value="" disabled>Select a service</option>
//                   <option value="Cognitive Services">Cognitive Services</option>
//                   <option value="Digital Services">Digital Services</option>
//                   <option value="Information Technology Services">Information Technology Services</option>
//                   <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
//                   <option value="NOC Services">NOC Services</option>
//                   <option value="Cybersecurity Services">Cybersecurity Services</option>
//                 </select>
//                 <AnimatePresence>
//                   {errors.service && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.service}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Message */}
//               <div className="flex-1 flex flex-col">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Message
//                 </label>
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className={`w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[90px] ${
//                     errors.message 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Write your message..."
//                 />
//                 <AnimatePresence>
//                   {errors.message && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.message}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <motion.button 
//                 type="submit"
//                 disabled={isLoading}
//                 whileHover={!isLoading ? { scale: 1.02 } : {}}
//                 whileTap={!isLoading ? { scale: 0.98 } : {}}
//                 className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg text-sm mt-2 ${
//                   isLoading 
//                     ? 'bg-gray-400 cursor-not-allowed shadow-gray-400/30' 
//                     : 'bg-[#008df1] hover:bg-[#006fa6] shadow-[#008df1]/30'
//                 } text-white`}
//               >
//                 <span>{isLoading ? 'Sending...' : 'Submit Now'}</span>
//                 {!isLoading && <Send className="h-4 w-4" />}
//               </motion.button>
//             </form>

//             {/* Trust Badges */}
//             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Secure
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Encrypted
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Private
//               </span>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;







/////////////third code text ke hisab se cade size increase ans dicrease///////////////////////////////

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";
// import { supabase } from "../../lib/supabaseClient"; 

// const ContactSection = () => {
//   // ===== LOCATIONS DATA =====
//   const locations = [
//     {
//       id: 1,
//       city: "Bengaluru",
//       country: "India",
//       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
//       position: { lat: 12.9166, lng: 77.6101 },
//     },
//     {
//       id: 2,
//       city: "Navi Mumbai",
//       country: "India",
//       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
//       position: { lat: 19.0771, lng: 73.0009 },
//     },
//     {
//       id: 3,
//       city: "Noida",
//       country: "India",
//       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
//       position: { lat: 28.6084, lng: 77.3649 },
//     },
//     {
//       id: 4,
//       city: "Hyderabad",
//       country: "India",
//       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
//       position: { lat: 17.4483, lng: 78.3915 },
//     },
//     {
//       id: 5,
//       city: "Dubai",
//       country: "UAE",
//       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
//       position: { lat: 25.1022, lng: 55.1665 },
//     },
//   ];

//   const defaultCenter = {
//     lat: 22.5,
//     lng: 67.5,
//   };

//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'phone') {
//       const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
//       setFormData({ ...formData, [name]: digitsOnly });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: '', email: '', phone: '', service: '', message: '' };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Please enter your name.';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Please enter your email address.';
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address.';
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Please enter your phone number.';
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = 'Please enter a valid 10-digit mobile number.';
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = 'Please select a service.';
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Please write your message.';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       const { data, error } = await supabase
//         .from('contacts')
//         .insert([
//           {
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             service: formData.service,
//             message: formData.message,
//           }
//         ]);

//       if (error) throw error;

//       setIsSuccess(true);
//       setFormData({ name: '', email: '', phone: '', service: '', message: '' });
//       setErrors({ name: '', email: '', phone: '', service: '', message: '' });
//       setTimeout(() => setIsSuccess(false), 5000);

//     } catch (error) {
//       console.error('Supabase Error:', error);
//       setErrors(prev => ({
//         ...prev,
//         message: 'Failed to send message to database. Please try again later.'
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
//       {/* Animated Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
//           transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           <motion.span 
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Let's Talk!
//           </motion.span>
          
//           <motion.h2 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             Contact <span style={{ color: '#00c6fb' }}>Us!</span>
//           </motion.h2>
          
//           <motion.p 
//             className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Benefit of the society where we operate. A success website obviously needs great.
//           </motion.p>
//         </motion.div>

//         {/* ===== 2-COLUMN LAYOUT ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
//           {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 flex flex-col gap-4 w-full"
//           >
//             {/* 👇 LOCATION CARDS: Scroller hata diya, ab content ke hisaab se width badhegi */}
//             <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start pb-2">
//               {locations.map((location) => {
//                 const isActive = selectedLocation?.id === location.id;
//                 return (
//                   <button
//                     key={location.id}
//                     onClick={() => setSelectedLocation(location)}
//                     className={`rounded-xl sm:rounded-2xl p-3 text-left transition-all duration-300 w-auto ${
//                       isActive
//                         ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
//                         : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
//                     }`}
//                   >
//                     <div className="flex items-start gap-2.5 sm:gap-3">
//                       <div
//                         className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
//                           isActive
//                             ? "bg-[#008df1] text-white"
//                             : "bg-white/10 text-[#00c6fb]"
//                         }`}
//                       >
//                         {String(location.id).padStart(2, "0")}
//                       </div>
//                       <div className="min-w-0">
//                         <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
//                         <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
//                           {location.country}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Google Map */}
//             <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
//               <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//                 <Map
//                   defaultCenter={defaultCenter}
//                   defaultZoom={4}
//                   gestureHandling="greedy"
//                   disableDefaultUI={false}
//                   mapId="YOUR_GOOGLE_MAP_ID"
//                   style={{ width: '100%', height: '100%' }}
//                 >
//                   {locations.map((location) => (
//                     <AdvancedMarker
//                       key={location.id}
//                       position={location.position}
//                       onClick={() => setSelectedLocation(location)}
//                     />
//                   ))}

//                   {selectedLocation && (
//                     <InfoWindow
//                       position={selectedLocation.position}
//                       onCloseClick={() => setSelectedLocation(null)}
//                     >
//                       <div className="max-w-[200px] sm:max-w-[240px] p-1">
//                         <h3 className="font-semibold text-sm sm:text-base text-slate-900">
//                           {selectedLocation.city}
//                         </h3>
//                         <p className="mt-1 text-xs sm:text-sm text-slate-600">
//                           {selectedLocation.address}
//                         </p>
//                       </div>
//                     </InfoWindow>
//                   )}
//                 </Map>
//               </APIProvider>
//             </div>
//           </motion.div>

//           {/* ===== RIGHT SIDE — FORM ===== */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
//           >
//             <div className="mb-5 sm:mb-6 text-center">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
//                 Send Us a Message
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-500">
//                 We'll get back to you as soon as possible
//               </p>
//             </div>

//             {/* ===== SUCCESS MESSAGE ===== */}
//             <AnimatePresence>
//               {isSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
//                   exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
//                     <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
//                     <div className="flex-1">
//                       <p className="text-xs sm:text-sm font-semibold text-emerald-900">
//                         Message Sent Successfully!
//                       </p>
//                       <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5">
//                         Thank you! We'll get back to you soon.
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col" noValidate>
              
//               {/* Name */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Name
//                 </label>
//                 <input 
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.name 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your name"
//                 />
//                 <AnimatePresence>
//                   {errors.name && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.name}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Email
//                 </label>
//                 <input 
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                     errors.email 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Enter your email"
//                 />
//                 <AnimatePresence>
//                   {errors.email && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.email}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* PHONE NUMBER */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
//                     <Phone className={`h-3.5 w-3.5 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
//                     <span className="text-xs sm:text-sm text-gray-500 font-medium">+91</span>
//                   </div>
//                   <input 
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     maxLength={10}
//                     className={`w-full pl-16 sm:pl-[72px] pr-3.5 sm:pr-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
//                       errors.phone 
//                         ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                         : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                     }`}
//                     placeholder="98765 43210"
//                   />
//                 </div>
//                 <AnimatePresence>
//                   {errors.phone && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.phone}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               {/* Services */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Your Services
//                 </label>
//                 <select 
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 text-sm cursor-pointer ${
//                     errors.service 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                 >
//                   <option value="" disabled>Select a service</option>
//                   <option value="Cognitive Services">Cognitive Services</option>
//                   <option value="Digital Services">Digital Services</option>
//                   <option value="Information Technology Services">Information Technology Services</option>
//                   <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
//                   <option value="NOC Services">NOC Services</option>
//                   <option value="Cybersecurity Services">Cybersecurity Services</option>
//                 </select>
//                 <AnimatePresence>
//                   {errors.service && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.service}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Message */}
//               <div className="flex-1 flex flex-col">
//                 <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
//                   Message
//                 </label>
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className={`w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[90px] ${
//                     errors.message 
//                       ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
//                       : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
//                   }`}
//                   placeholder="Write your message..."
//                 />
//                 <AnimatePresence>
//                   {errors.message && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                       animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
//                       exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
//                         <AlertCircle className="h-3 w-3 flex-shrink-0" />
//                         {errors.message}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <motion.button 
//                 type="submit"
//                 disabled={isLoading}
//                 whileHover={!isLoading ? { scale: 1.02 } : {}}
//                 whileTap={!isLoading ? { scale: 0.98 } : {}}
//                 className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg text-sm mt-2 ${
//                   isLoading 
//                     ? 'bg-gray-400 cursor-not-allowed shadow-gray-400/30' 
//                     : 'bg-[#008df1] hover:bg-[#006fa6] shadow-[#008df1]/30'
//                 } text-white`}
//               >
//                 <span>{isLoading ? 'Sending...' : 'Submit Now'}</span>
//                 {!isLoading && <Send className="h-4 w-4" />}
//               </motion.button>
//             </form>

//             {/* Trust Badges */}
//             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Secure
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Encrypted
//               </span>
//               <span className="w-px h-3 bg-gray-200"></span>
//               <span className="flex items-center gap-1">
//                 <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
//                 Private
//               </span>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;










import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { supabase } from "../../lib/supabaseClient"; 

const ContactSection = () => {
  // ===== LOCATIONS DATA =====
  const locations = [
    {
      id: 1,
      city: "Bengaluru",
      country: "India",
      address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
      position: { lat: 12.9166, lng: 77.6101 },
    },
    {
      id: 2,
      city: "Navi Mumbai",
      country: "India",
      address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
      position: { lat: 19.0771, lng: 73.0009 },
    },
    {
      id: 3,
      city: "Noida",
      country: "India",
      address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
      position: { lat: 28.6084, lng: 77.3649 },
    },
    {
      id: 4,
      city: "Hyderabad",
      country: "India",
      address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
      position: { lat: 17.4483, lng: 78.3915 },
    },
    {
      id: 5,
      city: "Dubai",
      country: "UAE",
      address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
      position: { lat: 25.1022, lng: 55.1665 },
    },
  ];

  const defaultCenter = {
    lat: 22.5,
    lng: 67.5,
  };

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  // ===== FORM STATE =====
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // ===== ERRORS STATE =====
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // ===== SUCCESS / LOADING STATE =====
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ===== HANDLE INPUT CHANGE =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // ===== VALIDATION =====
  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '', service: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setErrors({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error('Supabase Error:', error);
      setErrors(prev => ({
        ...prev,
        message: 'Failed to send message to database. Please try again later.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 👇 Container ko full width banaya (max-w-7xl hata diya) */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10 w-full">
        
        {/* ===== HEADER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.span 
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Let's Talk!
          </motion.span>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Contact <span style={{ color: '#00c6fb' }}>Us!</span>
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Benefit of the society where we operate. A success website obviously needs great.
          </motion.p>
        </motion.div>

        {/* 👇 Grid system ko 12 columns me convert kiya taaki map ko zyada jagah mile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 w-full items-stretch">
          
          {/* ===== LEFT SIDE — LOCATIONS + MAP (Ab 8 columns lega) ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col gap-4 w-full"
          >
            {/* 👇 LOCATION CARDS: Scroller hata kar flex-wrap lagaya */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pb-2 justify-center lg:justify-start">
              {locations.map((location) => {
                const isActive = selectedLocation?.id === location.id;
                return (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className={`rounded-xl sm:rounded-2xl p-3 text-left transition-all duration-300 w-auto ${
                      isActive
                        ? "bg-white text-slate-950 shadow-lg shadow-[#008df1]/30"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div
                        className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
                          isActive
                            ? "bg-[#008df1] text-white"
                            : "bg-white/10 text-[#00c6fb]"
                        }`}
                      >
                        {String(location.id).padStart(2, "0")}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
                        <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-slate-600" : "text-slate-400"}`}>
                          {location.country}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Google Map */}
            <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                  defaultCenter={defaultCenter}
                  defaultZoom={4}
                  gestureHandling="greedy"
                  disableDefaultUI={false}
                  mapId="YOUR_GOOGLE_MAP_ID"
                  style={{ width: '100%', height: '100%' }}
                >
                  {locations.map((location) => (
                    <AdvancedMarker
                      key={location.id}
                      position={location.position}
                      onClick={() => setSelectedLocation(location)}
                    />
                  ))}

                  {selectedLocation && (
                    <InfoWindow
                      position={selectedLocation.position}
                      onCloseClick={() => setSelectedLocation(null)}
                    >
                      <div className="max-w-[200px] sm:max-w-[240px] p-1">
                        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
                          {selectedLocation.city}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600">
                          {selectedLocation.address}
                        </p>
                      </div>
                    </InfoWindow>
                  )}
                </Map>
              </APIProvider>
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE — FORM (Ab 4 columns lega) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-2xl flex flex-col"
          >
            <div className="mb-5 sm:mb-6 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                We'll get back to you as soon as possible
              </p>
            </div>

            {/* ===== SUCCESS MESSAGE ===== */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-emerald-900">
                        Message Sent Successfully!
                      </p>
                      <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5">
                        Thank you! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col" noValidate>
              
              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Name
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
                    errors.name 
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
                      : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                  }`}
                  placeholder="Enter your name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.name}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Your Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
                    errors.email 
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
                      : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                  }`}
                  placeholder="Enter your email"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.email}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* PHONE NUMBER */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                    <Phone className={`h-3.5 w-3.5 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">+91</span>
                  </div>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className={`w-full pl-16 sm:pl-[72px] pr-3.5 sm:pr-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
                      errors.phone 
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
                        : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                    }`}
                    placeholder="98765 43210"
                  />
                </div>
                <AnimatePresence>
                  {errors.phone && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.phone}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Services */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Your Services
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 text-sm cursor-pointer ${
                    errors.service 
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
                      : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                  }`}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Cognitive Services">Cognitive Services</option>
                  <option value="Digital Services">Digital Services</option>
                  <option value="Information Technology Services">Information Technology Services</option>
                  <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
                  <option value="NOC Services">NOC Services</option>
                  <option value="Cybersecurity Services">Cybersecurity Services</option>
                </select>
                <AnimatePresence>
                  {errors.service && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.service}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div className="flex-1 flex flex-col">
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[90px] ${
                    errors.message 
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent' 
                      : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                  }`}
                  placeholder="Write your message..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <motion.button 
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg text-sm mt-2 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed shadow-gray-400/30' 
                    : 'bg-[#008df1] hover:bg-[#006fa6] shadow-[#008df1]/30'
                } text-white`}
              >
                <span>{isLoading ? 'Sending...' : 'Submit Now'}</span>
                {!isLoading && <Send className="h-4 w-4" />}
              </motion.button>
            </form>

            {/* Trust Badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
                Secure
              </span>
              <span className="w-px h-3 bg-gray-200"></span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
                Encrypted
              </span>
              <span className="w-px h-3 bg-gray-200"></span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
                Private
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;