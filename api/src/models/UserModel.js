const { DataTypes } = require('sequelize')

const DbEcommerce = require('../database/DbEcommerce')


const User = DbEcommerce.define('user', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User