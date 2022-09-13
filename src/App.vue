<template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>
<script>
export default {
  name: "AppComponent",
  data() {
    return {
      layout: "div",
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
