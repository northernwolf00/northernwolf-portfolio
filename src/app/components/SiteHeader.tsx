"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Download } from "lucide-react";
import { site } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-3 sm:px-4 md:px-6 lg:px-10 py-3 sm:py-4 bg-[#222831]/95 backdrop-blur-md shadow-lg shadow-black/10 z-50 border-b border-white/5">
      <Link href="/" className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2">
        <img src="/horse2.png" alt="GoogaDev logo" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:inline">GoogaDev</span>
        <span className="sm:hidden">GD</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`cursor-pointer transition-all duration-300 text-sm lg:text-base font-medium px-3 py-1.5 rounded-full block ${
                isActive(pathname, href)
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={site.cv}
            download
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-sm lg:text-base font-semibold hover:from-cyan-500 hover:to-cyan-600 active:scale-95 transition-all shadow-lg shadow-cyan-500/30"
          >
            <Download className="w-4 h-4" />
            CV
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-b from-[#222831] to-[#1E242C] backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden">
          <ul className="flex flex-col py-4 px-4 gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block cursor-pointer transition-all duration-300 px-4 py-3 rounded-xl text-sm font-medium active:scale-95 ${
                    isActive(pathname, href)
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={site.cv}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-base font-bold transition-all duration-300 active:scale-[0.98] bg-gradient-to-r from-cyan-400 to-cyan-500 text-black shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
