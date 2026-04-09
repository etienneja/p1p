import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { VillagePreview } from "@/components/sections/VillagePreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <EventsPreview />
      <PartnersMarquee />
      <VillagePreview />
    </>
  );
}
