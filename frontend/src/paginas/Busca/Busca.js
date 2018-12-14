//Bibliotecas
import React, {Component} from "react"
import ReactDOM from "react-dom"
import './Busca.css'
import { connect } from 'react-redux'
//Componentes
import Navbar from '../../componentes/Navbar/Navbar'
import CardsEmpresas from '../../componentes/CardsEmpresas/CardsEmpresas'
//Actions (redux)
import { listaEmpresas, getTotalIndicacaoEmpresa } from '../../redux/actions'
//-------------------------------------------------------------------


class Busca extends Component{
  constructor(props){
      super(props)
      this.state = null;
    }
  //FIM CONSTRUCTOR

  componentDidMount() {
    const empresas = this.props.empresas.filter(
      item => item.ramo.toLowerCase().includes(this.props.filtro.toLowerCase()))


  }

    //FIM COMPONENTDIDMOUNT



  render(){

    return(
      <section>
      < Navbar />
      < CardsEmpresas/>
      </section>
      )
  }
}

//EXPORT
export default connect(
  (state) => ({
    //usuario: state.usuario,
    empresas: state.empresas,
    //indicacoes: state.indicacoes,
    filtro: state.filtro
  }),
  { listaEmpresas }
)(Busca)
