import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { listaIndicacoes } from '../../redux/actions'
import CriarIndicacao from '../../componentes/CriarIndicacao/CriarIndicacao'
import './Indicacoes.css'

class Indicacoes extends Component {
  constructor(props) {
    super(props)
    this.state = null
  }

  componentDidMount() {
    // if (this.props.usuario) {
      this.props.listaIndicacoes(this.props.empresaId)
    // }

  }

  render() {
    const indicacoes = this.props.indicacoes;

    return (
      <main className="campoIndicacoes">
            <CriarIndicacao empresaId={this.props.empresaId}/>
            <div className='scroll'>
              <div className="indicacoesFeitas">
                {indicacoes.map(indicacao => (
                  <div className='indicacaoFeita' key={indicacao.id} id={indicacao.id} >
                    <div className="indicador">
                    <div className='nomeIndicador' name="nomeIndicador">Fulano</div>
                    <div className='termoIndica' name="termoIndica">indica!</div>
                    </div>
                    <div className='textoIndicacaoFeita' name="textoIndicacaoFeita">"{indicacao.texto}"</div>
                  </div>
                ))}
              </div>
              </div>
      </main>
    )
  }
}






export default connect(
  (state) => ({
    //usuario: state.usuario,
    indicacoes: state.indicacoes,
    filtro: state.filtro }),
  { listaIndicacoes }
)(Indicacoes)
