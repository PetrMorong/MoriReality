import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1180px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 280px;
`;

const Col = styled.div``;

const TextMain = styled.p`
  font-family: Georama;
  font-weight: 600;
  font-size: 42px;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: #000000;
`;

const TextMainHighlited = styled.span`
  font-family: Georama;
  font-weight: 600;
  font-size: 42px;
  line-height: 48px;
  letter-spacing: 0.01em;
  color: #b29a84;
`;

const Desc = styled.p`
  font-family: Georama;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #4d4d56;
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  margin-bottom: 115px;
`;

const Line = styled.div`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 1px;
`;

const Headline = styled.div`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin: 0 56px;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  filter: drop-shadow(0px 0px 196px rgba(128, 128, 148, 0.1));
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  height: 246px;
  border-top: 2px solid #b29a84;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 95px;
  height: 95px;
  margin-bottom: 16px;
`;

const IcontText = styled.p`
  font-family: Georama;
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;

const ProjectSectionThree = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col>
            <TextMain>
              {data.stats[0].value}{" "}
              <TextMainHighlited>{data.stats[0].highlighted}</TextMainHighlited>
            </TextMain>
            <Desc>{data.stats[0].desc}</Desc>
          </Col>
          <Col>
            <TextMain>{data.stats[1].value}</TextMain>
            <Desc>{data.stats[1].desc}</Desc>
          </Col>
          <Col>
            <TextMain>
              {data.stats[2].value}{" "}
              <TextMainHighlited>{data.stats[2].highlighted}</TextMainHighlited>
            </TextMain>
            <Desc>{data.stats[2].desc}</Desc>
          </Col>
          <Col>
            <TextMain>
              {data.stats[3].value}{" "}
              <TextMainHighlited>{data.stats[3].highlighted}</TextMainHighlited>
            </TextMain>
            <Desc>{data.stats[3].desc}</Desc>
          </Col>
        </Row>

        <HeadlineRow>
          <Line></Line>
          <Headline>Vybavení</Headline>
          <Line></Line>
        </HeadlineRow>

        <CardRow>
          <Card>
            <Icon src={`/images/${data.features[0].icon}.svg`} />
            <IcontText>{data.features[0].desc}</IcontText>
          </Card>
          <Card>
            <Icon src={`/images/${data.features[1].icon}.svg`} />
            <IcontText>{data.features[1].desc}</IcontText>
          </Card>
          <Card>
            <Icon src={`/images/${data.features[2].icon}.svg`} />
            <IcontText>{data.features[2].desc}</IcontText>
          </Card>
          <Card>
            <Icon src={`/images/${data.features[3].icon}.svg`} />
            <IcontText>{data.features[3].desc}</IcontText>
          </Card>
        </CardRow>
        <div style={{ height: 16 }} />
        <CardRow>
          <Card>
            <Icon src={`/images/${data.features[4].icon}.svg`} />
            <IcontText>{data.features[4].desc}</IcontText>
          </Card>
          <Card>
            <Icon src={`/images/${data.features[5].icon}.svg`} />
            <IcontText>{data.features[5].desc}</IcontText>
          </Card>
          <Card>
            <Icon src={`/images/${data.features[6].icon}.svg`} />
            <IcontText>{data.features[6].desc}</IcontText>
          </Card>
          <Card>
            <Icon src={`/images/${data.features[7].icon}.svg`} />
            <IcontText>{data.features[7].desc}</IcontText>
          </Card>
        </CardRow>
      </Wrapper>
    </Container>
  );
};

export default ProjectSectionThree;
