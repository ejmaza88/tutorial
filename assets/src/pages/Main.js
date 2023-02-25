import React from 'react'
import {useName} from "../contexts/NameContext";

const Main = (props) => {
  // const [name, setName] = useName()

  return (
    <>
      <h1>Main</h1>
      {props?.name}
      <br />
    </>
  )
}

export default Main
