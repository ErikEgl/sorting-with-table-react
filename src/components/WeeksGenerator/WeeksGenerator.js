import React, { useState } from "react";
import Cards from "../Cards/Cards";
import ReactDOM from "react-dom";
import { Button, Row, Container, Table } from "react-bootstrap";
import { result, mondayAndMonthOfCurrentWeek, allMondaysOfAYear } from "./getDateAndWeekNum";

const month = mondayAndMonthOfCurrentWeek[1]
const monday = mondayAndMonthOfCurrentWeek[0]
let currentWeek = result[1]

function WeeksGenerator() {
  const [cardList, setCardList] = useState([]);
  const [counter, setCounter] = useState(currentWeek);
  const [mondayCounter, setMondayCounter] = useState(monday);
  const handleChange = (event) => {
    setCounter(counter + 1);
    setMondayCounter(mondayCounter + 7);
    setCardList(cardList.concat(<Cards key={counter} weeksCounter={counter} mondayCounter={mondayCounter} monthCounter={month} />));
  };





  return (
    <>
      <section className="cards-wrap">
        <Container>
          <Row className="">
            <Button key={counter} onClick={handleChange}>
              Добавь неделю
            </Button>
          </Row>
          <Row className="">
            <Table className="position-relative" responsive>
              <thead>
                <tr>
                  <th>Недели</th>
                </tr>
              </thead>
              <tbody>
                <tr>{cardList}</tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WeeksGenerator;
