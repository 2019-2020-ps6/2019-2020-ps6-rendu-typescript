const { User, Score } = require('../../../models')

/**
 * Questions Manager.
 * This file contains all the logic needed to by the question routes.
 */

/**
 * filterQuestionsFromQuizz.
 * This function filters among the scores to return only the question linked with the given quizId.
 * @param userId
 */
const filterScoresFromUser = (userId) => {
  const scores = Score.get()
  const parsedId = parseInt(userId, 10)
  return scores.filter((score) => score.userId === parsedId)
}

/**
 * getQuestionFromQuiz.
 * This function retrieves a question from a quiz. It will throw a not found exception if the quizId in the question is different from the one provided in parameter.
 * @param userId
 * @param scoreId
 */
const getScoreFromUser = (userId, scoreId) => {
  // Check if quizId exists, if not it will throw a NotFoundError
  const user = User.getById(userId)
  const userIdInt = parseInt(userId, 10)
  const score = Score.getById(scoreId)
  if (score.userId !== userIdInt) throw new NotFoundError(`${score.name} id=${scoreId} was not found for ${user.name} id=${user.id} : not found`)
  return score
}

module.exports = {
  filterScoresFromUser,
  getScoreFromUser,
}
