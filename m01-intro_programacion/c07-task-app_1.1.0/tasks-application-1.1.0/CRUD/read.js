const fs = require('fs')

module.exports = () => {
  return JSON.parse(fs.readFileSync('./tasksData.json', 'utf-8'))
}
