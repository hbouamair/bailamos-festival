"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui";

const faqs = [
  {
    id: "faq-1",
    num: "01",
    question: "When and where is Bailamos?",
    answer:
      "Bailamos takes place June 12–15, 2026 at the Palais des Congrès in Marrakech, Morocco. The venue is about 15 minutes from Marrakech Menara Airport.",
  },
  {
    id: "faq-2",
    num: "02",
    question: "What's included in the full pass?",
    answer:
      "Your full pass gives you access to all workshops, parties, and social dancing across all four days. No hidden fees—just show up and dance.",
  },
  {
    id: "faq-3",
    num: "03",
    question: "Do I need a partner?",
    answer:
      "No. Bachata is social—you'll rotate in workshops and find plenty of partners on the social floor. Many attendees come solo or with friends.",
  },
  {
    id: "faq-4",
    num: "04",
    question: "Where can I stay?",
    answer:
      "We'll publish official hotel partners and discounted rates soon. There are thousands of rooms near the venue and in Marrakech city center.",
  },
  {
    id: "faq-5",
    num: "05",
    question: "When will the full artist lineup be announced?",
    answer:
      "We're revealing artists in waves. Follow us on social media and check the News section for the latest announcements.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 scroll-mt-20 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-yellow/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Centered header — pill + title + description */}
        <BlurFade inView viewportMargin="-60px" delay={0.05} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Everything you need to know</span>
          </div>
          <h2 id="faq-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Festival FAQ
          </h2>
          <p className="text-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            From travel and passes to what to expect on the dance floor—here's everything you need before landing in Marrakech.
          </p>
        </BlurFade>

        {/* Two columns: left = images, right = accordion */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left column — overlapping tilted images */}
          <BlurFade inView viewportMargin="-60px" className="order-2 lg:order-1">
            <div className="relative w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
              {/* Bottom image — tilted clockwise, behind */}
              <div
                className="absolute right-0 bottom-0 w-[85%] sm:w-[82%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-surface-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                style={{ transform: "rotate(5deg)" }}
              >
                <Image
                  src="/piqsels.com-id-ogkim.jpg"
                  alt="Bailamos Festival — Marrakech"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 85vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
              {/* Top image — overlapping, tilted clockwise, on top */}
              <div
                className="absolute left-0 top-0 w-[78%] sm:w-[75%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-surface-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] z-10"
                style={{ transform: "rotate(8deg)" }}
              >
                <Image
                  src="/Palais-des-Congres-Marrakech-2026-bart-van-kersavond-5901.jpg"
                  alt="Palais des Congrès, Marrakech"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 78vw, 38vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </BlurFade>

          {/* Right column — numbered accordion */}
          <div className="space-y-3 order-1 lg:order-2">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left hover:bg-white/[0.04] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-inset rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                    id={`${faq.id}-question`}
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-yellow tabular-nums shrink-0">{faq.num}</span>
                    <span className="font-semibold text-white flex-1 text-left">{faq.question}</span>
                    <motion.svg
                      className="shrink-0 w-5 h-5 text-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${faq.id}-answer`}
                        role="region"
                        aria-labelledby={`${faq.id}-question`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-white/[0.06]"
                      >
                        <p className="px-5 py-4 sm:px-6 sm:py-5 text-muted text-[15px] leading-relaxed pt-0">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
