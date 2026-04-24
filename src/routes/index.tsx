import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CulinaryHighlights } from "@/components/CulinaryHighlights";
import { CultureStory } from "@/components/CultureStory";
import { Gallery } from "@/components/Gallery";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";
import { CursorGlow } from "@/components/Cursor";
import { useReveal, useParallax } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Huế Culinary Journey — Discover the Taste of Hue" },
      {
        name: "description",
        content:
          "A cinematic journey through the imperial cuisine, lantern-lit alleys and royal kitchens of Huế, Vietnam.",
      },
      { property: "og:title", content: "Huế Culinary Journey" },
      {
        property: "og:description",
        content:
          "Cinematic tribute to Vietnam's imperial city and its 1,700+ dishes — Bún Bò Huế, Bánh Bèo, Cơm Hến and more.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  useParallax();

  return (
    <div id="top" className="relative">
      <CursorGlow />
      <SiteNav />
      <Hero />
      <CulinaryHighlights />
      <CultureStory />
      <Gallery />
      <SiteFooter />
    </div>
  );
}
