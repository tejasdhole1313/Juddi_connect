"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TravelFooter() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Logo Section */}
          <Link href="/" className="flex items-center justify-start">
            <Image
              width={200}
              height={100}
              src="/Images/Juddi Connect Final Logo(White).png"
              alt="Logo"
            />
          </Link>

          {/* Contact Section */}
          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-start space-x-3">
                <Mail className="w-5 h-5 text-[#7291CA]" />
                <a
                  href="mailto:support@flynstays.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  email@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <Phone className="w-5 h-5 text-[#7291CA]" />
                <a
                  href="tel:+97105659111160"
                  className="hover:text-orange-500 transition-colors"
                >
                  +91 1234567890
                </a>
              </div>
            </div>
          </div>

          {/* Business Enquiries Section */}
          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold">Business Enquiries</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-start space-x-3">
                <Mail className="w-5 h-5 text-[#7291CA]" />
                <a
                  href="mailto:sales@flynstays.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  email@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <Phone className="w-5 h-5 text-[#7291CA]" />
                <a
                  href="tel:+97105540663064"
                  className="hover:text-orange-500 transition-colors"
                >
                  +91 1234567890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-gray-400 text-sm">
          <div>© 2021 Juddi Connect. All rights reserved.</div>
          <div>
            Designed by{" "}
            <Link
              href="https://tkovr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              Moksha Solutions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
