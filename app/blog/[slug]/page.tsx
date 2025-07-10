// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa";

const posts = [
  {
    slug: "back-to-school-2025",
    title: "Back to School: Welcome 2025!",
    content: `
Welcome students to a brand-new academic year filled with inspiration, learning, and discovery. Alfurqan Modern School is thrilled to welcome back our students across all three campuses.

### What’s New This Year?
- Freshly renovated classrooms
- Smartboards and digital tools
- New teachers and student programs

Together, let's make 2025 a year of success!
    `,
    date: "July 1, 2025",
  },
  {
    slug: "science-fair-highlights",
    title: "Science Fair Highlights",
    content: `
This year’s Science Fair featured innovative projects across robotics, biology, and software engineering.

### Top Projects:
- AI Assistant built by Grade 12
- Solar-Powered Fridge by Grade 10
- Water Purification App by Grade 11

A big thank you to all parents and sponsors who supported the event.
    `,
    date: "June 15, 2025",
  },
  {
    slug: "new-computer-lab-opens",
    title: "New Computer Lab Opens",
    content: `
We are proud to announce a new high-tech computer lab equipped with:

- 40 modern PCs with internet
- Scratch and Python coding environments
- Dedicated STEM instructors

All students from Grade 4+ will get weekly hands-on computer sessions.
    `,
    date: "May 20, 2025",
  },
];

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 md:py-28 bg-white shadow-md rounded-xl mt-8">
      <h1 className="text-4xl font-extrabold text-green-700 mb-4 leading-snug text-center">
        {post.title}
      </h1>

      <div className="flex items-center justify-center text-gray-500 mb-8 text-sm gap-2">
        <FaCalendarAlt className="text-green-600" />
        <time>{post.date}</time>
      </div>

      <article
        className="prose prose-green prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap"
      >
        {post.content}
      </article>

      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-400">
        Alfurqan Modern School © 2025 — All rights reserved.
      </div>
    </section>
  );
}
