// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

// const FaqSection = () => {
//   const faqs = [
//     {
//       id: 1,
//       question: 'What is Digital Marketing?',
//       answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.'
//     },
//     {
//       id: 2,
//       question: 'What does a Digital Marketing agency do?',
//       answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.'
//     },
//     {
//       id: 3,
//       question: 'What is responsive web development?',
//       answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.'
//     },
//     {
//       id: 4,
//       question: 'Do I need a blog to be successful in digital marketing?',
//       answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.'
//     },
//     {
//       id: 5,
//       question: 'What is local SEO in digital marketing?',
//       answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.'
//     },
//     {
//       id: 6,
//       question: 'What are the benefits of performance marketing?',
//       answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.'
//     },
//     {
//       id: 7,
//       question: 'How does Bright Ads plan a digital marketing strategy for its clients?',
//       answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.'
//     },
//     {
//       id: 8,
//       question: 'Digital Marketing Services in Bangalore?',
//       answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.'
//     },
//     {
//       id: 9,
//       question: 'What is the role of digital marketing in a company?',
//       answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.'
//     },
//     {
//       id: 10,
//       question: 'Is Digital Marketing the future?',
//       answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.'
//     },
//     {
//       id: 11,
//       question: 'Why choose digital marketing agencies in Bangalore?',
//       answer: 'Bangalore, being India\'s IT hub, offers access to top digital marketing talent, innovative technologies, and competitive pricing.'
//     },
//     {
//       id: 12,
//       question: 'How a digital marketing company can enhance your business?',
//       answer: 'A digital marketing company can enhance your business by increasing online visibility, driving targeted traffic, and improving conversion rates.'
//     },
//     {
//       id: 13,
//       question: 'How to choose the right digital marketing company in Bangalore?',
//       answer: 'Evaluate their portfolio, client testimonials, industry experience, team expertise, and reporting methods.'
//     },
//     {
//       id: 14,
//       question: 'What is the difference between white hat and black hat SEO techniques?',
//       answer: 'White hat SEO follows ethical practices. Black hat SEO uses unethical tactics that can get your site penalized.'
//     },
//     {
//       id: 15,
//       question: 'What is Performance Marketing?',
//       answer: 'Performance marketing is a form of digital marketing where advertisers pay only when specific actions are completed.'
//     },
//     {
//       id: 16,
//       question: 'Why choose a performance marketing company in Bangalore?',
//       answer: 'Performance marketing companies in Bangalore offer data-driven strategies and proven results across various industries.'
//     }
//   ];

//   // Split FAQs into left and right columns
//   const leftFaqs = faqs.slice(0, 8);
//   const rightFaqs = faqs.slice(8, 16);

//   const [openIndexLeft, setOpenIndexLeft] = useState(null);
//   const [openIndexRight, setOpenIndexRight] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredFaqs = faqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Filter left and right based on search
//   const filteredLeft = leftFaqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredRight = rightFaqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleFaqLeft = (index) => {
//     setOpenIndexLeft(openIndexLeft === index ? null : index);
//   };

//   const toggleFaqRight = (index) => {
//     setOpenIndexRight(openIndexRight === index ? null : index);
//   };

//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           <motion.span 
//             className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 inline-flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <HelpCircle className="h-3 w-3" />
//             FAQs
//           </motion.span>
          
//           <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 leading-[1.15]">
//             Frequently Asked{' '}
//             <motion.span 
//               className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//               animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               style={{ backgroundSize: '200% 200%' }}
//             >
//               Questions
//             </motion.span>
//           </motion.h2>
          
//           <motion.p className="text-blue-200/60 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
//             Find answers to the most common questions about our services and digital marketing
//           </motion.p>
//         </motion.div>

//         {/* Search Bar */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto mb-6 sm:mb-8"
//         >
//           <div className="relative">
//             <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search your question..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-2.5 pl-9 sm:pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm"
//             />
//           </div>
//         </motion.div>

//         {/* FAQ Grid - 2 Columns */}
//         {searchTerm ? (
//           // Search Results
//           <div className="max-w-5xl mx-auto space-y-3">
//             {filteredFaqs.length > 0 ? (
//               filteredFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden border-white/10 hover:border-white/20"
//                 >
//                   <button
//                     onClick={() => {
//                       // Find which column this FAQ belongs to
//                       const leftIndex = leftFaqs.findIndex(f => f.id === faq.id);
//                       const rightIndex = rightFaqs.findIndex(f => f.id === faq.id);
//                       if (leftIndex !== -1) {
//                         toggleFaqLeft(leftIndex);
//                       } else if (rightIndex !== -1) {
//                         toggleFaqRight(rightIndex);
//                       }
//                     }}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className="text-sm font-medium text-white">
//                       {faq.question}
//                     </span>
//                     <ChevronDown className="h-4 w-4 text-white/50 flex-shrink-0 ml-2" />
//                   </button>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="text-center py-8">
//                 <MessageCircle className="h-10 w-10 text-gray-500 mx-auto mb-2" />
//                 <p className="text-gray-400 text-sm">No questions found matching your search.</p>
//                 <button 
//                   onClick={() => setSearchTerm('')}
//                   className="text-blue-400 hover:text-blue-300 mt-2 text-sm"
//                 >
//                   Clear search
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           // 2 Column Layout
//           <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
//             {/* Left Column */}
//             <div className="space-y-3">
//               {leftFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
//                     openIndexLeft === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqLeft(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
//                       openIndexLeft === index ? 'text-blue-400' : 'text-white'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexLeft === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-2 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexLeft === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-3.5 w-3.5" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexLeft === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-4 pb-3 sm:pb-4">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2"></div>
//                           <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-3">
//               {rightFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
//                     openIndexRight === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqRight(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
//                       openIndexRight === index ? 'text-blue-400' : 'text-white'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexRight === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-2 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexRight === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-3.5 w-3.5" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexRight === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-4 pb-3 sm:pb-4">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2"></div>
//                           <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Bottom CTA */}
//         <motion.div 
//           className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-blue-200/60 text-sm">Still have questions?</p>
          
