import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Zap, ChevronRight, ArrowRight,
  Layers, Brain, Monitor, Server, Shield, Code, Globe2, ShoppingCart,
  Megaphone, Database, Smartphone, TrendingUp, PenTool, UserCog, Radio,
  Lock, RefreshCw, Cloud, Terminal, GitBranch, Search, MapPin, Target,
  Share2, FileText, Mail, Users, MessageSquare, Building2, Award, Layout,
  Sparkles, Workflow, BarChart3, Cpu, Rocket,
} from "lucide-react";

/* ============================================================
   ICON PATHS
   ============================================================ */
const IC = {
  cpu: "M6 6h12v12H6z M9.5 9.5h5v5h-5z M9 2v4 M15 2v4 M9 18v4 M15 18v4 M2 9h4 M2 15h4 M18 9h4 M18 15h4",
  chart: "M3 3v18h18 M8 17v-5 M13 17V8 M18 17V5",
  db: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  zap: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  flow: "M3 3h7v7H3z M14 14h7v7h-7z M6.5 10v4a3 3 0 0 0 3 3H14",
  chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 9h8 M8 13h5",
  mega: "M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z M16 9a4 4 0 0 1 0 6 M19 6a8 8 0 0 1 0 12",
  target: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 11.5v1",
  pen: "M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z",
  mail: "M3 5h18v14H3z M3 6l9 7 9-7",
  layers: "M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
  trend: "M3 17l6-6 4 4 8-8 M15 7h6v6",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z M21 21l-5-5",
  code: "M8 6l-6 6 6 6 M16 6l6 6-6 6",
  pin: "M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z",
  globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15 15 0 0 1 0 20 M12 2a15 15 0 0 0 0 20",
  monitor: "M3 4h18v12H3z M8 21h8 M12 16v5",
  cart: "M3 3h2l2.5 12h11L21 7H6 M9 20h.01 M18 20h.01",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  phone: "M7 2h10v20H7z M11 18h2",
  headset: "M3 14v-2a9 9 0 0 1 18 0v2 M3 14h4v6H3z M17 14h4v6h-4z",
  server: "M3 3h18v7H3z M3 14h18v7H3z M7 6.5h.01 M7 17.5h.01",
  cloud: "M17.5 19H7a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 11a4 4 0 0 1-2 8z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  shieldOk: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4",
  alert: "M12 9v4 M12 17h.01 M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
  lock: "M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4",
  brain: "M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z M15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 3 3 0 0 1-3-3",
};

const S = (t, icon, c, tags) => ({ t, icon, c, tags });

/* ============================================================
   CATEGORY DATA
   ============================================================ */
