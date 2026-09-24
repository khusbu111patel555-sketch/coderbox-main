import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ============================================
// BLUE PALETTE
// ============================================
const COLORS = {
  primaryBlue: '#01ADF0',
  gradientBlue: '#00C6FB',
  skyBlue: '#03B4F6',
  lightBlue: '#4DD3FF',
  paleBlue: '#A7E8FF',
  veryLightBlue: '#E6F8FF',
  mediumBlue: '#008FD1',
  deepBlue: '#006FA6',
  darkBlue: '#005B8F',
  navyBlue: '#003F7D',
  white: '#FFFFFF',
  gradient: 'linear-gradient(135deg, #00C6FB, #01ADF0)',
};

// ============================================
// PROJECTS DATA
// ============================================
const projects = [
  {
    id: 1,
    title: 'Scan n Go: Easy Entry',
    description: 'Scan n Go: Easy Entry is a fast, secure QR-based check-in and entry management app for residences, offices, events, hospitals, restaurants, and more. It offers effortless QR scanning, visitor and vehicle tracking, emergency alerts, queue management, GPS-based employee check-ins, attendance and leave tracking, and instant contact sharing—all with a user-friendly, privacy-focused design.',
    image: 'https://admin.sccinfotech.com/storage/products/product_11861_05-01-2026-12-16-03.jpg',
    link: '/products/details/scan-n-go:-easy-entry',
  },
  {
    id: 2,
    title: 'Qoncert: Live Shows',
    description: 'Qoncert is a platform where underground and rising artists connect directly with real fans. Users can discover local shows, buy and transfer tickets instantly, and support genuine independent music. Artists can request to perform, sell tickets, and grow city by city—without needing clout or algorithms. It\'s a movement empowering the real music scene.',
    image: 'https://admin.sccinfotech.com/storage/products/product_55090_05-01-2026-04-17-45.jpg',
    link: '/products/details/qoncert:-live-shows',
  },
  {
    id: 3,
    title: 'LITTA™ – On-Demand Junk Removal',
    description: 'LITTA™ is a leading UK-based on-demand junk removal platform that enables users to book same-day waste collection in under 60 seconds. The app covers junk, furniture, appliance, mattress removal and full home/office clearances with real-time quotes. Users benefit from live driver tracking, a digital waste transfer note, and an environmentally responsible waste disposal process.',
    image: 'https://admin.sccinfotech.com/storage/products/product_26923_03-12-2025-09-50-59.png',
    link: '/products/details/litta™-–-on-demand-junk-removal',
  },
  {
    id: 4,
    title: 'Carshops',
    description: 'Carshops is a specialized app designed for used car dealers, brokers, and agents to manage, maintain, and share their vehicle inventory seamlessly. The app enables dealers to build personal networks, share stock details, access 10x more cars, and simplify customer and CRM operations. With features like SYNC CAR, transfer data, CRM tools, and instant reporting, Carshops centralizes dealership operations and improves efficiency for both individual and network-based car sellers.',
    image: 'https://admin.sccinfotech.com/storage/products/product_71059_06-01-2026-06-21-31.jpg',
    link: '/products/details/carshops',
  },
  {
    id: 5,
    title: 'Multiplier',
    description: 'The Multiplier App is a clinical tool designed to quickly and accurately calculate pediatric bone growth, limb length, and height predictions using the proven Multiplier Method. It simplifies complex orthopedic formulas into instant results, reducing calculation time and improving precision for clinicians. Ideal for pediatric orthopedists, limb deformity specialists, and medical educators.',
    image: 'https://admin.sccinfotech.com/storage/products/product_63747_03-12-2025-11-55-19.png',
    link: '/products/details/multiplier',
  },
  {
    id: 6,
    title: 'Attendance Monitor System',
    description: 'Attendance Monitor System is a smart solution for tracking employee attendance, managing multiple branches, and monitoring real-time workforce activity. It streamlines HR operations through automation, analytics, and location-based tracking. Ideal for businesses seeking accurate, secure, and efficient workforce management.',
    image: 'https://admin.sccinfotech.com/storage/products/product_39718_05-01-2026-04-24-51.jpg',
    link: '/products/details/attendance-monitor-system',
  },
  {
    id: 7,
    title: 'Textile Vyapaar',
    description: 'Textile Vyapaar is a dedicated digital marketplace for the textile industry, enabling users to buy, sell, or rent textile machinery and industrial properties. With powerful search tools, secure chat, and category-specific listings, it connects textile professionals for fast and safe transactions. Ideal for factories, traders, and machinery dealers.',
    image: 'https://admin.sccinfotech.com/storage/products/product_41942_07-01-2026-07-06-45.jpg',
    link: '/products/details/textile-vyapaar',
  },
  {
    id: 8,
    title: 'Society Entry Manager',
    description: 'Society Entry Manager is an all-in-one visitor management and security solution designed for residential societies, gated communities, and building complexes. It streamlines entry approvals, tracks visitor logs, manages meetings, and enhances communication—ensuring safety, transparency, and convenience for both residents and security teams.',
    image: 'https://admin.sccinfotech.com/storage/products/product_30772_07-01-2026-07-07-10.jpg',
    link: '/projects/details/society-entry-manager',
  },
  {
    id: 9,
    title: 'Skeletal Maturity',
    description: 'An evidence-based clinical tool that helps clinicians rapidly and accurately estimate skeletal age in pediatric patients using standard orthopedic radiographs. It supports multiple validated skeletal maturity systems and streamlines the evaluation process for improved diagnostic precision.',
    image: 'https://admin.sccinfotech.com/storage/products/product_44784_04-12-2025-09-05-19.jpg',
    link: '/products/details/skeletal-maturity',
  },
  {
    id: 10,
    title: 'The Doomsday Alarm Clock',
    description: 'The Doomsday Alarm Clock is a free iOS alarm app that wakes you up with unsettling, apocalyptic-themed scenarios — like nuclear war, asteroid strike, or super-volcano — narrated over eerie sounds instead of a traditional alarm tone. It aims to jolt even heavy sleepers awake by confronting them with "bone-chilling facts" about global existential risks.',
    image: 'https://admin.sccinfotech.com/storage/products/product_72833_04-12-2025-09-47-39.jpg',
    link: '/products/details/the-doomsday-alarm-clock',
  },
  {
    id: 11,
    title: 'Virgam',
    description: 'Virgam is a business app for companies to track the working hours of employees and monitor materials or goods ordered by personnel. It gives employers clear, real-time insight into labor time and ordered resources — useful for workforce and inventory control.',
    image: 'https://admin.sccinfotech.com/storage/products/product_45931_04-12-2025-10-58-18.jpg',
    link: '/products/details/virgam',
  },
  {
    id: 12,
    title: 'Breathing Timer',
    description: 'Breathing Timer is a simple, calming, and scientifically-designed app that guides users through effective breathing exercises. With soothing audio cues and visually relaxing animations, the app helps reduce stress, improve mental clarity, and support daily mindfulness. Whether you\'re a beginner or experienced, it adapts to your pace and goals.',
    image: 'https://admin.sccinfotech.com/storage/products/product_97393_04-12-2025-11-19-27.jpg',
    link: '/products/details/breathing-timer',
  },
  {
    id: 13,
    title: 'All Streets',
    description: 'All Streets is a social guide that helps users discover new places, share favorite spots, and explore activities around the world. With geolocation, personalized feeds, and interactive messaging, it creates a vibrant community of explorers. Find, share, and enjoy the best local and international experiences effortlessly.',
    image: 'https://admin.sccinfotech.com/storage/products/product_11943_04-12-2025-11-57-32.png',
    link: '/products/details/all-streets',
  },
  {
    id: 14,
    title: 'Pick & Store – Personal Finance Manager',
    description: 'Pick & Store is a digital ledger and personal finance management app that lets users track expenses, income, loans, budgets, and bank transfers effortlessly. It provides powerful charts, reminders, and export options to simplify financial planning. Users can manage accounts offline, create unlimited accounts, and safeguard data with backups and restore options.',
    image: 'https://admin.sccinfotech.com/storage/products/product_71698_04-12-2025-12-31-35.jpg',
    link: '/products/details/pick-&-store-–-personal-finance-manager',
  },
  {
    id: 15,
    title: 'Global GPS Monitor',
    description: 'Global GPS Monitor is a real-time GPS monitoring solution that allows businesses to track vehicles, trucks, and field staff directly from an iPhone or iPad. View trip history, monitor geofences, and receive instant alerts for smarter and more efficient fleet operations.',
    image: 'https://admin.sccinfotech.com/storage/products/product_61728_04-12-2025-12-59-12.png',
    link: '/products/details/global-gps-monitor',
  },
  {
    id: 16,
    title: 'MVIHH - My Vote is Hip Hop',
    description: 'A community-based social networking platform designed to connect urban communities and provide access to broader resources through hip-hop culture as an engagement vehicle.',
    image: 'https://admin.sccinfotech.com/storage/products/product_83393_05-12-2025-05-03-47.jpg',
    link: '/products/details/mvihh---my-vote-is-hip-hop',
  },
  {
    id: 17,
    title: 'Kshupa',
    description: 'Kshupa is a modern Ayurvedic e-commerce platform offering 100% herbal, chemical-free hair and skin care products. The website delivers a seamless online shopping experience while promoting wellness through nature-based formulations rooted in traditional Indian herbs.',
    image: 'https://admin.sccinfotech.com/storage/products/product_83306_22-12-2025-11-18-01.jpg',
    link: '/products/details/kshupa',
  },
  {
    id: 18,
    title: 'JD Infrastructure',
    description: 'JD Infrastructure is a corporate website developed to showcase real estate and infrastructure projects with a strong focus on credibility, project transparency, and brand trust. The website presents company details, ongoing and completed projects, and contact flow in a clean, professional layout.',
    image: 'https://admin.sccinfotech.com/storage/products/product_73881_22-12-2025-06-56-24.jpg',
    link: '/products/details/jd-infrastructure',
  },
  {
    id: 19,
    title: 'Tavdawala Foods',
    description: 'Tavdawala Foods is a corporate brand website designed to present packaged food products with clarity, trust, and strong visual identity. The website highlights product categories, brand story, and inquiry flow while maintaining a clean and professional food-industry layout.',
    image: 'https://admin.sccinfotech.com/storage/products/product_18795_22-12-2025-09-26-24.jpg',
    link: '/products/details/tavdawala-foods',
  },
  {
    id: 20,
    title: 'Willsun Pharmacy',
    description: 'Willsun Pharmacy is a healthcare-focused website designed to present pharmacy services, product availability, and customer information in a clear and trustworthy manner. The platform emphasizes accessibility, reliability, and a smooth user experience to support digital healthcare engagement.',
    image: 'https://admin.sccinfotech.com/storage/products/product_97043_22-12-2025-11-14-07.jpg',
    link: '/products/details/willsun-pharmacy',
  },
  {
    id: 21,
    title: 'Sunshine Health & Beauty',
    description: 'Sunshine Health & Beauty is a modern wellness and beauty website designed to showcase health, beauty, and personal care services with a clean and user-friendly interface. The website focuses on trust, clarity, and accessibility while providing visitors with an engaging digital experience.',
    image: 'https://admin.sccinfotech.com/storage/products/product_99077_31-12-2025-08-34-28.jpg',
    link: '/products/details/sunshine-health-&-beauty',
  },
  {
    id: 22,
    title: 'Bapasitaram Cars',
    description: 'Bapasitaram Cars is an integrated web and mobile platform designed to simplify buying, selling, and exchanging used cars. The solution allows users to browse verified listings, compare prices, and connect with trusted sellers through a fast, secure, and user-friendly digital experience.',
    image: 'https://admin.sccinfotech.com/storage/products/product_23116_06-01-2026-08-36-02.jpg',
    link: '/products/details/bapasitaram-cars',
  },
];

