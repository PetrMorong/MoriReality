import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { buildImageUrl } from "cloudinary-build-url";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
`;

const Wrapper = styled.div`
  background: white;
  width: 100%;
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 130px;

  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
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

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 41px;
  }
`;

const CarouoselContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CarouoselItem = styled.div`
  width: 1180px;
  height: 670px;
  background-size: cover;

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 260px;
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  left: 48px;
  bottom: 32px;
  z-index: 1;

  @media (max-width: 800px) {
    left: 20px;
    bottom: 20px;
  }
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

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const ProjectDesc = styled.div`
  font-family: Georama;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #b29a84;

  @media (max-width: 800px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 48px;
  bottom: 32px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const RightArrowCol = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
`;

const MobileClickable = styled.a`
  height: 100%;
  width: calc(100% - 100px);
  position: absolute;
  left: 50px;
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

  @media (max-width: 800px) {
    width: 44px;
    height: 44px;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  right: 48px;
  top: 32px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const data = [
  {
    imageUrl: "v1656862318/Kouty/03_hu0zzb.png",
    title: "ApartHotel Kouty",
    desc: "5ti hv??zdi??kov?? welness hotel",
    detailLink: "/aparthotel-kouty",
  },
  {
    imageUrl: "v1645822964/vilaRepublika/img2_j6mpok.png",
    title: "Vila republika",
    desc: "Apartm??nov?? d??m Velk?? Losiny",
    detailLink: "/vila-republika",
  },
  // {
  //   imageUrl: "v1645823025/projektVlDva_p4fsrb.png",
  //   title: "Apartm??nov?? d??m Velk?? Losiny",
  //   desc: "9 apartm??n??, Wellness",
  //   detailLink: "",
  // },
  {
    imageUrl: "v1652947191/Screenshot_2022-05-19_at_09.59.12_nzkktb.png",
    title: "Kav??rna Republika",
    desc: "Velk?? Losiny",
    detailLink: "",
  },
  {
    imageUrl: "v1645823018/projektMalaMorava_nzkcnk.jpg",
    title: "Horsk?? Chalupa",
    desc: "Mal?? Morava",
    detailLink: "/apartmany-mala-morava",
  },
  {
    imageUrl: "v1645823344/hrabenov/1_frp1mw.jpg",
    title: "Rezidence Hrabenov",
    desc: "3 apartm??ny",
    detailLink: "/rezidence-hrabenov",
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

  const imageUrl = buildImageUrl(slide.imageUrl, {});

  return (
    <Container>
      <Wrapper>
        <HeadlineRow>
          <Line></Line>
          <Headline id="projekty">Na??e projekty</Headline>
          <Line></Line>
        </HeadlineRow>

        <CarouoselContainer>
          <CarouoselItem
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <CarouoselItemOverlay>
              <ProjectInfo>
                <ProjectName>{slide.title}</ProjectName>
                <ProjectDesc>{slide.desc}</ProjectDesc>
              </ProjectInfo>

              <Logo src="/images/logoSimple.svg" />

              <MobileClickable href={slide.detailLink} />

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
