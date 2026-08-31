import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Star } from 'lucide-react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Preeti Rai',
      role: 'Senior Consultant',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      email: 'preeti@coderbox.com',
      socials: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Rahul Sharma',
      role: 'AI Specialist',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      email: 'rahul@coderbox.com',
      socials: {
        linkedin: '#',
        twitter: '#'
      }
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
            Our Team
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expert Team</span>
          </motion.h2>
          <motion.p 
            className="text-blue-200/80 mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our experienced team is dedicated to delivering excellence and driving your success
          </motion.p>
        </AnimatedSection>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 60px -15px rgba(99,102,241,0.3)"
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20 text-center overflow-hidden"
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
                <div className="relative mb-6">
                  <motion.div 
                    className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500 transition-colors duration-300 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-4 py-1 rounded-full shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.location}
                  </motion.div>

                  {/* Rating badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Star className="h-3 w-3 inline-block mr-1" />
                    4.9
                  </motion.div>
                </div>

                <motion.h3 
                  className="text-xl font-bold text-white"
                  whileHover={{ x: 5 }}
                >
                  {member.name}
                </motion.h3>
                
                <p className="text-blue-400 font-medium text-sm">{member.role}</p>
                
                <div className="flex items-center justify-center gap-2 mt-3 text-blue-200/50 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{member.location}</span>
                </div>

                {/* Email */}
                <motion.a
                  href={`mailto:${member.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-center gap-2 mt-4 text-blue-200/60 hover:text-blue-400 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {member.email}
                </motion.a>

                {/* Social links */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <motion.a
                    href={member.socials.linkedin}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600/20 flex items-center justify-center transition-colors border border-white/10 hover:border-blue-500/30"
                  >
                    <FaLinkedinIn className="h-4 w-4 text-blue-400" />
                  </motion.a>
                  <motion.a
                    href={member.socials.twitter}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600/20 flex items-center justify-center transition-colors border border-white/10 hover:border-blue-500/30"
                  >
                    <FaTwitter className="h-4 w-4 text-blue-400" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="text-center text-blue-200/70 mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our team has deep expertise across all areas of digital. Need a deep dive on how to set up event tracking?
        </motion.p>
      </div>
    </section>
  );
};

export default TeamSection;