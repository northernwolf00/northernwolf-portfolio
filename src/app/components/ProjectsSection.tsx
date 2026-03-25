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
    title: "Kerwen Taxi",
    image: "/kerwentaxi.png",
    link: "https://apps.apple.com/tm/app/kerwen-taxi/id6759301850",
    tags: ["#Android", "#iOS", "#CMP"],
    category: "iOS",
    description: "Taxi app for Turkmenistan",
  },

  {
    id: 4,
    title: "Kerwen Driver",
    image: "/kerwendriver.png",
    link: "https://play.google.com/store/apps/details?id=com.kerwen.driver",
    tags: ["#Android", "#iOS", "#CMP"],
    category: "Android",
    description: "Taxi app for Turkmenistan",
  },
  {
    id: 5,
    title: "elkitap",
    image: "/elkitap.png",
    link: "https://play.google.com/store/apps/details?id=com.googadev.elkitap&hl=tr",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "E-kitap okamak üçin niýetlenen interaktiw kitap okalga",
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
    image: "/musicl.png",
    link: "https://play.google.com/store/apps/details?id=com.googadev.lyrics_app&hl=en",
    tags: ["#Android", "#iOS", "#KMP"],
    category: "Android",
    description: "Lyrics and music player app for discovering and listening to songs.",
  },
  {
    id: 8,
    title: "Kebapchy Menu",
    image: "/kebap.png",
    link: "https://apps.apple.com/tm/app/kebapcy-menu/id6475279950",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 9,
    title: "UC DAÝY",
    image: "/ucdyy.png",
    link: "https://play.google.com/store/apps/details?id=com.gurbanov.ucdayy&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "Game app for Turkmenistan",
  },
  {
    id: 10,
    title: "Balykcy Menu",
    image: "/balykchy.png",
    link: "https://play.google.com/store/apps/details?id=com.gurbanov.ucdayy&hl=en",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },

  {
    id: 11,
    title: "Mado Menu",
    image: "/balykchy.png",
    link: "https://apps.apple.com/tm/app/pikir-menu5/id6475025463",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 12,
    title: "Gala Menu",
    image: "/gala.png",
    link: "https://apps.apple.com/tm/app/gala-menu5/id6474479694",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 13,
    title: "Ozan",
    image: "/ozan.png",
    link: "https://play.google.com/store/apps/details?id=com.tpsadvertising.ozan&hl=en",
    tags: ["#iOS", "#Android", "#Flutter"],
    category: "Android",
    description: "eCommerce app, now updated for 2023 with Android & iOS support.",
  },

  {
    id: 14,
    title: "Picker",
    image: "/picker.png",
    link: "https://asmanexpress.com/",
    tags: ["#Android", "#Java"],
    category: "Android",
    description: "Picker App for AsmanExpres",
  },
  {
    id: 15,
    title: "DURALGA",
    image: "/duralga.png",
    link: "https://play.google.com/store/apps/details?id=com.takykcheshme.gps&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "App Support Specialist",
  },
  {
    id: 16,
    title: "Onlaýn taksi (driver)",
    image: "/taxid.png",
    link: "https://play.google.com/store/apps/details?id=com.takykcheshme.online_taxi_driver&hl=en",
    tags: ["#Android", "#Java"],
    category: "Android",
    description: "App Support Specialist",
  },


  {
    id: 17,
    title: "Turkmenportal",
    image: "/portal.png",
    link: "https://turkmenportal.com/",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Nov 2021 - Mar 2023 | Mobile developer",
  },
  {
    id: 18,
    title: "Freelance jobs",
    image: "/freelance.png",
    link: "https://github.com/northernwolf00",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Mar 2023 - May 2023 | Mobile developer",
  },
  {
    id: 19,
    title: "Takyk Ulgam HJ",
    image: "/takyk.png",
    link: "https://takykulgam.com.tm/",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Apr 2023 - Oct 2023 | Mobile developer",
  },
  {
    id: 20,
    title: "Pikir",
    image: "/pikir.png",
    link: "https://www.pikir.biz/",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Dec 2023 - Mar 2024 | Mobile developer",
  },
  {
    id: 21,
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
        <div className="w-full pb-6 sm:pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all duration-500 active:scale-[0.98] sm:hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 sm:pb-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-2.5 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-white text-sm sm:text-base font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 shadow-lg shadow-cyan-500/50"
                    >
                      View Project
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-5">
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full border border-cyan-500/30 font-medium hover:border-cyan-400/50 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative gradient border glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl"></div>
                </div>
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
