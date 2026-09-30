// src/pages/TermsConditions.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Mail, Phone, MapPin, Globe, Shield, Lock, FileText,
  Users, Database, AlertCircle, BookOpen, ChevronRight, Scale,
  Building2, Server, TrendingUp, RefreshCw,
} from 'lucide-react';

/* ============================================================
   DATA
   ============================================================ */
const SECTIONS = [
  {
    id: 'about',
    num: '01',
    icon: Building2,
    title: 'About TheCoderBox',
    paras: [
      'TheCoderBox provides technology and digital services, including web development, application development, e-commerce solutions, UI/UX design, digital marketing, branding, IT consulting, cybersecurity, data analytics and other digital transformation services.',
      'Information provided on this Website is for general informational purposes and does not constitute a binding offer for services.',
    ],
  },
  {
    id: 'use',
    num: '02',
    icon: Users,
    title: 'Use of the Website',
    intro: 'You agree to use this Website only for lawful purposes. You must not:',
    list: [
      'Attempt to gain unauthorized access to the Website or its systems.',
      'Introduce viruses, malware or harmful code.',
      'Copy, reproduce or misuse Website content without permission.',
      'Interfere with the Website’s operation or security.',
      'Use the Website for fraudulent or unlawful activities.',
    ],
    outro: 'We reserve the right to restrict access to users who violate these Terms.',
  },
  {
    id: 'content',
    num: '03',
    icon: FileText,
    title: 'Website Content',
    paras: [
      'We make reasonable efforts to keep the information on our Website accurate and up to date. However, service descriptions, pricing, project examples, statistics and other information may change without notice.',
      'We do not guarantee that all Website content will always be complete, accurate, current or error-free.',
    ],
  },
  {
    id: 'services',
    num: '04',
    icon: Database,
    title: 'Services and Projects',
    paras: [
      'Submitting an inquiry or contact form does not automatically create a client relationship or service agreement.',
      'Specific projects, including pricing, timelines, deliverables, revisions, payments, refunds and support, will be governed by a separate proposal, quotation, statement of work or service agreement where applicable.',
      'Any estimated timelines, costs or project results displayed on the Website are for general guidance unless specifically agreed in writing.',
    ],
  },
  {
    id: 'marketing',
    num: '05',
    icon: TrendingUp,
    title: 'Digital Marketing & Performance Disclaimer',
    intro: 'Digital marketing, SEO, advertising and related services depend on many factors outside our control.',
    list: [
      'Search-engine rankings',
      'Website traffic',
      'Leads or sales',
      'Advertising results',
      'Revenue or ROI',
      'Conversion rates',
    ],
    outro: 'Any specific performance guarantee must be expressly included in a written agreement.',
  },
  {
    id: 'ip',
    num: '06',
    icon: Lock,
    title: 'Intellectual Property',
    paras: [
      'Unless otherwise stated, all content on this Website, including text, graphics, logos, images, designs, articles and other materials, belongs to or is licensed to TheCoderBox.',
      'You may not copy, reproduce, modify, distribute, publish or commercially use Website content without our prior written permission, except where permitted by law.',
      'Client project ownership and intellectual-property rights will be governed by the applicable project agreement.',
    ],
  },
  {
    id: 'third-party',
    num: '07',
    icon: Globe,
    title: 'Third-Party Links and Services',
    paras: [
      'Our Website may contain links to third-party websites, tools or services.',
      'TheCoderBox does not control or guarantee the accuracy, availability, security or privacy practices of third-party websites. Your use of third-party services is subject to their respective terms and policies.',
    ],
  },
  {
    id: 'availability',
    num: '08',
    icon: Server,
    title: 'Website Availability',
    paras: [
      'We aim to maintain continuous Website availability but do not guarantee that the Website will always be available, uninterrupted or error-free.',
      'Temporary interruptions may occur due to maintenance, hosting issues, technical problems, security incidents or circumstances beyond our reasonable control.',
    ],
  },
  {
    id: 'liability',
    num: '09',
    icon: AlertCircle,
    title: 'Limitation of Liability',
    paras: [
      'To the maximum extent permitted by applicable law, TheCoderBox will not be liable for indirect, incidental, consequential or special losses arising from your use of the Website.',
      'This includes, where legally permitted, loss of profits, revenue, business opportunities, data or goodwill.',
      'Nothing in these Terms excludes liability that cannot legally be excluded.',
    ],
  },
  {
    id: 'privacy',
    num: '10',
    icon: Shield,
    title: 'Privacy',
    paras: [
      'Your use of this Website is also subject to our Privacy Policy, which explains how we collect and use personal information.',
    ],
  },
  {
    id: 'changes',
    num: '11',
    icon: RefreshCw,
    title: 'Changes to These Terms',
    paras: [
      'We may update these Terms from time to time. Any changes will be posted on this page with an updated “Last Updated” date.',
      'Your continued use of the Website after changes are published means you accept the updated Terms.',
    ],
  },
  {
    id: 'law',
    num: '12',
    icon: Scale,
    title: 'Governing Law',
    paras: [
      'These Terms are governed by the applicable laws of India.',
      'Subject to applicable law, disputes relating to these Terms or the Website shall be subject to the jurisdiction of the competent courts in Bengaluru, Karnataka, India.',
      'Project-specific agreements may contain separate governing-law or dispute-resolution provisions.',
    ],
  },
];

