import React from "react";
import {NavLink} from "react-router-dom";


const SidebarLink = (props) => {
  const {to, label, iconClass} = props

  return (
    <>
      <li className="nav-item">
        <NavLink
          to={to}
          className={({isActive}) =>
            isActive ? "nav-link" : "nav-link collapsed"
          }
        >
          {iconClass ? <i className={iconClass}></i> : null}
          <span>{label}</span>
        </NavLink>
      </li>
    </>
  )
}

export default SidebarLink
