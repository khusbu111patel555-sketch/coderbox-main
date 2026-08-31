import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Heart, Sparkles, Award, Users, Clock, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Counter from './Counter';

const WhyChooseUsSection = () => {
  const whyChooseUs = [
    {
      icon: Target,
      title: 'Data-Driven Insights',
      description: 'Harness the power of data to make informed decisions'
    },
    {
      icon: TrendingUp,
      title: 'Maximum ROI',
      description: 'Strategic budget allocation for optimal returns'
    },
    {
      icon: Heart,
      title: 'Dedicated Support',
      description: '24/7 support with regular updates and insights'
    },
    {
      icon: Sparkles,
      title: 'Innovative Solutions',
      description: 'Cutting-edge strategies for brand elevation'
    }
  ];

  const stats = [
    { target: 8, label: 'Projects Done', icon: Award, suffix: 'K+' },
    { target: 9, label: 'Winner Award', icon: Target, suffix: '+' },
    { target: 100, label: 'Happy Customers', icon: Users, suffix: '+' },
    { target: 10, label: 'Years Experience', icon: Clock, suffix: '+' }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const statVariants = {
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
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 30, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 0.7, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">
          {/* Left Column */}
          <div>
            <motion.span 
              className="text-blue-300 font-semibold text-sm tracking-widest uppercase bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              For Your <span className="text-yellow-400">Business!</span>
            </motion.h2>
            <motion.p 
              className="text-blue-200/80 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Discover the transformative power of our cutting-edge digital marketing solutions, meticulously crafted to elevate your brand's presence in the digital sphere.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transition-all group cursor-default"
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      backgroundColor: "rgba(255,255,255,0.3)"
                    }}
                  >
                    <item.icon className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                  <motion.h4 
                    className="text-white font-semibold text-sm mb-1"
                    whileHover={{ x: 3 }}
                  >
                    {item.title}
                  </motion.h4>
                  <p className="text-blue-200/70 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Stats with better visibility */}
          <div>
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: "0 20px 40px -15px rgba(99,102,241,0.4)"
                  }}
                  className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-500/30 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <stat.icon className="h-6 w-6 text-yellow-400" />
                  </motion.div>
                  <Counter 
                    target={stat.target} 
                    label={stat.label} 
                    icon={stat.icon}
                    suffix={stat.suffix}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Trust Badge with better visibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 p-6 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 text-center"
            >
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white text-sm font-medium">100% Satisfaction</span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white text-sm font-medium">24/7 Support</span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white text-sm font-medium">Trusted Partner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;