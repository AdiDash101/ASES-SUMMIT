import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.JPG";
import image8 from "../assets/build.jpg";

const itinerary = [
  {
    day: "Day 0 - Welcome to Manila",
    image: image1,
    events: [
      "Arrival and pick up at the Ninoy Aquino International Airport",
      "Check-in at the City Garden Hotel, Makati",
      "Filipino-style Welcome Dinner with Delegates"
    ]
  },
  {
    day: "Day 1 - Founders Launchpad: Build Begins",
    image: image2,
    events: [
      "Meet the Founders Launchpad team",
      "Founder Stories and Workshop Activities",
      "Cultural Night — wear your heritage"
    ]
  },
  {
    day: "Day 2 - Foxmont",
    image: image3,
    events: [
      "Problem Pitching and Team Formation",
      "Shark Tank at Foxmont",
      "Mystery Manila at Century City Mall"
    ]
  },
  {
    day: "Day 3 - Manila",
    image: image4,
    events: [
      "Bike and Kalesa around Fort Santiago",
      "Learn the Hustle in Divisoria Marketplace",
      "Binondo Food Crawl"
    ]
  },
  {
    day: "Day 4 - Beachside Activities",
    image: image5,
    events: [
      "Trip to the beach",
      "Boodle Fight",
      "Fireside chat with founders"
    ]
  },
  {
    day: "Day 5 - Build by the Beach",
    image: image8,
    events: [
      "Beachside activities: Snorkeling, Catamaran Sail, Mangrove Eco Kaya, etc.",
      "Co-working session by the beach",
      "Return to Metro Manila"
    ]
  },
  {
    day: "Day 6 - Final Pitch Day",
    image: image6,
    events: [
      "Presentation of final pitches",
      "Networking mixer with local founders and VCs",
      "Clubbing at Bonifacio Global City"
    ]
  },
  {
    day: "Day 7 - Farewell",
    image: image7,
    events: [
      "Thrift shopping at Salcedo Marketplace",
      "Departure"
    ]
  }
];

const ScheduleOfEvents = () => {
  const [page, setPage] = useState(0);
  const pairs = [];
  for (let i = 0; i < itinerary.length; i += 2) {
    pairs.push(itinerary.slice(i, i + 2));
  }

  const handleNext = () => {
    if (page < pairs.length - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="min-h-screen bg-[#fce3c3]">
      <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <motion.h2
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-[#5a3c2e] text-center mb-12"
        >
          Key Events
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {pairs[page].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#fff4e0] shadow-lg rounded-xl p-8 min-h-[28rem] flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.day}
                  className="w-full h-72 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-[#ba5d2c]">
                  {item.day}
                </h3>
                <ul className="space-y-3 flex-1">
                  {item.events.map((event, idx) => (
                    <li
                      key={idx}
                      className="border-l-4 border-[#ba5d2c] pl-4"
                    >
                      <p className="text-base text-[#6b4e34] font-medium">
                        {event}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="px-5 py-2 rounded-full bg-white text-gray-800 shadow-md disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={page === pairs.length - 1}
            className="px-5 py-2 rounded-full bg-yellow-400 text-black shadow-md disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default ScheduleOfEvents;
