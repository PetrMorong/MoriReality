import * as React from "react";
import styled from "styled-components";
import { CheckCircle } from "lucide-react";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 200px 0 80px;
  background: #ffffff;

  @media (max-width: 1180px) {
    padding: 80px 24px 60px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const Eyebrow = styled.div`
  font-family: Georama;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #b29a84;
  margin-bottom: 14px;
`;

const Headline = styled.h2`
  font-family: Georama;
  font-size: 42px;
  line-height: 52px;
  color: #000000;
  margin: 0 0 20px;

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const Perex = styled.p`
  font-family: Georama;
  font-size: 18px;
  line-height: 30px;
  color: #4d4d56;
  max-width: 680px;
  margin: 0 0 56px;

  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(178, 154, 132, 0.25);
  border: 1px solid rgba(178, 154, 132, 0.25);
  margin-bottom: 48px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  background: #ffffff;
  padding: 32px 28px;
`;

const BigNumber = styled.p`
  font-family: Georama;
  font-size: 48px;
  font-weight: 700;
  color: #b29a84;
  line-height: 1;
  margin: 0 0 8px;
`;

const MetricLabel = styled.p`
  font-family: Georama;
  font-size: 15px;
  line-height: 22px;
  color: #4d4d56;
  margin: 0;
`;

const HighlightBox = styled.div`
  background: #1a1410;
  padding: 40px 48px;
  margin-bottom: 48px;
  display: flex;
  gap: 36px;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
    padding: 28px 24px;
  }
`;

const HighlightIcon = styled.div`
  color: #b29a84;
  flex-shrink: 0;
  margin-top: 4px;
`;

const HighlightText = styled.p`
  font-family: Georama;
  font-size: 18px;
  line-height: 30px;
  color: #f5f0eb;
  margin: 0;
`;

const HighlightStrong = styled.span`
  color: #b29a84;
  font-weight: 600;
`;

const ResortLabelRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const ResortLabel = styled.div`
  font-family: Georama;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7a6e63;
`;

const NetworkLink = styled.a`
  font-family: Georama;
  font-size: 13px;
  color: #b29a84;
  text-decoration: none;

  &, &:visited {
    color: #b29a84;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const ResortLink = styled.a`
  font-family: Georama;
  font-size: 13px;
  color: #8B6F47;
  text-decoration: none;

  &:visited { color: #8B6F47; }
  &:hover { color: #C4A572; text-decoration: underline; }
`;

const PerexLink = styled.a`
  color: #8B6F47;
  text-decoration: none;

  &:visited { color: #8B6F47; }
  &:hover { color: #C4A572; text-decoration: underline; }
`;

const ResortGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid rgba(178, 154, 132, 0.3);
  margin-bottom: 56px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ResortItem = styled.div`
  padding: 24px 28px;
  border-right: 1px solid rgba(178, 154, 132, 0.3);
  background: #ffffff;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 700px) {
    border-right: none;
    border-bottom: 1px solid rgba(178, 154, 132, 0.3);

    &:last-child {
      border-bottom: none;
    }
  }
`;

const ResortName = styled.p`
  font-family: Georama;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 4px;
`;

const ResortLocation = styled.p`
  font-family: Georama;
  font-size: 14px;
  color: #7a6e63;
  margin: 0 0 8px;
`;

const ComingSoonBadge = styled.span`
  display: inline-block;
  font-family: Georama;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #b29a84;
  border: 1px solid #b29a84;
  padding: 3px 8px;
`;

const CtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const CtaButton = styled.a`
  display: inline-block;
  background: #b29a84;
  color: #ffffff;
  font-family: Georama;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 40px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #9a8470;
  }
`;

const PhoneLink = styled.a`
  font-family: Georama;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: #b29a84;
  }
`;

const resorts = [
  {
    name: "Červený dvůr",
    location: "Rapotín",
    available: true,
    noteText: "resortcervenydvur.cz",
    noteHref: "https://www.resortcervenydvur.cz/cs/",
  },
  {
    name: "Vila Republika",
    location: "Velké Losiny",
    available: true,
    noteText: "vila-republika.cz",
    noteHref: "https://www.vila-republika.cz/",
  },
  {
    name: "Wellness Hotel Soutok Kouty",
    location: "Kouty nad Desnou",
    available: false,
    noteText: "Otevření 2028",
    noteHref: null,
  },
];

const NordMoraviaFlexSection = () => {
  return (
    <Section>
      <Wrapper>
        <Eyebrow>Garantovaný nájem · Flexibilní pobyt</Eyebrow>
        <Headline>Koupíte jeden apartmán. Hory máte všude.</Headline>
        <Perex>
          Váš apartmán vydělává — výnos chodí měsíčně na účet, nezávisle na
          obsazenosti. A přesto máte 14 nocí ročně jen pro sebe. Pokud je zrovna
          obsazen hosty, pobývejte v jiné jednotce sítě{" "}
          <PerexLink href="https://nordmoraviaresorts.cz/" target="_blank" rel="noreferrer">Nord Moravia Resorts</PerexLink>.
        </Perex>

        <MetricsGrid>
          <MetricCard>
            <BigNumber>6 % p.a.</BigNumber>
            <MetricLabel>Garantovaný výnos, vyplácen měsíčně</MetricLabel>
          </MetricCard>
          <MetricCard>
            <BigNumber>14 nocí</BigNumber>
            <MetricLabel>Ročně pro vlastní pobyt</MetricLabel>
          </MetricCard>
          <MetricCard>
            <BigNumber>5+ let</BigNumber>
            <MetricLabel>Smluvní garance výnosu</MetricLabel>
          </MetricCard>
        </MetricsGrid>

        <HighlightBox>
          <HighlightIcon>
            <CheckCircle size={32} strokeWidth={1.5} />
          </HighlightIcon>
          <HighlightText>
            <HighlightStrong>Váš apartmán nemusí být volný, abyste si odpočinuli.</HighlightStrong>{" "}
            Jako majitel jednotky v síti Nord Moravia Resorts můžete pobývat
            v libovolné dostupné jednotce napříč resorty — bez obav z obsazenosti
            svého apartmánu. Výnos plyne dál, vy si užíváte hory.
          </HighlightText>
        </HighlightBox>

        <ResortLabelRow>
          <ResortLabel>Resorty v síti Nord Moravia Resorts</ResortLabel>
          <NetworkLink href="https://nordmoraviaresorts.cz/" target="_blank">
            Více o síti resortů →
          </NetworkLink>
        </ResortLabelRow>
        <ResortGrid>
          {resorts.map((r) => (
            <ResortItem key={r.name}>
              <ResortName>{r.name}</ResortName>
              <ResortLocation>{r.location}</ResortLocation>
              {r.available ? (
                <ResortLink href={r.noteHref} target="_blank" rel="noreferrer">
                  {r.noteText}
                </ResortLink>
              ) : (
                <ComingSoonBadge>Připravujeme · {r.noteText}</ComingSoonBadge>
              )}
            </ResortItem>
          ))}
        </ResortGrid>
      </Wrapper>
    </Section>
  );
};

export default NordMoraviaFlexSection;
