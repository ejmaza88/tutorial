import React from 'react'
import {useLoaderData} from "react-router-dom";
import LoginRequired from "../../components/LoginRequired";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHeader from "../../components/PageHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";



const Dashboard = () => {
  const dashboard = "Dashboard"
  useDocumentTitle(dashboard)
  const users = useLoaderData()

  return (
    <>
      <LoginRequired>
        <PageHeader title={dashboard}/>
        <Container>
          <Row>
            <Col lg={6}>
              <Card body>{users ? <pre>{JSON.stringify(users, undefined, 2)}</pre> : null}</Card>
            </Col>
          </Row>
        </Container>
      </LoginRequired>
    </>
  )
}


export default Dashboard
