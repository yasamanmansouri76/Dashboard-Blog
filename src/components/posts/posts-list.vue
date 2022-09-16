<template>
  <div class="posts-list">
    <b-table
      ref="table"
      :items="posts"
      :thead-class="'bg-lighten-grey'"
      :busy="isLoading"
      :fields="fields"
      primary-key="slug"
    >
      <template #head(index)> # </template>
      <template #head(taList)> Tags </template>
      <template #head(body)> Excerpt </template>
      <template #head(createdAt)> Created </template>

      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(author)="data">
        {{ data.value.username }}
      </template>
      <template #cell(body)="data">
        {{ splitBodySentence(data.value) }}
      </template>
      <template #cell(tagList)="data">
        <span v-for="(tag, index) in data.value" :key="index">
          {{ tag }} ,
        </span>
      </template>
      <template #cell(createdAt)="data">
        {{ data.value | formatDate }}
        <b-dropdown
          right
          text="..."
          variant="primary"
          class="m-2 ml-3 post-dropdown"
        >
          <b-dropdown-item href="#">Edit</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item
            v-b-modal="'modal-delete'"
            @click="setDeletingItem(data.item.slug)"
            >Delete</b-dropdown-item
          >
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
    fields: {
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
    isLoading: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  watch: {
    currentPage() {
      this.$refs.table.refresh();
    },
  },
  methods: {
    splitBodySentence(body) {
      return body.split(" ").slice(0, 20).join(" ");
    },
    setDeletingItem(id) {
      this.$emit("setItem", id);
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
