---
title: "Photographier au sténopé"
description: "Sans objectif, un simple trou : principe, diamètre optimal, calcul de pose et fabrication d'un sténopé."
date: 2026-06-07
draft: false
difficulty: intermediaire
gear: ["boîtier ou chambre adaptée", "feuille de laiton mince", "aiguille fine", "film ou papier", "posemètre"]
tags: ["argentique", "sténopé", "optique", "noir et blanc"]
---

Le sténopé ramène la photographie à son principe le plus nu : un trou minuscule,
une chambre noire, une surface sensible. Pas de lentille, pas de mise au point,
pas de diaphragme à choisir. Pour qui maîtrise déjà l'argentique, c'est moins une
régression qu'un retour aux fondamentaux optiques — et une esthétique singulière,
faite de douceur et de profondeur de champ illimitée.

## Le principe de la chambre noire

Chaque point lumineux du sujet projette, à travers le trou, un petit disque sur
le plan du film. Comme les rayons se croisent à l'orifice, l'image obtenue est
**inversée**. Plus le trou est petit, plus ces disques se resserrent et plus
l'image est nette — du moins jusqu'à un certain point.

![Géométrie du sténopé : un objet, un trou de diamètre d percé dans une paroi, et l'image inversée projetée à la distance focale f sur le plan du film.](/photo-explore/images/schemas/stenope-geometrie.svg)

*Les rayons se croisent au trou : l'image projetée à la distance f est inversée.*

Sans lentille, il n'y a **rien à mettre au point** : tous les plans sont rendus
avec la même (im)précision, d'où une profondeur de champ pratiquement infinie et
ce rendu doux, légèrement diffus, qui signe le sténopé.

## Le diamètre optimal

Tout se joue sur un compromis. Un trou trop **grand** laisse passer des disques
larges : l'image se brouille par géométrie. Un trou trop **petit** fait dominer
la **diffraction** : la lumière s'étale et la netteté s'effondre à nouveau. Entre
les deux existe un diamètre optimal, donné par la formule que **Lord Rayleigh**
publie dès 1891 (*On Pin-hole Photography*) :

> **d ≈ 1,9 · √(f · λ)**

où *d* est le diamètre du trou, *f* la distance trou-film (la « focale ») et *λ*
la longueur d'onde, prise par convention à **0,00055 mm** (550 nm, le vert).

Exemple concret : pour une focale de **50 mm**, on obtient
d ≈ 1,9 × √(50 × 0,00055) ≈ **0,31 mm**. Pour 100 mm, environ 0,44 mm ; pour
150 mm, environ 0,55 mm. Inutile de viser le centième : ces valeurs sont des
cibles, pas des dogmes.

## Le nombre f et la pose

Le « diaphragme » d'un sténopé se calcule comme pour un objectif : **N = f / d**.
Avec nos 50 mm et 0,31 mm, on tombe sur N ≈ 160, soit **f/160** — et l'on dépasse
vite f/200 à f/350 sur les focales plus longues. Autant dire des poses lentes.

Deux conséquences pratiques :

- **Calculer l'écart en diaphragmes** par rapport à une ouverture connue. De
  f/16 à f/160, il y a environ 6,6 diaphragmes (chaque doublement du nombre f
  vaut deux crans) : une mesure au posemètre à f/16 doit donc être multipliée par
  ~100.
- **Compenser le défaut de réciprocité.** Aux temps de pose longs (plusieurs
  secondes), les émulsions perdent en sensibilité : c'est l'effet
  Schwarzschild. La pose réelle doit être rallongée selon une loi propre à chaque
  film — consultez la notice du fabricant, qui donne souvent la correction.

## Fabriquer et percer le trou

On ne perce pas directement le boîtier : on perce une **fine feuille de laiton**
(ou une portion de canette aluminium) que l'on monte ensuite sur l'appareil. Une
aiguille fait l'affaire ; tournez-la doucement, sans transpercer d'un coup, puis
**ébavurez** au papier de verre très fin des deux côtés. Un trou propre, rond et
sans bavure vaut mieux qu'un trou pile au bon diamètre mais déchiqueté. Mesurez
le résultat à la loupe graduée si vous le pouvez.

Côté surface sensible, deux écoles : le **film**, ou le **papier
photographique** utilisé comme négatif (puis inversé par contact ou scan). Le
papier est bon marché et se manipule en lumière inactinique, mais sa sensibilité
effective est faible (souvent ISO 3–12) et son contraste élevé : prévoyez des
poses encore plus longues.

## Conseils de prise de vue

- **Trépied obligatoire** et déclenchement par cache que l'on ôte puis remet — il
  n'y a pas d'obturateur rapide.
- **Sujets adaptés** : architecture, paysage, natures mortes, scènes immobiles.
  Le flou de bougé fait partie du jeu sur les sujets mobiles.
- **Bracketez** généreusement : avec une réciprocité incertaine, mieux vaut
  encadrer la pose (×2, ×4) que rater l'unique image.

## Sources

- *On Pin-hole Photography*, Lord Rayleigh (1891) — formule d ≈ 1,9 √(fλ),
  reprise et discutée sur AlternativePhotography.com (« Pinhole Design – what
  Lord Rayleigh really said ») et 35mmc.com (série « Pinhole Adventures »).
- Valeur λ = 0,00055 mm (550 nm) et compromis géométrie/diffraction : ressources
  de calcul de sténopé (mrpinhole.com, martinwinfield.co.uk).
- Défaut de réciprocité (effet Schwarzschild) : notices techniques des fabricants
  de films argentiques.
