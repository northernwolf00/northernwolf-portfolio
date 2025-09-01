"use client";

import { useEffect, useState } from "react";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";

const sections = ["home", "about", "projects", "contact"];

export default function Home() {
  const [active, setActive] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100; // Adjust this value based on your navbar height
    
    let currentSection = "home";
    
    // Check each section to find which one we're currently viewing
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // If we're within this section's boundaries
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
                active === id
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {id === "home"
                ? "Home"
                : id === "about"
                ? "About Me"
                : id === "projects"
                ? "Projects"
                : "Contact"}
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <HomeSection />

      {/* About Me Section */}
      <AboutSection/>
      {/* <div
        id="about"
        className="h-screen flex flex-col items-center justify-center bg-[#2A313A] px-10 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl text-gray-300">
          Hi, I am a passionate mobile developer with experience in building
          high-quality applications. I love crafting clean UI/UX and writing
          efficient code.
        </p>
      </div> */}

      {/* Projects Section */}
      <div
        id="projects"
        className="h-screen flex flex-col items-center justify-center bg-[#1E242C] px-10 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Projects</h2>
        <p className="max-w-3xl text-gray-300">
          Here are some of my recent projects. I specialize in mobile apps
          using React Native and cross-platform solutions.
        </p>
        {/* You can add project cards/components here */}
      </div>

      {/* Contact Section */}
      <div id="contact" className="h-screen flex items-center justify-center bg-[#2A313A]">
        <h2 className="text-4xl">Contact Section</h2>
      </div>
    </div>
  );
}
