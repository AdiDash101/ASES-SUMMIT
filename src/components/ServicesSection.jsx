import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { BsStack } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Application Form",
      step: "1",
      description: "Participants must complete the official application form with personal details, essays, and a short video.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Application Fee",
      step: "2",
      description: [
        <><span className="font-semibold">Early Decision:</span> 600$</>,
        <><span className="font-semibold">Regular Decision:</span> 700$</>,
        "Note: All travel, lodging, meals, summit merch, and activities are included."
      ],
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Deadlines",
      step: "3",
      description: [
        <><span className="font-semibold">Early Decision:</span> July 11, 2025</>,
        <><span className="font-semibold">Regular Decision:</span> July 25, 2025</>,
        <><span className="font-semibold">Final Decision:</span> TBA</>,
      ],
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Hackathon Theme",
      step: "4",
      description: "This hackathon challenges participants to build scalable business solutions for the Philippines in healthcare, agriculture, consumer tech, or climatech.",
      link: "#learn-more"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f2efcf' }}>
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className='flex flex-col gap-12 max-w-7xl mx-auto'
      >
        {/* Application Process Main Card */}
        <motion.div 
          variants={fadeIn('right', 0.4)}
          className="bg-white rounded-2xl p-8 shadow-md"
        >
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Application Process
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.5)}
            className="text-gray-600 text-lg mb-4"
          >
            Applicants must be:
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 0.6)}
            className="space-y-3"
          >
            <motion.div 
              variants={fadeIn('right', 0.7)}
              className="flex items-start gap-3"
            >
              <div className="w-3 h-3 mt-2 rounded-full bg-indigo-600"></div>
              <span className="text-gray-600">Current undergraduate students enrolled in a college or university at the time of the summit.</span>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 0.8)}
              className="flex items-start gap-3"
            >
              <div className="w-3 h-3 mt-2 rounded-full bg-indigo-600"></div>
              <span className="text-gray-600">Students from all disciplines and nationalities are welcome to apply.</span>
            </motion.div>
          </motion.div>
          <motion.button 
            variants={fadeIn('up', 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get started
          </motion.button>
        </motion.div>

        {/* Timeline Service Cards */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          className="relative border-l-4 border-indigo-300 pl-8 space-y-12"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -left-7 top-4 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                Step {service.step}
              </div>
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              {Array.isArray(service.description) ? (
                <ul className="space-y-2 mb-4">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="mt-1 w-2.5 h-2.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
              )}
              <a href={service.link} className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                LEARN MORE
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;