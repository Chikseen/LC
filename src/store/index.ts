import api from "@/api";
import { BlogList } from "@/models/blog/blogList";
import { createStore } from "vuex";

export default createStore({
	state: {
		blogs: new BlogList(),
	},
	getters: {},
	mutations: {
		setBlogList(state: any, payload: BlogList): void {
			state.blogs = payload;
		},
		async fetchBlogList(state: any): Promise<void> {
			state.blogs = await api.get<BlogList>("posts?_sort=date&_order=desc");
		},
	},
	actions: {},
	modules: {},
});
