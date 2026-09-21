// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Send, Phone, Mail, Clock, Globe, ChevronRight, CheckCircle, MapPin, User, Building, Briefcase, MessageCircle, Calendar, Award } from 'lucide-react';

// // const ContactUs = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     phone: '',
// //     companyName: '',
// //     inquiryCategory: '',
// //     requestCall: '',
// //     message: '',
// //     receiveUpdates: false
// //   });

// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [focusedField, setFocusedField] = useState(null);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setTimeout(() => {
// //       setIsSubmitting(false);
// //       setIsSubmitted(true);
// //       setTimeout(() => setIsSubmitted(false), 5000);
// //     }, 1500);
// //   };

// //   const locations = [
// //     { 
// //       city: 'Dubai', 
// //       country: 'UAE', 
// //       address: '35V6+54 - Al Sufouh', 
// //       address2: 'Dubai Internet City - Dubai - United Arab Emirates', 
// //       tel: '+971 4 123 4567', 
// //       fax: '+971 4 123 4568', 
// //       icon: '🌇',
// //       embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.161!3d25.105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b2b0b0b0b0b%3A0x0!2zMjXCsDA2JzE4LjAiTiA1NcKwMDknMzkuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
// //       row: 'top'
// //     },
// //     { 
// //       city: 'Hyderabad', 
// //       country: 'India', 
// //       address: 'Sec-II, Village, HUDA Techno Enclave', 
// //       address2: 'Madhapur Hitech City, Hyderabad, Telangana - 500081', 
// //       tel: '+91 40 1234 5678', 
// //       fax: '+91 40 1234 5679', 
// //       icon: '🌃',
// //       embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.391!3d17.448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993b0b0b0b0b%3A0x0!2zMTfCsDI2JzUyLjgiTiA3OMKwMjMnMjcuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
// //       row: 'top'
// //     },
// //     { 
// //       city: 'Mumbai', 
// //       country: 'India', 
// //       address: '18th Floor, Cyberone', 
// //       address2: 'opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703', 
// //       tel: '+91 22 2345 6789', 
// //       fax: '+91 22 2345 6790', 
// //       icon: '🌆',
// //       embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d73.001!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1b0b0b0b0b0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3M8KwMDAnMDMuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
// //       row: 'bottom'
// //     },
// //     { 
// //       city: 'Noida', 
// //       country: 'India', 
// //       address: 'D-41, C Block, Sector 59', 
// //       address2: 'Noida, Uttar Pradesh 201309', 
// //       tel: '+91 120 3456 789', 
// //       fax: '+91 120 3456 790', 
// //       icon: '🏙️',
// //       embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.357!3d28.613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b0b0b0b0b0%3A0x0!2zMjjCsDM2JzQ2LjgiTiA3N8KwMjEnMjUuMiJF!5e0!3m2!1sen!2sus!4v1234567890',
// //       row: 'bottom'
// //     }
// //   ];

// //   const globalLocations = ['UAE', 'Hyderabad', 'Mumbai', 'Noida'];
// //   const categories = [
// //     { value: 'managed-infrastructure', label: '🖥️ Managed Infrastructure' },
// //     { value: 'application-development', label: '💻 Application Development' },
// //     { value: 'cybersecurity', label: '🔒 Cybersecurity' },
// //     { value: 'ai-solutions', label: '🤖 AI Solutions' },
// //     { value: 'cloud-services', label: '☁️ Cloud Services' },
// //     { value: 'digital-transformation', label: '🚀 Digital Transformation' },
// //     { value: 'partnership', label: '🤝 Partnership Inquiry' },
// //     { value: 'general', label: '📋 General Inquiry' }
// //   ];

// //   const inputClasses = (fieldName) => `
// //     w-full px-4 py-3.5 bg-white/5 border 
// //     ${focusedField === fieldName ? 'border-blue-500/60 ring-2 ring-blue-500/20' : 'border-white/15'} 
// //     rounded-xl text-white placeholder-white/30 
// //     focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 
// //     transition-all duration-300 text-sm
// //     hover:border-white/30
// //   `;

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      
// //       {/* Hero Section */}
// //       <section className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-white/10">
// //         <div 
// //           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
// //           style={{
// //             backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
// //           }}
// //         ></div>
// //         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        
// //         <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
// //           <div className="max-w-4xl">
// //             <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
// //               <span className="inline-flex items-center gap-2 text-blue-300 font-medium text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 mb-4">
// //                 <Award className="h-3 w-3" />
// //                 Futurism Technologies
// //               </span>
// //             </motion.div>
// //             <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
// //               Let's <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Connect!</span>
// //             </motion.h1>
// //             <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200/80 max-w-3xl leading-relaxed font-light mt-4">We are just a form away</motion.p>
// //             <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-xs sm:text-sm md:text-base text-blue-300/70 max-w-3xl leading-relaxed mt-2">
// //               Whether it is managed infrastructure or a need for application development, we can effectively strategize and implement your digital transformation. So, tell us your needs and know how we can address them. After all, we are only a form away.
// //             </motion.p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Locations Section - 2x2 Grid with Box Layout */}
// //       <section className="py-12 sm:py-16 md:py-20">
// //         <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
// //           <motion.div 
// //             initial={{ opacity: 0, y: 30 }} 
// //             animate={{ opacity: 1, y: 0 }} 
// //             transition={{ duration: 0.6 }} 
// //             className="text-center mb-10 sm:mb-12"
// //           >
// //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
// //               Time is <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Presence</span>
// //             </h2>
// //             <p className="text-blue-200/60 text-sm sm:text-base mt-2">Find us at our global locations</p>
// //           </motion.div>

// //           {/* 2x2 Grid Box Layout */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
// //             {locations.map((location, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ 
// //                   opacity: 1, 
// //                   y: 0,
// //                   transition: { 
// //                     duration: 0.5, 
// //                     delay: idx * 0.1,
// //                     type: "spring",
// //                     stiffness: 100
// //                   }
// //                 }}
// //                 whileHover={{
// //                   y: -8,
// //                   scale: 1.02,
// //                   boxShadow: "0 25px 50px -12px rgba(99,102,241,0.3)",
// //                   transition: { duration: 0.3 }
// //                 }}
// //                 className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 group relative"
// //               >
// //                 {/* Glow Effect on Hover */}
// //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
// //                 {/* Map */}
// //                 <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 bg-gray-800 relative overflow-hidden">
// //                   <iframe
// //                     src={location.embedUrl}
// //                     width="100%"
// //                     height="100%"
// //                     style={{ border: 0 }}
// //                     allowFullScreen
// //                     loading="lazy"
// //                     referrerPolicy="no-referrer-when-downgrade"
// //                     title={`${location.city} Map`}
// //                     className="w-full h-full"
// //                   />
// //                   <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
// //                   {/* Location Badge */}
// //                   <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
// //                     <div className="flex items-center gap-2">
// //                       <span className="text-lg">{location.icon}</span>
// //                       <span className="text-white font-semibold text-sm">{location.city}</span>
// //                     </div>
// //                   </div>
                  
// //                   {/* Row Indicator */}
// //                   <div className="absolute top-4 right-4">
// //                     <span className="text-[10px] font-medium px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/70 border border-white/10">
// //                       {location.row === 'top' ? '⬆' : '⬇'}
// //                     </span>
// //                   </div>
// //                 </div>
                
// //                 {/* Content */}
// //                 <div className="p-4 sm:p-5 md:p-6 relative">
// //                   <div className="flex items-center gap-2 mb-2">
// //                     <span className="text-blue-400 text-sm font-medium">{location.country}</span>
// //                   </div>
// //                   <div className="space-y-1 text-blue-200/60 text-xs sm:text-sm">
// //                     <p className="font-medium text-white/80">{location.address}</p>
// //                     <p className="text-blue-300/50 text-xs">{location.address2}</p>
// //                     <div className="flex flex-wrap gap-3 mt-2 pt-2 border-t border-white/5">
// //                       <p className="text-white/80 font-medium text-xs">📞 {location.tel}</p>
// //                       {location.fax && <p className="text-white/50 text-xs">📠 {location.fax}</p>}
// //                     </div>
// //                   </div>
                  
