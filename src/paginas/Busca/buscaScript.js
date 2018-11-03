window.onload = function (){
  apresentarEmpresa();
}

//for-----------------------------------------------------------
function apresentarEmpresa(){
      var empresaDiv = document.getElementById("cardsEmpresa");
      empresaDiv.innerHTML = `
      ${bancoDados["empresas"].map((empresa) =>`
      <div class= 'cardEmpresa'>
            <div class='conteudoCard'>
              <div class='imagensEmpresa'>
                <img class='imgEmpresa' src=
                ${empresa["empresa"]["imgsServicos"][0]}
               />
              </div>

              <div class='infosEmpresa'>
              <div class='ramoEmpresa'>
                 ${empresa["empresa"]["ramo"]}
               </div>
                 <div class='nomeEmpresa'>
                 ${empresa["empresa"]["nome"]}
                 </div>
                 <div class='servicosEmpresa'>
                 ${empresa["empresa"]["servicos"][0]},
                 ${empresa["empresa"]["servicos"][1]},
                 ${empresa["empresa"]["servicos"][2]}
                 </div>
                 <div class='enderecoEmpresa'>
                 ${empresa["empresa"]["endereco"]["cidade"]},
                 ${empresa["empresa"]["endereco"]["estado"]}
                 </div>
              </div>

              <div class='indicacoesEmpresa'>
                <div class='numeroIndicacoes'>
                ${empresa["empresa"]["indicacoes"]}
                </div>
                <div class='termoIndicacoes'>
                indicações
                </div>
              </div>
            </div>
          </div>
      `).join("")}
`}


//INSERIR INFOS DO FORMULARIO NO FRONT -------------------//
const botao = document.querySelector(".botaoForm")

botao.addEventListener('click', function(e){
    e.preventDefault();

    bancoDados["empresas"].push({
      "empresa": {
        "id": "",
        "usuarioProprietario": "",
        "nome": document.querySelector(".nomeForm").value,
        "ramo": document.querySelector(".ramoForm").value,
        "servicos": [
          document.querySelector(".servico1Form").value,
          document.querySelector(".servico2Form").value,
          document.querySelector(".servico3Form").value,
        ],
        "endereco": {
          "rua": document.querySelector(".ruaForm").value,
          "cidade": document.querySelector(".cidadeForm").value,
          "estado": document.querySelector(".estadoForm").value,
        },//fim do objeto "endereco"//
        "contato": {
          "telefone": document.querySelector(".telefoneForm").value,
          "celular": document.querySelector(".celularForm").value,
          "email": document.querySelector(".emailForm").value,
        },//fim do objeto "contato"//
        "imgsServicos": [
          document.querySelector(".imagem1Form").value,
          document.querySelector(".imagem2Form").value,
          document.querySelector(".imagem3Form").value,
        ],//fim do array "imagensServicos"
        "indicacoes": "",
      } //fim do objeto "empresa"
    }//fim do objeto novaEmpresa
);
    apresentarEmpresa();
})//fim da function Click botao
