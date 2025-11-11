import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat ",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnoBlog",
  description:
    "InnoBlog is a modern tech blog built with Next.js and Tailwind CSS, featuring the latest technology articles, guides, and insights. Stay updated with trending topics, curated content, and a reader-friendly experience optimized for all devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.variable} antialiased font-sans bg-white`}
      >
        <div className="max-w-6xl mx-auto p-3 md:p-0 ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
