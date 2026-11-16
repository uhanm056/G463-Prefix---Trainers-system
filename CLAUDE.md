# Tréninkové karty – G463 Prefix

Uživatel: Milan Hanus. Komunikace česky, stručně, výstupy hotové k použití. Vlastní samostatná aplikace (ne součást PMS), vzhledem podle bety Řízení závodu (repo `uhanm056/Plant-Management-System`, větev `nova-aplikace`, `app/src/styles.css`): navy hlavička s cestou, menu vlevo, záhlaví s fotkou (`assets/plant.jpg`, `interior.jpg`, `car.jpg`), dlaždice `.tk`, karty s navy `h3`.

## Architektura
- `index.html` – celá aplikace (single-file, vanilla JS). Routy `#/prehled`, `#/operatori[/ok|tr|new|stale|bez-trenera]`, `#/op/<id>`, `#/matice`, `#/proces/<k>`, `#/aktivita`, `#/nastaveni/import|skilly|parametry`. Každá stránka = `vXxx(r)` vrací HTML + `binds.xxx(r)` události.
- Data RTDB `trenerG463/karty`: `ops/<id>` {name, tl, trainer, start, plan (proces z rozpisu), note, lv/<stepId> {l 0–4, d, at, by}}, `procs` [{k, n, ico, col, steps:[{id, n}]}], `cfg` {thNew, thOk, stale}, `log/<pushId>` {op, s, l, p, at, by} (historie; čte se limitToLast 4000). Zápis vždy `update()` více cest (`write`), změna úrovně = `setLevel` (lv + log v jednom zápisu).
- Trend zaškolení se počítá zpětně z dnešního stavu a `log`.
- `karty.html`, `modules/karty/index.html` = přesměrování ze starých adres.
- Modul Trenér G463 odstraněn 16. 11. 2026 (kód v historii gitu, commit bf16958); jeho data ve Firebase (`trenerG463/shifts`, `obs`, `esc`, `ops`, `cfg`, `eol`) zůstala.

## Pravidla
- Nevymýšlet data; kroky procesů Spacer, Glue spray, Prefix, Lamination, EDGW jsou od linky (16. 11.); Rework je zatím návrh. Krok může mít část `g` (FRT / RR).
- L1 a L2 vždy zvlášť.
- Jména operátorů nepatří do repozitáře (je veřejný) – nahrávají se importem do Firebase.
- Lokální test: `python3 -m http.server` v kořeni + Playwright; gstatic (Firebase) a cdnjs (SheetJS) v testu podstrčit / zablokovat.
