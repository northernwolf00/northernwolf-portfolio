export type Experience = {
  role: string;
  company: string;
  location: string;
  dates: string;
  lines: string[];
};

/** Newest first. */
export const experience: Experience[] = [
  {
    role: "Mobile Developer (Remote Contract)",
    company: "Software company, Dubai, UAE",
    location: "Dubai, UAE · Remote",
    dates: "Nov 2025 – Present",
    lines: [
      "Building a school management platform for private schools in the UAE and GCC — grades, attendance, timetables, payments and virtual classes.",
      "Set up the full test suite and CI/CD pipeline for automated builds and Play Store deployment.",
    ],
  },
  {
    role: "Freelance Mobile & Fullstack Developer",
    company: "Independent",
    location: "Ashgabat, Turkmenistan",
    dates: "Dec 2024 – Nov 2025",
    lines: [
      "Ride-hailing apps on a shared Kotlin Multiplatform core with a Node.js backend; self-hosted vector map tile infrastructure.",
      "Logistics, e-commerce and e-reading apps; published the sakura_epub package to pub.dev.",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Sanly Hyzmat",
    location: "Ashgabat · Hybrid",
    dates: "Mar 2024 – Dec 2024",
    lines: [
      "Flutter development for digital-service products on Android and iOS, with REST and Firebase integration.",
      "Store release management on Google Play Console and App Store Connect.",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Pikir",
    location: "Ashgabat · Hybrid",
    dates: "Nov 2023 – Mar 2024",
    lines: [
      "Built and published a suite of digital restaurant menu apps for iOS with multi-language menus and offline content.",
      "Handled App Store Connect submissions end-to-end.",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Kamil Ulgam",
    location: "Ashgabat · Remote",
    dates: "Mar 2023 – Oct 2023",
    lines: [
      "Delivered Flutter features for client applications in a fully remote team.",
      "Standardised project architecture on BLoC/Cubit, dependency injection and feature-based modules.",
    ],
  },
  {
    role: "Android Developer",
    company: "Turkmenportal",
    location: "Ashgabat",
    dates: "Nov 2021 – Mar 2023",
    lines: [
      "Developed and supported transport and GPS-tracking apps in Flutter and native Android.",
      "Real-time location, background services and Google Maps integration.",
    ],
  },
];
