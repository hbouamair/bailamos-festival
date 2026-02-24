import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GettingThereContent } from "@/components/GettingThereContent";

export const metadata: Metadata = {
  title: "Getting There | Bailamos Bachata Festival",
  description:
    "How to get to Palais des Congrès Marrakech. Directions from the airport, transport options, and practical travel info for Bailamos 2026.",
};

export default function GettingTherePage() {
  return (
    <main id="main-content" role="main">
      <PageHeader
        label="2026 · Travel"
        title="Getting there"
        description="Everything you need to reach Palais des Congrès and enjoy a smooth journey to Bailamos."
      />
      <GettingThereContent />
    </main>
  );
}
