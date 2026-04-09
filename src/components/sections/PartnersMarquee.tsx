"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { partners } from "@/data/partners";

export function PartnersMarquee() {
  const items = partners.filter((p) => Boolean(p.logoSrc));
  const track = [...items, ...items]; // duplicate for seamless loop

  if (items.length === 0) return null;

  return (
    <section className="py-16 md:py-20 px-4 bg-sable">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nos partenaires locaux"
          subtitle="Ils soutiennent la vie du village"
        />

        <div className="relative mt-12 overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-sable to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-sable to-transparent z-10" />

          <motion.div
            className="flex w-max gap-10 items-center partners-marquee"
            aria-label="Logos des partenaires"
          >
            {track.map((p, idx) => (
              <div
                key={`${p.name}-${idx}`}
                className="h-14 md:h-16 w-40 md:w-44 flex items-center justify-center"
                title={p.name}
              >
                {p.logoSrc && (
                  <Image
                    src={p.logoSrc}
                    alt={`Logo ${p.name}`}
                    width={176}
                    height={64}
                    className="max-h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    sizes="176px"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

