import api from "@/server.js";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getArticles() {
      return api.get("/articles/feed").then((response) => response);
    },
  },
};
