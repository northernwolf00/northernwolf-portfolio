import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1E242C] border-t border-white/5 px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-center md:text-left">
          <img src="/horse2.png" alt="" width={24} height={24} className="w-6 h-6" />
          <span className="font-bold">
            {site.brand}
            <span className="text-cyan-400"> — {site.role}</span>
          </span>
        </div>

        <nav className="flex items-center gap-5 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
        </nav>

        <SocialLinks />
      </div>

      <p className="max-w-6xl mx-auto text-center md:text-left text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} {site.name}. Based in Ashgabat, Turkmenistan.
      </p>
    </footer>
  );
}
