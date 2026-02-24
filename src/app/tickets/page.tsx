import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Tickets } from "@/components/Tickets";

export const metadata: Metadata = {
  title: "Tickets | Bailamos Bachata Festival",
  description:
    "Get your full pass to Bailamos. Secure payment, instant confirmation, and access to all workshops and parties.",
};

export default function TicketsPage() {
  return (
    <main id="main-content" role="main">
      <PageHeader
        label="Tickets"
        title="Get your full pass"
        description="Secure your pass. Limited availability—grab yours now."
      />
      <Tickets />
    </main>
  );
}
