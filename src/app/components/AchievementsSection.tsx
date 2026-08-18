import { Trophy, GraduationCap } from "lucide-react";
import { achievements, education } from "@/data/achievements";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-16 sm:py-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 text-center md:text-left">
          Achievements
        </h2>

        <ul className="flex flex-col gap-3 mb-10">
          {achievements.map((a) => (
            <li
              key={a.title}
              className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 hover:border-cyan-400/30 transition-colors"
            >
              <span className="mt-0.5 shrink-0 w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-cyan-400" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                  {a.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                  {a.detail}
                </p>
              </div>
              <span className="shrink-0 text-xs sm:text-sm font-mono text-cyan-400/80 whitespace-nowrap">
                {a.year}
              </span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
          <h3 className="text-xs uppercase tracking-widest text-cyan-400/80 font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education
          </h3>
          {education.map((e) => (
            <div key={e.degree}>
              <p className="text-sm sm:text-base font-semibold text-white">
                {e.degree}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {e.institution} — {e.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
