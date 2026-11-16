# Tréninkové karty – G463 Prefix

Samostatná aplikace pro trenéry a Team Leadery linky G463 Prefix (Yanfeng Planá): co kdo umí na procesech Spacer, Glue application, Prefix, Lamination, Edge Wrapping a Rework – po krocích, ve 4 úrovních, se součtem zaškolení. Vzhled podle aplikace Řízení závodu (PMS).

## Stránky
- **Přehled zaškolení** – KPI, pokrytí procesů, Co řešit, vývoj zaškolení týmu, stav operátorů, největší pokrok, aktivita trenérů.
- **Operátoři** – vlevo posuvný seznam (hledání, A–Ž, filtry TL / proces / stav), vpravo karta vybraného operátora; šipky ↑ ↓ přepínají.
- **Karta operátora** – údaje, profil po procesech (radar), kroky se 4 úrovněmi, historie změn, listování ‹ ›, tisk.
- **Skill matrix** – operátoři × procesy (%), nebo × kroky jednoho procesu s rychlým zadáváním.
- **Procesy** – detail každého procesu: kdo umí, úrovně po krocích.
- **Aktivita a historie** – všechny změny s datem a jménem.
- **Nastavení** – import (xlsx / csv / vložení z Excelu), export do Excelu, procesy a kroky, parametry.

## Technika
Jeden soubor `index.html` bez buildu, fotky a logo v `assets/`. Data ve Firebase Realtime Database (projekt `g463-prefix---trainers-system`, europe-west1), kořen `trenerG463/karty`, anonymní přihlášení; bez připojení pracuje lokálně v prohlížeči. SheetJS se načte z cdnjs až při importu Excelu.

GitHub Pages: Settings → Pages → Branch `main`, složka `/ (root)`. Staré adresy `karty.html` a `modules/karty/` přesměrují na úvod.

## Sdílení a hosting
- **GitHub Pages** (běží hned): https://uhanm056.github.io/G463-Prefix---Trainers-system/
- **Firebase Hosting** (jako PMS): https://g463-prefix---trainers-system.web.app – nasazuje `.github/workflows/firebase-hosting.yml` po push do `main`, potřebuje secret `FIREBASE_SA_G463` (JSON klíč servisního účtu projektu `g463-prefix---trainers-system`). Bez secretu se krok přeskočí.
