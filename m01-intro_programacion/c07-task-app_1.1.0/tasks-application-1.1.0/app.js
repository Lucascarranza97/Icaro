const getTasks = require('./CRUD/read')
const addTask = require('./CRUD/create')
const editTask = require('./CRUD/update')
const deleteTask = require('./CRUD/delete')

switch (process.argv[2]) {
  case 'list':
    console.log(getTasks())
    break
  case 'add':
    addTask(process.argv[3], process.argv[4])
    break
  case 'edit':
    editTask(process.argv[3], process.argv[4])
    break
  case 'delete':
    deleteTask(process.argv[3])
    break
  default:
    'Ingrese un comando valido'
    break
}
