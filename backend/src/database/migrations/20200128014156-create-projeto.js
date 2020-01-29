'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projetos', 
      { 
        id: {
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull:false
        },
        sigla: {
          type: Sequelize.STRING,
          allowNull:false
        },  
        created_at:{
          type: Sequelize.DATE,
          allowNull:false
        },
        updated_at :{
          type: Sequelize.DATE,
          allowNull:false
        }

      }
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projetos');
  }
};
