// Importa��es------------------------------------
const express = require("express");
const usuarios = require("./usuarios.js");
const router = express.Router();

//C�digo-------------------------------------------------

//CRIAR USUARIO - POST -------------------------------------------------------

//app.post(envio, retorno)
//app.post(envio, (req,res)=>)
//router.post("/", (req,res)=>{})
router.post("/", (req,res) =>{
  let novoUsuario = new usuarios({
    email: req.body.email,
    senha: req.body.senha,
    imgPerfil: req.body.imgPerfil,
    //dataCriacao: "",
    //dataExclusao: ""
  })


novoUsuario.save(error =>{
  if(error){
    res.send(error)
  }
  res.send(novoUsuario)
})

})
//FIM -CRIAR USUARIO - POST----------------------------------------------------

//VISUALIZAR USUARIOS - GET-----------------------------------------------------

//app.get(envio, retorno)
//app.get(envio, (req,res)=>)
//router.get("/", (req,res)=>{})
router.get("/", (req,res)=>{
//  usuarios.find()
    usuarios.find(null, (error, response) => {
      if(error){
        res.send(error)
      }
      res.send(response)
    })
})

//FIM - VISUALIZAR USUARIOS - GET------------------------------------------------

//VISUALIZAR USUARIO ESPECÍFICA - GET POR ID-----------------------------------------------------

//app.get(envio, retorno)
//app.get(envio, (req,res)=>)
//router.get("/", (req,res)=>{})
router.get("/:id", (req,res)=>{
//  usuarios.findById()
  usuarios.findById(
    req.params.id,
    function(error, usuario) {
    if (error) return res.status(error.code).send(error.message);
     res.send(usuario)
   })
  })

//FIM - VISUALIZAR USUARIO ESPECÍFICA- GET POR ID------------------------------------------------

//EDITAR USUARIO - PUT-----------------------------------------------------
//app.put(envio, retorno)
//app.put(envio, (req,res)=>)
//router.put("/", (req,res)=>{})
router.put("/:id", (req,res)=>{
//  usuarios.findByIdAndUpdate()
//  usuarios.findByIdAndUpdate(id enviado na requisição, chave ou objeto que quer alterar,sempre "true", retorno)
//  usuarios.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true}, retorno)
usuarios.findByIdAndUpdate(
  req.params.id,
  {$set:req.body},
  {new:true},
  function(error, usuario) {
  if (error) return res.status(error.code).send(error.message);
   res.send(usuario)
 })
})
//FIM - EDITAR USUARIO - PUT------------------------------------------------

//DELETAR USUARIO - DELETE-----------------------------------------------------
//app.delete(envio, retorno)
//app.delete(envio, (req,res)=>)
//router.delete("/", (req,res)=>{})
router.delete("/:id", (req,res)=>{
//  usuario.findByIdAndDelete()
//  usuario.findByIdAndDelete(id enviado na requisição,sempre "true", retorno)
//  usuario.findByIdAndDelete(req.params.id,retorno)
usuarios.findByIdAndDelete(
  req.params.id,
  function(error, usuario) {
  if (error) return res.status(error.code).send(error.message);
   res.send(usuario)
 })
})

//FIM DELETAR USUARIO - DELETE-----------------------------------------------------





//EXPORTS
module.exports = router;
