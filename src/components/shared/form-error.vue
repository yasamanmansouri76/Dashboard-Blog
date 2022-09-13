<template>
  <b-form-invalid-feedback>
    <ul class="list-unstyled px-0">
      <li v-for="error in errorsText" :key="error">
        {{ error }}
      </li>
    </ul>
  </b-form-invalid-feedback>
</template>

<script>
export default {
  name: "formError",
  props: {
    errorsText: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
