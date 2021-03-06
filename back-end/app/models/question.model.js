const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  label: Joi.string().required(),
  img: Joi.string(),
  date: Joi.string(),
  quizId: Joi.number(),
})
