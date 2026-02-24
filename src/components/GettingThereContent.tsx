"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFade, ModernCard2026 } from "@/components/ui";

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

const tips = [
  {
    title: "From Marrakech Menara Airport",
    description: "The venue is about 15 minutes by car or taxi. Taxis are available 24/7 at the airport. We recommend agreeing on the fare before departing or using a ride app.",
  },
  {
    title: "By car",
    description: "Palais des Congrès has parking facilities. Follow signs for Palais des Congrès / Congress Center. We'll share exact address and parking details closer to the festival.",
  },
  {
    title: "Public transport",
    description: "Local buses and shuttles serve the area. Check back for dedicated festival shuttle options from central Marrakech and partner hotels.",
  },
];

export function GettingThereContent() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[350px] h-[250px] bg-yellow/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-24 pb-24 sm:pb-32">
        <section aria-labelledby="getting-there-heading" className="scroll-mt-20">
          <BlurFade inView viewportMargin="-60px" delay={0.05} className="mb-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              2026
            </p>
            <h2 id="getting-there-heading" className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 tracking-tight">
              Directions & transport
            </h2>
          </BlurFade>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={container}
            className="grid gap-6 md:grid-cols-3"
          >
            {tips.map((t) => (
              <motion.div key={t.title} variants={item}>
                <ModernCard2026 className="p-6 sm:p-7 h-full rounded-2xl border border-white/[0.08]">
                  <h3 className="font-display font-bold text-white text-lg">{t.title}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{t.description}</p>
                </ModernCard2026>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section>
          <BlurFade inView viewportMargin="-60px">
            <ModernCard2026 variant="accent" className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold text-white">Palais des Congrès</h3>
                <p className="text-muted mt-1">Marrakech, Morocco · 15 min from the airport</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/venue"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.1] transition-all duration-300"
                >
                  View venue
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.1] transition-all duration-300"
                >
                  FAQ
                </Link>
              </div>
            </ModernCard2026>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
