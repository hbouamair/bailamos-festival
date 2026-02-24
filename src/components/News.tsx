"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFade, ModernCard2026 } from "@/components/ui";

const newsItems = [
  {
    id: "1",
    date: "Feb 20, 2026",
    title: "First wave of artists announced",
    excerpt:
      "We're thrilled to reveal our first headline artists and workshop stars. More names coming soon.",
    href: "#",
  },
  {
    id: "2",
    date: "Feb 10, 2026",
    title: "Early bird passes sold out",
    excerpt:
      "Thank you for the incredible response. Full passes are still available—don't wait too long.",
    href: "#",
  },
  {
    id: "3",
    date: "Jan 28, 2026",
    title: "Venue & dates confirmed",
    excerpt:
      "Bailamos 2026 will take place at the Palais des Congrès in Marrakech, Morocco, June 12–15. Mark your calendars.",
    href: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function News() {
  return (
    <section
      id="news"
      className="relative py-24 sm:py-32 scroll-mt-20"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <h2 id="news-heading" className="sr-only">News and updates</h2>
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 py-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted text-base max-w-xl">
            Latest announcements and updates from the festival.
          </p>
          <Link
            href="/news"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-yellow/30 bg-yellow/10 px-4 py-2.5 text-sm font-semibold text-yellow hover:bg-yellow/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
          >
            View all posts
            <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {newsItems.map((article) => (
            <motion.article key={article.id} variants={item}>
              <Link href={article.href} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl">
                <ModernCard2026 className="p-6 h-full flex flex-col overflow-hidden group-hover:border-yellow/20">
                  <span className="inline-flex w-fit items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-muted">
                    {article.date}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-4 group-hover:text-yellow transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-yellow text-sm font-medium">
                    Read more
                    <span aria-hidden>→</span>
                  </span>
                </ModernCard2026>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
