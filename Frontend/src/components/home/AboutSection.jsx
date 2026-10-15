import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, TrendingUp } from 'lucide-react';

/* ============================================================
   DATA
   ============================================================ */
const CHIPS = [
  'Branding', 'Technology', 'AI', 'Digital Strategy',
  'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
];

const MARQUEE_SERVICES = [
  'Branding', 'Technology', 'AI', 'Digital Strategy',
  'Performance Marketing', 'SEO', 'Automation', 'Lead Generation', 'Analytics',
];

const MARQUEE_LINES = [
  'Made in India', 'Built for the World', 'Human-Centered',
  'AI-Driven', 'Build. Scale. Transform.',
  'Your Expertise. Our Strategy. Your Growth.',
];

const STATS = [
  { value: '09',    label: 'Service Pillars' },
  { value: '1',     label: 'Team, One Engine' },
  { value: '24/7',  label: 'Automation' },
  { value: '[XX]+', label: 'Brands Scaled' },
];

const BUILD_WORDS = ['BUILD.', 'SCALE.', 'TRANSFORM.'];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
const CoderBoxDigital = () => {
  const [buildIndex, setBuildIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBuildIndex((i) => (i + 1) % 3), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes cbBlink { 50% { opacity: .25; } }
        @keyframes cbBob { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
        @keyframes cbSpin { to { transform: rotate(360deg); } }
        @keyframes cbPulse {
          0%   { transform: scale(1); opacity: .9; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes cbDash { from { stroke-dashoffset: 400; } to { stroke-dashoffset: 0; } }
        @keyframes cbMq  { to { transform: translateX(-50%); } }

        .cb-bob    { animation: cbBob 6s ease-in-out infinite; }
        .cb-spin   { animation: cbSpin 28s linear infinite; transform-origin: center; }
        .cb-pulse  { transform-box: fill-box; transform-origin: center; animation: cbPulse 2.2s cubic-bezier(.2,.8,.2,1) infinite; }
        .cb-arc    { stroke-dasharray: 4 5; }
        .cb-arc-run{ stroke-dasharray: 18 400; animation: cbDash 3.6s linear infinite; }

        .cb-marquee-track     { display: flex; width: max-content; animation: cbMq 42s linear infinite; }
        .cb-marquee-track-rev { display: flex; width: max-content; animation: cbMq 36s linear infinite reverse; }
      `}</style>

      <div className="bg-[#f5f5f5] text-gray-900 font-['DM_Sans'] overflow-x-hidden">

        {/* ============================================================
           HERO
           ============================================================ */}
        <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute -top-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#008df1]/10 blur-3xl"
              animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 0.9, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-[300px] h-[300px] rounded-full bg-[#005b8f]/10 blur-3xl"
              animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0], scale: [1, 0.9, 1.1, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
            {/* ============ GRID: Left content + Right globe ============ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

              {/* LEFT — Content column */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-lg w-full flex flex-col justify-center"
              >
                <div>
                  {/* Badges — sec-badge */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <motion.span
                      className="sec-badge inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <i className="w-2 h-2 rounded-full bg-[#006FA6]" style={{ animation: 'cbBlink 2s infinite' }} />
                      CoderBox Digital
                    </motion.span>
                    <motion.span
                      className="sec-badge inline-block"
                      whileHover={{ scale: 1.05 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      Human-Centered. AI-Driven.
                    </motion.span>
                  </div>

                  {/* Heading — sec-h2 sec-text-dark */}
                  <motion.h2
                    className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Made in India. Built for the{' '}
                    <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                      World.
                    </span>
                  </motion.h2>

                  {/* BUILD / SCALE / TRANSFORM */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-4 mb-4">
                    {BUILD_WORDS.map((word, i) => (
                      <span
                        key={word}
                        className={`sec-h3 relative transition-colors duration-500 mb-0 ${
                          buildIndex === i ? 'text-gray-900' : 'text-gray-300'
                        }`}
                      >
                        {word}
                        {buildIndex === i && (
                          <motion.span
                            layoutId="build-underline"
                            className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#006FA6]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.4 }}
                          />
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Paragraph */}
                  <motion.p
                    className="sec-p sec-text-dark-soft max-w-md"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    A growth partner from India with a global mindset. We put{' '}
                    <b className="text-gray-900">people first</b> and let AI do the heavy lifting,
                    bringing every discipline your brand needs into one team.
                  </motion.p>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 my-5 sm:my-6 max-w-md">
                    {CHIPS.map((chip, i) => (
                      <motion.span
                        key={chip}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        viewport={{ once: true }}
                        className="sec-p px-3 py-1.5 border border-gray-200 rounded-full text-gray-600 bg-white transition-all duration-300 hover:border-[#006FA6] hover:text-[#006FA6] hover:-translate-y-0.5 font-semibold"
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <motion.div
                    className="flex flex-wrap items-center gap-5 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.a href="/AboutUs" whileTap={{ scale: 0.95 }} className="sec-btn">
                      Connect With CoderBox
                      <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </motion.a>

                    <a
                      href="/services"
                      className="sec-h3 text-[#006FA6] underline decoration-[1.5px] underline-offset-[6px] hover:decoration-[#006FA6] mb-0"
                    >
                      Explore services
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT — Globe card */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 w-full max-w-[520px] mx-auto lg:mx-0"
              >
                <div className="relative w-full" style={{ aspectRatio: '1 / 1.02' }}>
                  <div className="absolute -left-[3%] -top-[3%] w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] z-[3]">
                    <svg viewBox="0 0 150 150" className="w-full h-full">
                      <circle cx="75" cy="75" r="72" fill="#f5f5f5" stroke="#0B1526" strokeWidth="1.5" />
                      <defs>
                        <path id="cb-circ" d="M75,75 m-56,0 a56,56 0 1,1 112,0 a56,56 0 1,1 -112,0" />
                      </defs>
                      <g className="cb-spin">
                        <text style={{ font: '800 11px DM Sans, sans-serif', letterSpacing: '.16em', fill: '#0B1526' }}>
                          <textPath href="#cb-circ" startOffset="6%">
                            BUILT FOR THE WORLD • MADE IN INDIA •
                          </textPath>
                        </text>
                      </g>
                      <rect x="50" y="58" width="50" height="34" rx="5" fill="#0B1526" />
                      <text x="75" y="79" textAnchor="middle" style={{ font: '800 16px DM Sans, sans-serif', fill: '#FFFFFF' }}>
                        CB
                      </text>
                      <rect x="50"   y="88" width="16.6" height="4" fill="#F09A36" />
                      <rect x="66.6" y="88" width="16.7" height="4" fill="#FFFFFF" />
                      <rect x="83.3" y="88" width="16.7" height="4" fill="#2E8B57" />
                    </svg>
                  </div>

                  <div
                    className="absolute top-[8%] right-[2%] bottom-[10%] left-[10%] bg-[#0B1F3A] rounded-[22px] sm:rounded-[28px] overflow-hidden"
                    style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.55)' }}
                  >
                    <svg className="w-full h-full block" viewBox="0 0 520 500" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <radialGradient id="cb-gl" cx="45%" cy="40%" r="65%">
                          <stop offset="0" stopColor="#15375A" />
                          <stop offset="1" stopColor="#0B1F3A" stopOpacity="0" />
                        </radialGradient>
                        <clipPath id="cb-gclip"><circle cx="260" cy="250" r="170" /></clipPath>
                      </defs>

                      <circle cx="260" cy="250" r="230" fill="url(#cb-gl)" />

                      <g clipPath="url(#cb-gclip)">
                        <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
                          <ellipse cx="260" cy="250" rx="170" ry="40" />
                          <ellipse cx="260" cy="190" rx="160" ry="34" />
                          <ellipse cx="260" cy="310" rx="160" ry="34" />
                          <ellipse cx="260" cy="130" rx="118" ry="22" />
                          <ellipse cx="260" cy="370" rx="118" ry="22" />
                        </g>
                        <g fill="none" stroke="rgba(143,203,242,.18)" strokeWidth="1">
                          <ellipse cx="260" cy="250" rx="100" ry="170" />
                          <ellipse cx="260" cy="250" rx="40"  ry="170" />
                          <line x1="260" y1="80" x2="260" y2="420" />
                        </g>
                      </g>

                      <circle cx="260" cy="250" r="170" fill="none" stroke="rgba(143,203,242,.35)" />

                      {[
                        'M318 262 Q 240 120 150 176',
                        'M318 262 Q 180 70 70 205',
                        'M318 262 Q 300 200 262 228',
                        'M318 262 Q 390 250 392 300',
                        'M318 262 Q 450 260 440 390',
                      ].map((d, i) => (
                        <path key={`arc-${i}`} className="cb-arc" d={d} fill="none" stroke="#8FCBF2" strokeWidth="1.6" opacity=".85" />
                      ))}

                      {[
                        { d: 'M318 262 Q 240 120 150 176', delay: '0s' },
                        { d: 'M318 262 Q 180 70 70 205',   delay: '-.9s' },
                        { d: 'M318 262 Q 300 200 262 228', delay: '-1.8s' },
                        { d: 'M318 262 Q 390 250 392 300', delay: '-2.7s' },
                        { d: 'M318 262 Q 450 260 440 390', delay: '-1.3s' },
                      ].map((r, i) => (
                        <path key={`run-${i}`} className="cb-arc-run" d={r.d} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" style={{ animationDelay: r.delay }} />
                      ))}

                      {[
                        [150, 176, 'LONDON', 118, 165],
                        [70,  205, 'NEW YORK', 40, 228],
                        [262, 228, 'DUBAI', 222, 218],
                        [392, 300, 'SINGAPORE', 400, 304],
                        [440, 390, 'SYDNEY', 408, 412],
                      ].map(([cx, cy, label, tx, ty]) => (
                        <g key={label}>
                          <circle cx={cx} cy={cy} r="4" fill="#8FCBF2" />
                          <text x={tx} y={ty} fill="#CFE6F7" style={{ font: '700 11px DM Sans, sans-serif', letterSpacing: '.06em' }}>{label}</text>
                        </g>
                      ))}

                      <g>
                        <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" />
                        <circle className="cb-pulse" cx="318" cy="262" r="6" fill="none" stroke="#F09A36" style={{ animationDelay: '1.1s' }} />
                        <circle cx="318" cy="262" r="6.5" fill="#F09A36" />
                        <text x="332" y="252" fill="#fff" style={{ font: '800 12px DM Sans, sans-serif', letterSpacing: '.1em' }}>INDIA</text>
                      </g>
                    </svg>

                    <div className="absolute left-4 sm:left-7 right-4 sm:right-7 bottom-3 sm:bottom-5 flex justify-between items-end text-white">
                      <div>
                        <b className="sec-h3 block text-white mb-0">CoderBox Digital</b>
                        <small className="sec-p block text-[#8FCBF2] tracking-[.16em] mb-0">
                          FUTURE DIGITAL TRANSFORMATION
                        </small>
                      </div>
                      <span className="flex items-center gap-1.5 font-extrabold text-[9px] sm:text-[10px] tracking-[.14em] text-white border border-white/25 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                        <i className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" style={{ animation: 'cbBlink 1.4s infinite' }} />
                        LIVE
                      </span>
                    </div>
                  </div>

                  {/* Floating stat — 24/7 Automation */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
                    style={{ right: '-4%', top: '14%' }}
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
                      <RefreshCw className="h-4 w-4" />
                    </span>
                    <div>
                      <b className="sec-h3 block text-[#006FA6] mb-0">24/7</b>
                      <small className="sec-p text-gray-500 mb-0">Automation</small>
                    </div>
                  </motion.div>

                  {/* Floating stat — [XX]+ */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="cb-bob absolute z-[3] bg-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-lg border border-gray-100"
                    style={{ left: '-6%', top: '50%', animationDelay: '-3s' }}
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#006FA6] grid place-items-center text-white shadow-md">
                      <TrendingUp className="h-4 w-4" />
                    </span>
                    <div>
                      <b className="sec-h3 block text-[#006FA6] mb-0">[XX]+</b>
                      <small className="sec-p text-gray-500 mb-0">Brands Scaled</small>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* ============================================================
               FULL-WIDTH — Tagline + Stats strip
               ============================================================ */}
            <div className="mt-8 sm:mt-10 md:mt-12 w-full">

              {/* Tagline — full width line + text */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="sec-p sec-text-dark-soft flex items-center gap-3 mb-4 sm:mb-5"
              >
                <span className="w-9 h-[1.5px] bg-gray-400 inline-block shrink-0" />
                <span className="whitespace-nowrap">Your Expertise. Our Strategy. Your Growth.</span>
                <span className="flex-1 h-[1.5px] bg-gradient-to-r from-gray-300 to-transparent" />
              </motion.div>

              {/* STATS — full width 4-column strip */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full bg-white border border-gray-100 rounded-[22px] sm:rounded-[28px] overflow-hidden"
                style={{ boxShadow: '0 40px 80px -30px rgba(11,31,58,.15)' }}
              >
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {STATS.map((st, i) => (
                    <motion.div
                      key={st.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                      viewport={{ once: true }}
                      className={`group relative flex flex-col items-center justify-center text-center py-5 sm:py-6 md:py-7 px-2 transition-colors duration-300 hover:bg-[#f8fbff]
                        ${i < STATS.length - 1 ? 'sm:border-r border-gray-100' : ''}
                        ${i === 0 || i === 1 ? 'border-b sm:border-b-0 border-gray-100' : ''}
                      `}
                    >
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] rounded-full transition-all duration-500 group-hover:w-12" />

                      <b className="sec-h3 mb-0 text-[#006FA6] leading-none">
                        {st.value}
                      </b>

                      <span className="sec-p text-gray-500 mb-0 mt-1.5 leading-tight text-center">
                        {st.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================
           DARK NAVY MARQUEE
           ============================================================ */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0B1F3A] text-white py-2.5 sm:py-3 md:py-3.5">
          <div className="cb-marquee-track">
            {[0, 1].map((k) => (
              <span
                key={k}
                className="flex items-center gap-3 sm:gap-5 md:gap-7 pr-3 sm:pr-5 md:pr-7 font-extrabold whitespace-nowrap"
                style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', letterSpacing: '.02em' }}
              >
                {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((n, i) => (
                  <React.Fragment key={`${k}-${i}`}>
                    <span>{n}</span>
                    <span className="text-[#8FCBF2] text-[8px] sm:text-[10px]" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ============================================================
           BLUE ITALIC MARQUEE
           ============================================================ */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0A5E93] text-white py-2 sm:py-2.5 md:py-3">
          <div className="cb-marquee-track-rev">
            {[0, 1].map((k) => (
              <span
                key={k}
                className="flex items-center gap-3 sm:gap-5 md:gap-7 pr-3 sm:pr-5 md:pr-7 italic whitespace-nowrap"
                style={{ fontSize: 'clamp(11px, 1.2vw, 15px)', letterSpacing: '.01em' }}
              >
                {[...MARQUEE_LINES, ...MARQUEE_LINES].map((n, i) => (
                  <React.Fragment key={`${k}-${i}`}>
                    <span>{n}</span>
                    <span className="text-[#F09A36] text-[8px] sm:text-[10px] not-italic" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>◆</span>
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoderBoxDigital;