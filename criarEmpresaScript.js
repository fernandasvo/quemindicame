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
