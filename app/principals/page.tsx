"use client";

import { FaUserTie, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const mainPrincipal = {
  name: "Yoonis Ali",
  title: "General Principal",
  image:
    "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/462304671_8784597604918743_26519477041746921_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_ohc=3KnIvTu_WwIQ7kNvwFRulRH&_nc_oc=Adl3kSOwTHL637k8vfYVvKaQ92eSgMmdc2f-rIaa9OaK71tyGCitDfQj2gJo-vJjjXw&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=mnC35rnTppRFaMP0Lx2u1g&oh=00_AfSEPIYxE5CE3Bb__endR-_YF2xXwc6ra8ILdIACoxpKlA&oe=68753E78",
};

const subPrincipals = [
  {
    name: "Mohamed Farah",
    campus: "Lafoole",
  },
  {
    name: "Siid Cali Maxamed C/Waaxid (Salmaan)",
    campus: "Ceelasha",
  },
  {
    name: "Abdirahman Ali",
    campus: "Daarusalaam",
  },
];

export default function PrincipalsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        Meet Our Leadership
      </h1>

      {/* Main Principal */}
      <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 mb-16">
        <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden ring-4 ring-green-600">
          <Image
            src={mainPrincipal.image}
            alt={mainPrincipal.name}
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{mainPrincipal.name}</h2>
        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
          <FaUserTie /> {mainPrincipal.title}
        </p>
      </div>

      {/* Sub Principals with icons */}
      <div className="grid md:grid-cols-3 gap-10">
        {subPrincipals.map(({ name, campus }) => (
          <div
            key={campus}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <FaUserCircle className="text-blue-600 text-7xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
              <FaMapMarkerAlt className="text-green-500" />
              {campus} Campus
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
