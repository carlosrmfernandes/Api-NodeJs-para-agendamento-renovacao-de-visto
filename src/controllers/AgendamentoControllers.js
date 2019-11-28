const Agendamento = require('../models/Agendamento')
module.exports = {
    async update(req, res) {
        const { id } = req.params;
        const { name, email, data_agendamento } = req.body;
        const { funcionario_id } = req.headers;
        const agendamentos = await Agendamento.updateOne({ _id: id }, {
            name: name,
            email: email,
            data_agendamento: data_agendamento,
            funcionario_id:funcionario_id
        }, function (err, affected, resp) {

        });
        res.status(200).json({ status: "Success", message: " ", data: agendamentos });
    },

    async delete(req, res) {
        const { id } = req.params;
        await Agendamento.deleteOne({ _id: id });
        res.status(200).json({ status: "Success", message: "Agendamento Removido com sucesso " });
    },

    async show(req, res) {
        // const { agendamento } = req.query;
        // const agendamentos = await Agendamento.find({ name: agendamento });
        const { id } = req.params;
        const agendamentos = await Agendamento.find({ _id: id });
        res.status(200).json({ status: "Success", message: " ", data: agendamentos });

    },

    async index(req, res) {
        const agendamentos = await Agendamento.find();
        res.status(200).json({ status: "Success", message: " ", data: agendamentos });
    },

    async store(req, res) {

        const { name, email, data_agendamento } = req.body;
        const { funcionario_id } = req.headers;
        
        let agendamento = await Agendamento.findOne({ email })

        if (agendamento) {
            res.status(400).json({ status: "fail", message: "Agendamento ja foi feito", data: null });
        } else {
            agendamento = await Agendamento.create({
                name,
                email,
                data_agendamento,
                funcionario_id: funcionario_id
            });

        }
        res.status(200).json({ status: "Success", message: " ", data: agendamento });

    }
}