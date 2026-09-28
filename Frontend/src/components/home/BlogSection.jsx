

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const BlogGridSection = () => {
//   // ===== BLOG DATA (TheCoderBox ke liye) =====
//   const blogs = [
//     {
//       id: 1,
//       type: 'teal-text',
//       category: 'Insights',
//       title: 'Digital Marketing Trends That Will Dominate 2026',
//       description: 'Discover the top digital marketing strategies that are reshaping how brands connect with their audiences in 2026 and beyond.',
//       image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800&fit=crop',
//       link: '/blog/digital-marketing-trends-2026',
//       order: 'image-first',
//     },
//     {
//       id: 2,
//       type: 'black-text',
//       category: 'Insights',
//       title: 'How AI is Transforming Digital Marketing for Small Businesses',
//       description: 'Learn how AI-powered tools are leveling the playing field for small businesses and helping them compete with industry giants.',
//       image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop',
//       link: '/blog/ai-digital-marketing-small-business',
//       order: 'text-first',
//     },
//     {
//       id: 3,
//       type: 'teal-text',
//       category: 'Case Study',
//       title: 'How TheCoderBox Helped a Restaurant Chain Triple Their Online Orders',
//       description: 'Read how we built a complete digital presence for a restaurant chain and increased their online orders by 300% in just 6 months.',
//       image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop',
//       link: '/blog/restaurant-chain-case-study',
//       order: 'text-first',
//     },
//     {
//       id: 4,
//       type: 'white-text',
//       category: 'Case Study',
//       title: 'E-Commerce Growth: From Zero to 100K Monthly Visitors',
//       description: 'Discover how TheCoderBox helped an e-commerce brand scale from zero to 100K monthly visitors using SEO and content marketing.',
//       image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
//       link: '/blog/ecommerce-growth-case-study',
//       order: 'image-first',
//     },
//     {
//       id: 5,
//       type: 'white-text',
//       category: 'Guide',
//       title: 'Complete Guide to SEO for Startups in 2026',
//       description: 'A comprehensive guide to help startups build a strong SEO foundation from scratch and rank higher on Google search results.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
//       link: '/blog/seo-guide-startups',
//       order: 'image-first',
//     },
//     {
//       id: 6,
//       type: 'teal-text',
//       category: 'Case Study',
//       title: 'Building a Scalable Mobile App for a Fashion Brand',
//       description: 'Learn how TheCoderBox developed a cross-platform mobile app for a fashion brand and helped them boost customer engagement by 250%.',
//       image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop',
//       link: '/blog/fashion-brand-mobile-app',
//       order: 'text-first',
//     },
//   ];

//   // ===== ✅ COLOR STYLES BASED ON TYPE =====
//   const getTextStyles = (type) => {
//     switch (type) {
//       case 'teal-text':
//         return {
//           bg: 'bg-[#008df1]',
//           category: 'text-white/80',
//           title: 'text-white',
//           desc: 'text-white/85',
//           arrowColor: 'text-white',
//           readMore: 'text-white',
//         };
//       case 'black-text':
//         return {
//           bg: 'bg-[#005b8f]',
//           category: 'text-white/80',
//           title: 'text-white',
//           desc: 'text-white/85',
//           arrowColor: 'text-white',
//           readMore: 'text-white',
//         };
//       case 'white-text':
//       default:
//         return {
//           bg: 'bg-white',
//           category: 'text-gray-500',
//           title: 'text-gray-900',
//           desc: 'text-gray-600',
//           arrowColor: 'text-[#008df1]',
//           readMore: 'text-[#008df1]',
//         };
//     }
//   };

//   return (
//     // Section padding ko Services jaisa kar diya gaya hai
//     <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f5f5f5] overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">

//         {/* ===== SECTION HEADER (Bilkul ServicesSection jaisa) ===== */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-4 sm:mb-5 md:mb-6"
//         >
//           {/* Badge */}
//           <motion.span
//             className="sec-badge inline-block"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             Our Blog
//           </motion.span>

//           {/* Heading - Gradient text */}
//           <motion.h2
//             className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.15 }}
//           >
//             Latest{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Insights & Case Studies
//             </span>
//           </motion.h2>

//           {/* Subtitle */}
//           <motion.p
//             className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Stay updated with the latest trends, strategies and success stories from TheCoderBox
//           </motion.p>
//         </motion.div>

//         {/* ===== BLOG GRID ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
//           {blogs.map((blog, idx) => {
//             const styles = getTextStyles(blog.type);
//             const isImageFirst = blog.order === 'image-first';

//             return (
//               <motion.a
//                 key={blog.id}
//                 href={blog.link}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className={`group relative flex flex-col sm:flex-row h-full min-h-[300px] sm:min-h-[340px] overflow-hidden cursor-pointer ${
//                   isImageFirst ? 'sm:flex-row' : 'sm:flex-row-reverse'
//                 }`}
//               >
//                 {/* ===== IMAGE SIDE ===== */}
//                 <div className="relative w-full sm:w-1/2 h-48 sm:h-auto overflow-hidden">
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
//                 </div>

//                 {/* ===== TEXT SIDE ===== */}
//                 <div className={`relative w-full sm:w-1/2 p-6 sm:p-7 flex flex-col justify-center ${styles.bg} transition-all duration-500`}>
//                   {/* Category */}
//                   <p className={`text-xs font-medium uppercase tracking-wider mb-3 ${styles.category}`}>
//                     {blog.category}
//                   </p>

//                   {/* Title - sec-h3 class use ki gayi hai */}
//                   <h3 className={`sec-h3 leading-tight mb-3 ${styles.title} group-hover:opacity-90 transition-opacity duration-300`}>
//                     {blog.title}
//                   </h3>

//                   {/* Description - sec-p class use ki gayi hai */}
//                   <p className={`sec-p leading-relaxed mb-4 ${styles.desc} line-clamp-4`}>
//                     {blog.description}
//                   </p>

//                   {/* Read More */}
//                   <div className="mt-auto flex items-center gap-2">
//                     <span className={`text-xs font-semibold uppercase tracking-wider ${styles.readMore}`}>
//                       Read More
//                     </span>
//                     <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 ${styles.arrowColor}`} />
//                   </div>
//                 </div>

//               </motion.a>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BlogGridSection;




import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

/* ============================================================
   Blog Carousel Section — horizontal snap carousel
   - Stat numbers responsive via container queries (cqw)
   - Top & bottom padding: 60px
   - Uses sec-* font classes + standard heading
   ============================================================ */

/* ---------- BLOG DATA ---------- */
const BLOGS = [
  {
    id: 1,
    number: '01',
    tag: 'Case Study',
    tone: 'accent',
    visual: { kind: 'stat', big: '+300%', small: 'online orders in 6 months' },
    title: 'How TheCoderBox helped a restaurant chain triple their online orders',
    description: 'A complete digital presence that grew online orders by 300% in six months.',
    link: '/blog/restaurant-chain-case-study',
  },
  {
    id: 2,
    number: '02',
    tag: 'Insights',
    tone: 'blue',
    visual: { kind: 'chart' },
    title: 'Digital marketing trends that will dominate 2026',
    description: 'The strategies reshaping how brands connect with their audiences in 2026 and beyond.',
    link: '/blog/digital-marketing-trends-2026',
  },
  {
    id: 3,
    number: '03',
    tag: 'Case Study',
    tone: 'sand',
    visual: { kind: 'stat', big: '100K', small: 'monthly visitors — from zero' },
    title: 'E-commerce growth: from zero to 100K monthly visitors',
    description: 'How we scaled an e-commerce brand with SEO and content marketing.',
    link: '/blog/ecommerce-growth-case-study',
  },
  {
    id: 4,
    number: '04',
    tag: 'Insights',
    tone: 'ink',
    visual: { kind: 'network' },
    title: 'How AI is transforming marketing for small businesses',
    description: 'AI-powered tools are leveling the playing field against industry giants.',
    link: '/blog/ai-marketing-small-business',
  },
  {
    id: 5,
    number: '05',
    tag: 'Guide',
    tone: 'sand',
    visual: { kind: 'radar' },
    title: 'The complete guide to SEO for startups in 2026',
    description: 'Build a strong SEO foundation from scratch and rank higher on Google.',
    link: '/blog/seo-guide-startups',
  },
  {
    id: 6,
    number: '06',
    tag: 'Case Study',
    tone: 'ink',
    visual: { kind: 'stat', big: '+250%', small: 'customer engagement' },
    title: 'Building a scalable mobile app for a fashion brand',
    description: 'A cross-platform app that lifted customer engagement for a fashion label.',
    link: '/blog/fashion-brand-mobile-app',
  },
];

/* ---------- TONE MAP ---------- */
const TONE = {
  accent: 'bg-[#0057D9] text-white',
  blue:   'bg-[#E3ECFF] text-[#0057D9]',
  ink:    'bg-[#111114] text-[#F5F4EF]',
  sand:   'bg-[#E9E5DA] text-[#111114]',
};

/* ---------- HELPERS ---------- */
const MONO = "'JetBrains Mono', ui-monospace, monospace";
const pad  = (n) => (n < 10 ? `0${n}` : `${n}`);

/* ============================================================
   VISUAL (art inside each card)
   ============================================================ */
/* ============================================================
   VISUAL (art inside each card)
   ============================================================ */
const CardVisual = ({ visual }) => {
  if (visual.kind === 'stat') {
    return (
      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1.5">
        {/* ✅ Bigger stat — still fully responsive & always fits */}
        <b
          className="sec-h2 block leading-[.88] tracking-[-.045em] m-0"
          style={{ fontSize: 'clamp(60px, 19cqw, 96px)' }}
        >
          {visual.big}
        </b>
        <span className="sec-p text-xs sm:text-sm opacity-85 m-0">
          {visual.small}
        </span>
      </div>
    );
  }

  if (visual.kind === 'chart') {
    return (
      <svg
        viewBox="0 0 320 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="w-full h-full block"
      >
        <g fill="currentColor">
          <rect x="56"  y="206" width="26" height="54"  rx="4" opacity=".18" />
          <rect x="98"  y="184" width="26" height="76"  rx="4" opacity=".26" />
          <rect x="140" y="194" width="26" height="66"  rx="4" opacity=".34" />
          <rect x="182" y="150" width="26" height="110" rx="4" opacity=".5" />
          <rect x="224" y="118" width="26" height="142" rx="4" opacity=".7" />
          <rect x="266" y="76"  width="26" height="184" rx="4" />
          <circle cx="279" cy="64" r="6" />
        </g>
        <polyline
          points="69,196 111,174 153,184 195,140 237,108 279,64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 5"
        />
      </svg>
    );
  }

  if (visual.kind === 'network') {
    return (
      <svg
        viewBox="0 0 320 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="w-full h-full block"
      >
        <defs>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="13" cy="13" r="1.5" fill="#F5F4EF" opacity=".28" />
          </pattern>
        </defs>
        <rect width="320" height="300" fill="url(#dots)" />
        <path
          d="M70 190 L160 130 L250 190 L190 250 M160 130 L190 250 M70 190 L190 250 M250 190 L270 96 M160 130 L270 96"
          fill="none"
          stroke="#F5F4EF"
          strokeWidth="1.5"
          opacity=".7"
        />
        <g fill="#F5F4EF">
          <circle cx="70"  cy="190" r="8" />
          <circle cx="250" cy="190" r="8" />
          <circle cx="190" cy="250" r="8" />
          <circle cx="270" cy="96"  r="8" />
        </g>
        <circle cx="160" cy="130" r="16" fill="#0057D9" />
        <circle cx="160" cy="130" r="30" fill="none" stroke="#0057D9" strokeWidth="1.5" opacity=".7" />
      </svg>
    );
  }

  if (visual.kind === 'radar') {
    return (
      <svg
        viewBox="0 0 320 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="w-full h-full block"
      >
        <g fill="none" stroke="#111114" strokeWidth="1.5">
          <circle cx="220" cy="190" r="40" />
          <circle cx="220" cy="190" r="80"  opacity=".55" />
          <circle cx="220" cy="190" r="120" opacity=".3" />
          <circle cx="220" cy="190" r="160" opacity=".15" />
        </g>
        <circle cx="220" cy="190" r="14" fill="#0057D9" />
        <g fill="#111114">
          <circle cx="163" cy="133" r="7" />
          <circle cx="110" cy="250" r="5" />
          <circle cx="104" cy="112" r="4" />
        </g>
      </svg>
    );
  }

  return null;
};

/* ============================================================
   BLOG CARD
   ============================================================ */
const BlogCard = ({ blog }) => {
  const tone = TONE[blog.tone];

  return (
    <a
      href={blog.link}
      data-card
      className="post w-[280px] md:w-[320px] flex-shrink-0 flex flex-col gap-5 md:gap-6 snap-start rounded-[22px] focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4 group"
    >
      {/* VISUAL — container-type makes cqw work inside */}
      <div
        className={`relative h-[260px] md:h-[300px] rounded-[22px] overflow-hidden ${tone}`}
        style={{ containerType: 'inline-size' }}
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105">
          <CardVisual visual={blog.visual} />
        </div>

        {/* META (number + tag) */}
        <div
          className="absolute top-5 left-5 right-5 flex justify-between items-center text-xs tracking-[.06em]"
          style={{ fontFamily: MONO }}
        >
          <span>{blog.number}</span>
          <span className="px-2.5 py-[5px] rounded-full border border-current uppercase">
            {blog.tag}
          </span>
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-col gap-3 px-1">
        <h3 className="sec-h3 leading-[1.08] tracking-[-.015em] m-0 group-hover:underline decoration-1 underline-offset-[5px]">
          {blog.title}
        </h3>
        <p className="sec-p leading-[1.6] m-0 text-[#4A4A52]">{blog.description}</p>
        <span className="inline-flex items-center gap-2 mt-1 text-sm font-semibold">
          Read article
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </a>
  );
};

/* ============================================================
   MAIN SECTION
   ============================================================ */
const BlogCarouselSection = () => {
  const trackRef = useRef(null);
  const [current, setCurrent]         = useState(1);
  const [canPrev, setCanPrev]         = useState(false);
  const [canNext, setCanNext]         = useState(true);
  const [fillPercent, setFillPercent] = useState(33);
  const total = BLOGS.length;

  /* ---------- DRAG REFS ---------- */
  const isDownRef    = useRef(false);
  const startXRef    = useRef(0);
  const startLeftRef = useRef(0);
  const movedRef     = useRef(false);

  /* ---------- STEP = card width + gap ---------- */
  const getStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector('[data-card]');
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 24;
    return card.getBoundingClientRect().width + gap;
  }, []);

  /* ---------- UPDATE PROGRESS ---------- */
  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = getStep();
    if (!s) return;
    const max     = track.scrollWidth - track.clientWidth;
    const index   = Math.round(track.scrollLeft / s);
    const visible = Math.max(1, Math.floor(track.clientWidth / s));

    setCurrent(Math.min(total, index + 1));
    setFillPercent(Math.min(100, ((index + visible) / total) * 100));
    setCanPrev(track.scrollLeft > 2);
    setCanNext(track.scrollLeft < max - 2);
  }, [getStep, total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => requestAnimationFrame(update);
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  /* ---------- NAV ---------- */
  const scrollPrev = () => trackRef.current?.scrollBy({ left: -getStep(), behavior: 'smooth' });
  const scrollNext = () => trackRef.current?.scrollBy({ left:  getStep(), behavior: 'smooth' });

  /* ---------- DRAG TO SCROLL (mouse) ---------- */
  const handleMouseDown = (e) => {
    isDownRef.current    = true;
    movedRef.current     = false;
    startXRef.current    = e.pageX;
    startLeftRef.current = trackRef.current?.scrollLeft || 0;
    if (trackRef.current) {
      trackRef.current.style.scrollSnapType = 'none';
      trackRef.current.style.scrollBehavior = 'auto';
    }
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!isDownRef.current || !trackRef.current) return;
      const dx = e.pageX - startXRef.current;
      if (Math.abs(dx) > 5) movedRef.current = true;
      trackRef.current.scrollLeft = startLeftRef.current - dx;
    };
    const onUp = () => {
      if (!isDownRef.current || !trackRef.current) return;
      isDownRef.current = false;
      trackRef.current.style.scrollSnapType = '';
      trackRef.current.style.scrollBehavior = '';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  /* Block click if it was a drag, not a tap */
  const handleClickCapture = (e) => {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      movedRef.current = false;
    }
  };

  /* ---------- KEYBOARD ---------- */
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollNext(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollPrev(); }
  };

  return (
    <section className="relative bg-[#F5F4EF] text-[#111114] overflow-hidden">
      {/* Top & bottom padding = 60px */}
      <div className="flex flex-col lg:flex-row gap-9 lg:gap-16 py-[60px] pl-5 lg:pl-24 pr-0 max-w-[1600px] mx-auto">

        {/* ===== INTRO (left column) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:w-[360px] lg:flex-shrink-0 gap-7 lg:gap-12 pr-5 lg:pr-0 lg:justify-between"
        >
          <div className="flex flex-col gap-7">
            {/* Badge */}
            <motion.span
              className="sec-badge inline-block self-start"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Our Blog
            </motion.span>

            {/* Heading */}
            <h2 className="sec-h2 sec-text-dark leading-tight m-0">
              Latest{' '}
              <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                Insights & Case Studies
              </span>
            </h2>

            {/* Subtitle */}
            <p className="sec-p sec-text-dark-soft m-0">
              Stay updated with the latest trends, strategies and success stories from TheCoderBox.
            </p>
          </div>

          {/* ===== PROGRESS + CONTROLS ===== */}
          <div className="flex flex-col">
            <div
              className="flex items-center gap-4 text-[13px]"
              style={{ fontFamily: MONO }}
              aria-hidden="true"
            >
              <span>{pad(current)}</span>
              <div className="flex-grow h-[2px] bg-[#DAD7CC] rounded-full overflow-hidden">
                <span
                  className="block h-full bg-[#111114] transition-[width] duration-[400ms] ease-out"
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
              <span className="text-[#4A4A52]">{pad(total)}</span>
            </div>

            <div className="flex items-center justify-between mt-7">
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canPrev}
                  aria-label="Previous articles"
                  className={`w-[52px] h-[52px] rounded-full border border-[#CFCBBF] bg-transparent text-[#111114] flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4 disabled:opacity-35 disabled:cursor-default ${
                    canPrev ? 'hover:bg-[#111114] hover:text-white hover:border-[#111114]' : ''
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canNext}
                  aria-label="Next articles"
                  className={`w-[52px] h-[52px] rounded-full border border-[#CFCBBF] bg-transparent text-[#111114] flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4 disabled:opacity-35 disabled:cursor-default ${
                    canNext ? 'hover:bg-[#111114] hover:text-white hover:border-[#111114]' : ''
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-[15px] font-semibold pb-1 border-b-[1.5px] border-[#111114] transition-colors hover:text-[#0057D9] hover:border-[#0057D9] focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4"
              >
                View all
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===== TRACK (horizontal scroll) ===== */}
        <div
          ref={trackRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onClickCapture={handleClickCapture}
          aria-label="Articles"
          className="flex-1 min-w-0 flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-5 lg:pr-24 cursor-grab active:cursor-grabbing overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4"
        >
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarouselSection;