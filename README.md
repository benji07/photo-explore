# Photo·Explore

Carnet de culture photographique : photographes, techniques et histoire de la
photographie. Site statique généré avec [Astro](https://astro.build) et publié
sur GitHub Pages.

🔗 **En ligne** : https://benjamin.leveque.me/photo-explore/

## Ajouter un article

Tout se joue dans un seul fichier Markdown. Voir **[`CLAUDE.md`](./CLAUDE.md)**
(règles) et **[`docs/AUTHORING.md`](./docs/AUTHORING.md)** (exemples complets).

En bref :

| Rubrique | Dossier |
| --- | --- |
| Photographes | `src/content/photographers/` |
| Techniques | `src/content/techniques/` |
| Culture | `src/content/culture/` |

Le nom du fichier (`kebab-case`, sans accents) devient l'URL. Le frontmatter est
validé au build : un article mal formé fait échouer le build avec une erreur
précise.

## Alimentation automatique

Le blog est conçu pour être nourri par une **routine Claude Code**. Le prompt
prêt à l'emploi est dans **[`docs/ROUTINE.md`](./docs/ROUTINE.md)**.

## Développement local

```bash
npm install
npm run dev      # http://localhost:4321/photo-explore/
npm run build    # génère dist/ (valide le schéma de contenu)
npm run preview  # sert le build de production
```

> Les articles d'exemple sont en `draft: true` : visibles en `dev`, masqués en
> production.

## Déploiement

Chaque push sur `main` déclenche le workflow
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) qui construit le
site et le publie sur GitHub Pages.

**Réglage initial requis (une fois)** : dans *Settings → Pages → Build and
deployment → Source*, choisir **GitHub Actions**.

## Stack

- Astro 5 (collections de contenu + validation Zod)
- `@astrojs/sitemap`, `@astrojs/rss`
- Déploiement : GitHub Actions → GitHub Pages
