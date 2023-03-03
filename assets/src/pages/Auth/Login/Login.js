import React, {useState} from 'react';
import {useAuth} from "../../../contexts/AuthContext";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";

import Logo from "../../../assets/img/logo.png"
import './Login.css'


const Login = () => {
  const [error, setError] = useState()
  const {handleLogin} = useAuth()

  const handleSubmit = async (e) => handleLogin(e, setError)


  return (
    <>
      <Container className={"pt-5"}>
        <Row className="justify-content-md-center">
          <Col xs lg={4} className={"text-center"}>
            <Image src={Logo}/>
            <h3 className={"pt-4 pb-3"}>Sign in to Aldezo</h3>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col className={"text-center"}>
            <div className="text-danger pb-3">{error ? error : null}</div>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg={4}>
            <Card body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" size={"sm"} name={"username"} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" size={"sm"} name={"password"} required />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size={"sm"} className={"btn-block"} >
                    Sign In
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
