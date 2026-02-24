"use client";

import { motion } from "framer-motion";

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}>
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[300px] w-[300px] rounded-full opacity-20 blur-3xl"
          style={{
            left: `${15 + (i * 7) % 70}%`,
            top: `${(i * 11) % 100}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? "rgba(107, 33, 168, 0.4)" : i % 3 === 1 ? "rgba(250, 204, 21, 0.3)" : "rgba(185, 28, 28, 0.25)"
            } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
