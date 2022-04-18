import React from "react";
import { Row, Container, Col } from "react-bootstrap";
function Info() {
  return (
    <>
      <section className="info">
        <Container>
          <Row className="">
            <Col>
              <h1>Инструмент для поиска помощьников на собрании</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Info;
