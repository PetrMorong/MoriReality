// src/components/ProjectDetail/KoutyWhoSection.js
import * as React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 0 80px;

  @media (max-width: 1180px) {
    padding: 80px 25px 40px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Col = styled.div`
  flex: 1;
`;

const Label = styled.div`
  font-family: Georama;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #b29a84;
  margin-bottom: 12px;
`;

const Headline = styled.h2`
  font-family: Georama;
  font-size: 32px;
  line-height: 40px;
  color: #000;
  margin: 0 0 10px;

  @media (max-width: 565px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const HeadlineGold = styled.span`
  color: #b29a84;
`;

const Desc = styled.p`
  font-family: Georama;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #4d4d56;
  margin-bottom: 20px;
`;

const HighlightBox = styled.div`
  margin-top: 10px;
  padding: 22px 24px;
  border-radius: 18px;
  background: #faf6f1;
  font-family: Georama;
  font-size: 16px;
  line-height: 26px;
  color: #4d4d56;
`;

const Strong = styled.span`
  font-weight: 600;
  color: #b29a84;
`;

const KoutyWhoSection = () => {
  return (
    <Container>
      <Wrapper>
        <Label>Kdo stojí za projektem</Label>
        <Row>
          <Col>
            <Headline>
              Petr Morong {" "}
              <HeadlineGold>a František Petrouš</HeadlineGold>
            </Headline>
            <Desc>
              Projekt wellness hotelu Kouty vzniká jako společné dílo rodinné
              developerské společnosti Mori Reality a investora Františka
              Petrouše. Mori Reality se dlouhodobě věnuje výstavbě a správě
              horských apartmánů a rezidenčních nemovitostí v Jeseníkách se
              zaměřením na citlivé rekonstrukce, kvalitní řemeslo a následnou
              profesionální správu.
            </Desc>
            <Desc>
              František Petrouš je investor se zkušenostmi z financí a
              investičních nemovitostí. Vlastní portfolio bytů, apartmánů a
              činžovních domů a aktuálně dokončuje projekt 15 bytů v Jilemnici.
              Do Koutů přináší know-how hlavně v oblasti bankovních úvěrů a
              investičního nastavení projektu, Mori Reality zase lokální
              zkušenost, provoz a správu.
            </Desc>
          </Col>
          <Col>
            <HighlightBox>
              <Strong>Co to znamená pro kupujícího?</Strong>
              <br />
              Za projektem stojí kombinace lokálního developera, který dělá
              projekty „na vlastní kůži“, a investora, který rozumí financím,
              bankám a investičním nemovitostem. Výsledkem je projekt, kde
              dobře funguje jak architektura a provoz, tak financování a výnos.
            </HighlightBox>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default KoutyWhoSection;
