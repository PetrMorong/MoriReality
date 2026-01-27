// src/components/ApartmentDetail/ApSectionFour.js
import React from "react";
import styled from "styled-components";
import Button from "../Button";

/**
 * ApSectionFour – Premium-only upsell/info section
 *
 * Expected data props:
 * - category: string (e.g. "Premium Suite" / "Château Suite")
 * - apName: string (e.g. "Byt č.12")
 * - layout: string (e.g. "3kk")
 * - sizeValue: string|number (e.g. "73,52")
 * - floorValue: string|number (e.g. "3")
 * - price: string (e.g. "4 890 000 Kč")
 * - standardsPdfUrl: string (absolute or relative url to PDF)  ✅ add this
 * - contactEmail: string (optional)
 */
const ApSectionFour = ({ data }) => {
  const categoryRaw = data?.category || "";
  const category = categoryRaw.toLowerCase();
  const isPremium =
    category.includes("premium") ||
    category.includes("chateau") ||
    category.includes("château");

  if (!isPremium) return null;

  const standardsUrl = data?.standardsPdfUrl || "/standardy.pdf"; // fallback (change if needed)
  const contactEmail = data?.contactEmail || "info@mori-reality.cz";

  return (
    <Container>
      <Wrapper>
        <HeadlineRow>
          <Line />
          <Headline>Prémiová kategorie</Headline>
          <Line />
        </HeadlineRow>

        <TopRow>
          <Badge>
            <div>
              <BadgeTitle>{data?.category || "Premium Suite"}</BadgeTitle>
              <BadgeSub>
                Výběrový byt v historické části Resortu Červený dvůr – pro ty, kteří chtějí
                atmosféru, prostor a skutečný komfort.
              </BadgeSub>
              <BadgeNote>
                Premium v podkroví: <b>klimatizace</b> a <b>elektrický krb</b>.
              </BadgeNote>
            </div>
          </Badge>

          <KeyFacts>
            <Fact>
              <FactValue>{data?.apName}</FactValue>
              <FactLabel>Označení bytu</FactLabel>
            </Fact>
            <Fact>
              <FactValue>{data?.layout}</FactValue>
              <FactLabel>Dispozice</FactLabel>
            </Fact>
            <Fact>
              <FactValue>{data?.sizeValue} m²</FactValue>
              <FactLabel>Podlahová plocha</FactLabel>
            </Fact>
            <Fact>
              <FactValue>{data?.floorValue}. NP</FactValue>
              <FactLabel>Umístění</FactLabel>
            </Fact>
          </KeyFacts>
        </TopRow>

        <Grid>
          <Card>
            <CardTitle>Proč je tenhle byt Premium</CardTitle>
            <List>
              <li>
                <b>3kk</b> – dvě samostatné ložnice + velký obytný prostor s kuchyní
              </li>
              <li>
                <b>Klimatizace</b> pro celoroční komfort
              </li>
              <li>
                <b>Elektrický krb</b> jako atmosférický a designový prvek
              </li>
              <li>
                Historická část resortu – „château vibe“ bez přestřelené okázalosti
              </li>
            </List>
          </Card>

          <Card>
            <CardTitle>Kuchyň a vybavení</CardTitle>
            <Body>
              Byt je prodáván <b>bez kuchyňské linky</b>, aby si každý majitel mohl zvolit řešení
              podle vlastního vkusu, rozpočtu a způsobu využití (osobní bydlení vs. investice).
              <br />
              <br />
              Na vyžádání umíme zajistit realizaci kuchyně <b>na klíč</b> dle doporučeného
              standardu Resortu Červený dvůr (zaměření, výroba, montáž, spotřebiče).
            </Body>

            <Warn>
              Uvedené vybavení <b>není zahrnuto</b> v ceně bytu.
            </Warn>

            <DownloadRow>
              <a
                href={standardsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button leftBorder={true}>📄 Stáhnout standardy a vybavení (PDF)</Button>
              </a>

              <DownloadNote>
                Přehled standardů provedení a orientačního seznamu vybavení. Vybavení není v ceně.
              </DownloadNote>
            </DownloadRow>
          </Card>

          <Card>
            <CardTitle>Co je zahrnuto v ceně</CardTitle>
            <List>
              <li>Dokončené podlahy</li>
              <li>Obklady a dlažby v koupelně</li>
              <li>Sanitární vybavení</li>
              <li>Interiérové dveře</li>
              <li>Kompletní elektroinstalace a osvětlení</li>
              <li>Příprava pro kuchyňskou linku</li>
              <li>
                U Premium: <b>klimatizace</b> a <b>elektrický krb</b>
              </li>
            </List>
            <SmallNote>
              Kuchyňská linka a volné vybavení nejsou součástí ceny bytu.
            </SmallNote>
          </Card>
        </Grid>

        <CtaRow>
          <CtaLeft>
            <PriceLabel>Cena</PriceLabel>
            <PriceValue>{data?.price}</PriceValue>
            <Mini>
              Chcete prohlídku nebo detailní informace? Rádi zašleme podklady a domluvíme termín.
            </Mini>
          </CtaLeft>

          <CtaRight>
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                `Zájem o ${data?.apName || "byt"} – ${data?.category || "Premium Suite"}`
              )}`}
              style={{ textDecoration: "none" }}
            >
              <Button leftBorder={true}>Domluvit prohlídku</Button>
            </a>
          </CtaRight>
        </CtaRow>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;

  @media (max-width: 800px) {
    margin-top: 70px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
`;

const Line = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 1px;
`;

const Headline = styled.div`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin: 0 56px;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 41px;
    margin: 0 20px;
    text-align: center;
  }
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Badge = styled.div`
  border: 1px solid rgba(178, 154, 132, 0.35);
  background: rgba(178, 154, 132, 0.06);
  padding: 22px;
  display: flex;
  gap: 14px;
`;

