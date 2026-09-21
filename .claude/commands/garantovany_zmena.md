# Úprava stránky /cervenydvur – přechod z garantovaného nájmu na podíl z tržby + Čimerovy byty do prodeje

## Kontext

Stránka `https://www.mori-reality.cz/cervenydvur` (React, data v souboru, který exportuje `const data = {...}` s klíči `desc`, `ticksSection`, `resortInfo`, `apartments` …).

U Resortu Červený dvůr **končíme s garantovaným nájmem** („5 % p.a.“, „5+ let garance“, „nájemné bez ohledu na obsazenost“, „výnos od složení zálohy“, „odstoupení kdykoliv bez pokut“). Nový model je **podíl z tržby**:

- vlastník dostává **45 % z ubytovací tržby své jednotky bez DPH**, vyplácí se **měsíčně** s rozpisem rezervací,
- **veškeré provozní náklady nese provozovatel** (provize Booking a dalších kanálů, úklid, prádlo, snídaně, wellness pro hosty, check-in, marketing, spotřební materiál, běžná údržba),
- vlastník hradí jen své náklady: fond oprav a správu SVJ, energie jednotky, pojištění, daň z nemovitých věcí (orientačně 2 500–4 000 Kč/měs. podle velikosti),
- **14 nocí ročně vlastního užívání** (platí jen úklid a prádlo), zvýhodněné pobyty v síti Nord Moravia Resorts,
- smluvně: **smlouva o zajištění využití bytové jednotky** s Mori Reality s.r.o. (ne „nájemní smlouva“).

## Pravidla pro tuhle práci

1. Nejdřív si projdi repozitář a najdi **všechna místa, kde se na /cervenydvur objevuje garance** – nejen v datovém souboru. Hledej minimálně: `garant`, `Garantovan`, `5 % p.a.`, `5+ let`, `bez ohledu na obsazenost`, `nájemní smlouv`, `bez smluvních pokut`, `Měs. Výnos`, `Roční Výnos`, `vynosInfo`, `akceBanner`, `priceVynos`. Sekce „Garantovaný výnos 5 % p.a.“, „Koupíte jeden apartmán. Hory máte všude.“ a FAQ („Co je to garantovaný nájem?“) v datovém souboru nejsou – jsou v komponentách.
2. **Pozor na sdílené komponenty.** Pokud je některá z těch sekcí sdílená s jinými projekty (Vila Republika, Kouty/Soutok, …), neměň ji globálně – udělej text konfigurovatelný přes data projektu a změň ho jen pro Červený dvůr. Než to uděláš, napiš mi, které komponenty jsou sdílené.
3. Nic nemaž z galerií, obrázků ani historických textů, pokud to níže není výslovně uvedeno.
4. Pracuj v nové větvi, na konci mi ukaž přehled změn (soubor → co se změnilo) a spusť build/lint. **Nedeployuj.**

---

## 1. Hlavní popis (`data.desc`)

Nahraď druhou a další větu (od „Apartmánový dům bude sloužit…“ po „…od A do Z.“) tímto, odkaz na resortcervenydvur.cz ponech:

> Apartmánový dům slouží jako ubytování hotelového typu s kompletním servisem a resort už přijímá hosty. Vlastní apartmán vám může sloužit jako rodinné zázemí na horách – a v době, kdy ho nevyužíváte, ho pronajímáme hostům a vy dostáváte podíl z jeho tržby. O kompletní správu a pohodlí vašich hostů se postaráme od A do Z. Více info o ubytování na našem webu.

## 2. `ticksSection`

**Položka 1** („Postup pří koupi apartmánu“) – oprav překlep na „Postup při koupi“ a `desc` nahraď:

> Vyberete si apartmán podle svých představ a investičních cílů. Po podpisu rezervační smlouvy je apartmán blokován pro vás, následuje kupní smlouva a zápis do katastru nemovitostí. Apartmán vlastníte přímo vy – s výlučným vlastnickým právem. Chcete-li jej zapojit do provozu resortu, uzavřeme s vámi smlouvu o zajištění využití bytové jednotky a od prvního měsíce provozu vám chodí vyúčtování i podíl z tržby.

**Položka 2** („Kompletní správa apartmánu“) – `desc` nahraď:

> Mori Reality jako provozovatel resortu zajišťuje vše: prodej pobytů, komunikaci s hosty, úklid, prádlo, snídaně, údržbu i marketing. Vy inkasujete 45 % z ubytovací tržby svého apartmánu bez DPH – bez dalších srážek. Provize rezervačních portálů, úklid ani snídaně se z vašeho podílu neodečítají. Každý měsíc dostanete vyúčtování s rozpisem všech rezervací. Apartmán můžete sami využívat až 14 nocí ročně.

