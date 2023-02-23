import React from "react";
import SidebarLink from "./SidebarLink";


const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <SidebarLink to={"dashboard"} label={"Dashboard"} iconClass={"bi bi-grid"}/>
          <li className="nav-heading">Admin</li>
          <SidebarLink to={"main"} label={"Main"} iconClass={"bi bi-box-arrow-in-right"}/>
          <SidebarLink to={"blank"} label={"Blank"} iconClass={"bi bi-file-earmark"}/>
        </ul>
      </aside>
    </>
  )
}


export default Sidebar
