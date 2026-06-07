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

Seule exception tolérée : un article **technique** peut s'accompagner d'un ou
plusieurs **schémas `.svg`** placés dans `public/images/schemas/` (voir
« Images » → « Schémas et illustrations »). Rien d'autre ne change.

## Où écrire

| Type d'article | Dossier |
| --- | --- |
| Photographe | `src/content/photographers/` |
| Technique | `src/content/techniques/` |
| Culture | `src/content/culture/` |

La rubrique **technique** ne se limite pas au labo : elle couvre le « **comment
faire** » et le « **comment regarder** » — prise de vue et procédés argentiques
(développement, tirage couleur/N&B, procédés alternatifs), mais aussi composition,
cadrage, lumière et les grands genres photographiques (rue, portrait, paysage,
nature morte, documentaire…). La rubrique **culture** traite, elle, du « **comment
ça s'inscrit dans l'histoire** » : mouvements, courants, institutions, contexte.
Un même genre (la photographie de rue, p. ex.) peut donc relever de *technique* s'il
est abordé sous l'angle de la pratique, ou de *culture* sous l'angle historique.

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

- **Par défaut, n'ajoute PAS de `cover`** : un dégradé de repli coloré s'affiche
  automatiquement (différent pour chaque article). C'est l'option la plus sûre
  (jamais de build cassé).
- **Format conseillé** : privilégie une cover **paysage** (≈ 3:2 ou 16:9) ou
  **carrée**. Évite le **portrait** : sur la page article il s'étire
  verticalement et prend trop de place (sa hauteur est désormais plafonnée, mais
  le rendu reste plus équilibré en paysage ou carré).
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
  - N'utilise que des images dont la licence le permet (**domaine public, CC0/CC**,
    ou autorisation d'embarquer). Ne hot-linke pas d'œuvres sous copyright.
  - Une image distante peut **casser** si l'hôte la supprime ou bloque le
    hot-linking ; en cas de doute, préfère l'image locale.

### Créditer la couverture

Quand tu connais l'auteur et la source d'une couverture (locale ou distante),
renseigne ces deux champs : le crédit s'affiche **en petit sous l'image**, et
l'image (ainsi que le crédit) devient **cliquable vers la source**.

```yaml
coverCredit: "Auteur — Source, licence"
coverSource: "https://exemple.org/page-de-la-source"
```

Préfère ces champs à l'ancienne ligne de crédit en italique en fin d'article :
le crédit est ainsi rattaché directement à l'image.

### Illustrations dans le corps (légende + lien)

Pour une image **dans le texte** avec crédit visible et lien vers la source,
écris une image liée dont le `title` (entre guillemets) porte le crédit :

```markdown
[![Texte alternatif](https://exemple.org/photo.jpg "Auteur — Source, licence")](https://exemple.org/page-source)
```

- Le `title` devient la **légende** affichée en petit sous l'image.
- Le lien autour de l'image la rend **cliquable vers la source**.
- Sans lien (`![alt](url "crédit")`), tu obtiens une légende sans image cliquable.

### Schémas et illustrations (surtout pour les techniques)

Un article technique peut être éclairé par un **schéma** (trajet lumineux, logique
de filtration, courbe sensitométrique, étapes d'un procédé…). On les gère comme des
**fichiers `.svg` autonomes**, et **non** en SVG collé dans le `.md` :

1. Crée le fichier dans **`public/images/schemas/`**, nom en **kebab-case ASCII**
   (ex : `ra4-trajet-lumiere.svg`). Le fichier est servi tel quel : on peut
   l'ouvrir directement, et son URL reste stable.
2. Rends le SVG **auto-suffisant** (lisible hors du site) : `viewBox`, un fond
   explicite (ex : `fill="#fbfaf8"`), des couleurs en **hex** (pas de `var(...)`
   CSS), une `font-family` avec repli `sans-serif`, et un `<title>`/`<desc>` +
   `role="img"` pour l'accessibilité.
3. Référence-le dans l'article par une **image Markdown**, chemin absolu sous la
   base du site, avec un texte alternatif descriptif :
   ```markdown
   ![Description du schéma](/photo-explore/images/schemas/mon-schema.svg)

   *Légende courte en italique.*
   ```

Reste sobre : un ou deux schémas utiles valent mieux qu'une avalanche. Le `.svg`
ne casse jamais le build (fichier statique), mais vérifie quand même le rendu.

## Corps de l'article

- Markdown en français.
- Le titre vient du frontmatter : commence les sections en `##` (puis `###`),
  **jamais** `#`.
- Vise 400–900 mots, structurés, avec des intertitres.

## Sourcer l'article

**N'invente aucune information : tout fait doit être vérifié et sourcé.** Dates,
lieux, titres d'œuvres, attributions, chiffres et formules s'appuient sur des
sources fiables — privilégie les **sources primaires ou institutionnelles**
(musées comme le MoMA, Library of Congress, fondations d'auteur, encyclopédies de
référence, publications techniques) et ne retiens qu'une information **corroborée**.

Termine chaque article par une section **`## Sources`** qui liste les références
consultées (titre + éditeur/site, et le lien quand il existe). Exemple :

```markdown
## Sources

- The Gordon Parks Foundation — « American Gothic » (gordonparksfoundation.org).
- « Gordon Parks », Encyclopædia Britannica (britannica.com).
```

En cas de doute sur un fait, ne l'écris pas. Mieux vaut un article plus court mais
entièrement sourcé qu'une affirmation invérifiable.

## Avant de commit

Lance le build — c'est lui qui valide le schéma :

```bash
npm install   # la première fois seulement
npm run build
```

Si le build échoue, corrige le frontmatter signalé par l'erreur avant de commit.

Détails et exemples complets : voir `docs/AUTHORING.md`.
Le déploiement (GitHub Pages) se fait automatiquement à chaque push sur `main`.
