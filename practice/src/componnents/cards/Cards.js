import React, { useState } from "react";
import Data from "./CardData.js";
import CardMenu from "./CardMenu.js";

const Cards = () => {
  const [MenuData, setMenuData] = useState(Data);
  return (
    <>
      <CardMenu MenuData={MenuData} />
    </>
  );
};

export default Cards;
