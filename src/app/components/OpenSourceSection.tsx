import { Package, ArrowRight } from "lucide-react";
import { getProject } from "@/data/projects";

const sakura = getProject("sakura-epub");
const installSnippet = `dependencies:
  sakura_epub: ^1.0.0`;

export default function OpenSourceSection() {
  if (!sakura) return null;

  return (
    <section
      id="open-source"
      className="bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-16 sm:py-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 text-center md:text-left">
          Open <span className="text-cyan-400">source</span>
        </h2>

        <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row gap-8 lg:items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold mb-4">
                <Package className="w-3.5 h-3.5" />
                Published on pub.dev
              </div>

              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                {sakura.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5 max-w-xl">
                {sakura.tagline} {sakura.detail?.whatIBuilt}
              </p>

              {/* pub.dev badge (self-contained, no external asset) */}
              <a
                href={sakura.links.pubDev}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-stretch rounded-md overflow-hidden text-xs font-bold border border-white/10 mb-6 w-fit"
                aria-label="sakura_epub on pub.dev, version 1.0.0"
              >
                <span className="bg-[#2A313A] text-gray-200 px-2.5 py-1.5">
                  pub.dev
                </span>
                <span className="bg-cyan-500 text-black px-2.5 py-1.5">
                  v1.0.0
                </span>
              </a>

              <a
                href={sakura.links.pubDev}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors w-fit"
              >
                View on pub.dev
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Install snippet */}
            <div className="lg:w-80 shrink-0">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                Install
              </p>
              <pre className="rounded-xl bg-[#161b22] border border-white/10 p-4 text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                <code>{installSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
