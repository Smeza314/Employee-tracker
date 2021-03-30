const express = require('express')
const { join } = require('path')
const sequelize = require('./db')
const { prompt } = require('inquirer')
require('console.table')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

const start = () => {
  prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What Would You Like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Department', 'Update Role', 'Update Employee', 'Exit']
    }
  ])
    .then (({choice}) => {
      switch (choice) {
        case 'View All Departments':

          break
        case 'View All Roels':

          break
        case 'View All Employees':

          break
        case 'Add Department':

          break
        case 'Add Role':

          break
        case 'Add Employee':

          break
        case 'Update Department':

          break
        case 'Update Role':

          break
        case 'Update Employee':
          
          break
        case 'Exit':
          process.exit()
      }
    })
}

sequelize.sync()
  // sequelize.sync({ force: true })
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))