**Položka 3** (lyžování) – beze změny, jen oprav „skvělé sněhového podmínky“ → „skvělé sněhové podmínky“.

## 3. `resortInfo.buyProcess`

- Krok 1 „Rezervace“ – text: „Vyberete apartmán a podepíšete rezervační smlouvu. Apartmán je od té chvíle blokován pro vás.“
  (U dokončených bytů se už neprodává přes smlouvu o smlouvě budoucí se zálohou 10 %. Pokud na webu zůstávají i rozestavěné jednotky prodávané přes SoSBK, řekni mi to a text rozdělíme.)
- Krok 2 „Dokončení a předání“ → přejmenuj na „Kupní smlouva a převod“, text: „Podepíšeme kupní smlouvu, kupní cena jde přes úschovu a po zápisu do katastru se stáváte výhradním vlastníkem.“
- Krok 3 „Správa a výnos“ → přejmenuj na „Správa a podíl z tržby“, text: „Uzavřeme smlouvu o zajištění využití bytové jednotky. Apartmán pronajímáme hostům a vy každý měsíc dostáváte 45 % z jeho ubytovací tržby bez DPH s rozpisem všech rezervací. Až 14 nocí ročně ho můžete využívat sami.“

## 4. Sekce „Garantovaný výnos 5 % p.a.“ (komponenta) → nahradit

- Nadtitulek: „PROČ INVESTOVAT DO ČERVENÉHO DVORA“ (ponechat)
- Nadpis: **„Podíl z tržby 45 %“** (zvýrazněná část: „45 %“)
- Podnadpis: „Měsíční výplata podle skutečných rezervací – s rozpisem každé noci“

Šest dlaždic (ikony ponech ve stejném pořadí):

1. **Skutečná data, ne projekce** – Resort je v provozu od ledna 2026. Výnos ukazujeme na reálných tržbách konkrétních apartmánů.
2. **Vlastníte konkrétní byt v KN** – Kupujete byt zapsaný v katastru nemovitostí. Zajištění vlastnickým právem – ne dluhopisem, ne fondem. *(ponechat)*
3. **Provozní náklady nesete vy? Ne.** – Provize portálů, úklid, snídaně, wellness pro hosty i marketing hradí provozovatel.
4. **14 nocí vlastního využití ročně** – Apartmán je váš – 14 nocí ročně pro sebe nebo rodinu. Platíte jen úklid a prádlo.
5. **Transparentní vyúčtování** – Každý měsíc rozpis rezervací, nocí a tržeb vaší jednotky.
6. **Resort funguje – ne sliby** – Červený dvůr je v provozu. Hosté jsou. Wellness otevřeno. Kupujete do fungujícího resortu. *(ponechat)*

Rámeček „Proč je tohle jiné než u konkurence?“ – text:

> Garantovaný nájem se vždy platí z budoucích tržeb – a po skončení garance se ukáže realita. My ji ukazujeme rovnou: apartmány v provozu dosáhly za leden–srpen 2026 obsazenosti 53–71 % a jejich vlastníkům by náleželo v průměru 14–19 tisíc Kč měsíčně. Čísla po měsících najdete u každé jednotky.

Pod rámeček přidej malým šedým písmem:

> Uvedené údaje jsou historické výsledky, nikoli příslib ani záruka budoucího výnosu. Skutečný příjem závisí na obsazenosti, cenách a sezóně.

## 5. Sekce Nord Moravia Resorts („Koupíte jeden apartmán. Hory máte všude.“)

- Nadtitulek „GARANTOVANÝ NÁJEM · FLEXIBILNÍ POBYT“ → „PODÍL Z TRŽBY · FLEXIBILNÍ POBYT“
- Odstavec: „Váš apartmán vydělává, když ho nevyužíváte – podíl z tržby vám chodí každý měsíc na účet. A přesto máte 14 nocí ročně jen pro sebe. Pokud je zrovna obsazen hosty, pobývejte v jiné jednotce sítě Nord Moravia Resorts.“
- Tři čísla: **„45 %“** – „Podíl z ubytovací tržby bez DPH“ · **„14 nocí“** – „Ročně pro vlastní pobyt“ *(ponechat)* · **„Měsíčně“** – „Vyúčtování s rozpisem rezervací“
- Černý box: „Výnos plyne dál“ → „Podíl z tržby plyne dál“.

## 6. FAQ (komponenta)

