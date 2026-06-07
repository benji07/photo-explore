# Routines Claude Code — alimenter le blog automatiquement

Ce document décrit un **workflow hebdomadaire** pour alimenter le blog Photo·Explore
(dépôt `benji07/photo-explore`, branche `main`) avec des routines Claude Code
planifiées (claude.ai/code → automatisations / routines), tout en gardant **le choix
des sujets entre tes mains**.

## Vue d'ensemble du workflow

| Jour | Routine | Ce qu'elle fait |
| --- | --- | --- |
| **Samedi** | Curation | Crée une **issue GitHub** « Sujets de la semaine » avec 4–5 candidats par catégorie (cases à cocher). |
| **Week-end** | *(toi)* | Tu **coches une case par catégorie** (ou tu commentes) pour choisir les sujets à rédiger. |
| **Lundi** | Rédaction photographe | Lit ta sélection et publie l'article **photographe**. |
| **Mercredi** | Rédaction culture | Lit ta sélection et publie l'article **culture**. |
| **Vendredi** | Rédaction technique | Lit ta sélection et publie l'article **technique**. |

Si tu n'as **rien sélectionné** pour une catégorie, la routine de rédaction
**choisit elle-même le meilleur candidat** parmi ceux proposés : le blog avance
toujours.

Tu dois créer **4 routines distinctes** dans l'interface (une par jour). Toutes
pointent sur `benji07/photo-explore` / `main`, avec **l'accès web activé** (recherche
de sujets et vérification des faits). Copie le prompt correspondant ci-dessous dans
chaque routine.

## Convention de l'issue de sélection

C'est le contrat partagé entre la routine de curation et les routines de rédaction.
Ne change pas ces conventions sans mettre à jour les quatre prompts.

- **Titre** : `Sujets de la semaine — AAAA-MM-JJ` (date du samedi). Sert d'ancre :
  les routines de rédaction prennent **la plus récente issue OUVERTE** dont le titre
  commence par « Sujets de la semaine ».
- **Label** : `sujets-semaine` si présent (optionnel, confort de filtrage).
- **Corps** : un rappel en tête, une ligne de calendrier, puis 3 sections, chacune
  une liste de cases à cocher.

```markdown
Coche **UNE case par catégorie** (le sujet à rédiger), ou commente ton choix,
avant lundi. Sans sélection, la routine choisira le meilleur candidat.

Calendrier : 📷 photographe = lundi · 🎞️ culture = mercredi · 🔧 technique = vendredi.

## 📷 Photographe (lundi)
- [ ] **Nom** — pitch d'une ligne (pourquoi il comble une lacune).
- [ ] …  (4 à 5 candidats)

## 🎞️ Culture (mercredi)
- [ ] **Sujet** — pitch.
- [ ] …

## 🔧 Technique (vendredi)
- [ ] **Sujet** — pitch.
- [ ] …
```

- **Sélection** : une case cochée `- [x]` est le signal canonique ; à défaut, un
  commentaire nommant un sujet de la section ; à défaut, la routine auto-choisit.
- **Suivi** : après publication, la routine de rédaction coche la case rédigée et
  commente « Article publié : <slug> (commit <sha>) ».

---

## Routine 1 — Samedi · curation

**Réglages** : fréquence hebdomadaire le **samedi** ; dépôt `benji07/photo-explore`
/ `main` ; accès web **activé**.

```text
Tu prépares la sélection hebdomadaire de sujets pour le blog Photo·Explore (dépôt
courant). Lis d'abord CLAUDE.md et docs/AUTHORING.md (public : photographe
argentique expérimenté qui veut combler ses lacunes de culture).

1. Recense les articles DÉJÀ présents dans src/content/photographers/,
   src/content/techniques/ et src/content/culture/ : ne propose aucun sujet déjà
   couvert.
2. Si tu as accès au web, assure-toi que chaque proposition est documentable et
   sourçable.
3. Ferme toute issue OUVERTE plus ancienne dont le titre commence par « Sujets de
   la semaine » (une seule issue de sélection active à la fois).
4. Crée UNE nouvelle issue GitHub :
   - Titre : « Sujets de la semaine — <date du jour AAAA-MM-JJ> ».
   - Label « sujets-semaine » s'il existe.
   - Corps : un rappel en tête (« Coche UNE case par catégorie, ou commente ton
     choix, avant lundi ; sans sélection je choisirai le meilleur candidat ») et la
     ligne de calendrier (📷 lundi · 🎞️ mercredi · 🔧 vendredi), puis 3 sections :
     ## 📷 Photographe (lundi), ## 🎞️ Culture (mercredi), ## 🔧 Technique (vendredi).
     Dans chaque section, 4 à 5 candidats en cases à cocher
     « - [ ] **Sujet** — pitch d'une ligne ». Varie connus et méconnus. Pour les
     techniques : argentique, labo (développement, tirage couleur/N&B), procédés
     alternatifs, au-delà des bases.
Ta seule sortie aujourd'hui est cette issue : n'écris aucun article et ne modifie
aucun fichier du dépôt.
```

