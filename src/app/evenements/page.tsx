import type { Metadata } from "next";
import { EventsPage } from "./EventsPage";

export const metadata: Metadata = {
  title: "Événements",
  description: "Découvrez les événements de l'association Puyricard sur un Plateau : fête votive, cinéma en plein air et fête du village.",
};

export default function Page() {
  return <EventsPage />;
}
