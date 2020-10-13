const path = require('path')
module.exports = {
  // 基础路径
  base: '/blog/',
  title: 'VuePress Demo',
  description: 'Just playing around',
  head: [
    // 注意指定public的路径
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  markdown: {
    anchor: {
      permalinkSymbol: '📌'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@vp': path.resolve(__dirname, './')
      }
    }
  }
}
