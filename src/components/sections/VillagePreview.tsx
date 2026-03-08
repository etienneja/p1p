"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function VillagePreview() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Puyricard"
              subtitle="Un village provençal où il fait bon vivre"
              centered={false}
            />
            <p className="mt-6 text-encre-light leading-relaxed text-lg">
              Perché sur son plateau au nord d&apos;Aix-en-Provence, Puyricard est un village
              authentique entre vignes, oliviers et pinèdes. Un cadre de vie exceptionnel
              où se mêlent traditions provençales et dynamisme moderne.
            </p>
            <div className="mt-8">
              <Button href="/le-village" variant="outline">
                Découvrir le village
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-corail/10 rounded-2xl p-6 text-center">
                  <span className="font-heading text-3xl font-bold text-corail">13540</span>
                  <p className="text-sm text-encre-light mt-1">Code postal</p>
                </div>
                <div className="bg-bleu/10 rounded-2xl p-6 text-center">
                  <span className="font-heading text-3xl font-bold text-bleu">5 min</span>
                  <p className="text-sm text-encre-light mt-1">d&apos;Aix-en-Provence</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-soleil/10 rounded-2xl p-6 text-center">
                  <span className="font-heading text-3xl font-bold text-soleil">300m</span>
                  <p className="text-sm text-encre-light mt-1">d&apos;altitude</p>
                </div>
                <div className="bg-sable rounded-2xl p-6 text-center">
                  <span className="font-heading text-3xl font-bold text-encre">2800h</span>
                  <p className="text-sm text-encre-light mt-1">de soleil / an</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
