import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import asesLogo from '../assets/ASES3.svg';
import asesLogo2 from '../assets/wavemaker.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Overview' },
    { href: '#services', label: 'Rules' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
    >
      <div
        className={`w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16 transition-all duration-300 ${
          isScrolled
            ? 'bg-gradient-to-b from-[#fbb03b] to-[#c1471c] backdrop-blur-md border-b border-gray-800 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* ✅ Logos with translucent blur background */}
        <motion.a
          href="#home"
          variants={fadeIn('right', 0.3)}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer p-1 transition-all duration-200"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md">
            <img
              src={asesLogo}
              alt="ASES Logo"
              className="w-20 h-auto drop-shadow-md"
            />
            <span className="text-[#F2EFCF] text-xl font-bold drop-shadow">
              X
            </span>
            <img
              src={asesLogo2}
              alt="ASES Logo 2"
              className="w-20 h-auto drop-shadow-md"
            />
          </div>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn('left', 0.3)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6 text-[#F2EFCF]" />
          ) : (
            <HiMenu className="h-6 w-6 text-[#F2EFCF]" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div
          variants={fadeIn('down', 0.3)}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={fadeIn('down', 0.1 * (index + 1))}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium text-[#F2EFCF] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#F2EFCF] after:transition-all ${
                activeLink === link.href ? 'font-semibold after:w-full' : ''
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#F2EFCF] text-[#6C1023] px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#f2efcf88]"
        >
          <a href="#newsletter">Apply Now</a>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-gradient-to-b from-[#fbb03b] to-[#c1471c] border-t border-gray-800 py-4"
        >
          <motion.div
            variants={fadeIn('down', 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn('right', 0.1 * (index + 1))}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 text-[#F2EFCF] ${
                  activeLink === link.href ? 'font-semibold' : ''
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              variants={fadeIn('up', 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#F2EFCF] text-[#6C1023] px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#f2efcf88]"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
