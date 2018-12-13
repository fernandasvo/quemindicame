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
              <div className="indicacoesFeitas">
                {indicacoes.map(indicacao => (
                  <CriarIndicacao
                  key={indicacao.id}
                  id={indicacao.id}
                  idUsuarioIndicador={indicacao.idUsuarioIndicador}
                  texto={indicacao.texto}
                  idEmpresa={indicacao.idEmpresa}
                  />
                ))}
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
