const express = require('express')
const mongoose = require('mongoose')
const categories = express.Router()


categories.get('/',(req,res,next)=>{
  res.send('aqui las categorias')
})

module.exports = categories