import React from 'react'
import LoginRequired from "../../components/LoginRequired";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import {useLoaderData} from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";


const Main = () => {
  const mainTitle = "Main"
  useDocumentTitle(mainTitle)
  const data = useLoaderData()

  return (
    <>
      <LoginRequired>
        <PageHeader title={mainTitle}/>
        <Container>
          <Row>
            <Col lg={6}>
              <Card body>{data ? <pre>{JSON.stringify(data, undefined, 2)}</pre> : null}</Card>
            </Col>
          </Row>
        </Container>
      </LoginRequired>
    </>
  )
}

export default Main
