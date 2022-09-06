import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/Index.vue'
import Home from '@/pages/Home.vue'
import Partners from '@/pages/Partners.vue'
import FAQ from '@/pages/FAQ.vue'
import Philanthropy from '@/pages/Philanthropy.vue'
import Links from '@/pages/Links.vue'
import Jobs from '@/pages/Jobs.vue'

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
		path: '/partners',
		name: 'Partners',
		component: Partners,
		meta: { title: 'Partners - Roo Troop' },
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
		path: '/jobs',
		name: 'Jobs',
		component: Jobs,
		meta: { title: 'Jobs - Roo Troop' },
	},
]

const router = createRouter({
	history: createWebHistory(''),
	routes,
})

export default router
