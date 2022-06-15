import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Card from "react-bootstrap/Card";

const KindBar = observer(() => {
  const { photo } = useContext(Context);

  return (
    <div className="d-flex">
      {photo.kinds.map((kind) => (
        <Card
          style={{ cursor: "pointer" }}
          onClick={() => photo.setSelectedKind(kind)}
          className="p-3 ms-2"
          key={kind.id}
          border={kind.id === photo.selectedKind.id ? "danger" : "primary"}
        >
          {kind.name}
        </Card>
      ))}
    </div>
  );
});

export default KindBar;
