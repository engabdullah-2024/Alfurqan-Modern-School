"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/campuses", label: "Campuses" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/principals", label: "Principals" },
    { href: "/dev", label: "Developer" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-green-700 to-black shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:py-3">
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 group"
          aria-label="Alfurqan Modern School Home"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-green-500 group-hover:ring-green-300 transition-all duration-300">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dNAD1P563iM-v3YS0VJWRW-N6d4nJhD6dQ&s"
              alt="Alfurqan Modern School Logo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <span className="text-white text-2xl font-extrabold tracking-wide group-hover:text-green-300 transition-colors duration-300">
            Alfurqan Modern School
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-white font-semibold">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-2 py-1 transition-colors duration-300 ${
                isActive(href)
                  ? "text-green-300 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-green-300"
                  : "hover:text-green-400"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-gradient-to-b from-blue-900 via-green-700 to-black shadow-inner">
          <ul className="flex flex-col space-y-2 py-4 px-6 text-white font-semibold">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                    isActive(href)
                      ? "bg-green-700 text-green-300"
                      : "hover:bg-green-600 hover:text-green-100"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
