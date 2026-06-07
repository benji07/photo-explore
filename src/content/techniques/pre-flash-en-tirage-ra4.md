---
title: "Le pre-flash en tirage RA-4"
description: "Sauver les hautes lumières du papier couleur : principe sensitométrique du pré-flashage, dosage à la bande d'essai et flash coloré."
date: 2026-06-07
draft: false
difficulty: avance
gear: ["tête couleur ou tiroir à filtres", "chimie RA-4", "minuterie au 1/10 s", "charte gris neutre", "loupe de mise au point"]
tags: ["argentique", "labo", "couleur", "tirage", "contraste"]
---

En tirage noir et blanc, quand un négatif est trop contrasté, on baisse le grade :
le papier multigrade offre un réglage continu de la dureté. **Le papier couleur
RA-4 n'a pas cet équivalent.** Sa courbe est fixe et naturellement raide, calée
pour restituer fidèlement un négatif couleur correctement exposé. Dès que la scène
dépasse cette plage — un ciel d'été sur un paysage à l'ombre, une robe blanche au
soleil — les hautes lumières « brûlent » en blanc papier sans matière, et aucune
molette de filtration ne les rattrape.

Le **pré-flashage** (*pre-flash*) est l'un des rares leviers de réduction de
contraste qui restent accessibles sous l'agrandisseur, sans chimie spéciale ni
masque. L'idée : donner au papier une petite dose de lumière uniforme, *en plus*
de l'image, pour le rendre réceptif là où il ne l'était pas. C'est une technique
de sensitométrie pure ; la comprendre, c'est savoir exactement ce qu'on gagne — et
ce qu'on risque.

## Comprendre le pré-flashage : la sensitométrie

### Seuil, inertie et pied de la courbe

