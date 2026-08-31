import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, ThumbsUp, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Coderbox transformed our digital presence completely. Their AI solutions increased our efficiency by 300%.",
      author: "John Doe",
      company: "TechCorp Inc.",
      rating: 5,
      role: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "The team's expertise in digital marketing helped us achieve unprecedented growth in just 6 months.",
      author: "Jane Smith",
      company: "GrowthHub Ltd.",
      rating: 5,
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
    }
  ];

  // Animation variants for staggered children
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
    hidden: { opacity: 0, y: 50 },
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
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a1a] to-[#12122a] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-cyan-600/5 blur-3xl"
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <motion.span 
            className="text-blue-400 font-semibold text-sm tracking-widest uppercase bg-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-500/20 inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Real stories from real clients who have transformed their businesses with us
          </motion.p>
        </AnimatedSection>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-3xl"
                whileHover={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
                  transition: { duration: 0.3 }
                }}
              />

              <div className="relative z-10">
                {/* Quote icon with animation */}
                <motion.div
                  whileHover={{ 
                    rotate: 10,
                    scale: 1.1
                  }}
                  className="mb-4"
                >
                  <Quote className="h-10 w-10 text-blue-400/30" />
                </motion.div>

                {/* Rating stars with animation */}
                <motion.div 
                  className="flex items-center gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote text */}
                <motion.p 
                  className="text-white/80 text-lg leading-relaxed mb-6"
                  whileHover={{ x: 5 }}
                >
                  "{testimonial.quote}"
                </motion.p>

                {/* Author section with image */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors"
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <motion.p 
                        className="text-white font-semibold"
                        whileHover={{ x: 3 }}
                      >
                        {testimonial.author}
                      </motion.p>
                      <p className="text-blue-200/60 text-sm">{testimonial.role}</p>
                      <p className="text-blue-200/40 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Trust badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-3 py-1 rounded-full border border-green-500/20"
                  >
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3 text-green-400" />
                      <span className="text-green-400 text-xs font-medium">Verified</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Users, label: 'Happy Clients', value: '500+' },
            { icon: ThumbsUp, label: 'Satisfaction Rate', value: '99%' },
            { icon: Award, label: 'Awards Won', value: '12+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                backgroundColor: "rgba(255,255,255,0.08)"
              }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 transition-all duration-300"
            >
              <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-blue-200/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;