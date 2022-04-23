
import Card from "./Card/Card";
import data from "./data";
import { Container } from "react-bootstrap";


function Cards(props) {
  const cardItem = data.map((item) => {
    return <Card weeksCounter={props.weeksCounter} key={item.id} {...item} />;
  });


  return (
    <>
      <section className="cards">
        <Container>
          <div className="d-flex flex-column gap-1">{cardItem}</div>
        </Container>
      </section>
    </>
  );
}

export default Cards;
