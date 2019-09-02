var proEnv = require('./config/pro.env')
var devEnv = require('./config/dev.env')
const env = process.env.NODE_ENV
let target = ''
if (env === 'production') {
  target = proEnv.hostUrl
} else {
  target = devEnv.hostUrl
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: true,
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8082,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: target,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
