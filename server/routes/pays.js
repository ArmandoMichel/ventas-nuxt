const express = require('express')
const mongoose = require('mongoose')
const pays = express.Router()


pays.get('/',(req,res,next)=>{
  res.send('aqui las Pagos')
})

module.exports = pays