# Ceník a výnosy – Čimerovy byty 19, 20, 24, 37 + rámování „výchozí úroveň“

Navazuje na předchozí úpravy (opravu Čimerových bytů a opravu nákladů). Tohle zadání **nahrazuje** všechna dřívější čísla ve sloupcích výnosu a ve `vynosInfo` u bytů 19, 20, 24, 37.

## 1) Ceník – sloupce výnosu

Záhlaví sloupců (jen pro Červený dvůr):
- `priceVynos` → **„Zbyde vlastníkovi /měs.*“**
- `vynos` → **„Čistý výnos p.a.*“** (nahrazuje „Obsazenost 2026“)

Hodnoty:

| Byt | `priceVynos` | `vynos` |
|---|---|---|
| Byt č.19 | `"15 567 Kč"` | `"5,5 %"` |
| Byt č.20 | `"11 181 Kč"` | `"5,2 %"` |
| Byt č.24 | `"13 132 Kč**"` | `"5,3 %**"` |
| Byt č.37 | `"12 442 Kč"` | `"4,3 %"` |

U všech ostatních bytů zůstávají obě pole prázdná (`""`).

Poznámka pod tabulkou (nahraď stávající):

> \* Skutečnost leden–srpen 2026 přepočtená na rok. Jde o první rok provozu v resortu, který se teprve dokončuje – čísla chápeme jako výchozí úroveň. Podíl vlastníka 45 % z ubytovací tržby bez DPH po odečtení nákladů vlastníka (energie, SVJ a fond oprav, pojištění, daň z nemovitosti), před zdaněním příjmu. Čistý výnos počítán z inzerované ceny. Nejde o garanci budoucího výnosu.
>
> \*\* Byt č. 24 je před rekonstrukcí – odhad při 60% obsazenosti a 2 200 Kč za noc po dokončení. Výnos počítán z kupní ceny, bez nákladů na rekonstrukci a vybavení.

## 2) Detail bytů – `vynosInfo`

**Byt č.19**
- `headline`: „Zbyde vám  15 567 Kč měsíčně“
- `description`: „Skutečné výsledky z prvního roku provozu, kdy se resort ještě dokončoval. Berte je jako výchozí úroveň – po dokončení celého areálu očekáváme lepší čísla.“
- `items`:
  - „Čistý výnos 5,5 % p.a. (skutečnost 1–8/2026), konzervativně 4,5 % p.a.“
  - „Obsazenost 70,8 % za leden–srpen 2026“
  - „Po odečtení energií, SVJ, pojištění a daně z nemovitosti“
  - „14 nocí ročně pro vlastní pobyt“

**Byt č.20**
- `headline`: „Zbyde vám  11 181 Kč měsíčně“
- `description`: stejný jako u č.19
- `items`:
  - „Čistý výnos 5,2 % p.a. (skutečnost 1–8/2026), konzervativně 4,5 % p.a.“
  - „Obsazenost 54,3 % za leden–srpen 2026“
  - „Po odečtení energií, SVJ, pojištění a daně z nemovitosti“
  - „14 nocí ročně pro vlastní pobyt“

**Byt č.37**
- `headline`: „Zbyde vám  12 442 Kč měsíčně“
- `description`: stejný jako u č.19
- `items`:
  - „Čistý výnos 4,3 % p.a. (skutečnost 1–8/2026), konzervativně 3,8 % p.a.“
  - „Obsazenost 53,1 % za leden–srpen 2026, v létě až 81 %“
  - „Po odečtení energií, SVJ, pojištění a daně z nemovitosti“
  - „14 nocí ročně pro vlastní pobyt“

**Byt č.24**
- `headline`: „Odhad: zbyde vám  13 132 Kč měsíčně“
- `description`: „Modelový výpočet po dokončení a zapojení do provozu – při 60% obsazenosti a průměrné ceně 2 200 Kč za noc. Dokončené apartmány v domě dosáhly už v prvním roce provozu obsazenosti 53–71 %.“
- `items`:
  - „Čistý výnos cca 5,3 % p.a. z kupní ceny (bez nákladů na rekonstrukci)“
  - „Po odečtení energií, SVJ, pojištění a daně z nemovitosti“
  - „14 nocí ročně pro vlastní pobyt“

Pokud u bytů 19, 20, 37 zůstaly v `apText` věty „Vlastníkovi by za tuto dobu náleželo … Kč“ (hrubý podíl před náklady), smaž je. Na webu mají být jen čísla po odečtení nákladů vlastníka.

## 3) Rámeček „Proč je tohle jiné než u konkurence?“ (InvestBlock)

Nahraď text:

> Garantovaný nájem se vždy platí z budoucích tržeb – a po skončení garance se ukáže realita. My ukazujeme rovnou skutečná čísla: apartmány v provozu dosáhly za leden–srpen 2026 obsazenosti 53–71 %, a to v prvním roce provozu a v resortu, který se teprve dokončuje. Tato čísla považujeme za výchozí úroveň. S dokončením celého areálu – kavárny s kuchyní, společných prostor a dalšího zázemí – a s rostoucím počtem hodnocení hostů očekáváme jejich další růst.

Šedý disclaimer pod rámečkem („Uvedené údaje jsou historické výsledky, nikoli příslib ani záruka budoucího výnosu…“) ponech beze změny.

## 4) Kontrola

- Ceník: 19, 20, 24, 37 volné s cenou, oběma výnosovými čísly a „Více info“. U 24 hvězdičky `**` a druhá poznámka.
- Žádné hrubé částky (19 067 / 13 931 / 16 192 Kč) nikde na webu nezůstaly.
- Pošli mi seznam změn.
