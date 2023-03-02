import React, {lazy} from "react";
import Loadable from "../utils/utils";
import Oops from "../components/Oops";
import {DashboardLoader} from "../pages/Dashboard/DashboardLoader";
import {MainLoader} from "../pages/Main/MainLoader";
import * as Constants from "../constants/Constants";



const AppLayout = Loadable(lazy(() => import("../components/Layout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Dashboard")));
const Main = Loadable(lazy(() => import("../pages/Main/Main")));
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
        errorElement: <Oops/>
      },
      {
        path: Constants.Dashboard.path,
        element: <Dashboard/>,
        loader: async () => {
          return await DashboardLoader()
        }
      },
      {
        path: Constants.Main.path,
        element: <Main/>,
        // errorElement: <Loading />,
        loader: async () => {
          return await MainLoader()
        }
      },
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
