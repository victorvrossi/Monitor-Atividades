const Projeto = require('../model/Projetos');

module.exports = {
    async store( req , res ){
        const { titulo , sigla } = req.body;
        const projeto = await Projeto.create({titulo,sigla});
        return res.json(projeto);
    }
}