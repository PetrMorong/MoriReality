import * as React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 1180px;
  height: 90px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;

const Logo = styled.img`
  width: 170px;
  height: 37px;
  margin-right: 42px;
  cursor: pointer;
`;

const Link = styled.span`
  font-family: Georama;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  color: #ffffff;
  margin-right: 42px;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <a href="/">
          <Logo src="/images/logo.svg" />
        </a>
        <a href="/">
          <Link>O nás</Link>
        </a>
        <a href="/">
          <Link>Projekty</Link>
        </a>

        <a href="/">
          <Link>Kontakt</Link>
        </a>
        <div style={{ flex: 1 }} />
        <Link>+420 737 211 314</Link>
        <Button>Kontaktovat</Button>
      </Wrapper>
    </Container>
  );
};

export default Header;
