const LevantarDoc = require('../models/LevantarDoc')
module.exports = {
    async update(req, res) {
        const { id } = req.params;
        const { rne, data_levantamento } = req.body;
        const { funcionario_id } = req.headers;
        const levantarDocs = await LevantarDoc.updateOne({ _id: id }, {
            rne: rne,
            data_levantamento: data_levantamento,
            funcionario_id: funcionario_id
        }, function (err, affected, resp) {

        });
        res.status(200).json({ status: "Success", message: " ", data: levantarDocs });
    },

    async delete(req, res) {
        const { id } = req.params;
        await LevantarDoc.deleteOne({ _id: id });
        res.status(200).json({ status: "Success", message: "Levantamento Removido com sucesso " });
    },

    async show(req, res) {
        // const { rne } = req.query;
        const { id } = req.params;
        const levantarDocs = await LevantarDoc.find({ _id: id });
        res.status(200).json({ status: "Success", message: " ", data: levantarDocs });

    },

    async index(req, res) {
        const levantarDocs = await LevantarDoc.find();
        res.status(200).json({ status: "Success", message: " ", data: levantarDocs });
    },

    async store(req, res) {

        const { rne, data_levantamento } = req.body;
        const { funcionario_id } = req.headers;

        levantarDocs = await LevantarDoc.create({
            rne,
            data_levantamento,
            funcionario_id: funcionario_id
        });
        res.status(200).json({ status: "Success", message: " ", data: levantarDocs });

    }
}