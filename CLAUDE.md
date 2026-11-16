# G463 Prefix – Training system

Uživatel: Milan Hanus. Komunikace česky, stručně, výstupy hotové k použití. Architektura stejná jako repo `uhanm056/plant-management-system` (shell + moduly v rámu).

## Architektura
- `index.html` – shell, pole `GROUPS` = menu i dlaždice úvodu. Modul se načte do `<iframe>` podle `#hash`.
- Modul Trenér G463 (`modules/trener/`) byl na přání uživatele 16. 11. 2026 odstraněn; jeho data ve Firebase (`trenerG463/shifts`, `obs`, `esc`, `ops`, `cfg`, `eol`) zůstala nesmazaná. Kód je v historii gitu (commit bf16958).
- Jen jeden modul → shell (`body.single`) skryje menu a otevře ho rovnou.
- `modules/karty/` – Tréninkové karty (single-file). Kořen `trenerG463/karty`: `ops/<id>` {name, tl, trainer, start, note, lv/<stepId> {l 0–4, d, by}}, `procs` (seznam procesů a kroků).
- `shared/embed.js` na začátku `<head>` modulu → v rámu třída `pms-embed` + `shared/embed.css`.

## Pravidla
- Nevymýšlet data; kroky procesů v kartách jsou návrh – upravuje je trenér v aplikaci.
- L1 a L2 vždy zvlášť.
- Jména operátorů nepatří do repozitáře (je veřejný) – nahrávají se importem do Firebase.
- Moduly zůstávají samostatně funkční; změny chování přidávat s komentářem.
- Lokální test: `python3 -m http.server` v kořeni + Playwright.
