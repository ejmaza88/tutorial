import React from "react";
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Loading = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className={"text-center m-4"}>
            <Button variant={"primary"} disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> &nbsp;
              Loading...
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Loading
