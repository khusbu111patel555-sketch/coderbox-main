// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   ArrowLeft, Mail, Phone, MapPin, Globe, Shield, Lock, FileText,
//   Users, Database, AlertCircle, BookOpen, ChevronRight
// } from 'lucide-react';

// /* ============================================================
//    DATA
//    ============================================================ */
// const SECTIONS = [
//   {
//     id: 'collect',
//     num: '01',
//     icon: Database,
//     title: 'Information We Collect',
//     intro: 'When you use our Website or contact us, we may collect information such as:',
//     list: [
//       'Name',
//       'Email address',
//       'Phone number',
//       'Company or organization name',
//       'Project requirements and inquiry details',
//       'Information you voluntarily provide through contact forms or email',
//     ],
//     outro: 'We may also automatically collect limited technical information such as IP address, browser type, device information, pages visited and general Website usage information.',
//   },
//   {
//     id: 'use',
//     num: '02',
//     icon: Users,
//     title: 'How We Use Your Information',
//     intro: 'We may use the information we collect to:',
//     list: [
//       'Respond to your inquiries and requests.',
//       'Discuss and provide our services.',
//       'Understand your project requirements.',
//       'Prepare proposals or estimates.',
//       'Communicate with existing and potential clients.',
//       'Improve our Website, services and user experience.',
//       'Monitor Website performance and security.',
//       'Prevent fraud, abuse or unauthorized activity.',
//       'Comply with applicable legal obligations.',
//     ],
//     outro: 'We do not sell your personal information as a standalone commercial product.',
//   },
//   {
//     id: 'forms',
//     num: '03',
//     icon: FileText,
//     title: 'Contact Forms',
//     paras: [
//       "Information submitted through our Website's contact or inquiry forms may be used to respond to your request, contact you about our services and understand your requirements.",
//       'Please do not submit sensitive or confidential information through a general contact form unless it is necessary and appropriate safeguards have been established.',
//     ],
//   },
//   {
//     id: 'cookies',
//     num: '04',
//     icon: BookOpen,
//     title: 'Cookies',
//     paras: [
//       'Our Website may use cookies and similar technologies to provide essential functionality, improve performance, understand Website usage and remember certain preferences.',
//       'You can control or disable cookies through your browser settings. Some Website features may not function properly if certain cookies are disabled.',
//     ],
//   },
//   {
//     id: 'analytics',
//     num: '05',
//     icon: Globe,
//     title: 'Analytics and Third-Party Services',
//     paras: [
//       'We may use third-party services for Website hosting, analytics, security, communication, forms, marketing and other technical functions.',
//       'These services may collect or process certain technical or usage information according to their own privacy policies.',
//       'Third-party services used on the Website may change over time as we update our technology and business processes.',
//     ],
//   },
//   {
//     id: 'sharing',
//     num: '06',
//     icon: Users,
//     title: 'Sharing of Information',
//     intro: 'We may share information when reasonably necessary with:',
//     list: [
//       'Authorized employees and contractors',
//       'Website hosting and technology providers',
//       'Analytics and security providers',
//       'Communication and support providers',
//       'Professional advisors',
//       'Government or legal authorities where required by law',
//     ],
//     outro: 'We only share information where there is a legitimate business, operational or legal reason to do so.',
//   },
//   {
//     id: 'client',
//     num: '07',
//     icon: FileText,
//     title: 'Client and Project Information',
//     paras: [
//       'If you engage TheCoderBox for a project, we may process information necessary to provide the requested services.',
//       'This may include technical information, business information, website-related information, content, credentials or other materials provided by the client.',
//       'Clients are responsible for ensuring that they have the necessary rights and permissions to provide information or content to us.',
//     ],
//   },
//   {
//     id: 'security',
//     num: '08',
//     icon: Lock,
//     title: 'Data Security',
//     paras: [
//       'We use reasonable technical and organizational measures to protect personal information from unauthorized access, misuse, alteration or disclosure.',
//       'However, no Internet transmission or electronic storage system can be guaranteed to be completely secure.',
//     ],
//   },
//   {
//     id: 'retention',
//     num: '09',
//     icon: Database,
//     title: 'Data Retention',
//     intro: 'We retain information only for as long as reasonably necessary for purposes such as:',
//     list: [
//       'Responding to inquiries',
//       'Providing services',
//       'Maintaining business records',
//       'Resolving disputes',
//       'Meeting legal, accounting or regulatory requirements',
//       'Protecting our legal rights',
//     ],
//     outro: 'Retention periods may vary depending on the type of information and applicable legal requirements.',
//   },
//   {
//     id: 'rights',
//     num: '10',
//     icon: Shield,
//     title: 'Your Privacy Rights',
//     intro: 'Depending on your location and applicable law, you may have rights to:',
//     list: [
//       'Request access to your personal information.',
//       'Request correction of inaccurate information.',
//       'Request deletion where legally permitted.',
//       'Object to or restrict certain processing.',
//       'Withdraw consent where applicable.',
//     ],
//     outro: 'To make a privacy-related request, contact us using the details below. We may need to verify your identity before processing certain requests.',
//   },
//   {
//     id: 'links',
//     num: '11',
//     icon: Globe,
//     title: 'Third-Party Links',
//     paras: [
//       'Our Website may contain links to third-party websites, platforms or services.',
//       'TheCoderBox is not responsible for the privacy practices, security or content of third-party websites. We recommend reviewing their privacy policies before providing them with personal information.',
//     ],
//   },
//   {
//     id: 'international',
//     num: '12',
//     icon: Globe,
//     title: 'International Visitors',
//     paras: [
//       'TheCoderBox may work with clients located in India and other countries. Information may therefore be processed in India or other countries where we or our service providers operate.',
//       'Where required by applicable law, appropriate measures will be taken for international data transfers.',
//     ],
//   },
//   {
//     id: 'children',
//     num: '13',
//     icon: AlertCircle,
//     title: "Children's Privacy",
//     paras: [
//       'Our Website is intended for general audiences and business users. We do not knowingly collect personal information from children where prohibited by applicable law.',
//       'If you believe that a child has provided personal information to us, please contact us so that we can review and take appropriate action.',
//     ],
//   },
//   {
//     id: 'changes',
//     num: '14',
//     icon: FileText,
//     title: 'Changes to This Privacy Policy',
//     paras: [
//       'We may update this Privacy Policy from time to time due to changes in our services, technology, legal requirements or business practices.',
//       'Any updates will be published on this page with a revised "Last Updated" date.',
//     ],
//   },
// ];

