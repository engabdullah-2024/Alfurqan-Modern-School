'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const posts = [
  {
    id: 1,
    slug: "back-to-school-2025",
    title: "Back to School: Welcome 2025!",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    excerpt: "Welcome students to a new year filled with knowledge and growth.",
    date: "July 1, 2025",
  },
  {
    id: 2,
    slug: "science-fair-highlights",
    title: "Science Fair Highlights",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    excerpt: "Explore the creativity of our students in this year's fair.",
    date: "June 15, 2025",
  },
  {
    id: 3,
    slug: "new-computer-lab-opens",
    title: "New Computer Lab Opens",
    image: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=800&q=80",
    excerpt: "Our state-of-the-art lab is ready for tech-driven education.",
    date: "May 20, 2025",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">Alfurqan Blog</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {posts.map(({ id, title, slug, image, excerpt, date }) => (
          <motion.article
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col">
              <time className="text-sm text-gray-500 mb-2">{date}</time>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-700 mb-4">{excerpt}</p>
              <Link
                href={`/blog/${slug}`}
                className="text-green-700 font-semibold hover:underline inline-flex items-center gap-1"
              >
                Read More <FaArrowRight className="mt-0.5" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
