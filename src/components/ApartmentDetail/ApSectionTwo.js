import styled from "styled-components";
import React from "react";

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

  return (
    <Container>
      <Wrapper>
        <MainText>
          Když jde o <span>domov</span>, na kompromisy není prostor
        </MainText>

        <SubText>
          Našim cílem je poskytovat kvalitní a spolehlivé stavební služby. Při
          realizaci vašich představ, myšlenek, a snů klademe důraz na
          vstřícnost, důslednost, a jednání vedoucí k jistote, že dostanete
          <span> domov, se kterým budete doopravdy spokojeni.</span> S
          důkladnými zkušenostami ve výstavbě domů spolupracujeme{" "}
          <span>
            se špičkovými se špičkovými architekty a interirovými designéry.
          </span>
        </SubText>

        <CarouoselContainer>
          <CarouoselItem
            style={{
              backgroundImage: `url(${slide})`,
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

        <Row>
          {data.moreDetails.map((item, i) => (
            <BottomCol key={i}>
              <BoldText>
                {item.text}
                <GoldText>{item.goldText}</GoldText>
              </BoldText>
              <Desc>{item.desc}</Desc>
            </BottomCol>
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
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
  background-size: cover;
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

  /* @media (max-width: 800px) {
    margin: 10px 0;
    font-size: 22px;
    line-height: 30px;
  } */

  span {
    font-family: Georama;
    font-size: 42px;
    line-height: 50px;
    letter-spacing: 0.01em;
    color: #b29a84;

    /* @media (max-width: 800px) {
      font-size: 22px;
      line-height: 30px;
    } */
  }
`;

export default ApSectionTwo;
