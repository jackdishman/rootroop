import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/Index.vue'
import Home from '@/pages/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
		meta: { title: 'Roo Troop' },
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: { title: 'Home - Roo Troop' },
	},
]

const router = createRouter({
	history: createWebHistory(''),
	routes,
})

export default router
