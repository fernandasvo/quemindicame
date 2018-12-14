//Bibliotecas
import React, {Component} from "react"
import ReactDOM from "react-dom"
import './CardsEmpresas.css'
import { connect } from 'react-redux'
//Componentes
import Navbar from '../../componentes/Navbar/Navbar'
//Actions (redux)
import { listaEmpresas, getTotalIndicacaoEmpresa } from '../../redux/actions'
//-------------------------------------------------------------------


class CardsEmpresas extends Component{
  constructor(props){
      super(props)
      this.state = null;
      this.getTotalIndicacaoEmpresa = getTotalIndicacaoEmpresa.bind(this)
  }
  //FIM CONSTRUCTOR
  componentDidMount() {
    this.props.listaEmpresas()


  }
  //FIM COMPONENTDIDMOUNT



  render(){

    this.props.empresas.forEach(item =>{
      //deveria virar um componente
        if(typeof item.total === "undefined"){ //hack very crazy
          console.log(item.total, typeof item.total)

           this.getTotalIndicacaoEmpresa(item.id).then(response =>{
                 item.total =response.data.total
                 this.setState({uptade:1}) //hack para atualizar o estado do props
            })

        }

     })



    const empresas = this.props.empresas

    return(
      <section>
        <div className="cardsEmpresas">
      {empresas.map(empresa =>(

        //<EmpresaCard empresa={empresa} />
        <a key={empresa.id} href={'/perfilempresa/' + empresa.id} className="cardEmpresa">
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
               <div className='numeroIndicacoes' name="numeroIndicacoes">{empresa.total}</div>
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
)(CardsEmpresas)
