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
  background: white;
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 130px;
`;

const Line = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 1px;
`;

const Headline = styled.div`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin: 0 56px;
`;

const CarouoselContainer = styled.div``;

const CarouoselItem = styled.div`
  width: 1180px;
  height: 670px;
  background-size: cover;
`;

const ProjectInfo = styled.div`
  position: absolute;
  left: 48px;
  bottom: 32px;
  z-index: 1;
`;

const CarouoselItemOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(15, 15, 22, 0) 70.83%,
    rgba(15, 15, 22, 0.9) 100%
  );
`;

const ProjectName = styled.div`
  font-family: Georama;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

const ProjectDesc = styled.div`
  font-family: Georama;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #b29a84;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 48px;
  bottom: 32px;
`;

const RightArrowCol = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
`;

const LeftArrowCol = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
`;

const ArrowWrap = styled.div`
  width: 54px;
  height: 54px;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  position: absolute;
  right: 48px;
  top: 32px;
`;

const data = [
  {
    imageUrl: "/images/projektVilaRepublika.png",
    title: "Vila republika",
    desc: "Apartmánový dům ve Velkých Losinách",
    detailLink: "/vila-republika",
  },
  {
    imageUrl: "/images/projektMalaMorava.jpg",
    title: "Chalupa Malá Morava",
    desc: "4 horské apartmány",
    detailLink: "/apartmany-mala-morava",
  },
  {
    imageUrl: "/images/projektVlDva.jpg",
    title: "Aparthotel Velké Losiny",
    desc: "6 apartmánů, Wellness, Bistro",
    detailLink: "TODO",
  },
  {
    imageUrl: "/images/projektHrabenov.png",
    title: "Rezidence Hrabenov",
    desc: "3 byty 10min od Šumperka",
    detailLink: "TODO",
  },
];

const HomeSectionFour = () => {
  const [carouselIndex, setCarouseIndex] = React.useState(0);

  const slide = data[carouselIndex];

  const handleNext = () => {
    if (carouselIndex === data.length - 1) {
      setCarouseIndex(0);
    } else {
      setCarouseIndex(carouselIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (carouselIndex === 0) {
      setCarouseIndex(data.length - 1);
    } else {
      setCarouseIndex(carouselIndex - 1);
    }
  };

  return (
    <Container>
      <Wrapper>
        <HeadlineRow>
          <Line></Line>
          <Headline>Naše projekty</Headline>
          <Line></Line>
        </HeadlineRow>

        <CarouoselContainer>
          <CarouoselItem
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <CarouoselItemOverlay>
              <ProjectInfo>
                <ProjectName>{slide.title}</ProjectName>
                <ProjectDesc>{slide.desc}</ProjectDesc>
              </ProjectInfo>
              <Logo src="/images/logoSimple.svg" />
              <LeftArrowCol>
                <ArrowWrap onClick={handlePrevious}>
                  <img src="/images/LeftArrow.svg"></img>
                </ArrowWrap>
              </LeftArrowCol>
              <RightArrowCol>
                <ArrowWrap onClick={handleNext}>
                  <img
                    style={{ transform: "rotate(180deg)" }}
                    src="/images/LeftArrow.svg"
                  ></img>
                </ArrowWrap>
              </RightArrowCol>
              <ButtonWrap>
                <a style={{ textDecoration: "none" }} href={slide.detailLink}>
                  <Button>Zobrazit projekt</Button>
                </a>
              </ButtonWrap>
            </CarouoselItemOverlay>
          </CarouoselItem>
        </CarouoselContainer>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionFour;