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