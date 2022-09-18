<template>
  <b-container fluid class="h-100">
    <alert-box />
    <slot />
  </b-container>
</template>
<script>
import AlertBox from "@/components/shared/alert-box.vue";

export default {
  name: "AuthLayoutComponent",
  components: {
    AlertBox,
  },
};
</script>
