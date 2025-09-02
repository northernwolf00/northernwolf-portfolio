"use client";
import { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  image: string;
  link: string;
  tags: string[];
  category: "Android" | "iOS" | "Work";
  description: string;
};


const projects: Project[] = [
  {
    id: 1,
    title: "106 Cargo",
    image: "/cargo.png",
    link: "https://play.google.com/store/apps/details?id=guwanchaldurdyyewProduct.kargo_app&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "A logistics app to track and manage shipments efficiently.",
  },
  {
    id: 2,
    title: "Aýdymçy",
    image: "/musicl.png",
    link: "https://play.google.com/store/apps/details?id=com.googadev.lyrics_app&hl=en",
    tags: ["#Android", "#iOS", "#KMP"],
    category: "Android",
    description: "Lyrics and music player app for discovering and listening to songs.",
  },
  {
    id: 3,
    title: "Kebapchy Menu",
    image: "/kebap.png",
    link: "",
    tags: ["#iOS",],
    category: "iOS",
    description: "Lyrics and music player app for discovering and listening to songs.",
  },
  {
    id: 4,
    title: "Aýdymçy",
    image: "/musicl.png",
    link: "https://play.google.com/store/apps/details?id=com.googadev.lyrics_app&hl=en",
    tags: ["#Android", "#iOS", "#KMP"],
    category: "Android",
    description: "Lyrics and music player app for discovering and listening to songs.",
  },
  {
    id: 5,
    title: "Flutter Cross-Platform",
    image: "/projects/flutter.png",
    link: "https://example.com/flutter",
    tags: ["#Flutter", "#CrossPlatform"],
    category: "Android",
    description: "A cross-platform Flutter project demonstrating reusable UI components.",
  },
  {
    id: 6,
    title: "Work Position UI",
    image: "/projects/work.png",
    link: "https://example.com/work",
    tags: ["#UI", "#Figma"],
    category: "Work",
    description: "UI mockup for work position management system.",
  },
  {
    id: 7,
    title: "Flutter Cross-Platform",
    image: "/projects/flutter.png",
    link: "https://example.com/flutter",
    tags: ["#Flutter", "#CrossPlatform"],
    category: "Android",
    description: "A cross-platform Flutter project demonstrating reusable UI components.",
  },
  {
    id: 8,
    title: "Work Position UI",
    image: "/projects/work.png",
    link: "https://example.com/work",
    tags: ["#UI", "#Figma"],
    category: "Work",
    description: "UI mockup for work position management system.",
  },
  {
    id: 9,
    title: "Flutter Cross-Platform",
    image: "/projects/flutter.png",
    link: "https://example.com/flutter",
    tags: ["#Flutter", "#CrossPlatform"],
    category: "Android",
    description: "A cross-platform Flutter project demonstrating reusable UI components.",
  },
  {
    id: 10,
    title: "Work Position UI",
    image: "/projects/work.png",
    link: "https://example.com/work",
    tags: ["#UI", "#Figma"],
    category: "Work",
    description: "UI mockup for work position management system.",
  },
];


const categories = ["All", "Android", "iOS", "Work"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects.filter((p) => p.category !== "Work") // exclude Work
      : projects.filter((p) => p.category === activeCategory);


  return (
    <section className="relative min-h-screen w-full flex flex-col">


      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30">
        {/* Title - Left Aligned */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12 text-left">
          <span className="text-white">My Recent</span>
          <span className="text-cyan-400 ml-2">Works</span>
        </h2>

        {/* Category Tabs - Left Aligned */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 md:px-5 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all transform hover:scale-105 ${activeCategory === cat
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                : "bg-white/10 backdrop-blur-md text-gray-200 hover:bg-cyan-600 hover:text-white border border-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-2 sm:p-3 md:p-4 rounded-xl backdrop-blur-xl bg-white/10 shadow-md flex flex-col items-center border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative w-full h-24 sm:h-28 md:h-32 mb-3 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Title */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm md:text-base font-semibold hover:text-cyan-400 transition-colors mb-1 text-center leading-tight"
              >
                {project.title}
              </a>

              {/* Project Description */}
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 text-center mb-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-400/20 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-pulse hidden md:block"></div>
    </section>
  );
}