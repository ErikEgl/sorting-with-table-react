import React from "react";
import data from "../../data/data";
import { Row, Container, Col, Table } from "react-bootstrap";
function ResTableWrap(props) {

  const num = 6;
  return (
    <>
      <section className="info">
        <Container>
          <Row className="">
            <Col>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    {Array.from({ length: `${props.iCounter}` }).map((_, index) => (
                      <th key={index}>Table heading</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    {Array.from({ length: `${props.iCounter}` }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>

                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ResTableWrap;
