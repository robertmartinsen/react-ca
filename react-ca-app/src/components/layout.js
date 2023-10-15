import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Outlet } from "react-router-dom"
import "./layout.scss"

function Layout({ cart }) {
  
  return (
    <div className="layout-container">
      <Header cart={cart} />
      <div className="layout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
