import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Globe,
  CheckCircle2,
  Users,
  DollarSign,
  Settings,
  ShieldCheck,
  Smile,
  Zap,
  LifeBuoy,
  Shield,
  ArrowRight,
} from 'lucide-react';

/* =========================================================
   FIRST CODE COMPONENT (Carousel + Features)
   ========================================================= */
const WhyChooseUsCarousel = () => {
  const carouselImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format', title: 'Expert Team', description: '24+ skilled professionals' },
    { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format', title: 'Global Reach', description: '10 countries worldwide' },
    { id: 3, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format', title: 'Success Stories', description: '500+ projects delivered' },
    { id: 4, src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop&auto=format', title: 'Innovation Hub', description: 'Cutting-edge solutions' },
    { id: 5, src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&auto=format', title: 'Trusted Partner', description: '98% client satisfaction' },
    { id: 6, src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&auto=format', title: 'Financial Growth', description: '10x revenue increase' },
  ];

  const features = [
    { icon: Users, title: '24+ Expert Team Members', description: 'A large team with having 24 members, each bringing unique expertise to deliver exceptional results.' },
    { icon: Globe, title: '10 Countries Presence', description: 'We have branches in 10 countries, serving clients globally with localized solutions.' },
    { icon: Shield, title: 'Investment & Insurance', description: 'Deal in various fields investment, insurance etc. with comprehensive coverage.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getImageSize = () => {
    const width = windowSize.width;
    if (width < 400) return { w: 72, h: 50 };
    if (width < 480) return { w: 95, h: 65 };
    if (width < 640) return { w: 120, h: 85 };
    if (width < 768) return { w: 155, h: 105 };
    if (width < 1024) return { w: 190, h: 135 };
    if (width < 1280) return { w: 235, h: 165 };
    return { w: 280, h: 195 };
  };

  const getResponsiveRadius = () => {
    const width = windowSize.width;
    if (width < 400) return 52;
    if (width < 480) return 70;
    if (width < 640) return 92;
    if (width < 768) return 120;
    if (width < 1024) return 150;
    if (width < 1280) return 178;
    return 208;
  };

  const getContainerHeight = () => {
    const width = windowSize.width;
    if (width < 400) return 230;
    if (width < 480) return 275;
    if (width < 640) return 330;
    if (width < 768) return 390;
    if (width < 1024) return 445;
    if (width < 1280) return 490;
    return 540;
  };

  const getPosition = (index) => {
    const total = carouselImages.length;
    const angle = (index / total) * 360;
    const radius = getResponsiveRadius();
    const x = radius * Math.sin((angle * Math.PI) / 180);
    const y = -radius * Math.cos((angle * Math.PI) / 180);
    return { x, y, angle };
  };

  const imageSize = getImageSize();
  const containerHeight = getContainerHeight();

  return (
    <section className="relative pt-12 sm:pt-14 md:pt-12 lg:pt-10 pb-6 sm:pb-8 md:pb-10 lg:pb-12 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a] rounded-2xl w-full">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute -top-40 -right-40 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] rounded-full bg-[#008df1]/20 blur-3xl" animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute -bottom-40 -left-40 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl" animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* ===== LEFT COLUMN - CONTENT ===== */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-3 sm:space-y-4 md:space-y-4 order-1 w-full">
            <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>Why Choose Us</motion.span>
            <motion.h2 className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight">Why Choose <span style={{ color: '#00c6fb' }}>Us</span></motion.h2>
            <motion.p className="sec-p text-white/80 mt-1 max-w-2xl bg-white/5 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl border border-white/5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</motion.p>

            <div className="space-y-2 sm:space-y-2.5">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }} viewport={{ once: true }} whileHover={{ x: 3, scale: 1.01 }} className="flex gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#008df1]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#008df1]/20 p-1.5 flex items-center justify-center">
                    <feature.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="sec-h3 text-white mb-0.5 leading-tight">{feature.title}</h3>
                    <p className="sec-p text-white/80 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="flex justify-start mt-3 sm:mt-4" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
              <motion.a href="/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className="sec-btn">
                Get Started
                <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT COLUMN - 3D CAROUSEL ===== */}
          <div className="relative flex items-center justify-center w-full order-2 mt-2 lg:mt-0" style={{ height: `${containerHeight}px` }}>
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => {
                const { x, y } = getPosition(index);
                const isActive = index === currentIndex;
                const radius = getResponsiveRadius();
                const distance = Math.sqrt(x * x + y * y) / radius;

                let scale;
                if (isActive) scale = 1.12;
                else scale = 0.55 + (1 - Math.min(distance, 1)) * 0.35;

                const opacity = isActive ? 1 : 0.35 + (1 - Math.min(distance, 1)) * 0.4;
                const zIndex = isActive ? 20 : Math.round(10 - Math.min(distance, 1) * 8);

                return (
                  <motion.div key={image.id} className="absolute top-1/2 left-1/2" style={{ x, y, translateX: '-50%', translateY: '-50%', zIndex }} animate={{ scale, opacity, zIndex, x, y }} transition={{ duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }}>
                    <div className={`relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ${isActive ? 'shadow-[#008df1]/60 border-2 border-[#00c6fb]/50' : 'shadow-[#008df1]/10 border border-white/10'}`} style={{ width: isActive ? imageSize.w * 1.12 : imageSize.w, height: isActive ? imageSize.h * 1.12 : imageSize.h }}>
                      <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      {isActive && (
                        <motion.div className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                          <h3 className="sec-h3 text-white leading-tight">{image.title}</h3>
                          <p className="sec-p text-white/90 leading-tight mt-0.5">{image.description}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008df1]/20 blur-2xl pointer-events-none" style={{ width: Math.min(containerHeight * 0.3, 180), height: Math.min(containerHeight * 0.3, 180) }} animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
            <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
              {carouselImages.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-3.5 sm:w-4 h-1 bg-[#008df1]' : 'w-1.5 h-1 bg-gray-500 hover:bg-[#00c6fb]/60'}`} aria-label={`Go to slide ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   SECOND CODE COMPONENT (Main WhyChooseUsSection)
   ========================================================= */
const WhyChooseUsSection = () => {
  const [activeTab, setActiveTab] = useState('impact');

  const impactData = [
    { id: 1, value: '10+', label: 'Years of Excellence', description: 'Delivering quality since 2016', icon: Award },
    { id: 2, value: '55+', label: 'Countries Served', description: 'Global reach, local expertise', icon: Globe },
    { id: 3, value: '700+', label: 'Projects Delivered', description: 'Across diverse industries', icon: CheckCircle2 },
    { id: 4, value: '500+', label: 'Happy Clients', description: 'And growing every day', icon: Users },
  ];

  const strengthData = [
    { id: 1, title: 'Experienced Team', description: 'Developers, designers, and project managers with 6+ years of expertise.', icon: Users, color: '#01ADF0' },
    { id: 2, title: 'Global Delivery', description: 'Successfully delivered projects across 55+ countries.', icon: Globe, color: '#005B8F' },
    { id: 3, title: 'Affordable Solutions', description: 'Competitive pricing with no compromise on quality.', icon: DollarSign, color: '#00C6FB' },
    { id: 4, title: 'Custom-Tailored Development', description: 'Every solution is built to match your exact needs.', icon: Settings, color: '#008FD1' },
    { id: 5, title: 'Security First', description: 'We follow strict data protection and security standards.', icon: ShieldCheck, color: '#003F7D' },
    { id: 6, title: 'Client Satisfaction', description: 'Trusted by 500+ clients with 93% repeat business.', icon: Smile, color: '#01ADF0' },
    { id: 7, title: 'Fast Turnaround', description: 'Agile process with quick iterations and delivery.', icon: Zap, color: '#006FA6' },
    { id: 8, title: 'Ongoing Support', description: 'Dedicated post-launch maintenance and support.', icon: LifeBuoy, color: '#03B4F6' },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6F8FF]/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A7E8FF]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ===== HEADER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span 
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Why Us
          </motion.span>

          <motion.h2 
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              TheCoderBox
            </span>
           
          </motion.h2>

          <motion.p 
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With proven expertise and unwavering commitment to excellence, we deliver digital solutions that drive growth and transform businesses.
          </motion.p>
        </motion.div>

        {/* ===== TAB SWITCHER ===== */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full shadow-md relative flex-wrap justify-center gap-1">
            <button onClick={() => setActiveTab('impact')} className={`relative px-6 py-2.5 rounded-full z-[2] text-sm font-medium transition-all duration-300 ${activeTab === 'impact' ? 'text-white' : 'text-gray-600 hover:text-[#01ADF0]'}`}>
              {activeTab === 'impact' && <motion.div layoutId="activeTabIndicator" className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
              Our Impact
            </button>
            <button onClick={() => setActiveTab('strengths')} className={`relative px-6 py-2.5 rounded-full z-[2] text-sm font-medium transition-all duration-300 ${activeTab === 'strengths' ? 'text-white' : 'text-gray-600 hover:text-[#01ADF0]'}`}>
              {activeTab === 'strengths' && <motion.div layoutId="activeTabIndicator" className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
              Our Strengths
            </button>
            <button onClick={() => setActiveTab('carousel')} className={`relative px-6 py-2.5 rounded-full z-[2] text-sm font-medium transition-all duration-300 ${activeTab === 'carousel' ? 'text-white' : 'text-gray-600 hover:text-[#01ADF0]'}`}>
              {activeTab === 'carousel' && <motion.div layoutId="activeTabIndicator" className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
              Why Choose Us
            </button>
          </div>
        </div>

        {/* ===== TAB CONTENT ===== */}
        <AnimatePresence mode="wait">
          {activeTab === 'impact' && (
            <motion.div key="impact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactData.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#01ADF0]/10 to-white scale-0 group-hover:scale-100 transition-transform duration-500" />
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#01ADF0]/5 to-[#00C6FB]/10 rounded-full relative z-10 text-4xl group-hover:text-[#01ADF0] transition-colors duration-300" style={{ color: '#003F7D' }}>
                        <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#003F7D] to-[#01ADF0] bg-clip-text text-transparent group-hover:from-[#01ADF0] group-hover:to-[#00C6FB] transition-all duration-500">{item.value}</h3>
                  <p className="sec-h3 text-[#003F7D] mb-1">{item.label}</p>
                  <p className="sec-p text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'strengths' && (
            <motion.div key="strengths" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengthData.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 border border-gray-100 hover:shadow-xl hover:-translate-y-1 group overflow-hidden relative h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[#00C6FB] group-hover:to-[#01ADF0] transition-all duration-500" />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 text-white shadow-md" style={{ backgroundColor: item.color }}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="sec-h3 text-[#003F7D] group-hover:text-[#01ADF0] transition-colors duration-300 mb-2">{item.title}</h3>
                  <p className="sec-p text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ===== LAST TAB: CAROUSEL (Ab Full Width) ===== */}
          {activeTab === 'carousel' && (
            <motion.div 
              key="carousel" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              transition={{ duration: 0.4 }}
              // 👇 YAHAN FULL WIDTH TRICK LAGAYI HAI
              className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 sm:px-6 lg:px-8"
            >
              <WhyChooseUsCarousel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;