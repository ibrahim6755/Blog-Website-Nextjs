"use client";

import { navItems } from "@/data";
import { CircleUser, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-transparent flex items-center justify-between relative pt-4 p-4">
      {/* LOGO */}
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/assets/blog-logo.png"}
            width={42}
            height={42}
            alt="logo"
            className="invert rounded-3xl flex items-center"
          />
          <span className="font-extrabold">
            Inno<span className="text-light-green">Blog</span>{" "}
          </span>
        </Link>
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex items-center gap-8 ring-1 ring-gray-300 shadow-md rounded-2xl p-2 px-8">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className={`text-sm text-gray-400 transition-all duration-200 ${
              pathname === item.href && "font-bold text-light-green"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <CircleUser className="hidden md:block w-6 h-6 text-gray-400 cursor-pointer" />

      {/* MOBILE MENU ICON */}
      <Menu
        className="md:hidden block w-5 h-5 text-gray-400 cursor-pointer"
        onClick={() => setOpenMenu(true)}
      />

      {/* OVERLAY BACKGROUND */}
      <div
        className={`fixed inset-0 bg-black/50 z-[90] transition-opacity duration-300 ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenMenu(false)}
      ></div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 left-0 h-screen w-[70%] bg-black/90 text-white p-6 z-[100]
          transform transition-transform duration-300 ease-in-out
          ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end mb-16">
          <button className="cursor-pointer" onClick={() => setOpenMenu(false)}>
            <X />
          </button>
        </div>

        {/* NAV ITEMS */}
        {navItems.map((item, index) => (
          <div
            key={index}
            className="my-6 hover:text-light-green transition-colors duration-150"
          >
            <Link href={item.href}>{item.title}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
