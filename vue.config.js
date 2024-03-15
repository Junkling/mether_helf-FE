// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
      proxy: {
      '/api': {
         target: 'http://34.47.73.241',
        //  target: 'http://localhost:8080/',
        //  changeOrigin: true,
        //  pathRewrite:{
        //   '^/':''
        //  }
      }
    }
  }
}