import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      alerts: "alert/alerts",
    }),
  },
  methods: {
    ...mapActions({
      showAlert: "alert/showAlert",
    }),
  },
};
