import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateKind from "../components/modals/CreateKind";
import CreatePhoto from "../components/modals/CreatePhoto";

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [kindVisible, setKindVisible] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark"
        className="mt-3 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant="outline-dark"
        className="mt-3 p-2"
        onClick={() => setKindVisible(true)}
      >
        Добавить вид
      </Button>
      <Button
        variant="outline-dark"
        className="mt-3 p-2"
        onClick={() => setPhotoVisible(true)}
      >
        Добавить фото
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateKind show={kindVisible} onHide={() => setKindVisible(false)} />
      <CreatePhoto show={photoVisible} onHide={() => setPhotoVisible(false)} />
    </Container>
  );
};

export default Admin;
