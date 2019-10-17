const mongoose= require('mongoose');

const AgendamentoSchema= new mongoose.Schema({
    name:String,
    email:String,
    data_agendamento:String,
    funcionario_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'funcionario'
    }
})
module.exports= mongoose.model('agendamento',AgendamentoSchema);