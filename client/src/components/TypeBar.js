import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { photo } = useContext(Context);
  return (
    <ListGroup style={{ cursor: "pointer" }}>
      {photo.types.map((type) => (
        <ListGroup.Item
          active={type.id === photo.selectedType.id}
          key={type.id}
          onClick={() => photo.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
