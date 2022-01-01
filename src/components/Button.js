import * as React from "react";
import styled from "styled-components";

const Container = styled.button`
  height: ${(p) => `${p.height}px` || "49px"};
  padding: 16px 28px;
  background: #b29a84;
  border-radius: 25px 25px 0px 25px;
  border: none;
  font-family: Georama;
  font-size: 16px;
  line-height: 17px;
  letter-spacing: 0.03em;
  color: #ffffff;
  cursor: pointer;
`;

const Button = ({ children, onClick, height }) => {
  return (
    <Container height={height} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;