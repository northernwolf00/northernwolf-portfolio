"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Clock, User, Share2, Check, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const blocs = [
  {
    id: 1,
    title: "Architecting a White-Label Mobile Application Framework",
    excerpt: "A deep dive into building a configuration-driven mobile app architecture that enables seamless multi-brand deployment from a single codebase — eliminating redundancy and accelerating time-to-market.",
    content: `
      In modern product development, scalability is not just a technical consideration — it is a business imperative. When tasked with serving multiple clients under distinct brand identities, the conventional approach of maintaining separate codebases quickly becomes unsustainable. To address this, I designed and implemented a White-Label Mobile Application framework built around a centralized, configuration-driven architecture.

      At its core, the system is governed by a single JSON configuration file that acts as the single source of truth for every client deployment. This file encapsulates all variant-specific parameters, allowing the application to adapt dynamically without requiring any changes to the underlying source code.

      The configuration schema is structured across five primary domains:

      → Identity: Application name, icon assets, and splash screen visuals.
      → Aesthetics: Brand color palettes, typography definitions, and theme variants.
      → Feature Flags: Granular toggles for capabilities such as in-app messaging, payment gateways, and advertising modules.
      → Infrastructure: Environment-specific API endpoint routing for development, staging, and production.
      → Operations: Maintenance mode orchestration and version management controls.

      The Architectural Advantage

      The impact of this approach extends well beyond code cleanliness. By decoupling brand identity from application logic, the framework delivers measurable business value:

      - Operational Efficiency: A single build pipeline serves all clients, eliminating the overhead of parallel development tracks.
      - Simplified Maintenance: Bug fixes, performance improvements, and feature updates propagate universally — no client is left on a stale version.
      - Rapid Onboarding: Deploying a new brand requires only a new configuration file, reducing launch timelines from weeks to hours.
      - Controlled Feature Rollout: Capabilities can be enabled or disabled per client at runtime, without requiring a new release.

      For organizations building SaaS platforms or managing multi-tenant mobile products, this configuration-driven pattern represents a significant architectural investment with compounding returns. It positions your codebase to scale horizontally across clients while remaining vertically maintainable by a lean engineering team.
    `,
    date: "April 6, 2026",
    author: "Guwanch",
    image: "/white_label.png",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "Eliminating API Boilerplate in Flutter with OpenAPI Generator",
    excerpt: "A practical guide to automating REST API client generation in Flutter using the openapi_generator package — saving hours of manual work while keeping your client code perfectly synchronized with backend contracts.",
    content: `
      One of the most persistent sources of technical debt in Flutter development is the manual maintenance of API client code. As backends evolve, keeping Dart models, HTTP logic, and endpoint definitions in sync becomes a fragile, time-consuming process prone to human error. The openapi_generator package offers a principled solution: derive your entire API client directly from your OpenAPI specification.

      How It Works

      The package integrates natively with Flutter's build_runner system. Given an OpenAPI specification — whether hosted remotely or stored locally — it automatically generates a fully typed, production-ready Dart client, complete with data models, serialization logic, and endpoint abstractions.

      → Consumes a local or remote OpenAPI specification file.
      → Produces a strongly typed Dart/Flutter API client.
      → Integrates seamlessly into the existing build_runner pipeline.

      What This Eliminates

      - Hand-written HTTP request and response handling.
      - Manual JSON serialization and deserialization.
      - The ongoing effort of keeping client code aligned with backend schema changes.

      A minimal configuration is all that is required to get started:

      @Openapi(
        inputSpec: RemoteSpec(path: 'https://api.example.com/spec.json'),
        generatorName: Generator.dio,
        outputDirectory: 'api/your_api',
      )
      class ApiConfig {}

      Running the following command triggers the generation process:
      \`flutter pub run build_runner build\`

      Production Considerations

      Through practical experience, a few configurations prove especially valuable in real-world projects:

      - Leverage .openapi-generator-ignore to safeguard files that contain custom, manually authored logic from being overwritten on subsequent generations.
      - Apply dependency_overrides in the generated pubspec.yaml to resolve version conflicts without modifying the generated output directly.
      - Keep skipIfSpecUnchanged: true (the default) enabled to ensure regeneration only occurs when the specification has actually changed, preserving build performance.

      The most significant benefit emerges over time: when the backend team updates the API contract, a single command is sufficient to bring the client into full alignment. No manual review of changed endpoints, no risk of missed fields — just a reliable, automated synchronization between your mobile application and its backend services.
    `,
    date: "March 20, 2026",
    author: "Guwanch",
    image: "/open_api.png",
    readTime: "5 min read",
  },

];

export default function BlocDetailPage() {
  const params = useParams();
  const [copied, setCopied] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const id = parseInt(params.id as string);
  const bloc = blocs.find((b) => b.id === id);

  // Disable scroll when full image is shown
  useEffect(() => {
    if (showFullImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showFullImage]);

  const handleShare = () => {
    const url = `https://northernwolf-portfolio.vercel.app/blocs/${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all active:scale-95 text-sm font-medium border border-white/5"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </>
            )}
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
                <p className="text-xs">Mobile Developer</p>
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
        <div
          className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl cursor-zoom-in group"
          onClick={() => setShowFullImage(true)}
        >
          <Image
            src={bloc.image}
            alt={bloc.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium">
              Click to Expand
            </div>
          </div>
        </div>

        {/* Full Screen Image Overlay */}
        {showFullImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all duration-300"
            onClick={() => setShowFullImage(false)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setShowFullImage(false);
              }}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div
              className="relative w-full h-full max-w-7xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={bloc.image}
                alt={bloc.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              />
            </div>
          </div>
        )}

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
        {/* <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-center relative overflow-hidden">
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
        </div> */}
      </main>

      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </div>
  );
}
