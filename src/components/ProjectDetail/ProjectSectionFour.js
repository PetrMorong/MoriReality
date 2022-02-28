import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
import { buildImageUrl } from "cloudinary-build-url";

const Container = styled.div`
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 194px;

  @media (max-width: 1180px) {
    margin-top: 70px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;

  @media (max-width: 1180px) {
    width: 100%;
    padding: 0 25px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;

const RowReverse = styled(Row)`
  flex-direction: row-reverse;

  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 468px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Headline = styled.h3`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    margin-bottom: 10px;
    font-size: 37px;
  }
`;

const HeadlineGold = styled.h3`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #b29a84;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    margin-bottom: 10px;
    font-size: 37px;
  }
`;

const Desc = styled.p`
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #4d4d56;
`;

const Image = styled.img`
  width: 526px;
  height: 559px;
  object-fit: cover;
  object-position: bottom;

  @media (max-width: 1180px) {
    width: 100%;
    height: 350px;
    margin-top: 50px;
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  margin-top: 190px;

  @media (max-width: 1180px) {
    height: 100vw;
  }
`;

const CoverWrap = styled.div`
  position: relative;

  @media (max-width: 1180px) {
    display: none;
  }
`;

const CoverOverlay = styled.div`
  position: absolute;
  height: 80px;
  width: 100%;
  bottom: 0;
  left: 0;
  background: rgba(15, 15, 22, 0.4);
  backdrop-filter: blur(70px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1180px) {
    height: 50px;
  }
`;

const CoverText = styled.p`
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
  width: 1180px;
  text-align: right;

  @media (max-width: 1180px) {
    text-align: center;
  }
`;

const ProjectSectionFour = ({ data }) => {
  const imageUrlOne = buildImageUrl(data.sectionImageOne, {});
  const imageUrlTwo = buildImageUrl(data.sectionImageTwo, {});
  const imageUrlThree = buildImageUrl(data.sectionCover, {});

  return (
    <>
      <Container>
        <Wrapper>
          <Row>
            <Col>
              <Headline>
                {data.sectionFourOneText.title}{" "}
                <HeadlineGold>{data.sectionFourOneText.titleGold}</HeadlineGold>
              </Headline>
              <Desc>{data.sectionFourOneText.desc}</Desc>
            </Col>
            <Image src={imageUrlOne} />
          </Row>
          <div style={{ height: 100 }} />
          <RowReverse>
            <Col>
              <Headline>
                {data.sectionFourTwoText.title}{" "}
                <HeadlineGold>{data.sectionFourTwoText.titleGold}</HeadlineGold>
              </Headline>
              <Desc>{data.sectionFourTwoText.desc}</Desc>
            </Col>
            <Image src={imageUrlTwo} />
          </RowReverse>
        </Wrapper>
      </Container>
      <CoverWrap>
        <Cover src={imageUrlThree} />
        <CoverOverlay>
          <CoverText>Apartmán 1, interiér</CoverText>
        </CoverOverlay>
      </CoverWrap>
    </>
  );
};

export default ProjectSectionFour;