const CATS = [
  {
    label: "AI Intelligence", icon: IC.brain, tag: "AI INTELLIGENCE SERVICES",
    heading: "Put intelligence to work across your business",
    intro: "From first data audit to production AI — we design, build and run it with you.",
    feature: {
      icon: IC.chat, title: "AI Chatbots & Virtual Assistants",
      blurb: "Answer customers instantly, qualify leads and hand off to your team — trained on your own content.",
      gets: ["Trained on your docs and FAQs", "Web, WhatsApp and in-app channels", "Human handoff and analytics"],
    },
    services: [
      S("AI / ML", IC.cpu, "Prediction, classification and recommendation models trained on your own data.", ["Python", "TensorFlow", "MLOps"]),
      S("Data Analytics", IC.chart, "Live dashboards and KPI reporting for clear, daily decisions.", ["Power BI", "Looker", "SQL"]),
      S("Data Science", IC.db, "Forecasting and statistical modelling that reveal hidden patterns.", ["Forecasting", "Pandas", "R"]),
      S("Automation", IC.zap, "Bots and scripts that take repetitive work off your team's plate.", ["RPA", "Zapier", "Python"]),
      S("BPA", IC.flow, "Map and automate approvals, onboarding and ops workflows.", ["Workflows", "n8n", "ERP"]),
      S("AI Chatbots", IC.chat, "Assistants on web and WhatsApp — 24/7 lead capture.", ["LLMs", "RAG", "WhatsApp"]),
    ],
  },
  {
    label: "Digital Growth", icon: IC.mega, tag: "DIGITAL GROWTH SERVICES",
    heading: "Reach the right audience and grow faster",
    intro: "Full-funnel marketing that is planned, measured and improved every week.",
    feature: {
      icon: IC.target, title: "Performance Ads",
      blurb: "Campaigns on Google and Meta, measured against the revenue they bring in.",
      gets: ["Account audit and strategy", "Ad creative and landing pages", "Weekly revenue reporting"],
    },
    services: [
      S("Social Media Marketing", IC.mega, "Platform-native content and community campaigns that build loyalty.", ["Instagram", "LinkedIn", "Reels"]),
      S("Performance Ads (PPC)", IC.target, "Google, Meta and LinkedIn campaigns optimised for revenue.", ["Google Ads", "Meta Ads", "ROAS"]),
      S("Content Marketing", IC.pen, "Blogs, videos and case studies that educate buyers.", ["Blogs", "Video", "Strategy"]),
      S("Email Marketing", IC.mail, "Automated journeys and newsletters that nurture leads.", ["Klaviyo", "Mailchimp", "Flows"]),
      S("Branding & Creative", IC.layers, "Logos, identity systems and campaign visuals.", ["Identity", "Design", "Voice"]),
      S("Conversion Optimization", IC.trend, "A/B tests and heatmaps that turn more traffic into customers.", ["A/B Tests", "Heatmaps", "CRO"]),
    ],
  },
  {
    label: "Search Intelligence", icon: IC.search, tag: "SEARCH INTELLIGENCE SERVICES",
    heading: "Get found on Google and in AI answers",
    intro: "Classic SEO and AI search optimisation, working together for visibility everywhere.",
    feature: {
      icon: IC.spark, title: "AI Search Optimization",
      blurb: "Structure your content so assistants like ChatGPT and Gemini understand — and cite — your brand.",
      gets: ["AI visibility audit", "Entity and schema setup", "Citable content plan"],
    },
    services: [
      S("SEO", IC.search, "On-page, content and authority work that lifts rankings.", ["On-Page", "Content", "Audits"]),
      S("Technical SEO", IC.code, "Site speed, Core Web Vitals and crawl fixes.", ["Web Vitals", "Schema", "Crawl"]),
      S("Local SEO", IC.pin, "Google Business Profile, citations and reviews.", ["GBP", "Citations", "Reviews"]),
      S("AI Search Optimization (GEO)", IC.spark, "Structured, citable content that helps AI recommend you.", ["GEO", "AEO", "Entities"]),
      S("Keyword & Competitor Research", IC.target, "Demand and gap analysis that shows where to compete.", ["Ahrefs", "Semrush", "Gaps"]),
      S("Link Building", IC.globe, "Editorial links and PR from relevant, real sites.", ["Digital PR", "Outreach", "Authority"]),
    ],
  },
  {
    label: "Web & E-Commerce", icon: IC.monitor, tag: "WEB & E-COMMERCE SERVICES",
    heading: "Fast, beautiful sites built to convert",
    intro: "Design, build and care for websites, stores and apps your customers love using.",
    feature: {
      icon: IC.cart, title: "E-Commerce Stores",
      blurb: "Storefronts on Shopify, WooCommerce or a custom stack, ready to sell from day one.",
      gets: ["Store design and setup", "Payments and shipping", "Launch-ready SEO"],
    },
    services: [
      S("Website Development", IC.code, "Fast, responsive, SEO-ready sites on modern stacks.", ["React", "Next.js", "Laravel"]),
      S("E-Commerce Stores", IC.cart, "Smooth checkout, payments and inventory that convert.", ["Shopify", "WooCommerce", "Razorpay"]),
      S("UI / UX Design", IC.eye, "Research, wireframes and interfaces people enjoy using.", ["Figma", "Prototypes", "Research"]),
      S("Mobile Apps", IC.phone, "Native and cross-platform iOS and Android apps.", ["Flutter", "React Native", "iOS"]),
      S("CMS Development", IC.layers, "WordPress and headless CMS your team can manage.", ["WordPress", "Headless", "Strapi"]),
      S("Website Maintenance", IC.headset, "Updates, backups and monitoring so your site never falls behind.", ["Backups", "Updates", "Uptime"]),
    ],
  },
  {
    label: "IT Services", icon: IC.server, tag: "IT SERVICES",
    heading: "Reliable infrastructure that scales with you",
    intro: "Cloud, software and support that keep your business running smoothly.",
    feature: {
      icon: IC.cloud, title: "Cloud Solutions",
      blurb: "Migrate, optimise and manage AWS, Azure or Google Cloud without disruption.",
      gets: ["Migration plan", "Cost optimisation", "Ongoing monitoring"],
    },
    services: [
      S("Cloud Solutions", IC.cloud, "Migration and management across AWS, Azure and GCP.", ["AWS", "Azure", "GCP"]),
      S("IT Infrastructure", IC.server, "Design and setup of networks, servers and storage.", ["Networking", "Servers", "Storage"]),
      S("DevOps & CI/CD", IC.flow, "Automated build, test and deploy pipelines.", ["Docker", "Kubernetes", "CI/CD"]),
      S("Custom Software", IC.code, "Portals and platforms built around your workflows.", ["Web Apps", "APIs", "Portals"]),
      S("IT Consulting", IC.target, "Roadmaps, vendor selection and architecture reviews.", ["Strategy", "Architecture", "Audits"]),
      S("Managed IT Support", IC.headset, "Responsive helpdesk and proactive monitoring.", ["Helpdesk", "Monitoring", "SLA"]),
    ],
  },
  {
    label: "Cybersecurity", icon: IC.shield, tag: "CYBERSECURITY SERVICES",
    heading: "Protect your data, users and reputation",
    intro: "Find the gaps, close them, and stay ready for whatever comes next.",
    feature: {
      icon: IC.target, title: "Penetration Testing",
      blurb: "Find and fix weaknesses before attackers do — with clear remediation.",
      gets: ["Scoped test plan", "Detailed findings report", "Retest after fixes"],
    },
    services: [
      S("Security Audits", IC.eye, "Full review of systems, policies and access.", ["Risk", "Policies", "Access"]),
      S("Penetration Testing", IC.target, "Ethical attacks on apps, APIs and networks.", ["Web", "API", "Network"]),
      S("Network Security", IC.globe, "Firewalls, segmentation and 24/7 monitoring.", ["Firewalls", "SIEM", "VPN"]),
      S("Data Protection", IC.lock, "Encryption, backups and access controls.", ["Encryption", "Backups", "IAM"]),
      S("Compliance", IC.shieldOk, "Readiness for GDPR, ISO 27001 and DPDP Act.", ["GDPR", "ISO 27001", "DPDP"]),
      S("Incident Response", IC.alert, "Rapid containment, investigation and recovery.", ["Forensics", "Recovery", "Playbooks"]),
    ],
  },
];

const EASE = " cubic-bezier(.16,1,.3,1) ";
const makeWords = (text, animName, start, step) =>
  text.split(" ").map((w, i) => ({
    w,
    anim: `${animName} .7s${EASE}${start + i * step}ms both`,
  }));

