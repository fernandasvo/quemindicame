//IMPORTAÇOES
import { combineReducers } from 'redux'

//FUNÇÕES

//USUARIOS

let usuarioInicial = null

const json = localStorage.getItem('usuario')
if (json) {
  usuarioInicial = JSON.parse(json)
}

function usuario(state = usuarioInicial, action) {
  switch(action.type) {
    case 'LOGA_USUARIO':
      const usuario = action.dados
      const json = JSON.stringify(usuario)
      localStorage.setItem('usuario', json)
      return usuario
    case 'DESLOGA_USUARIO':
      localStorage.removeItem('usuario')
      return null
    default:
      return state
  }
}

//EMPRESAS

function empresas (state=[], action){
  switch(action.type){
    case 'CADASTRA_EMPRESA':
      return state.concat(action.dados)
    case 'LISTA_EMPRESAS':
      return action.dados;
    default:
    return state
  }
}

function empresa (state=[], action){
  switch(action.type){
      case 'APRESENTA_EMPRESA':
      console.log(state, action.empresa);
      return state.empresa =action.empresa

    default:
    return state
  }
}


//FILTROS
function filtro(state = '', action) {
  switch(action.type) {
    case 'ALTERA_FILTRO':
      return action.texto
    default:
      return state
  }
}

//INDICACOES

function indicacoes(state = [], action) {
  switch(action.type) {
    case 'CADASTRA_INDICACAO':
      return state.concat(action.dados)
    case 'ALTERA_INDICACAO':
      return state.map(item =>
        item.id === action.dados.id ? action.dados : item
      )
    case 'REMOVE_INDICACAO':
      return state.filter(item => item.id !== action.id)
    case 'LISTA_INDICACOES':
      return action.dados
    default:
      return state
  }
}




//EXPORTS
const reducers = combineReducers({
   usuario,
   empresas,
   empresa,
   indicacoes,
   filtro
  })

export default reducers
