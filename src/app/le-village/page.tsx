import type { Metadata } from "next";
import { VillagePage } from "./VillagePage";

export const metadata: Metadata = {
  title: "Le Village",
  description: "Découvrez Puyricard, village provençal authentique perché sur son plateau au nord d'Aix-en-Provence. Un cadre de vie exceptionnel entre vignes, oliviers et pinèdes.",
};

export default function Page() {
  return <VillagePage />;
}
