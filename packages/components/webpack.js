const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	target: 'browserslist',
	externalsPresets: { node: true },
	externals: [ nodeExternals({
		additionalModuleDirs: [ '../../node_modules' ]
	})],

	mode: 'production',

	module: {
		rules: [
			{ enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
			{
				test: /\.(scss|css)$/,
				type: 'asset/resource',
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				}
			},
			{
				test: /\.(png|jpg|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
						cacheCompression: false,
						envName: "production",
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		],
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename:'main.js',
		libraryTarget: 'commonjs2'
	},

	performance: {
		hints: false
	},

	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: 'css/[name].[contenthash].css',
			chunkFilename: 'css/[id].[contenthash].css',
		}),
	],

	resolve: {
		extensions: ['.jsx', '.js']
	}
};
