import React from "react";
import styled from "styled-components";

const data = {
  sectionOneBg: "/images/A_3-min.jpg",
  apName: "Apartmán 39/1",
  sectionOneDetails: [
    {
      text: "2+",
      goldText: "kk",
      desc: "Dispozice",
    },
    {
      text: "38 ",
      goldText: "m2",
      desc: "Podlahová Plocha",
    },
    {
      text: "1 ",
      goldText: "NP",
      desc: "Podlaží",
    },
    {
      text: "Východ",
      goldText: "",
      desc: "Orientace",
    },

    {
      text: "Malá ",
      goldText: "Morava",
      desc: "Lokatita",
    },
  ],
};

const ApSectionOne = () => {
  return (
    <Container bgImage={data.sectionOneBg}>
      <Overlay>
        <Headline>{data.apName}</Headline>
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
  );
};

const BottomCol = styled.div``;

const StripWrap = styled.div`
  width: 1180px;
  display: flex;
  justify-content: space-between;
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

const Headline = styled.h1`
  font-family: Georama;
  font-weight: 600;
  font-size: 64px;
  line-height: 66px;
  letter-spacing: 0.01em;
  color: #ffffff;
  width: 1180px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 60px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(15, 15, 22, 0) 70.83%,
    rgba(15, 15, 22, 0.9) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 830px;
  background: ${(p) => `url("${p.bgImage}")`};
  padding-bottom: 140px;
  background-position: 0 -79px;
  background-size: cover;
`;

export default ApSectionOne;
