"use client";

import { motion } from "framer-motion";
import { PhotoGallery } from "@/components/features/PhotoGallery";
import { galleryImages } from "@/data/gallery";

export function GaleriePage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-sable">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-encre mb-6">
              Galerie
            </h1>
            <p className="text-xl md:text-2xl text-encre-light leading-relaxed">
              Revivez les moments forts de nos événements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {galleryImages.length > 0 ? (
            <PhotoGallery images={galleryImages} />
          ) : (
            <div className="text-center py-20">
              <p className="text-encre-light text-lg">
                Aucune photo pour le moment.
              </p>
              <p className="text-encre-light/60 mt-2">
                Les photos seront ajoutées après les événements.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
