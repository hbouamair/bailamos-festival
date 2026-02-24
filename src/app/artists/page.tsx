import { Metadata } from "next";
import { Artists } from "@/components/Artists";

export const metadata: Metadata = {
  title: "Artists & Lineup | Bailamos Bachata Festival",
  description:
    "World-class bachata artists, instructors, and performers. Meet the lineup for Bailamos festival.",
};

export default function ArtistsPage() {
  return (
    <main id="main-content" role="main">
      <Artists />
    </main>
  );
}
