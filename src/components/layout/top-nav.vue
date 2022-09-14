<template>
  <div>
    <b-navbar toggleable="lg" class="bg-dark">
      <b-navbar-brand href="#" class="text-white font-weight-light"
        >Arvan Challenge</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <span class="text-white">Welcome {{ userInfo.username }}</span>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button variant="outline-primary" @click="handleLogout"
              >Logout</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "TopNavComponent",
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    handleLogout() {
      this.logout().then(() => this.$router.push({ name: "login" }));
    },
  },
};
</script>