// /* ============================================================
//    PAGE
//    ============================================================ */
// const PrivacyPolicy = () => {
//   const [activeId, setActiveId] = useState('collect');
//   const [showToc, setShowToc] = useState(false);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   useEffect(() => {
//     const onScroll = () => {
//       const scroll = window.scrollY + 200;
//       let current = SECTIONS[0].id;
//       for (const s of SECTIONS) {
//         const el = document.getElementById(s.id);
//         if (el && el.offsetTop <= scroll) current = s.id;
//       }
//       setActiveId(current);
//     };
//     window.addEventListener('scroll', onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       const y = el.getBoundingClientRect().top + window.scrollY - 100;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//       setShowToc(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F3F4F1] font-['Manrope'] text-[#0B1526]">

//       {/* ============================================================
//           HERO — icon kept, breadcrumb removed
//          ============================================================ */}
//       <section className="relative overflow-hidden bg-[#08111F] text-white pt-[14rem] sm:pt-[16rem] md:pt-[18rem] pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-10 min-h-[85vh] flex items-center justify-center">
//         {/* Grid overlay */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[.25]"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(143,203,242,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(143,203,242,.12) 1px, transparent 1px)',
//             backgroundSize: '56px 56px',
//             maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
//             WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
//           }}
//         />

//         {/* Glow orbs */}
//         <span className="pointer-events-none absolute -right-[180px] -top-[180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.28),transparent_65%)] blur-3xl" />
//         <span className="pointer-events-none absolute -left-[160px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,198,251,.2),transparent_65%)] blur-3xl" />

//         <div className="relative max-w-[1320px] mx-auto text-center w-full">

//           {/* Icon — top */}
//           <div className="mb-8 sm:mb-10">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.6 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.1, type: 'spring' }}
//               className="relative inline-flex"
//             >
//               <span className="absolute inset-0 rounded-2xl bg-[#0A5E93] blur-xl opacity-60 animate-pulse" />
//               <span className="relative inline-flex w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0A5E93] to-[#0D86CF] items-center justify-center shadow-2xl shadow-[#01ADF0]/30">
//                 <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.2} />
//               </span>
//             </motion.div>
//           </div>

//           {/* Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="font-['Sora'] font-extrabold leading-[1.02] tracking-[-.05em]"
//             style={{ fontSize: 'clamp(42px,7vw,96px)' }}
//           >
//             Privacy{' '}
//             <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">
//               Policy
//             </span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//             className="mt-5 sm:mt-6 max-w-2xl mx-auto text-[15px] sm:text-base md:text-lg text-[#AFC0D4] leading-[1.7]"
//           >
//             Your privacy matters. Learn how TheCoderBox collects, uses and protects your information when you visit our website.
//           </motion.p>

//           {/* Meta pills */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
//           >
//             {[
//               { icon: FileText, label: '14 Sections' },
//               { icon: Shield, label: 'GDPR Friendly' },
//               { icon: Lock, label: 'Data Protected' },
//             ].map((pill) => {
//               const Icon = pill.icon;
//               return (
//                 <span
//                   key={pill.label}
//                   className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[.05] backdrop-blur-sm px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-[.14em] text-[#AFC0D4]"
//                 >
//                   <Icon className="w-3.5 h-3.5 text-[#8FCBF2]" />
//                   {pill.label}
//                 </span>
//               );
//             })}
//           </motion.div>

//           {/* Last updated */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.55 }}
//             className="mt-6 text-[11px] sm:text-[11.5px] uppercase tracking-[.24em] text-[#7F9CC2] font-bold"
//           >
//             Last Updated · Aug 17, 2026
//           </motion.p>
//         </div>
//       </section>

//       {/* ============================================================
//           MAIN LAYOUT
//          ============================================================ */}
//       <section className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
//         <div className="max-w-[1320px] mx-auto">

