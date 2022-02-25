import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    margin-top: 0px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 90px;

  @media (max-width: 1180px) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 40px;
  }
`;

const MainText = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 40px;
  }

  span {
    font-family: Georama;
    font-size: 42px;
    line-height: 51px;
    color: #b29a84;

    @media (max-width: 800px) {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

const SubText = styled.p`
  width: 520px;
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #0f0f16;

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    margin-top: 30px;
    font-size: 16px;
    line-height: 28px;
  }

  span {
    font-weight: 600;
    color: #b29a84;
    font-family: Georama;
    font-size: 19px;
    line-height: 32px;
    letter-spacing: 0.01em;

    @media (max-width: 800px) {
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

const HomeSectionTwo = () => {
  return (
    <Container>
      <Wrapper>
        <MainText>
          Když jde o <span>domov</span>,
          <br />
          na kompromisy
          <br />
          není prostor
        </MainText>

        <SubText>
          Navrhujeme, stavíme a rekonstruujeme tak, aby každý z našich projektů
          vyjadřoval silný emociální náboj. Naší vizí je vytvářet trvalé hodnoty
          nepodléhající módním trendům, které přetrvají generace. Jen tak vám
          můžeme poskytnout{" "}
          <span>domov, se kterým budete opravdu spokojeni.</span>
          <br />
          <br />
          Spolupracujeme{" "}
          <span>se špičkovými architekty a interiérovými designéry</span>.
          Bohaté zkušenosti z výstavby domů úročíme ve váš prospěch. Ať už
          vytváříme bydlení vhodné pro mladé kupce či pro nejnáročnější
          klientelu, máme na mysli jediné. Aby se vám zde dobře žilo.
        </SubText>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionTwo;
