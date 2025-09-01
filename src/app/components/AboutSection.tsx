"use client";


"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-[#1E242C] text-white px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl">

        {/* Left Side - Text with Arrow */}
        <div className="flex flex-col gap-6 relative">
          {/* Arrow image positioned left */}

          <div className="flex-1 max-w-xl text-white relative">
            {/* Top-left SVG icon */}
            <Image
              src="/music.svg" // put your svg in /public
              alt="Note Icon"
              width={40}
              height={40}
              className="absolute -top-30 -left-5 "
            />

            <h2 className="text-5xl font-extrabold mb-6 flex items-center gap-3">
              About <span className="text-cyan-400 ml-2">me</span>
              <Image
                src="/lightbulb.svg" // replace with your SVG path
                alt="Decoration Icon"
                width={40}
                height={40}
                className="inline-block"
              />
            </h2>


            <p className="text-gray-300 leading-relaxed">
              I’m Guwanch Haldurdyyev, a passionate Mobile Developer with 4+ years of
              experience building modern Android and iOS applications. I enjoy crafting
              clean, scalable, and user-friendly solutions with Kotlin and Swift, focusing
              on smooth performance and intuitive design.
            </p>

            {expanded && (
              <p className="text-gray-300 leading-relaxed mt-4">
                Over the years, I’ve worked on apps with subscription management, video
                streaming, and restaurant platforms — published on both Google Play and the
                App Store. My expertise spans Firebase integration, CI/CD pipelines, and
                performance optimization. I love tackling challenging problems and creating
                mobile experiences that people enjoy using every day.
              </p>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-cyan-400 hover:underline font-semibold"
            >
              {expanded ? "Read less" : "Read more"}
            </button>

            {/* Bottom-left SVG */}
            <Image
              src="/arrow_upp.svg"
              alt="Curve Arrow"
              width={80}
              height={80}
              className={`absolute right-30 ${expanded ? "top-80" : "top-60"}`}
            />

          </div>


        </div>


        {/* Right Side - Illustration */}
        <div className="relative w-[400px] h-[400px] pr-0 ml-auto">
          {/* Background Image */}
          <Image
            src="/bg_about.png"
            alt="Background"
            fill
            className="object-contain"
            priority
          />

          {/* Person Illustration */}
          <Image
            src="/person_about.png"
            alt="Person"
            width={300}
            height={300}
            className="absolute top-40 right-30"
            priority
          />
        </div>

      </div>



    </section>
  );
}
