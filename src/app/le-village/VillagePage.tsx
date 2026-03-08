"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { village } from "@/data/village";

export function VillagePage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero with photo */}
      <section className="relative py-24 md:py-36 px-4 overflow-hidden">
        <Image
          src="/images/484189243_1154211213166656_7328346481975419022_n.jpg"
          alt="La place de Puyricard décorée"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-encre/50" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {village.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {village.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-encre-light leading-relaxed text-center"
          >
            {village.intro}
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      {village.sections.map((section, i) => (
        <section
          key={section.title}
          className={`py-16 md:py-20 px-4 ${i % 2 === 0 ? "bg-sable" : ""}`}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle title={section.title} />
              <p className="mt-8 text-lg text-encre-light leading-relaxed text-center max-w-3xl mx-auto">
                {section.content}
              </p>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Village ambiance photo */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/7] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/apero_kids_fete_village.jpg"
              alt="Familles et enfants lors de la fête du village"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="Nous trouver" subtitle="Puyricard, 13540 Aix-en-Provence" />
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11579.87!2d5.3951!3d43.5751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98c5fd0f645c5%3A0x409ce34b30423b0!2s13540+Puyricard!5e0!3m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de Puyricard"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 bg-sable">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              L&apos;association qui fait vivre le village
            </h2>
            <p className="text-lg text-encre-light mb-8">
              Découvrez comment Puyricard sur un Plateau contribue à la vie du plateau.
            </p>
            <Button href="/association">Découvrir l&apos;association</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
