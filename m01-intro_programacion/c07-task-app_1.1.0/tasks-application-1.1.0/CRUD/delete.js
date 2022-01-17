const fs = require('fs')
const getTasks = require('./read')
const writeJson = require('./writeJson')

module.exports = (title) => {
  let tasks = getTasks()
  let itemToRemove
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      itemToRemove = i
      tasks.splice(itemToRemove, 1)
      writeJson(tasks)
      console.log('Tarea eliminada con exito')
      return
    }
  }
  console.log('No se pudo encontrar la tarea')
}
