const Joi = require('joi');
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  photo :{
    type:String
  },
  description:{
    type:String,
    maxlength:255
  },
  price : {
    type: Number
  }
});


const Products = mongoose.model('Products', productSchema);

function validateProducts(products) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(products, schema);
}

exports.Products = Products; 
exports.validate = validateProducts;