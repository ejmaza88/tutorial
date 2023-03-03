import React, {lazy} from "react";
import Loadable from "../utils/utils";
import Oops from "../components/Oops";
import {MainLoader} from "../pages/Main/MainLoader";
import {dashboardRoutes} from "../pages/Dashboard/DashboardRoutes";
import {mainRoutes} from "../pages/Main/MainRoutes";
import * as Constants from "../constants/Constants";



const AppLayout = Loadable(lazy(() => import("../components/Layout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Blank = Loadable(lazy(() => import("../pages/Blank")));


const appRoutes = {
  path: "",
  element: <AppLayout/>,
  children: [{
    errorElement: <Oops/>,
    children: [
      {
        path: Constants.Root.path,
        element: <Home/>,
      },
      {...dashboardRoutes},
      {...mainRoutes},
      {
        path: Constants.Blank.path,
        element: <Blank/>,
        loader: async () => {
          return await MainLoader()
        }
      }
    ]
  }]
}


export {
  appRoutes
}
