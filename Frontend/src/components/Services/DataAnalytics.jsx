import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, BarChart3, Brain, Database, LineChart, PieChart, TrendingUp,
  Target, Zap, Shield, Rocket, Cloud, Users, Award, CheckCircle, Search,
  Layers, Settings, Sparkles, Building2, ShoppingCart, HeartPulse, Factory,
  Server, Cpu, ChevronDown, ChevronUp, Quote, Play, Star, CheckCircle2,
  DollarSign, Clock, Globe, Briefcase, Lightbulb, TrendingDown, Activity,
  FileSpreadsheet, Code2, GitBranch, Workflow, Lock, Eye, Gauge
} from 'lucide-react';

// ============================================
// 1. HERO SECTION
// ============================================
const DataHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24"
      style={{ background: 'linear-gradient(135deg, #0a1128 0%, #0d1b3e 50%, #0a1128 100%)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(74, 148, 214, 0.08) 0%, transparent 65%)' }}
        />

        {/* Floating Circles */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.9) 0%, rgba(107, 33, 168, 0.7) 40%, rgba(76, 29, 149, 0.3) 70%, transparent 100%)',
            boxShadow: '0 0 80px rgba(139, 92, 246, 0.4)',
          }}
          animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(126, 34, 206, 0.85) 0%, rgba(88, 28, 135, 0.6) 45%, rgba(59, 7, 100, 0.25) 75%, transparent 100%)',
            boxShadow: '0 0 100px rgba(126, 34, 206, 0.35)',
          }}
          animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.85) 0%, rgba(107, 33, 168, 0.55) 45%, rgba(76, 29, 149, 0.2) 75%, transparent 100%)',
            boxShadow: '0 0 90px rgba(147, 51, 234, 0.35)',
          }}
          animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Data Chart Wireframe SVG */}
        <motion.svg
          className="absolute top-[10%] right-[12%] w-[420px] h-[420px] opacity-40"
          viewBox="0 0 400 400"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 12px rgba(96, 165, 250, 0.4))' }}
          animate={{ y: [0, 20, 0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`h-${i}`} x1="40" y1={60 + i * 70} x2="360" y2={60 + i * 70} stroke="#60A5FA" strokeWidth="0.3" opacity="0.3" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`v-${i}`} x1={40 + i * 80} y1="60" x2={40 + i * 80} y2="340" stroke="#60A5FA" strokeWidth="0.3" opacity="0.3" />
          ))}
          {/* Rising bars */}
          {[
            { x: 60, h: 80 },
            { x: 120, h: 140 },
            { x: 180, h: 180 },
            { x: 240, h: 220 },
            { x: 300, h: 260 },
          ].map((bar, i) => (
            <motion.rect
              key={i}
              x={bar.x}
              y={340 - bar.h}
              width="40"
              height={bar.h}
              fill="url(#lineGrad)"
              opacity="0.4"
              rx="4"
              animate={{ y: [340 - bar.h, 340 - bar.h - 10, 340 - bar.h] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            />
          ))}
          {/* Trend line */}
          <motion.polyline
            points="60,260 120,200 180,140 240,100 300,60"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </motion.svg>

        {/* Rotated Square */}
        <motion.div
          className="absolute top-[25%] right-[8%] w-[120px] h-[120px] rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.05) 100%)',
            boxShadow: '0 0 50px rgba(96, 165, 250, 0.15)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            transform: 'rotate(45deg)',
          }}
          animate={{ rotate: [45, 55, 45], y: [0, 25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Particles */}
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 5 + 3;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: `0 0 ${size * 3}px rgba(255, 255, 255, 0.9), 0 0 ${size * 6}px rgba(96, 165, 250, 0.6)`,
              }}
              animate={{ opacity: [0.15, 0.95, 0.15], scale: [1, 1.6, 1] }}
              transition={{
                duration: 1.5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Data Analytics
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Turn Raw Data Into{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#A855F7] bg-clip-text text-transparent">
              Revenue-Driving Decisions
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            We help enterprises transform complex data into actionable insights that drive smarter marketing, reduce risk, and unlock measurable business growth.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <motion.a
              href="/contact"
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#01ADF0]/30 hover:shadow-xl hover:shadow-[#01ADF0]/40 transition-all duration-300"
            >
              Get a Free Data Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#services"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Explore Solutions
            </motion.a>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { val: '10+', label: 'Years Expertise' },
              { val: '300+', label: 'Projects Delivered' },
              { val: '4.8/5', label: 'Client Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.val}</div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 2. DATA OPPORTUNITY SECTION
// ============================================
const DataOpportunity = () => {
  const stats = [
    { icon: Database, val: '181 ZB', label: 'Data generated globally by 2025', color: '#01ADF0' },
    { icon: TrendingUp, val: '23x', label: 'More customer acquisition with analytics', color: '#00C6FB' },
    { icon: Users, val: '6x', label: 'Higher customer retention rates', color: '#008FD1' },
    { icon: DollarSign, val: '19x', label: 'More likely to be profitable', color: '#005B8F' },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            The Data Opportunity
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Data is the New{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Lifeline of Your Enterprise
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            By 2025, the world will generate 181 zettabytes of data annually — yet most organizations still struggle to extract meaningful value from it. The gap isn't data. It's insight.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 hover:shadow-2xl hover:shadow-[#01ADF0]/20 hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ backgroundColor: stat.color, boxShadow: `0 8px 20px ${stat.color}40` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#003F7D] mb-1">{stat.val}</div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 3. SERVICES SECTION
// ============================================
const DataServices = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Engineering & ETL',
      desc: 'Build robust ETL/ELT pipelines to ingest and prepare data from APIs, applications, IoT systems, and legacy databases.',
      tech: ['Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Snowflake'],
      color: '#01ADF0',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      desc: 'Interactive dashboards and KPI reporting systems that translate large volumes of data into meaningful summaries.',
      tech: ['Power BI', 'Tableau', 'Looker', 'Qlik'],
      color: '#00C6FB',
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      desc: 'Forecast future trends, identify patterns, and prescribe actions using machine learning and statistical models.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'MLflow'],
      color: '#008FD1',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Analytics',
      desc: 'Full-funnel marketing analytics to illuminate the customer journey, optimize conversions, and maximize ROI.',
      tech: ['GA4', 'HubSpot', 'Attribution', 'A/B Testing'],
      color: '#005B8F',
    },
    {
      icon: DollarSign,
      title: 'Financial & Risk Analytics',
      desc: 'Financial data analysis that indicates viability, stability, and profitability. Risk modeling for mitigation.',
      tech: ['SQL', 'Python', 'Risk Models', 'Forecasting'],
      color: '#03B4F6',
    },
    {
      icon: Sparkles,
      title: 'Data Science & AI',
      desc: 'Customized statistical algorithms and models tailored to your business needs and growth roadmap.',
      tech: ['AutoML', 'Generative AI', 'Deep Learning', 'NLP'],
      color: '#006FA6',
    },
  ];

  return (
    <section id="services" className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            Our Services
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            End-to-End{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Data Analytics Capabilities
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            From data engineering to predictive modeling — we cover the entire analytics lifecycle.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-white h-full rounded-2xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-2 hover:shadow-2xl hover:border-[#01ADF0]/30"
              >
                {/* Top gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  style={{ background: `linear-gradient(to right, ${service.color}, #01ADF0)` }}
                ></div>

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: service.color, boxShadow: `0 8px 20px ${service.color}40` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#003F7D] mb-3 group-hover:text-[#008FD1] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                    {service.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#01ADF0]/10 text-[#008FD1] border border-[#01ADF0]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            whileTap={{ scale: 0.95 }}
            className="sec-btn inline-flex items-center gap-2"
          >
            Talk to a Data Expert
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 4. PROCESS SECTION
// ============================================
const DataProcess = () => {
  const steps = [
    { num: '01', title: 'Discover & Assess', desc: 'We understand your business objectives, data landscape, and identify high-impact opportunities.' },
    { num: '02', title: 'Prepare & Integrate', desc: 'We collect, clean, and integrate data from all sources into a unified analytics environment.' },
    { num: '03', title: 'Model & Analyze', desc: 'We apply statistical models and machine learning to uncover patterns, trends, and predictions.' },
    { num: '04', title: 'Visualize & Communicate', desc: 'We build interactive dashboards and reports that tell a clear, compelling data story.' },
    { num: '05', title: 'Operationalize & Optimize', desc: 'We help you embed insights into daily workflows and continuously refine models for ongoing improvement.' },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            Our Process
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            A Proven 5-Step Approach to{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Data-Driven Success
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            We follow a repeatable, transparent cycle that ensures you see value at every stage.
          </motion.p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#01ADF0]/30 to-transparent -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="relative grid md:grid-cols-2 gap-8 md:gap-0 items-center"
                >
                  {/* Card */}
                  <div className={`pl-14 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#00C6FB]/10 to-[#01ADF0]/10 border border-[#01ADF0]/20 text-[#008FD1] text-xs font-bold uppercase tracking-widest mb-3">
                      Step {step.num}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#003F7D] mb-3">{step.title}</h3>
                    <p className={`text-sm sm:text-base text-gray-600 leading-relaxed max-w-md ${isLeft ? 'md:ml-auto' : ''}`}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#01ADF0]/30 blur-md animate-pulse" />
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#00C6FB] to-[#01ADF0] flex items-center justify-center shadow-xl shadow-[#01ADF0]/40 border-4 border-white">
                        <span className="text-white font-bold text-sm md:text-base">{step.num}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 5. INDUSTRIES SECTION
// ============================================
const DataIndustries = () => {
  const industries = [
    { icon: ShoppingCart, title: 'E-Commerce & Retail', desc: 'Customer behavior, inventory optimization, demand forecasting', color: '#01ADF0' },
    { icon: DollarSign, title: 'BFSI', desc: 'Credit risk modeling, fraud detection, customer churn prediction', color: '#00C6FB' },
    { icon: HeartPulse, title: 'Healthcare', desc: 'Patient analytics, operational efficiency, predictive diagnostics', color: '#008FD1' },
    { icon: Factory, title: 'Manufacturing', desc: 'Supply chain analytics, predictive maintenance, quality control', color: '#005B8F' },
    { icon: Server, title: 'SaaS & Technology', desc: 'Product analytics, user behavior, churn prevention', color: '#03B4F6' },
    { icon: Target, title: 'Marketing & Media', desc: 'Campaign analytics, attribution modeling, audience segmentation', color: '#006FA6' },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            Industries
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Tailored Analytics for{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Every Industry
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our expertise spans diverse sectors with solutions designed to meet specific requirements.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-gradient-to-br from-white to-[#F8FCFF] rounded-xl p-5 border border-gray-100 hover:border-[#01ADF0]/30 shadow-sm hover:shadow-xl hover:shadow-[#01ADF0]/10 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${ind.color}15`, border: `1px solid ${ind.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: ind.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#003F7D] mb-1 group-hover:text-[#008FD1] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 6. WHY CHOOSE US SECTION
// ============================================
const DataWhyUs = () => {
  const reasons = [
    { icon: Target, title: 'Results-Driven Approach', desc: 'We focus on meaningful outcomes — not vanity metrics. Every analytics initiative is tied to clear business KPIs.', color: '#003F7D' },
    { icon: Layers, title: 'End-to-End Capabilities', desc: 'From data engineering to predictive modeling, we cover the entire analytics stack under one roof.', color: '#166534' },
    { icon: Zap, title: 'Fast Time-to-Value', desc: 'Our agile delivery model ensures you see actionable insights within weeks, not months.', color: '#9A3412' },
    { icon: Shield, title: 'Enterprise-Grade Security', desc: 'Your data is protected with industry-leading security, compliance, and governance frameworks.', color: '#9D174D' },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            Why Choose Us
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Your Data. Our Expertise.{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Measurable Results.
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-2xl hover:shadow-[#01ADF0]/20 hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: r.color, boxShadow: `0 8px 20px ${r.color}40` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#003F7D] mb-2 group-hover:text-[#008FD1] transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 7. TECH STACK SECTION
// ============================================
const DataTechStack = () => {
  const categories = [
    { title: 'Business Intelligence', icon: BarChart3, color: '#01ADF0', items: ['Power BI', 'Tableau', 'Looker', 'Qlik', 'Metabase'] },
    { title: 'Data Engineering', icon: Database, color: '#00C6FB', items: ['Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Snowflake'] },
    { title: 'Data Science & ML', icon: Brain, color: '#008FD1', items: ['Python', 'R', 'TensorFlow', 'PyTorch', 'MLflow'] },
    { title: 'Cloud Platforms', icon: Cloud, color: '#005B8F', items: ['AWS', 'Azure', 'Google Cloud', 'Databricks'] },
    { title: 'Databases & Warehouses', icon: Server, color: '#03B4F6', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake', 'Redshift'] },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            Technologies
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Modern{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Analytics Stack
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-gradient-to-br from-white to-[#F8FCFF] rounded-xl p-5 border border-gray-100 hover:border-[#01ADF0]/30 shadow-sm hover:shadow-xl hover:shadow-[#01ADF0]/10 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-base font-bold text-[#003F7D]">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700 hover:border-[#01ADF0]/40 hover:text-[#008FD1] transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 8. CASE STUDIES SECTION
// ============================================
const DataCaseStudies = () => {
  const cases = [
    {
      industry: 'E-Commerce',
      title: 'Customer Churn Reduction',
      challenge: 'High customer churn and poor campaign ROI',
      solution: 'Predictive churn model + marketing attribution dashboard',
      results: [
        { val: '40%', label: 'Reduction in churn' },
        { val: '3.2x', label: 'ROI on ad spend' },
      ],
      color: '#01ADF0',
    },
    {
      industry: 'Manufacturing',
      title: 'Equipment Downtime Reduction',
      challenge: 'Unplanned equipment downtime',
      solution: 'Predictive maintenance model using IoT sensor data',
      results: [
        { val: '35%', label: 'Reduction in downtime' },
        { val: '$2M', label: 'Annual savings' },
      ],
      color: '#00C6FB',
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            Success Stories
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Real Results,{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Real Impact
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative overflow-hidden bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-[#01ADF0]/20 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ background: `linear-gradient(to right, ${c.color}, #01ADF0)` }}
              />

              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: `${c.color}15`, color: c.color }}>
                {c.industry}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#003F7D] mb-5">{c.title}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs font-bold">!</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Challenge:</strong> {c.challenge}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-3 h-3 text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Solution:</strong> {c.solution}
                  </p>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                {c.results.map((r, i) => (
                  <div key={i}>
                    <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: c.color }}>{r.val}</div>
                    <div className="text-xs text-gray-500 font-medium">{r.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 9. FAQ SECTION
// ============================================
const DataFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How long does a typical data analytics project take?',
      a: 'Timelines vary by scope, but most initial analytics dashboards are delivered within 4–6 weeks. Predictive models typically take 8–12 weeks.',
    },
    {
      q: 'Do you work with our existing data infrastructure?',
      a: 'Yes. We integrate with your existing systems — whether on-premise, cloud-based, or hybrid. Our team adapts to your environment, not the other way around.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We have deep experience in E-Commerce, BFSI, Healthcare, Manufacturing, SaaS, and Marketing & Media.',
    },
    {
      q: 'How do you ensure data security?',
      a: 'We follow enterprise-grade security protocols including encryption, access controls, and compliance with GDPR and industry-specific regulations.',
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes. We offer continuous optimization, monitoring, and support packages to ensure your analytics ecosystem evolves with your business.',
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            FAQs
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Answers to{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Common Questions
            </span>
          </motion.h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base sm:text-lg font-semibold text-[#003F7D]">{faq.q}</span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#01ADF0]/10 flex items-center justify-center">
                  {openIdx === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#008FD1]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#008FD1]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 10. FINAL CTA SECTION
// ============================================
const DataCTA = () => {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0a1128 0%, #0d1b3e 50%, #0a1128 100%)' }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.15) 0%, transparent 60%)' }} />

      {/* Particles */}
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 4 + 2;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * 3}px rgba(96, 165, 250, 0.6)`,
            }}
            animate={{ opacity: [0.15, 0.8, 0.15], scale: [1, 1.4, 1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        );
      })}

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Let's Get Started
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Ready to Unlock the Power of{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#A855F7] bg-clip-text text-transparent">
              Your Data?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 mt-5 max-w-2xl mx-auto">
            Whether you're launching a new analytics initiative or transforming an existing one, TheCoderBox is ready to help.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="/contact"
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#01ADF0]/30 hover:shadow-xl hover:shadow-[#01ADF0]/50 transition-all duration-300"
            >
              Start Your Data Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="/contact"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Schedule a Free Consultation
            </motion.a>
          </div>

          <p className="text-xs sm:text-sm text-white/50 mt-6">
            No commitment. No pressure. Just a conversation about your data goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <DataHero />
      <DataOpportunity />
      <DataServices />
      <DataProcess />
      <DataIndustries />
      <DataWhyUs />
      <DataTechStack />
      <DataCaseStudies />
      <DataFAQ />
      <DataCTA />
    </div>
  );
};

export default DataAnalytics;