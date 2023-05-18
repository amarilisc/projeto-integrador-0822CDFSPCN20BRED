require('dotenv').config()

const { Sequelize } = require('sequelize')

const DbEcommerce = new Sequelize(
    process.env.DB_NOME,
    process.env.DB_USUARIO,
    process.env.DB_SENHA,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
)

module.exports = DbEcommerce