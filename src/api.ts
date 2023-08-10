import { Blog } from "@/models/blog";

export default {
	async get<T>(adress: String): Promise<T> {
		const res = await fetch(`${process.env.VUE_APP_HOST}${adress}`, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			method: "GET",
			mode: "cors",
			redirect: "follow",
		});
		return await res.json();
	},
	async post<T>(adress: String, payload: Blog): Promise<T> {
		const res = await fetch(`${process.env.VUE_APP_HOST}${adress}`, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
			method: "POST",
			mode: "cors",
			redirect: "follow",
		});
		return await res.json();
	},
	async patch<T>(adress: String, id: Number, payload: Blog): Promise<T> {
		const res = await fetch(`${process.env.VUE_APP_HOST}${adress}/${id}`, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
			method: "PATCH",
			mode: "cors",
			redirect: "follow",
		});
		return await res.json();
	},
	async delete<T>(adress: String, id: Number): Promise<T> {
		const res = await fetch(`${process.env.VUE_APP_HOST}${adress}/${id}`, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			method: "DELETE",
			mode: "cors",
			redirect: "follow",
		});
		return await res.json();
	},
};