//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99,102,241,0.3)", y: -3 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-sm"
//           >
//             <MessageCircle className="h-4 w-4" />
//             Contact Us
//             <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//               <ArrowRight className="h-4 w-4" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

// const FaqSection = () => {
//   const faqs = [
//     {
//       id: 1,
//       question: 'What is Digital Marketing?',
//       answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.'
//     },
//     {
//       id: 2,
//       question: 'What does a Digital Marketing agency do?',
//       answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.'
//     },
//     {
//       id: 3,
//       question: 'What is responsive web development?',
//       answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.'
//     },
//     {
//       id: 4,
//       question: 'Do I need a blog to be successful in digital marketing?',
//       answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.'
//     },
//     {
//       id: 5,
//       question: 'What is local SEO in digital marketing?',
//       answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.'
//     },
//     {
//       id: 6,
//       question: 'What are the benefits of performance marketing?',
//       answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.'
//     },
//     {
//       id: 7,
//       question: 'How does Bright Ads plan a digital marketing strategy for its clients?',
//       answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.'
//     },
//     {
//       id: 8,
//       question: 'Digital Marketing Services in Bangalore?',
//       answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.'
//     },
//     {
//       id: 9,
//       question: 'What is the role of digital marketing in a company?',
//       answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.'
//     },
//     {
//       id: 10,
//       question: 'Is Digital Marketing the future?',
//       answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.'
//     },
//     {
//       id: 11,
//       question: 'Why choose digital marketing agencies in Bangalore?',
//       answer: 'Bangalore, being India\'s IT hub, offers access to top digital marketing talent, innovative technologies, and competitive pricing.'
//     },
//     {
//       id: 12,
//       question: 'How a digital marketing company can enhance your business?',
//       answer: 'A digital marketing company can enhance your business by increasing online visibility, driving targeted traffic, and improving conversion rates.'
//     },
//     {
//       id: 13,
//       question: 'How to choose the right digital marketing company in Bangalore?',
//       answer: 'Evaluate their portfolio, client testimonials, industry experience, team expertise, and reporting methods.'
//     },
//     {
//       id: 14,
//       question: 'What is the difference between white hat and black hat SEO techniques?',
//       answer: 'White hat SEO follows ethical practices. Black hat SEO uses unethical tactics that can get your site penalized.'
//     },
//     {
//       id: 15,
//       question: 'What is Performance Marketing?',
//       answer: 'Performance marketing is a form of digital marketing where advertisers pay only when specific actions are completed.'
//     },
//     {
//       id: 16,
//       question: 'Why choose a performance marketing company in Bangalore?',
//       answer: 'Performance marketing companies in Bangalore offer data-driven strategies and proven results across various industries.'
//     }
//   ];

//   // Split FAQs into left and right columns
//   const leftFaqs = faqs.slice(0, 8);
//   const rightFaqs = faqs.slice(8, 16);

//   const [openIndexLeft, setOpenIndexLeft] = useState(null);
//   const [openIndexRight, setOpenIndexRight] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredFaqs = faqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Filter left and right based on search
//   const filteredLeft = leftFaqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredRight = rightFaqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleFaqLeft = (index) => {
//     setOpenIndexLeft(openIndexLeft === index ? null : index);
//   };

//   const toggleFaqRight = (index) => {
//     setOpenIndexRight(openIndexRight === index ? null : index);
//   };

//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           <motion.span 
//             className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 inline-flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <HelpCircle className="h-3 w-3" />
//             FAQs
//           </motion.span>
          
//           <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 leading-[1.15]">
//             Frequently Asked{' '}
//             <motion.span 
//               className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//               animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               style={{ backgroundSize: '200% 200%' }}
//             >
//               Questions
//             </motion.span>
//           </motion.h2>
          
//           <motion.p className="text-blue-200/60 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
//             Find answers to the most common questions about our services and digital marketing
//           </motion.p>
//         </motion.div>

//         {/* Search Bar */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto mb-6 sm:mb-8"
//         >
//           <div className="relative">
//             <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search your question..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-2.5 pl-9 sm:pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm"
//             />
//           </div>
//         </motion.div>

//         {/* FAQ Grid - 2 Columns */}
//         {searchTerm ? (
//           // Search Results
//           <div className="max-w-5xl mx-auto space-y-3">
//             {filteredFaqs.length > 0 ? (
//               filteredFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden border-white/10 hover:border-white/20"
//                 >
//                   <button
//                     onClick={() => {
//                       // Find which column this FAQ belongs to
//                       const leftIndex = leftFaqs.findIndex(f => f.id === faq.id);
//                       const rightIndex = rightFaqs.findIndex(f => f.id === faq.id);
//                       if (leftIndex !== -1) {
//                         toggleFaqLeft(leftIndex);
//                       } else if (rightIndex !== -1) {
//                         toggleFaqRight(rightIndex);
//                       }
//                     }}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className="text-sm font-medium text-white">
//                       {faq.question}
//                     </span>
//                     <ChevronDown className="h-4 w-4 text-white/50 flex-shrink-0 ml-2" />
//                   </button>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="text-center py-8">
//                 <MessageCircle className="h-10 w-10 text-gray-500 mx-auto mb-2" />
//                 <p className="text-gray-400 text-sm">No questions found matching your search.</p>
//                 <button 
//                   onClick={() => setSearchTerm('')}
//                   className="text-blue-400 hover:text-blue-300 mt-2 text-sm"
//                 >
//                   Clear search
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           // 2 Column Layout
//           <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
//             {/* Left Column */}
//             <div className="space-y-3">
//               {leftFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
//                     openIndexLeft === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqLeft(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
//                       openIndexLeft === index ? 'text-blue-400' : 'text-white'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexLeft === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-2 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexLeft === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-3.5 w-3.5" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexLeft === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-4 pb-3 sm:pb-4">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2"></div>
//                           <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-3">
//               {rightFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
//                     openIndexRight === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqRight(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
//                       openIndexRight === index ? 'text-blue-400' : 'text-white'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexRight === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-2 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexRight === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-3.5 w-3.5" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexRight === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-4 pb-3 sm:pb-4">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2"></div>
//                           <p className="text-blue-200/70 text-xs sm:text-sm leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Bottom CTA - #01adf0 color */}
//         <motion.div 
//           className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-blue-200/60 text-sm">Still have questions?</p>
          
