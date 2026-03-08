import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { VillagePreview } from "@/components/sections/VillagePreview";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <EventsPreview />
      <VillagePreview />
      <PartnersSection />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
