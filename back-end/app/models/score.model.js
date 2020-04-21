const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Score', {
  value: Joi.string().required(),
  date: Joi.string().required(),
  userId: Joi.number(),
})
