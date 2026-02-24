"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  children,
  className = "",
  duration = 4,
  borderWidth = 2,
  colorFrom = "#6b21a8",
  colorTo = "#facc15",
}: BorderBeamProps) {
  return (
    <div className={`relative rounded-2xl ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-90"
        style={{
          background: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration, repeat: Infinity, repeatType: "loop" }}
      />
      <div
        className="absolute rounded-xl bg-background"
        style={{ inset: borderWidth, zIndex: 1 }}
      >
        {children}
      </div>
    </div>
  );
}
