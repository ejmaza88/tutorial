import {Navigate} from "react-router-dom";
import React from "react";

function Home() {
  return <><Navigate to="/dashboard" replace={true} /></>
}


export default Home