//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.04, boxShadow: "0 15px 30px rgba(1,173,240,0.3)", y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-xs sm:text-sm"
//           >
//             <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//             Contact Us
//             <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//               <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

// const FaqSection = () => {
//   const faqs = [
//     { id: 1, question: 'What is Digital Marketing?', answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.' },
//     { id: 2, question: 'What does a Digital Marketing agency do?', answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.' },
//     { id: 3, question: 'What is responsive web development?', answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.' },
//     { id: 4, question: 'Do I need a blog to be successful in digital marketing?', answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.' },
//     { id: 5, question: 'What is local SEO in digital marketing?', answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.' },
//     { id: 6, question: 'What are the benefits of performance marketing?', answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.' },
//     { id: 7, question: 'How does Bright Ads plan a digital marketing strategy for its clients?', answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.' },
//     { id: 8, question: 'Digital Marketing Services in Bangalore?', answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.' },
//     { id: 9, question: 'What is the role of digital marketing in a company?', answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.' },
//     { id: 10, question: 'Is Digital Marketing the future?', answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.' },
//     { id: 11, question: 'Why choose digital marketing agencies in Bangalore?', answer: 'Bangalore, being India\'s IT hub, offers access to top digital marketing talent, innovative technologies, and competitive pricing.' },
//     { id: 12, question: 'How a digital marketing company can enhance your business?', answer: 'A digital marketing company can enhance your business by increasing online visibility, driving targeted traffic, and improving conversion rates.' },
//     { id: 13, question: 'How to choose the right digital marketing company in Bangalore?', answer: 'Evaluate their portfolio, client testimonials, industry experience, team expertise, and reporting methods.' },
//     { id: 14, question: 'What is the difference between white hat and black hat SEO techniques?', answer: 'White hat SEO follows ethical practices. Black hat SEO uses unethical tactics that can get your site penalized.' },
//     { id: 15, question: 'What is Performance Marketing?', answer: 'Performance marketing is a form of digital marketing where advertisers pay only when specific actions are completed.' },
//     { id: 16, question: 'Why choose a performance marketing company in Bangalore?', answer: 'Performance marketing companies in Bangalore offer data-driven strategies and proven results across various industries.' }
//   ];

//   const leftFaqs = faqs.slice(0, 8);
//   const rightFaqs = faqs.slice(8, 16);

//   const [openIndexLeft, setOpenIndexLeft] = useState(null);
//   const [openIndexRight, setOpenIndexRight] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredFaqs = faqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleFaqLeft = (index) => {
//     setOpenIndexLeft(openIndexLeft === index ? null : index);
//   };

//   const toggleFaqRight = (index) => {
//     setOpenIndexRight(openIndexRight === index ? null : index);
//   };

//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-10 md:mb-12"
//         >
//           {/* Badge */}
//           <motion.span 
//             className="sec-badge inline-flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <HelpCircle className="h-3 w-3" />
//             FAQs
//           </motion.span>
          
//           {/* Heading (h2) */}
//           <motion.h2 className="sec-h2 sec-text-light mt-3 leading-[1.15]">
//             Frequently Asked{' '}
//             <motion.span 
//               className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//               animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               style={{ backgroundSize: '200% 200%' }}
//             >
//               Questions
//             </motion.span>
//           </motion.h2>
          
//           {/* Paragraph (p) */}
//           <motion.p className="sec-p sec-text-light-soft mt-2 max-w-2xl mx-auto">
//             Find answers to the most common questions about our services and digital marketing
//           </motion.p>
//         </motion.div>

//         {/* Search Bar */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto mb-6 sm:mb-8"
//         >
//           <div className="relative">
//             <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search your question..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-2.5 pl-9 sm:pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm"
//             />
//           </div>
//         </motion.div>

//         {/* FAQ Grid */}
//         {searchTerm ? (
//           <div className="max-w-5xl mx-auto space-y-3">
//             {filteredFaqs.length > 0 ? (
//               filteredFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden border-white/10 hover:border-white/20"
//                 >
//                   <button
//                     onClick={() => {
//                       const leftIndex = leftFaqs.findIndex(f => f.id === faq.id);
//                       const rightIndex = rightFaqs.findIndex(f => f.id === faq.id);
//                       if (leftIndex !== -1) toggleFaqLeft(leftIndex);
//                       else if (rightIndex !== -1) toggleFaqRight(rightIndex);
//                     }}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     {/* Question (h3) */}
//                     <h3 className="sec-h3 sec-text-light mb-0">
//                       {faq.question}
//                     </h3>
//                     <ChevronDown className="h-4 w-4 text-white/50 flex-shrink-0 ml-2" />
//                   </button>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="text-center py-8">
//                 <MessageCircle className="h-10 w-10 text-gray-500 mx-auto mb-2" />
//                 <p className="sec-p sec-text-muted">No questions found matching your search.</p>
//                 <button 
//                   onClick={() => setSearchTerm('')}
//                   className="text-blue-400 hover:text-blue-300 mt-2 sec-p"
//                 >
//                   Clear search
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
//             {/* Left Column */}
//             <div className="space-y-3">
//               {leftFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
//                     openIndexLeft === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqLeft(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     {/* Question (h3) */}
//                     <h3 className={`sec-h3 mb-0 transition-colors duration-300 ${
//                       openIndexLeft === index ? 'text-blue-400' : 'sec-text-light'
//                     }`}>
//                       {faq.question}
//                     </h3>
//                     <motion.div
//                       animate={{ rotate: openIndexLeft === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-2 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexLeft === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-3.5 w-3.5" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexLeft === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-4 pb-3 sm:pb-4">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2"></div>
//                           {/* Answer (p) */}
//                           <p className="sec-p sec-text-light-soft leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-3">
//               {rightFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
//                     openIndexRight === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqRight(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     {/* Question (h3) */}
//                     <h3 className={`sec-h3 mb-0 transition-colors duration-300 ${
//                       openIndexRight === index ? 'text-blue-400' : 'sec-text-light'
//                     }`}>
//                       {faq.question}
//                     </h3>
//                     <motion.div
//                       animate={{ rotate: openIndexRight === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-2 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexRight === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-3.5 w-3.5" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexRight === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-4 pb-3 sm:pb-4">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2"></div>
//                           {/* Answer (p) */}
//                           <p className="sec-p sec-text-light-soft leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Bottom CTA */}
//         <motion.div 
//           className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <p className="sec-p sec-text-light-soft">Still have questions?</p>
          
