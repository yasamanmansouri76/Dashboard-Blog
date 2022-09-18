<template>
  <b-row class="h-100 p-3 flex-column">
    <h1 class="mb-3">New Article</h1>
    <post-form :loading-btn="isLoadingAdd" @submit="handleSubmit" />
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
import indexLayout from "@/layouts/index.vue";
import postForm from "@/components/posts/post-form.vue";

export default {
  name: "AddArticleView",
  data() {
    return {
      isLoadingAdd: false,
    };
  },
  components: {
    postForm,
  },
  methods: {
    ...mapActions({
      addArticle: "articles/addArticle",
    }),
    handleSubmit(post) {
      this.isLoadingAdd = true;
      this.addArticle(post).then(() => {
        this.showAlert({
          type: "success",
          title: "Well done!",
          message: "Article created successfuly",
        });
        this.$router.push({ path: "/articles" });
        this.isLoadingAdd = false;
      });
    },
  },
  created() {
    this.$emit("update:layout", indexLayout);
  },
};
</script>
