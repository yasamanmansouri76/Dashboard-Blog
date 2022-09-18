<template>
  <div class="h-100 d-flex flex-column">
    <alert-box />
    <top-nav />
    <div class="d-flex h-100 flex-xl-row flex-column">
      <b-col xl="2" lg="12" class="p-0">
        <side-bar />
      </b-col>
      <b-col xl="10" lg="12">
        <slot />
      </b-col>
    </div>
  </div>
</template>
<script>
import topNav from "@/components/layout/top-nav.vue";
import sideBar from "@/components/layout/side-bar.vue";
import AlertBox from "@/components/shared/alert-box.vue";
import { mapActions } from "vuex";

export default {
  name: "LayoutComponent",
  components: {
    topNav,
    sideBar,
    AlertBox,
  },
  methods: {
    ...mapActions({
      initUser: "auth/initUser",
      getUser: "auth/getUser",
    }),
  },
  created() {
    this.initUser().then(() => {
      this.getUser();
    });
  },
};
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
