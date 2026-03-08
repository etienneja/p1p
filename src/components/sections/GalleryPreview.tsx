"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { galleryImages } from "@/data/gallery";

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="En images"
          subtitle="Revivez les moments forts de nos événements"
        />

        <div className="mt-16 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-72 md:w-96 snap-center"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/galerie" variant="outline">
            Voir toute la galerie
          </Button>
        </div>
      </div>
    </section>
  );
}
