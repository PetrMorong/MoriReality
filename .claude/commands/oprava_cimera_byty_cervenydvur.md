# Oprava – Čimerovy byty 19, 20, 24, 37

Předchozí zadání obsahovalo chybný předpoklad: **Byt č.24 na webu NENÍ apartmán č. 37.** Jsou to dvě různé jednotky. Oprav prosím takto:

## 1) Byt č.24 – prodává se, ale je před rekonstrukcí

Byt č.24 je ve **3NP B** a je **před rekonstrukcí**, nemá tedy žádná provozní data.

- `floor`: `"3NP B"`
- `size`: `"29,46 m2"`
- `layout`: `"2kk"`, `category`: `"Suite"` (ponech)
- `price`: `"2 950 000 Kč"`
- `priceVynos`: `""`, `vynos`: `""` (není v provozu, žádná čísla)
- `reserved`: `false`
- `link`: teď je `?Id=25` – ověř, jestli má být `?Id=24`, oprav jen když to nerozbije routing.
- Smaž texty o provozu a výnosu z Previa, které jsi k němu doplnil minule (patří k bytu 37), včetně `vynosInfo`.

Nový detail:
- `categoryDescription`: „Apartmán 2kk ve 3. NP části B – před rekonstrukcí, s možností dokončit podle vlastních představ.“
- `apText`: Apartmán se prodává **ve stavu před rekonstrukcí**. Po dokončení jej lze zapojit do provozu resortu v modelu podílu z tržby (45 % z ubytovací tržby bez DPH) – stejně jako dokončené apartmány v domě, které mají doloženou obsazenost 53–71 % za leden–srpen 2026.
- `colOneTitle` „Hlavní benefity“: nižší vstupní cena než u dokončených jednotek · možnost ovlivnit dispozici a vybavení · po dokončení zapojení do fungujícího provozu resortu · 3. NP – klid a výhled.
- Sekce „Stav“:
  - Před rekonstrukcí
  - Rozsah a termín dokončení upřesníme individuálně
  - Zápis prohlášení vlastníka do KN: cca 11/2026
  - Rezervace: smlouva o smlouvě budoucí kupní, záloha 20 % z kupní ceny
  - Převod na nového vlastníka (kupní smlouva): 01/2028
- `colThreeNote`: „Údaje o obsazenosti se týkají jiných apartmánů v domě, nikoli této jednotky, a nejsou zárukou budoucího výnosu.“

## 2) Byt č.37 – přidat novou položku

Přidej do `apartments` za Byt č.36:

| pole | hodnota |
|---|---|
| `number` | `"Byt č.37"` |
| `floor` | **DOPLNÍM** – zatím dej `"—"` a na konci mi připomeň, že chybí |
| `layout` | `"2kk"` |
| `size` | `"40,86 m2"` |
| `category` | `"Komfort"` |
| `price` | `"3 490 000 Kč"` |
| `priceVynos` | `"12 400 Kč"` |
| `vynos` | `"53,1 %"` |
| `link` | `"/cervenydvur/byt/?Id=37"` (ověř, že routing detailu zvládne nové Id) |
| `reserved` | `false` |
| `sectionOneBg` | stejné jako u ostatních bytů |
| `gallery` | zatím `["v1763461562/Rapotin/Text_odstavce_ofjnms.jpg"]` (placeholder jako u ostatních), fotky dodám |

Detail bytu č.37 (texty z předchozího zadání, co jsem psal k „Byt č.24 / apartmán 37“, přesuň sem):
- `categoryDescription`: „Apartmán 2kk pro rodiny a skupiny – kapacita 4 lůžka.“
- `apText`: Apartmán je **dokončený, zařízený a od ledna 2026 v hotelovém provozu**. Díky kapacitě 4 lůžek dosahuje **nejvyšší průměrné ceny za noc – 2 499 Kč**. Za leden–srpen 2026 obsazenost **53,1 %** (129 nocí), v létě 71–81 %.
- `colOne…` „Hlavní benefity“: samostatný pokoj + obytná kuchyně · kapacita 4 lůžka – rodiny a skupiny · nejvyšší cena za noc v nabídce · nejnižší cena za m² z nabízených jednotek.
- `vynosInfo.headline`: „ 12 400 Kč měsíčně čistě vlastníkovi (1–8/2026)“; `items`: „Obsazenost 53,1 % za leden–srpen 2026, v létě až 81 %“, „Konzervativní scénář (50 %, 2 400 Kč/noc): čistý výnos cca 3,8 % p.a.“, „14 nocí ročně pro vlastní pobyt“.

## 3) Sekce „Stav“ u bytů 19, 20, 37 – nahradit

Smaž řádky „Rezervace: záloha 20 % z kupní ceny.“ a „Převod možný ihned po podpisu kupní smlouvy.“. Nový obsah:

**Byt č.19 a Byt č.20:**
- Dokončeno a zařízeno
- **Zkolaudováno**
- V provozu od 1/2026
- Zápis prohlášení vlastníka do KN: cca 11/2026
- Rezervace: smlouva o smlouvě budoucí kupní, záloha 20 % z kupní ceny
- Převod na nového vlastníka (kupní smlouva): 01/2028

**Byt č.37:**
- Dokončeno a zařízeno
- **Před kolaudací**
- V provozu od 1/2026
- Zápis prohlášení vlastníka do KN: cca 11/2026
- Rezervace: smlouva o smlouvě budoucí kupní, záloha 20 % z kupní ceny
- Převod na nového vlastníka (kupní smlouva): 01/2028

`colThreeNote` u všech tří nech: „Uvedené údaje jsou historické výsledky, nikoli záruka budoucího výnosu.“

## 4) `resortInfo.buyProcess` – oprava varianty pro dokončené byty

U Čimerových bytů **není rezervační smlouva**, ale taky **smlouva o smlouvě budoucí kupní**, jen se zálohou 20 %. Uprav text varianty pro dokončené apartmány (nebo obecný text v kroku 1) takto:

> Podepíšete smlouvu o smlouvě budoucí kupní. U rozestavěných jednotek složíte zálohu 10 % do bankovní úschovy, u dokončených apartmánů v provozu zálohu 20 % z kupní ceny. Kupní smlouvu podepíšeme po zápisu jednotky do katastru.

Pokud máš dvě sady kroků, u dokončených apartmánů:
1. **Smlouva o smlouvě budoucí** – záloha 20 % z kupní ceny, apartmán je od té chvíle blokován pro vás.
2. **Zápis do KN a kupní smlouva** – po zápisu prohlášení vlastníka podepíšeme kupní smlouvu a stanete se výhradním vlastníkem.
3. **Správa a podíl z tržby** – beze změny.

## 5) Kontrola

- Ceník: 19, 20, 24, 37 volné s cenou a „Více info“ (24 bez výnosových čísel). Byty 22 a 23 zůstávají beze změny.
- Detail 37 se otevře přes „Více info“.
- Pošli mi seznam změn a připomeň chybějící podlaží bytu č.37.
