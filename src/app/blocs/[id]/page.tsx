"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Clock, User, Share2, Bookmark } from "lucide-react";
import { useParams } from "next/navigation";

const blocs = [
  {
    id: 1,
    title: "The Future of Mobile Development in 2026",
    excerpt: "Exploring the latest trends in KMP, Flutter, and native development.",
    content: `
      The mobile development landscape is evolving faster than ever. As we head into 2026, several key technologies are taking center stage. 
      Kotlin Multiplatform (KMP) has matured significantly, allowing developers to share business logic across Android, iOS, and Web more seamlessly than ever before.
      
      Meanwhile, Flutter continues to dominate the cross-platform UI space with its high performance and developer-friendly experience. Native development isn't going anywhere either, as Swift and Kotlin introduce powerful new features that deepen our connection with the hardware.
      
      In this article, we'll dive deep into:
      - The rise of Compose Multiplatform
      - AI-assisted coding in mobile development
      - The importance of platform-specific optimizations
      - Predictions for the next decade of mobile apps
    `,
    date: "March 20, 2026",
    author: "Guwanch",
    image: "/bg_project.png",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Mastering Clean Architecture in React",
    excerpt: "How to structure your Next.js projects for scalability and maintainability.",
    content: `
      Clean Architecture isn't just for backend systems or mobile apps. Bringing these principles to the React and Next.js world can transform a tangled codebase into a manageable, testable masterpiece.
      
      By separating concerns into layers—Domain, Data, and Presentation—we ensure that our business logic isn't tied to the UI. This makes it easier to swap out libraries, test individual components, and scale our application as requirements grow.
      
      Key takeaways in this guide:
      - Identifying entities and use cases
      - Implementing the Repository pattern in React
      - Testing domain logic without rendering components
      - Structuring Next.js folders for Clean Architecture
    `,
    date: "March 15, 2026",
    author: "Guwanch",
    image: "/bg_home.png",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Designing for the Modern Web",
    excerpt: "A deep dive into glassmorphism, micro-animations, and premium UX.",
    content: `
      Modern web design is about more than just aesthetics; it's about creating an immersive experience that feels alive. Glassmorphism, characterized by multi-layered transparency and vibrant colors, has become a hallmark of premium UI.
      
      Adding micro-animations and subtle transitions can significantly improve user engagement by providing visual feedback and guiding the user's focus. In this deep dive, we'll explore how to balance performance with visual complexity.
      
      Topics covered:
      - CSS Backdrop-filter and blur effects
      - Creating smooth entrance animations with Framer Motion
      - Accessibility considerations for complex UI
      - The future of 3D elements in web design
    `,
    date: "March 10, 2026",
    author: "Guwanch",
    image: "/background_pattern.svg",
    readTime: "6 min read",
  },
];

export default function BlocDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const bloc = blocs.find((b) => b.id === id);

  if (!bloc) {
    return (
      <div className="min-h-screen bg-[#1E242C] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-cyan-400">Bloc Not Found</h1>
          <Link href="/blocs" className="text-gray-400 hover:text-white transition-colors">
            Return to Blocs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E242C] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#222831]/95 backdrop-blur-md border-b border-white/5 z-50 px-6 py-4 flex items-center justify-between">
        <Link href="/blocs" className="flex items-center gap-2 group transition-all">
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-cyan-400/10 transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          </div>
          <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Back to Blocs</span>
        </Link>
        <div className="flex items-center gap-2">
          <img src="/horse2.png" alt="Logo" className="w-6 h-6" />
          <span className="font-bold text-xl tracking-tight hidden sm:inline">GoogaDev <span className="text-cyan-400">Blocs</span></span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        {/* Article Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium mb-6">
            <BookOpen className="w-3 h-3" />
            <span>Articles</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            {bloc.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 border-y border-white/5 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-black border-2 border-white/10">
                G
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{bloc.author}</p>
                <p className="text-xs">Developer & Designer</p>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>{bloc.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4" />
              <span>{bloc.date}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <Image
            src={bloc.image}
            alt={bloc.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-medium mb-10 border-l-4 border-cyan-400 pl-6 italic">
            {bloc.excerpt}
          </p>
          <div className="text-gray-400 text-lg leading-loose space-y-6">
            {bloc.content.split('\n').map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
          </div>
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 blur-3xl -mr-16 -mt-16 rounded-full"></div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">Enjoyed this article?</h3>
          <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto">
            Subscribe to my newsletter to receive the latest tech insights directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 focus:border-cyan-400 transition-colors outline-none"
            />
            <button className="px-8 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold transition-all shadow-lg shadow-cyan-500/30">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </div>
  );
}
