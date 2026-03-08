import type { Metadata } from "next";
import { AssociationPage } from "./AssociationPage";

export const metadata: Metadata = {
  title: "L'Association",
  description: "Découvrez l'association Puyricard sur un Plateau : notre mission, nos valeurs, notre équipe et nos partenaires commerçants du plateau.",
};

export default function Page() {
  return <AssociationPage />;
}
