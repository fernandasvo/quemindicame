document.querySelector(".nomeEmpresa").innerHTML +=
bancoDados["empresas"][0]["empresa"]["nome"];

document.querySelector(".servicosEmpresa").innerHTML +=
bancoDados["empresas"][0]["empresa"]["servicos"];

document.querySelector(".imagensServicos").innerHTML +=
"<div class='imagem1Empresa'>"
  + "<img class='imgEmpresa' src="
  + bancoDados["empresas"][0]["empresa"]["imgsServicos"][0]
  + "/>"

document.querySelector(".indicacoesEmpresa").innerHTML +=
bancoDados["empresas"][0]["empresa"]["indicacoes"];

document.querySelector(".endereco").innerHTML +=
bancoDados["empresas"][0]["empresa"]["endereco"]["rua"];
bancoDados["empresas"][0]["empresa"]["endereco"]["cidade"];
bancoDados["empresas"][0]["empresa"]["endereco"]["estado"];

document.querySelector(".telefone").innerHTML +=
bancoDados["empresas"][0]["empresa"]["contato"]["telefone"];

document.querySelector(".celular").innerHTML +=
bancoDados["empresas"][0]["empresa"]["contato"]["celular"];

document.querySelector(".email").innerHTML +=
bancoDados["empresas"][0]["empresa"]["contato"]["email"];
