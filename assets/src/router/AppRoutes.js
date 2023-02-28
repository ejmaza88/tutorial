import React, {lazy} from "react";
import Loadable from "../utils/utils";
import {DashboardLoader} from "../pages/Dashboard/DashboardLoader";
import {MainLoader} from "../pages/Main/MainLoader";


const AppLayout = Loadable(lazy(() => import("../components/Layout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Dashboard")));
const Main = Loadable(lazy(() => import("../pages/Main/Main")));
const Blank = Loadable(lazy(() => import("../pages/Blank")));


const appRoutes = {
  path: "",
  element: <AppLayout/>,
  children: [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
      loader: async () => {
        return await DashboardLoader()
      }
    },
    {
      path: "main",
      element: <Main/>,
      loader: async () => {
        return await MainLoader()
      }
    },
    {
      path: "blank",
      element: <Blank/>,
      loader: async () => {
        return await MainLoader()
      }
    }
  ]
}


export {
  appRoutes
}
