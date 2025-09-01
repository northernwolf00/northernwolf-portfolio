"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#2A313A] px-10 py-20 gap-10 relative overflow-hidden"
    >
      {/* Left Side - Text */}
      <div className="flex-1 max-w-xl text-white relative">
        {/* Top-left SVG icon */}
        <Image
          src="/note.svg" // put your svg in /public
          alt="Note Icon"
          width={40}
          height={40}
          className="absolute -top-8 -left-10 opacity-70"
        />

        <h2 className="text-5xl font-extrabold mb-6">
          About <span className="text-cyan-400">me</span>
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis....
        </p>

        {expanded && (
          <p className="text-gray-300 leading-relaxed mt-4">
            Ut commodo efficitur neque. Vivamus at nibh sit amet libero
            scelerisque elementum in id nisl. Praesent non justo id sapien
            egestas tincidunt.
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
          src="/curve.svg" // put your svg in /public
          alt="Curve Arrow"
          width={80}
          height={80}
          className="absolute -bottom-10 left-0 opacity-70"
        />
      </div>

      {/* Right Side - Illustration */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-[350px] h-[350px]">
          <Image
            src="/about-1.png"
            alt="About Illustration 1"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg absolute top-0 left-0 z-10"
          />
          <Image
            src="/about-2.png"
            alt="About Illustration 2"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg absolute bottom-0 right-0 z-0 opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
