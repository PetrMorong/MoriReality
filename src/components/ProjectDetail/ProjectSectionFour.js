import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 194px;
`;

const Wrapper = styled.div`
  width: 1180px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 468px;
`;

const Headline = styled.h3`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin-bottom: 30px;
`;

const HeadlineGold = styled.h3`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #b29a84;
  margin-bottom: 30px;
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
`;

const Cover = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  margin-top: 190px;
`;

const CoverWrap = styled.div`
  position: relative;
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
`;

const CoverText = styled.p`
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
  width: 1180px;
  text-align: right;
`;

const ProjectSectionFour = ({ data }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Row>
            <Col>
              <Headline>
                Podrobnější slovní{" "}
                <HeadlineGold>popis daného projektu</HeadlineGold>
              </Headline>
              <Desc>
                Našim cílem je poskytovat kvalitní a spolehlivé stavební služby.
                Při realizaci vašich představ, myšlenek, a snů klademe důraz na
                vstřícnost, důslednost, a jednání vedoucí k jistote.
              </Desc>
            </Col>
            <Image src={data.sectionImageOne} />
          </Row>
          <div style={{ height: 100 }} />
          <Row style={{ flexDirection: "row-reverse" }}>
            <Col>
              <Headline>
                Podrobnější slovní{" "}
                <HeadlineGold>popis daného projektu</HeadlineGold>
              </Headline>
              <Desc>
                Našim cílem je poskytovat kvalitní a spolehlivé stavební služby.
                Při realizaci vašich představ, myšlenek, a snů klademe důraz na
                vstřícnost, důslednost, a jednání vedoucí k jistote.
              </Desc>
            </Col>
            <Image src={data.sectionImageTwo} />
          </Row>
        </Wrapper>
      </Container>
      <CoverWrap>
        <Cover src={data.sectionCover} />
        <CoverOverlay>
          <CoverText>Apartmán 4, interiér</CoverText>
        </CoverOverlay>
      </CoverWrap>
    </>
  );
};

export default ProjectSectionFour;