// //                   {/* Google Maps Link */}
// //                   <motion.a
// //                     href={location.embedUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     whileHover={{ x: 5 }}
// //                     className="mt-3 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl border border-blue-500/20 hover:border-blue-500/40 w-full justify-center"
// //                   >
// //                     <MapPin className="h-4 w-4" />
// //                     View on Google Maps
// //                     <span className="text-xs">→</span>
// //                   </motion.a>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Form Section */}
// //       <section className="py-12 sm:py-16 md:py-20 border-t border-white/10">
// //         <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
// //           <div className="max-w-3xl mx-auto">
// //             {/* Form Header */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               className="text-center mb-8"
// //             >
// //               <span className="inline-flex items-center gap-2 text-blue-300 font-medium text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 mb-4">
// //                 <MessageCircle className="h-3 w-3" />
// //                 Get In Touch
// //               </span>
// //               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
// //                 Let's Talk About Your <br />
// //                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Needs</span>
// //               </h2>
// //               <p className="text-blue-200/50 text-sm mt-3 max-w-md mx-auto">
// //                 Fill in the form below and our team will get back to you within 24 hours.
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl"
// //             >
// //               {isSubmitted ? (
// //                 <motion.div
// //                   initial={{ opacity: 0, scale: 0.9 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-10 text-center"
// //                 >
// //                   <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
// //                     <CheckCircle className="h-10 w-10 text-green-400" />
// //                   </div>
// //                   <h3 className="text-2xl font-bold text-white">Thank You! 🎉</h3>
// //                   <p className="text-green-300/80 mt-2 max-w-md mx-auto">
// //                     Your message has been sent successfully. Our team will get back to you soon.
// //                   </p>
// //                 </motion.div>
// //               ) : (
// //                 <form onSubmit={handleSubmit} className="space-y-5">
// //                   {/* Row 1: Full Name + Work Email */}
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
// //                     <div className="relative">
// //                       <label className="block text-white font-medium text-sm mb-1.5">
// //                         Full Name <span className="text-red-400">*</span>
// //                       </label>
// //                       <div className="relative">
// //                         <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
// //                         <input
// //                           type="text"
// //                           name="fullName"
// //                           value={formData.fullName}
// //                           onChange={handleChange}
// //                           onFocus={() => setFocusedField('fullName')}
// //                           onBlur={() => setFocusedField(null)}
// //                           required
// //                           className={inputClasses('fullName') + ' pl-10'}
// //                           placeholder="John Doe"
// //                         />
// //                       </div>
// //                     </div>
// //                     <div className="relative">
// //                       <label className="block text-white font-medium text-sm mb-1.5">
// //                         Work Email <span className="text-red-400">*</span>
// //                       </label>
// //                       <div className="relative">
// //                         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
// //                         <input
// //                           type="email"
// //                           name="email"
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           onFocus={() => setFocusedField('email')}
// //                           onBlur={() => setFocusedField(null)}
// //                           required
// //                           className={inputClasses('email') + ' pl-10'}
// //                           placeholder="john@company.com"
// //                         />
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Row 2: Phone No + Company Name */}
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
// //                     <div className="relative">
// //                       <label className="block text-white font-medium text-sm mb-1.5">
// //                         Phone No <span className="text-red-400">*</span>
// //                       </label>
// //                       <div className="relative">
// //                         <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
// //                         <input
// //                           type="tel"
// //                           name="phone"
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           onFocus={() => setFocusedField('phone')}
// //                           onBlur={() => setFocusedField(null)}
// //                           required
// //                           className={inputClasses('phone') + ' pl-10'}
// //                           placeholder="+1 (555) 000-0000"
// //                         />
// //                       </div>
// //                     </div>
// //                     <div className="relative">
// //                       <label className="block text-white font-medium text-sm mb-1.5">
// //                         Company Name <span className="text-red-400">*</span>
// //                       </label>
// //                       <div className="relative">
// //                         <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
// //                         <input
// //                           type="text"
// //                           name="companyName"
// //                           value={formData.companyName}
// //                           onChange={handleChange}
// //                           onFocus={() => setFocusedField('companyName')}
// //                           onBlur={() => setFocusedField(null)}
// //                           required
// //                           className={inputClasses('companyName') + ' pl-10'}
// //                           placeholder="Acme Inc."
// //                         />
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Row 3: Inquiry Category */}
// //                   <div className="relative">
// //                     <label className="block text-white font-medium text-sm mb-1.5">
// //                       Inquiry Category <span className="text-red-400">*</span>
// //                     </label>
// //                     <div className="relative">
// //                       <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 z-10" />
// //                       <select
// //                         name="inquiryCategory"
// //                         value={formData.inquiryCategory}
// //                         onChange={handleChange}
// //                         onFocus={() => setFocusedField('inquiryCategory')}
// //                         onBlur={() => setFocusedField(null)}
// //                         required
// //                         className={inputClasses('inquiryCategory') + ' pl-10 appearance-none cursor-pointer'}
// //                       >
// //                         <option value="" className="bg-gray-800">Select a category</option>
// //                         {categories.map((cat, idx) => (
// //                           <option key={idx} value={cat.value} className="bg-gray-800 py-2">{cat.label}</option>
// //                         ))}
// //                       </select>
// //                       <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
// //                         <svg className="h-4 w-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //                         </svg>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Row 4: Request For Call */}
// //                   <div className="relative">
// //                     <label className="block text-white font-medium text-sm mb-1.5">
// //                       Request For Call
// //                     </label>
// //                     <div className="relative">
// //                       <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 z-10" />
// //                       <select
// //                         name="requestCall"
// //                         value={formData.requestCall}
// //                         onChange={handleChange}
// //                         onFocus={() => setFocusedField('requestCall')}
// //                         onBlur={() => setFocusedField(null)}
// //                         className={inputClasses('requestCall') + ' pl-10 appearance-none cursor-pointer'}
// //                       >
// //                         <option value="" className="bg-gray-800">Select preferred time</option>
// //                         <option value="morning" className="bg-gray-800">🌅 Morning (9AM - 12PM)</option>
// //                         <option value="afternoon" className="bg-gray-800">☀️ Afternoon (12PM - 5PM)</option>
// //                         <option value="evening" className="bg-gray-800">🌙 Evening (5PM - 8PM)</option>
// //                       </select>
// //                       <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
// //                         <svg className="h-4 w-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //                         </svg>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Row 5: Any Message */}
// //                   <div className="relative">
// //                     <label className="block text-white font-medium text-sm mb-1.5">
// //                       Any Message
// //                     </label>
// //                     <div className="relative">
// //                       <MessageCircle className="absolute left-3 top-3.5 h-4 w-4 text-white/30 z-10" />
// //                       <textarea
// //                         name="message"
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         onFocus={() => setFocusedField('message')}
// //                         onBlur={() => setFocusedField(null)}
// //                         rows="4"
// //                         className={inputClasses('message') + ' pl-10 resize-none min-h-[120px]'}
// //                         placeholder="Tell us about your project, requirements, or any questions..."
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Checkbox */}
// //                   <div className="flex items-start gap-3 pt-2">
// //                     <input
// //                       type="checkbox"
// //                       name="receiveUpdates"
// //                       checked={formData.receiveUpdates}
// //                       onChange={handleChange}
// //                       className="w-4 h-4 mt-1 bg-white/10 border-white/20 rounded text-blue-500 focus:ring-blue-500/50 focus:ring-2 transition-all"
// //                     />
// //                     <label className="text-blue-200/70 text-sm leading-relaxed cursor-pointer">
// //                       I would like to receive information about Futurism Technologies' news and events.
// //                     </label>
// //                   </div>

// //                   {/* Submit Button */}
// //                   <motion.button
// //                     type="submit"
// //                     disabled={isSubmitting}
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.98 }}
// //                     className="w-full relative overflow-hidden group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-base disabled:opacity-50"
// //                   >
// //                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// //                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
// //                     <span className="relative z-10 flex items-center gap-3">
// //                       {isSubmitting ? (
// //                         <>
// //                           <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
// //                           Sending...
// //                         </>
// //                       ) : (
// //                         <>
// //                           <Send className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
// //                           Submit
// //                           <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
// //                         </>
// //                       )}
// //                     </span>
// //                   </motion.button>
// //                 </form>
// //               )}
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ContactUs;










// // import React, { useState } from "react";
// // import {
// //   ArrowRight,
// //   Phone,
// //   MessageSquare,
// //   Mail,
// //   Clock,
// //   MapPin,
// // } from "lucide-react";

// // const ContactUs = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   const [submitted, setSubmitted] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form Data:", formData);
// //     setSubmitted(true);
// //     setTimeout(() => {
// //       setSubmitted(false);
// //     }, 3000);
// //   };

// //   return (
// //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white">
// //       {/* ================= HERO ================= */}
// //       <section className="relative pt-32 pb-10">
// //         {/* Background Grid */}
// //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// //           <div
// //             className="absolute inset-0 opacity-[0.05]"
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// //               backgroundSize: "40px 40px",
// //             }}
// //           />
// //         </div>

// //         <div className="relative mx-auto max-w-4xl px-6 text-center">
// //           <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003F7D] md:text-6xl">
// //             Let's Build Something
// //             <br />
// //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// //               Great Together
// //             </span>
// //           </h1>
// //           <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
// //             We're here to answer your questions, discuss your ideas,
// //             <br className="hidden md:block" />
// //             and start your next big project.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ================= CONTACT SECTION ================= */}
// //       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
// //         {/* Background */}
// //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// //           <div
// //             className="absolute inset-0 opacity-[0.05]"
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// //               backgroundSize: "40px 40px",
// //             }}
// //           />
// //           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// //           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// //         </div>

// //         <div className="container relative z-10 mx-auto px-6">
// //           {/* Section Heading */}
// //           <div className="mb-10 text-center">
// //             <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 px-4 py-1.5">
// //               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-sm font-medium text-transparent">
// //                 Contact Us
// //               </span>
// //             </div>
// //             <h2 className="mb-5 text-4xl font-bold leading-tight text-[#003F7D] md:text-5xl">
// //               Get in Touch
// //             </h2>
// //             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
// //             <p className="mx-auto max-w-2xl text-base text-gray-600">
// //               Have a project in mind? Reach out to us for a free consultation.
// //             </p>
// //           </div>

// //           {/* Main Grid */}
// //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// //             {/* ================= FORM ================= */}
// //             <div className="lg:col-span-7">
// //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 {/* Decoration */}
// //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// //                 <div className="relative">
// //                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
// //                     Send Us a Message
// //                   </h3>

// //                   <form onSubmit={handleSubmit} className="space-y-4">
// //                     {/* Name */}
// //                     <div>
// //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Your Name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         name="name"
// //                         type="text"
// //                         required
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Your Name"
// //                         className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                       />
// //                     </div>

// //                     {/* Email + Phone */}
// //                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// //                       <div>
// //                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Email Address
// //                         </label>
// //                         <input
// //                           id="email"
// //                           name="email"
// //                           type="email"
// //                           required
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="your@email.com"
// //                           className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           id="phone"
// //                           name="phone"
// //                           type="tel"
// //                           required
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="+91 12345 67890"
// //                           className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         />
// //                       </div>
// //                     </div>

// //                     {/* Service */}
// //                     <div>
// //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Service (Optional)
// //                       </label>
// //                       <select
// //                         id="service"
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                       >
// //                         <option value="">Select a service</option>
// //                         <option value="Mobile App Development">Mobile App Development</option>
// //                         <option value="Website Development">Website Development</option>
// //                         <option value="Custom Software">Custom Software</option>
// //                         <option value="UI/UX Design">UI/UX Design</option>
// //                         <option value="Cloud & Hosting">Cloud & Hosting</option>
// //                         <option value="Maintenance & Support">Maintenance & Support</option>
// //                         <option value="Other">Other</option>
// //                       </select>
// //                     </div>

// //                     {/* Message */}
// //                     <div>
// //                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Message
// //                       </label>
// //                       <textarea
// //                         id="message"
// //                         name="message"
// //                         rows="3"
// //                         required
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         placeholder="Tell us about your project or inquiry..."
// //                         className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                       />
// //                     </div>

// //                     {/* Submit */}
// //                     <div className="pt-2">
// //                       <button
// //                         type="submit"
// //                         className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#008FD1] px-6 py-2.5 text-base font-medium text-white shadow-md shadow-[#01ADF0]/20 transition-all duration-300 hover:shadow-lg"
// //                       >
// //                         <span className="relative z-10">Submit Inquiry</span>
// //                         <ArrowRight
// //                           size={17}
// //                           className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// //                         />
// //                         <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// //                       </button>
// //                     </div>
// //                   </form>

// //                   {/* Success Message */}
// //                   {submitted && (
// //                     <div className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
// //                       Your inquiry has been submitted successfully!
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ================= RIGHT SIDE ================= */}
// //             <div className="lg:col-span-5">
// //               {/* Connect With Us */}
// //               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// //                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
// //                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                 </div>

// //                 <div className="relative">
// //                   <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
// //                   <p className="mb-6 text-sm text-white/80">
// //                     We're available to answer your questions and help with your project.
// //                   </p>

// //                   <div className="space-y-4">
// //                     <ContactItem
// //                       icon={<Phone size={18} />}
// //                       title="Phone"
// //                       value="+91 9974361458"
// //                       href="tel:+919974361458"
// //                     />
// //                     <ContactItem
// //                       icon={<MessageSquare size={18} />}
// //                       title="WhatsApp"
// //                       value="+91 9974361458"
// //                       href="https://wa.me/919974361458"
// //                     />
// //                     <ContactItem
// //                       icon={<Mail size={18} />}
// //                       title="Email"
// //                       value="info@sccinfotech.com"
// //                       href="mailto:info@sccinfotech.com"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Office Details */}
// //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="space-y-5">
// //                   {/* Office Hours */}
// //                   <div className="flex items-center">
// //                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <Clock size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// //                         Office Hours
// //                       </h4>
// //                       <p className="text-sm text-gray-600">
// //                         Monday - Saturday: 9AM - 7PM
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* Address */}
// //                   <div className="flex items-start">
// //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <MapPin size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// //                         Office Location
// //                       </h4>
// //                       <p className="text-sm leading-6 text-gray-600">
// //                         349-350, Vikas Shoppers, B/H Filter House Bhagvan
// //                         Nagar Circle, near Sarthana Jakat Naka, Nana
// //                         Varachha, Surat, Gujarat 395006
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= GOOGLE MAP ================= */}
// //       <section className="relative pb-20">
// //         <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
// //           <div
// //             className="absolute inset-0"
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// //               backgroundSize: "40px 40px",
// //             }}
// //           />
// //         </div>

// //         <div className="container relative mx-auto overflow-hidden rounded-2xl px-6">
// //           {/* Fixed Google Map Embed URL */}
// //           <iframe
// //             title="Office Location"
// //             src="https://maps.google.com/maps?q=Sarthana%20Jakat%20Naka,%20Surat,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
// //             width="100%"
// //             height="450"
// //             loading="lazy"
// //             className="rounded-2xl border-0 shadow-md"
// //             referrerPolicy="no-referrer-when-downgrade"
// //             allowFullScreen
// //           />
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // // ================= CONTACT ITEM =================
// // const ContactItem = ({ icon, title, value, href }) => {
// //   return (
// //     <div className="flex items-center">
// //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
// //         {icon}
// //       </div>
// //       <div>
// //         <h4 className="text-base font-semibold">{title}</h4>
// //         <a
// //           href={href}
// //           target={href?.startsWith("http") ? "_blank" : undefined}
// //           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
// //           className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
// //         >
// //           {value}
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactUs;






// // import React, { useState } from "react";
// // import {
// //   ArrowRight,
// //   Phone,
// //   MessageSquare,
// //   Mail,
// //   Clock,
// //   MapPin,
// // } from "lucide-react";

// // const ContactUs = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   const [submitted, setSubmitted] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form Data:", formData);
// //     setSubmitted(true);
// //     setTimeout(() => {
// //       setSubmitted(false);
// //     }, 3000);
// //   };

// //   return (
// //     // Main tag me bhi thoda top padding add kiya hai
// //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
// //       {/* ================= HERO ================= */}
// //       {/* Padding ko pt-64 kar diya hai (16rem / 256px) */}
// //       <section className="relative pt-64 pb-10">
// //         {/* Background Grid */}
// //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// //           <div
// //             className="absolute inset-0 opacity-[0.05]"
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// //               backgroundSize: "40px 40px",
// //             }}
// //           />
// //         </div>

// //         <div className="relative mx-auto max-w-4xl px-6 text-center">
// //           <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003F7D] md:text-6xl">
// //             Let's Build Something
// //             <br />
// //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// //               Great Together
// //             </span>
// //           </h1>
// //           <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
// //             We're here to answer your questions, discuss your ideas,
// //             <br className="hidden md:block" />
// //             and start your next big project.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ================= CONTACT SECTION ================= */}
// //       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
// //         {/* Background */}
// //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// //           <div
// //             className="absolute inset-0 opacity-[0.05]"
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// //               backgroundSize: "40px 40px",
// //             }}
// //           />
// //           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// //           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// //         </div>

// //         <div className="container relative z-10 mx-auto px-6">
// //           {/* Section Heading */}
// //           <div className="mb-10 text-center">
// //             <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 px-4 py-1.5">
// //               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-sm font-medium text-transparent">
// //                 Contact Us
// //               </span>
// //             </div>
// //             <h2 className="mb-5 text-4xl font-bold leading-tight text-[#003F7D] md:text-5xl">
// //               Get in Touch
// //             </h2>
// //             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
// //             <p className="mx-auto max-w-2xl text-base text-gray-600">
// //               Have a project in mind? Reach out to us for a free consultation.
// //             </p>
// //           </div>

// //           {/* Main Grid */}
// //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// //             {/* ================= FORM ================= */}
// //             <div className="lg:col-span-7">
// //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 {/* Decoration */}
// //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// //                 <div className="relative">
// //                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
// //                     Send Us a Message
// //                   </h3>

