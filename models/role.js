const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Role extends Model { }

Role.init({
  id: DataTypes.STRING,
  title: DataTypes.STRING,
  salary: DataTypes.DECIMAL,
  departmentId: DataTypes.INTEGER
}, { sequelize, modelName: 'roles' })

module.exports = Role
