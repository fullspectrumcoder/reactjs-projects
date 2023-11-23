import React from "react";
import { useLocation } from "react-router-dom";

const AdDetail = () => {
  let location = useLocation();
  let { state } = location;
  console.log(location);
  return (
    <>
      <h1>{state.title}</h1>
      <ul>
        <li>
          <img src={state.files[0].preview} alt="" />
        </li>
        <li>{state.category}</li>
        <li>{state.featured}</li>
        <li>{state.name}</li>
        <li>{state.price}</li>
        <li>{state.priceType}</li>
        <li>{state.timeStamp}</li>
      </ul>
    </>
  );
};

export default AdDetail;
