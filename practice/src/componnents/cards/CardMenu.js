import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const CardMenu = ({ MenuData }) => {
  return (
    <>
      <Container>
        <Row>
          {MenuData.map((item) => {
            const {id,icon, title, description} = item;
            return (
              <>
                <Col lg={3}>
                  <Card key={id}>
                    <img src={icon} alt="" className="card-img-top" />
                    <Card.Body>
                      <h1>{id}</h1>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardMenu;
