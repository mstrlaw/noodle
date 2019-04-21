const eslintContent = `module.exports = {\n\troot: true,\n\tenv: {\n\t\tnode: true\n\t},\n\textends: 'eslint:recommended',\n\tparser: 'babel-eslint',\n\trules: {\n\t\t'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',\n\t\t'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',\n\t\t'quotes': [ 'error', 'single' ],\n\t\t'semi': [2, 'never']\n\t}\n}`

module.exports = eslintContent
