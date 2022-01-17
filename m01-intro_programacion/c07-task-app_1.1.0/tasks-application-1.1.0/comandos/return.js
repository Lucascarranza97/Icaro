const tasks = require('../tasksData')
const findF = require('./find')

module.exports = returnF = (title) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) return tasks[i].desc
  }
  return 'tarea no encontrada'
}
