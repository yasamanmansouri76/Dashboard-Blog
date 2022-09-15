<template>
  <div>
    <b-form-group label="Tags" label-for="tag">
      <b-form-input
        id="tag"
        name="tag"
        v-model="tag"
        placeholder="New tag"
        @keyup.enter="handleNewTag"
      />
    </b-form-group>
    <div class="border p-2 rounded tags-box">
      <b-form-checkbox-group
        v-model="post.tagList"
        :options="tags"
        stacked
        class="mb-3"
        value-field="value"
        text-field="text"
      ></b-form-checkbox-group>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "TagsList",
  data() {
    return {
      tag: "",
      tags: [],
      post: this.value,
    };
  },
  props: {
    value: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    ...mapActions({
      getTags: "tags/getTags",
    }),
    loadTags() {
      this.getTags().then((response) => {
        this.tags = response.tags;
        this.sortTags();
      });
    },
    handleNewTag() {
      this.tags.push(this.tag);
      this.sortTags();
      this.post.tagList.push(this.tag);
      this.tag = "";
    },
    sortTags() {
      this.tags = this.tags.sort();
    },
  },
  created() {
    this.loadTags();
  },
};
</script>
