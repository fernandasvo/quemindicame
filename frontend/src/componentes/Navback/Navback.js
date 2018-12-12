import React, {Component} from "react"
import ReactDOM from "react-dom"
import { connect } from 'react-redux'
import './Navback.css'
import back from "./backwhite.png"
import logo from "./logo.png"
import { Link } from 'react-router-dom'



function Navback() {
  return (
    <header className="header">
    <Link to="/">
      <img className="voltar" src={back} alt="voltar"/>
    </Link>
      <Link to="/">
        <img className="logo" src={logo} alt="logo"/>
      </Link>
      <ul>
          <li>
            <Link to="/criarnegocio" className="" >
              Criar meu negócio
            </Link>
          </li>
      </ul>
    </header>


  )}



export default Navback
