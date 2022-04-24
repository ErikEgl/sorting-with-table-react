import Card from "./Card/Card";
import data from "./data";

function Cards(props) {
  const cardItem = data.map((item) => {
    return <Card weeksCounter={props.weeksCounter} mondayCounter={props.mondayCounter} monthCounter={props.monthCounter} key={item.id} {...item} />;
  });
  return (
    <>
      
      <td>
        <span>Неделя <time>{props.weeksCounter}</time> от <time>{props.mondayCounter} {props.monthCounter}</time></span>
          {cardItem}
        </td>
    </>
  );
}

export default Cards;
