var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	devServer: {
		inline: true,
		contentBase: './dist'
	},
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.ProvidePlugin({
		    expect: 'expect',
		    deepFreeze: 'deep-freeze'
		})
	]
};