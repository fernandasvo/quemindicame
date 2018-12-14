// Importa��es------------------------------------
const express = require("express");
//const jwt = require("jsonwebtoken");
//require("dotenv-safe").load();
let mongoose = require('mongoose');
const empresasRoute = require('./empresas/routes.js');
const indicacoesRoute = require('./indicacoes/routes.js');
const usuariosRoute = require('./usuarios/routes.js');
const app = express();


const http = require('http');
const https = require('https')


//C�digo-------------------------------------------------

//Criando espa�o e conex�o com BD- MONGOOSE
mongoose.connect("mongodb+srv://fernandasvo:pecompe63649090@quemindicame-mrgyu.mongodb.net/test?retryWrites=true");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conex�o."));
db.once("open", function () {
    console.log("Conex�o feita com sucesso.")
});
//FIM - Criando espa�o e conex�o com BD- MONGOOSE

// habilitando acesso pedido pelo front ao Servidor
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
});
//--------------------------------------------------------------------------

//Criando rotas da aplicação
app.use(express.json());
app.use("/api/empresas", empresasRoute);
app.use("/api/indicacoes", indicacoesRoute);
app.use("/api/usuarios", usuariosRoute);


const PORT = process.env.PORT || 5000;
http.createServer({},app).listen(PORT,() => console.log(`PORT :: ${PORT}`));
https.createServer(app).listen(433,() => console.log('PORT :: 433'));

//Porta servidor

