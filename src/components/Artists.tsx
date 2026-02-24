"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui";

const artists = [
  {
    name: "Daniel & Desiree",
    role: "Headline artists",
    countries: ["🇪🇸", "🇺🇸"],
    description: "World-renowned bachata performers and instructors.",
    image: "👫",
  },
  {
    name: "Ataca & La Alemana",
    role: "Special guests",
    countries: ["🇺🇸", "🇩🇴"],
    description: "Legendary duo bringing fire to the social floor.",
    image: "💃",
  },
  {
    name: "Korke & Judith",
    role: "Workshop stars",
    countries: ["🇪🇸", "🇳🇱"],
    description: "Sensual bachata and musicality masters.",
    image: "🕺",
  },
  {
    name: "More to be announced",
    role: "Lineup",
    countries: [],
    description: "Stay tuned for the full artist reveal.",
    image: "🎤",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Artists() {
  return (
    <section
      id="artists"
      className="relative pt-28 pb-24 sm:pt-32 sm:pb-32 scroll-mt-20"
      aria-labelledby="artists-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Header — pill badge + title + subtitle */}
        <BlurFade inView viewportMargin="-80px" className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow/20 border border-yellow/30 px-4 py-2 mb-6">
            <span className="text-yellow" aria-hidden>♪</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">
              Festival Lineup
            </span>
          </div>
          <h2 id="artists-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Meet the Artists
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            World-renowned dancers and instructors ready to share their passion and expertise with you.
          </p>
        </BlurFade>

        {/* Artist cards — image area with glowing orb + event strip below */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {artists.map((artist) => (
            <motion.article
              key={artist.name}
              variants={card}
              className="group rounded-2xl overflow-hidden border border-white/[0.06] bg-surface-1/90 backdrop-blur-sm shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.4)]"
            >
              {/* Top ~2/3: Image area with radiant orb + overlaid name & flags */}
              <div className="relative aspect-[3/4] min-h-[280px] overflow-hidden">
                {/* Glowing orb background */}
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background: `
                      radial-gradient(ellipse 80% 80% at 50% 30%, rgba(250, 204, 21, 0.35) 0%, rgba(185, 28, 28, 0.15) 40%, transparent 70%),
                      radial-gradient(ellipse 60% 60% at 50% 50%, rgba(250, 204, 21, 0.2) 0%, transparent 60%)
                    `,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/20 to-transparent" />
                {/* Centered artist visual (placeholder or image) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110" aria-hidden>
                    {artist.image}
                  </span>
                </div>
                {/* Name + flags overlay at top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="font-display text-sm sm:text-base font-bold text-white uppercase tracking-wide drop-shadow-md">
                    {artist.name}
                  </span>
                  {artist.countries.length > 0 && (
                    <div className="flex gap-1" aria-hidden>
                      {artist.countries.map((flag) => (
                        <span key={flag} className="text-lg leading-none">{flag}</span>
                      ))}
                    </div>
                  )}
                </div>
                {/* Optional: subtle logo/brand at bottom of image area */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">Bailamos</span>
                </div>
              </div>

              {/* Bottom: event details strip + name + flags */}
              <div className="border-t border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-muted mb-3">
                  <span>June 12–15 2026</span>
                  <span className="text-white/30">·</span>
                  <span>Palais des Congrès</span>
                  <span className="text-white/30">·</span>
                  <span>Marrakech</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {artist.name}
                </h3>
                {artist.countries.length > 0 && (
                  <div className="flex gap-1.5 mt-2" aria-hidden>
                    {artist.countries.map((flag) => (
                      <span key={flag} className="text-sm">{flag}</span>
                    ))}
                  </div>
                )}
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow mt-1.5">
                  {artist.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
