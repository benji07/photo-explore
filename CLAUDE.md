# Photo·Explore — guide pour l'agent de rédaction

Ce dépôt est un blog statique (Astro) publié sur GitHub Pages. Il présente des
**photographes**, des **techniques** photo et des articles de **culture**
photographique. La langue du site est le **français**.

Public : un photographe argentique expérimenté (bonnes bases techniques, pratique
le tirage couleur et le développement N&B/couleur) qui veut **combler ses lacunes
de culture** : découvrir des photographes (connus comme méconnus) et approfondir
des domaines variés. Écris pour ce lecteur : pas de tutoriels « pour débutants
absolus », privilégie la culture, l'histoire, et la technique au-delà des bases.

## La règle d'or

**Pour ajouter un article : crée UN seul fichier `.md` dans le bon dossier, puis
commit.** Ne modifie pas la configuration, les layouts, les composants, le
workflow, ni les autres articles — sauf demande explicite.

## Où écrire

| Type d'article | Dossier |
| --- | --- |
| Photographe | `src/content/photographers/` |
| Technique | `src/content/techniques/` |
| Culture | `src/content/culture/` |

## Nommage du fichier

- **kebab-case, ASCII, sans accents ni espaces** : le nom du fichier devient le
  slug de l'URL.
- Exemples : `henri-cartier-bresson.md`, `tirage-cibachrome.md`,
  `naissance-du-photojournalisme.md`.

## Frontmatter (en-tête YAML)

Champs **communs** à tous les articles :

```yaml
title: "Titre de l'article"          # requis
description: "Résumé court (≤ 160 caractères)."  # requis
date: 2026-06-06                       # requis, format AAAA-MM-JJ (aujourd'hui)
draft: false                           # false pour publier ; true pour masquer
tags: ["mot-clé", "autre"]            # optionnel
# cover / coverAlt : voir « Images » ci-dessous (optionnel)
```

### Photographe — champs en plus

```yaml
name: "Prénom Nom"                     # requis
era: "1908–2004"                       # optionnel (dates ou "XXe siècle")
nationality: "Française"               # optionnel
genres: ["photographie de rue"]        # optionnel
```

### Technique — champs en plus

```yaml
difficulty: avance                     # debutant | intermediaire | avance
gear: ["révélateur D-76"]              # optionnel
```

### Culture

Aucun champ supplémentaire : seulement les champs communs.

## Images

- **Par défaut, n'ajoute PAS de `cover`** : une couverture de repli s'affiche
  automatiquement. C'est l'option la plus sûre (jamais de build cassé).
- **Image locale (recommandé)** — place le fichier dans `src/assets/covers/`, puis :
  ```yaml
  cover: ../../assets/covers/mon-image.jpg
  coverAlt: "Description de l'image"
  ```
  Formats acceptés : `jpg`, `png`, `webp`, `avif`. Le fichier local est optimisé au
  build et ne risque jamais de disparaître.
- **URL externe (autorisé)** — tu peux pointer une image distante :
  ```yaml
  cover: "https://exemple.org/chemin/mon-image.jpg"
  coverAlt: "Description de l'image"
  ```
  Conditions à respecter :
  - **Crédite la source** par une ligne discrète en italique à la fin du corps de
    l'article, par ex. : `*Image : Auteur — Source, licence.*`
  - N'utilise que des images dont la licence le permet (**domaine public, CC0/CC**,
    ou autorisation d'embarquer). Ne hot-linke pas d'œuvres sous copyright.
  - Une image distante peut **casser** si l'hôte la supprime ou bloque le
    hot-linking ; en cas de doute, préfère l'image locale.

## Corps de l'article

- Markdown en français.
- Le titre vient du frontmatter : commence les sections en `##` (puis `###`),
  **jamais** `#`.
- Vise 400–900 mots, structurés, avec des intertitres.

## Avant de commit

Lance le build — c'est lui qui valide le schéma :

```bash
npm install   # la première fois seulement
npm run build
```

Si le build échoue, corrige le frontmatter signalé par l'erreur avant de commit.

Détails et exemples complets : voir `docs/AUTHORING.md`.
Le déploiement (GitHub Pages) se fait automatiquement à chaque push sur `main`.
