import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/Index.vue'

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
		meta: { title: 'Roo Troop' },
	},
]

const router = createRouter({
	history: createWebHistory(''),
	routes,
})

export default router
