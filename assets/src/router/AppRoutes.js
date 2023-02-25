import React, {lazy} from "react";
import Loadable from "../utils/utils";


const AppLayout = Loadable(lazy(() => import("../components/Layout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));
const Main = Loadable(lazy(() => import("../pages/Main")));
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
    },
    {
      path: "main",
      element: <Main/>,
    },
    {
      path: "blank",
      element: <Blank/>,
    }
  ]
}


export {
  appRoutes
}
