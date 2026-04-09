import type { Metadata } from "next";
import { PartnersPage } from "./PartnersPage";

export const metadata: Metadata = {
  title: "Partenaires",
  description: "Découvrez les partenaires de l'association Puyricard sur un Plateau.",
};

export default function Page() {
  return <PartnersPage />;
}

