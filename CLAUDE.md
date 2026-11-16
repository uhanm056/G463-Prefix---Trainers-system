# G463 Prefix – Training system

Uživatel: Milan Hanus. Komunikace česky, stručně, výstupy hotové k použití. Architektura stejná jako repo `uhanm056/plant-management-system` (shell + moduly v rámu).

## Architektura
- `index.html` – shell, pole `GROUPS` = menu i dlaždice úvodu. Modul se načte do `<iframe>` podle `#hash`.
- `modules/trener/` – Trenér G463 (single-file). Firebase RTDB, kořen `trenerG463`, entity `shifts`, `obs`, `esc`, `ops`, `cfg`, `eol`.
- `modules/karty/` – Tréninkové karty (single-file). Kořen `trenerG463/karty`: `ops/<id>` {name, tl, trainer, start, note, lv/<stepId> {l 0–4, d, by}}, `procs` (seznam procesů a kroků).
- Přepínání mezi moduly z rámu: `window.top.location.hash = '<id>'`; samostatně otevřený modul jde na `../<id>/index.html`.
- `shared/embed.js` na začátku `<head>` modulu → v rámu třída `pms-embed` + `shared/embed.css`.

## Pravidla
- Nevymýšlet data; kroky procesů v kartách jsou návrh – upravuje je trenér v aplikaci.
- L1 a L2 vždy zvlášť.
- Moduly zůstávají samostatně funkční; změny chování přidávat s komentářem.
- Lokální test: `python3 -m http.server` v kořeni + Playwright.
