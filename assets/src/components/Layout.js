import React from "react";
import HeaderComp from "./Header";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {AuthProvider} from "../contexts/AuthContext";


const AppLayout = () => {
  return (
    <>
      <AuthProvider>
        <HeaderComp/>
        <Sidebar/>
        <main id="main" className="main">
          <Outlet/>
        </main>
        <Footer/>
      </AuthProvider>
    </>
  )
}


export default AppLayout
