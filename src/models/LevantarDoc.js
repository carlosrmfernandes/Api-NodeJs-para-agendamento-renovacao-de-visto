const mongoose= require('mongoose');

const LevantarDocSchema= new mongoose.Schema({
    rne:String,
    data_levantamento:String,
    funcionario_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'funcionario'
    }
})
module.exports= mongoose.model('levantar_docs',LevantarDocSchema);