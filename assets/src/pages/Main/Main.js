import React, {useEffect, useState} from 'react'
import LoginRequired from "../../components/LoginRequired";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHeader from "../../components/PageHeader";
import Loading from "../../components/Loading";
import {Outlet, useLoaderData, Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {load, save} from "../../redux/slices/CategorySlice/CategorySlice";
import {useNetwork} from "../../utils/Network";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Main = () => {
  const mainTitle = "Main"
  useDocumentTitle(mainTitle)

  const data = useLoaderData()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(load(data.categories))
  }, [])

  return (
    <>
      <LoginRequired>
        <PageHeader title={mainTitle}/>
        <Container>
          <Row>
            <Outlet/>
          </Row>
        </Container>
      </LoginRequired>
    </>
  )
}


const CategoryForm = () => {
  useDocumentTitle("Main - Add")
  const [loading, setLoading] = useState(false)

  const {categoryAdd} = useNetwork()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddCategory = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = await categoryAdd({name: e.target.category.value})
    dispatch(save(data.category))
    e.target.category.value = ""
    setLoading(false)
    navigate("/main")
  }
  return (
    <>
      <Col lg={6}>
        <div className={"pb-2"}>
          <Link to={"/main"}>
            <Button variant={"light"} size={"sm"}>
              <span className={"bi bi-arrow-left-short"}></span> Go Back
            </Button>
          </Link>
        </div>

        <Card body>
          <Form onSubmit={handleAddCategory}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" size={"sm"} name={"category"}/>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size={"sm"} className={"btn-block"} disabled={loading}>
                <span className={"bi bi-check-lg"}></span> Add
              </Button>
            </div>
          </Form>
        </Card>
        {loading ? <Loading/> : null}
      </Col></>
  )
}


const CategoryDisplay = () => {
  const {categories} = useSelector(state => state.category)

  return (
    <>
      <Col lg={6}>
        <div className={"pb-2"}>
          <Link to={"add"}>
            <Button variant={"light"} size={"sm"}>
              <span className={"bi bi-plus"}></span> Add
            </Button>
          </Link>
        </div>

        <Card body>{categories ? <pre>{JSON.stringify(categories, undefined, 2)}</pre> : null}</Card>
      </Col>
    </>
  )
}


export default Main

export {
  CategoryDisplay,
  CategoryForm
}