//           <motion.a
//             href="/contact"
//             whileTap={{ scale: 0.95 }}
//             className="sec-btn"
//           >
//             <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
//             Contact Us
//             <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 sec-btn-arrow" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

// const FaqSection = () => {
//   const faqs = [
//     { id: 1, question: 'What is Digital Marketing?', answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.' },
//     { id: 2, question: 'What does a Digital Marketing agency do?', answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.' },
//     { id: 3, question: 'What is responsive web development?', answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.' },
//     { id: 4, question: 'Do I need a blog to be successful in digital marketing?', answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.' },
//     { id: 5, question: 'What is local SEO in digital marketing?', answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.' },
//     { id: 6, question: 'What are the benefits of performance marketing?', answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.' },
//     { id: 7, question: 'How does Bright Ads plan a digital marketing strategy for its clients?', answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.' },
//     { id: 8, question: 'Digital Marketing Services in Bangalore?', answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.' },
//     { id: 9, question: 'What is the role of digital marketing in a company?', answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.' },
//     { id: 10, question: 'Is Digital Marketing the future?', answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.' },
//     { id: 11, question: 'Why choose digital marketing agencies in Bangalore?', answer: 'Bangalore, being India\'s IT hub, offers access to top digital marketing talent, innovative technologies, and competitive pricing.' },
//     { id: 12, question: 'How a digital marketing company can enhance your business?', answer: 'A digital marketing company can enhance your business by increasing online visibility, driving targeted traffic, and improving conversion rates.' },
//     { id: 13, question: 'How to choose the right digital marketing company in Bangalore?', answer: 'Evaluate their portfolio, client testimonials, industry experience, team expertise, and reporting methods.' },
//     { id: 14, question: 'What is the difference between white hat and black hat SEO techniques?', answer: 'White hat SEO follows ethical practices. Black hat SEO uses unethical tactics that can get your site penalized.' },
//     { id: 15, question: 'What is Performance Marketing?', answer: 'Performance marketing is a form of digital marketing where advertisers pay only when specific actions are completed.' },
//     { id: 16, question: 'Why choose a performance marketing company in Bangalore?', answer: 'Performance marketing companies in Bangalore offer data-driven strategies and proven results across various industries.' }
//   ];

//   const leftFaqs = faqs.slice(0, 8);
//   const rightFaqs = faqs.slice(8, 16);

//   const [openIndexLeft, setOpenIndexLeft] = useState(null);
//   const [openIndexRight, setOpenIndexRight] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredFaqs = faqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleFaqLeft = (index) => setOpenIndexLeft(openIndexLeft === index ? null : index);
//   const toggleFaqRight = (index) => setOpenIndexRight(openIndexRight === index ? null : index);

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-5 sm:mb-6"
//         >
//           <motion.span 
//             className="text-blue-400 font-semibold text-[10px] sm:text-xs tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-500/30 inline-flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <HelpCircle className="h-3 w-3" />
//             FAQs
//           </motion.span>
          
//           <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2 leading-[1.15]">
//             Frequently Asked{' '}
//             <motion.span 
//               className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//               animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//               style={{ backgroundSize: '200% 200%' }}
//             >
//               Questions
//             </motion.span>
//           </motion.h2>
          
//           <motion.p className="text-blue-200/60 text-[10px] sm:text-xs mt-1.5 max-w-2xl mx-auto">
//             Find answers to the most common questions about our services and digital marketing
//           </motion.p>
//         </motion.div>

//         {/* ===== SEARCH BAR ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto mb-4 sm:mb-5"
//         >
//           <div className="relative">
//             <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search your question..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-2 pl-9 sm:pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
//             />
//           </div>
//         </motion.div>

//         {/* ===== FAQ CONTENT ===== */}
//         {searchTerm ? (
//           <div className="max-w-5xl mx-auto space-y-2">
//             {filteredFaqs.length > 0 ? (
//               filteredFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden border-white/10 hover:border-white/20"
//                 >
//                   <button className="w-full flex items-center justify-between p-2.5 sm:p-3 text-left hover:bg-white/5 transition-colors duration-200">
//                     <span className="text-xs sm:text-sm font-medium text-white">{faq.question}</span>
//                     <ChevronDown className="h-3.5 w-3.5 text-white/50 flex-shrink-0 ml-2" />
//                   </button>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="text-center py-6">
//                 <MessageCircle className="h-8 w-8 text-gray-500 mx-auto mb-2" />
//                 <p className="text-gray-400 text-xs">No questions found matching your search.</p>
//                 <button onClick={() => setSearchTerm('')} className="text-blue-400 hover:text-blue-300 mt-2 text-xs">Clear search</button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
            
