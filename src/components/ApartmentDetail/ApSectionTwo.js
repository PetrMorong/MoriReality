import styled from "styled-components";
import React from "react";
import { buildImageUrl } from "cloudinary-build-url";

const ApSectionTwo = ({ data }) => {
  const [carouselIndex, setCarouseIndex] = React.useState(0);
  const slide = data.gallery[carouselIndex];
  const label =
    data.galleryLabels && data.galleryLabels[carouselIndex]
      ? data.galleryLabels[carouselIndex]
      : null;

  const handleNext = () => {
    if (carouselIndex === data.gallery.length - 1) {
      setCarouseIndex(0);
    } else {
      setCarouseIndex(carouselIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (carouselIndex === 0) {
      setCarouseIndex(data.gallery.length - 1);
    } else {
      setCarouseIndex(carouselIndex - 1);
    }
  };

  const imageUrl = buildImageUrl(slide, {});

  return (
    <Container>
      <Wrapper>
        <CarouoselContainer>
          <CarouoselItem
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <LeftArrowCol>
              <ArrowWrap onClick={handlePrevious}>
                <img src="/images/LeftArrow.svg" alt="předchozí" />
              </ArrowWrap>
            </LeftArrowCol>

            <RightArrowCol>
              <ArrowWrap onClick={handleNext}>
                <img
                  style={{ transform: "rotate(180deg)" }}
                  src="/images/LeftArrow.svg"
                  alt="další"
                />
              </ArrowWrap>
            </RightArrowCol>

            {label && (
              <ImageLabelWrap>
                <ImageLabel>{label}</ImageLabel>
              </ImageLabelWrap>
            )}

            <DotsWrap>
              {data.gallery.map((_, i) => (
                <Dot
                  key={i}
                  active={i === carouselIndex}
                  onClick={() => setCarouseIndex(i)}
                />
              ))}
            </DotsWrap>
          </CarouoselItem>
        </CarouoselContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;

  @media (max-width: 800px) {
    margin-top: 70px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const LeftArrowCol = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
`;

const RightArrowCol = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
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

const ImageLabelWrap = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
`;

const ImageLabel = styled.div`
  background: rgba(0, 0, 0, 0.55);
  color: #ffffff;
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  padding: 5px 14px;
  white-space: nowrap;
`;

const DotsWrap = styled.div`
  position: absolute;
  bottom: 18px;
  right: 22px;
  display: flex;
  gap: 7px;
  align-items: center;
`;

const Dot = styled.div`
  width: ${(p) => (p.active ? "22px" : "8px")};
  height: 8px;
  background: ${(p) =>
    p.active ? "#b29a84" : "rgba(255,255,255,0.45)"};
  cursor: pointer;
  transition: width 0.2s ease, background 0.2s ease;
`;

const CarouoselContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CarouoselItem = styled.div`
  width: 1180px;
  height: 670px;
  background-size: contain;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.05);

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 260px;
  }
`;

export default ApSectionTwo;
