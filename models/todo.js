const seqlib = require('sequelize')
const sequelize = require('../database')
const { strictRight } = require('sequelize/types/lib/operators')

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
    },
    date:{
        type: seqlib.DATE,
        allowNull: false
    }
})

module.exports = todo