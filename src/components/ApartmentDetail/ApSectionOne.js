import React from "react";
import styled from "styled-components";
import { buildImageUrl } from "cloudinary-build-url";

const ApSectionOne = ({ data }) => {
  const imageUrl = buildImageUrl(data.sectionOneBg, {});

  return (
    <>
      <Container bgImage={imageUrl}>
        <Overlay>
          <GoBackWrap href={data.backLink}>
            <img src="/images/LeftArrow.svg" />
            <p>
              Zpět na <span> {data.projectName}</span>
            </p>
          </GoBackWrap>

          <HeadlineWrap>
            {data.akceBanner && <AkceBanner>{data.akceBanner}</AkceBanner>}
            <Headline>{data.apName}</Headline>
            {data.tagline && <Tagline>{data.tagline}</Tagline>}
          </HeadlineWrap>

          <BottomStrip>
            <StripWrap>
              {data.sectionOneDetails.map((item, i) => (
                <BottomCol key={i}>
                  <BoldText>
                    {item.text}
                    <GoldText>{item.goldText}</GoldText>
                  </BoldText>
                  <Desc>{item.desc}</Desc>
                </BottomCol>
              ))}
            </StripWrap>
          </BottomStrip>
        </Overlay>
      </Container>
    </>
  );
};

const GoBackWrap = styled.a`
  width: 1180px;
  padding-top: 120px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1180px) {
    width: 100%;
    padding-left: 20px;
    padding-top: 80px;
  }

  img {
    margin-right: 15px;
    width: 8px;
  }

  p {
    font-family: Georama;
    font-size: 17px;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #ffffff;
  }

  span {
    color: #b7a492;
    font-family: Georama;
    font-size: 17px;
    line-height: 30px;
    letter-spacing: 0.01em;
  }
`;

const HeadlineWrap = styled.div`
  width: 1180px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 0;

  @media (max-width: 1180px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const AkceBanner = styled.div`
  display: inline-block;
  background: #b29a84;  // ← zlatá místo průhledné
  color: #ffffff;
  font-family: Georama;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  padding: 6px 16px;
  margin-bottom: 16px;
  align-self: flex-start;

  @media (max-width: 800px) {
    font-size: 13px;
    padding: 5px 12px;
  }
`;

const Headline = styled.h1`
  font-family: Georama;
  font-weight: 600;
  font-size: 64px;
  line-height: 66px;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 14px;

  @media (max-width: 1180px) {
    font-size: 44px;
    line-height: 46px;
  }
`;

const Tagline = styled.p`
  font-family: Georama;
  font-size: 18px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 32px;
  max-width: 680px;

  @media (max-width: 800px) {
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

const BottomCol = styled.div``;

const StripWrap = styled.div`
  width: 1180px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const Desc = styled.p`
  font-family: Georama;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #ffffff;
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
  color: #ffffff;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(15, 15, 22, 0) 68.83%,
    rgba(15, 15, 22, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BottomStrip = styled.div`
  background: rgba(15, 15, 22, 0.65);
  backdrop-filter: blur(14px);
  height: 146px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 830px;
  background: ${(p) => `url("${p.bgImage}")`} no-repeat;
  padding-bottom: 140px;
  background-position: center center;
  background-size: cover;

  @media (max-width: 800px) {
    height: 630px;
    background-position: -296px 0;
    overflow: hidden;
  }
`;

export default ApSectionOne;
