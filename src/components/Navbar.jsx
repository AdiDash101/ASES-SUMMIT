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
    { href: '#testimonials', label: 'Testimonies' },
  ];

  // External link for Apply Now
  const formLink =
    'https://forms.gle/za6GyNee9pTYhscL9?fbclid=IwY2xjawLV0QtleHRuA2FlbQIxMQABHpcQ8JwaZFE8eQmP0IYpTvRFwKTUQio4BhAymBi5k49H5UGnDO289WEHQm1X_aem_67eNcH8gB_e6R666gXr8yQ';

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
        {/* Logos with translucent blur background */}
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

        {/* Desktop CTA Button */}
        <motion.button
          variants={fadeIn('left', 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#F2EFCF] text-[#6C1023] px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#f2efcf88]"
        >
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
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
            {/* Mobile CTA Button */}
            <motion.a
              variants={fadeIn('up', 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#F2EFCF] text-[#6C1023] px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#f2efcf88]"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
