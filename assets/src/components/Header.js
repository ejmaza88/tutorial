import React from 'react'
import Logo from '../assets/img/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';


const HeaderComp = () => {

  const handleSideBar = () => {
    document.querySelector('body').classList.toggle('toggle-sidebar')
  }

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">

      <div className="d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center">
          <img src={Logo} alt=""/>
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

              <NavDropdown.Item href="#action/3.4">
                <i className="bi bi-box-arrow-right"/> Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </li>

        </ul>
      </nav>

    </header>
  )
}

export default HeaderComp
