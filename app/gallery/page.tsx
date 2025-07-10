"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZoHXwk-HrnvVSPTX_Y6j2oHqLVB-2EQz0w&s",
    alt: "Students in science lab",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMEIt1EX0kXaKVwM8c4lWJzqhZY1CTWtve_-nCBUX55-GgDkRDUrUbkAkp52n5u7pR58&usqp=CAU",
    alt: "School campus building",
  },
  {
    src: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=800&q=80",
    alt: "Students studying outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
    alt: "Library interior",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    alt: "Group discussion in classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    alt: "School sports event",
  },
];

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-extrabold text-green-700 mb-12 text-center">
        School Gallery
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {images.map(({ src, alt }, idx) => (
          <motion.div
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            tabIndex={0}
            aria-label={alt}
          >
            <Image
              src={src}
              alt={alt}
              width={400}
              height={300}
              className="object-cover w-full h-60"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
