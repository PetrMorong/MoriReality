import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  height: 750px;
  background: url("./static/images/homePageHero.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 90px;
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  font-family: Georama;
  font-weight: 600;
  font-size: 64px;
  line-height: 66px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: 25px;
`;

const SubTextTop = styled.p`
  font-family: Georama;
  font-weight: 400;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #b29a84;
  margin-left: 10px;
`;

const DescText = styled.h3`
  width: 565px;
  font-family: Georama;
  color: white;
  margin-top: 30px;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
`;

const DotsWrap = styled.div`
  display: flex;
  margin-top: 82px;
  align-items: center;
`;

const Dot = styled.div`
  background: #b7a492;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  margin-right: 9px;
`;

const ButtonWrap = styled.div`
  margin-top: 34px;
`;

const HomeSectionOne = () => {
  return (
    <Container>
      <Wrapper>
        <DotsWrap>
          <Dot style={{ backgroundColor: "white" }} />
          <Dot />
          <Dot />
          <SubTextTop>Mori Reality</SubTextTop>
        </DotsWrap>
        <HeaderText>
          Prémiové
          <br />
          nemovitosti na klíč
        </HeaderText>
        <DescText>
          Jsme rodinná firma, která s důrazem na poctivé řemeslo, kvalitu a
          nadčasový design se soutředí na výstavbu horských apartmánů v
          Jeseníkách a rezidenčních nemovitostí na Šumpersku.
        </DescText>
        <ButtonWrap>
          <Button height={56}>Zobrazit Projekty</Button>
        </ButtonWrap>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionOne;
