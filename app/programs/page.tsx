"use client";

import {
  FaSchool,
  FaLaptopCode,
  FaHeartbeat,
  FaCalculator,
  FaBookOpen,
} from "react-icons/fa";

const programs = [
  {
    title: "Grades 1 to 12 Formal Education",
    description:
      "Comprehensive curriculum that covers all foundational and advanced subjects tailored to each grade level.",
    icon: <FaSchool className="text-green-600 w-8 h-8" />,
  },
  {
    title: "Computer Science and ICT",
    description:
      "State-of-the-art computer labs and courses teaching coding, networking, and digital literacy.",
    icon: <FaLaptopCode className="text-blue-700 w-8 h-8" />,
  },
  {
    title: "Health & Life Sciences",
    description:
      "Focused studies on biology, health education, and life sciences to prepare students for health professions.",
    icon: <FaHeartbeat className="text-green-700 w-8 h-8" />,
  },
  {
    title: "Mathematics & Scientific Studies",
    description:
      "Strong emphasis on math, physics, and chemistry, fostering analytical thinking and problem-solving skills.",
    icon: <FaCalculator className="text-black w-8 h-8" />,
  },
  {
    title: "Islamic Studies & Language Programs",
    description:
      "In-depth courses in Islamic theology, Arabic language, and literature, promoting cultural heritage and values.",
    icon: <FaBookOpen className="text-green-500 w-8 h-8" />,
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 px-6 md:px-20 max-w-6xl mx-auto"
      aria-labelledby="programs-title"
    >
      <h2
        id="programs-title"
        className="text-4xl font-extrabold text-green-700 mb-14 text-center"
      >
        Our Programs
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {programs.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col space-y-4 hover:shadow-2xl transition-shadow duration-300"
            tabIndex={0} // keyboard accessible
            role="region"
            aria-label={title}
          >
            <div className="mb-3">{icon}</div>
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <p className="text-gray-600 flex-grow">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
