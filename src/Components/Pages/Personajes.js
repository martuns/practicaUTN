import React from "react";
import { Link } from "react-router-dom";
import useGet from "./../../services/useHTTP";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
const Personajes = () => {
  const [personajes, isFetching, error] = useGet({ url: "/character" });

  return (
    <>
      <Container>
        <Row>
          {personajes.map(({ id, name, status, species, image, origin, location }) => (
            <Col md="4" lg="4" xs="12" key={id}>
              <Card>
                <Card.Img variant="top" src={image}></Card.Img>
                <Card.Body>
                  <Card.Title>
                    {name} {status}
                  </Card.Title>
                          <Card.Text> Specie: {species}  </Card.Text>
                          <Card.Text> Origin: {origin.name}  </Card.Text>
                          <Card.Text> Location: {location.name}  </Card.Text>
                          <Link to={`/personajes/${id}`}>
                              <Button variant="primary" block>
                    Ver más
                  </Button></Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Personajes;
