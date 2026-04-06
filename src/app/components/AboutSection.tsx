"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center w-full max-w-6xl">

        {/* Left Side - Text */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 relative order-2 md:order-1">
          <div className="flex-1 text-white relative">
            {/* Top-left SVG icon - hidden on mobile */}
            <Image
              src="/music.svg"
              alt="Note Icon"
              width={40}
              height={40}
              className="absolute -top-30 -left-5 hidden lg:block"
            />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 flex items-center justify-center md:justify-start gap-2 sm:gap-3">
              About <span className="text-cyan-400 ml-1 sm:ml-2">me</span>
              <Image
                src="/lightbulb.svg"
                alt="Decoration Icon"
                width={32}
                height={32}
                className="inline-block w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed text-center md:text-left">
              I&apos;m Guwanch Haldurdyyev, a passionate Mobile Developer with 5+ years of experience
              creating high-quality Android and iOS applications. I specialize in building clean,
              scalable, and user-friendly apps using Kotlin and Swift, with a focus on smooth
              performance and intuitive design.
            </p>

            {expanded && (
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mt-3 sm:mt-4 text-center md:text-left">
                Throughout my career, I&apos;ve developed apps across subscription management, video
                streaming, and restaurant platforms, successfully published on both Google Play and
                the App Store. My expertise includes Firebase integration, CI/CD pipelines, and
                performance optimization. I thrive on solving complex problems and crafting mobile
                experiences that delight users every day.
              </p>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 sm:mt-5 md:mt-6 px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-xs sm:text-sm md:text-base font-semibold rounded-full hover:from-cyan-500 hover:to-cyan-600 active:scale-95 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 mx-auto md:mx-0 block md:inline-block"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>

            {/* Arrow SVG - hidden on mobile */}
            <Image
              src="/arrow_upp.svg"
              alt="Curve Arrow"
              width={80}
              height={80}
              className={`absolute right-30 hidden lg:block ${expanded ? "top-80" : "top-60"}`}
            />
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] mx-auto md:ml-auto md:mr-0 order-1 md:order-2">
          {/* Background */}
          <Image
            src="/bg_about.png"
            alt="Background"
            fill
            className="object-contain"
          />

          {/* Person */}
          <Image
            src="/person_about.png"
            alt="Person"
            width={240}
            height={240}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
