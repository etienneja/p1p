"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Event } from "@/data/events";

export function EventCard({ event, index = 0 }: { event: Event; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link
        href={`/evenements/${event.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="p-1.5">
          <div className="rounded-xl relative overflow-hidden aspect-[4/3]">
            <Image
              src={event.bannerImage}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading text-2xl font-bold text-white drop-shadow-lg mb-1">{event.title}</h3>
              <p className="text-white/80 text-sm drop-shadow">{event.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 pt-4">
          <div className="flex items-center gap-2 text-sm text-encre-light mb-3">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {event.date}
          </div>
          <p className="text-encre-light text-sm leading-relaxed line-clamp-2">{event.description}</p>
          <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: event.color }}>
            Découvrir
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
