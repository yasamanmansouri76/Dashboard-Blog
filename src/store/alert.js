export default {
  namespaced: true,
  state: {
    alerts: [],
  },
  getters: {
    alerts(state) {
      return state.alerts;
    },
  },
  mutations: {
    addAlert(state, alert) {
      state.alerts.push(alert);
    },
    removeTopAlert(state) {
      state.alerts.shift();
    },
  },
  actions: {
    showAlert(context, msg) {
      const alert = {
        type: msg.type,
        message: msg.message,
        title: msg.title,
        toaster: "b-toaster-top-right",
      };

      context.commit("addAlert", alert);

      setTimeout(() => {
        context.commit("removeTopAlert");
      }, 5000);
    },
  },
};
