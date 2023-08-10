import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BlogView from "../views/BlogView.vue";
import EditView from "../views/EditView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "blog",
		component: BlogView,
	},
	{
		path: "/edit",
		name: "edit",
		component: EditView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
