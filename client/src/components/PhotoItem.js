import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { PHOTO_ITEM_ROUTE } from "../utils/consts";

const PhotoItem = ({ photo }) => {
  const history = useHistory();
  return (
    <Col md={3} onClick={() => history.push(PHOTO_ITEM_ROUTE + "/" + photo.id)}>
      <Card style={{ cursor: "pointer", marginBottom: 10, marginLeft: 10 }}>
        <Image src={photo.img} width={"100%"} height={150} />
        <div className="d-flex justify-content-between align-items-center p-1">
          <div>Дом....</div>
          <div className="d-flex align-items-center">
            <Image width={15} height={15} src={star} />
            <div className="ms-1">{photo.rating}</div>
          </div>
        </div>
        <div>{photo.title}</div>
      </Card>
    </Col>
  );
};

export default PhotoItem;
