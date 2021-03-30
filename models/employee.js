const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Employee extends Model { }

Employee.init({
  id: DataTypes.INTEGER,
  first_name: DataTypes.STRING,
  last_name: DataTypes.DECIMAL,
  role_id: DataTypes.INTEGER,
  manager_id: DataTypes.INTEGER
}, { sequelize, modelName: 'employees' })

module.exports = Employee
