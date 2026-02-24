import Link from "next/link";
import Image from "next/image";

const footerNav = [
  { href: "/event", label: "The Festival" },
  { href: "/venue", label: "Venue" },
  { href: "/schedule", label: "Schedule" },
  { href: "/artists", label: "Artists" },
  { href: "/tickets", label: "Tickets" },
  { href: "/faq", label: "FAQ" },
  { href: "/news", label: "News" },
];

const socialLinks = [
  { href: "https://www.instagram.com/bailaimosfestival/", label: "Instagram", icon: "↗" },
  { href: "https://youtube.com", label: "YouTube", icon: "▶" },
  { href: "https://facebook.com", label: "Facebook", icon: "f" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      role="contentinfo"
    >
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow/30 to-transparent" />

      <div className="relative border-t border-white/[0.06] bg-surface-1/60 backdrop-blur-xl">
        {/* Subtle gradient wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(107,33,168,0.06),transparent_70%)] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          {/* Bento grid — 2026 card-style blocks */}
          <div className="grid grid-cols-1 gap-6 sm:gap-6 lg:grid-cols-12 lg:gap-6">
            {/* Brand block — larger card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full flex flex-col">
                <Link
                  href="/"
                  className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl transition-opacity hover:opacity-90 w-fit"
                  aria-label="Bailamos – Marrakech Bailamos Festival"
                >
                  <Image
                    src="/bailamos-logo.png"
                    alt="Marrakech Bailamos Festival – 6th Edition by El Bailai"
                    width={200}
                    height={70}
                    className="h-10 w-auto sm:h-12 object-contain object-left"
                  />
                </Link>
                <p className="mt-5 text-muted text-sm sm:text-[15px] leading-relaxed max-w-sm">
                  Where passion meets the dance floor. Four days of world-class bachata in Marrakech, Morocco.
                </p>
                {/* Social — pill buttons */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-muted hover:text-yellow hover:border-yellow/20 hover:bg-yellow/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={link.label}
                    >
                      <span className="text-yellow/80" aria-hidden>{link.icon}</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigate — compact card */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow mb-5">
                  Navigate
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1 sm:gap-y-2" role="list">
                  {footerNav.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact — wider card so address + email fit comfortably */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow mb-5">
                  Contact
                </p>
                <p className="text-sm text-muted leading-relaxed max-w-md">
                  June 12–15, 2026<br />
                  Palais des Congrès · Marrakech · Morocco
                </p>
                <a
                  href="mailto:hello@bailamosfestival.com"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-yellow/20 bg-yellow/5 px-4 py-2.5 text-sm font-semibold text-yellow hover:bg-yellow/10 hover:border-yellow/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background break-all sm:break-normal"
                >
                  hello@bailamosfestival.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar — minimal */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Bailamos Festival. All rights reserved.
            </p>
            <p className="text-xs text-muted">
              Crafted for the global bachata family.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
