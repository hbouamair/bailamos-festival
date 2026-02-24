"use client";

import { motion } from "framer-motion";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
  const color = fill === "white" ? "rgba(255,255,255,0.08)" : fill;
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${color}, transparent)`,
      }}
    />
  );
}
