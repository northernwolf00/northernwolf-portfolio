import { Github, Package, ExternalLink, Globe } from "lucide-react";
import type { Project } from "@/data/projects";

type LinkDef = { key: keyof Project["links"]; label: string };

const linkDefs: LinkDef[] = [
  { key: "playStore", label: "Google Play" },
  { key: "appStore", label: "App Store" },
  { key: "pubDev", label: "pub.dev" },
  { key: "github", label: "GitHub" },
  { key: "website", label: "Website" },
];

function IconFor(key: keyof Project["links"]) {
  if (key === "github") return Github;
  if (key === "pubDev") return Package;
  if (key === "website") return Globe;
  return ExternalLink;
}

export function primaryLink(project: Project): string | undefined {
  const { playStore, appStore, pubDev, github, website } = project.links;
  return playStore ?? appStore ?? pubDev ?? github ?? website;
}

export default function ProjectLinks({ project }: { project: Project }) {
  const available = linkDefs.filter(({ key }) => project.links[key]);
  if (available.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {available.map(({ key, label }) => {
        const Icon = IconFor(key);
        return (
          <a
            key={key}
            href={project.links[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all active:scale-95 shadow-sm"
          >
            <Icon className="w-4 h-4 text-cyan-400" />
            <span>{label}</span>
          </a>
        );
      })}
    </div>
  );
}

