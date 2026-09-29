// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Send, Phone, Mail, Clock, Globe, ChevronRight, CheckCircle, MapPin, User, Building, Briefcase, MessageCircle, Calendar, Award } from 'lucide-react';

// // // const ContactUs = () => {
// // //   const [formData, setFormData] = useState({
// // //     fullName: '',
// // //     email: '',
// // //     phone: '',
// // //     companyName: '',
// // //     inquiryCategory: '',
// // //     requestCall: '',
// // //     message: '',
// // //     receiveUpdates: false
// // //   });

// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [isSubmitted, setIsSubmitted] = useState(false);
// // //   const [focusedField, setFocusedField] = useState(null);

// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } = e.target;
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [name]: type === 'checkbox' ? checked : value
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     setIsSubmitting(true);
// // //     setTimeout(() => {
// // //       setIsSubmitting(false);
// // //       setIsSubmitted(true);
// // //       setTimeout(() => setIsSubmitted(false), 5000);
// // //     }, 1500);
// // //   };

// // //   const locations = [
// // //     { 
// // //       city: 'Dubai', 
// // //       country: 'UAE', 
// // //       address: '35V6+54 - Al Sufouh', 
// // //       address2: 'Dubai Internet City - Dubai - United Arab Emirates', 
// // //       tel: '+971 4 123 4567', 
// // //       fax: '+971 4 123 4568', 
// // //       icon: '🌇',
// // //       embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.161!3d25.105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b2b0b0b0b0b%3A0x0!2zMjXCsDA2JzE4LjAiTiA1NcKwMDknMzkuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
// // //       row: 'top'
// // //     },
// // //     { 
// // //       city: 'Hyderabad', 
// // //       country: 'India', 
// // //       address: 'Sec-II, Village, HUDA Techno Enclave', 
// // //       address2: 'Madhapur Hitech City, Hyderabad, Telangana - 500081', 
// // //       tel: '+91 40 1234 5678', 
// // //       fax: '+91 40 1234 5679', 
// // //       icon: '🌃',
// // //       embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.391!3d17.448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993b0b0b0b0b%3A0x0!2zMTfCsDI2JzUyLjgiTiA3OMKwMjMnMjcuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
// // //       row: 'top'
// // //     },
// // //     { 
// // //       city: 'Mumbai', 
// // //       country: 'India', 
// // //       address: '18th Floor, Cyberone', 
// // //       address2: 'opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703', 
// // //       tel: '+91 22 2345 6789', 
// // //       fax: '+91 22 2345 6790', 
// // //       icon: '🌆',
// // //       embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d73.001!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1b0b0b0b0b0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3M8KwMDAnMDMuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
// // //       row: 'bottom'
// // //     },
// // //     { 
// // //       city: 'Noida', 
// // //       country: 'India', 
// // //       address: 'D-41, C Block, Sector 59', 
// // //       address2: 'Noida, Uttar Pradesh 201309', 
// // //       tel: '+91 120 3456 789', 
// // //       fax: '+91 120 3456 790', 
// // //       icon: '🏙️',
// // //       embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.357!3d28.613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b0b0b0b0b0%3A0x0!2zMjjCsDM2JzQ2LjgiTiA3N8KwMjEnMjUuMiJF!5e0!3m2!1sen!2sus!4v1234567890',
// // //       row: 'bottom'
// // //     }
// // //   ];

// // //   const globalLocations = ['UAE', 'Hyderabad', 'Mumbai', 'Noida'];
// // //   const categories = [
// // //     { value: 'managed-infrastructure', label: '🖥️ Managed Infrastructure' },
// // //     { value: 'application-development', label: '💻 Application Development' },
// // //     { value: 'cybersecurity', label: '🔒 Cybersecurity' },
// // //     { value: 'ai-solutions', label: '🤖 AI Solutions' },
// // //     { value: 'cloud-services', label: '☁️ Cloud Services' },
// // //     { value: 'digital-transformation', label: '🚀 Digital Transformation' },
// // //     { value: 'partnership', label: '🤝 Partnership Inquiry' },
// // //     { value: 'general', label: '📋 General Inquiry' }
// // //   ];

// // //   const inputClasses = (fieldName) => `
// // //     w-full px-4 py-3.5 bg-white/5 border 
// // //     ${focusedField === fieldName ? 'border-blue-500/60 ring-2 ring-blue-500/20' : 'border-white/15'} 
// // //     rounded-xl text-white placeholder-white/30 
// // //     focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 
// // //     transition-all duration-300 text-sm
// // //     hover:border-white/30
// // //   `;

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      
// // //       {/* Hero Section */}
// // //       <section className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-white/10">
// // //         <div 
// // //           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
// // //           style={{
// // //             backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
// // //           }}
// // //         ></div>
// // //         <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        
// // //         <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
// // //           <div className="max-w-4xl">
// // //             <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
// // //               <span className="inline-flex items-center gap-2 text-blue-300 font-medium text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 mb-4">
// // //                 <Award className="h-3 w-3" />
// // //                 Futurism Technologies
// // //               </span>
// // //             </motion.div>
// // //             <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
// // //               Let's <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Connect!</span>
// // //             </motion.h1>
// // //             <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200/80 max-w-3xl leading-relaxed font-light mt-4">We are just a form away</motion.p>
// // //             <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-xs sm:text-sm md:text-base text-blue-300/70 max-w-3xl leading-relaxed mt-2">
// // //               Whether it is managed infrastructure or a need for application development, we can effectively strategize and implement your digital transformation. So, tell us your needs and know how we can address them. After all, we are only a form away.
// // //             </motion.p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Locations Section - 2x2 Grid with Box Layout */}
// // //       <section className="py-12 sm:py-16 md:py-20">
// // //         <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
// // //           <motion.div 
// // //             initial={{ opacity: 0, y: 30 }} 
// // //             animate={{ opacity: 1, y: 0 }} 
// // //             transition={{ duration: 0.6 }} 
// // //             className="text-center mb-10 sm:mb-12"
// // //           >
// // //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
// // //               Time is <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Presence</span>
// // //             </h2>
// // //             <p className="text-blue-200/60 text-sm sm:text-base mt-2">Find us at our global locations</p>
// // //           </motion.div>

// // //           {/* 2x2 Grid Box Layout */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
// // //             {locations.map((location, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 animate={{ 
// // //                   opacity: 1, 
// // //                   y: 0,
// // //                   transition: { 
// // //                     duration: 0.5, 
// // //                     delay: idx * 0.1,
// // //                     type: "spring",
// // //                     stiffness: 100
// // //                   }
// // //                 }}
// // //                 whileHover={{
// // //                   y: -8,
// // //                   scale: 1.02,
// // //                   boxShadow: "0 25px 50px -12px rgba(99,102,241,0.3)",
// // //                   transition: { duration: 0.3 }
// // //                 }}
// // //                 className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 group relative"
// // //               >
// // //                 {/* Glow Effect on Hover */}
// // //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
// // //                 {/* Map */}
// // //                 <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 bg-gray-800 relative overflow-hidden">
// // //                   <iframe
// // //                     src={location.embedUrl}
// // //                     width="100%"
// // //                     height="100%"
// // //                     style={{ border: 0 }}
// // //                     allowFullScreen
// // //                     loading="lazy"
// // //                     referrerPolicy="no-referrer-when-downgrade"
// // //                     title={`${location.city} Map`}
// // //                     className="w-full h-full"
// // //                   />
// // //                   <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
// // //                   {/* Location Badge */}
// // //                   <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
// // //                     <div className="flex items-center gap-2">
// // //                       <span className="text-lg">{location.icon}</span>
// // //                       <span className="text-white font-semibold text-sm">{location.city}</span>
// // //                     </div>
// // //                   </div>
                  
// // //                   {/* Row Indicator */}
// // //                   <div className="absolute top-4 right-4">
// // //                     <span className="text-[10px] font-medium px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/70 border border-white/10">
// // //                       {location.row === 'top' ? '⬆' : '⬇'}
// // //                     </span>
// // //                   </div>
// // //                 </div>
                
// // //                 {/* Content */}
// // //                 <div className="p-4 sm:p-5 md:p-6 relative">
// // //                   <div className="flex items-center gap-2 mb-2">
// // //                     <span className="text-blue-400 text-sm font-medium">{location.country}</span>
// // //                   </div>
// // //                   <div className="space-y-1 text-blue-200/60 text-xs sm:text-sm">
// // //                     <p className="font-medium text-white/80">{location.address}</p>
// // //                     <p className="text-blue-300/50 text-xs">{location.address2}</p>
// // //                     <div className="flex flex-wrap gap-3 mt-2 pt-2 border-t border-white/5">
// // //                       <p className="text-white/80 font-medium text-xs">📞 {location.tel}</p>
// // //                       {location.fax && <p className="text-white/50 text-xs">📠 {location.fax}</p>}
// // //                     </div>
// // //                   </div>
                  
// // //                   {/* Google Maps Link */}
// // //                   <motion.a
// // //                     href={location.embedUrl}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     whileHover={{ x: 5 }}
// // //                     className="mt-3 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl border border-blue-500/20 hover:border-blue-500/40 w-full justify-center"
// // //                   >
// // //                     <MapPin className="h-4 w-4" />
// // //                     View on Google Maps
// // //                     <span className="text-xs">→</span>
// // //                   </motion.a>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Form Section */}
// // //       <section className="py-12 sm:py-16 md:py-20 border-t border-white/10">
// // //         <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
// // //           <div className="max-w-3xl mx-auto">
// // //             {/* Form Header */}
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //               className="text-center mb-8"
// // //             >
// // //               <span className="inline-flex items-center gap-2 text-blue-300 font-medium text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 mb-4">
// // //                 <MessageCircle className="h-3 w-3" />
// // //                 Get In Touch
// // //               </span>
// // //               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
// // //                 Let's Talk About Your <br />
// // //                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Needs</span>
// // //               </h2>
// // //               <p className="text-blue-200/50 text-sm mt-3 max-w-md mx-auto">
// // //                 Fill in the form below and our team will get back to you within 24 hours.
// // //               </p>
// // //             </motion.div>

// // //             <motion.div
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.2 }}
// // //               className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl"
// // //             >
// // //               {isSubmitted ? (
// // //                 <motion.div
// // //                   initial={{ opacity: 0, scale: 0.9 }}
// // //                   animate={{ opacity: 1, scale: 1 }}
// // //                   className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-10 text-center"
// // //                 >
// // //                   <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                     <CheckCircle className="h-10 w-10 text-green-400" />
// // //                   </div>
// // //                   <h3 className="text-2xl font-bold text-white">Thank You! 🎉</h3>
// // //                   <p className="text-green-300/80 mt-2 max-w-md mx-auto">
// // //                     Your message has been sent successfully. Our team will get back to you soon.
// // //                   </p>
// // //                 </motion.div>
// // //               ) : (
// // //                 <form onSubmit={handleSubmit} className="space-y-5">
// // //                   {/* Row 1: Full Name + Work Email */}
// // //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
// // //                     <div className="relative">
// // //                       <label className="block text-white font-medium text-sm mb-1.5">
// // //                         Full Name <span className="text-red-400">*</span>
// // //                       </label>
// // //                       <div className="relative">
// // //                         <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
// // //                         <input
// // //                           type="text"
// // //                           name="fullName"
// // //                           value={formData.fullName}
// // //                           onChange={handleChange}
// // //                           onFocus={() => setFocusedField('fullName')}
// // //                           onBlur={() => setFocusedField(null)}
// // //                           required
// // //                           className={inputClasses('fullName') + ' pl-10'}
// // //                           placeholder="John Doe"
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                     <div className="relative">
// // //                       <label className="block text-white font-medium text-sm mb-1.5">
// // //                         Work Email <span className="text-red-400">*</span>
// // //                       </label>
// // //                       <div className="relative">
// // //                         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
// // //                         <input
// // //                           type="email"
// // //                           name="email"
// // //                           value={formData.email}
// // //                           onChange={handleChange}
// // //                           onFocus={() => setFocusedField('email')}
// // //                           onBlur={() => setFocusedField(null)}
// // //                           required
// // //                           className={inputClasses('email') + ' pl-10'}
// // //                           placeholder="john@company.com"
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Row 2: Phone No + Company Name */}
// // //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
// // //                     <div className="relative">
// // //                       <label className="block text-white font-medium text-sm mb-1.5">
// // //                         Phone No <span className="text-red-400">*</span>
// // //                       </label>
// // //                       <div className="relative">
// // //                         <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
// // //                         <input
// // //                           type="tel"
// // //                           name="phone"
// // //                           value={formData.phone}
// // //                           onChange={handleChange}
// // //                           onFocus={() => setFocusedField('phone')}
// // //                           onBlur={() => setFocusedField(null)}
// // //                           required
// // //                           className={inputClasses('phone') + ' pl-10'}
// // //                           placeholder="+1 (555) 000-0000"
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                     <div className="relative">
// // //                       <label className="block text-white font-medium text-sm mb-1.5">
// // //                         Company Name <span className="text-red-400">*</span>
// // //                       </label>
// // //                       <div className="relative">
// // //                         <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
// // //                         <input
// // //                           type="text"
// // //                           name="companyName"
// // //                           value={formData.companyName}
// // //                           onChange={handleChange}
// // //                           onFocus={() => setFocusedField('companyName')}
// // //                           onBlur={() => setFocusedField(null)}
// // //                           required
// // //                           className={inputClasses('companyName') + ' pl-10'}
// // //                           placeholder="Acme Inc."
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Row 3: Inquiry Category */}
// // //                   <div className="relative">
// // //                     <label className="block text-white font-medium text-sm mb-1.5">
// // //                       Inquiry Category <span className="text-red-400">*</span>
// // //                     </label>
// // //                     <div className="relative">
// // //                       <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 z-10" />
// // //                       <select
// // //                         name="inquiryCategory"
// // //                         value={formData.inquiryCategory}
// // //                         onChange={handleChange}
// // //                         onFocus={() => setFocusedField('inquiryCategory')}
// // //                         onBlur={() => setFocusedField(null)}
// // //                         required
// // //                         className={inputClasses('inquiryCategory') + ' pl-10 appearance-none cursor-pointer'}
// // //                       >
// // //                         <option value="" className="bg-gray-800">Select a category</option>
// // //                         {categories.map((cat, idx) => (
// // //                           <option key={idx} value={cat.value} className="bg-gray-800 py-2">{cat.label}</option>
// // //                         ))}
// // //                       </select>
// // //                       <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
// // //                         <svg className="h-4 w-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // //                         </svg>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Row 4: Request For Call */}
// // //                   <div className="relative">
// // //                     <label className="block text-white font-medium text-sm mb-1.5">
// // //                       Request For Call
// // //                     </label>
// // //                     <div className="relative">
// // //                       <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 z-10" />
// // //                       <select
// // //                         name="requestCall"
// // //                         value={formData.requestCall}
// // //                         onChange={handleChange}
// // //                         onFocus={() => setFocusedField('requestCall')}
// // //                         onBlur={() => setFocusedField(null)}
// // //                         className={inputClasses('requestCall') + ' pl-10 appearance-none cursor-pointer'}
// // //                       >
// // //                         <option value="" className="bg-gray-800">Select preferred time</option>
// // //                         <option value="morning" className="bg-gray-800">🌅 Morning (9AM - 12PM)</option>
// // //                         <option value="afternoon" className="bg-gray-800">☀️ Afternoon (12PM - 5PM)</option>
// // //                         <option value="evening" className="bg-gray-800">🌙 Evening (5PM - 8PM)</option>
// // //                       </select>
// // //                       <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
// // //                         <svg className="h-4 w-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // //                         </svg>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Row 5: Any Message */}
// // //                   <div className="relative">
// // //                     <label className="block text-white font-medium text-sm mb-1.5">
// // //                       Any Message
// // //                     </label>
// // //                     <div className="relative">
// // //                       <MessageCircle className="absolute left-3 top-3.5 h-4 w-4 text-white/30 z-10" />
// // //                       <textarea
// // //                         name="message"
// // //                         value={formData.message}
// // //                         onChange={handleChange}
// // //                         onFocus={() => setFocusedField('message')}
// // //                         onBlur={() => setFocusedField(null)}
// // //                         rows="4"
// // //                         className={inputClasses('message') + ' pl-10 resize-none min-h-[120px]'}
// // //                         placeholder="Tell us about your project, requirements, or any questions..."
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   {/* Checkbox */}
// // //                   <div className="flex items-start gap-3 pt-2">
// // //                     <input
// // //                       type="checkbox"
// // //                       name="receiveUpdates"
// // //                       checked={formData.receiveUpdates}
// // //                       onChange={handleChange}
// // //                       className="w-4 h-4 mt-1 bg-white/10 border-white/20 rounded text-blue-500 focus:ring-blue-500/50 focus:ring-2 transition-all"
// // //                     />
// // //                     <label className="text-blue-200/70 text-sm leading-relaxed cursor-pointer">
// // //                       I would like to receive information about Futurism Technologies' news and events.
// // //                     </label>
// // //                   </div>

// // //                   {/* Submit Button */}
// // //                   <motion.button
// // //                     type="submit"
// // //                     disabled={isSubmitting}
// // //                     whileHover={{ scale: 1.02 }}
// // //                     whileTap={{ scale: 0.98 }}
// // //                     className="w-full relative overflow-hidden group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-base disabled:opacity-50"
// // //                   >
// // //                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// // //                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
// // //                     <span className="relative z-10 flex items-center gap-3">
// // //                       {isSubmitting ? (
// // //                         <>
// // //                           <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
// // //                           Sending...
// // //                         </>
// // //                       ) : (
// // //                         <>
// // //                           <Send className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
// // //                           Submit
// // //                           <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
// // //                         </>
// // //                       )}
// // //                     </span>
// // //                   </motion.button>
// // //                 </form>
// // //               )}
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default ContactUs;










// // // import React, { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Phone,
// // //   MessageSquare,
// // //   Mail,
// // //   Clock,
// // //   MapPin,
// // // } from "lucide-react";

// // // const ContactUs = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     service: "",
// // //     message: "",
// // //   });

// // //   const [submitted, setSubmitted] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Form Data:", formData);
// // //     setSubmitted(true);
// // //     setTimeout(() => {
// // //       setSubmitted(false);
// // //     }, 3000);
// // //   };

// // //   return (
// // //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white">
// // //       {/* ================= HERO ================= */}
// // //       <section className="relative pt-32 pb-10">
// // //         {/* Background Grid */}
// // //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// // //           <div
// // //             className="absolute inset-0 opacity-[0.05]"
// // //             style={{
// // //               backgroundImage:
// // //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// // //               backgroundSize: "40px 40px",
// // //             }}
// // //           />
// // //         </div>

// // //         <div className="relative mx-auto max-w-4xl px-6 text-center">
// // //           <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003F7D] md:text-6xl">
// // //             Let's Build Something
// // //             <br />
// // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //               Great Together
// // //             </span>
// // //           </h1>
// // //           <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
// // //             We're here to answer your questions, discuss your ideas,
// // //             <br className="hidden md:block" />
// // //             and start your next big project.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* ================= CONTACT SECTION ================= */}
// // //       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
// // //         {/* Background */}
// // //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// // //           <div
// // //             className="absolute inset-0 opacity-[0.05]"
// // //             style={{
// // //               backgroundImage:
// // //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// // //               backgroundSize: "40px 40px",
// // //             }}
// // //           />
// // //           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// // //           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// // //         </div>

// // //         <div className="container relative z-10 mx-auto px-6">
// // //           {/* Section Heading */}
// // //           <div className="mb-10 text-center">
// // //             <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 px-4 py-1.5">
// // //               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-sm font-medium text-transparent">
// // //                 Contact Us
// // //               </span>
// // //             </div>
// // //             <h2 className="mb-5 text-4xl font-bold leading-tight text-[#003F7D] md:text-5xl">
// // //               Get in Touch
// // //             </h2>
// // //             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
// // //             <p className="mx-auto max-w-2xl text-base text-gray-600">
// // //               Have a project in mind? Reach out to us for a free consultation.
// // //             </p>
// // //           </div>

// // //           {/* Main Grid */}
// // //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// // //             {/* ================= FORM ================= */}
// // //             <div className="lg:col-span-7">
// // //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// // //                 {/* Decoration */}
// // //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// // //                 <div className="relative">
// // //                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
// // //                     Send Us a Message
// // //                   </h3>

// // //                   <form onSubmit={handleSubmit} className="space-y-4">
// // //                     {/* Name */}
// // //                     <div>
// // //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                         Your Name
// // //                       </label>
// // //                       <input
// // //                         id="name"
// // //                         name="name"
// // //                         type="text"
// // //                         required
// // //                         value={formData.name}
// // //                         onChange={handleChange}
// // //                         placeholder="Your Name"
// // //                         className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                       />
// // //                     </div>

// // //                     {/* Email + Phone */}
// // //                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// // //                       <div>
// // //                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                           Email Address
// // //                         </label>
// // //                         <input
// // //                           id="email"
// // //                           name="email"
// // //                           type="email"
// // //                           required
// // //                           value={formData.email}
// // //                           onChange={handleChange}
// // //                           placeholder="your@email.com"
// // //                           className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                         />
// // //                       </div>
// // //                       <div>
// // //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                           Phone Number
// // //                         </label>
// // //                         <input
// // //                           id="phone"
// // //                           name="phone"
// // //                           type="tel"
// // //                           required
// // //                           value={formData.phone}
// // //                           onChange={handleChange}
// // //                           placeholder="+91 12345 67890"
// // //                           className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                         />
// // //                       </div>
// // //                     </div>

// // //                     {/* Service */}
// // //                     <div>
// // //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                         Service (Optional)
// // //                       </label>
// // //                       <select
// // //                         id="service"
// // //                         name="service"
// // //                         value={formData.service}
// // //                         onChange={handleChange}
// // //                         className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                       >
// // //                         <option value="">Select a service</option>
// // //                         <option value="Mobile App Development">Mobile App Development</option>
// // //                         <option value="Website Development">Website Development</option>
// // //                         <option value="Custom Software">Custom Software</option>
// // //                         <option value="UI/UX Design">UI/UX Design</option>
// // //                         <option value="Cloud & Hosting">Cloud & Hosting</option>
// // //                         <option value="Maintenance & Support">Maintenance & Support</option>
// // //                         <option value="Other">Other</option>
// // //                       </select>
// // //                     </div>

// // //                     {/* Message */}
// // //                     <div>
// // //                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                         Message
// // //                       </label>
// // //                       <textarea
// // //                         id="message"
// // //                         name="message"
// // //                         rows="3"
// // //                         required
// // //                         value={formData.message}
// // //                         onChange={handleChange}
// // //                         placeholder="Tell us about your project or inquiry..."
// // //                         className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                       />
// // //                     </div>

// // //                     {/* Submit */}
// // //                     <div className="pt-2">
// // //                       <button
// // //                         type="submit"
// // //                         className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#008FD1] px-6 py-2.5 text-base font-medium text-white shadow-md shadow-[#01ADF0]/20 transition-all duration-300 hover:shadow-lg"
// // //                       >
// // //                         <span className="relative z-10">Submit Inquiry</span>
// // //                         <ArrowRight
// // //                           size={17}
// // //                           className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// // //                         />
// // //                         <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// // //                       </button>
// // //                     </div>
// // //                   </form>

// // //                   {/* Success Message */}
// // //                   {submitted && (
// // //                     <div className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
// // //                       Your inquiry has been submitted successfully!
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* ================= RIGHT SIDE ================= */}
// // //             <div className="lg:col-span-5">
// // //               {/* Connect With Us */}
// // //               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// // //                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
// // //                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // //                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // //                 </div>

// // //                 <div className="relative">
// // //                   <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
// // //                   <p className="mb-6 text-sm text-white/80">
// // //                     We're available to answer your questions and help with your project.
// // //                   </p>

// // //                   <div className="space-y-4">
// // //                     <ContactItem
// // //                       icon={<Phone size={18} />}
// // //                       title="Phone"
// // //                       value="+91 9974361458"
// // //                       href="tel:+919974361458"
// // //                     />
// // //                     <ContactItem
// // //                       icon={<MessageSquare size={18} />}
// // //                       title="WhatsApp"
// // //                       value="+91 9974361458"
// // //                       href="https://wa.me/919974361458"
// // //                     />
// // //                     <ContactItem
// // //                       icon={<Mail size={18} />}
// // //                       title="Email"
// // //                       value="info@sccinfotech.com"
// // //                       href="mailto:info@sccinfotech.com"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Office Details */}
// // //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// // //                 <div className="space-y-5">
// // //                   {/* Office Hours */}
// // //                   <div className="flex items-center">
// // //                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// // //                       <Clock size={18} />
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// // //                         Office Hours
// // //                       </h4>
// // //                       <p className="text-sm text-gray-600">
// // //                         Monday - Saturday: 9AM - 7PM
// // //                       </p>
// // //                     </div>
// // //                   </div>

// // //                   {/* Address */}
// // //                   <div className="flex items-start">
// // //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// // //                       <MapPin size={18} />
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// // //                         Office Location
// // //                       </h4>
// // //                       <p className="text-sm leading-6 text-gray-600">
// // //                         349-350, Vikas Shoppers, B/H Filter House Bhagvan
// // //                         Nagar Circle, near Sarthana Jakat Naka, Nana
// // //                         Varachha, Surat, Gujarat 395006
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= GOOGLE MAP ================= */}
// // //       <section className="relative pb-20">
// // //         <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
// // //           <div
// // //             className="absolute inset-0"
// // //             style={{
// // //               backgroundImage:
// // //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// // //               backgroundSize: "40px 40px",
// // //             }}
// // //           />
// // //         </div>

// // //         <div className="container relative mx-auto overflow-hidden rounded-2xl px-6">
// // //           {/* Fixed Google Map Embed URL */}
// // //           <iframe
// // //             title="Office Location"
// // //             src="https://maps.google.com/maps?q=Sarthana%20Jakat%20Naka,%20Surat,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
// // //             width="100%"
// // //             height="450"
// // //             loading="lazy"
// // //             className="rounded-2xl border-0 shadow-md"
// // //             referrerPolicy="no-referrer-when-downgrade"
// // //             allowFullScreen
// // //           />
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // };

