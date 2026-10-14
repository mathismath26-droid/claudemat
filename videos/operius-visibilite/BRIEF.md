---
workflow: general-video
flow: automation
storyboard: no
message: "Présence en ligne ≠ visibilité réelle"
aspect: "16:9"
length: 24s
language: fr
destination: site web, présentation commerciale, réseaux sociaux
---

## Intent

Promo motion design Operius, sans voix ni musique : la typographie, les transitions et les effets sonores portent le récit.
Progression : écouter l'activité du client → présence en ligne (validée) → retournement : présence ≠ visibilité → expertise web Operius.

## Structure

| Temps | Scène | Fichier |
| --- | --- | --- |
| 0–6.3 s | « Avant tout » / « on prend le temps » / « de connaître votre activité » | compositions/intro.html |
| 6.2–18.7 s | Ordinateur, canaux (Google Business Profile, Google Search, Instagram, site web), « présence en ligne » + check orange → croix rouge + buzzer (14.1 s) → « être visible » | compositions/presence.html |
| 18.6–24 s | Développeur en gros plan, éditeur de code + aperçu du site avec le logo Operius officiel (plein écran de 19.0 à 24.0 s) | compositions/developer.html |

## Assets

- Logo Operius : `assets/brand/operius-logo.png` — fichier original fourni, copié à l'identique (sha256 1cc090c1…), affiché sans effet ni recadrage.
- Logos plateformes : Instagram et Google Business Profile (glyphes simple-icons, CC0, couleurs officielles), « G » Google (tracé officiel Google Identity). Icône site web dessinée (générique).
- Sons : tous synthétisés par `tools/make_sfx.py` (aucune licence tierce). Aucune voix, aucun TTS, aucune musique.
- Police : Inter (bundlée), JetBrains Mono pour le code.
