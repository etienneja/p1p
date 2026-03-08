"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/data/navigation";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-encre relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-corail/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-bleu/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
          Rejoignez l&apos;aventure <span className="text-corail">P1P</span>
        </h2>
        <p className="text-xl text-white/70 mb-10 leading-relaxed">
          Adhérez à l&apos;association, participez à nos événements et contribuez à faire vivre Puyricard.
          Ensemble, donnons vie au village !
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={socialLinks.helloasso} size="lg" external>
            Adhérer sur HelloAsso
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
            Nous contacter
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
