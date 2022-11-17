const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // // 开始代理服务器（方式二）
  // devServer: {
  //   proxy: {
  //     '/tmd': {
  //       target: 'http://localhost:5000/',
  //       pathRewrite:{'^/tmd':''},
  //       ws: true,//用于支持websocket
  //       changeOrigin: true//用于控制请求头中的host值,true会变成5001，否则8080
  //     },
  //     '/nmd': {
  //       target: 'http://localhost:5001/',
  //       pathRewrite:{'^/nmd':''},
  //       ws: true,//用于支持websocket
  //       changeOrigin: true//用于控制请求头中的host值,true会变成5001，否则8080
  //     },
  //   }
  // }
})
