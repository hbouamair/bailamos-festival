"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFade, ModernCard2026 } from "@/components/ui";

const sections = [
  { href: "/event", title: "The Festival", description: "Workshops, shows, and community.", icon: "🎭" },
  { href: "/venue", title: "Venue", description: "Palais des Congrès Marrakech. Location & amenities.", icon: "📍" },
  { href: "/artists", title: "Artists", description: "World-class instructors and performers.", icon: "✨" },
  { href: "/schedule", title: "Schedule", description: "Four days of workshops and parties.", icon: "📅" },
  { href: "/tickets", title: "Tickets", description: "Full pass. Secure checkout.", icon: "🎟️" },
  { href: "/faq", title: "FAQ", description: "Travel, passes, accommodation.", icon: "❓" },
  { href: "/news", title: "News", description: "Announcements and updates.", icon: "📰" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SectionPreviews() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 scroll-mt-20"
      aria-labelledby="explore-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <BlurFade inView viewportMargin="-80px" delay={0.1} className="mb-12">
          <h2 id="explore-heading" className="font-display text-xl font-semibold text-muted tracking-wide">
            Explore the festival
          </h2>
        </BlurFade>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {sections.map((section, i) => (
            <motion.div
              key={section.href}
              variants={card}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <Link
                href={section.href}
                className={`group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl`}
              >
                <ModernCard2026
                  variant={i === 0 ? "accent" : "default"}
                  className={`h-full flex flex-col ${i === 0 ? "p-8 sm:p-10" : "p-6 sm:p-7"}`}
                >
                  <span
                    className={`text-muted transition-transform group-hover:scale-110 ${
                      i === 0 ? "text-5xl sm:text-6xl mb-6" : "text-3xl mb-4"
                    }`}
                    aria-hidden
                  >
                    {section.icon}
                  </span>
                  <h3
                    className={`font-display font-bold text-white group-hover:text-yellow transition-colors ${
                      i === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                    }`}
                  >
                    {section.title}
                  </h3>
                  <p className={`mt-1 text-muted ${i === 0 ? "text-base sm:text-lg mt-2" : "text-sm"}`}>
                    {section.description}
                  </p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-yellow text-sm font-medium group-hover:gap-2.5 transition-all">
                    Learn more
                    <span aria-hidden>→</span>
                  </span>
                </ModernCard2026>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
