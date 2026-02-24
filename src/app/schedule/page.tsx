import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Schedule } from "@/components/Schedule";

export const metadata: Metadata = {
  title: "Schedule | Bailamos Bachata Festival",
  description:
    "Four days of workshops, parties, and social dancing. Plan your Bailamos weekend.",
};

export default function SchedulePage() {
  return (
    <main id="main-content" role="main">
      <PageHeader
        label="Program"
        title="Festival schedule"
        description="Four days of workshops, shows, and social dancing. Plan your weekend."
      />
      <Schedule showHeading={false} />
    </main>
  );
}
