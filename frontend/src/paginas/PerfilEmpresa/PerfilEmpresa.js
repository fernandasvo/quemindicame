import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listaIndicacoes } from '../../redux/actions'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//Componentes
import Navback from '../../componentes/Navback/Navback'
import Indicacoes from '../../componentes/Indicacoes/Indicacoes'
import email from "./email.png"
import telefones from "./telefones.png"
import localizacao from "./localizacao.png"
import { apresentaEmpresa } from '../../redux/actions'
//style
import './PerfilEmpresa.css'

class PerfilEmpresa  extends Component {

  constructor(props){
      super(props)
      this.state =null;


  }
  //FIM CONSTRUCTOR
  componentDidMount() {
    this.props.apresentaEmpresa(this.props.match.params._id)
}


  //FIM COMPONENTDIDMOUNT


  render(){


        return(
    <section>
    < Navback />
    <section className="perfilEmpesa">


    <section class="container slide">
           <div class="slide_item">
              <img className= 'imgsServicosPerfil' src={this.props.empresa.imgsServicos} alt="" title="" />
               <div class="slide_item_desc">
                 <div className='white ramoEmpresaPerfil' name="ramoEmpresa">{this.props.empresa.ramo}</div>
                 <div className='white nomeEmpresaPerfil' name="nomeEmpresa">{this.props.empresa.nomeEmpresa}</div>
                 <div className='white servicosEmpresaPerfil' name="servicosEmpresa">{this.props.empresa.servicos}</div>
                 <div className='white descricaoEmpresaPerfil' name="descricaoEmpresa">{this.props.empresa.descricao}</div>

               </div>
           </div>
     </section>

            <div className='indicacoesEmpresaDiv'>
              <Indicacoes empresaId={this.props.match.params._id} />
            </div>

          <div className='contato'>

          <div className='mapa'>
            <iframe src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Rua%20Rio%20de%20Janeiro%2C%20129%20-%20Santos%2C%20SP+(Map)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">  </iframe>
          </div>


            <div className='dadosContato' name='dadosContato'>
            <div>
                  <div className='divContato localizacao'>
                    <img className="iconContato" src={localizacao} alt="localizacao"/>
                    <div className="detalhesContato">
                      <div className='ruaEmpresaPerfil' name="ruaEmpresa">{this.props.empresa.rua}</div>
                      <div className='cidadeEmpresaPerfil' name="cidadeEmpresa">{this.props.empresa.cidade}</div>
                      <div className='estadoEmpresaPerfil' name="estadoEmpresa">{this.props.empresa.estado}</div>
                    </div>
                  </div>

                  <div className='divContato telefones'>
                    <img className="iconContato" src={telefones} alt="telefones"/>
                    <div className="detalhesContato">
                      <div className='telefonePerfil' name="telefone">{this.props.empresa.telefone}</div>
                      <div className='celularPerfil' name="celular">{this.props.empresa.celular}</div>
                    </div>
                  </div>

                  <div className='divContato email'>
                    <img className="iconContato" src={email} alt="email"/>
                    <div className="detalhesContato">
                      <div className='emailPerfil' name="email">{this.props.empresa.email}</div>
                    </div>
                  </div>
            </div>
          </div>
        </div>



    </section>
    </section>
  )
}
}


export default connect(
  (state) => ({
    //usuario: state.usuario,
    empresa: state.empresa,
    //indicacoes: state.indicacoes,
    filtro: state.filtro
  }),
  { apresentaEmpresa }
)(PerfilEmpresa)
