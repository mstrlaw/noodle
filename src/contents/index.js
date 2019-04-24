const indexContent = `import '@/config.js'\n\nimport express from 'express'\nimport cors from 'cors'\nimport bodyParser from 'body-parser'\n\nconst app = express()\n\nvar port = 8181\n\napp.use(cors())\n\n// Parse application/x-www-form-urlencoded\napp.use(bodyParser.urlencoded({ extended: false }))\n\n// Parse application/json\napp.use(bodyParser.json())\n\nlet serverInstance = require('http').createServer(app)\n\nserverInstance.listen(port)\n\nconsole.log('\\n[SRVR] ✔ OK: Server Running')`

module.exports = indexContent
