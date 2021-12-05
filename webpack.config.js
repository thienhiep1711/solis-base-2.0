const path = require('path')
const fs = require('fs')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require("terser-webpack-plugin")

const ROOT = path.resolve(__dirname)
const ASSETS_DIR = path.join(ROOT, 'assets')
const SRC_DIR = path.join(ROOT, 'src')
const SCRIPTS_DIR = path.join(SRC_DIR, 'scripts')
const STYLES_DIR = path.join(SRC_DIR, 'styles')
const SCRIPT_ENTRIES_DIR = path.join(SCRIPTS_DIR, 'entries')
const VENDORS_DIR = path.join(ROOT, 'node_modules')

const entry = {}

const isHiddenFile = (name) => /(^|\/)\.[^/.]/g.test(name)

const getEntry = (dir = SCRIPT_ENTRIES_DIR) => {
  const isMainEntry = dir === SCRIPT_ENTRIES_DIR
  const scanDir = isMainEntry ? dir : path.join(SCRIPT_ENTRIES_DIR, dir)
  fs.readdirSync(scanDir, { withFileTypes: true }).forEach(
    file => {
      if (file.isFile()) {
        // main entries
        const fileName = file.name
        if (!isHiddenFile(fileName)) {
          const name = path.parse(fileName).name
          entry[`${isMainEntry ? '' : `${dir}-`}${name}`] = [path.join(scanDir, fileName)]
        }
      } else {
        getEntry(file.name)
      }
    }
  )
  return entry
}

module.exports = env => {
  const target = process.env.npm_lifecycle_event
  const isProductionMode = target === 'build'
  const mode = isProductionMode ? 'production' : 'development'
  const devtool = isProductionMode ? 'cheap-module-source-map' : 'eval-cheap-module-source-map'
  const minimize = Boolean(isProductionMode)

  return {
    mode,
    devtool,
    entry: getEntry(),
    ignoreWarnings: [
      {
        // Hide warning from postcss loader
        module: /node_modules\/postcss-loader\/lib\/index.js/,
      },
      (warning) => true,
    ],
    output: {
      filename: `[name].js?v=${Date.now()}`,
      path: ASSETS_DIR
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: VENDORS_DIR,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            hotReload: false
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader?importLoaders=1',
            'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      ...(isProductionMode
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
              generateStatsFile: isProductionMode
            })
          ]
        : [
          ]
      )
    ],
    resolve: {
      alias: {
        '@': SCRIPTS_DIR,
        styles: STYLES_DIR,
        'lib': path.resolve(__dirname, 'src/scripts/lib'),
        'modules': path.resolve(__dirname, 'src/scripts/modules'),
        'mixins': path.resolve(__dirname, 'src/scripts/mixins'),
        'root': path.resolve(__dirname, 'src/scripts'),
        'vue': isProductionMode ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
      }
    },
    optimization: {
      minimize,
      // disable .LICENSE.txt file
      minimizer: [
        (compiler) => {
          new TerserPlugin({
            terserOptions: {
              format: {
                comments: false
              }
            },
            extractComments: false
          }).apply(compiler);
        }
      ],
      runtimeChunk: 'single',
      splitChunks: {
        minSize: 0,
        cacheGroups: {
          commons: {
            chunks: 'all',
            name: 'commons',
            test: /\/node_modules\/|lib\//,
            filename: '[name].js',
            priority: 0,
            reuseExistingChunk: true
          }
        }
      }
    }
  }
}
