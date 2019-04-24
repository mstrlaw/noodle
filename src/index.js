/*
  Poorly done. Will redo when time permits.
*/
const {Command, flags} = require('@oclif/command')
var fs = require('fs')

const eslintContent = require('./contents/eslint.js')
const buildPackageContent = require('./contents/packageContent.js')
const editorConfig = require('./contents/editorconfig.js')
const indexContent = require('./contents/index.js')
const buildReadme = require('./contents/readme.js')
const gitignoreContent = require('./contents/gitignore.js')
const babelrcContent = require('./contents/babelrc.js')
const configContent = require('./contents/configContent.js')

class NoodleCommand extends Command {
  async run() {
    const {flags} = this.parse(NoodleCommand)

    const name = flags.name || 'new_project'

    // Create project directory
    var dir = `./${ name }`

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir)
      fs.mkdirSync(`${ dir }/lib`)
    }

    // Create package.json
    fs.appendFile(`${ dir }/package.json`, buildPackageContent(name), function (err) {
      console.log('✔ Created package.json')
    })

    // Create .env
    fs.appendFile(`${ dir }/.env`, 'NODE_ENV=development', function (err) {
      console.log('✔ Created .env')
    })

    // Create .eslintrc.js
    fs.appendFile(`${ dir }/.eslintrc.js`, eslintContent, function (err) {
      console.log('✔ Created .eslintrc.js')
    })

    // Create .editorconfig
    fs.appendFile(`${ dir }/.editorconfig`, editorConfig, function (err) {
      console.log('✔ Created .editorconfig')
    })

    // Create lib/index.js
    fs.appendFile(`${ dir }/lib/index.js`, indexContent, function (err) {
      console.log('✔ Created /lib/index.js')
    })

    // Create lib/config.js
    fs.appendFile(`${ dir }/lib/config.js`, configContent, function (err) {
      console.log('✔ Created /lib/config.js')
    })

    // Create .gitignore
    fs.appendFile(`${ dir }/.gitignore`, gitignoreContent, function (err) {
      console.log('✔ Created .gitignore')
    })

    // Create .babelrc
    fs.appendFile(`${ dir }/.babelrc`, babelrcContent, function (err) {
      console.log('✔ Created .babelrc')
    })

    // Create README.md
    fs.appendFile(`${ dir }/README.md`, buildReadme(name), function (err) {
      console.log('✔ Created README.md')
    })
  }
}

NoodleCommand.description = `A CLI tool to scaffold a Node.js project (WIP)
...
Something I use to speed up development of Node.js projects with my usual setup.
`

NoodleCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'project name (given to folder & package name)'}),
}

module.exports = NoodleCommand
