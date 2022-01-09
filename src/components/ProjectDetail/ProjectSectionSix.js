import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fafafa;
`;

const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
`;

const WrapperArchitect = styled.div`
  width: 1180px;
  margin-top: -90px;
  border-top: 3px solid #b29a84;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

const Headline = styled.h4`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  padding-top: 140px;
  text-align: center;
`;

const Text = styled.p`
  font-family: Georama;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  padding-top: 100px;
  text-align: center;
  margin-bottom: 32px;
  width: 800px;
`;

const Name = styled.p`
  font-family: Georama;
  font-size: 19px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #0f0f16;
`;

const ImageOsa = styled.img`
  width: 100%;
  height: 280px;
  margin-top: 50px;
  margin-bottom: 180px;
`;

const ProjectSectionSix = ({ data }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Headline>Časová osa projektu</Headline>
          <ImageOsa src="images/osa.png" />
        </Wrapper>
      </Container>
      <Container style={{ background: "white" }}>
        <WrapperArchitect>
          <Text>
            “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.“
          </Text>
          <Name>- David Domanický, Architekt</Name>
        </WrapperArchitect>
      </Container>
    </>
  );
};

export default ProjectSectionSix;
