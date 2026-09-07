import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

const FaqSection = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is Digital Marketing?',
      answer: 'Digital marketing is a modern marketing strategy that utilizes internet & search engines. Digital marketing is focused on how customers interact with brands online.'
    },
    {
      id: 2,
      question: 'What does a Digital Marketing agency do?',
      answer: 'A digital marketing agency helps businesses promote their products and services online through various channels like SEO, social media, email marketing, content marketing, and paid advertising.'
    },
    {
      id: 3,
      question: 'What is responsive web development?',
      answer: 'Responsive web development is an approach to web design that ensures websites render well on a variety of devices and window or screen sizes.'
    },
    {
      id: 4,
      question: 'Do I need a blog to be successful in digital marketing?',
      answer: 'While not strictly necessary, having a blog significantly boosts your digital marketing success. Blogs help with SEO, establish authority, and engage audiences.'
    },
    {
      id: 5,
      question: 'What is local SEO in digital marketing?',
      answer: 'Local SEO is a strategy that helps businesses promote their products and services to local customers at the exact time they are searching for them online.'
    },
    {
      id: 6,
      question: 'What are the benefits of performance marketing?',
      answer: 'Performance marketing offers measurable results, cost-effective advertising, targeted reach, real-time optimization, and higher ROI.'
    },
    {
      id: 7,
      question: 'How does Bright Ads plan a digital marketing strategy for its clients?',
      answer: 'Bright Ads follows a comprehensive approach: understanding client goals, analyzing target audience, conducting competitor research, and continuously monitoring performance.'
    },
    {
      id: 8,
      question: 'Digital Marketing Services in Bangalore?',
      answer: 'Bangalore offers a wide range of digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, and analytics.'
    },
    {
      id: 9,
      question: 'What is the role of digital marketing in a company?',
      answer: 'Digital marketing plays a crucial role in building brand awareness, generating leads, driving sales, and engaging customers.'
    },
    {
      id: 10,
      question: 'Is Digital Marketing the future?',
      answer: 'Yes, digital marketing is undoubtedly the future of marketing. With increasing internet penetration and digital transformation, it continues to grow.'
    },
    {
      id: 11,
      question: 'Why choose digital marketing agencies in Bangalore?',
      answer: 'Bangalore, being India\'s IT hub, offers access to top digital marketing talent, innovative technologies, and competitive pricing.'
    },
    {
      id: 12,
      question: 'How a digital marketing company can enhance your business?',
      answer: 'A digital marketing company can enhance your business by increasing online visibility, driving targeted traffic, and improving conversion rates.'
    },
    {
      id: 13,
      question: 'How to choose the right digital marketing company in Bangalore?',
      answer: 'Evaluate their portfolio, client testimonials, industry experience, team expertise, and reporting methods.'
    },
    {
      id: 14,
      question: 'What is the difference between white hat and black hat SEO techniques?',
      answer: 'White hat SEO follows ethical practices. Black hat SEO uses unethical tactics that can get your site penalized.'
    },
    {
      id: 15,
      question: 'What is Performance Marketing?',
      answer: 'Performance marketing is a form of digital marketing where advertisers pay only when specific actions are completed.'
    },
    {
      id: 16,
      question: 'Why choose a performance marketing company in Bangalore?',
      answer: 'Performance marketing companies in Bangalore offer data-driven strategies and proven results across various industries.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0f0a2a] to-[#0a1a2a]">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl"
          animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl"
          animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M50 50v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-40V6h-4v4h-4v4h4v4h4v-4h4v-4h-4zM10 50v-4H6v4H2v4h4v4h4v-4h4v-4h-4zm0-40V6H6v4H2v4h4v4h4v-4h4v-4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-14"
        >
          <motion.span 
            className="text-blue-400 font-semibold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase bg-blue-500/20 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full border border-blue-500/30 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            FAQs
          </motion.span>
          
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 leading-[1.15]">
            Frequently Asked{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Questions
            </motion.span>
          </motion.h2>
          
          <motion.p className="text-blue-200/60 text-xs sm:text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Find answers to the most common questions about our services and digital marketing
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-2.5 sm:py-3 pl-10 sm:pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            />
          </div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-3 sm:space-y-4"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <span className={`text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 ${
                    openIndex === index ? 'text-blue-400' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors duration-300 ${
                      openIndex === index ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/50'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                        <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-3 sm:mb-4"></div>
                        <p className="text-blue-200/70 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <MessageCircle className="h-12 w-12 text-gray-500 mx-auto mb-3" />
              <p className="text-gray-400 text-lg">No questions found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-blue-400 hover:text-blue-300 mt-2 text-sm"
              >
                Clear search
              </button>
            </div>
          )}
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-200/60 text-sm sm:text-base mr-2">Still have questions?</p>
          
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99,102,241,0.3)", y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            Contact Us
            <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;