/* ============================================================
   MOBILE DATA
   ============================================================ */
const MOBILE_SERVICES = [
  { name: "AI Intelligence", icon: Brain, subItems: [
    { name: "AI/ML", href: "/services/ai-intelligence/ai-ml", icon: Brain },
    { name: "Data Analytics", href: "/services/ai-intelligence/data-analytics", icon: BarChart3 },
    { name: "Data Science", href: "/services/ai-intelligence/data-science", icon: Database },
    { name: "Automation", href: "/services/ai-intelligence/automation", icon: Zap },
    { name: "BPA", href: "/services/ai-intelligence/bpa", icon: Workflow },
    { name: "AI Chatbots", href: "/services/ai-intelligence/chatbots", icon: MessageSquare },
  ]},
  { name: "Digital Growth", icon: Megaphone, subItems: [
    { name: "Digital Marketing & Branding", href: "/services/digital-marketing", icon: Megaphone },
    { name: "SEO", href: "/services/digital/seo", icon: Search },
    { name: "Local SEO", href: "/services/digital/local-seo", icon: MapPin },
    { name: "PPC Advertising", href: "/services/digital/ppc", icon: Target },
    { name: "Social Media Marketing", href: "/services/digital/social-media", icon: Share2 },
    { name: "Content Marketing", href: "/services/digital/content-marketing", icon: FileText },
    { name: "Email Marketing", href: "/services/digital/email-marketing", icon: Mail },
    { name: "Performance Marketing", href: "/services/digital/performance-marketing", icon: TrendingUp },
    { name: "Lead Generation", href: "/services/digital/lead-generation", icon: Users },
  ]},
  { name: "Search Intelligence", icon: Search, subItems: [
    { name: "SEO", href: "/services/search-intelligence/seo", icon: Search },
    { name: "AEO", href: "/services/search-intelligence/aeo", icon: MessageSquare },
    { name: "AI Search Optimization", href: "/services/search-intelligence/ai-search", icon: Sparkles },
    { name: "GMB", href: "/services/search-intelligence/gmb", icon: Building2 },
    { name: "Reputation Management", href: "/services/search-intelligence/reputation", icon: Award },
  ]},
  { name: "Web & E-Commerce", icon: Monitor, subItems: [
    { name: "Web Development", href: "/services/digital/web-development", icon: Code },
    { name: "Responsive Website Design", href: "/services/web/responsive-design", icon: Monitor },
    { name: "Landing Pages", href: "/services/web/landing-pages", icon: Layout },
    { name: "E-Commerce Website Development", href: "/services/digital/e-commerce", icon: ShoppingCart },
    { name: "Custom Web Applications", href: "/services/web/custom-apps", icon: Code },
    { name: "UI/UX Design", href: "/services/it/design", icon: PenTool },
    { name: "Metaverse", href: "/services/digital/metaverse", icon: Globe2 },
  ]},
  { name: "IT Services", icon: Server, subItems: [
    { name: "IT Consulting", href: "/services/it/consulting", icon: UserCog },
    { name: "Application Development", href: "/services/it/application-development", icon: RefreshCw },
    { name: "Enterprise App Integration", href: "/services/it/eai", icon: GitBranch },
    { name: "IT Staff Augmentation", href: "/services/it/staff-augmentation", icon: Users },
    { name: "Cloud Migration", href: "/services/it/cloud-migration", icon: Cloud },
    { name: "System Integration", href: "/services/it/system-integration", icon: GitBranch },
  ]},
  { name: "Cybersecurity", icon: Shield, subItems: [
    { name: "Infrastructure Management", href: "/services/cybersecurity/infrastructure", icon: Server },
    { name: "Cybersecurity", href: "/services/cybersecurity/security", icon: Lock },
    { name: "NOC Services", href: "/services/cybersecurity/noc", icon: Radio },
    { name: "Business Continuity", href: "/services/cybersecurity/business-continuity", icon: Shield },
  ]},
];

/* ============================================================
   STYLES
   ============================================================ */
