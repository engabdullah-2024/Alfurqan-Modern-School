"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="bg-gray-100 py-28 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
        Welcome to Alfurqan Modern School
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
        Excellence in education since 2009, serving three campuses across Somalia
        with a modern curriculum for Grades 1 to 12.
      </p>
      <a
        href="#contact"
        className="inline-block bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-lg font-semibold transition"
      >
        Join Us Today
      </a>
    </motion.section>
  );
}
