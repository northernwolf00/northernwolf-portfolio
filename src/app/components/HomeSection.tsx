"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center w-full max-w-6xl">

        {/* Left Side - Text with Arrow */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 relative text-center md:text-left order-2 md:order-1">
          {/* Arrow image positioned left - hidden on mobile */}
          <Image
            src="/arrow_down.png"
            alt="Arrow Illustration"
            width={80}
            height={80}
            className="absolute -left-20 top-10 hidden lg:block"
          />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            <span className="block text-white">Mobile</span>
            <span className="text-cyan-400 block">DEVELOPER</span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10 justify-center md:justify-start">
            <button
              className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-sm sm:text-base font-semibold hover:from-cyan-500 hover:to-cyan-600 active:scale-95 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}>
              Hire me
            </button>
            <button className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/30 active:scale-95 transition-all text-sm sm:text-base font-medium">
              <a
                href="https://docs.google.com/document/d/1cpO0zwdQLYb_W3v8R2hs0Ueqxp7KjOrPj8xFg6Gp3_g/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Download CV
                <Image
                  src="/download.png"
                  alt="Download Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </a>
            </button>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] mx-auto md:ml-auto md:mr-0 order-1 md:order-2">
          {/* Background */}
          <Image
            src="/bg_home.png"
            alt="Background"
            fill
            className="object-contain"
            priority
          />

          {/* Person */}
          <Image
            src="/person.png"
            alt="Person"
            width={240}
            height={240}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto"
            priority
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs sm:text-sm text-gray-400">Scroll Down</span>
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
      </div>
    </section>
  );
}
