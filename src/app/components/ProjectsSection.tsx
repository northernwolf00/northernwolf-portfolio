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
    title: "106 Cargo",
    image: "/cargo.png",
    link: "https://play.google.com/store/apps/details?id=guwanchaldurdyyewProduct.kargo_app&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "A logistics app to track and manage shipments efficiently.",
  },
  {
    id: 2,
    title: "Aýdymçy",
    image: "/musicl.png",
    link: "https://play.google.com/store/apps/details?id=com.googadev.lyrics_app&hl=en",
    tags: ["#Android", "#iOS", "#KMP"],
    category: "Android",
    description: "Lyrics and music player app for discovering and listening to songs.",
  },
  {
    id: 3,
    title: "Kebapchy Menu",
    image: "/kebap.png",
    link: "https://apps.apple.com/tm/app/kebapcy-menu/id6475279950",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 4,
    title: "UC DAÝY",
    image: "/ucdyy.png",
    link: "https://play.google.com/store/apps/details?id=com.gurbanov.ucdayy&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "A logistics app to track and manage shipments efficiently.",
  },
  {
    id: 5,
    title: "Balykcy Menu",
    image: "/balykchy.png",
    link: "https://play.google.com/store/apps/details?id=com.gurbanov.ucdayy&hl=en",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },

  {
    id: 6,
    title: "Mado Menu",
    image: "/balykchy.png",
    link: "https://apps.apple.com/tm/app/pikir-menu5/id6475025463",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 7,
    title: "Gala Menu",
    image: "/gala.png",
    link: "https://apps.apple.com/tm/app/gala-menu5/id6474479694",
    tags: ["#iOS", "#Flutter"],
    category: "iOS",
    description: "Digital menu app designed for restaurants.",
  },
  {
    id: 8,
    title: "Ozan",
    image: "/ozan.png",
    link: "https://play.google.com/store/apps/details?id=com.tpsadvertising.ozan&hl=en",
    tags: ["#iOS", "#Android", "#Flutter"],
    category: "Android",
    description: "eCommerce app, now updated for 2023 with Android & iOS support.",
  },

  {
    id: 9,
    title: "Picker",
    image: "/picker.png",
    link: "https://asmanexpress.com/",
    tags: ["#Android", "#Java"],
    category: "Android",
    description: "Picker App for AsmanExpres",
  },
  {
    id: 10,
    title: "DURALGA",
    image: "/duralga.png",
    link: "https://play.google.com/store/apps/details?id=com.takykcheshme.gps&hl=en",
    tags: ["#Android", "#iOS", "#Flutter"],
    category: "Android",
    description: "App Support Specialist",
  },
  {
    id: 11,
    title: "Onlaýn taksi (driver)",
    image: "/taxid.png",
    link: "https://play.google.com/store/apps/details?id=com.takykcheshme.online_taxi_driver&hl=en",
    tags: ["#Android", "#Java"],
    category: "Android",
    description: "App Support Specialist",
  },


  {
    id: 12,
    title: "Turkmenportal",
    image: "/portal.png",
    link: "https://turkmenportal.com/",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Nov 2021 - Mar 2023 | Mobile developer",
  },
  {
    id: 13,
    title: "Freelance jobs",
    image: "/freelance.png",
    link: "https://github.com/northernwolf00",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Mar 2023 - May 2023 | Mobile developer",
  },
  {
    id: 14,
    title: "Takyk Ulgam HJ",
    image: "/takyk.png",
    link: "https://takykulgam.com.tm/",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Apr 2023 - Oct 2023 | Mobile developer",
  },
  {
    id: 15,
    title: "Pikir",
    image: "/pikir.png",
    link: "https://www.pikir.biz/",
    tags: ["#Mobile developer"],
    category: "Work",
    description: "Dec 2023 - Mar 2024 | Mobile developer",
  },
  {
    id: 16,
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
    <section className="relative min-h-screen w-full flex flex-col">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-left">
          <span className="text-white">My Recent</span>
          <span className="text-cyan-400 ml-2">Works</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${activeCategory === cat
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                : "bg-white/10 backdrop-blur-md text-gray-200 hover:bg-cyan-600 hover:text-white border border-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="max-h-[70vh] overflow-y-auto scrollbar-hide pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-3 rounded-lg backdrop-blur-xl bg-white/10 shadow-md flex flex-col items-center border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >

                {/* Image */}
                <div className="relative w-full h-10 sm:h-14 md:h-38 mb-3 overflow-hidden rounded-[20px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:text-cyan-400 transition-colors mb-1 text-center"
                >
                  {project.title}
                </a>

                {/* Description */}
                <p className="text-xs text-gray-300 text-center mb-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
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
