import React, {Suspense, lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import login from "../pages/Auth/Login/Login";


const Loadable = (Component) => (props) => (
  <Suspense fallback={<><div>Loading</div></>}>
    <Component {...props} />
  </Suspense>
);

// Pages
const AuthLayout = Loadable(lazy(() => import("../components/AuthLayout")));
const Login = Loadable(lazy(() => import("../pages/Auth/Login/Login")));

const AppLayout = Loadable(lazy(() => import("../components/Layout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard")));
const Main = Loadable(lazy(() => import("../pages/Main")));
const Blank = Loadable(lazy(() => import("../pages/Blank")));
const SignOut = Loadable(lazy(() => import("../pages/NavBar/SignOut/SignOut")));


const routes = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      }
    ]
  },
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
        element: <Main name={"esvin mazariegos"} />,
      },
      {
        path: "blank",
        element: <Blank name={"aldez mazariegos"} />,
      },
      {
        path: "sign/out",
        element: <SignOut />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  }
]);

export default routes