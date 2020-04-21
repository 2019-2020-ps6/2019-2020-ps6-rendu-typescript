const { Router } = require('express')

const { User, Score } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')
const { filterScoresFromUser, getScoreFromUser } = require('./manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    // Check if quizId exists, if not it will throw a NotFoundError
    User.getById(req.params.userId)
    res.status(200).json(filterScoresFromUser(req.params.userId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:scoreId', (req, res) => {
  try {
    const score = getScoreFromUser(req.params.userId, req.params.scoreId)
    res.status(200).json(score)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    // Check if quizId exists, if not it will throw a NotFoundError
    User.getById(req.params.userId)
    const userId = parseInt(req.params.userId, 10)
    const score = Score.create({
      value: req.body.value, date: req.body.date, userId,
    })
    res.status(201).json(score)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:scoreId', (req, res) => {
  try {
    const score = getScoreFromUser(req.params.userId, req.params.scoreId)
    const updatedScore = Score.update(req.params.questionId, { value: req.body.value, userId: score.userId })
    res.status(200).json(updatedScore)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:scoreId', (req, res) => {
  try {
    // Check if the question id exists & if the question has the same quizId as the one provided in the url.
    getScoreFromUser(req.params.userId, req.params.scoreId)
    Score.delete(req.params.scoreId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
