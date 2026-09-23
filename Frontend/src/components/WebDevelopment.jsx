
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Star, ArrowRight, 
  ShoppingBag, Smartphone, Settings, Code, Monitor 
} from 'lucide-react';

// ============================================
// 1. HERO SECTION
// ============================================
const HeroSection = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[350px] overflow-hidden bg-gray-100">
      <img 
        src="https://thecoderbox.com/wp-content/uploads/2023/09/u-bg-slide-4.jpg"
        alt="Web Development Hero"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 pb-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
          Web Development
        </h1>
      </div>
    </section>
  );
};

// ============================================
// 2. INTRO SECTION
// ============================================
const IntroSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{ color: '#01ADF0' }}
        >
          Professional Web Development Services to Boost Sales & ROI
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We design and build industry-leading web-based products that delight your customers
        </p>
      </div>
    </section>
  );
};

// ============================================
// 3. SERVICES GRID
// ============================================
const ServicesGrid = () => {
  const services = [
    { 
      icon: <Monitor className="w-8 h-8" />,
      title: 'Websites', 
      desc: 'A well-designed website is a powerful marketing and communication tool that helps build trust and generate leads.' 
    },
    { 
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Ecommerce', 
      desc: 'With eCommerce solutions, businesses can operate 24 hours a day, 7 days a week, and reach customers in any time zone.' 
    },
    { 
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Web Applications', 
      desc: 'Web applications can reach a global audience. They\'re interactive and engaging, so can easily hold users\' attention.' 
    },
    { 
      icon: <Settings className="w-8 h-8" />,
      title: 'Content Management Systems', 
      desc: 'A dedicated CMS designed to the specific needs of your business will save time and money by optimizing internal workflows.' 
    },
    { 
      icon: <Code className="w-8 h-8" />,
      title: 'Low-Code Development', 
      desc: 'Low-code and no-code solutions offer an easy, modular, and scalable way of building applications.' 
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Achieve your business goals with web development solutions
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our battle-tested developers specialize in a wide range of web development services. Here's what we deliver.
          </p>
        </div>

        {/* ===== SERVICES GRID — 5 cards + Why Seek Support in same grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 — Websites */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-gray-100 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: '#01ADF0' }}
            >
              <Monitor className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">{services[0].title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{services[0].desc}</p>
          </motion.div>

          {/* Card 2 — Ecommerce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-100 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: '#01ADF0' }}
            >
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">{services[1].title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{services[1].desc}</p>
          </motion.div>

          {/* Card 3 — Web Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-100 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: '#01ADF0' }}
            >
              <Smartphone className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">{services[2].title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{services[2].desc}</p>
          </motion.div>

          {/* Card 4 — CMS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-100 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: '#01ADF0' }}
            >
              <Settings className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">{services[3].title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{services[3].desc}</p>
          </motion.div>

          {/* Card 5 — Low-Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-100 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: '#01ADF0' }}
            >
              <Code className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">{services[4].title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{services[4].desc}</p>
          </motion.div>

          {/* Why Seek Support — Right side (3rd column, Row 2) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col justify-center text-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why seek support with web development?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Businesses that we've worked with reported faster time-to-market, premium user experience, and flawless performance. We build web solutions for:
            </p>
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 self-start"
              style={{ 
                background: 'linear-gradient(135deg, #18239D 0%, #FE0094 100%)',
                boxShadow: '0 10px 25px -5px rgba(254, 0, 148, 0.4)'
              }}
            >
              Contact Us
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// ============================================
// 5. CHALLENGES SECTION
// ============================================
const ChallengesSection = () => {
  const challenges = [
    { title: 'Quick market entry', desc: 'For Zeller, an Australian fintech, we delivered a dedicated extension to their product and engineering teams to enhance the solution ahead of the product launch.' },
    { title: 'Digital acceleration', desc: 'For Keller Williams, we ensured the company progressed on their data-driven journey, providing a 50+ team of software and design experts.' },
    { title: 'Product expansion', desc: 'For Babbel, we build an additional module for the existing app that prepared it for a new B2B strategy.' },
  ];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden" style={{ backgroundColor: '#0a0a1a' }}>
      {/* ===== BACKGROUND GLOW EFFECTS ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right blue glow */}
        <div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(1, 173, 240, 0.15)' }}
        ></div>
        {/* Bottom-left purple glow */}
        <div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(0, 91, 143, 0.2)' }}
        ></div>
        {/* Center subtle glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(1, 173, 240, 0.05)' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Top challenges we solve
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-2xl"
            >
              <h4 className="text-xl font-semibold text-gray-800 text-center mb-4">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 6. TECHNOLOGIES SECTION
// ============================================
const TechnologiesSection = () => {
  const techs = [
    { name: 'Angular', img: 'https://thecoderbox.com/wp-content/uploads/2025/02/angular.svg' },
    { name: 'Ruby', img: 'https://thecoderbox.com/wp-content/uploads/2025/02/ruby-1.svg' },
    { name: 'Java', img: 'https://thecoderbox.com/wp-content/uploads/2025/02/java-1.svg' },
    { name: 'Python', img: 'https://thecoderbox.com/wp-content/uploads/2025/02/python-1.svg' },
    { name: 'Vue.js', img: 'https://thecoderbox.com/wp-content/uploads/2025/02/vue-js-1.svg' },
    { name: 'Next.js', img: 'https://thecoderbox.com/wp-content/uploads/2025/02/next-js-1.svg' },
    { name: 'Node.js', img: 'https://thecoderbox.com/wp-content/uploads/2025/02/node-js-1.svg' },
    { name: 'React', img: 'https://thecoderbox.com/wp-content/uploads/2025/02/react-js-1.svg' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Technologies we leverage
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-gray-200 rounded-full px-6 py-4 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <img src={tech.img} alt={tech.name} className="h-8 w-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// ============================================
// 7. PROGRESS CIRCLE (Why Netguru)
// ============================================
const ProgressCircle = ({ value, label, colorFrom, colorTo, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1300;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };

    const timer = setTimeout(() => requestAnimationFrame(animate), delay);
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  const radius = 87.5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / value) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-40 h-40 sm:w-48 sm:h-48">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 190 190">
          <defs>
            <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colorFrom} />
              <stop offset="100%" stopColor={colorTo} />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <circle cx="95" cy="95" r={radius} stroke="#f1f1f1" strokeWidth="15" fill="none" />
          {/* Colored progress circle */}
          <circle
            cx="95" cy="95" r={radius}
            stroke={`url(#grad-${label})`}
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl sm:text-4xl font-bold text-gray-800" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {count}<span className="text-2xl">+</span>
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm sm:text-lg text-gray-700 text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
        {label}
      </p>
    </div>
  );
};

const WhyNetguru = () => {
  // ✅ Exact image jaisa colors
  const stats = [
    { 
      value: 15, 
      label: 'Years on market', 
      colorFrom: '#F48FB1',  // Light pink
      colorTo: '#F06292',    // Pink
      delay: 100 
    },
    { 
      value: 400, 
      label: 'People on board', 
      colorFrom: '#DCE775',  // Light yellow-green
      colorTo: '#C0CA33',    // Yellow-green
      delay: 300 
    },
    { 
      value: 2500, 
      label: 'Projects delivered', 
      colorFrom: '#FFB74D',  // Light orange
      colorTo: '#FFA726',    // Orange
      delay: 600 
    },
    { 
      value: 73, 
      label: 'Our current NPS score', 
      colorFrom: '#4DD0E1',  // Light teal
      colorTo: '#26C6DA',    // Teal
      delay: 900 
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          Why Netguru?
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <ProgressCircle key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 8. CTA SECTION
// ============================================
const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white text-center">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Get Started with Coderbox
        </h3>

        {/* ✅ Button — ServicesSection jaisa */}
        <motion.a
          href="/contact-us"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          style={{ 
            backgroundColor: '#01ADF0',
            boxShadow: '0 15px 35px -5px rgba(1, 173, 240, 0.4)'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#006FA6'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#01ADF0'; }}
        >
          Contact Us
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        </motion.a>

        <p className="mt-6 text-gray-600">Let's innovate together!</p>
      </div>
    </section>
  );
};

// ============================================
// 9. MAIN PAGE COMPONENT
// ============================================
const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntroSection />
      <ServicesGrid />
      {/* <ProcessSection /> */}
      <ChallengesSection />
      <TechnologiesSection />
      <WhyNetguru />
      <CTASection />
    </div>
  );
};

export default WebDevelopment;
















