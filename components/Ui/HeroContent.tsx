"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type HeroContentProps = {
  heading: string;
  description: string;
  buttonText: string;
  href: string;
};

export default function HeroContent({
  heading,
  description,
  buttonText,
  href,
}: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="flex items-center justify-center bg-black/60 backdrop-blur-sm p-12 lg:p-16 max-w-2xl"
    >
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight font-ubuntu">
          {heading}
        </h1>

        <motion.div
          className="w-40 h-1 bg-[#34618B]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />

        <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-lg">
          {description}
        </p>

        <Link href={href}>
          <button className="group bg-[#34618B] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 cursor-pointer">
            <span>{buttonText}</span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
