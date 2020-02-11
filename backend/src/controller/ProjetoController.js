const Projeto = require('../model/Projetos');

module.exports = {
    async store( req , res ){
        const { titulo , sigla } = req.body;
        const projeto = await Projeto.create({titulo,sigla});
        return res.json(projeto);
    },
    async index( req , res ){        
        const projeto = await Projeto.findAll();
        return res.json(projeto);
    },
    async remove( req , res ){
        const { titulo , sigla } = req.body;
        const projeto = await Projeto.destroy({
            where:{
                titulo,
                sigla,
            }

        });
        return res.json(projeto);
    }
}