//             {/* Left Column */}
//             <div className="space-y-2">
//               {leftFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
//                     openIndexLeft === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqLeft(index)}
//                     className="w-full flex items-center justify-between p-2.5 sm:p-3 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`text-[11px] sm:text-xs font-medium transition-colors duration-300 ${
//                       openIndexLeft === index ? 'text-blue-400' : 'text-white'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexLeft === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-2 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexLeft === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-3 w-3" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexLeft === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-2.5 sm:px-3 pb-2.5 sm:pb-3">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2"></div>
//                           <p className="text-blue-200/70 text-[10px] sm:text-xs leading-relaxed">{faq.answer}</p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-2">
//               {rightFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
//                     openIndexRight === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqRight(index)}
//                     className="w-full flex items-center justify-between p-2.5 sm:p-3 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`text-[11px] sm:text-xs font-medium transition-colors duration-300 ${
//                       openIndexRight === index ? 'text-blue-400' : 'text-white'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexRight === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-2 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexRight === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-3 w-3" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexRight === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-2.5 sm:px-3 pb-2.5 sm:pb-3">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2"></div>
//                           <p className="text-blue-200/70 text-[10px] sm:text-xs leading-relaxed">{faq.answer}</p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ===== BOTTOM CTA ===== */}
//         <motion.div 
//           className="flex flex-wrap items-center justify-center gap-3 mt-6 sm:mt-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-blue-200/60 text-xs">Still have questions?</p>
          
//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.04, boxShadow: "0 15px 30px rgba(1,173,240,0.3)", y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#01adf0] text-white font-semibold hover:shadow-xl transition-all duration-300 text-[10px] sm:text-xs"
//           >
//             <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//             Contact Us
//             <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
//               <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//             </motion.span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;





// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

// const FaqSection = () => {
//   // ===== 10 FAQs (5 Left + 5 Right) =====
//   const leftFaqs = [
//     { id: 1, question: 'What is Digital Marketing?', answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.' },
//     { id: 2, question: 'What does a Digital Marketing agency do?', answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.' },
//     { id: 3, question: 'What is responsive web development?', answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.' },
//     { id: 4, question: 'Do I need a blog to be successful in digital marketing?', answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.' },
//     { id: 5, question: 'What is local SEO in digital marketing?', answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.' }
//   ];

//   const rightFaqs = [
//     { id: 6, question: 'What are the benefits of performance marketing?', answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.' },
//     { id: 7, question: 'How does Bright Ads plan a digital marketing strategy for its clients?', answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.' },
//     { id: 8, question: 'Digital Marketing Services in Bangalore?', answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.' },
//     { id: 9, question: 'What is the role of digital marketing in a company?', answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.' },
//     { id: 10, question: 'Is Digital Marketing the future?', answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.' }
//   ];

//   const allFaqs = [...leftFaqs, ...rightFaqs];

//   const [openIndexLeft, setOpenIndexLeft] = useState(null);
//   const [openIndexRight, setOpenIndexRight] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleFaqLeft = (index) => setOpenIndexLeft(openIndexLeft === index ? null : index);
//   const toggleFaqRight = (index) => setOpenIndexRight(openIndexRight === index ? null : index);

//   const filteredFaqs = allFaqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
//         {/* ===== HEADER — Same as ContactSection ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-6 sm:mb-8"
//         >
//           {/* Badge */}
//           <span className="sec-badge inline-flex items-center gap-1.5">
//             <HelpCircle className="h-3 w-3" />
//             FAQs
//           </span>
          
//           {/* Heading */}
//           <h2 className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight">
//             Frequently Asked{' '}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Questions
//             </span>
//           </h2>
          
//           {/* Paragraph */}
//           <p className="sec-p sec-text-light-soft max-w-2xl mx-auto">
//             Find answers to the most common questions about our services and digital marketing
//           </p>
//         </motion.div>

//         {/* ===== SEARCH BAR ===== */}
//         {/* <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto mb-5 sm:mb-6"
//         >
//           <div className="relative">
//             <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search your question..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-3 sm:px-3.5 py-1.5 sm:py-2 pl-9 sm:pl-12 pr-4 rounded-lg bg-white/20 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-white/50 sec-p"
//             />
//           </div>
//         </motion.div> */}

//         {/* ===== FAQ GRID (5 LEFT + 5 RIGHT) ===== */}
//         {searchTerm ? (
//           // Search Results
//           <div className="max-w-4xl mx-auto space-y-2.5 sm:space-y-3">
//             {filteredFaqs.length > 0 ? (
//               filteredFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.04 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
//                 >
//                   <button className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200">
//                     <span className="sec-p sec-text-light font-semibold">{faq.question}</span>
//                     <ChevronDown className="h-4 w-4 text-white/50 flex-shrink-0 ml-3" />
//                   </button>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="text-center py-6">
//                 <MessageCircle className="h-8 w-8 text-gray-500 mx-auto mb-2" />
//                 <p className="sec-p sec-text-muted">No questions found matching your search.</p>
//                 <button onClick={() => setSearchTerm('')} className="sec-p text-blue-400 hover:text-blue-300 mt-2">
//                   Clear search
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           // 2 Column Layout
//           <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            
//             {/* LEFT COLUMN — 5 FAQs */}
//             <div className="space-y-2.5 sm:space-y-3">
//               {leftFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
//                     openIndexLeft === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqLeft(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     {/* Question — sec-p class */}
//                     <span className={`sec-p font-semibold transition-colors duration-300 ${
//                       openIndexLeft === index ? 'text-blue-400' : 'sec-text-light'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexLeft === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-3 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexLeft === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexLeft === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2.5"></div>
//                           {/* Answer — sec-p class */}
//                           <p className="sec-p sec-text-light-soft leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>

