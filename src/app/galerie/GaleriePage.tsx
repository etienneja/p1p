"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhotoGallery } from "@/components/features/PhotoGallery";
import { galleryImages, eventFilters } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredImages =
    activeFilter === "Tous"
      ? galleryImages
      : galleryImages.filter((img) => img.event === activeFilter);

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

      {/* Filters */}
      <section className="py-8 px-4 border-b border-sable-dark/30 sticky top-16 md:top-20 bg-cream/95 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          {eventFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                activeFilter === filter
                  ? "bg-corail text-white shadow-md"
                  : "bg-sable text-encre-light hover:bg-sable-dark"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredImages.length > 0 ? (
            <PhotoGallery images={filteredImages} />
          ) : (
            <div className="text-center py-20">
              <p className="text-encre-light text-lg">
                Aucune photo pour cette catégorie pour le moment.
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
