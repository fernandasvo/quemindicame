
// Importa��es------------------------------------
const express = require("express");
const indicacoes = require("./indicacoes.js");
const router = express.Router();

//C�digo-------------------------------------------------

//CRIAR INDICACAO - POST -------------------------------------------------------

//app.post(envio, retorno)
//app.post(envio, (req,res)=>)
//router.post("/", (req,res)=>{})
router.post("/", (req,res) =>{
  let novaIndicacao = new indicacoes({
    idUsuarioIndicador: req.body.idUsuarioIndicador,
    texto: req.body.texto,
    idEmpresa: req.body.idEmpresa,
    //dataCriacao: "",
    //dataExclusao: ""
  })


novaIndicacao.save(error =>{
  if(error){
    res.send(error)
  }
  res.send(novaIndicacao)
})

})
//FIM -CRIAR INDICACAO - POST----------------------------------------------------

//VISUALIZAR INDICACOES - GET-----------------------------------------------------

//app.get(envio, retorno)
//app.get(envio, (req,res)=>)
//router.get("/", (req,res)=>{})
router.get("/", (req,res)=>{
//  indicacoes.find()
    indicacoes.find(null, (error, response) => {
      if(error){
        res.send(error)
      }
      res.send(response)
    })
})

//FIM - VISUALIZAR INDICAÇÕES - GET------------------------------------------------

//VISUALIZAR EMPRESA ESPECÍFICA - GET POR ID-----------------------------------------------------

//app.get(envio, retorno)
//app.get(envio, (req,res)=>)
//router.get("/", (req,res)=>{})
router.get("/:id", (req,res)=>{
//  indicacoes.findById()
  indicacoes.findById(
    req.params.id,
    function(error, indicacao) {
    if (error) return res.status(error.code).send(error.message);
     res.send(indicacao)
   })
  })

//FIM - VISUALIZAR INDICACAO ESPECÍFICA- GET POR ID------------------------------------------------

//EDITAR INDICACAO - PUT-----------------------------------------------------
//app.put(envio, retorno)
//app.put(envio, (req,res)=>)
//router.put("/", (req,res)=>{})
router.put("/:id", (req,res)=>{
//  indicacoes.findByIdAndUpdate()
//  indicacoes.findByIdAndUpdate(id enviado na requisição, chave ou objeto que quer alterar,sempre "true", retorno)
//  indicacoes.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true}, retorno)
indicacoes.findByIdAndUpdate(
  req.params.id,
  {$set:req.body},
  {new:true},
  function(error, indicacao) {
  if (error) return res.status(error.code).send(error.message);
   res.send(indicacao)
 })
})
//FIM - EDITAR INDICACAO - PUT------------------------------------------------

//DELETAR INDICACAO - DELETE-----------------------------------------------------
//app.delete(envio, retorno)
//app.delete(envio, (req,res)=>)
//router.delete("/", (req,res)=>{})
router.delete("/:id", (req,res)=>{
//  indicacao.findByIdAndDelete()
//  indicacao.findByIdAndDelete(id enviado na requisição,sempre "true", retorno)
//  indicacao.findByIdAndDelete(req.params.id,retorno)
indicacoes.findByIdAndDelete(
  req.params.id,
  function(error, indicacao) {
  if (error) return res.status(error.code).send(error.message);
   res.send(indicacao)
 })
})

//FIM DELETAR INDICACAO - DELETE-----------------------------------------------------





//EXPORTS
module.exports = router;
