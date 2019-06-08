const express = require('express')
const mongoose = require('mongoose')
const users = express.Router()


users.get('/',(req,res,next)=>{
  res.send('aqui las Usuarios')
})

module.exports = users