- „Co je to garantovaný nájem?“ → **„Jak funguje podíl z tržby?“**
  > Apartmán zapojíte do provozu resortu a my ho pronajímáme hostům. Z ubytovací tržby vaší jednotky bez DPH dostáváte 45 %. Příklad: tržba 60 000 Kč → bez DPH 53 571 Kč → vám 24 107 Kč. Veškeré provozní náklady – provize portálů, úklid, prádlo, snídaně, wellness pro hosty, marketing – nese provozovatel.
- „Kdy začnu dostávat garantovaný nájem?“ → **„Kdy začnu dostávat podíl z tržby?“**
  > Od prvního měsíce, kdy je apartmán zapojen do provozu. Vyúčtování s rozpisem rezervací a výplata probíhají měsíčně.
- „Jaké náklady budu hradit při garantovaném nájmu?“ → **„Jaké náklady hradím jako vlastník?“**
  > Jen náklady spojené s vlastnictvím: příspěvek do fondu oprav a správu SVJ, energie připadající na jednotku, pojištění a daň z nemovitých věcí – orientačně 2 500–4 000 Kč měsíčně podle velikosti apartmánu. Provozní náklady ubytování jdou za provozovatelem.
- Projdi i ostatní otázky FAQ a odstraň z nich jakoukoli zmínku o garanci, fixním nájmu, „5 let“, „bez ohledu na obsazenost“ nebo „odstoupení bez pokut“. Co nesedí s tímto modelem, mi vypiš – neodhaduj.

## 7. Ceník (`apartments` + komponenta tabulky)

### 7a. Sloupce výnosu

Sloupce **„Měs. Výnos“** a **„Roční Výnos“** přejmenuj (jen pro Červený dvůr) na:
- `priceVynos` → **„Vlastníkovi /měs.*“**
- `vynos` → **„Obsazenost 2026*“**

a pod tabulku přidej poznámku: „\* Skutečnost leden–srpen 2026 u apartmánů v provozu (podíl vlastníka 45 % z tržby bez DPH). Nejde o garanci budoucího výnosu.“

U **všech ostatních bytů** (prodaných i mých 7, 30, 31, 35) pole `priceVynos` a `vynos` **vyprázdni** (`""`) – jsou tam staré garantované částky. U bytu č. 7 jsou navíc prohozené.

### 7b. Čimerovy byty – uvést do prodeje

Změň existující položky (ponech `link`, `sectionOneBg`, `gallery`):

| položka | `price` | `size` | `layout` | `category` | `priceVynos` | `vynos` | `reserved` |
|---|---|---|---|---|---|---|---|
| Byt č.19 | `"3 390 000 Kč"` | `"34,87 m2"` | `1kk` | Komfort | `"19 067 Kč"` | `"70,8 %"` | `false` |
| Byt č.20 | `"2 590 000 Kč"` | `"25,02 m2"` | `1kk` | Komfort | `"13 931 Kč"` | `"54,3 %"` | `false` |
| Byt č.24 | `"3 490 000 Kč"` | `"40,86 m2"` | `2kk` | Suite | `"16 192 Kč"` | `"53,1 %"` | `false` |

(Byt č.24 na webu = v resortu apartmán č. 37. Jeho `link` je teď `?Id=25` – zkontroluj, jestli to je chyba a nemá být `?Id=24`; oprav jen tehdy, když to nerozbije routing.)

Ke každému z těchto tří bytů doplň detail stejnou strukturou jako u bytu č. 1 (`categoryDescription`, `apText`, `colOne…`, `colTwo…`, `colThree…`). Nepoužívej `akceBanner` ani `vynosInfo` s garancí – pokud komponenta detailu `vynosInfo` zobrazuje, naplň ho takto (headline = skutečnost, ne slib):

**Byt č.19 – 1kk, 34,87 m², 2. NP B**
- `categoryDescription`: „Prostorný apartmán 1kk – nejvytíženější jednotka v domě.“
- `apText`: Apartmán je **dokončený, zařízený a od ledna 2026 v hotelovém provozu**. Kupujete jednotku s reálnou historií tržeb – za leden–srpen 2026 dosáhl obsazenosti **70,8 %** (172 nocí) při průměrné ceně **2 207 Kč za noc**. Vlastníkovi by za tuto dobu náleželo **152 538 Kč**.
- `colOneTitle` „Hlavní benefity“: obytná kuchyně 21,7 m² – na 1kk nadprůměrně velká · dokončeno a zařízeno, bez dalších investic · v provozu od 1/2026 s doloženými tržbami · nejvyšší obsazenost ze všech nabízených jednotek.
- `vynosInfo.headline`: „ 19 067 Kč měsíčně vlastníkovi (1–8/2026)“; `description`: „Podíl 45 % z ubytovací tržby bez DPH podle skutečných rezervací. Provozní náklady nese provozovatel.“; `items`: „Obsazenost 70,8 % za leden–srpen 2026“, „Konzervativní scénář (60 % obsazenost, 2 200 Kč/noc): čistý výnos cca 4,5 % p.a.“, „14 nocí ročně pro vlastní pobyt“.

