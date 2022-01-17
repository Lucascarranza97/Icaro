const fs = require('fs')
const getTasks = require('./read')
const writeJson = require('./writeJson')

module.exports = (title, desc) => {
  let tasks = getTasks()
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      tasks[i].desc = desc
      console.log('Tarea editada con exito')
      writeJson(tasks)
      return
    }
  }
  console.log('No se pudo encontrar la tarea')
}
