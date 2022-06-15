import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import PhotoItem from "./PhotoItem";

const PhotoList = observer(() => {
  const { photo } = useContext(Context);
  return (
    <div className="d-flex flex-wrap mt-3 ">
      {photo.photo.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
});

export default PhotoList;
