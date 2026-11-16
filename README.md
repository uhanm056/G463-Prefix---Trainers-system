# G463 Prefix – Training system

Aplikace pro trenéry a Team Leadery linky G463 Prefix (Yanfeng Planá). Jedno menu, jedna adresa – postavená stejně jako Plant Management System.

| Modul | Složka | Co dělá | Data |
|---|---|---|---|
| Trenér G463 | `modules/trener/` | fokus směny, stav procesů, záznamy pozorování a korekcí, eskalace, briefing TOP vad, předávka, přehled TL | Firebase RTDB `trenerG463/*` |
| Tréninkové karty | `modules/karty/` | karta operátora, skilly po procesech (4 úrovně), % za proces a celkem, import/export | Firebase RTDB `trenerG463/karty` |

## Struktura
- `index.html` – shell: navy hlavička, menu vlevo (na mobilu ☰), úvod s dlaždicemi, modul v rámu podle `#hash` (`#trener`, `#karty`).
- `modules/<id>/index.html` – samostatná aplikace, běží i otevřená zvlášť.
- `shared/embed.js` + `embed.css` – modul v rámu skryje vlastní hlavičku s logem (logo a název nese shell).
- `assets/logo.png` – logo.
- `karty.html` – přesměrování ze staré adresy na `#karty`.

Nový modul = složka `modules/<id>/` + řádek v poli `GROUPS` v `index.html`.

## Spuštění
GitHub Pages: Settings → Pages → Branch `main`, složka `/ (root)`. Firebase (projekt `g463-prefix---trainers-system`, europe-west1) je nastavený přímo v modulech, přihlášení anonymní.
