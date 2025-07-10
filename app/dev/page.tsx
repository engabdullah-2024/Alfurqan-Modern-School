"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";

export default function DevPage() {
  const [tab, setTab] = useState<"projects" | "testimonials">("projects");

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
      {/* Left Sidebar */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center border">
        <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden ring-4 ring-blue-500">
          <Image
            src="https://avatars.githubusercontent.com/u/173546517?v=4"
            alt="Eng Abdullah"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Eng Abdullah</h2>
        <p className="text-green-600 text-sm font-medium mb-1 flex items-center justify-center gap-1">
          <FaCheckCircle className="text-blue-500" /> Verified Developer
        </p>
        <p className="text-gray-600">Fullstack Developer</p>
        <p className="text-gray-500 text-sm">CEO & Founder of Dugsi Tech</p>
        <p className="text-gray-500 text-sm mb-4">1+ Years Experience</p>

        {/* Social links */}
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/engabdullah-2024" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:col-span-2 space-y-10">
        {/* About */}
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h1 className="text-3xl font-bold text-green-700 mb-4">About the Developer</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eng Abdullah is a passionate Fullstack Developer with a strong focus on modern web technologies. As the founder of Dugsi Tech, he leads with innovation and purpose, aiming to create impactful solutions for schools and education systems across Somalia and beyond.
          </p>
          <p className="text-gray-700 leading-relaxed">
            His expertise includes React, Next.js, Tailwind CSS, Node.js, MongoDB, and more. With a vision for digital education, he has built Alfurqan Modern School’s platform from scratch, showcasing clean UI, performance, and great user experience.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-6 text-4xl justify-center text-gray-600">
            <FaHtml5 title="HTML5" className="text-orange-500" />
            <FaCss3Alt title="CSS3" className="text-blue-500" />
            <FaReact title="React" className="text-cyan-500" />
            <SiNextdotjs title="Next.js" className="text-black" />
            <SiTailwindcss title="Tailwind CSS" className="text-sky-400" />
            <FaNodeJs title="Node.js" className="text-green-600" />
            <SiMongodb title="MongoDB" className="text-green-700" />
            <SiTypescript title="TypeScript" className="text-blue-600" />
            <FaPython title="Python" className="text-yellow-600" />
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Experience Timeline</h2>
          <ol className="relative border-l border-gray-300 space-y-6 pl-6">
            <li>
              <div className="text-green-700 font-bold">2025 - Present</div>
              <p className="text-gray-700">Founder & Lead Dev - Dugsi Tech</p>
            </li>
            <li>
              <div className="text-green-700 font-bold">2025</div>
              <p className="text-gray-700">Built Alfurqan School Platform (MERN Stack)</p>
            </li>
            <li>
              <div className="text-green-700 font-bold">2024</div>
              <p className="text-gray-700">Graduated Fullstack Web Development Course</p>
            </li>
          </ol>
        </div>

        {/* Projects / Testimonials Toggle */}
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <div className="flex justify-center mb-6 space-x-4">
            <button
              className={`px-4 py-2 rounded-md font-semibold ${
                tab === "projects"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setTab("projects")}
            >
              Projects
            </button>
            <button
              className={`px-4 py-2 rounded-md font-semibold ${
                tab === "testimonials"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setTab("testimonials")}
            >
              Testimonials
            </button>
          </div>

          {tab === "projects" ? (
            <ul className="space-y-4 text-gray-700">
              <li>
                ✅ <strong>Alfurqan School Platform:</strong> Built full website with blogs, contact, gallery, and dashboard.
              </li>
              <li>
                ✅ <strong>DugsiTech Portfolio:</strong> Showcased projects, blog, and modern design.
              </li>
              <li>
                ✅ <strong>Grade 12 Assembly App:</strong> Student register, admin dashboard, and authentication.
              </li>
            </ul>
          ) : (
            <ul className="space-y-4 text-gray-700">
              <li>
                💬 “Eng Abdullah is a fast learner and highly skilled in building fullstack apps.” – <em>Instructor</em>
              </li>
              <li>
                💬 “Very professional work. The Alfurqan platform is user-friendly and beautiful.” – <em>School Admin</em>
              </li>
              <li>
                💬 “We trust DugsiTech for all our software solutions.” – <em>Education Group</em>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
