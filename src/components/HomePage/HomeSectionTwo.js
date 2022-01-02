import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -90px;
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 90px;
`;

const MainText = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;

  span {
    font-family: Georama;
    font-size: 42px;
    line-height: 51px;
    color: #b29a84;
  }
`;

const SubText = styled.p`
  width: 520px;
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #0f0f16;

  span {
    font-weight: 600;
    color: #b29a84;
    font-family: Georama;
    font-size: 19px;
    line-height: 32px;
    letter-spacing: 0.01em;
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
          Našim cílem je poskytovat kvalitní a spolehlivé stavební služby. Při
          realizaci vašich představ, myšlenek, a snů klademe důraz na
          vstřícnost, důslednost, a jednání vedoucí k jistote, že dostanete
          <span> domov, se kterým budete doopravdy spokojeni.</span>
          <br /> <br />S důkladnými zkušenostami ve výstavbě domů spolupracujeme
          se špičkovými{" "}
          <span>se špičkovými architekty a interirovými designéry.</span> aby
          jsme vám poskytli nadstandardní bydlení, do kterého se budete každý
          den s radostí vracet.
        </SubText>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionTwo;
