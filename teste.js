const Sequelize = require("sequelize")


const sequelize = new Sequelize({
    storage: './database.sqlite',
    dialect: 'sqlite',
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão realizada com sucesso!!!');
    } catch (error) {
        console.error('Erro na conexão: ', error);
    }
})();