---

## Routine 2 — Lundi · rédaction photographe

**Réglages** : fréquence hebdomadaire le **lundi** ; dépôt `benji07/photo-explore`
/ `main` ; accès web **activé**.

```text
Tu alimentes le blog Photo·Explore (dépôt courant). Lis d'abord CLAUDE.md et
docs/AUTHORING.md et respecte-les à la lettre.

Objectif : rédiger UN article de la rubrique PHOTOGRAPHE (dossier
src/content/photographers/), en français.

1. Retrouve l'issue de sélection : la plus récente issue OUVERTE dont le titre
   commence par « Sujets de la semaine ». Lis son corps ET ses commentaires.
2. Détermine le sujet retenu dans la section « 📷 Photographe » :
   - une case cochée « - [x] » fait foi (si plusieurs, prends la première) ;
   - sinon, un commentaire nommant explicitement un sujet de cette section ;
   - sinon (aucune sélection), choisis toi-même le candidat le plus pertinent
     parmi ceux listés dans cette section.
3. Vérifie que le sujet n'est pas déjà traité dans src/content/photographers/.
4. Si tu as accès au web, vérifie les faits clés (dates, nationalité, œuvres) et
   réunis des sources fiables (institutionnelles/primaires).
5. Rédige l'article : 400–900 mots, intertitres en ##, ton informé, sans cover.
   Frontmatter photographe : title, description (≤160 car.), date du jour,
   draft:false, name (requis), et si tu es sûr : era, nationality, genres. Termine
   par une section ## Sources. Crée le fichier .md (kebab-case ASCII, sans accents)
   dans src/content/photographers/.
6. npm install si besoin, puis npm run build ; corrige le frontmatter tant que le
   build échoue.
7. Commit clair (ex : « Ajoute un portrait de <nom> ») et push sur main. Pas de PR.
8. Signale-le sur l'issue de sélection : coche la case du sujet rédigé et ajoute un
   commentaire « Article publié : <slug> (commit <sha> court) ».
Ne modifie aucun autre fichier que le nouvel article.
```

---

## Routine 3 — Mercredi · rédaction culture

**Réglages** : fréquence hebdomadaire le **mercredi** ; dépôt `benji07/photo-explore`
/ `main` ; accès web **activé**.

```text
Tu alimentes le blog Photo·Explore (dépôt courant). Lis d'abord CLAUDE.md et
docs/AUTHORING.md et respecte-les à la lettre.

Objectif : rédiger UN article de la rubrique CULTURE (dossier
src/content/culture/), en français.

1. Retrouve l'issue de sélection : la plus récente issue OUVERTE dont le titre
   commence par « Sujets de la semaine ». Lis son corps ET ses commentaires.
2. Détermine le sujet retenu dans la section « 🎞️ Culture » :
   - une case cochée « - [x] » fait foi (si plusieurs, prends la première) ;
   - sinon, un commentaire nommant explicitement un sujet de cette section ;
   - sinon (aucune sélection), choisis toi-même le candidat le plus pertinent
     parmi ceux listés dans cette section.
3. Vérifie que le sujet n'est pas déjà traité dans src/content/culture/.
4. Si tu as accès au web, vérifie les faits clés (dates, lieux, œuvres, attributions)
   et réunis des sources fiables (institutionnelles/primaires).
5. Rédige l'article : 400–900 mots, intertitres en ##, ton informé, sans cover.
   Frontmatter culture : title, description (≤160 car.), date du jour, draft:false
   (champs communs uniquement, aucun champ supplémentaire). Termine par une section
   ## Sources. Crée le fichier .md (kebab-case ASCII, sans accents) dans
   src/content/culture/.
6. npm install si besoin, puis npm run build ; corrige le frontmatter tant que le
   build échoue.
7. Commit clair (ex : « Ajoute un article culture sur <sujet> ») et push sur main.
   Pas de PR.
8. Signale-le sur l'issue de sélection : coche la case du sujet rédigé et ajoute un
   commentaire « Article publié : <slug> (commit <sha> court) ».
Ne modifie aucun autre fichier que le nouvel article.
```

