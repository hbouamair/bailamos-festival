"use client";

import Link from "next/link";
import Image from "next/image";
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
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function VenuePageContent() {
  return (
    <div className="relative">
      {/* 2026 page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[300px] bg-yellow/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[250px] bg-purple/[0.05] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-24 pb-24 sm:pb-32">
        {/* Section 1 — About the venue */}
        <section aria-labelledby="about-venue-heading" className="scroll-mt-20">
          <BlurFade inView viewportMargin="-60px" delay={0.05} className="mb-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              2026
            </p>
            <h2 id="about-venue-heading" className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
              About the venue
            </h2>
          </BlurFade>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={container}
            className="grid gap-6 lg:grid-cols-2"
          >
            <motion.div variants={item}>
              <ModernCard2026 variant="default" className="p-6 sm:p-8 h-full rounded-2xl border border-white/[0.08]">
                <p className="text-muted text-base sm:text-lg leading-relaxed">
                  We're taking over one of Morocco's most iconic venues and turning it into a
                  multi-sensory bachata universe. World-class floors, stunning production, and the
                  energy of thousands of dancers under one roof.
                </p>
              </ModernCard2026>
            </motion.div>
            <motion.div variants={item}>
              <ModernCard2026 variant="accent" hover={false} className="p-6 sm:p-8 h-full rounded-2xl border border-white/[0.08] flex flex-col justify-center">
                <p className="font-display text-xl sm:text-2xl font-bold text-white">Palais des Congrès</p>
                <p className="text-muted text-sm sm:text-base mt-2">Marrakech, Morocco</p>
                <p className="text-yellow text-sm font-medium mt-3">15 min from Marrakech Menara Airport</p>
              </ModernCard2026>
            </motion.div>
          </motion.div>
        </section>

        {/* Section 2 — Venue image */}
        <section>
          <ModernCard2026 variant="default" className="overflow-hidden rounded-2xl border border-white/[0.08] relative aspect-video sm:aspect-[21/9]">
            <Image
              src="/Palais-des-Congres-Marrakech-2026-bart-van-kersavond-5893-18ed6ef8.webp"
              alt="Palais des Congrès, Marrakech — congress center with Moroccan flags and palm trees"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <p className="absolute bottom-5 left-5 right-5 text-center text-sm text-white/90">
              Palais des Congrès · Marrakech
            </p>
          </ModernCard2026>
        </section>

        {/* Section 3 — Why this venue (features) */}
        <section aria-labelledby="features-heading" className="scroll-mt-20">
          <BlurFade inView viewportMargin="-60px" delay={0.05} className="mb-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              2026
            </p>
            <h2 id="features-heading" className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
              Why this venue
            </h2>
          </BlurFade>
          <motion.div
            className="grid sm:grid-cols-3 gap-4 sm:gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={container}
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={item}>
                <ModernCard2026 className="p-6 sm:p-7 h-full rounded-2xl border border-white/[0.08] hover:border-white/[0.12] transition-colors">
                  <span className="text-3xl" aria-hidden>{f.icon}</span>
                  <h3 className="font-display font-bold text-white mt-4 text-lg">{f.title}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{f.description}</p>
                </ModernCard2026>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 4 — CTA */}
        <section>
          <BlurFade inView viewportMargin="-60px">
            <ModernCard2026 variant="accent" className="p-8 sm:p-10 rounded-2xl border border-yellow/20 text-center">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Ready to join us?</h3>
              <p className="text-muted mt-2 max-w-lg mx-auto">Get your pass and we'll see you on the dance floor at Palais des Congrès.</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/tickets"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-6 py-3.5 text-sm font-semibold text-white hover:bg-red-light transition-all duration-300"
                >
                  Get tickets
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.1] transition-all duration-300"
                >
                  View schedule
                </Link>
              </div>
            </ModernCard2026>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