const MegaMenuStyles = () => (
  <style>{`
    .hero-grid {
      background-image:
        linear-gradient(rgba(125,211,252,.06) 1px,transparent 1px),
        linear-gradient(90deg,rgba(125,211,252,.06) 1px,transparent 1px);
      background-size: 56px 56px;
    }
    .mm-topline {
      background: linear-gradient(90deg,transparent,#38BDF8,#0EA5E9,#38BDF8,transparent);
      background-size: 200% 100%;
      animation: mmShine 3.2s linear infinite;
    }
    .mm-rail-item {
      position: relative; z-index: 1;
      display: flex; align-items: center; gap: 12px;
      width: 100%; height: 56px; padding: 0 14px;
      border: 0; background: transparent; border-radius: 14px; cursor: pointer;
      font: 500 15px/1.2 'Plus Jakarta Sans', sans-serif;
      color: #4A5F74;
      transition: color .25s, font-weight .35s, letter-spacing .35s;
    }
    .mm-rail-item:hover { color: #0B2545; letter-spacing: .01em; }
    .mm-rail-item .mm-rail-ico {
      display: flex; align-items: center; justify-content: center;
      width: 34px; height: 34px; border-radius: 10px;
      color: #64809A;
      transition: background .3s, color .3s, transform .4s cubic-bezier(.34,1.56,.64,1);
    }
    .mm-rail-item.is-active { color: #0B2545; font-weight: 750; }
    .mm-rail-item.is-active .mm-rail-ico { background: #0EA5E9; color: #FFFFFF; transform: rotate(-6deg); }
    .mm-rail-item:hover .mm-rail-ico { animation: mmWiggle .55s ease; }
    .mm-count {
      font: 600 11.5px/1 'JetBrains Mono', monospace;
      color: #64809A; padding: 5px 8px; border-radius: 999px; background: #E8F1F7;
      transition: background .3s, color .3s;
    }
    .mm-rail-item.is-active .mm-count { background: #E0F2FE; color: #0369A1; }

    .mm-card {
      position: relative; isolation: isolate;
      display: flex; align-items: flex-start; gap: 12px;
      padding: 14px; border-radius: 15px;
      border: 1px solid #E3EEF5; background: #FFFFFF;
      text-decoration: none; color: #0B2545;
      transform: perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
      transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .3s, box-shadow .3s;
    }
    .mm-card:hover, .mm-card:focus-visible {
      transform: perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(-5px);
      border-color: transparent;
      box-shadow: 0 22px 36px -20px rgba(3,105,161,.6);
      color: #0B2545; outline: none;
    }
    .mm-card::before {
      content: '';
      position: absolute; inset: -1px; border-radius: 16px; padding: 1.5px;
      background: conic-gradient(from var(--ang), transparent 0 55%, #7DD3FC 72%, #0EA5E9 84%, transparent 100%);
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor; mask-composite: exclude;
      opacity: 0; transition: opacity .35s;
      animation: mmSpin 2.6s linear infinite;
      pointer-events: none;
    }
    .mm-card:hover::before, .mm-card:focus-visible::before { opacity: 1; }
    .mm-card::after {
      content: '';
      position: absolute; inset: 0; border-radius: 15px;
      background: radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(56,189,248,.16), transparent 70%);
      opacity: 0; transition: opacity .35s; z-index: -1; pointer-events: none;
    }
    .mm-card:hover::after { opacity: 1; }
    .mm-card .mm-ico {
      position: relative; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      width: 40px; height: 40px; border-radius: 12px;
      background: #F0F9FF; color: #0284C7;
      transition: transform .45s cubic-bezier(.34,1.56,.64,1), background .3s, color .3s;
    }
    .mm-card .mm-ico::after {
      content: ''; position: absolute; inset: 0; border-radius: 12px;
      border: 2px solid #38BDF8; opacity: 0;
    }
    .mm-card:hover .mm-ico, .mm-card:focus-visible .mm-ico {
      transform: rotate(-10deg) scale(1.08);
      background: #0EA5E9; color: #FFFFFF;
    }
    .mm-card:hover .mm-ico::after { animation: mmRing .9s cubic-bezier(.16,1,.3,1); }

    .mm-title {
      font-size: 14.5px; font-weight: 700; line-height: 1.3; letter-spacing: -.005em;
      transition: font-weight .4s cubic-bezier(.2,.8,.2,1), letter-spacing .4s cubic-bezier(.2,.8,.2,1), color .3s;
    }
    .mm-card:hover .mm-title, .mm-card:focus-visible .mm-title {
      letter-spacing: .012em; color: #0369A1;
    }
    .mm-cap {
      font-size: 12.5px; line-height: 1.45; color: #52677C;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
      overflow: hidden; transition: color .3s;
    }
    .mm-card:hover .mm-cap { color: #33475B; }

    .mm-tag {
      display: inline-block; padding: 3px 7px; border-radius: 6px;
      background: #F1F6FA; color: #3D5A73;
      font: 500 10.5px/1.2 'JetBrains Mono', monospace;
      transition: background .3s, color .3s, transform .35s cubic-bezier(.34,1.56,.64,1);
    }
    .mm-card:hover .mm-tag { background: #E0F2FE; color: #0369A1; transform: translateY(-2px); }

    .mm-idx {
      margin-left: auto;
      font: 600 10.5px/1 'JetBrains Mono', monospace;
      color: #9AB0C3;
      transition: color .3s, transform .4s cubic-bezier(.34,1.56,.64,1);
    }
    .mm-card:hover .mm-idx { color: #0369A1; transform: scale(1.2); }

    .mm-arrow {
      flex-shrink: 0; margin-top: 10px; color: #0284C7;
      opacity: 0; transform: translateX(-6px);
      transition: opacity .3s, transform .3s cubic-bezier(.2,.8,.2,1);
    }
    .mm-card:hover .mm-arrow, .mm-card:focus-visible .mm-arrow { opacity: 1; transform: none; }

    .mm-underline {
      display: block; height: 3px; width: 60px; border-radius: 3px;
      background: linear-gradient(90deg,#0EA5E9,#7DD3FC);
      transform-origin: left center;
    }
    .mm-float {
      position: absolute; bottom: -8px; width: 4px; height: 4px;
      border-radius: 50%; background: #7DD3FC; opacity: 0;
      animation: mmFloat linear infinite; pointer-events: none;
    }
    .mm-scan {
      position: absolute; left: 0; right: 0; height: 90px;
      background: linear-gradient(180deg,transparent,rgba(56,189,248,.09),transparent);
      animation: mmScan 5.5s ease-in-out infinite; pointer-events: none;
    }
    .mm-live { width: 7px; height: 7px; border-radius: 50%; background: #38BDF8; animation: mmLive 1.6s ease-in-out infinite; }

    .mm-word { display: inline-block; margin-right: .26em; }
    .mm-type {
      display: inline-block; overflow: hidden; white-space: nowrap; vertical-align: bottom;
      border-right: 2px solid #0EA5E9; padding-right: 2px;
    }
    .mm-shimmer {
      background: linear-gradient(100deg,#F1F7FC 35%,#7DD3FC 50%,#F1F7FC 65%);
      background-size: 250% 100%;
      -webkit-background-clip: text; background-clip: text; color: transparent;
      animation: mmTextShine 4.5s ease-in-out infinite;
    }

    .mm-search {
      width: 100%; box-sizing: border-box; height: 42px;
      padding: 0 14px 0 40px; border-radius: 11px;
      border: 1px solid #D6E4EE; background: #FFFFFF;
      font: 500 13.5px/1 'Plus Jakarta Sans', sans-serif; color: #0B2545;
      transition: border-color .25s, box-shadow .25s;
    }
    .mm-search:focus { outline: none; border-color: #0EA5E9; box-shadow: 0 0 0 4px rgba(14,165,233,.15); }
    .mm-search::placeholder { color: #6B8197; }

    .mm-cta {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      height: 46px; padding: 0 18px; border-radius: 12px;
      background: #0EA5E9; color: #04203A;
      font: 700 14px/1 'Plus Jakarta Sans', sans-serif;
      text-decoration: none;
      transition: transform .25s, background .25s, box-shadow .25s;
    }
    .mm-cta:hover {
      background: #38BDF8; color: #04203A;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px -10px rgba(56,189,248,.7);
    }
    .mm-cta svg { transition: transform .3s; }
    .mm-cta:hover svg { transform: translateX(4px); }

    .mm-all {
      display: inline-flex; align-items: center; gap: 6px;
      font: 700 13.5px/1 'Plus Jakarta Sans', sans-serif;
      color: #0369A1; text-decoration: none;
    }
    .mm-all svg { transition: transform .3s; }
    .mm-all:hover svg { transform: translateX(4px); }

    .mm-orbit { animation: mmOrbit 18s linear infinite; }
    .mm-orbit-rev { animation: mmOrbit 26s linear infinite reverse; }
    .mm-pulse { animation: mmPulse 2.4s ease-in-out infinite; }

    @keyframes mmShine { from { background-position: 200% 0; } to { background-position: -200% 0; } }
    @keyframes mmTextShine { 0%,100% { background-position: 100% 0; } 50% { background-position: 0 0; } }
    @keyframes mmCardA { from { opacity: 0; translate: 0 22px; scale: .94; filter: blur(4px); } to { opacity: 1; translate: 0 0; scale: 1; filter: none; } }
    @keyframes mmCardB { from { opacity: 0; translate: 0 22px; scale: .94; filter: blur(4px); } to { opacity: 1; translate: 0 0; scale: 1; filter: none; } }
    @keyframes mmRiseA { from { opacity: 0; transform: translateY(8px); filter: blur(3px); } to { opacity: 1; transform: none; filter: none; } }
    @keyframes mmRiseB { from { opacity: 0; transform: translateY(8px); filter: blur(3px); } to { opacity: 1; transform: none; filter: none; } }
    @keyframes mmPopA { from { opacity: 0; scale: .5; } to { opacity: 1; scale: 1; } }
    @keyframes mmPopB { from { opacity: 0; scale: .5; } to { opacity: 1; scale: 1; } }
    @property --ang { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
    @keyframes mmSpin { to { --ang: 360deg; } }
    @keyframes mmDraw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
    @keyframes mmRing { 0% { opacity: .9; transform: scale(1); } 100% { opacity: 0; transform: scale(1.55); } }
    @keyframes mmLineA { from { scale: 0 1; } to { scale: 1 1; } }
    @keyframes mmLineB { from { scale: 0 1; } to { scale: 1 1; } }
    @keyframes mmWiggle { 0%,100% { rotate: 0deg; } 25% { rotate: -12deg; } 60% { rotate: 9deg; } }
    @keyframes mmFloat { 0% { opacity: 0; transform: translateY(0); } 15% { opacity: .85; } 100% { opacity: 0; transform: translateY(-420px); } }
    @keyframes mmScan { 0% { top: -90px; } 100% { top: 100%; } }
    @keyframes mmLive { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .35; transform: scale(.6); } }
    @keyframes mmWordA { from { opacity: 0; transform: translateY(70%) rotate(4deg); filter: blur(6px); font-weight: 300; } to { opacity: 1; transform: none; filter: none; font-weight: 800; } }
    @keyframes mmWordB { from { opacity: 0; transform: translateY(70%) rotate(4deg); filter: blur(6px); font-weight: 300; } to { opacity: 1; transform: none; filter: none; font-weight: 800; } }
    @keyframes mmTypeA { from { width: 0; } }
    @keyframes mmTypeB { from { width: 0; } }
    @keyframes mmCaret { 50% { border-color: transparent; } }
    @keyframes mmSpotA { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: none; } }
    @keyframes mmSpotB { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: none; } }
    @keyframes mmOrbit { to { transform: rotate(360deg); } }
    @keyframes mmPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(56,189,248,.45); } 50% { box-shadow: 0 0 0 14px rgba(56,189,248,0); } }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
      }
    }
  `}</style>
);

