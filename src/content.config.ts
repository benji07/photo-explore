import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Champs communs à tout article. La validation Zod est le garde-fou :
// un article mal rempli par la routine fait échouer le build avec une
// erreur précise, plutôt que de produire une page silencieusement cassée.
const baseFields = ({ image }: { image: () => ReturnType<typeof z.object> | any }) => ({
  title: z.string(),
  // Résumé court, réutilisé dans les listings et les métadonnées (≤ ~160 car.).
  description: z.string(),
  // Date au format ISO "2026-06-06" ; coerce parse la chaîne en vraie Date.
  date: z.coerce.date(),
  // Mettre à true pour masquer un article en production.
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  // Image de couverture optionnelle. Deux formes acceptées :
  //  - un chemin relatif vers un fichier local (helper image() -> optimisé) ;
  //  - une URL externe (string) servie telle quelle via <img>, sans fetch au build.
  // Optionnelle -> une couverture manquante ne casse jamais le build (repli automatique).
  cover: z.union([image(), z.string().url()]).optional(),
  coverAlt: z.string().optional(),
  // Crédit de la couverture, affiché en petit sous l'image (ex : "Auteur — Source, licence").
  coverCredit: z.string().optional(),
  // Lien vers la source : rend la couverture (et son crédit) cliquable.
  coverSource: z.string().url().optional(),
});

const photographers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photographers' }),
  schema: ({ image }) =>
    z.object({
      ...baseFields({ image }),
      // Nom complet du/de la photographe.
      name: z.string(),
      // Ex : "1908–2004", "XXe siècle".
      era: z.string().optional(),
      nationality: z.string().optional(),
      // Ex : ["photojournalisme", "rue", "portrait"].
      genres: z.array(z.string()).default([]),
    }),
});

const techniques = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/techniques' }),
  schema: ({ image }) =>
    z.object({
      ...baseFields({ image }),
      difficulty: z.enum(['debutant', 'intermediaire', 'avance']).default('intermediaire'),
      // Matériel/produits éventuellement mentionnés.
      gear: z.array(z.string()).default([]),
    }),
});

const culture = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/culture' }),
  schema: ({ image }) =>
    z.object({
      ...baseFields({ image }),
    }),
});

export const collections = { photographers, techniques, culture };
