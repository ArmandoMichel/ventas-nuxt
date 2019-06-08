const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isGold: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  photo :{
    type:String
  },
  email :{
    type: String,
    required:true,
    unique:true
  },
  password:{
    type: String,
    required : true,
    minlength:8,
    maxlength:1024
  }
}));

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;