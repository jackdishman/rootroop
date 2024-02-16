import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		createHtmlPlugin({
			minify: true,
			inject: {
				data: {
					title: 'Roo Troop',
				},
			},
			template: 'public/index.html',
			entry: '../src/main.ts',
		}),
	],
	resolve: {
		alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
	},
	server: {
		port: 4000,
	},
})
