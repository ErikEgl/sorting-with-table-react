import CheckboxCard from "./CheckboxCard/CheckboxCard";
import data from "../../data/data";

function CheckboxCards(props) {
  const cardItem = data.map((item) => {
    return <CheckboxCard iCounter={props.iCounter} weeksCounter={props.weeksCounter} mondayCounter={props.mondayCounter} monthCounter={props.monthCounter} key={item.id} {...item} />;
  });
  return (
    <>
      <td className="mw-140">
        <small className="date-title">Нед. <time>{props.weeksCounter}</time> от <time>{props.mondayCounter} {props.monthCounter}</time></small >
          {cardItem}
        </td>
    </>
  );
}

export default CheckboxCards;
