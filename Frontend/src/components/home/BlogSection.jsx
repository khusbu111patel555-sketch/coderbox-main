import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const BlogSection = () => {
  const latestBlogs = [
    {
      title: "Local SEO Strategies to Grow Restaurant Customers in Pune",
      date: "August 11, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      readTime: "5 min read",
      author: "Preeti Rai"
    },
    {
      title: "The 5 Big Shifts Making Healthcare Marketing Autonomous in 2026",
      date: "August 9, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      readTime: "7 min read",
      author: "Rahul Sharma"
    },
    {
      title: "Pharma Digital Transformation in 2026: Key Trends",
      date: "August 7, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop",
      readTime: "4 min read",
      author: "Ananya Patel"
    },
    {
      title: "The AI Playbook Every Healthcare Marketer Needs in 2026",
      date: "August 5, 2026",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      readTime: "6 min read",
      author: "Vikram Singh"
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="relative py-32 bg-[#0a0a1a] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl"
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl"
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/5 to-violet-600/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 180, 360, 0]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
            Our Blog
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">News & Blogs</span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stay updated with the latest trends and insights from our expert team
          </motion.p>
        </AnimatedSection>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {latestBlogs.map((blog, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
              }}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Category badge with animation */}
                <motion.div 
                  className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Tag className="h-3 w-3 inline-block mr-1" />
                  {blog.category}
                </motion.div>

                {/* Read time badge */}
                <motion.div 
                  className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="h-3 w-3 inline-block mr-1" />
                  {blog.readTime}
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-blue-200/50 mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  {blog.date}
                </div>
                
                <motion.h3 
                  className="font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  {blog.title}
                </motion.h3>
                
                <div className="flex items-center text-xs text-blue-200/40 mb-3">
                  <User className="h-3 w-3 mr-1" />
                  {blog.author}
                </div>
                
                <motion.a
                  href="#"
                  whileHover={{ x: 8 }}
                  className="inline-flex items-center text-blue-400 font-medium text-sm group/link gap-1"
                >
                  Read More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/blog"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold transition-all duration-300 shadow-2xl"
          >
            View All Blogs
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;