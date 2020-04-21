const { User } = require('../../models')
const { filterScoresFromUser } = require('./scores/manager')

/**
 * Function buildQuizz.
 * This function aggregates the scores and answers from the database to build a quizz with all the data needed by the clients.
 * @param quizId
 */
const buildUser = (userId) => {
  const user = User.getById(userId)
  const scores = filterScoresFromUser(user.id)
  return { ...user, scores }
}

/**
 * Function buildQuizzes.
 * This function aggregates the scores and answers from the database to build entire quizzes.
 */
const buildUsers = () => {
  const users = User.get()
  return users.map((user) => buildUser(user.id))
}

module.exports = {
  buildUser,
  buildUsers,
}
