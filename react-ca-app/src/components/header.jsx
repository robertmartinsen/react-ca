import React, { useState } from "react"
import classes from "./header.module.scss"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

function Header({ cart }) {
  const [showSidebar, setShowSidebar] = useState(false)

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand fs-4" href="/">
          eDay
        </a>

        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`sidebar offcanvas offcanvas-start ${
            showSidebar ? "show" : ""
          } ${classes["bg-purple"]}`}
          tabIndex="-1"
          id="offCanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              eDay
            </h5>
            <button
              className="btn-close btn-close-white shadow-none"
              onClick={toggleSidebar}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4">
            <ul className="navbar-nav d-flex justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  activeClassName={classes.active}
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  activeClassName={classes.active}
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 flex-lg">
              <NavLink to="/CartPage">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fs-4 text-white"
                />
                {cart.items.length > 0 && (
                  <span className="badge bg-danger">{cart.items.length}</span>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
