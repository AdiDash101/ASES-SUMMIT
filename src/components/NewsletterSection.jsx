import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import summitVideo from "../assets/summit.mp4"; // Ensure path is correct

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="w-full relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={summitVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay covering the video */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="absolute inset-0 bg-black/40 z-10"
      />

      {/* Spacer to give the section height */}
      <div className="relative z-20 h-[300px] sm:h-[400px] md:h-[500px]" />
    </section>
  );
};

export default NewsletterSection;
