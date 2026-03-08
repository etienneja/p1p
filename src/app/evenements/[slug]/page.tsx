import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events } from "@/data/events";
import { EventDetailPage } from "./EventDetailPage";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();
  return <EventDetailPage event={event} />;
}
