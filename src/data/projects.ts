export type ProjectCategory = "mobile" | "fullstack" | "open-source" | "game";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description?: string;
  category: ProjectCategory[];
  tech: string[];
  links: {
    playStore?: string;
    appStore?: string;
    pubDev?: string;
    github?: string;
    website?: string;
  };
  featured: boolean;
  year?: string;
  /** Optional card image (falls back to a lucide icon when absent). */
  image?: string;
  /** Screenshot gallery paths (real store screenshots, populated below). */
  screenshots?: string[];
  /** Rich detail content shown on the /projects/[slug] page when present. */
  detail?: {
    problem: string;
    whatIBuilt: string;
    challenges: string[];
  };
};

export const projects: Project[] = [
  // ─── Flagship (featured + detail pages) ───────────────────────────────
  {
    slug: "rahat-ulag",
    name: "Rahat Ulag",
    tagline:
      "City and intercity ride-hailing, built on a shared Kotlin Multiplatform core.",
    description:
      "Rahat Ulag — a modern taxi application designed for your daily commutes. It offers the easiest and most convenient way to travel within the city or between cities.",
    category: ["mobile", "fullstack"],
    tech: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Node.js",
      "Google Maps",
      "WebSockets",
      "FCM",
    ],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.googadev.rahatulag",
      appStore: "https://apps.apple.com/tm/app/rahat-ulag/id6775177997",
    },
    featured: true,
    year: "2026",
    image: "/rahat_ulag.png",
    detail: {
      problem:
        "Passengers and drivers need two apps that stay in sync in real time, on both Android and iOS, without maintaining four codebases.",
      whatIBuilt:
        "A passenger app and a driver companion sharing one KMP core, and a Node.js backend handling ride matching, trip state and pricing over WebSockets.",
      challenges: [
        "Real-time driver location streaming with acceptable battery use.",
        "Background location services surviving Android's process restrictions.",
        "Keeping trip state consistent when a phone loses connection mid-trip.",
      ],
    },
  },
  {
    slug: "map-tile-stack",
    name: "Self-hosted vector map stack",
    tagline:
      "Replaced paid map APIs with a self-hosted tile server, cutting map costs to zero.",
    category: ["fullstack"],
    tech: ["Docker", "Nginx", "Planetiler", "TileServer GL", "MapLibre"],
    links: {},
    featured: true,
    year: "2025",
    detail: {
      problem:
        "Commercial map APIs charge per map load; for a taxi app where the map is always open, that doesn't scale.",
      whatIBuilt:
        "OpenStreetMap data processed with Planetiler into vector tiles, served by TileServer GL behind an Nginx reverse proxy, containerised with Docker; MapLibre on the client.",
      challenges: [
        "Tile generation and storage sizing.",
        "HTTPS and cleartext-traffic configuration for Android and iOS ATS.",
        "Cache strategy to keep maps fast on slow mobile connections.",
      ],
    },
  },
  {
    slug: "sakura-epub",
    name: "sakura_epub",
    tagline: "Flutter package for rendering EPUB books, published on pub.dev.",
    description:
      "A powerful Flutter package for rendering EPUB books inside your app",
    category: ["open-source"],
    tech: ["Flutter", "Dart"],
    links: {
      pubDev: "https://pub.dev/packages/sakura_epub",
      github: "https://github.com/northernwolf00/sakura_epub",
    },
    featured: true,
    year: "2025",
    image: "/sakura_epub2.png",
    detail: {
      problem:
        "Flutter had no maintained EPUB renderer with the features a real reading app needs.",
      whatIBuilt:
        "An EPUB parsing and rendering engine with chapter navigation, theming, typography controls and full-text search — extracted from the reader engine behind ElKitap and published as an open package.",
      challenges: ["TODO — I will write this myself."],
    },
  },
  {
    slug: "aydymcy",
    name: "Aýdymçy",
    tagline: "Music streaming with synced lyrics and a custom backend.",
    description:
      "Lyrics and music player app for discovering and listening to songs.",
    category: ["mobile", "fullstack"],
    tech: ["#Android", "#iOS", "#KMP"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.googadev.lyrics_app&hl=en",
    },
    featured: false,
    image: "/aydymcy2.png",
    detail: {
      problem:
        "A music app needs smooth playback and synced lyrics on unreliable mobile connections.",
      whatIBuilt:
        "Streaming client with ExoPlayer and synced lyrics, backed by a Node.js REST API.",
      challenges: ["TODO"],
    },
  },
  {
    slug: "elkitap",
    name: "elkitap",
    tagline: "E-reader with an offline library and a custom EPUB engine.",
    description: "An interactive reader designed for reading e-books.",
    category: ["mobile"],
    tech: ["#Android", "#iOS", "#Flutter"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.googadev.elkitap&hl=tr",
      appStore: "https://apps.apple.com/tm/app/elkitap/id6755152607",
    },
    featured: false,
    image: "/elkitap2.png",
    detail: {
      problem:
        "Reading apps need to work fully offline and render EPUB layouts faithfully.",
      whatIBuilt:
        "An e-reader with an offline library and a custom EPUB engine, later extracted and open-sourced as sakura_epub.",
      challenges: ["TODO"],
    },
  },

  // ─── New projects (appendix) ──────────────────────────────────────────
  {
    slug: "garagum-racing",
    name: "Garagum Racing",
    tagline:
      "Physics-based racing game across four Turkmenistan landscapes.",
    category: ["game"],
    tech: ["Flutter", "Flame", "Forge2D", "RevenueCat"],
    links: {},
    featured: false,
    year: "2026",
  },
  {
    slug: "fitfriend",
    name: "fitFriend",
    tagline: "Fitness app built for the RevenueCat Shipaton hackathon.",
    category: ["mobile"],
    tech: ["Kotlin", "Android"],
    links: {
      github: "https://github.com/northernwolf00/fitFriend",
    },
    featured: false,
    year: "2025",
  },

  // ─── Existing apps carried over from the original site ────────────────
  {
    slug: "ahal-info",
    name: "Ahal Info",
    tagline:
      "Ahal Info is an application that provides information about Ahal province, Turkmenistan. It includes information about the province, its cities, districts, and other relevant information.",
    description:
      "Ahal Info is an application that provides information about Ahal province, Turkmenistan. It includes information about the province, its cities, districts, and other relevant information.",
    category: ["mobile"],
    tech: ["#Android", "#iOS", "#Flutter"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.googadev.ahal_info",
      appStore: "https://apps.apple.com/tm/app/ahal-info/id6761262219",
    },
    featured: false,
    image: "/ahalinfo.png",
  },
  {
    slug: "kerwen-taxi",
    name: "Kerwen Taxi",
    tagline: "Taxi app for Turkmenistan",
    description: "Taxi app for Turkmenistan",
    category: ["mobile"],
    tech: ["#Android", "#iOS", "#CMP"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.kerwen.taxi",
      appStore: "https://apps.apple.com/tm/app/kerwen-taxi/id6759301850",
    },
    featured: false,
    image: "/kerwentaxi.png",
  },
  {
    slug: "kerwen-driver",
    name: "Kerwen Driver",
    tagline: "Taxi app for Turkmenistan",
    description: "Taxi app for Turkmenistan",
    category: ["mobile"],
    tech: ["#Android", "#iOS", "#CMP"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.kerwen.driver",
    },
    featured: false,
    image: "/kerwendriver.png",
  },
  {
    slug: "tut-courier",
    name: "Tut courier (contributor: Sh.Alyyew)",
    tagline: "Courier app for Tut water delivery service",
    description: "Courier app for Tut water delivery service",
    category: ["mobile"],
    tech: ["#Android", "Kotlin"],
    links: {},
    featured: false,
    image: "/tut_courier.png",
  },
  {
    slug: "106-cargo",
    name: "106 Cargo",
    tagline: "A logistics app to track and manage shipments efficiently.",
    description: "A logistics app to track and manage shipments efficiently.",
    category: ["mobile"],
    tech: ["#Android", "#iOS", "#Flutter"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=guwanchaldurdyyewProduct.kargo_app&hl=en",
      appStore: "https://apps.apple.com/tm/app/106-cargo/id6474175362",
    },
    featured: false,
    image: "/cargo.png",
  },
  {
    slug: "jaytap",
    name: "Jaytap (App Support Specialist)",
    tagline: "Home selling and finding app for Turkmenistan",
    description: "Home selling and finding app for Turkmenistan",
    category: ["mobile"],
    tech: ["#Android", "#iOS", "#Flutter"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.gurbanov.jaytap",
      appStore: "https://apps.apple.com/tm/app/ja%C3%BD-tap/id6751713059",
    },
    featured: false,
    image: "/jaytap.png",
  },
  {
    slug: "kebapchy-menu",
    name: "Kebapchy Menu",
    tagline: "Digital menu app designed for restaurants.",
    description: "Digital menu app designed for restaurants.",
    category: ["mobile"],
    tech: ["#iOS", "#Flutter"],
    links: {
      appStore: "https://apps.apple.com/tm/app/kebapcy-menu/id6475279950",
    },
    featured: false,
    image: "/kebapcy.png",
  },
  {
    slug: "uc-dayy",
    name: "UC DAÝY",
    tagline: "Game app for Turkmenistan",
    description: "Game app for Turkmenistan",
    category: ["game"],
    tech: ["#Android", "#iOS", "#Flutter"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.gurbanov.ucdayy&hl=en",
    },
    featured: false,
    image: "/ucdyy.png",
  },
  {
    slug: "balykcy-menu",
    name: "Balykcy Menu",
    tagline: "Digital menu app designed for restaurants.",
    description: "Digital menu app designed for restaurants.",
    category: ["mobile"],
    tech: ["#iOS", "#Flutter"],
    links: {
      appStore: "https://apps.apple.com/tm/app/balykcy-menu/id6473086500",
    },
    featured: false,
    image: "/balykchy.png",
  },
  {
    slug: "mado-menu",
    name: "Mado Menu",
    tagline: "Digital menu app designed for restaurants.",
    description: "Digital menu app designed for restaurants.",
    category: ["mobile"],
    tech: ["#iOS", "#Flutter"],
    links: {
      appStore: "https://apps.apple.com/tm/app/pikir-menu5/id6475025463",
    },
    featured: false,
    image: "/balykchy.png",
  },
  {
    slug: "gala-menu",
    name: "Gala Menu",
    tagline: "Digital menu app designed for restaurants.",
    description: "Digital menu app designed for restaurants.",
    category: ["mobile"],
    tech: ["#iOS", "#Flutter"],
    links: {
      appStore: "https://apps.apple.com/tm/app/gala-menu5/id6474479694",
    },
    featured: false,
    image: "/gala.png",
  },
  {
    slug: "ozan",
    name: "Ozan",
    tagline: "eCommerce app, now updated for 2023 with Android & iOS support.",
    description:
      "eCommerce app, now updated for 2023 with Android & iOS support.",
    category: ["mobile"],
    tech: ["#iOS", "#Android", "#Flutter"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.tpsadvertising.ozan&hl=en",
    },
    featured: false,
    image: "/ozan.png",
  },
  {
    slug: "picker",
    name: "Picker",
    tagline: "Picker App for AsmanExpres",
    description: "Picker App for AsmanExpres",
    category: ["mobile"],
    tech: ["#Android", "#Java"],
    links: {
      website: "https://asmanexpress.com/",
    },
    featured: false,
    image: "/picker.png",
  },
  {
    slug: "duralga",
    name: "DURALGA (App Support Specialist)",
    tagline: "App Support Specialist",
    description: "App Support Specialist",
    category: ["mobile"],
    tech: ["#Android", "#iOS", "#Flutter"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.takykcheshme.gps&hl=en",
      appStore: "https://apps.apple.com/tm/app/duralga/id1607990462",
    },
    featured: false,
    image: "/duralga.png",
  },
  {
    slug: "onlayn-taksi-driver",
    name: "Onlaýn taksi (driver)",
    tagline: "App Support Specialist",
    description: "App Support Specialist",
    category: ["mobile"],
    tech: ["#Android", "#Java"],
    links: {
      playStore:
        "https://play.google.com/store/apps/details?id=com.takykcheshme.online_taxi_driver&hl=en",
    },
    featured: false,
    image: "/taxid.png",
  },
];

// Real store screenshots downloaded to /public/screenshots/<slug>/N.jpg.
// Keyed by slug → number of screenshots available.
const screenshotCounts: Record<string, number> = {
  "rahat-ulag": 7,
  aydymcy: 4,
  elkitap: 8,
  "ahal-info": 5,
  "kerwen-taxi": 6,
  "kerwen-driver": 7,
  "106-cargo": 7,
  jaytap: 5,
  "uc-dayy": 6,
  ozan: 8,
  duralga: 7,
  "onlayn-taksi-driver": 3,
  "kebapchy-menu": 3,
  "mado-menu": 3,
  "gala-menu": 3,
  "balykcy-menu": 3,
};

for (const p of projects) {
  const n = screenshotCounts[p.slug];
  if (n) {
    p.screenshots = Array.from(
      { length: n },
      (_, i) => `/screenshots/${p.slug}/${i + 1}.jpg`,
    );
  }
}

/** Every project now has a detail page. */
export const flagshipProjects = projects;

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categoryLabels: Record<ProjectCategory, string> = {
  mobile: "Mobile",
  fullstack: "Fullstack",
  "open-source": "Open source",
  game: "Games",
};
