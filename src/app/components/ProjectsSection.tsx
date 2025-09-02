"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  image: string;
  link: string;
  tags: string[];
  category: "Android" | "iOS" | "WorkPositions";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Kotlin Mobile App",
    image: "/projects/kotlin.png",
    link: "https://example.com/kotlin",
    tags: ["#Kotlin", "#Android"],
    category: "Android",
  },
  {
    id: 2,
    title: "iOS Swift App",
    image: "/projects/swift.png",
    link: "https://example.com/ios",
    tags: ["#Swift", "#iOS"],
    category: "iOS",
  },
  {
    id: 3,
    title: "Flutter Cross-Platform",
    image: "/projects/flutter.png",
    link: "https://example.com/flutter",
    tags: ["#Flutter", "#CrossPlatform"],
    category: "Android",
  },
  {
    id: 4,
    title: "Work Position UI",
    image: "/projects/work.png",
    link: "https://example.com/work",
    tags: ["#UI", "#Figma"],
    category: "WorkPositions",
  },
];

const categories = ["All", "Android", "iOS", "WorkPositions"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
    //   className="relative min-h-screen flex flex-col items-center justify-center px-10 py-20 text-center text-white overflow-hidden"
    >
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/background_pattern.svg" 
          alt="background pattern"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        My Recent Works
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-white/10 backdrop-blur-md text-gray-200 hover:bg-cyan-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 shadow-xl flex flex-col items-center border border-white/20"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-auto object-contain mb-4"
            />

            {/* Project Title */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-cyan-400 transition-colors"
            >
              {project.title}
            </a>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