---

## Routine 4 — Vendredi · rédaction technique

**Réglages** : fréquence hebdomadaire le **vendredi** ; dépôt `benji07/photo-explore`
/ `main` ; accès web **activé**.

```text
Tu alimentes le blog Photo·Explore (dépôt courant). Lis d'abord CLAUDE.md et
docs/AUTHORING.md et respecte-les à la lettre.

Objectif : rédiger UN article de la rubrique TECHNIQUE (dossier
src/content/techniques/), en français.

1. Retrouve l'issue de sélection : la plus récente issue OUVERTE dont le titre
   commence par « Sujets de la semaine ». Lis son corps ET ses commentaires.
2. Détermine le sujet retenu dans la section « 🔧 Technique » :
   - une case cochée « - [x] » fait foi (si plusieurs, prends la première) ;
   - sinon, un commentaire nommant explicitement un sujet de cette section ;
   - sinon (aucune sélection), choisis toi-même le candidat le plus pertinent
     parmi ceux listés dans cette section. Privilégie l'argentique, le labo
     (développement, tirage couleur/N&B), les procédés alternatifs, au-delà des bases.
3. Vérifie que le sujet n'est pas déjà traité dans src/content/techniques/.
4. Si tu as accès au web, vérifie les faits clés (procédés, formules, chiffres) et
   réunis des sources fiables (publications techniques, institutionnelles).
5. Rédige l'article : 400–900 mots, intertitres en ##, ton informé, sans cover.
   Frontmatter technique : title, description (≤160 car.), date du jour, draft:false,
   difficulty (debutant|intermediaire|avance), et gear si pertinent. Termine par une
   section ## Sources. Crée le fichier .md (kebab-case ASCII, sans accents) dans
   src/content/techniques/.
6. Si un schéma clarifie vraiment le propos (trajet lumineux, logique de filtration,
   courbe, étapes d'un procédé), ajoute un fichier .svg autonome dans
   public/images/schemas/ (kebab-case ASCII, fond et couleurs en hex, font-family
   avec repli sans-serif, <title>/<desc>) et référence-le par une image Markdown :
   ![alt](/photo-explore/images/schemas/<nom>.svg). Reste sobre : un ou deux schémas
   utiles au maximum. Voir CLAUDE.md → Images → « Schémas et illustrations ».
7. npm install si besoin, puis npm run build ; corrige le frontmatter tant que le
   build échoue.
8. Commit clair (ex : « Ajoute une technique sur <sujet> ») et push sur main. Pas de PR.
9. Signale-le sur l'issue de sélection : coche la case du sujet rédigé et ajoute un
   commentaire « Article publié : <slug> (commit <sha> court) ».
Ne modifie aucun autre fichier que le nouvel article et son ou ses schémas .svg.
```

---

## Idées de sujets (pour amorcer)

La routine du samedi génère désormais des candidats frais chaque semaine ; cette
liste ne sert qu'à démarrer ou à dépanner.

- **Photographes** : Vivian Maier, Saul Leiter, Daido Moriyama, Fan Ho,
  Gordon Parks, Sabine Weiss, Guy Bourdin, Stephen Shore, Luigi Ghirri…
- **Techniques** : tirage couleur RA-4, virage sépia/sélénium, sténopé,
  cyanotype, contretypes, lecture d'un négatif, développement par inspection…
- **Culture** : la New Color Photography, l'école de Düsseldorf, le
  photojournalisme, la photographie humaniste française, le mouvement
  pictorialiste, l'histoire du Leica…
```