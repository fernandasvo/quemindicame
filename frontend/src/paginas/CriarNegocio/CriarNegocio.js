//Bibliotecas
import React, { Component } from 'react'
import { connect } from 'react-redux'
//componentes
import Navback from '../../componentes/Navback/Navback'
//Actions
import { cadastraEmpresa } from '../../redux/actions'
//Style
import './CriarNegocio.css'

//Criando componente

class CriarNegocio extends Component {
  constructor(props) {
    super(props)
    this.state = { editando: false }
  }

  cadastraEmpresa = (evento) => {
    evento.preventDefault()

    const cadastrando = !this.props.id
    const form = evento.target

    if (cadastrando) {
      const dados = {
        idUsuarioProprietario: form.idUsuarioProprietario.value,
        nomeEmpresa: form.nomeEmpresa.value,
        ramo: form.ramo.value,
        servicos: form.servicos.value,
        descricao:form.descricao.value,
        rua: form.rua.value,
        cidade: form.cidade.value,
        estado: form.estado.value,
        telefone: form.telefone.value,
        celular: form.celular.value,
        email: form.email.value,
        imgsServicos:form.imgsServicos.value,
        //dataCriacao: form.dataCriacao.value,
        //dataExclusao: form.dataExclusao.value,
      }

      this.props.cadastraEmpresa(dados)

      form.reset()
    }
  }

  render() {
    const cadastrando = !this.props.id

    return (
      <section>
      < Navback />

          <form className="formCriarEmpresa" onSubmit={this.cadastraEmpresa}>
            <input className="campoForm" name="idUsuarioProprietario" type="text" placeholder="idUsuarioProprietario?" autoComplete="off" defaultValue={this.props.idUsuarioProprietario}/>
            <input className="campoForm" name="nomeEmpresa" type="text" placeholder="Qual o nome do seu negócio?" autoComplete="off" defaultValue={this.props.nomeEmpresa}/>
            <input className="campoForm" name="ramo" type="text" placeholder="Qual o ramo do seu negócio?" autoComplete="off" defaultValue={this.props.ramo}/>
            <input className="campoForm" name="descricao" type="text" placeholder="Fale um pouco sobre seu negócio..." autoComplete="off" defaultValue={this.props.ramo}/>
            <input className="campoForm" name="servicos" type="text" placeholder="Quais serviços presta?" autoComplete="off" defaultValue={this.props.servicos}/>
            <input className="campoForm" name="rua" type="text" placeholder="Qual rua fica?" autoComplete="off" defaultValue={this.props.rua}/>
            <input className="campoForm" name="cidade" type="text" placeholder="Qual cidade fica?" autoComplete="off" defaultValue={this.props.cidade}/>
            <input className="campoForm" name="estado" type="text" placeholder="Qual estado fica?" autoComplete="off" defaultValue={this.props.estado}/>
            <input className="campoForm" name="telefone" type="text" placeholder="Qual o telefone?" autoComplete="off" defaultValue={this.props.telefone}/>
            <input className="campoForm" name="celular" type="text" placeholder="Qual o celular?" autoComplete="off" defaultValue={this.props.celular}/>
            <input className="campoForm" name="email" type="text" placeholder="Qual o e-mail?" autoComplete="off" defaultValue={this.props.email}/>
            <input className="campoForm" name="imgsServicos" type="text" placeholder="Insira o link de uma imagem aqui" autoComplete="off" defaultValue={this.props.imgsServicos}/>
            {(cadastrando || this.state.editando) && (<button className="campoForm">Criar meu negócio!</button>)}
          </form>
      </section>

    )
  }
}



export default connect(null,{ cadastraEmpresa })(CriarNegocio)
