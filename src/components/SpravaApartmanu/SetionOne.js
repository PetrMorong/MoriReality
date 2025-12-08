import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { buildImageUrl } from "cloudinary-build-url";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 790px;
  background: ${`url(${buildImageUrl(
    "v1765137371/Rapotin/02_byat9q.jpg",
    {}
  )})`};
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 90px;

    overflow: hidden;  

  @media (max-width: 800px) {
    background-position: -210px;
    height: auto;
    padding-bottom: 50px;
  }

    /* ▼▼▼ OPACITY / GRADIENT OVERLAY ▼▼▼ */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 75%;            /* můžeš upravit 45–70% podle potřeby */
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(17, 18, 24, 1),   /* tmavý stín vlevo — stejné jako homepage */
      rgba(17, 18, 24, 0.65),
      rgba(17, 18, 24, 0.0)
    );
    pointer-events: none;
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;

  z-index: 2;     /* text bude nad overlayem */

  color: white;   /* doporučeno, když máš tmavý overlay */

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
               Správa apartmánů{" "}
          <br />
          v Jeseníkách bez starostí
        </HeaderText>
        <DescText>
            Postaráme se o váš apartmán od prezentace a rezervací přes úklid
              až po vyúčtování. Jste-li investor, majitel, který chce část roku
              jezdit sám, nebo už máte apartmán jinde v Jeseníkách – nastavíme
              správu tak, aby vám dlouhodobě dávala smysl po číslech i
              pocitově.
        </DescText>
        <ButtonWrap>
          <a style={{ textDecoration: "none" }}>
            <Button height={50} leftBorder={true}>
               Domluvit nezávaznou konzultaci
            </Button>
          </a>
        </ButtonWrap>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionOne;
