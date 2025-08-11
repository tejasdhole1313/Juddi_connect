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
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>

          {/* Contact Section */}
          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-start space-x-3">
                <Mail className="w-5 h-5 text-[#7291CA]" />
                <a
                  href="mailto:info@juddiconnect.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  info@juddiconnect.com
                </a>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <Phone className="w-5 h-5 text-[#7291CA]" />
                <a
                  href="tel:+447368300597"
                  className="hover:text-orange-500 transition-colors"
                >
                   +44 7368 300597<br/>
                   +44 7480 248361
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
                  href="mailto:info@juddiconnect.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  info@juddiconnect.com
                </a>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <Phone className="w-5 h-5 text-[#7291CA]" />
                <a
                  href="tel:+447368300597"
                  className="hover:text-orange-500 transition-colors"
                >
                +44 7368 300597 <br/>
                +44 7480 248361
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
