import React, {lazy} from "react";
import Loadable from "../../utils/utils";
import API from "../../network/ApiNetwork";
import * as Constants from "../../constants/Constants";


const Diaper = Loadable(lazy(() => import("./Diaper")))


const diaperRoutes = {
  path: Constants.Diaper.path,
  element: <Diaper/>,
  loader: async () => {
    return await API.diaperChoices()
  }
}


export {
  diaperRoutes
}