// // // // ================= CONTACT ITEM =================
// // // const ContactItem = ({ icon, title, value, href }) => {
// // //   return (
// // //     <div className="flex items-center">
// // //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
// // //         {icon}
// // //       </div>
// // //       <div>
// // //         <h4 className="text-base font-semibold">{title}</h4>
// // //         <a
// // //           href={href}
// // //           target={href?.startsWith("http") ? "_blank" : undefined}
// // //           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
// // //           className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
// // //         >
// // //           {value}
// // //         </a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ContactUs;






// // // import React, { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Phone,
// // //   MessageSquare,
// // //   Mail,
// // //   Clock,
// // //   MapPin,
// // // } from "lucide-react";

// // // const ContactUs = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     service: "",
// // //     message: "",
// // //   });

// // //   const [submitted, setSubmitted] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log("Form Data:", formData);
// // //     setSubmitted(true);
// // //     setTimeout(() => {
// // //       setSubmitted(false);
// // //     }, 3000);
// // //   };

// // //   return (
// // //     // Main tag me bhi thoda top padding add kiya hai
// // //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
// // //       {/* ================= HERO ================= */}
// // //       {/* Padding ko pt-64 kar diya hai (16rem / 256px) */}
// // //       <section className="relative pt-64 pb-10">
// // //         {/* Background Grid */}
// // //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// // //           <div
// // //             className="absolute inset-0 opacity-[0.05]"
// // //             style={{
// // //               backgroundImage:
// // //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// // //               backgroundSize: "40px 40px",
// // //             }}
// // //           />
// // //         </div>

// // //         <div className="relative mx-auto max-w-4xl px-6 text-center">
// // //           <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003F7D] md:text-6xl">
// // //             Let's Build Something
// // //             <br />
// // //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// // //               Great Together
// // //             </span>
// // //           </h1>
// // //           <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
// // //             We're here to answer your questions, discuss your ideas,
// // //             <br className="hidden md:block" />
// // //             and start your next big project.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* ================= CONTACT SECTION ================= */}
// // //       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
// // //         {/* Background */}
// // //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// // //           <div
// // //             className="absolute inset-0 opacity-[0.05]"
// // //             style={{
// // //               backgroundImage:
// // //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// // //               backgroundSize: "40px 40px",
// // //             }}
// // //           />
// // //           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// // //           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// // //         </div>

// // //         <div className="container relative z-10 mx-auto px-6">
// // //           {/* Section Heading */}
// // //           <div className="mb-10 text-center">
// // //             <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 px-4 py-1.5">
// // //               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-sm font-medium text-transparent">
// // //                 Contact Us
// // //               </span>
// // //             </div>
// // //             <h2 className="mb-5 text-4xl font-bold leading-tight text-[#003F7D] md:text-5xl">
// // //               Get in Touch
// // //             </h2>
// // //             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
// // //             <p className="mx-auto max-w-2xl text-base text-gray-600">
// // //               Have a project in mind? Reach out to us for a free consultation.
// // //             </p>
// // //           </div>

// // //           {/* Main Grid */}
// // //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// // //             {/* ================= FORM ================= */}
// // //             <div className="lg:col-span-7">
// // //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// // //                 {/* Decoration */}
// // //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// // //                 <div className="relative">
// // //                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
// // //                     Send Us a Message
// // //                   </h3>

// // //                   <form onSubmit={handleSubmit} className="space-y-4">
// // //                     {/* Name */}
// // //                     <div>
// // //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                         Your Name
// // //                       </label>
// // //                       <input
// // //                         id="name"
// // //                         name="name"
// // //                         type="text"
// // //                         required
// // //                         value={formData.name}
// // //                         onChange={handleChange}
// // //                         placeholder="Your Name"
// // //                         className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                       />
// // //                     </div>

// // //                     {/* Email + Phone */}
// // //                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// // //                       <div>
// // //                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                           Email Address
// // //                         </label>
// // //                         <input
// // //                           id="email"
// // //                           name="email"
// // //                           type="email"
// // //                           required
// // //                           value={formData.email}
// // //                           onChange={handleChange}
// // //                           placeholder="your@email.com"
// // //                           className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                         />
// // //                       </div>
// // //                       <div>
// // //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                           Phone Number
// // //                         </label>
// // //                         <input
// // //                           id="phone"
// // //                           name="phone"
// // //                           type="tel"
// // //                           required
// // //                           value={formData.phone}
// // //                           onChange={handleChange}
// // //                           placeholder="+91 12345 67890"
// // //                           className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                         />
// // //                       </div>
// // //                     </div>

// // //                     {/* Service */}
// // //                     <div>
// // //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                         Service (Optional)
// // //                       </label>
// // //                       <select
// // //                         id="service"
// // //                         name="service"
// // //                         value={formData.service}
// // //                         onChange={handleChange}
// // //                         className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                       >
// // //                         <option value="">Select a service</option>
// // //                         <option value="Mobile App Development">Mobile App Development</option>
// // //                         <option value="Website Development">Website Development</option>
// // //                         <option value="Custom Software">Custom Software</option>
// // //                         <option value="UI/UX Design">UI/UX Design</option>
// // //                         <option value="Cloud & Hosting">Cloud & Hosting</option>
// // //                         <option value="Maintenance & Support">Maintenance & Support</option>
// // //                         <option value="Other">Other</option>
// // //                       </select>
// // //                     </div>

// // //                     {/* Message */}
// // //                     <div>
// // //                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
// // //                         Message
// // //                       </label>
// // //                       <textarea
// // //                         id="message"
// // //                         name="message"
// // //                         rows="3"
// // //                         required
// // //                         value={formData.message}
// // //                         onChange={handleChange}
// // //                         placeholder="Tell us about your project or inquiry..."
// // //                         className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition duration-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// // //                       />
// // //                     </div>

// // //                     {/* Submit */}
// // //                     <div className="pt-2">
// // //                       <button
// // //                         type="submit"
// // //                         className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#008FD1] px-6 py-2.5 text-base font-medium text-white shadow-md shadow-[#01ADF0]/20 transition-all duration-300 hover:shadow-lg"
// // //                       >
// // //                         <span className="relative z-10">Submit Inquiry</span>
// // //                         <ArrowRight
// // //                           size={17}
// // //                           className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// // //                         />
// // //                         <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// // //                       </button>
// // //                     </div>
// // //                   </form>

// // //                   {/* Success Message */}
// // //                   {submitted && (
// // //                     <div className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
// // //                       Your inquiry has been submitted successfully!
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* ================= RIGHT SIDE ================= */}
// // //             <div className="lg:col-span-5">
// // //               {/* Connect With Us */}
// // //               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// // //                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
// // //                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // //                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// // //                 </div>

// // //                 <div className="relative">
// // //                   <h3 className="mb-4 text-xl font-bold">Connect With Us</h3>
// // //                   <p className="mb-6 text-sm text-white/80">
// // //                     We're available to answer your questions and help with your project.
// // //                   </p>

// // //                   <div className="space-y-4">
// // //                     <ContactItem
// // //                       icon={<Phone size={18} />}
// // //                       title="Phone"
// // //                       value="+91 9974361458"
// // //                       href="tel:+919974361458"
// // //                     />
// // //                     <ContactItem
// // //                       icon={<MessageSquare size={18} />}
// // //                       title="WhatsApp"
// // //                       value="+91 9974361458"
// // //                       href="https://wa.me/919974361458"
// // //                     />
// // //                     <ContactItem
// // //                       icon={<Mail size={18} />}
// // //                       title="Email"
// // //                       value="info@sccinfotech.com"
// // //                       href="mailto:info@sccinfotech.com"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Office Details */}
// // //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// // //                 <div className="space-y-5">
// // //                   {/* Office Hours */}
// // //                   <div className="flex items-center">
// // //                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// // //                       <Clock size={18} />
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// // //                         Office Hours
// // //                       </h4>
// // //                       <p className="text-sm text-gray-600">
// // //                         Monday - Saturday: 9AM - 7PM
// // //                       </p>
// // //                     </div>
// // //                   </div>

// // //                   {/* Address */}
// // //                   <div className="flex items-start">
// // //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// // //                       <MapPin size={18} />
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// // //                         Office Location
// // //                       </h4>
// // //                       <p className="text-sm leading-6 text-gray-600">
// // //                         349-350, Vikas Shoppers, B/H Filter House Bhagvan
// // //                         Nagar Circle, near Sarthana Jakat Naka, Nana
// // //                         Varachha, Surat, Gujarat 395006
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= GOOGLE MAP ================= */}
// // //       <section className="relative pb-20">
// // //         <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
// // //           <div
// // //             className="absolute inset-0"
// // //             style={{
// // //               backgroundImage:
// // //                 "linear-gradient(rgb(1,173,240) 1px, transparent 1px), linear-gradient(to right, rgb(1,173,240) 1px, transparent 1px)",
// // //               backgroundSize: "40px 40px",
// // //             }}
// // //           />
// // //         </div>

// // //         <div className="container relative mx-auto overflow-hidden rounded-2xl px-6">
// // //           {/* Fixed Google Map Embed URL */}
// // //           <iframe
// // //             title="Office Location"
// // //             src="https://maps.google.com/maps?q=Sarthana%20Jakat%20Naka,%20Surat,%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
// // //             width="100%"
// // //             height="450"
// // //             loading="lazy"
// // //             className="rounded-2xl border-0 shadow-md"
// // //             referrerPolicy="no-referrer-when-downgrade"
// // //             allowFullScreen
// // //           />
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // };

// // // // ================= CONTACT ITEM =================
// // // const ContactItem = ({ icon, title, value, href }) => {
// // //   return (
// // //     <div className="flex items-center">
// // //       <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
// // //         {icon}
// // //       </div>
// // //       <div>
// // //         <h4 className="text-base font-semibold">{title}</h4>
// // //         <a
// // //           href={href}
// // //           target={href?.startsWith("http") ? "_blank" : undefined}
// // //           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
// // //           className="text-sm text-white/80 transition-colors duration-300 hover:text-white"
// // //         >
// // //           {value}
// // //         </a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ContactUs;






// // import React, { useState } from "react";
// // import {
// //   ArrowRight,
// //   Phone,
// //   MessageSquare,
// //   Mail,
// //   Clock,
// //   MapPin,
// //   AlertCircle,
// //   CheckCircle,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // // ⚠️ IMPORTANT: Apne project ke hisaab se supabase ka path check kar lein
// // import { supabase } from "../../lib/supabaseClient"; 

// // const ContactUs = () => {
// //   // ===== FORM STATE =====
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== ERRORS STATE =====
// //   const [errors, setErrors] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== SUCCESS / LOADING STATE =====
// //   const [isSuccess, setIsSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // ===== HANDLE INPUT CHANGE =====
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     // Phone number ke liye sirf digits allow karein (max 10)
// //     if (name === "phone") {
// //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }

// //     // Error clear karein jab user type kare
// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }));
// //     }
// //   };

// //   // ===== VALIDATION =====
// //   const validateForm = () => {
// //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// //     let isValid = true;

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Please enter your name.";
// //       isValid = false;
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Please enter your email address.";
// //       isValid = false;
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email address.";
// //       isValid = false;
// //     }

// //     if (!formData.phone.trim()) {
// //       newErrors.phone = "Please enter your phone number.";
// //       isValid = false;
// //     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
// //       newErrors.phone = "Please enter a valid 10-digit mobile number.";
// //       isValid = false;
// //     }

// //     if (!formData.service) {
// //       newErrors.service = "Please select a service.";
// //       isValid = false;
// //     }

// //     if (!formData.message.trim()) {
// //       newErrors.message = "Please write your message.";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsLoading(true);

// //     try {
// //       const { data, error } = await supabase.from("contacts").insert([
// //         {
// //           name: formData.name,
// //           email: formData.email,
// //           phone: formData.phone,
// //           service: formData.service,
// //           message: formData.message,
// //         },
// //       ]);

// //       if (error) throw error;

// //       setIsSuccess(true);
// //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });

// //       // 5 second baad success message hide karein
// //       setTimeout(() => setIsSuccess(false), 5000);
// //     } catch (error) {
// //       console.error("Supabase Error:", error);
// //       setErrors((prev) => ({
// //         ...prev,
// //         message: "Failed to send message to database. Please try again later.",
// //       }));
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
// //       {/* ================= HERO ================= */}
// //       <section className="relative pt-64 pb-10">
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

// //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// //             {/* ================= FORM ================= */}
// //             <div className="lg:col-span-7">
// //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// //                 <div className="relative">
// //                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
// //                     Send Us a Message
// //                   </h3>

// //                   {/* Success Message */}
// //                   <AnimatePresence>
// //                     {isSuccess && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
// //                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// //                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// //                           <div>
// //                             <p className="text-sm font-semibold text-emerald-900">
// //                               Message Sent Successfully!
// //                             </p>
// //                             <p className="mt-0.5 text-xs text-emerald-700">
// //                               Thank you! We'll get back to you soon.
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>

// //                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //                     {/* Name */}
// //                     <div>
// //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Your Name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         name="name"
// //                         type="text"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Your Name"
// //                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.name
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.name && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.name}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
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
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="your@email.com"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.email
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.email && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.email}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                       <div>
// //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           id="phone"
// //                           name="phone"
// //                           type="tel"
// //                           maxLength={10}
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="+91 12345 67890"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.phone
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.phone && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.phone}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                     </div>

// //                     {/* Service */}
// //                     <div>
// //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Service
// //                       </label>
// //                       <select
// //                         id="service"
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.service
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
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
// //                       <AnimatePresence>
// //                         {errors.service && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.service}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
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
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         placeholder="Tell us about your project or inquiry..."
// //                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.message
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.message && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.message}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     {/* Submit Button */}
// //                     <div className="pt-2">
// //                       <button
// //                         type="submit"
// //                         disabled={isLoading}
// //                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
// //                           isLoading
// //                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
// //                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
// //                         }`}
// //                       >
// //                         <span className="relative z-10">
// //                           {isLoading ? "Sending..." : "Submit Inquiry"}
// //                         </span>
// //                         {!isLoading && (
// //                           <ArrowRight
// //                             size={17}
// //                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// //                           />
// //                         )}
// //                         {!isLoading && (
// //                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// //                         )}
// //                       </button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ================= RIGHT SIDE ================= */}
// //             <div className="lg:col-span-5">
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

// //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="space-y-5">
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
// //   AlertCircle,
// //   CheckCircle,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // // ✅ PATH FIXED: Ab ye src/lib/supabaseClient.js ko dhundhega
// // import { supabase } from "../lib/supabaseClient"; 

// // const ContactUs = () => {
// //   // ===== FORM STATE =====
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== ERRORS STATE =====
// //   const [errors, setErrors] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== SUCCESS / LOADING STATE =====
// //   const [isSuccess, setIsSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // ===== HANDLE INPUT CHANGE =====
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     // Phone number ke liye sirf digits allow karein (max 10)
// //     if (name === "phone") {
// //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }

// //     // Error clear karein jab user type kare
// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }));
// //     }
// //   };

// //   // ===== VALIDATION =====
// //   const validateForm = () => {
// //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// //     let isValid = true;

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Please enter your name.";
// //       isValid = false;
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Please enter your email address.";
// //       isValid = false;
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email address.";
// //       isValid = false;
// //     }

// //     if (!formData.phone.trim()) {
// //       newErrors.phone = "Please enter your phone number.";
// //       isValid = false;
// //     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
// //       newErrors.phone = "Please enter a valid 10-digit mobile number.";
// //       isValid = false;
// //     }

// //     if (!formData.service) {
// //       newErrors.service = "Please select a service.";
// //       isValid = false;
// //     }

// //     if (!formData.message.trim()) {
// //       newErrors.message = "Please write your message.";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsLoading(true);

// //     try {
// //       const { data, error } = await supabase.from("contacts").insert([
// //         {
// //           name: formData.name,
// //           email: formData.email,
// //           phone: formData.phone,
// //           service: formData.service,
// //           message: formData.message,
// //         },
// //       ]);

// //       if (error) throw error;

// //       setIsSuccess(true);
// //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });

// //       // 5 second baad success message hide karein
// //       setTimeout(() => setIsSuccess(false), 5000);
// //     } catch (error) {
// //       console.error("Supabase Error:", error);
// //       setErrors((prev) => ({
// //         ...prev,
// //         message: "Failed to send message to database. Please try again later.",
// //       }));
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
// //       {/* ================= HERO ================= */}
// //       <section className="relative pt-64 pb-10">
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

// //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// //             {/* ================= FORM ================= */}
// //             <div className="lg:col-span-7">
// //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// //                 <div className="relative">
// //                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
// //                     Send Us a Message
// //                   </h3>

// //                   {/* Success Message */}
// //                   <AnimatePresence>
// //                     {isSuccess && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
// //                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// //                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// //                           <div>
// //                             <p className="text-sm font-semibold text-emerald-900">
// //                               Message Sent Successfully!
// //                             </p>
// //                             <p className="mt-0.5 text-xs text-emerald-700">
// //                               Thank you! We'll get back to you soon.
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>

// //                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //                     {/* Name */}
// //                     <div>
// //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Your Name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         name="name"
// //                         type="text"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Your Name"
// //                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.name
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.name && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.name}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
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
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="your@email.com"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.email
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.email && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.email}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                       <div>
// //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           id="phone"
// //                           name="phone"
// //                           type="tel"
// //                           maxLength={10}
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="+91 12345 67890"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.phone
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.phone && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.phone}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                     </div>

// //                     {/* Service */}
// //                     <div>
// //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Service
// //                       </label>
// //                       <select
// //                         id="service"
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.service
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
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
// //                       <AnimatePresence>
// //                         {errors.service && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.service}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
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
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         placeholder="Tell us about your project or inquiry..."
// //                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.message
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.message && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.message}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     {/* Submit Button */}
// //                     <div className="pt-2">
// //                       <button
// //                         type="submit"
// //                         disabled={isLoading}
// //                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
// //                           isLoading
// //                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
// //                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
// //                         }`}
// //                       >
// //                         <span className="relative z-10">
// //                           {isLoading ? "Sending..." : "Submit Inquiry"}
// //                         </span>
// //                         {!isLoading && (
// //                           <ArrowRight
// //                             size={17}
// //                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// //                           />
// //                         )}
// //                         {!isLoading && (
// //                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// //                         )}
// //                       </button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ================= RIGHT SIDE ================= */}
// //             <div className="lg:col-span-5">
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
// //                       value="+91 8928809025 "
// //                       href="tel:+918928809025 "
// //                     />
// //                     <ContactItem
// //                       icon={<MessageSquare size={18} />}
// //                       title="WhatsApp"
// //                       value="+91 8928809025 "
// //                       href="https://wa.me/+918928809025 "
// //                     />
// //                     <ContactItem
// //                       icon={<Mail size={18} />}
// //                       title="Email"
// //                       value="support@thecoderbox.com"
// //                       href="mailto:support@thecoderbox.com"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="space-y-5">
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

// //                   <div className="flex items-start">
// //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <MapPin size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// //                         Office Location
// //                       </h4>
// //                       <p className="text-sm leading-6 text-gray-600">
// //                         Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068
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
// //   AlertCircle,
// //   CheckCircle,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   APIProvider,
// //   Map,
// //   AdvancedMarker,
// //   InfoWindow,
// // } from "@vis.gl/react-google-maps";
// // import { supabase } from "../lib/supabaseClient"; 

// // const ContactUs = () => {
// //   // ===== LOCATIONS DATA (From File 1) =====
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

// //   const defaultCenter = { lat: 22.5, lng: 67.5 };
// //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// //   // ===== FORM STATE =====
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== ERRORS STATE =====
// //   const [errors, setErrors] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== SUCCESS / LOADING STATE =====
// //   const [isSuccess, setIsSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // ===== HANDLE INPUT CHANGE =====
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === "phone") {
// //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }
// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }));
// //     }
// //   };

// //   // ===== VALIDATION =====
// //   const validateForm = () => {
// //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// //     let isValid = true;

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Please enter your name.";
// //       isValid = false;
// //     }
// //     if (!formData.email.trim()) {
// //       newErrors.email = "Please enter your email address.";
// //       isValid = false;
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email address.";
// //       isValid = false;
// //     }
// //     if (!formData.phone.trim()) {
// //       newErrors.phone = "Please enter your phone number.";
// //       isValid = false;
// //     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
// //       newErrors.phone = "Please enter a valid 10-digit mobile number.";
// //       isValid = false;
// //     }
// //     if (!formData.service) {
// //       newErrors.service = "Please select a service.";
// //       isValid = false;
// //     }
// //     if (!formData.message.trim()) {
// //       newErrors.message = "Please write your message.";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;
// //     setIsLoading(true);

// //     try {
// //       const { data, error } = await supabase.from("contacts").insert([
// //         {
// //           name: formData.name,
// //           email: formData.email,
// //           phone: formData.phone,
// //           service: formData.service,
// //           message: formData.message,
// //         },
// //       ]);

// //       if (error) throw error;

// //       setIsSuccess(true);
// //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });
// //       setTimeout(() => setIsSuccess(false), 5000);
// //     } catch (error) {
// //       console.error("Supabase Error:", error);
// //       setErrors((prev) => ({
// //         ...prev,
// //         message: "Failed to send message to database. Please try again later.",
// //       }));
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
// //       {/* ================= HERO ================= */}
// //       <section className="relative pt-64 pb-10">
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

// //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// //             {/* ================= FORM ================= */}
// //             <div className="lg:col-span-7">
// //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// //                 <div className="relative">
// //                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
// //                     Send Us a Message
// //                   </h3>

// //                   {/* Success Message */}
// //                   <AnimatePresence>
// //                     {isSuccess && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
// //                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// //                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// //                           <div>
// //                             <p className="text-sm font-semibold text-emerald-900">
// //                               Message Sent Successfully!
// //                             </p>
// //                             <p className="mt-0.5 text-xs text-emerald-700">
// //                               Thank you! We'll get back to you soon.
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>

// //                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //                     {/* Name */}
// //                     <div>
// //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Your Name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         name="name"
// //                         type="text"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Your Name"
// //                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.name
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.name && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.name}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
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
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="your@email.com"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.email
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.email && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.email}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                       <div>
// //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           id="phone"
// //                           name="phone"
// //                           type="tel"
// //                           maxLength={10}
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="+91 12345 67890"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.phone
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.phone && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.phone}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                     </div>

// //                     {/* Service */}
// //                     <div>
// //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Service
// //                       </label>
// //                       <select
// //                         id="service"
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.service
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
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
// //                       <AnimatePresence>
// //                         {errors.service && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.service}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
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
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         placeholder="Tell us about your project or inquiry..."
// //                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.message
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.message && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.message}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     {/* Submit Button */}
// //                     <div className="pt-2">
// //                       <button
// //                         type="submit"
// //                         disabled={isLoading}
// //                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
// //                           isLoading
// //                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
// //                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
// //                         }`}
// //                       >
// //                         <span className="relative z-10">
// //                           {isLoading ? "Sending..." : "Submit Inquiry"}
// //                         </span>
// //                         {!isLoading && (
// //                           <ArrowRight
// //                             size={17}
// //                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// //                           />
// //                         )}
// //                         {!isLoading && (
// //                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// //                         )}
// //                       </button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ================= RIGHT SIDE ================= */}
// //             <div className="lg:col-span-5">
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
// //                       value="+91 8928809025"
// //                       href="tel:+918928809025"
// //                     />
// //                     <ContactItem
// //                       icon={<MessageSquare size={18} />}
// //                       title="WhatsApp"
// //                       value="+91 8928809025"
// //                       href="https://wa.me/918928809025"
// //                     />
// //                     <ContactItem
// //                       icon={<Mail size={18} />}
// //                       title="Email"
// //                       value="support@thecoderbox.com"
// //                       href="mailto:support@thecoderbox.com"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="space-y-5">
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

// //                   {/* Dynamic Office Location Display */}
// //                   <div className="flex items-start">
// //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <MapPin size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// //                         Office Location
// //                       </h4>
// //                       <p className="text-sm leading-6 text-gray-600">
// //                         {selectedLocation?.address || "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068"}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= GOOGLE MAP (Dynamic Multi-Location) ================= */}
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

// //         <div className="container relative mx-auto px-6">
          
// //           {/* Location Tabs */}
// //           <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
// //             {locations.map((location) => {
// //               const isActive = selectedLocation?.id === location.id;
// //               return (
// //                 <button
// //                   key={location.id}
// //                   onClick={() => setSelectedLocation(location)}
// //                   className={`rounded-xl p-3 text-left transition-all duration-300 ${
// //                     isActive
// //                       ? "bg-[#01ADF0] text-white shadow-lg shadow-[#01ADF0]/30"
// //                       : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
// //                       isActive ? "bg-white/20 text-white" : "bg-gray-100 text-[#01ADF0]"
// //                     }`}>
// //                       {String(location.id).padStart(2, "0")}
// //                     </div>
// //                     <div>
// //                       <h3 className="font-semibold text-sm">{location.city}</h3>
// //                       <p className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}>
// //                         {location.country}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </button>
// //               );
// //             })}
// //           </div>

// //           {/* Dynamic Map */}
// //           <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
// //             <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
// //               <Map
// //                 defaultCenter={defaultCenter}
// //                 defaultZoom={4}
// //                 gestureHandling="greedy"
// //                 disableDefaultUI={false}
// //                 mapId="YOUR_GOOGLE_MAP_ID"
// //                 style={{ width: '100%', height: '100%' }}
// //               >
// //                 {locations.map((location) => (
// //                   <AdvancedMarker
// //                     key={location.id}
// //                     position={location.position}
// //                     onClick={() => setSelectedLocation(location)}
// //                   />
// //                 ))}

// //                 {selectedLocation && (
// //                   <InfoWindow
// //                     position={selectedLocation.position}
// //                     onCloseClick={() => setSelectedLocation(null)}
// //                   >
// //                     <div className="max-w-[200px] p-1">
// //                       <h3 className="font-semibold text-sm text-slate-900">{selectedLocation.city}</h3>
// //                       <p className="mt-1 text-xs text-slate-600">{selectedLocation.address}</p>
// //                     </div>
// //                   </InfoWindow>
// //                 )}
// //               </Map>
// //             </APIProvider>
// //           </div>
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
// //   AlertCircle,
// //   CheckCircle,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { supabase } from "../lib/supabaseClient"; 

// // const ContactUs = () => {
// //   // ===== LOCATIONS DATA =====
// //   const locations = [
// //     {
// //       id: 1,
// //       city: "Bengaluru",
// //       country: "India",
// //       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
// //     },
// //     {
// //       id: 2,
// //       city: "Navi Mumbai",
// //       country: "India",
// //       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
// //     },
// //     {
// //       id: 3,
// //       city: "Noida",
// //       country: "India",
// //       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
// //     },
// //     {
// //       id: 4,
// //       city: "Hyderabad",
// //       country: "India",
// //       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
// //     },
// //     {
// //       id: 5,
// //       city: "Dubai",
// //       country: "UAE",
// //       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
// //     },
// //   ];

// //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// //   // ===== FORM STATE =====
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== ERRORS STATE =====
// //   const [errors, setErrors] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== SUCCESS / LOADING STATE =====
// //   const [isSuccess, setIsSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // ===== HANDLE INPUT CHANGE =====
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     if (name === "phone") {
// //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }

// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }));
// //     }
// //   };

// //   // ===== VALIDATION =====
// //   const validateForm = () => {
// //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// //     let isValid = true;

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Please enter your name.";
// //       isValid = false;
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Please enter your email address.";
// //       isValid = false;
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email address.";
// //       isValid = false;
// //     }

// //     if (!formData.phone.trim()) {
// //       newErrors.phone = "Please enter your phone number.";
// //       isValid = false;
// //     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
// //       newErrors.phone = "Please enter a valid 10-digit mobile number.";
// //       isValid = false;
// //     }

// //     if (!formData.service) {
// //       newErrors.service = "Please select a service.";
// //       isValid = false;
// //     }

// //     if (!formData.message.trim()) {
// //       newErrors.message = "Please write your message.";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsLoading(true);

// //     try {
// //       const { data, error } = await supabase.from("contacts").insert([
// //         {
// //           name: formData.name,
// //           email: formData.email,
// //           phone: formData.phone,
// //           service: formData.service,
// //           message: formData.message,
// //         },
// //       ]);

// //       if (error) throw error;

// //       setIsSuccess(true);
// //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });

// //       setTimeout(() => setIsSuccess(false), 5000);
// //     } catch (error) {
// //       console.error("Supabase Error:", error);
// //       setErrors((prev) => ({
// //         ...prev,
// //         message: "Failed to send message to database. Please try again later.",
// //       }));
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
// //       {/* ================= HERO ================= */}
// //       <section className="relative pt-64 pb-10">
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

// //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// //             {/* ================= FORM ================= */}
// //             <div className="lg:col-span-7">
// //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// //                 <div className="relative">
// //                   <h3 className="mb-5 text-xl font-bold text-[#003F7D]">
// //                     Send Us a Message
// //                   </h3>

// //                   <AnimatePresence>
// //                     {isSuccess && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
// //                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// //                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// //                           <div>
// //                             <p className="text-sm font-semibold text-emerald-900">
// //                               Message Sent Successfully!
// //                             </p>
// //                             <p className="mt-0.5 text-xs text-emerald-700">
// //                               Thank you! We'll get back to you soon.
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>

// //                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //                     <div>
// //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Your Name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         name="name"
// //                         type="text"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Your Name"
// //                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.name
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.name && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.name}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// //                       <div>
// //                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Email Address
// //                         </label>
// //                         <input
// //                           id="email"
// //                           name="email"
// //                           type="email"
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="your@email.com"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.email
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.email && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.email}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                       <div>
// //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           id="phone"
// //                           name="phone"
// //                           type="tel"
// //                           maxLength={10}
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="+91 12345 67890"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.phone
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.phone && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.phone}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Service
// //                       </label>
// //                       <select
// //                         id="service"
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.service
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
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
// //                       <AnimatePresence>
// //                         {errors.service && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.service}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div>
// //                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Message
// //                       </label>
// //                       <textarea
// //                         id="message"
// //                         name="message"
// //                         rows="3"
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         placeholder="Tell us about your project or inquiry..."
// //                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.message
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.message && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.message}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div className="pt-2">
// //                       <button
// //                         type="submit"
// //                         disabled={isLoading}
// //                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
// //                           isLoading
// //                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
// //                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
// //                         }`}
// //                       >
// //                         <span className="relative z-10">
// //                           {isLoading ? "Sending..." : "Submit Inquiry"}
// //                         </span>
// //                         {!isLoading && (
// //                           <ArrowRight
// //                             size={17}
// //                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// //                           />
// //                         )}
// //                         {!isLoading && (
// //                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// //                         )}
// //                       </button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ================= RIGHT SIDE ================= */}
// //             <div className="lg:col-span-5">
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
// //                       value="+91 8928809025"
// //                       href="tel:+918928809025"
// //                     />
// //                     <ContactItem
// //                       icon={<MessageSquare size={18} />}
// //                       title="WhatsApp"
// //                       value="+91 8928809025"
// //                       href="https://wa.me/918928809025"
// //                     />
// //                     <ContactItem
// //                       icon={<Mail size={18} />}
// //                       title="Email"
// //                       value="support@thecoderbox.com"
// //                       href="mailto:support@thecoderbox.com"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="space-y-5">
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

// //                   <div className="flex items-start">
// //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <MapPin size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="mb-1 text-base font-semibold text-[#003F7D]">
// //                         Office Location
// //                       </h4>
// //                       <p className="text-sm leading-6 text-gray-600">
// //                         {selectedLocation?.address}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= GOOGLE MAP (Now Dynamic) ================= */}
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

// //         <div className="container relative mx-auto px-6">
          
// //           {/* Location Tabs */}
// //           <div className="flex flex-wrap gap-3 mb-6 justify-center">
// //             {locations.map((location) => {
// //               const isActive = selectedLocation?.id === location.id;
// //               return (
// //                 <button
// //                   key={location.id}
// //                   onClick={() => setSelectedLocation(location)}
// //                   className={`rounded-xl p-3 text-left transition-all duration-300 ${
// //                     isActive
// //                       ? "bg-[#01ADF0] text-white shadow-lg shadow-[#01ADF0]/30"
// //                       : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
// //                       isActive ? "bg-white/20 text-white" : "bg-gray-100 text-[#01ADF0]"
// //                     }`}>
// //                       {String(location.id).padStart(2, "0")}
// //                     </div>
// //                     <div>
// //                       <h3 className="font-semibold text-sm">{location.city}</h3>
// //                       <p className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}>
// //                         {location.country}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </button>
// //               );
// //             })}
// //           </div>

// //           {/* Dynamic Google Map based on selected address */}
// //           <div className="overflow-hidden rounded-2xl shadow-md">
// //             <iframe
// //               title="Office Location"
// //               src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation?.address || "")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
// //               width="100%"
// //               height="450"
// //               loading="lazy"
// //               className="rounded-2xl border-0"
// //               referrerPolicy="no-referrer-when-downgrade"
// //               allowFullScreen
// //             />
// //           </div>
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
// //   AlertCircle,
// //   CheckCircle,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { supabase } from "../lib/supabaseClient"; 

// // const ContactUs = () => {
// //   // ===== LOCATIONS DATA =====
// //   const locations = [
// //     {
// //       id: 1,
// //       city: "Bengaluru",
// //       country: "India",
// //       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
// //     },
// //     {
// //       id: 2,
// //       city: "Navi Mumbai",
// //       country: "India",
// //       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
// //     },
// //     {
// //       id: 3,
// //       city: "Noida",
// //       country: "India",
// //       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
// //     },
// //     {
// //       id: 4,
// //       city: "Hyderabad",
// //       country: "India",
// //       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
// //     },
// //     {
// //       id: 5,
// //       city: "Dubai",
// //       country: "UAE",
// //       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
// //     },
// //   ];

// //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// //   // ===== FORM STATE =====
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== ERRORS STATE =====
// //   const [errors, setErrors] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== SUCCESS / LOADING STATE =====
// //   const [isSuccess, setIsSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // ===== HANDLE INPUT CHANGE =====
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     if (name === "phone") {
// //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }

// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }));
// //     }
// //   };

// //   // ===== VALIDATION =====
// //   const validateForm = () => {
// //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// //     let isValid = true;

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Please enter your name.";
// //       isValid = false;
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Please enter your email address.";
// //       isValid = false;
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email address.";
// //       isValid = false;
// //     }

// //     if (!formData.phone.trim()) {
// //       newErrors.phone = "Please enter your phone number.";
// //       isValid = false;
// //     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
// //       newErrors.phone = "Please enter a valid 10-digit mobile number.";
// //       isValid = false;
// //     }

// //     if (!formData.service) {
// //       newErrors.service = "Please select a service.";
// //       isValid = false;
// //     }

// //     if (!formData.message.trim()) {
// //       newErrors.message = "Please write your message.";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsLoading(true);

// //     try {
// //       const { data, error } = await supabase.from("contacts").insert([
// //         {
// //           name: formData.name,
// //           email: formData.email,
// //           phone: formData.phone,
// //           service: formData.service,
// //           message: formData.message,
// //         },
// //       ]);

// //       if (error) throw error;

// //       setIsSuccess(true);
// //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });

// //       setTimeout(() => setIsSuccess(false), 5000);
// //     } catch (error) {
// //       console.error("Supabase Error:", error);
// //       setErrors((prev) => ({
// //         ...prev,
// //         message: "Failed to send message to database. Please try again later.",
// //       }));
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
// //       {/* ================= HERO ================= */}
// //       {/* pt-32 use kiya hai kyunki global CSS me section ko 60px padding milti hai */}
// //       <section className="relative pt-32 pb-10">
// //         <div className="relative mx-auto max-w-4xl px-6 text-center">
// //           <h1 className="sec-hero-heading text-[#003F7D]">
// //             Let's Build Something
// //             <br />
// //             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// //               Great Together
// //             </span>
// //           </h1>
// //           <p className="sec-p sec-text-dark-soft mx-auto max-w-3xl">
// //             We're here to answer your questions, discuss your ideas,
// //             <br className="hidden md:block" />
// //             and start your next big project.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ================= CONTACT SECTION ================= */}
// //       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
// //         {/* Background Blobs (Grid hata diya gaya hai) */}
// //         <div className="pointer-events-none absolute inset-0 overflow-visible">
// //           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// //           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// //         </div>

// //         <div className="container relative z-10 mx-auto px-6">
// //           <div className="mb-10 text-center">
// //             <div className="mb-4 inline-block">
// //               <span className="sec-badge">Contact Us</span>
// //             </div>
// //             <h2 className="sec-h2 sec-text-dark mb-5">
// //               Get in Touch
// //             </h2>
// //             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
// //             <p className="sec-p sec-text-dark-soft mx-auto max-w-2xl">
// //               Have a project in mind? Reach out to us for a free consultation.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// //             {/* ================= FORM ================= */}
// //             <div className="lg:col-span-7">
// //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// //                 <div className="relative">
// //                   <h3 className="sec-h3 sec-text-dark mb-5">
// //                     Send Us a Message
// //                   </h3>

// //                   <AnimatePresence>
// //                     {isSuccess && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
// //                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// //                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// //                           <div>
// //                             <p className="text-sm font-semibold text-emerald-900">
// //                               Message Sent Successfully!
// //                             </p>
// //                             <p className="mt-0.5 text-xs text-emerald-700">
// //                               Thank you! We'll get back to you soon.
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>

// //                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //                     <div>
// //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                        Name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         name="name"
// //                         type="text"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Name"
// //                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.name
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.name && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.name}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// //                       <div>
// //                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Email Address
// //                         </label>
// //                         <input
// //                           id="email"
// //                           name="email"
// //                           type="email"
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="your@email.com"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.email
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.email && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.email}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                       <div>
// //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           id="phone"
// //                           name="phone"
// //                           type="tel"
// //                           maxLength={10}
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="+91 12345 67890"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.phone
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.phone && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.phone}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Service
// //                       </label>
// //                       <select
// //                         id="service"
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.service
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
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
// //                       <AnimatePresence>
// //                         {errors.service && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.service}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div>
// //                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Message
// //                       </label>
// //                       <textarea
// //                         id="message"
// //                         name="message"
// //                         rows="3"
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         placeholder="Tell us about your project or inquiry..."
// //                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.message
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.message && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.message}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div className="pt-2">
// //                       <button
// //                         type="submit"
// //                         disabled={isLoading}
// //                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
// //                           isLoading
// //                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
// //                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
// //                         }`}
// //                       >
// //                         <span className="relative z-10">
// //                           {isLoading ? "Sending..." : "Submit Inquiry"}
// //                         </span>
// //                         {!isLoading && (
// //                           <ArrowRight
// //                             size={17}
// //                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// //                           />
// //                         )}
// //                         {!isLoading && (
// //                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// //                         )}
// //                       </button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ================= RIGHT SIDE ================= */}
// //             <div className="lg:col-span-5">
// //               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// //                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
// //                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                 </div>

// //                 <div className="relative">
// //                   <h3 className="sec-h3 text-white mb-4">
// //                     Connect With Us
// //                   </h3>
// //                   <p className="sec-p text-white/80 mb-6">
// //                     We're available to answer your questions and help with your project.
// //                   </p>

// //                   <div className="space-y-4">
// //                     <ContactItem
// //                       icon={<Phone size={18} />}
// //                       title="Phone"
// //                       value="+91 8928809025"
// //                       href="tel:+918928809025"
// //                     />
// //                     <ContactItem
// //                       icon={<MessageSquare size={18} />}
// //                       title="WhatsApp"
// //                       value="+91 8928809025"
// //                       href="https://wa.me/918928809025"
// //                     />
// //                     <ContactItem
// //                       icon={<Mail size={18} />}
// //                       title="Email"
// //                       value="support@thecoderbox.com"
// //                       href="mailto:support@thecoderbox.com"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="space-y-5">
// //                   <div className="flex items-center">
// //                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <Clock size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="sec-h3 text-[#003F7D] mb-1">
// //                         Office Hours
// //                       </h4>
// //                       <p className="sec-p text-gray-600">
// //                         Monday - Saturday: 9AM - 7PM
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-start">
// //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <MapPin size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="sec-h3 text-[#003F7D] mb-1">
// //                         Office Location
// //                       </h4>
// //                       <p className="sec-p text-gray-600 leading-6">
// //                         {selectedLocation?.address}
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
// //       {/* Grid background hata diya gaya hai */}
// //       <section className="relative pb-20">
// //         <div className="container relative mx-auto px-6">
          
// //           {/* Location Tabs */}
// //           <div className="flex flex-wrap gap-3 mb-6 justify-center">
// //             {locations.map((location) => {
// //               const isActive = selectedLocation?.id === location.id;
// //               return (
// //                 <button
// //                   key={location.id}
// //                   onClick={() => setSelectedLocation(location)}
// //                   className={`rounded-xl p-3 text-left transition-all duration-300 ${
// //                     isActive
// //                       ? "bg-[#01ADF0] text-white shadow-lg shadow-[#01ADF0]/30"
// //                       : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
// //                       isActive ? "bg-white/20 text-white" : "bg-gray-100 text-[#01ADF0]"
// //                     }`}>
// //                       {String(location.id).padStart(2, "0")}
// //                     </div>
// //                     <div>
// //                       <h3 className="font-semibold text-sm">{location.city}</h3>
// //                       <p className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}>
// //                         {location.country}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </button>
// //               );
// //             })}
// //           </div>

// //           {/* Dynamic Google Map */}
// //           <div className="overflow-hidden rounded-2xl shadow-md">
// //             <iframe
// //               title="Office Location"
// //               src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation?.address || "")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
// //               width="100%"
// //               height="450"
// //               loading="lazy"
// //               className="rounded-2xl border-0"
// //               referrerPolicy="no-referrer-when-downgrade"
// //               allowFullScreen
// //             />
// //           </div>
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
// //         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
// //         <a
// //           href={href}
// //           target={href?.startsWith("http") ? "_blank" : undefined}
// //           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
// //           className="sec-p text-white/80 transition-colors duration-300 hover:text-white"
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
// //   AlertCircle,
// //   CheckCircle,
// // } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { supabase } from "../lib/supabaseClient"; 

// // const ContactUs = () => {
// //   // ===== LOCATIONS DATA =====
// //   const locations = [
// //     {
// //       id: 1,
// //       city: "Bengaluru",
// //       country: "India",
// //       address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
// //     },
// //     {
// //       id: 2,
// //       city: "Navi Mumbai",
// //       country: "India",
// //       address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
// //     },
// //     {
// //       id: 3,
// //       city: "Noida",
// //       country: "India",
// //       address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
// //     },
// //     {
// //       id: 4,
// //       city: "Hyderabad",
// //       country: "India",
// //       address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
// //     },
// //     {
// //       id: 5,
// //       city: "Dubai",
// //       country: "UAE",
// //       address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
// //     },
// //   ];

// //   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

// //   // ===== FORM STATE =====
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== ERRORS STATE =====
// //   const [errors, setErrors] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   // ===== SUCCESS / LOADING STATE =====
// //   const [isSuccess, setIsSuccess] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // ===== HANDLE INPUT CHANGE =====
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     if (name === "phone") {
// //       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
// //       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }

// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }));
// //     }
// //   };

// //   // ===== VALIDATION =====
// //   const validateForm = () => {
// //     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
// //     let isValid = true;

// //     if (!formData.name.trim()) {
// //       newErrors.name = "Please enter your name.";
// //       isValid = false;
// //     }

// //     if (!formData.email.trim()) {
// //       newErrors.email = "Please enter your email address.";
// //       isValid = false;
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email address.";
// //       isValid = false;
// //     }

// //     if (!formData.phone.trim()) {
// //       newErrors.phone = "Please enter your phone number.";
// //       isValid = false;
// //     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
// //       newErrors.phone = "Please enter a valid 10-digit mobile number.";
// //       isValid = false;
// //     }

// //     if (!formData.service) {
// //       newErrors.service = "Please select a service.";
// //       isValid = false;
// //     }

// //     if (!formData.message.trim()) {
// //       newErrors.message = "Please write your message.";
// //       isValid = false;
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   // ===== HANDLE SUBMIT (SUPABASE INTEGRATION) =====
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsLoading(true);

// //     try {
// //       const { data, error } = await supabase.from("contacts").insert([
// //         {
// //           name: formData.name,
// //           email: formData.email,
// //           phone: formData.phone,
// //           service: formData.service,
// //           message: formData.message,
// //         },
// //       ]);

// //       if (error) throw error;

// //       setIsSuccess(true);
// //       setFormData({ name: "", email: "", phone: "", service: "", message: "" });
// //       setErrors({ name: "", email: "", phone: "", service: "", message: "" });

// //       setTimeout(() => setIsSuccess(false), 5000);
// //     } catch (error) {
// //       console.error("Supabase Error:", error);
// //       setErrors((prev) => ({
// //         ...prev,
// //         message: "Failed to send message to database. Please try again later.",
// //       }));
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
// //   {/* ================= HERO ================= */}
// // <section className="relative pt-32 pb-32">
// //   <div className="relative mx-auto max-w-4xl px-6 text-center">
// //     <h1 className="sec-hero-heading text-[#003F7D]">
// //       Let's Build Something
// //       <br />
// //       <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
// //         Great Together
// //       </span>
// //     </h1>
// //     <p className="sec-p sec-text-dark-soft mx-auto max-w-3xl">
// //       We're here to answer your questions, discuss your ideas,
// //       <br className="hidden md:block" />
// //       and start your next big project.
// //     </p>
// //   </div>
// // </section>

// //       {/* ================= CONTACT SECTION ================= */}
// //       <section className="relative bg-gradient-to-b from-[#E6F8FF] to-white py-10">
        
// //         {/* 👇 FIX: overflow-visible ko overflow-hidden kar diya hai taaki blue blobs neeche map me na jayein */}
// //         <div className="pointer-events-none absolute inset-0 overflow-hidden">
// //           <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-[#00C6FB] opacity-20 blur-3xl" />
// //           <div className="absolute -bottom-40 -right-40 z-0 h-[300px] w-[300px] rounded-full bg-[#01ADF0] opacity-20 blur-3xl" />
// //         </div>

// //         <div className="container relative z-10 mx-auto px-6">
// //           <div className="mb-10 text-center">
// //             <div className="mb-4 inline-block">
// //               <span className="sec-badge">Contact Us</span>
// //             </div>
// //             <h2 className="sec-h2 sec-text-dark mb-5">
// //               Get in Touch
// //             </h2>
// //             <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#003F7D] to-[#01ADF0]" />
// //             <p className="sec-p sec-text-dark-soft mx-auto max-w-2xl">
// //               Have a project in mind? Reach out to us for a free consultation.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
// //             {/* ================= FORM ================= */}
// //             <div className="lg:col-span-7">
// //               <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[80px] bg-gradient-to-bl from-[#01ADF0]/10 to-transparent" />

// //                 <div className="relative">
// //                   <h3 className="sec-h3 sec-text-dark mb-5">
// //                     Send Us a Message
// //                   </h3>

// //                   <AnimatePresence>
// //                     {isSuccess && (
// //                       <motion.div
// //                         initial={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
// //                         exit={{ opacity: 0, height: 0, marginBottom: 0 }}
// //                         transition={{ duration: 0.3 }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
// //                           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
// //                           <div>
// //                             <p className="text-sm font-semibold text-emerald-900">
// //                               Message Sent Successfully!
// //                             </p>
// //                             <p className="mt-0.5 text-xs text-emerald-700">
// //                               Thank you! We'll get back to you soon.
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>

// //                   <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //                     <div>
// //                       <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                        Name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         name="name"
// //                         type="text"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Name"
// //                         className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.name
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.name && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.name}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// //                       <div>
// //                         <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Email Address
// //                         </label>
// //                         <input
// //                           id="email"
// //                           name="email"
// //                           type="email"
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="your@email.com"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.email
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.email && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.email}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                       <div>
// //                         <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                           Phone Number
// //                         </label>
// //                         <input
// //                           id="phone"
// //                           name="phone"
// //                           type="tel"
// //                           maxLength={10}
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="+91 12345 67890"
// //                           className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                             errors.phone
// //                               ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                               : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                           }`}
// //                         />
// //                         <AnimatePresence>
// //                           {errors.phone && (
// //                             <motion.p
// //                               initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                               exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                               className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                             >
// //                               <AlertCircle className="h-3 w-3 shrink-0" />
// //                               {errors.phone}
// //                             </motion.p>
// //                           )}
// //                         </AnimatePresence>
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Service
// //                       </label>
// //                       <select
// //                         id="service"
// //                         name="service"
// //                         value={formData.service}
// //                         onChange={handleChange}
// //                         className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.service
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
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
// //                       <AnimatePresence>
// //                         {errors.service && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.service}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div>
// //                       <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
// //                         Message
// //                       </label>
// //                       <textarea
// //                         id="message"
// //                         name="message"
// //                         rows="3"
// //                         value={formData.message}
// //                         onChange={handleChange}
// //                         placeholder="Tell us about your project or inquiry..."
// //                         className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition duration-300 ${
// //                           errors.message
// //                             ? "border-red-400 focus:border-transparent focus:ring-2 focus:ring-red-400"
// //                             : "border-gray-300 focus:border-[#01ADF0] focus:ring-2 focus:ring-[#01ADF0]/50"
// //                         }`}
// //                       />
// //                       <AnimatePresence>
// //                         {errors.message && (
// //                           <motion.p
// //                             initial={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             animate={{ opacity: 1, height: "auto", marginTop: 6 }}
// //                             exit={{ opacity: 0, height: 0, marginTop: 0 }}
// //                             className="flex items-center gap-1 text-xs font-medium text-red-500"
// //                           >
// //                             <AlertCircle className="h-3 w-3 shrink-0" />
// //                             {errors.message}
// //                           </motion.p>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>

// //                     <div className="pt-2">
// //                       <button
// //                         type="submit"
// //                         disabled={isLoading}
// //                         className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md px-6 py-2.5 text-base font-medium text-white shadow-md transition-all duration-300 ${
// //                           isLoading
// //                             ? "cursor-not-allowed bg-gray-400 shadow-gray-400/20"
// //                             : "bg-[#008FD1] shadow-[#01ADF0]/20 hover:shadow-lg"
// //                         }`}
// //                       >
// //                         <span className="relative z-10">
// //                           {isLoading ? "Sending..." : "Submit Inquiry"}
// //                         </span>
// //                         {!isLoading && (
// //                           <ArrowRight
// //                             size={17}
// //                             className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"
// //                           />
// //                         )}
// //                         {!isLoading && (
// //                           <span className="absolute inset-0 bg-[#006FA6] opacity-0 transition-all duration-500 group-hover:opacity-100" />
// //                         )}
// //                       </button>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ================= RIGHT SIDE ================= */}
// //             <div className="lg:col-span-5">
// //               <div className="relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-[#005B8F] to-[#01ADF0] p-6 text-white shadow-lg">
// //                 <div className="absolute right-0 top-0 h-full w-full opacity-10">
// //                   <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                   <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white blur-3xl" />
// //                 </div>

// //                 <div className="relative">
// //                   <h3 className="sec-h3 text-white mb-4">
// //                     Connect With Us
// //                   </h3>
// //                   <p className="sec-p text-white/80 mb-6">
// //                     We're available to answer your questions and help with your project.
// //                   </p>

// //                   <div className="space-y-4">
// //                     <ContactItem
// //                       icon={<Phone size={18} />}
// //                       title="Phone"
// //                       value="+91 8928809025"
// //                       href="tel:+918928809025"
// //                     />
// //                     <ContactItem
// //                       icon={<MessageSquare size={18} />}
// //                       title="WhatsApp"
// //                       value="+91 8928809025"
// //                       href="https://wa.me/918928809025"
// //                     />
// //                     <ContactItem
// //                       icon={<Mail size={18} />}
// //                       title="Email"
// //                       value="support@thecoderbox.com"
// //                       href="mailto:support@thecoderbox.com"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
// //                 <div className="space-y-5">
// //                   <div className="flex items-center">
// //                     <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <Clock size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="sec-h3 text-[#003F7D] mb-1">
// //                         Office Hours
// //                       </h4>
// //                       <p className="sec-p text-gray-600">
// //                         Monday - Saturday: 9AM - 7PM
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-start">
// //                     <div className="mr-4 mt-0.5 flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#01ADF0]/10 text-[#01ADF0]">
// //                       <MapPin size={18} />
// //                     </div>
// //                     <div>
// //                       <h4 className="sec-h3 text-[#003F7D] mb-1">
// //                         Office Location
// //                       </h4>
// //                       <p className="sec-p text-gray-600 leading-6">
// //                         {selectedLocation?.address}
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
// //       {/* 👇 FIX: bg-white aur z-10 add kiya hai taaki yeh pure white background par clean dikhe */}
// //       <section className="relative pb-20 bg-white z-10">
// //         <div className="container relative mx-auto px-6">
          
