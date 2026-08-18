import Image from "next/image";
import { aboutCopy } from "@/data/site";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-16 sm:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center w-full max-w-6xl mx-auto">
        {/* Left — Text */}
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-center md:text-left">
            About <span className="text-cyan-400">me</span>
          </h2>

          {aboutCopy.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-left"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right — Illustration */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] mx-auto md:ml-auto md:mr-0 order-1 md:order-2">
          <Image src="/bg_about.png" alt="" fill className="object-contain" />
          <Image
            src="/person_about.png"
            alt="Guwanch Haldurdyyev"
            width={240}
            height={240}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
