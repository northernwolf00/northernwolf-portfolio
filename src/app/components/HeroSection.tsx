import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 pt-28 pb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center w-full max-w-6xl">
        {/* Left — Text */}
        <div className="flex flex-col gap-4 sm:gap-5 text-center md:text-left order-2 md:order-1">
          <p className="text-cyan-400 font-semibold text-sm sm:text-base tracking-wide">
            {site.name}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-white">Mobile &amp; Fullstack</span>
            <span className="text-cyan-400 block">Developer</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">
            {site.subline}
          </p>

          <p className="text-base sm:text-lg text-white font-semibold">
            {site.proof}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-sm sm:text-base font-semibold hover:from-cyan-500 hover:to-cyan-600 active:scale-95 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              View projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={site.cv}
              download
              className="px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/30 active:scale-95 transition-all text-sm sm:text-base font-medium"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Secondary links */}
          <SocialLinks className="mt-4 justify-center md:justify-start" />
        </div>

        {/* Right — Illustration */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[400px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] mx-auto md:ml-auto md:mr-0 order-1 md:order-2">
          <Image
            src="/bg_home.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
          <Image
            src="/person.png"
            alt="Guwanch Haldurdyyev"
            width={240}
            height={240}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
