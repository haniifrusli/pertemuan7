const express = require('express')
const router = express.Router()

// Model
const {Admins} = require('../models/admin')

router.post('/register', async function (req, res) {
  try {
    var query = {
      username: req.body.username,
      password: req.body.password,
      name: req.body.name
    }

    var admin = new Admins(query)
    await admin.save()

    res.send('Register succeed')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router