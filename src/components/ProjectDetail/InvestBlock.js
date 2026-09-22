// src/components/ProjectDetail/InvestBlock.js
import * as React from "react";
import styled from "styled-components";
import { TrendingUp, Home, ShieldCheck, CalendarDays, Unlock, CheckCircle } from "lucide-react";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 0 80px;
  background: #fafafa;

  @media (max-width: 1180px) {
    padding: 80px 25px 60px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const Label = styled.div`
  font-family: Georama;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #b29a84;
  margin-bottom: 10px;
`;

const Headline = styled.h2`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin: 0 0 8px;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const HeadlineGold = styled.span`
  color: #b29a84;
`;

const SubLine = styled.p`
  font-family: Georama;
  font-size: 18px;
  line-height: 28px;
  color: #4d4d56;
  margin: 0 0 56px;

  @media (max-width: 800px) {
    margin-bottom: 36px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-top: 2px solid #b29a84;
  border-left: 1px solid rgba(178, 154, 132, 0.2);
  border-right: 1px solid rgba(178, 154, 132, 0.2);
  border-bottom: 1px solid rgba(178, 154, 132, 0.2);
  padding: 24px 22px 22px;
`;

const CardIcon = styled.div`
  margin-bottom: 16px;
  color: #b29a84;
`;

const CardTitle = styled.h4`
  font-family: Georama;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  margin: 0 0 10px;
`;

const CardText = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 26px;
  color: #4d4d56;
  margin: 0;
`;

const ProofBox = styled.div`
  background: #f5f0eb;
  border-left: 3px solid #b29a84;
  padding: 22px 28px;
  font-family: Georama;
  font-size: 17px;
  line-height: 28px;
  color: #4d4d56;
`;

const ProofStrong = styled.span`
  color: #000000;
  font-weight: 600;
`;

const ProofNote = styled.p`
  font-family: Georama;
  font-size: 13px;
  line-height: 20px;
  color: #8a8a92;
  margin: 14px 0 0;
`;

const points = [
  {
    icon: TrendingUp,
    title: "Skutečná data, ne projekce",
    text: "Resort je v provozu od ledna 2026. Výnos ukazujeme na reálných tržbách konkrétních apartmánů.",
  },
  {
    icon: Home,
    title: "Vlastníte konkrétní byt v KN",
    text: "Kupujete byt zapsaný v katastru nemovitostí. Zajištění vlastnickým právem — ne dluhopisem, ne fondem.",
  },
  {
    icon: ShieldCheck,
    title: "Provozní náklady nesete vy? Ne.",
    text: "Provize portálů, úklid, snídaně, wellness pro hosty i marketing hradí provozovatel.",
  },
  {
    icon: CalendarDays,
    title: "14 nocí vlastního využití ročně",
    text: "Apartmán je váš — 14 nocí ročně pro sebe nebo rodinu. Platíte jen úklid a prádlo.",
  },
  {
    icon: Unlock,
    title: "Transparentní vyúčtování",
    text: "Každý měsíc rozpis rezervací, nocí a tržeb vaší jednotky.",
  },
  {
    icon: CheckCircle,
    title: "Resort funguje — ne sliby",
    text: "Červený dvůr je v provozu. Hosté jsou. Wellness otevřeno. Kupujete do fungujícího resortu.",
  },
];

const InvestBlock = () => {
  return (
    <Section>
      <Wrapper>
        <Label>Proč investovat do Červeného dvora</Label>
        <Headline>
          Podíl z tržby <HeadlineGold>45 %</HeadlineGold>
        </Headline>
        <SubLine>Měsíční výplata podle skutečných rezervací – s rozpisem každé noci</SubLine>

        <Grid>
          {points.map((item, i) => (
            <Card key={i}>
              <CardIcon><item.icon size={28} strokeWidth={1.5} /></CardIcon>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.text}</CardText>
            </Card>
          ))}
        </Grid>

        <ProofBox>
          <ProofStrong>Proč je tohle jiné než u konkurence?</ProofStrong>{" "}
          Garantovaný nájem se vždy platí z budoucích tržeb – a po skončení garance se ukáže
          realita. My ukazujeme rovnou skutečná čísla: apartmány v provozu dosáhly za leden–srpen
          2026 obsazenosti 53–71 %, a to v prvním roce provozu a v resortu, který se teprve
          dokončuje. Tato čísla považujeme za výchozí úroveň. S dokončením celého areálu –
          kavárny s kuchyní, společných prostor a dalšího zázemí – a s rostoucím počtem
          hodnocení hostů očekáváme jejich další růst.
        </ProofBox>
        <ProofNote>
          Uvedené údaje jsou historické výsledky, nikoli příslib ani záruka budoucího výnosu.
          Skutečný příjem závisí na obsazenosti, cenách a sezóně.
        </ProofNote>
      </Wrapper>
    </Section>
  );
};

export default InvestBlock;
