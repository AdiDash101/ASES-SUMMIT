import React from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import asesLogo from "../assets/ASES.svg";

const Footer = () => {
  return (
    <motion.footer 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gradient-to-b from-[#fbb03b] to-[#c1471c] backdrop-blur-md border-b border-gray-800 shadow-sm text-center py-12"
    >
      <div className="container mx-auto flex flex-col items-center space-y-6 px-4">
        {/* Logo */}
        <motion.div variants={fadeIn('down', 0.3)}>
          <img src={asesLogo} alt="ASES Logo" className="w-24 h-24" />
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={fadeIn('up', 0.4)} className="text-white text-center space-y-1">
          <h3 className="text-lg font-bold">Contact</h3>
          <p className="text-sm">
            <a href="mailto:rheign@wavemakerssummit.org" className="hover:underline">
              rheign@wavemakerssummit.org
            </a>
          </p>
          <p className="text-sm">
            <a href="mailto:sharan@wavemakerssummit.org" className="hover:underline">
              sharan@wavemakerssummit.org
            </a>
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          variants={fadeIn('up', 0.5)}
          className="flex gap-4"
        >
          {/* TikTok */}
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="https://www.tiktok.com/@aseswavemakersph"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <SiTiktok className="w-5 h-5" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/company/aseswavemakersph/?fbclid=IwY2xjawLVzmhleHRuA2FlbQIxMQABHs7ui8-JC92sf2rDhnmWutUGnSjxmCV5LY1iflbOt_PACnMRt5DsqIfl94j9_aem_n1Ykmj_5XOalrG6-KNj4uQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </motion.a>

          {/* Instagram */}
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="https://www.instagram.com/aseswavemakersph/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
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
