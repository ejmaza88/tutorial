import React, {Suspense, lazy} from "react";
import {createBrowserRouter} from "react-router-dom";


const Loadable = (Component) => (props) => (
  <Suspense fallback={<><div>Loading</div></>}>
    <Component {...props} />
  </Suspense>
);

// Pages
const AppLayout = Loadable(lazy(() => import("../components/Layout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));
const Main = Loadable(lazy(() => import("../pages/Main")));
const Blank = Loadable(lazy(() => import("../pages/Blank")));


const routes = createBrowserRouter([
  {
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
        element: <Main name={"esvin mazariegos"}/>,
      },
      {
        path: "blank",
        element: <Blank name={"aldez mazariegos"}/>,
      },
    ]
  }
]);

export default routes