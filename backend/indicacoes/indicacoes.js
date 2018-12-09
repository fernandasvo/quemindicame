// JavaScript source code
var mongoose = require("mongoose");
var Schema = mongoose.Schema

let IndicacaoSchema = new Schema (

   {
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
      idUsuarioIndicador: { type: String },
      texto: { type: String },
      idEmpresa: { type: String },
      //dataCriacao: "",
      //dataExclusao: ""
    },
	{collection: "indicacoes",
	versionKey: false}

	)

	let indicacoes = mongoose.model("indicacoes", IndicacaoSchema)
	module.exports = indicacoes;
