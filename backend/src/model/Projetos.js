const { Model, DataTypes } = require('sequelize');

class Projetos extends Model {
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING,
            sigla: DataTypes.STRING,
        },{
            sequelize
        });
    }
}

module.exports = Projetos;