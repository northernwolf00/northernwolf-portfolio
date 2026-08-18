import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { flagshipProjects, getProject } from "@/data/projects";
import { categoryLabels } from "@/data/projects";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ProjectLinks from "../../components/ProjectLinks";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return flagshipProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const image = project.image ?? "/horse2.png";
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Guwanch Haldurdyyev`,
      description: project.tagline,
      images: [{ url: image, alt: `${project.name} preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.tagline,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.detail) {
    notFound();
  }

  const { detail } = project;

  return (
    <div className="min-h-screen bg-[#1E242C] text-white selection:bg-cyan-500/30">
      <SiteHeader />

      <main className="pt-28 sm:pt-32 pb-20 px-3 sm:px-4 md:px-6 lg:px-10">
        <article className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-bold">
                {project.category.map((c) => categoryLabels[c]).join(" · ")}
              </span>
              {project.year && (
                <span className="text-[10px] font-mono text-gray-500">
                  · {project.year}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              {project.name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              {project.tagline}
            </p>

            {/* Tech tags */}
            <ul className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tag) => (
                <li
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10 font-bold"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <ProjectLinks project={project} />
          </header>

          {/* The problem */}
          <Section title="The problem">
            <p className="text-gray-300 leading-relaxed">{detail.problem}</p>
          </Section>

          {/* What I built */}
          <Section title="What I built">
            <p className="text-gray-300 leading-relaxed">{detail.whatIBuilt}</p>
          </Section>

          {/* Technical challenges */}
          <Section title="Technical challenges">
            <ul className="flex flex-col gap-3">
              {detail.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Screenshots gallery — placeholder slots */}
          <Section title="Screenshots">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[9/16] rounded-2xl bg-white/5 border border-dashed border-white/15 flex flex-col items-center justify-center gap-2 text-gray-500"
                >
                  <ImageIcon className="w-6 h-6" aria-hidden="true" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">
                    TODO: image
                  </span>
                </div>
              ))}
            </div>
          </Section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 pt-8 border-t border-white/5">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">{title}</h2>
      {children}
    </section>
  );
}
