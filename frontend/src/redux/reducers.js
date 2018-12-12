//IMPORTAÇOES
import { combineReducers } from 'redux'

//FUNÇÕES

//EMPRESAS

function empresas (state=[], action){
  switch(action.type){
    case 'CADASTRA_EMPRESA':
  return state.concat(action.dados)
    case 'LISTA_EMPRESAS':
      return action.dados
      case 'APRESENTA_EMPRESA':
  return state.map(item =>
    item.id === action.dados.id ? action.dados : item
  )
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
   //usuarios,
   empresas,
   indicacoes,
   filtro
  })

export default reducers
