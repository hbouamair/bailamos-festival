"use client";

import { motion } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  inView?: boolean;
  viewportMargin?: string;
}

export function BlurFade({
  children,
  className = "",
  delay = 0,
  duration = 0.4,
  inView = false,
  viewportMargin = "-50px",
}: BlurFadeProps) {
  const Comp = motion.div;
  return (
    <Comp
      className={className}
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        y: inView ? 20 : 0,
      }}
      {...(inView
        ? {
            whileInView: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            },
            viewport: { once: true, margin: viewportMargin },
          }
        : {
            animate: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            },
          })}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </Comp>
  );
}
