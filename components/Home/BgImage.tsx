"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BgImage() {
  const bgImage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgImage.current) return;

    // Apply static translateX immediately
    gsap.set(bgImage.current, {
      x: "-150%",
    });

    // Pin the image on scroll, but no movement animation
    ScrollTrigger.create({
      trigger: bgImage.current,
      scroller: "body",
      markers: true,
      start: "top 0%",
      end: "bottom 0%", // Adjust based on how long you want the pin
      pin: true,
    });
  }, []);

  return (
    <div className="w-full h-screen border overflow-hidden relative">
      <div ref={bgImage} className="w-full h-[70%] scale-[1.8]">
        <Image
          width={800}
          height={100}
          src="/Images/Bulding1.png"
          alt=""
          className="w-full h-full object-bottom object-cover"
        />
      </div>
    </div>
  );
}
