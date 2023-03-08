import React from "react";
import SidebarLink from "./SidebarLink";
import * as Constants from "../constants/Constants"


const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <SidebarLink to={Constants.Main.path} label={Constants.Main.label} iconClass={"bi bi-segmented-nav"}/>
          <SidebarLink to={Constants.Diaper.path} label={Constants.Diaper.label} iconClass={"bi bi-ticket"}/>
        </ul>
      </aside>
    </>
  )
}


export default Sidebar
