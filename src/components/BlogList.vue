<template>
	<TransitionGroup name="listAnimation" tag="div" class="list_wrapper" v-if="blogs.length > 0">
		<div v-for="(blog, i) in blogs" :key="blog.id" class="list">
			<h2>{{ blog.titel }}</h2>
			<div class="list_content box">
				<p>{{ blog.content }}</p>
				<span class="list_content_footer">
					<h6 v-if="blog.autor.length > 0">Autor: {{ blog.autor }}</h6>
					<h6>{{ convert(blog.date) }}</h6>
				</span>
				<span class="list_content_icons">
					<span @click="edit(blog.id)">
						<slot name="edit"></slot>
					</span>
					<span @click="remove(blog.id)">
						<slot name="remove"></slot>
					</span>
				</span>
			</div>
		</div>
	</TransitionGroup>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { Dates } from "@/models/dates"
import api from "@/api";

export default defineComponent({
	computed: {
		...mapState({
			blogs: (state: any) => state.blogs,
		}),
	},
	methods: {
		convert(date: Date): String {
			return Dates.convert(date)
		},
		edit(id: Number) {
			// @ts-ignore TS dont know the existense of this method for some reson
			this.$router.push(`/edit?id=${id}`)
		},
		async remove(id: Number) {
			await api.delete("posts", id)
			// @ts-ignore TS dont know the existense of this method for some reson
			this.$store.commit("fetchBlogList")
		}
	},
	async mounted() {
		// @ts-ignore TS dont know the existense of this method for some reson
		this.$store.commit("fetchBlogList")
	},
})
</script>
  
<style lang="scss">
.list {
	padding: 1rem;
	position: relative;

	&_wrapper {
		position: relative;
		height: 100px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1rem;
	}

	&_content {
		&_footer {
			display: flex;
			justify-content: flex-end;
			flex-wrap: wrap;
			gap: 1rem;

			h6 {
				margin: 0;
			}
		}

		&_icons {
			display: flex;
			justify-content: center;
			gap: 1rem;

			span {
				cursor: pointer;
			}
		}
	}

	h2 {
		margin-bottom: 0.25rem;
	}
}

.listAnimation-move,
.listAnimation-enter-active,
.listAnimation-leave-active {
	transition: all 0.5s ease;
}

.listAnimation-enter-from,
.listAnimation-leave-to {
	transform: translateX(150%);
}

.listAnimation-leave-active {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
</style>