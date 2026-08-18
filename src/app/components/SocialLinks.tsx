import { Github, Linkedin, Send, Mail } from "lucide-react";
import { site } from "@/data/site";

const items = [
  { href: site.links.github, label: "GitHub", Icon: Github },
  { href: site.links.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.links.telegram, label: "Telegram", Icon: Send },
  { href: site.links.email, label: "Email", Icon: Mail },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all active:scale-95"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
