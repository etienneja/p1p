import type { Metadata } from "next";
import { ContactPage } from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'association Puyricard sur un Plateau. Adresse, email, réseaux sociaux et adhésion via HelloAsso.",
};

export default function Page() {
  return <ContactPage />;
}
