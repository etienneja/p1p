# Puyricard sur un Plateau

Site web de l'association **Puyricard sur un Plateau** (P1P).

## Stack

- [Next.js 15](https://nextjs.org) (App Router, SSG)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## Développement

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Déploiement

Le site est conçu pour être déployé sur [Vercel](https://vercel.com). Il suffit de connecter le repo GitHub à Vercel pour un déploiement automatique.

## Modifier le contenu

Tout le contenu est dans les fichiers `src/data/` :

- `events.ts` — Événements (dates, programme, liens HelloAsso)
- `association.ts` — Textes de l'association
- `village.ts` — Page Le Village
- `partners.ts` — Commerçants et partenaires
- `gallery.ts` — Photos de la galerie
- `navigation.ts` — Liens de navigation et réseaux sociaux

Pour ajouter des photos, placer les images dans `public/images/` et les référencer dans `gallery.ts`.
