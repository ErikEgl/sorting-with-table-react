import React, { useState } from "react";
import CheckboxCards from "../Cards";
import InfoCards from "../InfoCards";
import { Button, Row, Container, Table } from "react-bootstrap";
import { getWeekNumber, getAllMondaysOfAYear } from "../../helpers";

let i = 0;

function WeeksGenerator() {
  const [cardList, setCardList] = useState([]);
  const [counter, setCounter] = useState(getWeekNumber());
  const [iCounter, setICounter] = useState(i);
  const months = getAllMondaysOfAYear()

  const handleChange = (event) => {
    setCounter(counter + 1);
    setICounter(iCounter + 1);
    setCardList(cardList.concat(
      <CheckboxCards 
        key={counter} weeksCounter={counter} 
        mondayCounter={months[iCounter].date} 
        monthCounter={months[iCounter].month} 
        iCounter={iCounter}
      />
    ));
  };



  return (
    <>
      <section className="cards-wrap">
        <Container fluid>
          <Row className="py-3">
            <Button key={counter} onClick={handleChange}>
              Добавь неделю
            </Button>
          </Row>
          <Row className="">
            <Table className="position-relative " responsive>
              <thead>
                <tr>
                  <th>Недели</th>
                </tr>
              </thead>
              <tbody>
                <tr> 
                  {iCounter ? <InfoCards iCounter={iCounter} key={counter}/> : '' }     
                {cardList}
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WeeksGenerator;
