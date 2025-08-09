"use client";

import { usePathname } from "next/navigation";
import Header from "../Home/Header";
import TravelHeader from "./TravelHeader";
import TravelFooter from "./TravelFooter";
import ScrollToTop from "./ScrollToTop";

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isTravel = pathName.includes("travel");

  return (
    <>
      {!isTravel ? <Header /> : <TravelHeader />}
      {children}
      <ScrollToTop />
      {!isTravel ? "" : <TravelFooter />}
    </>
  );
}
