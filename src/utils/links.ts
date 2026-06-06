// Préfixe tous les liens internes par le `base` du site (ex : /photo-explore).
// Indispensable sur une page de projet GitHub Pages servie sous un sous-chemin.
// Robuste quelle que soit la présence d'un slash final sur BASE_URL.
const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  const base = BASE.replace(/\/+$/, ''); // -> "/photo-explore"
  const clean = path.replace(/^\/+/, ''); // retire les slashs de tête
  return clean ? `${base}/${clean}` : `${base}/`;
}
