<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>HomeView</h1>
  </div>
</template>

<script>
import indexLayout from "@/layouts/index.vue";

export default {
  name: "HomeView",
  created() {
    this.$emit("update:layout", indexLayout);
  },
};
</script>
