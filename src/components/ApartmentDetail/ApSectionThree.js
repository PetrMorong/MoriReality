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
                <PriceLabel>Cena včetně DPH</PriceLabel>
                <PriceValue>6 099 600 Kč</PriceValue>
              </div>
              <Button leftBorder={true}>Mám zájem</Button>
            </PriceRow>
          </Col1>
          <Col2>
            <img
              src="/images/malaMorava/A_9-min.jpg"
              style={{ height: "100%" }}
            />
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
`;

const PriceLabel = styled.p`
  font-family: Georama;
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0.01em;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
`;

const ApName = styled.p`
  font-family: Georama;
  font-size: 42px;
  line-height: 50px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 60px;
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
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 130px;
  margin-bottom: 130px;

  @media (max-width: 800px) {
    margin-bottom: 40px;
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
`;

const Col1 = styled.div`
  width: 435px;
  margin-right: 150px;
`;

const Col2 = styled.div`
  height: 660px;
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
