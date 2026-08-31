import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, Target, Play, Sparkles, Zap, ChevronRight } from 'lucide-react';
import Particles from './Particles';

const HeroSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Animated Gradient Orbs with more dynamic movement */}
        <motion.div
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent blur-3xl"
          animate={{ 
            x: [0, 150, -100, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 45, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-600/20 via-cyan-600/10 to-transparent blur-3xl"
          animate={{ 
            x: [0, -120, 80, 0],
            y: [0, 60, -80, 0],
            scale: [1, 0.8, 1.4, 1],
            rotate: [0, -45, 30, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/10 to-violet-600/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 180, 360, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Particles */}
      <Particles />

      {/* Main Content with increased side spacing */}
      <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10 py-20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge with bounce */}
            {/* <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm cursor-default"
            > */}
              {/* <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-4 w-4 text-yellow-400" />
              </motion.div> */}
              {/* <span className="text-sm text-blue-200/80 font-medium">Trusted by 1000+ businesses</span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="h-3 w-3 text-blue-200/60" />
              </motion.div> */}
            {/* </motion.div> */}

            {/* Main Heading with gradient animation */}
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight pt-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Build Better{' '}
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Digital
                </motion.span>{' '}
                Experiences
              </motion.h1>
            </motion.div>
            
            {/* Description with fade */}
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-200/80 max-w-lg leading-relaxed font-light"
            >
              Transform your ideas into powerful digital solutions with our expert team. 
              We combine cutting-edge technology with creative design.
            </motion.p>
            
            {/* Buttons with enhanced animations */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(99,102,241,0.4)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 rounded-full font-semibold text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Start Building
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="#how-we-work"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center gap-2"
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="h-5 w-5" />
                </motion.span>
                Watch Demo
              </motion.a>
            </motion.div>

            {/* Stats with hover effects */}
            {/* <motion.div 
              variants={itemVariants}
              className="flex items-center gap-8 pt-6 border-t border-white/10"
            >
              <motion.div 
                className="flex -space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                {['JD', 'MK', 'SR', 'AL'].map((initials, i) => (
                  <motion.div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm"
                    style={{ zIndex: 4 - i }}
                    whileHover={{ 
                      y: -6,
                      borderColor: "rgba(255,255,255,0.6)",
                      scale: 1.1
                    }}
                  >
                    {initials}
                  </motion.div>
                ))}
              </motion.div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                    >
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-blue-200/60 text-sm">Join 5,000+ happy clients</p>
              </div>
            </motion.div> */}
          </div>

          {/* Right Column - Interactive Card with enhanced animations */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block"
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-[0_20px_70px_-15px_rgba(99,102,241,0.4)] transition-all duration-500">
                <motion.div 
                  className="absolute top-0 right-0 -mt-4 -mr-4"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⚡ Popular
                  </div>
                </motion.div>
                
                <div className="space-y-6 relative">
                  <motion.div 
                    className="flex items-center justify-between pb-4 border-b border-white/10"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-3 rounded-xl backdrop-blur-sm"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Users className="h-6 w-6 text-blue-300" />
                      </motion.div>
                      <div>
                        <motion.div 
                          className="text-white font-bold text-3xl"
                          whileHover={{ scale: 1.05 }}
                        >
                          12,847
                        </motion.div>
                        <div className="text-blue-200/60 text-sm">Active Users</div>
                      </div>
                    </div>
                    <motion.div 
                      className="flex items-center gap-1 text-yellow-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <span className="text-white font-bold">4.9</span>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-between pb-4 border-b border-white/10"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-xl backdrop-blur-sm"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Award className="h-6 w-6 text-purple-300" />
                      </motion.div>
                      <div>
                        <motion.div 
                          className="text-white font-bold text-3xl"
                          whileHover={{ scale: 1.05 }}
                        >
                          15+
                        </motion.div>
                        <div className="text-blue-200/60 text-sm">Years Expertise</div>
                      </div>
                    </div>
                    <motion.div 
                      className="text-emerald-400 text-xs font-medium bg-emerald-400/10 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      🏆 Award Winning
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-between"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-3 rounded-xl backdrop-blur-sm"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <Target className="h-6 w-6 text-orange-300" />
                      </motion.div>
                      <div>
                        <motion.div 
                          className="text-white font-bold text-3xl"
                          whileHover={{ scale: 1.05 }}
                        >
                          99.8%
                        </motion.div>
                        <div className="text-blue-200/60 text-sm">Success Rate</div>
                      </div>
                    </div>
                    <motion.div 
                      className="text-blue-300 text-xs font-medium bg-blue-400/10 px-3 py-1 rounded-full flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Zap className="h-3 w-3" />
                      Fast Delivery
                    </motion.div>
                  </motion.div>

                  {/* Progress bar with animated counter */}
                  <motion.div 
                    className="pt-4 border-t border-white/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between text-xs text-blue-200/60 mb-1">
                      <span>Project completion</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        94%
                      </motion.span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '94%' }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;