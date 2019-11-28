const mongoose= require('mongoose');

const FuncionarioSchema= new mongoose.Schema({
    img:String,
    name:{
        type: String,
        required: [true, "Campo obrigatório"]
    },
    email:String,
    funcao:String,
    sector:String,
    password:{
        type: String,
        required: [true, "Campo obrigatório"]
    }, 
})
module.exports= mongoose.model('funcionario',FuncionarioSchema);