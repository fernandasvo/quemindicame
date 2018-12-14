import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logaUsuario } from '../../redux/actions'
import Formulario from '../../componentes/Formulario/Formulario'
import Link from '../../componentes/Link/Link'
// import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import Navback from '../../componentes/Navback/Navback'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)

    this.emailRef = React.createRef() // { current: null }
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }

  enviaDados = (evento) => {
    evento.preventDefault()

    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    const dados = {
      email: campoEmail.getValor(),
      senha: campoSenha.getValor() // valor alterado para enviar email/password
    }

    this.props.logaUsuario(dados)
  }

  habilitaOuDesabilitaBotao = () => {
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  render() {
    // if (this.props.usuario) {
    //   return <Redirect to="/" />
    // }

    return (
      <section>
      <Navback />
      <main className="login">
        <Formulario onSubmit={this.enviaDados}>
          <Legenda htmlFor="email">Email:</Legenda>
          <Campo ref={this.emailRef} id="email" type="email" name="email" placeholder="Email" required onChange={this.habilitaOuDesabilitaBotao} />

          <Legenda htmlFor="senha">Senha:</Legenda>
          <Campo ref={this.senhaRef} id="senha" type="password" name="senha" placeholder="Senha" required minLength={6} onChange={this.habilitaOuDesabilitaBotao} />

          <Formulario.Botao desabilitado={this.state.desabilitado}>
            Enviar
          </Formulario.Botao>
        </Formulario>

        <Link url="/conta" className="conta" >
          Criar nova conta
        </Link>

      </main>
      </section>
    )
  }
}

export default connect(
  (state) => ({ usuario: state.usuario }),
  { logaUsuario }
)(Login)