const Crown = styled.div`
  font-size: 24px;
  line-height: 1;
  margin-top: 2px;
`;

const BadgeTitle = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #b29a84;
  margin-bottom: 6px;
`;

const BadgeSub = styled.div`
  font-family: Georama;
  font-size: 17px;
  line-height: 28px;
  color: #4d4d56;
`;

const BadgeNote = styled.div`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
  margin-top: 10px;

  b {
    color: #000000;
  }
`;

const KeyFacts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const Fact = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 16px;
`;

const FactValue = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
`;

const FactLabel = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #7b7b86;
  margin-top: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 22px;
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 22px;
`;

const CardTitle = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 12px;
`;

const Body = styled.div`
  font-family: Georama;
  font-size: 16px;
  line-height: 26px;
  color: #4d4d56;

  b {
    color: #000000;
  }
`;

const Warn = styled.div`
  margin-top: 14px;
  padding: 12px 14px;
  border: 1px solid rgba(178, 154, 132, 0.35);
  background: rgba(178, 154, 132, 0.06);
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;

  b {
    color: #000000;
  }
`;

const DownloadRow = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DownloadNote = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #7b7b86;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;

  li {
    font-family: Georama;
    font-size: 16px;
    line-height: 26px;
    color: #4d4d56;
    margin-bottom: 10px;
  }

  b {
    color: #000000;
  }
`;

const SmallNote = styled.div`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #7b7b86;
  margin-top: 14px;
`;

const CtaRow = styled.div`
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CtaLeft = styled.div``;

const PriceLabel = styled.div`
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  color: #7b7b86;
`;

const PriceValue = styled.div`
  font-family: Georama;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: #b29a84;
  margin-top: 6px;
`;

const Mini = styled.div`
  font-family: Georama;
  font-size: 15px;
  line-height: 24px;
  color: #4d4d56;
  margin-top: 8px;
  max-width: 520px;
`;

const CtaRight = styled.div``;

export default ApSectionFour;
