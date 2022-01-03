import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  width: 324px;
`;

const MainText = styled.div`
  margin: 32px 0;
  font-family: Georama;
  font-size: 27px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #000000;

  span {
    font-family: Georama;
    font-size: 27px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #b29a84;
  }
`;

const SubText = styled.div`
  font-family: Georama;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #000000;
`;

const HomeSectionFive = () => {
  return (
    <Container>
      <Wrapper>
        <Col>
          <img src="images/tickIcon.svg" />
          <MainText>
            <span>Vstřícnost a důraz na</span>
            <br />
            vaše představy
          </MainText>
          <SubText>
            Nemovisti které stavíme jsou navrženy v moderním a nadčasovém
            designu, pokud ale budete mít požadavky na změny jsme připraveni
            vyhovět vaším představám do nejvyšší možné míry.
          </SubText>
        </Col>
        <Col>
          <img src="images/tickIcon.svg" />
          <MainText>
            Kompletní
            <br />
            <span>Správa Apartmánů</span>
          </MainText>
          <SubText>
            Pokud od nás koupíte apartmán, tak vám nabízíme kompletní správu při
            jeho krátkodobém pronájmu, aby jste dosáhli co nejvyššího výnosu a
            pasivní investice bez starostí.
          </SubText>
        </Col>
        <Col>
          <img src="images/tickIcon.svg" />
          <MainText>
            Poctivost a <br />
            <span>kvalita</span>
          </MainText>
          <SubText>
            V každém projektu si jeden až dva apartmány necháváme, přistupujeme
            tedy k realizaci s láskou, jelikož chceme aby i nám nemovitost
            přinášela radost po desítky let.
          </SubText>
        </Col>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionFive;
