

// 引入当前目录中的utils工具配置文件
// 请自行查看我博客中的utils.js的相关文章
var utils = require('./utils')
// 引入webpack来使用webpack内置插件
var webpack = require('webpack')
// 引入config目录中的index.js配置文件
var config = require('../config')
// 引入webpack-merge插件用来合并webpack配置对象，也就是说可以把webpack配置文件拆分成几个小的模块，然后合并
var merge = require('webpack-merge')
// 引入当前目录下的webpack.base.conf.js配置文件，主要配置的是打包各种文件类型的配置
// 请自行查看我博客的相关文章
var baseWebpackConfig = require('./webpack.base.conf')
// 下面是一个自动生成html的插件，能够把资源自动加载到html文件中
// 详情请看 (1)
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 下面这个插件是用来把webpack的错误和日志收集起来，漂亮的展示给用户
// 详情请看 (2)
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
// Object.keys(obj) 是取对象的索引，并放在一个数组里面的方法
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    // 下面这个结果就是把webpack.base.conf.js中的入口entry改成如下配置
    // app: ['./build/dev-client','./src/main.js']
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
// 下面是合并配置对象，将这个配置文件特有的配置添加替换到base配置文件中
module.exports = merge(baseWebpackConfig, {
    module: {
        // 下面是把utils配置中的处理css类似文件的处理方法拿过来，并且不生成cssMap文件
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // cheap-module-eval-source-map is faster for development
    // debtool是开发工具选项，用来指定如何生成sourcemap文件，cheap-module-eval-source-map此款soucemap文件性价比最高
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        // DefinePlugin内置webpack插件，专门用来定义全局变量的，下面定义一个全局变量 process.env 并且值是如下
        /*  'process.env': {
                NODE_ENV: '"development"'
            } 这样的形式会被自动转为
            'process.env': '"development"' 
            各位骚年看好了，development如果不加双引号就当做变量处理，程序会报错
        */
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        // 下面这个插件HotModuleReplacementPlugin可以说是博大精深没有几个人弄透的，包括我在内，
        // 详情见(3)
        new webpack.HotModuleReplacementPlugin(),
        // 下面这个插件比较简单，就是当webpack编译错误的时候，来中端打包进程，防止错误代码打包到文件中，你还不知道
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        // 下面这个插件介绍过了
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true  -> 设置为true表示把所有的js文件都放在body标签的屁股
        }),
        // 使用FriendlyErrorsPlugin插件，介绍过了，这个插件的其他细节还设置在dev-server-js文件中
        new FriendlyErrorsPlugin()
    ]
})




//解释
//(1)html-webpack-plugin插件是用来生成html文件的，有很灵活的配置项，下面是基本的一些用法
//plugins: [
//  new HtmlWebpackPlugin(), // Generates default index.html 
//  new HtmlWebpackPlugin({  // Also generate a test.html 
//    filename: 'test.html', // 生成的文件的名称
//    title: 'Custom template', // 文件的标题
//    template: 'my-index.ejs' //可以指定模块html文件
//  })
//]
//下面是模板文件my-index.ejs的内容 
//<!DOCTYPE html>
//<html>
//<head>
//  <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
//  <title><%= htmlWebpackPlugin.options.title %></title> //这里使用特殊的表示插入配置项的title
//</head>
//<body>
//</body>
//</html>
//(2)friendly-errors-webpack-plugin插件，把webpack编译出来的错误展示给我们，方便调试
// 安装 npm install friendly-errors-webpack-plugin --save-dev
// 基本使用 
// plugins: [
//     new FriendlyErrorsWebpackPlugin(),
// ]
// 注意点，使用这个插件要遵守下点
//     您需要关闭所有的错误日志记录，将webpack配置静默选项设置为true
//     也就是遵循以下三点即可
//     在使用webpack-dev-middleware插件，关于这个插件的解释在我的dev-sever-js配置文件中有解释，设置以下内容
//      app.use(require('webpack-dev-middleware')(compiler, {
//          quiet: true, // 必须设置
//          publicPath: config.output.publicPath,
//      }));
//     使用webpack-dev-server时设置如下
//     {
//         devServer: {
//             quiet: true
//         }
//     }
//     使用webpack-hot-middleware中间件，关于这个插件的解释也在我的dev-server-js文章中
//      app.use(require('webpack-hot-middleware')(compiler, {
//          log: () => {}
//      }));
//  做到以上几点，就可以正常使用这个插件了，这个插件还有一些配置项，感兴趣自行了解
//(3) HotModuleReplacementPlugin解释如下
//  老哥们知道什么是webpack模块不
//  webpack支持如下模块
//      CoffeeScript
//      TypeScript
//      ESNext (Babel)
//      Sass
//      Less
//      Stylus
//  这些模块支持如下导入的方式
//      ES2015 import 语句
//      CommonJS require() 语句
//      AMD define 和 require 语句
//      css/sass/less 文件中的 @import 语句。
//      样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)
//  看到了把，webpack就是这么强大，几乎囊括了前端所有的东西
//  这个插件的作用就是当你的程序在运行时，而你现在要替换、添加或删除某个模块，又不想重新加载页面，
//  这个插件帮助你实现无刷新加载，关于内部实现原理，其实有点意思，各位请自行查看