// src/components/ProjectDetail/KoutyFinancingSection.js
import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 80px 0 120px;

  @media (max-width: 1180px) {
    padding: 40px 25px 80px;
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
  margin-bottom: 18px;
`;

const BulletList = styled.ul`
  padding-left: 20px;
  margin: 0 0 18px;
  font-family: Georama;
  font-size: 16px;
  line-height: 26px;
  color: #4d4d56;
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

const ButtonWrap = styled.div`
  margin-top: 16px;
`;

const KoutyFinancingSection = () => {
  return (
    <Container>
      <Wrapper>
        <Label>Financování</Label>
        <Row>
          <Col>
            <Headline>
              Financování nákupu{" "}
              <HeadlineGold>apartmánu v Koutech</HeadlineGold>
            </Headline>
            <Desc>
              Nákup ubytovací jednotky v objektu občanské vybavenosti se z pohledu banky liší
              od klasického bytu. Jde o specifický typ nemovitosti, který ne
              každá banka umí správně zařadit. Proto u projektu Kouty nabízíme
              pomoc s financováním přímo přes Františka Petrouše a jeho tým.
            </Desc>
            <Desc>
              František má za sebou roky praxe ve financích a investičním
              poradenství. Díky zkušenosti s desítkami hypotečních a
              investičních úvěrů ví, do které banky s ubytovací jednotkou jít,
              jak nastavit zástavu, příjmy a hodnotu nemovitosti a jak připravit
              podklady tak, aby schválení úvěru mělo vysokou šanci projít.
            </Desc>
          </Col>
          <Col>
            <HighlightBox>
              <Strong>Výhody financování přes našeho partnera</Strong>
              <BulletList>
                <li>pomoc s vyřízením úvěru od prvního výpočtu po schválení,</li>
                <li>
                  znalost specifik ubytovací jednotky – banka přesně ví, co
                  financuje,
                </li>
                <li>
                  spolupráce se smluvním partnerem{" "}
                  <Strong>Bonites group s.r.o.</Strong>, který se specializuje
                  na hypoteční a investiční poradenství,
                </li>
                <li>
                  <Strong>vratná rezervace</Strong>, pokud klient využije
                  financování přes našeho smluvního partnera a banka úvěr
                  nakonec neschválí.
                </li>
              </BulletList>
              <Desc style={{ marginBottom: 0 }}>
                Pokud budete řešit financování přes náš tým a partnery, uděláme
                maximum pro to, aby úvěr nejen dobře vypadal v kalkulaci, ale
                hlavně aby skutečně dopadl.
              </Desc>
              <ButtonWrap>
                <Button height={48} leftBorder={true}>
                  Chci pomoct s financováním
                </Button>
              </ButtonWrap>
            </HighlightBox>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default KoutyFinancingSection;
