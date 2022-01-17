const fs = require('fs')

module.exports = (data) => {
  fs.writeFileSync('./tasksData.json', JSON.stringify(data, null, 2))
}
