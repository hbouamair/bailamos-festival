"use client";

import { motion } from "framer-motion";
import { BlurFade, ModernCard2026 } from "@/components/ui";

const blocks = [
  {
    id: "experience",
    title: "The experience",
    content:
      "Bailamos is a four-day bachata festival bringing together dancers from around the world. Expect workshops with world-class artists, live performances, social dancing until the early hours, and a community that lives and breathes bachata.",
  },
  {
    id: "community",
    title: "Everyone belongs",
    content:
      "Whether you're new to the dance or a seasoned practitioner, there's a place for you on the floor. Our program includes levels for everyone—from fundamentals to advanced musicality and styling—so you can learn at your pace and connect with dancers who share your passion.",
  },
  {
    id: "join",
    title: "Join us",
    content:
      "Join us in Marrakech for unforgettable nights, new friends, and the best bachata experience of the year.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function EventContent() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="event-content-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <h2 id="event-content-heading" className="sr-only">
          About the festival
        </h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {blocks.map((block, i) => (
            <motion.div key={block.id} variants={item}>
              <ModernCard2026 variant={i === 1 ? "accent" : "default"} className="p-8 sm:p-10 h-full">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-3">
                  {block.title}
                </h3>
                <p className="mt-4 text-muted text-[15px] leading-relaxed">{block.content}</p>
              </ModernCard2026>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
