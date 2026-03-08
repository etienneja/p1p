"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { association } from "@/data/association";
import { partners } from "@/data/partners";
import { socialLinks } from "@/data/navigation";

export function AssociationPage() {
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
              L&apos;Association
            </h1>
            <p className="text-xl md:text-2xl text-encre-light leading-relaxed">
              {association.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Notre mission" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 text-lg text-encre-light leading-relaxed whitespace-pre-line text-center"
          >
            {association.longDescription}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 px-4 bg-sable">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Nos valeurs" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {association.values.map((value, i) => (
              <Card key={value.title}>
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                    style={{
                      backgroundColor: ["#E8725A20", "#4BA3C320", "#F2C14E20"][i],
                      color: ["#E8725A", "#4BA3C3", "#F2C14E"][i],
                    }}
                  >
                    <span className="font-heading text-2xl font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-encre-light leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="L'équipe"
            subtitle="Des bénévoles passionnés par leur village"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src="/images/team1.jpeg"
                alt="L'équipe Puyricard sur un Plateau"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src="/images/team2.jpeg"
                alt="L'équipe P1P en action"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg text-encre-light leading-relaxed mt-8 max-w-3xl mx-auto"
          >
            Une équipe de bénévoles dynamiques et investis, unis par l&apos;amour de leur village
            et la volonté de créer du lien entre les habitants du plateau.
          </motion.p>
        </div>
      </section>

      {/* Partners */}
      <section id="partenaires" className="py-16 md:py-24 px-4 bg-sable scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Nos partenaires"
            subtitle="Les commerçants et producteurs qui font vivre le plateau"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-corail/10 flex items-center justify-center mb-4">
                  <span className="font-heading text-xl font-bold text-corail">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold mb-1">{partner.name}</h3>
                <p className="text-sm text-corail font-medium mb-2">{partner.activity}</p>
                {partner.description && (
                  <p className="text-sm text-encre-light">{partner.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 bg-encre">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Rejoignez-nous !
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Adhérez à l&apos;association et participez à la vie du village.
            </p>
            <Button href={socialLinks.helloasso} size="lg" external>
              Adhérer sur HelloAsso
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