// //           {/* Location Tabs */}
// //           <div className="flex flex-wrap gap-3 mb-6 justify-center">
// //             {locations.map((location) => {
// //               const isActive = selectedLocation?.id === location.id;
// //               return (
// //                 <button
// //                   key={location.id}
// //                   onClick={() => setSelectedLocation(location)}
// //                   className={`rounded-xl p-3 text-left transition-all duration-300 ${
// //                     isActive
// //                       ? "bg-[#01ADF0] text-white shadow-lg shadow-[#01ADF0]/30"
// //                       : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
// //                   }`}
// //                 >
// //                   <div className="flex items-center gap-3">
// //                     <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
// //                       isActive ? "bg-white/20 text-white" : "bg-gray-100 text-[#01ADF0]"
// //                     }`}>
// //                       {String(location.id).padStart(2, "0")}
// //                     </div>
// //                     <div>
// //                       <h3 className="font-semibold text-sm">{location.city}</h3>
// //                       <p className={`text-[10px] ${isActive ? "text-white/80" : "text-gray-500"}`}>
// //                         {location.country}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </button>
// //               );
// //             })}
// //           </div>

// //           {/* Dynamic Google Map */}
// //           <div className="overflow-hidden rounded-2xl shadow-md">
// //             <iframe
// //               title="Office Location"
// //               src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation?.address || "")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
// //               width="100%"
// //               height="450"
// //               loading="lazy"
// //               className="rounded-2xl border-0"
// //               referrerPolicy="no-referrer-when-downgrade"
// //               allowFullScreen
// //             />
// //           </div>
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
// //         <h4 className="sec-h3 text-white mb-0.5">{title}</h4>
// //         <a
// //           href={href}
// //           target={href?.startsWith("http") ? "_blank" : undefined}
// //           rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
// //           className="sec-p text-white/80 transition-colors duration-300 hover:text-white"
// //         >
// //           {value}
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactUs;






// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { supabase } from "../lib/supabaseClient";

// // ============================================
// // DATA & HELPERS
// // ============================================
// const OFFICES = [
//   { code: "BLR", num: "01", city: "Bengaluru",   country: "India", lat: 12.9166, lon: 77.6101, tz: "Asia/Kolkata", tzs: "IST", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
//   { code: "NMB", num: "02", city: "Navi Mumbai", country: "India", lat: 19.0330, lon: 73.0297, tz: "Asia/Kolkata", tzs: "IST", address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703" },
//   { code: "NOI", num: "03", city: "Noida",       country: "India", lat: 28.5355, lon: 77.3910, tz: "Asia/Kolkata", tzs: "IST", address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309" },
//   { code: "HYD", num: "04", city: "Hyderabad",   country: "India", lat: 17.3850, lon: 78.4867, tz: "Asia/Kolkata", tzs: "IST", address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081" },
//   { code: "DXB", num: "05", city: "Dubai",       country: "UAE",   lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai",   tzs: "GST", address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates" },
// ];
// const HOURS = { open: 9 * 60, close: 18 * 60 };
// const SERVICES = ["Web design", "Development", "Branding", "SEO & growth", "Something else"];
// const ZOOM = 2.2;

// const proj = (o) => ({ x: (o.lon - 30) * 12, y: (38 - o.lat) * 12 });
// const hav = (p, q) => {
//   const R = 6371, r = Math.PI / 180;
//   const dLat = (q.lat - p.lat) * r, dLon = (q.lon - p.lon) * r;
//   const h = Math.sin(dLat / 2) ** 2 + Math.cos(p.lat * r) * Math.cos(q.lat * r) * Math.sin(dLon / 2) ** 2;
//   return 2 * R * Math.asin(Math.sqrt(h));
// };

// const LAND_PATH = "M-240 -144 L-240 756 L72 756 L126 576 L111.6 540 L120 492 L144 468 L180 438 L210 408 L234 378 L252 331.2 L254.4 314.4 L204 322.8 L174 331.2 L159.6 314.4 L150 304.8 L138 294 L114 270 L102 240 L86.4 204 L66 168 L48 126 L31.2 97.2 L27.6 81.6 L0 79.2 L-60 74.4 L-120 81.6 L-132 92.4 L-180 72 L-240 54 L-240 12 L-120 12 L-96 18 L-48 0 L-42 -24 L-24 -36 L72 -36 L78 14.4 L72 21.6 L70.8 33.6 L66 50.4 L58.8 66 L51.6 80.4 L45.6 99.6 L51.6 122.4 L60 102 L72 126 L96 168 L109.2 196.8 L138 234 L152.4 270 L160.8 303.6 L180 302.4 L228 284.4 L266.4 268.8 L300 252 L320.4 240 L333.6 228 L345.6 211.2 L357.6 186 L343.2 172.8 L324 169.2 L316.8 158.4 L315.6 140.4 L306 150 L288 166.8 L270 165.6 L259.2 165.6 L255.6 142.8 L249.6 151.2 L242.4 141.6 L235.2 132 L222 120 L216 97.2 L234 96 L246 105.6 L258 121.2 L282 134.4 L300 136.8 L314.4 130.8 L327.6 146.4 L348 151.2 L378 153.6 L408 152.4 L438 151.2 L447.6 158.4 L458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L726 189.6 L741.6 187.2 L747.6 204 L756 222 L771.6 240 L770.4 264 L783.6 266.4 L811.2 258 L812.4 276 L822 300 L824.4 336 L819.6 360 L828 366 L960 366 L960 -144 Z";
// const LAND_PATH_2 = "M598.8 338.4 L609.6 344.4 L622.8 366 L619.2 380.4 L607.2 385.2 L600 376.8 L596.4 357.6 Z";
// const LAND_PATH_3 = "M458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L705.6 186 L703.2 164.4 L696 152.4 L717.6 144 L744 153.6 L747.6 168 L738 177.6 L751.2 177.6 L759.6 168 L774 150 L783.6 135.6 L804 122.4 L792 108 L768 110.4 L744 122.4 L716.4 117.6 L706.8 128.4 L698.4 121.2 L696 138 L672 127.2 L648 126 L618 111.6 L603.6 96 L588 84 L585.6 66 L594 48 L573.6 30 L552 26.4 L534 36 L525.6 44.4 L534 62.4 L540 69.6 L535.2 84 L526.8 96 L504 120 L489.6 122.4 L475.2 138 L486 150 L474 164.4 Z";
// const LAND_PATH_4 = "M259.2 165.6 L270 165.6 L288 166.8 L306 150 L315.6 140.4 L316.8 158.4 L309.6 165.6 L302.4 183.6 L264 180 Z";

// // ============================================
// // MAIN COMPONENT
// // ============================================
// const ContactUs = () => {
//   const [active, setActive] = useState(0);
//   const [overview, setOverview] = useState(false);
//   const [scale, setScale] = useState(1);
//   const [flapText, setFlapText] = useState("5 OFFICES");
//   const [hudVerb, setHudVerb] = useState("NETWORK");
//   const [hudCoords, setHudCoords] = useState("—");
//   const [clockText, setClockText] = useState("--:--:--");
//   const [isOpen, setIsOpen] = useState(true);
//   const [overviewRows, setOverviewRows] = useState([]);
//   const [copied, setCopied] = useState(false);

//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chips, setChips] = useState([]);
//   const [emailValid, setEmailValid] = useState(false);

//   const camRef = useRef(null);
//   const mapRef = useRef(null);
//   const mapWrapRef = useRef(null);
//   const tabIndRef = useRef(null);
//   const tabButtonsRef = useRef([]);
//   const pinsRef = useRef(null);
//   const routesRef = useRef(null);
//   const prevSecRef = useRef(-1);
//   const secTurnsRef = useRef(0);

//   const currentOffice = OFFICES[active];
//   const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   // TITLE SPLIT
//   useEffect(() => {
//     let d = 0.12;
//     document.querySelectorAll("[data-split]").forEach((w) => {
//       const textNode = w.firstChild;
//       if (!textNode || textNode.nodeType !== 3) return;
//       const text = textNode.textContent;
//       const rest = [...w.childNodes].slice(1);
//       w.textContent = "";
//       [...text].forEach((c) => {
//         const s = document.createElement("span");
//         s.className = "ch";
//         s.textContent = c;
//         s.style.animationDelay = d.toFixed(2) + "s";
//         d += 0.045;
//         s.setAttribute("aria-hidden", "true");
//         w.appendChild(s);
//       });
//       rest.forEach((n) => w.appendChild(n));
//       d += 0.08;
//     });
//   }, []);

//   // CLOCK
//   const tInfo = useCallback((o) => {
//     const d = new Date();
//     const p = new Intl.DateTimeFormat("en-US", {
//       timeZone: o.tz, weekday: "short", hour: "2-digit",
//       minute: "2-digit", second: "2-digit", hour12: false,
//     }).formatToParts(d);
//     const g = (t) => (p.find((x) => x.type === t) || {}).value;
//     const h = parseInt(g("hour"), 10) % 24;
//     const m = parseInt(g("minute"), 10);
//     const s = parseInt(g("second"), 10);
//     const mins = h * 60 + m;
//     const open = !["Sat", "Sun"].includes(g("weekday")) && mins >= HOURS.open && mins < HOURS.close;
//     const pad = (n) => String(n).padStart(2, "0");
//     return { h, m, s, open, text: `${pad(h)}:${pad(m)}:${pad(s)}`, hm: `${pad(h)}:${pad(m)}` };
//   }, []);

//   useEffect(() => {
//     const tick = () => {
//       const o = OFFICES[active];
//       const t = tInfo(o);
//       setClockText(t.text);
//       setIsOpen(t.open);
//       if (prevSecRef.current !== -1 && t.s < prevSecRef.current) secTurnsRef.current++;
//       prevSecRef.current = t.s;
//       const hS = document.getElementById("hS");
//       const hM = document.getElementById("hM");
//       const hH = document.getElementById("hH");
//       if (hS) hS.style.transform = `rotate(${secTurnsRef.current * 360 + t.s * 6}deg)`;
//       if (hM) hM.style.transform = `rotate(${t.m * 6 + t.s * 0.1}deg)`;
//       if (hH) hH.style.transform = `rotate(${(t.h % 12) * 30 + t.m * 0.5}deg)`;

//       if (overview) {
//         setOverviewRows(OFFICES.map((o, i) => {
//           const ti = tInfo(o);
//           return { i, o, open: ti.open, hm: ti.hm };
//         }));
//       }
//     };
//     tick();
//     const interval = setInterval(tick, 1000);
//     return () => clearInterval(interval);
//   }, [active, overview, tInfo]);

//   // CAMERA
//   const camera = useCallback(() => {
//     if (!camRef.current || !mapRef.current || !pinsRef.current) return;
//     const narrow = window.innerWidth <= 720;
//     const a = proj(OFFICES[active]);
//     let S, tx, ty;
//     if (overview) {
//       S = narrow ? 1.15 : 1.3;
//       const cx = 442, cy = 207;
//       const tgt = narrow ? [400, 316] : [420, 290];
//       tx = tgt[0] - S * cx;
//       ty = tgt[1] - S * cy;
//     } else {
//       S = ZOOM;
//       const tgt = narrow ? [400, 300] : [500, 250];
//       tx = tgt[0] - S * a.x;
//       ty = tgt[1] - S * a.y;
//     }
//     setScale(S);
//     camRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${S})`;
//     pinsRef.current.querySelectorAll(".pin .inner").forEach((el) => (el.style.transform = `scale(${1 / S})`));
//     const scaleBar = document.getElementById("scaleBar");
//     if (scaleBar && mapRef.current) {
//       const r = Math.max(mapRef.current.clientWidth / 800, mapRef.current.clientHeight / 632);
//       scaleBar.style.width = (21.6 * S * r).toFixed(1) + "px";
//     }
//   }, [active, overview]);

//   // ROUTES
//   const buildRoutes = useCallback(() => {
//     if (!routesRef.current) return;
//     const NS = "http://www.w3.org/2000/svg";
//     const svgEl = (tag, attrs = {}) => {
//       const e = document.createElementNS(NS, tag);
//       for (const k in attrs) e.setAttribute(k, attrs[k]);
//       return e;
//     };
//     routesRef.current.innerHTML = "";
//     const S = scale || 1;
//     const a = OFFICES[active];
//     const ap = proj(a);
//     let n = 0;
//     OFFICES.forEach((o, i) => {
//       if (i === active) return;
//       const b = proj(o);
//       const mx = (ap.x + b.x) / 2, my = (ap.y + b.y) / 2;
//       const dx = b.x - ap.x, dy = b.y - ap.y, k = 0.22;
//       let cx = mx - dy * k, cy = my + dx * k;
//       if (cy > my) { cx = mx + dy * k; cy = my - dx * k; }
//       const dStr = `M${ap.x.toFixed(1)} ${ap.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
//       const id = "rt" + i;
//       const delay = 0.9 + n * 0.14;
//       const base = svgEl("path", { id, d: dStr, fill: "none", stroke: "#4FA3FF", "stroke-opacity": "0.35", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3) });
//       const flow = svgEl("path", { d: dStr, fill: "none", stroke: "#8CC4FF", "stroke-opacity": "0.9", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3), "stroke-dasharray": `${(3 / S).toFixed(2)} ${(5 / S).toFixed(2)}`, opacity: "0" });
//       routesRef.current.append(base, flow);
//       const len = base.getTotalLength();
//       base.style.strokeDasharray = len;
//       base.style.strokeDashoffset = len;
//       base.getBoundingClientRect();
//       base.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.6,0,.2,1) ${delay}s`;
//       requestAnimationFrame(() => { base.style.strokeDashoffset = 0; });
//       setTimeout(() => {
//         flow.style.opacity = "1";
//         flow.style.animation = "flow 1.2s linear infinite";
//       }, (delay + 1) * 1000);

//       if (!reduce) {
//         const km0 = hav(a, o);
//         const trav = svgEl("circle", { r: (2.8 / S).toFixed(2), fill: "#D6EBFF", opacity: "0" });
//         const mot = svgEl("animateMotion", { dur: (2.2 + km0 / 1400).toFixed(2) + "s", repeatCount: "indefinite", rotate: "auto" });
//         const mp = svgEl("mpath");
//         mp.setAttribute("href", "#" + id);
//         mp.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + id);
//         mot.appendChild(mp);
//         trav.appendChild(mot);
//         routesRef.current.appendChild(trav);
//         setTimeout(() => trav.setAttribute("opacity", "1"), (delay + 1) * 1000);
//       }

//       const lx = 0.25 * ap.x + 0.5 * cx + 0.25 * b.x;
//       const ly = 0.25 * ap.y + 0.5 * cy + 0.25 * b.y;
//       const km = Math.round(hav(a, o) / 10) * 10;
//       const lg = svgEl("g", { transform: `translate(${lx.toFixed(1)} ${ly.toFixed(1)}) scale(${(1 / S).toFixed(4)})`, opacity: "0" });
//       lg.style.transition = "opacity .5s";
//       lg.innerHTML = `<rect x="-34" y="-10" width="68" height="20" rx="10" fill="#0B1B30" stroke="#2A5283"/><text y="3.5" fill="#A9C6EA" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">~${km.toLocaleString("en-IN")} km</text>`;
//       routesRef.current.appendChild(lg);
//       setTimeout(() => (lg.style.opacity = "1"), (delay + 0.9) * 1000);
//       n++;
//     });
//   }, [active, scale, reduce]);

//   // PINS
//   const renderPins = useCallback(() => {
//     if (!pinsRef.current) return;
//     const NS = "http://www.w3.org/2000/svg";
//     pinsRef.current.innerHTML = "";
//     OFFICES.forEach((o, i) => {
//       const p = proj(o);
//       const lw = Math.round(o.city.length * 7.1 + 26);
//       const lx = o.code === "NMB" ? -(lw + 14) : 14;
//       const isAct = i === active && !overview;
//       const g = document.createElementNS(NS, "g");
//       g.setAttribute("class", "pin" + (isAct ? " active" : ""));
//       g.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
//       g.setAttribute("tabindex", "0");
//       g.setAttribute("role", "button");
//       g.setAttribute("aria-label", `${o.city} office`);
//       g.style.cursor = "pointer";
//       g.innerHTML = `<g class="inner" style="transition:transform 1.4s cubic-bezier(0.65,0,0.2,1)">
//         <g class="fx" style="opacity:${isAct ? 1 : 0};transition:opacity .6s">
//           <circle r="46" fill="url(#glow)"/>
//           <path d="M0 0 L64 0 A64 64 0 0 0 45.3 -45.3 Z" fill="url(#sweepGrad)" style="transform-origin:0 0;animation:spin 3.6s linear infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) .8s infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) 1.6s infinite"/>
//           <rect x="-1.5" y="-78" width="3" height="78" rx="1.5" fill="url(#beamGrad)" style="transform-box:fill-box;transform-origin:bottom;transform:scaleY(${isAct ? 1 : 0});transition:transform .9s cubic-bezier(.22,.8,.18,1) .5s"/>
//         </g>
//         <circle class="burst" r="10" fill="none" stroke="#fff" stroke-width="2" opacity="0" style="transform-box:fill-box;transform-origin:center"/>
//         <circle class="dot" r="${isAct ? 9 : 6}" fill="${isAct ? '#2F8CFF' : '#8DB8EA'}" stroke="#fff" stroke-width="2.5" style="transition:r .4s,fill .4s"/>
//         <circle r="2.6" fill="#fff"/>
//         <g class="chip" transform="translate(${lx} -12)">
//           <rect width="${lw}" height="24" rx="12" fill="${isAct ? '#0062D6' : 'rgba(7,21,42,0.9)'}" stroke="${isAct ? '#5AA8FF' : '#2A4F7C'}" style="transition:fill .4s,stroke .4s"/>
//           <text x="13" y="16" fill="${isAct ? '#fff' : '#C4D6EE'}" font-family="DM Sans, sans-serif" font-size="12" font-weight="700" style="transition:fill .4s">${o.city}</text>
//         </g>
//       </g>`;
//       g.addEventListener("click", () => { setActive(i); setOverview(false); });
//       g.addEventListener("keydown", (e) => {
//         if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); setOverview(false); }
//       });
//       pinsRef.current.appendChild(g);
//     });
//   }, [active, overview]);

//   useEffect(() => { renderPins(); }, [active, overview, renderPins]);

//   useEffect(() => {
//     camera();
//     buildRoutes();
//     if (tabButtonsRef.current[active] && tabIndRef.current) {
//       const t = tabButtonsRef.current[active];
//       tabIndRef.current.style.width = t.offsetWidth + "px";
//       tabIndRef.current.style.transform = `translateX(${t.offsetLeft}px)`;
//       tabIndRef.current.style.opacity = overview ? "0" : "1";
//     }
//     if (overview) {
//       setHudVerb("NETWORK");
//       setFlapText("5 OFFICES");
//       setHudCoords(`ZOOM ${scale.toFixed(1)}× · IN + AE · IST / GST`);
//     } else {
//       setHudVerb("CONNECTING");
//       setFlapText(OFFICES[active].city.toUpperCase());
//       setHudCoords(`${OFFICES[active].lat.toFixed(4)}° N · ${OFFICES[active].lon.toFixed(4)}° E · ZOOM ${scale.toFixed(1)}×`);
//     }
//   }, [active, overview, camera, buildRoutes, scale]);

//   useEffect(() => {
//     const onResize = () => { camera(); buildRoutes(); };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [camera, buildRoutes]);

//   useEffect(() => {
//     const wrap = mapWrapRef.current, map = mapRef.current;
//     if (!wrap || !map || reduce || !window.matchMedia("(hover: hover)").matches) return;
//     const onMove = (e) => {
//       const r = map.getBoundingClientRect();
//       const x = (e.clientX - r.left) / r.width - 0.5;
//       const y = (e.clientY - r.top) / r.height - 0.5;
//       map.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
//     };
//     const onLeave = () => (map.style.transform = "");
//     wrap.addEventListener("mousemove", onMove);
//     wrap.addEventListener("mouseleave", onLeave);
//     return () => { wrap.removeEventListener("mousemove", onMove); wrap.removeEventListener("mouseleave", onLeave); };
//   }, [reduce]);

//   useEffect(() => {
//     const t = setTimeout(() => { setActive(0); setOverview(false); }, reduce ? 0 : 2300);
//     return () => clearTimeout(t);
//   }, [reduce]);

//   // FORM
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;
//     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
//     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
//     if (!formData.service) { newErrors.service = "Please select a service."; isValid = false; }
//     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsLoading(true);
//     if (overview) setOverview(false);
//     try {
//       const { error } = await supabase.from("contacts").insert([{
//         name: formData.name, email: formData.email, phone: formData.phone,
//         service: formData.service, message: formData.message,
//       }]);
//       if (error) throw error;
//       const pin = pinsRef.current?.querySelectorAll(".pin")[active];
//       if (pin) {
//         pin.classList.remove("landed");
//         void pin.getBoundingClientRect();
//         pin.classList.add("landed");
//       }
//       setTimeout(() => {
//         setIsSuccess(true);
//         setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//         setErrors({ name: "", email: "", phone: "", service: "", message: "" });
//         setChips([]);
//       }, 700);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({ ...prev, message: "Failed to send message. Please try again later." }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleFormMove = (e) => {
//     const card = e.currentTarget;
//     const r = card.getBoundingClientRect();
//     card.style.setProperty("--mx", e.clientX - r.left + "px");
//     card.style.setProperty("--my", e.clientY - r.top + "px");
//   };

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(currentOffice.address);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch (err) { /* noop */ }
//   };

//   return (
//     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">

//       {/* INLINE KEYFRAMES */}
//       <style>{`
//         @keyframes chIn { to { opacity: 1; transform: none; } }
//         @keyframes wipe { to { clip-path: inset(0 0 0 0 round 24px); } }
//         @keyframes scan { from { top: -120px; } to { top: 110%; } }
//         @keyframes pulseRing { 0% { transform: scale(.4); opacity: .75; } 100% { transform: scale(3.4); opacity: 0; } }
//         @keyframes burst { 0% { transform: scale(.5); opacity: 1; } 100% { transform: scale(5); opacity: 0; } }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @keyframes flow { to { stroke-dashoffset: -20; } }
//         @keyframes blink { 50% { opacity: .25; } }
//         @keyframes flip { 0% { transform: scaleY(1); } 50% { transform: scaleY(.1); } 100% { transform: scaleY(1); } }
//         @keyframes passIn { from { opacity: 0; transform: translateY(18px) rotate(-1.5deg) scale(.97); } to { opacity: 1; transform: none; } }
//         @keyframes shake { 10%,90% { transform: translateX(-2px); } 20%,80% { transform: translateX(4px); } 30%,50%,70% { transform: translateX(-7px); } 40%,60% { transform: translateX(7px); } }
//         @keyframes pop { 0% { transform: scale(.5); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: none; opacity: 1; } }
//         @keyframes draw { to { stroke-dashoffset: 0; } }
//         @keyframes rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
//         .ch { display: inline-block; opacity: 0; transform: translateY(60%) rotate(8deg); animation: chIn 0.9s cubic-bezier(0.22,0.8,0.18,1) forwards; }
//         .pin.landed .burst { animation: burst 1s ease-out; }
//         .fl input:focus + label, .fl input:not(:placeholder-shown) + label,
//         .fl textarea:focus + label, .fl textarea:not(:placeholder-shown) + label {
//           transform: translateY(-9px) scale(0.78);
//           color: #0062D6;
//           font-weight: 600;
//         }
//         .fl input::placeholder, .fl textarea::placeholder { color: transparent; }
//         .fl input:focus::placeholder, .fl textarea:focus::placeholder { color: #9AA5B8; }
//         .land-label { fill: #6F8FB8; font-family: 'JetBrains Mono', monospace; font-size: 7px; letter-spacing: 2px; text-anchor: middle; }
//         .land-label.sea { fill: #4C6C95; font-style: italic; }
//       `}</style>

//       {/* HERO */}
//       <section className="relative pt-32 pb-32">
//         <div className="relative mx-auto max-w-4xl px-6 text-center">
//           <h1 className="sec-hero-heading text-[#003F7D]">
//             Let's Build Something
//             <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h1>
//           <p className="sec-p sec-text-dark-soft mx-auto max-w-3xl">
//             We're here to answer your questions, discuss your ideas,
//             <br className="hidden md:block" />
//             and start your next big project.
//           </p>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
//         <div className="absolute inset-0 [background-image:radial-gradient(#D8E0EC_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] pointer-events-none" />

//         <div className="relative max-w-[1248px] mx-auto z-10">
//           <div className="flex flex-col items-center text-center gap-4 mb-12">
//             <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F0FF] border border-[#CFE0FF] text-[#0062D6] text-xs font-bold tracking-[0.16em]">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#0A7CFF] animate-pulse" />
//               LET'S TALK
//             </span>
//             <h1
//               className="font-extrabold text-[clamp(48px,7vw,84px)] leading-none tracking-[-0.035em] flex gap-[0.22em]"
//               style={{ fontFamily: "'Bricolage Grotesque', 'DM Sans', system-ui, sans-serif" }}
//               aria-label="Contact Us"
//             >
//               <span className="inline-flex relative pb-[0.12em]" data-split>Contact</span>
//               <span className="inline-flex relative pb-[0.12em] text-[#0A7CFF]" data-split>
//                 Us
//                 <svg className="absolute -left-[2%] -bottom-[0.02em] w-[104%] h-[0.26em] overflow-visible" viewBox="0 0 100 16" preserveAspectRatio="none" aria-hidden="true">
//                   <path d="M3 11 C 28 3, 64 2, 97 8" fill="none" stroke="#0A7CFF" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="120" style={{ strokeDashoffset: 0 }} />
//                 </svg>
//               </span>
//             </h1>
//             <p className="max-w-[560px] text-[17px] leading-[1.55] text-[#56627A]">
//               Benefit of the society where we operate. A success website obviously needs great.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-8 items-start">

