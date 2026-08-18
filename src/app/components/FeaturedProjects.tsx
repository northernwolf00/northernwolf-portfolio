import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-16 sm:py-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center sm:text-left">
            Featured <span className="text-cyan-400">projects</span>
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            See all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
