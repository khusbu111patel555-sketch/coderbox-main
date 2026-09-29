import React, { useState, useEffect, useRef } from 'react';

/* ============================================================
   GLOBAL STYLES (animations + effects)
   ============================================================ */
const GlobalStyles = () => (
  <style>{`
    @keyframes cbArrowRight {
      0%, 100% { transform: translateX(0); }
      50%      { transform: translateX(6px); }
    }
    @keyframes cbArrowDown {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(6px); }
    }
    @keyframes cbFloat {
      0%, 100% { transform: translateY(0) scale(1); }
      50%      { transform: translateY(-18px) scale(1.05); }
    }
    @keyframes cbFloatSlow {
      0%, 100% { transform: translate(0,0) scale(1); }
      50%      { transform: translate(30px, -20px) scale(1.08); }
    }
    @keyframes cbPulseGlow {
      0%, 100% { opacity: .7; transform: scale(1); }
      50%      { opacity: 1;  transform: scale(1.06); }
    }
    @keyframes cbMarquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes cbShine {
      0%   { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes cbFadeUp {
      0%   { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .arrow-right { display: inline-block; animation: cbArrowRight 1.4s ease-in-out infinite; }
    .arrow-down  { display: inline-block; animation: cbArrowDown 1.4s ease-in-out infinite; }
    .cb-float    { animation: cbFloat 6s ease-in-out infinite; }
    .cb-float-slow { animation: cbFloatSlow 12s ease-in-out infinite; }
    .cb-pulse    { animation: cbPulseGlow 3s ease-in-out infinite; }
    .cb-fade-up  { animation: cbFadeUp .8s ease-out both; }

    .cb-marquee-track {
      display: flex;
      width: max-content;
      animation: cbMarquee 32s linear infinite;
    }

    .cb-shine {
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(255,255,255,.35) 50%,
        transparent 100%);
      background-size: 200% 100%;
      animation: cbShine 3s ease-in-out infinite;
    }

    .cb-grad-border {
      position: relative;
      background: #fff;
      border-radius: 22px;
    }
    .cb-grad-border::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 1px;
      border-radius: inherit;
      background: linear-gradient(135deg, rgba(1,173,240,.5), rgba(0,198,251,.1), rgba(1,173,240,.5));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
              mask-composite: exclude;
      opacity: 0;
      transition: opacity .35s ease;
      pointer-events: none;
    }
    .cb-grad-border:hover::before { opacity: 1; }

    .cb-dots {
      background-image: radial-gradient(#D8E0EC 1px, transparent 1px);
      background-size: 24px 24px;
      -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%);
              mask-image: linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%);
      pointer-events: none;
    }

    .cb-dots-soft {
      background-image: radial-gradient(#D8E0EC 1px, transparent 1px);
      background-size: 24px 24px;
      -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 40%, #000 30%, transparent 80%);
              mask-image: radial-gradient(ellipse 60% 60% at 50% 40%, #000 30%, transparent 80%);
      pointer-events: none;
    }
  `}</style>
);

/* ============================================================
   SHARED COMPONENTS
   ============================================================ */
const Eyebrow = ({ children }) => (
  <span className="sec-badge inline-block">{children}</span>
);

const DarkEyebrow = ({ children }) => (
  <div className="text-[12px] font-bold uppercase tracking-[.18em] text-[#52dcff]">
    {children}
  </div>
);

/* ============================================================
   DATA
   ============================================================ */
const serviceData = [
  { cat: 'Technology', icon: '⌘', title: 'Web Design & Development', desc: 'High-performance websites and digital platforms engineered around your brand, users and business goals.', tags: ['React', 'Vite', 'WordPress', 'PHP', 'E-commerce'] },
  { cat: 'Technology', icon: '◈', title: 'Mobile App Development', desc: 'Reliable iOS and Android experiences that turn complex requirements into simple, useful products.', tags: ['iOS', 'Android', 'Cross-platform', 'APIs', 'UX'] },
  { cat: 'Design', icon: '✦', title: 'UI/UX & Product Design', desc: 'Clear, conversion-aware interfaces with thoughtful user journeys, visual systems and scalable components.', tags: ['UX Research', 'UI Design', 'Design Systems', 'Prototyping'] },
  { cat: 'Growth', icon: '⌁', title: 'Digital Marketing', desc: 'Full-funnel digital growth combining strategy, creative, paid media and measurable performance.', tags: ['Strategy', 'Paid Media', 'Social', 'Content', 'Analytics'] },
  { cat: 'Growth', icon: '⌕', title: 'SEO & Search Visibility', desc: 'Technical, content and search-experience optimisation designed to improve discoverability across modern search.', tags: ['Technical SEO', 'AEO', 'GEO', 'Content', 'Analytics'] },
  { cat: 'AI', icon: '✧', title: 'AI & Automation', desc: 'Practical AI solutions that reduce repetitive work, connect systems and create smarter customer experiences.', tags: ['AI Strategy', 'Automation', 'Chatbots', 'Integrations', 'Workflows'] },
  { cat: 'Technology', icon: '▣', title: 'E-commerce Solutions', desc: 'Conversion-focused storefronts, product experiences and integrations built for sustainable online sales.', tags: ['Shopify', 'WooCommerce', 'Payments', 'CRO'] },
  { cat: 'Technology', icon: '◫', title: 'IT & Technology Consulting', desc: 'Technical direction for digital transformation, infrastructure, security and scalable technology decisions.', tags: ['Architecture', 'Cloud', 'Security', 'Roadmaps'] },
  { cat: 'Growth', icon: '◎', title: 'Data & Analytics', desc: 'Dashboards, attribution and actionable insights that turn fragmented digital data into better decisions.', tags: ['GA4', 'GTM', 'Dashboards', 'Attribution'] },
];

