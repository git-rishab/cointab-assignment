const { sequelize } = require('../config/db');
const { Sequelize } = require("sequelize");

const user = sequelize.define('users', {
    name:{
        type:Sequelize.STRING
    },
    gender:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.INTEGER
    },
    phone:{
        type:Sequelize.STRING
    },
    username:{
        type:Sequelize.STRING
    },
    address:{
        type:Sequelize.STRING
    }
})

module.exports = {
    user
}