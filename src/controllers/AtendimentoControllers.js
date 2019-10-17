const Atendimento = require('../models/Atendimento')
module.exports = {
    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const { filename } = req.file;
        const { funcionario_id } = req.headers;
        const atendimentos = await Atendimento.updateOne({ _id: id }, {
            doc: filename,
            name: name,
            funcionario_id:funcionario_id
        }, function (err, affected, resp) {

        });
        res.status(200).json({ status: "Success", message: " ", data: atendimentos });
    },

    async delete(req, res) {
        const { id } = req.params;
        await Atendimento.deleteOne({ _id: id });
        res.redirect('/atendimento_all');
    },

    async show(req, res) {

        const { estudante } = req.query;
        const atendimentos = await Atendimento.find({ name: estudante });
        res.status(200).json({ status: "Success", message: " ", data: atendimentos });

    },

    async index(req, res) {
        const atendimentos = await Atendimento.find();
        res.status(200).json({ status: "Success", message: " ", data: atendimentos });
    },

    async store(req, res) {
        const { name } = req.body;
        const { filename } = req.file;
        const { funcionario_id } = req.headers;
        const atendimento = await Atendimento.create({
            doc: filename,
            name,
            funcionario_id: funcionario_id  
        });

        res.status(200).json({ status: "Success", message: " ", data: atendimento });

    }
}