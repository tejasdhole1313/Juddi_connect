"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
// import { useState } from "react";

export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full p-4 md:px-8 lg:px-12 bg-transparent text-white relative z-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            width={150}
            height={70}
            src="/Images/Juddi Connect Final Logo_without BG.png"
            alt="Logo"
            className="w-full h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex space-x-6">
          <Link
            href="/business-travel"
            className="hover:text-gray-500 transition"
          >
            Business Travel
          </Link>
          <Link
            href="/personal-travel"
            className="hover:text-gray-500 transition"
          >
            Personal Travel
          </Link>
        </nav> */}

        {/* Social Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            <Twitter size={20} />
          </Link>

          {/* Hamburger Menu */}
          {/* <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 text-center">
          <Link
            href="/business-travel"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Business Travel
          </Link>
          <Link
            href="/personal-travel"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Personal Travel
          </Link>
        </nav>
      )} */}
    </header>
  );
}
