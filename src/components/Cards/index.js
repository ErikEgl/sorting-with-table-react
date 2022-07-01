import React from "react";
import CheckboxCard from "./CheckboxCard/CheckboxCard";
import data from "../../data/data";

function CheckboxCards(props) { 
  const cardItem = data.map((item) => {
    return (
      <CheckboxCard
        iCounter={props.iCounter}
        weeksCounter={props.weeksCounter}
        mondayCounter={props.mondayCounter}
        monthCounter={props.monthCounter}
        key={item.id}
        {...item}
      />
    );
  });
  const [chooseTable, setChooseTable] = React.useState(false);
  function handleClick () {
    setChooseTable(prevState => !prevState)
  }
  const styles = {
    outline: chooseTable ? "2px solid green" : "none"
  }
  return (
    <>
      <td onClick={handleClick} style={styles} className="mw-140">
        <small className="date-title">
          Нед. <time>{props.weeksCounter}</time> от{" "}
          <time>
            {props.mondayCounter} {props.monthCounter}
          </time>
        </small>
        {cardItem}
      </td>
    </>
  );
}

export default CheckboxCards;
