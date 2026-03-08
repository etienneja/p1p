export interface Partner {
  name: string;
  activity: string;
  description?: string;
}

export const partners: Partner[] = [
  { name: "Boulangerie du Plateau", activity: "Boulangerie-Pâtisserie", description: "Pains et viennoiseries artisanales" },
  { name: "Domaine de Puyricard", activity: "Viticulteur", description: "Vins AOP Coteaux d'Aix-en-Provence" },
  { name: "L'Épicerie du Village", activity: "Épicerie fine", description: "Produits locaux et de saison" },
  { name: "Le Bistrot du Plateau", activity: "Restaurant", description: "Cuisine provençale traditionnelle" },
  { name: "Chocolaterie de Puyricard", activity: "Chocolatier", description: "Chocolats artisanaux depuis 1967" },
  { name: "Moulin à Huile", activity: "Producteur d'huile d'olive", description: "Huile d'olive du plateau" },
  { name: "Les Jardins du Plateau", activity: "Maraîcher bio", description: "Fruits et légumes de saison" },
  { name: "Cave du Plateau", activity: "Caviste", description: "Sélection de vins provençaux" },
];
