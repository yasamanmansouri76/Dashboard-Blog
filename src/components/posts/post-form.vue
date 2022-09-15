<template>
  <div class="post-form">
    <b-form class="my-form">
      <b-row>
        <b-col col lg="8" sm="12">
          <b-form-group label="Title" label-for="title">
            <b-form-input
              id="title"
              name="title"
              v-model="post.title"
              v-validate="{ required: true }"
              :state="validateState('title')"
              aria-describedby="title-feedback"
              data-vv-as="title"
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
            />
            <form-error :errors-text="errors.collect('body')" />
          </b-form-group>
        </b-col>
        <b-col col lg="4" sm="12">
          <b-form-group label="Tags" label-for="tag">
            <b-form-input
              id="tag"
              name="tag"
              v-model="tag"
              placeholder="New tag"
              v-validate="{ required: true }"
              :state="validateState('tag')"
              aria-describedby="tag-feedback"
              data-vv-as="tag"
            />
            <form-error :errors-text="errors.collect('tag')" />
          </b-form-group>
          <div class="border p-2 rounded tags-box">
            <b-form-checkbox-group
              v-model="post.tags"
              :options="tags"
              stacked
              class="mb-3"
              value-field="value"
              text-field="text"
            ></b-form-checkbox-group>
          </div>
        </b-col>
      </b-row>

      <b-button variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import formError from "@/components/shared/form-error.vue";

export default {
  name: "PostForm",
  data() {
    return {
      tag: "",
      tags: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
      post: {
        title: "",
        description: "",
        body: "",
        tags: [],
      },
    };
  },
  components: {
    formError,
  },
};
</script>
<style lang="scss"></style>
