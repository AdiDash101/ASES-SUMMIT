import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import backgroundcover from '../assets/backgroundcover6.png';
import leftTree from '../assets/left.png';
import rightTree from '../assets/right.png';
import wave1 from '../assets/updatewaves1.png';
import wave2 from '../assets/updatewaves2.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundcover})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F2EFCF]/20 z-[1]" />

      {/* Left Tree */}
      <motion.img
        src={leftTree}
        alt="Left Tree"
        initial={{ x: -200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-400 sm:w-400 z-[2]"
      />

      {/* Right Tree */}
      <motion.img
        src={rightTree}
        alt="Right Tree"
        initial={{ x: 200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-400 sm:w-400 z-[2]"
      />

      {/* Content */}
      <div className="relative z-[3] text-center max-w-4xl px-4">
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-[#F2EFCF] text-shadow-black/50 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          COME BUILD THE NEXT
          <br />
          <span className="text-[#F2EFCF] decoration-[#F2EFCF]">WAVE WITH US</span>
          <br />

          {/* Animated Highlight Behind Text */}
          <span className="relative inline-block">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[#76a39a] z-0 origin-left rounded-md"
            />
            <span className="relative z-10 inline-block px-2 py-1 bg-gradient-to-r from-[#F2EFCF] via-white to-[#F2EFCF] bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient font-bold">
              HERE IN MANILA
            </span>
          </span>
        </motion.h1>

        <motion.a
          href="https://forms.gle/za6GyNee9pTYhscL9?fbclid=IwY2xjawLV0QtleHRuA2FlbQIxMQABHpcQ8JwaZFE8eQmP0IYpTvRFwKTUQio4BhAymBi5k49H5UGnDO289WEHQm1X_aem_67eNcH8gB_e6R666gXr8yQ"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="inline-block mt-8 px-8 py-3 border-2 border-[#F2EFCF] text-[#F2EFCF] font-extrabold text-lg rounded-full hover:bg-[#F2EFCF] hover:text-black transition-colors duration-300"
        >
          Apply now
        </motion.a>
      </div>

      {/* Bottom Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-[1]">
        <motion.img
          src={wave1}
          alt="Wave 1"
          animate={{ y: [0, 50, 0], x: [0, 20, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="min-w-[120%] scale-[1.2] mt-20 pointer-events-none"
          style={{ objectFit: 'cover' }}
        />
        <motion.img
          src={wave2}
          alt="Wave 2"
          animate={{ y: [0, 40, 0], x: [0, 10, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="min-w-[120%] scale-[1.2] -mt-40 pointer-events-none"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  );
};

export default Hero;
