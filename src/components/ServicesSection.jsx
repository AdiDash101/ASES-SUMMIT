import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

const ServicesSection = () => {
  const learnMoreLink =
    "https://drive.google.com/file/d/1-iFBfY84-OvXRPn_4feM5DCjIwLqgk3h/view";
  const applyNowLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSftwu05iHH5hIsK4ujHzdxSr6JuZsDXTWS3llwiQp2yVAXmRQ/viewform";

  const services = [
    {
      icon: <BsStack className="w-8 h-8" style={{ color: "#FD8C2B" }} />,
      title: "Application Form",
      step: "1",
      description:
        "Participants must complete the official application form with personal details, essays, and a short video.",
    },
    {
      icon: <FiSettings className="w-8 h-8" style={{ color: "#D90F3A" }} />,
      title: "Application Fee",
      step: "2",
      description: [
        <>
          <span className="font-semibold">Early Decision:</span> $600
        </>,
        <>
          <span className="font-semibold">Regular Decision:</span> $700
        </>,
        "Note: All domestic travel, lodging, meals, summit merch, and activities are included.",
      ],
    },
    {
      icon: <BiTime className="w-8 h-8" style={{ color: "#FAD534" }} />,
      title: "Deadlines",
      step: "3",
      description: [
        <>
          <span className="font-semibold">Early Decision:</span> July 11, 2025
        </>,
        <>
          <span className="font-semibold">Regular Decision:</span> July 25, 2025
        </>,
      ],
    },
    {
      icon: <HiLightBulb className="w-8 h-8" style={{ color: "#066B6C" }} />,
      title: "Hackathon Theme",
      step: "4",
      description:
        "This hackathon challenges participants to build scalable business solutions for the Philippines in healthcare, agriculture, consumer tech, or climatech.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#3E6A6F" }}
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="flex flex-col gap-12 max-w-7xl mx-auto"
      >
        {/* Application Process Main Card */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          className="bg-[#FEF7E8] rounded-2xl p-8 shadow-md"
        >
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "#5A1C25" }}
          >
            Application Process
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-700 text-lg mb-4"
          >
            Applicants must be:
          </motion.p>
          <motion.div variants={fadeIn("up", 0.6)} className="space-y-3">
            <motion.div
              variants={fadeIn("right", 0.7)}
              className="flex items-start gap-3"
            >
              <div className="w-3 h-3 mt-2 rounded-full" style={{ backgroundColor: "#F28B82" }}></div>   {/*Color Here*/}
              <span className="text-gray-700">
                All undergraduate, fresh graduate, and graduate students at the
                time of the summit.
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.8)}
              className="flex items-start gap-3"
            >
              <div className="w-3 h-3 mt-2 rounded-full" style={{ backgroundColor: "#F28B82" }}></div>
              <span className="text-gray-700">
                Students from all disciplines and nationalities are welcome to
                apply.
              </span>
            </motion.div>
          </motion.div>
          <motion.a
            href={applyNowLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn("up", 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 bg-[#1A3D40] text-white px-8 py-3 cursor-pointer rounded-full hover:bg-[#163236] transition-colors"
          >
            Apply Now
          </motion.a>
        </motion.div>

        {/* Timeline Service Cards */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="relative border-l-4 pl-8 space-y-12"
          style={{ borderColor: "#C1471C" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-[#FEF7E8] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -left-7 top-4 w-12 h-12 rounded-full bg-[#1A3D40] text-white flex items-center justify-center text-sm font-bold shadow-md">
                Step {service.step}
              </div>
              <div className="mb-4">{service.icon}</div>
              <h3
                className="text-xl font-semibold mb-2"
                style={
                  service.title === "Application Form"
                    ? { color: "#5A1C25" }
                    : {}
                }
              >
                {service.title}
              </h3>
              {Array.isArray(service.description) ? (
                <ul className="space-y-2 mb-4">
                  {service.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span
                        className="mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#F28B82" }} // Light red bullet
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 mb-4">{service.description}</p>
              )}
              {service.step === "1" && (
                <a
                  href={learnMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A3D40] font-medium hover:underline"
                >
                  LEARN MORE
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
