const { resolve } = require('path')

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '@net/(.*)': resolve(__dirname, 'src/modules/net/$1'),
    '@auth/(.*)': resolve(__dirname, 'src/modules/auth/$1'),
  },
}
