import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/postcard2.png";
import img2 from "../assets/postcardback.png";
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
  backgroundOverview6,
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
                <img
                  src={img2}
                  alt="Image 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute w-full h-full backface-hidden">
                <img
                  src={img1}
                  alt="Image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <motion.div className="w-full md:w-1/2 text-[#fff4e0] bg-[#1A3D40] rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
            Summit Overview
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Every year, the Affiliated Stanford Entrepreneurial Students (ASES)
            organizes one Stanford Summit in the spring and one Asia Summit at
            one of our international chapters in the summer. This November 3-8,
            2025, the ASES International Summit 2025 entitled “Wavemakers
            Summit,” is making waves for the third time in the Philippines!
          </p>
          <p className="text-sm leading-relaxed mb-4">
            This year, this prestigious summit will bring together 30–35 top
            student talents for a week-long immersive experience. Delegates will
            explore the innovation landscape, co-build ventures with global
            peers, and reflect meaningfully—all while immersed in the surf,
            culture, and community of the Philippines.
          </p>
          <p className="text-sm leading-relaxed mb-6">
            Rooted in the tradition of Stanford ASES, the summit continues a
            legacy of convening the world’s most visionary minds. Previous
            summits have featured some of the world’s most influential
            entrepreneurs and innovators as speakers including Peter Thiel
            (Founder of PayPal), Elon Musk (Founder of Tesla and SpaceX), and
            Andrew Ng (Co-founder of Coursera)—setting the tone for the kind of
            high-impact, forward-thinking conversations that define the ASES
            summit experience.
          </p>
          <a
            href="https://forms.gle/za6GyNee9pTYhscL9?fbclid=IwY2xjawLV0QtleHRuA2FlbQIxMQABHpcQ8JwaZFE8eQmP0IYpTvRFwKTUQio4BhAymBi5k49H5UGnDO289WEHQm1X_aem_67eNcH8gB_e6R666gXr8yQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-yellow-400 text-[#1e3a48] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-300"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonitorSection;