//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0A5E93] hover:gap-3 transition-all mb-8 sm:mb-10 group"
//           >
//             <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
//             Back to Home
//           </Link>

//           <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr] gap-8 lg:gap-12">

//             {/* SIDEBAR */}
//             <aside className="hidden lg:block">
//               <div className="sticky top-28">
//                 <div className="rounded-3xl border border-[#D9DDD6] bg-white p-5 shadow-[0_8px_32px_rgba(15,40,80,.05)]">
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="w-1 h-5 bg-gradient-to-b from-[#01ADF0] to-[#0A5E93] rounded-full" />
//                     <h3 className="font-['Sora'] text-[13px] font-bold uppercase tracking-[.14em] text-[#0B1526]">
//                       On this page
//                     </h3>
//                   </div>

//                   <nav className="space-y-0.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 [scrollbar-width:thin]">
//                     {SECTIONS.map((s) => {
//                       const isActive = activeId === s.id;
//                       return (
//                         <button
//                           key={s.id}
//                           onClick={() => scrollTo(s.id)}
//                           className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-[13px] font-medium transition-all ${
//                             isActive
//                               ? 'bg-gradient-to-r from-[#01ADF0]/[.12] to-transparent text-[#0A5E93] font-semibold'
//                               : 'text-[#56627A] hover:bg-[#01ADF0]/[.06] hover:text-[#0A5E93]'
//                           }`}
//                         >
//                           <span className={`flex-none font-['Sora'] text-[11px] font-bold tabular-nums transition-colors ${isActive ? 'text-[#01ADF0]' : 'text-[#B9C0C9]'}`}>
//                             {s.num}
//                           </span>
//                           <span className="leading-snug">{s.title}</span>
//                         </button>
//                       );
//                     })}
//                   </nav>
//                 </div>

//                 <div className="mt-4 rounded-3xl border border-[#D9DDD6] bg-gradient-to-br from-[#0A5E93] to-[#0D86CF] p-5 text-white">
//                   <div className="flex items-center gap-2 mb-2">
//                     <Mail className="w-4 h-4 text-[#8FCBF2]" />
//                     <span className="text-[11px] font-bold uppercase tracking-[.16em] text-[#8FCBF2]">
//                       Need help?
//                     </span>
//                   </div>
//                   <p className="m-0 text-[13px] leading-[1.55] text-white/85 mb-3">
//                     Questions about this policy?
//                   </p>
//                   <a
//                     href="mailto:support@thecoderbox.com"
//                     className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white hover:gap-2.5 transition-all"
//                   >
//                     Contact support
//                     <ChevronRight className="w-3.5 h-3.5" />
//                   </a>
//                 </div>
//               </div>
//             </aside>

//             {/* CONTENT */}
//             <main className="min-w-0">

//               {/* Mobile TOC */}
//               <div className="lg:hidden mb-6">
//                 <button
//                   onClick={() => setShowToc(!showToc)}
//                   className="w-full flex items-center justify-between gap-3 rounded-2xl border border-[#D9DDD6] bg-white px-4 py-3.5 text-left"
//                 >
//                   <div className="flex items-center gap-3 min-w-0">
//                     <span className="flex-none grid w-8 h-8 place-items-center rounded-lg bg-[#0A5E93] text-white">
//                       <BookOpen className="w-4 h-4" />
//                     </span>
//                     <div className="min-w-0">
//                       <div className="text-[10.5px] font-bold uppercase tracking-[.14em] text-[#6B7585]">
//                         Table of contents
//                       </div>
//                       <div className="text-[13.5px] font-semibold text-[#0B1526] truncate">
//                         {SECTIONS.find((s) => s.id === activeId)?.title || 'Jump to section'}
//                       </div>
//                     </div>
//                   </div>
//                   <ChevronRight className={`w-4 h-4 text-[#6B7585] transition-transform ${showToc ? 'rotate-90' : ''}`} />
//                 </button>

