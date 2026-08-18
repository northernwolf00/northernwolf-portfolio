"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ScreenshotGallery({
  screenshots,
  name,
}: {
  screenshots: string[];
  name: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + screenshots.length) % screenshots.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, screenshots.length]);

  return (
    <>
      {/* Grid — phone-portrait frames, horizontal scroll on small screens */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {screenshots.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open screenshot ${i + 1} of ${name}`}
              className="group relative block w-full aspect-[9/19] rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all active:scale-[0.98] cursor-zoom-in"
            >
              <Image
                src={src}
                alt={`${name} screenshot ${i + 1}`}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 22vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {isOpen && openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} screenshots`}
        >
          <button
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {screenshots.length > 1 && (
            <>
              <button
                className="absolute left-3 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[110]"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex(
                    (i) =>
                      i === null
                        ? i
                        : (i - 1 + screenshots.length) % screenshots.length,
                  );
                }}
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                className="absolute right-3 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[110]"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) =>
                    i === null ? i : (i + 1) % screenshots.length,
                  );
                }}
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          <div
            className="relative h-full max-h-[85vh] aspect-[9/19]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[openIndex]}
              alt={`${name} screenshot ${openIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain rounded-lg"
              priority
            />
          </div>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-gray-400 font-mono">
            {openIndex + 1} / {screenshots.length}
          </span>
        </div>
      )}
    </>
  );
}
