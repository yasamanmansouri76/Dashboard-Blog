<template>
  <div class="posts-list">
    <b-table
      :items="posts"
      :per-page="perPage"
      :current-page="currentPage"
      :thead-class="'bg-lighten-grey'"
    >
      <template #cell(created)="data">
        {{ data.value }}
        <b-dropdown
          right
          text="..."
          variant="primary"
          class="m-2 ml-3 post-dropdown"
        >
          <b-dropdown-item href="#">Edit</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">Delete</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  props: {
    posts: {
      type: Array,
      default: () => [],
      required: true,
    },
    perPage: {
      type: Number,
      default: 0,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 1,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

.posts-list {
  .post-dropdown {
    button {
      background-color: $color-mid-blue;
      border-color: $color-mid-blue;
    }
  }
}
</style>
