import React from "react";
import { RouterProvider } from "react-router-dom";
import Login from "./pages/Auth/Login";
import routes from "./router/Router";
import useToken from "./components/CustomHooks/useToken";
import './App.css';



function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
