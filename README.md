# G463 Prefix – Training system

Tréninkové karty operátorů linky G463 Prefix (Yanfeng Planá) pro trenéry a Team Leadery. Postavené stejně jako Plant Management System (shell + moduly).

| Modul | Složka | Co dělá | Data |
|---|---|---|---|
| Tréninkové karty | `modules/karty/` | karta operátora, skilly po procesech (4 úrovně), % za proces a celkem, import/export | Firebase RTDB `trenerG463/karty` |

## Struktura
- `index.html` – shell: navy hlavička, menu vlevo (na mobilu ☰), úvod s dlaždicemi, modul v rámu podle `#hash` (`#karty`). Dokud je modul jen jeden, shell skryje menu a otevře ho rovnou.
- `modules/<id>/index.html` – samostatná aplikace, běží i otevřená zvlášť.
- `shared/embed.js` + `embed.css` – modul v rámu skryje vlastní hlavičku s logem (logo a název nese shell).
- `assets/logo.png` – logo.
- `karty.html` – přesměrování ze staré adresy na `#karty`.

Nový modul = složka `modules/<id>/` + řádek v poli `GROUPS` v `index.html`.

## Spuštění
GitHub Pages: Settings → Pages → Branch `main`, složka `/ (root)`. Firebase (projekt `g463-prefix---trainers-system`, europe-west1) je nastavený přímo v modulech, přihlášení anonymní.
