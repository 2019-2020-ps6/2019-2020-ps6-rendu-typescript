const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Answer', {
  type: Joi.boolean(),
  value: Joi.string().required(),
  indixe: Joi.string(),
  isCorrect: Joi.boolean().required(),
  questionId: Joi.number(),
  img: Joi.string(),
})
