"use client";

import { motion } from "framer-motion";
import { ShinyButton, BlurFade, ModernCard2026 } from "@/components/ui";

const benefits = [
  "Secure payment & instant confirmation",
  "Full access to all workshops and parties",
  "Name change available until one week before",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function Tickets() {
  return (
    <section
      id="tickets"
      className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden"
      aria-labelledby="tickets-heading"
    >
      {/* 2026 section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[350px] bg-yellow/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <BlurFade inView viewportMargin="-60px" delay={0.05} className="mb-10 sm:mb-12">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            2026
          </p>
          <h2 id="tickets-heading" className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 tracking-tight">
            Buy your Full Pass
          </h2>
          <p className="text-muted text-sm sm:text-base mt-3 max-w-xl">
            Secure your pass to the most anticipated bachata festival of the year.
          </p>
        </BlurFade>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
          {/* Content card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="flex flex-col gap-6"
          >
            <ModernCard2026 variant="elevated" className="p-6 sm:p-8 flex flex-col rounded-2xl border border-white/[0.06]">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Passes are limited and previous editions sold out—grab yours now to avoid last-minute surprises.
              </p>
              <ul className="mt-5 space-y-2.5 flex-1" role="list">
                {benefits.map((benefit) => (
                  <motion.li
                    key={benefit}
                    variants={item}
                    className="flex items-center gap-3 text-muted text-sm sm:text-base"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow/15 text-yellow text-xs font-medium" aria-hidden>
                      ✓
                    </span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <ShinyButton href="/tickets" className="inline-flex items-center gap-2 text-sm">
                  Secure your Pass
                  <span aria-hidden>→</span>
                </ShinyButton>
                <p className="mt-2 text-xs text-muted">Secure checkout · instant confirmation</p>
              </div>
            </ModernCard2026>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-stretch"
          >
            <ModernCard2026 variant="accent" className="min-h-[240px] sm:min-h-[280px] w-full flex items-center justify-center rounded-2xl border border-white/[0.08]">
              <span className="text-6xl sm:text-7xl opacity-60" aria-hidden>🎟️</span>
            </ModernCard2026>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
