import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  height: 670px;
  background: ${(p) => `url("/images/${p.cover}.png")`};
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  padding-top: 180px;
  height: 100%;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 112px;
`;

const RightCol = styled.div`
  width: 500px;
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

const MainText = styled.h1`
  font-family: Georama;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 478px;
`;

const Location = styled.img`
  width: 40px;
  height: 48px;
  margin-right: 20px;
`;

const LocationRow = styled.div`
  display: flex;
`;

const LocationCol = styled.div``;

const LocationTextOne = styled.p`
  font-family: Georama;
  font-size: 21px;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 6px;
`;

const LocationTextTwo = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #b29a84;
`;
const ButtonWrap = styled.div`
  width: 150px;
`;

const ProjectSectionOne = ({ data }) => {
  return (
    <Container cover={data.cover}>
      <Wrapper>
        <LeftCol>
          <ButtonWrap>
            <Button height={40} leftBorder={true}>
              {data.status}
            </Button>
          </ButtonWrap>
          <MainText>{data.title}</MainText>
          <LocationRow>
            <Location src="/images/locationIcon.svg" />
            <LocationCol>
              <LocationTextOne>{data.locationOne}</LocationTextOne>
              <LocationTextTwo>{data.locationTwo}</LocationTextTwo>
            </LocationCol>
          </LocationRow>
        </LeftCol>
        <RightCol>{data.desc}</RightCol>
      </Wrapper>
    </Container>
  );
};

export default ProjectSectionOne;