//             {/* RIGHT COLUMN — 5 FAQs */}
//             <div className="space-y-2.5 sm:space-y-3">
//               {rightFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: 15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
//                     openIndexRight === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqRight(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     {/* Question — sec-p class */}
//                     <span className={`sec-p font-semibold transition-colors duration-300 ${
//                       openIndexRight === index ? 'text-blue-400' : 'sec-text-light'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexRight === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-3 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexRight === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexRight === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2.5"></div>
//                           {/* Answer — sec-p class */}
//                           <p className="sec-p sec-text-light-soft leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ===== BOTTOM CTA — Same as ContactSection ===== */}
//         <motion.div 
//           className="flex flex-wrap items-center justify-center gap-3 mt-8 sm:mt-10"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <p className="sec-p sec-text-light-soft">Still have questions?</p>
          
//           <motion.a
//             href="/contact"
//             whileTap={{ scale: 0.95 }}
//             className="sec-btn"
//           >
//             <MessageCircle className="h-3.5 w-3.5" />
//             Contact Us
//             <ArrowRight className="h-3.5 w-3.5 sec-btn-arrow" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;







// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

// const FaqSection = () => {
//   // ===== 10 FAQs (5 Left + 5 Right) =====
//   const leftFaqs = [
//     { id: 1, question: 'What is Digital Marketing?', answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.' },
//     { id: 2, question: 'What does a Digital Marketing agency do?', answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.' },
//     { id: 3, question: 'What is responsive web development?', answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.' },
//     { id: 4, question: 'Do I need a blog to be successful in digital marketing?', answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.' },
//     { id: 5, question: 'What is local SEO in digital marketing?', answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.' }
//   ];

//   const rightFaqs = [
//     { id: 6, question: 'What are the benefits of performance marketing?', answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.' },
//     { id: 7, question: 'How does Bright Ads plan a digital marketing strategy for its clients?', answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.' },
//     { id: 8, question: 'Digital Marketing Services in Bangalore?', answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.' },
//     { id: 9, question: 'What is the role of digital marketing in a company?', answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.' },
//     { id: 10, question: 'Is Digital Marketing the future?', answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.' }
//   ];

//   const allFaqs = [...leftFaqs, ...rightFaqs];

//   const [openIndexLeft, setOpenIndexLeft] = useState(null);
//   const [openIndexRight, setOpenIndexRight] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleFaqLeft = (index) => setOpenIndexLeft(openIndexLeft === index ? null : index);
//   const toggleFaqRight = (index) => setOpenIndexRight(openIndexRight === index ? null : index);

//   const filteredFaqs = allFaqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* Background Blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-6 sm:mb-8"
//         >
//           {/* ✅ Badge — ? icon pehle, phir FAQs */}
//           <span 
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm"
//             style={{ color: '#8bc1fa' }}
//           >
//             <HelpCircle className="h-3.5 w-3.5" />
//             <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">FAQs</span>
//           </span>
          
//           {/* Heading */}
//           <h2 className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight">
//             Frequently Asked{' '}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Questions
//             </span>
//           </h2>
          
//           {/* Paragraph */}
//           <p className="sec-p sec-text-light-soft max-w-2xl mx-auto">
//             Find answers to the most common questions about our services and digital marketing
//           </p>
//         </motion.div>

//         {/* ===== FAQ GRID (5 LEFT + 5 RIGHT) ===== */}
//         {searchTerm ? (
//           // Search Results
//           <div className="max-w-4xl mx-auto space-y-2.5 sm:space-y-3">
//             {filteredFaqs.length > 0 ? (
//               filteredFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.04 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
//                 >
//                   <button className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200">
//                     <span className="sec-p sec-text-light font-semibold">{faq.question}</span>
//                     <ChevronDown className="h-4 w-4 text-white/50 flex-shrink-0 ml-3" />
//                   </button>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="text-center py-6">
//                 <MessageCircle className="h-8 w-8 text-gray-500 mx-auto mb-2" />
//                 <p className="sec-p sec-text-muted">No questions found matching your search.</p>
//                 <button onClick={() => setSearchTerm('')} className="sec-p text-blue-400 hover:text-blue-300 mt-2">
//                   Clear search
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           // 2 Column Layout
//           <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            
//             {/* LEFT COLUMN — 5 FAQs */}
//             <div className="space-y-2.5 sm:space-y-3">
//               {leftFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
//                     openIndexLeft === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqLeft(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`sec-p font-semibold transition-colors duration-300 ${
//                       openIndexLeft === index ? 'text-blue-400' : 'sec-text-light'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexLeft === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-3 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexLeft === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexLeft === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2.5"></div>
//                           <p className="sec-p sec-text-light-soft leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>

//             {/* RIGHT COLUMN — 5 FAQs */}
//             <div className="space-y-2.5 sm:space-y-3">
//               {rightFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: 15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
//                     openIndexRight === index 
//                       ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
//                       : 'border-white/10 hover:border-white/20'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqRight(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`sec-p font-semibold transition-colors duration-300 ${
//                       openIndexRight === index ? 'text-blue-400' : 'sec-text-light'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexRight === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-3 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexRight === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexRight === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5">
//                           <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-2.5"></div>
//                           <p className="sec-p sec-text-light-soft leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ===== BOTTOM CTA ===== */}
//         <motion.div 
//           className="flex flex-wrap items-center justify-center gap-3 mt-8 sm:mt-10"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <p className="sec-p sec-text-light-soft">Still have questions?</p>
          
//           <motion.a
//             href="/contact"
//             whileTap={{ scale: 0.95 }}
//             className="sec-btn"
//           >
//             <MessageCircle className="h-3.5 w-3.5" />
//             Contact Us
//             <ArrowRight className="h-3.5 w-3.5 sec-btn-arrow" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;





// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

