"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-24 px-6 md:px-20 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-10">Contact Us</h2>

      <div className="space-y-6 text-gray-700 text-lg max-w-md mx-auto">
        <p className="flex items-center justify-center space-x-3">
          <FaMapMarkerAlt className="text-green-600" />
          <span>Somalia - Lafoole, Ceelasha, Daarusalaam</span>
        </p>

        {/* Campus Phones */}
        <div className="space-y-4 text-left">
          <p className="flex items-center space-x-3">
            <FaPhoneAlt className="text-green-600" />
            <strong>Lafoole:</strong>
            <span>+252 615999179</span>
          </p>
          <p className="flex items-center space-x-3">
            <FaPhoneAlt className="text-green-600" />
            <strong>Ceelasha:</strong>
            <span>+252 612999179</span>
          </p>
          <p className="flex items-center space-x-3">
            <FaPhoneAlt className="text-green-600" />
            <strong>Daarusalaam:</strong>
            <span>+252 617999179</span>
          </p>
        </div>

        <p className="flex items-center justify-center space-x-3">
          <FaEnvelope className="text-green-600" />
          <span>info@alfurqan.edu.so</span>
        </p>
      </div>
    </section>
  );
}
