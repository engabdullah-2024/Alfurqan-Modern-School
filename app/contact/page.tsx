"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";

// Fix for missing default marker icons in Leaflet (Next.js SSR issue)
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const campuses = [
  {
    name: "Lafoole",
    position: [1.735, 44.010], // approximate lat/lng
    phone: "+252 615999179",
  },
  {
    name: "Ceelasha",
    position: [1.880, 44.053], // approximate lat/lng
    phone: "+252 612999179",
  },
  {
    name: "Daarusalaam",
    position: [2.040, 44.070], // approximate lat/lng
    phone: "+252 617999179",
  },
];

export default function Contact() {
  // To avoid SSR issues with leaflet, render map only on client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-tr from-blue-50 via-green-50 to-white py-28 px-6 md:px-20 flex flex-col items-center"
    >
      <h2 className="text-5xl font-extrabold text-blue-900 mb-16 drop-shadow-md">
        Contact Us
      </h2>

      {/* Contact info grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full mb-20">
        {/* Locations */}
        <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-xl p-10 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-500 cursor-default">
          <div className="p-5 mb-6 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 text-white text-5xl shadow-lg">
            <FaMapMarkerAlt />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-900">
            Our Locations
          </h3>
          <p className="text-gray-700 max-w-xs leading-relaxed">
            Somalia — Lafoole, Ceelasha, Daarusalaam campuses
          </p>
        </div>

        {/* Phone Contacts */}
        <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-xl p-10 space-y-8 transition-transform transform hover:scale-105 duration-500 cursor-default">
          <h3 className="text-2xl font-semibold mb-6 text-blue-900 text-center">
            Phone Contacts
          </h3>

          {campuses.map(({ name, phone }) => (
            <div
              key={name}
              className="flex items-center space-x-4 text-gray-800 justify-center"
            >
              <div className="p-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 text-white text-xl shadow-md">
                <FaPhoneAlt />
              </div>
              <span className="font-semibold w-28">{name}:</span>
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="text-blue-700 hover:underline text-lg"
              >
                {phone}
              </a>
            </div>
          ))}
        </div>

        {/* Email */}
        <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-xl p-10 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-500 cursor-default">
          <div className="p-5 mb-6 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 text-white text-5xl shadow-lg">
            <FaEnvelope />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-900">Email</h3>
          <a
            href="mailto:info@alfurqan.edu.so"
            className="text-blue-700 hover:underline text-lg break-words"
          >
           alfurqaanmodern2009@gmail.com
          </a>
          <p className="mt-5 text-gray-600 max-w-xs">
            We're here to answer your questions and help you anytime.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        {isClient && (
          <MapContainer
            center={[1.885, 44.04]}
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {campuses.map(({ name, position, phone }) => (
              <Marker key={name} position={position}>
                <Popup>
                  <strong>{name} Campus</strong>
                  <br />
                  Phone: {phone}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </section>
  );
}
