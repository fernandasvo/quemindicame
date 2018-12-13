import React, {Component} from "react"
import ReactDOM from "react-dom"
import { connect } from 'react-redux'
import './Navbar.css'
import logo from "./logo.png"
import { Link } from 'react-router-dom'
import Campo from '../Campo/Campo'
import { alteraFiltro } from '../../redux/actions'


class Navbar extends Component{
  constructor(props) {
    super(props)
    this.filtroRef = React.createRef()
    this.state = { aberto: false }
  }

  filtraEmpresas = () => {this.props.alteraFiltro(this.filtroRef.current.getValor()) }

  //"getvalor() está no componente "campo"

render(){
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo"/>
      </Link>
      <div className='filtro'>
        <Campo
          ref={this.filtroRef}
          className="campo"
          type="search"
          placeholder="Procuro indicações de..."
          onChange={this.filtraEmpresas}
        />
      </div>
      <ul>
          <li>
            <Link to="/criarnegocio" className="criarNegocio" >
              Criar meu negócio
            </Link>
            <Link to="/login" className="login" >
              Login
            </Link>
          </li>
      </ul>
    </header>


  )}
}


export default connect(
  (state) => ({
    //usuario: state.usuario,
    empresas: state.empresas,
    //indicacoes: state.indicacoes,
    filtro: state.filtro
  }),
  { alteraFiltro }
)(Navbar)
