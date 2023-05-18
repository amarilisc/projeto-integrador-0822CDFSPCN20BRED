const { DataTypes } = require('sequelize')

const DbEcommerce = require('../database/DbEcommerce')

const Products = DbEcommerce.define('products', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: DataTypes.DOUBLE,
    image1: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})


module.exports = Products