const mongoose= require('mongoose');

const AgendamentoSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "obrigatonjsbfks"]
    },
    email:String,
    data_agendamento:String,
    funcionario_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'funcionario'
    }
})
module.exports= mongoose.model('agendamento',AgendamentoSchema);