//                 <AnimatePresence>
//                   {showToc && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="overflow-hidden mt-2 rounded-2xl border border-[#D9DDD6] bg-white"
//                     >
//                       <nav className="p-2">
//                         {SECTIONS.map((s) => (
//                           <button
//                             key={s.id}
//                             onClick={() => scrollTo(s.id)}
//                             className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13.5px] text-[#56627A] hover:bg-[#01ADF0]/[.06] hover:text-[#0A5E93] transition-all"
//                           >
//                             <span className="flex-none font-['Sora'] text-[11px] font-bold text-[#B9C0C9] tabular-nums">
//                               {s.num}
//                             </span>
//                             {s.title}
//                           </button>
//                         ))}
//                       </nav>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Intro card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative overflow-hidden rounded-3xl border border-[#D9DDD6] bg-white p-6 sm:p-8 mb-8 sm:mb-10"
//               >
//                 <span className="pointer-events-none absolute -right-16 -top-16 w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.1),transparent_70%)]" />
//                 <div className="relative flex items-start gap-4">
//                   <span className="flex-none grid w-11 h-11 rounded-2xl bg-gradient-to-br from-[#01ADF0] to-[#0A5E93] place-items-center text-white shadow-lg shadow-[#01ADF0]/25">
//                     <Shield className="w-5 h-5" />
//                   </span>
//                   <div>
//                     <div className="text-[10.5px] font-bold uppercase tracking-[.16em] text-[#01ADF0] mb-2">
//                       Our Commitment
//                     </div>
//                     <p className="m-0 text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557]">
//                       TheCoderBox (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) respects your privacy and is committed to protecting the information you provide when you visit{' '}
//                       <strong className="text-[#0B1526]">thecoderbox.com</strong>.
//                     </p>
//                     <p className="mt-3 text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557]">
//                       This Privacy Policy explains what information we may collect, how we use it, and how we protect it.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Sections */}
//               <div className="space-y-6 sm:space-y-8">
//                 {SECTIONS.map((s, i) => {
//                   const Icon = s.icon;
//                   const isActive = activeId === s.id;
//                   return (
//                     <motion.article
//                       key={s.id}
//                       id={s.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.05 * Math.min(i, 3) }}
//                       viewport={{ once: true, margin: '-80px' }}
//                       className={`relative scroll-mt-28 rounded-3xl border bg-white p-6 sm:p-8 transition-all duration-300 ${
//                         isActive ? 'border-[#01ADF0]/40 shadow-[0_12px_40px_rgba(1,173,240,.1)]' : 'border-[#D9DDD6]'
//                       }`}
//                     >
//                       <span className={`absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-gradient-to-b from-[#01ADF0] to-[#0A5E93] transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />

//                       <div className="flex items-start gap-4 mb-4 sm:mb-5">
//                         <span className="flex-none grid w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#01ADF0]/[.08] place-items-center text-[#0A5E93]">
//                           <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
//                         </span>
//                         <div className="min-w-0 pt-1">
//                           <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#01ADF0] mb-1 tabular-nums">
//                             Section {s.num}
//                           </div>
//                           <h2 className="font-['Sora'] text-[20px] sm:text-[24px] md:text-[26px] font-bold tracking-[-.025em] leading-[1.2] text-[#0B1526]">
//                             {s.title}
//                           </h2>
//                         </div>
//                       </div>

//                       <div className="pl-0 sm:pl-[72px]">
//                         {s.intro && (
//                           <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] mb-4">
//                             {s.intro}
//                           </p>
//                         )}

//                         {s.list && (
//                           <ul className="list-none space-y-2.5 mb-4 pl-0">
//                             {s.list.map((item) => (
//                               <li key={item} className="flex items-start gap-3 text-[15px] sm:text-[15.5px] leading-[1.7] text-[#3A4557]">
//                                 <span className="flex-none mt-[9px] w-[6px] h-[6px] rounded-full bg-gradient-to-br from-[#01ADF0] to-[#0A5E93]" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         )}

//                         {s.paras && s.paras.map((p, k) => (
//                           <p key={k} className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] mb-3 last:mb-0">
//                             {p}
//                           </p>
//                         ))}

//                         {s.outro && (
//                           <div className="mt-4 pl-4 border-l-2 border-[#01ADF0]/30">
//                             <p className="m-0 text-[14.5px] sm:text-[15px] leading-[1.7] text-[#0A5E93] italic">
//                               {s.outro}
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     </motion.article>
//                   );
//                 })}
//               </div>

//               {/* Contact */}
//               <motion.article
//                 id="contact"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="relative overflow-hidden scroll-mt-28 rounded-3xl border border-[#0A5E93]/20 bg-gradient-to-br from-[#0A5E93] via-[#0878b8] to-[#0D86CF] text-white p-6 sm:p-9 mt-8 sm:mt-10"
//               >
//                 <span className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.15),transparent_70%)] blur-2xl" />
//                 <span className="pointer-events-none absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.1),transparent_70%)] blur-2xl" />

//                 <div className="relative">
//                   <div className="flex items-start gap-4 mb-5">
//                     <span className="flex-none grid w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-sm place-items-center">
//                       <Mail className="w-6 h-6 text-white" />
//                     </span>
//                     <div className="pt-1">
//                       <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#8FCBF2] mb-1">
//                         Section 15
//                       </div>
//                       <h2 className="font-['Sora'] text-[22px] sm:text-[26px] md:text-[30px] font-bold tracking-[-.025em] leading-[1.15]">
//                         Contact Us
//                       </h2>
//                     </div>
//                   </div>

//                   <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-white/85 mb-7 max-w-2xl">
//                     If you have questions or concerns about this Privacy Policy or how we handle personal information, please contact us:
//                   </p>

