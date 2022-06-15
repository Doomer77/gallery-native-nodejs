import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";

const PhotoPage = () => {
  const photo = {
    id: 5,
    title: "title5",
    description: "description5",
    rating: 0,
    img: "https://mykaleidoscope.ru/uploads/posts/2021-03/1617192399_17-p-derevenskii-dom-17.jpg",
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={400} height={300} src={photo.img} />
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h2>{photo.title}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 100,
                height: 100,
                backgroundSize: "cover",
                fontSize: 20,
              }}
            >
              {photo.rating}
            </div>
          </div>
        </Col>
        <Col md={4}>{photo.description}</Col>
      </Row>
    </Container>
  );
};

export default PhotoPage;
