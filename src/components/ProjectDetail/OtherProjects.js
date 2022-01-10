import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
  margin-top: 200px;
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  flex-direction: column;
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 130px;
`;

const Line = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 1px;
`;

const Headline = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin: 0 56px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
`;

const Col = styled.a`
  width: 390px;
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 390px;
  height: 250px;
  object-fit: cover;
`;

const Title = styled.p`
  font-family: Georama;
  font-size: 27px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 80%;
`;

const Location = styled.p`
  font-family: Georama;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0.01em;
  color: #b29a84;
`;

const OtherProjects = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <HeadlineRow>
          <Line></Line>
          <Headline>Naše další projekty</Headline>
          <Line></Line>
        </HeadlineRow>
        <Row>
          {data.otherProjects.map((item) => (
            <Col href={item.link}>
              <Image src={item.image}></Image>
              <Title>{item.name}</Title>
              <Location>{item.location}</Location>
            </Col>
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default OtherProjects;
