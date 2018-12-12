import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { listaIndicacoes } from '../../redux/actions'
//Componentes
import Navback from '../../componentes/Navback/Navback'
import Indicacoes from '../../componentes/Indicacoes/Indicacoes'
import email from "./email.png"
import telefones from "./telefones.png"
import localizacao from "./localizacao.png"
//style
import './PerfilEmpresa.css'

function PerfilEmpresa() {

return (
    <section>
    < Navback />
    <section className="perfilEmpesa">
            <div className="resumoEmpresa">
              <div className='white ramoEmpresaPerfil' name="ramoEmpresa">RAMO EMRPRESA</div>
              <div className='white nomeEmpresaPerfil' name="ramoEmpresa">NOME EMRPRESA</div>
              <div className='white servicosEmpresaPerfil' name="servicosEmpresa">SERVICOS EMPRESA</div>
            </div>

            <div className='indicacoesEmpresaDiv'>
              <Indicacoes />
            </div>

          <div className='contato'>

            <img className="mapa" src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/2:1/w_1200,c_limit/GoogleMapTA.jpg' alt="localizacao"/>

            <div className='dadosContato' name='dadosContato'>
                  <div className='divContato localizacao'>
                    <img className="iconContato" src={localizacao} alt="localizacao"/>
                    <div className="detalhesContato">
                      <div className='ruaEmpresaPerfil' name="ruaEmpresa">RUA EMPRESA}</div>
                      <div className='cidadeEmpresaPerfil' name="cidadeEmpresa">CIDADE EMPRESA</div>
                      <div className='estadoEmpresaPerfil' name="estadoEmpresa">ESTADO EMPRESA</div>
                    </div>
                  </div>

                  <div className='divContato telefones'>
                    <img className="iconContato" src={telefones} alt="telefones"/>
                    <div className="detalhesContato">
                      <div className='telefonePerfil' name="telefone">telefone empresa</div>
                      <div className='celularPerfil' name="celular">celular empresa</div>
                    </div>
                  </div>

                  <div className='divContato email'>
                    <img className="iconContato" src={email} alt="email"/>
                    <div className="detalhesContato">
                      <div className='emailPerfil' name="email">email empresa</div>
                    </div>
                  </div>
            </div>
        </div>



    </section>
    </section>
  )}


export default PerfilEmpresa
