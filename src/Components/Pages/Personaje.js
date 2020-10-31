import React from "react";
import useGet from "./../../services/useHTTP";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
const Personaje = ({ match }) => {
  
  const personajeID = match.params.id;
    
  const [personajes, personaje, isFetching, error] = useGet({ url: `/character/${personajeID}` });
  
 
    const {  id, name, status, image, origin, location, species } = personaje;
    console.log(name);
 
  
  
  return (
    <>
      <Container>
        <Row key={id}>
          <Col>
            <Image src={image} /> 
          </Col>
          <Col>
            <h3>
              {name} {status}
            </h3>
                       <p>{species}</p>
                      <p>{origin.name}</p>
                      <p>{location.name}</p> 
          </Col>  
        </Row> 
      </Container>
    </>
  );
};

export default Personaje;
