import { Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#1E242C] text-white px-3 sm:px-4 md:px-6 lg:px-10 py-16 sm:py-20"
    >
      <div className="w-full max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          Get in <span className="text-cyan-400">touch</span>
        </h2>

        <p className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-300 mb-8">
          <MapPin className="w-4 h-4 text-cyan-400" />
          Open to remote work and relocation.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href={site.links.email}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-sm sm:text-base font-semibold hover:from-cyan-500 hover:to-cyan-600 active:scale-95 transition-all shadow-lg shadow-cyan-500/30"
          >
            <Mail className="w-4 h-4" />
            {site.email}
          </a>

          <SocialLinks className="justify-center" />
        </div>
      </div>
    </section>
  );
}
