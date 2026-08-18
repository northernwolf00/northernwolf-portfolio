import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Guwanch Haldurdyyev — ride-hailing, logistics, e-reading, open-source Flutter packages and games. Built with Flutter, Kotlin Multiplatform and Node.js.",
  openGraph: {
    title: "Projects — Guwanch Haldurdyyev",
    description:
      "Mobile & fullstack projects: ride-hailing, self-hosted map infrastructure, open-source Flutter packages and more.",
    images: [{ url: "/horse2.png", width: 512, height: 512, alt: "GoogaDev" }],
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#1E242C] text-white selection:bg-cyan-500/30">
      <SiteHeader />
      <main className="pt-28 sm:pt-32 pb-20 px-3 sm:px-4 md:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              All <span className="text-cyan-400">projects</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Products I&apos;ve shipped end-to-end — from mobile client to
              backend and deployment.
            </p>
          </div>

          <ProjectsGrid />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
