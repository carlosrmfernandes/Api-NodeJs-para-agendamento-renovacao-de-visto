const Estudante = require('../models/Estudante')
module.exports = {
    async update(req, res) {
        const { id } = req.params;
        const { name, email, entry_date, university } = req.body;
        const { filename } = req.file;
            const estuantes = await Estudante.updateOne({ _id: id }, {
                img: filename,
                name: name,
                email: email,
                entry_date: entry_date,
                university: university,
            }, function (err, affected, resp) {

            });
            res.status(200).json({ status: "Success", message: " ", data: estuantes });
    },

    async delete(req, res) {
        const { id } = req.params;
        await Estudante.deleteOne({ _id: id });
        res.redirect('/estudantes_all');
    },

    async show(req, res) {

        const { estuante } = req.query;
        const estuantes = await Estudante.find({ name: estuante });
        res.status(200).json({ status: "Success", message: " ", data: estuantes });

    },

    async index(req, res) {
        const estuantes = await Estudante.find();
        res.status(200).json({ status: "Success", message: " ", data: estuantes });
    },

    async store(req, res) {
        const { filename } = req.file;
        const { name, email, entry_date, university } = req.body;
        let estuante = await Estudante.findOne({ email })

        if (estuante) {
            res.status(400).json({ status: "fail", message: "o estudante ja exite", data: null });
        } else {
            estuante = await Estudante.create({
                img: filename,
                name,
                email,
                entry_date,
                university
            });

        }
        res.status(200).json({ status: "Success", message: " ", data: estuante });

    }
}