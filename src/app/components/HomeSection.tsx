"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-[#1E242C] text-white px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl">

        {/* Left Side - Text with Arrow */}
        <div className="flex flex-col gap-6 relative">
          {/* Arrow image positioned left */}
          <Image
            src="/arrow_down.png"   // place arrow.png in /public
            alt="Arrow Illustration"
            width={80}
            height={80}
            className="absolute -left-20 top-10"
          />

          {/* Heading */}
          <h1 className="text-6xl font-extrabold leading-snug">
            <span className="block text-white">Mobile</span>
            <span className="text-cyan-400 block">DEVELOPER</span>
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="px-6 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition"
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}>
              Hire me
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-800 flex items-center gap-2 hover:bg-gray-700 transition">
              <a
                href="https://docs.google.com/document/d/1JJKh6aM6jtB4bN40NZHG3S1oWaO4Eon1N0D7NwYQnig/edit?usp=sharing" 
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-gray-800 flex items-center gap-2 hover:bg-gray-700 transition"
              >
                Download CV
                <Image
                  src="/download.png" // Your PNG arrow
                  alt="Download Icon"
                  width={20}
                  height={20}
                />
              </a>

            </button>
          </div>
        </div>


        {/* Right Side - Illustration */}
        <div className="relative w-[400px] h-[400px] pr-0 ml-auto">
          {/* Background Image */}
          <Image
            src="/bg_home.png"
            alt="Background"
            fill
            className="object-contain"
            priority
          />

          {/* Person Illustration */}
          <Image
            src="/person.png"
            alt="Person"
            width={300}
            height={300}
            className="absolute top-40 right-30"
            priority
          />
        </div>

      </div>


      <div
        className="absolute bottom-10 animate-bounce cursor-pointer"
        onClick={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        <div className="p-3 bg-gray-700 rounded-md">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
