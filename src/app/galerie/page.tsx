import type { Metadata } from "next";
import { GaleriePage } from "./GaleriePage";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Revivez en images les moments forts des événements de l'association Puyricard sur un Plateau.",
};

export default function Page() {
  return <GaleriePage />;
}
