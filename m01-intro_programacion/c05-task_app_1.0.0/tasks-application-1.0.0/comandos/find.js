const tasks = require('../tasksData')

module.exports = findF = (title) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) return true
  }
  return false
}
