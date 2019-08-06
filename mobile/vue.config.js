module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: true,
  devServer: {
    open: false,
    host: 'localhost',
    port: 8082,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3500/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
