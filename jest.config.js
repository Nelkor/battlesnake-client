const { resolve } = require('path')
const { readdirSync } = require('fs')

const modules = 'src/modules'
const modulesDir = readdirSync(modules)

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    ...modulesDir.reduce((acc, cur) => {
      acc[`@${cur}/(.*)`] = resolve(__dirname, `${modules}/${cur}/$1`)

      return acc
    }, {}),
  },
}