//                   <div className="grid gap-4 sm:grid-cols-2">
//                     {[
//                       { icon: Mail, label: 'Email', value: 'support@thecoderbox.com', href: 'mailto:support@thecoderbox.com' },
//                       { icon: Globe, label: 'Website', value: 'thecoderbox.com', href: 'https://thecoderbox.com' },
//                       { icon: Phone, label: 'Phone', value: '+91 89288 09025 / +91 72087 69025', href: 'tel:+918928809025' },
//                       { icon: MapPin, label: 'Registered Office', value: 'Vinir Tower, Floor 1st, 6, Outer Ring Road, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India.', href: null },
//                     ].map((c) => {
//                       const Icon = c.icon;
//                       const inner = (
//                         <div className="flex items-start gap-3.5 h-full">
//                           <span className="flex-none grid w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm place-items-center">
//                             <Icon className="w-4.5 h-4.5 text-white" />
//                           </span>
//                           <div className="min-w-0">
//                             <div className="text-[10.5px] uppercase tracking-[.16em] font-bold text-[#8FCBF2] mb-1.5">
//                               {c.label}
//                             </div>
//                             <div className="text-[14px] sm:text-[14.5px] leading-[1.55] text-white/95 break-words">
//                               {c.value}
//                             </div>
//                           </div>
//                         </div>
//                       );
//                       const cls = 'block rounded-2xl border border-white/15 bg-white/[.06] p-4 hover:bg-white/[.12] hover:border-white/30 transition-all';
//                       return c.href ? (
//                         <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={cls}>
//                           {inner}
//                         </a>
//                       ) : (
//                         <div key={c.label} className={cls}>{inner}</div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </motion.article>

//               {/* Acknowledgement */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="mt-8 sm:mt-10 rounded-3xl border border-[#01ADF0]/20 bg-gradient-to-br from-[#01ADF0]/[.06] to-transparent p-6 sm:p-8 text-center"
//               >
//                 <p className="m-0 text-[14.5px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] italic max-w-2xl mx-auto">
//                   By using <strong className="text-[#0B1526] not-italic">thecoderbox.com</strong>, you acknowledge that you have read and understood this Privacy Policy.
//                 </p>
//               </motion.div>

//               <div className="mt-10 sm:mt-14 flex justify-center">
//                 <Link
//                   to="/"
//                   className="group inline-flex items-center gap-2.5 rounded-full bg-[#0A5E93] hover:bg-[#0B1526] text-white font-semibold text-[14px] px-7 py-3.5 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0A5E93]/20"
//                 >
//                   <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
//                   Back to Home
//                 </Link>
//               </div>
//             </main>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PrivacyPolicy;






import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Mail, Phone, MapPin, Globe, Shield, Lock, FileText,
  Users, Database, AlertCircle, BookOpen, ChevronRight
} from 'lucide-react';

/* ============================================================
   HERO PARTICLE DATA
   ============================================================ */
const HERO_GLYPHS = ['§', '✓', '#', '✱', '❖', '✧', '⊙', '•', '§', '✓', '#'];
const HERO_TAGS = ['SECURE', 'PRIVATE', 'GDPR', 'SSL', 'ENCRYPTED', 'HTTPS', 'CONFIDENTIAL', 'PROTECTED'];

/* ============================================================
   DATA
   ============================================================ */
