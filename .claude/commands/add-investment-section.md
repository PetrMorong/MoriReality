---
description: Přidá sekci investičního apartmánu (Nord Moravia Resorts / Červený dvůr) na správné místo v Gatsby stránce
---

Projdi kód Gatsby projektu a najdi stránku nebo komponentu odpovídající webu Červeného dvora (hledej soubory jako `cervenydvur`, `CervenyDvur`, `index` v příslušné sekci, nebo stránku s klíčovými slovy jako `garantovaný nájem`, `apartmán`, `Červený dvůr`, `6 %`).

Jakmile najdeš správnou stránku/komponentu, přidej do ní novou styled-components sekci s tímto obsahem a stylem. Vlož ji logicky — za sekci s ceníkem nebo před sekci FAQ, dle struktury stránky.

## Požadavky na komponentu

### Obsah

Sekce komunikuje tento investiční model:
- Investor koupí apartmán a dostává **6 % p.a. garantovaný výnos** (měsíčně, nezávisle na obsazenosti)
- Má **14 nocí ročně** pro vlastní pobyt
- **Klíčové:** pokud je jeho apartmán obsazen hosty, může přesto pobývat — v jiné jednotce v síti Nord Moravia Resorts
- Nemusí kupovat „do vlastního bydlení" — koupí investiční apartmán v resortu se saunou a wellness

### Resorty v síti

| Resort | Lokalita | Dostupnost |
|---|---|---|
| Červený dvůr | Rapotín, Hrubý Jeseník | Nyní — resort funguje, wellness otevřeno |
| Vila Republika | Velké Losiny | Nyní dostupné |
| Wellness Hotel Kouty | Kouty nad Desnou | Otevření za ~3 roky — zobraz jako „Připravujeme · Otevření 2027/2028" |

**Kouty nesmí být prezentovány jako dostupné nyní.**

### Struktura sekce (shora dolů)

1. **Eyebrow** — „Garantovaný nájem · Flexibilní pobyt" (malý text, uppercase, zlatohnědá)
2. **Hlavní nadpis** — „Koupíte jeden apartmán. Hory máte všude." (serif font, velký)
3. **Perex** — stručný popis: apartmán vydělává → 14 nocí jsou vaše → kdekoliv v síti
4. **Tři metrické karty** — `6 % p.a.` / `14 nocí` / `5+ let garance`
5. **Highlight box** (tmavé pozadí) — hlavní sdělení flexibility: apartmán nemusí být volný, abyste si odpočinuli
6. **Seznam resortů** — tři položky, Kouty s badgem „Připravujeme"
7. **CTA řádek** — tlačítko → `https://www.mori-reality.cz/cervenydvur/` + telefon `601 502 889`

## Barevná paleta

Použij CSS proměnné nebo styled-components theme — pokud projekt má theme, použij ho. Jinak:

```js
const colors = {
  cream: '#F7F4EF',
  darkBrown: '#2A2318',
  gold: '#8B6F47',
  lightGold: '#C4A572',
  muted: '#7A6E63',
  border: '#D9D0C4',
}
```

## Fonty

Pokud projekt již importuje Google Fonts, použij existující. Jinak přidej do `gatsby-browser.js` nebo příslušného místa:

```js
// Playfair Display (serif) pro nadpisy + DM Sans (sans-serif) pro texty
```

## Styled-components struktura (příklad)

```jsx
const InvestmentSection = styled.section`
  background: ${colors.cream};
  padding: 72px 40px;
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${colors.gold}, ${colors.lightGold}, ${colors.gold});
  }
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;
  background: ${colors.border};
  border: 1px solid ${colors.border};
  margin-bottom: 48px;
`

const MetricCard = styled.div`
  background: ${colors.cream};
  padding: 32px 28px;
`

const BigNumber = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 600;
  color: ${colors.lightGold};
  line-height: 1;
  margin-bottom: 8px;
`

const HighlightBox = styled.div`
  background: ${colors.darkBrown};
  padding: 36px 40px;
  margin-bottom: 40px;
  display: flex;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    padding: 28px 24px;
  }
`

const ResortList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  border: 1px solid ${colors.border};
`

const ResortItem = styled.div`
  padding: 20px 24px;
  border-right: 1px solid ${colors.border};

  &:last-child {
    border-right: none;
  }
`

const ComingSoonBadge = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.gold};
  border: 1px solid ${colors.gold};
  padding: 2px 8px;
  margin-top: 4px;
`

const CtaButton = styled.a`
  display: inline-block;
  background: ${colors.gold};
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 16px 36px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #6F5637;
  }
`
```

## Výsledná komponenta

Sestav komponentu `InvestmentFlexSection` (nebo podobný název dle konvence projektu) ze styled-components výše a vlož ji na nalezené správné místo v kódu.

Pokud projekt používá TypeScript, přidej správné typy. Pokud má vlastní design systém nebo theme, upřednostni jeho tokeny před hardcoded barvami výše.

Po vložení ověř, že:
- `gatsby develop` proběhne bez chyb
- Komponenta je responzivní
- Kouty jsou správně označeny jako připravované
