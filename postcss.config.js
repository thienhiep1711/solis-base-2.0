const target = process.env.npm_lifecycle_event
const isProductionMode = target === 'build'

const config = {
  plugins: [
    require('./postcss-tasks/postcss-module-import'),
    require('precss')({
      // Disable warning "used without a fallback"
      'properties': { warnings: false }
    }),
    require('postcss-mixins'),
    require('postcss-inline-svg'),
    require('postcss-color-function'),
    require('autoprefixer'),
    require('postcss-automath'),
    require('postcss-hexrgba'),
    require('postcss-extend'),
    require('postcss-each'),
    require('postcss-critical-split')({
      'output': isProductionMode ? 'rest' : 'input'
    }),
    ...(isProductionMode
        ? [
          require('cssnano')({
            autoprefixer: false,
            zindex: false
          })
        ]
        : [
        ]
    )
  ]
}

module.exports = config
