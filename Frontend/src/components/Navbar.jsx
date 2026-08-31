import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Globe,
  Zap,
  ChevronRight,
  Brain,
  Monitor,
  Server,
  Shield,
  Code,
  Globe2,
  ShoppingCart,
  Megaphone,
  Layers,
  Briefcase,
  Cpu,
  Network,
  Lock,
  Database,
  Cloud,
  Smartphone,
  ArrowRight,
  TrendingUp,
  Palette,
  Radio,
  BarChart,
  PenTool,
  CloudCog,
  Wrench,
  UserCog,
  Eye,
  RefreshCw,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState(null);

  const dropdownTimeoutRef = useRef(null);
  const navContainerRef = useRef(null);

  // Navigation structure with multi-level dropdowns
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Our Services",
      href: "/services",
      hasDropdown: true,
      icon: Layers,
      dropdownItems: [
        {
          name: "Cognitive Services",
          href: "/services/cognitive",
          icon: Brain,
          description: "AI & ML powered solutions",
          subItems: [
            {
              name: "Data Analytics",
              href: "/services/cognitive/data-analytics",
              icon: TrendingUp,
            },
            {
              name: "Data Science",
              href: "/services/cognitive/data-science",
              icon: Database,
            },
          ],
        },
        {
          name: "Digital Services",
          href: "/services/digital",
          icon: Monitor,
          description: "Transform your digital presence",
          subItems: [
            {
              name: "Web Development",
              href: "/services/digital/web-development",
              icon: Code,
            },
            {
              name: "Metaverse",
              href: "/services/digital/metaverse",
              icon: Globe2,
            },
            {
              name: "E-Commerce",
              href: "/services/digital/e-commerce",
              icon: ShoppingCart,
            },
            {
              name: "Digital Marketing & Branding",
              href: "/services/digital/digital-marketing",
              icon: Megaphone,
            },
          ],
        },
        {
          name: "Information Technology Services",
          href: "/services/it",
          icon: Server,
          description: "Enterprise IT solutions",
          subItems: [
            {
              name: "Design (UI/UX)",
              href: "/services/it/design",
              icon: PenTool,
            },
            {
              name: "Application Development & Maintenance",
              href: "/services/it/application-development",
              icon: RefreshCw,
            },
            {
              name: "IT Consulting",
              href: "/services/it/consulting",
              icon: UserCog,
            },
          ],
        },
        {
          name: "Infrastructure Management & Cybersecurity",
          href: "/services/cybersecurity",
          icon: Shield,
          description: "Secure and manage your IT infrastructure",
          subItems: [
            {
              name: "NOC Services",
              href: "/services/cybersecurity/noc",
              icon: Radio,
            },
            {
              name: "Cybersecurity Services",
              href: "/services/cybersecurity/security",
              icon: Lock,
            },
          ],
        },
      ],
    },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        setMobileOpenDropdown(null);
        setMobileOpenSubDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Handle dropdown hover
  const handleDropdownEnter = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 200);
  };

  const handleSubDropdownEnter = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveSubDropdown(name);
  };

  const handleSubDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 150);
  };

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: 5, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 5,
      scale: 0.98,
      transition: { duration: 0.15 },
    },
  };

  const subDropdownVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      x: -8,
      transition: { duration: 0.15 },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "tween", duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      transition: { type: "tween", duration: 0.3, ease: "easeIn" },
    },
  };

  const mobileSubMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <header
      ref={navContainerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-4"
      }`}
    >
      <nav className="container mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 2xl:px-36">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center flex-shrink-0 h-10"
          >
            <img
              src="/coderBoxlogo2.png"
              alt="CoderBox Logo"
              className="h-full w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && handleDropdownEnter(item.name)
                }
                onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
              >
                <a
                  href={item.href}
                  className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeDropdown === item.name
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name,
                      );
                      setActiveSubDropdown(null);
                    }
                  }}
                >
                  {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Mega Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-1/2 -translate-x-1/2 mt-1 w-[820px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-visible"
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={() => handleDropdownLeave()}
                        style={{ zIndex: 100 }}
                      >
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {item.dropdownItems.map((dropdownItem, idx) => (
                            <div
                              key={dropdownItem.name}
                              className="relative"
                              onMouseEnter={() =>
                                handleSubDropdownEnter(dropdownItem.name)
                              }
                              onMouseLeave={() => handleSubDropdownLeave()}
                            >
                              <a
                                href={dropdownItem.href}
                                className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                                  activeSubDropdown === dropdownItem.name
                                    ? "bg-blue-50 shadow-sm"
                                    : "hover:bg-gray-50"
                                }`}
                                onClick={(e) => e.preventDefault()}
                              >
                                <div
                                  className={`p-2 rounded-lg flex-shrink-0 ${
                                    activeSubDropdown === dropdownItem.name
                                      ? "bg-blue-100 text-blue-600"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  <dropdownItem.icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center text-sm font-semibold text-gray-800">
                                    <span className="truncate">
                                      {dropdownItem.name}
                                    </span>
                                    {dropdownItem.subItems &&
                                      dropdownItem.subItems.length > 0 && (
                                        <ChevronRight className="ml-1 h-4 w-4 text-gray-400 flex-shrink-0" />
                                      )}
                                  </div>
                                  {dropdownItem.description && (
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      {dropdownItem.description}
                                    </p>
                                  )}
                                </div>
                              </a>

                              {/* Nested Sub-Dropdown - Fixed positioning */}
                              {dropdownItem.subItems &&
                                dropdownItem.subItems.length > 0 && (
                                  <AnimatePresence>
                                    {activeSubDropdown ===
                                      dropdownItem.name && (
                                      <motion.div
                                        variants={subDropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute top-0 left-full ml-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-[100]"
                                        style={{
                                          boxShadow:
                                            "0 20px 60px -15px rgba(0,0,0,0.15)",
                                        }}
                                        onMouseEnter={() =>
                                          handleSubDropdownEnter(
                                            dropdownItem.name,
                                          )
                                        }
                                        onMouseLeave={() =>
                                          handleSubDropdownLeave()
                                        }
                                      >
                                        <div className="space-y-0.5">
                                          {dropdownItem.subItems.map(
                                            (subItem) => (
                                              <a
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                                              >
                                                <div className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-blue-100 text-gray-600 group-hover:text-blue-600 transition-colors">
                                                  <subItem.icon className="h-4 w-4" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                                                  {subItem.name}
                                                </span>
                                              </a>
                                            ),
                                          )}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Right Side - CTA */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <motion.a
              href="/contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center text-sm"
            >
              <Zap className="h-4 w-4 mr-2" />
              Start a Project
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors p-2 ml-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6">
                  <a href="/" className="flex items-center h-8">
                    <img
                      src="/coderBoxlogo2.png"
                      alt="CoderBox Logo"
                      className="h-full w-auto object-contain"
                    />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 p-2"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <>
                          <button
                            onClick={() => {
                              setMobileOpenDropdown(
                                mobileOpenDropdown === item.name
                                  ? null
                                  : item.name,
                              );
                              setMobileOpenSubDropdown(null);
                            }}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-left"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 flex-shrink-0 ${
                                mobileOpenDropdown === item.name
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileOpenDropdown === item.name && (
                              <motion.div
                                variants={mobileSubMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="ml-4 space-y-1 border-l-2 border-blue-200 pl-4"
                              >
                                {item.dropdownItems.map((dropdownItem) => (
                                  <div key={dropdownItem.name}>
                                    {dropdownItem.subItems &&
                                    dropdownItem.subItems.length > 0 ? (
                                      <>
                                        <button
                                          onClick={() => {
                                            setMobileOpenSubDropdown(
                                              mobileOpenSubDropdown ===
                                                dropdownItem.name
                                                ? null
                                                : dropdownItem.name,
                                            );
                                          }}
                                          className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                                        >
                                          <div className="flex items-center space-x-2">
                                            <dropdownItem.icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                            <span>{dropdownItem.name}</span>
                                          </div>
                                          <ChevronRight
                                            className={`h-3 w-3 transition-transform duration-200 flex-shrink-0 ${
                                              mobileOpenSubDropdown ===
                                              dropdownItem.name
                                                ? "rotate-90"
                                                : ""
                                            }`}
                                          />
                                        </button>
                                        <AnimatePresence>
                                          {mobileOpenSubDropdown ===
                                            dropdownItem.name && (
                                            <motion.div
                                              variants={mobileSubMenuVariants}
                                              initial="hidden"
                                              animate="visible"
                                              exit="exit"
                                              className="ml-6 space-y-1 border-l-2 border-gray-200 pl-3"
                                            >
                                              {dropdownItem.subItems.map(
                                                (subItem) => (
                                                  <a
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                                    onClick={() =>
                                                      setIsOpen(false)
                                                    }
                                                  >
                                                    <subItem.icon className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                                                    <span>{subItem.name}</span>
                                                  </a>
                                                ),
                                              )}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    ) : (
                                      <a
                                        href={dropdownItem.href}
                                        className="flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        <dropdownItem.icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                        <span>{dropdownItem.name}</span>
                                      </a>
                                    )}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <a
                    href="/contact"
                    className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Overlay */}
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
    </header>
  );
};

export default Navbar;