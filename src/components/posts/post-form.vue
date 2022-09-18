<template>
  <div class="post-form">
    <b-form class="my-form">
      <b-row>
        <b-col lg="8" sm="12">
          <b-form-group label="Title" label-for="title">
            <b-form-input
              id="title"
              name="title"
              v-model="post.title"
              v-validate="{ required: true }"
              :state="validateState('title')"
              aria-describedby="title-feedback"
              data-vv-as="title"
              placeholder="Title"
            />
            <form-error :errors-text="errors.collect('title')" />
          </b-form-group>
          <b-form-group label="Description" label-for="description">
            <b-form-input
              id="description"
              name="description"
              v-model="post.description"
              v-validate="{ required: true }"
              :state="validateState('description')"
              aria-describedby="description-feedback"
              data-vv-as="description"
              placeholder="Description"
            />
            <form-error :errors-text="errors.collect('description')" />
          </b-form-group>
          <b-form-group label="Body" label-for="body">
            <b-form-textarea
              id="body"
              name="body"
              v-model="post.body"
              rows="3"
              max-rows="6"
              v-validate="{ required: true }"
              :state="validateState('body')"
              aria-describedby="body-feedback"
              data-vv-as="body"
              placeholder="Body"
            />
            <form-error :errors-text="errors.collect('body')" />
          </b-form-group>
        </b-col>
        <b-col lg="4" sm="12">
          <tag-list-view v-model="post" />
        </b-col>
      </b-row>
      <b-button
        class="mt-2"
        variant="primary"
        :disabled="loadingBtn"
        @click="handleSubmit"
      >
        Submit
      </b-button>
    </b-form>
  </div>
</template>

<script>
import formError from "@/components/shared/form-error.vue";
import tagListView from "@/components/posts/tag-list.vue";

export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
    };
  },
  props: {
    loadingBtn: {
      type: Boolean,
      default: false,
      required: true,
    },
    article: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  components: {
    formError,
    tagListView,
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.$emit("submit", this.post);
      });
    },
  },
  created() {
    if (this.article) {
      this.post = this.article;
    }
  },
};
</script>
