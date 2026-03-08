"use client";

import { motion } from "framer-motion";
import { EventCard } from "@/components/features/EventCard";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { HelloAssoButton } from "@/components/features/HelloAssoButton";
import { events, getNextEvent } from "@/data/events";

export function EventsPage() {
  const nextEvent = getNextEvent();

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
              Nos Événements
            </h1>
            <p className="text-xl md:text-2xl text-encre-light leading-relaxed">
              Trois rendez-vous incontournables pour célébrer la vie du village
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next event */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm text-center"
          >
            <p className="text-sm font-semibold text-corail uppercase tracking-wider mb-2">
              Prochain événement
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              {nextEvent.title}
            </h2>
            <p className="text-encre-light mb-6">
              {nextEvent.date} — {nextEvent.location}
            </p>
            <CountdownTimer targetDate={nextEvent.dateISO} />
            <div className="mt-6">
              <HelloAssoButton url={nextEvent.helloAssoUrl} label="Réserver ma place" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All events */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {events.map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
