import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  @media (max-width: 800px) {
    overflow: scroll;
    display: block;
    position: relative;
    margin-top: 20px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 1020px;
    padding-top: 80px;
  }
`;

const Headline = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  text-align: center;
  margin-bottom: 95px;

  @media (max-width: 800px) {
    position: absolute;
    top: 0px;
    text-align: center;
    width: 100vw;
    z-index: 99;
    font-size: 37px;
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableHead = styled.div`
  display: flex;
  border-bottom: 3px solid #b29a84;
`;

const TableRow = styled.div`
  display: flex;
  cursor: pointer;
  opacity: ${(p) => (p.reserved ? 0.5 : 1)};

  &:hover {
    background: #fafafa;
  }
`;

const TableCell = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Georama;
  font-size: 19px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
  width: 134px;
`;

const TablePriceButton = styled.a`
  font-weight: bold;
  color: #a18973;
  cursor: pointer;
  text-decoration: none;
`;

const TableCellPrice = styled(TableCell)`
  min-width: 300px;
  font-weight: bold;
`;

const PriceList = ({ data }) => {
  const [mouseOverRow, setMouseOverRow] = React.useState(undefined);

  const handleGoToDetail = () => {};

  return (
    <>
      <Container>
        <Wrapper>
          <Headline>Ceník</Headline>
          <Table>
            <TableHead>
              <TableCell>Číslo</TableCell>
              <TableCell>Podlaží</TableCell>
              <TableCell>Dispozice</TableCell>
              <TableCell>Plocha</TableCell>
              <TableCell>Terasa</TableCell>
              <TableCell>Parkování</TableCell>
              <TableCellPrice>Cena</TableCellPrice>
              <TableCell></TableCell>
            </TableHead>
            {data.apartments.map((item, index) => {
              return (
                <TableRow
                  onClick={handleGoToDetail}
                  onMouseEnter={() => setMouseOverRow(index)}
                  onMouseLeave={() => setMouseOverRow(undefined)}
                  reserved={item.reserved}
                >
                  <TableCell>{item.number}</TableCell>
                  <TableCell>{item.floor}</TableCell>
                  <TableCell>{item.layout}</TableCell>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.terasa}</TableCell>
                  <TableCell>{item.parking}</TableCell>
                  <TableCellPrice>
                    {item.reserved ? "Rezervováno" : item.price}
                  </TableCellPrice>
                  <TableCell>
                    <TablePriceButton href={item.link}>
                      Více info
                    </TablePriceButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </Table>
        </Wrapper>
      </Container>
    </>
  );
};

export default PriceList;
