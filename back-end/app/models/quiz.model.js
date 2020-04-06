const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  theme: Joi.string().required(),
  name: Joi.string().required(),
  img: Joi.string().required(),
  themeColor: Joi.string().required(),
  date: Joi.string().required(),
  description: Joi.string().required(),
})
