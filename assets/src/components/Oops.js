import React from "react";
import LoginRequired from "./LoginRequired";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Oops = () => {
  return (
    <>
      <LoginRequired>
        <Container fluid>
          <Row>
            <Col className={"text-center m-4"}>
              <h3>Opps something went wrong</h3>
            </Col>
          </Row>
        </Container>
      </LoginRequired>
    </>
  )
}

export default Oops
