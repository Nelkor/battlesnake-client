const path = require('path')
const { readdirSync } = require('fs')

const modules = 'src/modules'
const modulesDir = readdirSync(modules)
const resolve = str => path.resolve(__dirname, `./${str}`)
const makeUrl = schema => `${schema}://localhost:3063`

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),

        ...modulesDir.reduce((acc, cur) => {
          acc[`@${cur}`] = resolve(`${modules}/${cur}`)

          return acc
        }, {}),
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    https: true,
    port: 443,
    proxy: {
      '^/api': {
        target: makeUrl('http'),
      },
      '^/realtime-connection': {
        target: makeUrl('ws'),
        ws: true,
      },
    },
  },
}
