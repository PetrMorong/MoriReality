import * as React from "react";
import styled from "styled-components";

const ProjectSectionSix = ({ data }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Headline>Časová osa projektu</Headline>
          <OsaWrap>
            <OsaLine />
            <OsaLineFill style={{ width: data.timelineFill }} />

            <Block style={{ top: "78px", left: "-2px" }}>
              <Dot />
              <DotTitle>{data.timeline[0].title}</DotTitle>
              <DotDate>{data.timeline[0].date}</DotDate>
            </Block>

            <Block style={{ top: "78px", left: "25%" }}>
              <Dot />
              <DotTitle>{data.timeline[1].title}</DotTitle>
              <DotDate>{data.timeline[1].date}</DotDate>
            </Block>

            <Block style={{ top: "78px", left: "50%" }}>
              <Dot />
              <DotTitle>{data.timeline[2].title}</DotTitle>
              <DotDate>{data.timeline[2].date}</DotDate>
            </Block>

            <Block
              style={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
              }}
            >
              <Dot />
              <DotTitle style={{ textAlign: "end" }}>
                {data.timeline[3].title}
              </DotTitle>
              <DotDate>{data.timeline[3].date}</DotDate>
            </Block>
          </OsaWrap>
        </Wrapper>
      </Container>
      <Container style={{ background: "white" }}>
        <WrapperArchitect>
          <Text>{data.architectWord}</Text>
          <Name>- {data.architectName}, Architekt</Name>
        </WrapperArchitect>
      </Container>
    </>
  );
};

const Block = styled.div`
  /* position: absolute; */
  z-index: 99;
`;

const DotDate = styled.div`
  font-family: Georama;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #2c2b34;

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

const DotTitle = styled.div`
  font-family: Georama;
  font-size: 21px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #b39b84;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 23px;
  }
`;

const Dot = styled.div`
  background: #ffffff;
  border: 4px solid #b39b84;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin-bottom: 14px;
`;

const OsaWrap = styled.div`
  height: 400px;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 79px;
`;

const OsaLineFill = styled.div`
  height: 4px;
  background: #b39b84;
  position: absolute;
  top: 85px;
  left: 0;
`;

const OsaLine = styled.div`
  width: 100%;
  height: 4px;
  background: #e1e1e8;
  position: absolute;
  top: 85px;
  left: 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fafafa;
  padding: 0 20px;
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const WrapperArchitect = styled.div`
  width: 1180px;
  margin-top: -90px;
  border-top: 3px solid #b29a84;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;

  @media (max-width: 1180px) {
    width: calc(100% - 50px);
  }
`;

const Headline = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  padding-top: 140px;
  text-align: center;

  @media (max-width: 800px) {
    padding-top: 80px;
    font-size: 37px;
  }
`;

const Text = styled.p`
  font-family: Georama;
  font-size: 25px;
  line-height: 51px;
  color: #000000;
  padding-top: 100px;
  text-align: center;
  margin-bottom: 32px;
  width: 800px;

  @media (max-width: 800px) {
    width: 100%;
    padding-top: 50px;
    font-size: 20px;
    line-height: 45px;
  }
`;

const Name = styled.p`
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #0f0f16;
  font-weight: 600;

  @media (max-width: 800px) {
    font-weight: 600;
`;

const ImageOsa = styled.img`
  width: 100%;
  height: 280px;
  margin-top: 50px;
  margin-bottom: 180px;

  @media (max-width: 1180px) {
    height: 100px;
  }
`;

export default ProjectSectionSix;
