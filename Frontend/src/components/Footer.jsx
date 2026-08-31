import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  ArrowUp,
  Building,
  MapPinned,
  Star,
  ExternalLink,
  Clock
} from 'lucide-react';
import { FaGoogle, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const ourServices = [
    { name: 'Cognitive Services', href: '/services/cognitive' },
    { name: 'Digital Services', href: '/services/digital' },
    { name: 'Information Technology Services', href: '/services/it' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const branchOffices = [
    '18th Floor, Cyberone, opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703',
    'Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana - 50008',
    'D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309',
    '35V6+54 - Al Sufouh - Dubai Internet City - Dubai - United Arab Emirates'
  ];

  const socialIcons = [
    { icon: FaGoogle, href: 'https://www.google.com', label: 'Google', color: 'hover:text-blue-500' },
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 30, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 py-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          {/* Company Info - 4 columns */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4"
          >
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="bg-blue-600 p-2 rounded-lg"
                whileHover={{ rotate: 10 }}
              >
                <Globe className="h-7 w-7 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-white">
                CODER<span className="text-blue-500">BOX</span>
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-400 leading-relaxed mb-4"
              whileHover={{ x: 5 }}
            >
              CoderBox, your go-to team for all things digital! We specialize in crafting digital marketing solutions. It lets take your work to the next level-together!
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-2 mb-6 bg-gray-800/50 rounded-lg px-4 py-2 w-fit backdrop-blur-sm border border-gray-700"
              whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.5)" }}
            >
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-gray-300">Review us on</span>
              <motion.a 
                href="https://www.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center transition-colors"
                whileHover={{ x: 3 }}
              >
                Google
                <ExternalLink className="h-3 w-3 ml-1" />
              </motion.a>
            </motion.div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center">
                <Building className="h-4 w-4 mr-2 text-blue-500" />
                Registered Office
              </h4>
              <motion.div 
                className="flex items-start space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
                whileHover={{ x: 5, borderColor: "rgba(59,130,246,0.5)" }}
              >
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links - 2 columns */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="group flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services - 2 columns */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
              OUR SERVICES
            </h3>
            <ul className="space-y-3">
              {ourServices.map((service) => (
                <li key={service.name}>
                  <motion.a 
                    href={service.href} 
                    className="group flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us - 4 columns */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4"
          >
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <span className="w-8 h-0.5 bg-blue-500 mr-3"></span>
              CONTACT US
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center">
                  <Building className="h-4 w-4 mr-2 text-blue-500" />
                  Branches Office
                </h4>
                <div className="space-y-2">
                  {branchOffices.map((office, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
                      whileHover={{ x: 5, borderColor: "rgba(59,130,246,0.5)" }}
                    >
                      <MapPinned className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-300 leading-relaxed">{office}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <motion.div 
                  className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
                  whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.5)" }}
                >
                  <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <a href="tel:+918928809025" className="text-gray-300 hover:text-blue-400 transition-colors text-sm block">
                      +91 8928809025
                    </a>
                    <a href="tel:+917208769025" className="text-gray-300 hover:text-blue-400 transition-colors text-sm block">
                      +91 7208769025
                    </a>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 bg-gray-800/30 rounded-lg p-3 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-200"
                  whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.5)" }}
                >
                  <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <a href="mailto:support@thecoderbox.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    support@thecoderbox.com
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Icons - Bottom of main footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-3 mt-12 pt-8 border-t border-gray-800"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-all duration-200 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 text-center md:text-left"
            >
              Copyright © {currentYear} <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">thecoderbox.com</a> | All Rights Reserved
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <motion.button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl group"
                aria-label="Scroll to top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;