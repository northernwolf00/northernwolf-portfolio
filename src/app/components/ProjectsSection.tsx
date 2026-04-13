"use client";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  image: string;
  link: string;
  tags: string[];
  category: "Android" | "iOS" | "Work";
  description: string;
};

const projects: Project[] = [

  {
    id: 1,
    title: "Ahal Info",
    image: "/ahalinfo.png",
    link: "https://play.google.com/store/apps/details?id=com.googadev.ahal_info",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "Ahal Info is an application that provides information about Ahal province, Turkmenistan. It includes information about the province, its cities, districts, and other relevant information.",
  },

  {
    id: 2,
    title: "Kerwen Taxi",
    image: "/kerwentaxi.png",
    link: "https://play.google.com/store/apps/details?id=com.kerwen.taxi",
    tags: ["#Android", "#iOS", "#CMP"],
    category: "Android",
    description: "Taxi app for Turkmenistan",
  },

  {
    id: 3,
    title: "Kerwen Driver",
    image: "/kerwendriver.png",
    link: "https://play.google.com/store/apps/details?id=com.kerwen.driver",
    tags: ["#Android", "#iOS", "#CMP"],
    category: "Android",
    description: "Taxi app for Turkmenistan",
  },
  {
    id: 4,
    title: "elkitap",
    image: "/elkitap2.png",
    link: "https://play.google.com/store/apps/details?id=com.googadev.elkitap&hl=tr",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "E-kitap okamak üçin niýetlenen interaktiw kitap okalga",
  },
  {
    id: 5,
    title: "Tut courier (contributor: Shageldi Alyyew)",
    image: "/tut_courier.png",
    link: "",
    tags: ["#Android", "Kotlin"],
    category: "Android",
    description: "Courier app for Tut water delivery service",
  },

  {
    id: 6,
    title: "106 Cargo",
    image: "/cargo.png",
    link: "https://play.google.com/store/apps/details?id=guwanchaldurdyyewProduct.kargo_app&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "A logistics app to track and manage shipments efficiently.",
  },

  {
    id: 7,
    title: "Aýdymçy",
    image: "/aydymcy2.png",
    link: "https://play.google.com/store/apps/details?id=com.googadev.lyrics_app&hl=en",
    tags: ["#Android", "#iOS", "#KMP"],
    category: "Android",
    description: "Lyrics and music player app for discovering and listening to songs.",
  },

  {
    id: 8,
    title: "Jaytap (App Support Specialist)",
    image: "/jaytap.png",
    link: "https://play.google.com/store/apps/details?id=com.gurbanov.jaytap",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "Home selling and finding app for Turkmenistan",
  },
  {
    id: 9,
    title: "Kebapchy Menu",
    image: "/kebapcy.png",
    link: "https://apps.apple.com/tm/app/kebapcy-menu/id6475279950",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 10,
    title: "UC DAÝY",
    image: "/ucdyy.png",
    link: "https://play.google.com/store/apps/details?id=com.gurbanov.ucdayy&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "Game app for Turkmenistan",
  },
  {
    id: 11,
    title: "Balykcy Menu",
    image: "/balykchy.png",
    link: "https://play.google.com/store/apps/details?id=com.gurbanov.ucdayy&hl=en",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },

  {
    id: 12,
    title: "Mado Menu",
    image: "/balykchy.png",
    link: "https://apps.apple.com/tm/app/pikir-menu5/id6475025463",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 13,
    title: "Gala Menu",
    image: "/gala.png",
    link: "https://apps.apple.com/tm/app/gala-menu5/id6474479694",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 14,
    title: "Ozan",
    image: "/ozan.png",
    link: "https://play.google.com/store/apps/details?id=com.tpsadvertising.ozan&hl=en",
    tags: ["#iOS", "#Android", "#Flutter"],
    category: "Android",
    description: "eCommerce app, now updated for 2023 with Android & iOS support.",
  },

  {
    id: 15,
    title: "Picker",
    image: "/picker.png",
    link: "https://asmanexpress.com/",
    tags: ["#Android", "#Java"],
    category: "Android",
    description: "Picker App for AsmanExpres",
  },
  {
    id: 16,
    title: "DURALGA (App Support Specialis)",
    image: "/duralga.png",
    link: "https://play.google.com/store/apps/details?id=com.takykcheshme.gps&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "App Support Specialist",
  },
  {
    id: 17,
    title: "Onlaýn taksi (driver)",
    image: "/taxid.png",
    link: "https://play.google.com/store/apps/details?id=com.takykcheshme.online_taxi_driver&hl=en",
    tags: ["#Android", "#Java"],
    category: "Android",
    description: "App Support Specialist",
  },


  {
    id: 18,
    title: "Turkmenportal",
    image: "/portal.png",
    link: "https://turkmenportal.com/",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Nov 2021 - Oct 2023 | Mobile developer",
  },

  {
    id: 19,
    title: "Whale Apps",
    image: "/whale.png",
    link: "https://whaleapps.co/",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Nov 2023 - Mar 2024 | Mobile developer",
  },
  {
    id: 20,
    title: "Sanly Hyzmat",
    image: "/freelance.png",
    link: "",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Mar 2024 - Dec 2024 | Mobile developer",
  },



];

const categories = ["All", "Android", "iOS", "Work"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Filtering logic: All excludes Work
  const filteredProjects =
    activeCategory === "All"
      ? projects.filter((p) => p.category !== "Work")
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative min-h-screen w-full flex flex-col py-16 sm:py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-center md:text-left">
          <span className="text-white">My Recent</span>
          <span className="text-cyan-400 ml-2">Works</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all transform active:scale-95 hover:scale-105 ${activeCategory === cat
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                : "bg-white/10 backdrop-blur-md text-gray-200 hover:bg-cyan-600 hover:text-white border border-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="w-full pb-10 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-700 active:scale-[0.98] sm:hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(8,145,178,0.3)] shadow-2xl"
              >
                {/* Shine Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-20"></div>

                {/* Image Container with Icon Optimization */}
                <div className={`relative w-full aspect-[1058/992] overflow-hidden bg-white flex items-center justify-center transition-colors duration-500 p-8 sm:p-12`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>

                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-cyan-950 text-base font-bold rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100 flex items-center gap-2 shadow-xl hover:bg-cyan-50 active:scale-90"
                    >
                      Explore Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative p-5 sm:p-6 flex flex-col flex-grow z-10 bg-gradient-to-b from-transparent to-black/20">
                  {/* Category Indicator */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                    <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-bold">{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5 group-hover:text-cyan-300 transition-colors duration-300 flex items-center justify-between">
                    {project.title}
                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-50 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400/90 mb-6 line-clamp-3 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Spacer to push tags to bottom */}
                  <div className="mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-[10px] px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/10 font-bold hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Bloom Glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-400/20 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-pulse hidden md:block"></div>
    </section>
  );
}
