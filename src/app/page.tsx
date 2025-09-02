"use client";
import Image from "next/image";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

export default function Home() {
  const [active, setActive] = useState("home");

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
  };

  return (
    <div className="min-h-screen bg-[#1E242C] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-[#222831] shadow-md z-50">
        <h1 className="text-xl font-bold">GoogaDev</h1>
        <ul className="flex gap-8">
          {sections.map((id) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer transition-colors duration-200 ${
                active === id ? "text-blue-400" : "text-gray-300 hover:text-white"
              }`}
            >
              {id === "home" ? "Home" : 
               id === "about" ? "About Me" : 
               id === "projects" ? "Projects" : "Contact"}
            </li>
          ))}
        </ul>
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
        className="relative h-screen flex flex-col items-center justify-center text-center px-10 overflow-hidden"
      >
        {/* Background Image using Next.js Image component */}
        <Image
          src="/bg_project.png"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority={false}
        />
        
        {/* Content */}
        <div className="relative z-10">
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
      <div id="contact" className="h-screen flex items-center justify-center bg-[#2A313A]">
        <h2 className="text-4xl">Contact Section</h2>
      </div>
    </div>
  );
}