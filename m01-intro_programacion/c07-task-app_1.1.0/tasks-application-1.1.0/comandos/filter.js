const tasks = require('../tasksData')

module.exports = filterF = (title) => {
  let filteredTasks = []
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title.includes(title)) filteredTasks.push(tasks[i])
  }
  return filteredTasks
}
