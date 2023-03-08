import {createBrowserRouter} from "react-router-dom";
import {authRoutes} from "./AuthRoutes";
import {appRoutes} from "./AppRoutes";


const routes = createBrowserRouter([
  // auth
  {...authRoutes},

  // app
  {...appRoutes},
]);


export default routes
