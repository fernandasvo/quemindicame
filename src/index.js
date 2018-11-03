import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './index.css'

import Busca from './paginas/Busca/Busca'
import CriarNegocio from './paginas/CriarNegocio/CriarNegocio'
import Home from './paginas/Home/Home'
import EditarNegocio from './paginas/EditarNegocio/EditarNegocio'
import PerfilEmpresa from './paginas/PerfilEmpresa/PerfilEmpresa'

import Footer from './componentes/Footer/Footer'

//------------------------------------------------------------------------------------

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/busca" component={Busca}/>
        <Route path="/criarnegocio" component={CriarNegocio}/>
        <Route path="/home" component={Home}/>
        <Route path="/editarnegocio" component={EditarNegocio}/>
        <Route path="/perfilempresa" component={PerfilEmpresa}/>
      </Switch>
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('projeto')
)