//             {/* LEFT (MAP) */}
//             <div className="flex flex-col gap-4 min-w-0">

//               <div className="relative grid grid-cols-5 gap-1.5 p-1.5 bg-white border border-[#E3E8F1] rounded-[18px] shadow-sm" role="tablist">
//                 <span ref={tabIndRef} className="absolute top-1.5 bottom-1.5 left-0 rounded-[13px] bg-[#0062D6] shadow-[0_10px_22px_-8px_rgba(0,98,214,0.6)] transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.22,0.8,0.18,1)] opacity-0" aria-hidden="true" />
//                 {OFFICES.map((o, i) => {
//                   const isActive = i === active && !overview;
//                   return (
//                     <button
//                       key={o.code}
//                       ref={(el) => (tabButtonsRef.current[i] = el)}
//                       type="button"
//                       role="tab"
//                       aria-selected={isActive}
//                       tabIndex={i === active ? 0 : -1}
//                       onClick={() => { setActive(i); setOverview(false); }}
//                       onKeyDown={(e) => {
//                         if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
//                           e.preventDefault();
//                           const n = (i + (e.key === "ArrowRight" ? 1 : -1) + OFFICES.length) % OFFICES.length;
//                           setActive(n); setOverview(false);
//                           tabButtonsRef.current[n]?.focus();
//                         }
//                       }}
//                       className={`relative z-10 flex items-center gap-2.5 min-h-[58px] px-3 rounded-[13px] text-left transition-colors duration-500 ${isActive ? "text-white" : "text-[#0B1220]"}`}
//                     >
//                       <span className={`flex-none w-8 h-8 rounded-[10px] grid place-items-center text-xs font-semibold transition-all duration-500 ${isActive ? "bg-white/20 text-white" : "bg-[#EEF2F8] text-[#3C4A63]"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                         {o.num}
//                       </span>
//                       <span className="flex flex-col min-w-0">
//                         <span className="text-[14.5px] font-bold whitespace-nowrap">{o.city}</span>
//                         <span className={`text-[11.5px] font-medium transition-colors duration-500 ${isActive ? "text-white/80" : "text-[#56627A]"}`}>{o.country}</span>
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>

//               <div ref={mapWrapRef} className="relative" style={{ perspective: "1400px" }}>
//                 <div
//                   ref={mapRef}
//                   className="relative h-[640px] rounded-[24px] overflow-hidden bg-[#07152A] shadow-[0_34px_70px_-28px_rgba(7,21,42,0.65)]"
//                   style={{
//                     clipPath: "inset(0 0 100% 0 round 24px)",
//                     animation: "wipe 1.2s cubic-bezier(0.7,0,0.2,1) 0.6s forwards",
//                     transformStyle: "preserve-3d",
//                     transition: "transform 0.5s cubic-bezier(0.22,0.8,0.18,1)",
//                   }}
//                 >
//                   <svg viewBox="0 0 800 632" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full block">
//                     <defs>
//                       <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.05" fill="#28507E" /></pattern>
//                       <pattern id="dotsHi" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.25" fill="#4C8BD6" /></pattern>
//                       <radialGradient id="glow"><stop offset="0" stopColor="#2F8CFF" stopOpacity="0.55" /><stop offset="1" stopColor="#2F8CFF" stopOpacity="0" /></radialGradient>
//                       <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5AB0FF" stopOpacity="0" /><stop offset="1" stopColor="#5AB0FF" stopOpacity="0.38" /></linearGradient>
//                       <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#7CC0FF" stopOpacity="0.9" /><stop offset="1" stopColor="#7CC0FF" stopOpacity="0" /></linearGradient>
//                       <path id="landPath" d={LAND_PATH} />
//                     </defs>
//                     <rect x="-2000" y="-2000" width="5000" height="5000" fill="#07152A" />
//                     <g ref={camRef} style={{ transformOrigin: "0 0", transition: "transform 1.4s cubic-bezier(0.65,0,0.2,1)" }}>
//                       <g fill="none" stroke="#7FA8DC" strokeOpacity="0.08" vectorEffect="non-scaling-stroke">
//                         {[-120,-60,0,60,120,180,240,300,360,420,480,540,600,660,720,780,840,900].map((x) => (<path key={"v" + x} d={`M${x} -200V900`} />))}
//                         {[696,636,576,516,456,396,336,276,216,156,96,36,-24,-84].map((y) => (<path key={"h" + y} d={`M-200 ${y}H1400`} />))}
//                       </g>
//                       <use href="#landPath" fill="#0D213A" />
//                       <use href="#landPath" fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_2} fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_3} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_4} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
//                       <g>
//                         <text className="land-label" x="582" y="186">INDIA</text>
//                         <text className="land-label sea" x="402" y="276">ARABIAN SEA</text>
//                         <text className="land-label sea" x="696" y="270">BAY OF BENGAL</text>
//                         <text className="land-label sea" x="504" y="440">INDIAN OCEAN</text>
//                         <text className="land-label" x="330" y="212">OMAN</text>
//                         <text className="land-label" x="180" y="190">SAUDI ARABIA</text>
//                         <text className="land-label" x="452" y="110">PAKISTAN</text>
//                         <text className="land-label" x="330" y="84">IRAN</text>
//                         <text className="land-label" x="420" y="48">AFGHANISTAN</text>
//                         <text className="land-label" x="648" y="104">NEPAL</text>
//                         <text className="land-label" x="204" y="262">YEMEN</text>
//                         <text className="land-label" x="612" y="398">SRI LANKA</text>
//                       </g>
//                       <g ref={routesRef} />
//                       <g ref={pinsRef} />
//                     </g>
//                   </svg>

//                   <div className="absolute left-0 right-0 h-[120px] -top-[120px] pointer-events-none bg-gradient-to-b from-transparent via-[rgba(90,176,255,0.10)] to-transparent" style={{ animation: "scan 1.6s ease-in-out 1.3s 1 forwards" }} aria-hidden="true" />
//                   <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 70% at 60% 42%,rgba(7,21,42,0) 55%,rgba(3,10,22,0.62) 100%)" }} aria-hidden="true" />

//                   <div className="absolute top-5 left-5 flex flex-col px-3.5 py-2.5 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[11.5px] leading-[1.7] text-[#C4D6EE]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                     <span className="flex items-center gap-2 tracking-[0.06em]">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#3FD68F] animate-pulse" />
//                       <span>{hudVerb}</span>{" "}
//                       <span className="inline-flex gap-px">
//                         {[...(flapText || "")].map((ch, i) => (
//                           <span key={i} className={`inline-block min-w-[0.72em] text-center px-px rounded-sm font-semibold ${ch === " " ? "bg-transparent" : "bg-white/[0.07] text-[#E8F1FC]"}`}>{ch}</span>
//                         ))}
//                       </span>
//                     </span>
//                     <span className="text-[#7F9CC2]">{hudCoords}</span>
//                   </div>

//                   <button
//                     type="button"
//                     className="absolute top-5 right-5 h-11 px-4 flex items-center gap-2 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[#E3EDFA] text-[13px] font-semibold hover:bg-[rgba(20,44,74,0.92)] hover:border-[rgba(120,170,230,0.45)] transition-colors"
//                     aria-pressed={overview}
//                     onClick={() => setOverview((v) => !v)}
//                   >
//                     <svg className={`transition-transform duration-500 ${overview ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M12 3l9 5-9 5-9-5 9-5z" />
//                       <path d="M3 13l9 5 9-5" />
//                     </svg>
//                     <span>{overview ? "Focus office" : "All offices"}</span>
//                   </button>

//                   <div className="absolute right-5 bottom-5 flex flex-col items-end gap-1.5 text-[10.5px] text-[#8FA9CC] pointer-events-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                     <span>200 km</span>
//                     <b id="scaleBar" className="block h-1.5 border-[1.5px] border-[#8FA9CC] border-t-0 transition-[width] duration-[1.4s] [transition-timing-function:cubic-bezier(0.65,0,0.2,1)]" />
//                     <span className="text-[#6A86AD]">Illustrative map</span>
//                   </div>

//                   {!overview && (
//                     <article key={active} className="absolute left-5 bottom-5 w-[392px] grid grid-cols-[minmax(0,1fr)_104px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] text-[#0B1220]" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
//                       <div className="p-[20px_18px_18px_20px] flex flex-col gap-3 min-w-0">
//                         <div className="flex items-center justify-between gap-2">
//                           <span className="whitespace-nowrap text-[11.5px] font-semibold text-[#0062D6] tracking-[0.06em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                             {currentOffice.num}/05 · {currentOffice.country.toUpperCase()}
//                           </span>
//                           <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${isOpen ? "bg-[#ECFDF3] text-[#067647]" : "bg-[#FFF4E5] text-[#93370D]"}`}>
//                             <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-[#12B76A]" : "bg-[#F79009]"}`} />
//                             <span>{isOpen ? "Open now" : "Closed"}</span>
//                           </span>
//                         </div>
//                         <h2 className="m-0 text-3xl leading-none font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{currentOffice.city}</h2>
//                         <p className="m-0 text-[13.5px] leading-[1.5] text-[#56627A]">{currentOffice.address}</p>
//                         <div className="flex gap-2 mt-0.5">
//                           <a className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl bg-[#0062D6] text-white text-[13.5px] font-semibold no-underline hover:bg-[#004FAD] hover:-translate-y-px transition-all [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5" href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(currentOffice.address)} target="_blank" rel="noopener noreferrer">
//                             <svg className="transition-transform duration-300" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
//                             Get directions
//                           </a>
//                           <button type="button" onClick={handleCopy} className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors">
//                             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg>
//                             <span>{copied ? "Copied" : "Copy"}</span>
//                           </button>
//                         </div>
//                       </div>
//                       <div className="relative border-l-2 border-dashed border-[#D5DDEA] py-[18px] px-2.5 flex flex-col items-center justify-between gap-2.5 bg-[#F7F9FD] rounded-r-[20px]">
//                         <div className="absolute -left-[11px] -top-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
//                         <div className="absolute -left-[11px] -bottom-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
//                         <div className="text-3xl font-extrabold leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
//                           {currentOffice.code}
//                           <small className="block mt-1 text-[9.5px] font-medium tracking-[0.12em] text-[#56627A] text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OFFICE</small>
//                         </div>
//                         <svg className="w-[62px] h-[62px]" viewBox="0 0 62 62">
//                           <circle cx="31" cy="31" r="29" fill="#fff" stroke="#DCE3EE" strokeWidth="2" />
//                           <g stroke="#B7C3D6" strokeWidth="2" strokeLinecap="round"><path d="M31 6v4M31 52v4M6 31h4M52 31h4" /></g>
//                           <line id="hH" x1="31" y1="31" x2="31" y2="17" stroke="#0B1220" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
//                           <line id="hM" x1="31" y1="31" x2="31" y2="11" stroke="#0B1220" strokeWidth="2.2" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
//                           <line id="hS" x1="31" y1="35" x2="31" y2="9" stroke="#0A7CFF" strokeWidth="1.4" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.25s cubic-bezier(0.4,2.4,0.5,1)" }} />
//                           <circle cx="31" cy="31" r="2.6" fill="#0A7CFF" />
//                         </svg>
//                         <div className="text-[12.5px] font-semibold text-center leading-[1.3] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                           <span>{clockText}</span>
//                           <small className="block text-[9.5px] font-medium text-[#56627A] tracking-[0.08em]">{currentOffice.tzs} · {currentOffice.tz === "Asia/Dubai" ? "GMT+4" : "GMT+5:30"}</small>
//                         </div>
//                       </div>
//                     </article>
//                   )}

//                   {overview && (
//                     <article className="absolute left-5 bottom-5 w-[392px] p-[18px_12px_12px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] flex flex-col gap-1" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
//                       <header className="flex justify-between items-baseline px-2 pb-1.5">
//                         <h2 className="m-0 text-[22px] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>5 offices, 2 countries</h2>
//                         <span className="text-[11.5px] text-[#56627A]">Local time</span>
//                       </header>
//                       <div>
//                         {overviewRows.map((row) => (
//                           <button key={row.i} type="button" className="w-full flex items-center gap-3 h-11 px-2 border-0 rounded-[10px] bg-transparent text-left hover:bg-[#F1F5FC] transition-colors" onClick={() => { setActive(row.i); setOverview(false); }}>
//                             <span className="text-[11.5px] font-semibold text-[#0062D6]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.o.num}</span>
//                             <span className="flex-1 text-sm font-semibold">{row.o.city} <span className="font-medium text-[#56627A]">· {row.o.country}</span></span>
//                             <i className="w-[7px] h-[7px] rounded-full" style={{ background: row.open ? "#12B76A" : "#F79009" }} />
//                             <span className="text-[13px] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.hm} {row.o.tzs}</span>
//                           </button>
//                         ))}
//                       </div>
//                     </article>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT (FORM) */}
//             <aside
//               className="relative rounded-[24px] bg-white border border-[#E6EBF3] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_28px_56px_-18px_rgba(16,24,40,0.16)] p-8 min-h-[712px] flex flex-col overflow-hidden"
//               onMouseMove={handleFormMove}
//               style={{
//                 animation: "rise 0.9s cubic-bezier(0.22,0.8,0.18,1) 0.7s both",
//                 backgroundImage: "radial-gradient(420px circle at var(--mx,50%) var(--my,-20%), rgba(10,124,255,0.07), transparent 60%)",
//               }}
//             >
//               <div className="relative">
//                 <div className="mb-[22px]">
//                   <h2 id="form-title" className="m-0 mb-1 text-[28px] leading-[1.15] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Send us a message</h2>
//                   <p className="m-0 text-sm text-[#56627A]">We'll get back to you as soon as possible.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} noValidate className={`flex-col gap-4 ${isSuccess ? "hidden" : "flex"}`}>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <div className={`fl relative ${errors.name ? "invalid" : ""}`}>
//                       <input id="fName" type="text" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} name="name"
//                         className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.name ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
//                       <label htmlFor="fName" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Name</label>
//                     </div>
//                     <div className={`fl relative ${emailValid ? "valid" : ""} ${errors.email ? "invalid" : ""}`}>
//                       <input id="fEmail" type="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={(e) => { handleChange(e); setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.target.value.trim())); }} name="email"
//                         className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.email ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
//                       <label htmlFor="fEmail" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Email</label>
//                       <svg className={`absolute right-3 top-[19px] transition-all ${emailValid ? "opacity-100 scale-100" : "opacity-0 scale-[0.3] -rotate-30"}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
//                     </div>
//                   </div>

//                   <div className="flex items-stretch h-[54px] border-[1.5px] border-[#E1E7F0] rounded-xl bg-[#F6F8FC] hover:border-[#C5D0E0] focus-within:border-[#0A7CFF] focus-within:bg-white focus-within:ring-4 focus-within:ring-[rgba(10,124,255,0.14)] transition-all">
//                     <select aria-label="Country code" defaultValue="+91" className="border-0 bg-transparent pl-3.5 pr-1 text-[13.5px] font-semibold cursor-pointer outline-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                       <option value="+91">IN +91</option>
//                       <option value="+971">AE +971</option>
//                     </select>
//                     <span className="w-px mx-1 my-3.5 bg-[#DCE3EE]" />
//                     <div className="fl relative flex-1">
//                       <input id="fPhone" type="tel" autoComplete="tel-national" placeholder="98765 43210" value={formData.phone} onChange={handleChange} name="phone" maxLength={10} className="w-full h-full border-0 bg-transparent outline-none text-[14.5px] px-3 pt-[22px] pb-1.5" />
//                       <label htmlFor="fPhone" className="absolute left-3 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Phone (optional)</label>
//                     </div>
//                   </div>

//                   <fieldset className="m-0 p-0 border-0">
//                     <legend className="block mb-2.5 text-[13px] font-semibold text-[#2A3650]">What can we help with?</legend>
//                     <div className="flex flex-wrap gap-2">
//                       {SERVICES.map((s) => {
//                         const isOn = chips.includes(s);
//                         return (
//                           <button key={s} type="button" aria-pressed={isOn} onClick={() => setChips((prev) => prev.includes(s) ? prev.filter((c) => c !== s) : [...prev, s])}
//                             className={`h-9 px-3.5 inline-flex items-center rounded-full border-[1.5px] text-[13px] font-semibold transition-all active:scale-95 ${isOn ? "bg-[#0062D6] border-[#0062D6] text-white gap-1.5" : "bg-white border-[#DCE3EE] text-[#2A3650] hover:border-[#0A7CFF]"}`}>
//                             <svg className={`transition-all duration-200 ${isOn ? "w-3.5" : "w-0"}`} height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
//                             <span>{s}</span>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </fieldset>

//                   <div className="fl relative">
//                     <textarea id="fMsg" maxLength={500} placeholder="A few lines about your project, timeline or budget…" value={formData.message} onChange={handleChange} name="message"
//                       className="w-full h-28 pt-[26px] pb-1.5 px-3.5 rounded-xl border-[1.5px] border-[#E1E7F0] bg-[#F6F8FC] text-[14.5px] outline-none resize-none leading-[1.5] block hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)] transition-all" />
//                     <label htmlFor="fMsg" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Message</label>
//                     <span className="absolute right-3 bottom-2.5 text-[11px] text-[#6B778C]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{formData.message.length}/500</span>
//                   </div>

//                   <div className="mt-auto flex flex-col gap-3 pt-1">
//                     {errors.message && (<p className="m-0 text-[13px] font-medium text-[#B42318]" role="alert">{errors.message}</p>)}
//                     <p className="m-0 flex items-center gap-2 text-[13px] text-[#56627A]">
//                       <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
//                       <span>Flying to our <strong className="text-[#0B1220]">{currentOffice.city}</strong> team</span>
//                     </p>
//                     <button type="submit" disabled={isLoading}
//                       className={`relative h-14 flex items-center justify-center gap-2.5 border-0 rounded-[14px] bg-[#0062D6] text-white text-[15.5px] font-bold shadow-[0_12px_26px_-10px_rgba(0,98,214,0.6)] overflow-hidden group/send hover:bg-[#0058C2] hover:shadow-[0_18px_34px_-12px_rgba(0,98,214,0.7)] transition-all ${isLoading ? "opacity-70 cursor-wait" : ""}`}>
//                       <span className="relative z-10">{isLoading ? "Taking off…" : "Send message"}</span>
//                       <svg className="relative z-10 transition-transform group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5 group-hover/send:-rotate-8" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
//                       <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent -translate-x-full group-hover/send:translate-x-full transition-transform duration-700 pointer-events-none" />
//                     </button>
//                     <div className="flex justify-center gap-4.5 text-xs font-medium text-[#56627A]">
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /></svg>
//                         Secure
//                       </span>
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
//                         Encrypted
//                       </span>
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18" /><path d="M10.6 5.1A10 10 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.4 3.5M6.5 6.6C4.4 8 2.9 10 2 12c1 2.5 5 7 10 7 1.7 0 3.3-.5 4.6-1.3" /></svg>
//                         Private
//                       </span>
//                     </div>
//                   </div>
//                 </form>

//                 {isSuccess && (
//                   <div className="flex-1 flex flex-col items-center justify-center text-center gap-4.5" aria-live="polite">
//                     <div className="w-[92px] h-[92px] rounded-full bg-[#E6F0FF] grid place-items-center" style={{ animation: "pop 0.6s cubic-bezier(0.3,1.4,0.5,1) both" }}>
//                       <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M5 12.5l4.5 4.5L19 7.5" strokeDasharray="24" strokeDashoffset="24" style={{ animation: "draw 0.5s ease 0.35s forwards" }} />
//                       </svg>
//                     </div>
//                     <h2 className="m-0 text-3xl font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.3s both" }}>
//                       Landed in {currentOffice.city}
//                     </h2>
//                     <p className="m-0 max-w-[300px] text-[14.5px] leading-[1.55] text-[#56627A]" style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.42s both" }}>
//                       Thanks, {formData.name?.split(" ")[0] || "there"}. Our {currentOffice.city} team will reply as soon as possible.
//                     </p>
//                     <button type="button" className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors" onClick={() => setIsSuccess(false)} style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.54s both" }}>
//                       Send another message
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactUs;




// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { supabase } from "../lib/supabaseClient";

// // ============================================
// // DATA & HELPERS
// // ============================================
// const OFFICES = [
//   { code: "BLR", num: "01", city: "Bengaluru",   country: "India", lat: 12.9166, lon: 77.6101, tz: "Asia/Kolkata", tzs: "IST", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
//   { code: "NMB", num: "02", city: "Navi Mumbai", country: "India", lat: 19.0330, lon: 73.0297, tz: "Asia/Kolkata", tzs: "IST", address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703" },
//   { code: "NOI", num: "03", city: "Noida",       country: "India", lat: 28.5355, lon: 77.3910, tz: "Asia/Kolkata", tzs: "IST", address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309" },
//   { code: "HYD", num: "04", city: "Hyderabad",   country: "India", lat: 17.3850, lon: 78.4867, tz: "Asia/Kolkata", tzs: "IST", address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081" },
//   { code: "DXB", num: "05", city: "Dubai",       country: "UAE",   lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai",   tzs: "GST", address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates" },
// ];
// const HOURS = { open: 9 * 60, close: 18 * 60 };
// const SERVICES = ["Web design", "Development", "Branding", "SEO & growth", "Something else"];
// const ZOOM = 2.2;

// const proj = (o) => ({ x: (o.lon - 30) * 12, y: (38 - o.lat) * 12 });
// const hav = (p, q) => {
//   const R = 6371, r = Math.PI / 180;
//   const dLat = (q.lat - p.lat) * r, dLon = (q.lon - p.lon) * r;
//   const h = Math.sin(dLat / 2) ** 2 + Math.cos(p.lat * r) * Math.cos(q.lat * r) * Math.sin(dLon / 2) ** 2;
//   return 2 * R * Math.asin(Math.sqrt(h));
// };

// const LAND_PATH = "M-240 -144 L-240 756 L72 756 L126 576 L111.6 540 L120 492 L144 468 L180 438 L210 408 L234 378 L252 331.2 L254.4 314.4 L204 322.8 L174 331.2 L159.6 314.4 L150 304.8 L138 294 L114 270 L102 240 L86.4 204 L66 168 L48 126 L31.2 97.2 L27.6 81.6 L0 79.2 L-60 74.4 L-120 81.6 L-132 92.4 L-180 72 L-240 54 L-240 12 L-120 12 L-96 18 L-48 0 L-42 -24 L-24 -36 L72 -36 L78 14.4 L72 21.6 L70.8 33.6 L66 50.4 L58.8 66 L51.6 80.4 L45.6 99.6 L51.6 122.4 L60 102 L72 126 L96 168 L109.2 196.8 L138 234 L152.4 270 L160.8 303.6 L180 302.4 L228 284.4 L266.4 268.8 L300 252 L320.4 240 L333.6 228 L345.6 211.2 L357.6 186 L343.2 172.8 L324 169.2 L316.8 158.4 L315.6 140.4 L306 150 L288 166.8 L270 165.6 L259.2 165.6 L255.6 142.8 L249.6 151.2 L242.4 141.6 L235.2 132 L222 120 L216 97.2 L234 96 L246 105.6 L258 121.2 L282 134.4 L300 136.8 L314.4 130.8 L327.6 146.4 L348 151.2 L378 153.6 L408 152.4 L438 151.2 L447.6 158.4 L458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L726 189.6 L741.6 187.2 L747.6 204 L756 222 L771.6 240 L770.4 264 L783.6 266.4 L811.2 258 L812.4 276 L822 300 L824.4 336 L819.6 360 L828 366 L960 366 L960 -144 Z";
// const LAND_PATH_2 = "M598.8 338.4 L609.6 344.4 L622.8 366 L619.2 380.4 L607.2 385.2 L600 376.8 L596.4 357.6 Z";
// const LAND_PATH_3 = "M458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L705.6 186 L703.2 164.4 L696 152.4 L717.6 144 L744 153.6 L747.6 168 L738 177.6 L751.2 177.6 L759.6 168 L774 150 L783.6 135.6 L804 122.4 L792 108 L768 110.4 L744 122.4 L716.4 117.6 L706.8 128.4 L698.4 121.2 L696 138 L672 127.2 L648 126 L618 111.6 L603.6 96 L588 84 L585.6 66 L594 48 L573.6 30 L552 26.4 L534 36 L525.6 44.4 L534 62.4 L540 69.6 L535.2 84 L526.8 96 L504 120 L489.6 122.4 L475.2 138 L486 150 L474 164.4 Z";
// const LAND_PATH_4 = "M259.2 165.6 L270 165.6 L288 166.8 L306 150 L315.6 140.4 L316.8 158.4 L309.6 165.6 L302.4 183.6 L264 180 Z";

// // ============================================
// // MAIN COMPONENT
// // ============================================
// const ContactUs = () => {
//   const [active, setActive] = useState(0);
//   const [overview, setOverview] = useState(false);
//   const [scale, setScale] = useState(1);
//   const [flapText, setFlapText] = useState("5 OFFICES");
//   const [hudVerb, setHudVerb] = useState("NETWORK");
//   const [hudCoords, setHudCoords] = useState("—");
//   const [clockText, setClockText] = useState("--:--:--");
//   const [isOpen, setIsOpen] = useState(true);
//   const [overviewRows, setOverviewRows] = useState([]);
//   const [copied, setCopied] = useState(false);

//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chips, setChips] = useState([]);
//   const [emailValid, setEmailValid] = useState(false);

//   const camRef = useRef(null);
//   const mapRef = useRef(null);
//   const mapWrapRef = useRef(null);
//   const tabIndRef = useRef(null);
//   const tabButtonsRef = useRef([]);
//   const pinsRef = useRef(null);
//   const routesRef = useRef(null);
//   const prevSecRef = useRef(-1);
//   const secTurnsRef = useRef(0);