// //                   <form onSubmit={handleSubmit} className="space-y-4">
// //                     {/* Name */}
// //                     <div>
// //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Your Name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         name="name"
// //                         type="text"
// //                         required
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Your Name"
// //                         className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                       />
// //                     </div>

// //                     {/* Email + Phone */}
// //                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// //                       <div>
// //                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Email Address
// //                         </label>
// //                         <input
// //                           id="email"
// //                           name="email"
// //                           type="email"
// //                           required
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="your@email.com"
// //                           className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         />
// //                       </div>
// //                       <div>
// //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           id="phone"
// //                           name="phone"
// //                           type="tel"
// //                           required
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="+91 12345 67890"
// //                           className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         />
// //                       </div>
// //                     </div>

// //                     {/* Service */}
// //                     <div>
// //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Service (Optional)
// //                       </label>
// //                       <select
// //                         id="service"
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                       >
// //                         <option value="">Select a service</option>
// //                         <option value="Mobile App Development">Mobile App Development</option>
// //                         <option value="Website Development">Website Development</option>
// //                         <option value="Custom Software">Custom Software</option>
// //                         <option value="UI/UX Design">UI/UX Design</option>
// //                         <option value="Cloud & Hosting">Cloud & Hosting</option>
// //                         <option value="Maintenance & Support">Maintenance & Support</option>
// //                         <option value="Other">Other</option>
// //                       </select>
// //                     </div>

// //                     {/* Message */}
// //                     <div>
// //                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Message
// //                       </label>
// //                       <textarea
// //                         id="message"
// //                         name="message"
// //                         rows="3"
// //                         required
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         placeholder="Tell us about your project or inquiry..."
// //                         className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                       />
// //                     </div>

// //                     {/* Submit */}
// //                     <div className="pt-2">
// //                       <button
// //                         type="submit"
// //                         className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#008FD1] px-6 py-2.5 text-base font-medium text-white shadow-md shadow-[#01ADF0]/20 transition-all duration-300 hover:shadow-lg"
// //                       >
// //                         <span className="relative z-10">Submit Inquiry</span>
// //                         <ArrowRight
// //                           size={17}
// //                           className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// //                         />
// //                         <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// //                       </button>
// //                     </div>
// //                   </form>

// //                   {/* Success Message */}
// //                   {submitted && (
// //                     <div className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
// //                       Your inquiry has been submitted successfully!
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ================= RIGHT SIDE ================= */}
// //             <div className="lg:col-span-5">
// //               {/* Connect With Us */}
// //               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// //                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
// //                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                 </div>

// //                 <div className="relative">
// //                   <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
// //                   <p className="mb-6 text-sm text-white/80">
// //                     We're available to answer your questions and help with your project.
// //                   </p>

// //                   <div className="space-y-4">
// //                     <ContactItem
// //                       icon={<Phone size={18} />}
// //                       title="Phone"
// //                       value="+91 9974361458"
// //                       href="tel:+919974361458"
// //                     />
// //                     <ContactItem
// //                       icon={<MessageSquare size={18} />}
// //                       title="WhatsApp"
// //                       value="+91 9974361458"
// //                       href="https://wa.me/919974361458"
// //                     />
// //                     <ContactItem
// //                       icon={<Mail size={18} />}
// //                       title="Email"
// //                       value="info@sccinfotech.com"
// //                       href="mailto:info@sccinfotech.com"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Office Details */}
// //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="space-y-5">
// //                   {/* Office Hours */}
// //                   <div className="flex items-center">
// //                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <Clock size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// //                         Office Hours
// //                       </h4>
// //                       <p className="text-sm text-gray-600">
// //                         Monday - Saturday: 9AM - 7PM
// //                       </p>
// //                     </div>
// //                   </div>

// //                   {/* Address */}
// //                   <div className="flex items-start">
// //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <MapPin size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// //                         Office Location
// //                       </h4>
// //                       <p className="text-sm leading-6 text-gray-600">
// //                         349-350, Vikas Shoppers, B/H Filter House Bhagvan
// //                         Nagar Circle, near Sarthana Jakat Naka, Nana
// //                         Varachha, Surat, Gujarat 395006
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= GOOGLE MAP ================= */}
// //       <section className="relative pb-20">
// //         <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
// //           <div
// //             className="absolute inset-0"
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// //               backgroundSize: "40px 40px",
// //             }}
// //           />
// //         </div>

// //         <div className="container relative mx-auto overflow-hidden rounded-2xl px-6">
// //           {/* Fixed Google Map Embed URL */}
// //           <iframe
// //             title="Office Location"
// //             src="https://maps.google.com/maps?q=Sarthana%20Jakat%20Naka,%20Surat,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
// //             width="100%"
// //             height="450"
// //             loading="lazy"
// //             className="rounded-2xl border-0 shadow-md"
// //             referrerPolicy="no-referrer-when-downgrade"
// //             allowFullScreen
// //           />
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // // ================= CONTACT ITEM =================
// // const ContactItem = ({ icon, title, value, href }) => {
// //   return (
// //     <div className="flex items-center">
// //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
// //         {icon}
// //       </div>
// //       <div>
// //         <h4 className="text-base font-semibold">{title}</h4>
// //         <a
// //           href={href}
// //           target={href?.startsWith("http") ? "_blank" : undefined}
// //           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
// //           className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
// //         >
// //           {value}
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactUs;






// import React, { useState } from "react";
// import {
//   ArrowRight,
//   Phone,
//   MessageSquare,
//   Mail,
//   Clock,
//   MapPin,
//   AlertCircle,
//   CheckCircle,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// // ⚠️ IMPORTANT: Apne project ke hisaab se supabase ka path check kar lein
// import { supabase } from "../../lib/supabaseClient"; 

// const ContactUs = () => {
//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Phone number ke liye sirf digits allow karein (max 10)
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }

//     // Error clear karein jab user type kare
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your name.";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email address.";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Please enter your phone number.";
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid 10-digit mobile number.";
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = "Please select a service.";
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Please write your message.";
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
//       const { data, error } = await supabase.from("contacts").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           service: formData.service,
//           message: formData.message,
//         },
//       ]);

//       if (error) throw error;

//       setIsSuccess(true);
//       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//       setErrors({ name: "", email: "", phone: "", service: "", message: "" });

//       // 5 second baad success message hide karein
//       setTimeout(() => setIsSuccess(false), 5000);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({
//         ...prev,
//         message: "Failed to send message to database. Please try again later.",
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
//       {/* ================= HERO ================= */}
//       <section className="relative pt-64 pb-10">
//         <div className="pointer-events-none absolute inset-0 overflow-visible">
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative mx-auto max-w-4xl px-6 text-center">
//           <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003F7D] md:text-6xl">
//             Let's Build Something
//             <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h1>
//           <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
//             We're here to answer your questions, discuss your ideas,
//             <br className="hidden md:block" />
//             and start your next big project.
//           </p>
//         </div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
//         <div className="pointer-events-none absolute inset-0 overflow-visible">
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
//           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
//         </div>

//         <div className="container relative z-10 mx-auto px-6">
//           <div className="mb-10 text-center">
//             <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 px-4 py-1.5">
//               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-sm font-medium text-transparent">
//                 Contact Us
//               </span>
//             </div>
//             <h2 className="mb-5 text-4xl font-bold leading-tight text-[#003F7D] md:text-5xl">
//               Get in Touch
//             </h2>
//             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
//             <p className="mx-auto max-w-2xl text-base text-gray-600">
//               Have a project in mind? Reach out to us for a free consultation.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
//             {/* ================= FORM ================= */}
//             <div className="lg:col-span-7">
//               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
//                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

//                 <div className="relative">
//                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
//                     Send Us a Message
//                   </h3>

//                   {/* Success Message */}
//                   <AnimatePresence>
//                     {isSuccess && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
//                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
//                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
//                           <div>
//                             <p className="text-sm font-semibold text-emerald-900">
//                               Message Sent Successfully!
//                             </p>
//                             <p className="mt-0.5 text-xs text-emerald-700">
//                               Thank you! We'll get back to you soon.
//                             </p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//                     {/* Name */}
//                     <div>
//                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Your Name
//                       </label>
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your Name"
//                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.name
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       />
//                       <AnimatePresence>
//                         {errors.name && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.name}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Email + Phone */}
//                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                       <div>
//                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
//                           Email Address
//                         </label>
//                         <input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="your@email.com"
//                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                             errors.email
//                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                           }`}
//                         />
//                         <AnimatePresence>
//                           {errors.email && (
//                             <motion.p
//                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                               className="flex items-center gap-1 text-xs font-medium text-red-500"
//                             >
//                               <AlertCircle className="h-3 w-3 shrink-0" />
//                               {errors.email}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                       <div>
//                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
//                           Phone Number
//                         </label>
//                         <input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           maxLength={10}
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="+91 12345 67890"
//                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                             errors.phone
//                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                           }`}
//                         />
//                         <AnimatePresence>
//                           {errors.phone && (
//                             <motion.p
//                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                               className="flex items-center gap-1 text-xs font-medium text-red-500"
//                             >
//                               <AlertCircle className="h-3 w-3 shrink-0" />
//                               {errors.phone}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </div>

