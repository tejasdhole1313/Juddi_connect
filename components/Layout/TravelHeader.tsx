"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function TravelHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const header = useRef(null);
  const mobileMenu = useRef(null);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        header.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform,opacity",
        }
      );
    }, header);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (menuOpen && mobileMenu.current) {
      gsap.fromTo(
        mobileMenu.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // set on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useLayoutEffect(() => {
    const links = document.querySelectorAll(".nav-link-travel");

    links.forEach((link) => {
      const existingUnderline = link.querySelector(".underline-span");
      if (existingUnderline) existingUnderline.remove();

      const underline = document.createElement("span");
      underline.className = `underline-span absolute left-0 bottom-0 h-[2px] ${
        scrolled ? "bg-black" : "bg-white"
      } w-0 transition-all`;
      link.appendChild(underline);

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.out" });
      });
    });
  }, [scrolled]); // <-- 🔥 Now underline color updates when scroll state changes

  // useLayoutEffect(() => {
  //   const links = document.querySelectorAll(".nav-link-travel");

  //   links.forEach((link) => {
  //     const existingUnderline = link.querySelector(".underline-span");
  //     if (existingUnderline) existingUnderline.remove();

  //     const underline = document.createElement("span");
  //     underline.className =
  //       "underline-span absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all";
  //     link.appendChild(underline);

  //     link.addEventListener("mouseenter", () => {
  //       gsap.to(underline, {
  //         width: "100%",
  //         duration: 0.3,
  //         ease: "power2.out",
  //       });
  //     });
  //     link.addEventListener("mouseleave", () => {
  //       gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.out" });
  //     });
  //   });
  // }, []);

  return (
    <header
      ref={header}
      className={`z-15 w-full p-4 md:px-8 lg:px-12 fixed top-0 transition-colors duration-300
        ${scrolled ? "md:bg-white md:drop-shadow-xl" : "md:bg-transparent"}
        bg-white text-black`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            width={150}
            height={70}
            src={
              isMobile
                ? "/Images/Juddi Connect Final Logo_without BG.png"
                : scrolled
                ? "/Images/Juddi Connect Final Logo_without BG.png"
                : "/Images/Juddi Connect Final Logo(White).png"
            }
            alt="Logo"
            className="w-full h-auto"
            style={{ height: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 space-x-6 relative font-semibold">
          {["Home", "About Us", "Services", "Contact Us"].map((text, idx) => {
            const href = ["#hero", "#about", "#servises", "#about"][idx];
            return (
              <Link
                key={text}
                href={`/${href}`}
                onClick={(e) => handleSmoothScroll(e, href)}
                className={`nav-link-travel relative transition ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {text}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          ref={mobileMenu}
          className="md:hidden mt-4 flex flex-col space-y-4 text-left bg-white text-black p-4 rounded font-semibold"
        >
          {["Home", "About Us", "Services", "Contact Us"].map((text, idx) => {
            const href = ["#hero", "#about", "#servises", "#about"][idx];
            return (
              <Link
                key={text}
                href={`/${href}`}
                onClick={(e) => {
                  handleSmoothScroll(e, href);
                  setMenuOpen(false);
                }}
                className="hover:text-gray-700 transition"
              >
                {text}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

// "use client";

// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";

// export default function TravelHeader() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const header = useRef(null);
//   const mobileMenu = useRef(null);

//   const handleSmoothScroll = (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
//     id: string
//   ) => {
//     e.preventDefault();
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         header.current,
//         { y: -50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           clearProps: "transform,opacity",
//         }
//       );
//     }, header);

//     return () => ctx.revert();
//   }, []);

//   useLayoutEffect(() => {
//     if (menuOpen && mobileMenu.current) {
//       gsap.fromTo(
//         mobileMenu.current,
//         { opacity: 0, y: -20 },
//         { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
//       );
//     }
//   }, [menuOpen]);

//   useLayoutEffect(() => {
//     const links = document.querySelectorAll(".nav-link-travel");

//     links.forEach((link) => {
//       // Remove old underline spans
//       const existingUnderline = link.querySelector(".underline-span");
//       if (existingUnderline) existingUnderline.remove();

//       // Create underline span
//       const underline = document.createElement("span");
//       underline.className =
//         "underline-span absolute left-0 bottom-0 h-[2px] bg-white w-0 transition-all";
//       link.appendChild(underline);

//       link.addEventListener("mouseenter", () => {
//         gsap.to(underline, {
//           width: "100%",
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       });
//       link.addEventListener("mouseleave", () => {
//         gsap.to(underline, { width: "0%", duration: 0.3, ease: "power2.out" });
//       });
//     });
//   }, []);

//   return (
//     <header
//       ref={header}
//       className={`z-15 w-full p-4 md:px-8 lg:px-12 fixed top-0
//          ${scrolled ? "bg-white drop-shadow-xl" : "bg-transparent text-black"}`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             width={150}
//             height={70}
//             src="/Images/Juddi Connect Final Logo(White).png"
//             alt="Logo"
//             className="w-full h-auto"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 relative">
//           <Link
//             href="/#hero"
//             onClick={(e) => handleSmoothScroll(e, "#hero")}
//             className="nav-link-travel relative hover:text-gray-300 transition"
//           >
//             Home
//           </Link>
//           <Link
//             href="/#about"
//             onClick={(e) => handleSmoothScroll(e, "#about")}
//             className="nav-link-travel relative hover:text-gray-300 transition"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/#servises"
//             onClick={(e) => handleSmoothScroll(e, "#servises")}
//             className="nav-link-travel relative hover:text-gray-300 transition"
//           >
//             Services
//           </Link>
//           <Link
//             href="/#about"
//             onClick={(e) => handleSmoothScroll(e, "#about")}
//             className="nav-link-travel relative hover:text-gray-300 transition"
//           >
//             Contact Us
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden ml-2"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <nav
//           ref={mobileMenu}
//           className={`"md:hidden mt-4 flex flex-col space-y-4 text-left bg-white text-black p-4 rounded"`}
//         >
//           <Link
//             href="/#hero"
//             onClick={(e) => {
//               handleSmoothScroll(e, "#hero");
//               setMenuOpen(false);
//             }}
//             className="hover:text-gray-700 transition"
//           >
//             Home
//           </Link>
//           <Link
//             href="/#about"
//             onClick={(e) => {
//               handleSmoothScroll(e, "#about");
//               setMenuOpen(false);
//             }}
//             className="hover:text-gray-700 transition"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/#servises"
//             onClick={(e) => {
//               handleSmoothScroll(e, "#servises");
//               setMenuOpen(false);
//             }}
//             className="hover:text-gray-700 transition"
//           >
//             Services
//           </Link>
//           <Link
//             href="/#about"
//             onClick={(e) => {
//               handleSmoothScroll(e, "#about");
//               setMenuOpen(false);
//             }}
//             className="hover:text-gray-700 transition"
//           >
//             Contact Us
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }
