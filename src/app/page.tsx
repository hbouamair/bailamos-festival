import { Hero } from "@/components/Hero";
import { Venue } from "@/components/Venue";
import { FAQ } from "@/components/FAQ";
import { Tickets } from "@/components/Tickets";

export default function Home() {
  return (
    <main id="main-content" role="main">
      <Hero />
      <Venue />
      <FAQ />
      <Tickets />
    </main>
  );
}
