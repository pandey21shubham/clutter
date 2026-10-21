'use client'

import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav
      className="lg:px-20 md:px-14 sm:px-8 px-5
        lg:h-28 md:h-24 sm:h-20 h-16 gap-2
        bg-amber-950 flex justify-between items-center"
    >
      <Sidebar />

      <div
        className="logo font-extrabold text-lime-100
        lg:text-5xl md:text-4xl text-2xl
        [text-shadow:2px_2px_0px_#65a30d,4px_4px_0px_#3f6212,6px_6px_10px_rgba(0,0,0,0.5)]
        transition-all duration-300 hover:text-lime-50 cursor-default
        hover:[text-shadow:2px_2px_0px_#65a30d,4px_4px_0px_#3f6212,0_0_20px_rgba(190,242,100,0.7)]"
      >
        Clutter
      </div>
      <ul className="hidden sm:flex justify-center items-center md:gap-5 gap-3 font-bold text-amber-50">
        <Link href="/">
          {" "}
          <li className="cursor-pointer transition-all duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_15px_rgba(190,242,100,0.5)]">
            Home
          </li>{" "}
        </Link>
        <Link href="/about">
          {" "}
          <li className="cursor-pointer transition-all duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_15px_rgba(190,242,100,0.5)]">
            About
          </li>{" "}
        </Link>
        <Link href="/shorten">
          {" "}
          <li className="cursor-pointer transition-all duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_15px_rgba(190,242,100,0.5)]">
            Shorten
          </li>{" "}
        </Link>
        <Link href="/contact">
          {" "}
          <li className="cursor-pointer transition-all duration-300 hover:text-lime-200 hover:drop-shadow-[0_0_15px_rgba(190,242,100,0.5)]">
            Contact Us
          </li>{" "}
        </Link>
        <li className="flex gap-2">
          <Link href="/shorten">
            <button className="flex items-center gap-2 bg-amber-100 hover:bg-amber-50 rounded-full lg:p-3 md:p-2 sm:p-1 cursor-pointer text-amber-900 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(253,230,138,0.8)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {" "}
                <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />{" "}
                <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />{" "}
              </svg>
              <span>Try Now</span>
            </button>
          </Link>
          <Link href="/github">
            <button className="flex items-center gap-2 bg-amber-100 hover:bg-amber-50 rounded-full lg:p-3 md:p-2 sm:p-1 cursor-pointer text-amber-900 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(253,230,138,0.8)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 1.92 3.72 1.47.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.23-5.08 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              <span>GitHub</span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
