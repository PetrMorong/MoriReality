import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { buildImageUrl } from "cloudinary-build-url";
import Lightbox from "react-spring-lightbox";

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
  margin-top: -100px;

  @media (max-width: 1180px) {
    margin-top: 0px;
  }
`;

const CarouoselItem = styled.div`
  width: 1155px;
  height: 650px;
  background-size: contain;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #e5e5e5;
  position: relative;

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
  cursor: pointer;
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

const MobileClickable = styled.div`
  height: 100%;
  width: calc(100% - 100px);
  position: absolute;
  left: 50px;
  top: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProjectSectionTwo = ({ data }) => {
  const [carouselIndex, setCarouseIndex] = React.useState(0);
  const [showGallery, setShowGallery] = React.useState(false);

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

  const imageUrl = buildImageUrl(slide.imageUrl, {});

  const lightboxImages = data.sliderImages.map((image) => {
    return { src: buildImageUrl(image.imageUrl, {}) };
  });

  return (
    <>
      <Container>
        <Wrapper>
          <CarouoselContainer>
            <CarouoselItem
              style={{
                backgroundImage: `url("${imageUrl}")`,
              }}
            >
              <CarouoselItemOverlay>
                <Logo src="/images/logoSimple.svg" />
                <LeftArrowCol>
                  <ArrowWrap onClick={handlePrevious}>
                    <img src="/images/LeftArrow.svg"></img>
                  </ArrowWrap>
                </LeftArrowCol>

                <MobileClickable onClick={() => setShowGallery(true)} />

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

      <Lightbox
        isOpen={showGallery}
        onPrev={handlePrevious}
        onNext={handleNext}
        images={lightboxImages}
        currentIndex={carouselIndex}
        /* Add your own UI */
        renderHeader={() => (
          <div
            onClick={() => setShowGallery(false)}
            style={{
              position: "absolute",
              zIndex: 99,
              right: 20,
              top: 20,
              color: "white",
              fontSize: 30,
              cursor: "pointer",
            }}
          >
            x
          </div>
        )}
        // renderFooter={() => (<CustomFooter />)}
        renderPrevButton={() => (
          <ArrowWrap
            onClick={handlePrevious}
            style={{
              position: "absolute",
              zIndex: 99,
              left: 0,
              top: "45%",
            }}
          >
            <img src="/images/LeftArrow.svg"></img>
          </ArrowWrap>
        )}
        renderNextButton={() => (
          <ArrowWrap
            onClick={handleNext}
            style={{ position: "absolute", zIndex: 99, right: 0, top: "45%" }}
          >
            <img
              style={{ transform: "rotate(180deg)" }}
              src="/images/LeftArrow.svg"
            ></img>
          </ArrowWrap>
        )}
        style={{ background: "rgba(0,0,0,.7)" }}
        onClose={() => setShowGallery(false)}

        // renderImageOverlay={() => (<ImageOverlayComponent >)}
        // className="cool-class"

        /* Use single or double click to zoom */
        // singleClickToZoom

        /* react-spring config for open/close animation */
        // pageTransitionConfig={{
        //   from: { transform: "scale(0.75)", opacity: 0 },
        //   enter: { transform: "scale(1)", opacity: 1 },
        //   leave: { transform: "scale(0.75)", opacity: 0 },
        //   config: { mass: 1, tension: 320, friction: 32 }
        // }}
      />
    </>
  );
};

export default ProjectSectionTwo;