//   const currentOffice = OFFICES[active];
//   const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   // ============================================
//   // ✅ FIX: Sync chips → formData.service
//   // ============================================
//   useEffect(() => {
//     setFormData((prev) => ({ ...prev, service: chips.join(", ") }));
//     if (chips.length > 0 && errors.service) {
//       setErrors((prev) => ({ ...prev, service: "" }));
//     }
//   }, [chips]);

//   // TITLE SPLIT
//   useEffect(() => {
//     let d = 0.12;
//     document.querySelectorAll("[data-split]").forEach((w) => {
//       const textNode = w.firstChild;
//       if (!textNode || textNode.nodeType !== 3) return;
//       const text = textNode.textContent;
//       const rest = [...w.childNodes].slice(1);
//       w.textContent = "";
//       [...text].forEach((c) => {
//         const s = document.createElement("span");
//         s.className = "ch";
//         s.textContent = c;
//         s.style.animationDelay = d.toFixed(2) + "s";
//         d += 0.045;
//         s.setAttribute("aria-hidden", "true");
//         w.appendChild(s);
//       });
//       rest.forEach((n) => w.appendChild(n));
//       d += 0.08;
//     });
//   }, []);

//   // CLOCK
//   const tInfo = useCallback((o) => {
//     const d = new Date();
//     const p = new Intl.DateTimeFormat("en-US", {
//       timeZone: o.tz, weekday: "short", hour: "2-digit",
//       minute: "2-digit", second: "2-digit", hour12: false,
//     }).formatToParts(d);
//     const g = (t) => (p.find((x) => x.type === t) || {}).value;
//     const h = parseInt(g("hour"), 10) % 24;
//     const m = parseInt(g("minute"), 10);
//     const s = parseInt(g("second"), 10);
//     const mins = h * 60 + m;
//     const open = !["Sat", "Sun"].includes(g("weekday")) && mins >= HOURS.open && mins < HOURS.close;
//     const pad = (n) => String(n).padStart(2, "0");
//     return { h, m, s, open, text: `${pad(h)}:${pad(m)}:${pad(s)}`, hm: `${pad(h)}:${pad(m)}` };
//   }, []);

//   useEffect(() => {
//     const tick = () => {
//       const o = OFFICES[active];
//       const t = tInfo(o);
//       setClockText(t.text);
//       setIsOpen(t.open);
//       if (prevSecRef.current !== -1 && t.s < prevSecRef.current) secTurnsRef.current++;
//       prevSecRef.current = t.s;
//       const hS = document.getElementById("hS");
//       const hM = document.getElementById("hM");
//       const hH = document.getElementById("hH");
//       if (hS) hS.style.transform = `rotate(${secTurnsRef.current * 360 + t.s * 6}deg)`;
//       if (hM) hM.style.transform = `rotate(${t.m * 6 + t.s * 0.1}deg)`;
//       if (hH) hH.style.transform = `rotate(${(t.h % 12) * 30 + t.m * 0.5}deg)`;

//       if (overview) {
//         setOverviewRows(OFFICES.map((o, i) => {
//           const ti = tInfo(o);
//           return { i, o, open: ti.open, hm: ti.hm };
//         }));
//       }
//     };
//     tick();
//     const interval = setInterval(tick, 1000);
//     return () => clearInterval(interval);
//   }, [active, overview, tInfo]);

//   // CAMERA
//   const camera = useCallback(() => {
//     if (!camRef.current || !mapRef.current || !pinsRef.current) return;
//     const narrow = window.innerWidth <= 720;
//     const a = proj(OFFICES[active]);
//     let S, tx, ty;
//     if (overview) {
//       S = narrow ? 1.15 : 1.3;
//       const cx = 442, cy = 207;
//       const tgt = narrow ? [400, 316] : [420, 290];
//       tx = tgt[0] - S * cx;
//       ty = tgt[1] - S * cy;
//     } else {
//       S = ZOOM;
//       const tgt = narrow ? [400, 300] : [500, 250];
//       tx = tgt[0] - S * a.x;
//       ty = tgt[1] - S * a.y;
//     }
//     setScale(S);
//     camRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${S})`;
//     pinsRef.current.querySelectorAll(".pin .inner").forEach((el) => (el.style.transform = `scale(${1 / S})`));
//     const scaleBar = document.getElementById("scaleBar");
//     if (scaleBar && mapRef.current) {
//       const r = Math.max(mapRef.current.clientWidth / 800, mapRef.current.clientHeight / 632);
//       scaleBar.style.width = (21.6 * S * r).toFixed(1) + "px";
//     }
//   }, [active, overview]);

//   // ROUTES
//   const buildRoutes = useCallback(() => {
//     if (!routesRef.current) return;
//     const NS = "http://www.w3.org/2000/svg";
//     const svgEl = (tag, attrs = {}) => {
//       const e = document.createElementNS(NS, tag);
//       for (const k in attrs) e.setAttribute(k, attrs[k]);
//       return e;
//     };
//     routesRef.current.innerHTML = "";
//     const S = scale || 1;
//     const a = OFFICES[active];
//     const ap = proj(a);
//     let n = 0;
//     OFFICES.forEach((o, i) => {
//       if (i === active) return;
//       const b = proj(o);
//       const mx = (ap.x + b.x) / 2, my = (ap.y + b.y) / 2;
//       const dx = b.x - ap.x, dy = b.y - ap.y, k = 0.22;
//       let cx = mx - dy * k, cy = my + dx * k;
//       if (cy > my) { cx = mx + dy * k; cy = my - dx * k; }
//       const dStr = `M${ap.x.toFixed(1)} ${ap.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
//       const id = "rt" + i;
//       const delay = 0.9 + n * 0.14;
//       const base = svgEl("path", { id, d: dStr, fill: "none", stroke: "#4FA3FF", "stroke-opacity": "0.35", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3) });
//       const flow = svgEl("path", { d: dStr, fill: "none", stroke: "#8CC4FF", "stroke-opacity": "0.9", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3), "stroke-dasharray": `${(3 / S).toFixed(2)} ${(5 / S).toFixed(2)}`, opacity: "0" });
//       routesRef.current.append(base, flow);
//       const len = base.getTotalLength();
//       base.style.strokeDasharray = len;
//       base.style.strokeDashoffset = len;
//       base.getBoundingClientRect();
//       base.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.6,0,.2,1) ${delay}s`;
//       requestAnimationFrame(() => { base.style.strokeDashoffset = 0; });
//       setTimeout(() => {
//         flow.style.opacity = "1";
//         flow.style.animation = "flow 1.2s linear infinite";
//       }, (delay + 1) * 1000);

//       if (!reduce) {
//         const km0 = hav(a, o);
//         const trav = svgEl("circle", { r: (2.8 / S).toFixed(2), fill: "#D6EBFF", opacity: "0" });
//         const mot = svgEl("animateMotion", { dur: (2.2 + km0 / 1400).toFixed(2) + "s", repeatCount: "indefinite", rotate: "auto" });
//         const mp = svgEl("mpath");
//         mp.setAttribute("href", "#" + id);
//         mp.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + id);
//         mot.appendChild(mp);
//         trav.appendChild(mot);
//         routesRef.current.appendChild(trav);
//         setTimeout(() => trav.setAttribute("opacity", "1"), (delay + 1) * 1000);
//       }

//       const lx = 0.25 * ap.x + 0.5 * cx + 0.25 * b.x;
//       const ly = 0.25 * ap.y + 0.5 * cy + 0.25 * b.y;
//       const km = Math.round(hav(a, o) / 10) * 10;
//       const lg = svgEl("g", { transform: `translate(${lx.toFixed(1)} ${ly.toFixed(1)}) scale(${(1 / S).toFixed(4)})`, opacity: "0" });
//       lg.style.transition = "opacity .5s";
//       lg.innerHTML = `<rect x="-34" y="-10" width="68" height="20" rx="10" fill="#0B1B30" stroke="#2A5283"/><text y="3.5" fill="#A9C6EA" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">~${km.toLocaleString("en-IN")} km</text>`;
//       routesRef.current.appendChild(lg);
//       setTimeout(() => (lg.style.opacity = "1"), (delay + 0.9) * 1000);
//       n++;
//     });
//   }, [active, scale, reduce]);

//   // PINS
//   const renderPins = useCallback(() => {
//     if (!pinsRef.current) return;
//     const NS = "http://www.w3.org/2000/svg";
//     pinsRef.current.innerHTML = "";
//     OFFICES.forEach((o, i) => {
//       const p = proj(o);
//       const lw = Math.round(o.city.length * 7.1 + 26);
//       const lx = o.code === "NMB" ? -(lw + 14) : 14;
//       const isAct = i === active && !overview;
//       const g = document.createElementNS(NS, "g");
//       g.setAttribute("class", "pin" + (isAct ? " active" : ""));
//       g.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
//       g.setAttribute("tabindex", "0");
//       g.setAttribute("role", "button");
//       g.setAttribute("aria-label", `${o.city} office`);
//       g.style.cursor = "pointer";
//       g.innerHTML = `<g class="inner" style="transition:transform 1.4s cubic-bezier(0.65,0,0.2,1)">
//         <g class="fx" style="opacity:${isAct ? 1 : 0};transition:opacity .6s">
//           <circle r="46" fill="url(#glow)"/>
//           <path d="M0 0 L64 0 A64 64 0 0 0 45.3 -45.3 Z" fill="url(#sweepGrad)" style="transform-origin:0 0;animation:spin 3.6s linear infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) .8s infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) 1.6s infinite"/>
//           <rect x="-1.5" y="-78" width="3" height="78" rx="1.5" fill="url(#beamGrad)" style="transform-box:fill-box;transform-origin:bottom;transform:scaleY(${isAct ? 1 : 0});transition:transform .9s cubic-bezier(.22,.8,.18,1) .5s"/>
//         </g>
//         <circle class="burst" r="10" fill="none" stroke="#fff" stroke-width="2" opacity="0" style="transform-box:fill-box;transform-origin:center"/>
//         <circle class="dot" r="${isAct ? 9 : 6}" fill="${isAct ? '#2F8CFF' : '#8DB8EA'}" stroke="#fff" stroke-width="2.5" style="transition:r .4s,fill .4s"/>
//         <circle r="2.6" fill="#fff"/>
//         <g class="chip" transform="translate(${lx} -12)">
//           <rect width="${lw}" height="24" rx="12" fill="${isAct ? '#0062D6' : 'rgba(7,21,42,0.9)'}" stroke="${isAct ? '#5AA8FF' : '#2A4F7C'}" style="transition:fill .4s,stroke .4s"/>
//           <text x="13" y="16" fill="${isAct ? '#fff' : '#C4D6EE'}" font-family="DM Sans, sans-serif" font-size="12" font-weight="700" style="transition:fill .4s">${o.city}</text>
//         </g>
//       </g>`;
//       g.addEventListener("click", () => { setActive(i); setOverview(false); });
//       g.addEventListener("keydown", (e) => {
//         if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); setOverview(false); }
//       });
//       pinsRef.current.appendChild(g);
//     });
//   }, [active, overview]);

//   useEffect(() => { renderPins(); }, [active, overview, renderPins]);

//   useEffect(() => {
//     camera();
//     buildRoutes();
//     if (tabButtonsRef.current[active] && tabIndRef.current) {
//       const t = tabButtonsRef.current[active];
//       tabIndRef.current.style.width = t.offsetWidth + "px";
//       tabIndRef.current.style.transform = `translateX(${t.offsetLeft}px)`;
//       tabIndRef.current.style.opacity = overview ? "0" : "1";
//     }
//     if (overview) {
//       setHudVerb("NETWORK");
//       setFlapText("5 OFFICES");
//       setHudCoords(`ZOOM ${scale.toFixed(1)}× · IN + AE · IST / GST`);
//     } else {
//       setHudVerb("CONNECTING");
//       setFlapText(OFFICES[active].city.toUpperCase());
//       setHudCoords(`${OFFICES[active].lat.toFixed(4)}° N · ${OFFICES[active].lon.toFixed(4)}° E · ZOOM ${scale.toFixed(1)}×`);
//     }
//   }, [active, overview, camera, buildRoutes, scale]);

//   useEffect(() => {
//     const onResize = () => { camera(); buildRoutes(); };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [camera, buildRoutes]);

//   useEffect(() => {
//     const wrap = mapWrapRef.current, map = mapRef.current;
//     if (!wrap || !map || reduce || !window.matchMedia("(hover: hover)").matches) return;
//     const onMove = (e) => {
//       const r = map.getBoundingClientRect();
//       const x = (e.clientX - r.left) / r.width - 0.5;
//       const y = (e.clientY - r.top) / r.height - 0.5;
//       map.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
//     };
//     const onLeave = () => (map.style.transform = "");
//     wrap.addEventListener("mousemove", onMove);
//     wrap.addEventListener("mouseleave", onLeave);
//     return () => { wrap.removeEventListener("mousemove", onMove); wrap.removeEventListener("mouseleave", onLeave); };
//   }, [reduce]);

//   useEffect(() => {
//     const t = setTimeout(() => { setActive(0); setOverview(false); }, reduce ? 0 : 2300);
//     return () => clearTimeout(t);
//   }, [reduce]);

//   // FORM
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;
//     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
//     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
//     // ✅ FIX: Check chips array instead of formData.service (for reliability)
//     if (chips.length === 0 && !formData.service) { newErrors.service = "Please select a service."; isValid = false; }
//     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsLoading(true);
//     if (overview) setOverview(false);

//     // ✅ FIX: Combine chips into comma-separated string for database
//     const serviceValue = chips.length > 0 ? chips.join(", ") : formData.service;

//     try {
//       const { error } = await supabase.from("contacts").insert([{
//         name: formData.name.trim(),
//         email: formData.email.trim(),
//         phone: formData.phone,
//         service: serviceValue,       // ← e.g. "Web design, Branding, SEO & growth"
//         message: formData.message.trim(),
//       }]);
//       if (error) throw error;

//       const pin = pinsRef.current?.querySelectorAll(".pin")[active];
//       if (pin) {
//         pin.classList.remove("landed");
//         void pin.getBoundingClientRect();
//         pin.classList.add("landed");
//       }
//       setTimeout(() => {
//         setIsSuccess(true);
//         setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//         setErrors({ name: "", email: "", phone: "", service: "", message: "" });
//         setChips([]);
//       }, 700);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({ ...prev, message: "Failed to send message. Please try again later." }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleFormMove = (e) => {
//     const card = e.currentTarget;
//     const r = card.getBoundingClientRect();
//     card.style.setProperty("--mx", e.clientX - r.left + "px");
//     card.style.setProperty("--my", e.clientY - r.top + "px");
//   };

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(currentOffice.address);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch (err) { /* noop */ }
//   };

//   return (
//     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">

//       {/* INLINE KEYFRAMES */}
//       <style>{`
//         @keyframes chIn { to { opacity: 1; transform: none; } }
//         @keyframes wipe { to { clip-path: inset(0 0 0 0 round 24px); } }
//         @keyframes scan { from { top: -120px; } to { top: 110%; } }
//         @keyframes pulseRing { 0% { transform: scale(.4); opacity: .75; } 100% { transform: scale(3.4); opacity: 0; } }
//         @keyframes burst { 0% { transform: scale(.5); opacity: 1; } 100% { transform: scale(5); opacity: 0; } }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @keyframes flow { to { stroke-dashoffset: -20; } }
//         @keyframes blink { 50% { opacity: .25; } }
//         @keyframes flip { 0% { transform: scaleY(1); } 50% { transform: scaleY(.1); } 100% { transform: scaleY(1); } }
//         @keyframes passIn { from { opacity: 0; transform: translateY(18px) rotate(-1.5deg) scale(.97); } to { opacity: 1; transform: none; } }
//         @keyframes shake { 10%,90% { transform: translateX(-2px); } 20%,80% { transform: translateX(4px); } 30%,50%,70% { transform: translateX(-7px); } 40%,60% { transform: translateX(7px); } }
//         @keyframes pop { 0% { transform: scale(.5); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: none; opacity: 1; } }
//         @keyframes draw { to { stroke-dashoffset: 0; } }
//         @keyframes rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
//         .ch { display: inline-block; opacity: 0; transform: translateY(60%) rotate(8deg); animation: chIn 0.9s cubic-bezier(0.22,0.8,0.18,1) forwards; }
//         .pin.landed .burst { animation: burst 1s ease-out; }
//         .fl input:focus + label, .fl input:not(:placeholder-shown) + label,
//         .fl textarea:focus + label, .fl textarea:not(:placeholder-shown) + label {
//           transform: translateY(-9px) scale(0.78);
//           color: #0062D6;
//           font-weight: 600;
//         }
//         .fl input::placeholder, .fl textarea::placeholder { color: transparent; }
//         .fl input:focus::placeholder, .fl textarea:focus::placeholder { color: #9AA5B8; }
//         .land-label { fill: #6F8FB8; font-family: 'JetBrains Mono', monospace; font-size: 7px; letter-spacing: 2px; text-anchor: middle; }
//         .land-label.sea { fill: #4C6C95; font-style: italic; }
//       `}</style>

//       {/* HERO */}
//       <section className="relative pt-32 pb-32">
//         <div className="relative mx-auto max-w-4xl px-6 text-center">
//           <h1 className="sec-hero-heading text-[#003F7D]">
//             Let's Build Something
//             <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h1>
//           <p className="sec-p sec-text-dark-soft mx-auto max-w-3xl">
//             We're here to answer your questions, discuss your ideas,
//             <br className="hidden md:block" />
//             and start your next big project.
//           </p>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
//         <div className="absolute inset-0 [background-image:radial-gradient(#D8E0EC_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] pointer-events-none" />

//         <div className="relative max-w-[1248px] mx-auto z-10">
//           <div className="flex flex-col items-center text-center gap-4 mb-12">
//             <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F0FF] border border-[#CFE0FF] text-[#0062D6] text-xs font-bold tracking-[0.16em]">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#0A7CFF] animate-pulse" />
//               LET'S TALK
//             </span>
//             <h1
//               className="font-extrabold text-[clamp(48px,7vw,84px)] leading-none tracking-[-0.035em] flex gap-[0.22em]"
//               style={{ fontFamily: "'Bricolage Grotesque', 'DM Sans', system-ui, sans-serif" }}
//               aria-label="Contact Us"
//             >
//               <span className="inline-flex relative pb-[0.12em]" data-split>Contact</span>
//               <span className="inline-flex relative pb-[0.12em] text-[#0A7CFF]" data-split>
//                 Us
//                 <svg className="absolute -left-[2%] -bottom-[0.02em] w-[104%] h-[0.26em] overflow-visible" viewBox="0 0 100 16" preserveAspectRatio="none" aria-hidden="true">
//                   <path d="M3 11 C 28 3, 64 2, 97 8" fill="none" stroke="#0A7CFF" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="120" style={{ strokeDashoffset: 0 }} />
//                 </svg>
//               </span>
//             </h1>
//             <p className="max-w-[560px] text-[17px] leading-[1.55] text-[#56627A]">
//               Benefit of the society where we operate. A success website obviously needs great.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-8 items-start">

//             {/* LEFT (MAP) */}
//             <div className="flex flex-col gap-4 min-w-0">

//               <div className="relative grid grid-cols-5 gap-1.5 p-1.5 bg-white border border-[#E3E8F1] rounded-[18px] shadow-sm" role="tablist">
//                 <span ref={tabIndRef} className="absolute top-1.5 bottom-1.5 left-0 rounded-[13px] bg-[#0062D6] shadow-[0_10px_22px_-8px_rgba(0,98,214,0.6)] transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.22,0.8,0.18,1)] opacity-0" aria-hidden="true" />
//                 {OFFICES.map((o, i) => {
//                   const isActive = i === active && !overview;
//                   return (
//                     <button
//                       key={o.code}
//                       ref={(el) => (tabButtonsRef.current[i] = el)}
//                       type="button"
//                       role="tab"
//                       aria-selected={isActive}
//                       tabIndex={i === active ? 0 : -1}
//                       onClick={() => { setActive(i); setOverview(false); }}
//                       onKeyDown={(e) => {
//                         if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
//                           e.preventDefault();
//                           const n = (i + (e.key === "ArrowRight" ? 1 : -1) + OFFICES.length) % OFFICES.length;
//                           setActive(n); setOverview(false);
//                           tabButtonsRef.current[n]?.focus();
//                         }
//                       }}
//                       className={`relative z-10 flex items-center gap-2.5 min-h-[58px] px-3 rounded-[13px] text-left transition-colors duration-500 ${isActive ? "text-white" : "text-[#0B1220]"}`}
//                     >
//                       <span className={`flex-none w-8 h-8 rounded-[10px] grid place-items-center text-xs font-semibold transition-all duration-500 ${isActive ? "bg-white/20 text-white" : "bg-[#EEF2F8] text-[#3C4A63]"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                         {o.num}
//                       </span>
//                       <span className="flex flex-col min-w-0">
//                         <span className="text-[14.5px] font-bold whitespace-nowrap">{o.city}</span>
//                         <span className={`text-[11.5px] font-medium transition-colors duration-500 ${isActive ? "text-white/80" : "text-[#56627A]"}`}>{o.country}</span>
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>

//               <div ref={mapWrapRef} className="relative" style={{ perspective: "1400px" }}>
//                 <div
//                   ref={mapRef}
//                   className="relative h-[640px] rounded-[24px] overflow-hidden bg-[#07152A] shadow-[0_34px_70px_-28px_rgba(7,21,42,0.65)]"
//                   style={{
//                     clipPath: "inset(0 0 100% 0 round 24px)",
//                     animation: "wipe 1.2s cubic-bezier(0.7,0,0.2,1) 0.6s forwards",
//                     transformStyle: "preserve-3d",
//                     transition: "transform 0.5s cubic-bezier(0.22,0.8,0.18,1)",
//                   }}
//                 >
//                   <svg viewBox="0 0 800 632" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full block">
//                     <defs>
//                       <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.05" fill="#28507E" /></pattern>
//                       <pattern id="dotsHi" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.25" fill="#4C8BD6" /></pattern>
//                       <radialGradient id="glow"><stop offset="0" stopColor="#2F8CFF" stopOpacity="0.55" /><stop offset="1" stopColor="#2F8CFF" stopOpacity="0" /></radialGradient>
//                       <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5AB0FF" stopOpacity="0" /><stop offset="1" stopColor="#5AB0FF" stopOpacity="0.38" /></linearGradient>
//                       <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#7CC0FF" stopOpacity="0.9" /><stop offset="1" stopColor="#7CC0FF" stopOpacity="0" /></linearGradient>
//                       <path id="landPath" d={LAND_PATH} />
//                     </defs>
//                     <rect x="-2000" y="-2000" width="5000" height="5000" fill="#07152A" />
//                     <g ref={camRef} style={{ transformOrigin: "0 0", transition: "transform 1.4s cubic-bezier(0.65,0,0.2,1)" }}>
//                       <g fill="none" stroke="#7FA8DC" strokeOpacity="0.08" vectorEffect="non-scaling-stroke">
//                         {[-120,-60,0,60,120,180,240,300,360,420,480,540,600,660,720,780,840,900].map((x) => (<path key={"v" + x} d={`M${x} -200V900`} />))}
//                         {[696,636,576,516,456,396,336,276,216,156,96,36,-24,-84].map((y) => (<path key={"h" + y} d={`M-200 ${y}H1400`} />))}
//                       </g>
//                       <use href="#landPath" fill="#0D213A" />
//                       <use href="#landPath" fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_2} fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_3} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_4} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
//                       <g>
//                         <text className="land-label" x="582" y="186">INDIA</text>
//                         <text className="land-label sea" x="402" y="276">ARABIAN SEA</text>
//                         <text className="land-label sea" x="696" y="270">BAY OF BENGAL</text>
//                         <text className="land-label sea" x="504" y="440">INDIAN OCEAN</text>
//                         <text className="land-label" x="330" y="212">OMAN</text>
//                         <text className="land-label" x="180" y="190">SAUDI ARABIA</text>
//                         <text className="land-label" x="452" y="110">PAKISTAN</text>
//                         <text className="land-label" x="330" y="84">IRAN</text>
//                         <text className="land-label" x="420" y="48">AFGHANISTAN</text>
//                         <text className="land-label" x="648" y="104">NEPAL</text>
//                         <text className="land-label" x="204" y="262">YEMEN</text>
//                         <text className="land-label" x="612" y="398">SRI LANKA</text>
//                       </g>
//                       <g ref={routesRef} />
//                       <g ref={pinsRef} />
//                     </g>
//                   </svg>

//                   <div className="absolute left-0 right-0 h-[120px] -top-[120px] pointer-events-none bg-gradient-to-b from-transparent via-[rgba(90,176,255,0.10)] to-transparent" style={{ animation: "scan 1.6s ease-in-out 1.3s 1 forwards" }} aria-hidden="true" />
//                   <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 70% at 60% 42%,rgba(7,21,42,0) 55%,rgba(3,10,22,0.62) 100%)" }} aria-hidden="true" />

//                   <div className="absolute top-5 left-5 flex flex-col px-3.5 py-2.5 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[11.5px] leading-[1.7] text-[#C4D6EE]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                     <span className="flex items-center gap-2 tracking-[0.06em]">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#3FD68F] animate-pulse" />
//                       <span>{hudVerb}</span>{" "}
//                       <span className="inline-flex gap-px">
//                         {[...(flapText || "")].map((ch, i) => (
//                           <span key={i} className={`inline-block min-w-[0.72em] text-center px-px rounded-sm font-semibold ${ch === " " ? "bg-transparent" : "bg-white/[0.07] text-[#E8F1FC]"}`}>{ch}</span>
//                         ))}
//                       </span>
//                     </span>
//                     <span className="text-[#7F9CC2]">{hudCoords}</span>
//                   </div>

//                   <button
//                     type="button"
//                     className="absolute top-5 right-5 h-11 px-4 flex items-center gap-2 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[#E3EDFA] text-[13px] font-semibold hover:bg-[rgba(20,44,74,0.92)] hover:border-[rgba(120,170,230,0.45)] transition-colors"
//                     aria-pressed={overview}
//                     onClick={() => setOverview((v) => !v)}
//                   >
//                     <svg className={`transition-transform duration-500 ${overview ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M12 3l9 5-9 5-9-5 9-5z" />
//                       <path d="M3 13l9 5 9-5" />
//                     </svg>
//                     <span>{overview ? "Focus office" : "All offices"}</span>
//                   </button>

