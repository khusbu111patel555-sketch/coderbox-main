import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, ThumbsUp, Play, Zap, Shield, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#12122a] to-[#0a0a1a] overflow-hidden">
      {/* Animated background elements */}
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
              About Us
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Grow Your Business{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">With Coderbox</span>
            </motion.h2>
            <motion.p 
              className="text-blue-200/80 text-lg leading-relaxed mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Over 10 years of helping companies reach their financial and branding goals.
            </motion.p>
            <motion.p 
              className="text-blue-200/70 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.
            </motion.p>
            
            <motion.div 
              className="space-y-5 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: 'Brand Presence', value: 92 },
                { label: 'Digital Presence', value: 95 },
                { label: 'Optimization', value: 95 }
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200/80 font-medium">{item.label}</span>
                    <span className="text-blue-400 font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.a
              href="/about"
              whileHover={{ x: 10 }}
              className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 group gap-2"
            >
              Know More About Us
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </motion.a>
          </div>

          {/* Right Column - Enhanced with better visibility */}
          <div>
            <div className="space-y-6">
              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { label: 'Years Experience', value: '10+', gradient: 'from-blue-500/30 to-cyan-500/30', icon: Clock },
                  { label: 'Happy Clients', value: '8K+', gradient: 'from-purple-500/30 to-pink-500/30', icon: Users },
                  { label: 'Awards Won', value: '12+', gradient: 'from-green-500/30 to-emerald-500/30', icon: Award },
                  { label: 'Client Satisfaction', value: '100%', gradient: 'from-orange-500/30 to-red-500/30', icon: ThumbsUp }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      boxShadow: "0 20px 40px -15px rgba(99,102,241,0.3)"
                    }}
                    className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-white/30 transition-all duration-300`}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <item.icon className="h-6 w-6 text-blue-400" />
                    </motion.div>
                    <motion.div 
                      className="text-3xl font-bold text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.value}
                    </motion.div>
                    <div className="text-blue-200/70 text-sm mt-1">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Video/Image Card with better visibility */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Why Choose Coderbox?</h4>
                      <p className="text-blue-200/70 text-sm">We deliver excellence with every project</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl"
                    >
                      <Shield className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {[
                      { icon: Zap, label: 'Fast Delivery', color: 'text-yellow-400' },
                      { icon: TrendingUp, label: 'Growth Focus', color: 'text-green-400' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3 border border-white/10"
                      >
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                        <span className="text-white/80 text-sm font-medium">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Video thumbnail */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="mt-6 relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-500/30 to-purple-500/30 p-8 text-center border border-white/20 cursor-pointer group/video"
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg mb-3"
                      >
                        <Play className="h-8 w-8 text-white ml-1" />
                      </motion.div>
                      <p className="text-white font-medium">Watch Our Story</p>
                      <p className="text-blue-200/60 text-sm mt-1">3 min • See how we work</p>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;