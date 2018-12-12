//IMPORTAÇÕES
import axios from 'axios'

//CONFIGURAÇÕES FRONT(axios) X API
const configuracoes = {
  baseURL: 'http://localhost:5000/api'
}
const api = axios.create(configuracoes)


//FILTROS--------------------------------------------------------------------------------------------------

export function alteraFiltro(texto) {
  return {type: 'ALTERA_FILTRO',texto }}


//EMPRESAS-------------------------------------------------------------------------------------------------

export function listaEmpresas() {
  return (dispatch) => {
    api
      .get('/empresas')
      .then(response => {
        const dados = response.data.map(item => ({
          id: item._id,
          idUsuarioProprietario: item.idUsuarioProprietario,
        	nomeEmpresa: item.nomeEmpresa,
          ramo: item.ramo,
          servicos: item.servicos,
          rua: item.rua,
          cidade: item.cidade,
          estado: item.estado,
          telefone: item.telefone,
          celular: item.celular,
        	email: item.email,
        	imgsServicos: item.imgsServicos,
          //dataCriacao: item.dataCriacao,
        	 //dataExclusao: item.dataExclusao,
        }))
        dispatch({ type: 'LISTA_EMPRESAS', dados })
      })
  }
}

export function apresentaEmpresa(dados) {
  return (dispatch) => {
    const url = `/empresas/${dados.id}`
    const json = {
      idUsuarioProprietario: dados.idUsuarioProprietario,
      nomeEmpresa: dados.nomeEmpresa,
      ramo: dados.ramo,
      servicos: dados.servicos,
      rua: dados.rua,
      cidade: dados.cidade,
      estado: dados.estado,
      telefone: dados.telefone,
      celular: dados.celular,
      email: dados.email,
      imgsServicos:dados.imgsServicos,
      //dataCriacao: dados.dataCriacao,
      //dataExclusao: dados.Exclusao,
    }
    api
      .get(url, json)
      .then(() => {
        dispatch({ type: 'APRESENTA_EMPRESA', dados })
      })
  }
}



export function cadastraEmpresa(dados) {
  return (dispatch) => {
    const json = {
     idUsuarioProprietario: dados.idUsuarioProprietario,
     nomeEmpresa: dados.nomeEmpresa,
     ramo: dados.ramo,
     servicos: dados.servicos,
     rua: dados.rua,
     cidade: dados.cidade,
     estado: dados.estado,
     telefone: dados.telefone,
     celular: dados.celular,
     email: dados.email,
     imgsServicos:dados.imgsServicos,
     //dataCriacao: dados.dataCriacao,
     //dataExclusao: dados.Exclusao,
    }

    api
      .post('/empresas', json)
      .then(response => {
        dados.id = response.data._id
        dispatch({ type: 'CADASTRA_EMPRESA', dados })
      })
  }
}

//INDICAÇÕES-----------------------------------------------------------------------------------------------------------------------

export function cadastraIndicacao(dados) {
  return (dispatch) => {
    const json = {
      idUsuarioIndicador: dados.idUsuarioIndicador,
      texto: dados.texto,
      idEmpresa: dados.idEmpresa,
      //dataCriacao: "",
      //dataExclusao: ""
    }

    api
      .post('/indicacoes', json)
      .then(response => {
        dados.id = response.data._id
        dispatch({ type: 'CADASTRA_INDICACAO', dados })
      })
  }
}

export function alteraIndicacao(dados) {
  return (dispatch) => {
    const url = `/indicacoes/${dados.id}`
    const json = {
      idUsuarioIndicador: dados.idUsuarioIndicador,
      texto: dados.texto,
      idEmpresa: dados.idEmpresa,
      //dataCriacao: "",
      //dataExclusao: ""
    }
    api
      .put(url, json)
      .then(() => {
        dispatch({ type: 'ALTERA_INDICACAO', dados })
      })
  }
}

export function removeIndicacao(id) {
  return (dispatch) => {
    const url = `/indicacoes/${id}`
    api
      .delete(url)
      .then(() => {
        dispatch({ type: 'REMOVE_INDICACAO', id })
      })
  }
}

export function listaIndicacoes() {
  return (dispatch) => {
    api
      .get('/indicacoes')
      .then(response => {
        const dados = response.data.map(item => ({
          id: item._id,
          idUsuarioIndicador: item.idUsuarioIndicador,
          texto: item.texto,
          idEmpresa: item.idEmpresa,
          //dataCriacao: "",
          //dataExclusao: ""
        }))
        dispatch({ type: 'LISTA_INDICACOES', dados })
      })
  }
}
