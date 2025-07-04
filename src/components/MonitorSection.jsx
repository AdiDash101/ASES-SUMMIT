import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import backgroundOverview1 from "../assets/backgroundoverview1.png";
import backgroundOverview2 from "../assets/backgroundoverview2.png";
import backgroundOverview3 from "../assets/backgroundoverview3.png";
import backgroundOverview4 from "../assets/backgroundoverview4.png";
import backgroundOverview5 from "../assets/backgroundoverview5.png";
import backgroundOverview6 from "../assets/backgroundoverview6.png";

const backgrounds = [
  backgroundOverview1,
  backgroundOverview2,
  backgroundOverview3,
  backgroundOverview4,
  backgroundOverview5,
  backgroundOverview6
];

const MonitorSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full px-4 py-24 overflow-hidden bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* Left Side - Hover Flip Card */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-[580px] h-[400px] perspective group">
            <div className="absolute w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <img src={img2} alt="Image 2" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute w-full h-full backface-hidden">
                <img src={img1} alt="Image 1" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <motion.div className="w-full md:w-1/2 text-[#fff4e0] bg-[#1e3a48] rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">Summit Overview</h2>
          <p className="text-sm leading-relaxed mb-4">
            This year, the ASES International Summit 2025, the flagship program of the Affiliated Stanford Entrepreneurial Society (ASES), is making waves for the third time in the Philippines—hosted by ASES Manila. During last year’s edition in Manila, the summit brought together 30-35 top student talents from 15+ countries, selected from over 200 applicants, for a week-long immersive experience.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            Rooted in the tradition of Stanford’s ASES, the summit continues a legacy of convening the world’s most visionary minds. Previous summits have featured some of the world’s most influential tech founders in live Q&As or speaking moments, including Peter Thiel (Founder of PayPal), Elon Musk (Founder of Tesla and SpaceX), and Reid Hoffman (Co-founder of LinkedIn)—setting the tone for the kind of high-impact, forward-thinking conversations that define the ASES summit.
          </p>
          <p className="text-sm leading-relaxed mb-6">
            Throughout the week, delegates will participate in a series of hands-on workshops, design thinking sprints, pitch competitions, and collaborative venture-building activities—set against Southeast Asia’s growing startup scene.
          </p>
          <a
            href="#"
            className="inline-block mt-4 bg-yellow-400 text-[#1e3a48] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-300"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;

/* Tailwind CSS utilities needed: */
/* Add these to your index.css or global stylesheet */
/*
.perspective {
  perspective: 1000px;
}
.transform-style {
  transform-style: preserve-3d;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.backface-hidden {
  backface-visibility: hidden;
}
*/
