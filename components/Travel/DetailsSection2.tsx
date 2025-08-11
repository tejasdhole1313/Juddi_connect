"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type DetailsSectionItem = {
  heading1: string;
  subheading1: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgImage: string;
};

type DetailsSectionProps = {
  detailContent: DetailsSectionItem;
};

export default function DetailsSection2({
  detailContent,
}: DetailsSectionProps) {
  return (
    <section className="w-full lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="space-y-8 p-6 lg:p-12 text-left"
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-ubuntu">
              {detailContent.heading1} <br />
              <span className="italic">{detailContent.subheading1}</span>
            </h2>
          </div>

          <motion.div
            className="w-40 h-1 bg-[#34618B]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ transformOrigin: "left" }}
          />

          <p className="text-lg sm:text-xl leading-relaxed max-w-lg">
            {detailContent.description}
          </p>

          {detailContent.buttonText && detailContent.buttonLink && (
            <Link href={detailContent.buttonLink}>
              <button className="group bg-[#34618B] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 cursor-pointer">
                <span>{detailContent.buttonText}</span>
              </button>
            </Link>
          )}
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="relative w-full h-96 lg:h-auto"
        >
          <Image
            src={detailContent.bgImage}
            alt="Section visual"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover w-full h-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
