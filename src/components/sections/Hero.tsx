"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 left-1/2 w-screen -translate-x-1/2">
        <Image
          src="/images/apero_fete_village.jpg"
          alt="Fête du village à Puyricard"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/15" />

      {/* Bunting decoration (SVG inspired by logo) */}
      <div className="absolute top-16 md:top-20 left-0 right-0 overflow-hidden h-16">
        <svg className="w-full h-16 opacity-30" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,10 Q300,50 600,10 Q900,50 1200,10" fill="none" stroke="white" strokeWidth="2" />
          {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].map((x, i) => {
            const colors = ["#E8725A", "#4BA3C3", "#F2C14E", "#F09480", "#6FBDD6", "#F5D17A"];
            return (
              <polygon
                key={x}
                points={`${x - 15},${15 + Math.sin(x / 100) * 10} ${x + 15},${15 + Math.sin(x / 100) * 10} ${x},${45 + Math.sin(x / 100) * 10}`}
                fill={colors[i % colors.length]}
                opacity="0.8"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Donner vie au village,{" "}
          <span className="text-corail">ensemble</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Événements conviviaux, produits du terroir et lien social au cœur de Puyricard, près d&apos;Aix-en-Provence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/evenements" size="lg">
            Nos événements
          </Button>
          <Button href="/association" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
            Découvrir l&apos;association
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
