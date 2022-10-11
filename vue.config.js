const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
require = require('esm')(module)

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
	pluginOptions: {
		sitemap: {
			urls: [
				'https://test.rootroop.com/',
				'https://test.rootroop.com/home',
				'https://test.rootroop.com/partners',
				'https://test.rootroop.com/faq',
				'https://test.rootroop.com/philanthropy',
				'https://test.rootroop.com/links',
				'https://test.rootroop.com/jobs',
			],
		},
	},
})
