import React from "react"
import ReactDOM from "react-dom"
import './CardEmpresa.css'



function CardEmpresa() {
  return (
    <div class= 'cardEmpresa'>

          <div class='conteudoCard'>

            <div class='imagensEmpresa'>
              <img class='imgEmpresa' src='https://images.pexels.com/photos/51002/fence-railing-wrought-iron-barrier-51002.jpeg?auto=compress&cs=tinysrgb&h=35'/>
            </div>

            <div class='infosEmpresa'>
               <div class='ramoEmpresa'> Ramo </div>
               <div class='nomeEmpresa'> Nome empresa</div>
               <div class='servicosEmpresa'> Serviço 1, Serviço 2, Serviço 3</div>
               <div class='enderecoEmpresa'> Santos, SP </div>
            </div>

            <div class='indicacoesEmpresa'>
              <div class='numeroIndicacoes'>20</div>
              <div class='termoIndicacoes'>indicações</div>
            </div>

          </div>
        </div>
  )
}

export default CardEmpresa
