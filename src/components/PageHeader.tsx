"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <motion.header
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,33,168,0.12),transparent)]" />
      <div className="absolute inset-0 glass-light opacity-40" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-5 py-10 sm:px-12 sm:py-16 text-center shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)]">
          <BlurFade delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow mb-4">
              {label}
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
          </BlurFade>
          {description && (
            <BlurFade delay={0.3}>
              <p className="mt-6 max-w-2xl mx-auto text-muted text-lg leading-relaxed">
                {description}
              </p>
            </BlurFade>
          )}
        </div>
      </div>
    </motion.header>
  );
}
