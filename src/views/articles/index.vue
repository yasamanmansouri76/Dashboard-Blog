<template>
  <b-col lg="12" class="h-100 p-3 post-list-view">
    <h1 class="mb-3">All Posts</h1>
    <div v-if="isLoadingPage" class="text-center">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>
    <div v-else class="table-container">
      <posts-list
        :posts="posts"
        :is-loading="isLoadingPosts"
        :fields="fields"
        class="mb-3"
        @setItem="setDeletingItem"
      />
      <b-pagination-nav
        v-if="posts.lenght > 0"
        :link-gen="linkGen"
        :number-of-pages="numberOfPages"
        use-router
        align="center"
        class="pb-0"
      ></b-pagination-nav>
    </div>
    <b-modal
      id="modal-delete"
      ref="modalDelete"
      centered
      title="Delete Article"
    >
      <p class="my-4">Are you sure to delete article?</p>
      <template #modal-footer="{ cancel }">
        <b-button variant="outline-secondary" class="px-3" @click="cancel()">
          No
        </b-button>
        <b-button
          variant="danger"
          class="px-3"
          :disabled="isLoadingDelete"
          @click="handleDeleteArticle()"
        >
          Yes
        </b-button>
      </template>
    </b-modal>
  </b-col>
</template>

<script>
import { mapActions } from "vuex";
import indexLayout from "@/layouts/index.vue";
import postsList from "@/components/posts/posts-list.vue";

export default {
  name: "ArticlesView",
  components: {
    postsList,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      posts: [],
      rows: 1,
      isLoadingPosts: false,
      fields: ["index", "title", "author", "tagList", "body", "createdAt"],
      selectedItemSlug: null,
      isLoadingDelete: false,
      isLoadingPage: true,
    };
  },
  computed: {
    routePage() {
      return this.$route.params.page ? +this.$route.params.page : 1;
    },
    numberOfPages() {
      return Math.ceil(this.rows / this.perPage);
    },
  },
  methods: {
    ...mapActions({
      getArticles: "articles/getArticles",
      deleteArticle: "articles/deleteArticle",
    }),
    linkGen(pageNum) {
      return pageNum === 1 ? "/articles" : `/articles/page/${pageNum}`;
    },
    loadArticles() {
      this.isLoadingPosts = true;
      const payload = {
        limit: this.perPage,
        offset: this.currentPage - 1,
      };
      this.getArticles(payload).then((response) => {
        this.posts = response.articles;
        this.isLoadingPosts = false;
        this.isLoadingPage = false;
      });
    },
    getArticlesCount() {
      this.getArticles().then((response) => {
        this.rows = +response.articlesCount;
      });
    },
    setDeletingItem(slug) {
      this.selectedItemSlug = slug;
    },
    handleDeleteArticle() {
      this.isLoadingDelete = true;
      this.deleteArticle(this.selectedItemSlug).then(() => {
        this.isLoadingDelete = false;
        this.$bvModal.hide("modal-delete");
        this.linkGen(1);
        this.getArticlesCount();
        this.loadArticles();
        this.showAlert({
          type: "success",
          title: "",
          message: "Article deleted successfuly",
        });
      });
    },
  },
  created() {
    this.$emit("update:layout", indexLayout);
    this.currentPage = this.routePage;
    this.getArticlesCount();
    this.loadArticles();
  },
  watch: {
    $route() {
      this.currentPage = this.routePage;
      this.loadArticles();
    },
  },
};
</script>
<style lang="scss">
.post-list-view {
  h1 {
    height: 6%;
  }
  .table-container {
    height: 87%;
  }
}
</style>
