import { createWebHistory, createRouter } from "vue-router"
import Index from "../pages/Index.vue"

const routes = [
	{
		path: "/",
		name: "Index",
		component: Index,
		meta: { requiresAuth: true, title: "Author dashboard - Blogchain" },
	},
]

const router = createRouter({
	history: createWebHistory(""),
	routes,
})

export default router
