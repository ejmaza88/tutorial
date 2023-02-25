import React from "react";
import HeaderComp from "./Header";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <HeaderComp/>
      <Sidebar/>
      <main id="main" className="main">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default AppLayout
