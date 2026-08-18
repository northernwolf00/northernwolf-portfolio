import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://northernwolf-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Guwanch Haldurdyyev — Mobile & Fullstack Developer",
    template: "%s — Guwanch Haldurdyyev",
  },
  description:
    "Mobile & Fullstack Developer. Flutter, Kotlin Multiplatform, Android & iOS on the client; Node.js and TypeScript on the server. 20+ apps shipped on Google Play and the App Store.",
  icons: {
    icon: "/horse2.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Guwanch Haldurdyyev — Mobile & Fullstack Developer",
    description:
      "Flutter · Kotlin Multiplatform · Android & iOS · Node.js · TypeScript. 20+ apps shipped on Google Play and the App Store.",
    siteName: "Guwanch Haldurdyyev",
    images: [{ url: "/horse2.png", width: 512, height: 512, alt: "GoogaDev" }],
  },
  twitter: {
    card: "summary",
    title: "Guwanch Haldurdyyev — Mobile & Fullstack Developer",
    description:
      "Flutter · Kotlin Multiplatform · Android & iOS · Node.js · TypeScript.",
    images: ["/horse2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
