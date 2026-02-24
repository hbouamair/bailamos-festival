"use client";

import { motion } from "framer-motion";

type AnchorAttrs = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDragStart"
  | "onDragEnd"
  | "onDrag"
>;
interface ShinyButtonProps extends AnchorAttrs {
  children: React.ReactNode;
  className?: string;
}

export function ShinyButton({ children, className = "", ...props }: ShinyButtonProps) {
  return (
    <motion.a
      className={`group relative overflow-hidden rounded-full bg-red px-8 py-4 text-base font-semibold text-white transition-[background-color,transform] duration-300 ease-out hover:bg-red-light focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      />
    </motion.a>
  );
}
