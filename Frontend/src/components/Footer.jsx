import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutUs' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/Blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/thecoderbox/',
      hoverColor: '#1877f2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/thecoderbox/home/',
      hoverColor: '#0a66c2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@thecoderbox',
      hoverColor: '#ff0000',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/thecoderbox',
      hoverColor: '#e4405f',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
    },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email: email }]);

      if (error) {
        console.error('Supabase Full Error:', error);

        if (error.code === '23505') {
          setError('This email is already subscribed.');
          return;
        }

        if (error.code === '42501') {
          setError('Permission denied. Please contact support.');
          return;
        }

        if (error.code === '42P01') {
          setError('Database not configured properly. Please try later.');
          return;
        }

        setError(`Error: ${error.message || 'Something went wrong.'}`);
        return;
      }

      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Catch Block Error:', err);
      setError(`Exception: ${err.message || 'Something went wrong.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative bg-[#f8f8f8] border-t border-gray-200">
      {/* TOP BLUE LINE */}
      <div className="h-1 w-full bg-[#01adf0] shadow-[0_0_10px_#01adf0]"></div>

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 flex flex-col items-center justify-center text-center">

        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src="/coderBoxlogo3.png"
          alt="CoderBox Logo"
          className="h-10 sm:h-12 w-auto object-contain mb-6"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/96/01adf0/ffffff?text=CB';
          }}
        />

        {/* NAV LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-6"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-sm font-medium text-gray-600 hover:text-[#01adf0] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-xl"
              style={{ backgroundColor: '#01adf0', color: '#ffffff' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = social.hoverColor; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#01adf0'; }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* NEWSLETTER FORM */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-md mb-4 px-2 sm:px-0"
        >
          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-1 sm:gap-2 w-full bg-white rounded-full border border-gray-200 p-1 shadow-sm focus-within:border-[#01adf0] focus-within:ring-2 focus-within:ring-[#01adf0]/20 transition-all overflow-hidden"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter your email"
              className="flex-1 min-w-0 bg-transparent px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 outline-none placeholder-gray-400"
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-shrink-0 p-2.5 sm:px-5 sm:py-2.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium text-white ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#01adf0] hover:bg-[#0196d1]'
              }`}
              aria-label="Subscribe"
            >
              <span className="hidden sm:inline">{isLoading ? 'Sending...' : 'Subscribe'}</span>
              {!isLoading && <Send size={16} className="sm:hidden" />}
              {isLoading && <span className="sm:hidden text-xs">...</span>}
            </button>
          </form>

          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <p className="flex items-center justify-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Subscribed successfully! Thank you.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <p className="flex items-center justify-center gap-1.5 text-xs text-red-500 font-medium px-2">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span className="text-center">{error}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500 mt-4 mb-6"
        >
          <span className="flex items-center gap-1.5">
            <Mail size={12} className="text-[#01adf0]" />
            support@thecoderbox.com
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={12} className="text-[#01adf0]" />
            +91 89288 09025
          </span>
        </motion.div>

        {/* COPYRIGHT — Left side, Links — Right side */}
        <div className="w-full border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          <p className="text-xs text-gray-400 text-center sm:text-left order-2 sm:order-1">
            Copyright © {currentYear} thecoderbox.com | All Rights Reserved
          </p>

          <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <Link
              to="/privacy-policy"
              className="text-xs text-gray-500 hover:text-[#01adf0] transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Privacy & Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-xs text-gray-500 hover:text-[#01adf0] transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;