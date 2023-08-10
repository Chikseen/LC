<template>
  <BlogList class="enterFromLeft"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogList from "@/components/BlogList.vue"

export default defineComponent({
  components: {
    BlogList
  }
})
</script>