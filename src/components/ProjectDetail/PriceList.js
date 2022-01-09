import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
`;

const Headline = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  text-align: center;
  margin-bottom: 95px;
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
  width: 144px;
`;

const TablePriceButton = styled.p`
  font-weight: bold;
  color: #a18973;
  cursor: pointer;
`;

const TableCellPrice = styled(TableCell)`
  min-width: 320px;
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
                    {mouseOverRow === index ? (
                      <TablePriceButton>Zobrazit detail</TablePriceButton>
                    ) : (
                      <>{item.reserved ? "Rezervováno" : item.price}</>
                    )}
                  </TableCellPrice>
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
