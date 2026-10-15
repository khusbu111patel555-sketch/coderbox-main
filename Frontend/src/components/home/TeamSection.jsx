import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Globe, Quote, CircleCheck, Sparkles, TrendingUp } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

// ============================================
// COUNT-UP COMPONENT
// ============================================
const CountUp = ({ end, duration = 1500, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const endValue = parseInt(end, 10);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const TeamSection = () => {
  const member = {
    name: 'Ashwin R. Singh.',
    alias: '(Aashu Singh)',
    role: 'Founder / CTO / CEO',
    image: '/founder.jpeg',
    bio: 'Tech entrepreneur, investor and LinkedIn Top Voice, turning emerging technology into practical business solutions.',
    background: [
      'Ashwin R. Singh has spent 13+ years building technology-led businesses. With a background in Computer Science and AI, he leads products and ventures from idea to execution.',
      'As Founder, CEO and CTO, he has built technology teams, shaped product strategies, and helped businesses navigate digital transformation.'
    ],
    stats: [
      { number: '13+', label: 'Years Building', icon: TrendingUp, end: 13, suffix: '+' },
      { number: '03', label: 'Ventures Led', icon: Briefcase, end: 3, suffix: '' },
      { number: '06', label: 'Industries', icon: Globe, end: 6, suffix: '' }
    ],
    ventures: [
      { name: 'CoderBox Digital', industry: 'Technology' },
      { name: 'LexEdge', industry: 'Technology' },
      { name: 'MedAgree Health', industry: 'HealthTech' }
    ],
    industries: ['FinTech', 'HealthTech', 'EdTech', 'SaaS', 'Automation', 'Enterprise Tech'],
    quote: "Technology should create meaningful business value.",
    quoteDesc: "Whether building a company, advising a founder, or shaping a client strategy, he works from the same principles.",
    principles: ['Think in systems', 'Execute with discipline', 'Build for lasting impact'],
    socials: {
      instagram: 'https://www.instagram.com/thecoderbox?stkn=MjZ1NnVkbGt1ZW8y',
      linkedin: 'https://www.linkedin.com/company/thecoderbox/home/',
      facebook: 'https://www.facebook.com/thecoderbox/'
    }
  };

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#0a0a1a] overflow-hidden">

      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,141,241,0.15),transparent)] pointer-events-none" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#008df1]/10 blur-[100px] pointer-events-none"
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[#005b8f]/15 blur-[100px] pointer-events-none"
        animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">

        {/* ===== HEADER (Same classes as ServicesSection) ===== */}
        <AnimatedSection className="text-center mb-4 sm:mb-5 md:mb-6">
          <motion.span
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Meet Our Founder
          </motion.span>

          <motion.h2
            className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            The Visionary Behind{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              CoderBox
            </span>
          </motion.h2>

          <motion.p
            className="sec-p text-white/70 mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A tech entrepreneur driving innovation and digital transformation across industries.
          </motion.p>
        </AnimatedSection>

        {/* ===== BENTO GRID LAYOUT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 auto-rows-auto">

          {/* ===== HERO CARD ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#008df1]/10 via-[#0a0a1a] to-[#005b8f]/10 border border-white/10 group"
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#00c6fb]/0 via-[#00c6fb]/30 to-[#008df1]/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />

            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 p-6 sm:p-8 items-center">
              <div className="md:col-span-2 relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#008df1]/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md hover:bg-[#00c6fb] flex items-center justify-center text-white border border-white/20 transition-all"
                    >
                      <FaInstagram className="h-3.5 w-3.5" />
                    </motion.a>
                    <motion.a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md hover:bg-[#008df1] flex items-center justify-center text-white border border-white/20 transition-all"
                    >
                      <FaLinkedinIn className="h-3.5 w-3.5" />
                    </motion.a>
                    <motion.a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md hover:bg-[#006fa6] flex items-center justify-center text-white border border-white/20 transition-all"
                    >
                      <FaFacebookF className="h-3.5 w-3.5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-[#00c6fb] uppercase mb-2 px-2.5 py-1 rounded-full bg-[#00c6fb]/10 border border-[#00c6fb]/30">
                    {member.role}
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#00c6fb] text-lg sm:text-xl font-semibold mt-1">
                    {member.alias}
                  </p>
                </div>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {member.principles.map((p, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      <CircleCheck size={11} className="text-[#00c6fb]" />
                      <span className="text-[10px] font-bold tracking-wider text-white/80 uppercase">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== STATS CARD WITH COUNT-UP ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#00c6fb]/10 to-transparent border border-white/10 p-6 relative overflow-hidden group hover:border-[#00c6fb]/40 transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00c6fb]/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c6fb] animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c6fb] uppercase">At a Glance</span>
              </div>

              <div className="space-y-5">
                {member.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00c6fb]/10 border border-[#00c6fb]/20 flex items-center justify-center">
                        <stat.icon size={16} className="text-[#00c6fb]" />
                      </div>
                      <span className="text-xs font-bold tracking-wider text-white/60 uppercase">{stat.label}</span>
                    </div>
                    <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent tracking-tight tabular-nums">
                      <CountUp end={stat.end} suffix={stat.suffix} duration={1500 + idx * 300} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===== BACKGROUND CARD ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-6 hover:border-[#00c6fb]/40 transition-all duration-500"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c6fb]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c6fb] uppercase">Background</span>
            </div>

            <div className="space-y-3">
              {member.background.map((para, i) => (
                <p key={i} className="text-sm text-white/70 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ===== VENTURES CARD ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#005b8f]/10 to-transparent border border-white/10 p-6 hover:border-[#00c6fb]/40 transition-all duration-500"
          >
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={13} className="text-[#00c6fb]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c6fb] uppercase">Ventures Led</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {member.ventures.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="relative group/venture rounded-2xl bg-white/[0.03] backdrop-blur-sm p-4 border border-white/10 hover:border-[#00c6fb]/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-3 right-3 text-[10px] font-bold text-[#00c6fb]/30 group-hover/venture:text-[#00c6fb] transition-colors">
                    0{i + 1}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#00c6fb]/10 flex items-center justify-center mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c6fb]" />
                  </div>
                  <p className="text-sm font-bold text-white mb-1 pr-6 leading-snug">{v.name}</p>
                  <p className="text-[10px] text-[#00c6fb]/80 font-semibold tracking-wider uppercase">{v.industry}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== INDUSTRIES CARD ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-12 rounded-3xl bg-gradient-to-r from-white/5 via-transparent to-white/5 border border-white/10 p-6 hover:border-[#00c6fb]/40 transition-all duration-500"
          >
            <div className="flex items-center gap-2 mb-4">
              <Globe size={13} className="text-[#00c6fb]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#00c6fb] uppercase">Worked Across Industries</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#01ADF0]/30 to-transparent" />
            </div>

            <div className="flex flex-wrap gap-2">
              {member.industries.map((ind, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/80 text-xs font-bold tracking-wide rounded-full border border-white/10 hover:border-[#00c6fb] hover:bg-[#00c6fb] hover:text-[#0a0a1a] transition-all duration-300 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00c6fb]" />
                  {ind}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ===== FOUNDER'S NOTE ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-12 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#008df1]/15 via-[#0a0a1a] to-[#005b8f]/15 border border-[#008df1]/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,141,241,0.15)]"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#008df1]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00c6fb]/10 rounded-full blur-3xl pointer-events-none" />
            <Quote className="absolute top-6 right-6 h-16 w-16 text-white/5" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-px bg-[#00c6fb]" />
                <span className="text-[11px] font-bold tracking-[0.3em] text-[#00c6fb] uppercase">
                  Founder's Note
                </span>
              </div>

              <p className="italic text-xl sm:text-2xl md:text-3xl text-white font-medium leading-[1.4] mb-4 max-w-4xl tracking-tight">
                "{member.quote}"
              </p>
              <p className="sec-p text-white/60 leading-relaxed max-w-3xl">
                {member.quoteDesc}
              </p>

              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/10">
                {member.principles.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3.5 py-2 rounded-full border border-white/10">
                    <CircleCheck size={14} className="text-[#00c6fb] shrink-0" />
                    <span className="text-xs font-bold tracking-wider text-white/90 uppercase">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;