//                     {/* Service */}
//                     <div>
//                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Service
//                       </label>
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.service
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       >
//                         <option value="">Select a service</option>
//                         <option value="Mobile App Development">Mobile App Development</option>
//                         <option value="Website Development">Website Development</option>
//                         <option value="Custom Software">Custom Software</option>
//                         <option value="UI/UX Design">UI/UX Design</option>
//                         <option value="Cloud & Hosting">Cloud & Hosting</option>
//                         <option value="Maintenance & Support">Maintenance & Support</option>
//                         <option value="Other">Other</option>
//                       </select>
//                       <AnimatePresence>
//                         {errors.service && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.service}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Message */}
//                     <div>
//                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="3"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Tell us about your project or inquiry..."
//                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.message
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       />
//                       <AnimatePresence>
//                         {errors.message && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.message}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="pt-2">
//                       <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
//                           isLoading
//                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
//                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
//                         }`}
//                       >
//                         <span className="relative z-10">
//                           {isLoading ? "Sending..." : "Submit Inquiry"}
//                         </span>
//                         {!isLoading && (
//                           <ArrowRight
//                             size={17}
//                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
//                           />
//                         )}
//                         {!isLoading && (
//                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* ================= RIGHT SIDE ================= */}
//             <div className="lg:col-span-5">
//               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
//                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
//                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                 </div>

//                 <div className="relative">
//                   <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
//                   <p className="mb-6 text-sm text-white/80">
//                     We're available to answer your questions and help with your project.
//                   </p>

//                   <div className="space-y-4">
//                     <ContactItem
//                       icon={<Phone size={18} />}
//                       title="Phone"
//                       value="+91 9974361458"
//                       href="tel:+919974361458"
//                     />
//                     <ContactItem
//                       icon={<MessageSquare size={18} />}
//                       title="WhatsApp"
//                       value="+91 9974361458"
//                       href="https://wa.me/919974361458"
//                     />
//                     <ContactItem
//                       icon={<Mail size={18} />}
//                       title="Email"
//                       value="info@sccinfotech.com"
//                       href="mailto:info@sccinfotech.com"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
//                 <div className="space-y-5">
//                   <div className="flex items-center">
//                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
//                       <Clock size={18} />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
//                         Office Hours
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Monday - Saturday: 9AM - 7PM
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
//                       <MapPin size={18} />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
//                         Office Location
//                       </h4>
//                       <p className="text-sm leading-6 text-gray-600">
//                         349-350, Vikas Shoppers, B/H Filter House Bhagvan
//                         Nagar Circle, near Sarthana Jakat Naka, Nana
//                         Varachha, Surat, Gujarat 395006
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= GOOGLE MAP ================= */}
//       <section className="relative pb-20">
//         <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="container relative mx-auto overflow-hidden rounded-2xl px-6">
//           <iframe
//             title="Office Location"
//             src="https://maps.google.com/maps?q=Sarthana%20Jakat%20Naka,%20Surat,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
//             width="100%"
//             height="450"
//             loading="lazy"
//             className="rounded-2xl border-0 shadow-md"
//             referrerPolicy="no-referrer-when-downgrade"
//             allowFullScreen
//           />
//         </div>
//       </section>
//     </main>
//   );
// };

// // ================= CONTACT ITEM =================
// const ContactItem = ({ icon, title, value, href }) => {
//   return (
//     <div className="flex items-center">
//       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
//         {icon}
//       </div>
//       <div>
//         <h4 className="text-base font-semibold">{title}</h4>
//         <a
//           href={href}
//           target={href?.startsWith("http") ? "_blank" : undefined}
//           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
//           className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
//         >
//           {value}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;







// import React, { useState } from "react";
// import {
//   ArrowRight,
//   Phone,
//   MessageSquare,
//   Mail,
//   Clock,
//   MapPin,
//   AlertCircle,
//   CheckCircle,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// // ✅ PATH FIXED: Ab ye src/lib/supabaseClient.js ko dhundhega
// import { supabase } from "../lib/supabaseClient"; 

// const ContactUs = () => {
//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Phone number ke liye sirf digits allow karein (max 10)
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }

//     // Error clear karein jab user type kare
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your name.";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email address.";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Please enter your phone number.";
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid 10-digit mobile number.";
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = "Please select a service.";
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Please write your message.";
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
//       const { data, error } = await supabase.from("contacts").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           service: formData.service,
//           message: formData.message,
//         },
//       ]);

//       if (error) throw error;

//       setIsSuccess(true);
//       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//       setErrors({ name: "", email: "", phone: "", service: "", message: "" });

//       // 5 second baad success message hide karein
//       setTimeout(() => setIsSuccess(false), 5000);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({
//         ...prev,
//         message: "Failed to send message to database. Please try again later.",
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
//       {/* ================= HERO ================= */}
//       <section className="relative pt-64 pb-10">
//         <div className="pointer-events-none absolute inset-0 overflow-visible">
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative mx-auto max-w-4xl px-6 text-center">
//           <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003F7D] md:text-6xl">
//             Let's Build Something
//             <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h1>
//           <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
//             We're here to answer your questions, discuss your ideas,
//             <br className="hidden md:block" />
//             and start your next big project.
//           </p>
//         </div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
//         <div className="pointer-events-none absolute inset-0 overflow-visible">
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
//           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
//         </div>

//         <div className="container relative z-10 mx-auto px-6">
//           <div className="mb-10 text-center">
//             <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 px-4 py-1.5">
//               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-sm font-medium text-transparent">
//                 Contact Us
//               </span>
//             </div>
//             <h2 className="mb-5 text-4xl font-bold leading-tight text-[#003F7D] md:text-5xl">
//               Get in Touch
//             </h2>
//             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
//             <p className="mx-auto max-w-2xl text-base text-gray-600">
//               Have a project in mind? Reach out to us for a free consultation.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
//             {/* ================= FORM ================= */}
//             <div className="lg:col-span-7">
//               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
//                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

//                 <div className="relative">
//                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
//                     Send Us a Message
//                   </h3>

//                   {/* Success Message */}
//                   <AnimatePresence>
//                     {isSuccess && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
//                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
//                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
//                           <div>
//                             <p className="text-sm font-semibold text-emerald-900">
//                               Message Sent Successfully!
//                             </p>
//                             <p className="mt-0.5 text-xs text-emerald-700">
//                               Thank you! We'll get back to you soon.
//                             </p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//                     {/* Name */}
//                     <div>
//                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Your Name
//                       </label>
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your Name"
//                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.name
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       />
//                       <AnimatePresence>
//                         {errors.name && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.name}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Email + Phone */}
//                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                       <div>
//                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
//                           Email Address
//                         </label>
//                         <input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="your@email.com"
//                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                             errors.email
//                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                           }`}
//                         />
//                         <AnimatePresence>
//                           {errors.email && (
//                             <motion.p
//                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                               className="flex items-center gap-1 text-xs font-medium text-red-500"
//                             >
//                               <AlertCircle className="h-3 w-3 shrink-0" />
//                               {errors.email}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                       <div>
//                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
//                           Phone Number
//                         </label>
//                         <input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           maxLength={10}
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="+91 12345 67890"
//                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                             errors.phone
//                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                           }`}
//                         />
//                         <AnimatePresence>
//                           {errors.phone && (
//                             <motion.p
//                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                               className="flex items-center gap-1 text-xs font-medium text-red-500"
//                             >
//                               <AlertCircle className="h-3 w-3 shrink-0" />
//                               {errors.phone}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </div>

//                     {/* Service */}
//                     <div>
//                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Service
//                       </label>
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.service
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       >
//                         <option value="">Select a service</option>
//                         <option value="Mobile App Development">Mobile App Development</option>
//                         <option value="Website Development">Website Development</option>
//                         <option value="Custom Software">Custom Software</option>
//                         <option value="UI/UX Design">UI/UX Design</option>
//                         <option value="Cloud & Hosting">Cloud & Hosting</option>
//                         <option value="Maintenance & Support">Maintenance & Support</option>
//                         <option value="Other">Other</option>
//                       </select>
//                       <AnimatePresence>
//                         {errors.service && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.service}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Message */}
//                     <div>
//                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="3"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Tell us about your project or inquiry..."
//                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.message
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       />
//                       <AnimatePresence>
//                         {errors.message && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.message}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="pt-2">
//                       <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
//                           isLoading
//                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
//                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
//                         }`}
//                       >
//                         <span className="relative z-10">
//                           {isLoading ? "Sending..." : "Submit Inquiry"}
//                         </span>
//                         {!isLoading && (
//                           <ArrowRight
//                             size={17}
//                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
//                           />
//                         )}
//                         {!isLoading && (
//                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* ================= RIGHT SIDE ================= */}
//             <div className="lg:col-span-5">
//               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
//                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
//                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                 </div>

//                 <div className="relative">
//                   <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
//                   <p className="mb-6 text-sm text-white/80">
//                     We're available to answer your questions and help with your project.
//                   </p>

//                   <div className="space-y-4">
//                     <ContactItem
//                       icon={<Phone size={18} />}
//                       title="Phone"
//                       value="+91 8928809025 "
//                       href="tel:+918928809025 "
//                     />
//                     <ContactItem
//                       icon={<MessageSquare size={18} />}
//                       title="WhatsApp"
//                       value="+91 8928809025 "
//                       href="https://wa.me/+918928809025 "
//                     />
//                     <ContactItem
//                       icon={<Mail size={18} />}
//                       title="Email"
//                       value="support@thecoderbox.com"
//                       href="mailto:support@thecoderbox.com"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
//                 <div className="space-y-5">
//                   <div className="flex items-center">
//                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
//                       <Clock size={18} />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
//                         Office Hours
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Monday - Saturday: 9AM - 7PM
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
//                       <MapPin size={18} />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
//                         Office Location
//                       </h4>
//                       <p className="text-sm leading-6 text-gray-600">
//                         Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= GOOGLE MAP ================= */}
//       <section className="relative pb-20">
//         <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="container relative mx-auto overflow-hidden rounded-2xl px-6">
//           <iframe
//             title="Office Location"
//             src="https://maps.google.com/maps?q=Sarthana%20Jakat%20Naka,%20Surat,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
//             width="100%"
//             height="450"
//             loading="lazy"
//             className="rounded-2xl border-0 shadow-md"
//             referrerPolicy="no-referrer-when-downgrade"
//             allowFullScreen
//           />
//         </div>
//       </section>
//     </main>
//   );
// };

// // ================= CONTACT ITEM =================
// const ContactItem = ({ icon, title, value, href }) => {
//   return (
//     <div className="flex items-center">
//       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
//         {icon}
//       </div>
//       <div>
//         <h4 className="text-base font-semibold">{title}</h4>
//         <a
//           href={href}
//           target={href?.startsWith("http") ? "_blank" : undefined}
//           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
//           className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
//         >
//           {value}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;






// import React, { useState } from "react";
// import {
//   ArrowRight,
//   Phone,
//   MessageSquare,
//   Mail,
//   Clock,
//   MapPin,
//   AlertCircle,
//   CheckCircle,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";
// import { supabase } from "../lib/supabaseClient"; 

// const ContactUs = () => {
//   // ===== LOCATIONS DATA (From File 1) =====
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

//   const defaultCenter = { lat: 22.5, lng: 67.5 };
//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your name.";
//       isValid = false;
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email address.";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//       isValid = false;
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Please enter your phone number.";
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid 10-digit mobile number.";
//       isValid = false;
//     }
//     if (!formData.service) {
//       newErrors.service = "Please select a service.";
//       isValid = false;
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Please write your message.";
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
//       const { data, error } = await supabase.from("contacts").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           service: formData.service,
//           message: formData.message,
//         },
//       ]);

//       if (error) throw error;

//       setIsSuccess(true);
//       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
//       setTimeout(() => setIsSuccess(false), 5000);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({
//         ...prev,
//         message: "Failed to send message to database. Please try again later.",
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
//       {/* ================= HERO ================= */}
//       <section className="relative pt-64 pb-10">
//         <div className="pointer-events-none absolute inset-0 overflow-visible">
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative mx-auto max-w-4xl px-6 text-center">
//           <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003F7D] md:text-6xl">
//             Let's Build Something
//             <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h1>
//           <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
//             We're here to answer your questions, discuss your ideas,
//             <br className="hidden md:block" />
//             and start your next big project.
//           </p>
//         </div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
//         <div className="pointer-events-none absolute inset-0 overflow-visible">
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
//           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
//         </div>

//         <div className="container relative z-10 mx-auto px-6">
//           <div className="mb-10 text-center">
//             <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 px-4 py-1.5">
//               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-sm font-medium text-transparent">
//                 Contact Us
//               </span>
//             </div>
//             <h2 className="mb-5 text-4xl font-bold leading-tight text-[#003F7D] md:text-5xl">
//               Get in Touch
//             </h2>
//             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
//             <p className="mx-auto max-w-2xl text-base text-gray-600">
//               Have a project in mind? Reach out to us for a free consultation.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
//             {/* ================= FORM ================= */}
//             <div className="lg:col-span-7">
//               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
//                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

//                 <div className="relative">
//                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
//                     Send Us a Message
//                   </h3>

//                   {/* Success Message */}
//                   <AnimatePresence>
//                     {isSuccess && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
//                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
//                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
//                           <div>
//                             <p className="text-sm font-semibold text-emerald-900">
//                               Message Sent Successfully!
//                             </p>
//                             <p className="mt-0.5 text-xs text-emerald-700">
//                               Thank you! We'll get back to you soon.
//                             </p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//                     {/* Name */}
//                     <div>
//                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Your Name
//                       </label>
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your Name"
//                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.name
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       />
//                       <AnimatePresence>
//                         {errors.name && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.name}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Email + Phone */}
//                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                       <div>
//                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
//                           Email Address
//                         </label>
//                         <input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="your@email.com"
//                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                             errors.email
//                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                           }`}
//                         />
//                         <AnimatePresence>
//                           {errors.email && (
//                             <motion.p
//                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                               className="flex items-center gap-1 text-xs font-medium text-red-500"
//                             >
//                               <AlertCircle className="h-3 w-3 shrink-0" />
//                               {errors.email}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                       <div>
//                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
//                           Phone Number
//                         </label>
//                         <input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           maxLength={10}
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="+91 12345 67890"
//                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                             errors.phone
//                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                           }`}
//                         />
//                         <AnimatePresence>
//                           {errors.phone && (
//                             <motion.p
//                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                               className="flex items-center gap-1 text-xs font-medium text-red-500"
//                             >
//                               <AlertCircle className="h-3 w-3 shrink-0" />
//                               {errors.phone}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </div>

//                     {/* Service */}
//                     <div>
//                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Service
//                       </label>
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.service
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       >
//                         <option value="">Select a service</option>
//                         <option value="Mobile App Development">Mobile App Development</option>
//                         <option value="Website Development">Website Development</option>
//                         <option value="Custom Software">Custom Software</option>
//                         <option value="UI/UX Design">UI/UX Design</option>
//                         <option value="Cloud & Hosting">Cloud & Hosting</option>
//                         <option value="Maintenance & Support">Maintenance & Support</option>
//                         <option value="Other">Other</option>
//                       </select>
//                       <AnimatePresence>
//                         {errors.service && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.service}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Message */}
//                     <div>
//                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="3"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Tell us about your project or inquiry..."
//                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.message
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       />
//                       <AnimatePresence>
//                         {errors.message && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.message}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="pt-2">
//                       <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
//                           isLoading
//                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
//                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
//                         }`}
//                       >
//                         <span className="relative z-10">
//                           {isLoading ? "Sending..." : "Submit Inquiry"}
//                         </span>
//                         {!isLoading && (
//                           <ArrowRight
//                             size={17}
//                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
//                           />
//                         )}
//                         {!isLoading && (
//                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* ================= RIGHT SIDE ================= */}
//             <div className="lg:col-span-5">
//               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
//                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
//                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                 </div>

//                 <div className="relative">
//                   <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
//                   <p className="mb-6 text-sm text-white/80">
//                     We're available to answer your questions and help with your project.
//                   </p>

//                   <div className="space-y-4">
//                     <ContactItem
//                       icon={<Phone size={18} />}
//                       title="Phone"
//                       value="+91 8928809025"
//                       href="tel:+918928809025"
//                     />
//                     <ContactItem
//                       icon={<MessageSquare size={18} />}
//                       title="WhatsApp"
//                       value="+91 8928809025"
//                       href="https://wa.me/918928809025"
//                     />
//                     <ContactItem
//                       icon={<Mail size={18} />}
//                       title="Email"
//                       value="support@thecoderbox.com"
//                       href="mailto:support@thecoderbox.com"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
//                 <div className="space-y-5">
//                   <div className="flex items-center">
//                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
//                       <Clock size={18} />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
//                         Office Hours
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Monday - Saturday: 9AM - 7PM
//                       </p>
//                     </div>
//                   </div>

