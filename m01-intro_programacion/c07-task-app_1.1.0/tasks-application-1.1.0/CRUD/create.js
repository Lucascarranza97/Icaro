const fs = require('fs')
const getTasks = require('./read')
const writeJson = require('./writeJson')

module.exports = (title, desc) => {
  let tasks = getTasks()
  tasks.push({ title, desc })
  writeJson(tasks)
  console.log('Tarea agregada con exito')
}
