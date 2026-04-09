"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { partners } from "@/data/partners";

export function PartnersPage() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Nos partenaires"
            subtitle="Commerçants et producteurs du plateau"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-lg font-bold mb-1">{partner.name}</h3>
                <p className="text-sm text-corail font-medium mb-2">{partner.activity}</p>
                {partner.description && (
                  <p className="text-sm text-encre-light">{partner.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

