import React, {lazy} from "react";
import Loadable from "../utils/utils";

const AuthLayout = Loadable(lazy(() => import("../components/AuthLayout")));
const Login = Loadable(lazy(() => import("../pages/Auth/Login/Login")));


const authRoutes = {
    path: "auth",
    element: <AuthLayout/>,
    children: [
      {
        path: "login",
        element: <Login/>
      }
    ]
  }


export {
  authRoutes
}
