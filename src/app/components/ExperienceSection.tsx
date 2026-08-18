import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-16 sm:py-20"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-12 text-center md:text-left">
          Experience
        </h2>

        <ol className="relative">
          {/* Vertical line — sits under the dots */}
          <span
            aria-hidden="true"
            className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-white/15 to-transparent"
          />

          {experience.map((job, i) => (
            <li
              key={`${job.company}-${job.dates}`}
              className={`relative pl-10 sm:pl-14 ${
                i === experience.length - 1 ? "" : "pb-8 sm:pb-10"
              }`}
            >
              {/* Dot */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1E242C] border-2 border-cyan-400/40 flex items-center justify-center"
              >
                <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
              </span>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 hover:border-cyan-400/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {job.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-cyan-400/80 whitespace-nowrap shrink-0">
                    {job.dates}
                  </span>
                </div>

                <p className="text-sm text-gray-300 font-medium mb-3">
                  {job.company}
                  <span className="text-gray-500"> · {job.location}</span>
                </p>

                <ul className="flex flex-col gap-1.5">
                  {job.lines.map((line, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-400 leading-relaxed"
                    >
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-cyan-400/60" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
