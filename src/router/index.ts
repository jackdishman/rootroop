import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/Index.vue'
import Home from '@/pages/Home.vue'
import FAQ from '@/pages/FAQ.vue'
import Philanthropy from '@/pages/Philanthropy.vue'
import Links from '@/pages/Links.vue'
import Bridge from '@/pages/Bridge.vue'

const routes = [
	// {
	// 	path: '*',
	// 	name: 'Index',
	// 	component: Index,
	// 	meta: { title: 'Roo Troop' },
	// },
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
	{
		path: '/faq',
		name: 'FAQ',
		component: FAQ,
		meta: { title: 'FAQ - Roo Troop' },
	},
	{
		path: '/philanthropy',
		name: 'Philanthropy',
		component: Philanthropy,
		meta: { title: 'Philanthropy - Roo Troop' },
	},
	{
		path: '/links',
		name: 'Links',
		component: Links,
		meta: { title: 'Links - Roo Troop' },
	},
	{
		path: '/bridge',
		name: 'Bridge',
		component: Bridge,
		meta: { title: 'Bridge - Roo Troop' },
	},
]

const router = createRouter({
	history: createWebHistory(''),
	routes,
})

export default router
