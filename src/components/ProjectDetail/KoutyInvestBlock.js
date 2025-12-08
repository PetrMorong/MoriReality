// src/components/ProjectDetail/KoutyInvestBlock.js
import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 0;

  @media (max-width: 1180px) {
    padding: 80px 24px;
  }
`;

const Wrap = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (max-width: 1180px) {
    width: 100%;
    gap: 80px;
  }
`;

const Label = styled.div`
  font-size: 13px;
  font-family: Georama;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #b29a84;
  margin-bottom: 12px;
`;

const Headline = styled.h2`
  font-size: 32px;
  font-family: Georama;
  line-height: 40px;
  margin-bottom: 16px;
  color: #000;
`;

const Gold = styled.span`
  color: #b29a84;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  font-family: Georama;
  line-height: 30px;
  color: #4d4d56;
  margin-bottom: 20px;
`;

const Box = styled.div`
  background: #faf6f1;
  padding: 26px 28px;
  border-radius: 18px;
  font-size: 16px;
  font-family: Georama;
  line-height: 26px;
  color: #4d4d56;
`;

const Strong = styled.span`
  color: #b29a84;
  font-weight: 600;
`;

const BulletList = styled.ul`
  padding-left: 20px;
  margin-top: 12px;
  margin-bottom: 14px;
  line-height: 26px;
`;

const ButtonWrap = styled.div`
  margin-top: 16px;
`;

const KoutyInvestBlock = () => {
  return (
    <Section>
      <Wrap>
        {/* --- SEKCE 1 --- */}
        <div>
          <Label>Kdo stojí za projektem</Label>
          <Headline>
            Petr Morong <Gold>a František Petrouš</Gold>
          </Headline>

          <Row>
            <div>
              <Desc>
                Projekt wellness hotelu Kouty vzniká jako společné dílo rodinné
                developerské společnosti Mori Reality a investora Františka
                Petrouše. Mori Reality se dlouhodobě věnuje výstavbě a správě
                horských apartmánů a rezidenčních nemovitostí v Jeseníkách.
              </Desc>
              <Desc>
                František Petrouš je investor se zkušenostmi z financí a
                investičních nemovitostí. Vlastní portfolio bytů, apartmánů a
                činžovních domů a aktuálně dokončuje projekt 15 bytů v
                Jilemnici. Do Koutů přináší know-how z oblasti bankovních úvěrů a
                investičního nastavení projektu, Mori Reality zase lokální
                zkušenost, provoz a správu.
              </Desc>
            </div>

            <Box>
              <Strong>Co to znamená pro kupujícího?</Strong>
              <br />
              Za projektem stojí kombinace lokálního developera, který dělá
              projekty „na vlastní kůži“, a investora, který rozumí financím,
              bankám a investičním nemovitostem. Výsledkem je projekt, kde
              dobře funguje jak architektura a provoz, tak financování a výnos.
            </Box>
          </Row>
        </div>

        {/* --- SEKCE 2 --- */}
        <div>
          <Label>Financování</Label>
          <Headline>
            Financování nákupu <Gold>apartmánu v Koutech</Gold>
          </Headline>

          {/* Zrcadlový layout – box vlevo */}
          <Row>
            <Box>
              <Strong>Výhody financování přes našeho partnera</Strong>

              <BulletList>
                <li>
                  Pomoc s vyřízením úvěru od prvního výpočtu po schválení.
                </li>
                <li>
                  Znalost specifik ubytovací jednotky – banka přesně ví, co
                  financuje.
                </li>
                <li>
                  Spolupráce s Bonites Group s.r.o. – specialista na hypotéky a
                  investice.
                </li>
                <li>
                  <Strong>Vratná rezervace</Strong> při financování přes našeho
                  partnera, pokud banka úvěr neschválí.
                </li>
              </BulletList>

              <ButtonWrap>
                <Button leftBorder height={48}>
                  Chci pomoct s financováním
                </Button>
              </ButtonWrap>
            </Box>

            <div>
              <Desc>
                Nákup ubytovací jednotky v apart-hotelu se z pohledu banky liší
                od klasického bytu. Jde o specifický typ nemovitosti, který ne
                každá banka umí správně zařadit.
              </Desc>
              <Desc>
                Díky zkušenostem Františka Petrouše s desítkami hypotečních a
                investičních úvěrů víme, do které banky jít, jak nastavit
                zástavu, příjmy a hodnotu nemovitosti tak, aby schválení úvěru
                mělo maximální šanci projít.
              </Desc>
            </div>
          </Row>
        </div>
      </Wrap>
    </Section>
  );
};

export default KoutyInvestBlock;