// ============================================
// FILTERS DATA
// ============================================
const filters = [
  'All',
  'iOS', 'Android', 'Flutter', 'React Native', 'Node.js', 'PHP', 'Laravel',
  'React JS', 'Next.js', 'TypeScript', 'HTML5', 'MySQL', 'MongoDB',
  'Shopify', 'Figma', 'Adobe XD', 'Canva', 'Lottie', 'Photoshop',
  'AWS', 'DigitalOcean', 'Hostinger India', 'Apache Web Server', 'Cloudflare',
  'Google Cloud SQL / Firestore', 'OpenAI', 'Google AI', 'Python',
  'TensorFlow', 'Supabase', 'Firebase', 'PostgreSQL', 'Blade', 'Vanilla JavaScript',
];

// ============================================
// HERO SECTION (Updated with The CoderBox)
// ============================================
const PortfolioHero = () => {
  return (
    <section className="relative pt-32 pb-10">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h1 className="sec-hero-heading text-[#003F7D]">
          The CoderBox
          <br />
          <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
            Our Work Speaks for Itself.
          </span>
        </h1>
        <p className="sec-p sec-text-dark-soft mx-auto max-w-3xl">
          Explore how we've helped clients around the world turn ideas
          <br className="hidden md:block" />
          into powerful digital solutions.
        </p>
      </div>
    </section>
  );
};

