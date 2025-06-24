import React from 'react'
import { BsStack } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Application Form",
      description: "Participants must complete the official application form with personal details, essays, and a short video.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Hackathon Theme", 
      description: "This hackathon challenges participants to build scalable business solutions for the Philippines in healthcare, agriculture, consumer tech, or climatech.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Application Fee",
      description: [
        <>
        <span className="font-semibold">Early Decision:</span>600$
        </>,
        <>
        <span className="font-semibold">Regular Decision:</span>700$
        </>,
        "Note: All travel, lodging, meals, summit merch, and activities are included."
      ],
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Deadlines",
      description: [
        <>
        <span className="font-semibold">Early Decision:</span>July 11, 2025
        </>,
        <>
        <span className="font-semibold">Regular Decision:</span>July 25, 2025
        </>,
        <>
        <span className="font-semibold">Final Decision:</span>TBA
        </>,
      ],
      link: "#learn-more"
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
      >
        {/* Header */}
        <motion.div 
          variants={fadeIn('right', 0.4)}
          className="md:w-1/3"
        >
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
          >
            Application Process
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.5)}
            className="text-gray-600 text-lg mb-4 md:w-4/5"
          >
            Applicants must be
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 0.6)}
            className="space-y-3"
          >
            <motion.div 
              variants={fadeIn('right', 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-600">current undergraduate students enrolled in a college or university at the time of the summit</span>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
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

        {/* Services Grid */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white max-w-82 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                variants={fadeIn('down', 0.4 * (index + 1))}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2"
              >
                {service.title}
              </motion.h3>

              {/* Conditional rendering: plain text or bullets */}
              {Array.isArray(service.description) ? (
                <motion.ul 
                  variants={fadeIn('up', 0.5 * (index + 1))}
                  className="space-y-2 mb-4"
                >
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="mt-1 w-2.5 h-2.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
              ) : (
                <motion.p 
                  variants={fadeIn('up', 0.5 * (index + 1))}
                  className="text-gray-600 mb-4"
                >
                  {service.description}
                </motion.p>
              )}

              <motion.a 
                variants={fadeIn('up', 0.6 * (index + 1))}
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesSection
