"use client";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

export default function Home() {
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = "home";

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
          }
        }
      });

      const lastSection = document.getElementById("contact");
      if (lastSection) {
        const lastSectionTop = lastSection.offsetTop;
        if (scrollPosition >= lastSectionTop) {
          currentSection = "contact";
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="min-h-screen bg-[#1E242C] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-3 sm:px-4 md:px-6 lg:px-10 py-3 sm:py-4 bg-[#222831]/95 backdrop-blur-md shadow-lg shadow-black/10 z-50 border-b border-white/5">
        <h1 className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2">
          <img src="/horse2.png" alt="GoogaDev Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline">GoogaDev</span>
          <span className="sm:hidden">GD</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center">
          {sections.map((id) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer transition-all duration-300 text-sm lg:text-base font-medium px-3 py-1.5 rounded-full ${active === id
                ? "text-cyan-400 bg-cyan-400/10"
                : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
            >
              {id === "home" ? "Home" :
                id === "about" ? "About Me" :
                  id === "projects" ? "Projects" : "Contact"}
            </li>
          ))}


          <li className="flex items-center">
            <Link
              href="/blocs"
              className="relative group px-4 py-1.5 rounded-full overflow-hidden transition-all duration-300 active:scale-95 flex items-center h-fit"
            >
              <span className="relative z-10 text-sm lg:text-base font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                Blocs
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-100 group-hover:opacity-20 transition-opacity rounded-full"></div>
              <div className="absolute inset-0 border border-cyan-400/20 group-hover:border-cyan-400/50 rounded-full transition-colors"></div>
              <div className="absolute inset-0 bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </Link>
          </li>


        </ul>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-b from-[#222831] to-[#1E242C] backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden">
            <ul className="flex flex-col py-4 px-4 gap-2">
              {sections.map((id) => (
                <li
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`cursor-pointer transition-all duration-300 px-4 py-3 rounded-xl text-sm font-medium active:scale-95 ${active === id
                    ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20"
                    : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                >
                  {id === "home" ? "🏠 Home" :
                    id === "about" ? "👤 About Me" :
                      id === "projects" ? "💼 Projects" : "📧 Contact"}
                </li>
              ))}


              <li className="list-none mt-2">
                <Link
                  href="/blocs"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-base font-bold transition-all duration-300 active:scale-[0.98] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400 shadow-lg shadow-cyan-500/5"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Blocs</span>
                </Link>
              </li>

            </ul>
          </div>
        )}

      </nav>
      {/* Sections */}
      <HomeSection />

      {/* About Me Section */}
      <div id="about" className="h-screen flex flex-col items-center justify-center bg-[#1E242C] px-10 text-center">
        <AboutSection />
      </div>

      {/* Projects Section - Using Image Component */}
      <div
        id="projects"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10"
      >
        {/* Background Image using Next.js Image component */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <Image
            src="/bg_project.png"
            alt="Background Pattern"
            fill
            className="object-contain scale-100 opacity-10"
            priority={false}
          />
        </div> */}

        {/* Content */}
        <div className="relative z-10 w-full">
          <ProjectsSection />
        </div>
      </div>

      {/* Alternative approach using Tailwind classes (if the above doesn't work) */}
      {/* 
      <div 
        id="projects" 
        className="relative h-screen flex flex-col items-center justify-center text-center px-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg_project.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <ProjectsSection />
        </div>
      </div>
      */}

      {/* Contact Section */}
      <div id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/background_pattern.svg"
          alt="Background Pattern"
          fill
          className="object-cover opacity-10"
          priority={false}
        />

        {/* Content */}
        <div className="relative z-10 w-full">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}