const SECTIONS = [
  {
    id: 'collect',
    num: '01',
    icon: Database,
    title: 'Information We Collect',
    intro: 'When you use our Website or contact us, we may collect information such as:',
    list: [
      'Name', 'Email address', 'Phone number',
      'Company or organization name',
      'Project requirements and inquiry details',
      'Information you voluntarily provide through contact forms or email',
    ],
    outro: 'We may also automatically collect limited technical information such as IP address, browser type, device information, pages visited and general Website usage information.',
  },
  {
    id: 'use', num: '02', icon: Users,
    title: 'How We Use Your Information',
    intro: 'We may use the information we collect to:',
    list: [
      'Respond to your inquiries and requests.',
      'Discuss and provide our services.',
      'Understand your project requirements.',
      'Prepare proposals or estimates.',
      'Communicate with existing and potential clients.',
      'Improve our Website, services and user experience.',
      'Monitor Website performance and security.',
      'Prevent fraud, abuse or unauthorized activity.',
      'Comply with applicable legal obligations.',
    ],
    outro: 'We do not sell your personal information as a standalone commercial product.',
  },
  {
    id: 'forms', num: '03', icon: FileText,
    title: 'Contact Forms',
    paras: [
      "Information submitted through our Website's contact or inquiry forms may be used to respond to your request, contact you about our services and understand your requirements.",
      'Please do not submit sensitive or confidential information through a general contact form unless it is necessary and appropriate safeguards have been established.',
    ],
  },
  {
    id: 'cookies', num: '04', icon: BookOpen,
    title: 'Cookies',
    paras: [
      'Our Website may use cookies and similar technologies to provide essential functionality, improve performance, understand Website usage and remember certain preferences.',
      'You can control or disable cookies through your browser settings. Some Website features may not function properly if certain cookies are disabled.',
    ],
  },
  {
    id: 'analytics', num: '05', icon: Globe,
    title: 'Analytics and Third-Party Services',
    paras: [
      'We may use third-party services for Website hosting, analytics, security, communication, forms, marketing and other technical functions.',
      'These services may collect or process certain technical or usage information according to their own privacy policies.',
      'Third-party services used on the Website may change over time as we update our technology and business processes.',
    ],
  },
  {
    id: 'sharing', num: '06', icon: Users,
    title: 'Sharing of Information',
    intro: 'We may share information when reasonably necessary with:',
    list: [
      'Authorized employees and contractors',
      'Website hosting and technology providers',
      'Analytics and security providers',
      'Communication and support providers',
      'Professional advisors',
      'Government or legal authorities where required by law',
    ],
    outro: 'We only share information where there is a legitimate business, operational or legal reason to do so.',
  },
  {
    id: 'client', num: '07', icon: FileText,
    title: 'Client and Project Information',
    paras: [
      'If you engage TheCoderBox for a project, we may process information necessary to provide the requested services.',
      'This may include technical information, business information, website-related information, content, credentials or other materials provided by the client.',
      'Clients are responsible for ensuring that they have the necessary rights and permissions to provide information or content to us.',
    ],
  },
  {
    id: 'security', num: '08', icon: Lock,
    title: 'Data Security',
    paras: [
      'We use reasonable technical and organizational measures to protect personal information from unauthorized access, misuse, alteration or disclosure.',
      'However, no Internet transmission or electronic storage system can be guaranteed to be completely secure.',
    ],
  },
  {
    id: 'retention', num: '09', icon: Database,
    title: 'Data Retention',
    intro: 'We retain information only for as long as reasonably necessary for purposes such as:',
    list: [
      'Responding to inquiries', 'Providing services',
      'Maintaining business records', 'Resolving disputes',
      'Meeting legal, accounting or regulatory requirements',
      'Protecting our legal rights',
    ],
    outro: 'Retention periods may vary depending on the type of information and applicable legal requirements.',
  },
  {
    id: 'rights', num: '10', icon: Shield,
    title: 'Your Privacy Rights',
    intro: 'Depending on your location and applicable law, you may have rights to:',
    list: [
      'Request access to your personal information.',
      'Request correction of inaccurate information.',
      'Request deletion where legally permitted.',
      'Object to or restrict certain processing.',
      'Withdraw consent where applicable.',
    ],
    outro: 'To make a privacy-related request, contact us using the details below. We may need to verify your identity before processing certain requests.',
  },
  {
    id: 'links', num: '11', icon: Globe,
    title: 'Third-Party Links',
    paras: [
      'Our Website may contain links to third-party websites, platforms or services.',
      'TheCoderBox is not responsible for the privacy practices, security or content of third-party websites. We recommend reviewing their privacy policies before providing them with personal information.',
    ],
  },
  {
    id: 'international', num: '12', icon: Globe,
    title: 'International Visitors',
    paras: [
      'TheCoderBox may work with clients located in India and other countries. Information may therefore be processed in India or other countries where we or our service providers operate.',
      'Where required by applicable law, appropriate measures will be taken for international data transfers.',
    ],
  },
  {
    id: 'children', num: '13', icon: AlertCircle,
    title: "Children's Privacy",
    paras: [
      'Our Website is intended for general audiences and business users. We do not knowingly collect personal information from children where prohibited by applicable law.',
      'If you believe that a child has provided personal information to us, please contact us so that we can review and take appropriate action.',
    ],
  },
  {
    id: 'changes', num: '14', icon: FileText,
    title: 'Changes to This Privacy Policy',
    paras: [
      'We may update this Privacy Policy from time to time due to changes in our services, technology, legal requirements or business practices.',
      'Any updates will be published on this page with a revised "Last Updated" date.',
    ],
  },
];

/* ============================================================
   PAGE
   ============================================================ */
