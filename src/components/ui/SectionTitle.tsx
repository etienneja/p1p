"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, centered = true, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={centered ? "text-center" : ""}
    >
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-cream" : "text-encre"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-cream/80" : "text-encre-light"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
        <span className="block w-12 h-1 rounded-full bg-corail" />
        <span className="block w-3 h-3 rounded-full bg-soleil" />
        <span className="block w-12 h-1 rounded-full bg-bleu" />
      </div>
    </motion.div>
  );
}
