"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type CardVariant = "default" | "elevated" | "accent";

interface ModernCard2026Props extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
}

const variantClass = {
  default: "card-2026",
  elevated: "card-2026-elevated",
  accent: "card-2026-accent",
};

export const ModernCard2026 = forwardRef<HTMLDivElement, ModernCard2026Props>(
  ({ children, variant = "default", className = "", hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`${variantClass[variant]} ${className}`}
        whileHover={hover ? { y: variant === "elevated" ? -4 : -2 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

ModernCard2026.displayName = "ModernCard2026";
