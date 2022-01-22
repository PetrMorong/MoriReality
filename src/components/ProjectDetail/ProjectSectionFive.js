import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
  margin-top: 150px;

  @media (max-width: 1180px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1180px) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 324px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 30px 25px;
  }
`;

const MainText = styled.div`
  margin: 32px 0;
  font-family: Georama;
  font-size: 27px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #000000;

  @media (max-width: 800px) {
    margin: 10px 0;
    font-size: 22px;
    line-height: 30px;
  }

  span {
    font-family: Georama;
    font-size: 27px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #b29a84;

    @media (max-width: 800px) {
      font-size: 22px;
      line-height: 30px;
    }
  }
`;

const SubText = styled.div`
  font-family: Georama;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #000000;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const ProjectSectionFive = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Col>
          <img src="/images/tickIcon.svg" />
          <MainText>
            <span>{data.ticksSection[0].highlighted}</span>
            <br />
            {data.ticksSection[0].normal}
          </MainText>
          <SubText>{data.ticksSection[0].desc}</SubText>
        </Col>
        <Col>
          <img src="/images/tickIcon.svg" />
          <MainText>
            {data.ticksSection[1].normal}
            <br />
            <span>{data.ticksSection[1].highlighted}</span>
          </MainText>
          <SubText>{data.ticksSection[1].desc}</SubText>
        </Col>
        <Col>
          <img src="/images/tickIcon.svg" />
          <MainText>
            {data.ticksSection[2].normal} <br />
            <span>{data.ticksSection[2].highlighted}</span>
          </MainText>
          <SubText>{data.ticksSection[2].desc}</SubText>
        </Col>
      </Wrapper>
    </Container>
  );
};

export default ProjectSectionFive;
