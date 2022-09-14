import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      userInfo: "auth/userInfo",
    }),
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.errors.has(ref);
      }
      return null;
    },
    showToast(message, title, variant) {
      this.$bvToast.toast(message, {
        title,
        variant,
        solid: true,
      });
    },
  },
};
