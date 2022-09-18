<template>
  <span>
    <b-toast
      v-for="alert in alerts"
      :key="alert.id"
      :variant="alert.type"
      :toaster="alert.toaster"
      header-class="d-none"
      visible
      solid
    >
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline" />
      <span class="font-weight-bold">
        {{ alert.title }}
      </span>
      {{ alert.message }}
    </b-toast>
  </span>
</template>

<script>
export default {
  name: "AlertBox",
};
</script>
