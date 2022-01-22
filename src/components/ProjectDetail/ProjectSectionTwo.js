import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1180px) {
    margin-top: 0px;
  }
`;

const Wrapper = styled.div`
  background: white;
  width: 100%;
`;

const CarouoselContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CarouoselItem = styled.div`
  width: 1180px;
  height: 650px;
  background-size: cover;

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 260px;
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

const Logo = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 48px;
  bottom: 32px;

  @media (max-width: 1180px) {
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
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 44px;
    height: 44px;
  }
`;

const ProjectSectionTwo = ({ data }) => {
  const [carouselIndex, setCarouseIndex] = React.useState(0);

  const images = data.sliderImages;

  const slide = images[carouselIndex];

  const handleNext = () => {
    if (carouselIndex === images.length - 1) {
      setCarouseIndex(0);
    } else {
      setCarouseIndex(carouselIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (carouselIndex === 0) {
      setCarouseIndex(images.length - 1);
    } else {
      setCarouseIndex(carouselIndex - 1);
    }
  };

  return (
    <Container>
      <Wrapper>
        <CarouoselContainer>
          <CarouoselItem
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <CarouoselItemOverlay>
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
            </CarouoselItemOverlay>
          </CarouoselItem>
        </CarouoselContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectSectionTwo;
