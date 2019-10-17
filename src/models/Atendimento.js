const mongoose = require('mongoose');

const AtendimentoSchema = new mongoose.Schema({
    name: String,
    doc: String,
    funcionario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'funcionario'
    }
})
module.exports = mongoose.model('atendimentos', AtendimentoSchema);