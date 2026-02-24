"use client";

import { motion } from "framer-motion";
import { BlurFade, ModernCard2026 } from "@/components/ui";

const features = [
  {
    title: "Prime location",
    description: "Minutes from the airport and city center. Easy access for international dancers.",
    icon: "📍",
  },
  {
    title: "Immersive production",
    description: "State-of-the-art sound, lighting, and staging curated for bachata lovers.",
    icon: "✨",
  },
  {
    title: "Nearby accommodation",
    description: "Thousands of hotel rooms nearby so you can rest and dance all weekend.",
    icon: "🏨",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Venue() {
  return (
    <section
      id="venue"
      className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden"
      aria-labelledby="venue-heading"
    >
      {/* 2026 section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <BlurFade inView viewportMargin="-60px" delay={0.05} className="mb-10 sm:mb-12">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            2026
          </p>
          <h2 id="venue-heading" className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 tracking-tight">
            The venue
          </h2>
        </BlurFade>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left column — intro text + venue name + features */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col gap-6"
          >
            <ModernCard2026 variant="default" className="p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                We're taking over one of Morocco's most iconic venues and turning it into a
                multi-sensory bachata universe. World-class floors, stunning production, and the
                energy of thousands of dancers under one roof.
              </p>
              <ModernCard2026 variant="accent" hover={false} className="mt-5 p-4 sm:p-5 rounded-xl border border-white/[0.08]">
                <p className="font-display font-semibold text-white">Palais des Congrès</p>
                <p className="text-muted text-sm mt-0.5">15 min from Marrakech Menara Airport</p>
              </ModernCard2026>
            </ModernCard2026>

            {/* Features — 2026 stacked design */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface-1/80 overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.25)]">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={item}
                  className={`flex gap-4 p-4 sm:p-5 ${i < features.length - 1 ? "border-b border-white/[0.06]" : ""} hover:bg-white/[0.02] transition-colors`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-xl" aria-hidden>
                    {f.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-semibold text-white">{f.title}</h3>
                    <p className="text-sm text-muted mt-0.5 leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — image only */}
          <motion.div
            className="flex flex-col"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={container}
          >
            <motion.div variants={item} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-1 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)]">
              <div className="relative w-full">
                {/* Image at natural size so card wraps the whole image */}
                <img
                  src="/Palais-des-Congres-Marrakech-2026-bart-van-kersavond-5901.jpg"
                  alt="Palais des Congrès, Marrakech — congress center facade with Moroccan architecture"
                  className="block w-full h-auto"
                  width={1920}
                  height={1280}
                />
              </div>
              <div className="flex items-center justify-center px-4 py-3 border-t border-white/[0.06] bg-white/[0.02]">
                <p className="font-display text-sm font-semibold text-white/90">Palais des Congrès</p>
                <span className="mx-2 text-white/30">·</span>
                <p className="text-sm text-muted">Marrakech</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