const CATEGORIES = ['All', 'Technology', 'Design', 'Growth', 'AI'];

const CAPABILITIES = [
  ['Frontend', 'React · Vite · TypeScript · Tailwind'],
  ['Backend', 'Node.js · PHP · APIs · PostgreSQL'],
  ['AI & Integrations', 'LLMs · Automation · CRM · Workflows'],
  ['Cloud & DevOps', 'Deployment · CI/CD · Monitoring'],
  ['Growth Stack', 'SEO · PPC · Social · Content'],
  ['Measurement', 'GA4 · GTM · Dashboards · Attribution'],
];

const PROCESS_STEPS = [
  ['01', 'Discover', 'Goals, audience, constraints and opportunities become a clear project brief.'],
  ['02', 'Design', 'We shape the experience, architecture and roadmap before development begins.'],
  ['03', 'Build', 'Focused sprints turn the plan into a tested, responsive digital product.'],
  ['04', 'Launch & Grow', 'We measure, optimise and keep improving after the first release.'],
];

const MARQUEE_ITEMS = [
  'React', 'Vite', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind',
  'Shopify', 'WordPress', 'OpenAI', 'Supabase', 'PostgreSQL', 'AWS',
];

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section
      className="relative bg-[#f1f1f1] overflow-hidden pb-16 lg:pb-24"
      style={{ paddingTop: '130px' }}
    >
      <div className="cb-dots absolute inset-0" aria-hidden="true" />

      <span className="cb-float-slow pointer-events-none absolute -right-[180px] -top-[180px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.28),transparent_65%)] blur-3xl" />
      <span className="cb-float pointer-events-none absolute -left-[160px] top-[220px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(0,198,251,.22),transparent_65%)] blur-3xl" />
      <span className="cb-pulse pointer-events-none absolute right-[20%] bottom-[-100px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.18),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="cb-fade-up">
          <Eyebrow>✦ What we build</Eyebrow>
        </div>

        <h1 className="sec-h2 sec-text-dark cb-fade-up my-[24px] max-w-[900px] text-[clamp(48px,7vw,86px)] leading-[1.02] tracking-[-.055em]" style={{ animationDelay: '.1s' }}>
          Digital products,
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#00C6FB] via-[#01ADF0] to-[#0087bd] bg-clip-text text-transparent">
              engineered to move
            </span>
            <span className="cb-shine pointer-events-none absolute inset-0 bg-clip-text text-transparent">
              engineered to move
            </span>
          </span>
          <br />
          your business forward.
        </h1>

        <p className="sec-p sec-text-dark-soft cb-fade-up m-0 max-w-[700px] text-[18px] leading-[1.75]" style={{ animationDelay: '.2s' }}>
          From brand and experience to technology, AI and growth — CoderBox brings the right capabilities
          together to solve real business problems and create digital experiences people remember.
        </p>

        <div className="mt-[38px] flex flex-wrap gap-3 cb-fade-up" style={{ animationDelay: '.3s' }}>
          <a href="/contact" className="sec-btn group relative overflow-hidden">
            <span className="relative z-10 inline-flex items-center gap-2">
              Discuss your project <span className="arrow-right">→</span>
            </span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-[#01ADF0]/30 bg-white px-[18px] py-[11px] font-semibold text-[#01ADF0] shadow-sm transition-all duration-[.25s] hover:border-[#01ADF0] hover:bg-[#01ADF0]/[.06] hover:shadow-md hover:shadow-[#01ADF0]/15"
          >
            Explore services <span className="arrow-down">↓</span>
          </a>
        </div>

        <div
          className="cb-fade-up mt-[72px] grid overflow-hidden rounded-[18px] border border-[#66adff]/[.16] bg-[#66adff]/[.16] shadow-[0_24px_60px_rgba(1,20,50,.18)] sm:grid-cols-3 sm:gap-px"
          style={{ animationDelay: '.4s' }}
        >
          {[
            ['Design → Build', 'One connected delivery team'],
            ['Web + AI', 'Modern technology stack'],
            ['Growth-led', 'Built around measurable outcomes'],
          ].map(([b, s]) => (
            <div key={b} className="bg-[#061221]/90 p-[23px]">
              <p className="m-0 font-['Space_Grotesk'] text-2xl font-semibold text-white">{b}</p>
              <span className="mt-[5px] block text-[13px] text-[#9aaec5]">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MARQUEE STRIP
   ============================================================ */
function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="relative border-y border-gray-200 bg-white/60 py-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f1f1f1] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f1f1f1] to-transparent z-10" />

      <div className="cb-marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-[15px] font-semibold tracking-wide text-[#8fa3b8] whitespace-nowrap"
          >
            <span className="mr-3 text-[#01ADF0]">◆</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES
   ============================================================ */
function ServicesSection() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? serviceData : serviceData.filter((s) => s.cat === filter);

  return (
    <section id="services" className="relative bg-[#f1f1f1] px-0 py-[110px] overflow-hidden">
      <div className="cb-dots absolute inset-0" aria-hidden="true" />

      <span className="pointer-events-none absolute right-[-200px] top-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.08),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div>
            <Eyebrow>Our services</Eyebrow>
            <h2 className="sec-h2 sec-text-dark mt-4 text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-.04em]">
              Everything your digital
              <br />
              product needs.
            </h2>
          </div>
          <p className="sec-p sec-text-dark-soft m-0 max-w-[490px] leading-[1.7]">
            Choose a focused capability or combine multiple services into one integrated engagement.
            We design around the problem first, then bring the right specialists and technology to solve it.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-[18px] py-[10px] text-sm font-semibold transition-all duration-[.25s] ${
                filter === c
                  ? 'border-transparent bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] text-white shadow-lg shadow-[#01ADF0]/30 scale-[1.03]'
                  : 'border-gray-200 bg-white text-[#4a5a6b] hover:border-[#01ADF0] hover:text-[#01ADF0] hover:shadow-sm'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => (
            <article
              key={s.title}
              className="cb-grad-border group relative min-h-[340px] overflow-hidden bg-white p-[28px] shadow-[0_6px_24px_rgba(15,40,80,.05)] transition-all duration-500 hover:-translate-y-[8px] hover:shadow-[0_28px_60px_rgba(1,173,240,.2)]"
            >
              <span className="pointer-events-none absolute -bottom-[80px] -right-[80px] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="font-['Space_Grotesk'] text-[13px] font-semibold tracking-[.06em] text-[#01ADF0]">
                  {String(i + 1).padStart(2, '0')} · {s.cat}
                </div>
                <span className="text-[#01ADF0] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
              </div>

              <div className="my-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#00C6FB] to-[#01ADF0] text-[22px] text-white shadow-lg shadow-[#01ADF0]/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {s.icon}
              </div>

              <h3 className="sec-h2 sec-text-dark mb-3 text-[22px] leading-[1.1]">
                {s.title}
              </h3>

              <p className="sec-p sec-text-dark-soft mb-5 text-sm leading-[1.65]">{s.desc}</p>

              <div className="flex flex-wrap gap-[7px]">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#01ADF0]/20 bg-[#01ADF0]/[.06] px-[10px] py-[6px] text-[11px] font-medium text-[#0087bd] transition-colors group-hover:bg-[#01ADF0]/[.12]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITIES  ← dark
   ============================================================ */
function Capabilities() {
  return (
    <section className="relative border-y border-[#66adff]/[.16] bg-gradient-to-r from-[#0d2440] via-[#071a2e] to-[#040d19] px-0 py-[110px] overflow-hidden">
      <span className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.22),transparent_65%)] blur-3xl cb-float-slow" />
      <span className="pointer-events-none absolute bottom-[-200px] right-[-100px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,198,251,.18),transparent_65%)] blur-3xl cb-float" />

      <div className="relative mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-[80px]">
          <div>
            <DarkEyebrow>◆ Capabilities</DarkEyebrow>
            <h2 className="mt-4 font-['Space_Grotesk'] text-[clamp(32px,4vw,52px)] font-bold leading-[1.05] tracking-[-.04em] text-[#f5f8ff]">
              One team.
              <br />
              <span className="bg-gradient-to-r from-white via-[#54c9ff] to-[#0087bd] bg-clip-text text-transparent">
                Every layer of the product.
              </span>
            </h2>
            <p className="m-0 mt-6 text-[15px] leading-[1.75] text-[#9aaec5]">
              Design, development, data, marketing and AI work better when they are connected.
              Our multidisciplinary approach reduces handoff gaps and keeps the product focused on the outcome.
            </p>
          </div>

          <div className="grid border-t border-[#66adff]/[.16] sm:grid-cols-2">
            {CAPABILITIES.map(([title, stack], i) => (
              <div
                key={title}
                className={`group border-b border-[#66adff]/[.16] py-[26px] transition-colors hover:bg-[#01ADF0]/[.05] ${
                  i % 2 === 0 ? 'sm:border-r sm:border-[#66adff]/[.16] sm:pr-8' : 'sm:pl-8'
                }`}
              >
                <strong className="mb-2 flex items-center gap-2 font-['Space_Grotesk'] text-[15px] font-semibold text-[#f5f8ff]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#01ADF0] shadow-[0_0_10px_rgba(1,173,240,.9)] transition-transform duration-300 group-hover:scale-150" />
                  {title}
                </strong>
                <span className="text-[13px] leading-[1.6] text-[#9aaec5]">{stack}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS  ← dark
   ============================================================ */
function Process() {
  return (
    <section className="relative border-y border-[#66adff]/[.16] bg-gradient-to-b from-[#0a1a2f] via-[#061225] to-[#040d19] px-0 py-[110px] overflow-hidden">
      <span className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.15),transparent_65%)] blur-3xl cb-float-slow" />
      <span className="pointer-events-none absolute bottom-[-180px] right-[-80px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(0,198,251,.12),transparent_65%)] blur-3xl cb-float" />

      <div className="relative mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div>
            <DarkEyebrow>How we work</DarkEyebrow>
            <h2 className="mt-4 font-['Space_Grotesk'] text-[clamp(32px,4vw,52px)] font-bold leading-[1.05] tracking-[-.04em] text-[#f5f8ff]">
              From first idea
              <br />
              to measurable impact.
            </h2>
          </div>
          <p className="m-0 max-w-[490px] leading-[1.7] text-[#9aaec5]">
            A simple delivery model keeps decisions clear, feedback fast and every build tied to a business objective.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[22px] border border-[#66adff]/[.16] bg-[#66adff]/[.12] sm:grid-cols-2 sm:gap-px lg:grid-cols-4">
          {PROCESS_STEPS.map(([no, title, desc]) => (
            <div
              key={no}
              className="group relative min-h-[230px] bg-[#061221]/95 p-[28px_24px] transition-colors hover:bg-[#0a1a30]"
            >
              <div className="font-['Space_Grotesk'] text-[13px] font-bold tracking-[.08em] text-[#28a9ff]">
                {no}
              </div>
              <h3 className="mb-2.5 mt-[55px] font-['Space_Grotesk'] text-[19px] font-semibold leading-[1.15] text-white">
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.6] text-[#9aaec5]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA
   ============================================================ */
function CTA() {
  return (
    <section className="bg-[#f1f1f1] px-0 py-[120px] overflow-hidden">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#00C6FB] via-[#01ADF0] to-[#003F7D] p-8 shadow-2xl shadow-[#01ADF0]/30 sm:p-[56px]">
          <span className="pointer-events-none absolute -bottom-24 left-[30%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.35),transparent_70%)] blur-2xl cb-float-slow" />
          <span className="pointer-events-none absolute -top-20 right-[-40px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.25),transparent_70%)] blur-2xl cb-float" />

          <div className="relative">
            <span className="inline-block rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[.18em] text-white backdrop-blur-sm">
              ✦ Let's build something useful
            </span>

            <h2 className="mt-5 max-w-[720px] font-['Space_Grotesk'] text-[clamp(32px,5vw,58px)] font-bold leading-[1.05] tracking-[-.04em] text-white">
              Have a digital idea in mind?
              <br />
              <span className="bg-gradient-to-r from-white to-[#d6f4ff] bg-clip-text text-transparent">
                Let's turn it into reality.
              </span>
            </h2>

            <p className="relative m-0 mt-5 max-w-[620px] leading-[1.75] text-white/85">
              Tell us what you are trying to achieve. We'll help you identify the right combination
              of strategy, design, technology and growth.
            </p>

            <a
              href="/contact"
              className="group relative mt-[28px] inline-flex items-center gap-2 rounded-full bg-white px-[24px] py-[13px] font-semibold text-[#01ADF0] shadow-lg shadow-[#003F7D]/25 transition-transform hover:-translate-y-0.5"
            >
              Start a conversation <span className="arrow-right">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f1f1f1] font-['DM_Sans',sans-serif] sec-text-dark">
      <GlobalStyles />
      <main>
        <Hero />
        <Marquee />
        <ServicesSection />
        <Capabilities />
        <Process />
        <CTA />
      </main>
    </div>
  );
}