// ============================================
// FILTERS SECTION
// ============================================
const PortfolioFilters = ({ activeFilter, setActiveFilter }) => {
  return (
    <section className="relative py-6 sm:py-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-40 h-40 bg-[#01ADF0]/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="flex gap-x-3 gap-y-3 flex-wrap justify-center relative">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  isActive
                    ? 'text-white shadow-lg shadow-[#003F7D]/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#E6F8FF] hover:text-[#006FA6] border border-gray-200 hover:border-[#01ADF0]/30'
                }`}
                style={isActive ? { backgroundColor: '#003F7D' } : {}}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROJECT CARD — Zigzag Layout & Enhanced Image
// ============================================
const ProjectCard = ({ project, index }) => {
  // Logic for alternating layout (Zigzag)
  const isEven = index % 2 === 0;
  
  // Even index (0, 2, 4...): Text Left, Image Right
  // Odd index (1, 3, 5...): Image Left, Text Right
  const textOrderClass = isEven ? 'md:order-1' : 'md:order-2';
  const imageOrderClass = isEven ? 'md:order-2' : 'md:order-1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.1 }}
      className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
    >
      {/* ===== TEXT SECTION ===== */}
      <div className={`w-full md:w-1/2 order-2 ${textOrderClass}`}>
        <h3 className="text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[46px] font-bold bg-gradient-to-r from-[#006FA6] to-[#01ADF0] bg-clip-text text-transparent mb-4 md:mb-6">
          {project.title}
        </h3>
        <p className="sec-p sec-text-dark-soft text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
          {project.description}
        </p>
        <a
          href={project.link}
          rel="noopener noreferrer"
          className="text-[#008FD1] hover:text-[#006FA6] font-medium transition-all text-base md:text-lg inline-flex items-center gap-2 group"
        >
          View Project
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* ===== IMAGE CARD — ENHANCED ATTRACTIVE DESIGN ===== */}
      <div className={`w-full md:w-1/2 order-1 ${imageOrderClass}`}>
        <div className="group relative rounded-[2rem] bg-gradient-to-br from-[#E6F8FF] via-[#D6F3FF] to-[#F1F9FF] p-6 md:p-8 flex items-center justify-center overflow-hidden border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(1,173,240,0.15)] transition-all duration-500 hover:-translate-y-2">
          
          {/* Subtle Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#01ADF00A_1px,transparent_1px),linear-gradient(to_bottom,#01ADF00A_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Animated Decorative Blobs */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#A7E8FF]/40 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#01ADF0]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          {/* Glowing Ring behind Image */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#01ADF0]/10 to-[#00C6FB]/10 blur-2xl group-hover:blur-3xl transition-all duration-700" />

          {/* Image Container with Drop Shadow & Hover Tilt */}
          <div className="relative z-10 w-full flex justify-center">
            <img
              alt={project.title}
              loading="lazy"
              width={600}
              height={400}
              className="w-full h-auto max-h-[380px] object-contain drop-shadow-[0_10px_20px_rgba(1,173,240,0.15)] group-hover:scale-[1.05] group-hover:-rotate-1 transition-transform duration-700 ease-out"
              src={project.image}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// PROJECTS SECTION
// ============================================
const PortfolioProjects = () => {
  return (
    <section className="relative py-10 pb-20 overflow-hidden">
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
        <motion.div
          className="absolute top-1/2 left-0 w-40 h-40 bg-[#03B4F6]/10 rounded-full blur-3xl"
          animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-40 h-40 bg-[#008FD1]/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid gap-16 md:gap-20 lg:gap-24">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-10">
      <PortfolioHero />
      <PortfolioFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <PortfolioProjects />
    </main>
  );
};

export default Portfolio;