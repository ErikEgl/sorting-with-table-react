import React from "react";
import Card from "./Card/Card";
import data from "./data";
import { Row, Container } from "react-bootstrap";

function Cards() {
  const cardItem = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <section className="cards">
        <Container>
          <Row className="">{cardItem}</Row>
        </Container>
      </section>
    </>
  );
}

export default Cards;