//                   {/* Dynamic Office Location Display */}
//                   <div className="flex items-start">
//                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
//                       <MapPin size={18} />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
//                         Office Location
//                       </h4>
//                       <p className="text-sm leading-6 text-gray-600">
//                         {selectedLocation?.address || "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= GOOGLE MAP (Dynamic Multi-Location) ================= */}
//       <section className="relative pb-20">
//         <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="container relative mx-auto px-6">
          
//           {/* Location Tabs */}
//           <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
//             {locations.map((location) => {
//               const isActive = selectedLocation?.id === location.id;
//               return (
//                 <button
//                   key={location.id}
//                   onClick={() => setSelectedLocation(location)}
//                   className={`rounded-xl p-3 text-left transition-all duration-300 ${
//                     isActive
//                       ? "bg-[#01ADF0] text-white shadow-lg shadow-[#01ADF0]/30"
//                       : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
//                       isActive ? "bg-white/20 text-white" : "bg-gray-100 text-[#01ADF0]"
//                     }`}>
//                       {String(location.id).padStart(2, "0")}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-sm">{location.city}</h3>
//                       <p className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}>
//                         {location.country}
//                       </p>
//                     </div>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Dynamic Map */}
//           <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
//             <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//               <Map
//                 defaultCenter={defaultCenter}
//                 defaultZoom={4}
//                 gestureHandling="greedy"
//                 disableDefaultUI={false}
//                 mapId="YOUR_GOOGLE_MAP_ID"
//                 style={{ width: '100%', height: '100%' }}
//               >
//                 {locations.map((location) => (
//                   <AdvancedMarker
//                     key={location.id}
//                     position={location.position}
//                     onClick={() => setSelectedLocation(location)}
//                   />
//                 ))}

//                 {selectedLocation && (
//                   <InfoWindow
//                     position={selectedLocation.position}
//                     onCloseClick={() => setSelectedLocation(null)}
//                   >
//                     <div className="max-w-[200px] p-1">
//                       <h3 className="font-semibold text-sm text-slate-900">{selectedLocation.city}</h3>
//                       <p className="mt-1 text-xs text-slate-600">{selectedLocation.address}</p>
//                     </div>
//                   </InfoWindow>
//                 )}
//               </Map>
//             </APIProvider>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// // ================= CONTACT ITEM =================
// const ContactItem = ({ icon, title, value, href }) => {
//   return (
//     <div className="flex items-center">
//       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
//         {icon}
//       </div>
//       <div>
//         <h4 className="text-base font-semibold">{title}</h4>
//         <a
//           href={href}
//           target={href?.startsWith("http") ? "_blank" : undefined}
//           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
//           className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
//         >
//           {value}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;






// import React, { useState } from "react";
// import {
//   ArrowRight,
//   Phone,
//   MessageSquare,
//   Mail,
//   Clock,
//   MapPin,
//   AlertCircle,
//   CheckCircle,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { supabase } from "../lib/supabaseClient"; 

// const ContactUs = () => {
//   // ===== LOCATIONS DATA =====
//   const locations = [
//     {
//       id: 1,
//       city: "Bengaluru",
//       country: "India",
//       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
//     },
//     {
//       id: 2,
//       city: "Navi Mumbai",
//       country: "India",
//       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
//     },
//     {
//       id: 3,
//       city: "Noida",
//       country: "India",
//       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
//     },
//     {
//       id: 4,
//       city: "Hyderabad",
//       country: "India",
//       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
//     },
//     {
//       id: 5,
//       city: "Dubai",
//       country: "UAE",
//       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
//     },
//   ];

//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   // ===== FORM STATE =====
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   // ===== ERRORS STATE =====
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   // ===== SUCCESS / LOADING STATE =====
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // ===== HANDLE INPUT CHANGE =====
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   // ===== VALIDATION =====
//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your name.";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email address.";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Please enter your phone number.";
//       isValid = false;
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid 10-digit mobile number.";
//       isValid = false;
//     }

//     if (!formData.service) {
//       newErrors.service = "Please select a service.";
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Please write your message.";
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
//       const { data, error } = await supabase.from("contacts").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           service: formData.service,
//           message: formData.message,
//         },
//       ]);

//       if (error) throw error;

//       setIsSuccess(true);
//       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//       setErrors({ name: "", email: "", phone: "", service: "", message: "" });

//       setTimeout(() => setIsSuccess(false), 5000);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({
//         ...prev,
//         message: "Failed to send message to database. Please try again later.",
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
//       {/* ================= HERO ================= */}
//       <section className="relative pt-64 pb-10">
//         <div className="pointer-events-none absolute inset-0 overflow-visible">
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="relative mx-auto max-w-4xl px-6 text-center">
//           <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003F7D] md:text-6xl">
//             Let's Build Something
//             <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h1>
//           <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
//             We're here to answer your questions, discuss your ideas,
//             <br className="hidden md:block" />
//             and start your next big project.
//           </p>
//         </div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
//         <div className="pointer-events-none absolute inset-0 overflow-visible">
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
//           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
//         </div>

//         <div className="container relative z-10 mx-auto px-6">
//           <div className="mb-10 text-center">
//             <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 px-4 py-1.5">
//               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-sm font-medium text-transparent">
//                 Contact Us
//               </span>
//             </div>
//             <h2 className="mb-5 text-4xl font-bold leading-tight text-[#003F7D] md:text-5xl">
//               Get in Touch
//             </h2>
//             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
//             <p className="mx-auto max-w-2xl text-base text-gray-600">
//               Have a project in mind? Reach out to us for a free consultation.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
//             {/* ================= FORM ================= */}
//             <div className="lg:col-span-7">
//               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
//                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

//                 <div className="relative">
//                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
//                     Send Us a Message
//                   </h3>

//                   <AnimatePresence>
//                     {isSuccess && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
//                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
//                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
//                           <div>
//                             <p className="text-sm font-semibold text-emerald-900">
//                               Message Sent Successfully!
//                             </p>
//                             <p className="mt-0.5 text-xs text-emerald-700">
//                               Thank you! We'll get back to you soon.
//                             </p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//                     <div>
//                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Your Name
//                       </label>
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your Name"
//                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.name
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       />
//                       <AnimatePresence>
//                         {errors.name && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.name}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                       <div>
//                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
//                           Email Address
//                         </label>
//                         <input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="your@email.com"
//                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                             errors.email
//                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                           }`}
//                         />
//                         <AnimatePresence>
//                           {errors.email && (
//                             <motion.p
//                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                               className="flex items-center gap-1 text-xs font-medium text-red-500"
//                             >
//                               <AlertCircle className="h-3 w-3 shrink-0" />
//                               {errors.email}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                       <div>
//                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
//                           Phone Number
//                         </label>
//                         <input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           maxLength={10}
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="+91 12345 67890"
//                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                             errors.phone
//                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                           }`}
//                         />
//                         <AnimatePresence>
//                           {errors.phone && (
//                             <motion.p
//                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                               className="flex items-center gap-1 text-xs font-medium text-red-500"
//                             >
//                               <AlertCircle className="h-3 w-3 shrink-0" />
//                               {errors.phone}
//                             </motion.p>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Service
//                       </label>
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.service
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       >
//                         <option value="">Select a service</option>
//                         <option value="Mobile App Development">Mobile App Development</option>
//                         <option value="Website Development">Website Development</option>
//                         <option value="Custom Software">Custom Software</option>
//                         <option value="UI/UX Design">UI/UX Design</option>
//                         <option value="Cloud & Hosting">Cloud & Hosting</option>
//                         <option value="Maintenance & Support">Maintenance & Support</option>
//                         <option value="Other">Other</option>
//                       </select>
//                       <AnimatePresence>
//                         {errors.service && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.service}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="3"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Tell us about your project or inquiry..."
//                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
//                           errors.message
//                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
//                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
//                         }`}
//                       />
//                       <AnimatePresence>
//                         {errors.message && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
//                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                             className="flex items-center gap-1 text-xs font-medium text-red-500"
//                           >
//                             <AlertCircle className="h-3 w-3 shrink-0" />
//                             {errors.message}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     <div className="pt-2">
//                       <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
//                           isLoading
//                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
//                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
//                         }`}
//                       >
//                         <span className="relative z-10">
//                           {isLoading ? "Sending..." : "Submit Inquiry"}
//                         </span>
//                         {!isLoading && (
//                           <ArrowRight
//                             size={17}
//                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
//                           />
//                         )}
//                         {!isLoading && (
//                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* ================= RIGHT SIDE ================= */}
//             <div className="lg:col-span-5">
//               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
//                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
//                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
//                 </div>

//                 <div className="relative">
//                   <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
//                   <p className="mb-6 text-sm text-white/80">
//                     We're available to answer your questions and help with your project.
//                   </p>

