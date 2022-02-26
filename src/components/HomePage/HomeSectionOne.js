import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { buildImageUrl } from "cloudinary-build-url";

const Container = styled.div`
  width: 100%;
  height: 790px;
  background: ${`url(${buildImageUrl(
    "v1645823022/homePageHero_vvgsbc.png",
    {}
  )})`};
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 90px;

  @media (max-width: 800px) {
    background-position: -210px;
    height: auto;
    padding-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    width: 100%;
    padding: 0 40px;
  }
`;

const HeaderText = styled.h1`
  font-family: Georama;
  font-weight: 600;
  font-size: 64px;
  line-height: 66px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: 25px;

  @media (max-width: 565px) {
    font-size: 34px;
    line-height: 40px;
  }
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

  @media (max-width: 565px) {
    width: 100%;
    font-size: 18px;
    line-height: 29px;
  }
`;

const DotsWrap = styled.div`
  display: flex;
  margin-top: 82px;
  align-items: center;

  @media (max-width: 565px) {
    display: none;
  }
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
        <HeaderText id="o-nas">
          Stavíme
          <br />
          nadčasové nemovitosti
        </HeaderText>
        <DescText>
          Jsme rodinná společnost. Specializujeme se na výstavbu horských
          apartmánů a rezidenčních nemovitostí v Jeseníkách a na Šumpersku.
          Respektujeme přitom okolní prostředí i místní architekturu. Klademe
          důraz na poctivé řemeslo, nadčasový design a kvalitu.
        </DescText>
        <ButtonWrap>
          <a style={{ textDecoration: "none" }} href="/#projekty">
            <Button height={50} leftBorder={true}>
              Zobrazit Projekty
            </Button>
          </a>
        </ButtonWrap>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionOne;
