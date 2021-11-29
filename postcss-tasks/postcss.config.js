// This file is used specifically for the deferred style-build. You shouldn't
// need to edit this file unless making changes to that build process.
// Please see the README in theme root for more details.
const append = [
  require('postcss-critical-split')({
    output: 'critical'
  }),
  require('cssnano'),
  require('./postcss-shopify-css-vars')({
    vars: '../assets/settings.css.liquid'
  })
]
const path = require('path')
const config = require(path.join(process.cwd(), 'postcss.config.js'))

for (var i = 0; i < append.length; i++) {
  config.plugins.push(append[i])
}

module.exports = config
