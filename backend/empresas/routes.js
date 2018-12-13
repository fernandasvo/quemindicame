// Importa��es------------------------------------
const express = require("express");
const empresas = require("./empresas.js");
const router = express.Router();

//C�digo-------------------------------------------------

//CRIAR EMPRESA - POST -------------------------------------------------------

//app.post(envio, retorno)
//app.post(envio, (req,res)=>)
//router.post("/", (req,res)=>{})
router.post("/", (req,res) =>{
  let novaEmpresa = new empresas({
   idUsuarioProprietario: req.body.idUsuarioProprietario,
 	 nomeEmpresa: req.body.nomeEmpresa,
   ramo: req.body.ramo,
   servicos: req.body.servicos,
   descricao:req.body.descricao,
   rua: req.body.rua,
   cidade: req.body.cidade,
   estado: req.body.estado,
   telefone: req.body.telefone,
   celular: req.body.celular,
 	 email: req.body.email,
 	 imgsServicos: req.body.imgsServicos,
   //dataCriacao: req.body.dataCriacao,
 	 //dataExclusao: req.body.dataExclusao,
  })


novaEmpresa.save(error =>{
  if(error){
    res.send(error)
  }
  res.send(novaEmpresa)
})

})
//FIM -CRIAR EMPRESA - POST----------------------------------------------------

//VISUALIZAR EMPRESAS - GET-----------------------------------------------------

//app.get(envio, retorno)
//app.get(envio, (req,res)=>)
//router.get("/", (req,res)=>{})
router.get("/", (req,res)=>{
//  empresas.find()
    empresas.find(null, (error, response) => {
      if(error){
        res.send(error)
      }
      res.send(response)
    })
})

//FIM - VISUALIZAR EMPRESAS - GET------------------------------------------------

//VISUALIZAR EMPRESA ESPECÍFICA - GET POR ID-----------------------------------------------------

//app.get(envio, retorno)
//app.get(envio, (req,res)=>)
//router.get("/", (req,res)=>{})
router.get("/:id", (req,res)=>{

//  empresas.findById()
  empresas.findById(
    req.params.id,
    function(error, empresa) {
    if (error){
     return res.status(500).send("como vc eh burro cara");
    }
     res.send(empresa)
   })
  })

//FIM - VISUALIZAR EMPRESA ESPECÍFICA- GET POR ID------------------------------------------------

//EDITAR EMPRESA - PUT-----------------------------------------------------
//app.put(envio, retorno)
//app.put(envio, (req,res)=>)
//router.put("/", (req,res)=>{})
router.put("/:id", (req,res)=>{
//  empresas.findByIdAndUpdate()
//  empresas.findByIdAndUpdate(id enviado na requisição, chave ou objeto que quer alterar,sempre "true", retorno)
//  empresas.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true}, retorno)
empresas.findByIdAndUpdate(
  req.params.id,
  {$set:req.body},
  {new:true},
  function(error, empresa) {
  if (error) return res.status(error.code).send(error.message);
   res.send(empresa)
 })
})
//FIM - EDITAR EMPRESA - PUT------------------------------------------------

//DELETAR EMPRESA - DELETE-----------------------------------------------------
//app.delete(envio, retorno)
//app.delete(envio, (req,res)=>)
//router.delete("/", (req,res)=>{})
router.delete("/:id", (req,res)=>{
//  empresas.findByIdAndDelete()
//  empresas.findByIdAndDelete(id enviado na requisição,sempre "true", retorno)
//  empresas.findByIdAndDelete(req.params.id,retorno)
empresas.findByIdAndDelete(
  req.params.id,
  function(error, empresa) {
  if (error) return res.status(error.code).send(error.message);
   res.send(empresa)
 })
})

//FIM DELETAR EMPRESA - DELETE-----------------------------------------------------





//EXPORTS
module.exports = router;
