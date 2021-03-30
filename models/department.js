const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Department extends Model { }

Department.init({
  id: DataTypes.INTEGER,
  name: DataTypes.STRING
}, { sequelize, modelName: 'departments' })

module.exports = Department