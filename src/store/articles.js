import api from "@/server.js";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getArticles() {
      return api.get("/articles").then((response) => response);
    },
    addArticle(context, payload) {
      return api
        .post("/articles", {
          article: payload,
        })
        .then((response) => response);
    },
  },
};
