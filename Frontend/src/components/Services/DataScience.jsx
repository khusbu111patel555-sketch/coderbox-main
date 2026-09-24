import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Brain, Sparkles, Database, LineChart, Cpu, Zap, Target,
  Shield, Layers, Rocket, Cloud, Users, Award, CheckCircle, Search,
  Settings, Building2, ShoppingCart, HeartPulse, Factory, Server,
  ChevronDown, ChevronUp, Quote, Star, DollarSign, Clock, Globe,
  Briefcase, Lightbulb, Activity, Code2, GitBranch, Workflow,
  Eye, Gauge, Microscope, Bot, MessageSquare, FileText, TrendingUp,
  Network, Workflow as WorkflowIcon, FlaskConical, Atom
} from 'lucide-react';

// ============================================
// 1. HERO SECTION
// ============================================
const DataScienceHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24"
      style={{ background: 'linear-gradient(135deg, #0a1128 0%, #0d1b3e 50%, #0a1128 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(74, 148, 214, 0.08) 0%, transparent 65%)' }}
        />

        {/* Floating Circles */}
        <motion.div
          className="absolute top-[12%] left-[6%] w-[150px] h-[150px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.9) 0%, rgba(107, 33, 168, 0.7) 40%, rgba(76, 29, 149, 0.3) 70%, transparent 100%)',
            boxShadow: '0 0 80px rgba(139, 92, 246, 0.4)',
          }}
          animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[12%] left-[8%] w-[170px] h-[170px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(126, 34, 206, 0.85) 0%, rgba(88, 28, 135, 0.6) 45%, rgba(59, 7, 100, 0.25) 75%, transparent 100%)',
            boxShadow: '0 0 100px rgba(126, 34, 206, 0.35)',
          }}
          animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[50%] right-[6%] w-[160px] h-[160px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.85) 0%, rgba(107, 33, 168, 0.55) 45%, rgba(76, 29, 149, 0.2) 75%, transparent 100%)',
            boxShadow: '0 0 90px rgba(147, 51, 234, 0.35)',
          }}
          animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Neural Network SVG */}
        <motion.svg
          className="absolute top-[10%] right-[12%] w-[440px] h-[440px] opacity-50"
          viewBox="0 0 400 400"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 12px rgba(96, 165, 250, 0.4))' }}
          animate={{ y: [0, 20, 0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            <linearGradient id="nnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Connections */}
          {[
            { x1: 60, y1: 100, x2: 180, y2: 140 },
            { x1: 60, y1: 100, x2: 180, y2: 200 },
            { x1: 60, y1: 200, x2: 180, y2: 140 },
            { x1: 60, y1: 200, x2: 180, y2: 200 },
            { x1: 60, y1: 200, x2: 180, y2: 260 },
            { x1: 60, y1: 300, x2: 180, y2: 260 },
            { x1: 60, y1: 300, x2: 180, y2: 200 },
            { x1: 180, y1: 140, x2: 320, y2: 200 },
            { x1: 180, y1: 200, x2: 320, y2: 200 },
            { x1: 180, y1: 260, x2: 320, y2: 200 },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#nnGrad)"
              strokeWidth="0.8"
              opacity="0.5"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}

          {/* Nodes Layer 1 */}
          {[
            { cx: 60, cy: 100 },
            { cx: 60, cy: 200 },
            { cx: 60, cy: 300 },
          ].map((node, i) => (
            <motion.circle
              key={`l1-${i}`}
              cx={node.cx}
              cy={node.cy}
              r="10"
              fill="#60A5FA"
              fillOpacity="0.3"
              stroke="url(#nnGrad)"
              strokeWidth="1.5"
              animate={{ r: [8, 11, 8], fillOpacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
            />
          ))}

          {/* Nodes Layer 2 */}
          {[
            { cx: 180, cy: 140 },
            { cx: 180, cy: 200 },
            { cx: 180, cy: 260 },
          ].map((node, i) => (
            <motion.circle
              key={`l2-${i}`}
              cx={node.cx}
              cy={node.cy}
              r="10"
              fill="#A855F7"
              fillOpacity="0.3"
              stroke="url(#nnGrad)"
              strokeWidth="1.5"
              animate={{ r: [8, 11, 8], fillOpacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: 0.5 }}
            />
          ))}

          {/* Output Node */}
          <motion.circle
            cx="320"
            cy="200"
            r="14"
            fill="#00C6FB"
            fillOpacity="0.4"
            stroke="url(#nnGrad)"
            strokeWidth="2"
            animate={{ r: [12, 16, 12], fillOpacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.svg>

        {/* Rotated Square */}
        <motion.div
          className="absolute top-[25%] right-[8%] w-[120px] h-[120px] rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(88, 28, 135, 0.05) 100%)',
            boxShadow: '0 0 50px rgba(168, 85, 247, 0.2)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
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
            Data Science
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Build Intelligent Systems That{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              Learn, Predict & Evolve
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/70 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            From custom machine learning models to production-ready AI systems — we turn your data into intelligent products that create measurable business value.
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
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#A855F7] to-[#01ADF0] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#A855F7]/30 hover:shadow-xl hover:shadow-[#A855F7]/50 transition-all duration-300"
            >
              Discuss Your AI Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#services"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              View Capabilities
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { val: '200+', label: 'AI/ML Models Deployed' },
              { val: '50+', label: 'Data Scientists' },
              { val: '98%', label: 'Model Accuracy Avg' },
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
// 2. WHY DATA SCIENCE MATTERS
// ============================================
const DataScienceWhy = () => {
  const stats = [
    { icon: TrendingUp, val: '$15.7T', label: 'AI contribution to global economy by 2030', color: '#01ADF0' },
    { icon: Brain, val: '80%', label: 'Enterprises adopting AI/ML by 2026', color: '#A855F7' },
    { icon: Zap, val: '10x', label: 'Faster decision-making with ML models', color: '#00C6FB' },
    { icon: DollarSign, val: '40%', label: 'Cost reduction via automation', color: '#008FD1' },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            Why Data Science
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            The Intelligence Era Has{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              Already Begun
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            Businesses that leverage AI and machine learning are outperforming competitors at an unprecedented rate. Data science is no longer a luxury — it's a survival strategy.
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
// 3. DATA SCIENCE SERVICES
// ============================================
const DataScienceServices = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      desc: 'Custom ML models for classification, regression, clustering, and recommendation systems tailored to your business.',
      tech: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Python'],
      color: '#A855F7',
    },
    {
      icon: Bot,
      title: 'Generative AI & LLMs',
      desc: 'Build intelligent chatbots, RAG systems, and copilots powered by GPT, Claude, and open-source LLMs.',
      tech: ['OpenAI', 'LangChain', 'LlamaIndex', 'Hugging Face'],
      color: '#01ADF0',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      desc: 'Image recognition, object detection, OCR, and video analytics for real-world business applications.',
      tech: ['OpenCV', 'YOLO', 'TensorFlow', 'PyTorch'],
      color: '#00C6FB',
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      desc: 'Text classification, sentiment analysis, entity extraction, and language generation at scale.',
      tech: ['spaCy', 'BERT', 'Transformers', 'NLTK'],
      color: '#008FD1',
    },
    {
      icon: Activity,
      title: 'Time Series Forecasting',
      desc: 'Predict future demand, revenue, and trends using advanced statistical and deep learning models.',
      tech: ['Prophet', 'ARIMA', 'LSTM', 'NeuralProphet'],
      color: '#005B8F',
    },
    {
      icon: Network,
      title: 'MLOps & Model Deployment',
      desc: 'End-to-end ML pipelines, model monitoring, retraining, and production-grade deployment infrastructure.',
      tech: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes'],
      color: '#03B4F6',
    },
  ];

  return (
    <section id="services" className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00C6FB]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span className="sec-badge inline-block" whileHover={{ scale: 1.05 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            Our Capabilities
          </motion.span>
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          >
            Full-Stack{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              Data Science Expertise
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            From classical ML to cutting-edge generative AI — we cover every aspect of the modern data science stack.
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
                className="group relative bg-white h-full rounded-2xl p-6 shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform-gpu hover:-translate-y-2 hover:shadow-2xl hover:border-[#A855F7]/30"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  style={{ background: `linear-gradient(to right, ${service.color}, #A855F7)` }}
                ></div>

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: service.color, boxShadow: `0 8px 20px ${service.color}40` }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#003F7D] mb-3 group-hover:text-[#A855F7] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                    {service.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#A855F7]/10 text-[#7C3AED] border border-[#A855F7]/20"
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
            Talk to a Data Scientist
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 4. ML LIFECYCLE PROCESS
// ============================================
const DataScienceProcess = () => {
  const steps = [
    { num: '01', title: 'Problem Framing', desc: 'We define clear business objectives and translate them into measurable ML problems.' },
    { num: '02', title: 'Data Collection & Prep', desc: 'Gather, clean, label, and augment data — the foundation of every great model.' },
    { num: '03', title: 'Feature Engineering', desc: 'Craft meaningful features that help models learn patterns and make accurate predictions.' },
    { num: '04', title: 'Model Training & Tuning', desc: 'Experiment with algorithms, hyperparameter tuning, and cross-validation for peak performance.' },
    { num: '05', title: 'Evaluation & Validation', desc: 'Rigorous testing against holdout sets with business-metric alignment to ensure real-world impact.' },
    { num: '06', title: 'Deployment & Monitoring', desc: 'Ship models to production with continuous monitoring, drift detection, and automated retraining.' },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

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
            A Disciplined{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              ML Lifecycle
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            We follow industry-standard CRISP-DM and MLOps practices to deliver models that actually work in production.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-5xl font-bold text-[#A855F7]/10 group-hover:text-[#A855F7]/20 transition-colors duration-500">
                {step.num}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#00C6FB] flex items-center justify-center mb-4 shadow-lg shadow-[#A855F7]/30">
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>

                <h3 className="text-lg font-bold text-[#003F7D] mb-2 group-hover:text-[#A855F7] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 5. INDUSTRIES
// ============================================
const DataScienceIndustries = () => {
  const industries = [
    { icon: ShoppingCart, title: 'E-Commerce', desc: 'Recommendation engines, demand forecasting, price optimization', color: '#01ADF0' },
    { icon: DollarSign, title: 'BFSI', desc: 'Fraud detection, credit scoring, algorithmic trading, risk modeling', color: '#00C6FB' },
    { icon: HeartPulse, title: 'Healthcare', desc: 'Medical imaging AI, drug discovery, patient outcome prediction', color: '#008FD1' },
    { icon: Factory, title: 'Manufacturing', desc: 'Predictive maintenance, quality control, computer vision inspection', color: '#005B8F' },
    { icon: Server, title: 'SaaS & Tech', desc: 'Product analytics, churn prediction, personalized UX', color: '#03B4F6' },
    { icon: MessageSquare, title: 'Customer Service', desc: 'Chatbots, sentiment analysis, ticket routing, copilots', color: '#006FA6' },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
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
            AI Solutions for{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              Every Sector
            </span>
          </motion.h2>
          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            We've deployed intelligent systems across diverse industries — each with unique challenges and data stories.
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
                className="group relative bg-gradient-to-br from-white to-[#FAF8FF] rounded-xl p-5 border border-gray-100 hover:border-[#A855F7]/30 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${ind.color}15`, border: `1px solid ${ind.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: ind.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#003F7D] mb-1 group-hover:text-[#A855F7] transition-colors">
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
// 6. WHY CHOOSE US
// ============================================
const DataScienceWhyUs = () => {
  const reasons = [
    { icon: Target, title: 'Business-First Approach', desc: 'Every model we build is tied to a measurable business outcome — not just a technical metric.', color: '#003F7D' },
    { icon: Layers, title: 'End-to-End Delivery', desc: 'From problem framing to production deployment — we own the entire ML lifecycle.', color: '#166534' },
    { icon: Zap, title: 'Production-Grade AI', desc: 'We ship models that work at scale with monitoring, retraining, and MLOps baked in.', color: '#9A3412' },
    { icon: Shield, title: 'Responsible AI', desc: 'Ethical, fair, and transparent models that comply with regulations and earn user trust.', color: '#9D174D' },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

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
            Where AI Expertise Meets{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              Business Impact
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
                className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: r.color, boxShadow: `0 8px 20px ${r.color}40` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#003F7D] mb-2 group-hover:text-[#A855F7] transition-colors">
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
// 7. TECH STACK
// ============================================
const DataScienceTechStack = () => {
  const categories = [
    { title: 'ML Frameworks', icon: Brain, color: '#A855F7', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost'] },
    { title: 'Generative AI', icon: Sparkles, color: '#01ADF0', items: ['OpenAI', 'LangChain', 'LlamaIndex', 'Hugging Face'] },
    { title: 'NLP & Vision', icon: Eye, color: '#00C6FB', items: ['spaCy', 'Transformers', 'OpenCV', 'YOLO'] },
    { title: 'MLOps & Deployment', icon: Settings, color: '#008FD1', items: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'Airflow'] },
    { title: 'Languages & Tools', icon: Code2, color: '#005B8F', items: ['Python', 'R', 'SQL', 'Jupyter', 'Dask'] },
    { title: 'Cloud AI Platforms', icon: Cloud, color: '#03B4F6', items: ['AWS SageMaker', 'Azure ML', 'Vertex AI', 'Databricks'] },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
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
            The Modern{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              AI/ML Stack
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
                className="group bg-gradient-to-br from-white to-[#FAF8FF] rounded-xl p-5 border border-gray-100 hover:border-[#A855F7]/30 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
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
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700 hover:border-[#A855F7]/40 hover:text-[#A855F7] transition-colors cursor-default"
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
// 8. CASE STUDIES
// ============================================
const DataScienceCases = () => {
  const cases = [
    {
      industry: 'Retail & E-Commerce',
      title: 'AI-Powered Recommendation Engine',
      challenge: 'Generic product recommendations hurting conversion rates',
      solution: 'Hybrid collaborative filtering + content-based recommendation model',
      results: [
        { val: '+45%', label: 'Increase in conversions' },
        { val: '+28%', label: 'Average order value' },
      ],
      color: '#A855F7',
    },
    {
      industry: 'Customer Service',
      title: 'LLM-Based Support Copilot',
      challenge: 'High volume support tickets slowing response times',
      solution: 'RAG-powered AI assistant with custom knowledge base integration',
      results: [
        { val: '70%', label: 'Faster ticket resolution' },
        { val: '-$1.2M', label: 'Annual cost savings' },
      ],
      color: '#01ADF0',
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#E6F8FF] via-white to-[#E6F8FF] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#01ADF0]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

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
            Models That{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              Moved the Needle
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
              className="relative overflow-hidden bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ background: `linear-gradient(to right, ${c.color}, #A855F7)` }}
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
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-3 h-3 text-purple-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Solution:</strong> {c.solution}
                  </p>
                </div>
              </div>

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
// 9. FAQ
// ============================================
const DataScienceFAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How long does it take to build and deploy an ML model?',
      a: 'A proof-of-concept typically takes 4–6 weeks. Production-grade deployment with MLOps pipelines generally takes 3–4 months depending on complexity and data readiness.',
    },
    {
      q: 'Do we need a huge dataset to get started with ML?',
      a: 'Not necessarily. We work with everything from small labeled datasets (using transfer learning and synthetic data) to massive data lakes. The key is data quality over quantity.',
    },
    {
      q: 'Can you help us with Generative AI and LLMs?',
      a: 'Absolutely. We build RAG systems, custom chatbots, document Q&A tools, and AI copilots using OpenAI, Claude, Llama, and open-source models — with fine-tuning and prompt engineering.',
    },
    {
      q: 'How do you ensure model accuracy and reliability in production?',
      a: 'We use rigorous cross-validation, holdout testing, and continuous monitoring in production. Drift detection, automated retraining, and A/B testing ensure models stay accurate over time.',
    },
    {
      q: 'What if we already have an in-house data science team?',
      a: 'We offer flexible engagement models — from full delivery to augmentation. We can collaborate, mentor, or take on specific workstreams like MLOps, GenAI, or computer vision.',
    },
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
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
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
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
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#A855F7]/10 flex items-center justify-center">
                  {openIdx === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#A855F7]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#A855F7]" />
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
// 10. FINAL CTA
// ============================================
const DataScienceCTA = () => {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0a1128 0%, #0d1b3e 50%, #0a1128 100%)' }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 60%)' }} />

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
              boxShadow: `0 0 ${size * 3}px rgba(168, 85, 247, 0.6)`,
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
            Let's Innovate
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Ready to Build Your{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#00C6FB] bg-clip-text text-transparent">
              Intelligent Future?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 mt-5 max-w-2xl mx-auto">
            Whether you're exploring AI for the first time or scaling your existing ML infrastructure, our data scientists are ready to help.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="/contact"
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#A855F7] to-[#01ADF0] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#A855F7]/30 hover:shadow-xl hover:shadow-[#A855F7]/50 transition-all duration-300"
            >
              Start Your AI Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="/contact"
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Book a Free Consultation
            </motion.a>
          </div>

          <p className="text-xs sm:text-sm text-white/50 mt-6">
            No commitment. Let's explore what AI can do for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const DataScience = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <DataScienceHero />
      <DataScienceWhy />
      <DataScienceServices />
      <DataScienceProcess />
      <DataScienceIndustries />
      <DataScienceWhyUs />
      <DataScienceTechStack />
      <DataScienceCases />
      <DataScienceFAQ />
      <DataScienceCTA />
    </div>
  );
};

export default DataScience;