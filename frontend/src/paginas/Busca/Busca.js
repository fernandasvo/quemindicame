//Bibliotecas
import React, {Component} from "react"
import ReactDOM from "react-dom"
import './Busca.css'
import { connect } from 'react-redux'
//Componentes
import Navbar from '../../componentes/Navbar/Navbar'
//Actions (redux)
import { listaEmpresas } from '../../redux/actions'

//-------------------------------------------------------------------


class Busca extends Component{
  constructor(props){
      super(props)
      this.state = null
  }
  //FIM CONSTRUCTOR
  componentDidMount() {
    this.props.listaEmpresas()
  }
  //FIM COMPONENTDIDMOUNT

  render(){
    const empresas = this.props.empresas.filter(
      item => item.ramo.toLowerCase().includes(this.props.filtro.toLowerCase())
    )

    return(
      <section>
      < Navbar />
      <div className="cardsEmpresas">
      {empresas.map(empresa =>(
        <a href='/perfilempresa' className="cardEmpresa" >
          <div className="conteudoCard">
              <div className='imagensEmpresa'>
                  <img className='imgsServicos' name="imgsServicos" src={empresa.imgsServicos}/>
              </div>

              <div className='infosEmpresa'>
                <div className='ramoEmpresa' name="ramoEmpresa">{empresa.ramo}</div>
                <div className='nomeEmpresa' name="nomeEmpresa">{empresa.nomeEmpresa}</div>
                <div className='servicosEmpresa' name="servicosEmpresa">{empresa.servicos}</div>
                <div className='cidadeEmpresa' name="cidadeEmpresa">{empresa.cidade}</div>
                <div className='estadoEmpresa' name="cidadeEmpresa">{empresa.estado}</div>
            </div>
            <div className='indicacoesEmpresa'>
               <div className='numeroIndicacoes' name="numeroIndicacoes">20</div>
               <div className='termoIndicacoes' name="termoIndicacoes">indicações</div>
            </div>
          </div>
        </a>
      )
      )
      }
      </div>
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
