import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import flag1 from "../assets/flag1.png";
import flag2 from "../assets/flag2.png";
import flag3 from "../assets/flag3.png";
import backgroundTestimony from "../assets/backgroundtestimony.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sakura Motohashi",
    image: profile1,
    flag: flag1,
    text: `“Attending the ASES Summit was one of the most inspiring weeks of my life. Spending time with people from all over the world ... so much energy, clarity, and a deeper sense of purpose.”`,
  },
  {
    id: 2,
    name: "Sharan Mansukhani",
    image: profile2,
    flag: flag2,
    text: `“The ASES Summit was transformative for me. Being exposed to another startup ecosystem and hearing from the top players ... a great vibe overall.”`,
  },
  {
    id: 3,
    name: "Remus Poon",
    image: profile3,
    flag: flag3,
    text: `“Attending the ASES Summit a year back was one of the most inspiring experiences of my entrepreneurial journey ... proud to call friends.”`,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundTestimony})` }}
    >
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-16">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-4xl font-extrabold tracking-wider"
          style={{ color: '#f2efcf' }}
        >
          TESTIMONIES
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          className="italic mt-2"
          style={{ color: '#f2efcf' }}
        >
          from previous summit attendees
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeIn("up", 0.2 * (index + 1))}
            className="bg-[#fff7e6] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:ring-4 hover:ring-yellow-400"
          >
            <div className="flex items-center mb-4 gap-3">
              <img
                src={item.image}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="font-bold text-md text-[#333] flex items-center gap-2">
                {item.name}
                <img
                  src={item.flag}
                  alt="flag"
                  className="w-5 h-5 rounded-full object-cover"
                />
              </h3>
            </div>
            <p className="text-[#602c00] text-sm leading-relaxed whitespace-pre-line">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
