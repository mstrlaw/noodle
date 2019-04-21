module.exports = buildReadme = (name) => {
  return `# ${ name }\n\n## Project setup\n\`\`\`\nnpm i\n\`\`\`\n### Run with nodemon (hot-reload) & lint on save (development)\n\`\`\`\nnpm run start\n\`\`\`\n### Compiles and minifies for production\n\`\`\`\nnpm run build\n\`\`\`\n### Run tests\n\`\`\`\nnpm run test\n\`\`\`\n### Linting\n\`\`\`\nnpm run lint\n\`\`\``
}
