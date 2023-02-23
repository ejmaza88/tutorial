import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./router/Router";
import './App.css';


function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
