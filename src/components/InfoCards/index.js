import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import data from "../../data/data";

function InfoCards(props) {
  const infoCardItem = data.map((item) => {
    return (
      <InfoCard
        weeksCounter={props.weeksCounter}
        mondayCounter={props.mondayCounter}
        monthCounter={props.monthCounter}
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <>
    <td className={`w-300 mw-300 ${props.iCounter > 0 && props.iCounter < 12 ? "d-table-cell" : "d-block"}`}>
      <span>Братья</span>
      {infoCardItem}
    </td>
    </>
  );
}

export default InfoCards;