// const FaqSection = () => {
//   // ===== 10 FAQs (5 Left + 5 Right) =====
//   const leftFaqs = [
//     { id: 1, question: 'What is Digital Marketing?', answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.' },
//     { id: 2, question: 'What does a Digital Marketing agency do?', answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.' },
//     { id: 3, question: 'What is responsive web development?', answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.' },
//     { id: 4, question: 'Do I need a blog to be successful in digital marketing?', answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.' },
//     { id: 5, question: 'What is local SEO in digital marketing?', answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.' }
//   ];

//   const rightFaqs = [
//     { id: 6, question: 'What are the benefits of performance marketing?', answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.' },
//     { id: 7, question: 'How does Bright Ads plan a digital marketing strategy for its clients?', answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.' },
//     { id: 8, question: 'Digital Marketing Services in Bangalore?', answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.' },
//     { id: 9, question: 'What is the role of digital marketing in a company?', answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.' },
//     { id: 10, question: 'Is Digital Marketing the future?', answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.' }
//   ];

//   const allFaqs = [...leftFaqs, ...rightFaqs];

//   const [openIndexLeft, setOpenIndexLeft] = useState(null);
//   const [openIndexRight, setOpenIndexRight] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleFaqLeft = (index) => setOpenIndexLeft(openIndexLeft === index ? null : index);
//   const toggleFaqRight = (index) => setOpenIndexRight(openIndexRight === index ? null : index);

