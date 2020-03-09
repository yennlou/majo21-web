const path = require('path')
const Dotenv = require('dotenv-webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const CommonConfig = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        exclude: /sprite.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /sprite.svg$/,
        use: 'svg-sprite-loader'
      },
      {
        test: /\.png$|\.ico/,
        include: [
          path.resolve(__dirname, 'src/assets')
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}

const NodeEnvMapping = {
  dev: {
    output: {
      path: path.resolve(__dirname, 'dist-dev')
    },
    plugins: [
      new Dotenv({ path: './personal/config/dev.env' })
    ]
  },
  prod: {
    output: {
      path: path.resolve(__dirname, 'dist-prod')
    },
    plugins: [
      new Dotenv({ path: './personal/config/prod.env' })
    ]
  }
}

const ModeMapping = {
  development: {
    plugins: []
  },
  production: {
    plugins: [
      new CompressionPlugin({
        test: /\.js$/,
        algorithm: 'gzip',
        deleteOriginalAssets: true
      })
    ]
  }
}

module.exports = (env, argv) => {
  return merge(NodeEnvMapping[env.NODE_ENV], CommonConfig, ModeMapping[argv.mode])
}
