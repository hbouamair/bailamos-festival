"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShinyButton } from "@/components/ui";

const EVENT_DATE = new Date("2026-06-12T20:00:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-sm px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 min-w-[3.25rem] sm:min-w-[4.5rem] md:min-w-[5.5rem] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] transition-all hover:border-white/[0.1] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]"
      variants={item}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <span
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-nav font-bold tabular-nums text-white tracking-tight"
        aria-hidden
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted mt-1 sm:mt-1.5 font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section
      id="hero"
      className="relative min-h-dvh min-h-[100dvh] flex flex-col justify-center overflow-hidden noise"
      style={{ paddingTop: "max(7rem, env(safe-area-inset-top))", paddingBottom: "max(6rem, env(safe-area-inset-bottom))" }}
      aria-labelledby="hero-heading"
    >
      {/* Lantern background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/piqsels.com-id-ogkim.jpg')" }}
        aria-hidden
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#050508]/80" aria-hidden />
      {/* Subtle gradient tint to match site palette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(107,33,168,0.12),transparent_50%)]" aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-52 bg-gradient-to-t from-[#050508] via-[#050508]/90 to-transparent pointer-events-none" aria-hidden />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 py-4 sm:px-10 sm:py-5 lg:px-16 lg:py-6 text-center [text-shadow:0_0_40px_rgba(5,5,8,0.5),0_2px_8px_rgba(0,0,0,0.4)]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Floating pill — date & location */}
        <motion.div
          variants={item}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/[0.12] bg-black/30 backdrop-blur-sm px-3 py-2 sm:px-5 sm:py-2.5 mb-3 sm:mb-4 md:mb-5"
        >
          <span className="text-xs sm:text-sm font-medium text-yellow">June 12–15, 2026</span>
          <span className="text-white/50 hidden sm:inline">·</span>
          <span className="text-xs sm:text-sm text-white/90 text-center sm:text-left">Palais des Congrès, Marrakech</span>
        </motion.div>

        {/* Headline — logo */}
        <motion.h1
          id="hero-heading"
          className="px-2 flex justify-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          variants={item}
        >
          <Image
            src="/bailamos-logo.png"
            alt="Marrakech Bailamos Festival – 6th Edition by El Bailai"
            width={480}
            height={168}
            className="w-full max-w-[min(70vw,16rem)] sm:max-w-[20rem] md:max-w-[22rem] h-auto object-contain"
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 28rem, (max-width: 1024px) 32rem, 36rem"
          />
        </motion.h1>
        <motion.p
          className="mt-5 sm:mt-6 md:mt-8 max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white/90 leading-relaxed px-2"
          variants={item}
        >
          Where passion meets the dance floor. Four days of world-class bachata, workshops, and
          unforgettable nights.
        </motion.p>

        {/* Countdown — responsive gap and wrap */}
        <motion.div
          className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
          role="timer"
          aria-live="polite"
          aria-label="Countdown to festival"
          variants={container}
        >
          <CountdownBlock value={days} label="Days" />
          <CountdownBlock value={hours} label="Hours" />
          <CountdownBlock value={minutes} label="Mins" />
          <CountdownBlock value={seconds} label="Secs" />
        </motion.div>

        {/* CTAs — full-width on mobile for easy tap, inline on larger */}
        <motion.div
          className="mt-4 sm:mt-5 md:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl sm:max-w-none mx-auto"
          variants={item}
        >
          <ShinyButton href="/tickets" className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-6 py-3.5 sm:px-10 sm:py-4 rounded-full w-full sm:w-auto">
            Secure Your Pass
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
          </ShinyButton>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background w-full sm:w-auto"
          >
            View Schedule
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
