import React from 'react'
import dayjs from "dayjs";
import {useLoaderData} from "react-router-dom";
import LoginRequired from "../../components/LoginRequired";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHeader from "../../components/PageHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import * as Constants from "../../constants/Constants"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Diaper = () => {
  const title = Constants.Diaper.label
  useDocumentTitle(title)


  return (
    <>
      <LoginRequired>
        <PageHeader title={title}/>
        <AddDiaperForm/>
      </LoginRequired>
    </>
  )
}


const AddDiaperForm = () => {
  const diaperChoices = useLoaderData()
  const default_timestamp = dayjs().unix()

  const handleSummit = (e) => {
    e.preventDefault()

    console.log(e.target.diaper_choice.value)
    console.log(e.target.diaper_notes.value)
    console.log(dayjs.unix(default_timestamp).format("hh:mm A"))
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <Form onSubmit={handleSummit}>
              <Card>
                <Card.Header>
                  <Col className={"float-end"}>
                    <Button type={"submit"} variant={"light"} size={"sm"}>
                      save
                      <i className="bi bi-check-lg"/>
                    </Button>
                  </Col>
                </Card.Header>

                <Card.Body>
                  <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <div className={"text-center"}>{dayjs.unix(default_timestamp).format("hh:mm A") }</div>
                  </Form.Group>

                  <hr />
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    {diaperChoices?.map((item, index) => (
                      <Form.Check
                        id={`diaper-choice-${item.value}`}
                        name={"diaper_choice"}
                        key={index}
                        type={"radio"}
                        label={item.label}
                        value={item.value}
                        defaultChecked={index === 0}
                      />
                    ))}
                  </Form.Group>

                  <hr />
                  <Form.Group>
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows={3} name={"diaper_notes"}/>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  )
}


export default Diaper
