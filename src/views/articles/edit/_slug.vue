<template>
  <b-row class="h-100 p-3 flex-column">
    <h1 class="mb-3">Edit Article</h1>
    <div v-if="isLoadingArticle" class="text-center">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>
    <post-form
      v-else
      :loading-btn="isLoadingEdit"
      :article="article"
      @submit="handleSubmit"
    />
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
import indexLayout from "@/layouts/index.vue";
import postForm from "@/components/posts/post-form.vue";

export default {
  name: "EditArticlesView",
  data() {
    return {
      isLoadingEdit: false,
      slug: this.$route.params.slug,
      article: {},
      isLoadingArticle: false,
    };
  },
  components: {
    postForm,
  },
  methods: {
    ...mapActions({
      getArticleDetails: "articles/getArticleDetails",
      editArticle: "articles/editArticle",
    }),
    loadArticleDetails() {
      this.isLoadingArticle = true;
      this.getArticleDetails(this.slug).then((response) => {
        this.article = response.article;
        this.isLoadingArticle = false;
      });
    },
    handleSubmit(post) {
      this.isLoadingArticle = true;
      const payload = {
        article: post,
        slug: this.slug,
      };
      this.editArticle(payload).then(() => {
        this.showAlert({
          type: "success",
          title: "Well done!",
          message: "Article updated successfuly",
        });
        this.$router.push({ name: "articles" });
        this.isLoadingArticle = false;
      });
    },
  },
  created() {
    this.$emit("update:layout", indexLayout);
    this.loadArticleDetails();
  },
};
</script>
