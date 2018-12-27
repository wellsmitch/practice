const webpack = require('webpack');

module.exports = {
		entry: __dirname + "/src/js/index.js", //入口文件
		output: {
			path: __dirname + "/dist/js", //打包后的文件存放的地方
			filename: "index.js" //打包后输出文件的文件名
		},
		module: {
			rules: [{
					test: /\.css$/, //对css 文件的处理
					use: [{
						loader: "style-loader"
					}, {
						loader: "css-loader"
					}]
				},
				{
					test: /\.scss$/,
					use: [
						"style-loader", // creates style nodes from JS strings
						"css-loader", // translates CSS into CommonJS
						"sass-loader" // compiles Sass to CSS
					]
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				}	

				]
			},
			plugins: [
				new webpack.BannerPlugin('xx公司，xx团队版权所有')
			]
		}