import React, { useState } from "react";
import Cards from "../Cards/Cards";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
function WeeksGenerator() {

  const [cardList, setCardList] = useState([]);
  const [count, setCount] = useState(0);
  const handleChange = event => {
    setCount(count + 1);
    setCardList(cardList.concat(<Cards key={count} weeksCounter={count} />));
  };

  return (
    <>
      <Button key={count} onClick={handleChange} >Добавь неделю</Button>
      {cardList}
    </>
  );
}

export default WeeksGenerator;
