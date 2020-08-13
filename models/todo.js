const seqlib = require('sequelize')
const sequelize = require('../database')

const todo = sequelize.define('Todo',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: seqlib.INTEGER
    },
    done:{
        type: seqlib.BOOLEAN,
        allowNull: false
    },
    title:{
        type: seqlib.STRING,
        allowNull: false
    }
})

module.exports = todo