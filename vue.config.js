const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
	devServer: {
		port: 4000,
	},
	transpileDependencies: true,
	configureWebpack: {
		plugins: [
			new NodePolyfillPlugin(),
			new webpack.ProvidePlugin({
				Buffer: ['buffer', 'Buffer'],
			}),
		],
		resolve: {
			extensions: ['.ts', '.js'],
			fallback: {
				buffer: require.resolve('buffer'),
				path: require.resolve('path-browserify'),
				util: require.resolve('util'),
			},
		},
	},
})
