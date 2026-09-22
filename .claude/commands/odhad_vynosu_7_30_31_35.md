# Odhadovaný výnos – byty 7, 30, 31, 35 + nová cena bytu 7

Navazuje na zadání „Ceník a výnosy – Čimerovy byty“. Stejné sloupce, stejný formát; jen tyto byty jsou **odhad** (nejsou v provozu), takže mají hvězdičky `**` jako byt č.24.

## 1) Ceník

| Byt | `price` | `priceVynos` | `vynos` |
|---|---|---|---|
| Byt č.7 | `"2 900 000 Kč"` (dříve 3 190 000) | `"12 282 Kč**"` | `"5,1 %**"` |
| Byt č.30 | beze změny (4 490 000 Kč) | `"16 531 Kč**"` | `"4,4 %**"` |
| Byt č.31 | beze změny (4 290 000 Kč) | `"14 581 Kč**"` | `"4,1 %**"` |
| Byt č.35 | beze změny (4 790 000 Kč) | `"17 998 Kč**"` | `"4,5 %**"` |

Poznámku `**` pod tabulkou (dosud jen pro byt č.24) nahraď obecnou:

> \*\* Jednotky, které ještě nejsou v provozu – modelový odhad při 60% obsazenosti po dokončení a zapojení do provozu resortu. Průměrná cena za noc odvozena od dosažených cen srovnatelných apartmánů v domě. U jednotek před rekonstrukcí (č. 7, č. 24) je výnos počítán z kupní ceny, bez nákladů na rekonstrukci a vybavení.

## 2) Byt č.7 – stav a detail

- `price`: `"2 900 000 Kč"`
- Do detailu (sekce „Stav“) doplň: **„Před rekonstrukcí“** a **„Balkon“** (pokud tam balkon ještě není uveden, přidej ho i do „Hlavních benefitů“ – je to hlavní výhoda bytu).
- `vynosInfo`:
  - `headline`: „Odhad: zbyde vám  12 282 Kč měsíčně“
  - `description`: „Modelový výpočet po dokončení a zapojení do provozu – při 60% obsazenosti a průměrné ceně 2 050 Kč za noc. Dokončené apartmány v domě dosáhly už v prvním roce provozu obsazenosti 53–71 %.“
  - `items`: „Čistý výnos cca 5,1 % p.a. z kupní ceny (bez nákladů na rekonstrukci)“, „Po odečtení energií, SVJ, pojištění a daně z nemovitosti“, „14 nocí ročně pro vlastní pobyt“

## 3) Byty 30, 31, 35 – `vynosInfo`

Stávající obsah `vynosInfo` (pokud v něm zůstalo cokoli z garance) nahraď:

**Byt č.30** (2kk, 57,10 m²)
- `headline`: „Odhad: zbyde vám  16 531 Kč měsíčně“
- `description`: „Modelový výpočet po zapojení do provozu – při 60% obsazenosti a průměrné ceně 2 800 Kč za noc. Dokončené apartmány v domě dosáhly už v prvním roce provozu obsazenosti 53–71 %.“
- `items`: „Čistý výnos cca 4,4 % p.a.“, „Po odečtení energií, SVJ, pojištění a daně z nemovitosti“, „14 nocí ročně pro vlastní pobyt“

**Byt č.31** (2kk, 42,49 m²)
- `headline`: „Odhad: zbyde vám  14 581 Kč měsíčně“
- `description`: stejná jako u č.30, jen „…průměrné ceně 2 500 Kč za noc…“
- `items`: „Čistý výnos cca 4,1 % p.a.“, další dvě položky stejné

**Byt č.35** (3kk, 53,63 m²)
- `headline`: „Odhad: zbyde vám  17 998 Kč měsíčně“
- `description`: stejná jako u č.30, jen „…průměrné ceně 3 000 Kč za noc…“
- `items`: „Čistý výnos cca 4,5 % p.a.“, další dvě položky stejné

## 4) Kontrola

- V ceníku mají čísla všechny volné byty: 7, 19, 20, 24, 30, 31, 35, 37. Skutečnost (19, 20, 37) bez hvězdiček `**`, odhady (7, 24, 30, 31, 35) s `**`.
- Pošli mi seznam změn.
