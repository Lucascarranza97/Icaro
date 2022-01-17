const tasks = require('../tasksData')

module.exports = editF = (title, desc) => {
  let task
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      task = tasks[i]
      task.desc = desc
      return task
    }
  }
  return 'tarea no encontrada'
}
