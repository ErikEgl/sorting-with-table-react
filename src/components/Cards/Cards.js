import React from "react";
import Card from "./Card/Card";
import data from "./data";
import { Row, Container, Button } from "react-bootstrap";

function Cards() {
  const cardItem = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <section className="cards">
        <Container>
          <div className="">{cardItem}</div>
        <Button>Добавь неделю</Button>
        </Container>
      </section>
    </>
  );
}

export default Cards;
