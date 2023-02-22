import React from "react";


const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <a className="nav-link " href="#">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-heading">Admin</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li>

        </ul>

      </aside>
    </>
  )
}


export default Sidebar
