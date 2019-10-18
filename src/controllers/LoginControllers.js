const Funcionario = require('../models/Funcionario')
var crypto = require('crypto');
module.exports = {

    async login(req, res) {

        const { email, senha } = req.body;

        let funcionario = await Funcionario.findOne({ email })

        if (!funcionario) {
            res.status(404).json({ status: "fail", message: "Funcionario nao exist", data: null });
        }

        var senha_ = senha;
        var senha_hash = crypto.createHash('md5').update(senha_).digest('hex');

        if (funcionario.password != senha_hash) {

            res.status(500).json({ status: "Erro", message: "Usuario ou senha incorreta", data: null });
        }
        res.status(200).json({ status: "Success", message: " ", data: funcionario });


    }
}