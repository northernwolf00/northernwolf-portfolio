"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Clock, User } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Architecting a White-Label Mobile Application Framework",
    excerpt: "A deep dive into building a configuration-driven mobile app architecture that enables seamless multi-brand deployment from a single codebase — eliminating redundancy and accelerating time-to-market.",
    date: "April 6, 2026",
    author: "Guwanch",
    image: "/white_label.png",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "Eliminating API Boilerplate in Flutter with OpenAPI Generator",
    excerpt: "A practical guide to automating REST API client generation in Flutter using the openapi_generator package — saving hours of manual work while keeping your client code perfectly synchronized with backend contracts.",
    date: "March 20, 2026",
    author: "Guwanch",
    image: "/open_api.png",
    readTime: "5 min read",
  },

];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#1E242C] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#222831]/95 backdrop-blur-md border-b border-white/5 z-50 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group transition-all">
          <div className="p-2 rounded-full bg-white/5 group-hover:bg-cyan-400/10 transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          </div>
          <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Back to Portfolio</span>
        </Link>
        <div className="flex items-center gap-2">
          <img src="/horse2.png" alt="Logo" className="w-6 h-6" />
          <span className="font-bold text-xl tracking-tight">GoogaDev <span className="text-cyan-400">Blogs</span></span>
        </div>
        <div className="w-32 hidden md:block"></div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Articles & Insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-cyan-400">Blogs</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to my personal blog space where I share my thoughts on technology, development, and design.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 active:scale-[0.98]"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white">
                  {blog.readTime}
                </div>
              </div>

              <div className="p-6 text-left">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2 text-white">
                  {blog.title}
                </h2>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold group/btn">
                  Read Full Blog
                  <div className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
    </div>
  );
}
