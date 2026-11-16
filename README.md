# G463 Prefix – Trainers system

Aplikace pro trenéry na lince G463 Prefix (Planá): fokus směny podle rozhodovacího diagramu, záznamy pozorování a korekcí, eskalace, briefing TOP vad z EOL / 200% kontroly, předávka směny a přehled pro TL.

Single-file HTML (`index.html`), data ve Firebase Realtime Database (europe-west1). Konfigurace Firebase se vkládá v aplikaci: Nastavení → Data a sdílení.

## Moduly

- `index.html` – **Trenér G463**: směna, linka, záznamy, eskalace, závěr, přehled TL.
- `karty.html` – **Tréninkové karty**: karta každého operátora se skilly po procesech (Spacer, Glue application, Prefix, Lamination, Edge Wrapping, Rework), 4 úrovně u každého kroku, automatický součet % za proces i celkem, přehled týmu s hledáním a filtrem TL, import (xlsx / csv / vložení z Excelu), export do Excelu (CSV). Data ve stejném Firebase projektu pod `trenerG463/karty`.

Mezi moduly se přepíná tlačítkem **Karty** v menu aplikace Trenér a odkazem **Trenér G463** v menu karet.
