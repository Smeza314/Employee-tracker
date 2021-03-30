const router = require('express').Router()
const { Role } = require('../models')
const { prompt } = require('inquirer')
require('console.table')

// GET all Roles
router.get('/roles', (req, res) => {
  Role.findAll({})
    .then(roles => res.json(roles))
    .catch(err => console.log(err))
})

// GET one Role
router.get('/roles/:id', (req, res) => {
  Role.findOne({ where: { id: req.params.id } })
    .then(role => res.json(role))
    .catch(err => console.log(err))
})

// POST one role
router.post('/roles', (req, res) => {
  Role.create(req.body)
    .then(role => res.json(role))
    .catch(err => console.log(err))
})

// PUT one role
router.put('/roles/:id', (req, res) => {
  Role.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one Role
router.delete('/roles/:id', (req, res) => {
  Role.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
