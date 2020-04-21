const Joi = require('joi')
const BaseModel = require('../utils/base-model')

module.exports = new BaseModel('User', {
  firstname: Joi.string().required(),
  img: Joi.string(),
  lastname: Joi.string(),
  birthday: Joi.string(),
})
