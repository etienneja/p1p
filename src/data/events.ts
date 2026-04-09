export interface EventProgram {
  time: string;
  title: string;
  description?: string;
}

export interface Event {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dateISO: string;
  time: string;
  location: string;
  description: string;
  longDescription: string;
  program: EventProgram[];
  practicalInfo: string[];
  helloAssoUrl: string;
  icon: "church" | "film" | "music";
  color: string;
  bannerImage: string;
  images: string[];
}

export const events: Event[] = [
  {
    slug: "fete-votive",
    title: "Fête Votive",
    subtitle: "Célébrons ensemble les traditions du plateau",
    date: "22 mai 2026",
    dateISO: "2026-05-22T18:00:00",
    time: "À partir de 18h",
    location: "Place de la Rostolane, Puyricard",
    description:
      "La Fête Votive de Puyricard est un rendez-vous incontournable du plateau. Pendant tout le week-end de la Pentecôte, retrouvez animations, repas partagés et convivialité au cœur du village.",
    longDescription:
      "Chaque année, la Fête Votive marque le début de l'été à Puyricard. Ce week-end festif est l'occasion de se retrouver entre habitants, de découvrir les produits locaux et de profiter d'animations pour toute la famille. Au programme : concert live, food truck, bar et une ambiance chaleureuse typiquement provençale.",
    program: [
      { time: "", title: "Concert Live" },
      { time: "", title: "Food Truck" },
      { time: "", title: "Bar" },
    ],
    practicalInfo: [
      "Entrée libre",
      "Parking disponible à proximité",
      "Horaires : à partir de 18h",
      "Lieu : Place de la Rostolane, Puyricard",
    ],
    helloAssoUrl: "https://www.helloasso.com/associations/puyricard-sur-un-plateau",
    icon: "church",
    color: "#E8725A",
    bannerImage: "/images/fete_votive.jpg",
    images: ["/images/fete_votive.jpg", "/images/soiree_fete_votive.jpg"],
  },
  {
    slug: "cinema-plein-air",
    title: "Cinéma en Plein Air",
    subtitle: "Une soirée magique sous les étoiles provençales",
    date: "24 mai 2026",
    dateISO: "2026-05-24T19:00:00",
    time: "",
    location: "La Providence - 65 avenue Jacques de Régis",
    description:
      "Installez-vous confortablement sous le ciel étoilé pour une soirée cinéma en plein air, avec bar, food truck et projection du film.",
    longDescription:
      "Le cinéma en plein air est un moment unique de partage. Cette année, nous projetons Les Choristes. Retrouvez un bar et un food truck sur place, puis installez-vous pour la projection du film sous les étoiles.",
    program: [
      { time: "", title: "Bar" },
      { time: "", title: "Food truck" },
      { time: "", title: "Projection du film" },
    ],
    practicalInfo: [
      "Horaires : 20h",
      "Lieu : La Providence - 65 avenue Jacques de Régis",
    ],
    helloAssoUrl: "https://www.helloasso.com/associations/puyricard-sur-un-plateau",
    icon: "film",
    color: "#4BA3C3",
    bannerImage: "/images/les_choristes_affiche.png",
    images: [],
  },
  {
    slug: "fete-du-village",
    title: "Fête du Village",
    subtitle: "Le grand rendez-vous de l'été à Puyricard",
    date: "3 juillet 2026",
    dateISO: "2026-07-03T18:00:00",
    time: "À partir de 18h",
    location: "Place de l'Église, Puyricard",
    description:
      "La Fête du Village est le point d'orgue de la saison estivale. Sur la place de l'église, partagez un grand dîner festif suivi d'une soirée musicale et dansante.",
    longDescription:
      "La Fête du Village rassemble tous les Puyricardens et leurs amis pour une soirée mémorable. La place de l'église se transforme en un grand restaurant à ciel ouvert où l'on dîne tous ensemble. Les commerçants et producteurs du plateau proposent leurs spécialités, et la soirée se prolonge dans une ambiance festive. Un moment fort de cohésion et de joie de vivre à la provençale.",
    program: [
      { time: "18h00", title: "Installation et apéritif", description: "Retrouvailles et premières dégustations — animations pour enfants" },
      { time: "20h00", title: "Dîner sur la place", description: "Menu festif avec les produits du plateau" },
      { time: "", title: "Guignol" },
      { time: "", title: "Cirque" },
      { time: "", title: "Maquilleuse" },
      { time: "", title: "Terrain de foot pour les enfants" },
    ],
    practicalInfo: [
      "Réservation obligatoire pour le dîner",
      "Parking gratuit aux abords du village",
      "Événement familial, enfants bienvenus",
      "Tenue estivale de rigueur !",
    ],
    helloAssoUrl: "https://www.helloasso.com/associations/puyricard-sur-un-plateau",
    icon: "music",
    color: "#F2C14E",
    bannerImage: "/images/diner_fete_village.jpg",
    images: [
      "/images/apero_fete_village.jpg",
      "/images/apero_kids_fete_village.jpg",
      "/images/diner_fete_village.jpg",
      "/images/spectacle_fete_village.jpg",
      "/images/soiree_fete_village.jpg",
      "/images/soiree_fete_village2.jpg",
    ],
  },
];

export function getNextEvent(): Event {
  const now = new Date();
  const upcoming = events
    .filter((e) => new Date(e.dateISO) > now)
    .sort((a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime());
  return upcoming[0] || events[events.length - 1];
}
