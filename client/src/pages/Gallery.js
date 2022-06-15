import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import KindBar from "../components/KindBar";
import PhotoList from "../components/PhotoList";

const Gallery = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <KindBar />
          <PhotoList />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
