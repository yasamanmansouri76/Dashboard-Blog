<template>
  <b-row class="h-100 p-3 flex-column">
    <h1 class="mb-3">All Posts</h1>
    <div v-if="isLoadingPosts">loading</div>
    <div>
      <posts-list
        :posts="posts"
        :per-page="perPage"
        :current-page="currentPage"
        :is-loading="isLoadingPosts"
        :fields="fields"
        class="mb-3"
        @setItem="setDeletingItem"
      />
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
        @change="handleChangePage"
      ></b-pagination>
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
  </b-row>
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
      perPage: 3,
      currentPage: 1,
      posts: [],
      rows: 0,
      isLoadingPosts: false,
      fields: ["index", "title", "author", "tagList", "body", "createdAt"],
      selectedItemSlug: null,
      isLoadingDelete: false,
    };
  },
  computed: {
    routePage() {
      return this.$route.params.page ? +this.$route.params.page : 1;
    },
  },
  methods: {
    ...mapActions({
      getArticles: "articles/getArticles",
      deleteArticle: "articles/deleteArticle",
    }),
    handleChangePage(e) {
      this.$router.push({ path: `/articles/page/${e}` }).catch(() => {});
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
      });
    },
    getArticlesCount() {
      this.getArticles().then((response) => {
        this.rows = response.articlesCount;
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
        this.handleChangePage(1);
        this.getArticlesCount();
        this.loadArticles();
        this.showToast("Article deleted successfuly", "Well done!", "success");
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
