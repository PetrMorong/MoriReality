import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
`;

const Box = styled.div`
  width: 390px;
  height: 565px;
  background-size: cover;
  margin: 8px;
`;

const BoxOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 55px;
  background: linear-gradient(
    180deg,
    rgba(15, 15, 22, 0) 36.65%,
    rgba(15, 15, 22, 0.9) 92.71%
  );
`;

const Text = styled.div`
  font-family: Georama;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

const Arrow = styled.img`
  margin-bottom: 13px;
`;

const HomeSectionThree = () => {
  return (
    <Container>
      <Wrapper>
        <Box
          style={{
            marginLeft: 0,
            backgroundImage: `url("images/homeThreeImageOne.jpg")`,
            backgroundPosition: "-104px",
          }}
        >
          <BoxOverlay>
            <Arrow src="images/ArrowUp.svg" />
            <Text>Trvalost a kvalita</Text>
          </BoxOverlay>
        </Box>

        <Box
          style={{
            backgroundImage: `url("images/homeThreeImage2.png")`,
          }}
        >
          <BoxOverlay>
            <Arrow src="images/ArrowUp.svg" />
            <Text>Nejvyšší standard</Text>
          </BoxOverlay>
        </Box>

        <Box
          style={{
            marginRight: 0,
            backgroundImage: `url("images/homeThreeImageThree.jpg")`,
            backgroundPosition: "-234px",
          }}
        >
          <BoxOverlay>
            <Arrow src="images/ArrowUp.svg" />
            <Text>Poctivé řemeslo</Text>
          </BoxOverlay>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default HomeSectionThree;
