import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { News } from "@/components/News";

export const metadata: Metadata = {
  title: "News & Updates | Bailamos Bachata Festival",
  description:
    "Latest announcements, artist reveals, and festival updates for Bailamos.",
};

export default function NewsPage() {
  return (
    <main id="main-content" role="main">
      <PageHeader
        label="News & updates"
        title="Stay in the loop"
        description="Latest announcements and festival updates."
      />
      <News />
    </main>
  );
}
