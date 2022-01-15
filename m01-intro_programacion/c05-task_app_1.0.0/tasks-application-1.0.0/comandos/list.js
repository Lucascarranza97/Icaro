const tasks = require('../tasksData')

module.exports = listF = () => {
  let list = []
  for (let i = 0; i < tasks.length; i++) {
    list.push(tasks[i].title)
  }
  return list
}
