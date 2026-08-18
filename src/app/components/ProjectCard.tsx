import Link from "next/link";
import { ArrowRight, AppWindow } from "lucide-react";
import type { Project } from "@/data/projects";
import { categoryLabels } from "@/data/projects";
import ProjectLinks from "./ProjectLinks";

export default function ProjectCard({ project }: { project: Project }) {
  // Every project has its own detail page now.
  const detailHref = `/projects/${project.slug}`;
  const mainExternalHref: string | undefined = undefined;

  return (
    <div className="group relative flex flex-col h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,145,178,0.3)] shadow-2xl">
      {/* Image / icon area */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-white flex items-center justify-center p-8 sm:p-10">
        {detailHref ? (
          <Link
            href={detailHref}
            className="w-full h-full flex items-center justify-center cursor-pointer"
          >
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="max-w-full max-h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <AppWindow
                className="w-16 h-16 text-cyan-500/40"
                aria-hidden="true"
              />
            )}
          </Link>
        ) : mainExternalHref ? (
          <a
            href={mainExternalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center cursor-pointer"
          >
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="max-w-full max-h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <AppWindow
                className="w-16 h-16 text-cyan-500/40"
                aria-hidden="true"
              />
            )}
          </a>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="max-w-full max-h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <AppWindow
                className="w-16 h-16 text-cyan-500/40"
                aria-hidden="true"
              />
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-5 sm:p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/20">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] font-bold"></span>
          <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-bold">
            {project.category.map((c) => categoryLabels[c]).join(" · ")}
          </span>
          {project.year && (
            <span className="ml-auto text-[10px] font-mono text-gray-500">
              {project.year}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5 group-hover:text-cyan-300 transition-colors duration-300 flex items-center justify-between gap-2">
          {detailHref ? (
            <Link
              href={detailHref}
              className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <span>{project.name}</span>
              <ArrowRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 text-cyan-400" />
            </Link>
          ) : (
            <span>{project.name}</span>
          )}
        </h3>

        <p className="text-sm text-gray-400/90 mb-5 leading-relaxed font-medium">
          {project.tagline}
        </p>

        <div className="mt-auto flex flex-col gap-4">
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <li
                key={tag}
                className="text-[10px] px-2.5 py-1 bg-white/5 text-gray-300 rounded-lg border border-white/10 font-bold"
              >
                {tag}
              </li>
            ))}
          </ul>
          {/* Store/Repo links shown on ALL project cards */}
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
}

