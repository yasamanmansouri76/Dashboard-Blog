<template>
  <b-row class="h-100 p-3 flex-column">
    <h1 class="mb-3">All Posts</h1>
    <posts-list
      :posts="posts"
      :per-page="perPage"
      :current-page="currentPage"
      class="mb-3"
    />
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
  </b-row>
</template>

<script>
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
      posts: [
        {
          id: 1,
          first_name: "Fred",
          last_name: "Flintstone",
          created: "June 11, 2019",
        },
        {
          id: 2,
          first_name: "Wilma",
          last_name: "Flintstone",
          created: "June 11, 2019",
        },
        {
          id: 3,
          first_name: "Barney",
          last_name: "Rubble",
          created: "June 11, 2019",
        },
        {
          id: 4,
          first_name: "Betty",
          last_name: "Rubble",
          created: "June 11, 2019",
        },
        {
          id: 5,
          first_name: "Pebbles",
          last_name: "Flintstone",
          created: "June 11, 2019",
        },
        {
          id: 6,
          first_name: "Bamm Bamm",
          last_name: "Rubble",
          created: "June 11, 2019",
        },
        {
          id: 7,
          first_name: "The Great",
          last_name: "Gazzoo",
          created: "June 11, 2019",
        },
        {
          id: 8,
          first_name: "Rockhead",
          last_name: "Slate",
          created: "June 11, 2019",
        },
        {
          id: 9,
          first_name: "Pearl",
          last_name: "Slaghoople",
          created: "June 11, 2019",
        },
      ],
    };
  },
  computed: {
    rows() {
      return this.posts.length;
    },
  },
  created() {
    this.$emit("update:layout", indexLayout);
  },
};
</script>
