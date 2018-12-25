var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
module.exports = {
    // 配置在.vue文件中的css相关处理规则
  loaders: utils.cssLoaders({
    // 根据所处环境是否生成sourceMap用于代码调试
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
      // 是否将单独的css文件（一般为引入的外部文件）进行提取单独打包
    extract: isProduction
  })
}

作者：大铁棍子医院丶捅主任
链接：https://www.jianshu.com/p/3ed39c987976
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。