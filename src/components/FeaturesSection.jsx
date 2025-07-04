import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import Manila from '../assets/Manila.jpg';
import Club from '../assets/Club.jpg';
import Hackathon from '../assets/hackathon.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    image: Manila,
    title: 'STARTUP DEEP DIVE',
    description:
      'Kick off in Metro Manila with exclusive access to the Philippine innovation scene. Go behind the scenes with top founders, VC firms (including Foxmont Capital, Kaya Founders, and Founders Launchpad), and experience real work in real time. Design thinking sprints, startup tours, and collaborative challenges included.',
  },
  {
    image: Club,
    title: 'COASTAL IMMERSION',
    description:
      'The summit wraps up with a two-day tropical retreat at Club Laiya, Batangas—where crystal waters meet venture creation. Here, delegates compete in a beachfront hackathon, pitch to real investors, and unwind with activities like snorkeling, archery, paddleboarding, and Aqua Zumba.',
  },
  {
    image: Hackathon,
    title: 'HACKATHON',
    description:
      'This year’s theme: Scalable Solutions for the Philippines. You’ll prototype ventures in four high-need sectors—Healthcare, Agriculture, Consumer Solutions, and Climatech—guided by insights from the 2024 Philippine Venture Capital Report. Use cutting-edge tech, real constraints, and local insight to pitch solutions that matter.',
  },
];

const FeaturesSlideshow = () => {
  return (
    <section id="about" className="w-full py-16 bg-[#f2efcf]">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2
          variants={textVariant(0.3)}
          className="text-4xl font-extrabold text-[#6C1023] text-center mb-10"
        >
          What to Expect
        </motion.h2>

        <Carousel
          autoPlay
          infiniteLoop
          interval={7000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img src={slide.image} alt={slide.title} className="object-cover h-[500px] w-full" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 text-left">
                <h3 className="text-2xl font-extrabold text-[#F2EFCF] mb-3">
                  {slide.title}
                </h3>
                <p className="text-[#f2efcf] max-w-3xl text-base">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
};

export default FeaturesSlideshow;
