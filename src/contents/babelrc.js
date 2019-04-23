const babelrcContent = `{\n"presets": [\n\t[\n\t\t"env",\n\t\t{\n\t\t\t\t"targets": {\n\t\t\t\t\t"node": "current"\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t],\n\t"plugins": [\n\t\t["babel-plugin-root-import", {\n\t\t\t"rootPathPrefix": "@",\n\t\t\t"rootPathSuffix": "./lib"\n\t\t}]\n\t]\n}`

module.exports = babelrcContent
