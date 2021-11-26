const config = {
  plugins: [
    require('precss'),
    require('postcss-easy-import'),
    require('postcss-mixins'),
    require('postcss-inline-svg'),
    require('postcss-color-function'),
    require('autoprefixer'),
    require('postcss-automath'),
    require('postcss-hexrgba'),
    require('postcss-extend'),
    require('postcss-each')
  ]
}

module.exports = config
