const mongoose= require('mongoose');

const EstudanteSchema= new mongoose.Schema({
    img:String,
    name:String,
    email:String,
    entry_date:Date,
    university:String, 
})
module.exports= mongoose.model('estudante',EstudanteSchema);