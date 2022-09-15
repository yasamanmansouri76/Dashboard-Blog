import api from "@/server.js";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getTags() {
      return api.get("/tags").then((response) => response.data);
    },
  },
};
