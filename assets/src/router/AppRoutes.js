import React, {lazy} from "react";
import Loadable from "../utils/utils";
import Oops from "../components/Oops";
import {diaperRoutes} from "../pages/Diaper/DiaperRoutes";
import {mainRoutes} from "../pages/Main/MainRoutes";
import * as Constants from "../constants/Constants";



const AppLayout = Loadable(lazy(() => import("../components/Layout")));
const Home = Loadable(lazy(() => import("../pages/Home/Home")));


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

      // Other routes
      {...diaperRoutes},
      {...mainRoutes},
    ]
  }]
}


export {
  appRoutes
}
