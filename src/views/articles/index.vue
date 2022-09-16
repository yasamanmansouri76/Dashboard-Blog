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
