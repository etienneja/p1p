"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { EventCard } from "@/components/features/EventCard";
import { HelloAssoButton } from "@/components/features/HelloAssoButton";
import { events, getNextEvent } from "@/data/events";

export function EventsPreview() {
  const nextEvent = getNextEvent();

  return (
    <section className="py-20 md:py-28 px-4 bg-sable">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nos événements"
          subtitle="Trois rendez-vous festifs pour célébrer la vie du village"
        />

        {/* Next event countdown */}
        <div className="mt-12 mb-16 bg-white rounded-3xl p-8 md:p-10 shadow-sm max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-corail uppercase tracking-wider mb-2">
            Prochain événement
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">{nextEvent.title}</h3>
          <p className="text-encre-light mb-6">{nextEvent.date} — {nextEvent.location}</p>
          <CountdownTimer targetDate={nextEvent.dateISO} />
          <div className="mt-6">
            <HelloAssoButton url={nextEvent.helloAssoUrl} label="Réserver ma place" />
          </div>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, i) => (
            <EventCard key={event.slug} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
