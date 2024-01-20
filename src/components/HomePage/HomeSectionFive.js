import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;

  @media (max-width: 1180px) {
    margin-top: -70px;
    margin-bottom: 70px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1180px) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 324px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 30px 25px;
  }
`;

const MainText = styled.div`
  margin: 32px 0;
  font-family: Georama;
  font-size: 27px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #000000;

  @media (max-width: 800px) {
    margin: 10px 0;
    font-size: 22px;
    line-height: 30px;
  }

  span {
    font-family: Georama;
    font-size: 27px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #b29a84;

    @media (max-width: 800px) {
      font-size: 22px;
      line-height: 30px;
    }
  }
`;

const SubText = styled.div`
  font-family: Georama;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #000000;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const HomeSectionFive = () => {
  return (
    <Container>
      <Wrapper>
        <Col>
          <img src="/images/tickIcon.svg" />
          <MainText>
            <span>Vstřícnost a důraz na</span>
            <br />
            vaše představy
          </MainText>
          <SubText>
            Nemovitosti stavíme v moderním designu. Rádi ale vyhovíme i vašim
            konkrétním představám v nejvyšší možné míře. Vaše nové bydlení bude
            mít vaši osobnost a unikátní vyznění.
          </SubText>
        </Col>
        <Col>
          <img src="/images/tickIcon.svg" />
          <MainText>
            Kompletní
            <br />
            <span>Správa Apartmánů</span>
          </MainText>
          <SubText>
            Kupujete si od nás horský apartmán zároveň jako investici? Nabízíme
            vám kompletní správu krátkodobých pronájmů, abyste dosáhli co
            nejvyššího výnosu a pasivního příjmu bez starostí. 
          </SubText>
        </Col>
        <Col>
          <img src="/images/tickIcon.svg" />
          <MainText>
            Poctivost a <br />
            <span>kvalita</span>
          </MainText>
          <SubText>
            V každém projektu si jeden až dva apartmány ponecháváme. Ke každé
            realizaci máme osobní vztah, vše musí být perfektní. Chceme, aby
            nemovitost přinášela radost po desítky let vám i nám.
          </SubText>
        </Col>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionFive;
