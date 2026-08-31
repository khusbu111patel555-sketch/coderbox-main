import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl"
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-3xl"
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-start">
          {/* Left Column */}
          <div>
            <motion.span 
              className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/30 inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Let's Talk!
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us!</span>
            </motion.h2>
            <motion.p 
              className="text-blue-200/80 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Benefit of the society where we operate. A success website obviously needs great.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Phone, label: 'Call if emergency!', value: '+91 8928809025', href: 'tel:+918928809025', subValue: 'Mon-Sat, 9AM-6PM' },
                { icon: Mail, label: 'Email', value: 'info@coderbox.com', href: 'mailto:info@coderbox.com', subValue: 'We reply within 24hrs' },
                { icon: MapPin, label: 'Location', value: 'PAN India', href: '#', subValue: 'Multiple offices across India' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10,
                    borderColor: "rgba(59,130,246,0.5)",
                    backgroundColor: "rgba(255,255,255,0.08)"
                  }}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-sm text-blue-200/60">{item.label}</p>
                    <a href={item.href} className="font-semibold text-white hover:text-blue-400 transition-colors">
                      {item.value}
                    </a>
                    {item.subValue && (
                      <p className="text-xs text-blue-200/50 flex items-center gap-1 mt-0.5">
                        <Clock className="h-3 w-3" />
                        {item.subValue}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">100% Satisfaction Guaranteed</p>
                <p className="text-blue-200/50 text-xs">We value your trust and feedback</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form with better visibility */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(99,102,241,0.3)] transition-all duration-500">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
                <p className="text-blue-200/70 text-sm mt-1">We'll get back to you as soon as possible</p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">Your Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">Message</label>
                  <textarea 
                    rows="3"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 resize-none"
                    placeholder="Write your message..."
                  />
                </div>
                <motion.button 
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(99,102,241,0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-2xl text-white py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Submit Now</span>
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-blue-200/50">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  Secure
                </span>
                <span className="w-px h-4 bg-white/20"></span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  Encrypted
                </span>
                <span className="w-px h-4 bg-white/20"></span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  Private
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;