const express = require('express')
const mongoose = require('mongoose')
const products = express.Router()


products.get('/',(req,res,next)=>{
  res.send('aqui las Productos')
})

module.exports = products