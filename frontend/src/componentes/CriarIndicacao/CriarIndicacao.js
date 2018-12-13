import React, { Component } from 'react'
import { cadastraIndicacao, alteraIndicacao, removeIndicacao } from '../../redux/actions'
import { connect } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import './CriarIndicacao.css'

class CriarIndicacao extends Component {
  constructor(props) {
    super(props)
    this.state = { editando: false }
  }

  cadastraOuAlteraIndicacao = (evento) => {
    evento.preventDefault()

    const cadastrando = !this.props.id
    const form = evento.target

    if (cadastrando) {
      const dados = {
        idUsuarioIndicador: form.idUsuarioIndicador.value,
        texto: form.texto.value,
        idEmpresa:this.props.empresaId

        //dataCriacao: "",
        //dataExclusao: ""
      }

      this.props.cadastraIndicacao(dados)

      form.reset()
    } else {
      const dados = {
        id: this.props.id,
        idUsuarioIndicador: form.idUsuarioIndicador.value,
        texto: form.texto.value,
        idEmpresa: this.props.empresaId,
        //dataCriacao: "",
        //dataExclusao: ""
      }

      this.props.alteraIndicacao(dados)

      this.setState({ editando: false })
    }
  }

  habilitaEdicao = () => {
    this.setState({ editando: true })
  }

  removeIndicacao = () => {
    const id = this.props.id
    this.props.removeIndicacao(id)
  }

  render() {
    const cadastrando = !this.props.id

    return (
      <form className="indicacao" onClick={this.habilitaEdicao} onSubmit={this.cadastraOuAlteraIndicacao}>
        {!cadastrando && this.state.editando && (
          <button className="indicacao__botao-remover" type="button" onClick={this.removeIndicacao}>
            <MdDelete />
          </button>
        )}
        <input
          className="indicacao__titulo"
          type="text"
          name="idUsuarioIndicador"
          placeholder="id do usuário..."
          autoComplete="off"
          defaultValue={this.props.idUsuarioIndicador}
        />
        <input
          className="indicacao__titulo"
          type="text"
          name="texto"
          placeholder="Insira aqui sua indicação..."
          autoComplete="off"
          defaultValue={this.props.texto}
        />
        <input
          className="indicacao__titulo"
          type="text"
          name="idEmpresa"
          placeholder="id da empresa..."
          autoComplete="off"
          defaultValue={this.props.idEmpresa}
        />
        {(cadastrando || this.state.editando) && (
          <button className="indicacao__botao-concluir">
            Eu indico!
          </button>
        )}
      </form>
    )
  }
}

export default connect(
  null,
  { cadastraIndicacao, alteraIndicacao, removeIndicacao }
)(CriarIndicacao)
