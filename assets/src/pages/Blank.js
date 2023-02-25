import React from 'react'
import LoginRequired from "../components/LoginRequired";
import useDocumentTitle from "../hooks/useDocumentTitle";


const Blank = () => {
  useDocumentTitle("Blank")

  return (
    <>
      <LoginRequired>
        <h1>Blank</h1>
      </LoginRequired>
    </>
  )
}


export default Blank
