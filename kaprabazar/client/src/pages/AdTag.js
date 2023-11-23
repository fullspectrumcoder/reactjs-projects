import React from "react";
import { useParams } from "react-router-dom";

const AdTag = () => {
  let params = useParams();
  let { name } = params;
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default AdTag;
