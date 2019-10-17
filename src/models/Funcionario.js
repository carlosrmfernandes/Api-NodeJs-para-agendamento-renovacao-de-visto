const mongoose= require('mongoose');

const FuncionarioSchema= new mongoose.Schema({
    img:String,
    name:String,
    email:String,
    funcao:String,
    sector:String,
    senha_hash:String, 
})
module.exports= mongoose.model('funcionario',FuncionarioSchema);