import type { Metadata, Viewport } from "next";
import { DM_Sans, League_Spartan, Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClientLayout } from "@/components/ClientLayout";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bailamos | Bachata Festival — Dance, Connect, Celebrate",
  description:
    "Join the ultimate bachata festival. World-class artists, workshops, social dancing, and unforgettable nights. Get your tickets now.",
  keywords: ["bachata", "festival", "dance", "latin dance", "Bailamos"],
  icons: {
    icon: "/bailamos-logo.png",
    apple: "/bailamos-logo.png",
  },
  openGraph: {
    title: "Bailamos — Bachata Festival",
    description: "Where passion meets the dance floor. Join us for the year's best bachata experience.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${leagueSpartan.variable} ${montserrat.variable} ${bebasNeue.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {/* Site-wide background: gradient orbs + noise */}
        <div
          className="fixed inset-0 z-0 pointer-events-none bg-site-gradient noise"
          aria-hidden
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-yellow focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