//                   <div className="absolute right-5 bottom-5 flex flex-col items-end gap-1.5 text-[10.5px] text-[#8FA9CC] pointer-events-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                     <span>200 km</span>
//                     <b id="scaleBar" className="block h-1.5 border-[1.5px] border-[#8FA9CC] border-t-0 transition-[width] duration-[1.4s] [transition-timing-function:cubic-bezier(0.65,0,0.2,1)]" />
//                     <span className="text-[#6A86AD]">Illustrative map</span>
//                   </div>

//                   {!overview && (
//                     <article key={active} className="absolute left-5 bottom-5 w-[392px] grid grid-cols-[minmax(0,1fr)_104px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] text-[#0B1220]" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
//                       <div className="p-[20px_18px_18px_20px] flex flex-col gap-3 min-w-0">
//                         <div className="flex items-center justify-between gap-2">
//                           <span className="whitespace-nowrap text-[11.5px] font-semibold text-[#0062D6] tracking-[0.06em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                             {currentOffice.num}/05 · {currentOffice.country.toUpperCase()}
//                           </span>
//                           <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${isOpen ? "bg-[#ECFDF3] text-[#067647]" : "bg-[#FFF4E5] text-[#93370D]"}`}>
//                             <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-[#12B76A]" : "bg-[#F79009]"}`} />
//                             <span>{isOpen ? "Open now" : "Closed"}</span>
//                           </span>
//                         </div>
//                         <h2 className="m-0 text-3xl leading-none font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{currentOffice.city}</h2>
//                         <p className="m-0 text-[13.5px] leading-[1.5] text-[#56627A]">{currentOffice.address}</p>
//                         <div className="flex gap-2 mt-0.5">
//                           <a className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl bg-[#0062D6] text-white text-[13.5px] font-semibold no-underline hover:bg-[#004FAD] hover:-translate-y-px transition-all [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5" href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(currentOffice.address)} target="_blank" rel="noopener noreferrer">
//                             <svg className="transition-transform duration-300" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
//                             Get directions
//                           </a>
//                           <button type="button" onClick={handleCopy} className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors">
//                             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg>
//                             <span>{copied ? "Copied" : "Copy"}</span>
//                           </button>
//                         </div>
//                       </div>
//                       <div className="relative border-l-2 border-dashed border-[#D5DDEA] py-[18px] px-2.5 flex flex-col items-center justify-between gap-2.5 bg-[#F7F9FD] rounded-r-[20px]">
//                         <div className="absolute -left-[11px] -top-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
//                         <div className="absolute -left-[11px] -bottom-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
//                         <div className="text-3xl font-extrabold leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
//                           {currentOffice.code}
//                           <small className="block mt-1 text-[9.5px] font-medium tracking-[0.12em] text-[#56627A] text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OFFICE</small>
//                         </div>
//                         <svg className="w-[62px] h-[62px]" viewBox="0 0 62 62">
//                           <circle cx="31" cy="31" r="29" fill="#fff" stroke="#DCE3EE" strokeWidth="2" />
//                           <g stroke="#B7C3D6" strokeWidth="2" strokeLinecap="round"><path d="M31 6v4M31 52v4M6 31h4M52 31h4" /></g>
//                           <line id="hH" x1="31" y1="31" x2="31" y2="17" stroke="#0B1220" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
//                           <line id="hM" x1="31" y1="31" x2="31" y2="11" stroke="#0B1220" strokeWidth="2.2" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
//                           <line id="hS" x1="31" y1="35" x2="31" y2="9" stroke="#0A7CFF" strokeWidth="1.4" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.25s cubic-bezier(0.4,2.4,0.5,1)" }} />
//                           <circle cx="31" cy="31" r="2.6" fill="#0A7CFF" />
//                         </svg>
//                         <div className="text-[12.5px] font-semibold text-center leading-[1.3] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                           <span>{clockText}</span>
//                           <small className="block text-[9.5px] font-medium text-[#56627A] tracking-[0.08em]">{currentOffice.tzs} · {currentOffice.tz === "Asia/Dubai" ? "GMT+4" : "GMT+5:30"}</small>
//                         </div>
//                       </div>
//                     </article>
//                   )}

//                   {overview && (
//                     <article className="absolute left-5 bottom-5 w-[392px] p-[18px_12px_12px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] flex flex-col gap-1" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
//                       <header className="flex justify-between items-baseline px-2 pb-1.5">
//                         <h2 className="m-0 text-[22px] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>5 offices, 2 countries</h2>
//                         <span className="text-[11.5px] text-[#56627A]">Local time</span>
//                       </header>
//                       <div>
//                         {overviewRows.map((row) => (
//                           <button key={row.i} type="button" className="w-full flex items-center gap-3 h-11 px-2 border-0 rounded-[10px] bg-transparent text-left hover:bg-[#F1F5FC] transition-colors" onClick={() => { setActive(row.i); setOverview(false); }}>
//                             <span className="text-[11.5px] font-semibold text-[#0062D6]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.o.num}</span>
//                             <span className="flex-1 text-sm font-semibold">{row.o.city} <span className="font-medium text-[#56627A]">· {row.o.country}</span></span>
//                             <i className="w-[7px] h-[7px] rounded-full" style={{ background: row.open ? "#12B76A" : "#F79009" }} />
//                             <span className="text-[13px] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.hm} {row.o.tzs}</span>
//                           </button>
//                         ))}
//                       </div>
//                     </article>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT (FORM) */}
//             <aside
//               className="relative rounded-[24px] bg-white border border-[#E6EBF3] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_28px_56px_-18px_rgba(16,24,40,0.16)] p-8 min-h-[712px] flex flex-col overflow-hidden"
//               onMouseMove={handleFormMove}
//               style={{
//                 animation: "rise 0.9s cubic-bezier(0.22,0.8,0.18,1) 0.7s both",
//                 backgroundImage: "radial-gradient(420px circle at var(--mx,50%) var(--my,-20%), rgba(10,124,255,0.07), transparent 60%)",
//               }}
//             >
//               <div className="relative">
//                 <div className="mb-[22px]">
//                   <h2 id="form-title" className="m-0 mb-1 text-[28px] leading-[1.15] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Send us a message</h2>
//                   <p className="m-0 text-sm text-[#56627A]">We'll get back to you as soon as possible.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} noValidate className={`flex-col gap-4 ${isSuccess ? "hidden" : "flex"}`}>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <div className={`fl relative ${errors.name ? "invalid" : ""}`}>
//                       <input id="fName" type="text" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} name="name"
//                         className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.name ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
//                       <label htmlFor="fName" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Name</label>
//                     </div>
//                     <div className={`fl relative ${emailValid ? "valid" : ""} ${errors.email ? "invalid" : ""}`}>
//                       <input id="fEmail" type="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={(e) => { handleChange(e); setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.target.value.trim())); }} name="email"
//                         className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.email ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
//                       <label htmlFor="fEmail" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Email</label>
//                       <svg className={`absolute right-3 top-[19px] transition-all ${emailValid ? "opacity-100 scale-100" : "opacity-0 scale-[0.3] -rotate-30"}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
//                     </div>
//                   </div>

//                   <div className="flex items-stretch h-[54px] border-[1.5px] border-[#E1E7F0] rounded-xl bg-[#F6F8FC] hover:border-[#C5D0E0] focus-within:border-[#0A7CFF] focus-within:bg-white focus-within:ring-4 focus-within:ring-[rgba(10,124,255,0.14)] transition-all">
//                     <select aria-label="Country code" defaultValue="+91" className="border-0 bg-transparent pl-3.5 pr-1 text-[13.5px] font-semibold cursor-pointer outline-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                       <option value="+91">IN +91</option>
//                       <option value="+971">AE +971</option>
//                     </select>
//                     <span className="w-px mx-1 my-3.5 bg-[#DCE3EE]" />
//                     <div className="fl relative flex-1">
//                       <input id="fPhone" type="tel" autoComplete="tel-national" placeholder="98765 43210" value={formData.phone} onChange={handleChange} name="phone" maxLength={10} className="w-full h-full border-0 bg-transparent outline-none text-[14.5px] px-3 pt-[22px] pb-1.5" />
//                       <label htmlFor="fPhone" className="absolute left-3 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Phone (optional)</label>
//                     </div>
//                   </div>

//                   <fieldset className="m-0 p-0 border-0">
//                     <legend className="block mb-2.5 text-[13px] font-semibold text-[#2A3650]">What can we help with?</legend>
//                     <div className="flex flex-wrap gap-2">
//                       {SERVICES.map((s) => {
//                         const isOn = chips.includes(s);
//                         return (
//                           <button
//                             key={s}
//                             type="button"
//                             aria-pressed={isOn}
//                             onClick={() =>
//                               setChips((prev) =>
//                                 prev.includes(s) ? prev.filter((c) => c !== s) : [...prev, s]
//                               )
//                             }
//                             className={`h-9 px-3.5 inline-flex items-center rounded-full border-[1.5px] text-[13px] font-semibold transition-all active:scale-95 ${
//                               isOn
//                                 ? "bg-[#0062D6] border-[#0062D6] text-white gap-1.5"
//                                 : "bg-white border-[#DCE3EE] text-[#2A3650] hover:border-[#0A7CFF]"
//                             }`}
//                           >
//                             <svg className={`transition-all duration-200 ${isOn ? "w-3.5" : "w-0"}`} height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
//                             <span>{s}</span>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </fieldset>

//                   <div className="fl relative">
//                     <textarea id="fMsg" maxLength={500} placeholder="A few lines about your project, timeline or budget…" value={formData.message} onChange={handleChange} name="message"
//                       className="w-full h-28 pt-[26px] pb-1.5 px-3.5 rounded-xl border-[1.5px] border-[#E1E7F0] bg-[#F6F8FC] text-[14.5px] outline-none resize-none leading-[1.5] block hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)] transition-all" />
//                     <label htmlFor="fMsg" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Message</label>
//                     <span className="absolute right-3 bottom-2.5 text-[11px] text-[#6B778C]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{formData.message.length}/500</span>
//                   </div>

//                   <div className="mt-auto flex flex-col gap-3 pt-1">
//                     {errors.message && (<p className="m-0 text-[13px] font-medium text-[#B42318]" role="alert">{errors.message}</p>)}
//                     <p className="m-0 flex items-center gap-2 text-[13px] text-[#56627A]">
//                       <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
//                       <span>Flying to our <strong className="text-[#0B1220]">{currentOffice.city}</strong> team</span>
//                     </p>
//                     <button type="submit" disabled={isLoading}
//                       className={`relative h-14 flex items-center justify-center gap-2.5 border-0 rounded-[14px] bg-[#0062D6] text-white text-[15.5px] font-bold shadow-[0_12px_26px_-10px_rgba(0,98,214,0.6)] overflow-hidden group/send hover:bg-[#0058C2] hover:shadow-[0_18px_34px_-12px_rgba(0,98,214,0.7)] transition-all ${isLoading ? "opacity-70 cursor-wait" : ""}`}>
//                       <span className="relative z-10">{isLoading ? "Taking off…" : "Send message"}</span>
//                       <svg className="relative z-10 transition-transform group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5 group-hover/send:-rotate-8" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
//                       <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent -translate-x-full group-hover/send:translate-x-full transition-transform duration-700 pointer-events-none" />
//                     </button>
//                     <div className="flex justify-center gap-4.5 text-xs font-medium text-[#56627A]">
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /></svg>
//                         Secure
//                       </span>
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
//                         Encrypted
//                       </span>
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18" /><path d="M10.6 5.1A10 10 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.4 3.5M6.5 6.6C4.4 8 2.9 10 2 12c1 2.5 5 7 10 7 1.7 0 3.3-.5 4.6-1.3" /></svg>
//                         Private
//                       </span>
//                     </div>
//                   </div>
//                 </form>

//                 {isSuccess && (
//                   <div className="flex-1 flex flex-col items-center justify-center text-center gap-4.5" aria-live="polite">
//                     <div className="w-[92px] h-[92px] rounded-full bg-[#E6F0FF] grid place-items-center" style={{ animation: "pop 0.6s cubic-bezier(0.3,1.4,0.5,1) both" }}>
//                       <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M5 12.5l4.5 4.5L19 7.5" strokeDasharray="24" strokeDashoffset="24" style={{ animation: "draw 0.5s ease 0.35s forwards" }} />
//                       </svg>
//                     </div>
//                     <h2 className="m-0 text-3xl font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.3s both" }}>
//                       Landed in {currentOffice.city}
//                     </h2>
//                     <p className="m-0 max-w-[300px] text-[14.5px] leading-[1.55] text-[#56627A]" style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.42s both" }}>
//                       Thanks, {formData.name?.split(" ")[0] || "there"}. Our {currentOffice.city} team will reply as soon as possible.
//                     </p>
//                     <button type="button" className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors" onClick={() => setIsSuccess(false)} style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.54s both" }}>
//                       Send another message
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactUs;





import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";

/* ============================================
   DATA & HELPERS
   ============================================ */
