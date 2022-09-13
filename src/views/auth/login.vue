<template>
  <div>
    <h1>Login</h1>
  </div>
</template>

<script>
import authLayout from "@/layouts/auth.vue";

export default {
  name: "LoginComponent",
  created() {
    this.$emit("update:layout", authLayout);
  },
};
</script>
