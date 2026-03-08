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
    date: "Week-end de la Pentecôte 2026",
    dateISO: "2026-06-07T18:00:00",
    time: "À partir de 18h",
    location: "Place de l'Église, Puyricard",
    description:
      "La Fête Votive de Puyricard est un rendez-vous incontournable du plateau. Pendant tout le week-end de la Pentecôte, retrouvez animations, repas partagés et convivialité au cœur du village.",
    longDescription:
      "Chaque année, la Fête Votive marque le début de l'été à Puyricard. Ce week-end festif est l'occasion de se retrouver entre habitants, de découvrir les produits locaux et de profiter d'animations pour toute la famille. Au programme : apéritif géant, repas du terroir, jeux pour enfants, musique live et une ambiance chaleureuse typiquement provençale.",
    program: [
      { time: "18h00", title: "Ouverture des festivités", description: "Apéritif de bienvenue offert par l'association" },
      { time: "19h00", title: "Marché des producteurs", description: "Découverte des produits du plateau" },
      { time: "20h00", title: "Grand repas partagé", description: "Menu du terroir préparé par les restaurateurs locaux" },
      { time: "22h00", title: "Musique et danse", description: "Soirée dansante sous les étoiles" },
    ],
    practicalInfo: [
      "Entrée libre",
      "Parking disponible à proximité",
      "Réservation conseillée pour le repas",
      "Pensez à apporter vos couverts réutilisables",
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
    date: "Été 2026",
    dateISO: "2026-06-27T19:00:00",
    time: "À partir de 19h",
    location: "Plateau de Puyricard",
    description:
      "Installez-vous confortablement sous le ciel étoilé de Puyricard pour une projection en plein air précédée d'un apéritif convivial et d'un dîner sous les platanes.",
    longDescription:
      "Le cinéma en plein air est un moment unique de partage. Dès 19h, profitez d'un apéritif offert par nos partenaires locaux, suivi d'un dîner champêtre préparé avec des produits du plateau. À la tombée de la nuit, installez-vous pour la projection d'un film sélectionné avec soin. Transats, plaids et pop-corn seront de la partie pour une soirée inoubliable.",
    program: [
      { time: "19h00", title: "Apéritif de bienvenue", description: "Dégustation de produits locaux" },
      { time: "20h00", title: "Dîner champêtre", description: "Menu préparé par les restaurateurs du plateau" },
      { time: "21h30", title: "Projection du film", description: "Film surprise sur grand écran" },
      { time: "23h30", title: "Fin de soirée", description: "Derniers verres et au revoir" },
    ],
    practicalInfo: [
      "Places limitées — réservation obligatoire",
      "Apportez plaids et coussins pour votre confort",
      "Parking fléché sur place",
      "En cas de pluie, repli en salle",
    ],
    helloAssoUrl: "https://www.helloasso.com/associations/puyricard-sur-un-plateau",
    icon: "film",
    color: "#4BA3C3",
    bannerImage: "/images/soiree_fete_village2.jpg",
    images: [],
  },
  {
    slug: "fete-du-village",
    title: "Fête du Village",
    subtitle: "Le grand rendez-vous de l'été à Puyricard",
    date: "Début juillet 2026",
    dateISO: "2026-07-04T18:00:00",
    time: "À partir de 18h",
    location: "Place de l'Église, Puyricard",
    description:
      "La Fête du Village est le point d'orgue de la saison estivale. Sur la place de l'église, partagez un grand dîner festif suivi d'une soirée musicale et dansante.",
    longDescription:
      "La Fête du Village rassemble tous les Puyricardais et leurs amis pour une soirée mémorable. La place de l'église se transforme en un grand restaurant à ciel ouvert où l'on dîne tous ensemble. Les commerçants et producteurs du plateau proposent leurs spécialités, et la soirée se prolonge en musique et en danse. Un moment fort de cohésion et de joie de vivre à la provençale.",
    program: [
      { time: "18h00", title: "Installation et apéritif", description: "Retrouvailles et premières dégustations" },
      { time: "19h30", title: "Grand dîner sur la place", description: "Menu festif avec les produits du plateau" },
      { time: "21h30", title: "Concert live", description: "Musique festive et entraînante" },
      { time: "23h00", title: "Soirée dansante", description: "On danse sous les lampions jusqu'au bout de la nuit" },
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
