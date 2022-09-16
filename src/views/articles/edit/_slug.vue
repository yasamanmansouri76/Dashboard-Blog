<template>
  <b-row class="h-100 p-3 flex-column">
    <h1 class="mb-3">Edit Article</h1>
    <post-form :loading-btn="isLoadingEdit" @submit="handleSubmit" />
  </b-row>
</template>

<script>
import indexLayout from "@/layouts/index.vue";
import postForm from "@/components/posts/post-form.vue";

export default {
  name: "EditArticlesView",
  data() {
    return {
      isLoadingEdit: false,
    };
  },
  components: {
    postForm,
  },
  methods: {
    handleSubmit() {
      console.log("handleSubmit");
    },
  },
  created() {
    this.$emit("update:layout", indexLayout);
  },
};
</script>
