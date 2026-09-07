import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, Globe, ChevronRight, CheckCircle, MapPin, User, Building, Briefcase, MessageCircle, Calendar, Award } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    inquiryCategory: '',
    requestCall: '',
    message: '',
    receiveUpdates: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const locations = [
    { 
      city: 'Dubai', 
      country: 'UAE', 
      address: '35V6+54 - Al Sufouh', 
      address2: 'Dubai Internet City - Dubai - United Arab Emirates', 
      tel: '+971 4 123 4567', 
      fax: '+971 4 123 4568', 
      icon: '🌇',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.161!3d25.105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b2b0b0b0b0b%3A0x0!2zMjXCsDA2JzE4LjAiTiA1NcKwMDknMzkuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
      row: 'top'
    },
    { 
      city: 'Hyderabad', 
      country: 'India', 
      address: 'Sec-II, Village, HUDA Techno Enclave', 
      address2: 'Madhapur Hitech City, Hyderabad, Telangana - 500081', 
      tel: '+91 40 1234 5678', 
      fax: '+91 40 1234 5679', 
      icon: '🌃',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.391!3d17.448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993b0b0b0b0b%3A0x0!2zMTfCsDI2JzUyLjgiTiA3OMKwMjMnMjcuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
      row: 'top'
    },
    { 
      city: 'Mumbai', 
      country: 'India', 
      address: '18th Floor, Cyberone', 
      address2: 'opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703', 
      tel: '+91 22 2345 6789', 
      fax: '+91 22 2345 6790', 
      icon: '🌆',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d73.001!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1b0b0b0b0b0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3M8KwMDAnMDMuNiJF!5e0!3m2!1sen!2sus!4v1234567890',
      row: 'bottom'
    },
    { 
      city: 'Noida', 
      country: 'India', 
      address: 'D-41, C Block, Sector 59', 
      address2: 'Noida, Uttar Pradesh 201309', 
      tel: '+91 120 3456 789', 
      fax: '+91 120 3456 790', 
      icon: '🏙️',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.357!3d28.613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b0b0b0b0b0%3A0x0!2zMjjCsDM2JzQ2LjgiTiA3N8KwMjEnMjUuMiJF!5e0!3m2!1sen!2sus!4v1234567890',
      row: 'bottom'
    }
  ];

  const globalLocations = ['UAE', 'Hyderabad', 'Mumbai', 'Noida'];
  const categories = [
    { value: 'managed-infrastructure', label: '🖥️ Managed Infrastructure' },
    { value: 'application-development', label: '💻 Application Development' },
    { value: 'cybersecurity', label: '🔒 Cybersecurity' },
    { value: 'ai-solutions', label: '🤖 AI Solutions' },
    { value: 'cloud-services', label: '☁️ Cloud Services' },
    { value: 'digital-transformation', label: '🚀 Digital Transformation' },
    { value: 'partnership', label: '🤝 Partnership Inquiry' },
    { value: 'general', label: '📋 General Inquiry' }
  ];

  const inputClasses = (fieldName) => `
    w-full px-4 py-3.5 bg-white/5 border 
    ${focusedField === fieldName ? 'border-blue-500/60 ring-2 ring-blue-500/20' : 'border-white/15'} 
    rounded-xl text-white placeholder-white/30 
    focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60 
    transition-all duration-300 text-sm
    hover:border-white/30
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-blue-300 font-medium text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 mb-4">
                <Award className="h-3 w-3" />
                Futurism Technologies
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Let's <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Connect!</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200/80 max-w-3xl leading-relaxed font-light mt-4">We are just a form away</motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-xs sm:text-sm md:text-base text-blue-300/70 max-w-3xl leading-relaxed mt-2">
              Whether it is managed infrastructure or a need for application development, we can effectively strategize and implement your digital transformation. So, tell us your needs and know how we can address them. After all, we are only a form away.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Locations Section - 2x2 Grid with Box Layout */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Time is <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Presence</span>
            </h2>
            <p className="text-blue-200/60 text-sm sm:text-base mt-2">Find us at our global locations</p>
          </motion.div>

          {/* 2x2 Grid Box Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {locations.map((location, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(99,102,241,0.3)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 group relative"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Map */}
                <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 bg-gray-800 relative overflow-hidden">
                  <iframe
                    src={location.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.city} Map`}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{location.icon}</span>
                      <span className="text-white font-semibold text-sm">{location.city}</span>
                    </div>
                  </div>
                  
                  {/* Row Indicator */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-medium px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/70 border border-white/10">
                      {location.row === 'top' ? '⬆' : '⬇'}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-400 text-sm font-medium">{location.country}</span>
                  </div>
                  <div className="space-y-1 text-blue-200/60 text-xs sm:text-sm">
                    <p className="font-medium text-white/80">{location.address}</p>
                    <p className="text-blue-300/50 text-xs">{location.address2}</p>
                    <div className="flex flex-wrap gap-3 mt-2 pt-2 border-t border-white/5">
                      <p className="text-white/80 font-medium text-xs">📞 {location.tel}</p>
                      {location.fax && <p className="text-white/50 text-xs">📠 {location.fax}</p>}
                    </div>
                  </div>
                  
                  {/* Google Maps Link */}
                  <motion.a
                    href={location.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="mt-3 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-xl border border-blue-500/20 hover:border-blue-500/40 w-full justify-center"
                  >
                    <MapPin className="h-4 w-4" />
                    View on Google Maps
                    <span className="text-xs">→</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-3xl mx-auto">
            {/* Form Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <span className="inline-flex items-center gap-2 text-blue-300 font-medium text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 mb-4">
                <MessageCircle className="h-3 w-3" />
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Let's Talk About Your <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Needs</span>
              </h2>
              <p className="text-blue-200/50 text-sm mt-3 max-w-md mx-auto">
                Fill in the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-10 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You! 🎉</h3>
                  <p className="text-green-300/80 mt-2 max-w-md mx-auto">
                    Your message has been sent successfully. Our team will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Full Name + Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="relative">
                      <label className="block text-white font-medium text-sm mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('fullName')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputClasses('fullName') + ' pl-10'}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-white font-medium text-sm mb-1.5">
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputClasses('email') + ' pl-10'}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone No + Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="relative">
                      <label className="block text-white font-medium text-sm mb-1.5">
                        Phone No <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputClasses('phone') + ' pl-10'}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-white font-medium text-sm mb-1.5">
                        Company Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('companyName')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputClasses('companyName') + ' pl-10'}
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Inquiry Category */}
                  <div className="relative">
                    <label className="block text-white font-medium text-sm mb-1.5">
                      Inquiry Category <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 z-10" />
                      <select
                        name="inquiryCategory"
                        value={formData.inquiryCategory}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('inquiryCategory')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={inputClasses('inquiryCategory') + ' pl-10 appearance-none cursor-pointer'}
                      >
                        <option value="" className="bg-gray-800">Select a category</option>
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat.value} className="bg-gray-800 py-2">{cat.label}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="h-4 w-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Request For Call */}
                  <div className="relative">
                    <label className="block text-white font-medium text-sm mb-1.5">
                      Request For Call
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 z-10" />
                      <select
                        name="requestCall"
                        value={formData.requestCall}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('requestCall')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('requestCall') + ' pl-10 appearance-none cursor-pointer'}
                      >
                        <option value="" className="bg-gray-800">Select preferred time</option>
                        <option value="morning" className="bg-gray-800">🌅 Morning (9AM - 12PM)</option>
                        <option value="afternoon" className="bg-gray-800">☀️ Afternoon (12PM - 5PM)</option>
                        <option value="evening" className="bg-gray-800">🌙 Evening (5PM - 8PM)</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="h-4 w-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Any Message */}
                  <div className="relative">
                    <label className="block text-white font-medium text-sm mb-1.5">
                      Any Message
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3.5 h-4 w-4 text-white/30 z-10" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows="4"
                        className={inputClasses('message') + ' pl-10 resize-none min-h-[120px]'}
                        placeholder="Tell us about your project, requirements, or any questions..."
                      />
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 bg-white/10 border-white/20 rounded text-blue-500 focus:ring-blue-500/50 focus:ring-2 transition-all"
                    />
                    <label className="text-blue-200/70 text-sm leading-relaxed cursor-pointer">
                      I would like to receive information about Futurism Technologies' news and events.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative overflow-hidden group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-base disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                          Submit
                          <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;