import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { buildImageUrl } from "cloudinary-build-url";

const Container = styled.div`
  width: 100%;
  height: 670px;
  background: ${`url(${buildImageUrl(
    "v1645823021/vilaRepublikaCover_hykftv.png",
    {}
  )})`};
  background-size: cover;
  display: flex;
  justify-content: center;

  @media (max-width: 1180px) {
    height: auto;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  padding-top: 180px;
  height: 100%;

  @media (max-width: 1180px) {
    width: 100%;
    flex-direction: column;
    padding: 0 20px;
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 112px;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const RightColText = styled.div`
  width: 500px;
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;

  @media (max-width: 1180px) {
    margin-top: 30px;
    width: 100%;
    font-size: 17px;
  }
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

  @media (max-width: 1180px) {
    font-size: 36px;
    line-height: 44px;
    width: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
  }
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
        <RightColText>{data.desc}</RightColText>
      </Wrapper>
    </Container>
  );
};

export default ProjectSectionOne;
