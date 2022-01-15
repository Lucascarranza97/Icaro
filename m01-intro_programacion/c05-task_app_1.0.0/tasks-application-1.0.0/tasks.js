const findF = require('./funcionalidades/find')
const filterF = require('./funcionalidades/filter')
const editF = require('./funcionalidades/edit')
const listF = require('./funcionalidades/list')
const returnF = require('./funcionalidades/return')

switch (process.argv[2]) {
  case 'find':
    console.log(findF(process.argv[3]))
    break
  case 'filter':
    console.log(filterF(process.argv[3]))
    break
  case 'edit':
    console.log(editF(process.argv[3], process.argv[4]))
    break
  case 'list':
    console.log(listF())
    break
  case 'return':
    console.log(returnF(process.argv[3]))
    break
  default:
    console.log('ocurrio algun error')
    break
}
