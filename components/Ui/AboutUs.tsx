"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <div
        id="about"
        className="relative w-full h-screen flex justify-center items-center p-6 lg:p-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/Images/aboutbg.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* About Us Section */}
          <div className="space-y-4 p-4 z-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight font-ubuntu">
              About us
            </h2>
            <motion.div
              className="w-40 h-1 bg-[#34618B]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ transformOrigin: "left" }}
            />
            <p className="text-white/90 text-lg leading-relaxed max-w-lg">
              Travelling can be a complex equation, with many variables. At
              Juddi Connect, we have simplified it into one single emotion - Joy.
              Because that is all you need to think of, and our team of experts
              will take care of the rest.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center gap-6 w-fit">
              <Link
                href="https://www.instagram.com/"
                className="text-white hover:text-[#34618B] transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="text-white hover:text-[#34618B] transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/"
                className="text-white hover:text-[#34618B] transition-colors"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4 p-8 z-2 bg-white rounded-3xl shadow-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-ubuntu">
              How can I help?
            </h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border-b border-gray-300 py-2 focus:border-[#34618B] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-300 py-2 focus:border-[#34618B] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Number"
                  className="w-full border-b border-gray-300 py-2 focus:border-[#34618B] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="w-full border-b border-gray-300 py-2 focus:border-[#34618B] focus:outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-[#34618B] hover:bg-[#34618B]/75 text-white text-center font-semibold px-8 py-2 rounded-full transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span className="mx-auto">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
