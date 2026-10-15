import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ===== REAL CLIENT TESTIMONIALS =====
  const testimonials = [
    { 
      quote: "CoderoBox understood our vision and translated it into a website that truly reflects the essence of ShomiHealings. The entire process was thoughtful, creative, and professional. Our digital presence now feels as strong as the work we do.", 
      author: "ShomiHealings", 
      role: "WEBSITE DEVELOPMENT", 
      company: "", 
      rating: 5, 
      emoji: "👩‍💼",
      verified: true 
    },
    { 
      quote: "CoderoBox transformed the way we communicate on social media. From creative content to consistent strategy, they helped Matangi build a much stronger and more engaging digital presence. Their understanding of branding and audience is impressive.", 
      author: "Matangi", 
      role: "SOCIAL MEDIA MARKETING", 
      company: "", 
      rating: 5, 
      emoji: "👩‍💼",
      verified: true 
    },
    { 
      quote: "We needed more than just a website — we needed a digital platform that could actually support business growth. CoderBox brought both website development and lead generation together into one effective strategy. The difference has been remarkable.", 
      author: "MEDAGREE", 
      role: "LEAD GENERATION & WEBSITE DEVELOPMENT", 
      company: "", 
      rating: 5, 
      emoji: "👨‍💼",
      verified: true 
    },
    { 
      quote: "CoderBox helped us turn our online presence into a genuine business-growth channel. The website looks great, but more importantly, the strategy behind it is designed to attract and convert the right customers. Their team has been proactive and result-focused throughout.", 
      author: "Ciora Cafe", 
      role: "LEAD GENERATION & WEBSITE DEVELOPMENT", 
      company: "", 
      rating: 5, 
      emoji: "👩‍💼",
      verified: true 
    },
    { 
      quote: "In healthcare, communication needs to be sensitive, credible, and engaging. CoderBox understood that balance beautifully. They helped us communicate our expertise online with content that feels professional, approachable, and meaningful.", 
      author: "Juhi Fertility", 
      role: "SOCIAL MEDIA MARKETING", 
      company: "", 
      rating: 5, 
      emoji: "👩‍⚕️",
      verified: true 
    },
    { 
      quote: "CoderBox showed us how AI can move beyond being a buzzword and become a practical part of our business. Their automation approach has helped streamline processes and reduce repetitive work while making our operations smarter and more efficient.", 
      author: "LEXEDGE", 
      role: "AI AUTOMATION", 
      company: "", 
      rating: 5, 
      emoji: "👨‍💼",
      verified: true 
    }
  ];

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    return [
      { ...testimonials[(currentIndex - 1 + total) % total], position: 'left' },
      { ...testimonials[currentIndex], position: 'center' },
      { ...testimonials[(currentIndex + 1) % total], position: 'right' }
    ];
  };

  return (
    // Section padding ko Services jaisa kar diya gaya hai
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden bg-gradient-to-br from-[#f8f9fc] via-[#f5f6fa] to-[#f0f2f8]">

      {/* ===== BACKGROUND DECORATION ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-[0.35]">
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" preserveAspectRatio="none">
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1={-100 + i * 40}
                y1="0"
                x2={-100 + i * 40 + 400}
                y2="400"
                stroke="#008df1"
                strokeWidth="1"
                opacity={0.15 - i * 0.01}
              />
            ))}
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.35]">
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" preserveAspectRatio="none">
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1={500 - i * 40}
                y1="0"
                x2={100 - i * 40}
                y2="400"
                stroke="#008df1"
                strokeWidth="1"
                opacity={0.15 - i * 0.01}
              />
            ))}
          </svg>
        </div>

        <div className="absolute top-8 right-8 sm:right-16 opacity-[0.05]">
          <Quote className="w-24 h-24 sm:w-32 sm:h-32 text-[#008df1] fill-current" />
        </div>

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#008df1]/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#005b8f]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10 max-w-7xl">

        {/* ===== HEADER (Ab bilkul ServicesSection jaisa) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          {/* Badge */}
          <motion.span
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Testimonials
          </motion.span>

          {/* Heading - Gradient text ke saath */}
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real stories from real businesses that trusted us to build, scale and succeed.
          </motion.p>
        </motion.div>

        {/* ===== CAROUSEL ===== */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#008df1] flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600 group-hover:text-[#008df1] transition-colors" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#008df1] flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-[#008df1] transition-colors" />
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-center px-8 sm:px-16 lg:px-20 pt-6">
            {getVisibleTestimonials().map((testimonial, idx) => {
              const isCenter = testimonial.position === 'center';

              return (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, scale: isCenter ? 0.9 : 0.95 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.7,
                    scale: isCenter ? 1.12 : 0.9,
                    y: isCenter ? -4 : 12,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`
                    relative bg-white rounded-2xl p-5 sm:p-6 
                    transition-all duration-500 ease-out
                    ${isCenter
                      ? 'border-2 border-[#008df1]/40 shadow-2xl shadow-[#008df1]/20 md:scale-105 z-20'
                      : 'border border-gray-100 shadow-md hidden md:block opacity-80'
                    }
                  `}
                >
                  <div className="mb-3">
                    <Quote className={`h-6 w-6 ${isCenter ? 'text-[#008df1]/40' : 'text-gray-200'} fill-current`} />
                  </div>

                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="sec-p text-gray-700 mb-4 line-clamp-4">
                    "{testimonial.quote}"
                  </p>

                  <div className="w-full h-px bg-gray-100 mb-3"></div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#008df1]/20 flex-shrink-0 flex items-center justify-center bg-[#008df1]/5 text-xl sm:text-2xl">
                      {testimonial.emoji}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="sec-h3 text-gray-900 truncate">{testimonial.author}</h3>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-medium truncate">
                        {testimonial.role}
                      </p>
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-0.5 bg-[#008df1]/10 px-1.5 py-0.5 rounded-full border border-[#008df1]/20 flex-shrink-0">
                        <CheckCircle2 className="h-2.5 w-2.5 text-[#008df1]" />
                        <span className="text-[8px] sm:text-[9px] font-semibold whitespace-nowrap" style={{ color: '#006fa6' }}>
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ===== DOT INDICATORS ===== */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-5 h-1.5 bg-[#008df1]'
                  : 'w-1.5 h-1.5 bg-gray-300 hover:bg-[#00c6fb]/60'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* ===== BOTTOM STATS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-3xl mx-auto">
            {[
              { value: '100%', label: 'Projects Delivered', color: '#008df1' },
              { value: '95%', label: 'Client Satisfaction', color: '#006fa6' },
              { value: '200+', label: 'Happy Clients', color: '#00c6fb' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`text-center ${idx < 2 ? 'sm:border-r sm:border-gray-200' : ''}`}
              >
                {/* Value - sec-h2 ke size ke saath match */}
                <motion.p
                  className="sec-h2 font-bold mb-1"
                  style={{ color: stat.color }}
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.p>
                {/* Label - sec-p ke size ke saath match */}
                <p className="sec-p text-gray-600 font-medium">
                  {stat.label}
                </p>
                <div className="w-10 h-0.5 bg-gray-200 mx-auto mt-1.5"></div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;