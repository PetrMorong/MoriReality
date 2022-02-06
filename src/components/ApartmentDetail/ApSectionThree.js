import React from "react";
import styled from "styled-components";
import Button from "../Button";

const ApSectionThree = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <HeadlineRow>
          <Line></Line>
          <Headline>Specifikace</Headline>
          <Line></Line>
        </HeadlineRow>
        <Row>
          <Col1>
            <NameProject>{data.projectName}</NameProject>
            <ApName>{data.apName}</ApName>

            {data.table.map((item, i) => {
              const isGray = i % 2 == 0;
              return (
                <TableRow
                  style={{ backgroundColor: isGray ? "#FAFAFA" : "white" }}
                >
                  <TableText>{item.label}</TableText>
                  <TableText>{item.value}</TableText>
                </TableRow>
              );
            })}

            <PriceRow>
              <div>
                <PriceLabel>Cena</PriceLabel>
                <PriceValue>{data.price} Kč</PriceValue>
              </div>
              <Button leftBorder={true}>Mám zájem</Button>
            </PriceRow>
          </Col1>
          <Col2>
            <img src={data.layoutImage} style={{ height: "100%" }} />
          </Col2>
        </Row>
      </Wrapper>
    </Container>
  );
};

const PriceValue = styled.p`
  font-family: Georama;
  font-weight: 500;
  font-size: 27px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #b29a84;

  @media (max-width: 800px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const PriceLabel = styled.p`
  font-family: Georama;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0.01em;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ApName = styled.p`
  font-family: Georama;
  font-size: 42px;
  line-height: 50px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 60px;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const TableText = styled.p`
  font-family: Georama;
  font-size: 17px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
`;

const TableRow = styled.p`
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
`;

const NameProject = styled.p`
  font-family: Georama;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #b29a84;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 130px;
  margin-bottom: 130px;

  @media (max-width: 800px) {
    margin-bottom: 90px;
    margin-top: -70px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 0 20px;
    margin-bottom: 80px;
  }
`;

const Col1 = styled.div`
  width: 435px;
  margin-right: 150px;

  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0px;
  }
`;

const Col2 = styled.div`
  height: 660px;

  @media (max-width: 800px) {
    width: 100%;
    height: 87vw;
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }
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

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 41px;
  }
`;

export default ApSectionThree;
