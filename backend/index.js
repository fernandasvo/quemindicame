// Importa��es------------------------------------
const express = require("express");
//const jwt = require("jsonwebtoken");
//require("dotenv-safe").load();
let mongoose = require('mongoose')
const empresasRoute = require('./empresas/routes.js')
const indicacoesRoute = require('./indicacoes/routes.js')
const usuariosRoute = require('./usuarios/routes.js')
const app = express();


//C�digo-------------------------------------------------

//Criando espa�o e conex�o com BD- MONGOOSE
mongoose.connect("mongodb://localhost:27017/quemindica")
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conex�o."));
db.once("open", function() {
  console.log("Conex�o feita com sucesso.")
});
//FIM - Criando espa�o e conex�o com BD- MONGOOSE


app.use(express.json());
app.use("/api/empresas", empresasRoute);
app.use("/api/indicacoes", indicacoesRoute);
app.use("/api/usuarios", usuariosRoute);





//Porta servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));