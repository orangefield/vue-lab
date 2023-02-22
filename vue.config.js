const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8081'  // 백엔드 서버 CORS 정책 해결
  } 
})
