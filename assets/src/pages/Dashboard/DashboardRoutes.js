import React, {lazy} from "react";
import Loadable from "../../utils/utils";
import API from "../../network/ApiNetwork";
import * as Constants from "../../constants/Constants";


const Dashboard = Loadable(lazy(() => import("./Dashboard")))


const dashboardRoutes = {
  path: Constants.Dashboard.path,
  element: <Dashboard/>,
  loader: async () => {
    return await API.userList()
  }
}


export {
  dashboardRoutes
}