const OFFICES = [
  { code: "BLR", num: "01", city: "Bengaluru",   country: "India", lat: 12.9166, lon: 77.6101, tz: "Asia/Kolkata", tzs: "IST", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
  { code: "NMB", num: "02", city: "Navi Mumbai", country: "India", lat: 19.0330, lon: 73.0297, tz: "Asia/Kolkata", tzs: "IST", address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703" },
  { code: "NOI", num: "03", city: "Noida",       country: "India", lat: 28.5355, lon: 77.3910, tz: "Asia/Kolkata", tzs: "IST", address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309" },
  { code: "HYD", num: "04", city: "Hyderabad",   country: "India", lat: 17.3850, lon: 78.4867, tz: "Asia/Kolkata", tzs: "IST", address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081" },
  { code: "DXB", num: "05", city: "Dubai",       country: "UAE",   lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai",   tzs: "GST", address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates" },
];
const HOURS = { open: 9 * 60, close: 18 * 60 };
const SERVICES = ["Web design", "Development", "Branding", "SEO & growth", "Something else"];
const ZOOM = 2.2;

const proj = (o) => ({ x: (o.lon - 30) * 12, y: (38 - o.lat) * 12 });
const hav = (p, q) => {
  const R = 6371, r = Math.PI / 180;
  const dLat = (q.lat - p.lat) * r, dLon = (q.lon - p.lon) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(p.lat * r) * Math.cos(q.lat * r) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const LAND_PATH = "M-240 -144 L-240 756 L72 756 L126 576 L111.6 540 L120 492 L144 468 L180 438 L210 408 L234 378 L252 331.2 L254.4 314.4 L204 322.8 L174 331.2 L159.6 314.4 L150 304.8 L138 294 L114 270 L102 240 L86.4 204 L66 168 L48 126 L31.2 97.2 L27.6 81.6 L0 79.2 L-60 74.4 L-120 81.6 L-132 92.4 L-180 72 L-240 54 L-240 12 L-120 12 L-96 18 L-48 0 L-42 -24 L-24 -36 L72 -36 L78 14.4 L72 21.6 L70.8 33.6 L66 50.4 L58.8 66 L51.6 80.4 L45.6 99.6 L51.6 122.4 L60 102 L72 126 L96 168 L109.2 196.8 L138 234 L152.4 270 L160.8 303.6 L180 302.4 L228 284.4 L266.4 268.8 L300 252 L320.4 240 L333.6 228 L345.6 211.2 L357.6 186 L343.2 172.8 L324 169.2 L316.8 158.4 L315.6 140.4 L306 150 L288 166.8 L270 165.6 L259.2 165.6 L255.6 142.8 L249.6 151.2 L242.4 141.6 L235.2 132 L222 120 L216 97.2 L234 96 L246 105.6 L258 121.2 L282 134.4 L300 136.8 L314.4 130.8 L327.6 146.4 L348 151.2 L378 153.6 L408 152.4 L438 151.2 L447.6 158.4 L458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L726 189.6 L741.6 187.2 L747.6 204 L756 222 L771.6 240 L770.4 264 L783.6 266.4 L811.2 258 L812.4 276 L822 300 L824.4 336 L819.6 360 L828 366 L960 366 L960 -144 Z";
const LAND_PATH_2 = "M598.8 338.4 L609.6 344.4 L622.8 366 L619.2 380.4 L607.2 385.2 L600 376.8 L596.4 357.6 Z";
const LAND_PATH_3 = "M458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L705.6 186 L703.2 164.4 L696 152.4 L717.6 144 L744 153.6 L747.6 168 L738 177.6 L751.2 177.6 L759.6 168 L774 150 L783.6 135.6 L804 122.4 L792 108 L768 110.4 L744 122.4 L716.4 117.6 L706.8 128.4 L698.4 121.2 L696 138 L672 127.2 L648 126 L618 111.6 L603.6 96 L588 84 L585.6 66 L594 48 L573.6 30 L552 26.4 L534 36 L525.6 44.4 L534 62.4 L540 69.6 L535.2 84 L526.8 96 L504 120 L489.6 122.4 L475.2 138 L486 150 L474 164.4 Z";
const LAND_PATH_4 = "M259.2 165.6 L270 165.6 L288 166.8 L306 150 L315.6 140.4 L316.8 158.4 L309.6 165.6 L302.4 183.6 L264 180 Z";

/* ============================================
   MAIN COMPONENT
   ============================================ */
const ContactUs = () => {
  const [active, setActive] = useState(0);
  const [overview, setOverview] = useState(false);
  const [scale, setScale] = useState(1);
  const [flapText, setFlapText] = useState("5 OFFICES");
  const [hudVerb, setHudVerb] = useState("NETWORK");
  const [hudCoords, setHudCoords] = useState("—");
  const [clockText, setClockText] = useState("--:--:--");
  const [isOpen, setIsOpen] = useState(true);
  const [overviewRows, setOverviewRows] = useState([]);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chips, setChips] = useState([]);
  const [emailValid, setEmailValid] = useState(false);

  const camRef = useRef(null);
  const mapRef = useRef(null);
  const mapWrapRef = useRef(null);
  const tabIndRef = useRef(null);
  const tabButtonsRef = useRef([]);
  const pinsRef = useRef(null);
  const routesRef = useRef(null);
  const prevSecRef = useRef(-1);
  const secTurnsRef = useRef(0);

  const currentOffice = OFFICES[active];
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Sync chips → formData.service */
  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: chips.join(", ") }));
    if (chips.length > 0 && errors.service) {
      setErrors((prev) => ({ ...prev, service: "" }));
    }
  }, [chips]);

  /* TITLE SPLIT */
  useEffect(() => {
    let d = 0.12;
    document.querySelectorAll("[data-split]").forEach((w) => {
      const textNode = w.firstChild;
      if (!textNode || textNode.nodeType !== 3) return;
      const text = textNode.textContent;
      const rest = [...w.childNodes].slice(1);
      w.textContent = "";
      [...text].forEach((c) => {
        const s = document.createElement("span");
        s.className = "ch";
        s.textContent = c;
        s.style.animationDelay = d.toFixed(2) + "s";
        d += 0.045;
        s.setAttribute("aria-hidden", "true");
        w.appendChild(s);
      });
      rest.forEach((n) => w.appendChild(n));
      d += 0.08;
    });
  }, []);

  /* CLOCK */
  const tInfo = useCallback((o) => {
    const d = new Date();
    const p = new Intl.DateTimeFormat("en-US", {
      timeZone: o.tz, weekday: "short", hour: "2-digit",
      minute: "2-digit", second: "2-digit", hour12: false,
    }).formatToParts(d);
    const g = (t) => (p.find((x) => x.type === t) || {}).value;
    const h = parseInt(g("hour"), 10) % 24;
    const m = parseInt(g("minute"), 10);
    const s = parseInt(g("second"), 10);
    const mins = h * 60 + m;
    const open = !["Sat", "Sun"].includes(g("weekday")) && mins >= HOURS.open && mins < HOURS.close;
    const pad = (n) => String(n).padStart(2, "0");
    return { h, m, s, open, text: `${pad(h)}:${pad(m)}:${pad(s)}`, hm: `${pad(h)}:${pad(m)}` };
  }, []);

  useEffect(() => {
    const tick = () => {
      const o = OFFICES[active];
      const t = tInfo(o);
      setClockText(t.text);
      setIsOpen(t.open);
      if (prevSecRef.current !== -1 && t.s < prevSecRef.current) secTurnsRef.current++;
      prevSecRef.current = t.s;
      const hS = document.getElementById("hS");
      const hM = document.getElementById("hM");
      const hH = document.getElementById("hH");
      if (hS) hS.style.transform = `rotate(${secTurnsRef.current * 360 + t.s * 6}deg)`;
      if (hM) hM.style.transform = `rotate(${t.m * 6 + t.s * 0.1}deg)`;
      if (hH) hH.style.transform = `rotate(${(t.h % 12) * 30 + t.m * 0.5}deg)`;

      if (overview) {
        setOverviewRows(OFFICES.map((o, i) => {
          const ti = tInfo(o);
          return { i, o, open: ti.open, hm: ti.hm };
        }));
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [active, overview, tInfo]);

  /* CAMERA */
  const camera = useCallback(() => {
    if (!camRef.current || !mapRef.current || !pinsRef.current) return;
    const narrow = window.innerWidth <= 720;
    const a = proj(OFFICES[active]);
    let S, tx, ty;
    if (overview) {
      S = narrow ? 1.15 : 1.3;
      const cx = 442, cy = 207;
      const tgt = narrow ? [400, 316] : [420, 290];
      tx = tgt[0] - S * cx;
      ty = tgt[1] - S * cy;
    } else {
      S = ZOOM;
      const tgt = narrow ? [400, 300] : [500, 250];
      tx = tgt[0] - S * a.x;
      ty = tgt[1] - S * a.y;
    }
    setScale(S);
    camRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${S})`;
    pinsRef.current.querySelectorAll(".pin .inner").forEach((el) => (el.style.transform = `scale(${1 / S})`));
    const scaleBar = document.getElementById("scaleBar");
    if (scaleBar && mapRef.current) {
      const r = Math.max(mapRef.current.clientWidth / 800, mapRef.current.clientHeight / 632);
      scaleBar.style.width = (21.6 * S * r).toFixed(1) + "px";
    }
  }, [active, overview]);

  /* ROUTES */
  const buildRoutes = useCallback(() => {
    if (!routesRef.current) return;
    const NS = "http://www.w3.org/2000/svg";
    const svgEl = (tag, attrs = {}) => {
      const e = document.createElementNS(NS, tag);
      for (const k in attrs) e.setAttribute(k, attrs[k]);
      return e;
    };
    routesRef.current.innerHTML = "";
    const S = scale || 1;
    const a = OFFICES[active];
    const ap = proj(a);
    let n = 0;
    OFFICES.forEach((o, i) => {
      if (i === active) return;
      const b = proj(o);
      const mx = (ap.x + b.x) / 2, my = (ap.y + b.y) / 2;
      const dx = b.x - ap.x, dy = b.y - ap.y, k = 0.22;
      let cx = mx - dy * k, cy = my + dx * k;
      if (cy > my) { cx = mx + dy * k; cy = my - dx * k; }
      const dStr = `M${ap.x.toFixed(1)} ${ap.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      const id = "rt" + i;
      const delay = 0.9 + n * 0.14;
      const base = svgEl("path", { id, d: dStr, fill: "none", stroke: "#4FA3FF", "stroke-opacity": "0.35", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3) });
      const flow = svgEl("path", { d: dStr, fill: "none", stroke: "#8CC4FF", "stroke-opacity": "0.9", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3), "stroke-dasharray": `${(3 / S).toFixed(2)} ${(5 / S).toFixed(2)}`, opacity: "0" });
      routesRef.current.append(base, flow);
      const len = base.getTotalLength();
      base.style.strokeDasharray = len;
      base.style.strokeDashoffset = len;
      base.getBoundingClientRect();
      base.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.6,0,.2,1) ${delay}s`;
      requestAnimationFrame(() => { base.style.strokeDashoffset = 0; });
      setTimeout(() => {
        flow.style.opacity = "1";
        flow.style.animation = "flow 1.2s linear infinite";
      }, (delay + 1) * 1000);

      if (!reduce) {
        const km0 = hav(a, o);
        const trav = svgEl("circle", { r: (2.8 / S).toFixed(2), fill: "#D6EBFF", opacity: "0" });
        const mot = svgEl("animateMotion", { dur: (2.2 + km0 / 1400).toFixed(2) + "s", repeatCount: "indefinite", rotate: "auto" });
        const mp = svgEl("mpath");
        mp.setAttribute("href", "#" + id);
        mp.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + id);
        mot.appendChild(mp);
        trav.appendChild(mot);
        routesRef.current.appendChild(trav);
        setTimeout(() => trav.setAttribute("opacity", "1"), (delay + 1) * 1000);
      }

      const lx = 0.25 * ap.x + 0.5 * cx + 0.25 * b.x;
      const ly = 0.25 * ap.y + 0.5 * cy + 0.25 * b.y;
      const km = Math.round(hav(a, o) / 10) * 10;
      const lg = svgEl("g", { transform: `translate(${lx.toFixed(1)} ${ly.toFixed(1)}) scale(${(1 / S).toFixed(4)})`, opacity: "0" });
      lg.style.transition = "opacity .5s";
      lg.innerHTML = `<rect x="-34" y="-10" width="68" height="20" rx="10" fill="#0B1B30" stroke="#2A5283"/><text y="3.5" fill="#A9C6EA" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">~${km.toLocaleString("en-IN")} km</text>`;
      routesRef.current.appendChild(lg);
      setTimeout(() => (lg.style.opacity = "1"), (delay + 0.9) * 1000);
      n++;
    });
  }, [active, scale, reduce]);

  /* PINS */
  const renderPins = useCallback(() => {
    if (!pinsRef.current) return;
    const NS = "http://www.w3.org/2000/svg";
    pinsRef.current.innerHTML = "";
    OFFICES.forEach((o, i) => {
      const p = proj(o);
      const lw = Math.round(o.city.length * 7.1 + 26);
      const lx = o.code === "NMB" ? -(lw + 14) : 14;
      const isAct = i === active && !overview;
      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", "pin" + (isAct ? " active" : ""));
      g.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "button");
      g.setAttribute("aria-label", `${o.city} office`);
      g.style.cursor = "pointer";
      g.innerHTML = `<g class="inner" style="transition:transform 1.4s cubic-bezier(0.65,0,0.2,1)">
        <g class="fx" style="opacity:${isAct ? 1 : 0};transition:opacity .6s">
          <circle r="46" fill="url(#glow)"/>
          <path d="M0 0 L64 0 A64 64 0 0 0 45.3 -45.3 Z" fill="url(#sweepGrad)" style="transform-origin:0 0;animation:spin 3.6s linear infinite"/>
          <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite"/>
          <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) .8s infinite"/>
          <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) 1.6s infinite"/>
          <rect x="-1.5" y="-78" width="3" height="78" rx="1.5" fill="url(#beamGrad)" style="transform-box:fill-box;transform-origin:bottom;transform:scaleY(${isAct ? 1 : 0});transition:transform .9s cubic-bezier(.22,.8,.18,1) .5s"/>
        </g>
        <circle class="burst" r="10" fill="none" stroke="#fff" stroke-width="2" opacity="0" style="transform-box:fill-box;transform-origin:center"/>
        <circle class="dot" r="${isAct ? 9 : 6}" fill="${isAct ? '#2F8CFF' : '#8DB8EA'}" stroke="#fff" stroke-width="2.5" style="transition:r .4s,fill .4s"/>
        <circle r="2.6" fill="#fff"/>
        <g class="chip" transform="translate(${lx} -12)">
          <rect width="${lw}" height="24" rx="12" fill="${isAct ? '#0062D6' : 'rgba(7,21,42,0.9)'}" stroke="${isAct ? '#5AA8FF' : '#2A4F7C'}" style="transition:fill .4s,stroke .4s"/>
          <text x="13" y="16" fill="${isAct ? '#fff' : '#C4D6EE'}" font-family="DM Sans, sans-serif" font-size="12" font-weight="700" style="transition:fill .4s">${o.city}</text>
        </g>
      </g>`;
      g.addEventListener("click", () => { setActive(i); setOverview(false); });
      g.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); setOverview(false); }
      });
      pinsRef.current.appendChild(g);
    });
  }, [active, overview]);

  useEffect(() => { renderPins(); }, [active, overview, renderPins]);

  useEffect(() => {
    camera();
    buildRoutes();
    if (tabButtonsRef.current[active] && tabIndRef.current) {
      const t = tabButtonsRef.current[active];
      tabIndRef.current.style.width = t.offsetWidth + "px";
      tabIndRef.current.style.transform = `translateX(${t.offsetLeft}px)`;
      tabIndRef.current.style.opacity = overview ? "0" : "1";
    }
    if (overview) {
      setHudVerb("NETWORK");
      setFlapText("5 OFFICES");
      setHudCoords(`ZOOM ${scale.toFixed(1)}× · IN + AE · IST / GST`);
    } else {
      setHudVerb("CONNECTING");
      setFlapText(OFFICES[active].city.toUpperCase());
      setHudCoords(`${OFFICES[active].lat.toFixed(4)}° N · ${OFFICES[active].lon.toFixed(4)}° E · ZOOM ${scale.toFixed(1)}×`);
    }
  }, [active, overview, camera, buildRoutes, scale]);

  useEffect(() => {
    const onResize = () => { camera(); buildRoutes(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [camera, buildRoutes]);

  useEffect(() => {
    const wrap = mapWrapRef.current, map = mapRef.current;
    if (!wrap || !map || reduce || !window.matchMedia("(hover: hover)").matches) return;
    const onMove = (e) => {
      const r = map.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      map.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
    };
    const onLeave = () => (map.style.transform = "");
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => { wrap.removeEventListener("mousemove", onMove); wrap.removeEventListener("mouseleave", onLeave); };
  }, [reduce]);

  useEffect(() => {
    const t = setTimeout(() => { setActive(0); setOverview(false); }, reduce ? 0 : 2300);
    return () => clearTimeout(t);
  }, [reduce]);

  /* FORM */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
    let isValid = true;
    if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
    if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
    if (chips.length === 0 && !formData.service) { newErrors.service = "Please select a service."; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    if (overview) setOverview(false);

    const serviceValue = chips.length > 0 ? chips.join(", ") : formData.service;

    try {
      const { error } = await supabase.from("contacts").insert([{
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone,
        service: serviceValue,
        message: formData.message.trim(),
      }]);
      if (error) throw error;

      const pin = pinsRef.current?.querySelectorAll(".pin")[active];
      if (pin) {
        pin.classList.remove("landed");
        void pin.getBoundingClientRect();
        pin.classList.add("landed");
      }
      setTimeout(() => {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setErrors({ name: "", email: "", phone: "", service: "", message: "" });
        setChips([]);
      }, 700);
    } catch (error) {
      console.error("Supabase Error:", error);
      setErrors((prev) => ({ ...prev, message: "Failed to send message. Please try again later." }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentOffice.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) { /* noop */ }
  };

  return (
    <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">

      {/* INLINE KEYFRAMES */}
      <style>{`
        @keyframes chIn { to { opacity: 1; transform: none; } }
        @keyframes wipe { to { clip-path: inset(0 0 0 0 round 24px); } }
        @keyframes scan { from { top: -120px; } to { top: 110%; } }
        @keyframes pulseRing { 0% { transform: scale(.4); opacity: .75; } 100% { transform: scale(3.4); opacity: 0; } }
        @keyframes burst { 0% { transform: scale(.5); opacity: 1; } 100% { transform: scale(5); opacity: 0; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes flow { to { stroke-dashoffset: -20; } }
        @keyframes blink { 50% { opacity: .25; } }
        @keyframes flip { 0% { transform: scaleY(1); } 50% { transform: scaleY(.1); } 100% { transform: scaleY(1); } }
        @keyframes passIn { from { opacity: 0; transform: translateY(18px) rotate(-1.5deg) scale(.97); } to { opacity: 1; transform: none; } }
        @keyframes shake { 10%,90% { transform: translateX(-2px); } 20%,80% { transform: translateX(4px); } 30%,50%,70% { transform: translateX(-7px); } 40%,60% { transform: translateX(7px); } }
        @keyframes pop { 0% { transform: scale(.5); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: none; opacity: 1; } }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        .ch { display: inline-block; opacity: 0; transform: translateY(60%) rotate(8deg); animation: chIn 0.9s cubic-bezier(0.22,0.8,0.18,1) forwards; }
        .pin.landed .burst { animation: burst 1s ease-out; }
        .fl input:focus + label, .fl input:not(:placeholder-shown) + label,
        .fl textarea:focus + label, .fl textarea:not(:placeholder-shown) + label {
          transform: translateY(-9px) scale(0.78);
          color: #0062D6;
          font-weight: 600;
        }
        .fl input::placeholder, .fl textarea::placeholder { color: transparent; }
        .fl input:focus::placeholder, .fl textarea:focus::placeholder { color: #9AA5B8; }
        .land-label { fill: #6F8FB8; font-family: 'JetBrains Mono', monospace; font-size: 7px; letter-spacing: 2px; text-anchor: middle; }
        .land-label.sea { fill: #4C6C95; font-style: italic; }
      `}</style>

      {/* HERO */}
      <section className="relative pt-32 pb-32">
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

      {/* CONTACT SECTION */}
     <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
  <div className="absolute inset-0 [background-image:radial-gradient(#D8E0EC_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] pointer-events-none" />

  <div className="relative max-w-[1248px] mx-auto z-10">
    {/* ===== HEADER — first code style ===== */}
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
        Let&apos;s Talk!
      </motion.span>

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Contact <span style={{ color: '#008df1' }}>Us</span>
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Benefit of the society where we operate. A success website obviously needs great.
      </motion.p>
    </motion.div>

  


          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-8 items-start">

            {/* LEFT (MAP) */}
            <div className="flex flex-col gap-4 min-w-0">

              <div className="relative grid grid-cols-5 gap-1.5 p-1.5 bg-white border border-[#E3E8F1] rounded-[18px] shadow-sm" role="tablist">
                <span ref={tabIndRef} className="absolute top-1.5 bottom-1.5 left-0 rounded-[13px] bg-[#0062D6] shadow-[0_10px_22px_-8px_rgba(0,98,214,0.6)] transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.22,0.8,0.18,1)] opacity-0" aria-hidden="true" />
                {OFFICES.map((o, i) => {
                  const isActive = i === active && !overview;
                  return (
                    <button
                      key={o.code}
                      ref={(el) => (tabButtonsRef.current[i] = el)}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={i === active ? 0 : -1}
                      onClick={() => { setActive(i); setOverview(false); }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                          e.preventDefault();
                          const n = (i + (e.key === "ArrowRight" ? 1 : -1) + OFFICES.length) % OFFICES.length;
                          setActive(n); setOverview(false);
                          tabButtonsRef.current[n]?.focus();
                        }
                      }}
                      className={`relative z-10 flex items-center gap-2.5 min-h-[58px] px-3 rounded-[13px] text-left transition-colors duration-500 ${isActive ? "text-white" : "text-[#0B1220]"}`}
                    >
                      <span className={`flex-none w-8 h-8 rounded-[10px] grid place-items-center text-xs font-semibold transition-all duration-500 ${isActive ? "bg-white/20 text-white" : "bg-[#EEF2F8] text-[#3C4A63]"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {o.num}
                      </span>
                      <span className="flex flex-col min-w-0">
                        <span className="text-[14.5px] font-bold whitespace-nowrap">{o.city}</span>
                        <span className={`text-[11.5px] font-medium transition-colors duration-500 ${isActive ? "text-white/80" : "text-[#56627A]"}`}>{o.country}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <div ref={mapWrapRef} className="relative" style={{ perspective: "1400px" }}>
                <div
                  ref={mapRef}
                  className="relative h-[640px] rounded-[24px] overflow-hidden bg-[#07152A] shadow-[0_34px_70px_-28px_rgba(7,21,42,0.65)]"
                  style={{
                    clipPath: "inset(0 0 100% 0 round 24px)",
                    animation: "wipe 1.2s cubic-bezier(0.7,0,0.2,1) 0.6s forwards",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.5s cubic-bezier(0.22,0.8,0.18,1)",
                  }}
                >
                  <svg viewBox="0 0 800 632" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full block">
                    <defs>
                      <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.05" fill="#28507E" /></pattern>
                      <pattern id="dotsHi" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.25" fill="#4C8BD6" /></pattern>
                      <radialGradient id="glow"><stop offset="0" stopColor="#2F8CFF" stopOpacity="0.55" /><stop offset="1" stopColor="#2F8CFF" stopOpacity="0" /></radialGradient>
                      <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5AB0FF" stopOpacity="0" /><stop offset="1" stopColor="#5AB0FF" stopOpacity="0.38" /></linearGradient>
                      <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#7CC0FF" stopOpacity="0.9" /><stop offset="1" stopColor="#7CC0FF" stopOpacity="0" /></linearGradient>
                      <path id="landPath" d={LAND_PATH} />
                    </defs>
                    <rect x="-2000" y="-2000" width="5000" height="5000" fill="#07152A" />
                    <g ref={camRef} style={{ transformOrigin: "0 0", transition: "transform 1.4s cubic-bezier(0.65,0,0.2,1)" }}>
                      <g fill="none" stroke="#7FA8DC" strokeOpacity="0.08" vectorEffect="non-scaling-stroke">
                        {[-120,-60,0,60,120,180,240,300,360,420,480,540,600,660,720,780,840,900].map((x) => (<path key={"v" + x} d={`M${x} -200V900`} />))}
                        {[696,636,576,516,456,396,336,276,216,156,96,36,-24,-84].map((y) => (<path key={"h" + y} d={`M-200 ${y}H1400`} />))}
                      </g>
                      <use href="#landPath" fill="#0D213A" />
                      <use href="#landPath" fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
                      <path d={LAND_PATH_2} fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
                      <path d={LAND_PATH_3} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
                      <path d={LAND_PATH_4} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
                      <g>
                        <text className="land-label" x="582" y="186">INDIA</text>
                        <text className="land-label sea" x="402" y="276">ARABIAN SEA</text>
                        <text className="land-label sea" x="696" y="270">BAY OF BENGAL</text>
                        <text className="land-label sea" x="504" y="440">INDIAN OCEAN</text>
                        <text className="land-label" x="330" y="212">OMAN</text>
                        <text className="land-label" x="180" y="190">SAUDI ARABIA</text>
                        <text className="land-label" x="452" y="110">PAKISTAN</text>
                        <text className="land-label" x="330" y="84">IRAN</text>
                        <text className="land-label" x="420" y="48">AFGHANISTAN</text>
                        <text className="land-label" x="648" y="104">NEPAL</text>
                        <text className="land-label" x="204" y="262">YEMEN</text>
                        <text className="land-label" x="612" y="398">SRI LANKA</text>
                      </g>
                      <g ref={routesRef} />
                      <g ref={pinsRef} />
                    </g>
                  </svg>

                  <div className="absolute left-0 right-0 h-[120px] -top-[120px] pointer-events-none bg-gradient-to-b from-transparent via-[rgba(90,176,255,0.10)] to-transparent" style={{ animation: "scan 1.6s ease-in-out 1.3s 1 forwards" }} aria-hidden="true" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 70% at 60% 42%,rgba(7,21,42,0) 55%,rgba(3,10,22,0.62) 100%)" }} aria-hidden="true" />

                  <div className="absolute top-5 left-5 flex flex-col px-3.5 py-2.5 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[11.5px] leading-[1.7] text-[#C4D6EE]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <span className="flex items-center gap-2 tracking-[0.06em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3FD68F] animate-pulse" />
                      <span>{hudVerb}</span>{" "}
                      <span className="inline-flex gap-px">
                        {[...(flapText || "")].map((ch, i) => (
                          <span key={i} className={`inline-block min-w-[0.72em] text-center px-px rounded-sm font-semibold ${ch === " " ? "bg-transparent" : "bg-white/[0.07] text-[#E8F1FC]"}`}>{ch}</span>
                        ))}
                      </span>
                    </span>
                    <span className="text-[#7F9CC2]">{hudCoords}</span>
                  </div>

                  <button
                    type="button"
                    className="absolute top-5 right-5 h-11 px-4 flex items-center gap-2 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[#E3EDFA] text-[13px] font-semibold hover:bg-[rgba(20,44,74,0.92)] hover:border-[rgba(120,170,230,0.45)] transition-colors"
                    aria-pressed={overview}
                    onClick={() => setOverview((v) => !v)}
                  >
                    <svg className={`transition-transform duration-500 ${overview ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l9 5-9 5-9-5 9-5z" />
                      <path d="M3 13l9 5 9-5" />
                    </svg>
                    <span>{overview ? "Focus office" : "All offices"}</span>
                  </button>

                  <div className="absolute right-5 bottom-5 flex flex-col items-end gap-1.5 text-[10.5px] text-[#8FA9CC] pointer-events-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <span>200 km</span>
                    <b id="scaleBar" className="block h-1.5 border-[1.5px] border-[#8FA9CC] border-t-0 transition-[width] duration-[1.4s] [transition-timing-function:cubic-bezier(0.65,0,0.2,1)]" />
                    <span className="text-[#6A86AD]">Illustrative map</span>
                  </div>

                  {!overview && (
                    <article key={active} className="absolute left-5 bottom-5 w-[392px] grid grid-cols-[minmax(0,1fr)_104px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] text-[#0B1220]" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
                      <div className="p-[20px_18px_18px_20px] flex flex-col gap-3 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="whitespace-nowrap text-[11.5px] font-semibold text-[#0062D6] tracking-[0.06em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            {currentOffice.num}/05 · {currentOffice.country.toUpperCase()}
                          </span>
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${isOpen ? "bg-[#ECFDF3] text-[#067647]" : "bg-[#FFF4E5] text-[#93370D]"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-[#12B76A]" : "bg-[#F79009]"}`} />
                            <span>{isOpen ? "Open now" : "Closed"}</span>
                          </span>
                        </div>
                        <h2 className="m-0 text-3xl leading-none font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{currentOffice.city}</h2>
                        <p className="m-0 text-[13.5px] leading-[1.5] text-[#56627A]">{currentOffice.address}</p>
                        <div className="flex gap-2 mt-0.5">
                          <a className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl bg-[#0062D6] text-white text-[13.5px] font-semibold no-underline hover:bg-[#004FAD] hover:-translate-y-px transition-all [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5" href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(currentOffice.address)} target="_blank" rel="noopener noreferrer">
                            <svg className="transition-transform duration-300" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
                            Get directions
                          </a>
                          <button type="button" onClick={handleCopy} className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg>
                            <span>{copied ? "Copied" : "Copy"}</span>
                          </button>
                        </div>
                      </div>
                      <div className="relative border-l-2 border-dashed border-[#D5DDEA] py-[18px] px-2.5 flex flex-col items-center justify-between gap-2.5 bg-[#F7F9FD] rounded-r-[20px]">
                        <div className="absolute -left-[11px] -top-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
                        <div className="absolute -left-[11px] -bottom-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
                        <div className="text-3xl font-extrabold leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                          {currentOffice.code}
                          <small className="block mt-1 text-[9.5px] font-medium tracking-[0.12em] text-[#56627A] text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OFFICE</small>
                        </div>
                        <svg className="w-[62px] h-[62px]" viewBox="0 0 62 62">
                          <circle cx="31" cy="31" r="29" fill="#fff" stroke="#DCE3EE" strokeWidth="2" />
                          <g stroke="#B7C3D6" strokeWidth="2" strokeLinecap="round"><path d="M31 6v4M31 52v4M6 31h4M52 31h4" /></g>
                          <line id="hH" x1="31" y1="31" x2="31" y2="17" stroke="#0B1220" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
                          <line id="hM" x1="31" y1="31" x2="31" y2="11" stroke="#0B1220" strokeWidth="2.2" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
                          <line id="hS" x1="31" y1="35" x2="31" y2="9" stroke="#0A7CFF" strokeWidth="1.4" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.25s cubic-bezier(0.4,2.4,0.5,1)" }} />
                          <circle cx="31" cy="31" r="2.6" fill="#0A7CFF" />
                        </svg>
                        <div className="text-[12.5px] font-semibold text-center leading-[1.3] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          <span>{clockText}</span>
                          <small className="block text-[9.5px] font-medium text-[#56627A] tracking-[0.08em]">{currentOffice.tzs} · {currentOffice.tz === "Asia/Dubai" ? "GMT+4" : "GMT+5:30"}</small>
                        </div>
                      </div>
                    </article>
                  )}

                  {overview && (
                    <article className="absolute left-5 bottom-5 w-[392px] p-[18px_12px_12px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] flex flex-col gap-1" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
                      <header className="flex justify-between items-baseline px-2 pb-1.5">
                        <h2 className="m-0 text-[22px] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>5 offices, 2 countries</h2>
                        <span className="text-[11.5px] text-[#56627A]">Local time</span>
                      </header>
                      <div>
                        {overviewRows.map((row) => (
                          <button key={row.i} type="button" className="w-full flex items-center gap-3 h-11 px-2 border-0 rounded-[10px] bg-transparent text-left hover:bg-[#F1F5FC] transition-colors" onClick={() => { setActive(row.i); setOverview(false); }}>
                            <span className="text-[11.5px] font-semibold text-[#0062D6]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.o.num}</span>
                            <span className="flex-1 text-sm font-semibold">{row.o.city} <span className="font-medium text-[#56627A]">· {row.o.country}</span></span>
                            <i className="w-[7px] h-[7px] rounded-full" style={{ background: row.open ? "#12B76A" : "#F79009" }} />
                            <span className="text-[13px] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.hm} {row.o.tzs}</span>
                          </button>
                        ))}
                      </div>
                    </article>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT (FORM) */}
            <aside
              className="relative rounded-[24px] bg-white border border-[#E6EBF3] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_28px_56px_-18px_rgba(16,24,40,0.16)] p-8 min-h-[712px] flex flex-col overflow-hidden"
              onMouseMove={handleFormMove}
              style={{
                animation: "rise 0.9s cubic-bezier(0.22,0.8,0.18,1) 0.7s both",
                backgroundImage: "radial-gradient(420px circle at var(--mx,50%) var(--my,-20%), rgba(10,124,255,0.07), transparent 60%)",
              }}
            >
              <div className="relative">
                <div className="mb-[22px]">
                  <h2 id="form-title" className="m-0 mb-1 text-[28px] leading-[1.15] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Send us a message</h2>
                  <p className="m-0 text-sm text-[#56627A]">We'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className={`flex-col gap-4 ${isSuccess ? "hidden" : "flex"}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className={`fl relative ${errors.name ? "invalid" : ""}`}>
                      <input id="fName" type="text" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} name="name"
                        className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.name ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
                      <label htmlFor="fName" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Name</label>
                    </div>
                    <div className={`fl relative ${emailValid ? "valid" : ""} ${errors.email ? "invalid" : ""}`}>
                      <input id="fEmail" type="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={(e) => { handleChange(e); setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.target.value.trim())); }} name="email"
                        className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.email ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
                      <label htmlFor="fEmail" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Email</label>
                      <svg className={`absolute right-3 top-[19px] transition-all ${emailValid ? "opacity-100 scale-100" : "opacity-0 scale-[0.3] -rotate-30"}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    </div>
                  </div>

                  <div className="flex items-stretch h-[54px] border-[1.5px] border-[#E1E7F0] rounded-xl bg-[#F6F8FC] hover:border-[#C5D0E0] focus-within:border-[#0A7CFF] focus-within:bg-white focus-within:ring-4 focus-within:ring-[rgba(10,124,255,0.14)] transition-all">
                    <select aria-label="Country code" defaultValue="+91" className="border-0 bg-transparent pl-3.5 pr-1 text-[13.5px] font-semibold cursor-pointer outline-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      <option value="+91">IN +91</option>
                      <option value="+971">AE +971</option>
                    </select>
                    <span className="w-px mx-1 my-3.5 bg-[#DCE3EE]" />
                    <div className="fl relative flex-1">
                      <input id="fPhone" type="tel" autoComplete="tel-national" placeholder="98765 43210" value={formData.phone} onChange={handleChange} name="phone" maxLength={10} className="w-full h-full border-0 bg-transparent outline-none text-[14.5px] px-3 pt-[22px] pb-1.5" />
                      <label htmlFor="fPhone" className="absolute left-3 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Phone (optional)</label>
                    </div>
                  </div>

                  <fieldset className="m-0 p-0 border-0">
                    <legend className="block mb-2.5 text-[13px] font-semibold text-[#2A3650]">What can we help with?</legend>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => {
                        const isOn = chips.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            aria-pressed={isOn}
                            onClick={() =>
                              setChips((prev) =>
                                prev.includes(s) ? prev.filter((c) => c !== s) : [...prev, s]
                              )
                            }
                            className={`h-9 px-3.5 inline-flex items-center rounded-full border-[1.5px] text-[13px] font-semibold transition-all active:scale-95 ${
                              isOn
                                ? "bg-[#0062D6] border-[#0062D6] text-white gap-1.5"
                                : "bg-white border-[#DCE3EE] text-[#2A3650] hover:border-[#0A7CFF]"
                            }`}
                          >
                            <svg className={`transition-all duration-200 ${isOn ? "w-3.5" : "w-0"}`} height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                            <span>{s}</span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="fl relative">
                    <textarea id="fMsg" maxLength={500} placeholder="A few lines about your project, timeline or budget…" value={formData.message} onChange={handleChange} name="message"
                      className="w-full h-28 pt-[26px] pb-1.5 px-3.5 rounded-xl border-[1.5px] border-[#E1E7F0] bg-[#F6F8FC] text-[14.5px] outline-none resize-none leading-[1.5] block hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)] transition-all" />
                    <label htmlFor="fMsg" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Message</label>
                    <span className="absolute right-3 bottom-2.5 text-[11px] text-[#6B778C]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{formData.message.length}/500</span>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-1">
                    {errors.message && (<p className="m-0 text-[13px] font-medium text-[#B42318]" role="alert">{errors.message}</p>)}
                    <p className="m-0 flex items-center gap-2 text-[13px] text-[#56627A]">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                      <span>Flying to our <strong className="text-[#0B1220]">{currentOffice.city}</strong> team</span>
                    </p>
                    <button type="submit" disabled={isLoading}
                      className={`relative h-14 flex items-center justify-center gap-2.5 border-0 rounded-[14px] bg-[#0062D6] text-white text-[15.5px] font-bold shadow-[0_12px_26px_-10px_rgba(0,98,214,0.6)] overflow-hidden group/send hover:bg-[#0058C2] hover:shadow-[0_18px_34px_-12px_rgba(0,98,214,0.7)] transition-all ${isLoading ? "opacity-70 cursor-wait" : ""}`}>
                      <span className="relative z-10">{isLoading ? "Taking off…" : "Send message"}</span>
                      <svg className="relative z-10 transition-transform group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5 group-hover/send:-rotate-8" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent -translate-x-full group-hover/send:translate-x-full transition-transform duration-700 pointer-events-none" />
                    </button>
                    <div className="flex justify-center gap-4.5 text-xs font-medium text-[#56627A]">
                      <span className="inline-flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /></svg>
                        Secure
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                        Encrypted
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18" /><path d="M10.6 5.1A10 10 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.4 3.5M6.5 6.6C4.4 8 2.9 10 2 12c1 2.5 5 7 10 7 1.7 0 3.3-.5 4.6-1.3" /></svg>
                        Private
                      </span>
                    </div>
                  </div>
                </form>

                {isSuccess && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-4.5" aria-live="polite">
                    <div className="w-[92px] h-[92px] rounded-full bg-[#E6F0FF] grid place-items-center" style={{ animation: "pop 0.6s cubic-bezier(0.3,1.4,0.5,1) both" }}>
                      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeDasharray="24" strokeDashoffset="24" style={{ animation: "draw 0.5s ease 0.35s forwards" }} />
                      </svg>
                    </div>
                    <h2 className="m-0 text-3xl font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.3s both" }}>
                      Landed in {currentOffice.city}
                    </h2>
                    <p className="m-0 max-w-[300px] text-[14.5px] leading-[1.55] text-[#56627A]" style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.42s both" }}>
                      Thanks, {formData.name?.split(" ")[0] || "there"}. Our {currentOffice.city} team will reply as soon as possible.
                    </p>
                    <button type="button" className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors" onClick={() => setIsSuccess(false)} style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.54s both" }}>
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;