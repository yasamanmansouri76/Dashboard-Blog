<template>
  <div class="my-sidebar bg-blue h-100 py-3">
    <h4 class="text-white font-weight-light px-3">Post</h4>
    <div class="d-flex flex-column">
      <router-link class="text-white px-4 py-2" :to="{ path: '/articles' }"
        >All Articles</router-link
      >
      <router-link class="text-white px-4 py-2" :to="{ name: 'addArticle' }"
        >New Article</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "SideBarComponent",
};
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

.my-sidebar {
  a {
    transition: 0.3s ease;
    &:hover {
      background: $color-soft-blue;
      text-decoration: none;
    }
  }
  .router-link-exact-active {
    background: $color-soft-blue;
  }
}
</style>
