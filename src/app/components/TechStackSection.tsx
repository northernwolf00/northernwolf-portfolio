import { techStack } from "@/data/techStack";

export default function TechStackSection() {
  return (
    <section
      id="stack"
      className="bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-16 sm:py-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 text-center md:text-left">
          Tech <span className="text-cyan-400">stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {techStack.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6"
            >
              <h3 className="text-xs uppercase tracking-widest text-cyan-400/80 font-bold mb-4">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10 font-medium hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
