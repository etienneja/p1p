"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { partners } from "@/data/partners";
import { Button } from "@/components/ui/Button";

export function PartnersSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-sable">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nos partenaires"
          subtitle="Les commerçants et producteurs du plateau qui font vivre Puyricard"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-5 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-corail/10 flex items-center justify-center">
                <span className="font-heading text-lg font-bold text-corail">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading text-sm font-bold mb-1 line-clamp-2">{partner.name}</h3>
              <p className="text-xs text-encre-light">{partner.activity}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/association#partenaires" variant="outline">
            Voir tous nos partenaires
          </Button>
        </div>
      </div>
    </section>
  );
}
