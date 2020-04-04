//const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')
module.exports = {
	devtool: 'inline-sourcemap',
	context: __dirname,
	entry: [__dirname + '/src/_js/index.js', __dirname + '/src/_css/index.css'],
	output: {
		path: __dirname + '/public/',
		publicPath: '/',
		filename: 'app.js',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.(png|jpg|svg)$/,
				include: path.join(__dirname, '/images'),
				loader: 'url-loader?limit=30000&name=images/[name].[ext]',
			},
			{
				test: /.css$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: { importLoaders: 1 },
						},
						'postcss-loader',
					],
				}),
			},
		],
	},
	plugins: [
		new StyleLintPlugin({
			configFile: '.stylelintrc', // if your config is in a non-standard place
			files: 'src/**/*.css', // location of your CSS files
			fix: true, // if you want to auto-fix some of the basic rules
		}),
		new ExtractTextPlugin('[name].css'),
	],
}
