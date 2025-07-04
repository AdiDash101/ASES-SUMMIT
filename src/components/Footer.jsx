import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import asesLogo from "../assets/ASES.svg"; // Make sure the path is correct

const Footer = () => {
  return (
    <motion.footer 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gradient-to-b from-[#fbb03b] to-[#c1471c] backdrop-blur-md border-b border-gray-800 shadow-sm text-center py-12"
    >
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Logo */}
        <motion.div variants={fadeIn('down', 0.3)}>
          <img src={asesLogo} alt="ASES Logo" className="w-16 h-16" />
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={fadeIn('up', 0.4)}>
          <h3 className="text-lg font-bold mb-1 text-white">Contact</h3>
          <p className="text-white font-bold">ases@gmail.com</p>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          variants={fadeIn('up', 0.5)}
          className="flex gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <FaFacebookF className="w-5 h-5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="border-t border-white/30 w-full pt-6"
        >
          <p className="text-white/80 text-sm">
            Copyright © {new Date().getFullYear()} ASES Manila
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
