import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';

const HeroSection = () => {
  // ===== DEMO VIDEO URL =====
  const VIDEO_URL = "/demovideo.mp4";

  // ===== VIDEOS DATA WITH TEXT =====
  const videos = [
    {
      id: 1,
      url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/ac58913c11585c94a7d75a2186aa6aa8/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
      heading: 'Build Better Digital Experiences',
      highlightedText: 'Digital',
      description:
        'Transform your ideas into powerful digital solutions with our expert team. We combine cutting-edge technology with creative design.',
      buttonText: 'Start Building',
      badge: 'AI-Powered Innovation'
    },
    {
      id: 2,
      url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/729b701ecf254994b7b6e1215cc4fffc/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
      heading: 'Secure Your Digital Future',
      highlightedText: 'Secure',
      description:
        'Protect your business with advanced cybersecurity solutions. Our AI-driven defense systems keep your data safe 24/7.',
      buttonText: 'Get Protected',
      badge: 'Cybersecurity Expert'
    },
    {
      id: 3,
      url: "https://customer-r0s4aqwmwj2592cr.cloudflarestream.com/22c38ff130e1fd39bcabe2ee557bde3f/iframe?autoplay=true&muted=true&loop=true&playsinline=true",
      heading: 'Scale Your Business with AI',
      highlightedText: 'AI',
      description:
        'Leverage the power of artificial intelligence to automate workflows, gain insights, and drive exponential growth.',
      buttonText: 'Explore AI',
      badge: 'AI-Powered Solutions'
    }
  ];

  // ===== RIGHT COLUMN CARDS DATA =====
  const rightCards = [
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: '#00c6fb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI-Powered Security',
      description: 'Real-time threat detection & response',
      color: 'border-[#005b8f]/50',
      bg: 'bg-[#005b8f]/30'
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: '#00c6fb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Scalable Infrastructure',
      description: 'Enterprise-grade performance & reliability',
      color: 'border-[#005b8f]/50',
      bg: 'bg-[#005b8f]/30'
    },
    {
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: '#00c6fb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Zero-Trust Security',
      description: 'Advanced protection for modern threats',
      color: 'border-[#005b8f]/50',
      bg: 'bg-[#005b8f]/30'
    }
  ];

  // ===== STATE =====
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // ===== AUTO-PLAY LOGIC =====
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [videos.length]);

  // ===== LOCK BODY SCROLL WHEN MODAL OPEN =====
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVideoOpen]);

  // ===== ESC KEY CLOSE =====
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentVideo = videos[currentIndex];

  // ===== TEXT ANIMATION VARIANTS =====
  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  const headingTextVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <>
      <section className="relative h-[100dvh] w-full overflow-hidden">
        {/* ===== BACKGROUND VIDEO ===== */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={false}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 1.05
              }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{
                zIndex: index === currentIndex ? 5 : 0,
                pointerEvents: 'none'
              }}
            >
              <iframe
                src={video.url}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[300%] min-h-[300%]"
                style={{
                  pointerEvents: 'none',
                  border: 'none',
                  objectFit: 'cover'
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                title={`Background Video ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {/* ===== DOTS INDICATOR ===== */}
        <div className="absolute bottom-0 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:gap-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 bg-[#00c6fb] shadow-lg shadow-[#008df1]/50'
                  : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-[#00c6fb]/70'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-20 h-full flex items-center">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-10 2xl:gap-14 items-center w-full">
            {/* ===== LEFT COLUMN ===== */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6 max-w-3xl"
                >
                  {/* Badge */}
                  <motion.div variants={textVariants}>
                    <span
                      className="inline-block font-semibold text-xs sm:text-sm tracking-widest uppercase bg-[#008df1]/20 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#00c6fb]/40"
                      style={{ color: '#00c6fb' }}
                    >
                      {currentVideo.badge}
                    </span>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h1
                    variants={headingTextVariants}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] tracking-tight lg:whitespace-nowrap"
                  >
                    {currentVideo.heading.split(currentVideo.highlightedText)[0]}
                    <motion.span className="inline-block" style={{ color: '#00c6fb' }}>
                      {currentVideo.highlightedText}
                    </motion.span>
                    {currentVideo.heading.split(currentVideo.highlightedText)[1] || ''}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={textVariants}
                    className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl max-w-2xl leading-relaxed font-light text-white"
                  >
                    {currentVideo.description}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    variants={textVariants}
                    className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2"
                  >
                    <motion.a
                      href="/contact"
                      whileTap={{ scale: 0.95 }}
                      className="sec-btn"
                    >
                      {currentVideo.buttonText}
                      <motion.span
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </motion.a>

                    {/* ===== WATCH DEMO — OPENS MODAL ===== */}
                    <motion.button
                      type="button"
                      onClick={() => setIsVideoOpen(true)}
                      whileHover={{
                        scale: 1.05,
                        borderColor: 'rgba(0,198,251,0.6)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4 rounded-full font-semibold text-white transition-all duration-300 border-2 border-[#00c6fb]/30 hover:border-[#00c6fb]/70 backdrop-blur-sm flex items-center gap-2 text-sm sm:text-base lg:text-lg"
                    >
                      <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                      Watch Demo
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ===== RIGHT COLUMN ===== */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5"
              >
                {rightCards.map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      boxShadow: '0 20px 40px -15px rgba(0,141,241,0.3)'
                    }}
                    className={`bg-[#003f7d]/20 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 xl:p-6 border ${card.color} hover:border-[#00c6fb]/40 transition-all duration-300`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
                      <div className={`${card.bg} p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl flex-shrink-0`}>
                        {card.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-xs sm:text-sm lg:text-base xl:text-lg text-[#00C6FB]">
                          {card.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs lg:text-sm xl:text-base truncate text-[#00C6FB]/80">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO MODAL ===== */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#00c6fb] border border-white/20 hover:border-[#00c6fb] text-white transition-all duration-300"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-[#00c6fb]/30 shadow-2xl shadow-[#008df1]/30 bg-black"
            >
              <video
                src={VIDEO_URL}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;