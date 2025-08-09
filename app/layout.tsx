import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import CustomLayout from "@/components/Layout/CustomLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Juddi Connect",
  description: "Tours & Travels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/Images/plane.png" type="image/x-icon" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased`}
      >
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
