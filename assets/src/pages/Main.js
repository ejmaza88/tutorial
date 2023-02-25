import React from 'react'
import LoginRequired from "../components/LoginRequired";
import useDocumentTitle from "../hooks/useDocumentTitle";
// import {useName} from "../contexts/NameContext";


const Main = () => {
  useDocumentTitle("Main")
  // const [name, setName] = useName()

  return (
    <>
      <LoginRequired>
        <h1>Main</h1>
      </LoginRequired>
    </>
  )
}

export default Main
