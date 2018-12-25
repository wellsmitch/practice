 1 var path = require('path')
 2 
 3 module.exports = {
 4   build: { // production 环境
 5     env: require('./prod.env'), // 使用 config/prod.env.js 中定义的编译环境
 6     index: path.resolve(__dirname, '../dist/index.html'), // 编译输入的 index.html 文件
 7     assetsRoot: path.resolve(__dirname, '../dist'), // 编译输出的静态资源路径
 8     assetsSubDirectory: 'static', // 编译输出的二级目录
 9     assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
10     productionSourceMap: true, // 是否开启 cssSourceMap
11     // Gzip off by default as many popular static hosts such as
12     // Surge or Netlify already gzip all static assets for you.
13     // Before setting to `true`, make sure to:
14     // npm install --save-dev compression-webpack-plugin
15     productionGzip: false, // 是否开启 gzip
16     productionGzipExtensions: ['js', 'css'] // 需要使用 gzip 压缩的文件扩展名
17   },
18   dev: { // dev 环境
19     env: require('./dev.env'), // 使用 config/dev.env.js 中定义的编译环境
20     port: 8080, // 运行测试页面的端口
21     assetsSubDirectory: 'static', // 编译输出的二级目录
22     assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
23     proxyTable: {}, // 需要 proxyTable 代理的接口（可跨域）
24     // CSS Sourcemaps off by default because relative paths are "buggy"
25     // with this option, according to the CSS-Loader README
26     // (https://github.com/webpack/css-loader#sourcemaps)
27     // In our experience, they generally work as expected,
28     // just be aware of this issue when enabling this option.
29     cssSourceMap: false // 是否开启 cssSourceMap
30   }
31 }