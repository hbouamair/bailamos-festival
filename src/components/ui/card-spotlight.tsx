"use client";

import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export function CardSpotlight({ children, className = "" }: CardSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const xPercent = useTransform(x, (v) => `${v * 100}%`);
  const yPercent = useTransform(y, (v) => `${v * 100}%`);
  const gradient = useMotionTemplate`radial-gradient(400px circle at ${xPercent} ${yPercent}, rgba(107, 33, 168, 0.18), rgba(250, 204, 21, 0.06), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-1/80 backdrop-blur-xl transition-all hover:border-white/[0.12] ${className}`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: gradient }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
