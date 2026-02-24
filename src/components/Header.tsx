"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type NavChild = { label: string; href: string; icon: string };
type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Festival",
    children: [
      { label: "The Festival", href: "/event", icon: "sparkles" },
      { label: "Venue", href: "/venue", icon: "map-pin" },
      { label: "Artists", href: "/artists", icon: "users" },
      { label: "Schedule", href: "/schedule", icon: "calendar" },
      { label: "Tickets", href: "/tickets", icon: "ticket" },
    ],
  },
  {
    label: "About us",
    children: [
      { label: "About", href: "/event", icon: "info" },
      { label: "FAQ", href: "/faq", icon: "help-circle" },
      { label: "News", href: "/news", icon: "newspaper" },
    ],
  },
  {
    label: "Travel",
    children: [
      { label: "Getting there", href: "/getting-there", icon: "map" },
      { label: "Accommodation", href: "/faq", icon: "building" },
    ],
  },
  {
    label: "Support",
    children: [
      { label: "FAQ", href: "/faq", icon: "help-circle" },
      { label: "Contact", href: "#contact", icon: "mail" },
    ],
  },
];

function NavIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const c = className;
  const icons: Record<string, JSX.Element> = {
    sparkles: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    "map-pin": (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    users: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    calendar: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    ticket: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    info: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    "help-circle": (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    newspaper: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6m4 0h4m-4 0h4" />
      </svg>
    ),
    map: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    building: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    mail: (
      <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[name] ?? null;
}

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href && pathname === item.href) return true;
  return item.children?.some((c) => pathname === c.href) ?? false;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverLeaveRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = (label: string) => {
    if (hoverLeaveRef.current) {
      clearTimeout(hoverLeaveRef.current);
      hoverLeaveRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    hoverLeaveRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverLeaveRef.current) clearTimeout(hoverLeaveRef.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel"
          : "md:bg-transparent bg-[#050508]/90 backdrop-blur-md md:backdrop-blur-none border-b border-white/[0.06] md:border-transparent"
      }`}
      role="banner"
    >
      {/* Scroll progress bar */}
      <div
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-white/[0.08]"
        aria-hidden
      >
        <div
          className="h-full bg-yellow transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg transition-opacity hover:opacity-90"
          aria-label="Bailamos – Marrakech Bailamos Festival"
        >
          <Image
            src="/bailamos-logo.png"
            alt="Marrakech Bailamos Festival – 6th Edition by El Bailai"
            width={160}
            height={56}
            className="h-6 w-auto sm:h-7 lg:h-8 object-contain object-left block opacity-100 [filter:brightness(1.12)_contrast(1.05)]"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop — dropdown nav */}
        <div ref={dropdownRef} className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-1.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children?.length && handleDropdownEnter(item.label)}
              onMouseLeave={handleDropdownLeave}
            >
              {item.children && item.children.length > 0 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`font-nav flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive(pathname, item)
                        ? "bg-white/10 text-white"
                        : "text-muted hover:text-white hover:bg-white/[0.05]"
                    }`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    aria-controls={`dropdown-${item.label.replace(/\s/g, "-")}`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        id={`dropdown-${item.label.replace(/\s/g, "-")}`}
                        role="menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[180px] rounded-lg border border-white/[0.08] bg-[rgba(18,18,26,0.92)] backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)_inset] py-2 font-dropdown text-[11px]"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className={`flex items-center gap-2.5 px-3 py-2 text-[11px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-inset rounded-md mx-1.5 ${
                              pathname === child.href
                                ? "text-yellow bg-yellow/10"
                                : "text-muted hover:text-white hover:bg-white/[0.06]"
                            }`}
                          >
                            <span className="flex-shrink-0 text-current opacity-80" aria-hidden>
                              <NavIcon name={child.icon} className="w-4 h-4" />
                            </span>
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                item.href && (
                  <Link
                    href={item.href}
                    className={`font-nav px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      pathname === item.href ? "bg-white/10 text-white" : "text-muted hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          ))}
          <Link
            href="/tickets"
            className="font-nav ml-1 rounded-full bg-red px-5 py-2 text-sm font-semibold text-white hover:bg-red-light transition-all duration-300 ease-out hover:scale-105 active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get Tickets
          </Link>
        </div>

<button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <motion.div animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.div>
      </button>
      </nav>

      {/* Mobile menu — 2026 design */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden rounded-b-2xl border-x border-b border-white/[0.08] bg-[rgba(18,18,26,0.96)] backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]"
            aria-hidden={!mobileMenuOpen}
          >
            <ul className="flex flex-col gap-3 p-4 pb-6">
              {navItems.map((item, i) => (
                <li key={item.label}>
                  {item.children && item.children.length > 0 ? (
                    <MobileDropdown
                      label={item.label}
                      children={item.children}
                      pathname={pathname}
                      onNavigate={() => setMobileMenuOpen(false)}
                    />
                  ) : (
                    item.href && (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-nav block py-3.5 px-4 rounded-2xl font-medium transition-all duration-200 border border-white/[0.06] ${
                          pathname === item.href
                            ? "text-yellow bg-yellow/10 border-yellow/20"
                            : "text-white/90 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.1]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/tickets"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-nav flex items-center justify-center gap-2 w-full rounded-2xl bg-red px-5 py-4 text-sm font-semibold text-white hover:bg-red-light transition-all duration-300 ease-out active:scale-[0.98] border border-red/50 shadow-[0_4px_20px_-4px_rgba(185,28,28,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#12121a]"
                >
                  Get Tickets
                  <span aria-hidden>→</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileDropdown({
  label,
  children,
  pathname,
  onNavigate,
}: {
  label: string;
  children: NavChild[];
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isActive = children.some((c) => pathname === c.href);
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`font-nav flex items-center justify-between w-full py-3.5 px-4 text-left font-medium transition-all duration-200 rounded-2xl ${
          isActive
            ? "text-yellow bg-yellow/10 border-yellow/20"
            : "text-white/90 hover:bg-white/[0.06]"
        }`}
        aria-expanded={open}
      >
        {label}
        <motion.svg
          className="w-5 h-5 shrink-0 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-black/[0.2] font-dropdown"
          >
            {children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className={`flex items-center gap-3 py-3 pl-4 pr-4 text-sm font-medium transition-colors border-b border-white/[0.04] last:border-0 ${
                    pathname === child.href
                      ? "text-yellow bg-yellow/5"
                      : "text-muted hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="flex-shrink-0 text-current opacity-80" aria-hidden>
                    <NavIcon name={child.icon} className="w-5 h-5" />
                  </span>
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