//                   <div className="space-y-4">
//                     <ContactItem
//                       icon={<Phone size={18} />}
//                       title="Phone"
//                       value="+91 8928809025"
//                       href="tel:+918928809025"
//                     />
//                     <ContactItem
//                       icon={<MessageSquare size={18} />}
//                       title="WhatsApp"
//                       value="+91 8928809025"
//                       href="https://wa.me/918928809025"
//                     />
//                     <ContactItem
//                       icon={<Mail size={18} />}
//                       title="Email"
//                       value="support@thecoderbox.com"
//                       href="mailto:support@thecoderbox.com"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
//                 <div className="space-y-5">
//                   <div className="flex items-center">
//                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
//                       <Clock size={18} />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
//                         Office Hours
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Monday - Saturday: 9AM - 7PM
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
//                       <MapPin size={18} />
//                     </div>
//                     <div>
//                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
//                         Office Location
//                       </h4>
//                       <p className="text-sm leading-6 text-gray-600">
//                         {selectedLocation?.address}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= GOOGLE MAP (Now Dynamic) ================= */}
//       <section className="relative pb-20">
//         <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="container relative mx-auto px-6">
          
//           {/* Location Tabs */}
//           <div className="flex flex-wrap gap-3 mb-6 justify-center">
//             {locations.map((location) => {
//               const isActive = selectedLocation?.id === location.id;
//               return (
//                 <button
//                   key={location.id}
//                   onClick={() => setSelectedLocation(location)}
//                   className={`rounded-xl p-3 text-left transition-all duration-300 ${
//                     isActive
//                       ? "bg-[#01ADF0] text-white shadow-lg shadow-[#01ADF0]/30"
//                       : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
//                       isActive ? "bg-white/20 text-white" : "bg-gray-100 text-[#01ADF0]"
//                     }`}>
//                       {String(location.id).padStart(2, "0")}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-sm">{location.city}</h3>
//                       <p className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}>
//                         {location.country}
//                       </p>
//                     </div>
//                   </div>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Dynamic Google Map based on selected address */}
//           <div className="overflow-hidden rounded-2xl shadow-md">
//             <iframe
//               title="Office Location"
//               src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation?.address || "")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
//               width="100%"
//               height="450"
//               loading="lazy"
//               className="rounded-2xl border-0"
//               referrerPolicy="no-referrer-when-downgrade"
//               allowFullScreen
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// // ================= CONTACT ITEM =================
// const ContactItem = ({ icon, title, value, href }) => {
//   return (
//     <div className="flex items-center">
//       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
//         {icon}
//       </div>
//       <div>
//         <h4 className="text-base font-semibold">{title}</h4>
//         <a
//           href={href}
//           target={href?.startsWith("http") ? "_blank" : undefined}
//           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
//           className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
//         >
//           {value}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;









import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  MapPin,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabaseClient"; 

const ContactUs = () => {
  // ===== LOCATIONS DATA =====
  const locations = [
    {
      id: 1,
      city: "Bengaluru",
      country: "India",
      address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
    },
    {
      id: 2,
      city: "Navi Mumbai",
      country: "India",
      address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
    },
    {
      id: 3,
      city: "Noida",
      country: "India",
      address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
    },
    {
      id: 4,
      city: "Hyderabad",
      country: "India",
      address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
    },
    {
      id: 5,
      city: "Dubai",
      country: "UAE",
      address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  // ===== FORM STATE =====
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // ===== ERRORS STATE =====
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // ===== SUCCESS / LOADING STATE =====
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ===== HANDLE INPUT CHANGE =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ===== VALIDATION =====
  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
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
      const { data, error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setErrors({ name: "", email: "", phone: "", service: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Supabase Error:", error);
      setErrors((prev) => ({
        ...prev,
        message: "Failed to send message to database. Please try again later.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
      {/* ================= HERO ================= */}
      {/* pt-32 use kiya hai kyunki global CSS me section ko 60px padding milti hai */}
      <section className="relative pt-32 pb-10">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="sec-hero-heading text-[#003F7D]">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Great Together
            </span>
          </h1>
          <p className="sec-p sec-text-dark-soft mx-auto max-w-3xl">
            We're here to answer your questions, discuss your ideas,
            <br className="hidden md:block" />
            and start your next big project.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
        {/* Background Blobs (Grid hata diya gaya hai) */}
        <div className="pointer-events-none absolute inset-0 overflow-visible">
          <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-block">
              <span className="sec-badge">Contact Us</span>
            </div>
            <h2 className="sec-h2 sec-text-dark mb-5">
              Get in Touch
            </h2>
            <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
            <p className="sec-p sec-text-dark-soft mx-auto max-w-2xl">
              Have a project in mind? Reach out to us for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* ================= FORM ================= */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

                <div className="relative">
                  <h3 className="sec-h3 sec-text-dark mb-5">
                    Send Us a Message
                  </h3>

                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <div>
                            <p className="text-sm font-semibold text-emerald-900">
                              Message Sent Successfully!
                            </p>
                            <p className="mt-0.5 text-xs text-emerald-700">
                              Thank you! We'll get back to you soon.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
                          errors.name
                            ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
                            : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
                        }`}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="flex items-center gap-1 text-xs font-medium text-red-500"
                          >
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
                            errors.email
                              ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
                              : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
                          }`}
                        />
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="flex items-center gap-1 text-xs font-medium text-red-500"
                            >
                              <AlertCircle className="h-3 w-3 shrink-0" />
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 12345 67890"
                          className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
                            errors.phone
                              ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
                              : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
                          }`}
                        />
                        <AnimatePresence>
                          {errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="flex items-center gap-1 text-xs font-medium text-red-500"
                            >
                              <AlertCircle className="h-3 w-3 shrink-0" />
                              {errors.phone}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
                          errors.service
                            ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
                            : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Cloud & Hosting">Cloud & Hosting</option>
                        <option value="Maintenance & Support">Maintenance & Support</option>
                        <option value="Other">Other</option>
                      </select>
                      <AnimatePresence>
                        {errors.service && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="flex items-center gap-1 text-xs font-medium text-red-500"
                          >
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            {errors.service}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
                          errors.message
                            ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
                            : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
                        }`}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="flex items-center gap-1 text-xs font-medium text-red-500"
                          >
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
                          isLoading
                            ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
                            : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
                        }`}
                      >
                        <span className="relative z-10">
                          {isLoading ? "Sending..." : "Submit Inquiry"}
                        </span>
                        {!isLoading && (
                          <ArrowRight
                            size={17}
                            className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        )}
                        {!isLoading && (
                          <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="lg:col-span-5">
              <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
                <div className="absolute right-0 top-0 h-full w-full opacity-10">
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
                </div>

                <div className="relative">
                  <h3 className="sec-h3 text-white mb-4">
                    Connect With Us
                  </h3>
                  <p className="sec-p text-white/80 mb-6">
                    We're available to answer your questions and help with your project.
                  </p>

                  <div className="space-y-4">
                    <ContactItem
                      icon={<Phone size={18} />}
                      title="Phone"
                      value="+91 8928809025"
                      href="tel:+918928809025"
                    />
                    <ContactItem
                      icon={<MessageSquare size={18} />}
                      title="WhatsApp"
                      value="+91 8928809025"
                      href="https://wa.me/918928809025"
                    />
                    <ContactItem
                      icon={<Mail size={18} />}
                      title="Email"
                      value="support@thecoderbox.com"
                      href="mailto:support@thecoderbox.com"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
                <div className="space-y-5">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="sec-h3 text-[#003F7D] mb-1">
                        Office Hours
                      </h4>
                      <p className="sec-p text-gray-600">
                        Monday - Saturday: 9AM - 7PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="sec-h3 text-[#003F7D] mb-1">
                        Office Location
                      </h4>
                      <p className="sec-p text-gray-600 leading-6">
                        {selectedLocation?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
      {/* Grid background hata diya gaya hai */}
      <section className="relative pb-20">
        <div className="container relative mx-auto px-6">
          
          {/* Location Tabs */}
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            {locations.map((location) => {
              const isActive = selectedLocation?.id === location.id;
              return (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`rounded-xl p-3 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#01ADF0] text-white shadow-lg shadow-[#01ADF0]/30"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-gray-100 text-[#01ADF0]"
                    }`}>
                      {String(location.id).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{location.city}</h3>
                      <p className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}>
                        {location.country}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Google Map */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              title="Office Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation?.address || "")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-2xl border-0"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
};

// ================= CONTACT ITEM =================
const ContactItem = ({ icon, title, value, href }) => {
  return (
    <div className="flex items-center">
      <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
        {icon}
      </div>
      <div>
        <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
        <a
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className="sec-p text-white/80 transition-colors duration-300 hover:text-white"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default ContactUs;