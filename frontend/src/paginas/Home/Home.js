import React from "react"
import ReactDOM from "react-dom"
import './Home.css'
import logo from "./logo.png"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="landpage">
    <div className="divLandpage">
  <Link to="/">
      <img className="logoLandpage" src={logo} alt="logo"/>
    </Link>
    </div>
    <div className='realtimeboard'>
    <iframe width="2480" height="720" src="https://realtimeboard.com/app/embed/o9J_kzcyj-k=/?" frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
    </section>
  )}

export default Home
