# Routine Claude Code — alimenter le blog automatiquement

Cette page contient un **prompt prêt à coller** dans une routine Claude Code
(claude.ai/code → automatisations / routines planifiées) pointant sur le dépôt
`benji07/photo-explore`, branche `main`.

## Réglages suggérés de la routine

- **Fréquence** : 1×/jour ou quelques fois/semaine (à ton goût).
- **Dépôt / branche** : `benji07/photo-explore` sur `main`.
- **Politique réseau** : accès web utile pour vérifier les faits (dates, noms).

## Prompt à coller

```text
Tu alimentes le blog Photo·Explore (dépôt courant). Lis d'abord CLAUDE.md et
docs/AUTHORING.md : ils décrivent la ligne éditoriale, les dossiers, le
frontmatter et les règles. Respecte-les à la lettre.

Objectif du jour : ajouter UN nouvel article de qualité, en français.

1. Choisis une rubrique en alternant dans le temps (photographes / techniques /
   culture). Privilégie les photographes et la culture : le lecteur veut surtout
   combler ses lacunes de culture photographique. Pour les techniques, vise
   l'argentique, le labo (développement, tirage couleur et N&B), les procédés
   alternatifs — au-delà des bases.
2. Vérifie les fichiers déjà présents dans src/content/<rubrique>/ pour NE PAS
   traiter un sujet déjà couvert. Choisis un sujet nouveau et intéressant
   (n'hésite pas à proposer un·e photographe méconnu·e).
3. Si tu as accès au web, vérifie les faits clés (dates, nationalité, œuvres).
4. Rédige l'article : 400–900 mots, intertitres en ##, ton informé mais
   accessible, sans cover (laisse l'image de repli).
5. Crée le fichier .md au bon endroit, nom en kebab-case sans accents.
6. Lance `npm install` (si besoin) puis `npm run build`. Corrige le frontmatter
   tant que le build échoue.
7. Quand le build passe, commit avec un message clair (ex : "Ajoute un portrait
   de <nom>") et push sur main. N'ouvre pas de pull request.

Ne modifie aucun autre fichier que le nouvel article.
```

## Idées de sujets (pour amorcer)

- **Photographes** : Vivian Maier, Saul Leiter, Daido Moriyama, Fan Ho,
  Gordon Parks, Sabine Weiss, Guy Bourdin, Stephen Shore, Luigi Ghirri…
- **Techniques** : tirage couleur RA-4, virage sépia/sélénium, sténopé,
  cyanotype, contretypes, lecture d'un négatif, développement par inspection…
- **Culture** : la New Color Photography, l'école de Düsseldorf, le
  photojournalisme, la photographie humaniste française, le mouvement
  pictorialiste, l'histoire du Leica…
