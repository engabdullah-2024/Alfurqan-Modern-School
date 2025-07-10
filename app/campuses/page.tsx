"use client";

import { FaMapMarkerAlt, FaFlask, FaHeartbeat, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";

const campuses = [
  {
    name: "Lafoole",
    description: "Main campus with state-of-the-art science and tech labs.",
    icon: <FaFlask className="text-green-600 w-10 h-10 mb-3" />,
  },
  {
    name: "Ceelasha",
    description: "Focused on health sciences and social studies programs.",
    icon: <FaHeartbeat className="text-blue-700 w-10 h-10 mb-3" />,
  },
  {
    name: "Daarusalaam",
    description: "Home to our advanced high school academic programs.",
    icon: <FaSchool className="text-black w-10 h-10 mb-3" />,
  },
];

export default function Campuses() {
  return (
    <section
      id="campuses"
      className="bg-gray-50 py-24 px-6 md:px-20 max-w-6xl mx-auto"
      aria-labelledby="campuses-title"
    >
      <h2
        id="campuses-title"
        className="text-4xl font-extrabold text-blue-700 mb-12 text-center"
      >
        Our Campuses
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {campuses.map(({ name, description, icon }) => (
          <motion.div
            key={name}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            tabIndex={0} // keyboard accessible
            role="region"
            aria-label={`${name} campus`}
          >
            {icon || <FaMapMarkerAlt className="text-green-600 text-4xl mb-4" />}
            <h3 className="text-2xl font-semibold mb-2 text-black">{name}</h3>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
