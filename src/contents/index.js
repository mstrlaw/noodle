const indexContent = `require('dotenv').config()\n\nconst express = require('express')\n\nconst app = express()\nconst cors = require('cors')\nconst bodyParser = require('body-parser')\n\nvar port = 8181\napp.use(cors())\n// Parse application/x-www-form-urlencoded\napp.use(bodyParser.urlencoded({ extended: false }))\n\n// Parse application/json\napp.use(bodyParser.json())\n\nlet serverInstance = require('http').createServer(app)\n\nserverInstance.listen(port)\n\nconsole.log('\\n[SRVR] ✔ OK: Server Running')`

module.exports = indexContent
