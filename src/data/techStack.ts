export type TechGroup = {
  title: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    title: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Compose Multiplatform",
      "Jetpack Compose",
      "Android SDK",
      "Swift",
      "Flame",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "TypeScript",
      "Express",
      "REST",
      "WebSockets",
      "gRPC",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Architecture",
    items: [
      "BLoC / Cubit",
      "MVVM",
      "Clean Architecture",
      "Dependency Injection",
      "Unit & widget testing",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    items: ["Docker", "Nginx", "GitHub Actions", "CI/CD", "Gradle", "Git"],
  },
  {
    title: "Release & Monetisation",
    items: [
      "Google Play Console",
      "App Store Connect",
      "RevenueCat",
      "AdMob",
      "In-app purchases",
    ],
  },
];
