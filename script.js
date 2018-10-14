window.onload = function (){
  apresentarEmpresa();
}

function apresentarEmpresa(){
  for (empresa of bancoDados["empresas"]){

    var empresaDiv = document.getElementById("cardsEmpresa");
    empresaDiv.innerHTML +=

"<div class= 'cardEmpresa'>"

      +"<div class='conteudoCard'>"

        +"<div class='imagensEmpresa'>"
          + "<img src="
          + empresa["empresa"]["imgsServicos"][0]
          + "/>"
        +"</div>" //fim da div ImagensEmpresa

        +"<div class='infosEmpresa'>"
          + "<div class='ramoEmpresa'>"
          + empresa["empresa"]["ramo"]
          + "</div>"// fim da div RamoEmpresa
          + "<div class='nomeEmpresa'>"
          + empresa["empresa"]["nome"]
          + "</div>" // fim da div NomeEmpresa
          + "<div class='servicosEmpresa'>"
          + empresa["empresa"]["servicos"][0] + ", "
          + empresa["empresa"]["servicos"][1] + ", "
          + empresa["empresa"]["servicos"][2]
          + "</div>" //fim da divServicosEmpresa
          + "<div class='enderecoEmpresa'>"
          + empresa["empresa"]["endereco"]["cidade"]
          + ", "
          + empresa["empresa"]["endereco"]["estado"]
          + "</div>"
        +"</div>" // fim da div InfosEmpresa

        +"<div class='indicacoesEmpresa'>"
          + "<div class='numeroIndicacoes'>"
          + empresa["empresa"]["indicacoes"]
          + "</div>" //fim da div numeroIndicacoes
          + "<div class='termoIndicadoes'>"
          + "indicações"
          + "</div>" // fim da div termoIndicacoes

        +"</div>" // fim da div IndicacoesEmpresa

      +"</div>"//fim da div ConteudoCard

+ "</div>" //fim da div cardEmpresa

  } // fim do for
} // fim da Function ApresentarEmpresa
