<template>
  <div class="edit_wrapper">
    <div class="edit_new box enterFromRight">
      <span class="edit_new_field">
        <label for="">Titel</label>
        <input type="text" @change="(e: any) => post.titel = e.target.value" v-model="post.titel">
      </span>
      <span class="edit_new_field">
        <label for="">Content</label>
        <input type="text" @change="(e: any) => post.content = e.target.value" v-model="post.content">
      </span>
      <span class="edit_new_field">
        <label for="">Autor</label>
        <input type="text" @change="(e: any) => post.autor = e.target.value" v-model="post.autor">
      </span>
      <span class="edit_new_field">
        <button @click="clear">Clear</button>
        <button @click="$route.query.id ? patch(Number($route.query.id)) : create()">{{ mainButtonText }}</button>
      </span>
    </div>
    <BlogList class="enterFromRight">
      <template v-slot:edit>
        <p>🖊️</p>
      </template>
      <template v-slot:remove>
        <p>❌</p>
      </template>
    </BlogList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Blog } from "@/models/blog";
import { mapState } from "vuex";
import api from "@/api";
import BlogList from "@/components/BlogList.vue"

export default defineComponent({
  components: {
    BlogList
  },
  data() {
    return {
      post: new Blog(),
      mainButtonText: "Create"
    }
  },
  watch: {
    '$route'(to) {
      if (to.query.id) {
        const blog: Blog = this.blogs.find((b: Blog) => b.id == to.query.id)

        this.post.titel = blog.titel
        this.post.content = blog.content
        this.post.autor = blog.autor
        this.post.date = blog.date
        this.post.id = blog.id

        this.mainButtonText = "Update"
      }
    }
  },
  computed: {
    ...mapState({
      blogs: (state: any) => state.blogs,
    }),
  },
  methods: {
    clear(): void {
      this.mainButtonText = "Create"
      this.post = new Blog();
      this.$router.push("/edit")
    },
    async create(): Promise<void> {
      this.post.id = null
      api.post("posts", this.post)
      // @ts-ignore TS dont know the existense of this method for some reson
      this.$store.commit("fetchBlogList")
    },
    async patch(id: Number): Promise<void> {
      console.log("hi")
      api.patch("posts", id, this.post)
      // @ts-ignore TS dont know the existense of this method for some reson
      this.$store.commit("fetchBlogList")
    },
  },
})
</script>

<style lang="scss">
.edit {
  &_new {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 2rem;

    &_field {
      display: flex;
      width: 100%s;
      justify-content: center;
      gap: 1rem;

      label,
      input,
      button {
        width: 100%;
      }
    }
  }
}
</style>