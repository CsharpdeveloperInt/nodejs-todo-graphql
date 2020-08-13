const config = require('./config/key')
const Sequelize = require('sequelize')

//Подключаем соединение с БД
const sequelize = new Sequelize(config.MYSQL_DB,config.MYSQL_LOGIN,config.MYSQL_PASSWORD,{
    host: config.MYSQL_HOST,
    dialect: 'mysql',
    port: '3306'
})

module.exports = sequelize