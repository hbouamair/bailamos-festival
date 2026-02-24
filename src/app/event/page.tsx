import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { EventContent } from "@/components/EventContent";

export const metadata: Metadata = {
  title: "The Festival | Bailamos Bachata Festival",
  description:
    "Bailamos is a four-day bachata festival bringing together dancers from around the world. Workshops, live performances, and social dancing.",
};

export default function EventPage() {
  return (
    <main id="main-content" role="main">
      <PageHeader
        label="Event"
        title="The Festival"
        description="What to expect when you join us at Bailamos."
      />
      <EventContent />
    </main>
  );
}
