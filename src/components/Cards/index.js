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
  const [deleteTable, setDeleteTable] = React.useState(false);
  function handleClick () {
    setChooseTable(prevState => !prevState)
  }
  function handleDelete () {
    setDeleteTable(prevState => !prevState)
  }
  const styles = {
    outline: chooseTable ? "2px solid green" : "none",
    display: deleteTable ? "none" : ""
  }
  return (
    <>
      <td onClick={handleClick} style={styles} className="mw-140">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <small title={`Неделя ${props.weeksCounter} от ${props.mondayCounter} ${props.monthCounter}`} className="date-title">
            Нед. <time>{props.weeksCounter}</time> от{" "}
            <time>
              {props.mondayCounter} {props.monthCounter}
            </time>
          </small>
          <button onClick={handleDelete}>&#10006;</button>
        </div>
        {cardItem}
      </td>
    </>
  );
}

export default CheckboxCards;