//   const filteredFaqs = allFaqs.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section className="relative py-6 sm:py-8 md:py-10 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
//       {/* Background Blobs — #008df1 + #005b8f */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div 
//           className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
//           animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div 
//           className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
//           animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
//         {/* ===== HEADER ===== */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-6 sm:mb-8"
//         >
//           {/* ✅ Badge — #00c6fb text, #008df1 bg */}
//           <span 
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008df1]/10 border border-[#00c6fb]/30 backdrop-blur-sm"
//             style={{ color: '#00c6fb' }}
//           >
//             <HelpCircle className="h-3.5 w-3.5" />
//             <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">FAQs</span>
//           </span>
          
//           {/* Heading — #00c6fb highlighted (solid) */}
//           <h2 className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight">
//             Frequently Asked{' '}
//             <span style={{ color: '#00c6fb' }}>
//               Questions
//             </span>
//           </h2>
          
//           {/* Paragraph */}
//           <p className="sec-p sec-text-light-soft max-w-2xl mx-auto">
//             Find answers to the most common questions about our services and digital marketing
//           </p>
//         </motion.div>

//         {/* ===== FAQ GRID (5 LEFT + 5 RIGHT) ===== */}
//         {searchTerm ? (
//           // Search Results
//           <div className="max-w-4xl mx-auto space-y-2.5 sm:space-y-3">
//             {filteredFaqs.length > 0 ? (
//               filteredFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.04 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#008df1]/40 transition-all duration-300 overflow-hidden"
//                 >
//                   <button className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200">
//                     <span className="sec-p sec-text-light font-semibold">{faq.question}</span>
//                     <ChevronDown className="h-4 w-4 text-white/50 flex-shrink-0 ml-3" />
//                   </button>
//                 </motion.div>
//               ))
//             ) : (
//               <div className="text-center py-6">
//                 <MessageCircle className="h-8 w-8 text-gray-500 mx-auto mb-2" />
//                 <p className="sec-p sec-text-muted">No questions found matching your search.</p>
//                 <button onClick={() => setSearchTerm('')} className="sec-p text-[#008df1] hover:text-[#00c6fb] mt-2">
//                   Clear search
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           // 2 Column Layout
//           <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            
//             {/* LEFT COLUMN — 5 FAQs */}
//             <div className="space-y-2.5 sm:space-y-3">
//               {leftFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: -15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
//                     openIndexLeft === index 
//                       ? 'border-[#008df1]/50 shadow-lg shadow-[#008df1]/10' 
//                       : 'border-white/10 hover:border-[#008df1]/30'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqLeft(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`sec-p font-semibold transition-colors duration-300 ${
//                       openIndexLeft === index ? 'text-[#00c6fb]' : 'sec-text-light'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexLeft === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-3 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexLeft === index ? 'bg-[#008df1]/20 text-[#00c6fb]' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexLeft === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5">
//                           <div className="h-px bg-gradient-to-r from-[#008df1]/20 via-[#00c6fb]/20 to-[#006fa6]/20 mb-2.5"></div>
//                           <p className="sec-p sec-text-light-soft leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>

//             {/* RIGHT COLUMN — 5 FAQs */}
//             <div className="space-y-2.5 sm:space-y-3">
//               {rightFaqs.map((faq, index) => (
//                 <motion.div
//                   key={faq.id}
//                   initial={{ opacity: 0, x: 15 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   viewport={{ once: true }}
//                   className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
//                     openIndexRight === index 
//                       ? 'border-[#008df1]/50 shadow-lg shadow-[#008df1]/10' 
//                       : 'border-white/10 hover:border-[#008df1]/30'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaqRight(index)}
//                     className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200"
//                   >
//                     <span className={`sec-p font-semibold transition-colors duration-300 ${
//                       openIndexRight === index ? 'text-[#00c6fb]' : 'sec-text-light'
//                     }`}>
//                       {faq.question}
//                     </span>
//                     <motion.div
//                       animate={{ rotate: openIndexRight === index ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`flex-shrink-0 ml-3 p-0.5 rounded-full transition-colors duration-300 ${
//                         openIndexRight === index ? 'bg-[#008df1]/20 text-[#00c6fb]' : 'bg-white/10 text-white/50'
//                       }`}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndexRight === index && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5">
//                           <div className="h-px bg-gradient-to-r from-[#008df1]/20 via-[#00c6fb]/20 to-[#006fa6]/20 mb-2.5"></div>
//                           <p className="sec-p sec-text-light-soft leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ===== BOTTOM CTA — #008df1 ===== */}
//         <motion.div 
//           className="flex flex-wrap items-center justify-center gap-3 mt-8 sm:mt-10"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <p className="sec-p sec-text-light-soft">Still have questions?</p>
          
//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-[#008df1]/30 transition-all duration-300"
//           >
//             <MessageCircle className="h-3.5 w-3.5" />
//             Contact Us
//             <ArrowRight className="h-3.5 w-3.5" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

const FaqSection = () => {
  // ===== 10 FAQs (5 Left + 5 Right) =====
  const leftFaqs = [
    { id: 1, question: 'What is Digital Marketing?', answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.' },
    { id: 2, question: 'What does a Digital Marketing agency do?', answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.' },
    { id: 3, question: 'What is responsive web development?', answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.' },
    { id: 4, question: 'Do I need a blog to be successful in digital marketing?', answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.' },
    { id: 5, question: 'What is local SEO in digital marketing?', answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.' }
  ];

  const rightFaqs = [
    { id: 6, question: 'What are the benefits of performance marketing?', answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.' },
    { id: 7, question: 'How does Bright Ads plan a digital marketing strategy for its clients?', answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.' },
    { id: 8, question: 'Digital Marketing Services in Bangalore?', answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.' },
    { id: 9, question: 'What is the role of digital marketing in a company?', answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.' },
    { id: 10, question: 'Is Digital Marketing the future?', answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.' }
  ];

  const allFaqs = [...leftFaqs, ...rightFaqs];

  const [openIndexLeft, setOpenIndexLeft] = useState(null);
  const [openIndexRight, setOpenIndexRight] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaqLeft = (index) => setOpenIndexLeft(openIndexLeft === index ? null : index);
  const toggleFaqRight = (index) => setOpenIndexRight(openIndexRight === index ? null : index);

  const filteredFaqs = allFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-6 sm:py-8 md:py-10 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      
      {/* Background Blobs — #008df1 + #005b8f */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#008df1]/20 blur-3xl"
          animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#005b8f]/20 blur-3xl"
          animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        
        {/* ===== HEADER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          {/* ✅ Badge — #00c6fb text, #008df1 bg */}
          <span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008df1]/10 border border-[#00c6fb]/30 backdrop-blur-sm"
            style={{ color: '#00c6fb' }}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">FAQs</span>
          </span>
          
          {/* Heading — #00c6fb highlighted (solid) */}
          <h2 className="sec-h2 sec-text-light mt-2 sm:mt-3 mb-2 sm:mb-3 leading-tight">
            Frequently Asked{' '}
            <span style={{ color: '#00c6fb' }}>
              Questions
            </span>
          </h2>
          
          {/* Paragraph */}
          <p className="sec-p sec-text-light-soft max-w-2xl mx-auto">
            Find answers to the most common questions about our services and digital marketing
          </p>
        </motion.div>

        {/* ===== FAQ GRID (5 LEFT + 5 RIGHT) ===== */}
        {searchTerm ? (
          // Search Results
          <div className="max-w-4xl mx-auto space-y-2.5 sm:space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#008df1]/40 transition-all duration-300 overflow-hidden"
                >
                  <button className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200">
                    <span className="sec-p sec-text-light font-semibold">{faq.question}</span>
                    <ChevronDown className="h-4 w-4 text-white/50 flex-shrink-0 ml-3" />
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-6">
                <MessageCircle className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                <p className="sec-p sec-text-muted">No questions found matching your search.</p>
                <button onClick={() => setSearchTerm('')} className="sec-p text-[#008df1] hover:text-[#00c6fb] mt-2">
                  Clear search
                </button>
              </div>
            )}
          </div>
        ) : (
          // 2 Column Layout
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            
            {/* LEFT COLUMN — 5 FAQs */}
            <div className="space-y-2.5 sm:space-y-3">
              {leftFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
                    openIndexLeft === index 
                      ? 'border-[#008df1]/50 shadow-lg shadow-[#008df1]/10' 
                      : 'border-white/10 hover:border-[#008df1]/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaqLeft(index)}
                    className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className={`sec-p font-semibold transition-colors duration-300 ${
                      openIndexLeft === index ? 'text-[#00c6fb]' : 'sec-text-light'
                    }`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndexLeft === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ml-3 p-0.5 rounded-full transition-colors duration-300 ${
                        openIndexLeft === index ? 'bg-[#008df1]/20 text-[#00c6fb]' : 'bg-white/10 text-white/50'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndexLeft === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5">
                          <div className="h-px bg-gradient-to-r from-[#008df1]/20 via-[#00c6fb]/20 to-[#006fa6]/20 mb-2.5"></div>
                          <p className="sec-p sec-text-light-soft leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* RIGHT COLUMN — 5 FAQs */}
            <div className="space-y-2.5 sm:space-y-3">
              {rightFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`bg-white/5 backdrop-blur-sm rounded-lg border transition-all duration-300 overflow-hidden ${
                    openIndexRight === index 
                      ? 'border-[#008df1]/50 shadow-lg shadow-[#008df1]/10' 
                      : 'border-white/10 hover:border-[#008df1]/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaqRight(index)}
                    className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className={`sec-p font-semibold transition-colors duration-300 ${
                      openIndexRight === index ? 'text-[#00c6fb]' : 'sec-text-light'
                    }`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndexRight === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ml-3 p-0.5 rounded-full transition-colors duration-300 ${
                        openIndexRight === index ? 'bg-[#008df1]/20 text-[#00c6fb]' : 'bg-white/10 text-white/50'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndexRight === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-3 sm:px-3.5 pb-3 sm:pb-3.5">
                          <div className="h-px bg-gradient-to-r from-[#008df1]/20 via-[#00c6fb]/20 to-[#006fa6]/20 mb-2.5"></div>
                          <p className="sec-p sec-text-light-soft leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ===== BOTTOM CTA — #008df1 ===== */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="sec-p sec-text-light-soft">Still have questions?</p>
          
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#008df1] hover:bg-[#006fa6] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-[#008df1]/30 transition-all duration-300"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Contact Us
            {/* 👇 Arrow ab move karega */}
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;