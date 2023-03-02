import React, {lazy} from "react";
import Loadable from "../../utils/utils";
import {MainLoader} from "./MainLoader";
import {CategoryDisplay, CategoryForm} from "./Main";
import * as Constants from "../../constants/Constants";


const Main = Loadable(lazy(() => import("./Main")));


const mainRoutes = {
  path: Constants.Main.path,
  element: <Main/>,
  loader: async () => {
    return await MainLoader()
  },
  children: [
    {
      path: "",
      element: <CategoryDisplay />
    },
    {
      path: "add",
      element: <CategoryForm />
    }
  ]
}


export {
  mainRoutes
}