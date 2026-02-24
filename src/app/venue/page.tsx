import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { VenuePageContent } from "@/components/VenuePageContent";

export const metadata: Metadata = {
  title: "Venue | Bailamos Bachata Festival",
  description:
    "Palais des Congrès Marrakech. World-class venue in the heart of Marrakech, Morocco.",
};

export default function VenuePage() {
  return (
    <main id="main-content" role="main">
      <PageHeader
        label="2026 · Venue"
        title="Palais des Congrès Marrakech"
        description="World-class floors, stunning production, and the energy of thousands of dancers under one roof in Marrakech."
      />
      <VenuePageContent />
    </main>
  );
}
