<template>
  <b-row class="h-100 p-3 flex-column">
    <h1 class="mb-3">New Article</h1>
    <post-form />
  </b-row>
</template>

<script>
import indexLayout from "@/layouts/index.vue";
import postForm from "@/components/posts/post-form.vue";

export default {
  name: "AddArticleView",
  components: {
    postForm,
  },
  created() {
    this.$emit("update:layout", indexLayout);
  },
};
</script>
