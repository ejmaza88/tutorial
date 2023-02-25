import React from 'react'
import Logo from '../assets/img/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useAuth} from "../contexts/AuthContext";


const HeaderComp = () => {
  const {handleLogout} = useAuth()

  const handleSideBar = () => {
    document.querySelector('body').classList.toggle('toggle-sidebar')
  }

  const logout = (e) => {
    e.preventDefault()
    handleLogout()
  }

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">

      <div className="d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center">
          <img src={Logo} alt="Aldezo logo"/>
          <span className="d-none d-lg-block">Aldezo</span>
        </div>
        <i className="bi bi-list toggle-sidebar-btn" onClick={handleSideBar} />
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">

          <li className="nav-item dropdown pe-3">

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Mazariegos"
            >
              <NavDropdown.Item href="#action/3.1">
                <i className="bi bi-person"/> My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.2">
                <i className="bi bi-gear"/> Account Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.3">
                <i className="bi bi-question-circle"/>Need Help?
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#" onClick={logout}>
                <i className="bi bi-box-arrow-right"/> Logout
              </NavDropdown.Item>

            </NavDropdown>
          </li>

        </ul>
      </nav>

    </header>
  )
}

export default HeaderComp
