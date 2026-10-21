---
workflow: general-video
flow: automation
storyboard: no
message: "OPERIUS crée, rend visible et valorise la présence digitale des professionnels"
destination: site web, LinkedIn, Instagram, présentations commerciales
aspect: "16:9"
language: fr
length: 58s
---

## Intent

Film de marque OPERIUS : une mascotte guide une caméra en travelling continu à travers les six expertises
(site internet, référencement, fiche Google, contenus, identité visuelle, réseaux sociaux), reliées par des
transitions continues (portails, zooms traversants, objets qui se transforment), jusqu'au logo officiel.
Univers majoritairement clair (blanc, bleu électrique, violet, cyan, bleu nuit en contraste), premium, lisible.
Aucune voix, aucune statistique inventée, aucune promesse SEO garantie.

## Assets

- assets/brand/operius-logo.png — logo officiel, copié à l'identique, affiché sans effet ni recadrage (scène 8 uniquement).
- assets/mascot/*.png — 15 poses détourées depuis la planche fournie (wave, wink, laptop, hello, question, heart, music, dash, megaphone, glasses, lie, coffee, browser, cheer, search). Jamais redessinées ; animées par changements de pose, sauts, glissades.

## Customizations

- Approche confirmée : « 2D en profondeur » (parallaxe, perspective CSS 3D, travellings, mascotte par poses), pas de vrai moteur 3D ni de cycle de marche.
- Bande-son confirmée : sound design synthétisé seul (tools/make_sfx.py), pas de musique fournie.
- Visuels confirmés : maquettes génériques (operiusstudio.com inaccessible depuis l'environnement de build) ; pas de captures de réalisations réelles.
- Mode confirmé : une seule passe, sans storyboard.

## Notes

- 8 scènes : intro 0–6 s, #1 site 6–14, #2 SEO 14–21, #3 fiche Google 21–28, #4 contenus 28–35, #5 identité 35–42, #6 réseaux 42–49, conclusion 49–58 (chevauchements de ~0,7 s pour les transitions).
- Textes à l'écran exacts (accents compris) : « #N — NOM » + accroche, puis conclusion « Site internet · Référencement · Image de marque », « Votre présence digitale, pensée pour vous faire avancer. », « operiusstudio.com ». Le logo officiel tient lieu de « OPERIUS ».
- Icônes de réseaux sociaux génériques (pas de logos officiels déformés), aucun chiffre d'audience, aucun avis ou client réel.
- Source de génération : `node tools/build.mjs` assemble `tools/scenes/*.html` + `tools/shared.*` vers `compositions/` ; ne pas éditer `compositions/` à la main.