Une émulsion ne réagit pas dès le premier photon. Il lui faut franchir un **seuil**
(l'« inertie ») avant qu'une densité visible apparaisse au développement : c'est le
**pied** (*toe*) de la courbe caractéristique, cette zone molle où la densité
décolle lentement de la valeur minimale du papier. En dessous du seuil, la lumière
ne « compte » pas ; juste au-dessus, il faut beaucoup d'exposition pour un petit gain
de densité.

Le pré-flashage consiste à donner au papier une exposition uniforme **juste sous ce
seuil**, sans image dans l'agrandisseur. Le papier n'est pas encore voilé — rien
n'est visible — mais il est désormais « amorcé » : l'exposition de l'image, ajoutée
par-dessus, le fait réagir dès les plus faibles lumières, qui auparavant restaient
sous le seuil.

![Courbe caractéristique du papier RA-4 sans et avec pré-flash : le pré-flash relève le pied de la courbe, faisant apparaître une densité aux faibles expositions.](/photo-explore/images/schemas/pre-flash-courbe-caracteristique.svg)

*Le pré-flash relève le pied de la courbe : aux faibles expositions, une densité apparaît et la pente y devient plus douce.*

### Pourquoi l'effet se concentre sur les hautes lumières

C'est ici qu'intervient la logique **négatif-positif** du RA-4. Une zone claire du
sujet est **dense** sur le négatif : elle ne laisse passer que peu de lumière vers
le papier. Les hautes lumières du tirage correspondent donc aux **faibles
expositions du papier** — précisément la région du pied de la courbe.

Comme le pré-flash est une exposition **additive et constante**, son poids relatif
est maximal là où l'image apporte peu de lumière, c'est-à-dire dans les hautes
lumières, et négligeable là où l'image en apporte beaucoup, dans les ombres. Le
pré-flash fait donc « décoller » les tons clairs du blanc papier sans toucher aux
noirs. Résultat : la **réduction de contraste est nette dans les hautes lumières,
sensible dans les médiums, et quasi nulle dans les ombres**.

## Ce que le pre-flash change (et ce qu'il ne change pas)

Concrètement, sur l'épreuve, les blancs les plus vifs cessent d'être du papier nu :
ils prennent une **légère densité** et retrouvent de la **séparation** (la texture
d'un nuage, le pli d'un tissu blanc). On gagne du détail dans les lumières et un
contraste global un peu plus doux.

![Échelle tonale d'un tirage avant et après pré-flash : les hautes lumières sont comprimées et retrouvent du détail, les ombres restent inchangées.](/photo-explore/images/schemas/pre-flash-effet-tonal.svg)

*Les hautes lumières sont comprimées et retrouvent de la matière ; les ombres, elles, ne bougent pas.*

Le revers, c'est qu'on marche sur une ligne de crête. **Trop de flash voile le
papier** : on ne relève plus seulement le pied, on ajoute une densité partout, y
compris dans les noirs. Le **Dmax s'effondre**, les ombres profondes virent au gris
et le tirage prend un aspect **terne et « boueux »**. La règle est donc de rester
sous le seuil de teinte visible : on cherche le maximum d'effet utile *avant* que
le papier ne commence à grisonner sur une zone non exposée.

## La dimension couleur : le flash teinté

Le pré-flash peut être **neutre** (lumière blanche) ou **coloré**, en jouant sur les
molettes jaune (Y) et magenta (M) de la tête couleur. Et là, le RA-4 offre une porte
dérobée que le N&B ne connaît pas.

Le même raisonnement de proportion s'applique à la couleur : puisque le pré-flash
représente une grande part de la lumière reçue par les hautes lumières mais une part
infime de celle reçue par les ombres, **une teinte introduite par le flash colore
surtout les tons clairs** et se dilue dans le reste de l'image.

![Diagramme montrant qu'à quantité de flash égale, le pré-flash représente une grande proportion de la lumière reçue par les hautes lumières et une faible proportion pour les ombres.](/photo-explore/images/schemas/pre-flash-flash-colore.svg)

*À flash égal, la teinte pèse lourd dans les clairs et se dilue dans les ombres.*

On peut ainsi **réchauffer ou refroidir les blancs**, ou neutraliser une dominante
qui ne gêne que dans les hautes lumières, sans déséquilibrer l'ensemble du tirage —
ce qu'une correction de filtration globale, elle, ne saurait faire de façon aussi
localisée tonalement.

## Mise en pratique : doser le pre-flash

### Monter le banc

L'agrandisseur lui-même sert de source. **Retirez le négatif**, montez la tête
**aussi haut que possible** et **fermez fortement le diaphragme** (de l'ordre de
f/16) : on veut une lumière faible, douce et parfaitement **uniforme** sur toute la
surface du papier. Une mise au point volontairement floue ou un diffuseur aident à
gommer toute structure résiduelle. Pour un flash neutre, repartez d'une filtration
basse ; pour un flash teinté, affichez les valeurs Y/M voulues.

![Montage du pré-flash : agrandisseur sans négatif, tête haute, diaphragme fermé, et bande d'essai de seuil avec zone témoin.](/photo-explore/images/schemas/pre-flash-banc-essai.svg)

*À gauche, le banc de flash ; à droite, la bande d'essai pour trouver le seuil.*

### Trouver le seuil à la bande d'essai

Le réglage se trouve **à l'essai**, car il dépend de la lampe, du tirage de
l'agrandisseur, du diaphragme et du papier. Sur une chute de papier, **réservez une
zone non exposée** (cache opaque) : ce sera votre **témoin** du « blanc papier »
pur. Exposez le reste par crans croissants (par exemple de 2 en 2 secondes), passez
au développement complet, puis comparez à sec sous lumière de référence.

Vous cherchez le **premier cran qui montre une teinte juste perceptible** par
rapport au témoin… puis vous **retenez le cran immédiatement précédent**. C'est le
pré-flash maximal « propre » : tout ce qui se voit déjà sur une zone vierge se
verra aussi dans vos noirs.

> **Comparatif avant/après (à insérer).**
>
> ![Tirage RA-4 sans pré-flash : hautes lumières brûlées.](/photo-explore/images/exemples/pre-flash-ra4/sans-preflash.jpg)
>
> *Sans pré-flash — hautes lumières sans détail.*
>
> ![Tirage RA-4 avec pré-flash : hautes lumières rattrapées.](/photo-explore/images/exemples/pre-flash-ra4/avec-preflash.jpg)
>
> *Avec pré-flash — détail et matière retrouvés dans les clairs.*

### Pré-flash ou post-flash ?

Comme l'exposition est **additive**, flasher le papier *avant* ou *après* avoir
projeté l'image revient pratiquement au même résultat ; on parle de « pré »-flash
par simple commodité de manipulation. Ce qui compte, ce n'est pas l'ordre mais la
**dose** : tant qu'elle reste sous le seuil, l'effet est un relèvement du pied ;
au-delà, on bascule dans le **voile** (une densité visible ajoutée partout), qui
est le mode d'échec à éviter.

### Intégrer au flux de travail

Procédez dans l'ordre : **équilibrez d'abord couleur et densité** de votre tirage de
référence (voir l'article sur l'équilibrage RA-4), **puis** ajoutez le pré-flash pour
maîtriser les hautes lumières. Comme le flash augmente très légèrement la densité
des clairs, un petit réajustement de la pose principale peut être nécessaire.
Notez la valeur de flash (temps, diaph, filtration) avec le reste de vos réglages :
elle est reproductible d'un tirage à l'autre pour un même papier.

## Cas particulier : le RA-4 reversal (tirage depuis diapositive)

Si vous tirez une **diapositive** sur papier RA-4 en traitement **inversible**, la
relation tonale s'inverse : le processus est positif-positif, et ce sont alors les
**ombres et les noirs** qui se trouvent dans la région la plus sensible au flash.
Le pré-flash y sert à ouvrir/éclaircir les ombres, mais le danger devient la
**chute du noir** : au-delà d'une certaine dose, les noirs se délavent et le tirage
ternit. Les praticiens citent, à titre d'ordre de grandeur (objectif de 50 mm à
f/16, tête montée haut), des temps de l'ordre d'une dizaine de secondes au-delà
desquels le Dmax commence à souffrir — à recaler impérativement sur **votre** banc.

## Quand le pre-flash ne suffit pas : les alternatives

Le pré-flashage agit surtout sur les hautes lumières ; pour une réduction de
contraste plus profonde et plus contrôlable, deux autres voies existent :

- **Le masquage de contraste.** On tire un masque (un positif flou et de faible
  densité) que l'on met en registre avec le négatif pour comprimer sa plage de
  densités avant tirage. C'est la méthode la plus puissante mais la plus exigeante
  en matériel et en rigueur ; Ctein lui consacre une large part de *Post Exposure*.
- **Le SLIMT / méthode Sterry** (*Selective Latent Image Manipulation Technique*).
  On baigne le papier **exposé mais non développé** dans une solution très diluée de
  **ferricyanure de potassium** (de l'ordre de 0,01 à 0,03 %) avant le révélateur :
  ce blanchiment de l'image latente attaque préférentiellement les faibles densités
  et **réduit le contraste**. David Kachel a modernisé ce vieux procédé de John
  Sterry (1904) pour le rendre fiable sur papier comme sur film, RA-4 compris.

| Méthode | Agit surtout sur | Complexité |
| --- | --- | --- |
| Pré-flash | hautes lumières | faible (sous l'agrandisseur) |
| SLIMT / Sterry | bas contraste global | moyenne (un bain en plus) |
| Masque de contraste | plage entière | élevée (mise en registre) |

Pour la plupart des situations courantes — un ciel à sauver, des blancs à retenir —
le pré-flash reste la solution la plus rapide et la moins risquée, à condition de
respecter ce seuil de teinte que la bande d'essai vous révèle.

## Sources

- *Pre-Flash Printing*, Darkroom Dave (darkroomdave.com) — principe et mise en œuvre
  du pré-flashage sous l'agrandisseur.
- *Paper Flashing — the pre-flash* et *Pre-flash examples*, Photomi7ch
  (photomi7ch.blogspot.com) — seuil, inertie et méthode de la bande d'essai.
- Discussions techniques sur Photrio (photrio.com) : « Contrast control & color
  printing », « Pre-flashing RA-4 », « Preflash with Colour? » — effet sur les
  hautes lumières et flash coloré en RA-4.
- *Printing from slide film using RA-4 reversal processing*, EMULSIVE (emulsive.org)
  — pré-flash en tirage inversible et chute du Dmax.
- *Latent image bleaching / the new Sterry method*, Ed Buffaloe (unblinkingeye.com)
  et David Kachel, *Practical Applications for S.L.I.M.T.* (davidkachel.com,
  freestylephoto.com) — réduction de contraste par ferricyanure dilué.
- Ctein, *Post Exposure: Advanced Techniques for the Photographic Printer* — masquage
  de contraste pour le tirage couleur RA-4.
- « RA-4 process », Wikipedia (en.wikipedia.org) — rappel du procédé chromogène
  négatif-positif.
