<template>
  <div class="posts-list">
    <b-table
      ref="table"
      :items="posts"
      :thead-class="'bg-lighten-grey'"
      :busy="isLoading"
      :fields="fields"
      :responsive="true"
      primary-key="slug"
      sticky-header="530px"
      head-variant="light"
      show-empty
    >
      <template #empty>
        <h6 class="text-center mt-3">There is no item!</h6>
      </template>
      <template #head(index)> # </template>
      <template #head(taList)> Tags </template>
      <template #head(body)> Excerpt </template>
      <template #head(createdAt)> Created </template>

      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(author)="data">
        {{ `@${data.value.username}` }}
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
          :disabled="data.item.author.username !== userInfo.username"
        >
          <b-dropdown-item
            @click="
              $router.push({
                name: 'editArticle',
                params: { slug: data.item.slug },
              })
            "
            >Edit</b-dropdown-item
          >
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
    isLoading: {
      type: Boolean,
      default: false,
      required: true,
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
