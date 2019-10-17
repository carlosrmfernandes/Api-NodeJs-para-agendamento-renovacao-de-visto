const Funcionario = require('../models/Funcionario')
var crypto = require('crypto');
module.exports = {
    async update(req, res) {
        const { id } = req.params;
        const { filename } = req.file;
        const { name, email, funcao, sector,senha } = req.body;
        var senha_ = senha;
        var senha_hash = crypto.createHash('md5').update(senha_).digest('hex');
        const funcionario = await Funcionario.updateOne({ _id: id }, {
            img: filename,
            name: name,
            email: email,
            funcao: funcao,
            sector: sector,
            senha_hash:senha_hash
        }, function (err, affected, resp) {

        });
        res.status(200).json({ status: "Success", message: " ", data: funcionario });


    },

    async delete(req, res) {
        const { id } = req.params;
        await Funcionario.deleteOne({ _id: id });
        res.redirect('/funcionario_all');
    },

    async show(req, res) {
        const { funcionario } = req.query;
        const funcionarios = await Funcionario.find({ name: funcionario });
        res.status(200).json({ status: "Success", message: " ", data: funcionarios });

    },

    async index(req, res) {
        const funcionarios = await Funcionario.find();
        res.status(200).json({ status: "Success", message: " ", data: funcionarios });

    },

    async store(req, res) {
        const { filename } = req.file;
        const { name, email, funcao, sector ,senha} = req.body;
        let funcionario = await Funcionario.findOne({ email })
        var senha_ = senha;
        var senha_hash = crypto.createHash('md5').update(senha_).digest('hex');
        if (funcionario) {
            res.status(400).json({ status: "fail", message: "o usuario ja exite", data: null });
        } else {
            funcionario = await Funcionario.create({
                img: filename,
                name,
                email,
                funcao,
                sector,
                senha_hash
            });

        }
        res.status(200).json({ status: "Success", message: " ", data: funcionario });

    }
}