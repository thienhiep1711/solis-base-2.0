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

fs.readdirSync(SCRIPT_ENTRIES_DIR).forEach(
  file => {
    if (!/(^|\/)\.[^/.]/g.test(file)) {
      const name = path.parse(file).name
      entry[name] = [path.join(SCRIPT_ENTRIES_DIR, file)]
    }
  }
)

module.exports = env => {
  const mode = env.production ? 'production' : 'development'
  const devtool = env.production ? 'cheap-module-source-map' : 'eval-cheap-module-source-map'
  const minimize = Boolean(env.production)

  return {
    mode,
    devtool,
    entry,
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
      new MiniCssExtractPlugin({ filename: '[name].css' }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        generateStatsFile: env.production
      })
    ],
    resolve: {
      alias: {
        '@': SCRIPTS_DIR,
        styles: STYLES_DIR,
        'lib': path.resolve(__dirname, 'src/scripts/lib'),
        'modules': path.resolve(__dirname, 'src/scripts/modules'),
        'mixins': path.resolve(__dirname, 'src/scripts/mixins'),
        'root': path.resolve(__dirname, 'src/scripts'),
        'vue': env.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
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
      splitChunks: {
        minSize: 0,
        cacheGroups: {
          vendors: {
            chunks: 'all',
            name (module, chunks, cacheGroupKey) {
              const allChunksNames = chunks.map((item) => item.name).filter(v => v).join('@')
              return `${cacheGroupKey}@${allChunksNames}`
            },
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
