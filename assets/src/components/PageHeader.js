import React from "react";
import Spinner from "react-bootstrap/Spinner";
import {useNavigation} from "react-router-dom";


function PageHeader({title}) {
  const {state} = useNavigation();
  return (
    <div className={"pb-2"}>
      <span className={"h4"}>{title}</span> &nbsp;
      {state === "loading" && <Spinner animation="border" variant="secondary" size={"sm"}/>}
    </div>
  )
}


export default PageHeader
