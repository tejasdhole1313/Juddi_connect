// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";

// export default function PersonalTravel() {
//   const [isHover, setHover] = useState(false);
//   const heroBg1 = useRef(null);
//   // const pathname = usePathname();
//   const [hasAnimatedBefore, setHasAnimatedBefore] = useState(false);

//   useEffect(() => {
//     const hasPersonalAnimationPlayed = sessionStorage.getItem(
//       "personalAnimationPlayed"
//     );

//     // if (pathname === "/" && !hasPersonalAnimationPlayed) {
//     if (!hasPersonalAnimationPlayed) {
//       const tl = gsap.timeline();

//       tl.fromTo(
//         heroBg1.current,
//         {
//           opacity: 0,
//           y: 500,
//           width: "15%",
//           height: "15%",
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.5,
//           ease: "power2.out",
//         }
//       ).to(heroBg1.current, {
//         width: "100%",
//         height: "100%",
//         duration: 1.5,
//         ease: "power2.out",
//       });

//       sessionStorage.setItem("personalAnimationPlayed", "true");
//       setHasAnimatedBefore(false);
//     } else {
//       gsap.set(heroBg1.current, {
//         opacity: 1,
//         y: 0,
//         width: "100%",
//         height: "100%",
//       });
//       setHasAnimatedBefore(true);
//     }
//   }, []);

//   return (
//     <section className="flex justify-center items-center p-6 md:px-8 lg:px-12 relative group">
//       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition ease-in duration-300 z-1"></div>
//       <div
//         ref={heroBg1}
//         className="w-[15%] h-[15%] bg-cover bg-center bg-no-repeat absolute z-0"
//         style={{ backgroundImage: `url(/Images/bg2.jpg)` }}
//       ></div>

//       {/* Motion container with scroll-based reveal */}
//       <motion.div
//         className="space-y-8 max-w-md text-center md:text-left z-2"
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{
//           delay: hasAnimatedBefore ? 0 : 3,
//           duration: 0.6,
//           ease: "easeOut",
//         }}
//       >
//         <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black group-hover:text-white transition ease-in duration-300 leading-tight font-ubuntu">
//           Personal Travel
//         </h3>

//         <motion.div
//           className="w-40 h-1 bg-[#34618B] mx-auto md:mx-0"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           style={{ transformOrigin: "left" }}
//         />

//         <motion.p
//           className="text-lg sm:text-xl text-black group-hover:text-white transition ease-in duration-300 leading-relaxed"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           Hassle-free personal travel arrangements for holidays, weekend
//           getaways, and family vacations.
//         </motion.p>

//         <Link href="/personal-travel">
//           <motion.button
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//             className="relative w-48 h-12 bg-[#34618B] text-black group-hover:text-white transition ease-in duration-300 font-semibold rounded-full hover:shadow-lg cursor-pointer overflow-hidden flex items-center justify-center"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <AnimatePresence mode="wait">
//               {isHover ? (
//                 <motion.span
//                   key="personal"
//                   initial={{ x: "-100%", opacity: 1 }}
//                   animate={{ x: "0%", opacity: 1 }}
//                   exit={{ x: "100%", opacity: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="absolute"
//                 >
//                   Personal Travel
//                 </motion.span>
//               ) : (
//                 <motion.span
//                   key="explore"
//                   initial={{ x: "-100%", opacity: 1 }}
//                   animate={{ x: "0%", opacity: 1 }}
//                   exit={{ x: "100%", opacity: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="absolute"
//                 >
//                   Explore
//                 </motion.span>
//               )}
//             </AnimatePresence>
//           </motion.button>
//         </Link>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function PersonalTravel() {
  const [isHover, setHover] = useState(false);
  const heroBg1 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Both come from bottom simultaneously
    tl.fromTo(
      heroBg1.current,
      {
        opacity: 0,
        y: 500,
        width: "15%",
        height: "15%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      }
    ).to(heroBg1.current, {
      width: "100%",
      height: "100%",
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="flex justify-center items-center p-6 md:px-8 lg:px-12 relative group">
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition ease-in duration-300 z-1"></div>
      <div
        ref={heroBg1}
        // className="w-[10%] h-[20%] bg-[#34618B] absolute z-0"
        className="w-[10%] h-[20%] bg-cover bg-center bg-no-repeat absolute z-0"
        style={{ backgroundImage: `url(/Images/bg2.jpg)` }}
      ></div>

      {/* Motion container with scroll-based reveal */}
      <motion.div
        className="space-y-8 max-w-md text-center md:text-left z-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 3, duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black group-hover:text-white transition ease-in duration-300 leading-tight font-ubuntu">
          Personal Travel
        </h3>

        {/* Accent Line */}
        <motion.div
          className="w-40 h-1 bg-[#34618B] mx-auto md:mx-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-black group-hover:text-white transition ease-in duration-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hassle-free personal travel arrangements for holidays, weekend
          getaways, and family vacations.
        </motion.p>

        <Link href="/personal-travel">
          <motion.button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative w-48 h-12 bg-[#34618B] text-black group-hover:text-white transition ease-in duration-300 font-semibold rounded-full hover:shadow-lg cursor-pointer overflow-hidden flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatePresence mode="wait">
              {isHover ? (
                <motion.span
                  key="personal"
                  initial={{ x: "-100%", opacity: 1 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute"
                >
                  Personal Travel
                </motion.span>
              ) : (
                <motion.span
                  key="explore"
                  initial={{ x: "-100%", opacity: 1 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute"
                >
                  Explore
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
