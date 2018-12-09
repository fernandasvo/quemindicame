// JavaScript source code
var mongoose = require("mongoose");
var Schema = mongoose.Schema

let EmpresaSchema = new Schema (
   {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
	 idUsuarioProprietario: { type: String },
	 nomeEmpresa: { type: String },
   ramo: { type: String },
   servicos: { type: String },
   rua: { type: String },
   cidade: { type: String },
   estado: { type: String },
   telefone: { type: String },
   celular: { type: String },
	 email: { type: String },
	 imgsServicos:{ type: String },
   //dataCriacao: { type: Date },,
	 //dataExclusao: { type: Date },,
    },
	{collection: "empresas",
	versionKey: false}
	)

	let empresas = mongoose.model("empresas", EmpresaSchema)
	module.exports = empresas;
