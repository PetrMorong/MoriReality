import styled from "styled-components";
import React from "react";
import { buildImageUrl } from "cloudinary-build-url";

const ApSectionTwo = ({ data }) => {
  const [carouselIndex, setCarouseIndex] = React.useState(0);
  const slide = data.gallery[carouselIndex];

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
        {/* <MainText>
          {data.apTitle || (
            <>
              Když jde o <span>domov</span>, na kompromisy není prostor
            </>
          )}
        </MainText> */}

        {/* <SubText>
         {data.apText || (
            <>
              Našim cílem je poskytovat kvalitní a spolehlivé stavební služby.
              Při realizaci vašich představ, myšlenek, a snů klademe důraz na
              vstřícnost, důslednost, a jednání vedoucí k jistote, že dostanete
              <span> domov, se kterým budete doopravdy spokojeni.</span> S
              důkladnými zkušenostami ve výstavbě domů spolupracujeme{" "}
              <span>
                se špičkovými se špičkovými architekty a interirovými designéry.
              </span>
            </>
          )}
        </SubText> */}

        <CarouoselContainer>
          <CarouoselItem
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
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
          </CarouoselItem>
        </CarouoselContainer>

       {/* <Row>
          {data.moreDetails.map((item, i) => (
            <BottomCol key={i}>
              <BoldText>
                {item.text}
                <GoldText>{item.goldText}</GoldText>
              </BoldText>
              <Desc>{item.desc}</Desc>
            </BottomCol>
          ))}
        </Row> */}
      </Wrapper>
    </Container>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 90px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }
`;

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
`;

const BottomCol = styled.div``;

const Desc = styled.p`
  font-family: Georama;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #4d4d56;

  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 50px;
  }
`;

const GoldText = styled.span`
  font-family: Georama;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.01em;
  color: #b29a84;
`;

const BoldText = styled.p`
  font-family: Georama;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.01em;
  color: #4d4d56;

  @media (max-width: 800px) {
    text-align: center;
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
  position: relative;

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 260px;
  }
`;

const SubText = styled.p`
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  width: 700px;
  margin-bottom: 150px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 30px;
    margin-bottom: 70px;
  }

  span  {
    color: #b29a84;
    font-family: Georama;
    font-size: 19px;
    line-height: 32px;
  }
`;

const MainText = styled.p`
  font-family: Georama;
  font-size: 42px;
  line-height: 50px;
  letter-spacing: 0.01em;
  color: #000000;
  width: 480px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 32px;
    line-height: 30px;
    padding: 0 30px;
  }

  span {
    font-family: Georama;
    font-size: 42px;
    line-height: 50px;
    letter-spacing: 0.01em;
    color: #b29a84;

    @media (max-width: 800px) {
      font-size: 32px;
      line-height: 30px;
    }
  }
`;

export default ApSectionTwo;
