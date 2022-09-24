import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { buildImageUrl } from "cloudinary-build-url";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;

  @media (max-width: 800px) {
    margin-bottom: 70px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SlideUp = styled.div`
  padding: 72px;
  height: 0;
  width: 100%;
  opacity: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  transition: 300ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 390px;
  height: 565px;
  background-size: cover;
  margin: 8px;
  position: relative;

  @media (max-width: 1180px) {
    width: 92%;
    height: 440px;
    margin: 8px 0;
  }

  &:hover ${SlideUp} {
    opacity: 1;
    height: 100%;
  }
`;

const BoxOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 55px;
  background: linear-gradient(
    180deg,
    rgba(15, 15, 22, 0) 36.65%,
    rgba(15, 15, 22, 0.9) 92.71%
  );
`;

const Text = styled.div`
  font-family: Georama;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-align: center;
`;

const Arrow = styled.img`
  margin-bottom: 13px;
`;

const Desc = styled.div`
  margin: 30px 0;
  font-family: Georama;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

const HomeSectionThree = () => {
  return (
    <Container>
      <Wrapper>
        <Box
          style={{
            marginLeft: 0,
            backgroundImage: `url(${buildImageUrl(
              "v1645822939/homeThreeImageOne_osn1s7.jpg",
              {}
            )})`,

            backgroundPosition: "-104px",
          }}
        >
          <BoxOverlay>
            <Arrow src="/images/ArrowUp.svg" />
            <Text>Trvalost a udržitelnost</Text>
          </BoxOverlay>
          <SlideUp>
            <Text>Trvalost a udržitelnost</Text>
            <Desc>
              Uvažujeme v dlouhodobém horizontu. Zaměřujeme se na detaily a
              čistotu práce. Používáme pouze nejkvalitnější materiály, které
              mají dlouhou životnost.
            </Desc>
            {/* <Button height={50} leftBorder={true} width={160}>
              Kontaktovat
            </Button> */}
          </SlideUp>
        </Box>

        <Box
          style={{
            backgroundImage: `url(${buildImageUrl(
              "v1645823019/homeThreeImage2_wr3cdt.png",
              {}
            )})`,
          }}
        >
          <BoxOverlay>
            <Arrow src="/images/ArrowUp.svg" />
            <Text>Nejvyšší standard</Text>
          </BoxOverlay>
          <SlideUp>
            <Text>Nejvyšší standard</Text>
            <Desc>
              Vytříbený design, nadstandardní vybavení a
              nejmodernější technologie. Nadčasově pojaté interiéry plní
              požadavky na komfortní, pohodlné, a přitom funkční bydlení.
            </Desc>
            {/* <Button height={50} leftBorder={true} width={160}>
              Kontaktovat
            </Button> */}
          </SlideUp>
        </Box>

        <Box
          style={{
            marginRight: 0,
            backgroundImage: `url(${buildImageUrl(
              "v1645823019/homeThreeImageThree_hnsxkt.jpg",
              {}
            )})`,
            backgroundPosition: "-234px",
          }}
        >
          <BoxOverlay>
            <Arrow src="/images/ArrowUp.svg" />
            <Text>Poctivé řemeslo</Text>
          </BoxOverlay>
          <SlideUp>
            <Text>Poctivé řemeslo</Text>
            <Desc>
              Dáváme si záležet, abychom odváděli svou práci důkladně,
              spolehlivě a poctivě. To vše dělá z našich nemovitostí domovy, kam
              se budete každý den rádi vracet.
            </Desc>
            {/* <Button height={50} leftBorder={true} width={160}>
              Kontaktovat
            </Button> */}
          </SlideUp>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionThree;