const PrivacyPolicy = () => {
  const [activeId, setActiveId] = useState('collect');
  const [showToc, setShowToc] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

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
          HERO — with themed particles (no icon)
         ============================================================ */}
      <section
        className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
        style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
      >
        {/* ============== PARTICLE LAYER ============== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Central glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
          />

          {/* Floating orbs */}
          <motion.div
            className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
              boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
              filter: 'blur(2px)',
            }}
            animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
              boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
              filter: 'blur(2px)',
            }}
            animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
              boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
              filter: 'blur(2px)',
            }}
            animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Rotating wireframe SVG (shield shape) */}
          <motion.svg
            className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
            viewBox="0 0 500 500" fill="none"
            style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
            animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <defs>
              <linearGradient id="ppWireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <motion.polygon
              points="250,40 460,250 250,460 40,250"
              stroke="url(#ppWireGrad)" strokeWidth="1.2" fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '250px 250px' }}
            />
            <motion.polygon
              points="250,80 420,250 250,420 80,250"
              stroke="url(#ppWireGrad)" strokeWidth="0.8" fill="none" opacity="0.6"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '250px 250px' }}
            />
            <line x1="250" y1="40" x2="250" y2="460" stroke="url(#ppWireGrad)" strokeWidth="0.6" opacity="0.5" />
            <line x1="40" y1="250" x2="460" y2="250" stroke="url(#ppWireGrad)" strokeWidth="0.6" opacity="0.5" />
          </motion.svg>

          {/* Floating themed glyphs (§ ✓ # ✱ ❖ ✧ ⊙ •) */}
          {HERO_GLYPHS.map((glyph, i) => {
            const top = 8 + ((i * 41) % 84);
            const left = 4 + ((i * 59) % 90);
            const size = 14 + (i % 4) * 6;
            const dur = 6 + (i % 5) * 1.6;
            const delay = (i % 6) * 0.8;
            return (
              <motion.span
                key={`pg-${i}`}
                className="absolute select-none font-['Space_Grotesk'] font-bold"
                style={{
                  top: `${top}%`, left: `${left}%`,
                  fontSize: `${size}px`,
                  color: 'rgba(143,203,242,0.45)',
                  textShadow: '0 0 14px rgba(1,173,240,0.6)',
                }}
                animate={{
                  y: [0, -22, 0, 18, 0],
                  x: [0, 12, 0, -10, 0],
                  opacity: [0.15, 0.75, 0.15],
                  rotate: [0, 8, 0, -8, 0],
                }}
                transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
              >
                {glyph}
              </motion.span>
            );
          })}

          {/* Sparkle dust */}
          {[...Array(14)].map((_, i) => {
            const size = Math.random() * 3 + 2;
            return (
              <motion.div
                key={`s-${i}`}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`, height: `${size}px`,
                  background: 'rgba(180, 230, 255, 0.9)',
                  boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
                }}
                animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity, delay: Math.random() * 3,
                  ease: 'easeInOut',
                }}
              />
            );
          })}

          {/* Orbiting privacy-themed tag chips */}
          <motion.div
            className="absolute top-1/2 left-1/2 hidden lg:block"
            style={{ width: 720, height: 720, translateX: '-50%', translateY: '-50%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          >
            {HERO_TAGS.map((label, i) => {
              const angle = (i * 360) / HERO_TAGS.length;
              const rad = (angle * Math.PI) / 180;
              const x = 360 + Math.cos(rad) * 360;
              const y = 360 + Math.sin(rad) * 360;
              return (
                <motion.div
                  key={`tag-${label}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#B8E2FF] backdrop-blur-sm"
                  style={{ left: x, top: y }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
                >
                  {label}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ============== CONTENT ============== */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="sec-badge inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.span>

            <motion.h2
              className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              Your Privacy{' '}
              <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                Matters
              </span>
            </motion.h2>

            <motion.p
              className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              Learn how TheCoderBox collects, uses and protects your information when you visit our website.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2"
            >
              {[
                { icon: FileText, label: '14 Sections' },
                { icon: Shield, label: 'GDPR Friendly' },
                { icon: Lock, label: 'Data Protected' },
              ].map((pill) => {
                const Icon = pill.icon;
                return (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.05] backdrop-blur-sm px-3 py-1.5 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[.14em] text-[#AFC0D4]"
                  >
                    <Icon className="w-3 h-3 text-[#8FCBF2]" />
                    {pill.label}
                  </span>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-4 text-[10.5px] sm:text-[11px] uppercase tracking-[.24em] text-[#7F9CC2] font-bold"
            >
              Last Updated · Aug 17, 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          MAIN LAYOUT
         ============================================================ */}
      <section className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-[1320px] mx-auto">

          <Link to="/" className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0A5E93] hover:gap-3 transition-all mb-8 sm:mb-10 group">
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
                    <h3 className="font-['Sora'] text-[13px] font-bold uppercase tracking-[.14em] text-[#0B1526]">On this page</h3>
                  </div>
                  <nav className="space-y-0.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 [scrollbar-width:thin]">
                    {SECTIONS.map((s) => {
                      const isActive = activeId === s.id;
                      return (
                        <button key={s.id} onClick={() => scrollTo(s.id)}
                          className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-[13px] font-medium transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-[#01ADF0]/[.12] to-transparent text-[#0A5E93] font-semibold'
                              : 'text-[#56627A] hover:bg-[#01ADF0]/[.06] hover:text-[#0A5E93]'
                          }`}
                        >
                          <span className={`flex-none font-['Sora'] text-[11px] font-bold tabular-nums ${isActive ? 'text-[#01ADF0]' : 'text-[#B9C0C9]'}`}>{s.num}</span>
                          <span className="leading-snug">{s.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
                <div className="mt-4 rounded-3xl border border-[#D9DDD6] bg-gradient-to-br from-[#0A5E93] to-[#0D86CF] p-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-[#8FCBF2]" />
                    <span className="text-[11px] font-bold uppercase tracking-[.16em] text-[#8FCBF2]">Need help?</span>
                  </div>
                  <p className="m-0 text-[13px] leading-[1.55] text-white/85 mb-3">Questions about this policy?</p>
                  <a href="mailto:support@thecoderbox.com" className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white hover:gap-2.5 transition-all">
                    Contact support
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </aside>

            {/* CONTENT */}
            <main className="min-w-0">
              <div className="lg:hidden mb-6">
                <button onClick={() => setShowToc(!showToc)} className="w-full flex items-center justify-between gap-3 rounded-2xl border border-[#D9DDD6] bg-white px-4 py-3.5 text-left">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex-none grid w-8 h-8 place-items-center rounded-lg bg-[#0A5E93] text-white"><BookOpen className="w-4 h-4" /></span>
                    <div className="min-w-0">
                      <div className="text-[10.5px] font-bold uppercase tracking-[.14em] text-[#6B7585]">Table of contents</div>
                      <div className="text-[13.5px] font-semibold text-[#0B1526] truncate">
                        {SECTIONS.find((s) => s.id === activeId)?.title || 'Jump to section'}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-[#6B7585] transition-transform ${showToc ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {showToc && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-2 rounded-2xl border border-[#D9DDD6] bg-white">
                      <nav className="p-2">
                        {SECTIONS.map((s) => (
                          <button key={s.id} onClick={() => scrollTo(s.id)} className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13.5px] text-[#56627A] hover:bg-[#01ADF0]/[.06] hover:text-[#0A5E93] transition-all">
                            <span className="flex-none font-['Sora'] text-[11px] font-bold text-[#B9C0C9] tabular-nums">{s.num}</span>
                            {s.title}
                          </button>
                        ))}
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Intro */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-3xl border border-[#D9DDD6] bg-white p-6 sm:p-8 mb-8 sm:mb-10">
                <span className="pointer-events-none absolute -right-16 -top-16 w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.1),transparent_70%)]" />
                <div className="relative flex items-start gap-4">
                  <span className="flex-none grid w-11 h-11 rounded-2xl bg-gradient-to-br from-[#01ADF0] to-[#0A5E93] place-items-center text-white shadow-lg shadow-[#01ADF0]/25">
                    <Shield className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-[.16em] text-[#01ADF0] mb-2">Our Commitment</div>
                    <p className="m-0 text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557]">
                      TheCoderBox (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) respects your privacy and is committed to protecting the information you provide when you visit{' '}
                      <strong className="text-[#0B1526]">thecoderbox.com</strong>.
                    </p>
                    <p className="mt-3 text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557]">
                      This Privacy Policy explains what information we may collect, how we use it, and how we protect it.
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
                    <motion.article key={s.id} id={s.id}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
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
                          <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#01ADF0] mb-1 tabular-nums">Section {s.num}</div>
                          <h2 className="font-['Sora'] text-[20px] sm:text-[24px] md:text-[26px] font-bold tracking-[-.025em] leading-[1.2] text-[#0B1526]">{s.title}</h2>
                        </div>
                      </div>
                      <div className="pl-0 sm:pl-[72px]">
                        {s.intro && <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] mb-4">{s.intro}</p>}
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
                          <p key={k} className="text-[15px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] mb-3 last:mb-0">{p}</p>
                        ))}
                        {s.outro && (
                          <div className="mt-4 pl-4 border-l-2 border-[#01ADF0]/30">
                            <p className="m-0 text-[14.5px] sm:text-[15px] leading-[1.7] text-[#0A5E93] italic">{s.outro}</p>
                          </div>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* Contact */}
              <motion.article id="contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                className="relative overflow-hidden scroll-mt-28 rounded-3xl border border-[#0A5E93]/20 bg-gradient-to-br from-[#0A5E93] via-[#0878b8] to-[#0D86CF] text-white p-6 sm:p-9 mt-8 sm:mt-10"
              >
                <span className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.15),transparent_70%)] blur-2xl" />
                <span className="pointer-events-none absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.1),transparent_70%)] blur-2xl" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex-none grid w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-sm place-items-center"><Mail className="w-6 h-6 text-white" /></span>
                    <div className="pt-1">
                      <div className="text-[11px] font-bold uppercase tracking-[.16em] text-[#8FCBF2] mb-1">Section 15</div>
                      <h2 className="font-['Sora'] text-[22px] sm:text-[26px] md:text-[30px] font-bold tracking-[-.025em] leading-[1.15]">Contact Us</h2>
                    </div>
                  </div>
                  <p className="text-[15px] sm:text-[15.5px] leading-[1.75] text-white/85 mb-7 max-w-2xl">
                    If you have questions or concerns about this Privacy Policy or how we handle personal information, please contact us:
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
                          <span className="flex-none grid w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm place-items-center"><Icon className="w-4.5 h-4.5 text-white" /></span>
                          <div className="min-w-0">
                            <div className="text-[10.5px] uppercase tracking-[.16em] font-bold text-[#8FCBF2] mb-1.5">{c.label}</div>
                            <div className="text-[14px] sm:text-[14.5px] leading-[1.55] text-white/95 break-words">{c.value}</div>
                          </div>
                        </div>
                      );
                      const cls = 'block rounded-2xl border border-white/15 bg-white/[.06] p-4 hover:bg-white/[.12] hover:border-white/30 transition-all';
                      return c.href ? (<a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={cls}>{inner}</a>) : (<div key={c.label} className={cls}>{inner}</div>);
                    })}
                  </div>
                </div>
              </motion.article>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                className="mt-8 sm:mt-10 rounded-3xl border border-[#01ADF0]/20 bg-gradient-to-br from-[#01ADF0]/[.06] to-transparent p-6 sm:p-8 text-center"
              >
                <p className="m-0 text-[14.5px] sm:text-[15.5px] leading-[1.75] text-[#3A4557] italic max-w-2xl mx-auto">
                  By using <strong className="text-[#0B1526] not-italic">thecoderbox.com</strong>, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </motion.div>

              <div className="mt-10 sm:mt-14 flex justify-center">
                <Link to="/" className="group inline-flex items-center gap-2.5 rounded-full bg-[#0A5E93] hover:bg-[#0B1526] text-white font-semibold text-[14px] px-7 py-3.5 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0A5E93]/20">
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

export default PrivacyPolicy;