/* ============================================================
   MAIN NAVBAR
   ============================================================ */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState(null);

  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [serviceQuery, setServiceQuery] = useState("");
  const [gen, setGen] = useState(0);

  const dropdownTimeoutRef = useRef(null);
  const navContainerRef = useRef(null);
  const mobileDrawerRef = useRef(null); // New ref for mobile drawer

  const sfx = gen % 2 === 0 ? "A" : "B";

  const list = useMemo(() => {
    const q = (serviceQuery || "").trim().toLowerCase();
    if (!q) {
      return CATS[activeServiceTab].services.map((sv) => ({
        ...sv,
        cat: CATS[activeServiceTab].label,
        showCat: false,
      }));
    }
    const results = [];
    CATS.forEach((c) => {
      c.services.forEach((sv) => {
        const hay = `${sv.t} ${sv.c} ${sv.tags.join(" ")} ${c.label}`.toLowerCase();
        if (hay.includes(q)) results.push({ ...sv, cat: c.label, showCat: true });
      });
    });
    return results.slice(0, 6);
  }, [activeServiceTab, serviceQuery]);

  const cat = CATS[activeServiceTab];
  const q = (serviceQuery || "").trim();
  const noResults = q.length > 0 && list.length === 0;

  const eyebrow = q ? "SEARCH RESULTS" : cat.tag;
  const heading = q
    ? `${list.length} match${list.length === 1 ? "" : "es"} for "${q}"`
    : cat.heading;

  const headWords = makeWords(heading, `mmWord${sfx}`, 120, 60);
  const spotWords = makeWords(cat.feature.title, `mmWord${sfx}`, 220, 80);

  const pickCategory = useCallback(
    (i) => {
      if (i !== activeServiceTab || serviceQuery) {
        setActiveServiceTab(i);
        setServiceQuery("");
        setGen((g) => g + 1);
      }
    },
    [activeServiceTab, serviceQuery]
  );

  const handleTilt = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--rx", `${((0.5 - y) * 7).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 9).toFixed(2)}deg`);
  };
  const handleUntilt = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Our Services", href: "/services", hasDropdown: true, hasMegaMenu: true, icon: Layers },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if click is outside both desktop nav and mobile drawer
      const clickedOutsideDesktop = navContainerRef.current && !navContainerRef.current.contains(e.target);
      const clickedOutsideMobile = mobileDrawerRef.current && !mobileDrawerRef.current.contains(e.target);

      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setActiveDropdown(null);
        setMobileOpenDropdown(null);
        setMobileOpenSubDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const handleDropdownEnter = (name) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.15 } },
  };
  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      <MegaMenuStyles />
      <header
        ref={navContainerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-100 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-1.5 sm:py-2" : "bg-white py-2.5 sm:py-4"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center flex-shrink-0"
            >
              <img src="/coderBoxlogo3.png" alt="CoderBox Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
            </motion.a>

            <ul className="hidden lg:flex items-center space-x-0.5">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative"
                  onMouseEnter={() => (item.hasDropdown || item.hasMegaMenu) && handleDropdownEnter(item.name)}
                  onMouseLeave={() => (item.hasDropdown || item.hasMegaMenu) && handleDropdownLeave()}
                >
                  <a
                    href={item.href}
                    className={`flex items-center px-2.5 xl:px-3.5 py-1.5 rounded-lg text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                      activeDropdown === item.name
                        ? "bg-blue-50 text-[#01ADF0]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#01ADF0]"
                    }`}
                    onClick={(e) => {
                      if (item.hasDropdown || item.hasMegaMenu) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}
                  >
                    {item.icon && <item.icon className="h-3.5 w-3.5 mr-1.5 xl:mr-2" />}
                    {item.name}
                    {(item.hasDropdown || item.hasMegaMenu) && (
                      <ChevronDown
                        className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
              <motion.a
                href="/contact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-[#01ADF0] hover:bg-[#0198d4] text-white px-4 xl:px-5 py-1.5 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-1.5 xl:gap-2 text-sm xl:text-base"
              >
                <Zap className="h-3.5 w-3.5" />
                Start a Project
                <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
                </motion.span>
              </motion.a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-[#01ADF0] transition-colors p-2 ml-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* ============ DESKTOP MEGA MENU ============ */}
        <AnimatePresence>
          {activeDropdown === "Our Services" && (
            <>
              <motion.div
                key="mm-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block fixed inset-0 top-[80px] bg-black/30 backdrop-blur-sm z-40"
                onClick={() => setActiveDropdown(null)}
              />

              <motion.div
                key="mm-panel"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseEnter={() => handleDropdownEnter("Our Services")}
                onMouseLeave={() => handleDropdownLeave()}
                className={`hidden lg:block fixed left-1/2 -translate-x-1/2 z-50 w-[min(1380px,calc(100vw-32px))] bg-white rounded-3xl overflow-hidden ${
                  scrolled ? "top-[68px]" : "top-[84px]"
                }`}
                style={{ boxShadow: "0 40px 80px -30px rgba(2,12,27,.6), 0 0 0 1px rgba(14,165,233,.12)" }}
              >
                <div className="mm-topline h-[3px]" />

                <div className="grid grid-cols-[280px_minmax(0,1fr)_320px]">
                  {/* ============ LEFT RAIL ============ */}
                  <div className="px-5 py-5 bg-[#F5F9FC] border-r border-[#E3EEF5] flex flex-col gap-3">
                    <span
                      className="px-2 text-[#4A6A86]"
                      style={{ font: "600 11.5px/1 'JetBrains Mono', monospace", letterSpacing: ".14em" }}
                    >
                      // CATEGORIES
                    </span>

                    <div className="relative">
                      <div
                        className="absolute left-0 right-0 top-0 h-[56px] rounded-[14px] bg-white transition-transform duration-[450ms]"
                        style={{
                          boxShadow: "0 8px 20px -10px rgba(11,37,69,.25), 0 0 0 1px #DCEAF3",
                          transform: `translateY(${activeServiceTab * 56}px)`,
                          transitionTimingFunction: "cubic-bezier(.34,1.3,.64,1)",
                        }}
                      />
                      <div
                        className="absolute left-[-20px] top-[16px] w-1 h-6 rounded-r-[4px] bg-[#0EA5E9] transition-transform duration-[450ms]"
                        style={{
                          transform: `translateY(${activeServiceTab * 56}px)`,
                          transitionTimingFunction: "cubic-bezier(.34,1.3,.64,1)",
                        }}
                      />

                      {CATS.map((c, i) => {
                        const isActive = i === activeServiceTab;
                        return (
                          <button
                            key={c.label}
                            type="button"
                            className={`mm-rail-item ${isActive ? "is-active" : ""}`}
                            aria-pressed={isActive}
                            onClick={() => pickCategory(i)}
                            onMouseEnter={() => pickCategory(i)}
                            onFocus={() => pickCategory(i)}
                          >
                            <span className="mm-rail-ico">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d={c.icon} />
                              </svg>
                            </span>
                            <span className="grow text-left">{c.label}</span>
                            <span className="mm-count">{String(c.services.length).padStart(2, "0")}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-auto p-3.5 rounded-2xl border border-dashed border-[#BFD6E6] flex flex-col gap-1.5">
                      <span className="text-[13.5px] font-bold text-[#0B2545]">Not sure where to start?</span>
                      <span className="text-[12.5px] leading-[1.45] text-[#4A5F74]">
                        Tell us your goal and we'll map the right services.
                      </span>
                      <a href="/contact" className="mm-all mt-1 text-[12.5px]">
                        Talk to an expert
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14 M13 6l6 6-6 6" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* ============ MIDDLE ============ */}
                  <div className="px-7 py-5 flex flex-col gap-4">
                    <div className="flex items-end justify-between gap-5">
                      <div className="flex flex-col gap-2 min-w-0">
                        <span
                          className="text-[#0369A1]"
                          style={{ font: "600 11.5px/1.2 'JetBrains Mono', monospace", letterSpacing: ".08em" }}
                        >
                          <span>&gt;_ </span>
                          <span
                            className="mm-type"
                            style={{
                              width: `${eyebrow.length + 0.6}ch`,
                              animation: `mmType${sfx} .9s steps(${eyebrow.length}) both, mmCaret .8s step-end infinite`,
                            }}
                          >
                            {eyebrow}
                          </span>
                        </span>

                        <span
                          className="text-[24px] leading-[1.2] font-extrabold text-[#0B2545] overflow-hidden pb-[2px]"
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          {headWords.map((w, i) => (
                            <span key={i} className="mm-word" style={{ animation: w.anim }}>
                              {w.w}
                            </span>
                          ))}
                        </span>

                        <span
                          className="mm-underline"
                          style={{
                            animation: `mmLine${sfx} .8s${EASE}${200 + heading.split(" ").length * 60}ms both`,
                          }}
                        />

                        <span
                          className="text-[13.5px] leading-[1.5] text-[#52677C]"
                          style={{ animation: `mmRise${sfx} .6s${EASE}450ms both` }}
                        >
                          {q ? "Searching across every category, caption and tool." : cat.intro}
                        </span>
                      </div>

                      <div className="relative w-[260px] shrink-0">
                        <svg
                          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B8197" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-[13px]"
                        >
                          <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z M21 21l-5-5" />
                        </svg>
                        <label htmlFor="mm-q" className="sr-only">Search services</label>
                        <input
                          id="mm-q"
                          className="mm-search"
                          type="search"
                          placeholder="Search 36 services…"
                          value={serviceQuery}
                          onChange={(e) => setServiceQuery(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {list.map((sv, i) => {
                        const base = 140 + i * 50;
                        const idx = `${i < 9 ? "0" : ""}${i + 1}`;
                        return (
                          <a
                            key={`${sv.t}-${i}`}
                            className="mm-card"
                            href="/services"
                            style={{ animation: `mmCard${sfx} .6s${EASE}${base}ms both` }}
                            onMouseMove={handleTilt}
                            onMouseLeave={handleUntilt}
                          >
                            <span className="mm-ico">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                <path d={sv.icon} pathLength="1" style={{ animation: `mmDraw 1.1s cubic-bezier(.65,0,.35,1) ${base + 100}ms both` }} />
                              </svg>
                            </span>

                            <span className="grow flex flex-col gap-1.5 min-w-0">
                              <span className="flex items-center gap-2">
                                <span className="mm-title">{sv.t}</span>
                                <span className="mm-idx">{idx}</span>
                              </span>

                              <span className="mm-cap">{sv.c}</span>

                              <span className="flex flex-wrap gap-1 mt-0.5">
                                {sv.tags.map((t, j) => (
                                  <span
                                    key={t}
                                    className="mm-tag"
                                    style={{ animation: `mmPop${sfx} .45s cubic-bezier(.34,1.56,.64,1) ${base + 220 + j * 60}ms both` }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </span>
                            </span>
                          </a>
                        );
                      })}
                    </div>

                    {noResults && (
                      <div className="p-8 rounded-2xl border border-dashed border-[#BFD6E6] text-center flex flex-col gap-1.5 items-center">
                        <span className="text-sm font-bold text-[#0B2545]">No service matches that yet</span>
                        <span className="text-xs text-[#4A5F74]">Try another word — we probably do it.</span>
                      </div>
                    )}

                    <div className="mt-auto pt-3 border-t border-[#EDF3F8] flex items-center justify-between">
                      <span className="text-[#52677C]" style={{ font: "500 12px/1 'JetBrains Mono', monospace" }}>
                        6 categories · 36 services
                      </span>
                      <a href="/services" className="mm-all">
                        View all services
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14 M13 6l6 6-6 6" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* ============ RIGHT FEATURED ============ */}
                  <div className="p-[14px_14px_14px_0]">
                    <div className="relative h-full box-border rounded-[20px] bg-[#0A1A2F] overflow-hidden p-5 flex flex-col">
                      <div className="hero-grid absolute inset-0 opacity-70" />
                      <div className="mm-scan" />
                      {[
                        { left: "12%", dur: "7s", delay: "0s", size: 4 },
                        { left: "28%", dur: "9s", delay: "1.8s", size: 3 },
                        { left: "47%", dur: "6.5s", delay: "3.1s", size: 4 },
                        { left: "63%", dur: "8.5s", delay: ".9s", size: 5 },
                        { left: "79%", dur: "7.5s", delay: "2.4s", size: 3 },
                      ].map((p, i) => (
                        <span
                          key={i}
                          className="mm-float"
                          style={{ left: p.left, width: p.size, height: p.size, animationDuration: p.dur, animationDelay: p.delay }}
                        />
                      ))}

                      <div className="relative flex flex-col gap-3 grow" style={{ animation: `mmSpot${sfx} .6s${EASE}both` }}>
                        <div className="flex items-center justify-between">
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[rgba(56,189,248,.14)] text-[#7DD3FC]"
                            style={{ font: "600 10.5px/1 'JetBrains Mono', monospace", letterSpacing: ".12em" }}
                          >
                            <span className="mm-live" />
                            FEATURED
                          </span>
                          <span className="text-[#7DD3FC]" style={{ font: "600 10.5px/1 'JetBrains Mono', monospace" }}>
                            // {cat.label.toUpperCase()}
                          </span>
                        </div>

                        <div className="relative w-[110px] h-[110px] self-center">
                          <div className="mm-orbit absolute inset-0 rounded-full border border-dashed border-[rgba(125,211,252,.4)]">
                            <span className="absolute top-[-4px] left-[51px] w-2 h-2 rounded-full bg-[#38BDF8]" />
                          </div>
                          <div className="mm-orbit-rev absolute inset-[18px] rounded-full border border-[rgba(125,211,252,.22)]">
                            <span className="absolute bottom-[-3px] left-[33px] w-1.5 h-1.5 rounded-full bg-[#7DD3FC]" />
                          </div>
                          <div className="mm-pulse absolute left-[33px] top-[33px] w-11 h-11 rounded-2xl bg-[#0EA5E9] text-[#04203A] flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d={cat.feature.icon} />
                            </svg>
                          </div>
                        </div>

                        <span className="mm-shimmer text-[19px] leading-[1.25] font-extrabold overflow-hidden pb-[2px]">
                          {spotWords.map((w, i) => (
                            <span key={i} className="mm-word" style={{ animation: w.anim }}>
                              {w.w}
                            </span>
                          ))}
                        </span>

                        <span className="text-[13px] leading-[1.55] text-[#A9BED1]">{cat.feature.blurb}</span>

                        <div className="flex flex-col gap-2 pt-2.5 border-t border-[rgba(125,211,252,.15)]">
                          <span
                            className="text-[#7DD3FC]"
                            style={{ font: "600 10.5px/1 'JetBrains Mono', monospace", letterSpacing: ".12em" }}
                          >
                            WHAT YOU GET
                          </span>
                          {cat.feature.gets.map((g, i) => (
                            <span
                              key={g}
                              className="flex items-center gap-2 text-[13px] text-[#DCE8F2]"
                              style={{ animation: `mmRise${sfx} .5s${EASE}${400 + i * 100}ms both` }}
                            >
                              <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-md bg-[rgba(56,189,248,.18)] text-[#7DD3FC]">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12l5 5 9-10" />
                                </svg>
                              </span>
                              {g}
                            </span>
                          ))}
                        </div>

                        <a href="/contact" className="mm-cta mt-auto">
                          Book a free consultation
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14 M13 6l6 6-6 6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              ref={mobileDrawerRef} // Added ref here
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <a href="/" className="flex items-center">
                    <img src="/coderBoxlogo2.png" alt="CoderBox Logo" className="h-10 sm:h-12 w-auto object-contain" />
                  </a>
                  <button onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-[#01ADF0] p-2">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasMegaMenu ? (
                        <>
                          <button
                            onClick={() => {
                              setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name);
                              setMobileOpenSubDropdown(null);
                            }}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-left text-sm sm:text-base"
                          >
                            <span>{item.name}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 flex-shrink-0 ${mobileOpenDropdown === item.name ? "rotate-180" : ""}`} />
                          </button>
                          
                          {/* Mobile Accordion using CSS max-height for reliability */}
                          <div
                            className={`ml-4 space-y-1 border-l-2 border-[#01ADF0]/20 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                              mobileOpenDropdown === item.name ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            {MOBILE_SERVICES.map((dropdownItem) => (
                              <div key={dropdownItem.name}>
                                <button
                                  onClick={() =>
                                    setMobileOpenSubDropdown(mobileOpenSubDropdown === dropdownItem.name ? null : dropdownItem.name)
                                  }
                                  className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                                >
                                  <div className="flex items-center space-x-2">
                                    <dropdownItem.icon className="h-4 w-4 text-[#01ADF0] flex-shrink-0" />
                                    <span>{dropdownItem.name}</span>
                                  </div>
                                  <ChevronRight className={`h-3 w-3 transition-transform duration-200 flex-shrink-0 ${mobileOpenSubDropdown === dropdownItem.name ? "rotate-90" : ""}`} />
                                </button>
                                
                                {/* Sub-Accordion using CSS max-height */}
                                <div
                                  className={`ml-6 space-y-1 border-l-2 border-gray-200 pl-3 overflow-hidden transition-all duration-300 ease-in-out ${
                                    mobileOpenSubDropdown === dropdownItem.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                  }`}
                                >
                                  {dropdownItem.subItems.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-[#01ADF0] transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <subItem.icon className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                                      <span>{subItem.name}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-[#01ADF0] hover:bg-[#0198d4] text-white px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap className="h-4 w-4" />
                    Start a Project
                    <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;