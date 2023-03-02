import React from "react";
import SidebarLink from "./SidebarLink";
import * as Constants from "../constants/Constants"


const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <SidebarLink to={Constants.Dashboard.path} label={Constants.Dashboard.label} iconClass={"bi bi-grid"}/>
          <li className="nav-heading">Admin</li>
          <SidebarLink to={Constants.Main.path} label={Constants.Main.label} iconClass={"bi bi-box-arrow-in-right"}/>
          <SidebarLink to={Constants.Blank.path} label={Constants.Blank.label} iconClass={"bi bi-file-earmark"}/>
        </ul>
      </aside>
    </>
  )
}


export default Sidebar
