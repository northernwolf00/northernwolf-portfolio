"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import ProjectCard from "../components/ProjectCard";

type Filter = "all" | ProjectCategory;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "mobile", label: "Mobile" },
  { key: "fullstack", label: "Fullstack" },
  { key: "open-source", label: "Open source" },
  { key: "game", label: "Games" },
];

export default function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <>
      {/* Filter chips */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
      >
        {filters.map(({ key, label }) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all active:scale-95 ${active === key
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                : "bg-white/10 backdrop-blur-md text-gray-200 hover:bg-cyan-600 hover:text-white border border-white/20"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 text-lg py-12">
          No projects found in this category.
        </p>
      )}
    </>
  );
}
