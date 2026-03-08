"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { HelloAssoButton } from "@/components/features/HelloAssoButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { events, type Event } from "@/data/events";

export function EventDetailPage({ event }: { event: Event }) {
  const otherEvents = events.filter((e) => e.slug !== event.slug);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero banner with photo — light overlay to let photos show */}
      <section className="relative py-24 md:py-36 px-4 text-white overflow-hidden">
        <Image
          src={event.bannerImage}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4">
              Événement
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {event.title}
            </h1>
            <p className="text-xl text-white/90 mb-2 drop-shadow">{event.subtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-10 px-4 bg-sable">
        <div className="max-w-2xl mx-auto text-center">
          <CountdownTimer targetDate={event.dateISO} />
          <div className="mt-6">
            <HelloAssoButton url={event.helloAssoUrl} size="lg" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              À propos
            </h2>
            <p className="text-lg text-encre-light leading-relaxed text-center">
              {event.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-16 md:py-20 px-4 bg-sable">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-12 text-center">
            Programme
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sable-dark" />
            <div className="space-y-8">
              {event.program.map((item, i) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex gap-6"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 z-10"
                    style={{ backgroundColor: event.color }}
                  >
                    {item.time}
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 shadow-sm">
                    <h3 className="font-heading text-lg font-bold mb-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-encre-light text-sm">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
            Infos pratiques
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {event.practicalInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-start gap-3 bg-sable rounded-xl p-4"
              >
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={event.color}
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-encre-light">{info}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos from previous editions */}
      {event.images.length > 0 && (
        <section className="py-16 md:py-20 px-4 bg-sable">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-center">
              En images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.images.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt={`${event.title} - Photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other events */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Nos autres événements"
            subtitle="Découvrez aussi"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {otherEvents.map((other, i) => (
              <motion.div
                key={other.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link
                  href={`/evenements/${other.slug}`}
                  className="group block relative rounded-2xl overflow-hidden aspect-[16/9]"
                >
                  <Image
                    src={other.bannerImage}
                    alt={other.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-bold text-white drop-shadow-lg mb-1">
                      {other.title}
                    </h3>
                    <p className="text-white/80 text-sm">{other.date}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-white/90 group-hover:gap-2 transition-all">
                      Découvrir
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 px-4 text-white overflow-hidden">
        <Image
          src={event.bannerImage}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            On vous attend !
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Réservez votre place dès maintenant pour ne rien manquer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <HelloAssoButton url={event.helloAssoUrl} size="lg" />
            <Button href="/contact" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
