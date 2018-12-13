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
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    //imgPerfil: req.body.imgPerfil,
    //dataCriacao: "",
    //dataExclusao: ""
  })


  try {
    validatesRequest(req.body);

    novoUsuario.save(err => {
      if (err) {
        res.send(err);
      }

      res.send(novoUsuario);
    });
  } catch(e) {
    res.status(e.code).send(e.message);
  }
});

//FIM -CRIAR USUARIO - POST----------------------------------------------------

//VISUALIZAR USUARIOS - GET-----------------------------------------------------

//app.get(envio, retorno)
//app.get(envio, (req,res)=>)
//router.get("/", (req,res)=>{})
router.get('/', (req, res) => {
  try {
    const token = req.headers['x-access-token'];
    let decodedId;

    if (!token) {
      throw new TokenError('Sem permissão.', 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError('Falha ao autenticar token.', 500);
      }

      decodedId = decoded.id;
    });

    hasPermission(decodedId);
    res.send(usuarios);
  } catch(e) {
    res.status(e.code).send(e.message);
  }
});

//FIM - VISUALIZAR USUARIOS - GET------------------------------------------------

//VISUALIZAR USUARIO ESPECÍFICA - GET POR ID-----------------------------------------------------

//app.get(envio, retorno)
//app.get(envio, (req,res)=>)
//router.get("/", (req,res)=>{})
router.get('/:id', (req, res) => {
  try {
    const usuario = findUser(req.params.id);
    const token = req.headers['x-access-token'];
    let decodedId;

    if (!token) {
      throw new TokenError('Sem permissão.', 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError('Falha ao autenticar token.', 500);
      }

      decodedId = decoded.id;
    });

    hasPermission(decodedId);
    res.send(usuario);
  } catch(e) {
    res.status(e.code).send(e.message);
  }
});
//FIM - VISUALIZAR USUARIO ESPECÍFICA- GET POR ID------------------------------------------------

//EDITAR USUARIO - PUT-----------------------------------------------------
//app.put(envio, retorno)
//app.put(envio, (req,res)=>)
//router.put("/", (req,res)=>{})
router.put('/:id', (req, res) => {
  try {
    const token = req.headers['x-access-token'];
    const usuario = findUser(req.params.id);
    let decodedId;

    if (!token) {
      throw new TokenError('Sem permissão.', 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError('Falha ao autenticar token.', 500);
      }

      decodedId = decoded.id;
    });

    hasPermission(decodedId);
    validatesRequest(req.body);
    Object.assign(usuario, req.body);
    res.send(usuario);
  } catch(e) {
    res.status(e.code).send(e.message);
  }
});
//FIM - EDITAR USUARIO - PUT------------------------------------------------

//DELETAR USUARIO - DELETE-----------------------------------------------------
//app.delete(envio, retorno)
//app.delete(envio, (req,res)=>)
//router.delete("/", (req,res)=>{})
router.delete('/:id', (req, res) => {
  try {
    const token = req.headers['x-access-token'];
    const usuario = findUser(req.params.id);
    const index = usuarios.indexOf(usuario);
    let decodedId;

    if (!token) {
      throw new TokenError('Sem permissão.', 500);
    }

    jwt.verify(token, process.env.SECRET, function(error, decoded) {
      if (error) {
        throw new TokenError('Falha ao autenticar token.', 500);
      }

      decodedId = decoded.id;
    });

    hasPermission(decodedId);
    validateToken(token);
    usuarios.splice(index, 1);
    res.send(usuario);
  } catch(e) {
    res.status(e.code).send(e.message);
  }
});

//FIM DELETAR USUARIO - DELETE-----------------------------------------------------

//FUNCOES PARA USUARIO-------------------------------------------------------------

function findUser(id) {
  const foundUser = usuarios.find(usuario => usuario.id === parseInt(id));

  if (!foundUser) {
    throw new UserError(`Não foi possível encontrar o usuário de ID ${id}.`, 400);
  }

  return foundUser;
}

function validatesRequest(params) {
  const schema = {
    nome: Joi.string().min(2).required(),
    email: Joi.string().required(),
    senha: Joi.string().min(3).required(),
  }
  const validation = Joi.validate(params, schema);

  if (validation.error) {
    throw new UserError(validation.error.details[0].message, 404);
  }
}

function UserError(message, code) {
  this.message = message;
  this.code = code;
};

function TokenError(message, code) {
  this.message = message;
  this.code = code;
};

function hasPermission(userId) {
  const usuario = findUser(userId);

  if (!usuario.roles.includes('')) {
    throw new UserError('Usuário sem permissão.', 500);
  }

  return true;
}


//EXPORTS
module.exports = router;
