import React from "react"
import ReactDOM from "react-dom"
import './Navbar.css'
import logo from "./logo.png"


function Navbar() {
  return (
    <header className="header">
      <img className="logo" src={logo}/>
    </header>

  )
}


export default Navbar
