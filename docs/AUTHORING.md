# Guide de rédaction — exemples complets

Ce guide complète `CLAUDE.md` avec des exemples prêts à copier. Rappel de la
règle d'or : **un article = un fichier `.md` dans le bon dossier**.

## Exemple — Photographe

Fichier : `src/content/photographers/sebastiao-salgado.md`

```markdown
---
title: "Sebastião Salgado, l'épopée du noir et blanc"
description: "Du reportage social aux grands cycles sur la nature et l'humanité."
date: 2026-06-06
draft: false
name: "Sebastião Salgado"
era: "né en 1944"
nationality: "Brésilien"
genres: ["documentaire", "noir et blanc"]
tags: ["reportage", "argentique"]
---

Économiste de formation, Sebastião Salgado se consacre à la photographie...

## Les grands cycles

De *Workers* à *Genesis*, son œuvre s'organise en projets au long cours...

## Pourquoi le regarder

- La cohérence d'une vision sur plusieurs décennies.
- Le traitement du noir et blanc et des tonalités.
```

## Exemple — Technique

Fichier : `src/content/techniques/tirage-rc-vs-baryte.md`

```markdown
---
title: "Papier RC ou baryté : que choisir ?"
description: "Différences de rendu, d'archivage et de manipulation entre les deux supports."
date: 2026-06-06
draft: false
difficulty: intermediaire
gear: ["papier baryté", "papier RC"]
tags: ["tirage", "labo", "noir et blanc"]
---

Le choix du papier influence le rendu final autant que le négatif...

## Le papier RC

Résiné, séchage rapide, manipulation simple...

## Le baryté

Rendu plus profond, conservation supérieure, mais traitement plus exigeant...
```

## Exemple — Culture

Fichier : `src/content/culture/le-groupe-f64.md`

```markdown
---
title: "Le groupe f/64 et la photographie pure"
description: "Comment un collectif californien a défendu la netteté absolue."
date: 2026-06-06
draft: false
tags: ["histoire", "paysage"]
---

En 1932, en Californie, un petit groupe de photographes...

## Un manifeste pour la netteté

Le nom renvoie à la plus petite ouverture du diaphragme...

## Héritage

Ansel Adams, Edward Weston, Imogen Cunningham...
```

## Rappels utiles

- `description` : ≤ 160 caractères, c'est le résumé affiché dans les listes et
  les métadonnées.
- `date` : toujours `AAAA-MM-JJ`, la date du jour.
- `draft: true` masque l'article en production (utile pour préparer un brouillon).
- Slug = nom du fichier. `henri-cartier-bresson.md` →
  `/photo-explore/photographes/henri-cartier-bresson/`.
- Vérifie toujours avec `npm run build` avant de commit.
