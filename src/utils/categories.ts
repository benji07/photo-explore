import type { CollectionKey } from 'astro:content';

// Métadonnées partagées par les trois catégories du blog.
// Centralisées ici pour éviter toute duplication dans les pages/composants.
export interface Category {
  collection: CollectionKey;
  slug: string; // segment d'URL (sous base)
  label: string; // libellé affiché
  singular: string;
  description: string;
}

export const categories: Category[] = [
  {
    collection: 'photographers',
    slug: 'photographes',
    label: 'Photographes',
    singular: 'Photographe',
    description:
      'Portraits de photographes, connus comme méconnus, et des mouvements qui ont façonné la photographie.',
  },
  {
    collection: 'techniques',
    slug: 'techniques',
    label: 'Techniques',
    singular: 'Technique',
    description:
      'Prise de vue, argentique, labo et tirage, procédés alternatifs : la pratique, au-delà des bases.',
  },
  {
    collection: 'culture',
    slug: 'culture',
    label: 'Culture',
    singular: 'Culture',
    description:
      'Histoire, courants, lectures et regards pour nourrir sa culture photographique.',
  },
];

export function categoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoryByCollection(collection: string): Category | undefined {
  return categories.find((c) => c.collection === collection);
}
