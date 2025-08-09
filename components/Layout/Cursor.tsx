"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor.current) {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "Power2.out",
        });
      }
    };

    const mainElement = main.current;
    if (mainElement) {
      mainElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <div ref={main} className="w-full h-screen overflow-hidden">
        <div ref={cursor} className="">
          <Image
            width={30}
            height={30}
            src="/Images/plane-icon.png"
            alt="Cursor"
            className="scale-x-[-1]"
          />
        </div>
      </div>
    </>
  );
};

export default Cursor;
