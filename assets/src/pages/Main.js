import React from 'react'
import LoginRequired from "../components/LoginRequired";
// import {useName} from "../contexts/NameContext";

const Main = () => {
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
