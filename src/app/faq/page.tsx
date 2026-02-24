import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | Bailamos Bachata Festival",
  description:
    "Everything you need to know: dates, venue, passes, accommodation, and more.",
};

export default function FAQPage() {
  return (
    <main id="main-content" role="main">
      <PageHeader
        label="FAQ"
        title="Everything you need to know"
        description="From travel and passes to what to expect on the dance floor."
      />
      <FAQ />
    </main>
  );
}
