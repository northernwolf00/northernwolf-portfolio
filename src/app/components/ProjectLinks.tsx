import { Github, Package, ExternalLink } from "lucide-react";
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
    <div className="flex flex-wrap gap-2">
      {available.map(({ key, label }) => {
        const Icon = IconFor(key);
        return (
          <a
            key={key}
            href={project.links[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium hover:bg-cyan-500/20 transition-all active:scale-95"
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </a>
        );
      })}
    </div>
  );
}
