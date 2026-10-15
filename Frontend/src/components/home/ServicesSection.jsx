import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Brain, Monitor, Server, Lock, Sparkles, Zap, Shield, TrendingUp,
  ChevronLeft, ChevronRight, Code, Palette, Cloud, Smartphone,
  MessageSquare, BarChart3, Database, Workflow, Search, MapPin, Target,
  Share2, FileText, Mail, Users, Building2, Award, Layout, ShoppingCart,
  Globe2, UserCog, RefreshCw, GitBranch, Radio, PenTool, Megaphone
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // ===== ALL SERVICES (From Navbar Dropdown) =====
  const services = [
    // ===== AI INTELLIGENCE =====
    {
      title: 'AI/ML',
      subtitle: 'Intelligent machine learning models for your business',
      location: 'AI Intelligence',
      icon: Brain,
      gradient: 'from-[#01ADF0] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop&crop=center',
      badge: 'AI'
    },
    {
      title: 'Data Analytics',
      subtitle: 'Turn your data into actionable insights',
      location: 'AI Intelligence',
      icon: BarChart3,
      gradient: 'from-[#00C6FB] to-[#01ADF0]',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
      badge: 'Analytics'
    },
    {
      title: 'Data Science',
      subtitle: 'Advanced data science solutions for growth',
      location: 'AI Intelligence',
      icon: Database,
      gradient: 'from-[#03B4F6] to-[#008FD1]',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop&crop=center',
      badge: 'Data'
    },
    {
      title: 'Automation',
      subtitle: 'Intelligent automation for efficient workflows',
      location: 'AI Intelligence',
      icon: Zap,
      gradient: 'from-[#4DD3FF] to-[#006FA6]',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&crop=center',
      badge: 'Automation'
    },
    {
      title: 'Business Process Automation',
      subtitle: 'Streamline your business with BPA solutions',
      location: 'AI Intelligence',
      icon: Workflow,
      gradient: 'from-[#A7E8FF] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&crop=center',
      badge: 'BPA'
    },
    {
      title: 'AI Chatbots & Virtual Assistants',
      subtitle: 'Smart conversational AI for customer support',
      location: 'AI Intelligence',
      icon: MessageSquare,
      gradient: 'from-[#00C6FB] to-[#008FD1]',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop&crop=center',
      badge: 'Chatbots'
    },

    // ===== DIGITAL GROWTH =====
    {
      title: 'Digital Marketing & Branding',
      subtitle: 'Comprehensive digital marketing strategies',
      location: 'Digital Growth',
      icon: Megaphone,
      gradient: 'from-[#01ADF0] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=500&fit=crop&crop=center',
      badge: 'Marketing'
    },
    {
      title: 'SEO',
      subtitle: 'Rank higher and drive organic traffic',
      location: 'Digital Growth',
      icon: Search,
      gradient: 'from-[#03B4F6] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=500&fit=crop&crop=center',
      badge: 'SEO'
    },
    {
      title: 'Local SEO',
      subtitle: 'Dominate local search results',
      location: 'Digital Growth',
      icon: MapPin,
      gradient: 'from-[#00C6FB] to-[#01ADF0]',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop&crop=center',
      badge: 'Local'
    },
    {
      title: 'PPC Advertising',
      subtitle: 'Maximize ROI with targeted ad campaigns',
      location: 'Digital Growth',
      icon: Target,
      gradient: 'from-[#01ADF0] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center',
      badge: 'PPC'
    },
    {
      title: 'Social Media Marketing',
      subtitle: 'Engage and grow your audience',
      location: 'Digital Growth',
      icon: Share2,
      gradient: 'from-[#03B4F6] to-[#008FD1]',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=500&fit=crop&crop=center',
      badge: 'Social'
    },
    {
      title: 'Content Marketing',
      subtitle: 'Create content that converts',
      location: 'Digital Growth',
      icon: FileText,
      gradient: 'from-[#4DD3FF] to-[#006FA6]',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&crop=center',
      badge: 'Content'
    },
    {
      title: 'Email Marketing',
      subtitle: 'Reach your customers directly',
      location: 'Digital Growth',
      icon: Mail,
      gradient: 'from-[#A7E8FF] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop&crop=center',
      badge: 'Email'
    },
    {
      title: 'Performance Marketing',
      subtitle: 'Data-driven marketing for measurable results',
      location: 'Digital Growth',
      icon: TrendingUp,
      gradient: 'from-[#00C6FB] to-[#008FD1]',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop&crop=center',
      badge: 'Performance'
    },
    {
      title: 'Lead Generation',
      subtitle: 'Convert visitors into qualified leads',
      location: 'Digital Growth',
      icon: Users,
      gradient: 'from-[#01ADF0] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&crop=center',
      badge: 'Leads'
    },

    // ===== SEARCH INTELLIGENCE =====
    {
      title: 'AEO (Answer Engine Optimization)',
      subtitle: 'Optimize for answer engines',
      location: 'Search Intelligence',
      icon: MessageSquare,
      gradient: 'from-[#03B4F6] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&crop=center',
      badge: 'AEO'
    },
    {
      title: 'AI Search Optimization',
      subtitle: 'Rank in AI-powered search results',
      location: 'Search Intelligence',
      icon: Sparkles,
      gradient: 'from-[#00C6FB] to-[#01ADF0]',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center',
      badge: 'AI Search'
    },
    {
      title: 'GMB (Google My Business)',
      subtitle: 'Manage and optimize your GMB profile',
      location: 'Search Intelligence',
      icon: Building2,
      gradient: 'from-[#01ADF0] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&crop=center',
      badge: 'GMB'
    },
    {
      title: 'Reputation Management',
      subtitle: 'Build and protect your online reputation',
      location: 'Search Intelligence',
      icon: Award,
      gradient: 'from-[#03B4F6] to-[#008FD1]',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=500&fit=crop&crop=center',
      badge: 'Reputation'
    },

    // ===== WEB & E-COMMERCE =====
    {
      title: 'Web Development',
      subtitle: 'Custom websites tailored to your business needs',
      location: 'Web & E-Commerce',
      icon: Code,
      gradient: 'from-[#4DD3FF] to-[#006FA6]',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop&crop=center',
      badge: 'Popular'
    },
    {
      title: 'Responsive Website Design',
      subtitle: 'Beautiful websites on every device',
      location: 'Web & E-Commerce',
      icon: Monitor,
      gradient: 'from-[#A7E8FF] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&crop=center',
      badge: 'Responsive'
    },
    {
      title: 'Landing Pages',
      subtitle: 'High-converting landing pages',
      location: 'Web & E-Commerce',
      icon: Layout,
      gradient: 'from-[#00C6FB] to-[#008FD1]',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&crop=center',
      badge: 'Landing'
    },
    {
      title: 'E-Commerce Website Development',
      subtitle: 'Powerful online stores that sell',
      location: 'Web & E-Commerce',
      icon: ShoppingCart,
      gradient: 'from-[#01ADF0] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=center',
      badge: 'E-Commerce'
    },
    {
      title: 'Custom Web Applications',
      subtitle: 'Tailored web apps for your business',
      location: 'Web & E-Commerce',
      icon: Code,
      gradient: 'from-[#03B4F6] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&crop=center',
      badge: 'Custom'
    },
    {
      title: 'UI/UX Design',
      subtitle: 'Stunning interfaces & seamless experiences',
      location: 'Web & E-Commerce',
      icon: PenTool,
      gradient: 'from-[#00C6FB] to-[#01ADF0]',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&crop=center',
      badge: 'Creative'
    },
    {
      title: 'Metaverse',
      subtitle: 'Immersive metaverse experiences',
      location: 'Web & E-Commerce',
      icon: Globe2,
      gradient: 'from-[#01ADF0] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=500&fit=crop&crop=center',
      badge: 'Metaverse'
    },

    // ===== IT SERVICES =====
    {
      title: 'IT Consulting',
      subtitle: 'Expert guidance for digital transformation',
      location: 'IT Services',
      icon: UserCog,
      gradient: 'from-[#03B4F6] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&crop=center',
      badge: 'Consulting'
    },
    {
      title: 'Application Development & Maintenance',
      subtitle: 'Build and maintain robust applications',
      location: 'IT Services',
      icon: RefreshCw,
      gradient: 'from-[#00C6FB] to-[#01ADF0]',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop&crop=center',
      badge: 'Development'
    },
    {
      title: 'Enterprise Application Integration',
      subtitle: 'Seamlessly integrate enterprise apps',
      location: 'IT Services',
      icon: GitBranch,
      gradient: 'from-[#01ADF0] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&crop=center',
      badge: 'Integration'
    },
    {
      title: 'IT Staff Augmentation',
      subtitle: 'Scale your team with expert IT talent',
      location: 'IT Services',
      icon: Users,
      gradient: 'from-[#03B4F6] to-[#008FD1]',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&crop=center',
      badge: 'Staffing'
    },
    {
      title: 'Cloud Migration',
      subtitle: 'Move your business to the cloud',
      location: 'IT Services',
      icon: Cloud,
      gradient: 'from-[#4DD3FF] to-[#006FA6]',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center',
      badge: 'Cloud'
    },
    {
      title: 'System Integration',
      subtitle: 'Connect your systems for efficiency',
      location: 'IT Services',
      icon: GitBranch,
      gradient: 'from-[#A7E8FF] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center',
      badge: 'Systems'
    },

    // ===== CYBERSECURITY =====
    {
      title: 'Infrastructure Management Services',
      subtitle: 'Manage your IT infrastructure efficiently',
      location: 'Cybersecurity',
      icon: Server,
      gradient: 'from-[#00C6FB] to-[#008FD1]',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&crop=center',
      badge: 'Infrastructure'
    },
    {
      title: 'Cybersecurity',
      subtitle: 'Advanced security for your digital assets',
      location: 'Cybersecurity',
      icon: Lock,
      gradient: 'from-[#01ADF0] to-[#005B8F]',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&crop=center',
      badge: 'Secure'
    },
    {
      title: 'NOC Services',
      subtitle: '24/7 network operations center',
      location: 'Cybersecurity',
      icon: Radio,
      gradient: 'from-[#03B4F6] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop&crop=center',
      badge: 'NOC'
    },
    {
      title: 'Business Continuity & Security',
      subtitle: 'Keep your business running securely',
      location: 'Cybersecurity',
      icon: Shield,
      gradient: 'from-[#00C6FB] to-[#01ADF0]',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop&crop=center',
      badge: 'Business'
    },

    // ===== MOBILE =====
    {
      title: 'Mobile App Development',
      subtitle: 'Native & cross-platform mobile solutions',
      location: 'Mobile',
      icon: Smartphone,
      gradient: 'from-[#01ADF0] to-[#003F7D]',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&crop=center',
      badge: 'Mobile'
    },
    {
      title: 'Cloud Services',
      subtitle: 'Scalable infrastructure & cloud solutions',
      location: 'Cloud',
      icon: Cloud,
      gradient: 'from-[#4DD3FF] to-[#006FA6]',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center',
      badge: 'Enterprise'
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f1f1f1] overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-40 h-40 bg-[#01ADF0]/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#00C6FB]/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">

        {/* Header */}
        <AnimatedSection className="text-center mb-4 sm:mb-5 md:mb-6">
          <motion.span
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Best IT Solutions{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              by CoderBox
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive technology solutions designed to drive innovation and growth for your business
          </motion.p>
        </AnimatedSection>

        {/* ===== RESPONSIVE CAROUSEL ===== */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              640: { slidesPerView: 1.5, spaceBetween: 16 },
              1024: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="py-4 px-2 sm:px-6"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="pb-6">
                {({ isActive }) => (
                  <motion.div
                    className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                      isActive
                        ? 'scale-100 shadow-2xl shadow-[#01ADF0]/30 ring-2 ring-[#01ADF0]/50'
                        : 'scale-95 opacity-70'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative w-full aspect-[6/5]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 mix-blend-multiply`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-7">
                        {/* Badge (top-right) */}
                        {isActive && service.badge && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-4 right-4 bg-[#01ADF0] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-lg"
                          >
                            {service.badge}
                          </motion.div>
                        )}

                        {/* Icon */}
                        <motion.div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 shadow-lg shadow-[#01ADF0]/20`}
                          whileHover={{ scale: 1.1, rotate: 8 }}
                        >
                          <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 leading-tight ${
                          isActive ? 'opacity-100' : 'opacity-80'
                        }`}>
                          {service.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base text-white/85 mb-2">
                          {service.subtitle}
                        </p>

                        {/* Location (Category) */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#00C6FB] text-sm">📍</span>
                          <span className="text-sm sm:text-base text-white/70">
                            {service.location}
                          </span>
                        </div>

                        {/* Learn More */}
                        {isActive && (
                          <motion.a
                            href="#"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex items-center gap-2 text-[#00C6FB] font-semibold mt-3 text-sm sm:text-base group"
                          >
                            Learn More
                            <motion.span
                              animate={{ x: [0, 6, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </motion.span>
                          </motion.a>
                        )}
                      </div>

                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-gray-200 hover:border-[#01ADF0] shadow-md transition-all duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 hover:text-white" />
          </button>
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#01ADF0] backdrop-blur-sm rounded-full p-2 sm:p-3 border border-gray-200 hover:border-[#01ADF0] shadow-md transition-all duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 hover:text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-1 flex-wrap max-w-full">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-6 bg-[#01ADF0]'
                  : 'w-1 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-3 sm:mt-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/services"
            whileTap={{ scale: 0.95 }}
            className="sec-btn"
          >
            Explore All Services
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;