/* ============================================================
   PAGE
   ============================================================ */
const TermsConditions = () => {
  const [activeId, setActiveId] = useState('about');
  const [showToc, setShowToc] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY + 200;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scroll) current = s.id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setShowToc(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F1] font-['Manrope'] text-[#0B1526]">

      {/* ============================================================
          HERO
         ============================================================ */}
      <section className="relative overflow-hidden bg-[#08111F] text-white pt-[14rem] sm:pt-[16rem] md:pt-[18rem] pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-10 min-h-[85vh] flex items-center justify-center">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[.25]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(143,203,242,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(143,203,242,.12) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
          }}
        />

        {/* Glow orbs */}
        <span className="pointer-events-none absolute -right-[180px] -top-[180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.28),transparent_65%)] blur-3xl" />
        <span className="pointer-events-none absolute -left-[160px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,198,251,.2),transparent_65%)] blur-3xl" />

        <div className="relative max-w-[1320px] mx-auto text-center w-full">

          {/* Icon */}
          <div className="mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
              className="relative inline-flex"
            >
              <span className="absolute inset-0 rounded-2xl bg-[#0A5E93] blur-xl opacity-60 animate-pulse" />
              <span className="relative inline-flex w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0A5E93] to-[#0D86CF] items-center justify-center shadow-2xl shadow-[#01ADF0]/30">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.2} />
              </span>
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-['Sora'] font-extrabold leading-[1.02] tracking-[-.05em]"
            style={{ fontSize: 'clamp(42px,7vw,96px)' }}
          >
            Terms &amp;{' '}
            <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">
              Conditions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 sm:mt-6 max-w-2xl mx-auto text-[15px] sm:text-base md:text-lg text-[#AFC0D4] leading-[1.7]"
          >
            Please read these Terms &amp; Conditions carefully before using thecoderbox.com. By accessing our Website, you agree to be bound by these terms.
          </motion.p>

          {/* Meta pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {[
              { icon: FileText, label: '13 Sections' },
              { icon: Scale, label: 'Legally Binding' },
              { icon: Shield, label: 'Rights Reserved' },
            ].map((pill) => {
              const Icon = pill.icon;
              return (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[.05] backdrop-blur-sm px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-[.14em] text-[#AFC0D4]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#8FCBF2]" />
                  {pill.label}
                </span>
              );
            })}
          </motion.div>

          {/* Last updated */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 text-[11px] sm:text-[11.5px] uppercase tracking-[.24em] text-[#7F9CC2] font-bold"
          >
            Last Updated · Aug 19, 2026
          </motion.p>
        </div>
      </section>

      {/* ============================================================
          MAIN LAYOUT
         ============================================================ */}
      <section className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0A5E93] hover:gap-3 transition-all mb-8 sm:mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr] gap-8 lg:gap-12">

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="rounded-3xl border border-[#D9DDD6] bg-white p-5 shadow-[0_8px_32px_rgba(15,40,80,.05)]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-5 bg-gradient-to-b from-[#01ADF0] to-[#0A5E93] rounded-full" />
                    <h3 className="font-['Sora'] text-[13px] font-bold uppercase tracking-[.14em] text-[#0B1526]">
                      On this page
                    </h3>
                  </div>

                  <nav className="space-y-0.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 [scrollbar-width:thin]">
                    {SECTIONS.map((s) => {
                      const isActive = activeId === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => scrollTo(s.id)}
                          className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-[13px] font-medium transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-[#01ADF0]/[.12] to-transparent text-[#0A5E93] font-semibold'
                              : 'text-[#56627A] hover:bg-[#01ADF0]/[.06] hover:text-[#0A5E93]'
                          }`}
                        >
                          <span className={`flex-none font-['Sora'] text-[11px] font-bold tabular-nums transition-colors ${isActive ? 'text-[#01ADF0]' : 'text-[#B9C0C9]'}`}>
                            {s.num}
                          </span>
                          <span className="leading-snug">{s.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                <div className="mt-4 rounded-3xl border border-[#D9DDD6] bg-gradient-to-br from-[#0A5E93] to-[#0D86CF] p-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-[#8FCBF2]" />
                    <span className="text-[11px] font-bold uppercase tracking-[.16em] text-[#8FCBF2]">
                      Need help?
                    </span>
                  </div>
                  <p className="m-0 text-[13px] leading-[1.55] text-white/85 mb-3">
                    Questions about these Terms?
                  </p>
                  <a
                    href="mailto:support@thecoderbox.com"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white hover:gap-2.5 transition-all"
                  >
                    Contact support
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </aside>

            {/* CONTENT */}
            <main className="min-w-0">

              {/* Mobile TOC */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setShowToc(!showToc)}
                  className="w-full flex items-center justify-between gap-3 rounded-2xl border border-[#D9DDD6] bg-white px-4 py-3.5 text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex-none grid w-8 h-8 place-items-center rounded-lg bg-[#0A5E93] text-white">
                      <BookOpen className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10.5px] font-bold uppercase tracking-[.14em] text-[#6B7585]">
                        Table of contents
                      </div>
                      <div className="text-[13.5px] font-semibold text-[#0B1526] truncate">
                        {SECTIONS.find((s) => s.id === activeId)?.title || 'Jump to section'}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-[#6B7585] transition-transform ${showToc ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence>
                  {showToc && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-2 rounded-2xl border border-[#D9DDD6] bg-white"
                    >
                      <nav className="p-2">
                        {SECTIONS.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => scrollTo(s.id)}
                            className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13.5px] text-[#56627A] hover:bg-[#01ADF0]/[.06] hover:text-[#0A5E93] transition-all"
                          >
                            <span className="flex-none font-['Sora'] text-[11px] font-bold text-[#B9C0C9] tabular-nums">
                              {s.num}
                            </span>
                            {s.title}
                          </button>
                        ))}
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Intro card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl border border-[#D9DDD6] bg-white p-6 sm:p-8 mb-8 sm:mb-10"
              >
                <span className="pointer-events-none absolute -right-16 -top-16 w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.1),transparent_70%)]" />
                <div className="relative flex items-start gap-4">
                  <span className="flex-none grid w-11 h-11 rounded-2xl bg-gradient-to-br from-[#01ADF0] to-[#0A5E93] place-items-center text-white shadow-lg shadow-[#01ADF0]/25">
                    <FileText className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-[.16em] text-[#01ADF0] mb-2">
                      Agreement to Terms
                    </div>
                    <p className="m-0 text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557]">
                      Welcome to <strong className="text-[#0B1526]">TheCoderBox</strong>. By accessing or using{' '}
                      <strong className="text-[#0B1526]">thecoderbox.com</strong>, you agree to the following Terms &amp; Conditions.
                    </p>
                    <p className="mt-3 text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557]">
                      If you do not agree with these terms, please do not use the Website.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Sections */}
              <div className="space-y-6 sm:space-y-8">
                {SECTIONS.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = activeId === s.id;
                  return (
                    <motion.article
                      key={s.id}
                      id={s.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 * Math.min(i, 3) }}
                      viewport={{ once: true, margin: '-80px' }}
                      className={`relative scroll-mt-28 rounded-3xl border bg-white p-6 sm:p-8 transition-all duration-300 ${
                        isActive ? 'border-[#01ADF0]/40 shadow-[0_12px_40px_rgba(1,173,240,.1)]' : 'border-[#D9DDD6]'
                      }`}
                    >
                      <span className={`absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-gradient-to-b from-[#01ADF0] to-[#0A5E93] transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                      <div className="flex items-start gap-4 mb-4 sm:mb-5">
                        <span className="flex-none grid w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#01ADF0]/[.08] place-items-center text-[#0A5E93]">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                        </span>
                        <div className="min-w-0 pt-1">
                          <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#01ADF0] mb-1 tabular-nums">
                            Section {s.num}
                          </div>
                          <h2 className="font-['Sora'] text-[20px] sm:text-[24px] md:text-[26px] font-bold tracking-[-.025em] leading-[1.2] text-[#0B1526]">
                            {s.title}
                          </h2>
                        </div>
                      </div>

                      <div className="pl-0 sm:pl-[72px]">
                        {s.intro && (
                          <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] mb-4">
                            {s.intro}
                          </p>
                        )}

                        {s.list && (
                          <ul className="list-none space-y-2.5 mb-4 pl-0">
                            {s.list.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-[15px] sm:text-[15.5px] leading-[1.7] text-[#3A4557]">
                                <span className="flex-none mt-[9px] w-[6px] h-[6px] rounded-full bg-gradient-to-br from-[#01ADF0] to-[#0A5E93]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {s.paras && s.paras.map((p, k) => (
                          <p key={k} className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] mb-3 last:mb-0">
                            {p}
                          </p>
                        ))}

                        {s.outro && (
                          <div className="mt-4 pl-4 border-l-2 border-[#01ADF0]/30">
                            <p className="m-0 text-[14.5px] sm:text-[15px] leading-[1.7] text-[#0A5E93] italic">
                              {s.outro}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* Contact */}
              <motion.article
                id="contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden scroll-mt-28 rounded-3xl border border-[#0A5E93]/20 bg-gradient-to-br from-[#0A5E93] via-[#0878b8] to-[#0D86CF] text-white p-6 sm:p-9 mt-8 sm:mt-10"
              >
                <span className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.15),transparent_70%)] blur-2xl" />
                <span className="pointer-events-none absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.1),transparent_70%)] blur-2xl" />

                <div className="relative">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex-none grid w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-sm place-items-center">
                      <Mail className="w-6 h-6 text-white" />
                    </span>
                    <div className="pt-1">
                      <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#8FCBF2] mb-1">
                        Section 13
                      </div>
                      <h2 className="font-['Sora'] text-[22px] sm:text-[26px] md:text-[30px] font-bold tracking-[-.025em] leading-[1.15]">
                        Contact Us
                      </h2>
                    </div>
                  </div>

                  <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-white/85 mb-7 max-w-2xl">
                    If you have questions about these Terms &amp; Conditions, please contact us:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: Mail, label: 'Email', value: 'support@thecoderbox.com', href: 'mailto:support@thecoderbox.com' },
                      { icon: Globe, label: 'Website', value: 'thecoderbox.com', href: 'https://thecoderbox.com' },
                      { icon: Phone, label: 'Phone', value: '+91 89288 09025 / +91 72087 69025', href: 'tel:+918928809025' },
                      { icon: MapPin, label: 'Registered Office', value: 'Vinir Tower, Floor 1st, 6, Outer Ring Road, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India.', href: null },
                    ].map((c) => {
                      const Icon = c.icon;
                      const inner = (
                        <div className="flex items-start gap-3.5 h-full">
                          <span className="flex-none grid w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm place-items-center">
                            <Icon className="w-4.5 h-4.5 text-white" />
                          </span>
                          <div className="min-w-0">
                            <div className="text-[10.5px] uppercase tracking-[.16em] font-bold text-[#8FCBF2] mb-1.5">
                              {c.label}
                            </div>
                            <div className="text-[14px] sm:text-[14.5px] leading-[1.55] text-white/95 break-words">
                              {c.value}
                            </div>
                          </div>
                        </div>
                      );
                      const cls = 'block rounded-2xl border border-white/15 bg-white/[.06] p-4 hover:bg-white/[.12] hover:border-white/30 transition-all';
                      return c.href ? (
                        <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={cls}>
                          {inner}
                        </a>
                      ) : (
                        <div key={c.label} className={cls}>{inner}</div>
                      );
                    })}
                  </div>
                </div>
              </motion.article>

              {/* Acknowledgement */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 sm:mt-10 rounded-3xl border border-[#01ADF0]/20 bg-gradient-to-br from-[#01ADF0]/[.06] to-transparent p-6 sm:p-8 text-center"
              >
                <p className="m-0 text-[14.5px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] italic max-w-2xl mx-auto">
                  By using <strong className="text-[#0B1526] not-italic">thecoderbox.com</strong>, you acknowledge that you have read and agree to these Terms &amp; Conditions.
                </p>
              </motion.div>

              <div className="mt-10 sm:mt-14 flex justify-center">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#0A5E93] hover:bg-[#0B1526] text-white font-semibold text-[14px] px-7 py-3.5 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0A5E93]/20"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                  Back to Home
                </Link>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;