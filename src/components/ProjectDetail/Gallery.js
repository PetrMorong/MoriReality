import * as React from "react";
import styled from "styled-components";
import { buildImageUrl } from "cloudinary-build-url";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
  margin-top: 200px;

  @media (max-width: 1180px) {
    margin-top: 120px;
    margin-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  width: 1180px;
  background: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 1180px) {
    width: 100%;
  }
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 130px;

  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
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

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 41px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    gap: 0;
  }
`;

const Col = styled.a`
  width: 100%;
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;

  @media (max-width: 1180px) {
    margin-bottom: 40px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 390px;
  height: 250px;
  object-fit: cover;

  @media (max-width: 1180px) {
    width: 100%;
    height: 220px;
  }
`;

const OtherProjects = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const images = [];
  data.otherProjects.map((item, index) => {
    images.push({

      src: buildImageUrl(item.image, {
        transformations: {
          resize: {
            width: 800,
            height: 500,
          },
        },
      }),
      alt: `image ${index}`,
      // width: 3840,
      // height: 2560,
      width: 800,
      height: 500,
      // srcSet: [
      //   { src: "/image1x320.jpg", width: 320, height: 213 },
      //   { src: "/image1x640.jpg", width: 640, height: 427 },
      //   { src: "/image1x1200.jpg", width: 1200, height: 800 },
      //   { src: "/image1x2048.jpg", width: 2048, height: 1365 },
      //   { src: "/image1x3840.jpg", width: 3840, height: 2560 },
      // ],
    });
  });

  return (
    <Container>
      <Wrapper>
        <HeadlineRow>
          <Line></Line>
          <Headline>Galerie</Headline>
          <Line></Line>
        </HeadlineRow>
        <Row>
          {data.otherProjects.map((item, index) => (
            <Col href='#'>
              <Image
                src={buildImageUrl(item.image, {
                  transformations: {
                    resize: {
                      width: 800,
                      height: 500,
                    },
                  },
                })}
                onClick={() => {
                  setOpen(true);
                  setLightboxIndex(index);
                }}
              ></Image>
            </Col>
          ))}
        </Row>
        <Lightbox
          open={open}
          index={lightboxIndex}
          close={() => setOpen(false)}
          slides={images}
        />
      </Wrapper>
    </Container>
  );
};

export default OtherProjects;
