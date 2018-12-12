//Bibliotecas
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
//Páginas
import Busca from './paginas/Busca/Busca'
import CriarNegocio from './paginas/CriarNegocio/CriarNegocio'
import Home from './paginas/Home/Home'
import EditarNegocio from './paginas/EditarNegocio/EditarNegocio'
import PerfilEmpresa from './paginas/PerfilEmpresa/PerfilEmpresa'
//Componentes
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'
//Style
import './index.css'
//------------------------------------------------------------------------------------

function App() {
  return (
    <div className="app">

      <Switch>
        <Route path="/" exact component={Busca}/>
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
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('projeto')
)
