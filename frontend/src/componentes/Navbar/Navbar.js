import React, {Component} from "react"
import ReactDOM from "react-dom"
import { connect } from 'react-redux'
import './Navbar.css'
import logo from "./logo.png"
import { Link, withRouter } from 'react-router-dom'
import Campo from '../Campo/Campo'
import Menu from '../Menu/Menu'
import { alteraFiltro, deslogaUsuario} from '../../redux/actions'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.filtroRef = React.createRef()
    this.state = { aberto: false }
  }

  filtraCards = () => {
    const campoFiltro = this.filtroRef.current
    const texto = campoFiltro.getValor()
    this.props.alteraFiltro(texto)
  }

  render(){
  return (
    <header className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <div className='campoFiltro'>
        <Campo
          ref={this.filtroRef}
          className="filtro"
          type="search"
          placeholder="Procuro indicações de..."
          onChange={this.filtraCards}
        />
      </div>
      <Menu/>
    </header>
  )
}
}

export default withRouter(
  connect(
    (state) => ({ usuario: state.usuario }),
    { deslogaUsuario, alteraFiltro }
  )(Navbar)
)
