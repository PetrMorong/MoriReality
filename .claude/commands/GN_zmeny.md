# Odpovědi k dotazům – úprava /cervenydvur

## 1) Proces koupě – rozdělit na dvě varianty

**a) Rozestavěné jednotky** (30, 31, 35 a další prodávané před dokončením)
- Zůstává smlouva o smlouvě budoucí kupní + záloha 10 % na projektový účet Raiffeisenbank do bankovní úschovy.
- Texty v detailech těchto bytů (záloha 10 %, úschova RB, termín dokončení) nech, jen z nich odstraň případné zbytky garance.

**b) Dokončené byty v provozu** (Čimerovy byty 19, 20, 24)
- Rezervační smlouva + záloha 20 % z kupní ceny na účet prodávajícího, pak kupní smlouva a zápis do KN.

V `resortInfo.buyProcess` to vyřeš jedním z těchto způsobů:
- dvě sady kroků (přepínač nebo dva sloupce „Rozestavěné jednotky“ vs. „Dokončené apartmány v provozu“), **nebo**
- obecný text v kroku 1: „Podle stavu jednotky podepíšete smlouvu o smlouvě budoucí kupní (záloha 10 % do bankovní úschovy) nebo u dokončených apartmánů rezervační smlouvu (záloha 20 %).“

Vyber řešení, které lépe sedí do stávající komponenty, a ukaž mi ho.

Do detailu bytů 19, 20 a 24 doplň v sekci „Stav“ řádek: **„Rezervace: záloha 20 % z kupní ceny.“**

## 2) Byty 7, 30, 31, 35

Nech `reserved: false`, jak to je. V bodě 9 šlo jen o prodané byty.

## 3) FAQ „Mohu si správu bytu řešit sám?“

Ano, může. Přeformuluj takto:

> Ano. Apartmán je váš a do provozu resortu ho zapojovat nemusíte – můžete ho pronajímat sami nebo užívat jen pro sebe. Pokud ho do provozu zapojíte, funguje model podílu z tržby: dostáváte 45 % z ubytovací tržby bez DPH a veškeré provozní náklady nese provozovatel.

Zmínku o dvou modelech („garantovaný nájem vs. skutečné náklady“) odstraň.

## 4) `src/pages/sprava-apartmanu.js`

Ano, uprav i tuhle stránku:
- Odeber garantovaný nájem jako model a ponech jediný model: **podíl z tržby**.
  - 45 % z ubytovací tržby bez DPH
  - provozní náklady nese provozovatel
  - vlastník hradí jen SVJ/fond oprav, energie, pojištění a daň z nemovitosti
  - měsíční vyúčtování s rozpisem rezervací
  - 14 nocí vlastního užívání ročně
- Když stránka obsahuje srovnávací tabulku dvou modelů, nahraď ji přehledem **„Co hradí provozovatel / Co hradí vlastník“**.
- Pokud je stránka společná pro více resortů a u některého (Kouty, Vila Republika) platí jiné podmínky, **zastav se a napiš mi**, než to změníš.

## 5) Výjimka v `InvestBlock.js`

Věta „Garantovaný nájem se vždy platí z budoucích tržeb…“ je v pořádku, nech ji.

## 6) Vizuální kontrola

Žádnou novou závislost nepřidávej, podívám se sám na dev serveru. Ze stejného důvodu nic nedeployuj.

---

Až budeš hotový, pošli mi znovu seznam změněných souborů.