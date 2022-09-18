import { mapGetters } from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapGetters({
      userInfo: "auth/userInfo",
    }),
  },
  filters: {
    formatDate(date) {
      return moment(String(date)).format("MMMM DD, YYYY");
    },
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
  },
};
