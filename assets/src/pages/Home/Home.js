import {Navigate} from "react-router-dom";
import React from "react";
import * as Constants from "../../constants/Constants"


function Home() {
  return <><Navigate to={Constants.Diaper.path} replace={true} /></>
}


export default Home