**Byt č.20 – 1kk, 25,02 m², 2. NP B**
- `categoryDescription`: „Kompaktní apartmán 1kk s nejnižší vstupní cenou v nabídce.“
- `apText`: Apartmán je **dokončený, zařízený a od ledna 2026 v hotelovém provozu**. Za leden–srpen 2026 dosáhl obsazenosti **54,3 %** (132 nocí) při průměrné ceně **2 101 Kč za noc**; vlastníkovi by náleželo **111 447 Kč**. Nejsilnější byly červen (73 %) a srpen (84 %).
- `colOneTitle` „Hlavní benefity“: nejnižší vstupní cena v resortu · dokončeno a zařízeno · v provozu od 1/2026 s doloženými tržbami · stabilní cena za noc během roku.
- `vynosInfo.headline`: „ 13 931 Kč měsíčně vlastníkovi (1–8/2026)“; `items`: „Obsazenost 54,3 % za leden–srpen 2026“, „Konzervativní scénář (50 %, 2 050 Kč/noc): čistý výnos cca 4,5 % p.a.“, „14 nocí ročně pro vlastní pobyt“.

**Byt č.24 (apartmán 37) – 2kk, 40,86 m², 4 lůžka**
- `categoryDescription`: „Apartmán 2kk pro rodiny a skupiny – kapacita 4 lůžka.“
- `apText`: Apartmán je **dokončený, zařízený a od ledna 2026 v hotelovém provozu**. Díky kapacitě 4 lůžek dosahuje **nejvyšší průměrné ceny za noc – 2 499 Kč**. Za leden–srpen 2026 obsazenost **53,1 %** (129 nocí); v létě 71–81 %. Vlastníkovi by náleželo **129 536 Kč**.
- `colOneTitle` „Hlavní benefity“: samostatný pokoj + obytná kuchyně · kapacita 4 lůžka – rodiny a skupiny · nejvyšší cena za noc v nabídce · nejnižší cena za m² z nabízených jednotek.
- `vynosInfo.headline`: „ 16 192 Kč měsíčně vlastníkovi (1–8/2026)“; `items`: „Obsazenost 53,1 % za leden–srpen 2026, v létě až 81 %“, „Konzervativní scénář (50 %, 2 400 Kč/noc): čistý výnos cca 3,8 % p.a.“, „14 nocí ročně pro vlastní pobyt“.

U všech tří do `colTwo…` dej „Model spolupráce“ (45 % z tržby bez DPH, co hradí provozovatel vs. vlastník – viz Kontext) a do `colThree…` „Stav“: dokončeno · zařízeno · v provozu od 1/2026 · převod možný ihned po podpisu kupní smlouvy. `colThreeNote`: „Uvedené údaje jsou historické výsledky, nikoli záruka budoucího výnosu.“

Pokud má detail místo na stažení PDF podkladu, připrav odkazy na `Apartman_19_Cerveny_dvur.pdf`, `Apartman_20_Cerveny_dvur.pdf`, `Apartman_37_Cerveny_dvur.pdf` (soubory dodám – zatím je nezobrazuj, pokud neexistují).

### 7c. Zbytky garance v detailech ostatních bytů

- `akceBanner` u bytů 27 a 28 (zvýšení garantovaného výnosu) – smazat.
- `vynosInfo` s „Výnos je garantován developerem…“ – smazat u všech bytů (kromě 19/20/24 výše).
- `tagline` „Apartmán s garantovaným výnosem a výhledem na řeku“ → „Apartmán s výhledem na řeku“.
- Byt č.4, `colThreeDesc`: „Možnost nabídnout vyšší garantovaný nájem po realizaci úprav“ → „Vyšší cena za noc a vyšší podíl z tržby po realizaci úprav“.
- `proKoho`: „…zbytek roku generuje výnos“ ponech, je v pořádku.

## 8. Drobné překlepy

- `sectionFourOneText.titleGold`: „Červého dvora“ → „Červeného dvora“
- `features`: „Parkovácí místo“ → „Parkovací místo“

## 9. Kontrola na konci

- `grep -ri "garant"` v souborech Červeného dvora musí vrátit nulu (mimo komentáře).
- Ceník: byty 19, 20, 24 volné s cenou a „Více info“; ostatní prodané bez výnosových čísel.
- Build projde, stránka se vykreslí na mobilu i desktopu.
- Pošli mi seznam změněných souborů a vše, co jsi nenašel nebo si nebyl jistý.
