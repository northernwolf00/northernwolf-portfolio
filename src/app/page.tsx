"use client";

import { useEffect, useState } from "react";

const sections = ["home", "about", "contact"];

export default function Home() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );
      setActive(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
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
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-[#1E242C] shadow-md z-50">
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
              {id === "home" ? "Home" : id === "about" ? "About Me" : "Contact"}
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div id="home" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Welcome to Home</h2>
      </div>
      <div
        id="about"
        className="h-screen flex items-center justify-center bg-[#2A313A]"
      >
        <h2 className="text-4xl">About Me Section</h2>
      </div>
      <div id="contact" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Contact Section</h2>
      </div>
    </div>
  );
}
